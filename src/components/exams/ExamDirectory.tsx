"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, MapPin, Users } from "lucide-react";
import { Card, Badge, ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";
import { statusMeta, type Exam } from "@/lib/exams/types";

export function ExamDirectory({ exams, regions }: { exams: Exam[]; regions: string[] }) {
  const [region, setRegion] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filters = ["All", ...regions];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return exams.filter((e) => {
      const okRegion = region === "All" || e.region === region;
      const okQuery =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.shortName.toLowerCase().includes(q) ||
        e.body.toLowerCase().includes(q) ||
        e.levels.join(" ").toLowerCase().includes(q) ||
        e.region.toLowerCase().includes(q);
      return okRegion && okQuery;
    });
  }, [exams, region, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((r) => (
            <button
              key={r}
              onClick={() => setRegion(r)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                region === r
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-ink-300 text-ink-600 hover:border-ink-400",
              )}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="relative sm:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exam, state or post…"
            className="w-full rounded-xl border border-ink-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-ink-500">No exams match that filter yet.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => {
            const st = statusMeta[e.status];
            return (
              <Card key={e.slug} hover className={cn("flex flex-col", e.priority && "ring-2 ring-saffron-300")}>
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                    {e.shortName}
                  </span>
                  <Badge tone={st.tone}>{e.statusLabel}</Badge>
                </div>

                <h2 className="mt-3 text-lg font-semibold text-ink-900">{e.name}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="h-3.5 w-3.5" /> {e.region} · {e.body}
                </p>

                <p className="mt-3 flex-1 text-sm text-ink-600">{e.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.levels.slice(0, 4).map((l) => (
                    <Badge key={l} tone="slate">{l}</Badge>
                  ))}
                </div>

                {(e.vacancies || e.examWindow) && (
                  <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    {e.vacancies && (
                      <div className="rounded-lg bg-ink-50 px-3 py-2">
                        <dt className="flex items-center gap-1 text-ink-500"><Users className="h-3 w-3" /> Vacancies</dt>
                        <dd className="mt-0.5 font-bold text-ink-900">{e.vacancies}</dd>
                      </div>
                    )}
                    {e.examWindow && (
                      <div className="rounded-lg bg-ink-50 px-3 py-2">
                        <dt className="text-ink-500">Exam</dt>
                        <dd className="mt-0.5 font-semibold text-ink-900">{e.examWindow}</dd>
                      </div>
                    )}
                  </dl>
                )}

                <ButtonLink href={e.hubHref} className="mt-5" size="sm">
                  Open guide <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
