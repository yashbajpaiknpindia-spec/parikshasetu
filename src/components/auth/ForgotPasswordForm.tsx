"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, KeyRound, Loader2, MailCheck } from "lucide-react";
import { Button, Card } from "@/components/ui";

function safeNext(value: string | null) {
  return value && value.startsWith("/") && !value.startsWith("//") ? value : "/dashboard";
}

export function ForgotPasswordForm() {
  const search = useSearchParams();
  const next = safeNext(search.get("next"));
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setMessage("");
    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, next }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus("error");
        setMessage(data.message ?? "Password reset is temporarily unavailable. Please try again later.");
        return;
      }
      setStatus("sent");
      setMessage(data.message ?? "If an account exists for that email, we have sent a password reset link.");
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please check your connection and try again.");
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
        <h1 className="mt-4 text-2xl font-bold text-ink-900">Forgot your password?</h1>
        <p className="mt-1 text-sm leading-6 text-ink-500">Enter the email on your account and we’ll send a secure reset link.</p>
      </div>

      <Card>
        {status === "sent" ? (
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-teal-50 text-teal-700">
              <MailCheck className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-ink-900">Check your email</h2>
            <p className="mt-2 text-sm leading-6 text-ink-600">{message}</p>
            <p className="mt-3 text-xs leading-5 text-ink-500">For security, the same message is shown whether or not an account exists for that email.</p>
            <Link href={`/login?next=${encodeURIComponent(next)}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="ps-input"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
            {message && <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">{message}</p>}
            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send reset link"}
            </Button>
          </form>
        )}
      </Card>

      {status !== "sent" && (
        <p className="mt-5 text-center text-sm text-ink-600">
          Remembered it? <Link href={`/login?next=${encodeURIComponent(next)}`} className="font-semibold text-brand-700 hover:underline">Back to login</Link>
        </p>
      )}
    </div>
  );
}
