import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth-server";
import { isDbConfigured } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const googleEnabled =
    isDbConfigured && !!process.env.GOOGLE_CLIENT_ID && !!process.env.GOOGLE_CLIENT_SECRET;

  if (!isDbConfigured) {
    return NextResponse.json({ user: null, demoMode: true, googleEnabled: false });
  }
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ user: null, demoMode: false, googleEnabled });
  // Refresh presence whenever the app restores a valid session.
  const { prisma } = await import("@/lib/prisma");
  await prisma.user.update({ where: { id: user.id }, data: { lastSeenAt: new Date() } }).catch(() => {});
  return NextResponse.json({
    user: { name: user.name, email: user.email, role: user.role },
    demoMode: false,
    googleEnabled,
  });
}
