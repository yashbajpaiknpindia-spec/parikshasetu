"use client";

/**
 * Local attempt history (per-browser). In production this is persisted to
 * Supabase per user; here it powers the dashboard in demo mode without a backend.
 */

export interface SavedAttempt {
  testId: string;
  testTitle: string;
  post: string;
  cycle: string;
  score: number;
  maxScore: number;
  correct: number;
  wrong: number;
  unattempted: number;
  total: number;
  weakTopics: string[];
  takenAt: string; // ISO
  /** The chosen option index per question id (null = skipped). Lets us re-render the
   *  full analysis when a past attempt is reopened, the test re-composes identically
   *  (seeded), so these answers still line up. Optional for older saved attempts. */
  answers?: Record<string, number | null>;
}

const KEY = "ps_attempts";

export function getAttempts(): SavedAttempt[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as SavedAttempt[]) : [];
  } catch {
    return [];
  }
}

/** All attempts for one test, newest first. */
export function getAttemptsForTest(testId: string): SavedAttempt[] {
  return getAttempts().filter((a) => a.testId === testId);
}

/** The most recent attempt for a test, or null. */
export function getLatestAttempt(testId: string): SavedAttempt | null {
  return getAttemptsForTest(testId)[0] ?? null;
}

export function saveAttempt(a: SavedAttempt) {
  try {
    const all = getAttempts();
    all.unshift(a);
    localStorage.setItem(KEY, JSON.stringify(all.slice(0, 100)));
  } catch {
    /* ignore */
  }
}
