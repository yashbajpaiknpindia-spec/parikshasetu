import { pageSeo } from "@/lib/seo";
import type { Metadata } from "next";
import { Container, Badge, Card } from "@/components/ui";
import { mentors } from "@/data/mentors";
import { MentorDirectory } from "@/components/mentors/MentorDirectory";
import { Users, Sparkles, Check, GraduationCap, PhoneCall } from "lucide-react";
import { MENTOR_FEATURES } from "@/lib/pricing";
import { getPricingSettings } from "@/lib/pricing-config";
import { WhatsAppLink } from "@/components/site/WhatsAppHelp";

export const dynamic = "force-dynamic";

export const metadata = pageSeo({
  title: "Teacher Exam Mentors & Guidance",
  description: "Find teacher exam mentors and guidance for exam preparation, strategy, mock analysis and one-to-one support on Merit Marg.",
  path: "/mentors",
  keywords: ["teacher exam mentor", "SUPER TET mentor", "BPSC teacher exam mentor"],
  noIndex: false,
});

export default async function MentorsPage() {
  const { prepPrice, mentorPrice } = await getPricingSettings();
  const upgradePrice = Math.max(0, mentorPrice - prepPrice);
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-16">
          <Badge tone="saffron"><Users className="h-3.5 w-3.5" /> 1-on-1 mentorship</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">Learn directly from experienced teachers and mentors</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">Individual mentor booking remains available below. We are also preparing a ₹{mentorPrice} bundled Prep + Mentorship pass; existing Prep Pass holders will be able to upgrade for ₹{upgradePrice} when it launches.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink-900">Who you'll talk to</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              { icon: GraduationCap, t: "Serving teachers", d: "Teachers who cleared these exams and teach in government schools today." },
              { icon: Users, t: "Mentors", d: "Experienced guides who plan your preparation around your mock results." },
              { icon: PhoneCall, t: "Selected candidates", d: "Qualified, recently selected applicants who sat the same paper you will." },
            ].map((w) => (
              <Card key={w.t}>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700"><w.icon className="h-5 w-5" /></span>
                <h3 className="mt-3 font-semibold text-ink-900">{w.t}</h3>
                <p className="mt-1 text-sm text-ink-600">{w.d}</p>
              </Card>
            ))}
          </div>

          <Card className="mb-10 mt-10 border-teal-200 bg-teal-50/50">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900"><Sparkles className="h-5 w-5 text-saffron-600" /> Bundled mentorship plan · coming soon</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {MENTOR_FEATURES.map((f) => <li key={f.en} className="flex gap-2 text-sm text-ink-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />{f.en}</li>)}
            </ul>
            <p className="mt-4 text-sm text-ink-600">Want launch updates? <WhatsAppLink text="MENTOR, please tell me when the Prep + Mentorship plan opens." /></p>
          </Card>

          <h2 className="text-2xl font-bold text-ink-900">Book an individual mentor session</h2>
          <p className="mt-2 text-sm text-ink-600">The existing mentor profiles, detail pages, booking flow and Razorpay-backed session payments are preserved.</p>
          <div className="mt-6"><MentorDirectory mentors={mentors} /></div>
        </Container>
      </section>
    </>
  );
}
