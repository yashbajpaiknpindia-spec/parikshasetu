import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { AuthForm } from "@/components/auth/AuthForm";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Merit Marg dashboard, mock tests and mentor bookings.",
};

function AuthFormFallback() {
  return (
    <div className="mx-auto max-w-md">
      <div className="h-[480px] animate-pulse rounded-2xl border border-ink-100 bg-white" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Container className="py-16">
      <Suspense fallback={<AuthFormFallback />}>
        <AuthForm mode="login" />
      </Suspense>
    </Container>
  );
}
