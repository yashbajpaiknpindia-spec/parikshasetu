import { NextResponse, type NextRequest } from "next/server";
import { isDbConfigured } from "@/lib/prisma";
import { GOOGLE_STATE_COOKIE } from "@/lib/auth-server";

export const runtime = "nodejs";
export const GOOGLE_NEXT_COOKIE = "ps_oauth_next";

function baseUrl(req: NextRequest) {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "https";
  return host ? `${proto}://${host}` : new URL(req.url).origin;
}

export async function GET(req: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!isDbConfigured || !clientId || !process.env.GOOGLE_CLIENT_SECRET) {
    const url = new URL("/login", baseUrl(req)); url.searchParams.set("error", "google_unavailable"); return NextResponse.redirect(url);
  }
  const state = crypto.randomUUID();
  const redirectUri = `${baseUrl(req)}/api/auth/google/callback`;
  const next = req.nextUrl.searchParams.get("next");
  const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", clientId); authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("response_type", "code"); authUrl.searchParams.set("scope", "openid email profile");
  authUrl.searchParams.set("state", state); authUrl.searchParams.set("prompt", "select_account");
  authUrl.searchParams.set("include_granted_scopes", "true");
  const res = NextResponse.redirect(authUrl);
  const opts = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, maxAge: 600, path: "/" };
  res.cookies.set(GOOGLE_STATE_COOKIE, state, opts); res.cookies.set(GOOGLE_NEXT_COOKIE, safeNext, opts);
  return res;
}
