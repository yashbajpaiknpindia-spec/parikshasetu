/**
 * SERVER ONLY. Questions written for the Free Mock Challenge papers alone (they are not
 * in the question bank, so no mock or plan test has shown them before). Original texts.
 * Imported only by src/lib/challenge-server.ts.
 */
import type { Question } from "@/data/questions";

if (typeof window !== "undefined") throw new Error("challenge-questions are server-only");

const PD = "अपठित पद्यांश";

/** Round 1 · अपठित पद्यांश (original poem). */
const R1_POEM =
  "दीपक बनकर जलना सीखो, तम से मत घबराना,\n" +
  "अपनी लौ से औरों के पथ में उजियारा फैलाना।\n" +
  "आँधी आए, पानी बरसे, फिर भी तुम मत बुझना,\n" +
  "काँटों में भी फूलों जैसा, हँसकर हर पल खिलना।\n" +
  "जो बाँटे वह बढ़ता जाए, यह विद्या की रीति,\n" +
  "गुरु के मन में बसती है बस, सब शिष्यों की प्रीति।\n" +
  "मिट्टी के कच्चे घट को जो, सोने-सा चमकाए,\n" +
  "ऐसा शिल्पी शिक्षक ही तो, युग का भाग्य बनाए।";

const r1 = (n: number, q: Omit<Question, "id" | "section" | "topic" | "passageId" | "passage" | "examLevel">): Question => ({
  id: `chr1-pd-${n}`, section: "hindi", topic: PD, passageId: "chr1-pd", passage: R1_POEM, examLevel: "l1", ...q,
});

export const CHALLENGE_EXTRA: Record<number, { hindiPoem: Question[] }> = {
  1: {
    hindiPoem: [
      r1(1, {
        difficulty: "medium",
        stem: "'काँटों में भी फूलों जैसा, हँसकर हर पल खिलना' पंक्ति में प्रमुख अलंकार है:",
        options: ["उपमा", "रूपक", "उत्प्रेक्षा", "श्लेष"],
        correct: 0,
        explanation: "'फूलों जैसा' में वाचक शब्द 'जैसा' द्वारा समानता बताई गई है, इसलिए उपमा अलंकार है। रूपक में वाचक शब्द नहीं होता और उत्प्रेक्षा में 'मानो, जनु' जैसे शब्द आते हैं।",
      }),
      r1(2, {
        difficulty: "medium",
        stem: "कविता के अनुसार विद्या की 'रीति' क्या है?",
        options: ["इसे छिपाकर रखना चाहिए", "बाँटने से यह बढ़ती जाती है", "यह केवल परीक्षा में काम आती है", "इसे धन से खरीदा जा सकता है"],
        correct: 1,
        explanation: "पंक्ति 'जो बाँटे वह बढ़ता जाए, यह विद्या की रीति' में स्पष्ट है कि विद्या बाँटने से बढ़ती है।",
      }),
      r1(3, {
        difficulty: "hard",
        stem: "'मिट्टी के कच्चे घट को जो, सोने-सा चमकाए' पंक्ति में 'मिट्टी के कच्चे घट' से कवि का संकेत है:",
        options: ["कुम्हार के बनाए बर्तन", "अनगढ़, सीखने को तैयार बालक", "गाँव का कुआँ", "सोने का आभूषण"],
        correct: 1,
        explanation: "कच्चा घट अनगढ़ बालक का प्रतीक है, जिसे शिक्षक रूपी 'शिल्पी' गढ़कर सोने-सा चमका देता है। अगली पंक्ति में शिक्षक को 'शिल्पी' कहा गया है।",
      }),
    ],
  },
};

/* ======================= Round 1 · owner's review (4 Oct 2026) ======================= */

/** A bilingual challenge-only question (Hindi carried on the question, never client-bundled). */
type Bil = Omit<Question, "id" | "examLevel" | "level"> & { stemHi: string; optionsHi: string[]; explanationHi: string };
const q1 = (id: string, q: Bil): Question => ({ id: `chr1-${id}`, examLevel: "l1", ...q });

/**
 * Round 1 SUPER TET: questions found too easy, swapped for harder, calculation-based ones
 * in the same section (key = the bank question they replace).
 */
