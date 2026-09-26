import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { PRODUCT_PRICE, PRODUCT_TIER, isProduct } from "@/lib/pricing";
import { requestMeta } from "@/lib/request-meta";
import { PASS_COOKIE, PASS_COOKIE_MAX_AGE, signPass } from "@/lib/pass-token";
import { getMentor } from "@/data/mentors";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  if (!isDbConfigured) return NextResponse.json({ error: "backend_required" }, { status: 501 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let orderId = "", paymentId = "", signature = "";
  let booking: Record<string, unknown> | undefined;
  let kind = "plan";
  try {
    const body = await req.json();
    orderId = String(body.razorpay_order_id ?? "");
    paymentId = String(body.razorpay_payment_id ?? "");
    signature = String(body.razorpay_signature ?? "");
    booking = body.booking;
    kind = String(body.kind ?? "plan");
  } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }
  if (!orderId || !paymentId || !signature) return NextResponse.json({ error: "missing_payment_reference" }, { status: 400 });

  const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
  const valid = expected.length === signature.length && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  if (!valid) return NextResponse.json({ verified: false, accessGranted: false }, { status: 400 });

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const headers = { Authorization: `Basic ${auth}` };
  const [rr, pr] = await Promise.all([
    fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`, { headers }),
    fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, { headers }),
  ]);
  if (!rr.ok) return NextResponse.json({ error: "order_lookup_failed" }, { status: 502 });
  if (!pr.ok) return NextResponse.json({ error: "payment_lookup_failed" }, { status: 502 });
  const [order, payment] = await Promise.all([rr.json(), pr.json()]);
  if (String(order?.notes?.userId ?? "") !== user.id) return NextResponse.json({ error: "order_user_mismatch" }, { status: 403 });
  if (String(payment?.order_id ?? "") !== orderId || payment?.status !== "captured" || Number(payment?.amount) !== Number(order?.amount)) {
    return NextResponse.json({ error: "payment_not_captured", verified: false }, { status: 400 });
  }

  // Preserve legacy per-mentor bookings.
  if ((kind === "booking" || order?.notes?.kind === "booking") && booking) {
    const mentor = getMentor(String(order?.notes?.mentor ?? booking.mentorSlug ?? ""));
    if (!mentor || Number(order.amount) !== mentor.pricePerSession * 100) {
      return NextResponse.json({ error: "booking_amount_mismatch", verified: false }, { status: 400 });
    }
    const row = await prisma.booking.create({ data: {
      userId: user.id,
      mentorSlug: mentor.slug, mentorName: mentor.name,
      post: mentor.post, subject: mentor.subject,
      date: String(booking.date ?? ""), time: String(booking.time ?? ""), price: mentor.pricePerSession,
      paid: true, paymentId, orderId,
    }});
    await logEvent("booking_created", user.id, { bookingId: row.id, paid: true, paymentId, ...requestMeta(req) });
    return NextResponse.json({ verified: true, accessGranted: false });
  }

  const product = order?.notes?.product;
  if (!isProduct(product) || Number(order.amount) !== PRODUCT_PRICE[product] * 100) {
    return NextResponse.json({ error: "product_or_amount_mismatch", verified: false }, { status: 400 });
  }
  const tier = PRODUCT_TIER[product];
  const access = await prisma.planAccess.upsert({
    where: { userId_plan: { userId: user.id, plan: tier } },
    update: { paymentId, orderId, amount: PRODUCT_PRICE[product] },
    create: { userId: user.id, plan: tier, amount: PRODUCT_PRICE[product], paymentId, orderId },
  });
  await logEvent("plan_purchased", user.id, { tier, product, amount: PRODUCT_PRICE[product], paymentId, orderId, ...requestMeta(req) });

  const res = NextResponse.json({ verified: true, tier, accessGranted: true, access: { plan: access.plan, purchasedAt: access.createdAt } });
  // Compatibility/display cookie only. DB remains the source of truth.
  if (process.env.PASS_SECRET) {
    res.cookies.set(PASS_COOKIE, signPass(tier), { path: "/", maxAge: PASS_COOKIE_MAX_AGE, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
  }
  return res;
}
