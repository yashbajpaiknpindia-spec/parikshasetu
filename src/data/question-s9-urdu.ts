/**
 * Urdu, Classes 9–10 teacher (BPSC TRE 4.0 Part III), section: "urdu", examLevel: "l3".
 * Topics (20 each): Urdu qawaid, Urdu prose & writers, Urdu poetry & poets,
 * Urdu literary forms, Urdu language & literature history.
 * Urdu-only (stems, options and explanations in Urdu script, right-to-left).
 * Half beginner/medium, half proficient/hard within each topic.
 *
 * Original practice questions modelled on BPSC TRE 4.0 Part III; not PYQs.
 */
import type { Question } from "./questions";

export const s9UrduBank: Question[] = [
  // ==================================================== Urdu qawaid: BEGINNER
  {
    id: "s9ur-b-001", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "لفظ 'مکتوب' قواعد کی رو سے کیا ہے؟",
    options: ["اسمِ فاعل", "مصدر", "اسمِ مفعول", "اسمِ ظرف"], correct: 2,
    explanation: "'مکتوب' یعنی لکھا ہوا، عربی مادہ ک ت ب سے مفعول کے وزن پر اسمِ مفعول ہے۔ اسی مادے سے 'کاتب' اسمِ فاعل اور 'مکتب' اسمِ ظرف ہے۔",
  },
  {
    id: "s9ur-b-002", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "درج ذیل میں مذکر اور مؤنث کا کون سا جوڑا غلط ہے؟",
    options: ["شاعر: شاعرہ", "راجا: راجنی", "مور: مورنی", "ہاتھی: ہتھنی"], correct: 1,
    explanation: "'راجا' کا مؤنث 'رانی' ہے، 'راجنی' نہیں۔ باقی تینوں جوڑے درست ہیں۔",
  },
  {
    id: "s9ur-b-003", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جملہ 'تم یہاں بیٹھو' میں فعل کی کون سی قسم ہے؟",
    options: ["فعلِ نہی", "فعلِ مضارع", "فعلِ ماضی", "فعلِ امر"], correct: 3,
    explanation: "جس فعل میں حکم یا درخواست پائی جائے وہ فعلِ امر ہے۔ اگر کہا جائے 'یہاں مت بیٹھو' تو یہ فعلِ نہی ہوگا۔",
  },
  {
    id: "s9ur-b-004", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "'اچھا'، 'بہتر' اور 'بہترین' میں 'بہترین' صفت کا کون سا درجہ ظاہر کرتا ہے؟",
    options: ["تفضیلِ کل", "تفضیلِ نفسی", "تفضیلِ بعض", "صفتِ عددی"], correct: 0,
    explanation: "'اچھا' تفضیلِ نفسی، 'بہتر' تفضیلِ بعض اور 'بہترین' تفضیلِ کل ہے، یعنی سب سے بڑھ کر۔",
  },
  {
    id: "s9ur-b-005", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "لفظ 'فوراً' کے آخر میں لگی علامت 'اً' کو کیا کہتے ہیں؟",
    options: ["تنوین", "جزم", "تشدید", "مد"], correct: 0,
    explanation: "دو زبر کی علامت تنوین کہلاتی ہے جو 'ن' کی آواز دیتی ہے، جیسے فوراً، اتفاقاً، تقریباً۔",
  },
  {
    id: "s9ur-b-006", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "عربی قاعدے کے مطابق لفظ 'ادیب' کی جمع کیا ہے؟",
    options: ["ادبا", "آداب", "ادبیات", "ادیبان"], correct: 0,
    explanation: "فعیل کے وزن کی جمع فُعَلا آتی ہے، جیسے ادیب سے ادبا اور وزیر سے وزرا۔ 'آداب' لفظ 'ادب' کی جمع ہے۔",
  },
  {
    id: "s9ur-b-007", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "درج ذیل میں جملۂ فعلیہ کون سا ہے؟",
    options: ["آسمان نیلا ہے", "بچہ سو گیا", "احمد بیمار ہے", "یہ کتاب نئی ہے"], correct: 1,
    explanation: "'بچہ سو گیا' میں فاعل کے ساتھ فعلِ تام 'سو گیا' ہے، اس لیے یہ جملۂ فعلیہ ہے۔ باقی جملوں میں مبتدا اور خبر ہیں، یعنی وہ جملۂ اسمیہ ہیں۔",
  },
  {
    id: "s9ur-b-008", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جملہ 'دروازے پر کون ہے؟' میں 'کون' کون سی ضمیر ہے؟",
    options: ["ضمیرِ موصولہ", "ضمیرِ اشارہ", "ضمیرِ شخصی", "ضمیرِ استفہامیہ"], correct: 3,
    explanation: "جس ضمیر سے سوال کیا جائے وہ ضمیرِ استفہامیہ ہے، جیسے کون، کیا، کس۔",
  },
  {
    id: "s9ur-b-009", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جملہ 'اگر بارش ہوئی تو ہم میلے نہیں جائیں گے' میں 'اگر' کیا ہے؟",
    options: ["حرفِ شرط", "حرفِ عطف", "حرفِ ندا", "حرفِ جار"], correct: 0,
    explanation: "'اگر' کسی بات کو دوسری بات کے ہونے پر موقوف کرتا ہے، اس لیے یہ حرفِ شرط ہے اور 'تو' جوابِ شرط لاتا ہے۔",
  },
  {
    id: "s9ur-b-010", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جملہ 'بوڑھا آدمی آہستہ آہستہ چلتا ہے' میں 'آہستہ آہستہ' کیا ہے؟",
    options: ["صفت", "اسم", "متعلقِ فعل", "ضمیر"], correct: 2,
    explanation: "'آہستہ آہستہ' فعل 'چلتا ہے' کی کیفیت بتاتا ہے، اس لیے متعلقِ فعل ہے۔ 'بوڑھا' یہاں صفت ہے۔",
  },

  // ==================================================== Urdu qawaid: PROFICIENT
  {
    id: "s9ur-p-001", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں کون سا لفظ جمع الجمع ہے؟",
    options: ["کتب", "علما", "مسائل", "جواہرات"], correct: 3,
    explanation: "'جوہر' کی جمع 'جواہر' اور 'جواہر' کی جمع 'جواہرات' ہے، اس لیے یہ جمع الجمع ہے۔ باقی الفاظ عام جمع ہیں۔",
  },
  {
    id: "s9ur-p-002", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "مادہ ع ل م سے 'تعلیم دینے والا' کے معنی میں اسمِ فاعل کون سا ہے؟",
    options: ["معلوم", "معلِّم", "علیم", "متعلِّم"], correct: 1,
    explanation: "تعلیم دینے والا 'معلِّم' ہے۔ 'متعلِّم' بھی اسمِ فاعل ہے مگر تعلّم سے، یعنی سیکھنے والا، اور 'معلوم' اسمِ مفعول ہے۔",
  },
  {
    id: "s9ur-p-003", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "لازم مصدر 'بننا' سے متعدی 'بنانا' اور پھر 'بنوانا' بنتا ہے۔ 'بنوانا' کو قواعد میں کیا کہتے ہیں؟",
    options: ["فعلِ لازم", "فعلِ ناقص", "متعدی المتعدی (متعدی بالواسطہ)", "فعلِ امدادی"], correct: 2,
    explanation: "'بنوانا' میں فاعل خود کام نہیں کرتا بلکہ کسی دوسرے سے کرواتا ہے، اس لیے یہ متعدی المتعدی یا متعدی بالواسطہ ہے۔",
  },
  {
    id: "s9ur-p-004", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "وہ فعل جو صرف فاعل سے پورا مطلب نہ دے بلکہ خبر کا محتاج ہو، جیسے جملہ 'موسم خوشگوار تھا' میں 'تھا'، کیا کہلاتا ہے؟",
    options: ["فعلِ ناقص", "فعلِ تام", "فعلِ مجہول", "فعلِ امر"], correct: 0,
    explanation: "'تھا'، 'ہے'، 'ہونا' جیسے افعال خبر کے بغیر بات پوری نہیں کرتے، اس لیے فعلِ ناقص کہلاتے ہیں۔ فعلِ تام فاعل کے ساتھ ہی پورا مطلب دے دیتا ہے۔",
  },
  {
    id: "s9ur-p-005", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں کون سا لفظ آخر میں 'ی' ہونے کے باوجود مذکر ہے؟",
    options: ["ندی", "کرسی", "روٹی", "موتی"], correct: 3,
    explanation: "آخر میں 'ی' عموماً تانیث کی علامت ہے، مگر 'موتی' مذکر ہے (موتی چمکتا ہے)۔ پانی، دہی اور گھی بھی ایسی ہی مثالیں ہیں۔",
  },
  {
    id: "s9ur-p-006", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "دعویٰ (A): مرکبِ اضافی 'دردِ دل' میں اضافت کا زیر لفظ 'درد' کے آخر میں آتا ہے۔ دلیل (R): فارسی اضافت میں کسرہ مضاف کے آخری حرف پر لگایا جاتا ہے۔",
    options: [
      "A اور R دونوں درست ہیں اور R، A کی صحیح وضاحت ہے",
      "A اور R دونوں درست ہیں مگر R، A کی صحیح وضاحت نہیں",
      "A درست ہے مگر R غلط ہے",
      "A غلط ہے مگر R درست ہے",
    ], correct: 0,
    explanation: "'دردِ دل' میں 'درد' مضاف اور 'دل' مضاف الیہ ہے۔ فارسی اضافت کا زیر مضاف کے آخر میں آتا ہے، اس لیے R ہی A کی وجہ ہے۔",
  },
  {
    id: "s9ur-p-007", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ملان کیجیے: (الف) اسمِ آلہ (ب) اسمِ ظرفِ زماں (ج) اسمِ کیفیت (د) اسمِ فاعل ۔۔۔ (1) شام (2) تلوار (3) کاتب (4) سچائی",
    options: ["الف-1، ب-2، ج-4، د-3", "الف-2، ب-1، ج-3، د-4", "الف-2، ب-1، ج-4، د-3", "الف-4، ب-1، ج-2، د-3"], correct: 2,
    explanation: "تلوار اوزار ہے (اسمِ آلہ)، شام وقت ہے (ظرفِ زماں)، سچائی حالت ہے (اسمِ کیفیت) اور کاتب کام کرنے والا ہے (اسمِ فاعل)۔",
  },
  {
    id: "s9ur-p-008", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "'خواب'، 'خواہش' اور 'خود' میں 'و' لکھی جاتی ہے مگر پڑھی نہیں جاتی۔ ایسی 'و' کو کیا کہتے ہیں؟",
    options: ["واوِ معروف", "واوِ مجہول", "واوِ عطف", "واوِ معدولہ"], correct: 3,
    explanation: "'خ' کے بعد آنے والی وہ 'و' جو تلفظ میں نہیں آتی واوِ معدولہ کہلاتی ہے۔ واوِ معروف 'دور' میں اور واوِ مجہول 'شور' میں ہے۔",
  },
  {
    id: "s9ur-p-009", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں کس لفظ کے آخر میں نونِ غنہ نہیں بلکہ پورا ادا ہونے والا نون (نونِ معلنہ) ہے؟",
    options: ["جہاں", "ماں", "زمین", "گاؤں"], correct: 2,
    explanation: "'زمین' کا نون پوری طرح ادا ہوتا ہے، اس لیے نونِ معلنہ ہے۔ جہاں، ماں اور گاؤں میں نون صرف ناک سے ادا ہوتا ہے، یعنی نونِ غنہ ہے۔",
  },
  {
    id: "s9ur-p-010", section: "urdu", topic: "Urdu qawaid", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں کس لفظ کے آخر میں ہائے مختفی ہے؟",
    options: ["راہ", "پردہ", "شاہ", "گواہ"], correct: 1,
    explanation: "'پردہ' کی آخری 'ہ' صاف ادا نہیں ہوتی بلکہ زبر کی آواز دیتی ہے، یہ ہائے مختفی ہے۔ راہ، شاہ اور گواہ میں ہائے ملفوظی ہے۔",
  },

  // ==================================================== Urdu prose & writers: BEGINNER
  {
    id: "s9ur-b-011", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "سر سید احمد خاں کی مشہور سوانح 'حیاتِ جاوید' کس نے لکھی؟",
    options: ["شبلی نعمانی", "محمد حسین آزاد", "الطاف حسین حالی", "ڈپٹی نذیر احمد"], correct: 2,
    explanation: "'حیاتِ جاوید' الطاف حسین حالی کی لکھی ہوئی سر سید کی سوانح عمری ہے، جو اردو سوانح نگاری کا اہم نمونہ مانی جاتی ہے۔",
  },
  {
    id: "s9ur-b-012", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "حضرت عمرؓ کی سوانح 'الفاروق' کس کی تصنیف ہے؟",
    options: ["شبلی نعمانی", "سید سلیمان ندوی", "الطاف حسین حالی", "مولوی عبدالحق"], correct: 0,
    explanation: "'الفاروق' علامہ شبلی نعمانی کی تصنیف ہے۔ 'المامون' اور 'سیرۃ النعمان' بھی ان کی سوانحی کتابیں ہیں۔",
  },
  {
    id: "s9ur-b-013", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "مشہور خاکہ 'نام دیو مالی' کس ادیب کا لکھا ہوا ہے؟",
    options: ["رشید احمد صدیقی", "مرزا فرحت اللہ بیگ", "مولوی عبدالحق", "خواجہ حسن نظامی"], correct: 2,
    explanation: "'نام دیو مالی' مولوی عبدالحق کا خاکہ ہے جو ان کے مجموعے 'چند ہم عصر' میں شامل ہے۔",
  },
  {
    id: "s9ur-b-014", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "بچوں کی مشہور کہانی 'ابو خاں کی بکری' کس نے لکھی؟",
    options: ["اسماعیل میرٹھی", "ڈاکٹر ذاکر حسین", "پریم چند", "کرشن چندر"], correct: 1,
    explanation: "'ابو خاں کی بکری' ڈاکٹر ذاکر حسین کی لکھی ہوئی کہانی ہے جو آزادی کی قدر کا سبق دیتی ہے۔",
  },
  {
    id: "s9ur-b-015", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "طنزیہ و مزاحیہ مجموعہ 'خاکم بدہن' کس کی تصنیف ہے؟",
    options: ["مشتاق احمد یوسفی", "ابن انشا", "کنہیا لال کپور", "شوکت تھانوی"], correct: 0,
    explanation: "'خاکم بدہن' مشتاق احمد یوسفی کی کتاب ہے۔ 'چراغ تلے'، 'زرگزشت' اور 'آبِ گم' بھی انہی کی ہیں۔",
  },
  {
    id: "s9ur-b-016", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "'اردو کی آخری کتاب' کس مزاح نگار کی تصنیف ہے؟",
    options: ["پطرس بخاری", "رشید احمد صدیقی", "ابن انشا", "مجتبیٰ حسین"], correct: 2,
    explanation: "'اردو کی آخری کتاب' ابن انشا کی طنزیہ کتاب ہے جو درسی کتابوں کے انداز پر لکھی گئی ہے۔",
  },
  {
    id: "s9ur-b-017", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "عہدِ اکبری کے امرا اور علما کے احوال پر مبنی کتاب 'دربارِ اکبری' کس نے لکھی؟",
    options: ["شبلی نعمانی", "محمد حسین آزاد", "سر سید احمد خاں", "ذکاء اللہ"], correct: 1,
    explanation: "'دربارِ اکبری' محمد حسین آزاد کی تصنیف ہے اور ان کے رنگین، دلکش اسلوب کی نمائندہ کتاب ہے۔",
  },
  {
    id: "s9ur-b-018", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "پریم چند کی کہانی 'دو بیل' میں دونوں بیلوں کے نام کیا ہیں؟",
    options: ["ہیرا اور موتی", "رام اور شیام", "ہلکو اور جبرا", "گنگو اور منگو"], correct: 0,
    explanation: "'دو بیل' میں جھوری کے دو بیل ہیرا اور موتی ہیں۔ ہلکو اور جبرا پریم چند کی کہانی 'پوس کی رات' کے کردار ہیں۔",
  },
  {
    id: "s9ur-b-019", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "سر سید احمد خاں کا وہ مضمون کون سا ہے جس میں ایک بوڑھا اپنی گزری ہوئی زندگی یاد کر کے پچھتاتا ہے اور نیکی کی طرف مائل ہوتا ہے؟",
    options: ["لاہور کا جغرافیہ", "گزرا ہوا زمانہ", "مرحوم کی یاد میں", "اردو کی آخری کتاب"], correct: 1,
    explanation: "'گزرا ہوا زمانہ' سر سید کا مشہور اصلاحی مضمون ہے۔ 'لاہور کا جغرافیہ' اور 'مرحوم کی یاد میں' پطرس بخاری کے مضامین ہیں۔",
  },
  {
    id: "s9ur-b-020", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "افسانہ 'آنندی' کس افسانہ نگار کا ہے؟",
    options: ["سعادت حسن منٹو", "راجندر سنگھ بیدی", "عصمت چغتائی", "غلام عباس"], correct: 3,
    explanation: "'آنندی' غلام عباس کا مشہور افسانہ ہے جس میں ایک شہر کے بسنے اور پھیلنے کی کہانی علامتی انداز میں بیان ہوئی ہے۔",
  },

  // ==================================================== Urdu prose & writers: PROFICIENT
  {
    id: "s9ur-p-011", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "پریم چند کی کہانی 'نمک کا داروغہ' کا ایمان دار مرکزی کردار کون ہے جو پنڈت الوپی دین کی رشوت ٹھکرا دیتا ہے؟",
    options: ["ہلکو", "منشی ونشی دھر", "حامد", "جوکھو"], correct: 1,
    explanation: "'نمک کا داروغہ' میں داروغہ منشی ونشی دھر الوپی دین کی رشوت قبول نہیں کرتا، اور آخر میں الوپی دین اسی ایمان داری سے متاثر ہو کر اسے اپنا منیجر بناتا ہے۔",
  },
  {
    id: "s9ur-p-012", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "علامہ شبلی نعمانی کی ادھوری 'سیرۃ النبی' کو ان کی وفات کے بعد کس نے مکمل کیا؟",
    options: ["سید سلیمان ندوی", "عبدالماجد دریابادی", "الطاف حسین حالی", "مولانا ابوالکلام آزاد"], correct: 0,
    explanation: "شبلی کی وفات (1914) کے بعد ان کے شاگرد سید سلیمان ندوی نے 'سیرۃ النبی' کی باقی جلدیں مکمل کیں۔",
  },
  {
    id: "s9ur-p-013", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "خاکہ 'نذیر احمد کی کہانی، کچھ ان کی کچھ میری زبانی' کس نے لکھا؟",
    options: ["مرزا فرحت اللہ بیگ", "رشید احمد صدیقی", "مولوی عبدالحق", "شاہد احمد دہلوی"], correct: 0,
    explanation: "یہ مرزا فرحت اللہ بیگ کا مشہور خاکہ ہے جس میں انھوں نے اپنے استاد ڈپٹی نذیر احمد کی شخصیت دلچسپ انداز میں پیش کی۔",
  },
  {
    id: "s9ur-p-014", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "سجاد حیدر یلدرم اردو میں خاص طور پر کس زبان کے ادب کے ترجموں کے لیے جانے جاتے ہیں؟",
    options: ["فرانسیسی", "روسی", "جرمن", "ترکی"], correct: 3,
    explanation: "یلدرم نے ترکی ادب سے کئی کہانیاں اور ڈرامے اردو میں منتقل کیے۔ وہ اردو کے ابتدائی رومانی افسانہ نگاروں میں شمار ہوتے ہیں۔",
  },
  {
    id: "s9ur-p-015", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ملان کیجیے: (الف) ان داتا (ب) گرہن (ج) نیا قانون (د) اوورکوٹ ۔۔۔ (1) سعادت حسن منٹو (2) غلام عباس (3) کرشن چندر (4) راجندر سنگھ بیدی",
    options: ["الف-3، ب-4، ج-1، د-2", "الف-4، ب-3، ج-1، د-2", "الف-3، ب-4، ج-2، د-1", "الف-1، ب-4، ج-3، د-2"], correct: 0,
    explanation: "'ان داتا' کرشن چندر کا، 'گرہن' راجندر سنگھ بیدی کا، 'نیا قانون' منٹو کا اور 'اوورکوٹ' غلام عباس کا افسانہ ہے۔",
  },
  {
    id: "s9ur-p-016", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شبلی نعمانی کی کتاب 'شعر العجم' کا موضوع کیا ہے؟",
    options: ["اردو غزل کی تاریخ", "فارسی شاعری کی تاریخ و تنقید", "عربی نحو", "مغلیہ سلطنت کی تاریخ"], correct: 1,
    explanation: "'شعر العجم' پانچ جلدوں میں فارسی شاعری کی تاریخ اور تنقید ہے اور شبلی کی تنقیدی بصیرت کا اہم نمونہ ہے۔",
  },
  {
    id: "s9ur-p-017", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "رشید احمد صدیقی کی 'گنجہائے گراں مایہ' کس صنف کی کتاب ہے؟",
    options: ["ناول", "سفرنامہ", "خاکے", "افسانے"], correct: 2,
    explanation: "'گنجہائے گراں مایہ' میں رشید احمد صدیقی نے اپنے عہد کی ممتاز شخصیتوں کے خاکے لکھے ہیں۔",
  },
  {
    id: "s9ur-p-018", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ناول 'فسانۂ مبتلا'، 'بنات النعش' اور 'ایامیٰ' کس ناول نگار کی تصانیف ہیں؟",
    options: ["رتن ناتھ سرشار", "ڈپٹی نذیر احمد", "عبدالحلیم شرر", "مرزا ہادی رسوا"], correct: 1,
    explanation: "یہ تینوں ڈپٹی نذیر احمد کے اصلاحی ناول ہیں۔ 'ایامیٰ' میں بیوہ کی دوسری شادی کا مسئلہ اٹھایا گیا ہے۔",
  },
  {
    id: "s9ur-p-019", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں کون سا ناول انتظار حسین کا ہے؟",
    options: ["اداس نسلیں", "خدا کی بستی", "آنگن", "بستی"], correct: 3,
    explanation: "'بستی' انتظار حسین کا ناول ہے۔ 'اداس نسلیں' عبداللہ حسین کا، 'خدا کی بستی' شوکت صدیقی کا اور 'آنگن' خدیجہ مستور کا ناول ہے۔",
  },
  {
    id: "s9ur-p-020", section: "urdu", topic: "Urdu prose & writers", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "دعویٰ (A): مشتاق احمد یوسفی کا شمار اردو کے بڑے مزاح نگاروں میں ہوتا ہے۔ دلیل (R): 'آبِ گم' یوسفی کا شعری مجموعہ ہے۔",
    options: [
      "A اور R دونوں درست ہیں اور R، A کی صحیح وضاحت ہے",
      "A اور R دونوں درست ہیں مگر R، A کی صحیح وضاحت نہیں",
      "A درست ہے مگر R غلط ہے",
      "A غلط ہے مگر R درست ہے",
    ], correct: 2,
    explanation: "یوسفی بلاشبہ بڑے مزاح نگار ہیں، مگر 'آبِ گم' ان کی نثری کتاب ہے، شعری مجموعہ نہیں۔ اس لیے R غلط ہے۔",
  },

  // ==================================================== Urdu poetry & poets: BEGINNER
  {
    id: "s9ur-b-021", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "مصرع 'ڈھونڈو گے اگر ملکوں ملکوں، ملنے کے نہیں نایاب ہیں ہم' کس شاعر کا ہے؟",
    options: ["جگر مرادآبادی", "حسرت موہانی", "شاد عظیم آبادی", "فانی بدایونی"], correct: 2,
    explanation: "یہ مشہور مصرع عظیم آباد (پٹنہ) کے شاعر شاد عظیم آبادی کی غزل کا ہے۔",
  },
  {
    id: "s9ur-b-022", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "علامہ اقبال کے مجموعے 'بانگِ درا' کی پہلی نظم کون سی ہے؟",
    options: ["شکوہ", "ہمالہ", "نیا شوالہ", "ترانۂ ہندی"], correct: 1,
    explanation: "'بانگِ درا' کا آغاز نظم 'ہمالہ' سے ہوتا ہے جس میں اقبال نے ہمالیہ کو ہندوستان کی عظمت کی علامت بنایا ہے۔",
  },
  {
    id: "s9ur-b-023", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "نظم 'آدمی نامہ' کس شاعر کی ہے؟",
    options: ["نظیر اکبرآبادی", "الطاف حسین حالی", "اکبر الہ آبادی", "اسماعیل میرٹھی"], correct: 0,
    explanation: "'آدمی نامہ' نظیر اکبرآبادی کی نظم ہے جس میں انسان کے مختلف روپ عوامی زبان میں دکھائے گئے ہیں۔",
  },
  {
    id: "s9ur-b-024", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "برسات کے موسم پر الطاف حسین حالی کی مشہور نظم کون سی ہے؟",
    options: ["ساون", "بہار", "جاڑا", "برکھا رت"], correct: 3,
    explanation: "'برکھا رت' حالی کی نیچرل شاعری کی مشہور نظم ہے جس میں برسات کے مناظر فطری انداز میں بیان ہوئے ہیں۔",
  },
  {
    id: "s9ur-b-025", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "بچوں کی نظم 'ہماری گائے' (رب کا شکر ادا کر بھائی / جس نے ہماری گائے بنائی) کس شاعر کی ہے؟",
    options: ["اسماعیل میرٹھی", "افسر میرٹھی", "شفیع الدین نیر", "نظیر اکبرآبادی"], correct: 0,
    explanation: "'ہماری گائے' اسماعیل میرٹھی کی نظم ہے۔ وہ بچوں کے ادب اور درسی کتابوں کے لیے مشہور ہیں۔",
  },
  {
    id: "s9ur-b-026", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "'رئیس المتغزلین' کے لقب سے کون سا شاعر مشہور ہے؟",
    options: ["فانی بدایونی", "حسرت موہانی", "جگر مرادآبادی", "اصغر گونڈوی"], correct: 1,
    explanation: "حسرت موہانی کو 'رئیس المتغزلین' کہا جاتا ہے۔ انھوں نے بیسویں صدی میں غزل کو نئی زندگی دی۔",
  },
  {
    id: "s9ur-b-027", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "شعر 'لائی حیات آئے، قضا لے چلی چلے / اپنی خوشی نہ آئے نہ اپنی خوشی چلے' کس شاعر کا ہے؟",
    options: ["مرزا غالب", "میر تقی میر", "شیخ ابراہیم ذوق", "مومن خاں مومن"], correct: 2,
    explanation: "یہ مشہور شعر شیخ ابراہیم ذوق کا ہے جس میں زندگی اور موت پر انسان کی بے اختیاری بیان ہوئی ہے۔",
  },
  {
    id: "s9ur-b-028", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "'شاعرِ رومان' کے لقب سے کون سا شاعر یاد کیا جاتا ہے؟",
    options: ["اسرار الحق مجاز", "فراق گورکھپوری", "جوش ملیح آبادی", "اختر شیرانی"], correct: 3,
    explanation: "اختر شیرانی کو 'شاعرِ رومان' کہا جاتا ہے۔ ان کی نظموں میں سلمیٰ اور عذرا جیسے رومانی کردار ملتے ہیں۔",
  },
  {
    id: "s9ur-b-029", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "علامہ اقبال کی نظم 'ترانۂ ملی' کا پہلا مصرع کون سا ہے؟",
    options: ["سارے جہاں سے اچھا ہندوستاں ہمارا", "چین و عرب ہمارا، ہندوستاں ہمارا", "لب پہ آتی ہے دعا بن کے تمنا میری", "خودی کا سرِ نہاں لا الٰہ الا اللہ"], correct: 1,
    explanation: "'ترانۂ ملی' کا آغاز 'چین و عرب ہمارا، ہندوستاں ہمارا' سے ہوتا ہے۔ 'سارے جہاں سے اچھا' 'ترانۂ ہندی' کا پہلا مصرع ہے۔",
  },
  {
    id: "s9ur-b-030", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "مجموعۂ کلام 'خوشبو' کس شاعرہ کا ہے؟",
    options: ["پروین شاکر", "فہمیدہ ریاض", "کشور ناہید", "ادا جعفری"], correct: 0,
    explanation: "'خوشبو' پروین شاکر کا پہلا مجموعۂ کلام ہے۔ 'صد برگ' اور 'خود کلامی' بھی انہی کے مجموعے ہیں۔",
  },

  // ==================================================== Urdu poetry & poets: PROFICIENT
  {
    id: "s9ur-p-021", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعر 'تم مرے پاس ہوتے ہو گویا / جب کوئی دوسرا نہیں ہوتا' کس شاعر کا ہے؟",
    options: ["مومن خاں مومن", "مرزا غالب", "شیخ ابراہیم ذوق", "داغ دہلوی"], correct: 0,
    explanation: "یہ شعر مومن خاں مومن کا ہے۔ روایت ہے کہ غالب نے اس شعر کی بہت داد دی تھی۔",
  },
  {
    id: "s9ur-p-022", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "اقبال کی نظم 'سارے جہاں سے اچھا ہندوستاں ہمارا' کا اصل عنوان کیا ہے؟",
    options: ["ترانۂ ملی", "ترانۂ ہندی", "ہندوستانی بچوں کا قومی گیت", "نیا شوالہ"], correct: 1,
    explanation: "یہ نظم 'ترانۂ ہندی' کے عنوان سے 'بانگِ درا' میں شامل ہے۔ 'ہندوستانی بچوں کا قومی گیت' اور 'نیا شوالہ' اقبال کی الگ نظمیں ہیں۔",
  },
  {
    id: "s9ur-p-023", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعر 'میں اکیلا ہی چلا تھا جانبِ منزل مگر / لوگ ساتھ آتے گئے اور کارواں بنتا گیا' کس شاعر کا ہے؟",
    options: ["ساحر لدھیانوی", "کیفی اعظمی", "جاں نثار اختر", "مجروح سلطان پوری"], correct: 3,
    explanation: "یہ شعر مجروح سلطان پوری کا ہے اور ترقی پسند دور کی غزل کا مشہور شعر ہے۔",
  },
  {
    id: "s9ur-p-024", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "بہار کے غزل گو شاعر کلیم عاجز کا مشہور مجموعۂ کلام کون سا ہے؟",
    options: ["برگِ نے", "سرخ سویرا", "وہ جو شاعری کا سبب ہوا", "آتشِ گل"], correct: 2,
    explanation: "'وہ جو شاعری کا سبب ہوا' کلیم عاجز کا مجموعہ ہے۔ 'برگِ نے' ناصر کاظمی کا، 'سرخ سویرا' مخدوم کا اور 'آتشِ گل' جگر کا مجموعہ ہے۔",
  },
  {
    id: "s9ur-p-025", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ملان کیجیے: (الف) مخدوم محی الدین (ب) ناصر کاظمی (ج) کیفی اعظمی (د) اسرار الحق مجاز ۔۔۔ (1) برگِ نے (2) آوارہ سجدے (3) سرخ سویرا (4) آہنگ",
    options: ["الف-3، ب-1، ج-2، د-4", "الف-1، ب-3، ج-2، د-4", "الف-3، ب-2، ج-1، د-4", "الف-4، ب-1، ج-2، د-3"], correct: 0,
    explanation: "'سرخ سویرا' مخدوم کا، 'برگِ نے' ناصر کاظمی کا، 'آوارہ سجدے' کیفی اعظمی کا اور 'آہنگ' مجاز کا مجموعۂ کلام ہے۔",
  },
  {
    id: "s9ur-p-026", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "میر تقی میر کے اردو کلام میں کتنے دیوان شامل ہیں؟",
    options: ["چھ", "پانچ", "چار", "سات"], correct: 0,
    explanation: "کلیاتِ میر میں میر کے چھ اردو دیوان شامل ہیں، ساتھ ہی مثنویاں اور دوسری اصناف بھی ہیں۔",
  },
  {
    id: "s9ur-p-027", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "غم اور مایوسی کے مضامین کی وجہ سے 'یاسیات کا امام' کس شاعر کو کہا جاتا ہے؟",
    options: ["میر تقی میر", "حسرت موہانی", "یاس یگانہ چنگیزی", "فانی بدایونی"], correct: 3,
    explanation: "فانی بدایونی کی شاعری پر غم، موت اور مایوسی کا رنگ چھایا ہوا ہے، اس لیے انھیں 'یاسیات کا امام' کہا جاتا ہے۔ یگانہ کے نام میں 'یاس' تخلص ہے، لقب نہیں۔",
  },
  {
    id: "s9ur-p-028", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "اقبال کے اردو مجموعوں کی اشاعت کی درست زمانی ترتیب کون سی ہے؟",
    options: ["بالِ جبریل، بانگِ درا، ضربِ کلیم", "بانگِ درا، بالِ جبریل، ضربِ کلیم", "بانگِ درا، ضربِ کلیم، بالِ جبریل", "ضربِ کلیم، بالِ جبریل، بانگِ درا"], correct: 1,
    explanation: "'بانگِ درا' 1924 میں، 'بالِ جبریل' 1935 میں اور 'ضربِ کلیم' 1936 میں شائع ہوئی۔",
  },
  {
    id: "s9ur-p-029", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "دعویٰ (A): نظم 'شکوہ' میں اقبال نے خدا سے مسلمانوں کی زبوں حالی کا شکوہ کیا ہے۔ دلیل (R): نظم 'جوابِ شکوہ' میں اس شکوے کا جواب خدا کی طرف سے دیا گیا ہے۔",
    options: [
      "A اور R دونوں درست ہیں اور R، A کی صحیح وضاحت ہے",
      "A اور R دونوں درست ہیں مگر R، A کی صحیح وضاحت نہیں",
      "A درست ہے مگر R غلط ہے",
      "A غلط ہے مگر R درست ہے",
    ], correct: 1,
    explanation: "دونوں بیانات درست ہیں، مگر 'جوابِ شکوہ' کا ہونا اس بات کی وجہ نہیں کہ 'شکوہ' میں شکایت کی گئی، اس لیے R، A کی وضاحت نہیں۔",
  },
  {
    id: "s9ur-p-030", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "حالی کی نظم 'مناجاتِ بیوہ' کا موضوع کیا ہے؟",
    options: ["وطن کی محبت", "برسات کا موسم", "بیوہ عورت کی بے کسی اور دکھ بھری زندگی", "مسلمانوں کا عروج و زوال"], correct: 2,
    explanation: "'مناجاتِ بیوہ' میں ایک بیوہ کی زبان سے اس کی بے بسی اور سماج کے سلوک کو دعا کے انداز میں پیش کیا گیا ہے۔ مسلمانوں کا عروج و زوال 'مسدسِ حالی' کا موضوع ہے۔",
  },

  // ==================================================== Urdu literary forms: BEGINNER
  {
    id: "s9ur-b-031", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "غزل میں مطلع کے بعد آنے والا وہ شعر جس کے دونوں مصرعے بھی ہم قافیہ ہوں، کیا کہلاتا ہے؟",
    options: ["بیت الغزل", "حسنِ مطلع (مطلعِ ثانی)", "مقطع", "فرد"], correct: 1,
    explanation: "مطلع کے بعد اگر کوئی اور شعر بھی دونوں مصرعوں میں ہم قافیہ ہو تو اسے حسنِ مطلع یا مطلعِ ثانی کہتے ہیں۔",
  },
  {
    id: "s9ur-b-032", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جس نظم کے ہر بند میں پانچ مصرعے ہوں، اسے کیا کہتے ہیں؟",
    options: ["مسدس", "مربع", "مخمس", "مثمن"], correct: 2,
    explanation: "پانچ مصرعوں کے بند والی نظم مخمس ہے۔ مربع میں چار، مسدس میں چھ اور مثمن میں آٹھ مصرعے ہوتے ہیں۔",
  },
  {
    id: "s9ur-b-033", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "کسی شخص کی برائی اور مذمت میں کہی گئی نظم کیا کہلاتی ہے؟",
    options: ["ہجو", "قصیدہ", "منقبت", "واسوخت"], correct: 0,
    explanation: "ہجو قصیدے کی ضد ہے: قصیدے میں تعریف اور ہجو میں مذمت کی جاتی ہے۔ سودا ہجو گوئی کے لیے مشہور ہیں۔",
  },
  {
    id: "s9ur-b-034", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "اہلِ بیت، صحابہ اور اولیا و بزرگانِ دین کی تعریف میں کہی جانے والی نظم کو کیا کہتے ہیں؟",
    options: ["نعت", "حمد", "مرثیہ", "منقبت"], correct: 3,
    explanation: "بزرگانِ دین کی مدح منقبت کہلاتی ہے۔ حمد اللہ کی اور نعت رسول ﷺ کی تعریف میں ہوتی ہے۔",
  },
  {
    id: "s9ur-b-035", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "انگریزی سے اردو میں آئی ہوئی وہ صنف جس میں چودہ مصرعے ہوتے ہیں، کیا کہلاتی ہے؟",
    options: ["سانیٹ", "ہائیکو", "ماہیا", "دوہا"], correct: 0,
    explanation: "سانیٹ چودہ مصرعوں کی نظم ہے جو یورپی ادب سے اردو میں آئی۔ ہائیکو اور ماہیا تین مصرعوں اور دوہا دو مصرعوں کا ہوتا ہے۔",
  },
  {
    id: "s9ur-b-036", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "تین مصرعوں پر مشتمل وہ جاپانی صنفِ سخن کون سی ہے جو اردو میں بھی رائج ہوئی؟",
    options: ["سانیٹ", "ماہیا", "ہائیکو", "رباعی"], correct: 2,
    explanation: "ہائیکو جاپانی صنف ہے جس کے تین مصرعے ہوتے ہیں۔ ماہیا بھی تین مصرعوں کا ہوتا ہے مگر وہ پنجابی لوک صنف ہے۔",
  },
  {
    id: "s9ur-b-037", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "پہیلی سے ملتی جلتی صنف 'کہہ مکرنی' خاص طور پر کس شاعر سے منسوب ہے؟",
    options: ["امیر خسرو", "ولی دکنی", "نظیر اکبرآبادی", "محمد قلی قطب شاہ"], correct: 0,
    explanation: "کہہ مکرنی اور پہیلیاں امیر خسرو سے منسوب ہیں۔ کہہ مکرنی میں کہنے والی پہلے ایک بات کہتی ہے اور پھر اس سے مکر جاتی ہے۔",
  },
  {
    id: "s9ur-b-038", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "کسی واقعے کو آنکھوں دیکھے حال کی طرح ادبی انداز میں پیش کرنے والی نثری صنف کیا کہلاتی ہے؟",
    options: ["انشائیہ", "تذکرہ", "ناولٹ", "رپورتاژ"], correct: 3,
    explanation: "رپورتاژ میں لکھنے والا کسی واقعے یا اجتماع کا چشم دید حال ادبی رنگ کے ساتھ بیان کرتا ہے۔",
  },
  {
    id: "s9ur-b-039", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "غزل کا سب سے عمدہ اور بہترین شعر کیا کہلاتا ہے؟",
    options: ["مقطع", "حسنِ مطلع", "بیت الغزل", "مطلع"], correct: 2,
    explanation: "غزل کے سب سے اچھے شعر کو بیت الغزل کہتے ہیں، چاہے وہ غزل میں کسی بھی جگہ ہو۔",
  },
  {
    id: "s9ur-b-040", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "وہ اکیلا شعر جو کسی غزل یا نظم کا حصہ نہ ہو اور اپنے آپ میں مکمل ہو، کیا کہلاتا ہے؟",
    options: ["قطعہ", "فرد", "مثنوی", "مستزاد"], correct: 1,
    explanation: "اکیلے مکمل شعر کو فرد کہتے ہیں۔ قطعہ میں کم از کم دو شعر ہوتے ہیں جو ایک ہی مضمون سے جڑے ہوں۔",
  },

  // ==================================================== Urdu literary forms: PROFICIENT
  {
    id: "s9ur-p-031", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "غالب کے مطلع 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے / بہت نکلے مرے ارمان لیکن پھر بھی کم نکلے' میں قافیہ اور ردیف کیا ہیں؟",
    options: ["قافیہ: نکلے، ردیف: دم اور کم", "قافیہ: دم اور کم، ردیف: نکلے", "قافیہ: خواہش اور ارمان، ردیف: نکلے", "قافیہ: ایسی اور لیکن، ردیف: دم"], correct: 1,
    explanation: "ہر مصرعے کے آخر میں بعینہٖ دہرایا جانے والا لفظ 'نکلے' ردیف ہے، اور اس سے پہلے ہم آواز الفاظ 'دم' اور 'کم' قافیہ ہیں۔",
  },
  {
    id: "s9ur-p-032", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ترجیع بند اور ترکیب بند میں بنیادی فرق کیا ہے؟",
    options: [
      "ترجیع بند میں قافیہ نہیں ہوتا جبکہ ترکیب بند میں ہوتا ہے",
      "ترکیب بند صرف مرثیے کے لیے مخصوص ہے",
      "دونوں میں کوئی فرق نہیں، یہ ایک ہی صنف کے دو نام ہیں",
      "ترجیع بند میں ہر بند کے آخر میں ایک ہی شعر دہرایا جاتا ہے جبکہ ترکیب بند میں ہر بند کا آخری شعر الگ ہوتا ہے",
    ], correct: 3,
    explanation: "دونوں میں بند غزل کی ہیئت میں ہوتے ہیں اور آخر میں ایک الگ قافیے کا شعر آتا ہے۔ ترجیع بند میں یہ ٹیپ کا شعر ہر بند میں وہی رہتا ہے، ترکیب بند میں ہر بار بدل جاتا ہے۔",
  },
  {
    id: "s9ur-p-033", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "مرثیے کا وہ ابتدائی جزو کیا کہلاتا ہے جس میں تمہید باندھی جاتی ہے اور صبح یا گرمی جیسے مناظر بیان ہوتے ہیں؟",
    options: ["رخصت", "چہرہ", "رجز", "بین"], correct: 1,
    explanation: "مرثیے کا آغاز چہرہ سے ہوتا ہے، پھر سراپا، رخصت، آمد، رجز، جنگ، شہادت اور بین آتے ہیں۔",
  },
  {
    id: "s9ur-p-034", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعر میں ایک دوسرے سے مناسبت رکھنے والی چیزیں، جیسے گل، بلبل، چمن اور باغباں، ایک ساتھ لانا کون سی صنعت ہے؟",
    options: ["مراعاۃ النظیر", "تضاد", "لف و نشر", "تجنیس"], correct: 0,
    explanation: "باہم مناسبت رکھنے والے الفاظ جمع کرنا مراعاۃ النظیر ہے۔ تضاد میں الٹے معنی والے الفاظ لائے جاتے ہیں۔",
  },
  {
    id: "s9ur-p-035", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعر میں پہلے چند چیزوں کا ذکر کرنا اور پھر ان سے متعلق باتیں ترتیب سے یا بے ترتیب بیان کرنا کون سی صنعت ہے؟",
    options: ["لف و نشر", "مراعاۃ النظیر", "حسنِ تعلیل", "تلمیح"], correct: 0,
    explanation: "پہلے چیزوں کا ذکر 'لف' اور پھر ان سے متعلق باتوں کا بیان 'نشر' ہے۔ ترتیب برقرار رہے تو لف و نشرِ مرتب، ورنہ غیر مرتب کہلاتا ہے۔",
  },
  {
    id: "s9ur-p-036", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "مبالغے کی وہ قسم جس میں بیان کی گئی بات عقلاً اور عادتاً دونوں طرح ناممکن ہو، کیا کہلاتی ہے؟",
    options: ["تبلیغ", "اغراق", "غلو", "ایہام"], correct: 2,
    explanation: "تبلیغ میں بات عقلاً اور عادتاً ممکن، اغراق میں عقلاً ممکن مگر عادتاً ناممکن، اور غلو میں دونوں طرح ناممکن ہوتی ہے۔",
  },
  {
    id: "s9ur-p-037", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "صنفِ سخن 'مستزاد' کی پہچان کیا ہے؟",
    options: [
      "اس میں قافیہ اور ردیف دونوں نہیں ہوتے",
      "اس کے ہر بند میں آٹھ مصرعے ہوتے ہیں",
      "یہ صرف واقعۂ کربلا کے بیان کے لیے مخصوص ہے",
      "اس میں ہر مصرعے کے بعد ایک چھوٹا موزوں ٹکڑا بڑھا دیا جاتا ہے",
    ], correct: 3,
    explanation: "مستزاد کے معنی ہیں بڑھایا ہوا۔ اس میں ہر مصرعے کے آخر میں ایک چھوٹا موزوں فقرہ زائد لگایا جاتا ہے جو معنی کو آگے بڑھاتا ہے۔",
  },
  {
    id: "s9ur-p-038", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعر میں ایسے الفاظ لانا جو تلفظ یا املا میں یکساں یا ملتے جلتے ہوں مگر معنی مختلف ہوں، کون سی صنعت ہے؟",
    options: ["ایہام", "تکرار", "تجنیس", "مراعاۃ النظیر"], correct: 2,
    explanation: "ہم شکل یا ہم آواز مگر مختلف معنی والے الفاظ لانا تجنیس ہے۔ ایہام میں ایک ہی لفظ کے دو معنی ہوتے ہیں اور بعید معنی مراد ہوتے ہیں۔",
  },
  {
    id: "s9ur-p-039", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شعرا کے حالات اور انتخابِ کلام پر مبنی صنف 'تذکرہ' کی ایک مشہور ابتدائی مثال 'نکات الشعرا' (فارسی میں) کس کی تصنیف ہے؟",
    options: ["قائم چاند پوری", "میر تقی میر", "میر حسن", "غلام ہمدانی مصحفی"], correct: 1,
    explanation: "'نکات الشعرا' میر تقی میر کا لکھا ہوا اردو شعرا کا تذکرہ ہے۔ قائم، میر حسن اور مصحفی نے بھی تذکرے لکھے، مگر یہ کتاب میر کی ہے۔",
  },
  {
    id: "s9ur-p-040", section: "urdu", topic: "Urdu literary forms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "جب لفظ کے حقیقی معنی مراد لینا بھی ممکن ہو مگر مقصود اس کے لازمی معنی ہوں، جیسے 'اس کے بال سفید ہو گئے' سے بڑھاپا مراد لینا، اسے کیا کہتے ہیں؟",
    options: ["استعارہ", "کنایہ", "تشبیہ", "مجازِ مرسل"], correct: 1,
    explanation: "کنایہ میں حقیقی معنی بھی درست ہو سکتے ہیں مگر مراد ان کے لازمی معنی ہوتے ہیں۔ استعارے اور مجاز میں حقیقی معنی مراد نہیں لیے جا سکتے۔",
  },

  // ==================================================== Urdu language & literature history: BEGINNER
  {
    id: "s9ur-b-041", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "امیر خسرو کو کس لقب سے یاد کیا جاتا ہے؟",
    options: ["بلبلِ شیراز", "خدائے سخن", "ملک الشعرا", "طوطیٔ ہند"], correct: 3,
    explanation: "امیر خسرو کو 'طوطیٔ ہند' کہا جاتا ہے۔ ان کے ہندوی کلام کو اردو کے ابتدائی نمونوں میں شمار کیا جاتا ہے۔",
  },
  {
    id: "s9ur-b-042", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "ادبی رسالہ 'مخزن' 1901 میں لاہور سے کس نے جاری کیا؟",
    options: ["شیخ عبدالقادر", "ظفر علی خاں", "نیاز فتح پوری", "حسرت موہانی"], correct: 0,
    explanation: "'مخزن' سر شیخ عبدالقادر نے جاری کیا۔ اقبال کی ابتدائی نظمیں اسی رسالے میں شائع ہوئیں۔",
  },
  {
    id: "s9ur-b-043", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "ادبی رسالہ 'نگار' کے بانی مدیر کون تھے؟",
    options: ["شاہد احمد دہلوی", "شیخ عبدالقادر", "نیاز فتح پوری", "منشی سجاد حسین"], correct: 2,
    explanation: "'نگار' نیاز فتح پوری کا رسالہ ہے۔ شاہد احمد دہلوی 'ساقی' کے مدیر تھے۔",
  },
  {
    id: "s9ur-b-044", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "مزاحیہ اخبار 'اودھ پنچ' (1877) لکھنؤ سے کس نے جاری کیا؟",
    options: ["رتن ناتھ سرشار", "منشی سجاد حسین", "منشی نول کشور", "ظفر علی خاں"], correct: 1,
    explanation: "'اودھ پنچ' منشی سجاد حسین نے جاری کیا جو طنز و مزاح کا اہم اخبار تھا۔ سرشار 'اودھ اخبار' سے وابستہ تھے۔",
  },
  {
    id: "s9ur-b-045", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "شبلی نعمانی کے تصور پر قائم ہونے والا تصنیفی ادارہ 'دار المصنفین' کہاں واقع ہے؟",
    options: ["اعظم گڑھ", "لکھنؤ", "علی گڑھ", "دیوبند"], correct: 0,
    explanation: "دار المصنفین (شبلی اکیڈمی) اعظم گڑھ میں ہے، اور اس کا رسالہ 'معارف' ہے۔",
  },
  {
    id: "s9ur-b-046", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "رسالہ 'اردوئے معلیٰ' (1903) علی گڑھ سے کس نے جاری کیا؟",
    options: ["مولانا محمد علی جوہر", "مولانا ابوالکلام آزاد", "سر سید احمد خاں", "حسرت موہانی"], correct: 3,
    explanation: "'اردوئے معلیٰ' حسرت موہانی نے جاری کیا تھا۔ اس میں ادبی مضامین کے ساتھ سیاسی تحریریں بھی شائع ہوتی تھیں۔",
  },
  {
    id: "s9ur-b-047", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "لاہور کا اخبار 'زمیندار' کس صحافی و شاعر کی ادارت میں مشہور ہوا؟",
    options: ["مولانا ظفر علی خاں", "حسرت موہانی", "مولانا ابوالکلام آزاد", "مولانا محمد علی جوہر"], correct: 0,
    explanation: "'زمیندار' مولانا ظفر علی خاں کی ادارت میں اردو صحافت کا بااثر اخبار بنا۔ 'الہلال' آزاد کا اور 'ہمدرد' محمد علی جوہر کا اخبار تھا۔",
  },
  {
    id: "s9ur-b-048", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "اردو آئینِ ہند کے کس شیڈول میں شامل زبانوں میں سے ایک ہے؟",
    options: ["ساتویں", "آٹھویں", "نویں", "دسویں"], correct: 1,
    explanation: "اردو آئین کے آٹھویں شیڈول میں درج زبانوں میں شامل ہے اور شروع ہی سے اس فہرست کا حصہ رہی ہے۔",
  },
  {
    id: "s9ur-b-049", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "دکنی شاعر نصرتی کی مثنوی 'علی نامہ' کس سلطنت کے دربار سے وابستہ ہے؟",
    options: ["گولکنڈہ (قطب شاہی)", "مغلیہ دہلی", "بیجاپور (عادل شاہی)", "اودھ"], correct: 2,
    explanation: "نصرتی بیجاپور کے عادل شاہی دربار کے شاعر تھے اور 'علی نامہ' علی عادل شاہ ثانی کی مہمات پر مبنی ہے۔",
  },
  {
    id: "s9ur-b-050", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "جدیدیت کے رجحان سے وابستہ رسالہ 'شب خون' (الہ آباد) کس نے جاری کیا؟",
    options: ["گوپی چند نارنگ", "آل احمد سرور", "احتشام حسین", "شمس الرحمٰن فاروقی"], correct: 3,
    explanation: "'شب خون' شمس الرحمٰن فاروقی نے 1966 میں الہ آباد سے جاری کیا اور یہ اردو میں جدیدیت کا اہم ترجمان بنا۔",
  },

  // ==================================================== Urdu language & literature history: PROFICIENT
  {
    id: "s9ur-p-041", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "میر امن کی 'باغ و بہار' کس کتاب کو بنیاد بنا کر لکھی گئی؟",
    options: ["فسانۂ عجائب", "نو طرزِ مرصع", "سب رس", "آرائشِ محفل"], correct: 1,
    explanation: "'باغ و بہار' میر عطا حسین خاں تحسین کی 'نو طرزِ مرصع' پر مبنی ہے، جسے میر امن نے سادہ دہلوی زبان میں ڈھالا۔",
  },
  {
    id: "s9ur-p-042", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "شمالی ہند کی ابتدائی اردو نثری تصانیف میں شمار ہونے والی 'کربل کتھا' کس نے لکھی؟",
    options: ["فضل علی فضلی", "ملا وجہی", "میر امن", "شاہ عالم ثانی"], correct: 0,
    explanation: "'کربل کتھا' فضل علی فضلی کی تصنیف ہے جو فارسی 'روضۃ الشہدا' کی بنیاد پر لکھی گئی۔ 'سب رس' ملا وجہی کی دکنی نثر ہے۔",
  },
  {
    id: "s9ur-p-043", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "فورٹ ولیم کالج کے لیے حیدر بخش حیدری نے کون سی کتاب لکھی؟",
    options: ["باغ و بہار", "مذہبِ عشق", "اخلاقِ ہندی", "آرائشِ محفل"], correct: 3,
    explanation: "'آرائشِ محفل' (قصۂ حاتم طائی) حیدر بخش حیدری کی ہے۔ 'باغ و بہار' میر امن کی، 'مذہبِ عشق' نہال چند لاہوری کی اور 'اخلاقِ ہندی' میر بہادر علی حسینی کی ہے۔",
  },
  {
    id: "s9ur-p-044", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "محمد حسین آزاد نے 'آبِ حیات' میں اردو کی ابتدا کو کس زبان سے جوڑا؟",
    options: ["پنجابی", "سندھی", "برج بھاشا", "دکنی"], correct: 2,
    explanation: "آزاد نے 'آبِ حیات' میں لکھا کہ اردو برج بھاشا سے نکلی ہے۔ شیرانی نے پنجابی اور سلیمان ندوی نے سندھ کو اس کا مولد قرار دیا۔",
  },
  {
    id: "s9ur-p-045", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "کس محقق نے اردو کی ابتدا کو سندھ سے جوڑا اور کہا کہ وہاں عربوں اور مقامی لوگوں کے میل جول سے اس کا ہیولیٰ تیار ہوا؟",
    options: ["حافظ محمود شیرانی", "سید سلیمان ندوی", "مسعود حسین خاں", "محمد حسین آزاد"], correct: 1,
    explanation: "سید سلیمان ندوی نے 'نقوشِ سلیمانی' میں یہ رائے دی کہ اردو کا ہیولیٰ سندھ میں تیار ہوا۔ شیرانی پنجاب اور مسعود حسین خاں دہلی و نواحِ دہلی کی بولیوں کے قائل ہیں۔",
  },
  {
    id: "s9ur-p-046", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "دکنی اردو کی تاریخ پر مشہور کتاب 'دکن میں اردو' کس کی تصنیف ہے؟",
    options: ["محی الدین قادری زور", "حافظ محمود شیرانی", "نصیر الدین ہاشمی", "مولوی عبدالحق"], correct: 2,
    explanation: "'دکن میں اردو' نصیر الدین ہاشمی کی تصنیف ہے جس میں دکنی ادب کی تاریخ اور شعرا کا جائزہ ہے۔",
  },
  {
    id: "s9ur-p-047", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "بیجاپور کے سلطان ابراہیم عادل شاہ ثانی کی گیتوں پر مبنی مشہور کتاب کون سی ہے؟",
    options: ["قطب مشتری", "علی نامہ", "پھول بن", "کتابِ نورس"], correct: 3,
    explanation: "'کتابِ نورس' ابراہیم عادل شاہ ثانی کے موسیقی اور راگوں پر مبنی گیتوں کا مجموعہ ہے۔ 'قطب مشتری' وجہی کی اور 'پھول بن' ابنِ نشاطی کی مثنوی ہے۔",
  },
  {
    id: "s9ur-p-048", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں سے کس اردو شاعر کو گیان پیٹھ انعام ملا؟",
    options: ["فیض احمد فیض", "جوش ملیح آبادی", "شہریار", "اسرار الحق مجاز"], correct: 2,
    explanation: "شہریار (اخلاق محمد خاں) کو 2008 کا گیان پیٹھ انعام ملا۔ فیض، جوش اور مجاز کو یہ انعام نہیں ملا۔",
  },
  {
    id: "s9ur-p-049", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "دعویٰ (A): فورٹ ولیم کالج میں لکھی گئی کتابوں کی نثر عام طور پر سادہ اور عام فہم ہے۔ دلیل (R): یہ کتابیں انگریز افسروں کو ہندوستانی زبان سکھانے کے لیے لکھوائی گئی تھیں۔",
    options: [
      "A اور R دونوں درست ہیں اور R، A کی صحیح وضاحت ہے",
      "A اور R دونوں درست ہیں مگر R، A کی صحیح وضاحت نہیں",
      "A درست ہے مگر R غلط ہے",
      "A غلط ہے مگر R درست ہے",
    ], correct: 0,
    explanation: "کالج کا مقصد انگریز افسروں کو مقامی زبان سکھانا تھا، اسی لیے جان گلکرسٹ کی نگرانی میں سادہ اور بامحاورہ نثر لکھوائی گئی۔",
  },
  {
    id: "s9ur-p-050", section: "urdu", topic: "Urdu language & literature history", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "ملان کیجیے: (الف) دکنی ادب (ب) فورٹ ولیم کالج (ج) علی گڑھ تحریک (د) ترقی پسند تحریک ۔۔۔ (1) میر امن (2) سجاد ظہیر (3) ملا وجہی (4) الطاف حسین حالی",
    options: ["الف-1، ب-3، ج-4، د-2", "الف-3، ب-1، ج-2، د-4", "الف-3، ب-1، ج-4، د-2", "الف-4، ب-1، ج-3، د-2"], correct: 2,
    explanation: "ملا وجہی دکنی ادب کے، میر امن فورٹ ولیم کالج کے، حالی علی گڑھ تحریک کے اور سجاد ظہیر ترقی پسند تحریک کے نمائندہ ہیں۔",
  },
];
