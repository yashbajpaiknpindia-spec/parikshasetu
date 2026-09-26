import { Container, Badge, SectionHeading, Callout } from "@/components/ui";
import { posts, ageRelaxations, reservation, lastReviewed } from "@/lib/exam-data";

export const metadata = {
  title: "Eligibility",
  description:
    "KVS PRT, TGT and PGT eligibility: qualifications, the CTET requirement, maximum age, category-wise age relaxations and reservation, with a note to verify against the notification.",
};

export default function EligibilityPage() {
  return (
    <div>
      <section className="hero-gradient border-b border-ink-200">
        <Container>
          <div className="max-w-3xl py-14 sm:py-16">
            <Badge>Exam Guide · Eligibility</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Who can apply
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              Eligibility turns on three things: your academic qualification, whether CTET is
              required for the post, and your age on the notification&rsquo;s closing date. Category
              relaxations and reservation then apply on top.
            </p>
            <p className="mt-3 text-sm text-ink-400">Last reviewed: {lastReviewed}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Qualification, CTET & age by post"
            description="A degree in the relevant subject plus a teaching qualification is the baseline; the level rises from PRT to PGT."
          />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-ink-50 text-ink-900">
                  <th className="px-4 py-3 font-semibold">Post</th>
                  <th className="px-4 py-3 font-semibold">Qualification</th>
                  <th className="px-4 py-3 font-semibold">CTET</th>
                  <th className="px-4 py-3 font-semibold">Max age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200">
                {posts.map((p) => (
                  <tr key={p.code} className="align-top">
                    <td className="px-4 py-4">
                      <span className="font-semibold text-ink-900">{p.code}</span>
                      <span className="mt-0.5 block text-xs text-ink-500">{p.name}</span>
                    </td>
                    <td className="px-4 py-4 leading-relaxed text-ink-700">{p.qualification}</td>
                    <td className="px-4 py-4 leading-relaxed text-ink-700">{p.ctet}</td>
                    <td className="px-4 py-4 whitespace-nowrap font-medium text-ink-900">
                      {p.maxAge} years
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">On the CTET requirement:</strong> PRT requires CTET
            Paper-I, TGT requires CTET Paper-II, and PGT generally does not require CTET. Some
            subjects and cycles carry additional conditions (for example language proficiency or a
            specific NCTE-recognised qualification). Always confirm the exact wording in the
            notification.
          </Callout>
        </Container>
      </section>

      <section className="pb-12 sm:pb-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Age relaxation"
                description="Upper-age relaxations are granted over and above the post’s maximum age, as per Government of India norms."
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-ink-50 text-ink-900">
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Relaxation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-200">
                    {ageRelaxations.map((r) => (
                      <tr key={r.category}>
                        <td className="px-4 py-3 text-ink-700">{r.category}</td>
                        <td className="px-4 py-3 font-medium text-ink-900">{r.years}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <SectionHeading
                title="Reservation"
                description="Vacancies are reserved category-wise; PwD reservation applies horizontally across categories."
              />
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                {reservation.map((r) => (
                  <div key={r.category} className="card p-5">
                    <div className="text-2xl font-bold text-brand-700">{r.pct}</div>
                    <div className="mt-1 text-sm font-medium text-ink-700">{r.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout tone="amber">
            <strong className="text-ink-900">Verify every figure against the notification.</strong>{" "}
            Age reckoning date, relaxation formulas (especially for ex-servicemen and KVS employees)
            and the exact reservation roster are fixed by the official notification for each cycle,
            and can differ from the indicative figures shown here.
          </Callout>
        </Container>
      </section>
    </div>
  );
}
