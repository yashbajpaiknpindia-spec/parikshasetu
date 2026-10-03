import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import type { Prisma } from "@prisma/client";
import { prisma, isDbConfigured } from "@/lib/prisma";

export const SESSION_COOKIE = "ps_session";
const SESSION_DAYS = 30;

/** Short-lived cookie holding the CSRF `state` value for the Google OAuth round trip. */
export const GOOGLE_STATE_COOKIE = "ps_oauth_state";

function secretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error(
      "JWT_SECRET is not set. Required whenever DATABASE_URL is configured (real backend mode).",
    );
  }
  return new TextEncoder().encode(secret);
}

export interface SessionPayload {
  sub: string; // user id
  email: string;
  role: "USER" | "ADMIN";
}

export async function hashPassword(pw: string) {
  return bcrypt.hash(pw, 10);
}

export async function verifyPassword(pw: string, hash: string) {
  return bcrypt.compare(pw, hash);
}

export async function createSessionCookie(payload: SessionPayload) {
  const token = await new SignJWT({ email: payload.email, role: payload.role })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(secretKey());

  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
    path: "/",
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function readSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return {
      sub: payload.sub as string,
      email: payload.email as string,
      role: (payload.role as "USER" | "ADMIN") ?? "USER",
    };
  } catch {
    return null;
  }
}

/** Full current user row, or null (no session / DB not configured / user deleted). */
export async function getCurrentUser() {
  if (!isDbConfigured) return null;
  const session = await readSession();
  if (!session) return null;
  return prisma.user.findUnique({ where: { id: session.sub } });
}

/** Throws-free admin guard for API routes — returns the user or null. */
export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN") return null;
  return user;
}

/**
 * Finds the user for a verified Google sign-in, linking Google to an existing
 * password account with the same email if one exists, otherwise creating a
 * brand-new (password-less) account.
 */
export async function findOrCreateGoogleUser(params: {
  googleId: string;
  email: string;
  name: string;
}) {
  const { googleId, email, name } = params;

  const byGoogleId = await prisma.user.findUnique({ where: { googleId } });
  if (byGoogleId) return { user: byGoogleId, isNew: false };

  const byEmail = await prisma.user.findUnique({ where: { email } });
  if (byEmail) {
    const linked = await prisma.user.update({ where: { id: byEmail.id }, data: { googleId } });
    return { user: linked, isNew: false };
  }

  const created = await prisma.user.create({
    data: { name: name || email.split("@")[0], email, googleId },
  });
  return { user: created, isNew: true };
}

export async function logEvent(type: string, userId?: string | null, meta?: Record<string, unknown>) {
  if (!isDbConfigured) return;
  try {
    await prisma.activityEvent.create({
      data: {
        type,
        userId: userId ?? null,
        meta: (meta as Prisma.InputJsonValue) ?? undefined,
      },
    });
  } catch {
    /* activity logging must never break the request it's logging */
  }
}
