import "server-only";

import { siteConfig } from "@/lib/config";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function sendPasswordResetEmail(params: { to: string; name: string; resetUrl: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    throw new Error("Password reset email is not configured. Set RESEND_API_KEY and EMAIL_FROM.");
  }

  const safeName = escapeHtml(params.name || "there");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [params.to],
      subject: `Reset your ${siteConfig.name} password`,
      text: `Hi ${params.name || "there"},\n\nWe received a request to reset your ${siteConfig.name} password. Use this link within 1 hour:\n${params.resetUrl}\n\nIf you did not request this, you can ignore this email.`,
      html: `<!doctype html><html><body style="margin:0;background:#f7f7fb;padding:32px;font-family:Arial,sans-serif;color:#101828"><div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:32px"><div style="font-weight:800;font-size:22px">${escapeHtml(siteConfig.name)}</div><p style="font-size:16px;line-height:1.6;margin-top:28px">Hi ${safeName},</p><p style="font-size:15px;line-height:1.6;color:#475467">We received a request to reset your password. This secure link expires in 1 hour.</p><p style="margin:28px 0"><a href="${escapeHtml(params.resetUrl)}" style="display:inline-block;background:#315ee7;color:#fff;text-decoration:none;padding:13px 20px;border-radius:10px;font-weight:700">Reset password</a></p><p style="font-size:13px;line-height:1.6;color:#667085">If you did not request this, you can safely ignore this email. Your existing password will remain unchanged.</p></div></body></html>`,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    throw new Error(`Resend rejected the password reset email (${response.status}): ${details.slice(0, 300)}`);
  }
}
