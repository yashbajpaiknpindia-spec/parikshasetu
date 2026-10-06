/**
 * UP teacher-exam previous-year papers (PYQs), part of the ₹99 Prep Pass.
 *
 * The PDFs live in /private/pyq (NOT /public), so they can't be opened by URL; the
 * route /api/pyq/[slug] sends one only when the signed pass cookie verifies.
 * Each file was rebuilt from the scanned board paper alone: third-party adverts,
 * logos and watermarks removed. Titles follow the code printed on each paper
 * (WAE-2018, ATR-2019, UPRI-2013, ...).
 */
export type PyqGroup = "super-tet" | "jase" | "uptet-1" | "uptet-2";

export interface PyqPaper {
  slug: string; // file name in /private/pyq, without .pdf
  group: PyqGroup;
  year: number;
  title: { en: string; hi: string };
  note?: { en: string; hi: string };
  pages: number;
  sizeMb: number;
}

export const PYQ_GROUPS: { key: PyqGroup; en: string; hi: string; blurb: { en: string; hi: string } }[] = [
  {
    key: "super-tet", en: "SUPER TET / Assistant Teacher Recruitment", hi: "सुपर टेट / सहायक अध्यापक भर्ती",
    blurb: { en: "The written exam for UP primary Assistant Teachers: the closest match to your paper.", hi: "UP प्राथमिक सहायक अध्यापक की लिखित परीक्षा: आपके पेपर के सबसे क़रीब।" },
  },
  {
    key: "jase", en: "UP Aided Junior High School Teacher (JASE)", hi: "UP सहायता प्राप्त जूनियर हाईस्कूल शिक्षक (JASE)",
    blurb: { en: "GK, reasoning, pedagogy and subjects at the junior level: good extra practice.", hi: "जूनियर स्तर का GK, तर्कशक्ति, शिक्षणशास्त्र और विषय: अतिरिक्त अभ्यास के लिए।" },
  },
  {
    key: "uptet-1", en: "UPTET Paper 1 (Primary, classes 1–5)", hi: "UPTET पेपर 1 (प्राथमिक, कक्षा 1–5)",
    blurb: { en: "Child development, languages, maths and EVS: the same core as SUPER TET.", hi: "बाल विकास, भाषाएँ, गणित और पर्यावरण: सुपर टेट जैसा ही मूल।" },
  },
  {
    key: "uptet-2", en: "UPTET Paper 2 (Upper Primary, classes 6–8)", hi: "UPTET पेपर 2 (उच्च प्राथमिक, कक्षा 6–8)",
    blurb: { en: "For the classes 6–8 level: maths & science or social studies.", hi: "कक्षा 6–8 स्तर के लिए: गणित-विज्ञान या सामाजिक अध्ययन।" },
  },
];

const PEN = { en: "Scanned candidate copy: pen marks on some answers are not the official key.", hi: "अभ्यर्थी की स्कैन प्रति: कुछ उत्तरों पर पेन के निशान आधिकारिक कुंजी नहीं हैं।" };

