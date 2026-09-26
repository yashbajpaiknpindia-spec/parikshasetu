import { Landmark, Globe, Scale, ExternalLink } from "lucide-react";
import { Container, Badge, SectionHeading, Callout } from "@/components/ui";
import { sources, lastReviewed, type Source } from "@/lib/exam-data";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: "How to apply",
  description:
    "The step-by-step KVS application process, from watching for the notification to document verification, plus official links and a reminder to take dates, fees and vacancies only from the notification.",
};

const steps = [
  {
    title: "Watch for the notification",
    desc: "Track the official KVS and CBSE sites for the recruitment notification and advertisement number. Do not act on dates circulating on coaching portals.",
  },
  {
    title: "Register on the portal",
    desc: "Create your candidate account on the CBSE examination-services portal used for the current cycle. Note your registration number carefully.",
  },
  {
    title: "Fill the application form",
    desc: "Enter personal, academic and category details exactly as per your documents. Select the post and subject you are eligible for.",
  },
  {
    title: "Upload documents",
    desc: "Upload a recent photograph, signature and any required certificates in the specified format and size.",
  },
  {
    title: "Pay the fee",
    desc: "Pay the application fee online. Fees and category-wise exemptions are set by the notification. Do not assume last cycle’s amounts.",
  },
  {
    title: "Download the admit card",
    desc: "Once released, download the admit card for each stage and check every detail against your application.",
  },
  {
    title: "Sit Tier-1",
    desc: "Appear for the screening CBT. In the current cycle this is qualifying and shortlists candidates for Tier-2.",
  },
  {
    title: "Sit Tier-2",
    desc: "Appear for the post- and subject-specific test. In the current cycle this decides your merit.",
  },
  {
    title: "Interview / demo teaching",
    desc: "Shortlisted candidates attend the interview and demo lesson (or skill test for relevant posts).",
  },
  {
    title: "Document verification",
    desc: "Original documents are verified, along with medical formalities, before appointment.",
  },
];

const groups: { kind: Source["kind"]; heading: string; blurb: string; Icon: typeof Landmark }[] = [
  {
    kind: "official",
    heading: "Official sources",
    blurb: "Government bodies: the only authoritative source for any figure you act on.",
    Icon: Landmark,
  },
  {
    kind: "portal",
    heading: "Reference portals",
    blurb: "Useful for orientation, but cross-check every detail against the official notification.",
    Icon: Globe,
  },
  {
    kind: "legal",
    heading: "Legal references",
    blurb: "Court decisions and legal context relevant to the recruitment.",
    Icon: Scale,
  },
];

export default function ApplyPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · How to apply</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              The application process
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              The exact dates, fees and portal change every cycle, but the shape of the process is
              stable. Here is the generic path from notification to appointment. Treat it as a map,
              and take the specifics from the live notification.
            </p>
            <p className="mt-3 text-sm text-ink-400">Last reviewed: {lastReviewed}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Step by step"
            description="Ten stages from watching for the notification to document verification."
          />
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <li key={s.title} className="card flex gap-4 p-5">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <SectionHeading
            title="Official & reference links"
            description="Open and verify each source before it informs any decision."
          />
          <div className="mt-8 space-y-8">
            {groups.map(({ kind, heading, blurb, Icon }) => {
              const items = sources.filter((s) => s.kind === kind);
              if (items.length === 0) return null;
              return (
                <div key={kind}>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink-900">{heading}</h3>
                      <p className="text-xs text-ink-500">{blurb}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {items.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card card-hover group flex items-center justify-between gap-3 p-4"
                      >
                        <span className="text-sm font-medium text-ink-800">{s.label}</span>
                        <ExternalLink className="h-4 w-4 flex-none text-ink-400 transition-colors group-hover:text-brand-700" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">
              Dates, fees and vacancies come from the notification only.
            </strong>{" "}
            Nothing on this page, or on any coaching portal, overrides the current official
            notification. Confirm the application window, fee, post-wise vacancies and eligibility on{" "}
            <a
              href={siteConfig.officialSources.kvs}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline underline-offset-2"
            >
              the KVS site
            </a>{" "}
            and{" "}
            <a
              href={siteConfig.officialSources.cbse}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-700 underline underline-offset-2"
            >
              CBSE
            </a>{" "}
            before you apply.
          </Callout>
        </Container>
      </section>
    </div>
  );
}
