import { NextResponse } from "next/server";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ ok: true });
  let path = "";
  try { const body = await req.json(); path = String(body.path ?? "").slice(0, 300); } catch {}
  if (path) {
    await Promise.all([
      logEvent("page_view", user.id, { path, ...requestMeta(req) }),
      prisma.user.update({ where: { id: user.id }, data: { lastSeenAt: new Date() } }).catch(() => null),
    ]);
  }
  return NextResponse.json({ ok: true });
}
