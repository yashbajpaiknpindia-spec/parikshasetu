import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ExternalLink, ClipboardCheck, CalendarClock, Users,
  GraduationCap, BookOpen, ListChecks, Target, ShieldCheck,
} from "lucide-react";
import { Container, Badge, Card, ButtonLink, Callout } from "@/components/ui";
import { exams, getExam } from "@/lib/exams/registry";
import { statusMeta } from "@/lib/exams/types";
import { getLang } from "@/lib/i18n-server";
import { portalLinksFor } from "@/data/notifications";

export function generateStaticParams() {
  return exams.filter((e) => e.hubHref.startsWith("/exams/")).map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/exams/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const exam = getExam(slug);
  return {
    title: exam ? exam.name : "Exam",
    description: exam?.summary,
  };
}

export default async function ExamHub({ params }: PageProps<"/exams/[slug]">) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();

  const st = statusMeta[exam.status];
  const d = exam.detail;
  const hi = (await getLang()) === "hi";
  // Where a candidate actually applies / reads the notice; homepage is the fallback.
  const derived = portalLinksFor(exam.slug);
  const applyUrl = exam.applyUrl ?? derived.applyUrl;
  const noticeUrl = exam.noticeUrl ?? derived.noticeUrl;

  return (
    <>
      {/* Header */}
      <section className="hero-gradient">
        <Container className="py-14">
          <Link href="/exams" className="text-sm text-ink-500 hover:text-brand-700">← {hi ? "सभी परीक्षाएँ" : "All exams"}</Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge tone="brand">{exam.regionShort}</Badge>
            <Badge tone={st.tone}>{exam.statusLabel}</Badge>
            {exam.priority && <Badge tone="saffron">{hi ? "अभी प्राथमिकता" : "Priority now"}</Badge>}
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">{exam.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-ink-600">{exam.summary}</p>
          <p className="mt-3 text-sm text-ink-500">
            {hi ? "आयोजक संस्था:" : "Conducting body:"}{" "}
            <a href={exam.bodyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-700 underline">
              {exam.body} <ExternalLink className="inline h-3 w-3" />
            </a>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {exam.vacancies && <Stat icon={<Users className="h-4 w-4" />} label={hi ? "रिक्तियाँ" : "Vacancies"} value={exam.vacancies} />}
            {exam.examWindow && <Stat icon={<CalendarClock className="h-4 w-4" />} label={hi ? "परीक्षा" : "Exam"} value={exam.examWindow} />}
            {exam.levels.length > 0 && <Stat icon={<GraduationCap className="h-4 w-4" />} label={hi ? "पद" : "Posts"} value={exam.levels.join(" · ")} />}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {exam.planHref && (
              <ButtonLink href={exam.planHref}><CalendarClock className="h-4 w-4" /> {hi ? "निःशुल्क अध्ययन योजना" : "Open the free study plan"}</ButtonLink>
            )}
            {d?.mockTestIds && d.mockTestIds.length > 0 && (
              <ButtonLink href="/mock-tests" variant={exam.planHref ? "outline" : "primary"}>
                <ClipboardCheck className="h-4 w-4" /> {hi ? "मॉक टेस्ट दें" : "Take a mock test"}
              </ButtonLink>
            )}
            <ButtonLink href="/notifications" variant="outline">{hi ? "लाइव सूचनाएँ" : "Live notifications"}</ButtonLink>
          </div>

          {(applyUrl || noticeUrl) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {applyUrl && (
                <a href={applyUrl} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700">
                  {hi ? "आवेदन / लॉगिन (आधिकारिक)" : "Apply / Login (official)"} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {noticeUrl && (
                <a href={noticeUrl} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800 hover:bg-teal-100">
                  {hi ? "आधिकारिक अधिसूचना" : "Official notification"} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </Container>
      </section>

      {!d ? (
        <Container className="py-16">
          <Card className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold text-ink-900">Full guide coming soon</h2>
            <p className="mt-2 text-ink-600">
              We&apos;re preparing the detailed pattern, syllabus and mocks for {exam.name}. Meanwhile,
              check the official source for the current notification.
            </p>
            <a href={noticeUrl ?? applyUrl ?? exam.bodyUrl} target="_blank" rel="noopener noreferrer"
               className="mt-5 inline-flex items-center gap-2 rounded-xl border border-ink-300 px-5 py-2.5 text-sm font-medium text-ink-800 hover:bg-ink-50">
              {noticeUrl ? "Official notification" : applyUrl ? "Apply / Login" : "Official website"} <ExternalLink className="h-4 w-4" />
            </a>
          </Card>
        </Container>
      ) : (
        <Container className="space-y-16 py-16">
          {/* Verification notice */}
          <Callout tone="amber" title={hi ? "कार्य करने से पहले सत्यापित करें" : "Verify before you act"}>
            {hi ? "नीचे दी गई तिथियाँ, रिक्तियाँ और परीक्षा पैटर्न नवीनतम उपलब्ध स्रोतों से संकलित हैं और इस चक्र के लिए लेबल हैं। किसी भी आँकड़े पर भरोसा करने से पहले आधिकारिक अधिसूचना " : "Dates, vacancies and the exam pattern below are compiled from the latest available sources and are labelled for this cycle. Always confirm against the official notification on "}
            <a href={exam.bodyUrl} target="_blank" rel="noopener noreferrer" className="underline">{exam.body}</a>{" "}
            {hi ? `पर अवश्य पुष्टि करें। अंतिम समीक्षा: ${d.lastReviewed}।` : `before relying on any figure. Last reviewed: ${d.lastReviewed}.`}
          </Callout>

          {/* Posts */}
          <section>
            <SectionTitle icon={<GraduationCap className="h-5 w-5" />} title={hi ? "पद एवं पात्रता" : "Posts & eligibility"} />
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {d.posts.map((p) => (
                <Card key={p.code}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-sm font-bold text-brand-700">{p.code}</span>
                    {p.maxAge && <span className="text-xs text-ink-500">Max age {p.maxAge}</span>}
                  </div>
                  <h3 className="mt-3 font-semibold text-ink-900">{p.name}</h3>
                  <p className="text-xs text-ink-500">{p.classes}</p>
                  <p className="mt-3 text-sm text-ink-600">{p.qualification}</p>
                  <p className="mt-2 text-sm"><span className="font-medium text-ink-800">TET:</span> {p.tet}</p>
                  {p.pay && <p className="mt-1 text-sm text-ink-500">{p.pay}</p>}
                </Card>
              ))}
            </div>
            {d.eligibilityNote && <p className="mt-4 text-sm text-ink-600">{d.eligibilityNote}</p>}
            {d.ageRelaxations && d.ageRelaxations.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {d.ageRelaxations.map((r) => (
                  <span key={r.category} className="rounded-lg bg-ink-50 px-3 py-1.5 text-xs text-ink-700">
                    <strong>{r.category}:</strong> {r.years}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* Stages */}
          <section>
            <SectionTitle icon={<ListChecks className="h-5 w-5" />} title={hi ? "चयन प्रक्रिया" : "Selection process"} />
            <ol className="mt-6 space-y-3">
              {d.stages.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</span>
                  <span className="pt-0.5 text-ink-700">{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Papers / pattern */}
          <section>
            <SectionTitle icon={<ClipboardCheck className="h-5 w-5" />} title={hi ? "परीक्षा पैटर्न" : "Exam pattern"} />
            <div className="mt-6 space-y-6">
              {d.papers.map((paper) => (
                <Card key={paper.name}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-ink-900">{paper.name}</h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge tone="slate">{paper.totalQuestions} questions</Badge>
                      <Badge tone="slate">{paper.totalMarks} marks</Badge>
                      <Badge tone="slate">{paper.durationMin} min</Badge>
                      <Badge tone="brand">{paper.mode}</Badge>
                    </div>
                  </div>
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-ink-200 text-left text-ink-500">
                          <th className="py-2 pr-4 font-medium">Section</th>
                          <th className="py-2 pr-4 font-medium">Questions</th>
                          <th className="py-2 font-medium">Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paper.sections.map((s) => (
                          <tr key={s.name} className="border-b border-ink-100">
                            <td className="py-2 pr-4 text-ink-800">{s.name}</td>
                            <td className="py-2 pr-4 text-ink-600">{s.questions}</td>
                            <td className="py-2 text-ink-600">{s.marks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                    <p><span className="font-medium text-ink-800">Marking:</span> {paper.marking}</p>
                    <p><span className="font-medium text-ink-800">Negative marking:</span> {paper.negativeMarking}</p>
                  </div>
                  {paper.note && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">{paper.note}</p>}
                </Card>
              ))}
            </div>
          </section>

          {/* Syllabus */}
          <section>
            <SectionTitle icon={<BookOpen className="h-5 w-5" />} title={hi ? "पाठ्यक्रम" : "Syllabus"} />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {d.syllabus.map((s) => (
                <Card key={s.id}>
                  <h3 className="font-semibold text-ink-900">{s.title}</h3>
                  <ul className={`mt-3 space-y-1.5 text-sm text-ink-600 ${s.hindi ? "font-hindi" : ""}`}>
                    {s.topics.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" /> {t}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* Strategy */}
          {d.strategy && d.strategy.length > 0 && (
            <section>
              <SectionTitle icon={<Target className="h-5 w-5" />} title={hi ? "तैयारी योजना" : "Preparation plan"} />
              <div className="mt-6 space-y-4">
                {d.strategy.map((s) => (
                  <Card key={s.title}>
                    <h3 className="font-semibold text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-600">{s.body}</p>
                  </Card>
                ))}
              </div>
              {d.books && d.books.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{hi ? "अनुशंसित पुस्तकें" : "Recommended books"}</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {d.books.map((b) => (
                      <li key={b.section} className="rounded-lg border border-ink-200 p-3 text-sm">
                        <span className="font-medium text-ink-800">{b.section}: </span>
                        <span className="text-ink-600">{b.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Official links */}
          <section>
            <SectionTitle icon={<ShieldCheck className="h-5 w-5" />} title={hi ? "आधिकारिक स्रोत" : "Official sources"} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {d.officialLinks.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer"
                   className="card card-hover flex items-center justify-between p-4">
                  <span className="text-sm font-medium text-ink-800">{l.label}</span>
                  <ExternalLink className="h-4 w-4 text-ink-400" />
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl bg-brand-700 px-8 py-12 text-center text-white">
            {exam.slug === "up" ? (
              <>
                <h2 className="text-2xl font-bold sm:text-3xl">{hi ? `${exam.shortName} के लिए अभ्यास शुरू करें?` : `Ready to practise for ${exam.shortName}?`}</h2>
                <p className="mt-2 text-brand-100">{hi ? "एक टेस्ट दें और देखें कि अंक कहाँ जा रहे हैं।" : "Take one test and see where your marks are going."}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <ButtonLink href="/mock-tests" variant="white">{hi ? "मॉक टेस्ट शुरू करें" : "Start a mock test"}</ButtonLink>
                  {exam.planHref && <ButtonLink href={exam.planHref} variant="accent">{hi ? "अध्ययन योजना" : "Open the study plan"}</ButtonLink>}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold sm:text-3xl">{hi ? `${exam.shortName} मॉक टेस्ट जल्द आ रहे हैं` : `${exam.shortName} mock tests: coming soon`}</h2>
                <p className="mt-2 text-brand-100">{hi ? "अभी मॉक टेस्ट SUPER TET और BPSC TRE 4.0 के लिए लाइव हैं। इस बीच सूचनाएँ देखते रहें।" : "Mock tests are live for SUPER TET and BPSC TRE 4.0 right now. Meanwhile, keep an eye on notifications."}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <ButtonLink href="/notifications" variant="white">{hi ? "लाइव सूचनाएँ" : "Live notifications"}</ButtonLink>
                  <ButtonLink href="/mock-tests" variant="accent">{hi ? "UPESSC मॉक देखें" : "See UPESSC mocks"}</ButtonLink>
                </div>
              </>
            )}
          </section>
        </Container>
      )}
    </>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2.5">
      <span className="text-brand-600">{icon}</span>
      <span className="text-sm">
        <span className="text-ink-500">{label}: </span>
        <span className="font-semibold text-ink-900">{value}</span>
      </span>
    </div>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-700">{icon}</span>
      {title}
    </h2>
  );
}
