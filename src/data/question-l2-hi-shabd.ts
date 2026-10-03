/**
 * Hindi, शब्द-भंडार व मुहावरे-लोकोक्तियाँ, LEVEL 2 / Upper-Primary
 * (topics: "पर्यायवाची", "विलोम", "अनेकार्थी", "मुहावरे", "लोकोक्तियाँ"; examLevel: "l2").
 *
 * section: "hindi", examLevel: "l2" → served ONLY to UPESSC Level-2 Language (Hindi) stream.
 * The L2 day filters {topics: [...these five...]}, so this one bank carries all five topic tags.
 *   • beginner, सामान्य पर्यायवाची/विलोम/अर्थ।
 *   • proficient, कठिन शब्द व मुहावरे-लोकोक्तियों के अर्थ।
 *
 * Each answer carries a short Hindi explanation.
 */
import type { Question } from "./questions";

export const l2ShabdBank: Question[] = [
  // ==================================================== BEGINNER, पर्यायवाची
  {
    id: "lsh-b-01", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'सूर्य' का पर्यायवाची है ____",
    options: ["दिनकर", "निशाकर", "सुधाकर", "राकेश"], correct: 0,
    explanation: "'दिनकर' सूर्य का पर्यायवाची है; निशाकर/सुधाकर/राकेश चंद्रमा के पर्याय हैं।",
  },
  {
    id: "lsh-b-02", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'चंद्रमा' का पर्यायवाची है ____",
    options: ["राकेश", "दिनकर", "भास्कर", "दिवाकर"], correct: 0,
    explanation: "'राकेश' चंद्रमा का पर्यायवाची है; शेष सूर्य के पर्याय हैं।",
  },
  {
    id: "lsh-b-03", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'जल' का पर्यायवाची है ____",
    options: ["नीर", "अनल", "पवन", "गगन"], correct: 0,
    explanation: "'नीर' जल का पर्यायवाची है (अनल=आग, पवन=हवा, गगन=आकाश)।",
  },
  {
    id: "lsh-b-04", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आकाश' का पर्यायवाची है ____",
    options: ["गगन", "नीर", "धरा", "अनल"], correct: 0,
    explanation: "'गगन' आकाश का पर्यायवाची है (अंबर, नभ, व्योम भी)।",
  },
  {
    id: "lsh-b-05", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'पृथ्वी' का पर्यायवाची है ____",
    options: ["धरा", "गगन", "अनिल", "सलिल"], correct: 0,
    explanation: "'धरा' पृथ्वी का पर्यायवाची है (वसुधा, भूमि, धरती भी)।",
  },
  {
    id: "lsh-b-06", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'अग्नि' का पर्यायवाची है ____",
    options: ["अनल", "अनिल", "सलिल", "नीर"], correct: 0,
    explanation: "'अनल' अग्नि का पर्यायवाची है; 'अनिल' का अर्थ वायु है: ध्यान दें।",
  },
  {
    id: "lsh-b-07", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'हवा' का पर्यायवाची है ____",
    options: ["अनिल", "अनल", "सलिल", "गगन"], correct: 0,
    explanation: "'अनिल' हवा/वायु का पर्यायवाची है (पवन, समीर, वात भी)।",
  },
  {
    id: "lsh-b-08", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'नदी' का पर्यायवाची है ____",
    options: ["सरिता", "सलिल", "तरु", "विहग"], correct: 0,
    explanation: "'सरिता' नदी का पर्यायवाची है (तटिनी, नद, आपगा भी)।",
  },
  {
    id: "lsh-b-09", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'पक्षी' का पर्यायवाची है ____",
    options: ["विहग", "तरु", "सरिता", "अनल"], correct: 0,
    explanation: "'विहग' पक्षी का पर्यायवाची है (खग, विहंग, पखेरू भी)।",
  },
  {
    id: "lsh-b-10", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'वृक्ष' का पर्यायवाची है ____",
    options: ["तरु", "विहग", "सरिता", "अनिल"], correct: 0,
    explanation: "'तरु' वृक्ष का पर्यायवाची है (पेड़, विटप, द्रुम भी)।",
  },

  // ==================================================== BEGINNER, विलोम
  {
    id: "lsh-b-11", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आदि' का विलोम है ____",
    options: ["अंत", "मध्य", "आरंभ", "प्रारंभ"], correct: 0,
    explanation: "'आदि' (आरंभ) का विलोम 'अंत' है।",
  },
  {
    id: "lsh-b-12", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'ज्ञान' का विलोम है ____",
    options: ["अज्ञान", "विज्ञान", "सुज्ञान", "प्रज्ञान"], correct: 0,
    explanation: "'ज्ञान' का विलोम 'अज्ञान' है।",
  },
  {
    id: "lsh-b-13", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आय' का विलोम है ____",
    options: ["व्यय", "बचत", "लाभ", "हानि"], correct: 0,
    explanation: "'आय' (आमदनी) का विलोम 'व्यय' (खर्च) है।",
  },
  {
    id: "lsh-b-14", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'सजीव' का विलोम है ____",
    options: ["निर्जीव", "जीवित", "जीव", "प्राणी"], correct: 0,
    explanation: "'सजीव' का विलोम 'निर्जीव' है।",
  },
  {
    id: "lsh-b-15", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'उन्नति' का विलोम है ____",
    options: ["अवनति", "प्रगति", "विकास", "वृद्धि"], correct: 0,
    explanation: "'उन्नति' का विलोम 'अवनति' है।",
  },
  {
    id: "lsh-b-16", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आस्तिक' का विलोम है ____",
    options: ["नास्तिक", "धार्मिक", "श्रद्धालु", "भक्त"], correct: 0,
    explanation: "'आस्तिक' (ईश्वर में विश्वास करने वाला) का विलोम 'नास्तिक' है।",
  },
  {
    id: "lsh-b-17", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'सुगम' का विलोम है ____",
    options: ["दुर्गम", "सरल", "सुलभ", "आसान"], correct: 0,
    explanation: "'सुगम' (आसान) का विलोम 'दुर्गम' (कठिन) है।",
  },
  {
    id: "lsh-b-18", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'स्वदेश' का विलोम है ____",
    options: ["विदेश", "प्रदेश", "देश", "परदेश"], correct: 0,
    explanation: "'स्वदेश' का विलोम 'विदेश' है।",
  },
  {
    id: "lsh-b-19", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आकर्षण' का विलोम है ____",
    options: ["विकर्षण", "खिंचाव", "लगाव", "मोह"], correct: 0,
    explanation: "'आकर्षण' का विलोम 'विकर्षण' है।",
  },
  {
    id: "lsh-b-20", section: "hindi", topic: "विलोम", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'शुभ' का विलोम है ____",
    options: ["अशुभ", "मंगल", "कल्याण", "हित"], correct: 0,
    explanation: "'शुभ' का विलोम 'अशुभ' है।",
  },

  // ==================================================== BEGINNER, अनेकार्थी
  {
    id: "lsh-b-21", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'कर' शब्द का एक अर्थ 'हाथ' है; इसका दूसरा अर्थ है ____",
    options: ["टैक्स (राजस्व)", "पैर", "आँख", "सिर"], correct: 0,
    explanation: "'कर' के अनेक अर्थ हैं: हाथ, टैक्स/कर, सूर्य/चंद्र की किरण।",
  },
  {
    id: "lsh-b-22", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'हरि' शब्द का एक अर्थ है ____",
    options: ["विष्णु", "जल", "पर्वत", "वृक्ष"], correct: 0,
    explanation: "'हरि' के अनेक अर्थ हैं: विष्णु, इंद्र, सिंह, सूर्य, बंदर आदि।",
  },
  {
    id: "lsh-b-23", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'अंबर' शब्द का एक अर्थ 'आकाश' है; इसका दूसरा अर्थ है ____",
    options: ["वस्त्र", "जल", "अग्नि", "पर्वत"], correct: 0,
    explanation: "'अंबर' के दो अर्थ हैं: आकाश तथा वस्त्र।",
  },
  {
    id: "lsh-b-24", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'पत्र' शब्द का एक अर्थ 'चिट्ठी' है; इसका दूसरा अर्थ है ____",
    options: ["पत्ता", "जल", "पर्वत", "नदी"], correct: 0,
    explanation: "'पत्र' के अर्थ हैं: चिट्ठी, पत्ता तथा पंख।",
  },
  {
    id: "lsh-b-25", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'नग' शब्द का एक अर्थ 'पर्वत' है; इसका दूसरा अर्थ है ____",
    options: ["रत्न", "जल", "पक्षी", "वस्त्र"], correct: 0,
    explanation: "'नग' के अर्थ हैं: पर्वत तथा रत्न (नगीना)।",
  },

  // ==================================================== BEGINNER, मुहावरे
  {
    id: "lsh-b-26", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आँखों का तारा' मुहावरे का अर्थ है ____",
    options: ["बहुत प्यारा", "आँख का रोग", "चमकीली आँख", "दूर की वस्तु"], correct: 0,
    explanation: "'आँखों का तारा' = बहुत प्यारा/दुलारा।",
  },
  {
    id: "lsh-b-27", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'नाक में दम करना' मुहावरे का अर्थ है ____",
    options: ["बहुत परेशान करना", "नाक साफ करना", "सर्दी होना", "गुस्सा होना"], correct: 0,
    explanation: "'नाक में दम करना' = बहुत तंग/परेशान करना।",
  },
  {
    id: "lsh-b-28", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'अंगूठा दिखाना' मुहावरे का अर्थ है ____",
    options: ["साफ इनकार करना", "अंगूठा उठाना", "शाबाशी देना", "संकेत करना"], correct: 0,
    explanation: "'अंगूठा दिखाना' = समय पर साफ इनकार कर देना/धोखा देना।",
  },
  {
    id: "lsh-b-29", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'हाथ मलना' मुहावरे का अर्थ है ____",
    options: ["पछताना", "हाथ धोना", "काम करना", "खुश होना"], correct: 0,
    explanation: "'हाथ मलना' = पछताना/अफसोस करना।",
  },
  {
    id: "lsh-b-30", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'ईद का चाँद होना' मुहावरे का अर्थ है ____",
    options: ["बहुत दिनों बाद दिखाई देना", "बहुत सुंदर होना", "त्योहार मनाना", "खुशी मनाना"], correct: 0,
    explanation: "'ईद का चाँद होना' = बहुत दिनों बाद दिखाई देना।",
  },
  {
    id: "lsh-b-31", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'नौ दो ग्यारह होना' मुहावरे का अर्थ है ____",
    options: ["भाग जाना", "गिनती करना", "इकट्ठा होना", "देर करना"], correct: 0,
    explanation: "'नौ दो ग्यारह होना' = भाग जाना/चंपत हो जाना।",
  },
  {
    id: "lsh-b-32", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'कान भरना' मुहावरे का अर्थ है ____",
    options: ["चुगली करना", "कान साफ करना", "सुनना", "शोर करना"], correct: 0,
    explanation: "'कान भरना' = किसी के विरुद्ध चुगली/भड़काना।",
  },
  {
    id: "lsh-b-33", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आग बबूला होना' मुहावरे का अर्थ है ____",
    options: ["बहुत क्रोधित होना", "आग लगाना", "गरम होना", "जल जाना"], correct: 0,
    explanation: "'आग बबूला होना' = अत्यधिक क्रोधित हो जाना।",
  },
  {
    id: "lsh-b-34", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'दाल न गलना' मुहावरे का अर्थ है ____",
    options: ["सफल न होना", "दाल पकाना", "भूखा रहना", "देर होना"], correct: 0,
    explanation: "'दाल न गलना' = किसी की युक्ति/चाल सफल न होना।",
  },
  {
    id: "lsh-b-35", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'लोहे के चने चबाना' मुहावरे का अर्थ है ____",
    options: ["बहुत कठिन काम करना", "चने खाना", "मजबूत होना", "गुस्सा करना"], correct: 0,
    explanation: "'लोहे के चने चबाना' = बहुत कठिन/असंभव-सा काम करना।",
  },
  {
    id: "lsh-b-36", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'श्रीगणेश करना' मुहावरे का अर्थ है ____",
    options: ["आरंभ करना", "पूजा करना", "समाप्त करना", "नाम लेना"], correct: 0,
    explanation: "'श्रीगणेश करना' = किसी कार्य का शुभारंभ/शुरुआत करना।",
  },
  {
    id: "lsh-b-37", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'आँखें चुराना' मुहावरे का अर्थ है ____",
    options: ["सामने आने से बचना", "आँख बंद करना", "देखना", "चोरी करना"], correct: 0,
    explanation: "'आँखें चुराना' = सामने आने/मिलने से कतराना।",
  },
  {
    id: "lsh-b-38", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'पेट में चूहे कूदना' मुहावरे का अर्थ है ____",
    options: ["बहुत भूख लगना", "पेट दर्द होना", "डर लगना", "बीमार होना"], correct: 0,
    explanation: "'पेट में चूहे कूदना' = बहुत तेज भूख लगना।",
  },
  {
    id: "lsh-b-39", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'सिर पर पैर रखकर भागना' मुहावरे का अर्थ है ____",
    options: ["बहुत तेज भागना", "गिर जाना", "थक जाना", "छिप जाना"], correct: 0,
    explanation: "'सिर पर पैर रखकर भागना' = बहुत तेजी से भाग जाना।",
  },
  {
    id: "lsh-b-40", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'घी के दिये जलाना' मुहावरे का अर्थ है ____",
    options: ["बहुत खुशी मनाना", "दीपक जलाना", "पूजा करना", "अंधेरा दूर करना"], correct: 0,
    explanation: "'घी के दिये जलाना' = अत्यधिक प्रसन्नता/खुशी मनाना।",
  },

  // ==================================================== BEGINNER, लोकोक्तियाँ
  {
    id: "lsh-b-41", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'अब पछताए होत क्या जब चिड़िया चुग गई खेत' लोकोक्ति का अर्थ है ____",
    options: ["समय बीत जाने पर पछताना व्यर्थ है", "खेती करना कठिन है", "चिड़िया हानिकारक है", "पछतावा अच्छा है"], correct: 0,
    explanation: "इसका अर्थ है: अवसर निकल जाने के बाद पछताने से कोई लाभ नहीं।",
  },
  {
    id: "lsh-b-42", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का अर्थ है ____",
    options: ["काम न आने पर बहाना बनाना", "आँगन खराब होना", "नाचना सीखना", "घर टेढ़ा होना"], correct: 0,
    explanation: "इसका अर्थ है: स्वयं काम न आने पर दूसरों/परिस्थिति में दोष निकालना।",
  },
  {
    id: "lsh-b-43", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'अंधों में काना राजा' लोकोक्ति का अर्थ है ____",
    options: ["अज्ञानियों में थोड़ा जानने वाला भी बड़ा", "राजा अंधा होना", "काना व्यक्ति राजा", "सबका अंधा होना"], correct: 0,
    explanation: "इसका अर्थ है: मूर्खों/अज्ञानियों के बीच थोड़ा-सा जानने वाला भी श्रेष्ठ माना जाता है।",
  },
  {
    id: "lsh-b-44", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'दूर के ढोल सुहावने' लोकोक्ति का अर्थ है ____",
    options: ["दूर की वस्तुएँ अच्छी लगना", "ढोल बजाना", "संगीत सुनना", "पास की वस्तु अच्छी"], correct: 0,
    explanation: "इसका अर्थ है: जो चीज दूर से अच्छी लगती है, पास जाने पर वैसी नहीं रहती।",
  },
  {
    id: "lsh-b-45", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'ऊँची दुकान फीका पकवान' लोकोक्ति का अर्थ है ____",
    options: ["नाम बड़ा पर गुण कम", "दुकान ऊँची होना", "पकवान स्वादिष्ट", "महँगा सामान"], correct: 0,
    explanation: "इसका अर्थ है: बाहरी दिखावा अधिक पर वास्तविक गुण/काम कम होना।",
  },
  {
    id: "lsh-b-46", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'एक पंथ दो काज' लोकोक्ति का अर्थ है ____",
    options: ["एक काम में दो लाभ", "दो रास्ते चुनना", "दो काम बिगड़ना", "मार्ग भटकना"], correct: 0,
    explanation: "इसका अर्थ है: एक ही प्रयास/कार्य से दो लाभ प्राप्त होना।",
  },
  {
    id: "lsh-b-47", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'जैसी करनी वैसी भरनी' लोकोक्ति का अर्थ है ____",
    options: ["कर्म के अनुसार फल मिलना", "मेहनत करना", "पानी भरना", "काम बिगड़ना"], correct: 0,
    explanation: "इसका अर्थ है: जैसा कर्म करोगे वैसा ही फल भोगना पड़ेगा।",
  },
  {
    id: "lsh-b-48", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'का वर्षा जब कृषि सुखाने' लोकोक्ति का अर्थ है ____",
    options: ["अवसर निकल जाने पर सहायता व्यर्थ", "वर्षा का महत्त्व", "खेती करना", "समय पर काम"], correct: 0,
    explanation: "इसका अर्थ है: उचित समय बीत जाने के बाद की गई सहायता व्यर्थ होती है।",
  },
  {
    id: "lsh-b-49", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'हाथी के दाँत खाने के और दिखाने के और' लोकोक्ति का अर्थ है ____",
    options: ["कथनी और करनी में अंतर", "हाथी के दो दाँत", "दिखावा करना", "दाँत बड़े होना"], correct: 0,
    explanation: "इसका अर्थ है: कहने और करने में भारी अंतर होना (दिखावा और वास्तविकता अलग)।",
  },
  {
    id: "lsh-b-50", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "beginner", difficulty: "medium",
    stem: "'चोर की दाढ़ी में तिनका' लोकोक्ति का अर्थ है ____",
    options: ["अपराधी का स्वयं प्रकट हो जाना", "दाढ़ी में तिनका होना", "चोरी करना", "छिपना"], correct: 0,
    explanation: "इसका अर्थ है: दोषी व्यक्ति का व्यवहार से स्वयं प्रकट हो जाना।",
  },

  // ==================================================== PROFICIENT
  {
    id: "lsh-p-01", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "निम्न में से 'कमल' का पर्यायवाची नहीं है ____",
    options: ["अनल", "पंकज", "नीरज", "जलज"], correct: 0,
    explanation: "'अनल' का अर्थ आग है: यह कमल का पर्याय नहीं। पंकज/नीरज/जलज कमल के पर्याय हैं।",
  },
  {
    id: "lsh-p-02", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'सिंह' का पर्यायवाची है ____",
    options: ["केसरी", "कुंजर", "विहग", "सरिता"], correct: 0,
    explanation: "'केसरी' सिंह का पर्यायवाची है (मृगराज, शार्दूल भी); कुंजर=हाथी।",
  },
  {
    id: "lsh-p-03", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'हाथी' का पर्यायवाची है ____",
    options: ["कुंजर", "केसरी", "तुरंग", "विहग"], correct: 0,
    explanation: "'कुंजर' हाथी का पर्यायवाची है (गज, हस्ती, मतंग भी); तुरंग=घोड़ा।",
  },
  {
    id: "lsh-p-04", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'घोड़ा' का पर्यायवाची है ____",
    options: ["तुरंग", "कुंजर", "केसरी", "विहग"], correct: 0,
    explanation: "'तुरंग' घोड़े का पर्यायवाची है (अश्व, हय, वाजि भी)।",
  },
  {
    id: "lsh-p-05", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'समुद्र' का पर्यायवाची है ____",
    options: ["सागर", "सरिता", "सलिल", "तटिनी"], correct: 0,
    explanation: "'सागर' समुद्र का पर्यायवाची है (जलधि, रत्नाकर, पयोधि भी); सरिता/तटिनी=नदी।",
  },
  {
    id: "lsh-p-06", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'रात' का पर्यायवाची है ____",
    options: ["निशा", "दिवा", "प्रभात", "उषा"], correct: 0,
    explanation: "'निशा' रात का पर्यायवाची है (रजनी, यामिनी, विभावरी भी); दिवा=दिन।",
  },
  {
    id: "lsh-p-07", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'स्त्री' का पर्यायवाची है ____",
    options: ["वनिता", "तनुज", "सुत", "तनय"], correct: 0,
    explanation: "'वनिता' स्त्री का पर्यायवाची है (नारी, महिला, कामिनी भी); तनुज/सुत/तनय=पुत्र।",
  },
  {
    id: "lsh-p-08", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'पुत्र' का पर्यायवाची है ____",
    options: ["तनय", "वनिता", "तनया", "दुहिता"], correct: 0,
    explanation: "'तनय' पुत्र का पर्यायवाची है (सुत, आत्मज भी); तनया/दुहिता=पुत्री।",
  },
  {
    id: "lsh-p-09", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'उत्कर्ष' का विलोम है ____",
    options: ["अपकर्ष", "अवकर्ष", "विकर्ष", "प्रकर्ष"], correct: 0,
    explanation: "'उत्कर्ष' (उन्नति/चढ़ाव) का विलोम 'अपकर्ष' (पतन) है।",
  },
  {
    id: "lsh-p-10", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'संयोग' का विलोम है ____",
    options: ["वियोग", "अयोग", "प्रयोग", "उपयोग"], correct: 0,
    explanation: "'संयोग' (मिलन) का विलोम 'वियोग' (बिछड़ना) है।",
  },
  {
    id: "lsh-p-11", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'आविर्भाव' का विलोम है ____",
    options: ["तिरोभाव", "प्रादुर्भाव", "स्वभाव", "अभाव"], correct: 0,
    explanation: "'आविर्भाव' (प्रकट होना) का विलोम 'तिरोभाव' (लुप्त होना) है।",
  },
  {
    id: "lsh-p-12", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'ग्राह्य' का विलोम है ____",
    options: ["त्याज्य", "स्वीकार्य", "अग्राह्य", "देय"], correct: 0,
    explanation: "'ग्राह्य' (ग्रहण करने योग्य) का विलोम 'त्याज्य' (त्याग करने योग्य) है।",
  },
  {
    id: "lsh-p-13", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अनुराग' का विलोम है ____",
    options: ["विराग", "प्रेम", "स्नेह", "मोह"], correct: 0,
    explanation: "'अनुराग' (प्रेम) का विलोम 'विराग' (वैराग्य/उदासीनता) है।",
  },
  {
    id: "lsh-p-14", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'सृष्टि' का विलोम है ____",
    options: ["प्रलय", "रचना", "निर्माण", "उत्पत्ति"], correct: 0,
    explanation: "'सृष्टि' (रचना) का विलोम 'प्रलय' (विनाश) है।",
  },
  {
    id: "lsh-p-15", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'काल' शब्द के अर्थ हैं ____",
    options: ["समय, मृत्यु, यमराज", "जल, अग्नि, वायु", "पर्वत, नदी, वृक्ष", "सोना, चाँदी, ताँबा"], correct: 0,
    explanation: "'काल' के अनेक अर्थ हैं: समय, मृत्यु, यमराज तथा अकाल।",
  },
  {
    id: "lsh-p-16", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'गुरु' शब्द के अर्थ हैं ____",
    options: ["शिक्षक, भारी, बृहस्पति", "जल, वायु, अग्नि", "पर्वत, नदी, वन", "राजा, रानी, मंत्री"], correct: 0,
    explanation: "'गुरु' के अर्थ हैं: शिक्षक/आचार्य, भारी (वजनी) तथा बृहस्पति ग्रह।",
  },
  {
    id: "lsh-p-17", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'वर्ण' शब्द के अर्थ हैं ____",
    options: ["अक्षर, रंग, जाति", "जल, अग्नि, वायु", "पर्वत, नदी, वन", "सूर्य, चंद्र, तारा"], correct: 0,
    explanation: "'वर्ण' के अर्थ हैं: अक्षर, रंग तथा वर्ण/जाति।",
  },
  {
    id: "lsh-p-18", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अर्थ' शब्द के अर्थ हैं ____",
    options: ["मतलब, धन, प्रयोजन", "जल, वायु, अग्नि", "सूर्य, चंद्र, तारा", "पर्वत, नदी, वन"], correct: 0,
    explanation: "'अर्थ' के अर्थ हैं: मतलब/अभिप्राय, धन (संपत्ति) तथा प्रयोजन।",
  },
  {
    id: "lsh-p-19", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'तीर' शब्द के अर्थ हैं ____",
    options: ["बाण, किनारा", "जल, अग्नि", "पर्वत, नदी", "सोना, चाँदी"], correct: 0,
    explanation: "'तीर' के दो अर्थ हैं: बाण (शर) तथा किनारा (तट)।",
  },
  {
    id: "lsh-p-20", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'मधु' शब्द के अर्थ हैं ____",
    options: ["शहद, वसंत ऋतु, मदिरा", "जल, वायु, अग्नि", "पर्वत, नदी, वन", "सूर्य, चंद्र, तारा"], correct: 0,
    explanation: "'मधु' के अर्थ हैं: शहद, वसंत ऋतु (मधुमास) तथा मदिरा।",
  },
  {
    id: "lsh-p-21", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'आस्तीन का साँप' मुहावरे का अर्थ है ____",
    options: ["विश्वासघाती मित्र", "पालतू साँप", "छिपा हुआ धन", "डरपोक व्यक्ति"], correct: 0,
    explanation: "'आस्तीन का साँप' = पास रहकर धोखा देने वाला विश्वासघाती व्यक्ति।",
  },
  {
    id: "lsh-p-22", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'गागर में सागर भरना' मुहावरे का अर्थ है ____",
    options: ["थोड़े में बहुत कहना", "गागर भरना", "समुद्र नापना", "पानी भरना"], correct: 0,
    explanation: "'गागर में सागर भरना' = थोड़े शब्दों में गहरी/बड़ी बात कह देना।",
  },
  {
    id: "lsh-p-23", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'टेढ़ी खीर' मुहावरे का अर्थ है ____",
    options: ["कठिन कार्य", "मीठी खीर", "आसान काम", "स्वादिष्ट भोजन"], correct: 0,
    explanation: "'टेढ़ी खीर' = बहुत कठिन/जटिल कार्य।",
  },
  {
    id: "lsh-p-24", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अपना उल्लू सीधा करना' मुहावरे का अर्थ है ____",
    options: ["स्वार्थ सिद्ध करना", "उल्लू पालना", "मूर्ख बनाना", "रात में जागना"], correct: 0,
    explanation: "'अपना उल्लू सीधा करना' = अपना स्वार्थ पूरा करना।",
  },
  {
    id: "lsh-p-25", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'नाक कटना' मुहावरे का अर्थ है ____",
    options: ["इज्जत जाना", "नाक में चोट", "बीमार होना", "क्रोधित होना"], correct: 0,
    explanation: "'नाक कटना' = प्रतिष्ठा/इज्जत का नष्ट हो जाना।",
  },
  {
    id: "lsh-p-26", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'आकाश-पाताल एक करना' मुहावरे का अर्थ है ____",
    options: ["बहुत अधिक परिश्रम करना", "आकाश देखना", "गहराई नापना", "यात्रा करना"], correct: 0,
    explanation: "'आकाश-पाताल एक करना' = किसी काम के लिए बहुत अधिक प्रयत्न/परिश्रम करना।",
  },
  {
    id: "lsh-p-27", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'चार चाँद लगाना' मुहावरे का अर्थ है ____",
    options: ["शोभा बढ़ाना", "चाँद देखना", "रात होना", "गिनती करना"], correct: 0,
    explanation: "'चार चाँद लगाना' = शोभा/सुंदरता में वृद्धि करना।",
  },
  {
    id: "lsh-p-28", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'दाँतों तले उँगली दबाना' मुहावरे का अर्थ है ____",
    options: ["आश्चर्यचकित होना", "दर्द होना", "गुस्सा करना", "भूख लगना"], correct: 0,
    explanation: "'दाँतों तले उँगली दबाना' = अत्यधिक आश्चर्यचकित/हैरान हो जाना।",
  },
  {
    id: "lsh-p-29", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'तिल का ताड़ बनाना' मुहावरे का अर्थ है ____",
    options: ["छोटी बात को बढ़ा-चढ़ाकर कहना", "पेड़ लगाना", "तिल बोना", "मेहनत करना"], correct: 0,
    explanation: "'तिल का ताड़ बनाना' = छोटी-सी बात को बहुत बड़ा बना देना।",
  },
  {
    id: "lsh-p-30", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अंगारे उगलना' मुहावरे का अर्थ है ____",
    options: ["कठोर/क्रोध भरे वचन कहना", "आग लगाना", "गरम होना", "धुआँ करना"], correct: 0,
    explanation: "'अंगारे उगलना' = क्रोध में कठोर/जलाने वाले वचन कहना।",
  },
  {
    id: "lsh-p-31", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'घाट-घाट का पानी पीना' मुहावरे का अर्थ है ____",
    options: ["बहुत अनुभवी होना", "प्यास लगना", "यात्रा करना", "नदी पार करना"], correct: 0,
    explanation: "'घाट-घाट का पानी पीना' = बहुत अनुभवी व दुनियादार होना।",
  },
  {
    id: "lsh-p-32", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'हवा से बातें करना' मुहावरे का अर्थ है ____",
    options: ["बहुत तेज दौड़ना", "बातूनी होना", "अकेले बोलना", "हवा में उड़ना"], correct: 0,
    explanation: "'हवा से बातें करना' = अत्यधिक तेज गति से चलना/दौड़ना।",
  },
  {
    id: "lsh-p-33", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'दूध का दूध पानी का पानी करना' मुहावरे का अर्थ है ____",
    options: ["सही न्याय/निर्णय करना", "दूध छानना", "अलग करना", "पानी मिलाना"], correct: 0,
    explanation: "'दूध का दूध पानी का पानी करना' = निष्पक्ष व सही न्याय/फैसला करना।",
  },
  {
    id: "lsh-p-34", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'कलेजा मुँह को आना' मुहावरे का अर्थ है ____",
    options: ["बहुत घबरा जाना", "बीमार होना", "उल्टी आना", "खुश होना"], correct: 0,
    explanation: "'कलेजा मुँह को आना' = अत्यधिक घबरा/भयभीत हो जाना।",
  },
  {
    id: "lsh-p-35", section: "hindi", topic: "मुहावरे", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'ऊँट के मुँह में जीरा' मुहावरे का अर्थ है ____",
    options: ["आवश्यकता से बहुत कम", "ऊँट को खिलाना", "मसाला डालना", "छोटा मुँह"], correct: 0,
    explanation: "'ऊँट के मुँह में जीरा' = आवश्यकता की तुलना में बहुत थोड़ा।",
  },
  {
    id: "lsh-p-36", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'बंदर क्या जाने अदरक का स्वाद' लोकोक्ति का अर्थ है ____",
    options: ["अयोग्य को गुण की पहचान नहीं", "बंदर अदरक खाता है", "अदरक कड़वी है", "स्वाद न लेना"], correct: 0,
    explanation: "इसका अर्थ है: अयोग्य/अनजान व्यक्ति किसी वस्तु के गुण/महत्त्व को नहीं समझता।",
  },
  {
    id: "lsh-p-37", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'खोदा पहाड़ निकली चुहिया' लोकोक्ति का अर्थ है ____",
    options: ["बहुत परिश्रम पर तुच्छ परिणाम", "पहाड़ खोदना", "चूहा पकड़ना", "बड़ा लाभ"], correct: 0,
    explanation: "इसका अर्थ है: बहुत प्रयास करने पर भी बहुत कम/तुच्छ फल मिलना।",
  },
  {
    id: "lsh-p-38", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अधजल गगरी छलकत जाए' लोकोक्ति का अर्थ है ____",
    options: ["कम गुणी अधिक दिखावा करता है", "गगरी भरना", "पानी गिरना", "पूरा ज्ञान होना"], correct: 0,
    explanation: "इसका अर्थ है: जिसमें गुण/ज्ञान कम हो, वही अधिक दिखावा व शोर करता है।",
  },
  {
    id: "lsh-p-39", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'नौ नकद न तेरह उधार' लोकोक्ति का अर्थ है ____",
    options: ["कम नकद, अधिक उधार से अच्छा", "गिनती करना", "उधार लेना", "अधिक धन"], correct: 0,
    explanation: "इसका अर्थ है: थोड़ा नकद मिलना अधिक उधार के वादे से बेहतर है।",
  },
  {
    id: "lsh-p-40", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'जिसकी लाठी उसकी भैंस' लोकोक्ति का अर्थ है ____",
    options: ["ताकतवर का ही अधिकार चलता है", "भैंस पालना", "लाठी चलाना", "पशु रखना"], correct: 0,
    explanation: "इसका अर्थ है: जो शक्तिशाली/बलवान होता है, अधिकार भी उसी का चलता है।",
  },
  {
    id: "lsh-p-41", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'अपनी करनी पार उतरनी' लोकोक्ति का अर्थ है ____",
    options: ["अपने कर्म का फल स्वयं भोगना", "नाव चलाना", "नदी पार करना", "मेहनत करना"], correct: 0,
    explanation: "इसका अर्थ है: व्यक्ति को अपने ही कर्मों का फल भुगतना पड़ता है।",
  },
  {
    id: "lsh-p-42", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'थोथा चना बाजे घना' लोकोक्ति का अर्थ है ____",
    options: ["गुणहीन का अधिक बखान/शोर", "चना भूनना", "बाजा बजाना", "खाली बर्तन"], correct: 0,
    explanation: "इसका अर्थ है: जिसमें गुण/सार कम हो, वह अधिक बड़बोलापन/शोर करता है।",
  },
  {
    id: "lsh-p-43", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'दूध का जला छाछ भी फूँक-फूँककर पीता है' लोकोक्ति का अर्थ है ____",
    options: ["एक बार धोखा खाकर सतर्क हो जाना", "दूध पीना", "छाछ बनाना", "गरम पीना"], correct: 0,
    explanation: "इसका अर्थ है: एक बार हानि/धोखा उठाकर व्यक्ति अत्यधिक सावधान हो जाता है।",
  },
  {
    id: "lsh-p-44", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'एक हाथ से ताली नहीं बजती' लोकोक्ति का अर्थ है ____",
    options: ["झगड़े में दोनों पक्षों का दोष", "ताली बजाना", "अकेले काम करना", "हाथ मिलाना"], correct: 0,
    explanation: "इसका अर्थ है: किसी झगड़े/विवाद में दोनों पक्षों की भागीदारी/दोष होता है।",
  },
  {
    id: "lsh-p-45", section: "hindi", topic: "लोकोक्तियाँ", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'नाम बड़े और दर्शन छोटे' लोकोक्ति का अर्थ है ____",
    options: ["प्रसिद्धि अधिक पर गुण कम", "नाम रखना", "दर्शन करना", "बड़ा होना"], correct: 0,
    explanation: "इसका अर्थ है: प्रसिद्धि/नाम बहुत पर वास्तविक गुण या काम कम होना।",
  },
  {
    id: "lsh-p-46", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'बादल' का पर्यायवाची है ____",
    options: ["जलद", "तड़ित", "अनल", "तुरंग"], correct: 0,
    explanation: "'जलद' बादल का पर्यायवाची है (मेघ, घन, नीरद, वारिद भी); तड़ित=बिजली।",
  },
  {
    id: "lsh-p-47", section: "hindi", topic: "पर्यायवाची", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'फूल' का पर्यायवाची है ____",
    options: ["सुमन", "जलद", "तुरंग", "कुंजर"], correct: 0,
    explanation: "'सुमन' फूल का पर्यायवाची है (पुष्प, कुसुम, प्रसून भी)।",
  },
  {
    id: "lsh-p-48", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'सौभाग्य' का विलोम है ____",
    options: ["दुर्भाग्य", "भाग्य", "अभाग्य", "विभाग्य"], correct: 0,
    explanation: "'सौभाग्य' का विलोम 'दुर्भाग्य' है।",
  },
  {
    id: "lsh-p-49", section: "hindi", topic: "विलोम", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'निंदा' का विलोम है ____",
    options: ["स्तुति", "आलोचना", "बुराई", "अपमान"], correct: 0,
    explanation: "'निंदा' (बुराई) का विलोम 'स्तुति' (प्रशंसा) है।",
  },
  {
    id: "lsh-p-50", section: "hindi", topic: "अनेकार्थी", examLevel: "l2", level: "proficient", difficulty: "hard",
    stem: "'पद' शब्द के अर्थ हैं ____",
    options: ["पैर, ओहदा, कविता का चरण", "जल, वायु, अग्नि", "सूर्य, चंद्र, तारा", "पर्वत, नदी, वन"], correct: 0,
    explanation: "'पद' के अर्थ हैं: पैर, ओहदा/पदवी तथा कविता का चरण (पद्यांश)।",
  },
];
