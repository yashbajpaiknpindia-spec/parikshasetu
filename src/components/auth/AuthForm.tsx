"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Loader2 } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { useAuth } from "@/components/auth/AuthProvider";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const search = useSearchParams();
  const { signIn, signUp, demoMode, googleEnabled } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(search.get("error") === "google_failed" ? "Google sign-in failed. Please try again." : "");
  const [loading, setLoading] = useState(false);
  const isSignup = mode === "signup";
  const requestedNext = search.get("next");
  const next = requestedNext && requestedNext.startsWith("/") && !requestedNext.startsWith("//") ? requestedNext : "/dashboard";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = isSignup ? await signUp(name, email, password) : await signIn(email, password);
    setLoading(false);
    if (res.error) { setError(res.error); return; }
    router.push(next);
    router.refresh();
  }

  const googleHref = `/api/auth/google?next=${encodeURIComponent(next)}`;

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-6 flex flex-col items-center text-center">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white"><GraduationCap className="h-6 w-6" /></span>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">{isSignup ? "Create your free account" : "Welcome back"}</h1>
        <p className="mt-1 text-sm text-ink-500">{isSignup ? "Start with the exam guide and your two free mocks." : "Log in to your dashboard, mocks, purchases and mentor bookings."}</p>
      </div>

      <Card>
        {googleEnabled && !demoMode && (
          <>
            <a href={googleHref} className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink-300 bg-white px-4 py-3 text-sm font-semibold text-ink-800 hover:bg-ink-50">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.23c1.89-1.74 2.99-4.31 2.99-7.38Z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.89 6.61-2.39l-3.23-2.51c-.89.6-2.03.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12H3.07v2.59A9.99 9.99 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.4 13.94A6.01 6.01 0 0 1 6.08 12c0-.67.12-1.32.32-1.94V7.47H3.07A10 10 0 0 0 2 12c0 1.61.39 3.14 1.07 4.53l3.33-2.59Z"/><path fill="#EA4335" d="M12 5.94c1.47 0 2.78.5 3.82 1.49l2.86-2.86C16.95 2.96 14.69 2 12 2a9.99 9.99 0 0 0-8.93 5.47l3.33 2.59c.79-2.36 3-4.12 5.6-4.12Z"/></svg>
              Continue with Google
            </a>
            <div className="my-4 flex items-center gap-3 text-xs text-ink-400"><span className="h-px flex-1 bg-ink-200" /><span>or</span><span className="h-px flex-1 bg-ink-200" /></div>
          </>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {isSignup && <Field label="Full name"><input value={name} onChange={(e) => setName(e.target.value)} required className="ps-input" placeholder="Your name" /></Field>}
          <Field label="Email"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="ps-input" placeholder="you@example.com" /></Field>
          <Field label="Password"><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="ps-input" placeholder="••••••••" /></Field>
          {error && <p className="text-sm text-danger">{error}</p>}
          <Button type="submit" className="w-full" size="lg" disabled={loading}>{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : isSignup ? "Create account" : "Log in"}</Button>
        </form>

        {demoMode && <p className="mt-4 rounded-lg bg-amber-50 p-2.5 text-center text-xs text-amber-800">Demo mode is active because the production database is not configured. Configure DATABASE_URL and JWT_SECRET before launch.</p>}
      </Card>

      <p className="mt-5 text-center text-sm text-ink-600">
        {isSignup ? <>Already have an account? <Link href={`/login?next=${encodeURIComponent(next)}`} className="font-semibold text-brand-700">Log in</Link></> : <>New here? <Link href={`/signup?next=${encodeURIComponent(next)}`} className="font-semibold text-brand-700">Create a free account</Link></>}
      </p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-sm font-medium text-ink-700">{label}</span>{children}</label>;
}
