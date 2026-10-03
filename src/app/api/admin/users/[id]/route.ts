import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";

export const runtime = "nodejs";

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      attempts: { orderBy: { takenAt: "desc" } },
      bookings: { orderBy: { createdAt: "desc" } },
      planAccess: true,
      events: { orderBy: { createdAt: "desc" } },
    },
  });
  if (!user) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const { passwordHash: _passwordHash, ...safeUser } = user;
  return NextResponse.json({ user: safeUser });
}


export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { id } = await params;
  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }

  const target = await prisma.user.findUnique({ where: { id } });
  if (!target) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const updates: { role?: "USER" | "ADMIN" } = {};
  if (body.role === "USER" || body.role === "ADMIN") {
    if (target.id === admin.id && body.role !== "ADMIN") return NextResponse.json({ error: "cannot_demote_self" }, { status: 400 });
    if (target.role === "ADMIN" && body.role === "USER") {
      const adminCount = await prisma.user.count({ where: { role: "ADMIN" } });
      if (adminCount < 2) return NextResponse.json({ error: "last_admin", message: "Keep at least one other administrator active." }, { status: 400 });
    }
    updates.role = body.role;
  }
  if (Object.keys(updates).length) {
    await prisma.user.update({ where: { id }, data: updates });
    if (updates.role) {
      await logAdminChange(id, admin.id, "admin_role_changed", { role: updates.role });
    }
  }

  if (body.plan !== undefined) {
    const plan = String(body.plan ?? "free");
    const valid = new Set(["free", "prep", "mentor"]);
    if (!valid.has(plan)) return NextResponse.json({ error: "invalid_plan" }, { status: 400 });
    const { getPricingSettings } = await import("@/lib/pricing-config");
    const pricing = await getPricingSettings();

    // Admin grants are disposable; payment-backed entitlements are never deleted or rewritten.
    await prisma.planAccess.deleteMany({
      where: {
        userId: id,
        source: "admin",
        plan: { in: ["prep", "mentor", "full-access-99", "day-by-day-99"] },
      },
    });

    if (plan !== "free") {
      const existing = plan === "mentor"
        ? await prisma.planAccess.findFirst({
            where: { userId: id, plan: "mentor", source: "payment" },
            orderBy: { createdAt: "desc" },
          })
        : await prisma.planAccess.findFirst({
            where: { userId: id, plan: { in: ["prep", "full-access-99", "day-by-day-99"] }, source: "payment" },
            orderBy: { createdAt: "desc" },
          });
      if (!existing) {
        const mentorAlreadyCoversPrep = plan === "prep" && await prisma.planAccess.findFirst({ where: { userId: id, plan: "mentor" } });
        if (!mentorAlreadyCoversPrep) {
          const amount = plan === "mentor" ? pricing.mentorPrice : pricing.prepPrice;
          await prisma.planAccess.create({
            data: {
              userId: id, plan, amount, paymentId: null, orderId: null, source: "admin", assignedByAdminId: admin.id,
            },
          });
        }
      }
    }
    await logAdminChange(id, admin.id, "admin_plan_changed", { plan, amount: plan === "free" ? 0 : plan === "mentor" ? pricing.mentorPrice : pricing.prepPrice });
  }

  const updated = await prisma.user.findUnique({ where: { id }, include: { planAccess: true } });
  return NextResponse.json({ ok: true, user: updated });
}

async function logAdminChange(userId: string, adminId: string, type: string, meta: Record<string, unknown>) {
  const { logEvent } = await import("@/lib/auth-server");
  await logEvent(type, userId, { ...meta, adminId });
}
