import { NextResponse } from "next/server";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { PRODUCT_PRICE, PRODUCT_TIER, isProduct } from "@/lib/pricing";
import { PASS_COOKIE, PASS_COOKIE_MAX_AGE, signPass } from "@/lib/pass-token";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  if (!isDbConfigured) return NextResponse.json({ ok: false, error: "backend_required" }, { status: 501 });
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 501 });

  let paymentId = "";
  try { paymentId = String((await req.json()).paymentId ?? "").trim(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  if (!/^pay_[A-Za-z0-9]{8,40}$/.test(paymentId)) return NextResponse.json({ ok: false }, { status: 400 });

  const headers = { Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}` };
  try {
    const pr = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, { headers });
    if (!pr.ok) return NextResponse.json({ ok: false }, { status: 404 });
    const payment = await pr.json();
    if (payment.status !== "captured" || !payment.order_id) return NextResponse.json({ ok: false }, { status: 404 });
    const or = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(payment.order_id)}`, { headers });
    if (!or.ok) return NextResponse.json({ ok: false }, { status: 404 });
    const order = await or.json();
    const product = order?.notes?.product;
    if (String(order?.notes?.userId ?? "") !== user.id) {
      return NextResponse.json({ ok: false, error: "payment_belongs_to_another_account" }, { status: 403 });
    }
    if (!isProduct(product) || Number(order.amount) !== PRODUCT_PRICE[product] * 100 || Number(payment.amount) !== Number(order.amount)) {
      return NextResponse.json({ ok: false }, { status: 404 });
    }

    const tier = PRODUCT_TIER[product];
    await prisma.planAccess.upsert({
      where: { userId_plan: { userId: user.id, plan: tier } },
      update: { paymentId, orderId: payment.order_id, amount: PRODUCT_PRICE[product] },
      create: { userId: user.id, plan: tier, amount: PRODUCT_PRICE[product], paymentId, orderId: payment.order_id },
    });
    await logEvent("plan_restored", user.id, { tier, paymentId, orderId: payment.order_id, ...requestMeta(req) });
    const res = NextResponse.json({ ok: true, tier });
    if (process.env.PASS_SECRET) res.cookies.set(PASS_COOKIE, signPass(tier), { path: "/", maxAge: PASS_COOKIE_MAX_AGE, sameSite: "lax", secure: process.env.NODE_ENV === "production" });
    return res;
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
