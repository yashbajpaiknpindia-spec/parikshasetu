import { NextResponse } from "next/server";
import { isDbConfigured } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth-server";
import { getPaidPlanAccess } from "@/lib/entitlements";

export const runtime = "nodejs";

export async function GET() {
  if (!isDbConfigured) {
    return NextResponse.json({ hasAccess: false, signedIn: false, demoMode: true, tier: null, subscription: null }, { headers: { "Cache-Control": "no-store" } });
  }

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ hasAccess: false, signedIn: false, demoMode: false, tier: null, subscription: null }, { headers: { "Cache-Control": "no-store" } });
  }

  const access = await getPaidPlanAccess(user.id);
  const tier = access?.plan === "mentor" ? "mentor" : access ? "prep" : null;
  return NextResponse.json({
    hasAccess: !!access,
    signedIn: true,
    demoMode: false,
    tier,
    subscription: access ? { plan: access.plan, amount: access.amount, purchasedAt: access.createdAt, paymentId: access.paymentId } : null,
  }, { headers: { "Cache-Control": "no-store" } });
}
