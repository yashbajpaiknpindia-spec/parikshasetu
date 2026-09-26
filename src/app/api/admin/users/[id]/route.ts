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
      attempts: { orderBy: { takenAt: "desc" }, take: 25 },
      bookings: { orderBy: { createdAt: "desc" }, take: 25 },
      planAccess: true,
      events: { orderBy: { createdAt: "desc" }, take: 25 },
    },
  });
  if (!user) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const { passwordHash: _passwordHash, ...safeUser } = user;
  return NextResponse.json({ user: safeUser });
}
