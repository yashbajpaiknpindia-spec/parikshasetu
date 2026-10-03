import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "ps_session";

/**
 * Guards /admin/*. Runs in the Edge runtime, so it only checks that a session
 * JWT is valid. Authorization itself stays server-side in requireAdmin(),
 * which reads the current PostgreSQL role. This keeps role changes effective
 * without forcing the promoted user to log out and back in.
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
    // Do not trust the role claim for authorization here. Roles can change
    // while a user is already signed in (for example, an admin promotes a
    // user from the Admin → Users screen). The server-side admin pages and
    // APIs re-check the current PostgreSQL role with requireAdmin().
    await jwtVerify(token, new TextEncoder().encode(secret));
    return NextResponse.next();
  } catch {
    return signIn();
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
