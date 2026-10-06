import { requestMeta } from "@/lib/request-meta";
import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { hashPassword, createSessionCookie, logEvent } from "@/lib/auth-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }
  let name = "", email = "", password = "";
  try {
    const body = await req.json();
    name = String(body.name ?? "").trim();
    email = String(body.email ?? "").trim().toLowerCase();
    password = String(body.password ?? "");
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json({ error: "weak_password", message: "Password must be at least 6 characters." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "email_taken", message: "An account with this email already exists." }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const displayName = name || email.split("@")[0];
  const user = await prisma.user.create({
    data: { name: displayName, email, passwordHash },
  });

  await createSessionCookie({ sub: user.id, email: user.email, role: user.role });
  await logEvent("signup", user.id, { email: user.email, ...requestMeta(req) });

  return NextResponse.json({ user: { name: user.name, email: user.email, role: user.role } });
}
