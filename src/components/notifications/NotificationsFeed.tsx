"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, MapPin, Users, CalendarClock, ArrowRight } from "lucide-react";
import { Card, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  statusMeta,
  type JobNotification,
  type NotificationStatus,
} from "@/data/notifications";

type Filter = "all" | "live" | "upcoming" | "eligibility" | "results";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "live", label: "Applications open" },
  { key: "upcoming", label: "Upcoming" },
  { key: "eligibility", label: "Eligibility tests" },
  { key: "results", label: "Results / next stage" },
];

function matches(n: JobNotification, f: Filter) {
  if (f === "all") return true;
  if (f === "live") return n.status === "open" || n.status === "closing";
  if (f === "upcoming") return n.status === "upcoming" || n.status === "exam-soon";
  if (f === "eligibility") return n.type === "eligibility";
  if (f === "results") return n.status === "results";
  return true;
}

const order: NotificationStatus[] = ["open", "closing", "exam-soon", "upcoming", "results"];

export function NotificationsFeed({ notifications }: { notifications: JobNotification[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(() => {
    return notifications
      .filter((n) => matches(n, filter))
      .sort((a, b) => {
        if (!!b.highlight !== !!a.highlight) return b.highlight ? 1 : -1;
        return order.indexOf(a.status) - order.indexOf(b.status);
      });
  }, [notifications, filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f.key
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-ink-300 text-ink-600 hover:border-ink-400",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {list.map((n) => {
          const st = statusMeta[n.status];
          return (
            <Card key={n.id} className={cn(n.highlight && "ring-2 ring-saffron-300")}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={st.tone}>{st.label}</Badge>
                    <Badge tone={n.type === "eligibility" ? "brand" : "slate"}>
                      {n.type === "eligibility" ? "Eligibility test" : "Recruitment"}
                    </Badge>
                    {n.highlight && <Badge tone="saffron">Major drive</Badge>}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-ink-900">{n.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
                    <MapPin className="h-3.5 w-3.5" /> {n.state} · {n.body}
                  </p>

                  <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                    <p className="text-ink-700"><span className="text-ink-500">Posts:</span> {n.posts}</p>
                    {n.vacancies && (
                      <p className="flex items-center gap-1.5 text-ink-700">
                        <Users className="h-4 w-4 text-brand-500" />
                        <span className="font-semibold">{n.vacancies}</span>
                      </p>
                    )}
                    {n.applyWindow && <p className="text-ink-600"><span className="text-ink-500">Apply:</span> {n.applyWindow}</p>}
                    {n.examDate && (
                      <p className="flex items-center gap-1.5 text-ink-600">
                        <CalendarClock className="h-4 w-4 text-brand-500" /> {n.examDate}
                      </p>
                    )}
                  </div>

                  {n.note && <p className="mt-3 rounded-lg bg-ink-50 p-2.5 text-xs text-ink-600">{n.note}</p>}
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:w-44">
                  {/* Deep links first: where you actually apply / read the notice.
                      The board homepage is only the fallback. */}
                  {n.applyUrl && (
                    <a
                      href={n.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
                    >
                      Apply / Login <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {n.noticeUrl && (
                    <a
                      href={n.noticeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium",
                        n.applyUrl
                          ? "border border-brand-200 bg-brand-50 text-brand-800 hover:bg-brand-100"
                          : "bg-brand-600 text-white hover:bg-brand-700",
                      )}
                    >
                      Official notice <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {!n.applyUrl && !n.noticeUrl && (
                    <a
                      href={n.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
                    >
                      Official website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {n.examSlug && (
                    <Link
                      href={n.examSlug === "kvs" ? "/exam" : `/exams/${n.examSlug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
                    >
                      Prep for this <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  <span className="text-center text-[11px] text-ink-400">Verified {n.lastVerified}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
