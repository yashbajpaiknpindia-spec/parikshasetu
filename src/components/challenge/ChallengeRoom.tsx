"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, LogIn, Clock, CheckCircle2, ShieldCheck, Trophy, LogOut, AlertTriangle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { ChallengePlayer } from "@/components/challenge/ChallengePlayer";
import { CHALLENGE, type ChallengeRound } from "@/lib/challenge";
import type { MockTest } from "@/lib/mock-engine";
import type { Question } from "@/data/questions";

export type RoomState = "login" | "upcoming" | "open" | "started" | "done" | "closed" | "unscheduled";

/** The paper a candidate will sit (from the server, by their exam/subject). */
export interface PaperInfo { label: string; questions: number; minutes: number; marking: string; optionE: boolean }

interface Props {
  hi: boolean;
  round: ChallengeRound;
  state: RoomState;
  user: { name: string; mobile: string } | null;
  serverNow: number;
  doneScore?: { score: number; max: number } | null;
  /** The logged-in candidate's paper; null before login. */
  paper?: PaperInfo | null;
  /** Subject choices for exams that have subjects (exam key → options). */
  subjects: Record<string, { key: string; en: string; hi: string }[]>;
  rank?: { rank: number; total: number } | null;
}

/** Days/hours/minutes/seconds until `t`, using the server clock. */
function useCountdown(t: number, skew: number) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now() + skew);
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, [skew]);
  if (now === null) return null;
  const s = Math.max(0, Math.floor((t - now) / 1000));
  return { s, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), sec: s % 60 };
}

/**
 * The Free Mock Challenge test room: login → waiting room (countdown to the opening
 * time, enforced by the server) → the paper → results. Rendered by /challenge/test.
 */
