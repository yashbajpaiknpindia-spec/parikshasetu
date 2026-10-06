"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExamResult } from "@/data/results";
import { isRecent, statusHi } from "@/lib/results-format";
import { ResultRow } from "@/components/results/ResultRow";

type FilterKey = "exam" | "organisation" | "state" | "year" | "qualification" | "status";
type Sort = "latest" | "exam" | "organisation";

const FILTERS: { key: FilterKey; en: string; hi: string; get: (r: ExamResult) => string | null }[] = [
  { key: "exam", en: "Exam", hi: "परीक्षा", get: (r) => r.exam_name },
  { key: "organisation", en: "Organisation", hi: "संस्था", get: (r) => r.organisation },
  { key: "state", en: "State", hi: "राज्य", get: (r) => r.state },
  { key: "year", en: "Year", hi: "वर्ष", get: (r) => (r.exam_year ? String(r.exam_year) : null) },
  { key: "qualification", en: "Qualification", hi: "योग्यता", get: (r) => r.qualification },
  { key: "status", en: "Result type", hi: "परिणाम प्रकार", get: (r) => r.result_status },
];

const EMPTY: Record<FilterKey, string> = { exam: "", organisation: "", state: "", year: "", qualification: "", status: "" };

export function ResultsExplorer({ results, hi }: { results: ExamResult[]; hi: boolean }) {
  const [q, setQ] = useState("");
  const [f, setF] = useState<Record<FilterKey, string>>(EMPTY);
  const [sort, setSort] = useState<Sort>("latest");
  const [showFilters, setShowFilters] = useState(false);
  const [now, setNow] = useState<number | null>(null); // client-only, avoids hydration mismatch

  // Read ?q=&state=… once, so filtered views can be shared as links.
  useEffect(() => {
    setNow(Date.now());
    const p = new URLSearchParams(window.location.search);
    setQ(p.get("q") ?? "");
    setF((prev) => {
      const next = { ...prev };
      for (const { key } of FILTERS) next[key] = p.get(key) ?? "";
      return next;
    });
    const s = p.get("sort");
    if (s === "exam" || s === "organisation") setSort(s);
  }, []);

  // …and keep the URL in step (replaceState: no history spam, no reload).
  useEffect(() => {
    if (now === null) return;
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    for (const { key } of FILTERS) if (f[key]) p.set(key, f[key]);
    if (sort !== "latest") p.set("sort", sort);
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [q, f, sort, now]);

  const options = useMemo(() => {
    const o = {} as Record<FilterKey, string[]>;
    for (const flt of FILTERS) {
      o[flt.key] = Array.from(new Set(results.map(flt.get).filter((v): v is string => !!v))).sort((a, b) =>
        flt.key === "year" ? Number(b) - Number(a) : a.localeCompare(b),
      );
    }
    return o;
  }, [results]);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const out = results.filter((r) => {
      if (needle) {
        const hay = [r.exam_name, r.organisation, r.state, r.description, r.qualification ?? "", String(r.exam_year ?? "")].join(" ").toLowerCase();
        if (!needle.split(/\s+/).every((w) => hay.includes(w))) return false;
      }
      return FILTERS.every(({ key, get }) => !f[key] || get(r) === f[key]);
    });
    if (sort === "exam") out.sort((a, b) => a.exam_name.localeCompare(b.exam_name));
    else if (sort === "organisation") out.sort((a, b) => a.organisation.localeCompare(b.organisation) || a.exam_name.localeCompare(b.exam_name));
    else out.sort((a, b) => (b.result_date ?? "").localeCompare(a.result_date ?? ""));
    return out;
  }, [results, q, f, sort]);

  const activeCount = FILTERS.filter(({ key }) => f[key]).length;
  const clearAll = () => { setQ(""); setF(EMPTY); setSort("latest"); };

  return (
    <div>
      {/* Search, always visible, big touch target */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" aria-hidden />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={hi ? "परीक्षा, संस्था या रिज़ल्ट खोजें…" : "Search exam, organisation or result…"}
          aria-label={hi ? "रिज़ल्ट खोजें" : "Search results"}
          className="ps-input h-14 rounded-2xl pl-12 pr-4 text-base shadow-sm"
        />
      </div>

      {/* Filter + sort bar */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          aria-expanded={showFilters}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-medium md:hidden",
            activeCount ? "border-brand-300 bg-brand-50 text-brand-800" : "border-ink-300 text-ink-700",
          )}
        >
          <SlidersHorizontal className="h-4 w-4" /> {hi ? "फ़िल्टर" : "Filters"}{activeCount ? ` (${activeCount})` : ""}
        </button>
        <label className="ml-auto inline-flex items-center gap-2 text-sm text-ink-600">
          <span className="hidden sm:inline">{hi ? "क्रम" : "Sort"}</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="ps-input w-auto py-2 text-sm">
            <option value="latest">{hi ? "नवीनतम पहले" : "Latest first"}</option>
            <option value="exam">{hi ? "परीक्षा नाम" : "Exam name"}</option>
            <option value="organisation">{hi ? "संस्था" : "Organisation"}</option>
          </select>
        </label>
      </div>

      <div className={cn("mt-3 grid-cols-2 gap-2 md:grid md:grid-cols-3 lg:grid-cols-6", showFilters ? "grid" : "hidden")}>
        {FILTERS.filter((flt) => options[flt.key].length > 0).map((flt) => (
          <label key={flt.key} className="block">
            <span className="mb-1 block text-xs font-medium text-ink-500">{hi ? flt.hi : flt.en}</span>
            <select
              value={f[flt.key]}
              onChange={(e) => setF((prev) => ({ ...prev, [flt.key]: e.target.value }))}
              className={cn("ps-input py-2 text-sm", f[flt.key] && "border-brand-400 bg-brand-50")}
            >
              <option value="">{hi ? "सभी" : "All"}</option>
              {options[flt.key].map((v) => (
                <option key={v} value={v}>{flt.key === "status" && hi ? statusHi[v as keyof typeof statusHi] ?? v : v}</option>
              ))}
            </select>
          </label>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-ink-500" aria-live="polite">
        <span>
          {hi ? `${list.length} परिणाम` : `${list.length} ${list.length === 1 ? "result" : "results"}`}
        </span>
        {(activeCount > 0 || q) && (
          <button type="button" onClick={clearAll} className="inline-flex items-center gap-1 font-medium text-brand-700 hover:underline">
            <X className="h-3.5 w-3.5" /> {hi ? "सब हटाएँ" : "Clear all"}
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="mt-3 rounded-2xl border border-dashed border-ink-300 p-8 text-center">
          <p className="font-medium text-ink-800">{hi ? "इस श्रेणी में अभी कुछ प्रकाशित नहीं हुआ है।" : "Nothing published in this section yet."}</p>
          <p className="mt-1 text-sm text-ink-500">
            {hi ? "नए अपडेट आते ही यहाँ दिखेंगे। बाकी श्रेणियाँ ऊपर देखें।" : "New updates appear here as soon as they're out. Try the other sections above."}
          </p>
        </div>
      ) : list.length > 0 ? (
        <ul className="mt-3 space-y-3">
          {list.map((r) => <ResultRow key={r.id} r={r} hi={hi} isNew={now !== null && isRecent(r, now)} />)}
        </ul>
      ) : (
        <div className="mt-3 rounded-2xl border border-dashed border-ink-300 p-8 text-center">
          <p className="font-medium text-ink-800">{hi ? "कोई मेल नहीं मिला।" : "Nothing matches that."}</p>
          <p className="mt-1 text-sm text-ink-500">
            {hi ? "कोई और शब्द आज़माएँ या फ़िल्टर हटाएँ।" : "Try a different word, or clear the filters."}
          </p>
          <button type="button" onClick={clearAll} className="mt-4 text-sm font-semibold text-brand-700 hover:underline">
            {hi ? "सब हटाएँ" : "Clear all"}
          </button>
        </div>
      )}
    </div>
  );
}
