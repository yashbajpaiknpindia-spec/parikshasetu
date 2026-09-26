import Link from "next/link";
import { ExternalLink, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui";
import { categoryMeta, type ExamResult } from "@/data/results";
import { fmtDate, statusTone, statusHi, extraLinks } from "@/lib/results-format";

/** One scannable row: what, who, when, then the official CHECK RESULT button. */
export function ResultRow({ r, hi, isNew = false }: { r: ExamResult; hi: boolean; isNew?: boolean }) {
  const meta = categoryMeta(r.category);
  const date = fmtDate(r.result_date);
  const extras = extraLinks(r, hi);
  return (
    <li className="card p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge tone={statusTone[r.result_status]} className="px-2.5 py-0.5">
              {hi ? statusHi[r.result_status] : r.result_status}
            </Badge>
            {isNew && <Badge tone="saffron" className="px-2.5 py-0.5">{hi ? "नया" : "New"}</Badge>}
            <span className="inline-flex items-center gap-1 text-xs text-ink-500">
              <MapPin className="h-3 w-3" /> {r.state}
            </span>
          </div>
          <h3 className="mt-2 text-base font-semibold leading-snug text-ink-900 sm:text-lg">
            <Link href={`/results/${r.slug}`} className="hover:text-brand-700 hover:underline">
              {r.exam_name}
            </Link>
          </h3>
          <p className="mt-0.5 text-sm text-ink-600">{r.organisation}</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
            {r.exam_year && <span>{hi ? "वर्ष" : "Year"} <strong className="text-ink-700">{r.exam_year}</strong></span>}
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {date ? <>{hi ? "जारी" : "Published"} <strong className="text-ink-700">{date}</strong></> : (hi ? "तिथि आधिकारिक साइट पर" : "Date on official site")}
            </span>
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:items-end">
          <a
            href={r.result_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            {hi ? meta.cta.hi : meta.cta.en} <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:justify-end">
            {extras.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 font-medium text-teal-700 hover:underline">
                {l.label} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
            <Link href={`/results/${r.slug}`} className="inline-flex items-center gap-0.5 font-medium text-ink-600 hover:text-brand-700">
              {hi ? "विवरण" : "Details"} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
