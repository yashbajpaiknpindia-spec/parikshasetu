"use client";

import type { SavedAttempt } from "@/lib/attempts";

// Kept under the old module name so existing imports do not need to change.
// The real source of truth is now the app's authenticated Prisma API, which is
// also what the admin dashboard reads.
export async function pushAttempt(a: SavedAttempt): Promise<void> {
  try {
    await fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a),
    });
  } catch { /* local history still works offline */ }
}

export async function pullAttempts(): Promise<SavedAttempt[]> {
  try {
    const res = await fetch("/api/attempts", { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.attempts ?? []).map((r: Record<string, unknown>) => ({
      testId: String(r.testId ?? ""), testTitle: String(r.testTitle ?? ""),
      post: String(r.post ?? ""), cycle: String(r.cycle ?? ""), score: Number(r.score ?? 0),
      maxScore: Number(r.maxScore ?? 0), correct: Number(r.correct ?? 0), wrong: Number(r.wrong ?? 0),
      unattempted: Number(r.unattempted ?? 0), total: Number(r.total ?? 0),
      weakTopics: Array.isArray(r.weakTopics) ? r.weakTopics as string[] : [],
      takenAt: String(r.takenAt ?? ""), answers: (r.answers ?? undefined) as SavedAttempt["answers"],
    }));
  } catch { return []; }
}