export function ChallengeRoom({ hi, round, state, user, serverNow, doneScore, paper: info, subjects, rank }: Props) {
  // A full reload (not router.refresh) so the server re-reads the fresh cookies every time.
  const reload = () => window.location.reload();
  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);
  const [skew] = useState(() => serverNow - Date.now());
  // Countdowns show the ANNOUNCED time (4:00 PM); the server may open the paper earlier.
  const opensAt = Date.parse(round.announcedAt ?? round.opensAt ?? "") || 0;
  const cd = useCountdown(opensAt, skew);
  const [paper, setPaper] = useState<{ test: MockTest; questions: Question[]; endsAt: number; skewMs: number } | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  // When the countdown reaches zero, ask the server again (it decides when the paper opens).
  useEffect(() => {
    if (state === "upcoming" && cd && cd.s === 0) reload();
  }, [state, cd]);

  async function start() {
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/challenge/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ round: round.n }) });
      const j = await r.json();
      if (!r.ok || !j.ok) {
        setErr(j.error === "not_open" ? (hi ? "पेपर अभी नहीं खुला है।" : "The paper hasn't opened yet.")
          : j.error === "closed" ? (hi ? "प्रवेश का समय समाप्त हो गया।" : "Entry time is over.")
          : j.error === "done" ? (hi ? "आप यह राउंड दे चुके हैं।" : "You have already taken this round.")
          : j.error === "login" ? (hi ? "कृपया फिर से लॉगिन करें।" : "Please log in again.")
          : (hi ? "कुछ गड़बड़ हुई, फिर कोशिश करें।" : "Something went wrong, please try again."));
        if (j.error === "done" || j.error === "login") reload();
        return;
      }
      setPaper({ test: j.test, questions: j.questions, endsAt: j.endsAt, skewMs: j.serverNow - Date.now() });
    } catch {
      setErr(hi ? "इंटरनेट जाँचें और फिर कोशिश करें।" : "Check your internet and try again.");
    } finally {
      setBusy(false);
    }
  }

  async function logout() {
    await fetch("/api/challenge/login", { method: "DELETE" }).catch(() => null);
    reload();
  }

  if (paper) {
    return (
      <ChallengePlayer
        test={paper.test}
        questions={paper.questions}
        endsAt={paper.endsAt}
        skewMs={paper.skewMs}
        round={round.n}
        storageKey={`mm_ch_answers_r${round.n}_${user?.mobile ?? ""}`}
        onSubmit={async (answers) => {
          const r = await fetch("/api/challenge/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ round: round.n, answers }) });
          const j = await r.json().catch(() => ({}));
          if (j.questions) return { questions: j.questions as Question[], saved: !!j.ok && j.saved !== false, score: Number(j.score ?? 0), max: Number(j.max ?? 0), late: !!j.late, rank: j.rank ?? null };
          return null;
        }}
      />
    );
  }

  const when = `${round.startTime ?? ""}, ${tx(round.label)}`;
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <div className="overflow-hidden rounded-3xl bg-[#0a1329] text-white shadow-xl">
        <div className="p-6 sm:p-8">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-3 py-1 text-xs font-extrabold uppercase text-ink-900">
            <Trophy className="h-3.5 w-3.5" /> {hi ? `राउंड ${round.n} · टेस्ट रूम` : `Round ${round.n} · Test room`}
          </p>
          <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">{tx(CHALLENGE.name)}</h1>
          <p className="mt-1 text-white/80">
            {info
              ? (hi ? `आपका पेपर: ${info.label} · ${info.questions} प्रश्न · ${info.minutes} मिनट · ${info.marking}` : `Your paper: ${info.label} · ${info.questions} questions · ${info.minutes} minutes · ${info.marking}`)
              : (hi ? "आपकी परीक्षा का पूरा पेपर, असली पैटर्न और अंकन में (SUPER TET या BPSC TRE 4.0)" : "The full paper of your exam, in its real pattern and marking (SUPER TET or BPSC TRE 4.0)")}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold">
            <Clock className="h-4 w-4 text-saffron-300" /> {hi ? `पेपर खुलेगा: ${when}` : `Paper opens: ${when}`}
          </p>
          {user && (
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4 text-success" /> {hi ? "लॉगिन:" : "Logged in as"} <b className="text-white">{user.name}</b> · ******{user.mobile.slice(-4)}
              <button type="button" onClick={logout} className="inline-flex items-center gap-1 text-xs text-white/60 underline hover:text-white">
                <LogOut className="h-3 w-3" /> {hi ? "बदलें" : "Not you?"}
              </button>
            </p>
          )}
        </div>

        <div className="bg-white p-6 text-ink-900 sm:p-8">
          {state === "login" && <LoginForm hi={hi} subjects={subjects} onDone={() => reload()} />}

          {state === "upcoming" && (
            <div className="text-center">
              <p className="text-lg font-bold">{hi ? "आप तैयार हैं! पेपर खुलने में" : "You're all set! The paper opens in"}</p>
              <div className="mx-auto mt-4 grid max-w-sm grid-cols-4 gap-2">
                {([[cd?.d, hi ? "दिन" : "days"], [cd?.h, hi ? "घंटे" : "hrs"], [cd?.m, hi ? "मिनट" : "min"], [cd?.sec, hi ? "सेकंड" : "sec"]] as const).map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-ink-900 py-3 text-white">
                    <div className="text-2xl font-extrabold tabular-nums">{v === undefined ? "--" : String(v).padStart(2, "0")}</div>
                    <div className="text-[11px] uppercase text-white/60">{l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-600">
                {hi ? "ठीक 4:00 बजे इसी पेज पर 'टेस्ट शुरू करें' बटन आ जाएगा। पेज खुला रखें या समय पर दोबारा खोलें।" : "At exactly 4:00 PM a 'Start the test' button appears on this page. Keep it open, or come back on time."}
              </p>
              <Rules hi={hi} info={info} />
            </div>
          )}

          {(state === "open" || state === "started") && (
            <div className="text-center">
              <p className="text-lg font-bold">
                {state === "started" ? (hi ? "आपका टेस्ट चल रहा है" : "Your test is in progress") : (hi ? "पेपर खुल गया है!" : "The paper is open!")}
              </p>
              <p className="mt-1 text-sm text-ink-600">
                {state === "started"
                  ? (hi ? "जारी रखें: आपका समय वहीं से चलेगा जहाँ छोड़ा था, उत्तर सुरक्षित हैं।" : "Continue: your clock carries on from your start, your answers are saved.")
                  : (hi ? `शुरू करते ही आपके ${info?.minutes ?? 120} मिनट चालू हो जाएँगे। एक ही प्रयास मिलेगा।` : `Your ${info?.minutes ?? 120} minutes start the moment you begin. One attempt only.`)}
              </p>
              <Button size="lg" className="mt-5 w-full" onClick={start} disabled={busy}>
                {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <PlayCircle className="h-5 w-5" />}
                {state === "started" ? (hi ? "टेस्ट जारी रखें" : "Continue the test") : (hi ? "टेस्ट शुरू करें" : "Start the test")}
              </Button>
              {err && <p className="mt-3 text-sm font-semibold text-danger">{err}</p>}
              {state === "open" && <Rules hi={hi} info={info} />}
            </div>
          )}

          {state === "done" && (
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <p className="mt-2 text-xl font-extrabold">{hi ? "आप यह राउंड दे चुके हैं" : "You've completed this round"}</p>
              {doneScore && <p className="mt-1 text-ink-700">{hi ? "आपका स्कोर" : "Your score"}: <b>{doneScore.score} / {doneScore.max}</b></p>}
              {rank && (
                <p className="mt-1 text-lg font-extrabold text-brand-700">
                  {hi ? `आपकी रैंक: ${rank.rank} (अब तक ${rank.total} प्रतिभागियों में)` : `Your rank: ${rank.rank} of ${rank.total} so far`}
                </p>
              )}
              <p className="mt-2 text-sm text-ink-600">{hi ? "टॉप 1% विजेताओं की घोषणा 3 दिन में होगी। अगले राउंड में फिर मिलेंगे!" : "The top 1% winners are announced within 3 days. See you in the next round!"}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link href="/mock-tests" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white">{hi ? "मुफ़्त मॉक से अभ्यास" : "Practise with free mocks"}</Link>
                <Link href="/pricing" className="rounded-xl border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-800">{hi ? "पास देखें" : "See the pass"}</Link>
              </div>
            </div>
          )}

          {(state === "closed" || state === "unscheduled") && (
            <div className="text-center">
              <AlertTriangle className="mx-auto h-10 w-10 text-saffron-500" />
              <p className="mt-2 text-lg font-bold">
                {state === "closed" ? (hi ? "इस राउंड का प्रवेश समय समाप्त हो गया" : "Entry for this round has closed") : (hi ? "अगले राउंड का समय जल्द घोषित होगा" : "The next round's time will be announced soon")}
              </p>
              <p className="mt-1 text-sm text-ink-600">{hi ? "अगले राउंड के लिए पंजीकरण खुला है।" : "Registration for the next rounds is open."}</p>
              <Link href="/challenge#register" className="mt-4 inline-block rounded-xl bg-saffron-400 px-5 py-2.5 text-sm font-bold text-ink-900">{hi ? "पंजीकरण करें" : "Register"}</Link>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-ink-500">
        <ShieldCheck className="h-4 w-4" />
        {hi ? "एक मोबाइल नंबर से एक ही प्रयास। स्कोर और समय सर्वर पर दर्ज होते हैं।" : "One attempt per mobile number. Score and time are recorded on the server."}
      </p>
    </div>
  );
}

function Rules({ hi, info }: { hi: boolean; info?: PaperInfo | null }) {
  const q = info?.questions ?? 120, m = info?.minutes ?? 120;
  const mark = info?.optionE
    ? (hi ? `सही +1, गलत −⅓, विकल्प E (प्रयास नहीं) 0, खाली छोड़ा −⅓` : "right +1, wrong −⅓, option E (not attempting) 0, left blank −⅓")
    : (hi ? "सही उत्तर +3, गलत −1, छोड़ा 0" : "right +3, wrong −1, skipped 0");
  const items = hi
    ? [`${q} प्रश्न, ${m} मिनट; ${mark}`, "शुरू करने के बाद घड़ी रुकती नहीं; समय पूरा होते ही अपने-आप जमा", "इंटरनेट कटे तो भी उत्तर सुरक्षित; इसी फ़ोन पर पेज दोबारा खोलें", "रैंक: अधिक अंक, फिर कम समय"]
    : [`${q} questions, ${m} minutes; ${mark}`, "Once started, the clock doesn't stop; it auto-submits at zero", "If your internet drops, your answers are kept; reopen the page on this phone", "Rank: higher score, then less time taken"];
  return (
    <ul className="mx-auto mt-5 max-w-md space-y-1.5 text-left text-sm text-ink-700">
      {items.map((x) => <li key={x} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{x}</li>)}
    </ul>
  );
}

function LoginForm({ hi, onDone, subjects }: { hi: boolean; onDone: () => void; subjects: Props["subjects"] }) {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [exam, setExam] = useState<string>(CHALLENGE.exams[0].key);
  const [consent, setConsent] = useState(false);
  const [bad, setBad] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const field = "mt-1 w-full rounded-xl border border-ink-300 bg-white px-3.5 py-2.5 text-base outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr("");
    try {
      const r = await fetch("/api/challenge/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, mobile, exam, subject, consent }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) { onDone(); return; }
      if (r.status === 422) setBad(j.fields ?? []);
      else setErr(hi ? "लॉगिन नहीं हो पाया, फिर कोशिश करें।" : "Couldn't log in, please try again.");
    } catch {
      setErr(hi ? "इंटरनेट जाँचें और फिर कोशिश करें।" : "Check your internet and try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <form onSubmit={submit} noValidate>
      <p className="flex items-center gap-2 text-lg font-bold"><LogIn className="h-5 w-5 text-brand-600" /> {hi ? "टेस्ट के लिए लॉगिन करें" : "Log in for the test"}</p>
      <p className="mt-1 text-sm text-ink-600">{hi ? "वही नाम और मोबाइल डालें जिससे पंजीकरण किया था। पंजीकरण नहीं किया? यही फ़ॉर्म पंजीकरण भी कर देगा।" : "Use the name and mobile you registered with. Not registered yet? This form registers you too."}</p>
      <label className="mt-4 block text-sm font-semibold">{hi ? "पूरा नाम" : "Full name"} *
        <input className={cn(field, bad.includes("name") && "border-danger")} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={60} />
      </label>
      <label className="mt-3 block text-sm font-semibold">{hi ? "मोबाइल (WhatsApp)" : "Mobile (WhatsApp)"} *
        <input className={cn(field, bad.includes("mobile") && "border-danger")} value={mobile} onChange={(e) => setMobile(e.target.value)} inputMode="numeric" autoComplete="tel-national" maxLength={14} placeholder="98XXXXXXXX" />
        {bad.includes("mobile") && <span className="text-xs text-danger">{hi ? "10 अंकों का सही मोबाइल नंबर" : "Enter a valid 10-digit mobile"}</span>}
      </label>
      <label className="mt-3 block text-sm font-semibold">{hi ? "आपकी परीक्षा" : "Your exam"}
        <select className={field} value={exam} onChange={(e) => { setExam(e.target.value); setSubject(""); }}>
          {CHALLENGE.exams.map((x) => <option key={x.key} value={x.key}>{hi ? x.hi : x.en}</option>)}
        </select>
      </label>
      {subjects[exam]?.length ? (
        <label className="mt-3 block text-sm font-semibold">{hi ? "आपका विषय (पेपर इसी विषय का होगा)" : "Your subject (your paper is in this subject)"} *
          <select className={cn(field, bad.includes("subject") && "border-danger")} value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">{hi ? "विषय चुनें" : "Choose your subject"}</option>
            {subjects[exam].map((x) => <option key={x.key} value={x.key}>{hi ? x.hi : x.en}</option>)}
          </select>
          {bad.includes("subject") && <span className="text-xs text-danger">{hi ? "अपना विषय चुनें" : "Please choose your subject"}</span>}
        </label>
      ) : null}
      <label className={cn("mt-4 flex items-start gap-2.5 text-sm text-ink-700", bad.includes("consent") && "text-danger")}>
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-600" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>{hi ? <>मैं <a href="/challenge#rules" className="underline">नियमों</a> से सहमत हूँ; मेरिट मार्ग परिणाम के लिए इस नंबर पर संपर्क कर सकता है। *</> : <>I accept the <a href="/challenge#rules" className="underline">rules</a> and agree that Merit Marg may contact me on this number about the result. *</>}</span>
      </label>
      <Button type="submit" size="lg" className="mt-5 w-full" disabled={busy}>
        {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <LogIn className="h-5 w-5" />} {hi ? "लॉगिन करें" : "Log in"}
      </Button>
      {err && <p className="mt-3 text-sm font-semibold text-danger">{err}</p>}
    </form>
  );
}
