import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth-server";

export const runtime = "nodejs";

export async function GET() {
  if (!isDbConfigured) return NextResponse.json({ hasAccess: false, signedIn: false, demoMode: true, tier: null, subscription: null });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ hasAccess: false, signedIn: false, demoMode: false, tier: null, subscription: null });

  const accesses = await prisma.planAccess.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } });
  const mentor = accesses.find((x) => x.plan === "mentor");
  const prep = accesses.find((x) => ["prep", "full-access-99", "day-by-day-99"].includes(x.plan));
  const access = mentor ?? prep ?? null;
  const tier = mentor ? "mentor" : prep ? "prep" : null;
  return NextResponse.json({
    hasAccess: !!access,
    signedIn: true,
    demoMode: false,
    tier,
    subscription: access ? { plan: access.plan, amount: access.amount, purchasedAt: access.createdAt, paymentId: access.paymentId } : null,
  });
}
