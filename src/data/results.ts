/**
 * Exam results, admit cards, answer keys, cut-offs and merit lists.
 *
 * Field names are snake_case on purpose: they map 1:1 to the `exam_results`
 * table in `supabase/exam_results.sql`, so the same records can come from this
 * seed file, a JSON feed or the database without any mapping layer.
 *
 * Every record points to the OFFICIAL page. Merit Marg only summarises and
 * links; it never hosts a result. Seed records were verified on the official
 * sites on the date in `updated_at`. Re-check links before relying on them.
 */

export type ResultCategory = "result" | "admit-card" | "answer-key" | "cut-off" | "merit-list";
export type ResultStatus = "Declared" | "Provisional" | "Final" | "Released" | "Revised";

export interface ImportantDate {
  label: string;
  date: string; // YYYY-MM-DD
}

export interface ExamResult {
  id: string;
  /** URL segment: /results/<slug>. Keep it stable once published (SEO). */
  slug: string;
  exam_name: string;
  organisation: string;
  state: string; // state name or "All India"
  exam_year: number | null; // null when the official notice doesn't state it
  exam_date: string | null; // YYYY-MM-DD
  result_date: string | null; // YYYY-MM-DD: when this result/admit card/etc. was published
  result_status: ResultStatus;
  category: ResultCategory;
  qualification: string | null;
  description: string;
  important_dates: ImportantDate[];
  result_url: string; // the official page/PDF (result, admit card, answer key…)
  scorecard_url: string | null;
  cutoff_url: string | null;
  merit_list_url: string | null;
  official_website: string;
  /** Optional link to a Merit Marg exam hub (internal linking), e.g. "up", "ctet". */
  exam_slug: string | null;
  created_at: string; // ISO date
  updated_at: string; // ISO date: last time the official links were checked
}

/** The sub-sections of Results. `path` is the clean URL of each listing page. */
export const RESULT_CATEGORIES: {
  key: ResultCategory;
  path: string;
  label: { en: string; hi: string };
  /** One item of this kind, e.g. "Admit card". */
  singular: { en: string; hi: string };
  heading: { en: string; hi: string };
  cta: { en: string; hi: string };
  metaDescription: string;
}[] = [
  {
    key: "result", path: "/results",
    label: { en: "Latest Results", hi: "ताज़ा रिज़ल्ट" },
    singular: { en: "Result", hi: "रिज़ल्ट" },
    heading: { en: "Latest Exam Results", hi: "ताज़ा परीक्षा परिणाम" },
    cta: { en: "Check result", hi: "रिज़ल्ट देखें" },
    metaDescription: "Latest teacher recruitment and TET exam results in India, with direct links to the official result, scorecard, cut-off and merit list.",
  },
  {
    key: "admit-card", path: "/results/admit-cards",
    label: { en: "Admit Cards", hi: "प्रवेश पत्र" },
    singular: { en: "Admit card", hi: "प्रवेश पत्र" },
    heading: { en: "Latest Admit Cards", hi: "ताज़ा प्रवेश पत्र" },
    cta: { en: "Get admit card", hi: "प्रवेश पत्र पाएँ" },
    metaDescription: "Recently released admit cards and hall tickets for teacher recruitment exams and TETs, linked to the official download page.",
  },
  {
    key: "answer-key", path: "/results/answer-keys",
    label: { en: "Answer Keys", hi: "उत्तर कुंजी" },
    singular: { en: "Answer key", hi: "उत्तर कुंजी" },
    heading: { en: "Latest Answer Keys", hi: "ताज़ा उत्तर कुंजी" },
    cta: { en: "View answer key", hi: "उत्तर कुंजी देखें" },
    metaDescription: "Provisional and final answer keys for teacher recruitment exams and TETs, linked to the official source.",
  },
  {
    key: "cut-off", path: "/results/cut-off",
    label: { en: "Cut Off", hi: "कट ऑफ़" },
    singular: { en: "Cut-off", hi: "कट ऑफ़" },
    heading: { en: "Latest Cut-off Marks", hi: "ताज़ा कट ऑफ़" },
    cta: { en: "View cut-off", hi: "कट ऑफ़ देखें" },
    metaDescription: "Published cut-off marks for teacher recruitment exams, linked to the official notice.",
  },
  {
    key: "merit-list", path: "/results/merit-lists",
    label: { en: "Merit Lists", hi: "मेरिट सूची" },
    singular: { en: "Merit list", hi: "मेरिट सूची" },
    heading: { en: "Latest Merit Lists", hi: "ताज़ा मेरिट सूची" },
    cta: { en: "View merit list", hi: "मेरिट सूची देखें" },
    metaDescription: "Merit and selection lists for teacher recruitment exams, linked to the official notice.",
  },
];

