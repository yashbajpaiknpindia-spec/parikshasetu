"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, ClipboardCheck, CalendarClock, TrendingUp,
  ArrowRight, Target, BookOpen, Flame,
} from "lucide-react";
import { Container, Card, Badge, ButtonLink } from "@/components/ui";
import { StreakBadges } from "@/components/gamification/StreakBadges";
import { inr } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { getAttempts, type SavedAttempt } from "@/lib/attempts";
import { getBookings, type SavedBooking } from "@/lib/bookings";
import { pullAttempts } from "@/lib/supabase/sync";
import { useLang } from "@/lib/i18n";
import { PlanUnlockButton } from "@/components/pricing/PlanUnlock";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const { t } = useLang();
  const [attempts, setAttempts] = useState<SavedAttempt[]>([]);
  const [bookings, setBookings] = useState<SavedBooking[]>([]);
  const [subscription, setSubscription] = useState<{ hasAccess: boolean; amount?: number; purchasedAt?: string } | null>(null);

  useEffect(() => {
    setAttempts(getAttempts());
    setBookings(getBookings());
    // Merge cloud-synced attempts (when Supabase is configured & signed in)
    fetch("/api/plan-access", { cache: "no-store" }).then((r) => r.json()).then((d) => setSubscription({ hasAccess: !!d.hasAccess, amount: d.subscription?.amount, purchasedAt: d.subscription?.purchasedAt })).catch(() => setSubscription({ hasAccess: false }));
    pullAttempts().then((cloud) => {
      if (!cloud.length) return;
      setAttempts((local) => {
        const seen = new Set(local.map((a) => a.testId + a.takenAt));
        return [...local, ...cloud.filter((c) => !seen.has(c.testId + c.takenAt))].sort(
          (a, b) => (a.takenAt < b.takenAt ? 1 : -1),
        );
      });
    });
  }, []);

  if (loading) {
    return (
      <Container className="py-24 text-center text-ink-500">Loading…</Container>
    );
  }

  if (!user) {
    return (
      <Container className="py-24">
        <div className="mx-auto max-w-md text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand-600 text-white">
            <LayoutDashboard className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-ink-900">Your dashboard</h1>
          <p className="mt-2 text-ink-600">
            Log in to see your mock-test history, weak spots and mentor bookings.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <ButtonLink href="/login">Log in</ButtonLink>
            <ButtonLink href="/signup" variant="outline">Create account</ButtonLink>
          </div>
        </div>
      </Container>
    );
  }

  const avg =
    attempts.length > 0
      ? Math.round(
          (attempts.reduce((s, a) => s + (a.maxScore ? a.score / a.maxScore : 0), 0) /
            attempts.length) *
            100,
        )
      : 0;

  // Integrated view: how often each topic has come up as a weak spot across all
  // attempts, most frequent first — a prioritised study list, not just a flat set.
  const topicFreq = new Map<string, number>();
  for (const a of attempts) for (const tp of a.weakTopics) topicFreq.set(tp, (topicFreq.get(tp) ?? 0) + 1);
  const weakRanked = [...topicFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
  const weakTopics = weakRanked.map(([tp]) => tp);

  return (
    <Container className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-ink-500">{t("welcomeBack")}</p>
          <h1 className="text-3xl font-bold text-ink-900">{user.name}</h1>
        </div>
        <div className="flex gap-2">
          <ButtonLink href="/mock-tests" size="sm">
            <ClipboardCheck className="h-4 w-4" /> {t("takeMock")}
          </ButtonLink>
          <ButtonLink href="/mentors" size="sm" variant="outline">
            Book a mentor
          </ButtonLink>
        </div>
      </div>

      <Card className="mt-8 flex flex-wrap items-center justify-between gap-4 border-brand-200 bg-brand-50/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Your access</p>
          <h2 className="mt-1 text-lg font-bold text-ink-900">{subscription?.hasAccess ? "₹99 Prep Pass · Lifetime" : "Free plan · 2 mocks"}</h2>
          <p className="mt-1 text-sm text-ink-600">
            {subscription?.hasAccess
              ? `Active${subscription.purchasedAt ? ` since ${new Date(subscription.purchasedAt).toLocaleDateString("en-IN")}` : ""}. No renewal is required.`
              : "No past or current paid access is recorded for this account."}
          </p>
        </div>
        {!subscription?.hasAccess && <PlanUnlockButton hi={false} />}
      </Card>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: ClipboardCheck, label: t("mocksTaken"), value: String(attempts.length) },
          { icon: TrendingUp, label: t("avgScore"), value: `${avg}%` },
          { icon: CalendarClock, label: t("sessionsBooked"), value: String(bookings.length) },
        ].map((s) => (
          <Card key={s.label} className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-2xl font-bold text-ink-900">{s.value}</div>
              <div className="text-xs text-ink-500">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Streak & badges */}
      <div className="mt-8">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink-900">
          <Flame className="h-5 w-5 text-saffron-500" /> {t("streakBadges")}
        </h2>
        <StreakBadges />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Recent attempts */}
        <Card>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
            <ClipboardCheck className="h-5 w-5 text-brand-600" /> Recent mock tests
          </h2>
          {attempts.length === 0 ? (
            <EmptyRow
              text="No mocks yet. Take a free diagnostic to see where you stand."
              href="/mock-tests"
              cta="Start a mock"
            />
          ) : (
            <ul className="mt-4 divide-y divide-ink-100">
              {attempts.slice(0, 12).map((a, i) => (
                <li key={i}>
                  <Link
                    href={`/mock-tests/${a.testId}`}
                    className="-mx-2 flex items-center justify-between gap-2 rounded-lg px-2 py-3 hover:bg-ink-50"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink-900">{a.testTitle}</p>
                      <p className="text-xs text-ink-500">
                        {new Date(a.takenAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })} · {a.correct}/{a.total} correct · view analysis
                      </p>
                    </div>
                    <span className="flex items-center gap-2">
                      <Badge tone={a.maxScore && a.score / a.maxScore >= 0.6 ? "green" : "amber"}>
                        {a.score}/{a.maxScore}
                      </Badge>
                      <ArrowRight className="h-4 w-4 shrink-0 text-ink-400" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>

        {/* Bookings */}
        <Card>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
            <CalendarClock className="h-5 w-5 text-brand-600" /> Mentor sessions
          </h2>
          {bookings.length === 0 ? (
            <EmptyRow
              text="No sessions booked. A mentor can fix your weak spots fast."
              href="/mentors"
              cta="Find a mentor"
            />
          ) : (
            <ul className="mt-4 divide-y divide-ink-100">
              {bookings.slice(0, 6).map((b, i) => (
                <li key={i} className="flex items-center justify-between py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink-900">{b.mentorName}</p>
                    <p className="text-xs text-ink-500">{b.post} · {b.subject} · {b.date}, {b.time}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-brand-700">{inr(b.price)}</div>
                    <Badge tone={b.paid ? "green" : "slate"}>{b.paid ? "Paid" : "Reserved"}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      {/* Weak spots */}
      <Card className="mt-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
          <Target className="h-5 w-5 text-saffron-600" /> Your focus areas
        </h2>
        {weakTopics.length === 0 ? (
          <p className="mt-3 text-sm text-ink-500">
            Take a few mocks and your weakest topics will show up here as a study list.
          </p>
        ) : (
          <>
            <div className="mt-4 flex flex-wrap gap-2">
              {weakRanked.map(([topic, count]) => (
                <span key={topic} className="inline-flex items-center gap-1.5 rounded-full bg-saffron-50 px-3 py-1 text-xs font-medium text-saffron-800 ring-1 ring-saffron-200">
                  {topic}
                  {count > 1 && <span className="rounded-full bg-saffron-200 px-1.5 text-[10px] font-bold">×{count}</span>}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-600">
              Turn these into a plan with the{" "}
              <Link href="/exam/strategy" className="font-semibold text-brand-700">strategy guide</Link>{" "}
              or a{" "}
              <Link href="/mentors" className="font-semibold text-brand-700">1-on-1 mentor</Link>.
            </p>
          </>
        )}
      </Card>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/exam" className="card card-hover flex items-center justify-between p-5">
          <span className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-brand-600" />
            <span className="text-sm font-medium text-ink-800">Revise the exam guide</span>
          </span>
          <ArrowRight className="h-4 w-4 text-ink-400" />
        </Link>
        <Link href="/pricing" className="card card-hover flex items-center justify-between p-5">
          <span className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5 text-brand-600" />
            <span className="text-sm font-medium text-ink-800">Upgrade to Prep Pass for the full library</span>
          </span>
          <ArrowRight className="h-4 w-4 text-ink-400" />
        </Link>
      </div>
    </Container>
  );
}

function EmptyRow({ text, href, cta }: { text: string; href: string; cta: string }) {
  return (
    <div className="mt-4 rounded-xl border border-dashed border-ink-200 p-5 text-center">
      <p className="text-sm text-ink-500">{text}</p>
      <ButtonLink href={href} size="sm" variant="outline" className="mt-3">
        {cta}
      </ButtonLink>
    </div>
  );
}
