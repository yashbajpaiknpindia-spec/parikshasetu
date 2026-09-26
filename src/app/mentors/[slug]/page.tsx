import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, MapPin, Languages, CheckCircle2, Presentation, ShieldCheck } from "lucide-react";
import { Container, Badge, Card } from "@/components/ui";
import { cn } from "@/lib/utils";
import { mentors, getMentor } from "@/data/mentors";
import { BookingWidget } from "@/components/mentors/BookingWidget";

export function generateStaticParams() {
  return mentors.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/mentors/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getMentor(slug);
  return {
    title: m ? `${m.name} — ${m.post} ${m.subject} mentor` : "Mentor",
    description: m?.headline,
  };
}

export default async function MentorProfile({ params }: PageProps<"/mentors/[slug]">) {
  const { slug } = await params;
  const mentor = getMentor(slug);
  if (!mentor) notFound();

  return (
    <Container className="py-12">
      <Link href="/mentors" className="text-sm text-ink-500 hover:text-brand-700">
        ← All mentors
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Main */}
        <div>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className={cn("grid h-20 w-20 shrink-0 place-items-center rounded-2xl text-2xl font-bold text-white", mentor.accent)}>
              {mentor.initials}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold text-ink-900">{mentor.name}</h1>
                <Badge tone="green"><ShieldCheck className="h-3.5 w-3.5" /> Verified</Badge>
              </div>
              <p className="mt-1 text-ink-600">{mentor.post} · {mentor.subject}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-ink-500">
                <span className="inline-flex items-center gap-1 font-medium text-ink-800">
                  <Star className="h-4 w-4 fill-saffron-400 text-saffron-400" /> {mentor.rating}
                  <span className="font-normal text-ink-400">({mentor.reviews} reviews)</span>
                </span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {mentor.location}</span>
                <span className="inline-flex items-center gap-1"><Languages className="h-4 w-4" /> {mentor.languages.join(", ")}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { l: "Years in KV", v: `${mentor.yearsInKV}` },
              { l: "Sessions taken", v: `${mentor.sessions}+` },
              { l: "Rating", v: `${mentor.rating}/5` },
            ].map((x) => (
              <div key={x.l} className="rounded-xl bg-ink-50 py-4">
                <div className="text-xl font-bold text-brand-700">{x.v}</div>
                <div className="text-xs text-ink-500">{x.l}</div>
              </div>
            ))}
          </div>

          <Card className="mt-6">
            <h2 className="text-lg font-semibold text-ink-900">About</h2>
            <p className="mt-2 text-ink-600">{mentor.bio}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-500">Specialities</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {mentor.specialities.map((s) => (
                <Badge key={s} tone="brand">{s}</Badge>
              ))}
            </div>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-500">How this mentor helps</h3>
            <ul className="mt-3 space-y-2.5">
              {mentor.helpsWith.map((h) => (
                <li key={h} className="flex gap-3 text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" /> {h}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="mt-6 mesh-soft">
            <div className="flex items-center gap-2">
              <Presentation className="h-5 w-5 text-saffron-600" />
              <h2 className="text-lg font-semibold text-ink-900">Demo & interview coaching</h2>
            </div>
            <p className="mt-2 text-ink-600">
              This mentor can run a mock demo lesson and interview with real, specific
              feedback — the round that decides selection and that generic test series
              can&apos;t prepare you for.
            </p>
          </Card>
        </div>

        {/* Booking sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <BookingWidget mentor={mentor} />
        </aside>
      </div>
    </Container>
  );
}
