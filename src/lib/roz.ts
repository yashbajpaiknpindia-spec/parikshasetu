import type { Question } from "@/data/questions";

/**
 * "Roz ka 10" (the daily 10-minute mock) and the "Sunday Sprint" (30 questions, 30
 * minutes, Sundays only). Shared by server and browser; nothing secret here.
 *
 *  - One paper per exam (and subject) per day: everyone on the same exam gets the same
 *    questions that day, so the rank is a real rank.
 *  - No signup to play. The name + mobile ask comes AFTER the result ("save my streak,
 *    put my name on today's board").
 *  - Instant feedback after every tap (the server checks each answer and locks it).
 */
export type RozKind = "roz" | "sprint";

export const ROZ_KINDS: Record<RozKind, { questions: number; minutes: number; name: { en: string; hi: string } }> = {
  roz: { questions: 10, minutes: 10, name: { en: "Roz ka 10", hi: "रोज़ का 10" } },
  sprint: { questions: 30, minutes: 30, name: { en: "Sunday Sprint", hi: "संडे स्प्रिंट" } },
};

export const isRozKind = (v: unknown): v is RozKind => v === "roz" || v === "sprint";

/** Today's date in India, "2026-10-05". */
export function istDate(now = Date.now()): string {
  return new Date(now + 5.5 * 3600_000).toISOString().slice(0, 10);
}
/** 0 = Sunday, in India. */
export const istWeekday = (now = Date.now()) => new Date(now + 5.5 * 3600_000).getUTCDay();
export const isSundayIST = (now = Date.now()) => istWeekday(now) === 0;
/** Next midnight in India (when the next daily paper opens), as a timestamp. */
export function nextIstMidnight(now = Date.now()): number {
  const d = istDate(now);
  return Date.parse(`${d}T00:00:00+05:30`) + 86400_000;
}
/** Next Sunday 00:00 India (today if it is Sunday). */
export function nextSundayStart(now = Date.now()): number {
  const ahead = (7 - istWeekday(now)) % 7;
  return Date.parse(`${istDate(now)}T00:00:00+05:30`) + ahead * 86400_000;
}
/** Whether a kind can be played today. */
export const kindOpen = (kind: RozKind, now = Date.now()) => kind === "roz" || isSundayIST(now);

/* ------------------------------------------------------------ Browser: streak */

const DAYS_KEY = "mm_roz_days";
const WRONG_KEY = "mm_roz_wrong";

/** Days (India dates) on which this browser finished a daily mock or sprint. */
export function readDays(): string[] {
  try {
    const v = JSON.parse(localStorage.getItem(DAYS_KEY) ?? "[]");
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}
export function addDays(days: string[]) {
  try {
    const all = [...new Set([...readDays(), ...days])].sort().slice(-400);
    localStorage.setItem(DAYS_KEY, JSON.stringify(all));
  } catch {}
}

/** Current streak: consecutive days ending today (or yesterday, if today isn't done yet). */
export function streakOf(days: string[], now = Date.now()): { current: number; best: number; doneToday: boolean } {
  const set = new Set(days);
  const day = (offset: number) => istDate(now - offset * 86400_000);
  const doneToday = set.has(day(0));
  let current = 0;
  for (let i = doneToday ? 0 : 1; set.has(day(i)); i++) current++;
  // Best run over the whole history.
  const sorted = [...set].sort();
  let best = 0, run = 0, prev = 0;
  for (const d of sorted) {
    const t = Date.parse(`${d}T00:00:00Z`);
    run = prev && t - prev === 86400_000 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = t;
  }
  return { current, best, doneToday };
}

/* -------------------------------------------- Browser: mistakes come back (spacing) */

export interface WrongItem { q: Question; chose: number | null; at: string; /** times answered right in revision */ ok: number }
/** Revision gaps in days after the mistake: 1, 3, 7. A question leaves after 3 right answers. */
export const REVISE_GAPS = [1, 3, 7];

export function readWrong(): WrongItem[] {
  try {
    const v = JSON.parse(localStorage.getItem(WRONG_KEY) ?? "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}
export function writeWrong(items: WrongItem[]) {
  try { localStorage.setItem(WRONG_KEY, JSON.stringify(items.slice(-200))); } catch {}
}
export function addWrong(items: { q: Question; chose: number | null }[], date: string) {
  const have = new Map(readWrong().map((w) => [w.q.id, w]));
  for (const it of items) have.set(it.q.id, { q: it.q, chose: it.chose, at: date, ok: 0 });
  writeWrong([...have.values()]);
}
/** Mistakes due for revision today. */
export function dueWrong(now = Date.now()): WrongItem[] {
  const today = Date.parse(`${istDate(now)}T00:00:00Z`);
  return readWrong().filter((w) => {
    const gap = REVISE_GAPS[Math.min(w.ok, REVISE_GAPS.length - 1)];
    return today - Date.parse(`${w.at}T00:00:00Z`) >= gap * 86400_000;
  });
}
