import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { hashPassword, logEvent, requireAdmin } from "@/lib/auth-server";
import { getPricingSettings } from "@/lib/pricing-config";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const plan = String(body.plan ?? "free");
  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
    return NextResponse.json({ error: "invalid_admin", message: "Name, valid email and a password of at least 6 characters are required." }, { status: 400 });
  }
  if (!["free", "prep", "mentor"].includes(plan)) return NextResponse.json({ error: "invalid_plan" }, { status: 400 });

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "email_taken", message: "That email already has an account. Promote it from Users instead." }, { status: 409 });

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({ data: { name, email, passwordHash, role: "ADMIN" } });
  if (plan !== "free") {
    const pricing = await getPricingSettings();
    await prisma.planAccess.create({
      data: { userId: user.id, plan, amount: plan === "mentor" ? pricing.mentorPrice : pricing.prepPrice, paymentId: null, orderId: null, source: "admin", assignedByAdminId: admin.id },
    });
  }
  await logEvent("admin_created", user.id, { createdByAdminId: admin.id, plan });
  return NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email, role: user.role, plan } });
}
