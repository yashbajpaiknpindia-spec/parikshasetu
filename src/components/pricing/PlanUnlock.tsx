"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Lock, Loader2, CheckCircle2, Check, Clock, RotateCcw, ShieldCheck } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";
import { loadRazorpayScript, openRazorpayCheckout } from "@/lib/razorpay-client";
import { getPassTier, announcePassChange } from "@/lib/plan-access";
import {
  PASS_NAME, PRODUCT_PRICE, PRODUCT_TIER, MENTOR_PRICE, PREP_PRICE, UPGRADE_PRICE, MENTOR_LIVE, isOnSale,
  type PassTier, type Product,
} from "@/lib/pricing";
import { PASS_STATS, plusCount } from "@/lib/pass-stats";
import { siteConfig } from "@/lib/config";
import { WhatsAppLink } from "@/components/site/WhatsAppHelp";
import { useAuth } from "@/components/auth/AuthProvider";

/** The pass on this browser. undefined = not read yet, null = none. */
export function usePassTier() {
  const [tier, setTier] = useState<PassTier | null | undefined>(undefined);
  useEffect(() => {
    let active = true;
    const read = async () => {
      try {
        const r = await fetch("/api/plan-access", { cache: "no-store" });
        const d = await r.json();
        if (active) setTier((d.tier as PassTier | null) ?? null);
      } catch { if (active) setTier(null); }
    };
    void read();
    const onChange = () => void read();
    window.addEventListener("mm-pass", onChange);
    return () => { active = false; window.removeEventListener("mm-pass", onChange); };
  }, []);
  return tier;
}

/** After a purchase or restore: tell the page, then reload so the server sends the questions. */
function unlocked() {
  announcePassChange();
  setTimeout(() => window.location.reload(), 900);
}

const PRODUCT_LABEL: Record<Product, { en: string; hi: string }> = {
  prep: { en: `Unlock everything · ₹${PREP_PRICE}`, hi: `सब कुछ अनलॉक करें · ₹${PREP_PRICE}` },
  mentor: { en: `Get mentorship · ₹${MENTOR_PRICE}`, hi: `मेंटरशिप लें · ₹${MENTOR_PRICE}` },
  "mentor-upgrade": { en: `Add mentorship · ₹${UPGRADE_PRICE}`, hi: `मेंटरशिप जोड़ें · ₹${UPGRADE_PRICE}` },
};


/**
 * The buy button. Razorpay only: the server creates the order at the server-side
 * price, Razorpay collects, the server verifies and sets the signed pass cookie.
 * While Razorpay verification is pending (no keys yet) the button shows but is off.
 */
