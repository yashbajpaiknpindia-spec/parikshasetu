import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-server";

export const runtime = "nodejs";

export async function GET(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") ?? undefined;
  const events = await prisma.activityEvent.findMany({
    where: type ? { type } : {},
    orderBy: { createdAt: "desc" },
    take: 100,
    include: { user: { select: { name: true, email: true } } },
  });
  return NextResponse.json({ events });
}
