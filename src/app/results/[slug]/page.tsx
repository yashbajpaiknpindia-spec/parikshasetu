import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExternalLink, ShieldCheck, CalendarDays, Building2, MapPin, GraduationCap, Info, ArrowRight, Globe,
} from "lucide-react";
import { Container, Badge, Card } from "@/components/ui";
import { ResultRow } from "@/components/results/ResultRow";
import { categoryMeta, seedResults } from "@/data/results";
import { getResults, getResultBySlug } from "@/lib/results-source";
import { fmtDate, statusTone, statusHi, safeJsonLd } from "@/lib/results-format";
import { getExam } from "@/lib/exams/registry";
import { getLang } from "@/lib/i18n-server";
import { siteConfig } from "@/lib/config";

export const revalidate = 3600;
// Records added later (database / feed) render on first visit, then get cached.
export const dynamicParams = true;

export function generateStaticParams() {
  return seedResults.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/results/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = await getResultBySlug(slug);
  if (!r) return { title: "Result not found" };
  const what = categoryMeta(r.category).singular.en;
  return {
    title: `${r.exam_name}: ${r.result_status}`,
    description: `${r.exam_name} (${r.organisation}): ${what.toLowerCase()} ${r.result_status.toLowerCase()}${r.result_date ? ` on ${fmtDate(r.result_date)}` : ""}. Official links, important dates and what to do next.`,
    alternates: { canonical: `/results/${r.slug}` },
  };
}

