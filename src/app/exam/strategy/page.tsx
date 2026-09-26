import Link from "next/link";
import { MonitorPlay, ExternalLink, Lightbulb, Presentation, MessagesSquare } from "lucide-react";
import { Container, Badge, SectionHeading, Callout, ButtonLink } from "@/components/ui";
import { books, channels } from "@/lib/exam-data";

export const metadata = {
  title: "Preparation strategy",
  description:
    "A month-by-month KVS preparation plan, the high-ROI principles that matter most, demo-lesson and interview tips, recommended books and vetted YouTube channels.",
};

const plan = [
  {
    phase: "Months 1–2",
    title: "Foundations",
    points: [
      "Build the base with NCERT textbooks for your subject.",
      "Start pedagogy: child development, learning theories, NEP 2020 and NCF.",
      "Read current affairs daily and maintain a running note.",
    ],
  },
  {
    phase: "Months 3–4",
    title: "Depth & breadth",
    points: [
      "Move to advanced subject material beyond NCERT.",
      "Drill reasoning and computer literacy to speed.",
      "Fix English and Hindi grammar with daily practice sets.",
    ],
  },
  {
    phase: "Month 5",
    title: "Application",
    points: [
      "Shift to full-length mock tests under timed conditions.",
      "Work through previous-year questions (PYQs) section by section.",
      "Keep an error log and revise weak topics from it every week.",
    ],
  },
  {
    phase: "Final 2–3 weeks",
    title: "Peak & polish",
    points: [
      "Take a mock almost daily and review every mistake.",
      "Do focused revision from your notes and error log, no new topics.",
      "Prepare the interview and demo lesson in parallel.",
    ],
  },
];

const principles = [
  {
    title: "NCERT first",
    desc: "The concerned-subject and GK base is built on NCERT. Master it before touching thicker reference books.",
  },
  {
    title: "Prioritise by weightage",
    desc: "Spend time in proportion to marks. The subject paper and pedagogy carry the most weight. Protect them.",
  },
  {
    title: "Mocks are the highest-ROI activity",
    desc: "Timed mocks plus honest error review improve scores faster than passive reading in the final stretch.",
  },
];

const channelIcons = [MonitorPlay, MonitorPlay, MonitorPlay];

export default function StrategyPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · Strategy</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              A preparation plan that actually works
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              A roughly six-month runway, sequenced so you build foundations first, add depth, then
              convert knowledge into marks through mocks. Compress or stretch it to fit your own
              timeline. The order matters more than the exact months.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Month-by-month plan"
            description="Each phase builds on the last. Do not skip the foundations to reach the mocks. You will just plateau."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {plan.map((p, i) => (
              <div key={p.phase} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                      {p.phase}
                    </div>
                    <div className="text-base font-semibold text-ink-900">{p.title}</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-300" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading title="Three principles that decide your score" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {principles.map((pr) => (
              <div key={pr.title} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-100 text-saffron-700">
                  <Lightbulb className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{pr.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{pr.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading
            title="The demo lesson & interview"
            description="The final 15% is where generic test series add nothing, and where you can pull clearly ahead."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Presentation className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Demo teaching</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">
                <li>Plan a tight lesson: clear objective, hook, body and a quick recap.</li>
                <li>Use the blackboard and low-cost TLM deliberately, not as decoration.</li>
                <li>Show classroom command: pacing, questioning and student engagement.</li>
                <li>Weave in NEP 2020 / NCF ideas where they fit naturally.</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MessagesSquare className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">Interview</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">
                <li>Be ready to explain your subject clearly to a non-specialist.</li>
                <li>Prepare NEP / NCF talking points and current education issues.</li>
                <li>Have honest answers on why teaching and why KVS.</li>
                <li>Practise a calm, structured way of handling questions you do not know.</li>
              </ul>
            </div>
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">Get a mentor for this stage.</strong> A serving or
            recently selected KVS teacher can rehearse your demo lesson and interview far better than
            any recorded course. This is the single highest-leverage thing you can do for the final
            round.
          </Callout>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/mentors" variant="primary">
              Mentorship: coming soon
            </ButtonLink>
            <ButtonLink href="/mock-tests" variant="outline">
              Practise with mock tests
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading
            title="Recommended books"
            description="A lean, proven set. NCERT is the non-negotiable base; the rest are for drill and reference."
          />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-ink-50 text-ink-900">
                  <th className="px-4 py-3 font-semibold">Section</th>
                  <th className="px-4 py-3 font-semibold">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200">
                {books.map((b) => (
                  <tr key={b.section} className="align-top">
                    <td className="px-4 py-3 whitespace-nowrap font-semibold text-ink-900">
                      {b.section}
                    </td>
                    <td className="px-4 py-3 leading-relaxed text-ink-700">{b.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <SectionHeading
            title="YouTube channels"
            description="Free lectures to supplement your reading."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {channels.map((c, i) => {
              const Icon = channelIcons[i] ?? MonitorPlay;
              return (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex flex-col p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron-100 text-saffron-700">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <ExternalLink className="h-4 w-4 text-ink-400 transition-colors group-hover:text-brand-700" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{c.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{c.focus}</p>
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-400">
            These channels are leads to vet, not endorsements. Check that each is active and current
            before relying on it, and confirm any exam detail mentioned against the official
            notification.
          </p>

          <div className="mt-10 rounded-2xl border border-ink-200 bg-brand-50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink-900">Ready to put the plan to work?</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
              Pair timed mock tests with a mentor who has cleared the exam. That combination: honest
              scoring plus real feedback on your demo and interview, is what moves you up the merit
              list.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/mock-tests" variant="primary">
                Start mock tests
              </ButtonLink>
              <Link
                href="/mentors"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
              >
                Mentorship (coming soon)
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
