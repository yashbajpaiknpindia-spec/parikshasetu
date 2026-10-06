import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin, logEvent } from "@/lib/auth-server";
import { getPricingSettings } from "@/lib/pricing-config";

export const runtime = "nodejs";

export async function GET() {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  if (!(await requireAdmin())) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  return NextResponse.json(await getPricingSettings(), { headers: { "Cache-Control": "no-store" } });
}

export async function PUT(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { return NextResponse.json({ error: "bad_request" }, { status: 400 }); }

  const prepPrice = Math.round(Number(body.prepPrice));
  const mentorPrice = Math.round(Number(body.mentorPrice));
  const mentorLive = !!body.mentorLive;
  if (!Number.isFinite(prepPrice) || prepPrice <= 0 || !Number.isFinite(mentorPrice) || mentorPrice <= 0 || mentorPrice < prepPrice || (mentorLive && mentorPrice === prepPrice)) {
    return NextResponse.json({ error: "invalid_pricing", message: "Prices must be positive, mentorship cannot cost less than Prep, and a live mentorship upgrade must have a positive price difference." }, { status: 400 });
  }

  const row = await prisma.pricingConfig.upsert({
    where: { id: 1 },
    update: { prepPrice, mentorPrice, mentorLive, updatedByAdminId: admin.id },
    create: { id: 1, prepPrice, mentorPrice, mentorLive, updatedByAdminId: admin.id },
  });
  const settings = { prepPrice: row.prepPrice, mentorPrice: row.mentorPrice, mentorLive: row.mentorLive };
  await logEvent("pricing_changed", admin.id, settings);
  return NextResponse.json({ ok: true, ...settings });
}
