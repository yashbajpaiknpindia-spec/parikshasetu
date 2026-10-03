import { pageSeo } from "@/lib/seo";
import { FileText, Download, Eye, Lock, ShieldCheck, Info, Gift, PlayCircle } from "lucide-react";
import { Container, Badge, ButtonLink, Card } from "@/components/ui";
import { PaywallCard, PassActiveNote } from "@/components/pricing/PlanUnlock";
import { PYQ_GROUPS, PYQ_PAPERS, SYLLABUS_PDFS, getPyq } from "@/data/pyq";
import { PYQ_TESTS } from "@/data/pyq-tests";
import { SampleAnalysis } from "@/components/pricing/SampleAnalysis";
import { markLabel } from "@/lib/mock-engine";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth-server";
import { hasPaidPlanAccess } from "@/lib/entitlements";
import { isDbConfigured } from "@/lib/prisma";
import { PREP_PRICE } from "@/lib/pricing";
import { getLang } from "@/lib/i18n-server";

export const metadata = pageSeo({
  title: "UP Previous-Year Papers & Free 2026 Syllabus: SUPER TET, UPTET, JASE",
  description: `${PYQ_PAPERS.length} UP teacher-exam previous-year question papers (SUPER TET / Assistant Teacher Recruitment, UPTET Paper 1 & 2, UP JASE), as clean PDFs, included in the Prep Pass. Plus the official UPESSC 2026 syllabus, free to download.`,
  path: "/pyq",
  keywords: ["SUPER TET previous year paper", "UPTET previous year paper", "UP teacher PYQ", "UPESSC syllabus 2026", "UP JASE previous paper"],
  noIndex: false,
});

