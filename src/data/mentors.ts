/**
 * SAMPLE mentor profiles — illustrative placeholders for the marketplace UI.
 * These are NOT real people. Replace with verified, consented profiles of
 * serving/selected KV teachers before going live. No real personal data here.
 */

export interface Mentor {
  slug: string;
  name: string;
  post: "PRT" | "TGT" | "PGT";
  subject: string;
  location: string;
  yearsInKV: number;
  languages: string[];
  rating: number;
  reviews: number;
  sessions: number;
  pricePerSession: number;
  initials: string;
  accent: string; // tailwind bg class for avatar
  headline: string;
  bio: string;
  specialities: string[];
  helpsWith: string[];
}

export const mentors: Mentor[] = [
  {
    slug: "aarti-verma",
    name: "Aarti Verma",
    post: "PRT",
    subject: "Primary / FLN",
    location: "KV, Lucknow region",
    yearsInKV: 7,
    languages: ["Hindi", "English"],
    rating: 4.9,
    reviews: 128,
    sessions: 640,
    pricePerSession: 599,
    initials: "AV",
    accent: "bg-brand-600",
    headline: "Cracked KVS PRT in the first attempt — now I coach the demo lesson nobody teaches.",
    bio: "Serving PRT with seven years in a Kendriya Vidyalaya. I focus on the demo-teaching round and Perspectives on Education, where most aspirants lose easy marks.",
    specialities: ["Demo teaching", "Perspectives on Education", "FLN pedagogy", "Interview"],
    helpsWith: ["Building a scoring 5-minute demo lesson", "NEP 2020 / NCF talking points", "CTET Paper-I overlap"],
  },
  {
    slug: "rahul-menon",
    name: "Rahul Menon",
    post: "TGT",
    subject: "Science",
    location: "KV, Ernakulam region",
    yearsInKV: 9,
    languages: ["English", "Malayalam", "Hindi"],
    rating: 4.8,
    reviews: 96,
    sessions: 510,
    pricePerSession: 699,
    initials: "RM",
    accent: "bg-saffron-500",
    headline: "TGT Science mentor — NCERT-first strategy that actually converts to marks.",
    bio: "TGT (Science) with a decade in KV classrooms. I help aspirants build a subject-first study plan anchored in NCERT VI–X and time-boxed mock analysis.",
    specialities: ["TGT Science", "NCERT strategy", "Mock analysis", "Time management"],
    helpsWith: ["A realistic 3-month plan", "Turning mock scores into a weak-spot fix list", "Subject depth for Tier-2"],
  },
  {
    slug: "sneha-iyer",
    name: "Sneha Iyer",
    post: "PGT",
    subject: "English",
    location: "KV, Bengaluru region",
    yearsInKV: 6,
    languages: ["English", "Hindi", "Tamil"],
    rating: 5.0,
    reviews: 74,
    sessions: 380,
    pricePerSession: 799,
    initials: "SI",
    accent: "bg-brand-800",
    headline: "PGT English — interview & subject depth for the senior-secondary aspirant.",
    bio: "PGT (English) mentor. I coach subject mastery at PG level plus the interview: how to answer 'why teaching', pedagogy questions, and present a confident, structured self.",
    specialities: ["PGT English", "Interview", "Pedagogy of language", "Answer structuring"],
    helpsWith: ["PG-level literature & language", "Mock interview with feedback", "Handling panel questions"],
  },
  {
    slug: "vikram-singh",
    name: "Vikram Singh",
    post: "TGT",
    subject: "Mathematics",
    location: "KV, Jaipur region",
    yearsInKV: 8,
    languages: ["Hindi", "English"],
    rating: 4.7,
    reviews: 112,
    sessions: 560,
    pricePerSession: 649,
    initials: "VS",
    accent: "bg-brand-700",
    headline: "TGT Maths — speed, accuracy and negative-marking strategy for the new pattern.",
    bio: "TGT (Mathematics) mentor. With negative marking back in the 2025–26 pattern, attempt strategy matters as much as knowledge. I teach both.",
    specialities: ["TGT Maths", "Reasoning & quant", "Attempt strategy", "Negative-marking discipline"],
    helpsWith: ["Quant & reasoning shortcuts", "When to skip vs attempt", "Tier-1 screening prep"],
  },
  {
    slug: "meena-das",
    name: "Meena Das",
    post: "PRT",
    subject: "Primary / EVS",
    location: "KV, Guwahati region",
    yearsInKV: 5,
    languages: ["Assamese", "Hindi", "English"],
    rating: 4.9,
    reviews: 61,
    sessions: 300,
    pricePerSession: 549,
    initials: "MD",
    accent: "bg-saffron-600",
    headline: "PRT mentor — child development & classroom command, in plain language.",
    bio: "Serving PRT. I make child-development theories (Piaget, Vygotsky, Kohlberg) stick, and rehearse the classroom-command signals demo evaluators look for.",
    specialities: ["Child development", "Demo teaching", "Classroom management", "CTET overlap"],
    helpsWith: ["Making theory memorable", "Demo lesson rehearsal", "Confidence & delivery"],
  },
  {
    slug: "arjun-nair",
    name: "Arjun Nair",
    post: "PGT",
    subject: "Computer Science",
    location: "KV, Delhi region",
    yearsInKV: 6,
    languages: ["English", "Hindi"],
    rating: 4.8,
    reviews: 53,
    sessions: 260,
    pricePerSession: 849,
    initials: "AN",
    accent: "bg-brand-900",
    headline: "PGT CS — computer-literacy section + PG subject depth, from someone in the chair.",
    bio: "PGT (Computer Science) mentor. I cover both the common Computer Literacy section and PG-level subject prep, with a bank of practice modelled on the pattern.",
    specialities: ["PGT Computer Science", "Computer Literacy", "Practice sets", "Interview"],
    helpsWith: ["Computer Literacy fast-track", "PG subject roadmap", "Demo & interview"],
  },
];

export function getMentor(slug: string) {
  return mentors.find((m) => m.slug === slug);
}
