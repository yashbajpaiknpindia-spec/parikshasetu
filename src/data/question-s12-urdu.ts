/**
 * Urdu subject (Classes 11–12 teacher, Part III), examLevel "l4". section "urdu".
 * Topics: Urdu qawaid; Urdu prose & writers; Urdu poetry & poets; Urdu literary forms;
 * Urdu language & literature history. Pitched at M.A. Urdu level.
 * Urdu only (not bilingual): stems, options and explanations in Urdu (right-to-left).
 * Original practice questions modelled on BPSC TRE 4.0 Part III; not PYQs.
 */
import type { Question } from "./questions";

export const s12UrduBank: Question[] = [
  // ---------------------------------------------------------------
  // Topic 1: Urdu qawaid (beginner)
  // ---------------------------------------------------------------
  {
    id: "s12ur-b-001", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "علمِ عروض میں وہ دو حرفی جزو جس کا پہلا حرف متحرک اور دوسرا ساکن ہو (جیسے 'دِل')، کیا کہلاتا ہے؟",
    options: ["سببِ ثقیل", "سببِ خفیف", "وتدِ مجموع", "فاصلہ"], correct: 1,
    explanation: "سببِ خفیف دو حرفوں کا جزو ہے جس میں پہلا متحرک اور دوسرا ساکن ہو، جیسے 'دِل' اور 'تُم'۔ سببِ ثقیل میں دونوں حرف متحرک ہوتے ہیں۔",
  },
  {
    id: "s12ur-b-002", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "عروض میں وہ سہ حرفی جزو جس کے پہلے دو حرف متحرک اور تیسرا ساکن ہو (جیسے 'نَظَر')، کیا کہلاتا ہے؟",
    options: ["وتدِ مفروق", "سببِ خفیف", "وتدِ مجموع", "سببِ ثقیل"], correct: 2,
    explanation: "دو متحرک اور ایک ساکن پر مشتمل جزو وتدِ مجموع ہے۔ وتدِ مفروق میں دو متحرک حروف کے درمیان ایک ساکن ہوتا ہے، جیسے 'فاعِ'۔",
  },
  {
    id: "s12ur-b-003", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "بحرِ متدارک کا بنیادی رکن کون سا ہے؟",
    options: ["فعولن", "مفاعیلن", "متفاعلن", "فاعلن"], correct: 3,
    explanation: "بحرِ متدارک کا رکن 'فاعلن' ہے۔ 'فعولن' متقارب کا، 'مفاعیلن' ہزج کا اور 'متفاعلن' بحرِ کامل کا رکن ہے۔",
  },
  {
    id: "s12ur-b-004", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "شعر میں ایسے الفاظ لانا جو آپس میں مناسبت رکھتے ہوں، جیسے گل، بلبل، چمن اور باغباں، کون سی صنعت ہے؟",
    options: ["مراعاۃ النظیر", "تضاد", "تجنیس", "لف و نشر"], correct: 0,
    explanation: "ایک ہی سلسلے کی باہم مناسبت رکھنے والی چیزوں کو جمع کرنا مراعاۃ النظیر (تناسب) کہلاتا ہے۔ ان الفاظ میں تضاد نہیں بلکہ مناسبت ہے۔",
  },
  {
    id: "s12ur-b-005", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "شعر میں ایسے دو الفاظ لانا جو تلفظ یا املا میں یکساں یا قریب ہوں مگر معنی میں مختلف ہوں، کون سی صنعت کہلاتی ہے؟",
    options: ["ایہام", "تلمیح", "تجنیس", "مبالغہ"], correct: 2,
    explanation: "یہ صنعتِ تجنیس ہے۔ ایہام میں ایک ہی لفظ کے دو معنی ہوتے ہیں، جبکہ تجنیس میں دو ملتے جلتے الفاظ الگ الگ معنی میں آتے ہیں۔",
  },
  {
    id: "s12ur-b-006", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "شاعر کا کسی بات کو جانتے ہوئے بھی جان بوجھ کر انجان بننا اور اسے سوال یا شک کے انداز میں پیش کرنا کون سی صنعت ہے؟",
    options: ["حسنِ تعلیل", "تجاہلِ عارفانہ", "مراعاۃ النظیر", "اشتقاق"], correct: 1,
    explanation: "جان بوجھ کر لاعلمی ظاہر کرنا تجاہلِ عارفانہ ہے، جس سے کلام میں لطف اور زور پیدا ہوتا ہے۔",
  },
  {
    id: "s12ur-b-007", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "شعر میں کسی ضرب المثل یا کہاوت کو اس طرح لانا کہ وہ شعر کا حصہ بن جائے، کیا کہلاتا ہے؟",
    options: ["ارسال المثل", "تلمیح", "تکرار", "تضمین"], correct: 0,
    explanation: "کہاوت یا ضرب المثل کو شعر میں باندھنا ارسال المثل ہے۔ تضمین میں کسی دوسرے شاعر کا مصرع یا شعر اپنے کلام میں شامل کیا جاتا ہے۔",
  },
  {
    id: "s12ur-b-008", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "جملہ 'موسم خوشگوار ہے' میں 'ہے' کس قسم کا فعل ہے؟",
    options: ["فعلِ لازم", "فعلِ متعدی", "فعلِ ناقص", "فعلِ امر"], correct: 2,
    explanation: "'ہے' اکیلا پورا مفہوم ادا نہیں کرتا بلکہ خبر 'خوشگوار' کو مبتدا 'موسم' سے جوڑتا ہے، اس لیے یہ فعلِ ناقص ہے۔",
  },
  {
    id: "s12ur-b-009", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "درج ذیل میں اسمِ تصغیر کون سا ہے؟",
    options: ["باغبان", "باغات", "باغیچہ", "باغی"], correct: 2,
    explanation: "فارسی لاحقہ 'چہ' چھوٹائی ظاہر کرتا ہے، اس لیے 'باغیچہ' (چھوٹا باغ) اسمِ تصغیر ہے۔ 'باغبان' اسمِ فاعل اور 'باغات' جمع ہے۔",
  },
  {
    id: "s12ur-b-010", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "'نغمہ' جیسے ہائے مختفی پر ختم ہونے والے لفظ کو اضافت کے ساتھ لکھتے وقت (جیسے 'نغمۂ دل') کون سی علامت لگائی جاتی ہے؟",
    options: ["زیر", "ہمزہ", "تشدید", "جزم"], correct: 1,
    explanation: "ہائے مختفی پر ختم ہونے والے مضاف پر اضافت کے لیے ہمزہ لکھا جاتا ہے، جیسے نغمۂ دل اور خانۂ خدا، جبکہ عام الفاظ میں زیر (کسرۂ اضافت) آتا ہے۔",
  },
  // ---------------------------------------------------------------
  // Topic 1: Urdu qawaid (proficient)
  // ---------------------------------------------------------------
  {
    id: "s12ur-p-001", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "بحروں کو ان کے بنیادی ارکان سے ملائیے: (الف) ہزج (ب) رمل (ج) رجز (د) متقارب ؛ (1) فعولن (2) مستفعلن (3) مفاعیلن (4) فاعلاتن",
    options: ["الف-3، ب-4، ج-2، د-1", "الف-4، ب-3، ج-2، د-1", "الف-3، ب-2، ج-4، د-1", "الف-1، ب-4، ج-2، د-3"], correct: 0,
    explanation: "ہزج کا رکن مفاعیلن، رمل کا فاعلاتن، رجز کا مستفعلن اور متقارب کا فعولن ہے۔",
  },
  {
    id: "s12ur-p-002", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "مبالغے کی وہ قسم کیا کہلاتی ہے جس میں بیان کی گئی بات عقلاً اور عادتاً دونوں طرح ناممکن ہو؟",
    options: ["تبلیغ", "اغراق", "غلو", "تعلی"], correct: 2,
    explanation: "تبلیغ میں بات عقلاً و عادتاً ممکن، اغراق میں عقلاً ممکن مگر عادتاً ناممکن، اور غلو میں دونوں طرح ناممکن ہوتی ہے۔",
  },
  {
    id: "s12ur-p-003", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "جب شعر میں پہلے چند چیزوں کا ذکر ہو اور پھر ان سے متعلق باتیں اسی ترتیب سے بیان کی جائیں، تو یہ صنعت کیا کہلاتی ہے؟",
    options: ["لف و نشرِ مرتب", "لف و نشرِ غیر مرتب", "مراعاۃ النظیر", "تنسیق الصفات"], correct: 0,
    explanation: "لف (اجمال) کے بعد نشر (تفصیل) اسی ترتیب سے آئے تو لف و نشرِ مرتب، اور الٹی یا بے ترتیب آئے تو لف و نشرِ غیر مرتب کہلاتا ہے۔",
  },
  {
    id: "s12ur-p-004", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "لفظ 'استقبال' عربی کے کس باب کا مصدر ہے؟",
    options: ["تفعیل", "افعال", "مفاعلہ", "استفعال"], correct: 3,
    explanation: "'استقبال' مادہ ق ب ل سے باب استفعال کا مصدر ہے، جیسے استعمال اور استقلال۔ باب تفعیل کا مصدر 'تقبیل' اور باب افعال کا 'اقبال' ہوگا۔",
  },
  {
    id: "s12ur-p-005", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں سے کون سا لفظ جمع الجمع ہے؟",
    options: ["مکاتب", "کتب", "علما", "جواہرات"], correct: 3,
    explanation: "'جوہر' کی جمع 'جواہر' اور 'جواہر' کی جمع 'جواہرات' ہے، اس لیے یہ جمع الجمع ہے۔ باقی الفاظ واحد کی سیدھی جمع ہیں۔",
  },
  {
    id: "s12ur-p-006", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "عروض میں کسی سالم رکن کے حروف میں کمی بیشی یا تبدیلی کو کیا کہتے ہیں؟",
    options: ["تقطیع", "زحاف", "اشباع", "وتد"], correct: 1,
    explanation: "سالم رکن میں کی گئی تبدیلی زحاف کہلاتی ہے اور ایسی بحر مزاحف کہلاتی ہے۔ تقطیع شعر کو ارکان میں بانٹ کر وزن جانچنے کا عمل ہے۔",
  },
  {
    id: "s12ur-p-007", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "کامل، وافر اور متقارب جیسی بحریں، جن میں ایک ہی رکن کی تکرار ہوتی ہے، کیا کہلاتی ہیں؟",
    options: ["مرکب بحریں", "مزاحف بحریں", "مخلوط بحریں", "مفرد بحریں"], correct: 3,
    explanation: "جن بحروں میں ایک ہی رکن بار بار آئے انھیں مفرد (متفق الارکان) بحریں کہتے ہیں، جبکہ مختلف ارکان سے بننے والی بحریں مرکب کہلاتی ہیں۔",
  },
  {
    id: "s12ur-p-008", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "کسی بحر کے نام میں 'مثمن' کا لفظ (جیسے 'ہزج مثمن سالم') کس بات کو ظاہر کرتا ہے؟",
    options: ["پورے شعر میں آٹھ ارکان، یعنی ہر مصرعے میں چار", "ہر مصرعے میں آٹھ ارکان", "پورے شعر میں چھ ارکان", "ہر رکن میں آٹھ حروف"], correct: 0,
    explanation: "مثمن کے معنی آٹھ والا ہیں: پورے شعر میں آٹھ ارکان ہوتے ہیں، ہر مصرعے میں چار۔ مسدس میں چھ اور مربع میں چار ارکان ہوتے ہیں۔",
  },
  {
    id: "s12ur-p-009", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "شعر میں ایک ہی مادے سے بنے ہوئے کئی الفاظ لانا، جیسے علم، عالم اور معلوم، کون سی صنعت کہلاتی ہے؟",
    options: ["تجنیسِ تام", "تکرار", "ترصیع", "اشتقاق"], correct: 3,
    explanation: "ایک ہی مادے سے مشتق الفاظ کو جمع کرنا صنعتِ اشتقاق ہے۔ تجنیسِ تام میں دو الفاظ حروف و حرکات میں بالکل یکساں مگر معنی میں مختلف ہوتے ہیں۔",
  },
  {
    id: "s12ur-p-010", section: "urdu", topic: "Urdu qawaid", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "درج ذیل میں مصدرِ جعلی کی مثال کون سی ہے؟",
    options: ["لکھنا", "بدلنا", "پڑھنا", "سونا"], correct: 1,
    explanation: "غیر ہندی (عربی یا فارسی) لفظ کے ساتھ 'نا' لگا کر بنایا گیا مصدر، مصدرِ جعلی کہلاتا ہے، جیسے عربی 'بدل' سے 'بدلنا' اور فارسی 'بخش' سے 'بخشنا'۔",
  },

  // ---------------------------------------------------------------
  // Topic 2: Urdu prose & writers (beginner)
  // ---------------------------------------------------------------
  {
    id: "s12ur-b-011", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "سر سید احمد خاں کی مفصل سوانح 'حیاتِ جاوید' کس نے لکھی؟",
    options: ["شبلی نعمانی", "الطاف حسین حالی", "ڈپٹی نذیر احمد", "محمد حسین آزاد"], correct: 1,
    explanation: "'حیاتِ جاوید' حالی کی تصنیف ہے۔ حالی نے 'یادگارِ غالب' اور 'حیاتِ سعدی' بھی لکھیں۔",
  },
  {
    id: "s12ur-b-012", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "حضرت عمرؓ کی سوانح 'الفاروق' کس کی تصنیف ہے؟",
    options: ["شبلی نعمانی", "سید سلیمان ندوی", "الطاف حسین حالی", "ابوالکلام آزاد"], correct: 0,
    explanation: "'الفاروق' علامہ شبلی نعمانی کی مشہور سوانحی تصنیف ہے۔ سید سلیمان ندوی شبلی کے شاگرد تھے جنھوں نے 'سیرۃ النبی' کی تکمیل کی۔",
  },
  {
    id: "s12ur-b-013", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "پریم چند کے ناول 'گئودان' کا مرکزی کردار کون ہے؟",
    options: ["گھیسو", "مادھو", "ہوری", "حامد"], correct: 2,
    explanation: "'گئودان' غریب کسان ہوری کی کہانی ہے۔ گھیسو اور مادھو افسانہ 'کفن' کے، اور حامد 'عید گاہ' کا کردار ہے۔",
  },
  {
    id: "s12ur-b-014", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "سعادت حسن منٹو کا کون سا افسانہ فحاشی کے الزام میں مقدمے کا سبب بنا؟",
    options: ["گڈریا", "ٹھنڈا گوشت", "کفن", "گرم کوٹ"], correct: 1,
    explanation: "'ٹھنڈا گوشت' ان افسانوں میں ہے جن پر منٹو کے خلاف فحاشی کے مقدمے چلے۔ 'گڈریا' اشفاق احمد، 'کفن' پریم چند اور 'گرم کوٹ' راجندر سنگھ بیدی کا افسانہ ہے۔",
  },
  {
    id: "s12ur-b-015", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "ناول 'اداس نسلیں' کے مصنف کون ہیں؟",
    options: ["شوکت صدیقی", "انتظار حسین", "عبداللہ حسین", "خدیجہ مستور"], correct: 2,
    explanation: "'اداس نسلیں' عبداللہ حسین کا مشہور ناول ہے جو برصغیر کی بیسویں صدی کی تاریخ کے پس منظر میں لکھا گیا۔",
  },
  {
    id: "s12ur-b-016", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "ناول 'خدا کی بستی' کس نے لکھا؟",
    options: ["شوکت صدیقی", "عزیز احمد", "عبداللہ حسین", "راجندر سنگھ بیدی"], correct: 0,
    explanation: "'خدا کی بستی' شوکت صدیقی کا ناول ہے جس میں شہر کے نچلے طبقے اور جرائم کی دنیا کی عکاسی کی گئی ہے۔",
  },
  {
    id: "s12ur-b-017", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "عہدِ اکبری کے امرا اور علما کے حالات پر مبنی کتاب 'دربارِ اکبری' کس کی تصنیف ہے؟",
    options: ["شبلی نعمانی", "محمد حسین آزاد", "ذکاء اللہ", "عبدالحلیم شرر"], correct: 1,
    explanation: "'دربارِ اکبری' محمد حسین آزاد کی تصنیف ہے، جن کی نثر اپنی رنگینی اور تصویر کشی کے لیے مشہور ہے۔",
  },
  {
    id: "s12ur-b-018", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "تقسیمِ ہند اور اس کے بعد کے حالات کے پس منظر میں لکھا گیا ناول 'بستی' کس کا ہے؟",
    options: ["قرۃ العین حیدر", "انتظار حسین", "خدیجہ مستور", "جیلانی بانو"], correct: 1,
    explanation: "'بستی' انتظار حسین کا ناول ہے جس میں ہجرت، یادِ ماضی اور شناخت کے مسائل نمایاں ہیں۔",
  },
  {
    id: "s12ur-b-019", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "طنزیہ و مزاحیہ مضامین کا مجموعہ 'خاکم بدہن' کس کی تصنیف ہے؟",
    options: ["پطرس بخاری", "رشید احمد صدیقی", "کنہیا لال کپور", "مشتاق احمد یوسفی"], correct: 3,
    explanation: "'خاکم بدہن' مشتاق احمد یوسفی کی تصنیف ہے۔ ان کی دیگر کتابوں میں 'چراغ تلے' اور 'آبِ گم' شامل ہیں۔",
  },
  {
    id: "s12ur-b-020", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "افسانہ 'آنندی' کس افسانہ نگار کا ہے؟",
    options: ["غلام عباس", "احمد ندیم قاسمی", "کرشن چندر", "سعادت حسن منٹو"], correct: 0,
    explanation: "'آنندی' غلام عباس کا مشہور افسانہ ہے جس میں ایک شہر کی بدلتی ہوئی بستی کے ذریعے سماجی منافقت پر طنز کیا گیا ہے۔",
  },
  // ---------------------------------------------------------------
  // Topic 2: Urdu prose & writers (proficient)
  // ---------------------------------------------------------------
  {
    id: "s12ur-p-011", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "قرۃ العین حیدر کا پہلا ناول کون سا ہے؟",
    options: ["سفینۂ غمِ دل", "آخرِ شب کے ہمسفر", "میرے بھی صنم خانے", "گردشِ رنگِ چمن"], correct: 2,
    explanation: "'میرے بھی صنم خانے' (1949) قرۃ العین حیدر کا پہلا ناول ہے۔ 'سفینۂ غمِ دل' اس کے بعد آیا اور باقی دونوں بعد کے ناول ہیں۔",
  },
  {
    id: "s12ur-p-012", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "نول کشور پریس سے شائع ہونے والی 'طلسمِ ہوشربا' کی ابتدائی جلدیں کس داستان گو نے لکھیں؟",
    options: ["محمد حسین جاہ", "رجب علی بیگ سرور", "میر امن", "احمد حسین قمر"], correct: 0,
    explanation: "داستانِ امیر حمزہ کے سلسلے 'طلسمِ ہوشربا' کی ابتدائی جلدیں محمد حسین جاہ نے اور بعد کی جلدیں احمد حسین قمر نے لکھیں۔",
  },
  {
    id: "s12ur-p-013", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "ولیم میور کی کتاب 'لائف آف محمد' کے جواب میں سر سید نے کون سی کتاب لکھی؟",
    options: ["اسبابِ بغاوتِ ہند", "تبیین الکلام", "آثار الصنادید", "خطباتِ احمدیہ"], correct: 3,
    explanation: "سر سید نے لندن کے قیام کے دوران ولیم میور کی کتاب کے جواب میں 'خطباتِ احمدیہ' لکھی۔ 'تبیین الکلام' بائبل کی تفسیر ہے۔",
  },
  {
    id: "s12ur-p-014", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "پانچ جلدوں پر مشتمل فارسی شاعری کی تاریخ و تنقید 'شعر العجم' کس کی تصنیف ہے؟",
    options: ["الطاف حسین حالی", "شبلی نعمانی", "عبدالسلام ندوی", "محمد حسین آزاد"], correct: 1,
    explanation: "'شعر العجم' شبلی نعمانی کی تصنیف ہے۔ عبدالسلام ندوی نے اسی طرز پر اردو شاعری کی تاریخ 'شعر الہند' لکھی۔",
  },
  {
    id: "s12ur-p-015", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "کس نقاد نے اپنی کتاب 'اردو شاعری پر ایک نظر' میں غزل کو 'نیم وحشی صنفِ سخن' کہا؟",
    options: ["کلیم الدین احمد", "آل احمد سرور", "سید احتشام حسین", "عظمت اللہ خاں"], correct: 0,
    explanation: "یہ مشہور قول کلیم الدین احمد کا ہے جو مغربی تنقیدی معیاروں کے سخت گیر نقاد تھے۔ عظمت اللہ خاں بھی غزل کے ناقد تھے مگر یہ جملہ ان کا نہیں۔",
  },
  {
    id: "s12ur-p-016", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "بہار سے تعلق رکھنے والے امداد امام اثر کی مشہور تنقیدی تصنیف کون سی ہے؟",
    options: ["شعر العجم", "آبِ حیات", "کاشف الحقائق", "مقدمۂ شعر و شاعری"], correct: 2,
    explanation: "'کاشف الحقائق' امداد امام اثر کی تنقیدی تصنیف ہے جس میں مشرقی و مغربی شاعری کے اصولوں پر بحث کی گئی ہے۔",
  },
  {
    id: "s12ur-p-017", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "انیسویں صدی کی دہلی اور وزیر خانم کی زندگی کے گرد گھومنے والا ناول 'کئی چاند تھے سرِ آسماں' کس نے لکھا؟",
    options: ["انتظار حسین", "عبداللہ حسین", "مستنصر حسین تارڑ", "شمس الرحمٰن فاروقی"], correct: 3,
    explanation: "'کئی چاند تھے سرِ آسماں' شمس الرحمٰن فاروقی کا ناول ہے۔ فاروقی بنیادی طور پر نقاد تھے اور 'شعرِ شور انگیز' ان کی مشہور تنقیدی کتاب ہے۔",
  },
  {
    id: "s12ur-p-018", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "فورٹ ولیم کالج کے لیے حیدر بخش حیدری کی لکھی ہوئی 'آرائشِ محفل' کس کے قصے پر مبنی ہے؟",
    options: ["چہار درویش", "امیر حمزہ", "گل بکاؤلی", "حاتم طائی"], correct: 3,
    explanation: "'آرائشِ محفل' حاتم طائی کے قصے پر مبنی ہے۔ چہار درویش کا قصہ میر امن نے 'باغ و بہار' میں لکھا۔",
  },
  {
    id: "s12ur-p-019", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "خاکوں کا مجموعہ 'گنج ہائے گراں مایہ' کس کی تصنیف ہے؟",
    options: ["مولوی عبدالحق", "فرحت اللہ بیگ", "رشید احمد صدیقی", "شاہد احمد دہلوی"], correct: 2,
    explanation: "'گنج ہائے گراں مایہ' رشید احمد صدیقی کے خاکوں کا مجموعہ ہے۔ مولوی عبدالحق کے خاکوں کا مجموعہ 'چند ہم عصر' ہے۔",
  },
  {
    id: "s12ur-p-020", section: "urdu", topic: "Urdu prose & writers", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "پریم چند کا اردو ناول 'بازارِ حسن' ہندی میں کس نام سے شائع ہوا؟",
    options: ["گئودان", "نرملا", "غبن", "سیوا سدن"], correct: 3,
    explanation: "'بازارِ حسن' کا ہندی روپ 'سیوا سدن' کے نام سے شائع ہوا۔ باقی تینوں پریم چند کے الگ ناول ہیں۔",
  },

  // ---------------------------------------------------------------
  // Topic 3: Urdu poetry & poets (beginner)
  // ---------------------------------------------------------------
  {
    id: "s12ur-b-021", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "یہ مشہور شعر کس شاعر کا ہے: 'تم مرے پاس ہوتے ہو گویا / جب کوئی دوسرا نہیں ہوتا'؟",
    options: ["ذوق", "مومن خاں مومن", "داغ دہلوی", "شیفتہ"], correct: 1,
    explanation: "یہ شعر مومن خاں مومن کا ہے، جو دبستانِ دہلی میں غالب اور ذوق کے ہم عصر اور نازک خیالی کے لیے مشہور تھے۔",
  },
  {
    id: "s12ur-b-022", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "'ماورا' کس شاعر کا پہلا مجموعۂ کلام ہے؟",
    options: ["میرا جی", "ن م راشد", "فیض احمد فیض", "مجید امجد"], correct: 1,
    explanation: "'ماورا' ن م راشد کا پہلا مجموعہ ہے جس نے اردو میں آزاد نظم کو مستحکم کیا۔",
  },
  {
    id: "s12ur-b-023", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "'تلخیاں' کس شاعر کا مجموعۂ کلام ہے؟",
    options: ["ساحر لدھیانوی", "کیفی اعظمی", "مجروح سلطان پوری", "جاں نثار اختر"], correct: 0,
    explanation: "'تلخیاں' ساحر لدھیانوی کا مشہور مجموعہ ہے جس میں نظم 'تاج محل' بھی شامل ہے۔",
  },
  {
    id: "s12ur-b-024", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "اردو شاعری میں 'امام الیاسیات' (غم و یاس کا شاعر) کسے کہا جاتا ہے؟",
    options: ["اصغر گونڈوی", "جگر مرادآبادی", "فانی بدایونی", "حسرت موہانی"], correct: 2,
    explanation: "فانی بدایونی کی شاعری میں غم، یاس اور موت کا تصور اتنا غالب ہے کہ انھیں امام الیاسیات کہا جاتا ہے۔",
  },
  {
    id: "s12ur-b-025", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "'خوشبو' کس شاعرہ کا پہلا مجموعۂ کلام ہے؟",
    options: ["فہمیدہ ریاض", "کشور ناہید", "ادا جعفری", "پروین شاکر"], correct: 3,
    explanation: "'خوشبو' پروین شاکر کا پہلا مجموعہ ہے۔ ان کے دیگر مجموعوں میں 'صد برگ' اور 'خود کلامی' شامل ہیں۔",
  },
  {
    id: "s12ur-b-026", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "مجموعۂ کلام 'برگِ نے' کس شاعر کا ہے؟",
    options: ["ناصر کاظمی", "احمد فراز", "ابن انشا", "منیر نیازی"], correct: 0,
    explanation: "'برگِ نے' ناصر کاظمی کا پہلا مجموعہ ہے، جنھوں نے میر کی روایت میں جدید غزل کو نیا لہجہ دیا۔",
  },
  {
    id: "s12ur-b-027", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "اکبر الٰہ آبادی کا اصل نام کیا تھا؟",
    options: ["سید فضل الحسن", "سید اکبر حسین", "اکبر علی خاں", "شیخ اکبر علی"], correct: 1,
    explanation: "اکبر الٰہ آبادی کا اصل نام سید اکبر حسین تھا۔ سید فضل الحسن حسرت موہانی کا نام ہے۔",
  },
  {
    id: "s12ur-b-028", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "'آوارہ سجدے' کس ترقی پسند شاعر کا مجموعۂ کلام ہے؟",
    options: ["علی سردار جعفری", "مخدوم محی الدین", "کیفی اعظمی", "اسرار الحق مجاز"], correct: 2,
    explanation: "'آوارہ سجدے' کیفی اعظمی کا مجموعہ ہے۔ ان کے دیگر مجموعوں میں 'جھنکار' اور 'آخرِ شب' شامل ہیں۔",
  },
  {
    id: "s12ur-b-029", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "نظمیں 'مناجاتِ بیوہ' اور 'چپ کی داد' کس شاعر کی ہیں؟",
    options: ["اکبر الٰہ آبادی", "محمد حسین آزاد", "علامہ اقبال", "الطاف حسین حالی"], correct: 3,
    explanation: "یہ دونوں نظمیں حالی کی ہیں جن میں عورتوں کی مظلومیت اور ان کے حقوق کا موضوع اٹھایا گیا ہے۔",
  },
  {
    id: "s12ur-b-030", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "لکھنؤ کے شاعر خواجہ حیدر علی کا تخلص کیا تھا؟",
    options: ["آتش", "ناسخ", "انشا", "رند"], correct: 0,
    explanation: "خواجہ حیدر علی 'آتش' تخلص کرتے تھے اور دبستانِ لکھنؤ میں ناسخ کے ہم عصر اور مدِ مقابل تھے۔",
  },
  // ---------------------------------------------------------------
  // Topic 3: Urdu poetry & poets (proficient)
  // ---------------------------------------------------------------
  {
    id: "s12ur-p-021", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "فیض احمد فیض کو 1962 میں کون سا بین الاقوامی انعام دیا گیا؟",
    options: ["نوبل انعام", "لینن امن انعام", "گیان پیٹھ انعام", "ستارۂ امتیاز"], correct: 1,
    explanation: "فیض کو 1962 میں سوویت یونین کا لینن امن انعام دیا گیا۔ گیان پیٹھ ہندوستانی ادیبوں کا انعام ہے۔",
  },
  {
    id: "s12ur-p-022", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "شاعروں کو ان کے اصل ناموں سے ملائیے: (الف) حسرت موہانی (ب) جگر مرادآبادی (ج) میرا جی (د) مجاز ؛ (1) علی سکندر (2) اسرار الحق (3) سید فضل الحسن (4) محمد ثناء اللہ ڈار",
    options: ["الف-1، ب-3، ج-4، د-2", "الف-3، ب-1، ج-2، د-4", "الف-3، ب-1، ج-4، د-2", "الف-4، ب-1، ج-3، د-2"], correct: 2,
    explanation: "حسرت موہانی کا نام سید فضل الحسن، جگر کا علی سکندر، میرا جی کا محمد ثناء اللہ ڈار اور مجاز کا اسرار الحق تھا۔",
  },
  {
    id: "s12ur-p-023", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "دبستانِ لکھنؤ کے شاعر ناسخ کا اصل نام کیا تھا؟",
    options: ["خواجہ حیدر علی", "شیخ امام بخش", "سید انشاء اللہ خاں", "غلام ہمدانی"], correct: 1,
    explanation: "ناسخ کا نام شیخ امام بخش تھا۔ خواجہ حیدر علی آتش کا، انشاء اللہ خاں انشا کا اور غلام ہمدانی مصحفی کا نام ہے۔",
  },
  {
    id: "s12ur-p-024", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "'نشاطِ روح' کس شاعر کا مجموعۂ کلام ہے؟",
    options: ["فانی بدایونی", "یگانہ چنگیزی", "جگر مرادآبادی", "اصغر گونڈوی"], correct: 3,
    explanation: "'نشاطِ روح' اصغر گونڈوی کا مجموعہ ہے جس میں صوفیانہ سرشاری اور نشاط کا رنگ غالب ہے۔ ان کا دوسرا مجموعہ 'سرودِ زندگی' ہے۔",
  },
  {
    id: "s12ur-p-025", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "اقبال کی نظمیں 'مسجدِ قرطبہ' اور 'ساقی نامہ' کس مجموعے میں شامل ہیں؟",
    options: ["بانگِ درا", "ضربِ کلیم", "بالِ جبریل", "ارمغانِ حجاز"], correct: 2,
    explanation: "یہ دونوں نظمیں 'بالِ جبریل' (1935) میں شامل ہیں، جو اقبال کا دوسرا اردو مجموعہ ہے۔",
  },
  {
    id: "s12ur-p-026", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "غالب نے بہادر شاہ ظفر کے حکم سے تیموری خاندان کی تاریخ کس نام سے فارسی میں لکھی؟",
    options: ["مہرِ نیم روز", "دستنبو", "قاطعِ برہان", "عودِ ہندی"], correct: 0,
    explanation: "'مہرِ نیم روز' غالب کی لکھی تیموری تاریخ کا حصہ ہے۔ 'دستنبو' 1857 کے حالات کا روزنامچہ اور 'عودِ ہندی' ان کے اردو خطوط کا مجموعہ ہے۔",
  },
  {
    id: "s12ur-p-027", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "'بساطِ رقص' کس شاعر کا مجموعۂ کلام ہے؟",
    options: ["ساحر لدھیانوی", "اختر الایمان", "مخدوم محی الدین", "مجروح سلطان پوری"], correct: 2,
    explanation: "'بساطِ رقص' حیدرآباد کے ترقی پسند شاعر مخدوم محی الدین کا کلیات ہے۔",
  },
  {
    id: "s12ur-p-028", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "اورنگ آباد کے صوفی شاعر سراج اورنگ آبادی کی مشہور مثنوی کون سی ہے؟",
    options: ["بوستانِ خیال", "قطب مشتری", "پھول بن", "گلشنِ عشق"], correct: 0,
    explanation: "'بوستانِ خیال' سراج اورنگ آبادی کی مثنوی ہے۔ 'قطب مشتری' وجہی، 'پھول بن' ابن نشاطی اور 'گلشنِ عشق' نصرتی کی مثنوی ہے۔",
  },
  {
    id: "s12ur-p-029", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "میر تقی میر کے کلیات میں اردو کے کتنے دیوان شامل ہیں؟",
    options: ["چار", "پانچ", "سات", "چھ"], correct: 3,
    explanation: "کلیاتِ میر میں اردو کے چھ دیوان ہیں، اس کے علاوہ مثنویاں اور دیگر اصناف بھی شامل ہیں۔",
  },
  {
    id: "s12ur-p-030", section: "urdu", topic: "Urdu poetry & poets", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "'شاعرِ رومان' کے لقب سے کون سا شاعر مشہور ہے؟",
    options: ["جوش ملیح آبادی", "حفیظ جالندھری", "ساغر نظامی", "اختر شیرانی"], correct: 3,
    explanation: "اختر شیرانی کو ان کی رومانی نظموں (سلمیٰ، عذرا وغیرہ) کی وجہ سے شاعرِ رومان کہا جاتا ہے۔ جوش کا لقب شاعرِ انقلاب ہے۔",
  },

  // ---------------------------------------------------------------
  // Topic 4: Urdu literary forms (beginner)
  // ---------------------------------------------------------------
  {
    id: "s12ur-b-031", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "غزل میں مطلع کے بعد آنے والا وہ شعر جس کے دونوں مصرعے بھی ہم قافیہ ہوں، کیا کہلاتا ہے؟",
    options: ["بیت الغزل", "حسنِ مطلع", "مقطع", "فرد"], correct: 1,
    explanation: "مطلع کے بعد آنے والا دوسرا مطلع حسنِ مطلع (یا مطلعِ ثانی) کہلاتا ہے۔",
  },
  {
    id: "s12ur-b-032", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "غزل کے سب سے عمدہ اور حاصلِ غزل شعر کو کیا کہا جاتا ہے؟",
    options: ["بیت الغزل", "حسنِ مطلع", "مطلع", "قطعہ"], correct: 0,
    explanation: "غزل کا بہترین شعر بیت الغزل یا شاہ بیت کہلاتا ہے، چاہے وہ غزل میں کہیں بھی ہو۔",
  },
  {
    id: "s12ur-b-033", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "کسی شخص کی برائیوں کو طنز و تمسخر کے ساتھ بیان کرنے والی نظم کو کیا کہتے ہیں؟",
    options: ["مدح", "مرثیہ", "ہجو", "واسوخت"], correct: 2,
    explanation: "ہجو مدح کی ضد ہے، جس میں کسی کی برائی اور مذمت طنزیہ انداز میں کی جاتی ہے۔ سودا اردو کے بڑے ہجو گو ہیں۔",
  },
  {
    id: "s12ur-b-034", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "وہ نظم جس کا ہر بند پانچ مصرعوں پر مشتمل ہو، کیا کہلاتی ہے؟",
    options: ["مسدس", "مربع", "مثلث", "مخمس"], correct: 3,
    explanation: "پانچ مصرعوں کے بند والی نظم مخمس کہلاتی ہے۔ مسدس میں چھ، مربع میں چار اور مثلث میں تین مصرعے ہوتے ہیں۔",
  },
  {
    id: "s12ur-b-035", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "چودہ مصرعوں پر مشتمل وہ مغربی صنفِ سخن جسے اردو میں بھی برتا گیا، کیا کہلاتی ہے؟",
    options: ["سانیٹ", "ہائیکو", "ترائیلے", "بیلڈ"], correct: 0,
    explanation: "سانیٹ چودہ مصرعوں کی مغربی صنف ہے۔ ہائیکو تین مصرعوں کی جاپانی صنف ہے۔",
  },
  {
    id: "s12ur-b-036", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "وہ افسانوی صنف جو طوالت میں افسانے سے بڑی اور ناول سے چھوٹی ہو، کیا کہلاتی ہے؟",
    options: ["داستان", "ناولٹ", "انشائیہ", "ڈراما"], correct: 1,
    explanation: "ناولٹ درمیانی طوالت کی صنف ہے جو ناول سے مختصر اور افسانے سے طویل ہوتی ہے۔",
  },
  {
    id: "s12ur-b-037", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "انشائیہ کی نمایاں خصوصیت کیا ہے؟",
    options: ["غیر رسمی، شخصی اور شگفتہ انداز میں کسی موضوع کے نئے پہلو اجاگر کرنا", "تحقیقی حوالوں کے ساتھ موضوع کا مکمل احاطہ کرنا", "مافوق الفطرت واقعات کا بیان", "کسی شخصیت کی مکمل سوانح لکھنا"], correct: 0,
    explanation: "انشائیہ مختصر، غیر رسمی اور شخصی نثر ہے جس میں لکھنے والا کسی عام موضوع کے غیر متوقع پہلو شگفتگی سے سامنے لاتا ہے۔ مکمل تحقیقی احاطہ مقالے کی خصوصیت ہے۔",
  },
  {
    id: "s12ur-b-038", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "ایک ایسا اکیلا شعر جو کسی غزل یا نظم کا حصہ نہ ہو، کیا کہلاتا ہے؟",
    options: ["مطلع", "فرد", "قطعہ", "بیت الغزل"], correct: 1,
    explanation: "تنہا اور مستقل شعر کو فرد کہتے ہیں۔ قطعہ میں کم از کم دو اشعار مل کر ایک مضمون ادا کرتے ہیں۔",
  },
  {
    id: "s12ur-b-039", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "وہ نظم جس میں نہ وزن کی پابندی ہو نہ قافیے کی، بلکہ آہنگ نثر کا سا ہو، کیا کہلاتی ہے؟",
    options: ["آزاد نظم", "نظمِ معریٰ", "نثری نظم", "پابند نظم"], correct: 2,
    explanation: "نثری نظم وزن اور قافیے دونوں سے آزاد ہوتی ہے۔ آزاد نظم میں وزن (ارکان) باقی رہتا ہے اور نظمِ معریٰ میں وزن کی پوری پابندی ہوتی ہے۔",
  },
  {
    id: "s12ur-b-040", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "دو مصرعوں پر مشتمل وہ صنف جو ہندی شاعری سے اردو میں آئی اور کبیر و رحیم کے یہاں مقبول رہی، کیا کہلاتی ہے؟",
    options: ["ماہیا", "رباعی", "گیت", "دوہا"], correct: 3,
    explanation: "دوہا ہندی کی دو مصرعی صنف ہے جسے کبیر اور رحیم نے مقبول بنایا اور بعد میں اردو شعرا نے بھی اپنایا۔",
  },
  // ---------------------------------------------------------------
  // Topic 4: Urdu literary forms (proficient)
  // ---------------------------------------------------------------
  {
    id: "s12ur-p-031", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "قافیے کا وہ بنیادی اور آخری اصلی حرف جس کی تکرار ہر قافیے میں لازم ہو، کیا کہلاتا ہے؟",
    options: ["ردیف", "حرفِ روی", "حرفِ وصل", "ایطا"], correct: 1,
    explanation: "قافیے کی بنیاد حرفِ روی پر ہوتی ہے اور یہ ہر قافیے میں یکساں رہتا ہے۔ حرفِ وصل روی کے بعد آنے والا حرف ہے۔",
  },
  {
    id: "s12ur-p-032", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "روایتی مرثیے کا وہ ابتدائی حصہ کیا کہلاتا ہے جس میں تمہید کے طور پر صبح کا منظر یا کوئی عام مضمون بیان ہوتا ہے؟",
    options: ["سراپا", "رخصت", "چہرہ", "بین"], correct: 2,
    explanation: "مرثیے کے اجزا عموماً چہرہ، سراپا، رخصت، آمد، رجز، جنگ، شہادت اور بین ہیں، جن میں چہرہ تمہیدی حصہ ہے۔",
  },
  {
    id: "s12ur-p-033", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "وہ قصیدہ جو تشبیب کے بغیر براہِ راست مدح سے شروع ہو، کیا کہلاتا ہے؟",
    options: ["تمہیدیہ", "بہاریہ", "مقتضب", "ہجویہ"], correct: 2,
    explanation: "تشبیب کے بغیر سیدھا مدح سے شروع ہونے والا قصیدہ مقتضب (خطابیہ) کہلاتا ہے، جبکہ تشبیب سے شروع ہونے والا قصیدہ تمہیدیہ ہے۔",
  },
  {
    id: "s12ur-p-034", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "ترجیع بند اور ترکیب بند میں بنیادی فرق کیا ہے؟",
    options: ["ترجیع بند میں ہر بند کے بعد ایک ہی شعر دہرایا جاتا ہے، جبکہ ترکیب بند میں ہر بند کے آخر میں الگ شعر آتا ہے", "ترجیع بند میں قافیہ نہیں ہوتا جبکہ ترکیب بند میں ہوتا ہے", "ترکیب بند صرف مرثیے کے لیے مخصوص ہے", "ترجیع بند کا ہر بند لازماً چھ مصرعوں کا ہوتا ہے"], correct: 0,
    explanation: "دونوں میں بند غزل کی طرح ہم قافیہ اشعار کے ہوتے ہیں۔ ترجیع بند میں ہر بند کے بعد وہی شعر (ٹیپ) دہرایا جاتا ہے، ترکیب بند میں ہر بند کا آخری شعر الگ ہوتا ہے۔",
  },
  {
    id: "s12ur-p-035", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "رباعی کے چار مصرعوں میں سے کس مصرعے میں قافیہ لانا لازم نہیں؟",
    options: ["پہلا", "دوسرا", "چوتھا", "تیسرا"], correct: 3,
    explanation: "رباعی میں پہلا، دوسرا اور چوتھا مصرع ہم قافیہ ہوتے ہیں، جبکہ تیسرے مصرعے میں قافیہ لازم نہیں۔",
  },
  {
    id: "s12ur-p-036", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "وہ غزل جس کے اشعار میں قافیہ تو ہو مگر ردیف نہ ہو، کیا کہلاتی ہے؟",
    options: ["مردف غزل", "مسلسل غزل", "غیر مردف غزل", "ذو قافیتین"], correct: 2,
    explanation: "ردیف کے بغیر غزل غیر مردف کہلاتی ہے۔ قافیہ غزل کے لیے لازم ہے مگر ردیف لازم نہیں۔",
  },
  {
    id: "s12ur-p-037", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "وہ صنف جس میں ہر مصرعے کے بعد ایک چھوٹا موزوں ٹکڑا بڑھا دیا جاتا ہے جو مصرعے کے مفہوم سے جڑا ہوتا ہے، کیا کہلاتی ہے؟",
    options: ["مستزاد", "مخمس", "ترکیب بند", "قطعہ"], correct: 0,
    explanation: "مستزاد کے معنی 'بڑھایا ہوا' ہیں: اس میں ہر مصرعے کے ساتھ ایک مختصر موزوں فقرہ زائد کیا جاتا ہے۔",
  },
  {
    id: "s12ur-p-038", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "قرۃ العین حیدر کے 'آگ کا دریا' جیسے ناولوں میں کردار کے ذہن میں خیالات کے بے ربط اور مسلسل بہاؤ کو پیش کرنے والی تکنیک کیا کہلاتی ہے؟",
    options: ["فلیش بیک", "شعور کی رو", "مکالماتی تکنیک", "خطوطی تکنیک"], correct: 1,
    explanation: "ذہن کے خیالات کو ان کی فطری بے ترتیبی کے ساتھ پیش کرنا شعور کی رو (Stream of Consciousness) کہلاتا ہے۔ فلیش بیک صرف ماضی کے کسی واقعے کی طرف واپسی ہے۔",
  },
  {
    id: "s12ur-p-039", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "غزل کی ہیئت میں کہی جانے والی وہ نظم جس میں امام حسینؓ اور شہدائے کربلا کو خراجِ عقیدت پیش کیا جاتا ہے، کیا کہلاتی ہے؟",
    options: ["مرثیہ", "نوحہ", "منقبت", "سلام"], correct: 3,
    explanation: "سلام غزل کی ہیئت میں ہوتا ہے، جبکہ انیس و دبیر کے مرثیے مسدس کی ہیئت میں ہیں۔ منقبت عموماً اہلِ بیت یا بزرگوں کی مدح ہے۔",
  },
  {
    id: "s12ur-p-040", section: "urdu", topic: "Urdu literary forms", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "قافیے کا وہ عیب کیا کہلاتا ہے جس میں مطلع کے دونوں مصرعوں میں ایک ہی قافیہ دہرا دیا جائے یا حرفِ زائد (جیسے 'دانا' اور 'بینا' کا الف) کو روی مان لیا جائے؟",
    options: ["تعقید", "شترگربہ", "حشو", "ایطا"], correct: 3,
    explanation: "یہ ایطا ہے، جس کی دو قسمیں ایطائے جلی اور ایطائے خفی ہیں۔ شترگربہ ضمیروں کی بے ترتیبی اور حشو زائد الفاظ کا عیب ہے۔",
  },

  // ---------------------------------------------------------------
  // Topic 5: Urdu language & literature history (beginner)
  // ---------------------------------------------------------------
  {
    id: "s12ur-b-041", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "محمد حسین آزاد نے 'آبِ حیات' میں اردو کو کس زبان سے نکلی ہوئی قرار دیا؟",
    options: ["پنجابی", "برج بھاشا", "دکنی", "ہریانوی"], correct: 1,
    explanation: "آزاد کے نزدیک اردو برج بھاشا سے نکلی، جبکہ پنجابی سے اردو کی ابتدا کا نظریہ حافظ محمود شیرانی کا ہے۔",
  },
  {
    id: "s12ur-b-042", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "اردو کی ابتدا سندھ میں ہونے کا نظریہ کس محقق سے منسوب ہے؟",
    options: ["سید سلیمان ندوی", "حافظ محمود شیرانی", "مسعود حسین خاں", "محمد حسین آزاد"], correct: 0,
    explanation: "سید سلیمان ندوی نے عربوں کی سندھ آمد کی بنیاد پر اردو کی ابتدا سندھ میں بتائی۔ شیرانی پنجاب اور آزاد برج بھاشا کے قائل تھے۔",
  },
  {
    id: "s12ur-b-043", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "ترقی پسند تحریک کا بنیادی ادبی نظریہ کس نعرے سے ظاہر ہوتا ہے؟",
    options: ["ادب برائے ادب", "ادب برائے زندگی", "فن برائے فن", "ادب برائے تفریح"], correct: 1,
    explanation: "ترقی پسند ادب کو سماجی تبدیلی کا ذریعہ مانتے تھے، اس لیے ان کا نعرہ 'ادب برائے زندگی' تھا۔ 'ادب برائے ادب' کا رجحان حلقۂ اربابِ ذوق سے زیادہ قریب ہے۔",
  },
  {
    id: "s12ur-b-044", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "درج ذیل میں سے کون علی گڑھ تحریک میں سر سید کے رفقا میں شامل نہیں؟",
    options: ["الطاف حسین حالی", "نواب محسن الملک", "ڈپٹی نذیر احمد", "پریم چند"], correct: 3,
    explanation: "حالی، محسن الملک اور نذیر احمد سر سید کے رفقا تھے۔ پریم چند بعد کے دور کے افسانہ نگار ہیں اور ترقی پسند تحریک سے وابستہ ہیں۔",
  },
  {
    id: "s12ur-b-045", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "گولکنڈہ کا وہ قطب شاہی بادشاہ کون تھا جس نے شہر حیدرآباد بسایا اور جس کا ضخیم کلیات دکنی اردو شاعری کا اہم سرمایہ ہے؟",
    options: ["ابراہیم عادل شاہ ثانی", "محمد قلی قطب شاہ", "علی عادل شاہ", "عبداللہ قطب شاہ"], correct: 1,
    explanation: "محمد قلی قطب شاہ نے حیدرآباد بسایا اور ان کا کلیات دکنی شاعری کا بڑا سرمایہ ہے۔ عادل شاہی بادشاہ بیجاپور کے حکمراں تھے۔",
  },
  {
    id: "s12ur-b-046", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "فورٹ ولیم کالج کا بنیادی مقصد کیا تھا؟",
    options: ["ایسٹ انڈیا کمپنی کے انگریز ملازمین کو ہندوستانی زبانیں اور مقامی طور طریقے سکھانا", "ہندوستانی طلبہ کو انگریزی طب کی تعلیم دینا", "مسلمانوں میں جدید سائنسی تعلیم عام کرنا", "فارسی کو سرکاری زبان کے طور پر ختم کرنا"], correct: 0,
    explanation: "کالج کمپنی کے نئے انگریز ملازمین کی تربیت کے لیے قائم ہوا، اور اسی ضرورت کے تحت اردو کی سادہ نثری کتابیں لکھوائی گئیں۔",
  },
  {
    id: "s12ur-b-047", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "عظیم آباد (پٹنہ) کے کس بڑے غزل گو شاعر کا اصل نام سید علی محمد تھا؟",
    options: ["جمیل مظہری", "کلیم عاجز", "شاد عظیم آبادی", "بسمل عظیم آبادی"], correct: 2,
    explanation: "شاد عظیم آبادی کا نام سید علی محمد تھا۔ وہ دبستانِ عظیم آباد کے نمایاں شاعر اور نثر نگار تھے۔",
  },
  {
    id: "s12ur-b-048", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "اردو کے قدیم نام 'ریختہ' کے لغوی معنی کیا ہیں؟",
    options: ["لشکر یا چھاؤنی", "گری پڑی، بکھری یا ملی جلی چیز", "شاہی دربار کی زبان", "دکن کی بولی"], correct: 1,
    explanation: "'ریختہ' فارسی 'ریختن' سے ہے اور اس کے معنی گرا پڑا، بکھرا ہوا یا ملا جلا ہیں۔ 'لشکر' لفظ 'اردو' کے معنی ہیں۔",
  },
  {
    id: "s12ur-b-049", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "اردو ادب میں 'جدیدیت' کا رجحان کس دہائی میں نمایاں طور پر ابھرا؟",
    options: ["1900 کی دہائی", "1930 کی دہائی", "1960 کی دہائی", "1990 کی دہائی"], correct: 2,
    explanation: "جدیدیت 1960 کی دہائی میں ترقی پسندی کے ردِ عمل کے طور پر ابھری اور اس نے فرد کی داخلی دنیا اور اظہار کی آزادی پر زور دیا۔",
  },
  {
    id: "s12ur-b-050", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "beginner", difficulty: "medium",
    stem: "شعرا کے مختصر حالات اور انتخابِ کلام پر مشتمل روایتی کتاب کو کیا کہتے ہیں؟",
    options: ["تذکرہ", "بیاض", "کلیات", "دیوان"], correct: 0,
    explanation: "ایسی کتاب تذکرہ کہلاتی ہے، جیسے 'نکات الشعرا' اور 'گلشنِ بے خار'۔ کلیات کسی ایک شاعر کے پورے کلام کا مجموعہ ہے۔",
  },
  // ---------------------------------------------------------------
  // Topic 5: Urdu language & literature history (proficient)
  // ---------------------------------------------------------------
  {
    id: "s12ur-p-041", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "1843 میں دلی کالج سے وابستہ کون سا ادارہ مغربی علوم کی کتابوں کے اردو ترجمے کے لیے قائم ہوا؟",
    options: ["سائنٹفک سوسائٹی", "انجمنِ پنجاب", "دہلی ورنیکولر ٹرانسلیشن سوسائٹی", "دارالترجمہ عثمانیہ"], correct: 2,
    explanation: "دہلی ورنیکولر ٹرانسلیشن سوسائٹی دلی کالج سے وابستہ تھی۔ سائنٹفک سوسائٹی سر سید نے غازی پور میں اور دارالترجمہ حیدرآباد میں بہت بعد قائم ہوا۔",
  },
  {
    id: "s12ur-p-042", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "حلقۂ اربابِ ذوق اپنے قیام (1939) کے وقت کس نام سے شروع ہوا تھا؟",
    options: ["بزمِ داستان گویاں", "انجمنِ ترقی اردو", "نیاز مندانِ لاہور", "بزمِ ادب"], correct: 0,
    explanation: "حلقہ لاہور میں 'بزمِ داستان گویاں' کے نام سے شروع ہوا اور بعد میں حلقۂ اربابِ ذوق کہلایا۔",
  },
  {
    id: "s12ur-p-043", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "جدیدیت کے ترجمان رسالے 'شب خون' (1966) کا مرکزِ اشاعت کون سا شہر تھا؟",
    options: ["دہلی", "لکھنؤ", "لاہور", "الہ آباد"], correct: 3,
    explanation: "'شب خون' الہ آباد سے شائع ہوتا تھا اور شمس الرحمٰن فاروقی کی ادارت میں جدیدیت کا اہم ترجمان بنا۔",
  },
  {
    id: "s12ur-p-044", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "دکنی اور برج میں گیتوں کا مجموعہ 'کتابِ نورس' کس سلطان سے منسوب ہے؟",
    options: ["محمد قلی قطب شاہ", "علی عادل شاہ ثانی", "ابراہیم عادل شاہ ثانی", "سلطان محمد عادل شاہ"], correct: 2,
    explanation: "'کتابِ نورس' بیجاپور کے ابراہیم عادل شاہ ثانی سے منسوب ہے، جو موسیقی اور فنون کے بڑے سرپرست تھے۔",
  },
  {
    id: "s12ur-p-045", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "بیجاپور کے ملک الشعرا نصرتی کی مشہور مثنوی کون سی ہے؟",
    options: ["گلشنِ عشق", "پھول بن", "سحر البیان", "قطب مشتری"], correct: 0,
    explanation: "'گلشنِ عشق' نصرتی کی مثنوی ہے، ان کی دوسری مشہور مثنوی 'علی نامہ' ہے۔ 'پھول بن' ابن نشاطی اور 'قطب مشتری' وجہی کی ہے۔",
  },
  {
    id: "s12ur-p-046", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "دبستانِ لکھنؤ میں 'اصلاحِ زبان' اور متروکات کی تحریک کا بانی کسے مانا جاتا ہے؟",
    options: ["آتش", "انشا", "میر انیس", "ناسخ"], correct: 3,
    explanation: "ناسخ نے بہت سے پرانے الفاظ کو متروک قرار دے کر زبان کے اصول مقرر کیے، اس لیے انھیں لکھنؤ میں اصلاحِ زبان کا بانی مانا جاتا ہے۔",
  },
  {
    id: "s12ur-p-047", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "شمالی ہند میں ایہام گوئی کے خلاف ردِ عمل اور زبان کی اصلاح میں کس شاعر کا کردار نمایاں ہے؟",
    options: ["شاہ مبارک آبرو", "مرزا مظہر جانِ جاناں", "شاکر ناجی", "مصطفیٰ خاں یک رنگ"], correct: 1,
    explanation: "مرزا مظہر جانِ جاناں نے ایہام گوئی کی مخالفت کی اور زبان کی صفائی پر زور دیا۔ آبرو، ناجی اور یک رنگ ایہام گو شعرا تھے۔",
  },
  {
    id: "s12ur-p-048", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "ساختیات اور مابعد جدیدیت کے مباحث کو اردو تنقید میں عام کرنے والے کس نقاد کی کتاب 'ساختیات، پس ساختیات اور مشرقی شعریات' مشہور ہے؟",
    options: ["کلیم الدین احمد", "سید احتشام حسین", "آل احمد سرور", "گوپی چند نارنگ"], correct: 3,
    explanation: "یہ کتاب گوپی چند نارنگ کی ہے۔ احتشام حسین ترقی پسند تنقید اور کلیم الدین احمد مغربی عملی تنقید سے وابستہ ہیں۔",
  },
  {
    id: "s12ur-p-049", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "کتاب 'دکن میں اردو' لکھ کر اردو کی ابتدا دکن سے جوڑنے والے محقق کون ہیں؟",
    options: ["مولوی عبدالحق", "سید سلیمان ندوی", "نصیر الدین ہاشمی", "حافظ محمود شیرانی"], correct: 2,
    explanation: "'دکن میں اردو' نصیر الدین ہاشمی کی تصنیف ہے جس میں دکن کو اردو کا ابتدائی مرکز قرار دیا گیا۔ شیرانی پنجاب اور ندوی سندھ کے نظریے سے وابستہ ہیں۔",
  },
  {
    id: "s12ur-p-050", section: "urdu", topic: "Urdu language & literature history", examLevel: "l4", level: "proficient", difficulty: "hard",
    stem: "اردو شعرا کا میر تقی میر کا تذکرہ 'نکات الشعرا' کس زبان میں لکھا گیا؟",
    options: ["اردو", "عربی", "دکنی", "فارسی"], correct: 3,
    explanation: "'نکات الشعرا' اردو شعرا کا تذکرہ ہونے کے باوجود فارسی میں لکھا گیا، جیسا کہ اس دور کے بیشتر تذکروں کا دستور تھا۔",
  },
];
