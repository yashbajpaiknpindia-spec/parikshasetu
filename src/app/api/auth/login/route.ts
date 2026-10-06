import { requestMeta } from "@/lib/request-meta";
import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { verifyPassword, hashPassword, createSessionCookie, logEvent } from "@/lib/auth-server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }
  let email = "", password = "";
  try {
    const body = await req.json();
    email = String(body.email ?? "").trim().toLowerCase();
    password = String(body.password ?? "");
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Admin env credentials are authoritative. This also self-heals an older
  // seeded admin whose passwordHash was stale or whose account was first made by Google.
  const adminEmail = (process.env.ADMIN_EMAIL ?? process.env.ADMIN_ID ?? "").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";
  if (adminEmail && email === adminEmail && adminPassword && password === adminPassword) {
    const passwordHash = await hashPassword(adminPassword);
    const admin = await prisma.user.upsert({
      where: { email: adminEmail },
      update: { role: "ADMIN", passwordHash, name: process.env.ADMIN_NAME || "Admin", lastSeenAt: new Date() },
      create: { email: adminEmail, name: process.env.ADMIN_NAME || "Admin", role: "ADMIN", passwordHash },
    });
    await createSessionCookie({ sub: admin.id, email: admin.email, role: "ADMIN" });
    await logEvent("login", admin.id, { email: admin.email, admin: true, ...requestMeta(req) });
    return NextResponse.json({ user: { name: admin.name, email: admin.email, role: admin.role } });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "invalid_credentials", message: "Incorrect email or password." }, { status: 401 });
  }
  if (!user.passwordHash) {
    return NextResponse.json(
      { error: "google_account", message: "This account uses Google sign-in. Continue with Google instead." },
      { status: 401 },
    );
  }
  if (!(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: "invalid_credentials", message: "Incorrect email or password." }, { status: 401 });
  }

  await prisma.user.update({ where: { id: user.id }, data: { lastSeenAt: new Date() } });
  await createSessionCookie({ sub: user.id, email: user.email, role: user.role });
  await logEvent("login", user.id, { email: user.email, ...requestMeta(req) });

  return NextResponse.json({ user: { name: user.name, email: user.email, role: user.role } });
}
