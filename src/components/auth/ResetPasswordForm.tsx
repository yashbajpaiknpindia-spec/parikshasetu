"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, KeyRound, Loader2 } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { PasswordInput } from "@/components/auth/PasswordInput";

function safeNext(value: string | null) {
  return value && value.startsWith("/") && !value.startsWith("//") ? value : "/dashboard";
}

export function ResetPasswordForm() {
  const router = useRouter();
  const search = useSearchParams();
  const token = search.get("token") ?? "";
  const next = safeNext(search.get("next"));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!token) {
      setError("This password reset link is missing or invalid. Please request a new one.");
      return;
    }
    if (password.length < 8) {
      setError("Your new password must be at least 8 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.message ?? "This reset link is invalid or has expired. Please request a new one.");
        return;
      }
      setDone(true);
      window.setTimeout(() => router.replace(`/login?reset=success&next=${encodeURIComponent(next)}`), 900);
    } catch {
      setError("We could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-6 flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
          <KeyRound className="h-6 w-6" />
        </span>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">Create a new password</h1>
        <p className="mt-1 text-sm leading-6 text-ink-500">Choose a strong password you’ll remember.</p>
      </div>

      <Card>
        {done ? (
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal-700">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-ink-900">Password updated</h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">Your password has been changed successfully. Taking you to login…</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-700">New password</span>
              <PasswordInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={8}
                placeholder="At least 8 characters"
                autoComplete="new-password"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-700">Confirm new password</span>
              <PasswordInput
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                minLength={8}
                placeholder="Type it again"
                autoComplete="new-password"
              />
            </label>
            {error && <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">{error}</p>}
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Reset password"}
            </Button>
          </form>
        )}
      </Card>

      {!done && <p className="mt-5 text-center text-sm text-ink-600"><Link href={`/forgot-password?next=${encodeURIComponent(next)}`} className="font-semibold text-brand-700 hover:underline">Request a new reset link</Link></p>}
    </div>
  );
}
