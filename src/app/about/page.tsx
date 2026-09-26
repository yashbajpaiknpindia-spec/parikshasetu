import type { Metadata } from "next";
import { Check, ShieldCheck, Map, Target } from "lucide-react";
import { Badge, ButtonLink, Callout, Container } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { BrandIntroVideo } from "@/components/site/BrandIntroVideo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Merit Marg was started by people who cleared government teacher exams. Under their guidance we researched the syllabus, pattern and marking, and put everything you need to crack the exam in one place.",
};

const differences = [
  "Built for two exams first, properly: SUPER TET (UP Assistant Teacher, classes 1–5) and BPSC TRE 4.0 (classes 1–5 and 6–8), every section, every topic, in each exam's own marking. Other states come next, not all at once.",
  "Exam-specific preparation: a day-by-day plan built backwards from your exam date, not an endless content dump.",
  "Every test stays on its topic and comes with a detailed explanation and a weak-spot analysis, so practice actually teaches.",
  "Honest by design: content is labelled by exam cycle and linked to the official notification, and we never promise selection.",
];

const story = [
  {
    title: "They sat where you sit",
    body: "Merit Marg was started by people who cleared government teacher exams themselves. They know the pile of books, the late nights, the self-doubt, and the questions in the hall that no guide had warned them about.",
  },
  {
    title: "We dug in, with them guiding us",
    body: "Sitting with them, we went through the official syllabus, the exam pattern and marking, and the kind of questions that really get asked, one topic at a time. They told us what mattered, what was a waste of time, and what they wished someone had told them on day one.",
  },
  {
    title: "What we found is now yours",
    body: "All of it is here: a day-by-day plan to exam day, a test for every topic, and a short reason under every answer. You don't need to hunt for material or guess what to study next. Your job is simply to follow the path.",
  },
];

const values = [
  {
    icon: Map,
    title: "A plan, not an ocean",
    body: "There is already more study material than anyone can finish. We turn it into a dated plan to exam day, so every day you know exactly what to do next.",
  },
  {
    icon: Target,
    title: "Exam-specific practice",
    body: "You clear an exam by preparing for that exam: its pattern, its weightage, its traps. Daily topic tests show you what to hold in memory and what to let go.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and honesty",
    body: "Sources are everywhere; good ones are rare. Every question is original and on-pattern, every explanation teaches, and every figure is traceable. No inflated promises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient border-b border-ink-200">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1fr_minmax(0,440px)]">
          <div>
          <Badge>About us</Badge>
          <h1 className="mt-4 text-4xl font-bold text-ink-900 sm:text-5xl">
            Built by people who cleared these exams.
          </h1>
          <p className="mt-2 font-hindi text-lg text-brand-700">
            {siteConfig.nameHindi}
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            Under their guidance we did the research, so you don&apos;t have to spend
            months on it. Everything you need to crack the exam is here, in the order you
            need it.
          </p>
          </div>
          <BrandIntroVideo />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <p className="font-hand text-xl text-teal-700">Our story</p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
            From the exam hall to this page
          </h2>
          <ol className="mt-8 max-w-3xl space-y-8 border-l-2 border-dashed border-teal-300 pl-6">
            {story.map((c, i) => (
              <li key={c.title} className="relative">
                <span className={`absolute -left-[2.4rem] grid h-7 w-7 place-items-center rounded-full text-sm font-bold ring-4 ring-white ${["bg-brand-600 text-white", "bg-teal-600 text-white", "bg-saffron-400 text-ink-900"][i]}`}>
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-700">{c.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-ink-700">
            <span className="font-hindi">Marg</span> means path, and this is the path of
            merit: from where you are today to the government job you are working for.
            Right now it is built for SUPER TET (UP Assistant Teacher) and the Bihar
            BPSC TRE; guides and notices for other exams are here too, and their tests
            will follow.
          </p>
        </Container>
      </section>

      <section className="border-t border-ink-200 bg-ink-50/50 py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Why years of study don&apos;t clear the exam
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                There is no shortage of material to study. There never was. Many
                aspirants prepare for years and still don&apos;t clear the exam.
                Why? Because studying is not the same as exam-specific
                preparation. Knowledge is an ocean, and it is easy to drown in it:
                the more you read without a plan, the further the shore feels.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                You have read enough content. What decides selection is how much
                of it you can recall under pressure, and knowing which part to
                keep by heart and which part you can safely let go. That clarity
                does not come from reading more. It comes from a plan, and from
                taking tests, day after day.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900">
                Planning and practice are the path
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                Ask anyone who has cleared a competitive exam, as our founders
                did, and they will tell you the same thing: <strong>planning and question practice</strong>{" "}
                are the key. If knowledge is the ocean, a dated plan and daily
                tests are the boat that carries you across it, all the way to the
                exam.
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                So we give you a plan right up to exam day, and a test for every
                topic on it. Take a test, read the analysis, fix the gap, repeat.
                That is the whole method, and we have built it, and handed you the
                key, on one platform. Your job is simply to follow it.
              </p>
            </div>
          </div>

          <Callout tone="brand" className="mt-10 max-w-3xl" title="And please, don't be afraid of tests">
            These are mock tests, not the real exam. Their only purpose is to show
            you your weak spots so you can close them before it counts. Taking them
            every day is not the thing to fear. It is the surest cure for exam
            fear, and the most reliable way to walk into the real exam ready.
          </Callout>
        </Container>
      </section>

      <section className="border-t border-ink-200 bg-ink-50 py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            How we are different
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {differences.map((point) => (
              <li
                key={point}
                className="card flex items-start gap-3 p-5 text-ink-700"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
            What we value
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="card card-hover p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {value.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <Callout>
              {siteConfig.name} is an independent preparation platform. We are not
              affiliated with KVS, NVS, CBSE, UPESSC, any State Government or the
              Government of India, and we cannot guarantee exam selection or
              employment. Always verify eligibility, dates and figures against the
              official notification before you act on them.
            </Callout>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/exams" variant="primary">
              Find your exam
            </ButtonLink>
            <ButtonLink href="/exams/up/plan" variant="secondary">
              See the SUPER TET plan
            </ButtonLink>
            <ButtonLink href="/exams/bihar-tre/plan" variant="secondary">
              See the BPSC TRE 4.0 plan
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