export const R1_REPLACE: Record<string, Question> = {
  "gf-ma-b-08": q1("q58", {
    section: "numerical", topic: "Commercial maths", difficulty: "hard",
    stem: "A shopkeeper marks an article 40% above its cost price and allows two successive discounts of 10% and 10%. His profit per cent is ____",
    options: ["20%", "13.4%", "12%", "14.6%"], correct: 1,
    explanation: "Let CP = 100. Marked price = 140. After 10%: 126; after another 10%: 113.4. Profit = 13.4%. (Two 10% discounts are not a 20% discount.)",
    stemHi: "एक दुकानदार किसी वस्तु पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और 10% तथा 10% की दो क्रमागत छूट देता है। उसका लाभ प्रतिशत है ____",
    optionsHi: ["20%", "13.4%", "12%", "14.6%"],
    explanationHi: "मान लें क्रय मूल्य = 100। अंकित मूल्य = 140। 10% छूट के बाद 126, फिर 10% छूट के बाद 113.4। लाभ = 13.4%। (10% की दो छूटें 20% छूट नहीं होतीं।)",
  }),
  "n2d": q1("q60", {
    section: "numerical", topic: "Algebra", difficulty: "hard",
    stem: "If x + 1/x = 5, then the value of x³ + 1/x³ is ____",
    options: ["125", "23", "110", "140"], correct: 2,
    explanation: "x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x) = 125 − 15 = 110. (23 is x² + 1/x².)",
    stemHi: "यदि x + 1/x = 5, तो x³ + 1/x³ का मान है ____",
    optionsHi: ["125", "23", "110", "140"],
    explanationHi: "x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x) = 125 − 15 = 110। (23, x² + 1/x² का मान है।)",
  }),
  "mar-b-48": q1("q65", {
    section: "numerical", topic: "Arithmetic", difficulty: "hard",
    stem: "The average of five numbers is 27. If one number is excluded, the average of the remaining four becomes 25. The excluded number is ____",
    options: ["27", "30", "25", "35"], correct: 3,
    explanation: "Sum of five = 5 × 27 = 135. Sum of four = 4 × 25 = 100. Excluded number = 135 − 100 = 35.",
    stemHi: "पाँच संख्याओं का औसत 27 है। यदि एक संख्या हटा दी जाए, तो शेष चार का औसत 25 हो जाता है। हटाई गई संख्या है ____",
    optionsHi: ["27", "30", "25", "35"],
    explanationHi: "पाँचों का योग = 5 × 27 = 135। चारों का योग = 4 × 25 = 100। हटाई गई संख्या = 135 − 100 = 35।",
  }),
  "mn-p-38": q1("q66", {
    section: "numerical", topic: "Number system", difficulty: "hard",
    stem: "Which of the following fractions is the largest?",
    options: ["3/5", "5/8", "7/11", "9/14"], correct: 3,
    explanation: "3/5 = 0.600, 5/8 = 0.625, 7/11 ≈ 0.636, 9/14 ≈ 0.643. So 9/14 is the largest.",
    stemHi: "निम्नलिखित में से सबसे बड़ी भिन्न कौन-सी है?",
    optionsHi: ["3/5", "5/8", "7/11", "9/14"],
    explanationHi: "3/5 = 0.600, 5/8 = 0.625, 7/11 ≈ 0.636, 9/14 ≈ 0.643। अतः 9/14 सबसे बड़ी है।",
  }),
  "se-b-21": q1("q80", {
    section: "science", topic: "Environmental science", difficulty: "hard",
    stem: "Which of the following Indian species is listed as 'Critically Endangered' on the IUCN Red List?",
    options: ["Asian elephant", "Great Indian Bustard", "Indian peafowl", "Greater one-horned rhinoceros"], correct: 1,
    explanation: "The Great Indian Bustard is Critically Endangered. The Asian elephant is Endangered, the one-horned rhinoceros is Vulnerable and the Indian peafowl is of Least Concern.",
    stemHi: "निम्नलिखित में से कौन-सी भारतीय प्रजाति IUCN रेड लिस्ट में 'गंभीर रूप से संकटग्रस्त' (Critically Endangered) है?",
    optionsHi: ["एशियाई हाथी", "सोन चिरैया (ग्रेट इंडियन बस्टर्ड)", "भारतीय मोर", "एक सींग वाला गैंडा"],
    explanationHi: "सोन चिरैया (ग्रेट इंडियन बस्टर्ड) गंभीर रूप से संकटग्रस्त है। एशियाई हाथी संकटग्रस्त (Endangered), एक सींग वाला गैंडा सुभेद्य (Vulnerable) और भारतीय मोर न्यूनतम चिंता (Least Concern) श्रेणी में है।",
  }),
  "rt-gs-b-01": q1("q104", {
    section: "reasoning", topic: "Analytical reasoning", difficulty: "hard",
    stem: "Five friends A, B, C, D and E sit in a row facing north. C sits in the middle. A sits immediately to the right of C. B sits at the extreme left. E does not sit next to A. Who sits at the extreme right?",
    options: ["E", "A", "D", "B"], correct: 2,
    explanation: "From the left: B is 1st, C is 3rd and A is 4th. D and E take places 2 and 5. E cannot be 5th (next to A), so E is 2nd and D is 5th, at the extreme right.",
    stemHi: "पाँच मित्र A, B, C, D और E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। C बीच में बैठा है। A, C के ठीक दाईं ओर बैठा है। B सबसे बाएँ छोर पर है। E, A के बगल में नहीं बैठा है। सबसे दाएँ छोर पर कौन बैठा है?",
    optionsHi: ["E", "A", "D", "B"],
    explanationHi: "बाएँ से: B पहले, C तीसरे और A चौथे स्थान पर है। D और E के लिए स्थान 2 और 5 बचते हैं। E पाँचवें स्थान पर नहीं हो सकता (A के बगल में), अतः E दूसरे और D पाँचवें स्थान पर, यानी सबसे दाएँ है।",
  }),
  "rv-b-14": q1("q105", {
    section: "reasoning", topic: "Verbal reasoning", difficulty: "hard",
    stem: "Find the next term: 3, 7, 15, 31, 63, ?",
    options: ["125", "127", "126", "95"], correct: 1,
    explanation: "Each term = previous × 2 + 1: 63 × 2 + 1 = 127.",
    stemHi: "अगला पद ज्ञात कीजिए: 3, 7, 15, 31, 63, ?",
    optionsHi: ["125", "127", "126", "95"],
    explanationHi: "प्रत्येक पद = पिछला पद × 2 + 1: 63 × 2 + 1 = 127।",
  }),
  "rv-p-04": q1("q106", {
    section: "reasoning", topic: "Verbal reasoning", difficulty: "hard",
    stem: "Find the missing term: 4, 9, 25, 49, ?, 169",
    options: ["81", "100", "144", "121"], correct: 3,
    explanation: "These are the squares of consecutive prime numbers: 2², 3², 5², 7², 11², 13². The missing term is 11² = 121.",
    stemHi: "लुप्त पद ज्ञात कीजिए: 4, 9, 25, 49, ?, 169",
    optionsHi: ["81", "100", "144", "121"],
    explanationHi: "ये क्रमागत अभाज्य संख्याओं के वर्ग हैं: 2², 3², 5², 7², 11², 13²। लुप्त पद 11² = 121 है।",
  }),
  "rv-p-20": q1("q107", {
    section: "reasoning", topic: "Verbal reasoning", difficulty: "hard",
    stem: "If 'TEACHER' is coded as 'VGCEJGT', how is 'STUDENT' coded in the same code?",
    options: ["UVWFGPV", "UVWEGPV", "TUVFGPV", "UVWFHPV"], correct: 0,
    explanation: "Each letter moves two places forward: T→V, E→G, A→C ... So STUDENT → S→U, T→V, U→W, D→F, E→G, N→P, T→V = UVWFGPV.",
    stemHi: "यदि किसी कूट भाषा में 'TEACHER' को 'VGCEJGT' लिखा जाता है, तो उसी कूट में 'STUDENT' को कैसे लिखा जाएगा?",
    optionsHi: ["UVWFGPV", "UVWEGPV", "TUVFGPV", "UVWFHPV"],
    explanationHi: "प्रत्येक अक्षर दो स्थान आगे जाता है: T→V, E→G, A→C ... अतः STUDENT → S→U, T→V, U→W, D→F, E→G, N→P, T→V = UVWFGPV।",
  }),
  "rv-b-25": q1("q108", {
    section: "reasoning", topic: "Verbal reasoning", difficulty: "hard",
    stem: "Pointing to a man, Rina says, \"He is the only son of the only son of my grandfather.\" How is the man related to Rina?",
    options: ["Father", "Uncle", "Brother", "Cousin"], correct: 2,
    explanation: "The only son of Rina's grandfather is Rina's father. The only son of Rina's father is Rina's brother.",
    stemHi: "एक व्यक्ति की ओर इशारा करते हुए रीना कहती है, \"वह मेरे दादा के इकलौते पुत्र का इकलौता पुत्र है।\" वह व्यक्ति रीना का क्या लगता है?",
    optionsHi: ["पिता", "चाचा", "भाई", "चचेरा भाई"],
    explanationHi: "रीना के दादा का इकलौता पुत्र रीना के पिता हैं। रीना के पिता का इकलौता पुत्र रीना का भाई है।",
  }),
  "iet-p-42": q1("q109", {
    section: "computer", topic: "Computer fundamentals", difficulty: "hard",
    stem: "1 kilobyte (KB) is equal to how many bits?",
    options: ["1000", "1024", "8000", "8192"], correct: 3,
    explanation: "1 KB = 1024 bytes and 1 byte = 8 bits, so 1 KB = 1024 × 8 = 8192 bits.",
    stemHi: "1 किलोबाइट (KB) कितने बिट के बराबर होता है?",
    optionsHi: ["1000", "1024", "8000", "8192"],
    explanationHi: "1 KB = 1024 बाइट और 1 बाइट = 8 बिट, अतः 1 KB = 1024 × 8 = 8192 बिट।",
  }),
  "lsk-p-45": q1("q116", {
    section: "pedagogy", topic: "Life skills & ethics", difficulty: "hard",
    stem: "Which of the following is NOT one of the ten core life skills identified by the World Health Organization (WHO)?",
    options: ["Empathy", "Critical thinking", "Coping with stress", "Physical fitness"], correct: 3,
    explanation: "WHO's ten core life skills are self-awareness, empathy, critical thinking, creative thinking, decision making, problem solving, effective communication, interpersonal relationships, coping with stress and coping with emotions. Physical fitness is not one of them.",
    stemHi: "निम्नलिखित में से कौन-सा विश्व स्वास्थ्य संगठन (WHO) द्वारा बताए गए दस मूल जीवन कौशलों में से नहीं है?",
    optionsHi: ["समानुभूति", "आलोचनात्मक चिंतन", "तनाव से निपटना", "शारीरिक स्वास्थ्य (फ़िटनेस)"],
    explanationHi: "WHO के दस मूल जीवन कौशल हैं: आत्म-जागरूकता, समानुभूति, आलोचनात्मक चिंतन, सृजनात्मक चिंतन, निर्णय लेना, समस्या-समाधान, प्रभावी संप्रेषण, अंतर्वैयक्तिक संबंध, तनाव से निपटना और भावनाओं से निपटना। शारीरिक फ़िटनेस इनमें शामिल नहीं है।",
  }),
};

