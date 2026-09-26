import { Container, Badge, SectionHeading, Callout } from "@/components/ui";
import { cycles, lastReviewed, type PostCode, type Cycle } from "@/lib/exam-data";

export const metadata = {
  title: "Exam pattern",
  description:
    "The KVS exam pattern for both regimes, the 2022–23 single objective paper with no negative marking, and the current 2025–26 two-tier CBSE exam with negative marking, with per-post tables.",
};

const POST_ORDER: PostCode[] = ["PRT", "TGT", "PGT"];

function StatTile({
  label,
  value,
  variant = "default",
}: {
  label: string;
  value: string;
  variant?: "default" | "good" | "warn";
}) {
  const tone =
    variant === "good"
      ? "border-success/30 bg-success/5"
      : variant === "warn"
        ? "border-danger/30 bg-danger/5"
        : "border-ink-200 bg-white";
  const valueTone =
    variant === "good" ? "text-success" : variant === "warn" ? "text-danger" : "text-ink-900";
  return (
    <div className={`rounded-xl border p-4 ${tone}`}>
      <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</div>
      <div className={`mt-1 text-sm font-semibold leading-snug ${valueTone}`}>{value}</div>
    </div>
  );
}

function CycleBlock({ cycle }: { cycle: Cycle }) {
  const wellDocumented = cycle.confidence === "well-documented";
  const hasNegative = cycle.negativeMarking.trim().toLowerCase() !== "none";

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="border-b border-ink-200 bg-ink-50 px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-ink-900">{cycle.label}</h3>
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
              wellDocumented
                ? "bg-success/10 text-success"
                : "bg-saffron-100 text-saffron-700"
            }`}
          >
            {wellDocumented ? "Well documented" : "Provisional: verify"}
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-brand-700">{cycle.conductedBy}</p>
        <p className="mt-1 text-sm text-ink-600">{cycle.status}</p>
      </div>

      <div className="px-6 py-6 sm:px-8">
        <p className="text-sm leading-relaxed text-ink-700">{cycle.headline}</p>

        {/* Key stats */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <StatTile label="Marking" value={cycle.marking} />
          <StatTile
            label="Negative marking"
            value={cycle.negativeMarking}
            variant={hasNegative ? "warn" : "good"}
          />
          <StatTile label="Duration" value={cycle.duration} />
          <StatTile label="Total" value={cycle.total} />
          <StatTile label="Weightage" value={cycle.weightage} />
        </div>

        {/* Stages */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
            Selection stages
          </h4>
          <ol className="mt-3 space-y-2">
            {cycle.stages.map((stage, i) => (
              <li key={stage} className="flex gap-3 text-sm text-ink-700">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{stage}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Per-post tables (stacked) */}
        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-400">
            Paper structure by post
          </h4>
          <div className="mt-4 space-y-6">
            {POST_ORDER.map((code) => {
              const rows = cycle.patterns[code];
              const totalQ = rows.reduce(
                (sum, r) => sum + (typeof r.questions === "number" ? r.questions : 0),
                0,
              );
              const totalM = rows.reduce(
                (sum, r) => sum + (typeof r.marks === "number" ? r.marks : 0),
                0,
              );
              return (
                <div key={code}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-brand-600 px-2 py-0.5 text-xs font-bold text-white">
                      {code}
                    </span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-ink-200">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-ink-50 text-ink-900">
                          <th className="px-4 py-2.5 font-semibold">Part</th>
                          <th className="px-4 py-2.5 font-semibold">Section</th>
                          <th className="px-4 py-2.5 text-right font-semibold">Questions</th>
                          <th className="px-4 py-2.5 text-right font-semibold">Marks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink-200">
                        {rows.map((r) => (
                          <tr key={`${code}-${r.part}-${r.section}`}>
                            <td className="px-4 py-2.5 font-medium text-ink-900">{r.part}</td>
                            <td className="px-4 py-2.5 leading-relaxed text-ink-700">
                              {r.section}
                            </td>
                            <td className="px-4 py-2.5 text-right text-ink-700">{r.questions}</td>
                            <td className="px-4 py-2.5 text-right text-ink-700">{r.marks}</td>
                          </tr>
                        ))}
                        <tr className="bg-ink-50/60 font-semibold text-ink-900">
                          <td className="px-4 py-2.5" colSpan={2}>
                            Total
                          </td>
                          <td className="px-4 py-2.5 text-right">{totalQ}</td>
                          <td className="px-4 py-2.5 text-right">{totalM}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        {cycle.notes.length > 0 && (
          <div className="mt-8 rounded-xl border border-ink-200 bg-ink-50 p-5">
            <h4 className="text-sm font-semibold text-ink-900">Notes &amp; caveats</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              {cycle.notes.map((note) => (
                <li key={note} className="flex gap-2 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-ink-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PatternPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · Pattern</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              The exam pattern: both cycles
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              This is where most confusion happens. The recruitment moved from a single objective
              paper with <strong className="font-semibold text-ink-800">no negative marking</strong>{" "}
              (2022–23) to a two-tier exam <strong className="font-semibold text-ink-800">with
              negative marking</strong> (2025–26). Read both, but prepare for the cycle you are
              actually sitting.
            </p>
            <p className="mt-3 text-sm text-ink-400">Last reviewed: {lastReviewed}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-success/30 bg-success/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-success">
                2022–23
              </div>
              <div className="mt-1 text-lg font-bold text-ink-900">No negative marking</div>
              <p className="mt-1 text-sm text-ink-600">
                Single objective CBT. A blank and a wrong answer cost the same. Attempt everything.
              </p>
            </div>
            <div className="rounded-2xl border border-danger/30 bg-danger/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-danger">
                2025–26
              </div>
              <div className="mt-1 text-lg font-bold text-ink-900">Negative marking (reported)</div>
              <p className="mt-1 text-sm text-ink-600">
                Two-tier CBT. Wrong answers are penalised, so guess only when you can eliminate
                options.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {cycles.map((cycle) => (
              <CycleBlock key={cycle.id} cycle={cycle} />
            ))}
          </div>

          <div className="mt-10">
            <SectionHeading title="Before you rely on the 2025–26 numbers" />
            <Callout tone="amber">
              <strong className="text-ink-900">The current cycle is still provisional.</strong>{" "}
              Coaching portals contradict each other on the Tier-2 format, on negative-marking
              values, and on the exact merit weightage. Every 2025–26 figure above is labelled
              &ldquo;reported&rdquo; for that reason. Confirm each one against the official CBSE / KVS
              notification PDF before acting on it.
            </Callout>
          </div>
        </Container>
      </section>
    </div>
  );
}
