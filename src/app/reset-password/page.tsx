import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Reset Password | Merit Marg",
  description: "Create a new password for your Merit Marg account using your secure reset link.",
  path: "/reset-password",
  keywords: ["Merit Marg reset password", "new password"],
  noIndex: true,
});

function LoadingState() {
  return <div className="mx-auto h-[500px] max-w-md animate-pulse rounded-2xl border border-ink-100 bg-white" />;
}

export default function ResetPasswordPage() {
  return (
    <Container className="py-16">
      <Suspense fallback={<LoadingState />}>
        <ResetPasswordForm />
      </Suspense>
    </Container>
  );
}
