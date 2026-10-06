import { NextResponse } from "next/server";
import { prisma, isDbConfigured } from "@/lib/prisma";
import { consumePasswordResetToken } from "@/lib/password-reset";
import { hashPassword, logEvent } from "@/lib/auth-server";
import { requestMeta } from "@/lib/request-meta";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "not_configured", message: "Password reset is temporarily unavailable." }, { status: 501 });
  }

  let token = "", password = "";
  try {
    const body = await req.json();
    token = String(body.token ?? "").trim();
    password = String(body.password ?? "");
  } catch {
    return NextResponse.json({ error: "bad_request", message: "Invalid password reset request." }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: "invalid_token", message: "This reset link is missing or invalid. Please request a new one." }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ error: "weak_password", message: "Your new password must be at least 8 characters long." }, { status: 400 });
  }

  const resetToken = await consumePasswordResetToken(token);
  if (!resetToken) {
    return NextResponse.json({ error: "expired_token", message: "This reset link is invalid or has expired. Please request a new one." }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const claimedAt = new Date();
  let userId = resetToken.userId;
  try {
    await prisma.$transaction(async (tx) => {
      // Atomically claim the token so two concurrent requests cannot both reset the account.
      const claimed = await tx.passwordResetToken.updateMany({
        where: { id: resetToken.id, usedAt: null, expiresAt: { gt: claimedAt } },
        data: { usedAt: claimedAt },
      });
      if (claimed.count !== 1) throw new Error("RESET_TOKEN_ALREADY_USED");

      await tx.user.update({ where: { id: resetToken.userId }, data: { passwordHash } });
      await tx.passwordResetToken.deleteMany({ where: { userId: resetToken.userId, id: { not: resetToken.id } } });
    });
  } catch (error) {
    if (error instanceof Error && error.message === "RESET_TOKEN_ALREADY_USED") {
      return NextResponse.json({ error: "expired_token", message: "This reset link is invalid or has expired. Please request a new one." }, { status: 400 });
    }
    throw error;
  }

  await logEvent("password_reset_completed", userId, { ...requestMeta(req) });
  return NextResponse.json({ message: "Your password has been reset successfully." });
}
