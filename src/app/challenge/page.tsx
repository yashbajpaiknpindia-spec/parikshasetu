import { pageSeo } from "@/lib/seo";
import { ScrollText, Trophy, Target, Users, Gift } from "lucide-react";
import { Container, Card } from "@/components/ui";
import { ChallengeBanner } from "@/components/challenge/ChallengeBanner";
import { ChallengeRegister } from "@/components/challenge/ChallengeRegister";
import { CHALLENGE } from "@/lib/challenge";
import { getLang } from "@/lib/i18n-server";

export const metadata = pageSeo({
  title: "Free Mock Challenge: top 1% win Merit Marg free for life",
  description: "Free Mock Challenge for SUPER TET and BPSC TRE 4.0 aspirants: 3 Sunday rounds on 4, 11 and 18 October 2026. Register free in 30 seconds and see your score, rank and solutions after the round.",
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
    { icon: Users, t: { en: "Register free", hi: "मुफ़्त पंजीकरण" }, d: { en: "Name, mobile and your exam. 30 seconds.", hi: "नाम, मोबाइल और परीक्षा। 30 सेकंड।" } },
    { icon: Target, t: { en: "Take the Sunday mock", hi: "रविवार का मॉक दें" }, d: { en: "A full-length paper in the real pattern and marking.", hi: "असली पैटर्न और अंकन का पूर्ण पेपर।" } },
    { icon: Trophy, t: { en: "Top 1% win for life", hi: "टॉप 1% जीवन भर जीतें" }, d: { en: "Lifetime free access: every mock, PYQ and the plan.", hi: "लाइफ़टाइम फ़्री: हर मॉक, PYQ और योजना।" } },
  ];

  return (
    <>
      <ChallengeBanner hi={hi} />

      <section id="register" className="scroll-mt-20 bg-gradient-to-b from-saffron-50 to-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">{tx(CHALLENGE.name)}</h1>
              <p className="mt-2 text-ink-600">
                {hi ? "तीन रविवार। तीन मौके। एक इनाम जो जीवन भर काम आए।" : "Three Sundays. Three chances. A prize that lasts for life."}
              </p>
              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 text-white"><s.icon className="h-5 w-5" /></span>
                    <span>
                      <b className="block text-ink-900">{i + 1}. {tx(s.t)}</b>
                      <span className="text-sm text-ink-600">{tx(s.d)}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Card className="mt-6 flex items-start gap-3 border-teal-200 bg-teal-50/60">
                <Gift className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                <p className="text-sm text-ink-700">
                  {hi
                    ? "जीत न पाएँ तब भी फ़ायदा: हर राउंड के बाद अपना स्कोर, रैंक और हर उत्तर की व्याख्या देखें।"
                    : "Even if you don't win, you gain: see your score, rank and every answer explained after each round."}
                </p>
              </Card>
            </div>
            <ChallengeRegister hi={hi} source={source} />
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
