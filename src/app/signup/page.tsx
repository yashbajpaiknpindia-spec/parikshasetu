import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Create a free account",
  description: "Start free with the KVS exam guide and a diagnostic mock test on Merit Marg.",
};

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
