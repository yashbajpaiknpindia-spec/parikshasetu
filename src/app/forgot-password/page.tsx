import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Forgot Password | Merit Marg",
  description: "Securely request a password reset link for your Merit Marg teacher exam preparation account.",
  path: "/forgot-password",
  keywords: ["Merit Marg forgot password", "reset password", "teacher exam account"],
  noIndex: true,
});

function LoadingState() {
  return <div className="mx-auto h-[430px] max-w-md animate-pulse rounded-2xl border border-ink-100 bg-white" />;
}

export default function ForgotPasswordPage() {
  return (
    <Container className="py-16">
      <Suspense fallback={<LoadingState />}>
        <ForgotPasswordForm />
      </Suspense>
    </Container>
  );
}
