/**
 * Merit Marg pricing, the single source of truth for every price and plan line on
 * the site (pricing page, paywall cards, plan banners) and for the server-side
 * Razorpay order amount. Change a price or a feature line here and it changes
 * everywhere.
 *
 *  Free          2 free mock tests total (the two designated free tests)
 *  Prep     every full mock, every section-wise mock, the whole day-by-day plan
 *  Mentor   everything in Prep + 1-on-1 mentorship (COMING SOON, see MENTOR_LIVE)
 *
 * One-time payments, no subscription. A Prep member can add mentorship for the
 * difference (₹100).
 */
export type PassTier = "prep" | "mentor";
export type Product = PassTier | "mentor-upgrade";

type Bi = { en: string; hi: string };

export const PREP_PRICE = 99;
/** Regular price of the Prep Pass. This is the displayed list-price reference; the
 *  live checkout amount comes from the admin-controlled pricing settings. */
export const PREP_LIST_PRICE = 799;
export const PREP_OFF_PCT = Math.round((1 - PREP_PRICE / PREP_LIST_PRICE) * 100);
export const OFFER_LABEL = { en: "Limited-period offer", hi: "सीमित समय का ऑफ़र" };
/** Offer end date shown on the pricing page. */
export const OFFER_ENDS = { en: "31 October 2026", hi: "31 अक्टूबर 2026" };

/** ₹199 mentorship is announced but not on sale yet. Flip to true when the mentor
 *  team is ready: its buy buttons, the ₹100 upgrade and /mentors light up. */
export const MENTOR_LIVE = false;
export const MENTOR_PRICE = 199;
export const UPGRADE_PRICE = MENTOR_PRICE - PREP_PRICE;

/** Server-trusted rupee amount for each product (the client never sets the price). */
export const PRODUCT_PRICE: Record<Product, number> = {
  prep: PREP_PRICE,
  mentor: MENTOR_PRICE,
  "mentor-upgrade": UPGRADE_PRICE,
};

/** Which pass a paid product grants. */
export const PRODUCT_TIER: Record<Product, PassTier> = {
  prep: "prep",
  mentor: "mentor",
  "mentor-upgrade": "mentor",
};

export function isProduct(v: unknown): v is Product {
  return typeof v === "string" && v in PRODUCT_PRICE;
}

/** Can this product be bought right now? */
export function isOnSale(p: Product): boolean {
  return p === "prep" || MENTOR_LIVE;
}

export const PASS_NAME: Record<PassTier, Bi> = {
  prep: { en: "Prep Pass", hi: "प्रेप पास" },
  mentor: { en: "Prep + Mentorship", hi: "प्रेप + मेंटरशिप" },
};

/** Short, benefit-first lines used on paywall cards (3 each keeps them scannable). */
export const PASS_HIGHLIGHTS: Record<PassTier, Bi[]> = {
  prep: [
    { en: "Every full mock test in the real pattern", hi: "असली पैटर्न के सभी पूर्ण मॉक टेस्ट" },
    { en: "Every section-wise mock", hi: "सभी खंड-वार मॉक" },
    { en: "UP previous-year papers + complete day-by-day plan", hi: "UP के पिछले प्रश्न-पत्र + पूरी दिन-प्रतिदिन योजना" },
  ],
  mentor: [
    { en: "Everything in the Prep Pass", hi: "प्रेप पास का सब कुछ" },
    { en: "1-on-1 mentorship calls", hi: "1-on-1 मेंटरशिप कॉल" },
    { en: "Talk to teachers and selected candidates", hi: "शिक्षकों और चयनित अभ्यर्थियों से बात करें" },
  ],
};

/**
 * What mentorship will include (shown as "coming soon").
 * TODO(owner): confirm format, number of calls and response time before MENTOR_LIVE.
 */
export const MENTOR_FEATURES: Bi[] = [
  { en: "1-on-1 mentorship with an experienced mentor", hi: "अनुभवी मेंटर के साथ 1-on-1 मेंटरशिप" },
  { en: "Calls with serving teachers who cleared these exams", hi: "इन परीक्षाओं में चयनित कार्यरत शिक्षकों से कॉल" },
  { en: "Talk to qualified, recently selected candidates", hi: "हाल ही में चयनित योग्य अभ्यर्थियों से बात" },
  { en: "Your mock results reviewed, with a personal study strategy", hi: "आपके मॉक परिणामों की समीक्षा और व्यक्तिगत अध्ययन-रणनीति" },
  { en: "Doubt-solving and exam-day strategy", hi: "संदेह-समाधान और परीक्षा-दिवस रणनीति" },
];
