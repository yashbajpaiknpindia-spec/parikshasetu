import { pageSeo } from "@/lib/seo";
import Link from "next/link";
import { ScrollText, Trophy, Target, Zap, Gift } from "lucide-react";
import { Container, Card } from "@/components/ui";
import { CHALLENGE } from "@/lib/challenge";
import { getLang } from "@/lib/i18n-server";

export const metadata = pageSeo({
  title: "Free Mock Challenge: Roz ka 10 and the Sunday Sprint",
  description: "Free Mock Challenge for SUPER TET and BPSC TRE 4.0 aspirants: Round 1 was held on 4 October 2026; the top 1% win lifetime free access to Merit Marg. Now every Sunday: the 30-minute Sunday Sprint, and every day: Roz ka 10.",
  path: "/challenge",
  keywords: ["free mock test challenge", "SUPER TET mock challenge", "BPSC TRE mock challenge", "Merit Marg free mock challenge"],
  noIndex: false,
});

/** Landing page for the Free Mock Challenge (the Meta campaign points here). */
export default async function ChallengePage({ searchParams }: PageProps<"/challenge">) {
  const hi = (await getLang()) === "hi";
  const tx = (b: { en: string; hi: string }) => (hi ? b.hi : b.en);
  const sp = await searchParams;
  // e.g. /challenge?src=meta-reel-1 records which ad brought the registration
  const source = typeof sp.src === "string" ? sp.src.slice(0, 60) : typeof sp.utm_source === "string" ? sp.utm_source.slice(0, 60) : "challenge";

  const steps = [
    { icon: Zap, t: { en: "Roz ka 10, every day", hi: "रोज़ का 10, हर दिन" }, d: { en: "10 questions, 10 minutes, right or wrong after every tap. No sign-up.", hi: "10 प्रश्न, 10 मिनट, हर टैप पर तुरंत सही/गलत। बिना साइन-अप।" } },
    { icon: Target, t: { en: "Sunday Sprint, every Sunday", hi: "संडे स्प्रिंट, हर रविवार" }, d: { en: "30 questions, 30 minutes, in the real pattern and marking. Open all day.", hi: "30 प्रश्न, 30 मिनट, असली पैटर्न और अंकन में। पूरे दिन खुला।" } },
    { icon: Trophy, t: { en: "A real rank, every time", hi: "हर बार असली रैंक" }, d: { en: "Same paper for everyone on your exam that day, so your rank is real.", hi: "उस दिन आपकी परीक्षा वालों का एक ही पेपर, इसलिए रैंक असली।" } },
  ];
  const q = new URLSearchParams({ src: source }).toString();

  return (
    <>
      <section id="register" className="scroll-mt-20 bg-gradient-to-b from-saffron-50 to-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">
                {hi ? "फ़्री मॉक चैलेंज अब हर दिन" : "The Free Mock Challenge is now every day"}
              </h1>
              <p className="mt-2 text-ink-600">
                {hi ? "पूरे 2 घंटे का समय नहीं? कोई बात नहीं। रोज़ 10 मिनट दीजिए, रविवार को 30।" : "No time for a full 2-hour paper? No problem. Give it 10 minutes a day, and 30 on Sunday."}
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white"><s.icon className="h-5 w-5" /></span>
                    <span>
                      <b className="block text-ink-900">{tx(s.t)}</b>
                      <span className="text-sm text-ink-600">{tx(s.d)}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <Card className="border-brand-200">
              <p className="text-sm font-bold uppercase text-brand-700">{hi ? "अभी शुरू करें · मुफ़्त" : "Start now · free"}</p>
              <Link href={`/roz?${q}`} className="mt-3 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 text-lg font-extrabold text-white shadow-md hover:bg-brand-700">
                <Zap className="h-5 w-5" /> {hi ? "आज का 10 दें" : "Take today's 10"}
              </Link>
              <Link href={`/roz?k=sprint&${q}`} className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl border-2 border-ink-200 px-6 font-bold text-ink-800 hover:border-brand-300">
                🏁 {hi ? "संडे स्प्रिंट" : "Sunday Sprint"}
              </Link>
              <p className="mt-4 text-sm text-ink-600">
                {hi ? "पूरा पेपर देना है? हर परीक्षा का 1 पूर्ण मॉक और 2 मिनी मॉक मुफ़्त हैं।" : "Want a full paper? Every exam has 1 full mock and 2 mini mocks free."}{" "}
                <Link href="/mock-tests" className="font-semibold text-brand-700 underline">{hi ? "मॉक टेस्ट" : "Mock tests"}</Link>
              </p>
              <div className="mt-5 flex items-start gap-3 rounded-xl bg-teal-50/70 p-3">
                <Gift className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                <p className="text-sm text-ink-700">
                  {hi ? "राउंड 1 (4 अक्टूबर) के टॉप 1% को लाइफ़टाइम फ़्री एक्सेस मिलेगा; घोषणा नीचे नियमों के अनुसार।" : "Round 1 (4 October): the top 1% get lifetime free access, announced as set out in the rules below."}
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section id="rules" className="scroll-mt-20 py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900">
              <ScrollText className="h-6 w-6 text-brand-600" /> {hi ? "नियम" : "Rules"}
            </h2>
            <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-ink-700">
              {CHALLENGE.rules.map((r, i) => <li key={i}>{tx(r)}</li>)}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
