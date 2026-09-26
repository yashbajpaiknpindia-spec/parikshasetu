import { Container, Badge, SectionHeading, Callout } from "@/components/ui";
import { syllabus, subjectNotes } from "@/lib/exam-data";

export const metadata = {
  title: "Syllabus",
  description:
    "The KVS syllabus mapped section by section: reasoning, quantitative ability, computer literacy, GK & current affairs, English, Hindi and pedagogy, plus subject notes for PRT, TGT and PGT.",
};

const subjectNoteCards = [
  { code: "PRT", note: subjectNotes.prt },
  { code: "TGT", note: subjectNotes.tgt },
  { code: "PGT", note: subjectNotes.pgt },
];

export default function SyllabusPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · Syllabus</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              What to study
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              The common sections below run across PRT, TGT and PGT screening. On top of these, each
              post carries a subject component pitched at its own level. Use this as your topic
              checklist for revision and for tracking coverage.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Common sections"
            description="These competencies recur across the recruitment. Depth and weight vary by cycle and post."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {syllabus.map((section) => (
              <div key={section.id} className="card flex flex-col p-6">
                <h3 className="text-base font-semibold text-ink-900">{section.title}</h3>
                <ul className="mt-4 space-y-2">
                  {section.topics.map((topic) => (
                    <li key={topic} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-300" />
                      <span className={section.id === "hindi" ? "font-hindi" : undefined}>
                        {topic}
                      </span>
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
          <SectionHeading
            title="Subject component by post"
            description="Beyond the common sections, the concerned-subject paper is what separates a good score from a selection."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {subjectNoteCards.map(({ code, note }) => (
              <div key={code} className="card flex flex-col p-6">
                <span className="inline-flex w-fit items-center rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                  {code}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">{note}</p>
              </div>
            ))}
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">PG subject syllabi are official PDFs.</strong> The
            detailed, subject-wise syllabus for PGT (and the graduation-level TGT subjects) is
            released by CBSE as per-subject PDFs. Download the PDF for the exact subject you are
            applying for and treat it as the authoritative topic list. This page maps the common
            sections, not the full subject depth.
          </Callout>
        </Container>
      </section>
    </div>
  );
}
