import { NextResponse } from "next/server";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { PRODUCT_PRICE, isProduct, isOnSale } from "@/lib/pricing";
import { requestMeta } from "@/lib/request-meta";
import { getMentor } from "@/data/mentors";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "unauthorized", message: "Please log in before purchasing." }, { status: 401 });
  if (!isDbConfigured) return NextResponse.json({ error: "backend_required" }, { status: 501 });

  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ error: "not_configured", message: "Payments are not configured." }, { status: 501 });

  let body: { product?: unknown; amount?: number; notes?: Record<string, string> } = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }

  // Preserve existing mentor-session checkout while all pass prices are server-trusted.
  const isBooking = !!body.notes?.mentor;
  let amount = 0;
  let notes: Record<string, string> = {};

  if (isBooking) {
    const mentorSlug = String(body.notes?.mentor ?? "");
    const mentor = getMentor(mentorSlug);
    if (!mentor) return NextResponse.json({ error: "invalid_mentor", message: "This mentor is not available." }, { status: 400 });
    amount = mentor.pricePerSession;
    notes = { mentor: mentor.slug, slot: String(body.notes?.slot ?? ""), userId: user.id, email: user.email, kind: "booking" };
  } else {
    if (!isProduct(body.product)) return NextResponse.json({ error: "invalid_product" }, { status: 400 });
    const product = body.product;
    if (!isOnSale(product)) return NextResponse.json({ error: "not_on_sale" }, { status: 409 });

    const existing = await prisma.planAccess.findMany({ where: { userId: user.id } });
    const hasMentor = existing.some((x) => x.plan === "mentor");
    const hasPrep = hasMentor || existing.some((x) => x.plan === "prep" || x.plan === "full-access-99" || x.plan === "day-by-day-99");
    if (product === "prep" && hasPrep) return NextResponse.json({ error: "already_owned", message: "Prep Pass is already active on this account." }, { status: 409 });
    if (product === "mentor-upgrade" && !hasPrep) return NextResponse.json({ error: "prep_required" }, { status: 409 });
    if ((product === "mentor" || product === "mentor-upgrade") && hasMentor) return NextResponse.json({ error: "already_owned" }, { status: 409 });

    amount = PRODUCT_PRICE[product];
    notes = { product, userId: user.id, email: user.email };
  }

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const res = await fetch("https://api.razorpay.com/v1/orders", {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `mm_${user.id.slice(-8)}_${Date.now()}`,
      notes,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "razorpay_error", detail: await res.text() }, { status: 502 });
  const order = await res.json();
  await logEvent("payment_order_created", user.id, { amount, product: notes.product ?? "booking", orderId: order.id, ...requestMeta(req) });
  return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency, keyId });
}