export default async function ResultDetailPage({ params }: PageProps<"/results/[slug]">) {
  const { slug } = await params;
  const r = await getResultBySlug(slug);
  if (!r) notFound();
  const hi = (await getLang()) === "hi";
  const meta = categoryMeta(r.category);
  const hub = r.exam_slug ? getExam(r.exam_slug) : undefined;
  // Same state first (the reader's own exams), then the same kind of update.
  const related = (await getResults())
    .filter((x) => x.id !== r.id && (x.state === r.state || x.category === r.category))
    .sort((a, b) => Number(b.state === r.state) - Number(a.state === r.state))
    .slice(0, 4);

  const officialLinks = [
    { label: hi ? meta.cta.hi : meta.cta.en, url: r.result_url, primary: true },
    { label: hi ? "स्कोरकार्ड" : "Scorecard", url: r.scorecard_url },
    { label: hi ? "कट ऑफ़" : "Cut-off", url: r.cutoff_url },
    { label: hi ? "मेरिट सूची" : "Merit list", url: r.merit_list_url },
    { label: hi ? "आधिकारिक वेबसाइट" : "Official website", url: r.official_website },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Results", item: `${siteConfig.url}/results` },
      ...(r.category !== "result" ? [{ "@type": "ListItem", position: 3, name: meta.label.en, item: `${siteConfig.url}${meta.path}` }] : []),
      { "@type": "ListItem", position: r.category !== "result" ? 4 : 3, name: r.exam_name, item: `${siteConfig.url}/results/${r.slug}` },
    ],
  };

  const facts = [
    { icon: Building2, label: hi ? "संस्था" : "Organisation", value: r.organisation },
    { icon: MapPin, label: hi ? "राज्य" : "State", value: r.state },
    { icon: CalendarDays, label: hi ? "परीक्षा तिथि" : "Exam date", value: fmtDate(r.exam_date) ?? (hi ? "आधिकारिक साइट देखें" : "See official site") },
    { icon: CalendarDays, label: hi ? "जारी होने की तिथि" : "Published on", value: fmtDate(r.result_date) ?? (hi ? "आधिकारिक साइट देखें" : "See official site") },
    ...(r.qualification ? [{ icon: GraduationCap, label: hi ? "योग्यता" : "Qualification", value: r.qualification }] : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <section className="border-b border-ink-200 bg-ink-50/60">
        <Container className="py-8 sm:py-10">
          <nav aria-label="Breadcrumb" className="text-xs text-ink-500">
            <Link href="/" className="hover:text-brand-700">{hi ? "होम" : "Home"}</Link>
            <span className="mx-1.5">›</span>
            <Link href="/results" className="hover:text-brand-700">{hi ? "रिज़ल्ट" : "Results"}</Link>
            {r.category !== "result" && (
              <>
                <span className="mx-1.5">›</span>
                <Link href={meta.path} className="hover:text-brand-700">{hi ? meta.label.hi : meta.label.en}</Link>
              </>
            )}
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge tone={statusTone[r.result_status]}>{hi ? statusHi[r.result_status] : r.result_status}</Badge>
            <Badge tone="slate">{hi ? meta.singular.hi : meta.singular.en}</Badge>
            {r.exam_year && <Badge tone="brand">{r.exam_year}</Badge>}
          </div>
          <h1 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight text-ink-900 sm:text-4xl">{r.exam_name}</h1>
          <p className="mt-1.5 text-ink-600">{r.organisation}</p>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* Official links first on mobile: that's what people came for */}
            <aside className="lg:order-2">
              <div className="rounded-2xl border-2 border-teal-300 bg-white p-5 shadow-sm lg:sticky lg:top-24">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-teal-800">
                  <ShieldCheck className="h-4 w-4" /> {hi ? "आधिकारिक लिंक" : "Official links"}
                </p>
                <p className="mt-1 text-xs text-ink-500">
                  {hi ? `ये ${r.organisation} की वेबसाइट खोलते हैं, नए टैब में।` : `These open ${r.organisation}'s own website, in a new tab.`}
                </p>
                <ul className="mt-4 space-y-2">
                  {officialLinks.map((l) =>
                    l.url ? (
                      <li key={l.label}>
                        <a
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            l.primary
                              ? "flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700"
                              : "flex w-full items-center justify-between rounded-xl border border-ink-200 px-4 py-2.5 text-sm font-medium text-ink-800 hover:border-teal-300 hover:bg-teal-50"
                          }
                        >
                          <span className="inline-flex items-center gap-2">
                            {!l.primary && l.url === r.official_website && <Globe className="h-4 w-4 text-ink-400" />}
                            {l.label}
                          </span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </li>
                    ) : (
                      <li key={l.label} className="flex items-center justify-between rounded-xl border border-dashed border-ink-200 px-4 py-2.5 text-sm text-ink-400">
                        {l.label} <span className="text-xs">{hi ? "अभी लिंक नहीं" : "Not linked yet"}</span>
                      </li>
                    ),
                  )}
                </ul>
                <p className="mt-4 text-[11px] leading-relaxed text-ink-400">
                  {hi ? "लिंक अंतिम बार जाँचे गए:" : "Links last checked:"} {fmtDate(r.updated_at)}
                </p>
              </div>
            </aside>

            <div className="space-y-6 lg:order-1">
              <Card>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  <Info className="h-3.5 w-3.5" /> {hi ? "मेरिट मार्ग का सार" : "Summary by Merit Marg"}
                </p>
                <p className="mt-3 leading-relaxed text-ink-800">{r.description}</p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  {facts.map((x) => (
                    <div key={x.label} className="flex gap-3 rounded-xl bg-ink-50 p-3">
                      <x.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <div>
                        <dt className="text-xs text-ink-500">{x.label}</dt>
                        <dd className="text-sm font-medium text-ink-900">{x.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </Card>

              {r.important_dates.length > 0 && (
                <Card>
                  <h2 className="text-lg font-bold text-ink-900">{hi ? "महत्वपूर्ण तिथियाँ" : "Important dates"}</h2>
                  <table className="mt-3 w-full text-sm">
                    <tbody className="divide-y divide-ink-100">
                      {r.important_dates.map((d) => (
                        <tr key={d.label + d.date}>
                          <td className="py-2.5 pr-4 text-ink-600">{d.label}</td>
                          <td className="py-2.5 text-right font-semibold text-ink-900">{fmtDate(d.date) ?? d.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              )}

              <Card className="border-saffron-200 bg-saffron-50">
                <h2 className="text-base font-bold text-ink-900">{hi ? "आगे क्या?" : "What next?"}</h2>
                <p className="mt-1 text-sm text-ink-700">
                  {hi
                    ? "अंक, कट ऑफ़ और चयन की स्थिति केवल आधिकारिक वेबसाइट पर मान्य है। अगली भर्ती के लिए तैयारी यहीं से शुरू करें।"
                    : "Only the official website's marks, cut-off and selection status count. If you're sitting the next round, start preparing here."}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                  {hub && (
                    <Link href={hub.hubHref} className="inline-flex items-center gap-1 text-brand-700 hover:underline">
                      {hi ? `${hub.shortName} गाइड और पैटर्न` : `${hub.shortName} guide & pattern`} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  <Link href="/notifications" className="inline-flex items-center gap-1 text-brand-700 hover:underline">
                    {hi ? "खुली भर्तियाँ" : "Open recruitments"} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/mock-tests" className="inline-flex items-center gap-1 text-brand-700 hover:underline">
                    {hi ? "मॉक टेस्ट" : "Mock tests"} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-ink-900">{hi ? "और ताज़ा अपडेट" : "More recent updates"}</h2>
              <ul className="mt-4 space-y-3">
                {related.map((x) => <ResultRow key={x.id} r={x} hi={hi} />)}
              </ul>
              <Link href={meta.path} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline">
                {hi ? `सभी: ${meta.label.hi}` : `All ${meta.label.en.replace(/^Latest /, "").toLowerCase()}`} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
