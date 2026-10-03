"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[admin] page runtime error", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl py-16">
      <div className="rounded-2xl border border-danger/20 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-danger/10 text-danger">!</div>
        <h1 className="mt-4 text-xl font-bold text-ink-900">Admin page could not load</h1>
        <p className="mt-2 text-sm text-ink-500">
          A server-side admin operation failed. Try again; your admin account and saved data are not removed by this error.
        </p>
        {error?.message && (
          <details className="mx-auto mt-4 max-w-xl text-left text-xs text-ink-500">
            <summary className="cursor-pointer font-semibold text-ink-700">Technical details</summary>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-ink-50 p-3 whitespace-pre-wrap">{error.message}</pre>
          </details>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button type="button" onClick={() => reset()} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Try again
          </button>
          <Link href="/admin" className="rounded-lg border border-ink-300 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50">
            Admin overview
          </Link>
        </div>
      </div>
    </div>
  );
}
