"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Share2, Trophy, MessageCircle, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { CHALLENGE } from "@/lib/challenge";
import { siteConfig, whatsappLink } from "@/lib/config";

const STORE = "mm_challenge_reg";
type Saved = { regNo: string; name: string; rounds: number[] };

declare global {
  interface Window { fbq?: (...a: unknown[]) => void }
}

/**
 * The Free Mock Challenge registration form (home page and /challenge). On success
 * it shows the registration number and a share button; the result is remembered on
 * this browser so a returning visitor sees "You're registered".
 */
export function ChallengeRegister({ hi, source = "home", className }: { hi: boolean; source?: string; className?: string }) {
  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [exam, setExam] = useState<string>(CHALLENGE.exams[0].key);
  const [district, setDistrict] = useState("");
  const [rounds, setRounds] = useState<number[]>(CHALLENGE.rounds.map((r) => r.n));
  const [consent, setConsent] = useState(false);
  const [offers, setOffers] = useState(true);
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<"idle" | "sending" | "error" | "offline">("idle");
  const [bad, setBad] = useState<string[]>([]);
  const [done, setDone] = useState<Saved | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        const s = localStorage.getItem(STORE);
        if (s) setDone(JSON.parse(s));
      } catch { /* private mode */ }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const toggleRound = (n: number) => setRounds((r) => (r.includes(n) ? r.filter((x) => x !== n) : [...r, n].sort()));

  const waText = () =>
    `${tx(CHALLENGE.name)} – ${hi ? "पंजीकरण" : "Registration"}\n${hi ? "नाम" : "Name"}: ${name}\n${hi ? "मोबाइल" : "Mobile"}: ${mobile}\n${hi ? "परीक्षा" : "Exam"}: ${tx(CHALLENGE.exams.find((e) => e.key === exam)!)}\n${hi ? "ज़िला" : "District"}: ${district || "-"}\n${hi ? "राउंड" : "Rounds"}: ${rounds.join(", ")}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: string[] = [];
    if (name.trim().length < 2) errs.push("name");
    if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, ""))) errs.push("mobile");
    if (!rounds.length) errs.push("rounds");
    if (!consent) errs.push("consent");
    setBad(errs);
    if (errs.length) return;
    setState("sending");
    try {
      const r = await fetch("/api/challenge/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, mobile, exam, district, rounds, consent, offers, website, source }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        const saved = { regNo: j.regNo as string, name: name.trim(), rounds };
        try { localStorage.setItem(STORE, JSON.stringify(saved)); } catch { /* ignore */ }
        try { window.fbq?.("track", "CompleteRegistration", { content_name: "free-mock-challenge" }); } catch { /* ignore */ }
        setDone(saved);
        setState("idle");
        return;
      }
      if (r.status === 422) { setBad(j.fields ?? []); setState("idle"); return; }
      setState(r.status === 503 ? "offline" : "error");
    } catch {
      setState("error");
    }
  }

  const share = async () => {
    const text = hi
      ? `मैंने ${tx(CHALLENGE.name)} के लिए मुफ़्त पंजीकरण कर लिया! टॉप 1% को मेरिट मार्ग लाइफ़टाइम फ़्री। 4, 11, 18 अक्टूबर। तुम भी करो:`
      : `I just registered free for the ${tx(CHALLENGE.name)}! Top 1% win Merit Marg free for life. 4, 11, 18 October. Join me:`;
    const url = `${window.location.origin}/challenge`;
    try {
      if (navigator.share) { await navigator.share({ text, url }); return; }
    } catch { /* cancelled */ }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener");
  };

  if (done) {
    return (
      <div className={cn("rounded-3xl border-2 border-teal-300 bg-white p-6 text-center shadow-lg", className)}>
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <p className="mt-3 text-2xl font-extrabold text-ink-900">{hi ? `बधाई हो ${done.name}, आप पंजीकृत हैं!` : `You're in, ${done.name}!`}</p>
        <p className="mt-1 text-ink-600">{hi ? "आपका पंजीकरण नंबर" : "Your registration number"}</p>
        <p className="mt-1 inline-block rounded-xl bg-ink-900 px-4 py-2 font-mono text-xl font-bold tracking-wider text-saffron-300">{done.regNo}</p>
        <p className="mt-4 text-sm text-ink-700">
          {hi ? "राउंड" : "Rounds"}:{" "}
          {CHALLENGE.rounds.filter((r) => done.rounds.includes(r.n)).map((r) => tx(r.label)).join(" · ")}
        </p>
        <p className="mt-2 text-sm text-ink-600">
          {hi
            ? <>टेस्ट रूम: <a href="/challenge/test" className="font-semibold text-brand-700 underline">/challenge/test</a> पर इसी नाम और मोबाइल से लॉगिन करें। पेपर राउंड वाले दिन शाम 4:00 बजे खुलेगा; लिंक WhatsApp पर भी मिलेगा।</>
            : <>Test room: log in at <a href="/challenge/test" className="font-semibold text-brand-700 underline">/challenge/test</a> with this name and mobile. The paper opens at 4:00 PM on the round day; the link also comes on WhatsApp.</>}
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={share} className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-700">
            <Share2 className="h-4 w-4" /> {hi ? "दोस्तों को भेजें" : "Challenge your friends"}
          </button>
          <Link href="/mock-tests" className="inline-flex items-center gap-2 rounded-xl border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-800 hover:bg-ink-50">
            {hi ? "मुफ़्त मॉक से अभ्यास करें" : "Practise with free mocks"}
          </Link>
        </div>
        <button type="button" onClick={() => { try { localStorage.removeItem(STORE); } catch {} setDone(null); }} className="mt-4 text-xs text-ink-400 underline">
          {hi ? "किसी और का पंजीकरण करें" : "Register someone else"}
        </button>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-ink-300 bg-white px-3.5 py-2.5 text-base text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
  const err = (k: string) => bad.includes(k);

  return (
    <form onSubmit={submit} noValidate className={cn("rounded-3xl border-2 border-saffron-300 bg-white p-5 shadow-xl sm:p-6", className)}>
      <p className="flex items-center gap-2 text-lg font-extrabold text-ink-900 sm:text-xl">
        <Trophy className="h-6 w-6 text-saffron-500" /> {hi ? "मुफ़्त पंजीकरण फ़ॉर्म" : "Free registration form"}
      </p>
      <p className="mt-1 text-sm text-ink-600">{hi ? "30 सेकंड लगेंगे। कोई शुल्क नहीं।" : "Takes 30 seconds. No fee."}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-ink-800">{hi ? "पूरा नाम" : "Full name"} *</span>
          <input className={cn(field, "mt-1", err("name") && "border-danger")} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" maxLength={60} />
          {err("name") && <span className="text-xs text-danger">{hi ? "अपना नाम लिखें" : "Please enter your name"}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-800">{hi ? "मोबाइल (WhatsApp)" : "Mobile (WhatsApp)"} *</span>
          <div className={cn("mt-1 flex rounded-xl border border-ink-300 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-200", err("mobile") && "border-danger")}>
            <span className="grid place-items-center border-r border-ink-200 px-3 text-sm text-ink-500">+91</span>
            <input className="w-full rounded-r-xl bg-white px-3 py-2.5 text-base text-ink-900 outline-none" value={mobile} onChange={(e) => setMobile(e.target.value)} inputMode="numeric" autoComplete="tel-national" maxLength={14} placeholder="98XXXXXXXX" />
          </div>
          {err("mobile") && <span className="text-xs text-danger">{hi ? "10 अंकों का सही मोबाइल नंबर लिखें" : "Enter a valid 10-digit mobile number"}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-800">{hi ? "आपकी परीक्षा" : "Your exam"} *</span>
          <select className={cn(field, "mt-1")} value={exam} onChange={(e) => setExam(e.target.value)}>
            {CHALLENGE.exams.map((x) => <option key={x.key} value={x.key}>{tx(x)}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-800">{hi ? "ज़िला (वैकल्पिक)" : "District (optional)"}</span>
          <input className={cn(field, "mt-1")} value={district} onChange={(e) => setDistrict(e.target.value)} maxLength={40} autoComplete="address-level2" />
        </label>
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-semibold text-ink-800">{hi ? "किन राउंड में भाग लेंगे?" : "Which rounds will you take?"} *</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CHALLENGE.rounds.map((r) => (
            <button
              key={r.n}
              type="button"
              aria-pressed={rounds.includes(r.n)}
              onClick={() => toggleRound(r.n)}
              className={cn("inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors",
                rounds.includes(r.n) ? "border-brand-600 bg-brand-600 text-white" : "border-ink-300 text-ink-700 hover:border-brand-400")}
            >
              <CalendarDays className="h-4 w-4" /> {hi ? `राउंड ${r.n}` : `Round ${r.n}`} · {tx(r.label)}
            </button>
          ))}
        </div>
        {err("rounds") && <span className="text-xs text-danger">{hi ? "कम से कम एक राउंड चुनें" : "Pick at least one round"}</span>}
      </fieldset>

      {/* honeypot */}
      <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <label className={cn("mt-4 flex items-start gap-2.5 text-sm text-ink-700", err("consent") && "text-danger")}>
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-600" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>
          {hi
            ? <>मैं नियमों से सहमत हूँ और मेरिट मार्ग मुझे इस नंबर पर चैलेंज व परिणाम के बारे में WhatsApp/SMS/कॉल कर सकता है। (<a href="/challenge#rules" className="underline">नियम</a>, <a href="/legal/privacy" className="underline">गोपनीयता</a>) *</>
            : <>I accept the rules and agree that Merit Marg may contact me on this number by WhatsApp, SMS or call about the challenge and its results. (<a href="/challenge#rules" className="underline">Rules</a>, <a href="/legal/privacy" className="underline">Privacy</a>) *</>}
        </span>
      </label>
      <label className="mt-2 flex items-start gap-2.5 text-sm text-ink-700">
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-brand-600" checked={offers} onChange={(e) => setOffers(e.target.checked)} />
        <span>{hi ? "मुझे नए मॉक, परीक्षा अपडेट और ऑफ़र भी भेजें (वैकल्पिक)।" : "Also send me new mocks, exam updates and offers (optional)."}</span>
      </label>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-saffron-400 to-saffron-500 px-6 py-3.5 text-lg font-extrabold text-ink-900 shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {state === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Trophy className="h-5 w-5" />}
        {hi ? "मुफ़्त पंजीकरण करें" : "Register free"}
      </button>

      {(state === "offline" || state === "error") && (
        <div className="mt-4 rounded-xl bg-saffron-50 p-3 text-sm text-saffron-900 ring-1 ring-saffron-200">
          <p>{hi ? "ऑनलाइन पंजीकरण अभी नहीं हो पाया। WhatsApp पर एक क्लिक में पंजीकरण करें:" : "Online registration didn't go through. Register in one tap on WhatsApp instead:"}</p>
          <a href={whatsappLink(waText())} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white">
            <MessageCircle className="h-4 w-4" /> WhatsApp {siteConfig.whatsappDisplay}
          </a>
        </div>
      )}
    </form>
  );
}
