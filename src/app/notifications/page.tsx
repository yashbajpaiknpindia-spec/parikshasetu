import type { Metadata } from "next";
import Link from "next/link";
import { Bell, CalendarDays, RefreshCw, Newspaper, ExternalLink } from "lucide-react";
import { Container, Badge, Callout, Card } from "@/components/ui";
import { NotificationsFeed } from "@/components/notifications/NotificationsFeed";
import { getNotificationFeed } from "@/lib/notifications-source";
import { getLang } from "@/lib/i18n-server";

export const metadata: Metadata = {
  title: "Job Notifications & Exam Calendar",
  description:
    "Live government teaching job openings, a 6-month exam calendar and the latest recruitment news, each linked to the official notification.",
};

// Re-fetch the live feed (if configured) at most once an hour.
export const revalidate = 3600;

const monthFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default async function NotificationsPage() {
  const feed = await getNotificationFeed();
  const hi = (await getLang()) === "hi";

  // Exam calendar: everything with a known exam date, soonest first.
  const calendar = feed.notifications
    .filter((n) => n.examDateISO)
    .sort((a, b) => (a.examDateISO! < b.examDateISO! ? -1 : 1));

  const updates = [...feed.newsUpdates].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

  return (
    <>
      <section className="hero-gradient">
        <Container className="py-16">
          <Badge tone="saffron"><Bell className="h-3.5 w-3.5" /> {hi ? "लाइव भर्तियाँ" : "Live openings"}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-ink-900 sm:text-5xl">
            {hi ? "भर्ती सूचनाएँ और परीक्षा कैलेंडर" : "Job notifications & exam calendar"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-600">
            {hi
              ? "हर प्रमुख केंद्रीय व राज्य शिक्षक भर्ती और पात्रता परीक्षा एक ही फ़ीड में: रिक्तियों, तिथियों और आधिकारिक अधिसूचना के सीधे लिंक के साथ।"
              : "Every major central and state teaching recruitment and eligibility test in one feed, with vacancies, dates and a direct link to the official notification."}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-600 ring-1 ring-ink-200">
            <RefreshCw className="h-3.5 w-3.5 text-brand-600" />
            {feed.source === "live" ? (hi ? "लाइव फ़ीड" : "Live feed") : (hi ? "संकलित फ़ीड" : "Curated feed")} · {hi ? "अद्यतन" : "updated"} {feed.lastUpdated} · {hi ? "हर घंटे स्वतः ताज़ा" : "auto-refreshes hourly"}
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <Callout tone="amber" title={hi ? "आधिकारिक पोर्टल पर अवश्य सत्यापित करें" : "Always verify on the official portal"} className="mb-10">
            {hi
              ? "रिक्तियाँ और तिथियाँ नवीनतम उपलब्ध स्रोतों से संकलित हैं और लगातार बदलती रहती हैं (शुद्धिपत्र, विस्तार, न्यायालय आदेश)। हर आँकड़े को संकेत मात्र मानें: आवेदन या कार्य करने से पहले प्रत्येक कार्ड पर दी गई आधिकारिक अधिसूचना खोलें।"
              : "Vacancies and dates are compiled from the latest available sources and change constantly (corrigenda, extensions, court orders). Treat every figure as a pointer. Open the official notification linked on each card before you apply or act."}
          </Callout>

          {/* Exam calendar */}
          {calendar.length > 0 && (
            <div className="mb-14">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
                <CalendarDays className="h-6 w-6 text-brand-600" /> {hi ? "आगामी परीक्षा कैलेंडर" : "Upcoming exam calendar"}
              </h2>
              <p className="mt-2 text-sm text-ink-500">{hi ? "पुष्ट व संभावित परीक्षा तिथियाँ, निकटतम पहले।" : "Confirmed and expected exam dates, soonest first."}</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-200">
                {calendar.map((n, i) => (
                  <div
                    key={n.id}
                    className={`flex flex-wrap items-center gap-3 px-4 py-3 sm:px-5 ${i % 2 ? "bg-ink-50" : "bg-white"}`}
                  >
                    <div className="w-28 shrink-0">
                      <div className="text-sm font-bold text-brand-700">
                        {monthFmt.format(new Date(n.examDateISO!))}
                      </div>
                      {n.dateConfidence && (
                        <span className={`text-[11px] font-medium ${n.dateConfidence === "confirmed" ? "text-success" : "text-saffron-700"}`}>
                          {n.dateConfidence === "confirmed" ? (hi ? "पुष्ट" : "Confirmed") : n.dateConfidence === "tentative" ? (hi ? "संभावित" : "Tentative") : (hi ? "तिथि शेष" : "Date TBA")}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink-900">{n.title}</p>
                      <p className="text-xs text-ink-500">{n.state} · {n.examDate ?? n.posts}</p>
                    </div>
                    <a href={n.noticeUrl ?? n.applyUrl ?? n.officialUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-semibold text-brand-700 inline-flex items-center gap-1">
                      {n.noticeUrl ? (hi ? "सूचना" : "Notice") : n.applyUrl ? (hi ? "आवेदन" : "Apply") : (hi ? "वेबसाइट" : "Website")} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Latest updates */}
          {updates.length > 0 && (
            <div className="mb-14">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
                <Newspaper className="h-6 w-6 text-brand-600" /> {hi ? "ताज़ा अपडेट" : "Latest updates"}
              </h2>
              <div className="mt-6 space-y-3">
                {updates.map((u) => (
                  <div key={u.id} className="flex gap-4 rounded-xl border border-ink-200 p-4">
                    <div className="w-24 shrink-0 text-xs font-semibold text-ink-500">{u.dateLabel}</div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-ink-800">{u.text}</p>
                      {u.url && (
                        <a href={u.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                          Source <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    {u.state && <span className="shrink-0 text-xs text-ink-400">{u.state}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full feed */}
          <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
            <Bell className="h-6 w-6 text-brand-600" /> {hi ? "सभी भर्तियाँ" : "All openings"}
          </h2>
          <div className="mt-6">
            <NotificationsFeed notifications={feed.notifications} />
          </div>

          <p className="mt-10 text-center text-xs text-ink-400">
            Keeping a live feed? Point <code className="rounded bg-ink-100 px-1">NOTIFICATIONS_FEED_URL</code> at a
            JSON source and this page refreshes automatically, see{" "}
            <Link href="/about" className="underline">SETUP</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
