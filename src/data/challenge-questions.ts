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
