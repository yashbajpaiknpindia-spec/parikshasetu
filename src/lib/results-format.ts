import type { ExamResult, ResultStatus } from "@/data/results";

const dateFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** "2026-09-22" → "22 Sep 2026" (UTC, so it never shifts a day). */
export function fmtDate(iso: string | null | undefined) {
  if (!iso) return null;
  const d = new Date(iso.length === 10 ? iso + "T00:00:00Z" : iso);
  return Number.isNaN(d.getTime()) ? null : dateFmt.format(d);
}

export const statusTone: Record<ResultStatus, "green" | "amber" | "brand" | "saffron" | "slate"> = {
  Declared: "green",
  Final: "green",
  Provisional: "amber",
  Released: "brand",
  Revised: "saffron",
};

export const statusHi: Record<ResultStatus, string> = {
  Declared: "घोषित",
  Final: "अंतिम",
  Provisional: "अनंतिम",
  Released: "जारी",
  Revised: "संशोधित",
};

/** Published within the last `days` days of `now`. */
export function isRecent(r: ExamResult, now: number, days = 7) {
  if (!r.result_date) return false;
  const t = new Date(r.result_date + "T00:00:00Z").getTime();
  return now - t >= 0 && now - t <= days * 86400000;
}

/** JSON-LD for a <script> tag. Escapes "<" so a record can never close the tag early. */
export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Secondary official links that exist for a record. */
export function extraLinks(r: ExamResult, hi: boolean) {
  return [
    r.scorecard_url && { label: hi ? "स्कोरकार्ड" : "Scorecard", url: r.scorecard_url },
    r.cutoff_url && { label: hi ? "कट ऑफ़" : "Cut-off", url: r.cutoff_url },
    r.merit_list_url && { label: hi ? "मेरिट सूची" : "Merit list", url: r.merit_list_url },
  ].filter(Boolean) as { label: string; url: string }[];
}
