import Link from "next/link";
import { ShieldCheck, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui";
import { ResultCategoryTabs } from "@/components/results/ResultCategoryTabs";
import { ResultsExplorer } from "@/components/results/ResultsExplorer";
import { categoryMeta, RESULT_CATEGORIES, type ResultCategory } from "@/data/results";
import { getResults } from "@/lib/results-source";
import { fmtDate, safeJsonLd } from "@/lib/results-format";
import { getLang } from "@/lib/i18n-server";
import { siteConfig } from "@/lib/config";

/** One listing page (Latest Results, Admit Cards, …). Same shell for every category. */
export async function ResultsHub({ category }: { category: ResultCategory }) {
  const hi = (await getLang()) === "hi";
  const all = await getResults();
  const list = all.filter((r) => r.category === category);
  const meta = categoryMeta(category);
  const counts = Object.fromEntries(RESULT_CATEGORIES.map((c) => [c.key, all.filter((r) => r.category === c.key).length]));
  const lastChecked = all.map((r) => r.updated_at).sort().at(-1);

  // Structured data: the list itself + breadcrumbs (helps search engines read the page).
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Results", item: `${siteConfig.url}/results` },
        ...(category !== "result"
          ? [{ "@type": "ListItem", position: 3, name: meta.heading.en, item: `${siteConfig.url}${meta.path}` }]
          : []),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: meta.heading.en,
      itemListElement: list.map((r, i) => ({
        "@type": "ListItem", position: i + 1, name: r.exam_name, url: `${siteConfig.url}/results/${r.slug}`,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <section className="border-b border-ink-200 bg-ink-50/60">
        <Container className="py-8 sm:py-10">
          <nav aria-label="Breadcrumb" className="text-xs text-ink-500">
            <Link href="/" className="hover:text-brand-700">{hi ? "होम" : "Home"}</Link>
            <span className="mx-1.5">›</span>
            {category === "result" ? (
              <span className="text-ink-700">{hi ? "रिज़ल्ट" : "Results"}</span>
            ) : (
              <>
                <Link href="/results" className="hover:text-brand-700">{hi ? "रिज़ल्ट" : "Results"}</Link>
                <span className="mx-1.5">›</span>
                <span className="text-ink-700">{hi ? meta.label.hi : meta.label.en}</span>
              </>
            )}
          </nav>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-ink-900 sm:text-4xl">
            {hi ? meta.heading.hi : meta.heading.en}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-ink-600 sm:text-base">
            {hi
              ? "शिक्षक भर्ती और TET परीक्षाओं के ताज़ा अपडेट। हर बटन सीधे आधिकारिक वेबसाइट खोलता है।"
              : "Recent updates for teacher recruitment exams and TETs. Every button opens the official website directly."}
          </p>
          <div className="mt-5">
            <ResultCategoryTabs active={category} hi={hi} counts={counts} />
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10">
        <Container>
          <ResultsExplorer results={list} hi={hi} />

          <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-teal-200 bg-teal-50/60 p-4 text-sm text-ink-700 sm:flex-row sm:items-start">
            <ShieldCheck className="h-5 w-5 shrink-0 text-teal-700" />
            <p>
              {hi
                ? "मेरिट मार्ग कोई परिणाम जारी या होस्ट नहीं करता। हम केवल आधिकारिक पेज का लिंक और छोटा सार देते हैं। अंक, कट ऑफ़ और चयन हमेशा आधिकारिक वेबसाइट पर ही देखें।"
                : "Merit Marg does not publish or host any result. We give a short summary and the link to the official page. Always read your marks, cut-off and selection status on the official website."}
              {lastChecked && (
                <span className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
                  <RefreshCw className="h-3 w-3" /> {hi ? "लिंक अंतिम बार जाँचे गए:" : "Links last checked:"} {fmtDate(lastChecked)}
                </span>
              )}
            </p>
          </div>

          <p className="mt-6 text-sm text-ink-600">
            {hi ? "अगली भर्ती की तैयारी?" : "Preparing for the next round?"}{" "}
            <Link href="/notifications" className="font-semibold text-brand-700 hover:underline">{hi ? "खुली भर्तियाँ देखें" : "See open recruitments"}</Link>
            {" · "}
            <Link href="/mock-tests" className="font-semibold text-brand-700 hover:underline">{hi ? "UPESSC मॉक टेस्ट" : "UPESSC mock tests"}</Link>
          </p>
        </Container>
      </section>
    </>
  );
}
