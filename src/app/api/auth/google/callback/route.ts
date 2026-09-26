import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { createSessionCookie, findOrCreateGoogleUser, logEvent, GOOGLE_STATE_COOKIE } from "@/lib/auth-server";
const GOOGLE_NEXT_COOKIE = "ps_oauth_next";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

const GOOGLE_JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/oauth2/v3/certs"));

function baseUrl(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "https";
  return host ? `${proto}://${host}` : new URL(req.url).origin;
}

function toLogin(req: NextRequest, error: string) {
  const url = new URL("/login", baseUrl(req));
  url.searchParams.set("error", error);
  const res = NextResponse.redirect(url);
  res.cookies.delete(GOOGLE_STATE_COOKIE);
  res.cookies.delete(GOOGLE_NEXT_COOKIE);
  return res;
}

/** Step 2: Google redirects back here with `code` + `state`. */
export async function GET(req: NextRequest) {
  if (!isDbConfigured || !process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    return toLogin(req, "google_unavailable");
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const expectedState = req.cookies.get(GOOGLE_STATE_COOKIE)?.value;

  // CSRF guard: the state must round-trip exactly, and Google may also report
  // its own error (e.g. the user hit "Cancel" on the consent screen).
  if (searchParams.get("error") || !code || !state || !expectedState || state !== expectedState) {
    return toLogin(req, "google_failed");
  }

  try {
    const redirectUri = `${baseUrl(req)}/api/auth/google/callback`;
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });
    if (!tokenRes.ok) return toLogin(req, "google_failed");

    const tokenData = (await tokenRes.json()) as { id_token?: string };
    if (!tokenData.id_token) return toLogin(req, "google_failed");

    // Verifying the id_token's signature against Google's published keys proves
    // it really came from Google — no extra call to the userinfo endpoint needed.
    const { payload } = await jwtVerify(tokenData.id_token, GOOGLE_JWKS, {
      issuer: ["https://accounts.google.com", "accounts.google.com"],
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const email = (payload.email as string | undefined)?.trim().toLowerCase();
    const googleId = payload.sub as string | undefined;
    const name = (payload.name as string | undefined) || email?.split("@")[0] || "Student";

    if (!email || !googleId || payload.email_verified === false) {
      return toLogin(req, "google_failed");
    }

    const { user, isNew } = await findOrCreateGoogleUser({ googleId, email, name });
    await prisma.user.update({ where: { id: user.id }, data: { lastSeenAt: new Date() } });
    await createSessionCookie({ sub: user.id, email: user.email, role: user.role });
    await logEvent(isNew ? "signup" : "login", user.id, { email: user.email, provider: "google", ...requestMeta(req) });

    const next = req.cookies.get(GOOGLE_NEXT_COOKIE)?.value;
    const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
    const res = NextResponse.redirect(new URL(safeNext, baseUrl(req)));
    res.cookies.delete(GOOGLE_STATE_COOKIE);
  res.cookies.delete(GOOGLE_NEXT_COOKIE);
    return res;
  } catch {
    return toLogin(req, "google_failed");
  }
}