export default async function PyqPage({ searchParams }: PageProps<"/pyq">) {
  const hi = (await getLang()) === "hi";
  const user = isDbConfigured ? await getCurrentUser() : null;
  const pass = !!(user && (await hasPaidPlanAccess(user.id)));
  const sp = await searchParams;
  const lockedHit = typeof sp.locked === "string" ? getPyq(sp.locked) : undefined;
  const totalPages = PYQ_PAPERS.reduce((a, p) => a + p.pages, 0);

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-12 sm:py-16">
          <Badge tone="brand"><FileText className="h-3.5 w-3.5" /> {hi ? "प्रेप पास में शामिल" : "Included in the Prep Pass"}</Badge>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-ink-900 sm:text-5xl">
            {hi ? "UP शिक्षक भर्ती के पिछले वर्षों के प्रश्न-पत्र" : "UP teacher-exam previous-year papers"}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink-600 sm:text-lg">
            {hi
              ? `${PYQ_PAPERS.length} असली प्रश्न-पत्र, ${totalPages} पृष्ठ: सुपर टेट (सहायक अध्यापक भर्ती), UPTET पेपर 1 व 2 और JASE। बिना विज्ञापन, बिना वॉटरमार्क, साफ़ PDF।`
              : `${PYQ_PAPERS.length} real papers, ${totalPages} pages: SUPER TET (Assistant Teacher Recruitment), UPTET Papers 1 & 2 and JASE. No adverts, no watermarks, clean PDFs.`}
          </p>
          <PassActiveNote hi={hi} className="mt-5" />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          {/* FREE for everyone: the official syllabus */}
          <div className="mb-10 rounded-2xl border-2 border-teal-300 bg-teal-50/50 p-4 sm:p-5">
            <h2 className="flex items-center gap-2 text-xl font-bold text-ink-900 sm:text-2xl">
              <Gift className="h-6 w-6 text-teal-600" /> {hi ? "मुफ़्त: आधिकारिक पाठ्यक्रम 2026" : "Free: the official 2026 syllabus"}
            </h2>
            <p className="mt-1 text-sm text-ink-600">
              {hi
                ? "उत्तर प्रदेश शिक्षा सेवा चयन आयोग की परीक्षा संरचना और विषय-वस्तु। सबके लिए मुफ़्त, कोई साइन-अप नहीं।"
                : "Exam structure and topic list from the Uttar Pradesh Education Service Selection Commission. Free for everyone, no sign-up."}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {SYLLABUS_PDFS.map((p) => (
                <Card key={p.href} className="flex flex-col p-5">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-teal-600 px-2 py-0.5 text-[11px] font-bold uppercase text-white">
                    <Gift className="h-3 w-3" /> {hi ? "मुफ़्त" : "Free"}
                  </span>
                  <h3 className="mt-3 font-semibold leading-snug text-ink-900">{hi ? p.title.hi : p.title.en}</h3>
                  <p className="mt-1 text-xs text-ink-500">{p.pages} {hi ? "पृष्ठ" : "pages"} · PDF {p.sizeMb.toFixed(1)} MB · {hi ? "हिंदी" : "Hindi"}</p>
                  <div className="mt-auto flex gap-2 pt-4">
                    <a href={p.href} target="_blank" rel="noopener" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-700">
                      <Eye className="h-4 w-4" /> {hi ? "खोलें" : "Open"}
                    </a>
                    <a href={p.href} download className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-ink-300 bg-white px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50">
                      <Download className="h-4 w-4" /> {hi ? "डाउनलोड" : "Download"}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Previous-year papers as ONLINE tests: right/wrong + full analysis */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-[#0a1329] text-white">
            <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-3 py-1 text-xs font-extrabold uppercase text-ink-900">
                  <PlayCircle className="h-3.5 w-3.5" /> {hi ? "नया: ऑनलाइन दें" : "New: take them online"}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  {hi ? "असली पिछला पेपर, असली परीक्षा की तरह" : "The real past paper, like the real exam"}
                </h2>
                <p className="mt-2 text-white/80">
                  {hi
                    ? "टाइमर के साथ दीजिए। जमा करते ही हर प्रश्न पर सही/गलत, उसकी व्याख्या और पूरा टॉपिक-वार विश्लेषण।"
                    : "Take it against the clock. The moment you submit: right/wrong on every question, the explanation, and the full topic-wise analysis."}
                </p>
                <div className="mt-5 space-y-3">
                  {PYQ_TESTS.map((t) => (
                    <Link key={t.id} href={`/mock-tests/${t.id}`} className="group flex items-center justify-between gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 hover:bg-white/15">
                      <span>
                        <span className="block font-bold">{t.title.replace(" (previous-year paper)", "")}</span>
                        <span className="text-sm text-white/70">{t.fixedCount} {hi ? "प्रश्न" : "Q"} · {t.durationMin} {hi ? "मिनट" : "min"} · {markLabel(t)}</span>
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-saffron-400 px-3 py-2 text-sm font-bold text-ink-900">
                        {pass ? (hi ? "शुरू करें" : "Start") : <><Lock className="h-4 w-4" /> ₹{PREP_PRICE}</>}
                      </span>
                    </Link>
                  ))}
                </div>
                <p className="mt-3 text-xs text-white/60">
                  {hi ? "और पेपर (UPTET, JASE) जल्द ऑनलाइन जुड़ेंगे।" : "More papers (UPTET, JASE) are being added online."}
                </p>
              </div>
              <SampleAnalysis hi={hi} />
            </div>
          </div>

          {!pass && (
            <div className="mb-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div>
                {lockedHit && (
                  <p className="mb-4 flex items-start gap-2 rounded-xl bg-saffron-50 p-3 text-sm font-medium text-saffron-900 ring-1 ring-saffron-200">
                    <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                    {hi ? `"${lockedHit.title.hi}" प्रेप पास से खुलता है।` : `"${lockedHit.title.en}" opens with the Prep Pass.`}
                  </p>
                )}
                <h2 className="text-2xl font-bold text-ink-900">{hi ? "पिछले प्रश्न-पत्र क्यों?" : "Why previous-year papers?"}</h2>
                <ul className="mt-3 space-y-2 text-ink-700">
                  <li>✅ {hi ? "आयोग कौन-से टॉपिक बार-बार पूछता है, यह साफ़ दिखता है।" : "You see which topics the board asks again and again."}</li>
                  <li>✅ {hi ? "असली प्रश्नों की भाषा और स्तर की आदत पड़ती है।" : "You get used to the real wording and level."}</li>
                  <li>✅ {hi ? "150 प्रश्न, तय समय: परीक्षा-दिवस का असली अभ्यास।" : "150 questions against the clock: real exam-day practice."}</li>
                </ul>
              </div>
              <PaywallCard hi={hi} title={hi ? `सभी ${PYQ_PAPERS.length} प्रश्न-पत्र + हर मॉक, ₹${PREP_PRICE} में` : `All ${PYQ_PAPERS.length} papers + every mock, ₹${PREP_PRICE}`} />
            </div>
          )}

          <div className="space-y-10">
            {PYQ_GROUPS.map((g) => {
              const papers = PYQ_PAPERS.filter((p) => p.group === g.key);
              if (!papers.length) return null;
              return (
                <div key={g.key}>
                  <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">{hi ? g.hi : g.en}</h2>
                  <p className="mt-1 text-sm text-ink-600">{hi ? g.blurb.hi : g.blurb.en}</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {papers.map((p) => (
                      <Card key={p.slug} className="flex flex-col p-5">
                        <div className="flex items-center gap-2">
                          <Badge tone="slate">{p.year}</Badge>
                          {!pass && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-ink-900 px-2 py-0.5 text-[11px] font-semibold text-saffron-300">
                              <Lock className="h-3 w-3" /> ₹{PREP_PRICE} {hi ? "पास" : "Pass"}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 font-semibold leading-snug text-ink-900">{hi ? p.title.hi : p.title.en}</h3>
                        <p className="mt-1 text-xs text-ink-500">
                          {p.pages} {hi ? "पृष्ठ" : "pages"} · PDF {p.sizeMb.toFixed(1)} MB
                        </p>
                        {p.note && (
                          <p className="mt-2 flex gap-1.5 text-xs text-ink-500">
                            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {hi ? p.note.hi : p.note.en}
                          </p>
                        )}
                        <div className="mt-auto flex gap-2 pt-4">
                          {pass ? (
                            <>
                              <a href={`/api/pyq/${p.slug}`} target="_blank" rel="noopener" className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700">
                                <Eye className="h-4 w-4" /> {hi ? "खोलें" : "Open"}
                              </a>
                              <a href={`/api/pyq/${p.slug}?download=1`} className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-ink-300 px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50">
                                <Download className="h-4 w-4" /> {hi ? "डाउनलोड" : "Download"}
                              </a>
                            </>
                          ) : (
                            <ButtonLink href="/pricing" variant="outline" size="sm" className="flex-1">
                              <Lock className="h-4 w-4" /> {hi ? `₹${PREP_PRICE} में खोलें` : `Unlock for ₹${PREP_PRICE}`}
                            </ButtonLink>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 flex max-w-3xl gap-2 text-xs text-ink-500">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
            {hi
              ? "प्रश्न-पत्र परीक्षा आयोजक संस्था के हैं; केवल व्यक्तिगत अभ्यास के लिए। उत्तर हमेशा आधिकारिक उत्तर-कुंजी से मिलाएँ।"
              : "The papers belong to the exam authority; for personal practice only. Always check answers against the official answer key."}
          </p>
        </Container>
      </section>
    </>
  );
}
