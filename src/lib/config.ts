/**
 * Central configuration + feature flags.
 *
 * The app is designed to run fully in "demo mode" with no external keys, and to
 * light up real auth / payments / persistence the moment the relevant env vars
 * are supplied. This lets the site deploy to Vercel and be explored immediately,
 * while keeping every integration point clearly defined.
 *
 * See `.env.example` for the variables and `SETUP.md` for how to obtain them.
 */

export const siteConfig = {
  name: "Merit Marg",
  nameHindi: "मेरिट मार्ग",
  tagline: "Teacher exam prep for UP & Bihar, one topic a day",
  description:
    "Day-by-day plans, full mock tests and section-wise mocks for SUPER TET (UP Assistant Teacher) and BPSC TRE 4.0 (classes 1–5, 6–8, 9–10 and 11–12), in the real exam pattern and marking, every question in Hindi and English. Plus results and teacher job notifications.",
  // Update this to your real domain once live.
  url: "https://meritmarg.com",
  supportEmail: "hello@meritmarg.in", // NOT shown on the site yet (inbox not created); WhatsApp is the only contact for now
  /** WhatsApp helpline for any assistance (digits only, with country code). */
  whatsappNumber: "919343457296",
  whatsappDisplay: "+91 93434 57296",
  /** Follow buttons (home page + footer). */
  social: {
    instagram: { url: "https://www.instagram.com/merimarg_india", handle: "@merimarg_india" },
    facebook: { url: "https://www.facebook.com/profile.php?id=61594806359151", handle: "Merit Marg" },
  },
  officialSources: {
    kvs: "https://kvsangathan.nic.in",
    cbse: "https://cbse.gov.in",
    nvs: "https://navodaya.gov.in",
    ctet: "https://ctet.nic.in",
    ncert: "https://ncert.nic.in",
  },
};

/** wa.me chat link to the helpline, optionally with a pre-filled message. */
export function whatsappLink(text?: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** Legacy compatibility flag for older integrations; production auth/database use PostgreSQL. */
export const isSupabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** True when Razorpay payments are configured (public key present). */
export const isRazorpayConfigured =
  !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

/** Server-side Razorpay secret present (never expose to the client). */
export const hasRazorpaySecret = !!process.env.RAZORPAY_KEY_SECRET;
