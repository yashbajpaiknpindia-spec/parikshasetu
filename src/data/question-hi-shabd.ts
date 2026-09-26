/**
 * Shabd-bhandar (पर्यायवाची · विलोम · अनेकार्थी), dedicated, topic-accurate bank.
 *
 * Shared across both UPESSC exam levels (no `examLevel` tag = serves both).
 * Topics: "पर्यायवाची" | "विलोम" | "अनेकार्थी". Two practice levels:
 *   • beginner, common synonyms/antonyms and everyday multiple meanings.
 *   • proficient, odd-one-out synonyms, precise विलोम pairs, exact अनेकार्थी sense.
 *
 * Explanations give the answer plus a small cluster of related words so the whole
 * set sticks. Original, on-pattern items (modelled on UPESSC/UPTET papers).
 */
import type { Question } from "./questions";

export const shabdBank: Question[] = [
  // ==================================================== पर्यायवाची: BEGINNER
  {
    id: "pv-b-01", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'सूर्य' का पर्यायवाची शब्द है ____",
    options: ["भानु", "चंद्र", "पवन", "सलिल"], correct: 0,
    explanation: "भानु सूर्य का पर्यायवाची है। सूर्य के अन्य पर्यायवाची: रवि, दिनकर, दिवाकर, आदित्य, प्रभाकर, मार्तंड। (चंद्र = चंद्रमा, पवन = वायु, सलिल = जल।)",
  },
  {
    id: "pv-b-02", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'चंद्रमा' का पर्यायवाची शब्द है ____",
    options: ["शशि", "भानु", "अनल", "नीर"], correct: 0,
    explanation: "शशि चंद्रमा का पर्यायवाची है। अन्य: राकेश, हिमांशु, सुधाकर, निशाकर, इंदु, मयंक, सोम। (भानु = सूर्य, अनल = अग्नि, नीर = जल।)",
  },
  {
    id: "pv-b-03", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'जल' का पर्यायवाची शब्द है ____",
    options: ["नीर", "गगन", "पावक", "धरा"], correct: 0,
    explanation: "नीर जल का पर्यायवाची है। अन्य: वारि, सलिल, तोय, अंबु, पय, जीवन, उदक। (गगन = आकाश, पावक = अग्नि, धरा = पृथ्वी।)",
  },
  {
    id: "pv-b-04", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'पृथ्वी' का पर्यायवाची शब्द है ____",
    options: ["वसुधा", "अंबर", "पवन", "अनिल"], correct: 0,
    explanation: "वसुधा पृथ्वी का पर्यायवाची है। अन्य: धरा, वसुंधरा, भूमि, धरती, अवनि, मही, क्षिति। (अंबर = आकाश, पवन/अनिल = वायु।)",
  },
  {
    id: "pv-b-05", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'आकाश' का पर्यायवाची शब्द है ____",
    options: ["गगन", "सलिल", "अनल", "गिरि"], correct: 0,
    explanation: "गगन आकाश का पर्यायवाची है। अन्य: नभ, अंबर, व्योम, आसमान, अंतरिक्ष, फलक। (सलिल = जल, अनल = अग्नि, गिरि = पर्वत।)",
  },
  {
    id: "pv-b-06", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'वायु' का पर्यायवाची शब्द है ____",
    options: ["पवन", "भानु", "नीर", "नग"], correct: 0,
    explanation: "पवन वायु का पर्यायवाची है। अन्य: समीर, अनिल, वात, मारुत, बयार, प्रभंजन। (भानु = सूर्य, नीर = जल, नग = पर्वत।)",
  },
  {
    id: "pv-b-07", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'अग्नि' का पर्यायवाची शब्द है ____",
    options: ["पावक", "पवन", "सलिल", "शशि"], correct: 0,
    explanation: "पावक अग्नि का पर्यायवाची है। अन्य: अनल, वह्नि, हुताशन, कृशानु, ज्वाला। (पवन = वायु, सलिल = जल, शशि = चंद्रमा।)",
  },
  {
    id: "pv-b-08", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'कमल' का पर्यायवाची शब्द है ____",
    options: ["पंकज", "अनिल", "विहग", "तरु"], correct: 0,
    explanation: "पंकज कमल का पर्यायवाची है। अन्य: जलज, नीरज, सरोज, अंबुज, राजीव, अरविंद, सरोरुह, इंदीवर। (अनिल = वायु, विहग = पक्षी, तरु = वृक्ष।)",
  },
  {
    id: "pv-b-09", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'पर्वत' का पर्यायवाची शब्द है ____",
    options: ["गिरि", "सरिता", "पावक", "गगन"], correct: 0,
    explanation: "गिरि पर्वत का पर्यायवाची है। अन्य: पहाड़, नग, शैल, भूधर, अचल, मेरु। (सरिता = नदी, पावक = अग्नि, गगन = आकाश।)",
  },
  {
    id: "pv-b-10", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'समुद्र' का पर्यायवाची शब्द है ____",
    options: ["सागर", "अंबर", "अनल", "तरु"], correct: 0,
    explanation: "सागर समुद्र का पर्यायवाची है। अन्य: जलधि, रत्नाकर, पयोधि, वारिधि, उदधि, सिंधु, अंबुधि। (अंबर = आकाश/वस्त्र, अनल = अग्नि, तरु = वृक्ष।)",
  },
  {
    id: "pv-b-11", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'राजा' का पर्यायवाची शब्द है ____",
    options: ["नृप", "सुर", "खग", "तनय"], correct: 0,
    explanation: "नृप राजा का पर्यायवाची है। अन्य: भूप, नरेश, महीप, भूपति, नरपति, नृपति, महीपति। (सुर = देवता, खग = पक्षी, तनय = पुत्र।)",
  },
  {
    id: "pv-b-12", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'हाथी' का पर्यायवाची शब्द है ____",
    options: ["गज", "अश्व", "केसरी", "विहग"], correct: 0,
    explanation: "गज हाथी का पर्यायवाची है। अन्य: हस्ती, कुंजर, नाग, द्विप, मतंग, वारण, गजराज। (अश्व = घोड़ा, केसरी = सिंह, विहग = पक्षी।)",
  },
  {
    id: "pv-b-13", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'घोड़ा' का पर्यायवाची शब्द है ____",
    options: ["अश्व", "गज", "मृगराज", "पंकज"], correct: 0,
    explanation: "अश्व घोड़े का पर्यायवाची है। अन्य: तुरंग, हय, घोटक, वाजि, सैंधव, रविपुत्र। (गज = हाथी, मृगराज = सिंह, पंकज = कमल।)",
  },
  {
    id: "pv-b-14", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'सिंह' का पर्यायवाची शब्द है ____",
    options: ["केसरी", "गज", "अश्व", "विहग"], correct: 0,
    explanation: "केसरी सिंह का पर्यायवाची है। अन्य: मृगराज, वनराज, शार्दूल, मृगेंद्र, पंचानन, हरि। (गज = हाथी, अश्व = घोड़ा, विहग = पक्षी।)",
  },
  {
    id: "pv-b-15", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'रात' का पर्यायवाची शब्द है ____",
    options: ["निशा", "दिवा", "प्रभा", "उषा"], correct: 0,
    explanation: "निशा रात का पर्यायवाची है। अन्य: रात्रि, रजनी, यामिनी, विभावरी, क्षणदा, तमी। (दिवा = दिन, प्रभा = आभा, उषा = भोर।)",
  },
  {
    id: "pv-b-16", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'नदी' का पर्यायवाची शब्द है ____",
    options: ["सरिता", "सागर", "गिरि", "तरु"], correct: 0,
    explanation: "सरिता नदी का पर्यायवाची है। अन्य: तटिनी, तरंगिणी, निर्झरिणी, आपगा, नद, कल्लोलिनी। (सागर = समुद्र, गिरि = पर्वत, तरु = वृक्ष।)",
  },
  {
    id: "pv-b-17", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'पक्षी' का पर्यायवाची शब्द है ____",
    options: ["विहग", "मृग", "गज", "नग"], correct: 0,
    explanation: "विहग पक्षी का पर्यायवाची है। अन्य: खग, नभचर, पंछी, द्विज, विहंग, पखेरू, अंडज। (मृग = हिरण, गज = हाथी, नग = पर्वत।)",
  },
  {
    id: "pv-b-18", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'स्त्री' का पर्यायवाची शब्द है ____",
    options: ["ललना", "तनय", "सुर", "नृप"], correct: 0,
    explanation: "ललना स्त्री का पर्यायवाची है। अन्य: नारी, महिला, अबला, कामिनी, वनिता, रमणी। (तनय = पुत्र, सुर = देवता, नृप = राजा।)",
  },
  {
    id: "pv-b-19", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'पुत्र' का पर्यायवाची शब्द है ____",
    options: ["तनय", "तनया", "ललना", "सुता"], correct: 0,
    explanation: "तनय पुत्र का पर्यायवाची है। अन्य: बेटा, सुत, आत्मज, नंदन, पूत। ध्यान दें: तनया, सुता, आत्मजा, नंदिनी 'पुत्री' के पर्यायवाची हैं (स्त्रीलिंग रूप)।",
  },
  {
    id: "pv-b-20", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'सोना (स्वर्ण)' का पर्यायवाची शब्द है ____",
    options: ["कनक", "रजत", "ताम्र", "अयस"], correct: 0,
    explanation: "कनक सोने का पर्यायवाची है। अन्य: स्वर्ण, हेम, कंचन, कुंदन, हिरण्य, सुवर्ण। (रजत = चाँदी, ताम्र = ताँबा, अयस = लोहा।)",
  },

  // ==================================================== विलोम: BEGINNER
  {
    id: "vl-b-01", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'आदि' का विलोम शब्द है ____",
    options: ["अंत", "मध्य", "आरंभ", "प्रथम"], correct: 0,
    explanation: "'आदि' (आरंभ) का विलोम 'अंत' है। ध्यान दें: 'आरंभ' आदि का पर्यायवाची है, विलोम नहीं। समान युग्म: प्रारंभ × समाप्ति।",
  },
  {
    id: "vl-b-02", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'दिन' का विलोम शब्द है ____",
    options: ["रात", "दिवस", "प्रात", "सायं"], correct: 0,
    explanation: "'दिन' का विलोम 'रात' है। ('दिवस' दिन का पर्यायवाची है।) समान युग्म: उजाला × अँधेरा, प्रकाश × अंधकार।",
  },
  {
    id: "vl-b-03", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'जय' का विलोम शब्द है ____",
    options: ["पराजय", "विजय", "जीत", "सफलता"], correct: 0,
    explanation: "'जय' (जीत) का विलोम 'पराजय' (हार) है। (विजय व जीत तो जय के पर्यायवाची हैं।) समान युग्म: जीत × हार।",
  },
  {
    id: "vl-b-04", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'सुख' का विलोम शब्द है ____",
    options: ["दुख", "आनंद", "हर्ष", "चैन"], correct: 0,
    explanation: "'सुख' का विलोम 'दुख' है। (आनंद, हर्ष, चैन तो सुख के निकट/पर्यायवाची हैं।) समान युग्म: हर्ष × शोक।",
  },
  {
    id: "vl-b-05", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'ज्ञान' का विलोम शब्द है ____",
    options: ["अज्ञान", "विज्ञान", "बुद्धि", "विद्या"], correct: 0,
    explanation: "'ज्ञान' का विलोम 'अज्ञान' है (निषेधवाचक 'अ' से बना)। समान युग्म: ज्ञानी × अज्ञानी, विद्या × अविद्या।",
  },
  {
    id: "vl-b-06", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'पाप' का विलोम शब्द है ____",
    options: ["पुण्य", "अपराध", "दोष", "कर्म"], correct: 0,
    explanation: "'पाप' का विलोम 'पुण्य' है। समान युग्म: धर्म × अधर्म, शुभ × अशुभ।",
  },
  {
    id: "vl-b-07", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'मित्र' का विलोम शब्द है ____",
    options: ["शत्रु", "सखा", "साथी", "बंधु"], correct: 0,
    explanation: "'मित्र' का विलोम 'शत्रु' है। (सखा, साथी, बंधु तो मित्र के पर्यायवाची हैं।) समान युग्म: अपना × पराया।",
  },
  {
    id: "vl-b-08", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'आय' का विलोम शब्द है ____",
    options: ["व्यय", "आमद", "लाभ", "कमाई"], correct: 0,
    explanation: "'आय' का विलोम 'व्यय' (खर्च) है। समान युग्म: लाभ × हानि, आयात × निर्यात।",
  },
  {
    id: "vl-b-09", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'उदय' का विलोम शब्द है ____",
    options: ["अस्त", "उदित", "प्रकाश", "आरंभ"], correct: 0,
    explanation: "'उदय' का विलोम 'अस्त' है (जैसे सूर्योदय × सूर्यास्त)। समान युग्म: उत्थान × पतन।",
  },
  {
    id: "vl-b-10", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'लाभ' का विलोम शब्द है ____",
    options: ["हानि", "फायदा", "आय", "मुनाफा"], correct: 0,
    explanation: "'लाभ' का विलोम 'हानि' है। (फायदा, मुनाफा तो लाभ के पर्यायवाची हैं।) समान युग्म: नफा × नुकसान।",
  },
  {
    id: "vl-b-11", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'हर्ष' का विलोम शब्द है ____",
    options: ["शोक", "खुशी", "आनंद", "उल्लास"], correct: 0,
    explanation: "'हर्ष' (प्रसन्नता) का विलोम 'शोक' (दुख) है। (खुशी, आनंद, उल्लास हर्ष के पर्यायवाची हैं।) समान युग्म: सुख × दुख।",
  },
  {
    id: "vl-b-12", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'अमृत' का विलोम शब्द है ____",
    options: ["विष", "सुधा", "पीयूष", "जल"], correct: 0,
    explanation: "'अमृत' का विलोम 'विष' (ज़हर) है। (सुधा, पीयूष तो अमृत के पर्यायवाची हैं।) समान युग्म: जीवन × मरण।",
  },
  {
    id: "vl-b-13", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "'स्वर्ग' का विलोम शब्द है ____",
    options: ["नरक", "देवलोक", "मृत्युलोक", "पाताल"], correct: 0,
    explanation: "'स्वर्ग' का विलोम 'नरक' है। समान युग्म: देव × दानव, सुर × असुर।",
  },
  {
    id: "vl-b-14", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'आदर' का विलोम शब्द है ____",
    options: ["अनादर", "सम्मान", "स्वागत", "श्रद्धा"], correct: 0,
    explanation: "'आदर' का विलोम 'अनादर' है (निषेधवाचक 'अन्')। (सम्मान, श्रद्धा तो आदर के पर्यायवाची हैं।) समान युग्म: मान × अपमान।",
  },
  {
    id: "vl-b-15", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'नवीन' का विलोम शब्द है ____",
    options: ["प्राचीन", "नूतन", "नया", "आधुनिक"], correct: 0,
    explanation: "'नवीन' (नया) का विलोम 'प्राचीन' (पुराना) है। (नूतन, नया तो नवीन के पर्यायवाची हैं।) समान युग्म: नया × पुराना।",
  },
  {
    id: "vl-b-16", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'जीवन' का विलोम शब्द है ____",
    options: ["मरण", "प्राण", "जिंदगी", "आयु"], correct: 0,
    explanation: "'जीवन' का विलोम 'मरण' (मृत्यु) है। (प्राण, जिंदगी तो जीवन से जुड़े हैं।) समान युग्म: जन्म × मृत्यु।",
  },
  {
    id: "vl-b-17", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'शुभ' का विलोम शब्द है ____",
    options: ["अशुभ", "मंगल", "कल्याण", "श्रेष्ठ"], correct: 0,
    explanation: "'शुभ' का विलोम 'अशुभ' है। (मंगल, कल्याण तो शुभ के पर्यायवाची हैं।) समान युग्म: सौभाग्य × दुर्भाग्य।",
  },
  {
    id: "vl-b-18", section: "hindi", topic: "विलोम", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'गुण' का विलोम शब्द है ____",
    options: ["दोष", "विशेषता", "योग्यता", "कौशल"], correct: 0,
    explanation: "'गुण' का विलोम 'दोष' (अवगुण) है। समान युग्म: सद्गुण × दुर्गुण, योग्य × अयोग्य।",
  },

  // ==================================================== अनेकार्थी: BEGINNER
  {
    id: "an-b-01", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'कर' शब्द का एक अर्थ 'हाथ' है; इसका दूसरा अर्थ है ____",
    options: ["टैक्स (कर)", "पैर", "आँख", "कान"], correct: 0,
    explanation: "'कर' अनेकार्थी शब्द है: इसके अर्थ हैं: हाथ, टैक्स (राजस्व), किरण, तथा हाथी की सूँड़। एक ही शब्द के अनेक अर्थ होने पर वह अनेकार्थी कहलाता है।",
  },
  {
    id: "an-b-02", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'अर्थ' शब्द का एक अर्थ 'मतलब' है; इसका दूसरा प्रमुख अर्थ है ____",
    options: ["धन", "समय", "स्थान", "रंग"], correct: 0,
    explanation: "'अर्थ' के अनेक अर्थ हैं: धन (जैसे अर्थशास्त्र), प्रयोजन, मतलब, अभिप्राय। पुरुषार्थों में 'अर्थ' का तात्पर्य धन/समृद्धि है।",
  },
  {
    id: "an-b-03", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'काल' शब्द का एक अर्थ 'समय' है; इसका दूसरा अर्थ है ____",
    options: ["मृत्यु", "स्थान", "धन", "रंग"], correct: 0,
    explanation: "'काल' के अर्थ हैं: समय, मृत्यु और यमराज। व्याकरण में 'काल' क्रिया के समय (भूत/वर्तमान/भविष्य) को भी कहते हैं।",
  },
  {
    id: "an-b-04", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'पत्र' शब्द का एक अर्थ 'चिट्ठी' है; इसका दूसरा अर्थ है ____",
    options: ["पत्ता", "पानी", "पर्वत", "पक्षी"], correct: 0,
    explanation: "'पत्र' के अर्थ हैं: पत्ता (वृक्ष का), चिट्ठी (पत्र-व्यवहार), तथा पंख (पक्षी का)। संदर्भ से अर्थ तय होता है।",
  },
  {
    id: "an-b-05", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'फल' शब्द का एक अर्थ 'फल (खाने का)' है; इसका दूसरा अर्थ है ____",
    options: ["परिणाम", "पत्ता", "जल", "समय"], correct: 0,
    explanation: "'फल' के अर्थ हैं: वृक्ष का फल तथा परिणाम/नतीजा (जैसे 'कर्म का फल')। तीर/भाले का नुकीला अगला भाग भी 'फल' कहलाता है।",
  },
  {
    id: "an-b-06", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'हरि' शब्द के अर्थों में सम्मिलित है ____",
    options: ["विष्णु व सिंह", "केवल विष्णु", "केवल जल", "केवल पर्वत"], correct: 0,
    explanation: "'हरि' अत्यधिक अनेकार्थी शब्द है: इसके अर्थ हैं: विष्णु, इंद्र, सूर्य, सिंह, बंदर, साँप, मेंढक और घोड़ा। संदर्भ से सही अर्थ चुना जाता है।",
  },
  {
    id: "an-b-07", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'गुरु' शब्द का एक अर्थ 'शिक्षक' है; इसका दूसरा अर्थ है ____",
    options: ["भारी", "छोटा", "हल्का", "तेज़"], correct: 0,
    explanation: "'गुरु' के अर्थ हैं: शिक्षक/आचार्य, भारी (जैसे 'गुरुत्व'), बृहस्पति ग्रह, तथा बड़ा/श्रेष्ठ। छंद-शास्त्र में दीर्घ मात्रा को भी 'गुरु' कहते हैं।",
  },
  {
    id: "an-b-08", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'अंबर' शब्द के दो अर्थ हैं: आकाश तथा ____",
    options: ["वस्त्र", "जल", "अग्नि", "पर्वत"], correct: 0,
    explanation: "'अंबर' के अर्थ हैं: आकाश तथा वस्त्र। इसीलिए 'पीतांबर' = पीले वस्त्र वाला (कृष्ण) और 'दिगंबर' = दिशाएँ ही जिसका वस्त्र हों।",
  },
  {
    id: "an-b-09", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'मधु' शब्द का एक अर्थ 'शहद' है; इसका दूसरा अर्थ है ____",
    options: ["वसंत ऋतु", "वर्षा", "पर्वत", "समुद्र"], correct: 0,
    explanation: "'मधु' के अर्थ हैं: शहद, वसंत ऋतु, मदिरा तथा एक राक्षस (मधु-कैटभ)। 'मधुमास' = वसंत ऋतु।",
  },
  {
    id: "an-b-10", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'तीर' शब्द का एक अर्थ 'बाण' है; इसका दूसरा अर्थ है ____",
    options: ["किनारा", "पत्थर", "जल", "वृक्ष"], correct: 0,
    explanation: "'तीर' के अर्थ हैं: बाण (धनुष का) तथा किनारा/तट (नदी का)। जैसे 'नदी के तीर' = नदी के किनारे।",
  },
  {
    id: "an-b-11", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'वर्ण' शब्द का एक अर्थ 'अक्षर' है; इसका दूसरा अर्थ है ____",
    options: ["रंग", "जल", "समय", "पर्वत"], correct: 0,
    explanation: "'वर्ण' के अर्थ हैं: अक्षर (जैसे वर्णमाला), रंग (जैसे 'श्वेत वर्ण'), तथा जाति/वर्ग (ब्राह्मण, क्षत्रिय आदि)।",
  },
  {
    id: "an-b-12", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'राग' शब्द का एक अर्थ 'संगीत का राग' है; इसका दूसरा अर्थ है ____",
    options: ["प्रेम/अनुराग", "जल", "पर्वत", "पक्षी"], correct: 0,
    explanation: "'राग' के अर्थ हैं: प्रेम/अनुराग, संगीत का राग, तथा लाली/लाल रंग। इसका विलोम (प्रेम अर्थ में) 'विराग' है।",
  },

  // ==================================================== पर्यायवाची: PROFICIENT
  {
    id: "pv-p-01", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'सूर्य' का पर्यायवाची नहीं है?",
    options: ["मयंक", "मार्तंड", "दिनकर", "प्रभाकर"], correct: 0,
    explanation: "'मयंक' सूर्य का नहीं, बल्कि चंद्रमा का पर्यायवाची है। मार्तंड, दिनकर, प्रभाकर तीनों सूर्य के पर्यायवाची हैं (साथ ही रवि, भानु, दिवाकर, आदित्य, सविता)।",
  },
  {
    id: "pv-p-02", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'चंद्रमा' का पर्यायवाची नहीं है?",
    options: ["अंशुमाली", "सुधाकर", "निशाकर", "मयंक"], correct: 0,
    explanation: "'अंशुमाली' (किरणों की माला वाला) सूर्य का पर्यायवाची है, चंद्रमा का नहीं। सुधाकर, निशाकर, मयंक चंद्रमा के पर्यायवाची हैं (साथ ही शशि, राकेश, हिमांशु, इंदु, सोम)।",
  },
  {
    id: "pv-p-03", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'इंदीवर' किसका पर्यायवाची है?",
    options: ["कमल", "चंद्रमा", "सूर्य", "समुद्र"], correct: 0,
    explanation: "'इंदीवर' (नीलकमल) कमल का पर्यायवाची है। कमल के अन्य पर्यायवाची: पंकज, जलज, नीरज, सरोज, अरविंद, राजीव, सरोरुह, अंबुज।",
  },
  {
    id: "pv-p-04", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'समुद्र' का पर्यायवाची नहीं है?",
    options: ["तटिनी", "रत्नाकर", "पयोधि", "वारिधि"], correct: 0,
    explanation: "'तटिनी' (जिसके तट हों) नदी का पर्यायवाची है, समुद्र का नहीं। रत्नाकर, पयोधि, वारिधि समुद्र के पर्यायवाची हैं (साथ ही जलधि, उदधि, सिंधु, अंबुधि)।",
  },
  {
    id: "pv-p-05", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'वसुंधरा' किसका पर्यायवाची है?",
    options: ["पृथ्वी", "आकाश", "नदी", "अग्नि"], correct: 0,
    explanation: "'वसुंधरा' (रत्नों को धारण करने वाली) पृथ्वी का पर्यायवाची है। अन्य: धरा, वसुधा, अवनि, मही, क्षिति, धरित्री, भू।",
  },
  {
    id: "pv-p-06", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'हाथी' का पर्यायवाची नहीं है?",
    options: ["वाजि", "कुंजर", "मतंग", "वारण"], correct: 0,
    explanation: "'वाजि' घोड़े का पर्यायवाची है, हाथी का नहीं। कुंजर, मतंग, वारण हाथी के पर्यायवाची हैं (साथ ही गज, हस्ती, नाग, द्विप)।",
  },
  {
    id: "pv-p-07", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'शार्दूल' किसका पर्यायवाची है?",
    options: ["सिंह", "हाथी", "घोड़ा", "पक्षी"], correct: 0,
    explanation: "'शार्दूल' सिंह (बाघ भी) का पर्यायवाची है। सिंह के अन्य: केसरी, मृगराज, वनराज, मृगेंद्र, पंचानन, हरि।",
  },
  {
    id: "pv-p-08", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'रात' का पर्यायवाची नहीं है?",
    options: ["विभा", "यामिनी", "विभावरी", "रजनी"], correct: 0,
    explanation: "'विभा' का अर्थ है कांति/चमक: यह रात का पर्यायवाची नहीं। यामिनी, विभावरी, रजनी रात के पर्यायवाची हैं (साथ ही निशा, रात्रि, क्षणदा)।",
  },
  {
    id: "pv-p-09", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'तरंगिणी' किसका पर्यायवाची है?",
    options: ["नदी", "समुद्र", "पर्वत", "रात"], correct: 0,
    explanation: "'तरंगिणी' (तरंगों वाली) नदी का पर्यायवाची है। नदी के अन्य: सरिता, तटिनी, निर्झरिणी, आपगा, कल्लोलिनी, नद।",
  },
  {
    id: "pv-p-10", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'पवन (वायु)' का पर्यायवाची नहीं है?",
    options: ["सलिल", "समीर", "मारुत", "अनिल"], correct: 0,
    explanation: "'सलिल' जल का पर्यायवाची है, वायु का नहीं। समीर, मारुत, अनिल वायु के पर्यायवाची हैं (साथ ही पवन, वात, बयार, प्रभंजन)।",
  },
  {
    id: "pv-p-11", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'कृशानु' किसका पर्यायवाची है?",
    options: ["अग्नि", "जल", "वायु", "आकाश"], correct: 0,
    explanation: "'कृशानु' अग्नि का पर्यायवाची है। अग्नि के अन्य: पावक, अनल, वह्नि, हुताशन, ज्वाला, वैश्वानर।",
  },
  {
    id: "pv-p-12", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'पक्षी' का पर्यायवाची नहीं है?",
    options: ["तुरंग", "विहंग", "खग", "नभचर"], correct: 0,
    explanation: "'तुरंग' घोड़े का पर्यायवाची है, पक्षी का नहीं। विहंग, खग, नभचर पक्षी के पर्यायवाची हैं (साथ ही विहग, द्विज, पखेरू, अंडज)।",
  },
  {
    id: "pv-p-13", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'हिरण्य' किसका पर्यायवाची है?",
    options: ["सोना", "चाँदी", "लोहा", "ताँबा"], correct: 0,
    explanation: "'हिरण्य' सोने (स्वर्ण) का पर्यायवाची है। सोने के अन्य: कनक, हेम, कंचन, कुंदन, सुवर्ण। (चाँदी = रजत, लोहा = अयस, ताँबा = ताम्र।)",
  },
  {
    id: "pv-p-14", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'देवता' का पर्यायवाची नहीं है?",
    options: ["दानव", "सुर", "अमर", "विबुध"], correct: 0,
    explanation: "'दानव' तो देवता का विलोम (असुर) है, पर्यायवाची नहीं। सुर, अमर, विबुध देवता के पर्यायवाची हैं (साथ ही देव, त्रिदश, आदित्य)।",
  },
  {
    id: "pv-p-15", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'मृगेंद्र' किसका पर्यायवाची है?",
    options: ["सिंह", "हिरण", "हाथी", "घोड़ा"], correct: 0,
    explanation: "'मृगेंद्र' (पशुओं का राजा) सिंह का पर्यायवाची है, हिरण का नहीं (यद्यपि 'मृग' = हिरण)। सिंह के अन्य: केसरी, वनराज, शार्दूल, पंचानन।",
  },
  {
    id: "pv-p-16", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'क्षिति' किसका पर्यायवाची है?",
    options: ["पृथ्वी", "आकाश", "जल", "अग्नि"], correct: 0,
    explanation: "'क्षिति' पृथ्वी का पर्यायवाची है (पंचतत्वों में: क्षिति, जल, पावक, गगन, समीर)। पृथ्वी के अन्य: धरा, वसुधा, अवनि, मही, भू।",
  },
  {
    id: "pv-p-17", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'स्त्री' का पर्यायवाची नहीं है?",
    options: ["तनुज", "कामिनी", "वनिता", "रमणी"], correct: 0,
    explanation: "'तनुज' का अर्थ पुत्र है, स्त्री का पर्यायवाची नहीं। कामिनी, वनिता, रमणी स्त्री के पर्यायवाची हैं (साथ ही नारी, ललना, अबला, महिला)।",
  },
  {
    id: "pv-p-18", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'पयोधि' का शाब्दिक आधार 'पय' है, जिसका अर्थ है 'जल/दूध'; यह किसका पर्यायवाची है?",
    options: ["समुद्र", "बादल", "नदी", "तालाब"], correct: 0,
    explanation: "'पयोधि' (जल का भंडार) समुद्र का पर्यायवाची है। इसी 'पय' से 'पयोद/पयोधर' (बादल) भी बनते हैं। समुद्र के अन्य: जलधि, वारिधि, रत्नाकर, उदधि।",
  },
  {
    id: "pv-p-19", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'भूधर' किसका पर्यायवाची है?",
    options: ["पर्वत", "समुद्र", "नदी", "बादल"], correct: 0,
    explanation: "'भूधर' (पृथ्वी को धारण करने वाला) पर्वत का पर्यायवाची है। पर्वत के अन्य: गिरि, नग, शैल, अचल, मेरु, पहाड़।",
  },
  {
    id: "pv-p-20", section: "hindi", topic: "पर्यायवाची", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "इनमें से कौन-सा शब्द 'आकाश' का पर्यायवाची नहीं है?",
    options: ["अनिल", "व्योम", "नभ", "अंबर"], correct: 0,
    explanation: "'अनिल' वायु का पर्यायवाची है, आकाश का नहीं। व्योम, नभ, अंबर आकाश के पर्यायवाची हैं (साथ ही गगन, अंतरिक्ष, फलक)।",
  },

  // ==================================================== विलोम: PROFICIENT
  {
    id: "vl-p-01", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'अपेक्षा' का सही विलोम शब्द है ____",
    options: ["उपेक्षा", "निरपेक्षा", "प्रतीक्षा", "समीक्षा"], correct: 0,
    explanation: "'अपेक्षा' (आशा/चाह) का विलोम 'उपेक्षा' (ध्यान न देना) है। भ्रम से बचें: 'निरपेक्षा/प्रतीक्षा/समीक्षा' विलोम नहीं। उपसर्ग बदलने से अर्थ बदलता है (अप-/उप-)।",
  },
  {
    id: "vl-p-02", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'कृतज्ञ' का सही विलोम शब्द है ____",
    options: ["कृतघ्न", "अकृत", "विकृत", "सुकृत"], correct: 0,
    explanation: "'कृतज्ञ' (उपकार मानने वाला) का विलोम 'कृतघ्न' (उपकार भुला देने वाला) है। यह अत्यंत पूछा जाने वाला युग्म है: वर्तनी में 'घ्न' पर ध्यान दें।",
  },
  {
    id: "vl-p-03", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'ग्राह्य' का सही विलोम शब्द है ____",
    options: ["त्याज्य", "ग्रहण", "अग्रणी", "गृहीत"], correct: 0,
    explanation: "'ग्राह्य' (ग्रहण करने योग्य) का विलोम 'त्याज्य' (त्यागने योग्य) है। समान युग्म: देय × अदेय, वंद्य × निंद्य।",
  },
  {
    id: "vl-p-04", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'सापेक्ष' का सही विलोम शब्द है ____",
    options: ["निरपेक्ष", "अपेक्षित", "उपेक्षित", "प्रत्यक्ष"], correct: 0,
    explanation: "'सापेक्ष' (जो किसी पर निर्भर हो) का विलोम 'निरपेक्ष' (स्वतंत्र, किसी पर निर्भर नहीं) है। जैसे: सापेक्षता × निरपेक्षता।",
  },
  {
    id: "vl-p-05", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'मूक' का सही विलोम शब्द है ____",
    options: ["वाचाल", "बधिर", "मौन", "गूँगा"], correct: 0,
    explanation: "'मूक' (गूँगा/चुप) का विलोम 'वाचाल' (बहुत बोलने वाला) है। (मौन, गूँगा तो मूक के निकट हैं; बधिर = बहरा।)",
  },
  {
    id: "vl-p-06", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'स्थावर' का सही विलोम शब्द है ____",
    options: ["जंगम", "अचल", "स्थिर", "स्थापित"], correct: 0,
    explanation: "'स्थावर' (न चलने वाला, जैसे भूमि/भवन) का विलोम 'जंगम' (चलने वाला, जैसे पशु) है। संपत्ति के संदर्भ में यह युग्म बहुत प्रयुक्त होता है।",
  },
  {
    id: "vl-p-07", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'आविर्भाव' का सही विलोम शब्द है ____",
    options: ["तिरोभाव", "प्रादुर्भाव", "अभाव", "स्वभाव"], correct: 0,
    explanation: "'आविर्भाव' (प्रकट होना, उत्पत्ति) का विलोम 'तिरोभाव' (लुप्त होना) है। ('प्रादुर्भाव' तो आविर्भाव का पर्यायवाची है।)",
  },
  {
    id: "vl-p-08", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'अनुलोम' का सही विलोम शब्द है ____",
    options: ["प्रतिलोम", "विलोम", "अनुकूल", "विपरीत"], correct: 0,
    explanation: "'अनुलोम' (सीधे क्रम में) का विलोम 'प्रतिलोम' (उल्टे क्रम में) है। विवाह-व्यवस्था व क्रम दोनों संदर्भों में यह युग्म आता है।",
  },
  {
    id: "vl-p-09", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'ऋत' का सही विलोम शब्द है ____",
    options: ["अनृत", "अमृत", "ऋतु", "वृत"], correct: 0,
    explanation: "'ऋत' (सत्य/नियम) का विलोम 'अनृत' (असत्य) है। भ्रम से बचें: 'अमृत' का संबंध विष से है, 'ऋत' से नहीं।",
  },
  {
    id: "vl-p-10", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'सम्मुख' का सही विलोम शब्द है ____",
    options: ["विमुख", "प्रमुख", "उन्मुख", "अभिमुख"], correct: 0,
    explanation: "'सम्मुख' (सामने) का विलोम 'विमुख' (मुँह फेरे हुए, विपरीत) है। (उन्मुख/अभिमुख तो 'की ओर' के अर्थ में सम्मुख के निकट हैं।)",
  },
  {
    id: "vl-p-11", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'ज्येष्ठ' का सही विलोम शब्द है ____",
    options: ["कनिष्ठ", "श्रेष्ठ", "वरिष्ठ", "गरिष्ठ"], correct: 0,
    explanation: "'ज्येष्ठ' (बड़ा) का विलोम 'कनिष्ठ' (छोटा) है। (श्रेष्ठ/वरिष्ठ तो 'बड़े/उत्तम' के अर्थ में ज्येष्ठ के निकट हैं।)",
  },
  {
    id: "vl-p-12", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'उर्वर' का सही विलोम शब्द है ____",
    options: ["ऊसर", "उपजाऊ", "हरा", "सूखा"], correct: 0,
    explanation: "'उर्वर' (उपजाऊ) का विलोम 'ऊसर' (बंजर, अनुपजाऊ) है। ('उपजाऊ' तो उर्वर का पर्यायवाची है।)",
  },
  {
    id: "vl-p-13", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'संधि' का सही विलोम शब्द है ____",
    options: ["विग्रह", "समास", "संयोग", "मेल"], correct: 0,
    explanation: "'संधि' (मेल/समझौता) का विलोम 'विग्रह' (अलगाव/युद्ध) है। राजनीति व व्याकरण दोनों में यह युग्म प्रयुक्त होता है।",
  },
  {
    id: "vl-p-14", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'सृष्टि' का सही विलोम शब्द है ____",
    options: ["प्रलय", "रचना", "निर्माण", "उत्पत्ति"], correct: 0,
    explanation: "'सृष्टि' (रचना/उत्पत्ति) का विलोम 'प्रलय' (विनाश) है। (रचना, निर्माण, उत्पत्ति तो सृष्टि के पर्यायवाची हैं।) समान युग्म: उत्थान × पतन।",
  },
  {
    id: "vl-p-15", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'क्षम्य' का सही विलोम शब्द है ____",
    options: ["अक्षम्य", "क्षमा", "सक्षम", "क्षमता"], correct: 0,
    explanation: "'क्षम्य' (क्षमा करने योग्य) का विलोम 'अक्षम्य' (क्षमा न करने योग्य) है (निषेधवाचक 'अ')। समान युग्म: सह्य × असह्य, वर्णनीय × अवर्णनीय।",
  },
  {
    id: "vl-p-16", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'शयन' का सही विलोम शब्द है ____",
    options: ["जागरण", "निद्रा", "स्वप्न", "विश्राम"], correct: 0,
    explanation: "'शयन' (सोना) का विलोम 'जागरण' (जागना) है। (निद्रा, विश्राम तो शयन के निकट हैं।) समान युग्म: सुप्त × जाग्रत।",
  },
  {
    id: "vl-p-17", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'अल्पज्ञ' का सही विलोम शब्द है ____",
    options: ["बहुज्ञ", "अज्ञ", "सर्वज्ञ", "विज्ञ"], correct: 0,
    explanation: "'अल्पज्ञ' (थोड़ा जानने वाला) का सर्वाधिक उपयुक्त विलोम 'बहुज्ञ' (बहुत जानने वाला) है; व्यापक अर्थ में 'सर्वज्ञ' भी प्रयुक्त होता है। ('अज्ञ' = न जानने वाला, यह विलोम नहीं।)",
  },
  {
    id: "vl-p-18", section: "hindi", topic: "विलोम", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'आयात' का सही विलोम शब्द है ____",
    options: ["निर्यात", "आगमन", "प्रयाण", "संग्रह"], correct: 0,
    explanation: "'आयात' (बाहर से मँगाना) का विलोम 'निर्यात' (बाहर भेजना) है। समान युग्म: आदान × प्रदान, आय × व्यय।",
  },

  // ==================================================== अनेकार्थी: PROFICIENT
  {
    id: "an-p-01", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'सारंग' शब्द के अनेक अर्थ हैं। इनमें से कौन-सा 'सारंग' का अर्थ नहीं है?",
    options: ["सिंह", "मोर", "बादल", "हिरण"], correct: 0,
    explanation: "'सारंग' अत्यधिक अनेकार्थी शब्द है: इसके अर्थ हैं: मोर, हिरण, बादल, साँप, हाथी, कोयल, कमल तथा एक राग। 'सिंह' इसके अर्थों में सम्मिलित नहीं है।",
  },
  {
    id: "an-p-02", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'घन' शब्द का एक अर्थ 'बादल' है; इसका दूसरा अर्थ है ____",
    options: ["हथौड़ा", "जल", "पर्वत", "वृक्ष"], correct: 0,
    explanation: "'घन' के अर्थ हैं: बादल, हथौड़ा (लोहा पीटने का), घना/सघन, तथा गणित में घनफल (cube)। 'घनश्याम' में 'घन' = बादल।",
  },
  {
    id: "an-p-03", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'पद' शब्द के अर्थों में सम्मिलित नहीं है ____",
    options: ["जल", "चरण/पैर", "ओहदा", "शब्द"], correct: 0,
    explanation: "'पद' के अर्थ हैं: चरण/पैर, ओहदा/पदवी, शब्द (व्याकरण में), तथा छंद/कविता का एक भाग (जैसे सूरदास के 'पद')। 'जल' इसके अर्थों में नहीं है।",
  },
  {
    id: "an-p-04", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'नग' शब्द का एक अर्थ 'पर्वत' है; इसका दूसरा अर्थ है ____",
    options: ["रत्न", "जल", "पक्षी", "समय"], correct: 0,
    explanation: "'नग' के अर्थ हैं: पर्वत, रत्न (जैसे अँगूठी का नग), तथा वृक्ष। संदर्भ से अर्थ तय होता है।",
  },
  {
    id: "an-p-05", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'द्विज' शब्द के अर्थों में सम्मिलित नहीं है ____",
    options: ["पर्वत", "ब्राह्मण", "पक्षी", "दाँत"], correct: 0,
    explanation: "'द्विज' (जिसका दो बार जन्म हो) के अर्थ हैं: ब्राह्मण, पक्षी (अंडे व बच्चे: दो जन्म), तथा दाँत (दूध के व स्थायी)। 'पर्वत' इसका अर्थ नहीं।",
  },
  {
    id: "an-p-06", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'कनक' शब्द के दो प्रमुख अर्थ हैं: सोना तथा ____",
    options: ["धतूरा", "चाँदी", "जल", "अग्नि"], correct: 0,
    explanation: "'कनक' के अर्थ हैं: सोना (स्वर्ण) तथा धतूरा (एक विषैला पौधा); कहीं-कहीं गेहूँ भी। बिहारी के 'कनक कनक ते सौ गुनी...' में यही अनेकार्थता यमक अलंकार बनाती है।",
  },
  {
    id: "an-p-07", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'अक्षर' शब्द का एक अर्थ 'वर्ण' है; इसका गूढ़ (दार्शनिक) अर्थ है ____",
    options: ["अविनाशी / ईश्वर", "जल", "समय", "आकाश"], correct: 0,
    explanation: "'अक्षर' के अर्थ हैं: वर्ण (क, ख, ग...), तथा जिसका क्षरण/नाश न हो: अर्थात् अविनाशी/ब्रह्म/ईश्वर। गीता में 'अक्षर' ब्रह्म के अर्थ में प्रयुक्त है।",
  },
  {
    id: "an-p-08", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'हल' शब्द का एक अर्थ 'खेत जोतने का यंत्र' है; इसका दूसरा अर्थ है ____",
    options: ["समाधान", "जल", "पर्वत", "रंग"], correct: 0,
    explanation: "'हल' के अर्थ हैं: कृषि-यंत्र (हल), तथा समाधान/उत्तर (जैसे 'प्रश्न का हल')। व्याकरण में बिना स्वर वाले व्यंजन को भी 'हल्' कहते हैं।",
  },
  {
    id: "an-p-09", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'कुल' शब्द के अर्थों में सम्मिलित नहीं है ____",
    options: ["अग्नि", "वंश", "समस्त/सब", "किनारा"], correct: 0,
    explanation: "'कुल' के अर्थ हैं: वंश/परिवार, समस्त/सब (कुल जोड़), तथा किनारा/तट (जैसे 'कालिंदी कूल')। 'अग्नि' इसका अर्थ नहीं।",
  },
  {
    id: "an-p-10", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'मान' शब्द के अर्थों में सम्मिलित नहीं है ____",
    options: ["जल", "आदर/सम्मान", "घमंड", "माप/परिमाण"], correct: 0,
    explanation: "'मान' के अर्थ हैं: आदर/सम्मान, घमंड/अभिमान, तथा माप/परिमाण (जैसे 'मान-चित्र' में मापक)। नायिका-भेद में रूठना भी 'मान' कहलाता है। 'जल' इसका अर्थ नहीं।",
  },
  {
    id: "an-p-11", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'हरि' के अर्थों में सम्मिलित नहीं है ____",
    options: ["पर्वत", "इंद्र", "बंदर", "साँप"], correct: 0,
    explanation: "'हरि' के अनेक अर्थ हैं: विष्णु, इंद्र, सूर्य, सिंह, बंदर, साँप, मेंढक, घोड़ा। 'पर्वत' इसके अर्थों में नहीं है। यह हिंदी का सर्वाधिक अनेकार्थी शब्दों में से एक है।",
  },
  {
    id: "an-p-12", section: "hindi", topic: "अनेकार्थी", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'वर्ण' शब्द के अर्थों में सम्मिलित नहीं है ____",
    options: ["समय", "अक्षर", "रंग", "जाति"], correct: 0,
    explanation: "'वर्ण' के अर्थ हैं: अक्षर (वर्णमाला), रंग (वर्ण-विन्यास), तथा जाति/वर्ग (वर्ण-व्यवस्था)। 'समय' इसका अर्थ नहीं (वह 'काल' है)।",
  },
];
