import Link from "next/link";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import { Container, Badge, ButtonLink } from "@/components/ui";
import { ResultCategoryTabs } from "@/components/results/ResultCategoryTabs";
import { categoryMeta, RESULT_CATEGORIES } from "@/data/results";
import { getResults } from "@/lib/results-source";
import { fmtDate, statusTone, statusHi } from "@/lib/results-format";

/** Home-page strip: the newest updates across every Results category, one line each. */
export async function HomeLatestResults({ hi, limit = 6 }: { hi: boolean; limit?: number }) {
  const all = await getResults();
  if (all.length === 0) return null;
  const latest = all.slice(0, limit);
  const counts = Object.fromEntries(RESULT_CATEGORIES.map((c) => [c.key, all.filter((r) => r.category === c.key).length]));

  return (
    <section className="py-14" aria-labelledby="home-results">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="brand"><Trophy className="h-3.5 w-3.5" /> {hi ? "रिज़ल्ट" : "Results"}</Badge>
            <h2 id="home-results" className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-ink-900 sm:text-3xl">
              {hi ? "ताज़ा परीक्षा परिणाम" : "Latest exam results"}
            </h2>
            <p className="mt-1 text-sm text-ink-600">
              {hi ? "शिक्षक भर्ती और TET के ताज़ा रिज़ल्ट, प्रवेश पत्र और उत्तर कुंजी। हर बटन आधिकारिक वेबसाइट खोलता है।" : "New results, admit cards and answer keys for teacher exams. Every button opens the official website."}
            </p>
          </div>
          <ButtonLink href="/results" variant="outline" size="sm">
            {hi ? "सभी रिज़ल्ट" : "All results"} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="mt-5">
          <ResultCategoryTabs active="result" hi={hi} counts={counts} highlightActive={false} />
        </div>

        <ul className="card mt-5 divide-y divide-ink-100 overflow-hidden p-0">
          {latest.map((r) => {
            const meta = categoryMeta(r.category);
            const date = fmtDate(r.result_date);
            return (
              <li key={r.id} className="flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <Badge tone={statusTone[r.result_status]} className="px-2 py-0.5">
                      {hi ? statusHi[r.result_status] : r.result_status}
                    </Badge>
                    <span className="font-medium text-ink-600">{hi ? meta.singular.hi : meta.singular.en}</span>
                    <span className="text-ink-400">·</span>
                    <span className="text-ink-500">{r.state}</span>
                    {date && (
                      <>
                        <span className="text-ink-400">·</span>
                        <span className="text-ink-500">{date}</span>
                      </>
                    )}
                  </div>
                  <Link href={`/results/${r.slug}`} className="mt-1 line-clamp-2 font-semibold sm:line-clamp-1 text-ink-900 hover:text-brand-700 hover:underline">
                    {r.exam_name}
                  </Link>
                </div>
                <a
                  href={r.result_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  {hi ? meta.cta.hi : meta.cta.en} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
