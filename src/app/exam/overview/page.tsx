import Link from "next/link";
import { Landmark, Building2, School, ArrowRight } from "lucide-react";
import { Container, Badge, SectionHeading, Callout } from "@/components/ui";
import { posts } from "@/lib/exam-data";

export const metadata = {
  title: "About KVS & the posts",
  description:
    "What Kendriya Vidyalaya Sangathan is, who conducts its teacher recruitment today, its three-tier structure, and the PRT, TGT and PGT posts compared.",
};

const orgTiers = [
  {
    Icon: Landmark,
    tier: "Headquarters (New Delhi)",
    desc: "The Sangathan HQ frames policy, curriculum direction and recruitment norms, and administers the system nationally.",
  },
  {
    Icon: Building2,
    tier: "Regional Offices",
    desc: "Regional Offices, each led by a Deputy Commissioner, supervise the Kendriya Vidyalayas within their region.",
  },
  {
    Icon: School,
    tier: "Kendriya Vidyalayas",
    desc: "The individual schools where PRTs, TGTs and PGTs teach, the classrooms the whole system exists to serve.",
  },
];

const postRows: { label: string; get: (p: (typeof posts)[number]) => string }[] = [
  { label: "Teaches", get: (p) => p.teaches },
  { label: "Classes", get: (p) => p.classes },
  { label: "Qualification", get: (p) => p.qualification },
  { label: "CTET", get: (p) => p.ctet },
  { label: "Maximum age", get: (p) => `${p.maxAge} years` },
  { label: "Pay level", get: (p) => p.payLevel },
  { label: "Entry pay", get: (p) => p.entryPay },
];

export default function OverviewPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · Overview</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              About KVS &amp; the teaching posts
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Kendriya Vidyalaya Sangathan (KVS) is an autonomous body under the Ministry of
              Education, Government of India. It runs the Kendriya Vidyalayas, a national network of
              schools set up primarily for the children of transferable central-government employees,
              and known for a uniform CBSE-aligned curriculum.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="prose-ps max-w-3xl">
            <h2>Who conducts the recruitment now</h2>
            <p>
              This has recently changed, and mixing up the two regimes is the single biggest source
              of confusion. Up to the <strong>2022–23</strong> cycle, KVS ran its own direct
              recruitment. From the <strong>2025–26</strong> cycle, recruitment is conducted by{" "}
              <strong>CBSE</strong> as a joint exercise covering KVS, NVS (Navodaya Vidyalaya Samiti)
              and EMRS (Eklavya Model Residential Schools) on behalf of those bodies.
            </p>
            <p>
              KVS remains the employer and sets the eligibility norms; CBSE is the conducting agency
              for the current cycle. Because the conducting agency and the exam structure both
              changed, always check which cycle any figure or pattern refers to before you rely on
              it.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading
            title="The three-tier structure"
            description="KVS is administered at three levels, from national policy down to the individual classroom."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {orgTiers.map(({ Icon, tier, desc }) => (
              <div key={tier} className="card flex flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{tier}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14 sm:pb-20">
        <Container>
          <SectionHeading
            title="The three posts: PRT, TGT and PGT"
            description="The teaching cadre is organised by the level taught. Each post has its own qualification, CTET requirement, age limit and pay."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {posts.map((p) => (
              <div key={p.code} className="card flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                    {p.code}
                  </span>
                  <h3 className="text-base font-semibold text-ink-900">{p.name}</h3>
                </div>
                <dl className="mt-5 space-y-3.5 text-sm">
                  {postRows.map(({ label, get }) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                        {label}
                      </dt>
                      <dd className="mt-0.5 leading-relaxed text-ink-700">{get(p)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">Pay figures are indicative entry values.</strong>{" "}
            Pay levels follow the 7th Central Pay Commission; actual take-home varies with allowances,
            city and cycle. Confirm the exact scale and any revision in the current official
            notification.
          </Callout>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/exam/eligibility"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
            >
              Check detailed eligibility
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/exam/pattern"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
            >
              See the exam pattern
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
