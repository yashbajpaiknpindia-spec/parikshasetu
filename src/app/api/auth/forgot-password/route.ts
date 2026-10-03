import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { issuePasswordResetToken, resetLinkFor } from "@/lib/password-reset";
import { sendPasswordResetEmail } from "@/lib/email";
import { logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

const GENERIC_MESSAGE = "If an account exists for that email, we have sent a password reset link.";
const WINDOW_MS = 60 * 60 * 1000;
const MAX_EMAILS_PER_HOUR = 5;

function safeNext(value: unknown) {
  const next = String(value ?? "");
  return next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
}

export async function POST(req: Request) {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "not_configured", message: "Password reset is temporarily unavailable." }, { status: 501 });
  }

  let email = "";
  let next = "/dashboard";
  try {
    const body = await req.json();
    email = String(body.email ?? "").trim().toLowerCase();
    next = safeNext(body.next);
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Please enter a valid email address." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email", message: "Please enter a valid email address." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  // Never disclose whether a given email is registered.
  if (!user) return NextResponse.json({ message: GENERIC_MESSAGE });

  const since = new Date(Date.now() - WINDOW_MS);
  const recentRequests = await prisma.activityEvent.count({
    where: { userId: user.id, type: "password_reset_requested", createdAt: { gte: since } },
  });
  if (recentRequests >= MAX_EMAILS_PER_HOUR) return NextResponse.json({ message: GENERIC_MESSAGE });

  try {
    const token = await issuePasswordResetToken(user.id);
    const resetUrl = await resetLinkFor(token, next);
    await sendPasswordResetEmail({ to: user.email, name: user.name, resetUrl });
    await logEvent("password_reset_requested", user.id, { ...requestMeta(req) });
    return NextResponse.json({ message: GENERIC_MESSAGE });
  } catch (error) {
    // Do not leave a live token behind if delivery failed.
    await prisma.passwordResetToken.deleteMany({ where: { userId: user.id } }).catch(() => {});
    await logEvent("password_reset_email_failed", user.id, {
      message: error instanceof Error ? error.message.slice(0, 240) : "unknown_error",
      ...requestMeta(req),
    });
    return NextResponse.json(
      { error: "email_delivery_failed", message: "We could not send the reset email right now. Please try again later or contact support." },
      { status: 503 },
    );
  }
}