export function categoryMeta(key: ResultCategory) {
  return RESULT_CATEGORIES.find((c) => c.key === key)!;
}

/** Seed records (verified on the official sites, see `updated_at`). */
export const seedResults: ExamResult[] = [
  {
    "id": "uptet-2026-admit-card",
    "slug": "uptet-2026-admit-card",
    "exam_name": "UPTET 2026 (Advt. 01/2026)",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-07-02",
    "result_date": "2026-06-30",
    "result_status": "Released",
    "category": "admit-card",
    "qualification": null,
    "description": "UPESSC announced the UPTET 2026 schedule (2-4 July 2026, 955 centres across 60 districts) and said admit cards could be downloaded from 30 June 2026. Advance exam-district information went live on 22 June 2026.",
    "important_dates": [
      {
        "label": "Notice issued / exam-district info released",
        "date": "2026-06-22"
      },
      {
        "label": "Admit card download from",
        "date": "2026-06-30"
      },
      {
        "label": "Exam (upper primary, shifts 1-3)",
        "date": "2026-07-02"
      },
      {
        "label": "Exam (primary, last shift)",
        "date": "2026-07-04"
      }
    ],
    "result_url": "https://admitcards.upessc.org/",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "uptet-2026-answer-key",
    "slug": "uptet-2026-answer-key",
    "exam_name": "UPTET 2026 (Advt. 01/2026)",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-07-02",
    "result_date": "2026-07-08",
    "result_status": "Provisional",
    "category": "answer-key",
    "qualification": null,
    "description": "UPESSC published provisional master-set answer keys for UPTET 2026. Candidates could file objections online from 8 to 14 July 2026.",
    "important_dates": [
      {
        "label": "Provisional answer key released",
        "date": "2026-07-08"
      },
      {
        "label": "Objection window closes (midnight)",
        "date": "2026-07-14"
      }
    ],
    "result_url": "https://upessc.up.gov.in/Notice/c95b-7ab1-41a0-498e-f61d.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "uptet-2026-result",
    "slug": "uptet-2026-result",
    "exam_name": "UPTET 2026 (Advt. 01/2026)",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-07-02",
    "result_date": "2026-08-26",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "UPESSC declared the UPTET 2026 result, prepared after score normalisation across five shifts. At primary level (Classes 1-5), 571,435 of 713,648 candidates passed (80.07%). At upper primary level (Classes 6-8), 759,513 of 1,057,021 passed (71.85%).",
    "important_dates": [
      {
        "label": "Exam held",
        "date": "2026-07-02"
      },
      {
        "label": "Result declared",
        "date": "2026-08-26"
      },
      {
        "label": "Certificate download notice",
        "date": "2026-09-07"
      },
      {
        "label": "Decision on result representations",
        "date": "2026-09-16"
      }
    ],
    "result_url": "https://www.upessc.net/upessctetresults/login.aspx",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "up-tgt-2022-written-exam-result",
    "slug": "up-tgt-2022-written-exam-result",
    "exam_name": "UP TGT (Advt. 01/2022) - Written Exam",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-06-03",
    "result_date": "2026-06-30",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "UPESSC declared the written exam result for Trained Graduate Teacher posts in aided secondary schools. It shortlisted 1.5 times the number of posts, subject- and category-wise, for document verification in Prayagraj from 9 to 17 July 2026.",
    "important_dates": [
      {
        "label": "Written exam",
        "date": "2026-06-03"
      },
      {
        "label": "Written exam (day 2)",
        "date": "2026-06-04"
      },
      {
        "label": "Result declared",
        "date": "2026-06-30"
      },
      {
        "label": "Document verification begins",
        "date": "2026-07-09"
      },
      {
        "label": "Document verification ends",
        "date": "2026-07-17"
      }
    ],
    "result_url": "https://upessc.up.gov.in/Notice/10a4-90cf-4d6f-879d-bf66.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "up-tgt-2022-final-result-cut-off",
    "slug": "up-tgt-2022-final-result-cut-off",
    "exam_name": "UP TGT (Advt. 01/2022) - Final Selection Result",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-06-03",
    "result_date": "2026-07-28",
    "result_status": "Final",
    "category": "cut-off",
    "qualification": null,
    "description": "UPESSC declared the final selection result for 2,982 TGT posts in 14 subjects, with subject- and category-wise cut-offs. The English result was held back because a High Court petition on its final answer key is pending.",
    "important_dates": [
      {
        "label": "Final result and cut-off published",
        "date": "2026-07-28"
      },
      {
        "label": "Revised TGT result/cut-off notice",
        "date": "2026-08-23"
      },
      {
        "label": "Subject-wise institution-allocation panel",
        "date": "2026-09-09"
      }
    ],
    "result_url": "https://upessc.up.gov.in/Notice/35f3-6fdf-419c-d56f-55ff.pdf",
    "scorecard_url": null,
    "cutoff_url": "https://upessc.up.gov.in/Notice/67b0-cf9d-4c59-8b0a-a7b1.pdf",
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "up-pgt-2022-final-selection-list",
    "slug": "up-pgt-2022-final-selection-list",
    "exam_name": "UP PGT / Pravakta (Advt. 02/2022) - Final Selection",
    "organisation": "Uttar Pradesh Education Service Selection Commission (UPESSC)",
    "state": "Uttar Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-05-09",
    "result_date": "2026-07-07",
    "result_status": "Final",
    "category": "merit-list",
    "qualification": null,
    "description": "After the written exam and interviews, UPESSC declared the final selection lists for 624 lecturer (PGT) posts in 18 subjects in aided secondary schools. Subject- and category-wise lists and cut-offs are on the commission's website.",
    "important_dates": [
      {
        "label": "Written exam",
        "date": "2026-05-09"
      },
      {
        "label": "Written exam (day 2)",
        "date": "2026-05-10"
      },
      {
        "label": "Written result (interview shortlist)",
        "date": "2026-06-02"
      },
      {
        "label": "Interviews begin",
        "date": "2026-06-15"
      },
      {
        "label": "Interviews end",
        "date": "2026-06-27"
      },
      {
        "label": "Final selection declared",
        "date": "2026-07-07"
      },
      {
        "label": "Waiting list published",
        "date": "2026-08-26"
      }
    ],
    "result_url": "https://upessc.up.gov.in/Notice/82c2-c5e8-4929-ebaf-ea06.pdf",
    "scorecard_url": null,
    "cutoff_url": "https://upessc.up.gov.in/Notice/9b37-2424-4260-2b09-4b69.pdf",
    "merit_list_url": null,
    "official_website": "https://upessc.up.gov.in",
    "exam_slug": "up",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "hp-tet-june-2026-admit-card",
    "slug": "hp-tet-june-2026-admit-card",
    "exam_name": "HP TET June 2026 (JBT, TGT Arts/Medical/Non-Medical/Sanskrit/Hindi, Punjabi, Urdu, Special Educator)",
    "organisation": "Himachal Pradesh Board of School Education (HPBOSE)",
    "state": "Himachal Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-06-13",
    "result_date": "2026-06-10",
    "result_status": "Released",
    "category": "admit-card",
    "qualification": null,
    "description": "HPBOSE released admit cards for the June 2026 TET papers in TGT Arts, TGT Medical, JBT and TGT Sanskrit, held on 13-14 June 2026. Admit cards for the Special Educator, Punjabi/Urdu and TGT Non-Medical/Hindi papers were issued under separate notices.",
    "important_dates": [
      {
        "label": "Admit card notice (JBT, TGT Arts/Medical/Sanskrit)",
        "date": "2026-06-10"
      },
      {
        "label": "TGT Arts & TGT Medical TET",
        "date": "2026-06-13"
      },
      {
        "label": "JBT & TGT Sanskrit TET",
        "date": "2026-06-14"
      }
    ],
    "result_url": "https://www.hpbose.org/OnlineServices/CET/TET/DownloadAdmitCard.aspx",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://www.hpbose.org",
    "exam_slug": "hp-tet",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "hp-tet-june-2026-answer-key",
    "slug": "hp-tet-june-2026-answer-key",
    "exam_name": "HP TET June 2026 (all 10 subjects)",
    "organisation": "Himachal Pradesh Board of School Education (HPBOSE)",
    "state": "Himachal Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-06-07",
    "result_date": "2026-07-10",
    "result_status": "Provisional",
    "category": "answer-key",
    "qualification": null,
    "description": "HPBOSE uploaded provisional answer keys (Series A-D) for all ten June 2026 TET papers. Objections with supporting evidence were accepted until 16 July 2026.",
    "important_dates": [
      {
        "label": "Provisional answer key notification",
        "date": "2026-07-10"
      },
      {
        "label": "Last date for objections",
        "date": "2026-07-16"
      }
    ],
    "result_url": "https://www.hpbose.org/Admin/Upload/Noti.P.Key.D.El.Ed.11.07.2026.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://www.hpbose.org",
    "exam_slug": "hp-tet",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "hp-tet-june-2026-result",
    "slug": "hp-tet-june-2026-result",
    "exam_name": "HP TET June 2026 (all 10 subjects)",
    "organisation": "Himachal Pradesh Board of School Education (HPBOSE)",
    "state": "Himachal Pradesh",
    "exam_year": 2026,
    "exam_date": "2026-06-07",
    "result_date": "2026-08-22",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "HPBOSE declared the June 2026 TET result for ten papers based on the final answer key. Overall, 6,744 of 29,900 candidates who appeared passed. JBT had a 52.17% pass rate and TGT Arts 5.15%.",
    "important_dates": [
      {
        "label": "First exam day",
        "date": "2026-06-07"
      },
      {
        "label": "Last exam day",
        "date": "2026-06-21"
      },
      {
        "label": "Result and final answer key",
        "date": "2026-08-22"
      }
    ],
    "result_url": "https://www.hpbose.org/Admin/Upload/RESULT%20NOTIFICATION%20TET%20JUNE-2026.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://www.hpbose.org",
    "exam_slug": "hp-tet",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "utet-2026-admit-card",
    "slug": "utet-2026-admit-card",
    "exam_name": "UTET 2026 (Paper I & II)",
    "organisation": "Uttarakhand Board of School Education (UBSE), Ramnagar",
    "state": "Uttarakhand",
    "exam_year": 2026,
    "exam_date": "2026-09-29",
    "result_date": "2026-09-15",
    "result_status": "Released",
    "category": "admit-card",
    "qualification": null,
    "description": "UBSE uploaded UTET-I and UTET-II 2026 admit cards for the exam on 29 September 2026. Candidates who cannot download theirs can collect it in person at the nodal centre on 27-28 September.",
    "important_dates": [
      {
        "label": "Admit cards available from",
        "date": "2026-09-15"
      },
      {
        "label": "Offline admit card collection (day 1)",
        "date": "2026-09-27"
      },
      {
        "label": "Offline admit card collection (day 2)",
        "date": "2026-09-28"
      },
      {
        "label": "UTET-I (10:00-12:30) and UTET-II (14:00-16:30)",
        "date": "2026-09-29"
      }
    ],
    "result_url": "https://www.ukutet.com/",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://ubse.uk.gov.in",
    "exam_slug": "utet",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "kvs-nvs-2025-tier-2-result-phase-1",
    "slug": "kvs-nvs-2025-tier-2-result-phase-1",
    "exam_name": "KVS/NVS Recruitment Drive 2025 - Tier-II Result (Phase 1: PGT/TGT Computer Science and others)",
    "organisation": "Central Board of Secondary Education (CBSE) for Kendriya Vidyalaya Sangathan and Navodaya Vidyalaya Samiti",
    "state": "All India",
    "exam_year": 2026,
    "exam_date": null,
    "result_date": "2026-08-17",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "CBSE began declaring Tier-II results of the KVS/NVS Recruitment Drive 2025 in phases. The first phase covered PGT and TGT (Computer Science), Finance Officer and Stenographer Grade-I. Shortlisted teaching candidates will get interview call letters through their login.",
    "important_dates": [
      {
        "label": "Phase 1 Tier-II results",
        "date": "2026-08-17"
      },
      {
        "label": "Final answer keys (set 1)",
        "date": "2026-08-17"
      }
    ],
    "result_url": "https://examinationservices.nic.in/recsys2025/root/CandidateLogin.aspx?enc=Ei4cajBkK1gZSfgr53ImFbEsl0hvvhEEwgxfU0IzC28jtU4yhpqb3pomlo4g+VC8",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://www.cbse.gov.in/cbsenew/recruitment.html",
    "exam_slug": "kvs",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "kvs-nvs-2025-tier-2-result-phase-12-prt",
    "slug": "kvs-nvs-2025-tier-2-result-phase-12-prt",
    "exam_name": "KVS/NVS Recruitment Drive 2025 - Tier-II Result (Phase 12: PRT and JSA)",
    "organisation": "Central Board of Secondary Education (CBSE) for Kendriya Vidyalaya Sangathan and Navodaya Vidyalaya Samiti",
    "state": "All India",
    "exam_year": 2026,
    "exam_date": null,
    "result_date": "2026-09-14",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "In its twelfth phase, CBSE declared KVS/NVS Tier-II results for Primary Teachers (PRT) and Junior Secretariat Assistants. For posts with an interview, marksheets will follow within 15 days of the final result. For posts without one, marks are shown in the candidate login.",
    "important_dates": [
      {
        "label": "Phase 12 Tier-II results (PRT, JSA)",
        "date": "2026-09-14"
      },
      {
        "label": "Final answer keys (set 12)",
        "date": "2026-09-14"
      }
    ],
    "result_url": "https://examinationservices.nic.in/recsys2025/root/CandidateLogin.aspx?enc=Ei4cajBkK1gZSfgr53ImFbEsl0hvvhEEwgxfU0IzC28jtU4yhpqb3pomlo4g+VC8",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://www.cbse.gov.in/cbsenew/recruitment.html",
    "exam_slug": "kvs",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "emrs-esse-2025-tier-2-result-pgt-english-hindi-maths",
    "slug": "emrs-esse-2025-tier-2-result-pgt-english-hindi-maths",
    "exam_name": "EMRS ESSE 2025 - Tier-II Result (PGT English, Hindi, Maths)",
    "organisation": "National Education Society for Tribal Students (NESTS), Ministry of Tribal Affairs (exam conducted by CBSE)",
    "state": "All India",
    "exam_year": 2026,
    "exam_date": "2026-03-22",
    "result_date": "2026-09-17",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "NESTS announced Tier-II results of the Eklavya Model Residential Schools staff selection exam (ESSE 2025) for PGT English, Hindi and Maths. Candidates can see their marks and document-verification shortlisting status in their login. Results for other posts are coming in phases.",
    "important_dates": [
      {
        "label": "Tier-II exam begins",
        "date": "2026-03-22"
      },
      {
        "label": "Tier-II exam ends",
        "date": "2026-03-25"
      },
      {
        "label": "Provisional answer key / OMR notice",
        "date": "2026-05-14"
      },
      {
        "label": "First Tier-II result (Principal)",
        "date": "2026-09-03"
      },
      {
        "label": "PGT Commerce, TGT Maths, Lab Attendant result",
        "date": "2026-09-10"
      },
      {
        "label": "PGT English, Hindi, Maths result",
        "date": "2026-09-17"
      },
      {
        "label": "TGT Music result",
        "date": "2026-09-22"
      }
    ],
    "result_url": "https://nests.tribal.gov.in/showfile.php?lang=1&level=1&ls_id=1037&lid=646",
    "scorecard_url": "https://examinationservices.nic.in/recsys2025/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFZ5JDNNIP7I8JbNwGOl976uPeIvr9X7G7iVESmo7y1L6",
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://nests.tribal.gov.in",
    "exam_slug": "emrs",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "rpsc-school-lecturer-2025-maths-cut-off",
    "slug": "rpsc-school-lecturer-2025-maths-cut-off",
    "exam_name": "RPSC School Lecturer (School Education) Competitive Exam 2025 - Mathematics",
    "organisation": "Rajasthan Public Service Commission (RPSC), Ajmer",
    "state": "Rajasthan",
    "exam_year": 2026,
    "exam_date": "2026-06-03",
    "result_date": "2026-09-03",
    "result_status": "Provisional",
    "category": "cut-off",
    "qualification": null,
    "description": "RPSC published cut-off marks and a provisional list of 35 candidates for eligibility checking for the School Lecturer (Mathematics) posts. RPSC says this is not a final selection list. The General cut-off was 218.27, OBC 211.68 and EWS 199.71.",
    "important_dates": [
      {
        "label": "Paper I",
        "date": "2026-06-03"
      },
      {
        "label": "Paper II",
        "date": "2026-06-05"
      },
      {
        "label": "Result preamble and cut-off",
        "date": "2026-09-03"
      },
      {
        "label": "Detailed application form opens",
        "date": "2026-09-10"
      },
      {
        "label": "Detailed application form closes",
        "date": "2026-09-16"
      }
    ],
    "result_url": "https://rpsc.rajasthan.gov.in/Static/Result/378D98AE0EB24A1195F0844727D90F4D.pdf",
    "scorecard_url": null,
    "cutoff_url": "https://rpsc.rajasthan.gov.in/Static/Result/378D98AE0EB24A1195F0844727D90F4D.pdf",
    "merit_list_url": null,
    "official_website": "https://rpsc.rajasthan.gov.in",
    "exam_slug": "rajasthan-reet",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "hssc-prt-mewat-cadre-final-result",
    "slug": "hssc-prt-mewat-cadre-final-result",
    "exam_name": "HSSC Primary Teacher (Mewat Cadre), Advt. 05/2024 Cat. 01 - Final Result",
    "organisation": "Haryana Staff Selection Commission (HSSC)",
    "state": "Haryana",
    "exam_year": null,
    "exam_date": null,
    "result_date": "2026-07-24",
    "result_status": "Final",
    "category": "result",
    "qualification": null,
    "description": "HSSC declared the final result for Primary Teacher (Mewat Cadre) posts in Haryana's Elementary Education Department, by roll number and category, with the last selected candidate's marks. The UR cut-off was 75.05.",
    "important_dates": [
      {
        "label": "Final result declared",
        "date": "2026-07-24"
      },
      {
        "label": "Waiting list declared",
        "date": "2026-08-09"
      },
      {
        "label": "Final answer key notice",
        "date": "2026-09-10"
      }
    ],
    "result_url": "https://hssc.gov.in/file/ac1f23cd-9f7f-1923-819f-94244ea70006/result",
    "scorecard_url": "https://hssc.gov.in/file/ac1f23cd-9f7f-1923-819f-9e104a82000c/result",
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://hssc.gov.in",
    "exam_slug": "haryana-hssc",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "hssc-prt-mewat-cadre-waiting-list",
    "slug": "hssc-prt-mewat-cadre-waiting-list",
    "exam_name": "HSSC Primary Teacher (Mewat Cadre), Advt. 05/2024 Cat. 01 - Waiting List",
    "organisation": "Haryana Staff Selection Commission (HSSC)",
    "state": "Haryana",
    "exam_year": null,
    "exam_date": null,
    "result_date": "2026-08-09",
    "result_status": "Declared",
    "category": "merit-list",
    "qualification": null,
    "description": "HSSC published the category-wise waiting list for Primary Teacher (Mewat Cadre) after the 24 July 2026 final result, with the cut-off marks of the last waitlisted candidate in each category.",
    "important_dates": [
      {
        "label": "Final result",
        "date": "2026-07-24"
      },
      {
        "label": "Waiting list",
        "date": "2026-08-09"
      }
    ],
    "result_url": "https://hssc.gov.in/file/ac1f23cd-9fda-137e-819f-e719b1920001/result",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": "https://hssc.gov.in/file/ac1f23cd-9fda-137e-819f-e719b1920001/result",
    "official_website": "https://hssc.gov.in",
    "exam_slug": "haryana-hssc",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "tntet-2026-working-teachers-answer-key",
    "slug": "tntet-2026-working-teachers-answer-key",
    "exam_name": "TNTET 2026 for Working Teachers (Paper I & II), Notification 01/2026",
    "organisation": "Teachers Recruitment Board (TRB), Tamil Nadu",
    "state": "Tamil Nadu",
    "exam_year": 2026,
    "exam_date": "2026-07-04",
    "result_date": "2026-07-15",
    "result_status": "Provisional",
    "category": "answer-key",
    "qualification": null,
    "description": "TRB released tentative answer keys, with an online objection tracker, for the OMR-based Tamil Nadu TET held for in-service teachers. Objections were accepted from 15 to 22 July 2026 and needed proof from standard books.",
    "important_dates": [
      {
        "label": "Paper I",
        "date": "2026-07-04"
      },
      {
        "label": "Paper II",
        "date": "2026-07-05"
      },
      {
        "label": "Tentative key and objection window opens",
        "date": "2026-07-15"
      },
      {
        "label": "Objection window closes",
        "date": "2026-07-22"
      }
    ],
    "result_url": "https://trb.tn.gov.in/more_notification_details.php?id=MN-1044&language=LG-1",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://trb.tn.gov.in",
    "exam_slug": "tn-trb",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "dsssb-tgt-computer-science-56-24-result",
    "slug": "dsssb-tgt-computer-science-56-24-result",
    "exam_name": "DSSSB TGT (Computer Science), DoE GNCTD - Post Code 56/24",
    "organisation": "Delhi Subordinate Services Selection Board (DSSSB)",
    "state": "Delhi",
    "exam_year": 2025,
    "exam_date": "2025-09-12",
    "result_date": "2026-09-18",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "DSSSB published result notice no. 375 for 55 TGT (Computer Science) vacancies in Delhi's Directorate of Education, based on Tier-I online exam marks. Eligibility will be checked by the user department before appointment.",
    "important_dates": [
      {
        "label": "Tier-I exam (day 1)",
        "date": "2025-09-12"
      },
      {
        "label": "Tier-I exam (day 2)",
        "date": "2025-09-13"
      },
      {
        "label": "Marks uploaded (Notice 333)",
        "date": "2026-04-20"
      },
      {
        "label": "Result notice 375",
        "date": "2026-09-18"
      }
    ],
    "result_url": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/universal-tab/375.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://dsssb.delhi.gov.in",
    "exam_slug": "dsssb",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  },
  {
    "id": "dsssb-tgt-sanskrit-808-24-result",
    "slug": "dsssb-tgt-sanskrit-808-24-result",
    "exam_name": "DSSSB TGT (Sanskrit) Male/Female, DoE GNCTD & NDMC - Post Code 808/24",
    "organisation": "Delhi Subordinate Services Selection Board (DSSSB)",
    "state": "Delhi",
    "exam_year": null,
    "exam_date": null,
    "result_date": "2026-09-17",
    "result_status": "Declared",
    "category": "result",
    "qualification": null,
    "description": "DSSSB issued the main result for 631 TGT (Sanskrit) vacancies in the Directorate of Education and NDMC. Posts were allocated on merit-cum-preference after e-dossier uploads by 1,185 shortlisted candidates.",
    "important_dates": [
      {
        "label": "E-dossier call notice",
        "date": "2026-05-05"
      },
      {
        "label": "Main result notice",
        "date": "2026-09-17"
      }
    ],
    "result_url": "https://dsssb.delhi.gov.in/sites/default/files/DSSSB/universal-tab/result_notice_808-24.pdf",
    "scorecard_url": null,
    "cutoff_url": null,
    "merit_list_url": null,
    "official_website": "https://dsssb.delhi.gov.in",
    "exam_slug": "dsssb",
    "created_at": "2026-09-23",
    "updated_at": "2026-09-23"
  }
];
