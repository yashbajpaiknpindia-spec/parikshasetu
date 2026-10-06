import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata = pageSeo({
  title: "Create a Merit Marg Account",
  description: "Create a free Merit Marg account to sync mock-test progress, access exam preparation resources and manage your learning activity.",
  path: "/signup",
  keywords: ["Merit Marg signup", "teacher exam preparation account"],
  noIndex: true,
});

function AuthFormFallback() {
  return (
    <div className="mx-auto max-w-md">
      <div className="h-[480px] animate-pulse rounded-2xl border border-ink-100 bg-white" />
    </div>
  );
}

export default function SignupPage() {
  return (
    <Container className="py-16">
      <Suspense fallback={<AuthFormFallback />}>
        <AuthForm mode="signup" />
      </Suspense>
    </Container>
  );
}