export const PYQ_PAPERS: PyqPaper[] = [
  { slug: "super-tet-2019-dec-22", group: "super-tet", year: 2019, title: { en: "ATR-2019 · Assistant Teacher Recruitment Exam (Series A)", hi: "ATR-2019 · सहायक अध्यापक भर्ती परीक्षा (सीरीज़ A)" }, note: PEN, pages: 26, sizeMb: 3.5 },
  { slug: "super-tet-2018-oct-28", group: "super-tet", year: 2018, title: { en: "WAE-2018 · Assistant Teacher Written Exam (Series A)", hi: "WAE-2018 · सहायक अध्यापक लिखित परीक्षा (सीरीज़ A)" }, pages: 11, sizeMb: 2.0 },
  { slug: "super-tet-2018-set-2", group: "super-tet", year: 2018, title: { en: "WAE-2018 · Assistant Teacher Written Exam (Series B)", hi: "WAE-2018 · सहायक अध्यापक लिखित परीक्षा (सीरीज़ B)" }, pages: 16, sizeMb: 2.0 },
  { slug: "up-jase-2021-apr-18", group: "jase", year: 2021, title: { en: "UP Aided Junior High School Teacher Exam 2021", hi: "UP सहायता प्राप्त जूनियर हाईस्कूल शिक्षक परीक्षा 2021" }, pages: 62, sizeMb: 8.7 },
  { slug: "uptet-2019-paper-1", group: "uptet-1", year: 2019, title: { en: "UPTET 2019 · Paper 1 (first session)", hi: "UPTET 2019 · पेपर 1 (प्रथम पाली)" }, note: PEN, pages: 35, sizeMb: 4.1 },
  { slug: "uptet-2016-paper-1", group: "uptet-1", year: 2016, title: { en: "UPTET 2016 · Paper 1", hi: "UPTET 2016 · पेपर 1" }, note: PEN, pages: 23, sizeMb: 3.2 },
  { slug: "uptet-2013-paper-1", group: "uptet-1", year: 2013, title: { en: "UPTET 2013 · Paper 1 (UPRI-2013)", hi: "UPTET 2013 · पेपर 1 (UPRI-2013)" }, note: PEN, pages: 21, sizeMb: 3.2 },
  { slug: "uptet-2019-paper-2-maths-science", group: "uptet-2", year: 2019, title: { en: "UPTET 2019 · Paper 2 Maths & Science (with final answer key)", hi: "UPTET 2019 · पेपर 2 गणित व विज्ञान (अंतिम उत्तर कुंजी सहित)" }, pages: 35, sizeMb: 5.2 },
  { slug: "uptet-2018-paper-2-maths-science", group: "uptet-2", year: 2018, title: { en: "UPTET 2018 · Paper 2 Maths & Science (second session)", hi: "UPTET 2018 · पेपर 2 गणित व विज्ञान (द्वितीय पाली)" }, pages: 30, sizeMb: 3.8 },
  { slug: "uptet-2016-paper-2-maths-science", group: "uptet-2", year: 2016, title: { en: "UPTET 2016 · Paper 2 Maths & Science", hi: "UPTET 2016 · पेपर 2 गणित व विज्ञान" }, note: PEN, pages: 21, sizeMb: 2.5 },
  { slug: "uptet-2016-paper-2-social-science", group: "uptet-2", year: 2016, title: { en: "UPTET 2016 · Social Studies section (6 pages)", hi: "UPTET 2016 · सामाजिक अध्ययन खंड (6 पृष्ठ)" }, pages: 6, sizeMb: 1.2 },
  { slug: "uptet-2013-paper-2", group: "uptet-2", year: 2013, title: { en: "UPTET 2013 · Paper 2", hi: "UPTET 2013 · पेपर 2" }, pages: 30, sizeMb: 4.5 },
];

export const getPyq = (slug: string) => PYQ_PAPERS.find((p) => p.slug === slug);

/** FREE: the official UPESSC 2026 syllabus (exam structure + topic list), in /public/syllabus. */
export const SYLLABUS_PDFS: { href: string; title: { en: string; hi: string }; pages: number; sizeMb: number }[] = [
  { href: "/syllabus/upessc-assistant-teacher-2026-syllabus-classes-1-5.pdf", title: { en: "Assistant Teacher (classes 1–5): exam structure & syllabus 2026", hi: "सहायक अध्यापक (कक्षा 1–5): परीक्षा संरचना व पाठ्यक्रम 2026" }, pages: 2, sizeMb: 0.6 },
  { href: "/syllabus/upessc-assistant-teacher-2026-syllabus-classes-6-8.pdf", title: { en: "Assistant Teacher (classes 6–8): exam structure & syllabus 2026", hi: "सहायक अध्यापक (कक्षा 6–8): परीक्षा संरचना व पाठ्यक्रम 2026" }, pages: 4, sizeMb: 0.5 },
];