/** Same question, clearer wording (answer unchanged). Applied after the paper is built. */
export type Patch = { stem?: [string, string]; stemHi?: [string, string]; options?: Record<string, string>; optionsHi?: Record<string, string>; explanation?: string; explanationHi?: string };
export const R1_PATCH: Record<string, Patch> = {
  "sr-b-19": { stem: ["'लतायाम्' पद किस विभक्ति में है (एकवचन)?", "'लतायाम्' पद किस विभक्ति में है?"] },
  "dr-p-17": { stem: ["गम् धातु के लोट् लकार मध्यम पुरुष एकवचन का रूप (आज्ञा) है ____", "गम् धातु के लोट् लकार मध्यम पुरुष एकवचन का रूप है ____"] },
  // 12.5% as a fraction: wrong options = dividing by 1000 or 10 instead of 100
  "xn10": {
    options: { "1/4": "1/80", "1/6": "5/4", "1/5": "1/16" }, optionsHi: { "1/4": "1/80", "1/6": "5/4", "1/5": "1/16" },
    explanation: "12.5% = 12.5/100 = 125/1000 = 1/8. (Dividing by 1000 gives 1/80 and by 10 gives 5/4: both are common slips.)",
    explanationHi: "12.5% = 12.5/100 = 125/1000 = 1/8। (1000 से भाग देने पर 1/80 और 10 से भाग देने पर 5/4 आता है; ये आम गलतियाँ हैं।)",
  },
  "ge-p-19": {
    stem: ["Inflation caused by an increase in the cost of production (e.g. costlier oil) is called ____", "Inflation caused by an increase in the cost of production is called ____"],
    stemHi: ["उत्पादन लागत में वृद्धि (जैसे तेल का महँगा होना) के कारण होने वाली मुद्रास्फीति कहलाती है ____", "उत्पादन लागत में वृद्धि के कारण होने वाली मुद्रास्फीति कहलाती है ____"],
    explanation: "Cost-push inflation is caused by a rise in production costs (wages, raw materials), for example when oil becomes costlier. Demand-pull inflation is caused by demand exceeding supply.",
    explanationHi: "लागत-जनित (कॉस्ट-पुश) मुद्रास्फीति उत्पादन लागत (मज़दूरी, कच्चा माल) बढ़ने से होती है, जैसे तेल का महँगा होना। माँग-जनित मुद्रास्फीति तब होती है जब माँग आपूर्ति से अधिक हो।",
  },
  "pol-b-24": { options: { "86th Amendment (2002)": "86th Amendment" }, optionsHi: { "86वाँ संशोधन (2002)": "86वाँ संशोधन" } },
  "pd-b-27": { options: { "Adolescence only": "Adolescence" }, optionsHi: { "केवल किशोरावस्था में": "किशोरावस्था में" } },
  "lth-p-39": {
    options: { "Skinner (operant conditioning)": "Skinner", "Köhler (insight)": "Köhler", "Freud (psychoanalysis)": "Freud", "Piaget (stages)": "Piaget" },
    optionsHi: { "स्किनर (क्रिया-प्रसूत अनुबंधन)": "स्किनर", "कोहलर (अंतर्दृष्टि)": "कोहलर", "फ्रायड (मनोविश्लेषण)": "फ्रायड", "पियाजे (अवस्थाएँ)": "पियाजे" },
  },
};
