import "server-only";

import { createHash, randomBytes } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/lib/config";

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000;

export function hashPasswordResetToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function issuePasswordResetToken(userId: string) {
  const rawToken = randomBytes(32).toString("base64url");
  const tokenHash = hashPasswordResetToken(rawToken);
  const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);

  await prisma.passwordResetToken.deleteMany({ where: { userId } });
  await prisma.passwordResetToken.create({
    data: { userId, tokenHash, expiresAt },
  });

  return rawToken;
}

export async function consumePasswordResetToken(token: string) {
  const tokenHash = hashPasswordResetToken(token);
  const record = await prisma.passwordResetToken.findUnique({ where: { tokenHash } });
  if (!record || record.usedAt || record.expiresAt <= new Date()) return null;
  return record;
}

export async function resetLinkFor(token: string, next = "/dashboard") {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url).replace(/\/$/, "");
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
  return `${base}/reset-password?token=${encodeURIComponent(token)}&next=${encodeURIComponent(safeNext)}`;
}
