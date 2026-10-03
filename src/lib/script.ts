/**
 * Urdu (Arabic script, right-to-left) and Bangla questions need their own direction
 * and font. `scriptOf` looks at the text itself, so any question in those scripts is
 * shown correctly wherever it appears (test, review, analysis).
 */
const ARABIC = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;
const BENGALI = /[ঀ-৿]/;

export function scriptOf(text: string | undefined | null): { dir?: "rtl"; className: string } {
  if (!text) return { className: "" };
  if (ARABIC.test(text)) return { dir: "rtl", className: "script-urdu" };
  if (BENGALI.test(text)) return { className: "script-bangla" };
  return { className: "" };
}
