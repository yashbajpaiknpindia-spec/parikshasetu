import { cookies } from "next/headers";
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getCurrentUser, logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";
import { prisma, isDbConfigured } from "@/lib/prisma";

export const runtime = "nodejs";
const VISITOR_COOKIE = "ps_visitor";
const VISITOR_MAX_AGE = 60 * 60 * 24 * 400;

export async function POST(req: Request) {
  if (!isDbConfigured) return NextResponse.json({ ok: true, demoMode: true });
  const currentUser = await getCurrentUser();
  let path = "";
  try { path = String((await req.json()).path ?? "").slice(0, 300); } catch {}
  if (!path) return NextResponse.json({ ok: true });

  const meta = requestMeta(req);
  if (currentUser) {
    await Promise.all([
      logEvent("page_view", currentUser.id, { path, ...meta }),
      prisma.user.update({ where: { id: currentUser.id }, data: { lastSeenAt: new Date() } }).catch(() => null),
    ]);
    return NextResponse.json({ ok: true, authenticated: true });
  }

  const store = await cookies();
  const storedVisitorId = store.get(VISITOR_COOKIE)?.value;
  const visitorId = storedVisitorId && storedVisitorId.length <= 80 ? storedVisitorId : randomUUID();

  await Promise.all([
    prisma.guestVisit.create({ data: { visitorId, path, ...meta } }),
    logEvent("guest_page_view", null, { visitorId, path, ...meta }),
  ]);

  const response = NextResponse.json({ ok: true, authenticated: false });
  if (!storedVisitorId || storedVisitorId.length > 80) {
    response.cookies.set(VISITOR_COOKIE, visitorId, {
      path: "/", maxAge: VISITOR_MAX_AGE, sameSite: "lax",
      secure: process.env.NODE_ENV === "production", httpOnly: true,
    });
  }
  return response;
}
