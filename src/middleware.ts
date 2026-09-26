import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "ps_session";

/**
 * Guards /admin/*. Runs in the Edge runtime, so it only checks the JWT's
 * signature + role claim (no Prisma here) — cheap and fast on every request.
 * The actual admin API routes re-verify against the database.
 */
export async function middleware(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const secret = process.env.JWT_SECRET;

  const signIn = () => {
    const url = new URL("/login", req.url);
    url.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  };

  if (!token || !secret) return signIn();

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    if (payload.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  } catch {
    return signIn();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