export function BuyPassButton({
  product, hi, size = "md", variant = "accent", className, fullWidth,
}: {
  product: Product; hi: boolean; size?: "sm" | "md" | "lg"; variant?: "accent" | "primary" | "outline";
  className?: string; fullWidth?: boolean;
}) {
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const label = hi ? PRODUCT_LABEL[product].hi : PRODUCT_LABEL[product].en;

  async function buy() {
    if (!user) {
      const next = `${pathname}?buy=${encodeURIComponent(product)}`;
      router.push(`/login?next=${encodeURIComponent(next)}`);
      return;
    }
    setState("busy");
    setMsg("");
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      if (res.status === 401) {
        const next = `${pathname}?buy=${encodeURIComponent(product)}`;
        router.push(`/login?next=${encodeURIComponent(next)}`);
        return;
      }
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        if (e.error === "already_owned") { setState("done"); unlocked(); return; }
        throw new Error(e.message || (hi ? "भुगतान शुरू नहीं हो पाया। दोबारा कोशिश करें।" : "Couldn't start the payment. Please try again."));
      }
      const order = await res.json();
      if (!(await loadRazorpayScript())) throw new Error(hi ? "भुगतान विंडो नहीं खुली। इंटरनेट जाँचें।" : "The payment window didn't load. Check your internet.");
      const opened = openRazorpayCheckout({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: siteConfig.name,
        description: `${PASS_NAME[PRODUCT_TIER[product]].en} · ₹${PRODUCT_PRICE[product]}`,
        order_id: order.orderId,
        prefill: user ? { name: user.name, email: user.email } : undefined,
        theme: { color: "#0a1329" },
        modal: { ondismiss: () => setState("idle") },
        handler: async (r) => {
          const v = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(r),
          });
          const data = v.ok ? await v.json() : null;
          if (!data?.verified || !data?.tier) {
            setState("error");
            setMsg(hi
              ? `भुगतान की पुष्टि नहीं हुई। पैसे कटे हों तो WhatsApp करें ${siteConfig.whatsappDisplay}, पेमेंट ID: ${r.razorpay_payment_id}`
              : `We couldn't confirm the payment. If money was deducted, WhatsApp ${siteConfig.whatsappDisplay} with payment ID ${r.razorpay_payment_id}.`);
            return;
          }
          setState("done");
          unlocked();
        },
      });
      if (!opened) throw new Error(hi ? "भुगतान विंडो नहीं खुली।" : "Couldn't open the payment window.");
    } catch (e) {
      setState("error");
      setMsg(e instanceof Error ? e.message : "Something went wrong.");
    }
  }

  useEffect(() => {
    if (!user || state !== "idle" || !isOnSale(product)) return;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("buy") !== product) return;
      const key = `mm_autobuy_${product}_${window.location.pathname}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
      void buy();
    } catch {}
    // buy intentionally excluded: this should run only when login state resolves.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, product, state]);

  if (!isOnSale(product)) {
    return (
      <div className={className}>
        <ButtonLink href="/mentors" size={size} variant="outline" className={cn(fullWidth && "w-full")}>
          <Clock className="h-4 w-4" /> {hi ? "जल्द आ रहा है" : "Coming soon"}
        </ButtonLink>
      </div>
    );
  }

  if (state === "done") {
    return (
      <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        <CheckCircle2 className="h-4 w-4" /> {hi ? "पास चालू हो गया! पेज खुल रहा है…" : "Pass active! Opening your tests…"}
      </p>
    );
  }
  return (
    <div className={className}>
      <Button size={size} variant={variant} onClick={buy} disabled={state === "busy"} className={cn(fullWidth && "w-full")}>
        {state === "busy" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
        {label}
      </Button>
      {msg && <p className="mt-2 text-xs text-red-600">{msg}</p>}
    </div>
  );
}

/**
 * "Paid on another phone?" Restore a Razorpay purchase with its payment ID. The server
 * checks the payment with Razorpay before re-opening anything. Hidden until Razorpay is live.
 */
export function RestorePurchaseForm({ hi, className }: { hi: boolean; className?: string }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "ok" | "bad">("idle");
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) { router.push(`/login?next=${encodeURIComponent(pathname)}`); return; }
    if (!id.trim()) return;
    setState("busy");
    try {
      const r = await fetch("/api/pass/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: id.trim() }),
      });
      if (!r.ok) { setState("bad"); return; }
      setState("ok");
      unlocked();
    } catch {
      setState("bad");
    }
  };

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={cn("inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline", className)}>
        <RotateCcw className="h-4 w-4" /> {hi ? "दूसरे फ़ोन पर ख़रीदा था? पास वापस पाएँ" : "Bought it on another phone? Restore your pass"}
      </button>
    );
  }
  if (state === "ok") {
    return (
      <p className={cn("inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700", className)}>
        <CheckCircle2 className="h-4 w-4" /> {hi ? "पास चालू हो गया! पेज खुल रहा है…" : "Pass active! Opening your tests…"}
      </p>
    );
  }
  return (
    <form onSubmit={submit} className={cn("w-full", className)}>
      <label className="block text-left text-xs font-semibold text-ink-700" htmlFor="mm-payid">
        {hi ? "Razorpay पेमेंट ID (भुगतान की ईमेल/SMS में, pay_ से शुरू)" : "Razorpay payment ID (in your payment email or SMS, starts with pay_)"}
      </label>
      <div className="mt-1.5 flex gap-2">
        <input
          id="mm-payid"
          value={id}
          onChange={(e) => { setId(e.target.value); setState("idle"); }}
          placeholder="pay_XXXXXXXXXXXXXX"
          autoComplete="off"
          spellCheck={false}
          className="min-w-0 flex-1 rounded-xl border border-ink-300 bg-white px-3 py-2.5 font-mono text-sm text-ink-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
        <Button type="submit" disabled={state === "busy"} className="shrink-0">
          {state === "busy" ? <Loader2 className="h-4 w-4 animate-spin" /> : hi ? "पाएँ" : "Restore"}
        </Button>
      </div>
      {state === "bad" && (
        <p className="mt-1.5 text-left text-xs text-red-600">
          {hi ? "यह भुगतान नहीं मिला। ID दोबारा जाँचें।" : "We couldn't find that payment. Please check the ID."}
        </p>
      )}
    </form>
  );
}

/** What ₹99 unlocks, with real counts. Shared by the paywall and the pricing page. */
export function prepBenefits(hi: boolean): string[] {
  const s = PASS_STATS;
  return hi
    ? [
        `${s.fullMocks} पूर्ण मॉक टेस्ट, असली पैटर्न और अंकन में`,
        `${plusCount(s.sectionMocks)} खंड-वार मॉक`,
        `पूरी दिन-प्रतिदिन योजना: ${plusCount(s.practiceSets)} टॉपिक सेट और ${s.weekTests} सप्ताह-टेस्ट`,
        "हर टेस्ट के बाद टॉपिक-वार विश्लेषण और आपकी अपनी कार्य-योजना",
        "SUPER TET और BPSC TRE 4.0 (1–5, 6–8), एक ही पास में",
        "आगे जुड़ने वाले सभी टेस्ट भी, बिना अतिरिक्त शुल्क",
      ]
    : [
        `${s.fullMocks} full mock tests in the real pattern and marking`,
        `${plusCount(s.sectionMocks)} section-wise mocks`,
        `The complete day-by-day plan: ${plusCount(s.practiceSets)} topic sets and ${s.weekTests} week tests`,
        "Topic-wise analysis and your own action plan after every test",
        "SUPER TET and BPSC TRE 4.0 (1–5, 6–8), all in one pass",
        "Every new test we add, at no extra cost",
      ];
}

/**
 * The paywall. One clear offer (₹99), real numbers, one big button. Shown on every
 * locked test and on the plan.
 */
export function PaywallCard({ hi, title, className }: { hi: boolean; title?: string; className?: string }) {
  const total = PASS_STATS.totalTests;
  const perTest = PREP_PRICE / Math.max(1, total);
  return (
    <div className={cn("overflow-hidden rounded-2xl border-2 border-saffron-300 bg-white shadow-lg", className)}>
      <div className="bg-[#0a1329] px-5 py-5 text-center text-white">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-saffron-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          <Lock className="h-3.5 w-3.5" /> {hi ? "प्रेप पास से खुलेगा" : "Unlocks with the Prep Pass"}
        </p>
        <p className="mt-3 text-xl font-extrabold leading-snug sm:text-2xl">
          {title ?? (hi ? `${plusCount(total)} टेस्ट, सिर्फ़ ₹${PREP_PRICE} में` : `${plusCount(total)} tests. Just ₹${PREP_PRICE}.`)}
        </p>
        <p className="mt-1.5 text-sm text-white/80">
          {hi
            ? `एक बार भुगतान, कोई सब्सक्रिप्शन नहीं।${perTest < 1 ? " यानी एक टेस्ट ₹1 से भी कम का।" : ""}`
            : `Pay once, no subscription.${perTest < 1 ? " That's less than ₹1 a test." : ""}`}
        </p>
      </div>

      <div className="p-5">
        <ul className="space-y-2.5">
          {prepBenefits(hi).map((f) => (
            <li key={f} className="flex gap-2.5 text-sm font-medium text-ink-800">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <BuyPassButton product="prep" hi={hi} size="lg" className="mt-5" fullWidth />

        <div className="mt-3 text-center">
          <RestorePurchaseForm hi={hi} />
        </div>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs text-ink-500">
          <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-success" /> {hi ? "एक बार भुगतान" : "One-time payment"}</span>
          <span>·</span>
          <Link href="/pricing" className="font-semibold text-brand-700 hover:underline">{hi ? "पूरी तुलना देखें" : "Compare plans"}</Link>
          <span>·</span>
          <WhatsAppLink text={hi ? "नमस्ते, मुझे प्रेप पास के बारे में पूछना है" : "Hi, I have a question about the Prep Pass"} label={hi ? "सवाल? WhatsApp" : "Questions? WhatsApp"} className="text-xs" />
        </p>
        <p className="mt-2 text-center text-xs text-ink-400">
          {hi ? `1-on-1 मेंटरशिप (₹${MENTOR_PRICE}) जल्द आ रही है` : `1-on-1 mentorship (₹${MENTOR_PRICE}) is coming soon`}
        </p>
      </div>
    </div>
  );
}

/** Lock chip on a paid test card (hidden once the viewer has a pass). */
export function PassChip({ hi }: { hi: boolean }) {
  const tier = usePassTier();
  if (tier) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-ink-900 px-2 py-0.5 text-[11px] font-semibold text-saffron-300">
      <Lock className="h-3 w-3" /> ₹{PREP_PRICE} {hi ? "पास" : "Pass"}
    </span>
  );
}

/** For Prep Pass holders: add mentorship for the difference. Hidden otherwise. */
export function MentorUpgrade({ hi, className }: { hi: boolean; className?: string }) {
  const tier = usePassTier();
  if (!MENTOR_LIVE || tier !== "prep") return null;
  return (
    <div className={cn("flex flex-col gap-3 rounded-2xl bg-teal-50 p-5 ring-1 ring-teal-200 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div>
        <p className="font-semibold text-ink-900">{hi ? "आपके पास प्रेप पास है" : "You have the Prep Pass"}</p>
        <p className="text-sm text-ink-600">
          {hi ? `सिर्फ़ ₹${UPGRADE_PRICE} में 1-on-1 मेंटरशिप जोड़ें।` : `Add 1-on-1 mentorship for just ₹${UPGRADE_PRICE}.`}
        </p>
      </div>
      <BuyPassButton product="mentor-upgrade" hi={hi} variant="primary" className="shrink-0" />
    </div>
  );
}

/** Banner for pass holders so they know everything is open. */
export function PassActiveNote({ hi, className }: { hi: boolean; className?: string }) {
  const tier = usePassTier();
  if (!tier) return null;
  return (
    <p className={cn("inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800 ring-1 ring-teal-200", className)}>
      <CheckCircle2 className="h-4 w-4" /> {hi ? "आपका प्रेप पास चालू है: सब कुछ खुला है" : "Your Prep Pass is active: everything is open"}
    </p>
  );
}

/** The paywall card, but only for people who don't have the pass yet. */
export function PaywallUnlessPass(props: { hi: boolean; title?: string; className?: string }) {
  const tier = usePassTier();
  if (tier === undefined || tier) return null;
  return <PaywallCard {...props} />;
}


/** Compatibility wrapper retained for the original account dashboard. */
export function PlanUnlockButton({ hi = false }: { hi?: boolean }) {
  return <BuyPassButton product="prep" hi={hi} />;
}
