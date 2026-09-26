import type { Metadata } from "next";
import { Container, Badge, Card } from "@/components/ui";
import { mentors } from "@/data/mentors";
import { MentorDirectory } from "@/components/mentors/MentorDirectory";
import { Users, Sparkles, Check } from "lucide-react";
import { MENTOR_FEATURES, MENTOR_PRICE, UPGRADE_PRICE } from "@/lib/pricing";
import { WhatsAppLink } from "@/components/site/WhatsAppHelp";

export const metadata: Metadata = {
  title: "1-on-1 Mentorship",
  description: "Book individual mentor sessions now. Merit Marg is also preparing a bundled Prep + Mentorship plan.",
};

export default function MentorsPage() {
  return (
    <>
      <section className="hero-gradient">
        <Container className="py-16">
          <Badge tone="saffron"><Users className="h-3.5 w-3.5" /> 1-on-1 mentorship</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">Learn directly from experienced teachers and mentors</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">Individual mentor booking remains available below. We are also preparing a ₹{MENTOR_PRICE} bundled Prep + Mentorship pass; existing ₹99 Prep Pass holders will be able to upgrade for ₹{UPGRADE_PRICE} when it launches.</p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <Card className="mb-10 border-teal-200 bg-teal-50/50">
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
