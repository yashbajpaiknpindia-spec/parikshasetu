import type { Exam } from "./types";

/**
 * UP teacher recruitment, PRIORITY exam (written exam ~3–4 Dec 2026).
 * Conducted by UPESSC. Data compiled from sourced research (Sep 2026). Portal
 * figures are PROVISIONAL, the official UPESSC notification/syllabus PDF at
 * upessc.up.gov.in is the source of truth. The section-wise question/mark split,
 * exact vacancy count, negative-marking rate and OMR mode must be verified there.
 */
export const upExam: Exam = {
  slug: "up",
  name: "SUPER TET: UP Assistant Teacher (UPESSC)",
  shortName: "SUPER TET",
  body: "Uttar Pradesh Education Service Selection Commission (UPESSC)",
  bodyUrl: "https://upessc.up.gov.in",
  region: "Uttar Pradesh",
  regionShort: "UP",
  levels: ["Assistant Teacher", "TGT", "PGT"],
  status: "recruitment-open",
  statusLabel: "Apply by ~15 Oct · exam 3–4 Dec 2026",
  vacancies: "~12,405 Asst. Teacher / ~15,012 total (verify)",
  examWindow: "Written 3–4 Dec 2026 (verify)",
  summary:
    "The current priority on Merit Marg. UPESSC announced ~15,012 teaching posts (Sep 2026): ~12,405 primary Assistant Teacher (PRT, classes 1–5) plus TGT/PGT. Written exam in December 2026. Full pattern, UP-specific syllabus, a day-by-day plan and section-wise mocks.",
  featured: true,
  priority: true,
  hubHref: "/exams/up",
  planHref: "/exams/up/plan",
  detail: {
    lastReviewed: "21 September 2026",
    eligibilityNote:
      "Assistant Teacher (PRT, primary): Graduation + a teacher-training qualification (D.El.Ed / BTC / B.El.Ed / RCI diploma) AND a valid UPTET or CTET scorecard. UPTET/CTET are qualifying eligibility tests. You clear one first, then the recruitment written exam decides merit. Age 21–40 as on 1 July 2026. MAJOR CHANGE this cycle: selection is on the written exam alone: academic (Class 10/12/graduation) weightage has been removed for Assistant Teacher, and negative marking is newly introduced. Verify every point against the official notification.",
    ageRelaxations: [
      { category: "SC / ST / OBC (UP domicile)", years: "+5 years" },
      { category: "PwD", years: "+15 years" },
      { category: "Ex-servicemen", years: "+3 years + service" },
      { category: "Shiksha Mitra", years: "up to age 60" },
    ],
    posts: [
      {
        code: "Asst. Teacher",
        name: "Assistant Teacher (PRT): Primary",
        classes: "Classes 1–5",
        qualification: "Graduation + D.El.Ed / BTC / B.El.Ed (or RCI diploma for special education).",
        tet: "Valid UPTET or CTET Paper-I",
        maxAge: "40 (as on 1 Jul 2026)",
        pay: "Level 7 (7th CPC): verify",
      },
      {
        code: "TGT",
        name: "Trained Graduate Teacher",
        classes: "Classes 6–10 (secondary)",
        qualification: "Relevant Bachelor's + B.Ed. (per UPESSC TGT rules).",
        tet: "As specified in the notification",
        maxAge: "Verify",
      },
      {
        code: "PGT",
        name: "Post Graduate Teacher",
        classes: "Classes 11–12 (senior secondary)",
        qualification: "Relevant Master's + B.Ed. (per UPESSC PGT rules).",
        tet: "Not applicable",
        maxAge: "Verify",
      },
    ],
    stages: [
      "One-Time Registration (OTR) + online application on apply.upessc.org",
      "Written examination (OMR-based): decides merit for Assistant Teacher",
      "Document verification",
      "District / post allotment on merit → appointment",
      "Note: PGT additionally has a 40-mark interview (written 360 + interview 40 = 400).",
    ],
    papers: [
      {
        name: "Assistant Teacher (PRT): Written Exam (Primary, classes 1–5)",
        sections: [
          { name: "General Knowledge & Current Affairs (incl. UP-specific)", questions: 25, marks: 75 },
          { name: "Language: Hindi, Sanskrit & English (grammar)", questions: 30, marks: 90 },
          { name: "Mathematics", questions: 16, marks: 48 },
          { name: "Science", questions: 8, marks: 24 },
          { name: "Environmental & Social Studies", questions: 8, marks: 24 },
          { name: "Teaching Skills / Pedagogy", questions: 8, marks: 24 },
          { name: "Child Psychology / Development", questions: 8, marks: 24 },
          { name: "Logical Reasoning", questions: 5, marks: 15 },
          { name: "Information Technology (ICT)", questions: 4, marks: 12 },
          { name: "Life Skills, Management & Attitude", questions: 8, marks: 24 },
        ],
        totalQuestions: 120,
        totalMarks: 360,
        durationMin: 120,
        marking: "+3 per correct answer",
        negativeMarking: "−1 per wrong / multiple answer (newly introduced this cycle)",
        mode: "OMR / offline",
        note: "Section-wise split as published in the official UPESSC syllabus (effective for exams from 2026). The paper is bilingual (English and Hindi), 4 options per question, +3 / −1. Content level: up to class 12 for language, science, maths and EVS; D.El.Ed level for teaching skills, child psychology, ICT and life skills.",
      },
      {
        name: "TGT / PGT: Written Exam (Secondary)",
        sections: [
          { name: "Subject-specific (concerned subject)", questions: 90, marks: 270 },
          { name: "General Studies (incl. UP GK & current affairs)", questions: 30, marks: 90 },
        ],
        totalQuestions: 120,
        totalMarks: 360,
        durationMin: 120,
        marking: "+3 per correct answer",
        negativeMarking: "Negative marking newly introduced; rate disputed across portals (−1 vs 1/3): verify",
        mode: "OMR / offline (verify)",
        note: "Revised 2026 pattern: 90 subject + 30 General Studies. 12 TGT and 22 PGT subject syllabi are published as separate PDFs on the UPESSC portal. PGT adds a 40-mark interview.",
      },
    ],
    // Official UPESSC syllabus for the primary Assistant Teacher exam (classes 1–5),
    // "effective for exams from 2026". Language, science, maths and EVS are pitched up to
    // class 12 level; teaching skills, child psychology, ICT and life skills at D.El.Ed level.
    syllabus: [
      {
        id: "gk",
        title: "General Knowledge / Current Affairs (25 Q)",
        topics: [
          "Current important events: international, national and Uttar Pradesh",
          "Places, personalities and works (books) in the news",
          "International and national awards; sports",
          "Indian culture and art",
        ],
      },
      {
        id: "reasoning",
        title: "Logical Reasoning (5 Q)",
        topics: [
          "Analogies, classification, letter and number series",
          "Assertion and reason, binary logic, critical reasoning, inferences",
          "Coded inequalities, coding and decoding, symbols and notations",
          "Clocks and calendars, cubes, Venn diagrams and dice, direction sense",
          "Puzzles, grouping and selections, data interpretation",
        ],
      },
      {
        id: "language",
        title: "Hindi, Sanskrit and English (30 Q)",
        hindi: false,
        topics: [
          "Grammar (व्याकरण) of Hindi, Sanskrit and English",
          "Unseen passages and poems (अपठित गद्यांश, पद्यांश)",
          "Comprehension",
        ],
      },
      {
        id: "science",
        title: "Science (8 Q)",
        topics: [
          "Science in daily life; motion, force, energy, distance",
          "Light and sound",
          "The world of living things; human health, hygiene and nutrition",
          "Environment and natural resources; states of matter",
        ],
      },
      {
        id: "maths",
        title: "Mathematics (16 Q)",
        topics: [
          "Numerical ability, mathematical operations, decimals, place value, fractions",
          "Interest, profit and loss, percentage",
          "Divisibility, factorisation, unitary method",
          "General algebra and identities, general geometry",
          "Area, volume, average, ratio, general statistics",
        ],
      },
      {
        id: "evs-social",
        title: "Environmental and Social Studies (8 Q)",
        topics: [
          "Structure of the earth; rivers, mountains, continents, oceans and marine life",
          "Natural resources, latitude and longitude, the solar system, Indian geography",
          "Indian freedom struggle and social reformers",
          "Indian Constitution and our system of governance",
          "Transport and road safety; Indian economy and its challenges",
          "Our cultural heritage; environmental protection; natural disaster management",
        ],
      },
      {
        id: "pedagogy",
        title: "Teaching Skills (8 Q)",
        topics: [
          "Teaching methods and skills; principles of teaching and learning",
          "Present-day Indian society and elementary education; inclusive education",
          "New initiatives in elementary education",
          "Educational evaluation and measurement; early reading skills",
          "Educational management and administration",
        ],
      },
      {
        id: "child-psych",
        title: "Child Psychology (8 Q)",
        topics: [
          "Individual differences; factors that affect child development",
          "Identifying learning needs; creating an environment for reading",
          "Learning theories and their use in the classroom",
          "Special arrangements for divyang (differently abled) students",
        ],
      },
      {
        id: "ict",
        title: "Information Technology (4 Q)",
        topics: [
          "ICT for teaching skills, classroom teaching and school management",
          "Computer, internet, smartphone",
          "OER (Open Educational Resources), teaching apps, digital teaching material",
        ],
      },
      {
        id: "life-skills",
        title: "Life Skills / Management and Attitude (8 Q)",
        topics: [
          "Professional conduct and ethics; motivation",
          "Roles of the teacher: facilitator, follower, leader, guide, counsellor",
          "Constitutional and human values",
          "Effective use of reward and punishment",
        ],
      },
    ],
    strategy: [
      { title: "Weeks 1–2 · Foundation + highest weights", body: "Language grammar (Hindi/Sanskrit/English) and Maths basics. Start a daily 30-min UP-GK + current-affairs habit. Take one diagnostic full mock to set a baseline, and begin previous-year paper analysis." },
      { title: "Weeks 3–4 · Pedagogy, Child Psychology, Science, EVS", body: "These are scoring and formula-light. Add short daily Reasoning sets. 2 sectional tests/week + 1 full mock/week. Keep the UP-GK habit going." },
      { title: "Weeks 5–6 · UP-GK deep dive + ICT + Life Skills + weak-area repair", body: "Drill districts, rivers, schemes, heritage and current affairs hard. This is the differentiator. 3 full mocks; spend as long reviewing as taking each. Redo every wrong question." },
      { title: "Week 7 · Exam-condition mocks", body: "Full-length mocks every 2 days under 2-hour timing with negative marking applied. Practise OMR discipline and attempt strategy (which sections to secure first). Time the last 5 years' papers." },
      { title: "Week 8 · Taper + consolidation", body: "Alternate-day mocks, revise notes/error log and 6 months of current affairs. No new topics. Final 2 days: revision + one confidence mock. (This plan is a synthesised strategy, not an official prescription.)" },
    ],
    books: [
      { section: "All-in-one (PRT)", title: "Examcart / Arihant UP Assistant Teacher guide (latest edition)" },
      { section: "Child Development & Pedagogy", title: "Sandeep Kumar (Pearson); Arihant Experts" },
      { section: "General Hindi", title: "Lucent's Samanya Hindi; Arihant Hindi Bhasha evam Shikshashastra" },
      { section: "UP GK", title: "Drishti IAS UP Special / Lucent UP GK / Ghatna Chakra UP Special" },
      { section: "Reasoning & Quant", title: "R.S. Aggarwal (Verbal & Non-Verbal; Quantitative Aptitude)" },
      { section: "Subject (TGT/PGT)", title: "Sahitya Bhawan subject-wise TGT/PGT guides" },
    ],
    officialLinks: [
      { label: "UPESSC: official portal", url: "https://upessc.up.gov.in", kind: "official" },
      { label: "Official syllabus: Assistant Teacher (classes 1–5), 2026 (PDF)", url: "https://www.upessc.up.gov.in/syllabus/837218cf-1d9a-4252-a08c-404719d1b9d9.pdf", kind: "official" },
      { label: "Advertisement 05/2026 (PDF)", url: "https://upessc.up.gov.in/Advertisment/2dbb4466-2723-4cc4-ab1f-8271a6e61190.pdf", kind: "official" },
      { label: "UPESSC application portal (OTR)", url: "https://apply.upessc.org", kind: "official" },
      { label: "UPTET: official", url: "https://updeled.gov.in", kind: "official" },
      { label: "CTET: official", url: "https://ctet.nic.in", kind: "official" },
    ],
    mockTestIds: ["up-mock-l1-full-1", "up-mock-l1-mixed", "up-mock-l1-gk"],
  },
};
