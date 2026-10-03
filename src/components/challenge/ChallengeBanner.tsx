"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Trophy, Crown, ArrowRight, CalendarDays, Sparkles, Zap, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHALLENGE, nextRound, roundStart } from "@/lib/challenge";
import { PREP_LIST_PRICE } from "@/lib/pricing";

/** Days / hours / minutes / seconds until `t` (never negative). */
function useCountdown(t: number | null) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);
  if (t === null || now === null) return null;
  const s = Math.max(0, Math.floor((t - now) / 1000));
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60, live: s === 0 };
}

/**
 * The home-screen banner for the Free Mock Challenge: loud on purpose (it is the
 * landing spot for the Meta campaign). `registerHref` is where "Register free" goes:
 * the form further down the home page, or the /challenge page.
 */
export function ChallengeBanner({ hi, registerHref = "#register", compact }: { hi: boolean; registerHref?: string; compact?: boolean }) {
  const r = nextRound();
  const cd = useCountdown(r ? roundStart(r) : null);
  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);
  if (!r) return null;

  const ticker = hi
    ? ["🏆 टॉप 1% को लाइफ़टाइम फ़्री एक्सेस", "📅 4 · 11 · 18 अक्टूबर, हर रविवार", "🆓 पंजीकरण बिल्कुल मुफ़्त", "⏱️ 30 सेकंड में पंजीकरण", "🎯 असली परीक्षा पैटर्न का पूर्ण मॉक", "🔥 3 राउंड, जीतने के 3 मौके"]
    : ["🏆 Top 1% win LIFETIME free access", "📅 4 · 11 · 18 October, every Sunday", "🆓 Registration 100% free", "⏱️ Register in 30 seconds", "🎯 Full mock in the real exam pattern", "🔥 3 rounds, 3 chances to win"];

  return (
    <section aria-label={tx(CHALLENGE.name)} className="relative overflow-hidden bg-[#0a1329] text-white">
      {/* glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-saffron-400/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-rose-500/25 blur-3xl" aria-hidden />

      <div className={cn("relative mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center", compact ? "py-6" : "py-8 sm:py-10")}>
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold uppercase tracking-wide shadow-lg shadow-rose-900/40">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-white" /></span>
            {hi ? "पंजीकरण शुरू · बिल्कुल मुफ़्त" : "Registration open · 100% free"}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] sm:text-5xl">
            {hi ? (
              <>99% को पीछे छोड़िए,<br /><span className="bg-gradient-to-r from-saffron-300 via-amber-300 to-saffron-400 bg-clip-text text-transparent">मेरिट मार्ग जीवन भर फ़्री</span> पाइए!</>
            ) : (
              <>Beat 99% of aspirants.<br /><span className="bg-gradient-to-r from-saffron-300 via-amber-300 to-saffron-400 bg-clip-text text-transparent">Win Merit Marg FREE for life.</span></>
            )}
          </h2>
          <p className="mt-3 max-w-xl text-base text-white/85 sm:text-lg">
            {hi
              ? <>{tx(CHALLENGE.name)}: 3 रविवार, 3 पूर्ण मॉक। हर राउंड के <b className="text-saffron-300">टॉप 1%</b> को मिलेगा <b className="text-saffron-300">लाइफ़टाइम फ़्री एक्सेस</b> (₹{PREP_LIST_PRICE} का पास), हर मॉक, हर पिछला प्रश्न-पत्र और पूरी योजना।</>
              : <>{tx(CHALLENGE.name)}: 3 Sundays, 3 full mocks. The <b className="text-saffron-300">top 1%</b> of every round get <b className="text-saffron-300">lifetime free access</b> (a ₹{PREP_LIST_PRICE} pass): every mock, every previous-year paper and the full plan.</>}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {CHALLENGE.rounds.map((x) => (
              <span key={x.n} className={cn("inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-bold ring-1", x.n === r.n ? "bg-saffron-400 text-ink-900 ring-saffron-300" : "bg-white/10 text-white ring-white/20")}>
                <CalendarDays className="h-4 w-4" /> {hi ? `राउंड ${x.n}` : `Round ${x.n}`} · {tx(x.label)}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={registerHref}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-saffron-300 to-saffron-500 px-6 py-3.5 text-base font-extrabold text-ink-900 shadow-xl shadow-saffron-900/30 transition-transform hover:-translate-y-0.5 sm:text-lg"
            >
              <Zap className="h-5 w-5" /> {hi ? "अभी मुफ़्त पंजीकरण करें" : "Register free now"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            {r.opensAt ? (
              <Link
                href="/challenge/test"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-base font-extrabold text-ink-900 ring-2 ring-saffron-300 transition-transform hover:-translate-y-0.5"
              >
                <LogIn className="h-5 w-5" /> {hi ? `राउंड ${r.n} टेस्ट: लॉगिन (${r.startTime})` : `Round ${r.n} test: log in (${r.startTime})`}
              </Link>
            ) : (
              <span className="text-sm text-white/70">{hi ? "30 सेकंड · सिर्फ़ नाम और मोबाइल" : "30 seconds · just your name and mobile"}</span>
            )}
          </div>
        </div>

        {/* countdown + prize */}
        <div className="rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/15 backdrop-blur">
          <p className="flex items-center gap-2 text-sm font-semibold text-saffron-300">
            <Crown className="h-5 w-5" /> {hi ? `राउंड ${r.n}${r.startTime ? ` (${r.startTime})` : ""} शुरू होने में` : `Round ${r.n}${r.startTime ? ` (${r.startTime})` : ""} starts in`}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2 text-center" aria-live="off">
            {([
              [cd?.d, hi ? "दिन" : "days"], [cd?.h, hi ? "घंटे" : "hrs"], [cd?.m, hi ? "मिनट" : "min"], [cd?.s, hi ? "सेकंड" : "sec"],
            ] as const).map(([v, l]) => (
              <div key={l} className="rounded-xl bg-[#0a1329] py-2.5 ring-1 ring-white/10">
                <div className="text-2xl font-extrabold tabular-nums text-white sm:text-3xl">{v === undefined ? "--" : String(v).padStart(2, "0")}</div>
                <div className="text-[11px] uppercase tracking-wide text-white/60">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-saffron-400/20 to-rose-500/20 p-3 ring-1 ring-saffron-300/30">
            <Trophy className="h-9 w-9 shrink-0 text-saffron-300" />
            <p className="text-sm leading-snug">
              <b className="text-white">{tx(CHALLENGE.prize)}</b>
              <span className="block text-white/70">{hi ? "हर राउंड के टॉप 1% · हर राउंड में कम से कम 1 विजेता" : "Top 1% of every round · at least 1 winner each round"}</span>
            </p>
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-white/60">
            <Sparkles className="h-3.5 w-3.5" /> {hi ? "मॉक की लिंक पंजीकृत नंबर पर WhatsApp से मिलेगी।" : "The mock link reaches your registered number on WhatsApp."}
          </p>
        </div>
      </div>

      {/* ticker */}
      <div className="relative overflow-hidden border-t border-white/10 bg-saffron-400 py-2 text-ink-900">
        <div className="marquee flex w-max gap-10 whitespace-nowrap text-sm font-bold">
          {[...ticker, ...ticker].map((x, i) => <span key={i} aria-hidden={i >= ticker.length}>{x}</span>)}
        </div>
      </div>
    </section>
  );
}
