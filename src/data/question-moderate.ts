import type { Question } from "./questions";

/**
 * Moderate-difficulty practice questions (generated, reviewed batches) that keep every
 * Beginner set at 50 questions once easy items were dropped. Bilingual: Hindi/Sanskrit
 * items are written in Hindi; other sections carry a Hindi version in `moderateHi`.
 */
export const moderateBank: Question[] = [
  {
    "id": "modA-1",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'सप्तर्षि' शब्द में कौन-सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "गुण संधि",
      "वृद्धि संधि",
      "यण् संधि"
    ],
    "correct": 1,
    "explanation": "सप्त + ऋषि = सप्तर्षि; अ + ऋ = अर् होने से यह गुण संधि का उदाहरण है, दीर्घ संधि नहीं (परीक्षा में यह भ्रम आम है)।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-2",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'राजर्षि' का सही संधि-विच्छेद है ____",
    "options": [
      "राज + ऋषि",
      "राजा + ऋषि",
      "राज + रिषि",
      "राजन् + ऋषि"
    ],
    "correct": 0,
    "explanation": "राज (ह्रस्व अ-अंत) + ऋषि मिलकर अ+ऋ=अर् से 'राजर्षि' बनता है; 'राजा' का दीर्घ आ यहाँ नहीं लिया जाता।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-3",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'अत्यावश्यक' शब्द में कौन-सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "वृद्धि संधि",
      "यण् संधि",
      "अयादि संधि"
    ],
    "correct": 2,
    "explanation": "अति + आवश्यक में इ के बाद असमान स्वर आ आने से इ, य् में बदल जाता है (इ+आ=य्+आ), यह यण् संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-4",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'न्यून' का सही संधि-विच्छेद है ____",
    "options": [
      "नि + ऊन",
      "न्यू + ऊन",
      "नी + ऊन",
      "नि + ऊना"
    ],
    "correct": 0,
    "explanation": "नि + ऊन में इ के बाद असमान स्वर ऊ आने से इ का य् हो जाता है, अतः 'न्यून' यण् संधि का उदाहरण है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-5",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'नायक' शब्द में कौन-सी संधि है?",
    "options": [
      "गुण संधि",
      "वृद्धि संधि",
      "यण् संधि",
      "अयादि संधि"
    ],
    "correct": 3,
    "explanation": "नै + अक में ऐ के बाद स्वर आने से ऐ का आय् हो जाता है (ऐ+अ=आय्+अ); यह अयादि संधि का नियम है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-6",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'सदाचार' का सही संधि-विच्छेद है ____",
    "options": [
      "सत् + आचार",
      "सद् + आचार",
      "सदा + चार",
      "सत् + अचार"
    ],
    "correct": 0,
    "explanation": "सत् के बाद स्वर 'आचार' आने से त् का द् हो जाता है (व्यंजन संधि), मूल पद 'सत्' ही है, 'सद्' नहीं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-7",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'यशोगान' शब्द में कौन-सी संधि है?",
    "options": [
      "स्वर संधि",
      "व्यंजन संधि",
      "विसर्ग संधि",
      "गुण संधि"
    ],
    "correct": 2,
    "explanation": "यशः + गान में विसर्ग के बाद घोष व्यंजन 'ग' आने से विसर्ग का 'ओ' हो जाता है; यह विसर्ग संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-8",
    "section": "hindi",
    "topic": "संधि",
    "stem": "स्वर संधि के कुल कितने भेद माने गए हैं?",
    "options": [
      "तीन",
      "चार",
      "पाँच",
      "छह"
    ],
    "correct": 2,
    "explanation": "स्वर संधि के पाँच भेद हैं: दीर्घ, गुण, वृद्धि, यण् और अयादि संधि।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-9",
    "section": "hindi",
    "topic": "संधि",
    "stem": "व्यंजन संधि में परिवर्तन सामान्यतः किस स्थिति में होता है?",
    "options": [
      "जब दो स्वर परस्पर मिलते हैं",
      "जब व्यंजन के साथ स्वर या व्यंजन मिलने से पहले वर्ण में परिवर्तन आता है",
      "जब विसर्ग के बाद कोई स्वर आता है",
      "जब शब्द के अंत में अनुस्वार आता है"
    ],
    "correct": 1,
    "explanation": "व्यंजन संधि में व्यंजन के बाद स्वर या व्यंजन आने पर पहले व्यंजन में ध्वनि-परिवर्तन (जैसे त्→द्) होता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-10",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'नरोत्तम' शब्द में कौन-सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "गुण संधि",
      "वृद्धि संधि",
      "यण् संधि"
    ],
    "correct": 1,
    "explanation": "नर + उत्तम में अ + उ = ओ होने से 'नरोत्तम' बनता है; यह गुण संधि का नियम है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-11",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'श्रवण' का सही संधि-विच्छेद है ____",
    "options": [
      "श्रु + अन",
      "श्र + वन",
      "श्रव + अण",
      "श्रो + अन"
    ],
    "correct": 0,
    "explanation": "श्रु + अन में उ के बाद असमान स्वर अ आने से उ का व् हो जाता है (यण् संधि), जिससे 'श्रवण' बनता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-12",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'पावक' शब्द में कौन-सी संधि है?",
    "options": [
      "गुण संधि",
      "वृद्धि संधि",
      "यण् संधि",
      "अयादि संधि"
    ],
    "correct": 3,
    "explanation": "पौ + अक में औ के बाद स्वर आने से औ का आव् हो जाता है (औ+अ=आव्+अ); यह अयादि संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-13",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'गंगोदक' का सही संधि-विच्छेद है ____",
    "options": [
      "गंगा + उदक",
      "गंग + उदक",
      "गंगो + दक",
      "गंगा + दक"
    ],
    "correct": 0,
    "explanation": "गंगा + उदक में आ + उ = ओ होने से 'गंगोदक' बनता है; यह गुण संधि का उदाहरण है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-14",
    "section": "hindi",
    "topic": "संधि",
    "stem": "गुण संधि के नियम के अनुसार 'अ/आ + इ/ई' का मेल किसमें बदलता है?",
    "options": [
      "आ में",
      "ए में",
      "ऐ में",
      "अर् में"
    ],
    "correct": 1,
    "explanation": "गुण संधि नियमानुसार अ/आ के बाद इ/ई आने पर दोनों मिलकर 'ए' बनाते हैं, जैसे देव+इंद्र=देवेंद्र।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-15",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'हिमांशु' शब्द में कौन-सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "गुण संधि",
      "वृद्धि संधि",
      "व्यंजन संधि"
    ],
    "correct": 0,
    "explanation": "हिम + अंशु में अ + अं (अ) = आं होने से 'हिमांशु' बनता है; समान स्वरों के दीर्घ हो जाने से यह दीर्घ संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-16",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'नमस्ते' शब्द में कौन-सी संधि है?",
    "options": [
      "स्वर संधि",
      "व्यंजन संधि",
      "विसर्ग संधि",
      "गुण संधि"
    ],
    "correct": 2,
    "explanation": "नमः + ते में विसर्ग के बाद 'त' वर्ण आने से विसर्ग 'स्' में बदल जाता है; यह विसर्ग संधि का उदाहरण है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-17",
    "section": "hindi",
    "topic": "संधि",
    "stem": "यण् संधि के नियम में ऋ के बाद असमान स्वर आने पर ऋ किस वर्ण में बदल जाता है?",
    "options": [
      "य्",
      "व्",
      "र्",
      "अर्"
    ],
    "correct": 2,
    "explanation": "यण् संधि में ह्रस्व/दीर्घ ऋ के बाद असमान स्वर आने पर ऋ, र् में बदल जाता है, जैसे पितृ+आज्ञा=पित्राज्ञा।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-18",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'तथैव' शब्द में कौन-सी संधि है?",
    "options": [
      "दीर्घ संधि",
      "गुण संधि",
      "वृद्धि संधि",
      "यण् संधि"
    ],
    "correct": 2,
    "explanation": "तथा + एव में आ + ए = ऐ होने से 'तथैव' बनता है (आ/अ + ए/ऐ = ऐ); यह वृद्धि संधि का नियम है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-19",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'उन्नयन' शब्द में प्रयुक्त संधि है ____",
    "options": [
      "स्वर संधि",
      "व्यंजन संधि",
      "विसर्ग संधि",
      "यण् संधि"
    ],
    "correct": 1,
    "explanation": "उत् + नयन में त् के बाद अनुनासिक 'न' आने से त् स्वयं अनुनासिक न् में बदल जाता है; यह व्यंजन संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-20",
    "section": "hindi",
    "topic": "संधि",
    "stem": "संधि से बने शब्द को पुनः उसके मूल शब्दों में अलग करने की प्रक्रिया कहलाती है ____",
    "options": [
      "संधि",
      "संधि-विच्छेद",
      "समास",
      "विग्रह"
    ],
    "correct": 1,
    "explanation": "दो वर्णों के मेल से बने शब्द को मूल रूप में अलग-अलग दिखाना संधि-विच्छेद कहलाता है; 'विग्रह' शब्द समास के लिए प्रयुक्त होता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-21",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'स्वल्प' का सही संधि-विच्छेद है ____",
    "options": [
      "स्व + अल्प",
      "सु + अल्प",
      "सू + अल्प",
      "स्व + लप"
    ],
    "correct": 1,
    "explanation": "सु + अल्प में उ के बाद असमान स्वर अ आने से उ का व् हो जाता है; अतः 'स्वल्प' यण् संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-22",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'एकैक' शब्द में कौन-सी संधि है?",
    "options": [
      "वृद्धि संधि",
      "दीर्घ संधि",
      "गुण संधि",
      "यण् संधि"
    ],
    "correct": 0,
    "explanation": "एक + एक में अ + ए = ऐ होने से 'एकैक' बनता है; यह वृद्धि संधि है, दीर्घ नहीं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-23",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'शयन' का सही संधि-विच्छेद है ____",
    "options": [
      "शय + न",
      "शै + अन",
      "श + अयन",
      "शे + अन"
    ],
    "correct": 3,
    "explanation": "शे + अन में ए के बाद स्वर अ आने से ए का अय् हो जाता है (अयादि संधि), जिससे 'शयन' बनता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-24",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'वधूत्सव' शब्द में कौन-सी संधि है?",
    "options": [
      "गुण संधि",
      "यण् संधि",
      "दीर्घ संधि",
      "वृद्धि संधि"
    ],
    "correct": 2,
    "explanation": "वधू + उत्सव में ऊ + उ = ऊ होता है; सवर्ण स्वरों के मिलकर दीर्घ होने से यह दीर्घ संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-25",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'मतैक्य' का सही संधि-विच्छेद है ____",
    "options": [
      "मति + ऐक्य",
      "मत + इक्य",
      "मत + ऐक्य",
      "मतै + क्य"
    ],
    "correct": 2,
    "explanation": "मत + ऐक्य में अ + ऐ = ऐ होने से 'मतैक्य' बनता है; यह वृद्धि संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-26",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'उज्ज्वल' का सही संधि-विच्छेद है ____",
    "options": [
      "उज्ज + वल",
      "उज् + ज्वल",
      "उ + ज्ज्वल",
      "उत् + ज्वल"
    ],
    "correct": 3,
    "explanation": "उत् + ज्वल में त् के बाद ज आने पर त् भी ज् बन जाता है (त् + ज = ज्ज); यह व्यंजन संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-27",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'वाङ्मय' का सही संधि-विच्छेद है ____",
    "options": [
      "वाग् + मय",
      "वाक् + मय",
      "वाङ् + मय",
      "वा + ङ्मय"
    ],
    "correct": 1,
    "explanation": "वाक् + मय में वर्ग के पहले वर्ण क् के बाद अनुनासिक म आने से क् अपने वर्ग का पंचम वर्ण ङ् बन जाता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-28",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'निस्संदेह' का सही संधि-विच्छेद है ____",
    "options": [
      "निस् + संदेह",
      "नि + संदेह",
      "निः + संदेह",
      "निर् + संदेह"
    ],
    "correct": 2,
    "explanation": "निः + संदेह में विसर्ग के बाद 'स' आने से विसर्ग 'स्' में बदल जाता है; यह विसर्ग संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-29",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'पुरस्कार' का सही संधि-विच्छेद है ____",
    "options": [
      "पुरः + कार",
      "पुर + स्कार",
      "पुरस् + कार",
      "पुरा + कार"
    ],
    "correct": 0,
    "explanation": "पुरः + कार में विसर्ग अपवादस्वरूप 'स्' बन जाता है (जैसे नमस्कार, तिरस्कार); यह विसर्ग संधि है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modA-30",
    "section": "hindi",
    "topic": "संधि",
    "stem": "'परिच्छेद' का सही संधि-विच्छेद है ____",
    "options": [
      "परि + च्छेद",
      "परिच् + छेद",
      "परि + छेद",
      "पर + इच्छेद"
    ],
    "correct": 2,
    "explanation": "परि + छेद में स्वर के बाद 'छ' आने पर उससे पहले 'च्' जुड़ जाता है (व्यंजन संधि), अतः 'परिच्छेद' बनता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-1",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'बादल' का पर्यायवाची नहीं है?",
    "options": [
      "जलद",
      "नीरद",
      "जलज",
      "पयोद"
    ],
    "correct": 2,
    "explanation": "जलद, नीरद और पयोद (जल देने वाला) बादल के पर्याय हैं; 'जलज' (जल में जन्मा) कमल का पर्याय है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-2",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'शिव' का पर्यायवाची नहीं है?",
    "options": [
      "नीलकंठ",
      "त्रिलोचन",
      "पशुपति",
      "गिरिधर"
    ],
    "correct": 3,
    "explanation": "नीलकंठ, त्रिलोचन और पशुपति शिव के नाम हैं; 'गिरिधर' (पर्वत धारण करने वाले) श्रीकृष्ण का पर्याय है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-3",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "'अनंग' किसका पर्यायवाची है?",
    "options": [
      "कामदेव",
      "शिव",
      "इंद्र",
      "विष्णु"
    ],
    "correct": 0,
    "explanation": "शिव द्वारा भस्म किए जाने के बाद अंगरहित होने से कामदेव 'अनंग' कहलाए; मदन, मनोज, कंदर्प भी इसके पर्याय हैं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-4",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "'पुरंदर' किसका पर्यायवाची है?",
    "options": [
      "कुबेर",
      "इंद्र",
      "सूर्य",
      "यमराज"
    ],
    "correct": 1,
    "explanation": "पुरंदर, सुरेश, शचीपति, देवराज और वासव: ये सभी इंद्र के पर्यायवाची हैं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-5",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'बिजली' का पर्यायवाची नहीं है?",
    "options": [
      "चपला",
      "दामिनी",
      "कौमुदी",
      "तड़ित"
    ],
    "correct": 2,
    "explanation": "चपला, दामिनी, तड़ित, सौदामिनी बिजली के पर्याय हैं; 'कौमुदी' का अर्थ चाँदनी है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-6",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'वृक्ष' का पर्यायवाची नहीं है?",
    "options": [
      "विटप",
      "पादप",
      "विहग",
      "द्रुम"
    ],
    "correct": 2,
    "explanation": "विटप, पादप, द्रुम, तरु वृक्ष के पर्याय हैं; 'विहग' (आकाश में चलने वाला) पक्षी का पर्याय है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-7",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "'शरासन' किसका पर्यायवाची है?",
    "options": [
      "बाण",
      "तरकश",
      "ढाल",
      "धनुष"
    ],
    "correct": 3,
    "explanation": "शर (बाण) जिस पर रखा (आसन) जाए, वह 'शरासन' अर्थात् धनुष है; 'शर' देखकर बाण चुनना सामान्य भूल है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-8",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'घर' का पर्यायवाची नहीं है?",
    "options": [
      "निकुंज",
      "सदन",
      "निकेतन",
      "आलय"
    ],
    "correct": 0,
    "explanation": "सदन, निकेतन, आलय, गृह, निलय घर के पर्याय हैं; 'निकुंज' का अर्थ लताओं से घिरा स्थान (कुंज) है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-9",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "इनमें से कौन-सा शब्द 'सरस्वती' का पर्यायवाची नहीं है?",
    "options": [
      "शारदा",
      "कमला",
      "वीणापाणि",
      "भारती"
    ],
    "correct": 1,
    "explanation": "शारदा, वीणापाणि, भारती, वागीशा सरस्वती के नाम हैं; 'कमला' लक्ष्मी का पर्याय है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modB-10",
    "section": "hindi",
    "topic": "पर्यायवाची",
    "stem": "'चतुरानन' किसका पर्यायवाची है?",
    "options": [
      "शिव",
      "विष्णु",
      "ब्रह्मा",
      "गणेश"
    ],
    "correct": 2,
    "explanation": "चार मुख (आनन) वाले होने से ब्रह्मा 'चतुरानन' कहलाते हैं; विधाता, पितामह, विरंचि भी इनके पर्याय हैं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-1",
    "section": "numerical",
    "topic": "Number system",
    "stem": "The greatest number which divides 245 and 1029, leaving a remainder of 5 in each case, is ____",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "correct": 1,
    "explanation": "Subtract the remainder: HCF(240, 1024) = 16, since 240 = 2⁴ × 15 and 1024 = 2¹⁰.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-2",
    "section": "numerical",
    "topic": "Number system",
    "stem": "How many prime numbers are there between 50 and 100?",
    "options": [
      "9",
      "11",
      "10",
      "12"
    ],
    "correct": 2,
    "explanation": "They are 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, ten primes (51, 57, 87, 91 are composite).",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-3",
    "section": "numerical",
    "topic": "Number system",
    "stem": "The unit digit of 3⁶⁵ × 6⁵⁹ × 7⁷¹ is ____",
    "options": [
      "2",
      "6",
      "8",
      "4"
    ],
    "correct": 3,
    "explanation": "Unit digits: 3⁶⁵ → 3 (65 = 4×16 + 1), 6⁵⁹ → 6, 7⁷¹ → 3 (71 = 4×17 + 3, 7³ = 343); 3 × 6 × 3 = 54, so 4.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-4",
    "section": "numerical",
    "topic": "Number system",
    "stem": "The total number of factors (divisors) of 360 is ____",
    "options": [
      "24",
      "20",
      "18",
      "30"
    ],
    "correct": 0,
    "explanation": "360 = 2³ × 3² × 5, so the number of factors = (3+1)(2+1)(1+1) = 24.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-5",
    "section": "numerical",
    "topic": "Number system",
    "stem": "If the five-digit number 72x46 is divisible by 9, the digit x is ____",
    "options": [
      "5",
      "8",
      "7",
      "9"
    ],
    "correct": 1,
    "explanation": "Digit sum 7 + 2 + 4 + 6 + x = 19 + x must be a multiple of 9; the only digit that works is x = 8 (sum 27).",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-6",
    "section": "numerical",
    "topic": "Number system",
    "stem": "Which of the following numbers is divisible by 11?",
    "options": [
      "3423",
      "72813",
      "4832718",
      "92354"
    ],
    "correct": 2,
    "explanation": "For 4832718, the difference of alternate-digit sums is (8+7+3+4) − (1+2+8) = 11, a multiple of 11; the others give 2, 15 and 9.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-7",
    "section": "numerical",
    "topic": "Number system",
    "stem": "Simplify: 1 + 1/(1 + 1/(1 + 1/2))",
    "options": [
      "5/3",
      "13/8",
      "3/2",
      "8/5"
    ],
    "correct": 3,
    "explanation": "Work from the bottom: 1 + 1/2 = 3/2; 1 + 2/3 = 5/3; 1 + 3/5 = 8/5.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-8",
    "section": "numerical",
    "topic": "Number system",
    "stem": "Three bells ring at intervals of 9, 12 and 15 minutes. If they ring together at 8:00 a.m., when will they next ring together?",
    "options": [
      "11:00 a.m.",
      "10:00 a.m.",
      "10:30 a.m.",
      "11:30 a.m."
    ],
    "correct": 0,
    "explanation": "LCM(9, 12, 15) = 180 minutes = 3 hours, so 8:00 a.m. + 3 h = 11:00 a.m.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-9",
    "section": "numerical",
    "topic": "Number system",
    "stem": "The HCF of the fractions 2/3, 8/9 and 10/27 is ____",
    "options": [
      "2/3",
      "2/27",
      "40/3",
      "1/27"
    ],
    "correct": 1,
    "explanation": "HCF of fractions = HCF of numerators ÷ LCM of denominators = HCF(2, 8, 10)/LCM(3, 9, 27) = 2/27.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modD-10",
    "section": "numerical",
    "topic": "Number system",
    "stem": "How many zeros are there at the end of the product 25 × 40 × 60 × 75?",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "correct": 2,
    "explanation": "Count pairs of 2 and 5: the product has 5⁶ but only 2⁵ (from 40 = 2³×5 and 60 = 2²×3×5), so only 5 zeros, counting the 5s alone gives the trap answer 6.",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-1",
    "section": "hindi",
    "topic": "समास",
    "stem": "'धर्मविमुख' में तत्पुरुष समास का कौन-सा उपभेद है?",
    "options": [
      "करण तत्पुरुष",
      "अपादान तत्पुरुष",
      "संप्रदान तत्पुरुष",
      "अधिकरण तत्पुरुष"
    ],
    "correct": 1,
    "explanation": "विग्रह 'धर्म से विमुख' है; यहाँ 'से' अलग होने (पृथकता) का बोध कराता है, अतः अपादान तत्पुरुष है। 'से' देखकर करण समझना भ्रम है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-2",
    "section": "hindi",
    "topic": "समास",
    "stem": "'दोपहर' में कौन-सा समास है?",
    "options": [
      "अव्ययीभाव",
      "कर्मधारय",
      "द्विगु",
      "द्वंद्व"
    ],
    "correct": 2,
    "explanation": "विग्रह 'दो पहरों का समाहार' है; पूर्वपद संख्यावाचक होने से यह द्विगु समास है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-3",
    "section": "hindi",
    "topic": "समास",
    "stem": "'हाथोंहाथ' में कौन-सा समास है?",
    "options": [
      "तत्पुरुष",
      "द्वंद्व",
      "कर्मधारय",
      "अव्ययीभाव"
    ],
    "correct": 3,
    "explanation": "एक ही शब्द की पुनरावृत्ति से बना यह पद अव्यय (क्रियाविशेषण) की तरह प्रयुक्त होता है, अतः अव्ययीभाव समास है (जैसे घर-घर, दिनोंदिन)।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-4",
    "section": "hindi",
    "topic": "समास",
    "stem": "'परमेश्वर' का सही विग्रह व समास है ____",
    "options": [
      "परम है जो ईश्वर: कर्मधारय",
      "परम और ईश्वर: द्वंद्व",
      "परम का ईश्वर: संबंध तत्पुरुष",
      "परम है ईश्वर जिसका: बहुव्रीहि"
    ],
    "correct": 0,
    "explanation": "'परम' विशेषण और 'ईश्वर' विशेष्य है; विशेषण-विशेष्य संबंध होने से कर्मधारय समास है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-5",
    "section": "hindi",
    "topic": "अलंकार",
    "stem": "'तीन बेर खाती थीं वे, तीन बेर खाती हैं' में कौन-सा अलंकार है?",
    "options": [
      "श्लेष",
      "यमक",
      "अनुप्रास",
      "उपमा"
    ],
    "correct": 1,
    "explanation": "'बेर' शब्द दो बार आया है और दोनों बार अर्थ भिन्न है (बार/समय और बेर फल), अतः यमक अलंकार है। एक ही शब्द एक बार आकर अनेक अर्थ दे तो श्लेष होता।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-6",
    "section": "hindi",
    "topic": "रस",
    "stem": "'श्रीकृष्ण के सुन वचन अर्जुन क्षोभ से जलने लगे। सब शील अपना भूल कर करतल युगल मलने लगे।।' में कौन-सा रस है?",
    "options": [
      "वीर रस",
      "भयानक रस",
      "रौद्र रस",
      "करुण रस"
    ],
    "correct": 2,
    "explanation": "अर्जुन का क्षोभ से जलना और हाथ मलना क्रोध के अनुभाव हैं; क्रोध स्थायी भाव होने से यहाँ रौद्र रस है, वीर (उत्साह) नहीं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-7",
    "section": "hindi",
    "topic": "छंद",
    "stem": "'भगण' (भ) का लघु-गुरु स्वरूप क्या है?",
    "options": [
      "। ऽ ऽ (लघु-गुरु-गुरु)",
      "ऽ । । (गुरु-लघु-लघु)",
      "ऽ ऽ । (गुरु-गुरु-लघु)",
      "। । ऽ (लघु-लघु-गुरु)"
    ],
    "correct": 1,
    "explanation": "'यमाताराजभानसलगा' सूत्र में 'भानस' = ऽ।। होता है, अतः भगण गुरु-लघु-लघु है। अन्य विकल्प क्रमशः यगण, तगण और सगण हैं।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-8",
    "section": "sanskrit",
    "topic": "संस्कृत शब्द रूप",
    "stem": "'साधुना' पद किस विभक्ति एवं वचन में है? (साधु, उकारांत पुल्लिंग)",
    "options": [
      "चतुर्थी एकवचन",
      "सप्तमी एकवचन",
      "तृतीया एकवचन",
      "पंचमी एकवचन"
    ],
    "correct": 2,
    "explanation": "साधु शब्द के तृतीया एकवचन का रूप 'साधुना' है। चतुर्थी एकवचन 'साधवे', पंचमी 'साधोः' और सप्तमी 'साधौ' होता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-9",
    "section": "sanskrit",
    "topic": "संस्कृत शब्द रूप",
    "stem": "नदी (ईकारांत स्त्रीलिंग) शब्द के चतुर्थी एकवचन का रूप है ____",
    "options": [
      "नद्याः",
      "नद्याम्",
      "नदीम्",
      "नद्यै"
    ],
    "correct": 3,
    "explanation": "नदी के चतुर्थी एकवचन का रूप 'नद्यै' है। 'नद्याः' पंचमी/षष्ठी एकवचन, 'नद्याम्' सप्तमी एकवचन और 'नदीम्' द्वितीया एकवचन है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-10",
    "section": "sanskrit",
    "topic": "संस्कृत शब्द रूप",
    "stem": "'मुनौ' पद किस विभक्ति एवं वचन में है? (मुनि, इकारांत पुल्लिंग)",
    "options": [
      "सप्तमी एकवचन",
      "षष्ठी एकवचन",
      "सप्तमी बहुवचन",
      "पंचमी एकवचन"
    ],
    "correct": 0,
    "explanation": "इकारांत पुल्लिंग मुनि शब्द का सप्तमी एकवचन 'मुनौ' होता है; सप्तमी बहुवचन 'मुनिषु' और पंचमी/षष्ठी एकवचन 'मुनेः' है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-11",
    "section": "sanskrit",
    "topic": "संस्कृत शब्द रूप",
    "stem": "फल (अकारांत नपुंसकलिंग) शब्द के द्वितीया बहुवचन का रूप है ____",
    "options": [
      "फलान्",
      "फलानि",
      "फलैः",
      "फलेषु"
    ],
    "correct": 1,
    "explanation": "नपुंसकलिंग में प्रथमा और द्वितीया के रूप समान होते हैं, अतः द्वितीया बहुवचन भी 'फलानि' है। 'फलान्' पुल्लिंग (जैसे रामान्) की तर्ज़ पर बना भ्रामक रूप है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-12",
    "section": "sanskrit",
    "topic": "संस्कृत धातु रूप",
    "stem": "पठ् धातु के लृट् लकार (भविष्यत् काल) प्रथम पुरुष एकवचन का रूप है ____",
    "options": [
      "पठतु",
      "अपठत्",
      "पठिष्यति",
      "पठेत्"
    ],
    "correct": 2,
    "explanation": "लृट् लकार में 'इष्य' जुड़कर 'पठिष्यति' बनता है। 'पठतु' लोट्, 'अपठत्' लङ् और 'पठेत्' विधिलिङ् का रूप है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-13",
    "section": "sanskrit",
    "topic": "संस्कृत धातु रूप",
    "stem": "पठ् धातु के लङ् लकार (भूतकाल) प्रथम पुरुष एकवचन का रूप है ____",
    "options": [
      "पठिष्यति",
      "पठति",
      "पठतु",
      "अपठत्"
    ],
    "correct": 3,
    "explanation": "लङ् लकार में धातु से पहले 'अ' (आगम) लगता है, अतः रूप 'अपठत्' बनता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modJ-14",
    "section": "sanskrit",
    "topic": "संस्कृत धातु रूप",
    "stem": "'आसीत्' रूप किस धातु और लकार का है?",
    "options": [
      "अस् धातु, लङ् लकार",
      "अस् धातु, लृट् लकार",
      "आस् धातु, लट् लकार",
      "भू धातु, लङ् लकार"
    ],
    "correct": 0,
    "explanation": "अस् (होना) धातु के लङ् लकार प्रथम पुरुष एकवचन का रूप 'आसीत्' (था) है। भू धातु का लङ् रूप 'अभवत्' होता है।",
    "difficulty": "medium",
    "level": "beginner",
    "examLevel": "l1"
  },
  {
    "id": "modK-1",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "The Lucknow gharana is a famous school of which Indian classical dance?",
    "options": [
      "Bharatanatyam",
      "Odissi",
      "Kathak",
      "Kuchipudi"
    ],
    "correct": 2,
    "explanation": "Kathak has three main gharanas: Lucknow, Jaipur and Banaras. The Lucknow gharana grew under the patronage of the Nawabs of Awadh.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-2",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "'Lathmar Holi' is celebrated most famously at which place in Mathura district?",
    "options": [
      "Barsana",
      "Gokul",
      "Govardhan",
      "Mahavan"
    ],
    "correct": 0,
    "explanation": "Lathmar Holi is played at Barsana (and the next day at Nandgaon), where women playfully strike men with sticks (lathis).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-3",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "The Kumbh Mela was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in which year?",
    "options": [
      "2008",
      "2013",
      "2017",
      "2019"
    ],
    "correct": 2,
    "explanation": "UNESCO inscribed the Kumbh Mela on its Intangible Cultural Heritage list in December 2017. The 2008 option is a trap: that is when Ramlila was inscribed.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-4",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "Sonbhadra district of Uttar Pradesh shares its boundary with how many other states?",
    "options": [
      "Two",
      "Three",
      "Five",
      "Four"
    ],
    "correct": 3,
    "explanation": "Sonbhadra borders four states: Madhya Pradesh, Chhattisgarh, Jharkhand and Bihar.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-5",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "How many Indian states (excluding Union Territories) share a border with Uttar Pradesh?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correct": 1,
    "explanation": "UP borders 8 states: Uttarakhand, Himachal Pradesh, Haryana, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand and Bihar. It also borders the NCT of Delhi, which is a Union Territory, so 9 is a trap.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-6",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "Which of the following rivers is NOT a tributary of the Yamuna?",
    "options": [
      "Ken",
      "Betwa",
      "Gomti",
      "Chambal"
    ],
    "correct": 2,
    "explanation": "The Ken, Betwa and Chambal all join the Yamuna. The Gomti flows through Lucknow and joins the Ganga directly.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-7",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "The National Chambal Sanctuary, shared by UP, MP and Rajasthan, is best known for the conservation of which animal?",
    "options": [
      "Gharial",
      "One-horned rhinoceros",
      "Swamp deer (barasingha)",
      "Asiatic lion"
    ],
    "correct": 0,
    "explanation": "The National Chambal Sanctuary is a key habitat of the critically endangered gharial. The rhinoceros and barasingha are associated with Dudhwa.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-8",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "The Katarniaghat Wildlife Sanctuary, part of the Dudhwa Tiger Reserve, is located in which district of UP?",
    "options": [
      "Lakhimpur Kheri",
      "Pilibhit",
      "Shravasti",
      "Bahraich"
    ],
    "correct": 3,
    "explanation": "Katarniaghat Wildlife Sanctuary is in Bahraich district, along the Girwa river near the Nepal border. It is part of the Dudhwa Tiger Reserve.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-9",
    "section": "up-gk",
    "topic": "UP craft",
    "stem": "The GI-tagged terracotta craft, known for its hand-made horses and elephants, belongs to which district of UP?",
    "options": [
      "Azamgarh",
      "Gorakhpur",
      "Bulandshahr",
      "Mirzapur"
    ],
    "correct": 1,
    "explanation": "Gorakhpur terracotta has a GI tag and is also the district's ODOP product. Azamgarh is known for black pottery (Nizamabad).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-10",
    "section": "up-gk",
    "topic": "UP craft",
    "stem": "Saharanpur in western Uttar Pradesh is internationally known for which craft?",
    "options": [
      "Brassware",
      "Glass bangles",
      "Carpet weaving",
      "Wood carving"
    ],
    "correct": 3,
    "explanation": "Saharanpur is famous for wood carving (mainly sheesham wood furniture and handicrafts). Brassware is Moradabad's craft and glass bangles are Firozabad's.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-11",
    "section": "up-gk",
    "topic": "UP industry",
    "stem": "Which city of western Uttar Pradesh is a major centre of the sports goods industry?",
    "options": [
      "Aligarh",
      "Meerut",
      "Moradabad",
      "Saharanpur"
    ],
    "correct": 1,
    "explanation": "Meerut is one of India's leading sports goods centres (cricket bats, balls and other equipment). Aligarh is known for locks and Moradabad for brassware.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-12",
    "section": "up-gk",
    "topic": "UP polity",
    "stem": "How many members does the Uttar Pradesh Legislative Council (Vidhan Parishad) have?",
    "options": [
      "80",
      "403",
      "100",
      "31"
    ],
    "correct": 2,
    "explanation": "The UP Vidhan Parishad has 100 members. 403 is the strength of the Vidhan Sabha, and 80 and 31 are UP's Lok Sabha and Rajya Sabha seats.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-13",
    "section": "up-gk",
    "topic": "UP polity",
    "stem": "Apart from its principal seat at Prayagraj, the Allahabad High Court has a permanent bench at ____",
    "options": [
      "Lucknow",
      "Varanasi",
      "Agra",
      "Meerut"
    ],
    "correct": 0,
    "explanation": "The Allahabad High Court sits at Prayagraj and has its only permanent bench at Lucknow.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-14",
    "section": "up-gk",
    "topic": "UP polity",
    "stem": "Who was the first Governor of the United Provinces (now Uttar Pradesh) after Independence, also the first woman Governor in India?",
    "options": [
      "Sucheta Kripalani",
      "Vijaya Lakshmi Pandit",
      "Rajkumari Amrit Kaur",
      "Sarojini Naidu"
    ],
    "correct": 3,
    "explanation": "Sarojini Naidu became Governor of the United Provinces in 1947, the first woman Governor in India. Sucheta Kripalani is a trap: she was India's first woman Chief Minister (UP, 1963).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-15",
    "section": "up-gk",
    "topic": "UP administration",
    "stem": "The headquarters of the Uttar Pradesh Public Service Commission (UPPSC) is located at ____",
    "options": [
      "Lucknow",
      "Kanpur",
      "Prayagraj",
      "Varanasi"
    ],
    "correct": 2,
    "explanation": "UPPSC is headquartered at Prayagraj, even though the state capital is Lucknow. The UP Board of Secondary Education is also based in Prayagraj.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-16",
    "section": "up-gk",
    "topic": "UP schemes",
    "stem": "'Operation Kayakalp' of the UP Basic Education Department mainly aims at ____",
    "options": [
      "Free distribution of school uniforms",
      "Improving basic infrastructure (toilets, drinking water, classrooms) of government basic schools",
      "Mid-day meal for upper primary students",
      "Recruitment of assistant teachers"
    ],
    "correct": 1,
    "explanation": "Operation Kayakalp (launched in 2018) upgrades the physical infrastructure of council-run basic schools, using gram panchayat and other funds, against a set of basic parameters.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-17",
    "section": "up-gk",
    "topic": "UP institutions",
    "stem": "The Central Drug Research Institute (CDRI), a laboratory of CSIR, is located in ____",
    "options": [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Prayagraj"
    ],
    "correct": 0,
    "explanation": "CDRI is a CSIR laboratory in Lucknow. Lucknow also hosts other CSIR labs such as the National Botanical Research Institute (NBRI).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-18",
    "section": "up-gk",
    "topic": "UP institutions",
    "stem": "The Indian Veterinary Research Institute (IVRI) at Izatnagar is in which district of UP?",
    "options": [
      "Mathura",
      "Bareilly",
      "Meerut",
      "Etawah"
    ],
    "correct": 1,
    "explanation": "IVRI is at Izatnagar in Bareilly district. Mathura is a trap: it has a separate veterinary university (DUVASU).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-19",
    "section": "up-gk",
    "topic": "UP infrastructure",
    "stem": "The Narora Atomic Power Station, located on the banks of the Ganga, is in which district of UP?",
    "options": [
      "Sonbhadra",
      "Farrukhabad",
      "Aligarh",
      "Bulandshahr"
    ],
    "correct": 3,
    "explanation": "Narora Atomic Power Station is in Bulandshahr district. Sonbhadra is a trap: it is known for coal-based thermal power.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-20",
    "section": "up-gk",
    "topic": "UP static",
    "stem": "Uttar Pradesh Diwas (UP Day) is observed every year on which date?",
    "options": [
      "26 January",
      "1 November",
      "24 January",
      "15 August"
    ],
    "correct": 2,
    "explanation": "UP Diwas is observed on 24 January because on 24 January 1950 the United Provinces was renamed Uttar Pradesh. 1 November is a trap: several other states celebrate their formation day on that date.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-21",
    "section": "up-gk",
    "topic": "UP infrastructure",
    "stem": "The Yamuna Expressway connects Greater Noida with which city?",
    "options": [
      "Mathura",
      "Etawah",
      "Agra",
      "Lucknow"
    ],
    "correct": 2,
    "explanation": "The Yamuna Expressway runs from Greater Noida to Agra. Mathura lies on the way, and the Agra–Lucknow Expressway continues from Agra to Lucknow.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-22",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "The Rumi Darwaza and the Bara Imambara in Lucknow were built by which Nawab of Awadh?",
    "options": [
      "Wajid Ali Shah",
      "Saadat Ali Khan",
      "Shuja-ud-Daula",
      "Asaf-ud-Daula"
    ],
    "correct": 3,
    "explanation": "Nawab Asaf-ud-Daula built both monuments in the 1780s, partly as famine-relief work. He had moved the capital of Awadh from Faizabad to Lucknow.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-23",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "The Gupta-period Dashavatara Temple at Deogarh is located in which district of UP?",
    "options": [
      "Lalitpur",
      "Jhansi",
      "Chitrakoot",
      "Mahoba"
    ],
    "correct": 0,
    "explanation": "The Dashavatara (Vishnu) Temple at Deogarh, one of the earliest surviving stone temples of North India, is in Lalitpur district on the Betwa river.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-24",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "The Chauri Chaura incident of February 1922, after which Gandhiji withdrew the Non-Cooperation Movement, took place in which district of UP?",
    "options": [
      "Deoria",
      "Gorakhpur",
      "Basti",
      "Azamgarh"
    ],
    "correct": 1,
    "explanation": "At Chauri Chaura in Gorakhpur district, a mob set fire to a police station. Gandhiji then called off the Non-Cooperation Movement.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-25",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "Kaushambi, near present-day Prayagraj, was the capital of which ancient mahajanapada?",
    "options": [
      "Kosala",
      "Kashi",
      "Panchala",
      "Vatsa"
    ],
    "correct": 3,
    "explanation": "Kaushambi was the capital of Vatsa, ruled in the Buddha's time by King Udayana. Kosala's capital was Shravasti.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-26",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "The kingdom of Awadh was annexed by the British in 1856, on the grounds of misgovernance, under which Governor-General?",
    "options": [
      "Lord Dalhousie",
      "Lord Canning",
      "Lord Wellesley",
      "Lord William Bentinck"
    ],
    "correct": 0,
    "explanation": "Lord Dalhousie annexed Awadh in 1856 and deposed Nawab Wajid Ali Shah, citing misgovernance rather than the Doctrine of Lapse. Canning is a trap: he took over later in 1856.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-27",
    "section": "up-gk",
    "topic": "UP institutions",
    "stem": "The ICAR–Indian Institute of Pulses Research (IIPR) is located in which UP city?",
    "options": [
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Jhansi"
    ],
    "correct": 1,
    "explanation": "IIPR is at Kanpur. Jhansi hosts a different ICAR body, the Indian Grassland and Fodder Research Institute, a common confusion.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-28",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "The Chandraprabha Wildlife Sanctuary, where Asiatic lions were released in 1958 in an unsuccessful attempt to establish a second home, is in which district of UP?",
    "options": [
      "Sonbhadra",
      "Mirzapur",
      "Chandauli",
      "Lalitpur"
    ],
    "correct": 2,
    "explanation": "Chandraprabha Wildlife Sanctuary lies in the Vindhyan hills of Chandauli district. The lions released there in 1958 did not survive in the long run.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-29",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "The historic Chunar Fort, standing on a rock on the banks of the Ganga, is in which district of UP?",
    "options": [
      "Mirzapur",
      "Varanasi",
      "Chandauli",
      "Sonbhadra"
    ],
    "correct": 0,
    "explanation": "Chunar Fort is in Mirzapur district, on the Ganga upstream of Varanasi. Its nearness to Varanasi often misleads candidates.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-30",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "The Hathras style and the Kanpur style are two well-known schools of which folk theatre form of Uttar Pradesh?",
    "options": [
      "Raslila",
      "Bidesiya",
      "Nautanki",
      "Ramlila"
    ],
    "correct": 2,
    "explanation": "Nautanki, a musical folk theatre of UP, developed two famous styles centred on Hathras and Kanpur. Bidesiya is a Bhojpuri theatre form.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modK-31",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "Match List-I (city) with List-II (river on which it stands):\nList-I: A. Gorakhpur  B. Jaunpur  C. Moradabad  D. Mirzapur\nList-II: 1. Ganga  2. Ramganga  3. Gomti  4. Rapti",
    "options": [
      "A-3, B-4, C-2, D-1",
      "A-4, B-2, C-3, D-1",
      "A-4, B-3, C-2, D-1",
      "A-1, B-3, C-2, D-4"
    ],
    "correct": 2,
    "explanation": "Gorakhpur is on the Rapti, Jaunpur on the Gomti, Moradabad on the Ramganga and Mirzapur on the Ganga.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-32",
    "section": "up-gk",
    "topic": "UP polity",
    "stem": "The High Court of the North-Western Provinces, the forerunner of today's Allahabad High Court, was first established in 1866 at ____",
    "options": [
      "Allahabad",
      "Lucknow",
      "Agra",
      "Meerut"
    ],
    "correct": 2,
    "explanation": "It was set up at Agra in 1866 and shifted to Allahabad in 1869. Lucknow later became the seat of its permanent bench.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-33",
    "section": "up-gk",
    "topic": "UP craft",
    "stem": "Match List-I (place) with List-II (craft for which it is known):\nList-I: A. Khurja  B. Nizamabad (Azamgarh)  C. Pilkhuwa  D. Sambhal\nList-II: 1. Horn and bone craft  2. Black pottery  3. Ceramic pottery  4. Hand-block printed textiles",
    "options": [
      "A-2, B-3, C-4, D-1",
      "A-3, B-2, C-4, D-1",
      "A-3, B-2, C-1, D-4",
      "A-3, B-4, C-2, D-1"
    ],
    "correct": 1,
    "explanation": "Khurja is known for ceramic pottery, Nizamabad for black pottery, Pilkhuwa for hand-block printing and Sambhal for horn and bone craft.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-34",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "Sankisa, where the Buddha is believed to have descended from the Trayastrimsha heaven after preaching to his mother, is located in which district of UP?",
    "options": [
      "Kannauj",
      "Etah",
      "Shravasti",
      "Farrukhabad"
    ],
    "correct": 3,
    "explanation": "Sankisa is in Farrukhabad district and is one of the eight great Buddhist pilgrimage places. Shravasti is linked with the Jetavana monastery instead.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-35",
    "section": "up-gk",
    "topic": "UP polity",
    "stem": "Consider the following statements:\nI. Uttaranchal (now Uttarakhand) was carved out of Uttar Pradesh in November 2000.\nII. It became the 27th state of India.\nIII. It was formed after Jharkhand.\nWhich of the statements given above is/are correct?",
    "options": [
      "I and II only",
      "I and III only",
      "II and III only",
      "I, II and III"
    ],
    "correct": 0,
    "explanation": "Uttaranchal was formed on 9 November 2000 as the 27th state, after Chhattisgarh (1 November) but before Jharkhand (15 November), so III is wrong.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-36",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "The province was renamed the 'United Provinces of Agra and Oudh' in which year?",
    "options": [
      "1877",
      "1902",
      "1937",
      "1950"
    ],
    "correct": 1,
    "explanation": "The North-Western Provinces and Oudh came under one administration in 1877, were renamed the United Provinces of Agra and Oudh in 1902, became the 'United Provinces' in 1937 and Uttar Pradesh in 1950.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-37",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "Match List-I (centre of the 1857 revolt) with List-II (leader):\nList-I: A. Lucknow  B. Kanpur  C. Bareilly  D. Faizabad\nList-II: 1. Maulvi Ahmadullah Shah  2. Khan Bahadur Khan  3. Nana Saheb  4. Begum Hazrat Mahal",
    "options": [
      "A-4, B-3, C-1, D-2",
      "A-3, B-4, C-2, D-1",
      "A-2, B-3, C-4, D-1",
      "A-4, B-3, C-2, D-1"
    ],
    "correct": 3,
    "explanation": "Begum Hazrat Mahal led at Lucknow, Nana Saheb at Kanpur, Khan Bahadur Khan at Bareilly and Maulvi Ahmadullah Shah at Faizabad.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-38",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "Consider the following statements about the Lucknow session of the Indian National Congress held in 1916:\nI. A pact between the Congress and the Muslim League was concluded at this session.\nII. The Moderates and the Extremists were reunited at this session.\nIII. It was presided over by Jawaharlal Nehru.\nWhich of the statements given above is/are correct?",
    "options": [
      "I only",
      "I and II only",
      "II and III only",
      "I, II and III"
    ],
    "correct": 1,
    "explanation": "The 1916 Lucknow session saw the Lucknow Pact and the reunion of Moderates and Extremists; it was presided over by Ambika Charan Mazumdar. Nehru presided over the 1936 Lucknow session.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-39",
    "section": "up-gk",
    "topic": "UP history",
    "stem": "Baba Ramchandra, a sanyasi who had earlier gone to Fiji as an indentured labourer, led the peasant movement of 1920–21 in which region of UP?",
    "options": [
      "Awadh",
      "Rohilkhand",
      "Bundelkhand",
      "Doab"
    ],
    "correct": 0,
    "explanation": "Baba Ramchandra led the Awadh peasant movement against taluqdars and landlords, and the Oudh Kisan Sabha was formed in 1920 with Jawaharlal Nehru's involvement.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-40",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "The Buland Darwaza at Fatehpur Sikri was built by Akbar to commemorate his victory over ____",
    "options": [
      "Chittor",
      "Bengal",
      "Malwa",
      "Gujarat"
    ],
    "correct": 3,
    "explanation": "Akbar built the Buland Darwaza to mark his conquest of Gujarat (1573). Chittor was taken earlier, in 1568, and is a common trap.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-41",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "Which pair of monuments in Uttar Pradesh was inscribed on UNESCO's World Heritage List in 1983?",
    "options": [
      "Taj Mahal and Fatehpur Sikri",
      "Agra Fort and Fatehpur Sikri",
      "Taj Mahal and Agra Fort",
      "Taj Mahal and Sarnath"
    ],
    "correct": 2,
    "explanation": "The Taj Mahal and Agra Fort were both inscribed in 1983; Fatehpur Sikri followed in 1986.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-42",
    "section": "up-gk",
    "topic": "UP heritage",
    "stem": "The tomb of Itimad-ud-Daulah at Agra, often called the 'Baby Taj', was commissioned by ____",
    "options": [
      "Nur Jahan",
      "Jahangir",
      "Shah Jahan",
      "Mumtaz Mahal"
    ],
    "correct": 0,
    "explanation": "Nur Jahan built it for her father Mirza Ghiyas Beg (Itimad-ud-Daulah). It is noted as an early Mughal tomb in white marble with pietra dura inlay.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-43",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "Match List-I (fair/festival) with List-II (district):\nList-I: A. Dewa Mela  B. Bateshwar fair  C. Nauchandi Mela  D. Ramnagar Ramlila\nList-II: 1. Meerut  2. Barabanki  3. Varanasi  4. Agra",
    "options": [
      "A-2, B-4, C-1, D-3",
      "A-2, B-4, C-3, D-1",
      "A-4, B-2, C-1, D-3",
      "A-1, B-4, C-2, D-3"
    ],
    "correct": 0,
    "explanation": "Dewa Mela is held at Dewa Sharif (Barabanki), the Bateshwar fair in Agra district, the Nauchandi Mela in Meerut and the Ramnagar Ramlila in Varanasi.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-44",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "Which Nawab of Awadh, a noted patron of Thumri and Kathak, was deposed when the British annexed Awadh in 1856 and spent his last years in exile at Calcutta?",
    "options": [
      "Asaf-ud-Daula",
      "Saadat Ali Khan",
      "Wajid Ali Shah",
      "Shuja-ud-Daula"
    ],
    "correct": 2,
    "explanation": "Wajid Ali Shah, the last Nawab of Awadh, was deposed in 1856 and lived at Matiaburj in Calcutta. Asaf-ud-Daula is remembered for the Bara Imambara.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-45",
    "section": "up-gk",
    "topic": "UP culture",
    "stem": "Pandit Ram Sahai is regarded as the founder of the Banaras gharana of which instrument?",
    "options": [
      "Sitar",
      "Sarangi",
      "Pakhawaj",
      "Tabla"
    ],
    "correct": 3,
    "explanation": "Pandit Ram Sahai founded the Banaras gharana of tabla, later carried forward by maestros such as Pandit Kishan Maharaj.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-46",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "In the Ganga plain of Uttar Pradesh, the terms 'Bhangar' and 'Khadar' respectively refer to ____",
    "options": [
      "New alluvium and old alluvium",
      "Old alluvium and new alluvium",
      "Black soil and red soil",
      "Laterite soil and alluvial soil"
    ],
    "correct": 1,
    "explanation": "Bhangar is the older alluvium on higher ground above flood level; Khadar is the newer alluvium of the floodplains, renewed by floods almost every year.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-47",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "Match List-I (protected area) with List-II (district):\nList-I: A. Sohagi Barwa Wildlife Sanctuary  B. Samaspur Bird Sanctuary  C. Nawabganj Bird Sanctuary  D. Ranipur Tiger Reserve\nList-II: 1. Unnao  2. Chitrakoot  3. Maharajganj  4. Rae Bareli",
    "options": [
      "A-3, B-1, C-4, D-2",
      "A-3, B-4, C-1, D-2",
      "A-4, B-3, C-1, D-2",
      "A-3, B-4, C-2, D-1"
    ],
    "correct": 1,
    "explanation": "Sohagi Barwa is in Maharajganj, Samaspur in Rae Bareli, Nawabganj (Shaheed Chandra Shekhar Azad) Bird Sanctuary in Unnao and Ranipur Tiger Reserve in Chitrakoot.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-48",
    "section": "up-gk",
    "topic": "UP geography",
    "stem": "The Ghaghara, a major left-bank tributary of the Ganga flowing through eastern UP, is known in Nepal (its upper course) as the ____",
    "options": [
      "Karnali",
      "Gandaki",
      "Kosi",
      "Mahakali"
    ],
    "correct": 0,
    "explanation": "The Ghaghara rises in Tibet and flows through Nepal as the Karnali. Mahakali is the Nepal name of the Sharda, a common trap.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-49",
    "section": "up-gk",
    "topic": "UP infrastructure",
    "stem": "The Bundelkhand Expressway begins near Chitrakoot and joins the Agra–Lucknow Expressway in which district?",
    "options": [
      "Auraiya",
      "Jalaun",
      "Etawah",
      "Kanpur Dehat"
    ],
    "correct": 2,
    "explanation": "It runs through Chitrakoot, Banda, Mahoba, Hamirpur, Jalaun and Auraiya to meet the Agra–Lucknow Expressway in Etawah district. Auraiya and Jalaun lie on the route but are not the junction.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-50",
    "section": "up-gk",
    "topic": "UP infrastructure",
    "stem": "Match List-I (thermal power station) with List-II (district):\nList-I: A. Anpara  B. Parichha  C. Tanda  D. Harduaganj\nList-II: 1. Aligarh  2. Ambedkar Nagar  3. Sonbhadra  4. Jhansi",
    "options": [
      "A-4, B-3, C-2, D-1",
      "A-3, B-4, C-1, D-2",
      "A-3, B-2, C-4, D-1",
      "A-3, B-4, C-2, D-1"
    ],
    "correct": 3,
    "explanation": "Anpara is in Sonbhadra, Parichha in Jhansi, Tanda in Ambedkar Nagar and Harduaganj in Aligarh.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-51",
    "section": "up-gk",
    "topic": "UP industry",
    "stem": "Match List-I (industrial unit) with List-II (location):\nList-I: A. Banaras Locomotive Works (formerly DLW)  B. Modern Coach Factory  C. BHEL transformer unit  D. IFFCO fertiliser plant\nList-II: 1. Rae Bareli  2. Phulpur (Prayagraj)  3. Varanasi  4. Jhansi",
    "options": [
      "A-3, B-1, C-4, D-2",
      "A-1, B-3, C-4, D-2",
      "A-3, B-1, C-2, D-4",
      "A-3, B-4, C-1, D-2"
    ],
    "correct": 0,
    "explanation": "Banaras Locomotive Works is at Varanasi, the Modern Coach Factory at Rae Bareli, BHEL's transformer unit at Jhansi and the IFFCO plant at Phulpur in Prayagraj.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-52",
    "section": "up-gk",
    "topic": "UP institutions",
    "stem": "Which of the following institutions is NOT located in Lucknow?",
    "options": [
      "Central Institute of Medicinal and Aromatic Plants (CIMAP)",
      "Central University of Tibetan Studies",
      "Birbal Sahni Institute of Palaeosciences",
      "Indian Institute of Toxicology Research"
    ],
    "correct": 1,
    "explanation": "The Central University of Tibetan Studies is at Sarnath near Varanasi. CIMAP, the Birbal Sahni Institute of Palaeosciences and IITR are all in Lucknow.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-53",
    "section": "up-gk",
    "topic": "UP institutions",
    "stem": "The Government Sanskrit College at Varanasi, from which the Sampurnanand Sanskrit University grew, was established in 1791 by ____",
    "options": [
      "Warren Hastings",
      "Jonathan Duncan",
      "William Jones",
      "Lord Cornwallis"
    ],
    "correct": 1,
    "explanation": "Jonathan Duncan, the British Resident at Banaras, founded the Sanskrit College in 1791. Warren Hastings founded the Calcutta Madrasa (1781) and William Jones the Asiatic Society (1784).",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-54",
    "section": "up-gk",
    "topic": "UP administration",
    "stem": "Consider the following pairs (administrative division, headquarters):\nI. Devipatan, Gonda\nII. Chitrakoot Dham, Chitrakoot\nIII. Vindhyachal, Mirzapur\nWhich of the pairs given above is/are correctly matched?",
    "options": [
      "I only",
      "II and III only",
      "I, II and III",
      "I and III only"
    ],
    "correct": 3,
    "explanation": "Devipatan division is headquartered at Gonda and Vindhyachal at Mirzapur, but Chitrakoot Dham division is headquartered at Banda, so pair II is wrong.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modK-55",
    "section": "up-gk",
    "topic": "UP static",
    "stem": "According to the final figures of Census 2011, the sex ratio (females per 1,000 males) of Uttar Pradesh was ____",
    "options": [
      "943",
      "898",
      "912",
      "929"
    ],
    "correct": 2,
    "explanation": "UP's sex ratio in Census 2011 was 912, below the national figure of 943, which is the usual trap option.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-1",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Saka calendar was officially adopted as the National Calendar of India on ____",
    "options": [
      "26 January 1950",
      "15 August 1947",
      "22 March 1957",
      "1 April 1957"
    ],
    "correct": 2,
    "explanation": "The Saka-based National Calendar was adopted from Chaitra 1, 1879 Saka, i.e. 22 March 1957, alongside the Gregorian calendar.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-2",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The prescribed playing time of the full version of India's National Anthem is approximately ____",
    "options": [
      "52 seconds",
      "20 seconds",
      "65 seconds",
      "90 seconds"
    ],
    "correct": 0,
    "explanation": "The full version takes about 52 seconds; the short version (first and last lines) takes about 20 seconds, a common trap.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-3",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The motto 'Satyameva Jayate' inscribed below the State Emblem of India is taken from ____",
    "options": [
      "Rigveda",
      "Mundaka Upanishad",
      "Bhagavad Gita",
      "Katha Upanishad"
    ],
    "correct": 1,
    "explanation": "'Satyameva Jayate' (Truth alone triumphs) is from the Mundaka Upanishad, written in Devanagari below the emblem.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-4",
    "section": "gk",
    "topic": "Static GK",
    "stem": "National Science Day is observed in India on 28 February to commemorate ____",
    "options": [
      "the launch of Aryabhata satellite",
      "the birth of Homi J. Bhabha",
      "the founding of ISRO",
      "the discovery of the Raman Effect"
    ],
    "correct": 3,
    "explanation": "C.V. Raman announced the Raman Effect on 28 February 1928; this discovery won him the 1930 Nobel Prize in Physics.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-5",
    "section": "gk",
    "topic": "Static GK",
    "stem": "National Sports Day (29 August) is celebrated on the birth anniversary of ____",
    "options": [
      "Milkha Singh",
      "Major Dhyan Chand",
      "P.T. Usha",
      "K.D. Jadhav"
    ],
    "correct": 1,
    "explanation": "29 August is the birthday of hockey legend Major Dhyan Chand (born 1905).",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-6",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The International Court of Justice, the principal judicial organ of the United Nations, is located in ____",
    "options": [
      "Geneva",
      "New York",
      "Vienna",
      "The Hague"
    ],
    "correct": 3,
    "explanation": "The ICJ sits at the Peace Palace in The Hague, Netherlands; it is the only principal UN organ not located in New York.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-7",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The headquarters of UNESCO is located in ____",
    "options": [
      "Paris",
      "Rome",
      "London",
      "Geneva"
    ],
    "correct": 0,
    "explanation": "UNESCO is headquartered in Paris; Rome hosts FAO and Geneva hosts WHO, common distractors.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-8",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Rabindranath Tagore became the first Indian to win a Nobel Prize, in Literature, in the year ____",
    "options": [
      "1905",
      "1913",
      "1921",
      "1930"
    ],
    "correct": 1,
    "explanation": "Tagore received the Nobel Prize in Literature in 1913, mainly for 'Gitanjali'; 1930 was C.V. Raman's Physics prize.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-9",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The National Song 'Vande Mataram' is taken from the novel 'Anandamath', written by ____",
    "options": [
      "Rabindranath Tagore",
      "Sarat Chandra Chattopadhyay",
      "Bankim Chandra Chattopadhyay",
      "Ishwar Chandra Vidyasagar"
    ],
    "correct": 2,
    "explanation": "'Vande Mataram' appears in Bankim Chandra Chattopadhyay's novel 'Anandamath' (1882); Tagore wrote the National Anthem.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-10",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following was among the first recipients of the Bharat Ratna in 1954?",
    "options": [
      "Jawaharlal Nehru",
      "Indira Gandhi",
      "Mother Teresa",
      "C.V. Raman"
    ],
    "correct": 3,
    "explanation": "The first Bharat Ratna awards (1954) went to C. Rajagopalachari, S. Radhakrishnan and C.V. Raman; Nehru received it in 1955.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-11",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first recipient of the Dadasaheb Phalke Award (1969), India's highest honour in cinema, was ____",
    "options": [
      "Prithviraj Kapoor",
      "Satyajit Ray",
      "Devika Rani",
      "Raj Kapoor"
    ],
    "correct": 2,
    "explanation": "Actress Devika Rani received the first Dadasaheb Phalke Award in 1969.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-12",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Jnanpith Award (1965) was given to G. Sankara Kurup, who wrote in ____",
    "options": [
      "Malayalam",
      "Kannada",
      "Tamil",
      "Bengali"
    ],
    "correct": 0,
    "explanation": "G. Sankara Kurup received the first Jnanpith for his Malayalam poetry collection 'Odakkuzhal'.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-13",
    "section": "gk",
    "topic": "Static GK",
    "stem": "India's first woman Chief Minister, Sucheta Kripalani, headed the government of which state?",
    "options": [
      "Bihar",
      "Uttar Pradesh",
      "West Bengal",
      "Madhya Pradesh"
    ],
    "correct": 1,
    "explanation": "Sucheta Kripalani became Chief Minister of Uttar Pradesh in 1963, the first woman CM of any Indian state.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-14",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian woman to climb Mount Everest (1984) was ____",
    "options": [
      "Santosh Yadav",
      "Arunima Sinha",
      "Premlata Agarwal",
      "Bachendri Pal"
    ],
    "correct": 3,
    "explanation": "Bachendri Pal reached the summit on 23 May 1984; Santosh Yadav later became the first woman to climb it twice.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-15",
    "section": "gk",
    "topic": "Static GK",
    "stem": "In a game of Kho-Kho, how many players of the chasing team are on the field at a time?",
    "options": [
      "7",
      "11",
      "9",
      "6"
    ],
    "correct": 2,
    "explanation": "A Kho-Kho team has 12 players, of whom 9 take the field; Kabaddi has 7 on court, a common trap.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-16",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Durand Cup, one of the oldest tournaments in Asia, is associated with ____",
    "options": [
      "Football",
      "Hockey",
      "Cricket",
      "Polo"
    ],
    "correct": 0,
    "explanation": "The Durand Cup (started 1888) is a football tournament; the Beighton Cup is associated with hockey.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-17",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Thomas Cup is an international team championship in ____",
    "options": [
      "Table tennis",
      "Tennis",
      "Badminton",
      "Squash"
    ],
    "correct": 2,
    "explanation": "The Thomas Cup is the men's world team badminton championship; the Uber Cup is its women's counterpart.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-18",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The headquarters of the World Health Organization (WHO) is in ____",
    "options": [
      "New York",
      "Geneva",
      "Paris",
      "Washington, D.C."
    ],
    "correct": 1,
    "explanation": "WHO, founded in 1948, is headquartered in Geneva, Switzerland; 7 April (its founding day) is World Health Day.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-19",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Reserve Bank of India was established in the year ____",
    "options": [
      "1947",
      "1949",
      "1921",
      "1935"
    ],
    "correct": 3,
    "explanation": "RBI was set up on 1 April 1935 under the RBI Act, 1934, and was nationalised in 1949, a common trap.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-20",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which animal has been declared the National Heritage Animal of India?",
    "options": [
      "Tiger",
      "Elephant",
      "Asiatic Lion",
      "One-horned Rhinoceros"
    ],
    "correct": 1,
    "explanation": "The elephant was declared the National Heritage Animal in 2010; the tiger is the National Animal.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-21",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The National Aquatic Animal of India is the ____",
    "options": [
      "Olive Ridley turtle",
      "Gharial",
      "Ganges River Dolphin",
      "Mahseer fish"
    ],
    "correct": 2,
    "explanation": "The Gangetic River Dolphin was declared the National Aquatic Animal in 2009; it is found in the Ganga–Brahmaputra river systems.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-22",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Hindi Diwas is celebrated on 14 September because on this day in 1949 ____",
    "options": [
      "the Constituent Assembly adopted Hindi in Devanagari script as the official language of the Union",
      "the Constitution of India came into force",
      "the first Hindi newspaper was published",
      "Hindi was declared the national language"
    ],
    "correct": 0,
    "explanation": "On 14 September 1949 the Constituent Assembly adopted Hindi in Devanagari as the Union's official language (Article 343); the Constitution names no 'national language'.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-23",
    "section": "gk",
    "topic": "Static GK",
    "stem": "National Voters' Day is observed on 25 January because on this date ____",
    "options": [
      "the first general election began",
      "the Election Commission of India was established",
      "the voting age was reduced to 18",
      "EVMs were first used"
    ],
    "correct": 1,
    "explanation": "The Election Commission of India was constituted on 25 January 1950, a day before the Republic came into being.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-24",
    "section": "gk",
    "topic": "Static GK",
    "stem": "'Wings of Fire' is the autobiography of ____",
    "options": [
      "Vikram Sarabhai",
      "Homi J. Bhabha",
      "Kalpana Chawla",
      "A.P.J. Abdul Kalam"
    ],
    "correct": 3,
    "explanation": "'Wings of Fire' (1999) is Dr A.P.J. Abdul Kalam's autobiography, co-written with Arun Tiwari.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-25",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following pairs of book and author is correctly matched?",
    "options": [
      "Godan – Jaishankar Prasad",
      "Kamayani – Premchand",
      "Godan – Premchand",
      "Kamayani – Maithilisharan Gupt"
    ],
    "correct": 2,
    "explanation": "'Godan' is Premchand's novel; 'Kamayani' is an epic poem by Jaishankar Prasad.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-26",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The headquarters of the Indian Space Research Organisation (ISRO) is in ____",
    "options": [
      "Bengaluru",
      "Sriharikota",
      "Thiruvananthapuram",
      "Ahmedabad"
    ],
    "correct": 0,
    "explanation": "ISRO is headquartered in Bengaluru; Sriharikota is the launch centre and Thiruvananthapuram hosts VSSC, common distractors.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-27",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first modern Olympic Games were held in 1896 in ____",
    "options": [
      "Paris",
      "London",
      "Athens",
      "Rome"
    ],
    "correct": 2,
    "explanation": "The first modern Olympics were held in Athens, Greece, in 1896, revived through the efforts of Pierre de Coubertin.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-28",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Abhinav Bindra, India's first individual Olympic gold medallist, won his gold in ____",
    "options": [
      "10 m air rifle, Beijing 2008",
      "50 m rifle, London 2012",
      "Trap shooting, Athens 2004",
      "10 m air pistol, Beijing 2008"
    ],
    "correct": 0,
    "explanation": "Bindra won gold in the men's 10 m air rifle at the 2008 Beijing Olympics.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-29",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The ratio of the width to the length of India's National Flag is ____",
    "options": [
      "1 : 2",
      "2 : 3",
      "3 : 5",
      "3 : 4"
    ],
    "correct": 1,
    "explanation": "The Flag Code of India prescribes a width-to-length ratio of 2 : 3.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-30",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The headquarters of INTERPOL (International Criminal Police Organization) is located in ____",
    "options": [
      "Brussels",
      "The Hague",
      "Geneva",
      "Lyon"
    ],
    "correct": 3,
    "explanation": "INTERPOL's General Secretariat is in Lyon, France; The Hague hosts the ICJ and Europol.",
    "difficulty": "medium",
    "level": "beginner"
  },
  {
    "id": "modL-31",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Constituent Assembly formally adopted 'Jana Gana Mana' as the National Anthem of India on ____",
    "options": [
      "26 November 1949",
      "26 January 1950",
      "24 January 1950",
      "27 December 1911"
    ],
    "correct": 2,
    "explanation": "It was adopted on 24 January 1950, the Assembly's last sitting; 27 December 1911 is when it was first sung (Calcutta INC session).",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-32",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The present form of the National Flag of India was adopted by the Constituent Assembly on ____",
    "options": [
      "22 July 1947",
      "15 August 1947",
      "26 January 1950",
      "14 August 1947"
    ],
    "correct": 0,
    "explanation": "The tricolour with the Ashoka Chakra was adopted on 22 July 1947, before Independence; it was first hoisted as the national flag on 15 August 1947.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-33",
    "section": "gk",
    "topic": "Static GK",
    "stem": "On the abacus of the Sarnath Lion Capital (the source of the State Emblem), animals are separated by wheels. Which animal is NOT among them?",
    "options": [
      "Elephant",
      "Galloping horse",
      "Tiger",
      "Bull"
    ],
    "correct": 2,
    "explanation": "The abacus shows an elephant, a galloping horse, a bull and a lion separated by wheels; there is no tiger.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-34",
    "section": "gk",
    "topic": "Static GK",
    "stem": "'Vande Mataram' was first sung at a session of the Indian National Congress in 1896. Where was that session held?",
    "options": [
      "Bombay",
      "Calcutta",
      "Lucknow",
      "Madras"
    ],
    "correct": 1,
    "explanation": "Rabindranath Tagore sang 'Vande Mataram' at the 1896 Calcutta session of the INC.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-35",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Hindi writer to receive the Jnanpith Award (1968) was ____",
    "options": [
      "Mahadevi Verma",
      "Ramdhari Singh 'Dinkar'",
      "Agyeya",
      "Sumitranandan Pant"
    ],
    "correct": 3,
    "explanation": "Sumitranandan Pant received the 1968 Jnanpith for 'Chidambara'; Dinkar (1972), Agyeya (1978) and Mahadevi Verma (1982) came later.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-36",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Who was the first Asian to win a Nobel Prize in a science subject?",
    "options": [
      "Hideki Yukawa",
      "C.V. Raman",
      "Har Gobind Khorana",
      "S. Chandrasekhar"
    ],
    "correct": 1,
    "explanation": "C.V. Raman won the 1930 Physics Nobel; Yukawa won in 1949, Khorana in 1968 and Chandrasekhar in 1983.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-37",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following organisation–headquarters pairs is INCORRECTLY matched?",
    "options": [
      "IAEA – Vienna",
      "FAO – Rome",
      "UNICEF – Paris",
      "ILO – Geneva"
    ],
    "correct": 2,
    "explanation": "UNICEF is headquartered in New York; Paris hosts UNESCO. The other three pairs are correct.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-38",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following pairs of ancient text and author is INCORRECTLY matched?",
    "options": [
      "Mudrarakshasa – Vishakhadatta",
      "Indica – Megasthenes",
      "Harshacharita – Banabhatta",
      "Rajatarangini – Kalidasa"
    ],
    "correct": 3,
    "explanation": "'Rajatarangini', the chronicle of Kashmir, was written by Kalhana, not Kalidasa.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-39",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Arrange these sports awards in the order in which they were instituted (earliest first): (1) Dronacharya Award (2) Arjuna Award (3) Rajiv Gandhi Khel Ratna (now Major Dhyan Chand Khel Ratna)",
    "options": [
      "1, 2, 3",
      "2, 3, 1",
      "2, 1, 3",
      "3, 2, 1"
    ],
    "correct": 2,
    "explanation": "Arjuna Award began in 1961, Dronacharya Award (for coaches) in 1985, and the Khel Ratna in 1991–92.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-40",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian woman to win an Olympic medal was Karnam Malleswari, who won ____",
    "options": [
      "bronze in weightlifting at Sydney 2000",
      "silver in weightlifting at Athens 2004",
      "bronze in badminton at London 2012",
      "bronze in boxing at London 2012"
    ],
    "correct": 0,
    "explanation": "Karnam Malleswari won weightlifting bronze at Sydney 2000; Saina Nehwal and Mary Kom won their bronzes at London 2012.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-41",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The State Emblem of India, adapted from the Sarnath Lion Capital of Ashoka, was adopted by the Government of India on ____",
    "options": [
      "15 August 1947",
      "22 July 1947",
      "26 January 1950",
      "24 January 1950"
    ],
    "correct": 2,
    "explanation": "The State Emblem was adopted on 26 January 1950; 22 July 1947 is the flag's adoption and 24 January 1950 the anthem's.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-42",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Ashoka Chakra at the centre of the National Flag is of which colour, and how many spokes does it have?",
    "options": [
      "Navy blue, 32 spokes",
      "Navy blue, 24 spokes",
      "Black, 24 spokes",
      "Sky blue, 22 spokes"
    ],
    "correct": 1,
    "explanation": "The chakra on the white band is navy blue with 24 spokes.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-43",
    "section": "gk",
    "topic": "Static GK",
    "stem": "In the Saka National Calendar, 1 Chaitra normally falls on 22 March. In a leap year, it falls on ____",
    "options": [
      "20 March",
      "23 March",
      "22 March",
      "21 March"
    ],
    "correct": 3,
    "explanation": "Chaitra has 30 days in a normal year and 31 in a leap year, when 1 Chaitra falls on 21 March.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-44",
    "section": "gk",
    "topic": "Static GK",
    "stem": "A short version of the National Anthem, consisting of its first and last lines, is also prescribed. Its playing time is about ____",
    "options": [
      "20 seconds",
      "52 seconds",
      "30 seconds",
      "45 seconds"
    ],
    "correct": 0,
    "explanation": "The short version takes about 20 seconds; the full version takes about 52 seconds.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-45",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Rabindranath Tagore translated 'Jana Gana Mana' into English as 'The Morning Song of India' in 1919 at ____",
    "options": [
      "Shantiniketan",
      "Calcutta",
      "Madanapalle",
      "Madras"
    ],
    "correct": 2,
    "explanation": "Tagore made the English translation at Madanapalle (in present-day Andhra Pradesh) in 1919.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-46",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The International Day for the Preservation of the Ozone Layer (16 September) marks the date of signing of the ____",
    "options": [
      "Vienna Convention (1985)",
      "Montreal Protocol (1987)",
      "Kyoto Protocol (1997)",
      "Rio Declaration (1992)"
    ],
    "correct": 1,
    "explanation": "The Montreal Protocol was signed on 16 September 1987; the Vienna Convention (1985) was its framework treaty, a common trap.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-47",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following pairs of national day and date is INCORRECTLY matched?",
    "options": [
      "National Mathematics Day – 22 December",
      "National Youth Day – 12 January",
      "National Unity Day – 31 October",
      "National Education Day – 14 November"
    ],
    "correct": 3,
    "explanation": "National Education Day is 11 November (birth anniversary of Maulana Abul Kalam Azad); 14 November is Children's Day.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-48",
    "section": "gk",
    "topic": "Static GK",
    "stem": "World Wetlands Day (2 February) marks the adoption of the Ramsar Convention in 1971. The city of Ramsar is located in ____",
    "options": [
      "Iran",
      "Iraq",
      "Egypt",
      "Turkey"
    ],
    "correct": 0,
    "explanation": "The Convention on Wetlands was signed on 2 February 1971 at Ramsar, a city on the Caspian Sea coast of Iran.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-49",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Army Day (15 January) commemorates the day in 1949 when K.M. Cariappa took over as Commander-in-Chief of the Indian Army from ____",
    "options": [
      "General Sir Rob Lockhart",
      "Lord Mountbatten",
      "General Sir Francis Roy Bucher",
      "Field Marshal Claude Auchinleck"
    ],
    "correct": 2,
    "explanation": "Cariappa succeeded General Sir Francis Roy Bucher, the last British Commander-in-Chief of the Indian Army.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-50",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Navy Day is celebrated on 4 December to commemorate the Indian Navy's 1971 attack on Karachi harbour, code-named ____",
    "options": [
      "Operation Vijay",
      "Operation Meghdoot",
      "Operation Cactus",
      "Operation Trident"
    ],
    "correct": 3,
    "explanation": "Operation Trident (4 December 1971) was the missile-boat attack on Karachi; Operation Vijay (Goa 1961; Kargil 1999) and Operation Meghdoot (Siachen, 1984) are different.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-51",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following organisation–headquarters pairs is INCORRECTLY matched?",
    "options": [
      "World Trade Organization – Geneva",
      "International Atomic Energy Agency – Vienna",
      "UN Environment Programme – Geneva",
      "Food and Agriculture Organization – Rome"
    ],
    "correct": 2,
    "explanation": "UNEP is headquartered in Nairobi, Kenya; the other three pairs are correct.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-52",
    "section": "gk",
    "topic": "Static GK",
    "stem": "SAARC was established at Dhaka in 1985. Its permanent Secretariat is located in ____",
    "options": [
      "Kathmandu",
      "Dhaka",
      "Colombo",
      "New Delhi"
    ],
    "correct": 0,
    "explanation": "The SAARC Secretariat was set up in Kathmandu, Nepal, in 1987; Dhaka is only where SAARC was founded.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-53",
    "section": "gk",
    "topic": "Static GK",
    "stem": "ASEAN was founded in 1967 through a declaration signed in Bangkok. The ASEAN Secretariat is located in ____",
    "options": [
      "Bangkok",
      "Singapore",
      "Jakarta",
      "Manila"
    ],
    "correct": 2,
    "explanation": "The ASEAN Secretariat is in Jakarta, Indonesia; Bangkok is where the founding declaration was signed.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-54",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The headquarters of the International Solar Alliance (ISA), launched jointly by India and France in 2015, is at ____",
    "options": [
      "Paris",
      "Gurugram",
      "Abu Dhabi",
      "New Delhi"
    ],
    "correct": 1,
    "explanation": "The ISA Secretariat is at Gwal Pahari, Gurugram (Haryana); Abu Dhabi hosts IRENA, a different body.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-55",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The New Development Bank, set up by the BRICS countries, has its headquarters in ____",
    "options": [
      "Beijing",
      "Moscow",
      "New Delhi",
      "Shanghai"
    ],
    "correct": 3,
    "explanation": "The NDB is headquartered in Shanghai, China; its first President was India's K.V. Kamath.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-56",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Asian Development Bank (ADB) is headquartered in ____",
    "options": [
      "Manila",
      "Beijing",
      "Tokyo",
      "Singapore"
    ],
    "correct": 0,
    "explanation": "ADB (founded 1966) is based in Metro Manila, Philippines; Beijing hosts the Asian Infrastructure Investment Bank (AIIB).",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-57",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following CSIR laboratories is NOT located in Lucknow?",
    "options": [
      "Central Drug Research Institute (CDRI)",
      "National Botanical Research Institute (NBRI)",
      "Central Food Technological Research Institute (CFTRI)",
      "Central Institute of Medicinal and Aromatic Plants (CIMAP)"
    ],
    "correct": 2,
    "explanation": "CFTRI is in Mysuru, Karnataka; CDRI, NBRI and CIMAP are all in Lucknow.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-58",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Small Industries Development Bank of India (SIDBI), set up in 1990, has its head office in ____",
    "options": [
      "Mumbai",
      "New Delhi",
      "Lucknow",
      "Kolkata"
    ],
    "correct": 2,
    "explanation": "SIDBI is headquartered in Lucknow, unlike most national financial institutions, which are based in Mumbai.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-59",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The International Union for Conservation of Nature (IUCN), which publishes the Red List of Threatened Species, is headquartered in ____",
    "options": [
      "Geneva",
      "Nairobi",
      "Bonn",
      "Gland"
    ],
    "correct": 3,
    "explanation": "IUCN is based in Gland, Switzerland (as is WWF International); Nairobi hosts UNEP and Bonn the UNFCCC Secretariat.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-60",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The International Committee of the Red Cross (Geneva, 1863) was founded at the initiative of ____",
    "options": [
      "Florence Nightingale",
      "Henry Dunant",
      "Alfred Nobel",
      "Clara Barton"
    ],
    "correct": 1,
    "explanation": "Henry Dunant inspired its founding and shared the first Nobel Peace Prize in 1901; Clara Barton founded the American Red Cross.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-61",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Mother Teresa received the Nobel Peace Prize in ____",
    "options": [
      "1975",
      "1979",
      "1980",
      "1985"
    ],
    "correct": 1,
    "explanation": "She won the Nobel Peace Prize in 1979; 1980 is the year she was awarded the Bharat Ratna, a common trap.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-62",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first person to be awarded the Bharat Ratna posthumously (1966) was ____",
    "options": [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Lal Bahadur Shastri",
      "Mahatma Gandhi"
    ],
    "correct": 2,
    "explanation": "Lal Bahadur Shastri was the first posthumous recipient (1966); Patel received it posthumously only in 1991, and Gandhi never received it.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-63",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first person who was not a citizen of India to be awarded the Bharat Ratna (1987) was ____",
    "options": [
      "Nelson Mandela",
      "Mother Teresa",
      "Khan Abdul Ghaffar Khan",
      "The Dalai Lama"
    ],
    "correct": 2,
    "explanation": "Khan Abdul Ghaffar Khan ('Frontier Gandhi') received it in 1987; Mandela followed in 1990, and Mother Teresa was a naturalised Indian citizen.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-64",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian to receive the Ramon Magsaysay Award (1958, Community Leadership) was ____",
    "options": [
      "Mother Teresa",
      "Vinoba Bhave",
      "Satyajit Ray",
      "Jayaprakash Narayan"
    ],
    "correct": 1,
    "explanation": "Vinoba Bhave, leader of the Bhoodan movement, received it in 1958, the first year the award was given.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-65",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first woman to receive the Jnanpith Award (1976) was ____",
    "options": [
      "Amrita Pritam",
      "Mahadevi Verma",
      "Mahasweta Devi",
      "Ashapoorna Devi"
    ],
    "correct": 3,
    "explanation": "Bengali writer Ashapoorna Devi won it in 1976 for 'Pratham Pratishruti'; Amrita Pritam (1981) and Mahadevi Verma (1982) came later.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-66",
    "section": "gk",
    "topic": "Static GK",
    "stem": "India's first sound film (talkie), 'Alam Ara' (1931), was directed by ____",
    "options": [
      "Ardeshir Irani",
      "Dadasaheb Phalke",
      "V. Shantaram",
      "Himanshu Rai"
    ],
    "correct": 0,
    "explanation": "Ardeshir Irani directed 'Alam Ara'; Dadasaheb Phalke made India's first full-length silent feature, 'Raja Harishchandra' (1913).",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-67",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian to win an Academy Award (Oscar) was ____",
    "options": [
      "Satyajit Ray",
      "A.R. Rahman",
      "Resul Pookutty",
      "Bhanu Athaiya"
    ],
    "correct": 3,
    "explanation": "Bhanu Athaiya won for Best Costume Design for 'Gandhi' at the 1983 ceremony; Satyajit Ray's honorary Oscar came in 1992 and Rahman's in 2009.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-68",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The Sahitya Akademi Award is given for literary works in how many languages?",
    "options": [
      "22",
      "18",
      "24",
      "26"
    ],
    "correct": 2,
    "explanation": "It covers 24 languages: the 22 Eighth Schedule languages plus English and Rajasthani.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-69",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first recipient of the Param Vir Chakra, awarded posthumously for action in Kashmir in 1947, was ____",
    "options": [
      "Major Somnath Sharma",
      "Company Quartermaster Havildar Abdul Hamid",
      "Captain Vikram Batra",
      "Second Lieutenant Arun Khetarpal"
    ],
    "correct": 0,
    "explanation": "Major Somnath Sharma was honoured for the Battle of Badgam (November 1947); the others were awarded for the 1965, 1999 and 1971 wars.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-70",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian woman to win the Booker Prize (1997) for 'The God of Small Things' was ____",
    "options": [
      "Kiran Desai",
      "Arundhati Roy",
      "Anita Desai",
      "Jhumpa Lahiri"
    ],
    "correct": 1,
    "explanation": "Arundhati Roy won in 1997; Kiran Desai won in 2006 for 'The Inheritance of Loss', while Anita Desai was shortlisted but never won.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-71",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Jawaharlal Nehru wrote 'The Discovery of India' while imprisoned at ____",
    "options": [
      "Naini Central Jail",
      "Yerawada Jail",
      "Cellular Jail, Port Blair",
      "Ahmednagar Fort"
    ],
    "correct": 3,
    "explanation": "He wrote it in Ahmednagar Fort in 1944, during his imprisonment after the Quit India Movement.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-72",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Mahatma Gandhi's 'Hind Swaraj' (1909) was originally written in ____",
    "options": [
      "English",
      "Gujarati",
      "Hindi",
      "Marathi"
    ],
    "correct": 1,
    "explanation": "Gandhi wrote it in Gujarati aboard a ship from London to South Africa and later translated it into English himself.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-73",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following novels was NOT written by Premchand?",
    "options": [
      "Rangbhoomi",
      "Nirmala",
      "Chitralekha",
      "Gaban"
    ],
    "correct": 2,
    "explanation": "'Chitralekha' is by Bhagwati Charan Verma; 'Rangbhoomi', 'Nirmala' and 'Gaban' are Premchand's novels.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-74",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Indian woman to become President of the Indian National Congress (Kanpur session, 1925) was ____",
    "options": [
      "Sarojini Naidu",
      "Annie Besant",
      "Nellie Sengupta",
      "Vijaya Lakshmi Pandit"
    ],
    "correct": 0,
    "explanation": "Sarojini Naidu presided over the 1925 Kanpur session; Annie Besant (1917) was the first woman President but was not Indian-born.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-75",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Rakesh Sharma, the first Indian in space (1984), travelled aboard the Soviet spacecraft ____",
    "options": [
      "Salyut 7",
      "Vostok 1",
      "Soyuz T-11",
      "Apollo 11"
    ],
    "correct": 2,
    "explanation": "He flew on Soyuz T-11 and stayed aboard the Salyut 7 space station, which is the usual trap.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-76",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The only Indian to serve as Governor-General of independent India was ____",
    "options": [
      "Rajendra Prasad",
      "C. Rajagopalachari",
      "Sardar Vallabhbhai Patel",
      "S. Radhakrishnan"
    ],
    "correct": 1,
    "explanation": "C. Rajagopalachari succeeded Lord Mountbatten in 1948 and held the post until it was abolished on 26 January 1950.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-77",
    "section": "gk",
    "topic": "Static GK",
    "stem": "Which of the following trophy–sport pairs is INCORRECTLY matched?",
    "options": [
      "Santosh Trophy – Football",
      "Duleep Trophy – Cricket",
      "Aga Khan Cup – Hockey",
      "Beighton Cup – Football"
    ],
    "correct": 3,
    "explanation": "The Beighton Cup is one of India's oldest hockey tournaments; the other three pairs are correct.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-78",
    "section": "gk",
    "topic": "Static GK",
    "stem": "In which of the following games does each team have only 4 players on the field?",
    "options": [
      "Water polo",
      "Netball",
      "Baseball",
      "Polo"
    ],
    "correct": 3,
    "explanation": "A polo team has 4 riders; water polo and netball have 7 players per side and baseball has 9.",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-79",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Summer Olympic Games to be held in Asia took place in ____",
    "options": [
      "Tokyo, 1964",
      "Seoul, 1988",
      "Melbourne, 1956",
      "Beijing, 2008"
    ],
    "correct": 0,
    "explanation": "Tokyo 1964 was the first Summer Olympics in Asia; Melbourne 1956 was the first in the Southern Hemisphere (Oceania).",
    "difficulty": "hard",
    "level": "proficient"
  },
  {
    "id": "modL-80",
    "section": "gk",
    "topic": "Static GK",
    "stem": "The first Asian Games were held in 1951 in ____",
    "options": [
      "Manila",
      "New Delhi",
      "Tokyo",
      "Jakarta"
    ],
    "correct": 1,
    "explanation": "The inaugural Asian Games were hosted by New Delhi in March 1951; Manila hosted the second edition in 1954.",
    "difficulty": "hard",
    "level": "proficient"
  }
];

export const moderateHi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  "modD-1": {
    "stem": "वह बड़ी से बड़ी संख्या कौन-सी है जिससे 245 और 1029 को भाग देने पर प्रत्येक दशा में 5 शेष बचे?",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "explanation": "शेषफल घटाएँ: HCF(240, 1024) = 16, क्योंकि 240 = 2⁴ × 15 और 1024 = 2¹⁰।"
  },
  "modD-2": {
    "stem": "50 और 100 के बीच कितनी अभाज्य संख्याएँ हैं?",
    "options": [
      "9",
      "11",
      "10",
      "12"
    ],
    "explanation": "ये 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 हैं: कुल दस (51, 57, 87, 91 भाज्य हैं)।"
  },
  "modD-3": {
    "stem": "3⁶⁵ × 6⁵⁹ × 7⁷¹ का इकाई अंक है ____",
    "options": [
      "2",
      "6",
      "8",
      "4"
    ],
    "explanation": "इकाई अंक: 3⁶⁵ → 3 (65 = 4×16 + 1), 6⁵⁹ → 6, 7⁷¹ → 3 (71 = 4×17 + 3, 7³ = 343); 3 × 6 × 3 = 54, अतः 4।"
  },
  "modD-4": {
    "stem": "360 के कुल गुणनखंडों (भाजकों) की संख्या है ____",
    "options": [
      "24",
      "20",
      "18",
      "30"
    ],
    "explanation": "360 = 2³ × 3² × 5, अतः गुणनखंडों की संख्या = (3+1)(2+1)(1+1) = 24।"
  },
  "modD-5": {
    "stem": "यदि पाँच अंकों की संख्या 72x46, 9 से विभाज्य है, तो अंक x है ____",
    "options": [
      "5",
      "8",
      "7",
      "9"
    ],
    "explanation": "अंकों का योग 7 + 2 + 4 + 6 + x = 19 + x, 9 का गुणज होना चाहिए; केवल x = 8 (योग 27) से यह संभव है।"
  },
  "modD-6": {
    "stem": "निम्नलिखित में से कौन-सी संख्या 11 से विभाज्य है?",
    "options": [
      "3423",
      "72813",
      "4832718",
      "92354"
    ],
    "explanation": "4832718 में एकांतर अंकों के योगों का अंतर (8+7+3+4) − (1+2+8) = 11 है, जो 11 का गुणज है; अन्य में यह 2, 15 और 9 आता है।"
  },
  "modD-7": {
    "stem": "सरल कीजिए: 1 + 1/(1 + 1/(1 + 1/2))",
    "options": [
      "5/3",
      "13/8",
      "3/2",
      "8/5"
    ],
    "explanation": "नीचे से हल करें: 1 + 1/2 = 3/2; 1 + 2/3 = 5/3; 1 + 3/5 = 8/5।"
  },
  "modD-8": {
    "stem": "तीन घंटियाँ क्रमशः 9, 12 और 15 मिनट के अंतराल पर बजती हैं। यदि वे प्रातः 8:00 बजे एक साथ बजती हैं, तो अगली बार एक साथ कब बजेंगी?",
    "options": [
      "प्रातः 11:00 बजे",
      "प्रातः 10:00 बजे",
      "प्रातः 10:30 बजे",
      "प्रातः 11:30 बजे"
    ],
    "explanation": "LCM(9, 12, 15) = 180 मिनट = 3 घंटे, अतः 8:00 + 3 घंटे = प्रातः 11:00 बजे।"
  },
  "modD-9": {
    "stem": "भिन्नों 2/3, 8/9 और 10/27 का महत्तम समापवर्तक (HCF) है ____",
    "options": [
      "2/3",
      "2/27",
      "40/3",
      "1/27"
    ],
    "explanation": "भिन्नों का HCF = अंशों का HCF ÷ हरों का LCM = HCF(2, 8, 10)/LCM(3, 9, 27) = 2/27।"
  },
  "modD-10": {
    "stem": "गुणनफल 25 × 40 × 60 × 75 के अंत में कितने शून्य होंगे?",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "explanation": "2 और 5 के जोड़े गिनें: गुणनफल में 5⁶ है पर 2⁵ ही है (40 = 2³×5 और 60 = 2²×3×5 से), अतः केवल 5 शून्य: केवल 5 गिनने पर भ्रामक उत्तर 6 आता है।"
  },
  "modK-1": {
    "stem": "लखनऊ घराना किस भारतीय शास्त्रीय नृत्य की प्रसिद्ध शैली है?",
    "options": [
      "भरतनाट्यम",
      "ओडिसी",
      "कथक",
      "कुचिपुड़ी"
    ],
    "explanation": "कथक के तीन प्रमुख घराने हैं: लखनऊ, जयपुर और बनारस। लखनऊ घराना अवध के नवाबों के संरक्षण में विकसित हुआ।"
  },
  "modK-2": {
    "stem": "'लट्ठमार होली' सबसे अधिक प्रसिद्ध रूप से मथुरा ज़िले के किस स्थान पर मनाई जाती है?",
    "options": [
      "बरसाना",
      "गोकुल",
      "गोवर्धन",
      "महावन"
    ],
    "explanation": "लट्ठमार होली बरसाना (और अगले दिन नंदगाँव) में खेली जाती है, जहाँ महिलाएँ पुरुषों पर लाठियों से प्रतीकात्मक प्रहार करती हैं।"
  },
  "modK-3": {
    "stem": "कुंभ मेले को यूनेस्को की 'मानवता की अमूर्त सांस्कृतिक विरासत की प्रतिनिधि सूची' में किस वर्ष शामिल किया गया?",
    "options": [
      "2008",
      "2013",
      "2017",
      "2019"
    ],
    "explanation": "यूनेस्को ने दिसंबर 2017 में कुंभ मेले को अमूर्त सांस्कृतिक विरासत सूची में शामिल किया। 2008 भ्रामक विकल्प है; उस वर्ष रामलीला शामिल हुई थी।"
  },
  "modK-4": {
    "stem": "उत्तर प्रदेश का सोनभद्र ज़िला कितने अन्य राज्यों के साथ सीमा साझा करता है?",
    "options": [
      "दो",
      "तीन",
      "पाँच",
      "चार"
    ],
    "explanation": "सोनभद्र की सीमा चार राज्यों से लगती है: मध्य प्रदेश, छत्तीसगढ़, झारखंड और बिहार।"
  },
  "modK-5": {
    "stem": "कितने भारतीय राज्य (केंद्रशासित प्रदेशों को छोड़कर) उत्तर प्रदेश के साथ सीमा साझा करते हैं?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "explanation": "उत्तर प्रदेश की सीमा 8 राज्यों से लगती है: उत्तराखंड, हिमाचल प्रदेश, हरियाणा, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड और बिहार। दिल्ली (केंद्रशासित प्रदेश) से भी सीमा लगती है, इसलिए 9 भ्रामक विकल्प है।"
  },
  "modK-6": {
    "stem": "निम्नलिखित में से कौन-सी नदी यमुना की सहायक नदी नहीं है?",
    "options": [
      "केन",
      "बेतवा",
      "गोमती",
      "चंबल"
    ],
    "explanation": "केन, बेतवा और चंबल यमुना में मिलती हैं। गोमती लखनऊ से होकर बहती है और सीधे गंगा में मिलती है।"
  },
  "modK-7": {
    "stem": "उत्तर प्रदेश, मध्य प्रदेश और राजस्थान में फैला राष्ट्रीय चंबल अभयारण्य मुख्यतः किस जीव के संरक्षण के लिए जाना जाता है?",
    "options": [
      "घड़ियाल",
      "एक सींग वाला गैंडा",
      "बारहसिंगा",
      "एशियाई शेर"
    ],
    "explanation": "राष्ट्रीय चंबल अभयारण्य गंभीर रूप से संकटग्रस्त घड़ियाल का प्रमुख आवास है। गैंडा और बारहसिंगा दुधवा से जुड़े हैं।"
  },
  "modK-8": {
    "stem": "दुधवा टाइगर रिज़र्व का भाग कतर्नियाघाट वन्यजीव अभयारण्य उत्तर प्रदेश के किस ज़िले में स्थित है?",
    "options": [
      "लखीमपुर खीरी",
      "पीलीभीत",
      "श्रावस्ती",
      "बहराइच"
    ],
    "explanation": "कतर्नियाघाट वन्यजीव अभयारण्य बहराइच ज़िले में नेपाल सीमा के पास गिरवा नदी के किनारे स्थित है। यह दुधवा टाइगर रिज़र्व का भाग है।"
  },
  "modK-9": {
    "stem": "हाथ से बने घोड़ों और हाथियों के लिए प्रसिद्ध जीआई-टैग प्राप्त टेराकोटा शिल्प उत्तर प्रदेश के किस ज़िले से संबंधित है?",
    "options": [
      "आज़मगढ़",
      "गोरखपुर",
      "बुलंदशहर",
      "मिर्ज़ापुर"
    ],
    "explanation": "गोरखपुर के टेराकोटा को जीआई टैग प्राप्त है और यह ज़िले का ओडीओपी उत्पाद भी है। आज़मगढ़ काली मिट्टी के बर्तनों (निज़ामाबाद) के लिए जाना जाता है।"
  },
  "modK-10": {
    "stem": "पश्चिमी उत्तर प्रदेश का सहारनपुर अंतरराष्ट्रीय स्तर पर किस शिल्प के लिए जाना जाता है?",
    "options": [
      "पीतल के बर्तन",
      "काँच की चूड़ियाँ",
      "कालीन बुनाई",
      "लकड़ी पर नक्काशी"
    ],
    "explanation": "सहारनपुर लकड़ी पर नक्काशी (मुख्यतः शीशम के फ़र्नीचर व हस्तशिल्प) के लिए प्रसिद्ध है। पीतल के बर्तन मुरादाबाद और काँच की चूड़ियाँ फ़िरोज़ाबाद की पहचान हैं।"
  },
  "modK-11": {
    "stem": "पश्चिमी उत्तर प्रदेश का कौन-सा शहर खेल-सामग्री उद्योग का प्रमुख केंद्र है?",
    "options": [
      "अलीगढ़",
      "मेरठ",
      "मुरादाबाद",
      "सहारनपुर"
    ],
    "explanation": "मेरठ भारत के प्रमुख खेल-सामग्री केंद्रों में से एक है (क्रिकेट बैट, गेंद आदि)। अलीगढ़ तालों और मुरादाबाद पीतल के बर्तनों के लिए जाना जाता है।"
  },
  "modK-12": {
    "stem": "उत्तर प्रदेश विधान परिषद में कुल कितने सदस्य होते हैं?",
    "options": [
      "80",
      "403",
      "100",
      "31"
    ],
    "explanation": "उत्तर प्रदेश विधान परिषद में 100 सदस्य हैं। 403 विधानसभा की सदस्य संख्या है, जबकि 80 और 31 क्रमशः लोकसभा और राज्यसभा में उत्तर प्रदेश की सीटें हैं।"
  },
  "modK-13": {
    "stem": "प्रयागराज स्थित मुख्य पीठ के अतिरिक्त इलाहाबाद उच्च न्यायालय की स्थायी खंडपीठ कहाँ है?",
    "options": [
      "लखनऊ",
      "वाराणसी",
      "आगरा",
      "मेरठ"
    ],
    "explanation": "इलाहाबाद उच्च न्यायालय की मुख्य पीठ प्रयागराज में है और इसकी एकमात्र स्थायी खंडपीठ लखनऊ में है।"
  },
  "modK-14": {
    "stem": "स्वतंत्रता के बाद संयुक्त प्रांत (वर्तमान उत्तर प्रदेश) की पहली राज्यपाल, जो भारत की पहली महिला राज्यपाल भी थीं, कौन थीं?",
    "options": [
      "सुचेता कृपलानी",
      "विजयलक्ष्मी पंडित",
      "राजकुमारी अमृत कौर",
      "सरोजिनी नायडू"
    ],
    "explanation": "सरोजिनी नायडू 1947 में संयुक्त प्रांत की राज्यपाल बनीं और भारत की पहली महिला राज्यपाल थीं। सुचेता कृपलानी भ्रामक विकल्प है; वे भारत की पहली महिला मुख्यमंत्री (उत्तर प्रदेश, 1963) थीं।"
  },
  "modK-15": {
    "stem": "उत्तर प्रदेश लोक सेवा आयोग (UPPSC) का मुख्यालय कहाँ स्थित है?",
    "options": [
      "लखनऊ",
      "कानपुर",
      "प्रयागराज",
      "वाराणसी"
    ],
    "explanation": "राज्य की राजधानी लखनऊ होने के बावजूद उत्तर प्रदेश लोक सेवा आयोग का मुख्यालय प्रयागराज में है। माध्यमिक शिक्षा परिषद (यूपी बोर्ड) भी प्रयागराज में स्थित है।"
  },
  "modK-16": {
    "stem": "उत्तर प्रदेश बेसिक शिक्षा विभाग के 'ऑपरेशन कायाकल्प' का मुख्य उद्देश्य क्या है?",
    "options": [
      "विद्यालय यूनिफ़ॉर्म का निःशुल्क वितरण",
      "सरकारी बेसिक विद्यालयों की मूलभूत अवसंरचना (शौचालय, पेयजल, कक्षा-कक्ष) में सुधार",
      "उच्च प्राथमिक छात्रों के लिए मध्याह्न भोजन",
      "सहायक अध्यापकों की भर्ती"
    ],
    "explanation": "ऑपरेशन कायाकल्प (2018 में आरंभ) के अंतर्गत ग्राम पंचायत आदि की निधियों से परिषदीय बेसिक विद्यालयों की भौतिक अवसंरचना को निर्धारित मूलभूत मानकों के अनुसार सुधारा जाता है।"
  },
  "modK-17": {
    "stem": "सीएसआईआर की प्रयोगशाला केंद्रीय औषधि अनुसंधान संस्थान (CDRI) कहाँ स्थित है?",
    "options": [
      "लखनऊ",
      "कानपुर",
      "वाराणसी",
      "प्रयागराज"
    ],
    "explanation": "सीडीआरआई लखनऊ स्थित सीएसआईआर प्रयोगशाला है। लखनऊ में राष्ट्रीय वनस्पति अनुसंधान संस्थान (NBRI) जैसी अन्य सीएसआईआर प्रयोगशालाएँ भी हैं।"
  },
  "modK-18": {
    "stem": "इज़्ज़तनगर स्थित भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) उत्तर प्रदेश के किस ज़िले में है?",
    "options": [
      "मथुरा",
      "बरेली",
      "मेरठ",
      "इटावा"
    ],
    "explanation": "आईवीआरआई बरेली ज़िले के इज़्ज़तनगर में है। मथुरा भ्रामक विकल्प है; वहाँ एक अलग पशु चिकित्सा विश्वविद्यालय (DUVASU) है।"
  },
  "modK-19": {
    "stem": "गंगा के तट पर स्थित नरौरा परमाणु विद्युत केंद्र उत्तर प्रदेश के किस ज़िले में है?",
    "options": [
      "सोनभद्र",
      "फ़र्रुख़ाबाद",
      "अलीगढ़",
      "बुलंदशहर"
    ],
    "explanation": "नरौरा परमाणु विद्युत केंद्र बुलंदशहर ज़िले में है। सोनभद्र भ्रामक विकल्प है; वह कोयला-आधारित ताप विद्युत के लिए जाना जाता है।"
  },
  "modK-20": {
    "stem": "उत्तर प्रदेश दिवस प्रतिवर्ष किस तिथि को मनाया जाता है?",
    "options": [
      "26 जनवरी",
      "1 नवंबर",
      "24 जनवरी",
      "15 अगस्त"
    ],
    "explanation": "उत्तर प्रदेश दिवस 24 जनवरी को मनाया जाता है, क्योंकि 24 जनवरी 1950 को संयुक्त प्रांत का नाम बदलकर उत्तर प्रदेश किया गया था। 1 नवंबर भ्रामक विकल्प है; उस दिन कई अन्य राज्य अपना स्थापना दिवस मनाते हैं।"
  },
  "modK-21": {
    "stem": "यमुना एक्सप्रेसवे ग्रेटर नोएडा को किस शहर से जोड़ता है?",
    "options": [
      "मथुरा",
      "इटावा",
      "आगरा",
      "लखनऊ"
    ],
    "explanation": "यमुना एक्सप्रेसवे ग्रेटर नोएडा से आगरा तक जाता है। मथुरा इसके मार्ग में पड़ता है, और आगरा से लखनऊ तक आगरा-लखनऊ एक्सप्रेसवे जाता है।"
  },
  "modK-22": {
    "stem": "लखनऊ के रूमी दरवाज़ा और बड़ा इमामबाड़ा का निर्माण अवध के किस नवाब ने कराया?",
    "options": [
      "वाजिद अली शाह",
      "सआदत अली ख़ाँ",
      "शुजाउद्दौला",
      "आसफ़ुद्दौला"
    ],
    "explanation": "नवाब आसफ़ुद्दौला ने 1780 के दशक में दोनों स्मारक बनवाए, आंशिक रूप से अकाल-राहत कार्य के रूप में। उन्होंने अवध की राजधानी फ़ैज़ाबाद से लखनऊ स्थानांतरित की थी।"
  },
  "modK-23": {
    "stem": "देवगढ़ का गुप्तकालीन दशावतार मंदिर उत्तर प्रदेश के किस ज़िले में स्थित है?",
    "options": [
      "ललितपुर",
      "झाँसी",
      "चित्रकूट",
      "महोबा"
    ],
    "explanation": "उत्तर भारत के सबसे प्राचीन बचे हुए पाषाण मंदिरों में से एक, देवगढ़ का दशावतार (विष्णु) मंदिर ललितपुर ज़िले में बेतवा नदी के तट पर है।"
  },
  "modK-24": {
    "stem": "फ़रवरी 1922 की चौरी-चौरा घटना, जिसके बाद गांधीजी ने असहयोग आंदोलन वापस ले लिया, उत्तर प्रदेश के किस ज़िले में हुई थी?",
    "options": [
      "देवरिया",
      "गोरखपुर",
      "बस्ती",
      "आज़मगढ़"
    ],
    "explanation": "गोरखपुर ज़िले के चौरी-चौरा में भीड़ ने एक पुलिस थाने में आग लगा दी थी। इसके बाद गांधीजी ने असहयोग आंदोलन स्थगित कर दिया।"
  },
  "modK-25": {
    "stem": "वर्तमान प्रयागराज के निकट स्थित कौशाम्बी किस प्राचीन महाजनपद की राजधानी थी?",
    "options": [
      "कोसल",
      "काशी",
      "पांचाल",
      "वत्स"
    ],
    "explanation": "कौशाम्बी वत्स महाजनपद की राजधानी थी, जहाँ बुद्ध के समय राजा उदयन का शासन था। कोसल की राजधानी श्रावस्ती थी।"
  },
  "modK-26": {
    "stem": "अवध राज्य को 1856 में कुशासन के आधार पर किस गवर्नर-जनरल के समय अंग्रेज़ों ने अपने राज्य में मिला लिया?",
    "options": [
      "लॉर्ड डलहौज़ी",
      "लॉर्ड कैनिंग",
      "लॉर्ड वेलेज़ली",
      "लॉर्ड विलियम बेंटिक"
    ],
    "explanation": "लॉर्ड डलहौज़ी ने 1856 में नवाब वाजिद अली शाह को अपदस्थ कर अवध का विलय किया; इसका आधार व्यपगत सिद्धांत नहीं, बल्कि कुशासन बताया गया। कैनिंग भ्रामक विकल्प है; उन्होंने 1856 में बाद में पदभार संभाला।"
  },
  "modK-27": {
    "stem": "भाकृअनुप–भारतीय दलहन अनुसंधान संस्थान (IIPR) उत्तर प्रदेश के किस शहर में स्थित है?",
    "options": [
      "लखनऊ",
      "कानपुर",
      "वाराणसी",
      "झाँसी"
    ],
    "explanation": "IIPR कानपुर में है। झाँसी में एक अलग ICAR संस्थान, भारतीय चरागाह एवं चारा अनुसंधान संस्थान, है; यही आम भ्रम है।"
  },
  "modK-28": {
    "stem": "चन्द्रप्रभा वन्यजीव अभयारण्य, जहाँ 1958 में एशियाई शेरों को दूसरा आवास देने के असफल प्रयास में छोड़ा गया था, उत्तर प्रदेश के किस जिले में है?",
    "options": [
      "सोनभद्र",
      "मिर्ज़ापुर",
      "चन्दौली",
      "ललितपुर"
    ],
    "explanation": "चन्द्रप्रभा वन्यजीव अभयारण्य चन्दौली जिले की विंध्य पहाड़ियों में स्थित है। 1958 में छोड़े गए शेर लंबे समय तक जीवित नहीं रह सके।"
  },
  "modK-29": {
    "stem": "गंगा के तट पर एक चट्टान पर स्थित ऐतिहासिक चुनार का किला उत्तर प्रदेश के किस जिले में है?",
    "options": [
      "मिर्ज़ापुर",
      "वाराणसी",
      "चन्दौली",
      "सोनभद्र"
    ],
    "explanation": "चुनार का किला मिर्ज़ापुर जिले में, वाराणसी से ऊपर की ओर गंगा तट पर है। वाराणसी से निकटता के कारण अभ्यर्थी प्रायः भ्रमित हो जाते हैं।"
  },
  "modK-30": {
    "stem": "हाथरस शैली और कानपुर शैली उत्तर प्रदेश के किस लोकनाट्य की दो प्रसिद्ध शैलियाँ हैं?",
    "options": [
      "रासलीला",
      "बिदेसिया",
      "नौटंकी",
      "रामलीला"
    ],
    "explanation": "उत्तर प्रदेश के संगीतमय लोकनाट्य नौटंकी की दो प्रसिद्ध शैलियाँ हाथरस और कानपुर में विकसित हुईं। बिदेसिया भोजपुरी लोकनाट्य है।"
  },
  "modK-31": {
    "stem": "सूची-I (शहर) को सूची-II (जिस नदी के तट पर स्थित है) से सुमेलित कीजिए:\nसूची-I: A. गोरखपुर  B. जौनपुर  C. मुरादाबाद  D. मिर्ज़ापुर\nसूची-II: 1. गंगा  2. रामगंगा  3. गोमती  4. राप्ती",
    "options": [
      "A-3, B-4, C-2, D-1",
      "A-4, B-2, C-3, D-1",
      "A-4, B-3, C-2, D-1",
      "A-1, B-3, C-2, D-4"
    ],
    "explanation": "गोरखपुर राप्ती पर, जौनपुर गोमती पर, मुरादाबाद रामगंगा पर और मिर्ज़ापुर गंगा पर स्थित है।"
  },
  "modK-32": {
    "stem": "पश्चिमोत्तर प्रान्त का उच्च न्यायालय, जो आज के इलाहाबाद उच्च न्यायालय का पूर्ववर्ती है, 1866 में सर्वप्रथम कहाँ स्थापित हुआ था?",
    "options": [
      "इलाहाबाद",
      "लखनऊ",
      "आगरा",
      "मेरठ"
    ],
    "explanation": "इसकी स्थापना 1866 में आगरा में हुई और 1869 में इसे इलाहाबाद स्थानांतरित किया गया। लखनऊ बाद में इसकी स्थायी खंडपीठ बना।"
  },
  "modK-33": {
    "stem": "सूची-I (स्थान) को सूची-II (जिस शिल्प के लिए प्रसिद्ध है) से सुमेलित कीजिए:\nसूची-I: A. खुर्जा  B. निज़ामाबाद (आज़मगढ़)  C. पिलखुवा  D. सम्भल\nसूची-II: 1. सींग एवं हड्डी शिल्प  2. काली मिट्टी के बर्तन  3. सिरेमिक (चीनी मिट्टी) के बर्तन  4. हाथ की ब्लॉक छपाई वाले वस्त्र",
    "options": [
      "A-2, B-3, C-4, D-1",
      "A-3, B-2, C-4, D-1",
      "A-3, B-2, C-1, D-4",
      "A-3, B-4, C-2, D-1"
    ],
    "explanation": "खुर्जा सिरेमिक बर्तनों, निज़ामाबाद काली मिट्टी के बर्तनों, पिलखुवा हैंड-ब्लॉक छपाई और सम्भल सींग-हड्डी शिल्प के लिए प्रसिद्ध है।"
  },
  "modK-34": {
    "stem": "संकिसा, जहाँ माना जाता है कि बुद्ध अपनी माता को उपदेश देने के बाद त्रायस्त्रिंश स्वर्ग से अवतरित हुए थे, उत्तर प्रदेश के किस जिले में स्थित है?",
    "options": [
      "कन्नौज",
      "एटा",
      "श्रावस्ती",
      "फ़र्रुख़ाबाद"
    ],
    "explanation": "संकिसा फ़र्रुख़ाबाद जिले में है और आठ प्रमुख बौद्ध तीर्थस्थलों में से एक है। श्रावस्ती का संबंध जेतवन विहार से है।"
  },
  "modK-35": {
    "stem": "निम्नलिखित कथनों पर विचार कीजिए:\nI. उत्तरांचल (अब उत्तराखण्ड) का गठन नवम्बर 2000 में उत्तर प्रदेश से अलग करके किया गया।\nII. यह भारत का 27वाँ राज्य बना।\nIII. इसका गठन झारखण्ड के बाद हुआ।\nउपर्युक्त कथनों में से कौन-सा/से सही है/हैं?",
    "options": [
      "केवल I और II",
      "केवल I और III",
      "केवल II और III",
      "I, II और III"
    ],
    "explanation": "उत्तरांचल 9 नवम्बर 2000 को 27वें राज्य के रूप में बना: छत्तीसगढ़ (1 नवम्बर) के बाद और झारखण्ड (15 नवम्बर) से पहले, अतः कथन III गलत है।"
  },
  "modK-36": {
    "stem": "इस प्रान्त का नाम 'संयुक्त प्रान्त आगरा एवं अवध' किस वर्ष रखा गया?",
    "options": [
      "1877",
      "1902",
      "1937",
      "1950"
    ],
    "explanation": "पश्चिमोत्तर प्रान्त और अवध 1877 में एक प्रशासन के अधीन आए, 1902 में इनका नाम संयुक्त प्रान्त आगरा एवं अवध रखा गया, 1937 में यह 'संयुक्त प्रान्त' और 1950 में उत्तर प्रदेश बना।"
  },
  "modK-37": {
    "stem": "सूची-I (1857 के विद्रोह का केन्द्र) को सूची-II (नेता) से सुमेलित कीजिए:\nसूची-I: A. लखनऊ  B. कानपुर  C. बरेली  D. फ़ैज़ाबाद\nसूची-II: 1. मौलवी अहमदुल्लाह शाह  2. ख़ान बहादुर ख़ान  3. नाना साहब  4. बेगम हज़रत महल",
    "options": [
      "A-4, B-3, C-1, D-2",
      "A-3, B-4, C-2, D-1",
      "A-2, B-3, C-4, D-1",
      "A-4, B-3, C-2, D-1"
    ],
    "explanation": "लखनऊ में बेगम हज़रत महल, कानपुर में नाना साहब, बरेली में ख़ान बहादुर ख़ान और फ़ैज़ाबाद में मौलवी अहमदुल्लाह शाह ने नेतृत्व किया।"
  },
  "modK-38": {
    "stem": "1916 में आयोजित भारतीय राष्ट्रीय कांग्रेस के लखनऊ अधिवेशन के संबंध में निम्नलिखित कथनों पर विचार कीजिए:\nI. इसी अधिवेशन में कांग्रेस और मुस्लिम लीग के बीच समझौता हुआ।\nII. इसी अधिवेशन में नरमपंथी और गरमपंथी फिर से एक हुए।\nIII. इसकी अध्यक्षता जवाहरलाल नेहरू ने की।\nउपर्युक्त कथनों में से कौन-सा/से सही है/हैं?",
    "options": [
      "केवल I",
      "केवल I और II",
      "केवल II और III",
      "I, II और III"
    ],
    "explanation": "1916 के लखनऊ अधिवेशन में लखनऊ समझौता हुआ और नरमपंथी-गरमपंथी पुनः एक हुए; इसकी अध्यक्षता अम्बिका चरण मजूमदार ने की। नेहरू ने 1936 के लखनऊ अधिवेशन की अध्यक्षता की थी।"
  },
  "modK-39": {
    "stem": "बाबा रामचन्द्र, एक संन्यासी जो पहले गिरमिटिया मज़दूर के रूप में फ़िजी जा चुके थे, ने 1920–21 में उत्तर प्रदेश के किस क्षेत्र में किसान आंदोलन का नेतृत्व किया?",
    "options": [
      "अवध",
      "रुहेलखण्ड",
      "बुन्देलखण्ड",
      "दोआब"
    ],
    "explanation": "बाबा रामचन्द्र ने ताल्लुकेदारों और ज़मींदारों के विरुद्ध अवध किसान आंदोलन का नेतृत्व किया, और 1920 में जवाहरलाल नेहरू की भागीदारी से अवध किसान सभा बनी।"
  },
  "modK-40": {
    "stem": "फ़तेहपुर सीकरी का बुलन्द दरवाज़ा अकबर ने किस पर अपनी विजय की स्मृति में बनवाया था?",
    "options": [
      "चित्तौड़",
      "बंगाल",
      "मालवा",
      "गुजरात"
    ],
    "explanation": "अकबर ने गुजरात विजय (1573) की स्मृति में बुलन्द दरवाज़ा बनवाया। चित्तौड़ पहले, 1568 में, जीता गया था और यही आम भ्रम है।"
  },
  "modK-41": {
    "stem": "उत्तर प्रदेश के स्मारकों का कौन-सा युग्म 1983 में यूनेस्को की विश्व धरोहर सूची में शामिल किया गया?",
    "options": [
      "ताजमहल और फ़तेहपुर सीकरी",
      "आगरा का किला और फ़तेहपुर सीकरी",
      "ताजमहल और आगरा का किला",
      "ताजमहल और सारनाथ"
    ],
    "explanation": "ताजमहल और आगरा का किला दोनों 1983 में शामिल किए गए; फ़तेहपुर सीकरी 1986 में शामिल हुई।"
  },
  "modK-42": {
    "stem": "आगरा स्थित एत्मादुद्दौला का मकबरा, जिसे प्रायः 'बेबी ताज' कहा जाता है, किसने बनवाया था?",
    "options": [
      "नूरजहाँ",
      "जहाँगीर",
      "शाहजहाँ",
      "मुमताज़ महल"
    ],
    "explanation": "नूरजहाँ ने इसे अपने पिता मिर्ज़ा ग़यास बेग (एत्मादुद्दौला) के लिए बनवाया। यह सफ़ेद संगमरमर और पच्चीकारी (पित्रा दुरा) वाला प्रारंभिक मुग़ल मकबरा माना जाता है।"
  },
  "modK-43": {
    "stem": "सूची-I (मेला/उत्सव) को सूची-II (जिला) से सुमेलित कीजिए:\nसूची-I: A. देवा मेला  B. बटेश्वर मेला  C. नौचन्दी मेला  D. रामनगर की रामलीला\nसूची-II: 1. मेरठ  2. बाराबंकी  3. वाराणसी  4. आगरा",
    "options": [
      "A-2, B-4, C-1, D-3",
      "A-2, B-4, C-3, D-1",
      "A-4, B-2, C-1, D-3",
      "A-1, B-4, C-2, D-3"
    ],
    "explanation": "देवा मेला देवा शरीफ़ (बाराबंकी) में, बटेश्वर मेला आगरा जिले में, नौचन्दी मेला मेरठ में और रामनगर की रामलीला वाराणसी में होती है।"
  },
  "modK-44": {
    "stem": "अवध के किस नवाब को, जो ठुमरी और कथक के प्रसिद्ध संरक्षक थे, 1856 में अंग्रेज़ों द्वारा अवध के विलय पर अपदस्थ किया गया और जिन्होंने अपने अंतिम वर्ष कलकत्ता में निर्वासन में बिताए?",
    "options": [
      "आसफ़ुद्दौला",
      "सआदत अली ख़ान",
      "वाजिद अली शाह",
      "शुजाउद्दौला"
    ],
    "explanation": "अवध के अंतिम नवाब वाजिद अली शाह को 1856 में अपदस्थ किया गया और वे कलकत्ता के मटियाबुर्ज में रहे। आसफ़ुद्दौला बड़े इमामबाड़े के लिए जाने जाते हैं।"
  },
  "modK-45": {
    "stem": "पंडित राम सहाय को किस वाद्य के बनारस घराने का संस्थापक माना जाता है?",
    "options": [
      "सितार",
      "सारंगी",
      "पखावज",
      "तबला"
    ],
    "explanation": "पंडित राम सहाय ने तबले के बनारस घराने की स्थापना की, जिसे बाद में पंडित किशन महाराज जैसे उस्तादों ने आगे बढ़ाया।"
  },
  "modK-46": {
    "stem": "उत्तर प्रदेश के गंगा मैदान में 'बांगर' और 'खादर' शब्द क्रमशः किसे दर्शाते हैं?",
    "options": [
      "नई जलोढ़ और पुरानी जलोढ़",
      "पुरानी जलोढ़ और नई जलोढ़",
      "काली मिट्टी और लाल मिट्टी",
      "लैटेराइट मिट्टी और जलोढ़ मिट्टी"
    ],
    "explanation": "बांगर बाढ़-स्तर से ऊँचे भाग की पुरानी जलोढ़ है; खादर बाढ़ के मैदानों की नई जलोढ़ है, जो लगभग हर वर्ष बाढ़ से नवीकृत होती है।"
  },
  "modK-47": {
    "stem": "सूची-I (संरक्षित क्षेत्र) को सूची-II (जिला) से सुमेलित कीजिए:\nसूची-I: A. सोहगीबरवा वन्यजीव अभयारण्य  B. समसपुर पक्षी विहार  C. नवाबगंज पक्षी विहार  D. रानीपुर टाइगर रिज़र्व\nसूची-II: 1. उन्नाव  2. चित्रकूट  3. महराजगंज  4. रायबरेली",
    "options": [
      "A-3, B-1, C-4, D-2",
      "A-3, B-4, C-1, D-2",
      "A-4, B-3, C-1, D-2",
      "A-3, B-4, C-2, D-1"
    ],
    "explanation": "सोहगीबरवा महराजगंज में, समसपुर रायबरेली में, नवाबगंज (शहीद चन्द्रशेखर आज़ाद) पक्षी विहार उन्नाव में और रानीपुर टाइगर रिज़र्व चित्रकूट में है।"
  },
  "modK-48": {
    "stem": "पूर्वी उत्तर प्रदेश से बहने वाली गंगा की प्रमुख बायीं सहायक नदी घाघरा को नेपाल (इसके ऊपरी मार्ग) में किस नाम से जाना जाता है?",
    "options": [
      "करनाली",
      "गंडकी",
      "कोसी",
      "महाकाली"
    ],
    "explanation": "घाघरा तिब्बत से निकलकर नेपाल में करनाली के नाम से बहती है। महाकाली, शारदा नदी का नेपाली नाम है; यही आम भ्रम है।"
  },
  "modK-49": {
    "stem": "बुन्देलखण्ड एक्सप्रेसवे चित्रकूट के निकट से प्रारंभ होकर किस जिले में आगरा–लखनऊ एक्सप्रेसवे से मिलता है?",
    "options": [
      "औरैया",
      "जालौन",
      "इटावा",
      "कानपुर देहात"
    ],
    "explanation": "यह चित्रकूट, बाँदा, महोबा, हमीरपुर, जालौन और औरैया से होकर इटावा जिले में आगरा–लखनऊ एक्सप्रेसवे से मिलता है। औरैया और जालौन मार्ग में हैं, पर संगम-बिंदु नहीं।"
  },
  "modK-50": {
    "stem": "सूची-I (ताप विद्युत केन्द्र) को सूची-II (जिला) से सुमेलित कीजिए:\nसूची-I: A. अनपरा  B. पारीछा  C. टाण्डा  D. हरदुआगंज\nसूची-II: 1. अलीगढ़  2. अम्बेडकर नगर  3. सोनभद्र  4. झाँसी",
    "options": [
      "A-4, B-3, C-2, D-1",
      "A-3, B-4, C-1, D-2",
      "A-3, B-2, C-4, D-1",
      "A-3, B-4, C-2, D-1"
    ],
    "explanation": "अनपरा सोनभद्र में, पारीछा झाँसी में, टाण्डा अम्बेडकर नगर में और हरदुआगंज अलीगढ़ में है।"
  },
  "modK-51": {
    "stem": "सूची-I (औद्योगिक इकाई) को सूची-II (स्थान) से सुमेलित कीजिए:\nसूची-I: A. बनारस रेल इंजन कारखाना (पूर्व DLW)  B. मॉडर्न कोच फ़ैक्टरी  C. भेल (BHEL) ट्रांसफ़ॉर्मर इकाई  D. इफ़्को (IFFCO) उर्वरक संयंत्र\nसूची-II: 1. रायबरेली  2. फूलपुर (प्रयागराज)  3. वाराणसी  4. झाँसी",
    "options": [
      "A-3, B-1, C-4, D-2",
      "A-1, B-3, C-4, D-2",
      "A-3, B-1, C-2, D-4",
      "A-3, B-4, C-1, D-2"
    ],
    "explanation": "बनारस रेल इंजन कारखाना वाराणसी में, मॉडर्न कोच फ़ैक्टरी रायबरेली में, भेल की ट्रांसफ़ॉर्मर इकाई झाँसी में और इफ़्को संयंत्र प्रयागराज के फूलपुर में है।"
  },
  "modK-52": {
    "stem": "निम्नलिखित में से कौन-सा संस्थान लखनऊ में स्थित नहीं है?",
    "options": [
      "केन्द्रीय औषधीय एवं सगंध पौधा संस्थान (CIMAP)",
      "केन्द्रीय तिब्बती अध्ययन विश्वविद्यालय",
      "बीरबल साहनी पुराविज्ञान संस्थान",
      "भारतीय विषविज्ञान अनुसंधान संस्थान"
    ],
    "explanation": "केन्द्रीय तिब्बती अध्ययन विश्वविद्यालय वाराणसी के निकट सारनाथ में है। CIMAP, बीरबल साहनी पुराविज्ञान संस्थान और IITR तीनों लखनऊ में हैं।"
  },
  "modK-53": {
    "stem": "वाराणसी का राजकीय संस्कृत महाविद्यालय, जिससे सम्पूर्णानन्द संस्कृत विश्वविद्यालय विकसित हुआ, 1791 में किसने स्थापित किया था?",
    "options": [
      "वॉरेन हेस्टिंग्स",
      "जोनाथन डंकन",
      "विलियम जोन्स",
      "लॉर्ड कॉर्नवालिस"
    ],
    "explanation": "बनारस के ब्रिटिश रेज़िडेंट जोनाथन डंकन ने 1791 में संस्कृत कॉलेज की स्थापना की। वॉरेन हेस्टिंग्स ने कलकत्ता मदरसा (1781) और विलियम जोन्स ने एशियाटिक सोसाइटी (1784) की स्थापना की थी।"
  },
  "modK-54": {
    "stem": "निम्नलिखित युग्मों (प्रशासनिक मण्डल: मुख्यालय) पर विचार कीजिए:\nI. देवीपाटन: गोंडा\nII. चित्रकूट धाम: चित्रकूट\nIII. विन्ध्याचल: मिर्ज़ापुर\nउपर्युक्त युग्मों में से कौन-सा/से सुमेलित है/हैं?",
    "options": [
      "केवल I",
      "केवल II और III",
      "I, II और III",
      "केवल I और III"
    ],
    "explanation": "देवीपाटन मण्डल का मुख्यालय गोंडा और विन्ध्याचल का मिर्ज़ापुर है, किन्तु चित्रकूट धाम मण्डल का मुख्यालय बाँदा है, अतः युग्म II गलत है।"
  },
  "modK-55": {
    "stem": "जनगणना 2011 के अंतिम आँकड़ों के अनुसार उत्तर प्रदेश का लिंगानुपात (प्रति 1,000 पुरुषों पर महिलाएँ) कितना था?",
    "options": [
      "943",
      "898",
      "912",
      "929"
    ],
    "explanation": "जनगणना 2011 में उत्तर प्रदेश का लिंगानुपात 912 था, जो राष्ट्रीय आँकड़े 943 से कम है; 943 ही सामान्य भ्रामक विकल्प है।"
  },
  "modL-1": {
    "stem": "शक संवत को भारत के राष्ट्रीय पंचांग के रूप में आधिकारिक रूप से कब अपनाया गया?",
    "options": [
      "26 जनवरी 1950",
      "15 अगस्त 1947",
      "22 मार्च 1957",
      "1 अप्रैल 1957"
    ],
    "explanation": "शक संवत पर आधारित राष्ट्रीय पंचांग 1 चैत्र 1879 शक, अर्थात 22 मार्च 1957 से ग्रेगोरियन कैलेंडर के साथ अपनाया गया।"
  },
  "modL-2": {
    "stem": "भारत के राष्ट्रगान के पूर्ण संस्करण के गायन की निर्धारित अवधि लगभग कितनी है?",
    "options": [
      "52 सेकंड",
      "20 सेकंड",
      "65 सेकंड",
      "90 सेकंड"
    ],
    "explanation": "पूर्ण संस्करण में लगभग 52 सेकंड लगते हैं; संक्षिप्त संस्करण (पहली और अंतिम पंक्तियाँ) लगभग 20 सेकंड का है।"
  },
  "modL-3": {
    "stem": "भारत के राजचिह्न के नीचे अंकित आदर्श वाक्य 'सत्यमेव जयते' कहाँ से लिया गया है?",
    "options": [
      "ऋग्वेद",
      "मुण्डकोपनिषद",
      "भगवद्गीता",
      "कठोपनिषद"
    ],
    "explanation": "'सत्यमेव जयते' (सत्य की ही विजय होती है) मुण्डकोपनिषद से लिया गया है और राजचिह्न के नीचे देवनागरी में लिखा है।"
  },
  "modL-4": {
    "stem": "भारत में 28 फरवरी को राष्ट्रीय विज्ञान दिवस किसकी स्मृति में मनाया जाता है?",
    "options": [
      "आर्यभट उपग्रह के प्रक्षेपण की",
      "होमी जे. भाभा के जन्म की",
      "इसरो की स्थापना की",
      "रमन प्रभाव की खोज की"
    ],
    "explanation": "सी.वी. रमन ने 28 फरवरी 1928 को रमन प्रभाव की घोषणा की थी; इसी खोज के लिए उन्हें 1930 में भौतिकी का नोबेल पुरस्कार मिला।"
  },
  "modL-5": {
    "stem": "राष्ट्रीय खेल दिवस (29 अगस्त) किसकी जयंती पर मनाया जाता है?",
    "options": [
      "मिल्खा सिंह",
      "मेजर ध्यानचंद",
      "पी.टी. उषा",
      "के.डी. जाधव"
    ],
    "explanation": "29 अगस्त हॉकी के महान खिलाड़ी मेजर ध्यानचंद (जन्म 1905) का जन्मदिवस है।"
  },
  "modL-6": {
    "stem": "संयुक्त राष्ट्र का प्रमुख न्यायिक अंग अंतरराष्ट्रीय न्यायालय कहाँ स्थित है?",
    "options": [
      "जिनेवा",
      "न्यूयॉर्क",
      "वियना",
      "द हेग"
    ],
    "explanation": "अंतरराष्ट्रीय न्यायालय नीदरलैंड के द हेग स्थित पीस पैलेस में है; यह न्यूयॉर्क से बाहर स्थित एकमात्र प्रमुख संयुक्त राष्ट्र अंग है।"
  },
  "modL-7": {
    "stem": "यूनेस्को (UNESCO) का मुख्यालय कहाँ स्थित है?",
    "options": [
      "पेरिस",
      "रोम",
      "लंदन",
      "जिनेवा"
    ],
    "explanation": "यूनेस्को का मुख्यालय पेरिस में है; रोम में FAO और जिनेवा में WHO का मुख्यालय है।"
  },
  "modL-8": {
    "stem": "रवीन्द्रनाथ टैगोर साहित्य का नोबेल पुरस्कार पाने वाले पहले भारतीय किस वर्ष बने?",
    "options": [
      "1905",
      "1913",
      "1921",
      "1930"
    ],
    "explanation": "टैगोर को 1913 में मुख्यतः 'गीतांजलि' के लिए साहित्य का नोबेल मिला; 1930 में सी.वी. रमन को भौतिकी का नोबेल मिला था।"
  },
  "modL-9": {
    "stem": "राष्ट्रगीत 'वन्दे मातरम्' उपन्यास 'आनन्दमठ' से लिया गया है, जिसके लेखक हैं ____",
    "options": [
      "रवीन्द्रनाथ टैगोर",
      "शरतचन्द्र चट्टोपाध्याय",
      "बंकिमचन्द्र चट्टोपाध्याय",
      "ईश्वरचन्द्र विद्यासागर"
    ],
    "explanation": "'वन्दे मातरम्' बंकिमचन्द्र चट्टोपाध्याय के उपन्यास 'आनन्दमठ' (1882) में है; राष्ट्रगान टैगोर ने लिखा था।"
  },
  "modL-10": {
    "stem": "निम्नलिखित में से कौन 1954 में भारत रत्न पाने वाले पहले व्यक्तियों में शामिल थे?",
    "options": [
      "जवाहरलाल नेहरू",
      "इंदिरा गांधी",
      "मदर टेरेसा",
      "सी.वी. रमन"
    ],
    "explanation": "पहले भारत रत्न (1954) सी. राजगोपालाचारी, एस. राधाकृष्णन और सी.वी. रमन को मिले; नेहरू को यह 1955 में मिला।"
  },
  "modL-11": {
    "stem": "सिनेमा में भारत के सर्वोच्च सम्मान दादासाहब फाल्के पुरस्कार (1969) की पहली प्राप्तकर्ता कौन थीं/थे?",
    "options": [
      "पृथ्वीराज कपूर",
      "सत्यजीत राय",
      "देविका रानी",
      "राज कपूर"
    ],
    "explanation": "अभिनेत्री देविका रानी को 1969 में पहला दादासाहब फाल्के पुरस्कार मिला।"
  },
  "modL-12": {
    "stem": "पहला ज्ञानपीठ पुरस्कार (1965) जी. शंकर कुरुप को मिला, जो किस भाषा के लेखक थे?",
    "options": [
      "मलयालम",
      "कन्नड़",
      "तमिल",
      "बांग्ला"
    ],
    "explanation": "जी. शंकर कुरुप को उनके मलयालम कविता-संग्रह 'ओडक्कुझल' (बाँसुरी) के लिए पहला ज्ञानपीठ मिला।"
  },
  "modL-13": {
    "stem": "भारत की पहली महिला मुख्यमंत्री सुचेता कृपलानी किस राज्य की मुख्यमंत्री थीं?",
    "options": [
      "बिहार",
      "उत्तर प्रदेश",
      "पश्चिम बंगाल",
      "मध्य प्रदेश"
    ],
    "explanation": "सुचेता कृपलानी 1963 में उत्तर प्रदेश की मुख्यमंत्री बनीं: वे किसी भी भारतीय राज्य की पहली महिला मुख्यमंत्री थीं।"
  },
  "modL-14": {
    "stem": "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला (1984) कौन थीं?",
    "options": [
      "संतोष यादव",
      "अरुणिमा सिन्हा",
      "प्रेमलता अग्रवाल",
      "बछेंद्री पाल"
    ],
    "explanation": "बछेंद्री पाल 23 मई 1984 को शिखर पर पहुँचीं; संतोष यादव बाद में इस पर दो बार चढ़ने वाली पहली महिला बनीं।"
  },
  "modL-15": {
    "stem": "खो-खो के खेल में पीछा करने वाली टीम के एक समय में कितने खिलाड़ी मैदान पर होते हैं?",
    "options": [
      "7",
      "11",
      "9",
      "6"
    ],
    "explanation": "खो-खो टीम में 12 खिलाड़ी होते हैं, जिनमें से 9 मैदान पर उतरते हैं; कबड्डी में कोर्ट पर 7 खिलाड़ी होते हैं।"
  },
  "modL-16": {
    "stem": "एशिया की सबसे पुरानी प्रतियोगिताओं में से एक डूरंड कप किस खेल से संबंधित है?",
    "options": [
      "फुटबॉल",
      "हॉकी",
      "क्रिकेट",
      "पोलो"
    ],
    "explanation": "डूरंड कप (1888 में आरंभ) फुटबॉल प्रतियोगिता है; बेटन कप हॉकी से संबंधित है।"
  },
  "modL-17": {
    "stem": "थॉमस कप किस खेल की अंतरराष्ट्रीय टीम चैम्पियनशिप है?",
    "options": [
      "टेबल टेनिस",
      "टेनिस",
      "बैडमिंटन",
      "स्क्वैश"
    ],
    "explanation": "थॉमस कप पुरुषों की विश्व टीम बैडमिंटन चैम्पियनशिप है; उबेर कप इसका महिला संस्करण है।"
  },
  "modL-18": {
    "stem": "विश्व स्वास्थ्य संगठन (WHO) का मुख्यालय कहाँ है?",
    "options": [
      "न्यूयॉर्क",
      "जिनेवा",
      "पेरिस",
      "वॉशिंगटन डी.सी."
    ],
    "explanation": "1948 में स्थापित WHO का मुख्यालय स्विट्ज़रलैंड के जिनेवा में है; इसका स्थापना दिवस 7 अप्रैल विश्व स्वास्थ्य दिवस है।"
  },
  "modL-19": {
    "stem": "भारतीय रिज़र्व बैंक की स्थापना किस वर्ष हुई?",
    "options": [
      "1947",
      "1949",
      "1921",
      "1935"
    ],
    "explanation": "RBI की स्थापना RBI अधिनियम, 1934 के तहत 1 अप्रैल 1935 को हुई; 1949 में इसका राष्ट्रीयकरण हुआ।"
  },
  "modL-20": {
    "stem": "किस पशु को भारत का राष्ट्रीय धरोहर पशु घोषित किया गया है?",
    "options": [
      "बाघ",
      "हाथी",
      "एशियाई शेर",
      "एक सींग वाला गैंडा"
    ],
    "explanation": "हाथी को 2010 में राष्ट्रीय धरोहर पशु घोषित किया गया; बाघ राष्ट्रीय पशु है।"
  },
  "modL-21": {
    "stem": "भारत का राष्ट्रीय जलीय जीव कौन है?",
    "options": [
      "ऑलिव रिडले कछुआ",
      "घड़ियाल",
      "गंगा नदी डॉल्फ़िन",
      "महाशीर मछली"
    ],
    "explanation": "गंगा नदी डॉल्फ़िन को 2009 में राष्ट्रीय जलीय जीव घोषित किया गया; यह गंगा–ब्रह्मपुत्र नदी तंत्र में पाई जाती है।"
  },
  "modL-22": {
    "stem": "14 सितंबर को हिंदी दिवस मनाया जाता है, क्योंकि 1949 में इसी दिन ____",
    "options": [
      "संविधान सभा ने देवनागरी लिपि में हिंदी को संघ की राजभाषा के रूप में अपनाया",
      "भारत का संविधान लागू हुआ",
      "पहला हिंदी समाचार पत्र प्रकाशित हुआ",
      "हिंदी को राष्ट्रभाषा घोषित किया गया"
    ],
    "explanation": "14 सितंबर 1949 को संविधान सभा ने देवनागरी में हिंदी को संघ की राजभाषा (अनुच्छेद 343) के रूप में अपनाया; संविधान में किसी 'राष्ट्रभाषा' का उल्लेख नहीं है।"
  },
  "modL-23": {
    "stem": "राष्ट्रीय मतदाता दिवस 25 जनवरी को मनाया जाता है, क्योंकि इसी तिथि को ____",
    "options": [
      "पहला आम चुनाव आरंभ हुआ",
      "भारत निर्वाचन आयोग की स्थापना हुई",
      "मतदान की आयु घटाकर 18 वर्ष की गई",
      "पहली बार ईवीएम का प्रयोग हुआ"
    ],
    "explanation": "भारत निर्वाचन आयोग का गठन 25 जनवरी 1950 को, गणतंत्र बनने से एक दिन पहले, हुआ था।"
  },
  "modL-24": {
    "stem": "'विंग्स ऑफ़ फ़ायर' (अग्नि की उड़ान) किसकी आत्मकथा है?",
    "options": [
      "विक्रम साराभाई",
      "होमी जे. भाभा",
      "कल्पना चावला",
      "ए.पी.जे. अब्दुल कलाम"
    ],
    "explanation": "'विंग्स ऑफ़ फ़ायर' (1999) डॉ. ए.पी.जे. अब्दुल कलाम की आत्मकथा है, जिसे उन्होंने अरुण तिवारी के साथ लिखा।"
  },
  "modL-25": {
    "stem": "निम्नलिखित में से कौन-सा पुस्तक–लेखक युग्म सही सुमेलित है?",
    "options": [
      "गोदान – जयशंकर प्रसाद",
      "कामायनी – प्रेमचंद",
      "गोदान – प्रेमचंद",
      "कामायनी – मैथिलीशरण गुप्त"
    ],
    "explanation": "'गोदान' प्रेमचंद का उपन्यास है; 'कामायनी' जयशंकर प्रसाद का महाकाव्य है।"
  },
  "modL-26": {
    "stem": "भारतीय अंतरिक्ष अनुसंधान संगठन (इसरो) का मुख्यालय कहाँ है?",
    "options": [
      "बेंगलुरु",
      "श्रीहरिकोटा",
      "तिरुवनंतपुरम",
      "अहमदाबाद"
    ],
    "explanation": "इसरो का मुख्यालय बेंगलुरु में है; श्रीहरिकोटा प्रक्षेपण केंद्र है और तिरुवनंतपुरम में VSSC है।"
  },
  "modL-27": {
    "stem": "प्रथम आधुनिक ओलंपिक खेल 1896 में कहाँ आयोजित हुए थे?",
    "options": [
      "पेरिस",
      "लंदन",
      "एथेंस",
      "रोम"
    ],
    "explanation": "प्रथम आधुनिक ओलंपिक 1896 में यूनान के एथेंस में हुए, जिन्हें पियरे द कुबर्तिन के प्रयासों से पुनर्जीवित किया गया।"
  },
  "modL-28": {
    "stem": "भारत के पहले व्यक्तिगत ओलंपिक स्वर्ण पदक विजेता अभिनव बिंद्रा ने स्वर्ण किसमें जीता?",
    "options": [
      "10 मीटर एयर राइफल, बीजिंग 2008",
      "50 मीटर राइफल, लंदन 2012",
      "ट्रैप शूटिंग, एथेंस 2004",
      "10 मीटर एयर पिस्टल, बीजिंग 2008"
    ],
    "explanation": "बिंद्रा ने 2008 बीजिंग ओलंपिक में पुरुषों की 10 मीटर एयर राइफल में स्वर्ण जीता।"
  },
  "modL-29": {
    "stem": "भारत के राष्ट्रीय ध्वज की चौड़ाई और लंबाई का अनुपात कितना है?",
    "options": [
      "1 : 2",
      "2 : 3",
      "3 : 5",
      "3 : 4"
    ],
    "explanation": "भारतीय ध्वज संहिता के अनुसार चौड़ाई और लंबाई का अनुपात 2 : 3 है।"
  },
  "modL-30": {
    "stem": "इंटरपोल (अंतरराष्ट्रीय आपराधिक पुलिस संगठन) का मुख्यालय कहाँ स्थित है?",
    "options": [
      "ब्रुसेल्स",
      "द हेग",
      "जिनेवा",
      "ल्योन"
    ],
    "explanation": "इंटरपोल का महासचिवालय फ्रांस के ल्योन में है; द हेग में अंतरराष्ट्रीय न्यायालय और यूरोपोल हैं।"
  },
  "modL-31": {
    "stem": "संविधान सभा ने 'जन गण मन' को भारत के राष्ट्रगान के रूप में औपचारिक रूप से कब अपनाया?",
    "options": [
      "26 नवंबर 1949",
      "26 जनवरी 1950",
      "24 जनवरी 1950",
      "27 दिसंबर 1911"
    ],
    "explanation": "इसे 24 जनवरी 1950 को संविधान सभा की अंतिम बैठक में अपनाया गया; 27 दिसंबर 1911 को यह पहली बार (कलकत्ता कांग्रेस अधिवेशन में) गाया गया था।"
  },
  "modL-32": {
    "stem": "भारत के राष्ट्रीय ध्वज का वर्तमान स्वरूप संविधान सभा द्वारा कब अपनाया गया?",
    "options": [
      "22 जुलाई 1947",
      "15 अगस्त 1947",
      "26 जनवरी 1950",
      "14 अगस्त 1947"
    ],
    "explanation": "अशोक चक्र युक्त तिरंगा स्वतंत्रता से पहले 22 जुलाई 1947 को अपनाया गया; राष्ट्रीय ध्वज के रूप में यह पहली बार 15 अगस्त 1947 को फहराया गया।"
  },
  "modL-33": {
    "stem": "सारनाथ सिंह-शीर्ष (राजचिह्न का स्रोत) के फलक (अबेकस) पर चक्रों से अलग किए गए पशु अंकित हैं। इनमें कौन-सा पशु नहीं है?",
    "options": [
      "हाथी",
      "दौड़ता हुआ घोड़ा",
      "बाघ",
      "बैल"
    ],
    "explanation": "फलक पर हाथी, दौड़ता घोड़ा, बैल और सिंह चक्रों से अलग करके अंकित हैं; बाघ नहीं है।"
  },
  "modL-34": {
    "stem": "'वन्दे मातरम्' पहली बार 1896 में भारतीय राष्ट्रीय कांग्रेस के एक अधिवेशन में गाया गया। वह अधिवेशन कहाँ हुआ था?",
    "options": [
      "बम्बई",
      "कलकत्ता",
      "लखनऊ",
      "मद्रास"
    ],
    "explanation": "रवीन्द्रनाथ टैगोर ने 1896 के कांग्रेस के कलकत्ता अधिवेशन में 'वन्दे मातरम्' गाया था।"
  },
  "modL-35": {
    "stem": "ज्ञानपीठ पुरस्कार (1968) पाने वाले पहले हिंदी साहित्यकार कौन थे?",
    "options": [
      "महादेवी वर्मा",
      "रामधारी सिंह 'दिनकर'",
      "अज्ञेय",
      "सुमित्रानंदन पंत"
    ],
    "explanation": "सुमित्रानंदन पंत को 'चिदंबरा' के लिए 1968 का ज्ञानपीठ मिला; दिनकर (1972), अज्ञेय (1978) और महादेवी वर्मा (1982) को बाद में मिला।"
  },
  "modL-36": {
    "stem": "किसी विज्ञान विषय में नोबेल पुरस्कार पाने वाले पहले एशियाई कौन थे?",
    "options": [
      "हिदेकी युकावा",
      "सी.वी. रमन",
      "हरगोविंद खुराना",
      "एस. चंद्रशेखर"
    ],
    "explanation": "सी.वी. रमन को 1930 में भौतिकी का नोबेल मिला; युकावा को 1949, खुराना को 1968 और चंद्रशेखर को 1983 में मिला।"
  },
  "modL-37": {
    "stem": "निम्नलिखित में से कौन-सा संगठन–मुख्यालय युग्म गलत सुमेलित है?",
    "options": [
      "IAEA – वियना",
      "FAO – रोम",
      "UNICEF – पेरिस",
      "ILO – जिनेवा"
    ],
    "explanation": "UNICEF का मुख्यालय न्यूयॉर्क में है; पेरिस में UNESCO है। शेष तीनों युग्म सही हैं।"
  },
  "modL-38": {
    "stem": "निम्नलिखित में से कौन-सा प्राचीन ग्रंथ–लेखक युग्म गलत सुमेलित है?",
    "options": [
      "मुद्राराक्षस – विशाखदत्त",
      "इंडिका – मेगस्थनीज़",
      "हर्षचरित – बाणभट्ट",
      "राजतरंगिणी – कालिदास"
    ],
    "explanation": "कश्मीर का इतिहास-ग्रंथ 'राजतरंगिणी' कल्हण ने लिखा था, कालिदास ने नहीं।"
  },
  "modL-39": {
    "stem": "इन खेल पुरस्कारों को उनकी स्थापना के क्रम में (सबसे पहले से) व्यवस्थित कीजिए: (1) द्रोणाचार्य पुरस्कार (2) अर्जुन पुरस्कार (3) राजीव गांधी खेल रत्न (अब मेजर ध्यानचंद खेल रत्न)",
    "options": [
      "1, 2, 3",
      "2, 3, 1",
      "2, 1, 3",
      "3, 2, 1"
    ],
    "explanation": "अर्जुन पुरस्कार 1961 में, द्रोणाचार्य पुरस्कार (प्रशिक्षकों के लिए) 1985 में और खेल रत्न 1991–92 में आरंभ हुआ।"
  },
  "modL-40": {
    "stem": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कर्णम मल्लेश्वरी ने कौन-सा पदक जीता?",
    "options": [
      "सिडनी 2000 में भारोत्तोलन में कांस्य",
      "एथेंस 2004 में भारोत्तोलन में रजत",
      "लंदन 2012 में बैडमिंटन में कांस्य",
      "लंदन 2012 में मुक्केबाज़ी में कांस्य"
    ],
    "explanation": "कर्णम मल्लेश्वरी ने सिडनी 2000 में भारोत्तोलन में कांस्य जीता; साइना नेहवाल और मैरी कॉम ने लंदन 2012 में कांस्य जीते।"
  },
  "modL-41": {
    "stem": "अशोक के सारनाथ सिंह-शीर्ष से लिया गया भारत का राजकीय प्रतीक भारत सरकार द्वारा कब अपनाया गया?",
    "options": [
      "15 अगस्त 1947",
      "22 जुलाई 1947",
      "26 जनवरी 1950",
      "24 जनवरी 1950"
    ],
    "explanation": "राजकीय प्रतीक 26 जनवरी 1950 को अपनाया गया; 22 जुलाई 1947 ध्वज और 24 जनवरी 1950 राष्ट्रगान को अपनाने की तिथि है।"
  },
  "modL-42": {
    "stem": "राष्ट्रीय ध्वज के मध्य में स्थित अशोक चक्र किस रंग का है और उसमें कितनी तीलियाँ हैं?",
    "options": [
      "गहरा नीला, 32 तीलियाँ",
      "गहरा नीला, 24 तीलियाँ",
      "काला, 24 तीलियाँ",
      "आसमानी नीला, 22 तीलियाँ"
    ],
    "explanation": "सफेद पट्टी पर बना चक्र गहरे नीले (नेवी ब्लू) रंग का है और उसमें 24 तीलियाँ हैं।"
  },
  "modL-43": {
    "stem": "शक राष्ट्रीय पंचांग में 1 चैत्र सामान्यतः 22 मार्च को पड़ता है। अधिवर्ष (लीप वर्ष) में यह किस तिथि को पड़ता है?",
    "options": [
      "20 मार्च",
      "23 मार्च",
      "22 मार्च",
      "21 मार्च"
    ],
    "explanation": "सामान्य वर्ष में चैत्र 30 दिन का और अधिवर्ष में 31 दिन का होता है; अधिवर्ष में 1 चैत्र 21 मार्च को पड़ता है।"
  },
  "modL-44": {
    "stem": "राष्ट्रगान का एक संक्षिप्त रूप भी निर्धारित है, जिसमें इसकी पहली और अंतिम पंक्तियाँ होती हैं। इसे गाने का समय लगभग कितना है?",
    "options": [
      "20 सेकंड",
      "52 सेकंड",
      "30 सेकंड",
      "45 सेकंड"
    ],
    "explanation": "संक्षिप्त रूप में लगभग 20 सेकंड लगते हैं; पूर्ण रूप में लगभग 52 सेकंड लगते हैं।"
  },
  "modL-45": {
    "stem": "रवीन्द्रनाथ टैगोर ने 1919 में 'जन गण मन' का अंग्रेज़ी अनुवाद 'द मॉर्निंग सॉन्ग ऑफ़ इंडिया' के रूप में कहाँ किया था?",
    "options": [
      "शांतिनिकेतन",
      "कलकत्ता",
      "मदनपल्ले",
      "मद्रास"
    ],
    "explanation": "टैगोर ने 1919 में मदनपल्ले (वर्तमान आंध्र प्रदेश) में इसका अंग्रेज़ी अनुवाद किया था।"
  },
  "modL-46": {
    "stem": "ओज़ोन परत संरक्षण अंतरराष्ट्रीय दिवस (16 सितंबर) किस समझौते पर हस्ताक्षर की तिथि की याद में मनाया जाता है?",
    "options": [
      "वियना कन्वेंशन (1985)",
      "मॉन्ट्रियल प्रोटोकॉल (1987)",
      "क्योटो प्रोटोकॉल (1997)",
      "रियो घोषणा (1992)"
    ],
    "explanation": "मॉन्ट्रियल प्रोटोकॉल पर 16 सितंबर 1987 को हस्ताक्षर हुए थे; वियना कन्वेंशन (1985) इसका ढाँचा समझौता था, जो एक सामान्य भ्रम है।"
  },
  "modL-47": {
    "stem": "निम्नलिखित में से कौन-सा राष्ट्रीय दिवस और तिथि का युग्म सुमेलित नहीं है?",
    "options": [
      "राष्ट्रीय गणित दिवस – 22 दिसंबर",
      "राष्ट्रीय युवा दिवस – 12 जनवरी",
      "राष्ट्रीय एकता दिवस – 31 अक्टूबर",
      "राष्ट्रीय शिक्षा दिवस – 14 नवंबर"
    ],
    "explanation": "राष्ट्रीय शिक्षा दिवस 11 नवंबर (मौलाना अबुल कलाम आज़ाद की जयंती) को मनाया जाता है; 14 नवंबर बाल दिवस है।"
  },
  "modL-48": {
    "stem": "विश्व आर्द्रभूमि दिवस (2 फरवरी) 1971 में रामसर अभिसमय को अपनाने की याद में मनाया जाता है। रामसर शहर कहाँ स्थित है?",
    "options": [
      "ईरान",
      "इराक",
      "मिस्र",
      "तुर्किये"
    ],
    "explanation": "आर्द्रभूमि अभिसमय पर 2 फरवरी 1971 को कैस्पियन सागर तट पर स्थित ईरान के शहर रामसर में हस्ताक्षर हुए थे।"
  },
  "modL-49": {
    "stem": "सेना दिवस (15 जनवरी) 1949 के उस दिन की याद में मनाया जाता है जब के.एम. करिअप्पा ने किससे भारतीय सेना के कमांडर-इन-चीफ का पद ग्रहण किया था?",
    "options": [
      "जनरल सर रॉब लॉकहार्ट",
      "लॉर्ड माउंटबेटन",
      "जनरल सर फ्रांसिस रॉय बूचर",
      "फील्ड मार्शल क्लॉड ऑकिनलेक"
    ],
    "explanation": "करिअप्पा ने भारतीय सेना के अंतिम ब्रिटिश कमांडर-इन-चीफ जनरल सर फ्रांसिस रॉय बूचर से पदभार ग्रहण किया था।"
  },
  "modL-50": {
    "stem": "नौसेना दिवस 4 दिसंबर को 1971 में कराची बंदरगाह पर भारतीय नौसेना के हमले की याद में मनाया जाता है। उस अभियान का कूट नाम क्या था?",
    "options": [
      "ऑपरेशन विजय",
      "ऑपरेशन मेघदूत",
      "ऑपरेशन कैक्टस",
      "ऑपरेशन ट्राइडेंट"
    ],
    "explanation": "ऑपरेशन ट्राइडेंट (4 दिसंबर 1971) कराची पर मिसाइल नौकाओं का हमला था; ऑपरेशन विजय (गोवा 1961; कारगिल 1999) और ऑपरेशन मेघदूत (सियाचिन, 1984) अलग अभियान हैं।"
  },
  "modL-51": {
    "stem": "निम्नलिखित में से कौन-सा संगठन–मुख्यालय युग्म सुमेलित नहीं है?",
    "options": [
      "विश्व व्यापार संगठन – जिनेवा",
      "अंतरराष्ट्रीय परमाणु ऊर्जा एजेंसी – वियना",
      "संयुक्त राष्ट्र पर्यावरण कार्यक्रम – जिनेवा",
      "खाद्य एवं कृषि संगठन – रोम"
    ],
    "explanation": "UNEP का मुख्यालय नैरोबी (केन्या) में है; शेष तीनों युग्म सही हैं।"
  },
  "modL-52": {
    "stem": "सार्क (SAARC) की स्थापना 1985 में ढाका में हुई थी। इसका स्थायी सचिवालय कहाँ स्थित है?",
    "options": [
      "काठमांडू",
      "ढाका",
      "कोलंबो",
      "नई दिल्ली"
    ],
    "explanation": "सार्क सचिवालय 1987 में काठमांडू (नेपाल) में स्थापित हुआ; ढाका केवल सार्क का स्थापना स्थल है।"
  },
  "modL-53": {
    "stem": "आसियान (ASEAN) की स्थापना 1967 में बैंकॉक में हस्ताक्षरित एक घोषणा के द्वारा हुई थी। आसियान सचिवालय कहाँ स्थित है?",
    "options": [
      "बैंकॉक",
      "सिंगापुर",
      "जकार्ता",
      "मनीला"
    ],
    "explanation": "आसियान सचिवालय जकार्ता (इंडोनेशिया) में है; बैंकॉक में स्थापना घोषणा पर हस्ताक्षर हुए थे।"
  },
  "modL-54": {
    "stem": "भारत और फ्रांस द्वारा 2015 में संयुक्त रूप से शुरू किए गए अंतरराष्ट्रीय सौर गठबंधन (ISA) का मुख्यालय कहाँ है?",
    "options": [
      "पेरिस",
      "गुरुग्राम",
      "अबू धाबी",
      "नई दिल्ली"
    ],
    "explanation": "ISA सचिवालय ग्वाल पहाड़ी, गुरुग्राम (हरियाणा) में है; अबू धाबी में IRENA है, जो एक अलग संस्था है।"
  },
  "modL-55": {
    "stem": "ब्रिक्स (BRICS) देशों द्वारा स्थापित न्यू डेवलपमेंट बैंक का मुख्यालय कहाँ है?",
    "options": [
      "बीजिंग",
      "मॉस्को",
      "नई दिल्ली",
      "शंघाई"
    ],
    "explanation": "NDB का मुख्यालय शंघाई (चीन) में है; इसके प्रथम अध्यक्ष भारत के के.वी. कामत थे।"
  },
  "modL-56": {
    "stem": "एशियाई विकास बैंक (ADB) का मुख्यालय कहाँ है?",
    "options": [
      "मनीला",
      "बीजिंग",
      "टोक्यो",
      "सिंगापुर"
    ],
    "explanation": "ADB (स्थापना 1966) मेट्रो मनीला (फिलीपींस) में स्थित है; बीजिंग में एशियाई अवसंरचना निवेश बैंक (AIIB) है।"
  },
  "modL-57": {
    "stem": "निम्नलिखित में से कौन-सी CSIR प्रयोगशाला लखनऊ में स्थित नहीं है?",
    "options": [
      "केंद्रीय औषधि अनुसंधान संस्थान (CDRI)",
      "राष्ट्रीय वनस्पति अनुसंधान संस्थान (NBRI)",
      "केंद्रीय खाद्य प्रौद्योगिकी अनुसंधान संस्थान (CFTRI)",
      "केंद्रीय औषधीय एवं सगंध पौधा संस्थान (CIMAP)"
    ],
    "explanation": "CFTRI मैसूरु (कर्नाटक) में है; CDRI, NBRI और CIMAP तीनों लखनऊ में हैं।"
  },
  "modL-58": {
    "stem": "1990 में स्थापित भारतीय लघु उद्योग विकास बैंक (SIDBI) का प्रधान कार्यालय कहाँ है?",
    "options": [
      "मुंबई",
      "नई दिल्ली",
      "लखनऊ",
      "कोलकाता"
    ],
    "explanation": "SIDBI का मुख्यालय लखनऊ में है, जबकि अधिकांश राष्ट्रीय वित्तीय संस्थाएँ मुंबई में स्थित हैं।"
  },
  "modL-59": {
    "stem": "संकटग्रस्त प्रजातियों की रेड लिस्ट प्रकाशित करने वाले अंतरराष्ट्रीय प्रकृति संरक्षण संघ (IUCN) का मुख्यालय कहाँ है?",
    "options": [
      "जिनेवा",
      "नैरोबी",
      "बॉन",
      "ग्लैंड"
    ],
    "explanation": "IUCN ग्लैंड (स्विट्ज़रलैंड) में स्थित है (WWF इंटरनेशनल भी वहीं है); नैरोबी में UNEP और बॉन में UNFCCC सचिवालय है।"
  },
  "modL-60": {
    "stem": "रेड क्रॉस की अंतरराष्ट्रीय समिति (जिनेवा, 1863) की स्थापना किसकी पहल पर हुई थी?",
    "options": [
      "फ्लोरेंस नाइटिंगेल",
      "हेनरी ड्यूनेंट",
      "अल्फ्रेड नोबेल",
      "क्लारा बार्टन"
    ],
    "explanation": "हेनरी ड्यूनेंट की प्रेरणा से इसकी स्थापना हुई और उन्हें 1901 का पहला नोबेल शांति पुरस्कार (संयुक्त रूप से) मिला; क्लारा बार्टन ने अमेरिकन रेड क्रॉस की स्थापना की थी।"
  },
  "modL-61": {
    "stem": "मदर टेरेसा को नोबेल शांति पुरस्कार किस वर्ष मिला?",
    "options": [
      "1975",
      "1979",
      "1980",
      "1985"
    ],
    "explanation": "उन्हें 1979 में नोबेल शांति पुरस्कार मिला; 1980 में उन्हें भारत रत्न मिला था, जो एक सामान्य भ्रम है।"
  },
  "modL-62": {
    "stem": "मरणोपरांत भारत रत्न (1966) पाने वाले पहले व्यक्ति कौन थे?",
    "options": [
      "जवाहरलाल नेहरू",
      "सरदार वल्लभभाई पटेल",
      "लाल बहादुर शास्त्री",
      "महात्मा गांधी"
    ],
    "explanation": "लाल बहादुर शास्त्री पहले मरणोपरांत प्राप्तकर्ता (1966) थे; पटेल को यह मरणोपरांत 1991 में मिला और गांधीजी को यह कभी नहीं दिया गया।"
  },
  "modL-63": {
    "stem": "भारत रत्न (1987) पाने वाले पहले गैर-भारतीय नागरिक कौन थे?",
    "options": [
      "नेल्सन मंडेला",
      "मदर टेरेसा",
      "ख़ान अब्दुल ग़फ़्फ़ार ख़ान",
      "दलाई लामा"
    ],
    "explanation": "ख़ान अब्दुल ग़फ़्फ़ार ख़ान ('सीमांत गांधी') को यह 1987 में मिला; मंडेला को 1990 में मिला, और मदर टेरेसा भारत की देशीयकृत नागरिक थीं।"
  },
  "modL-64": {
    "stem": "रेमन मैग्सेसे पुरस्कार (1958, सामुदायिक नेतृत्व) पाने वाले पहले भारतीय कौन थे?",
    "options": [
      "मदर टेरेसा",
      "विनोबा भावे",
      "सत्यजित राय",
      "जयप्रकाश नारायण"
    ],
    "explanation": "भूदान आंदोलन के नेता विनोबा भावे को यह 1958 में मिला, जो इस पुरस्कार का प्रथम वर्ष था।"
  },
  "modL-65": {
    "stem": "ज्ञानपीठ पुरस्कार (1976) पाने वाली पहली महिला कौन थीं?",
    "options": [
      "अमृता प्रीतम",
      "महादेवी वर्मा",
      "महाश्वेता देवी",
      "आशापूर्णा देवी"
    ],
    "explanation": "बांग्ला लेखिका आशापूर्णा देवी को 1976 में 'प्रथम प्रतिश्रुति' के लिए यह मिला; अमृता प्रीतम (1981) और महादेवी वर्मा (1982) को बाद में मिला।"
  },
  "modL-66": {
    "stem": "भारत की पहली सवाक (बोलती) फ़िल्म 'आलम आरा' (1931) के निर्देशक कौन थे?",
    "options": [
      "अर्देशिर ईरानी",
      "दादासाहेब फाल्के",
      "वी. शांताराम",
      "हिमांशु राय"
    ],
    "explanation": "'आलम आरा' का निर्देशन अर्देशिर ईरानी ने किया; दादासाहेब फाल्के ने भारत की पहली पूर्ण-लंबाई की मूक फ़िल्म 'राजा हरिश्चंद्र' (1913) बनाई थी।"
  },
  "modL-67": {
    "stem": "अकादमी पुरस्कार (ऑस्कर) जीतने वाले पहले भारतीय कौन थे?",
    "options": [
      "सत्यजित राय",
      "ए.आर. रहमान",
      "रसूल पूकुट्टी",
      "भानु अथैया"
    ],
    "explanation": "भानु अथैया ने 1983 के समारोह में फ़िल्म 'गांधी' के लिए सर्वश्रेष्ठ वेशभूषा डिज़ाइन का पुरस्कार जीता; सत्यजित राय को मानद ऑस्कर 1992 में और रहमान को 2009 में मिला।"
  },
  "modL-68": {
    "stem": "साहित्य अकादमी पुरस्कार कितनी भाषाओं की साहित्यिक कृतियों के लिए दिया जाता है?",
    "options": [
      "22",
      "18",
      "24",
      "26"
    ],
    "explanation": "यह 24 भाषाओं में दिया जाता है: आठवीं अनुसूची की 22 भाषाएँ तथा अंग्रेज़ी और राजस्थानी।"
  },
  "modL-69": {
    "stem": "1947 में कश्मीर में वीरता के लिए मरणोपरांत परमवीर चक्र पाने वाले पहले व्यक्ति कौन थे?",
    "options": [
      "मेजर सोमनाथ शर्मा",
      "कंपनी क्वार्टरमास्टर हवलदार अब्दुल हमीद",
      "कैप्टन विक्रम बत्रा",
      "सेकंड लेफ्टिनेंट अरुण खेत्रपाल"
    ],
    "explanation": "मेजर सोमनाथ शर्मा को बडगाम की लड़ाई (नवंबर 1947) के लिए सम्मानित किया गया; अन्य को 1965, 1999 और 1971 के युद्धों के लिए यह मिला।"
  },
  "modL-70": {
    "stem": "'द गॉड ऑफ़ स्मॉल थिंग्स' के लिए बुकर पुरस्कार (1997) जीतने वाली पहली भारतीय महिला कौन थीं?",
    "options": [
      "किरण देसाई",
      "अरुंधति रॉय",
      "अनीता देसाई",
      "झुम्पा लाहिड़ी"
    ],
    "explanation": "अरुंधति रॉय ने 1997 में यह जीता; किरण देसाई ने 2006 में 'द इनहेरिटेंस ऑफ़ लॉस' के लिए जीता, जबकि अनीता देसाई नामांकित तो हुईं पर कभी नहीं जीतीं।"
  },
  "modL-71": {
    "stem": "जवाहरलाल नेहरू ने 'द डिस्कवरी ऑफ़ इंडिया' किस जेल में बंद रहते हुए लिखी थी?",
    "options": [
      "नैनी सेंट्रल जेल",
      "यरवदा जेल",
      "सेलुलर जेल, पोर्ट ब्लेयर",
      "अहमदनगर क़िला"
    ],
    "explanation": "उन्होंने इसे 1944 में भारत छोड़ो आंदोलन के बाद अहमदनगर क़िले में कारावास के दौरान लिखा था।"
  },
  "modL-72": {
    "stem": "महात्मा गांधी की पुस्तक 'हिंद स्वराज' (1909) मूल रूप से किस भाषा में लिखी गई थी?",
    "options": [
      "अंग्रेज़ी",
      "गुजराती",
      "हिंदी",
      "मराठी"
    ],
    "explanation": "गांधीजी ने इसे लंदन से दक्षिण अफ़्रीका जाते समय जहाज़ पर गुजराती में लिखा और बाद में स्वयं इसका अंग्रेज़ी अनुवाद किया।"
  },
  "modL-73": {
    "stem": "निम्नलिखित में से कौन-सा उपन्यास प्रेमचंद द्वारा नहीं लिखा गया?",
    "options": [
      "रंगभूमि",
      "निर्मला",
      "चित्रलेखा",
      "ग़बन"
    ],
    "explanation": "'चित्रलेखा' भगवतीचरण वर्मा का उपन्यास है; 'रंगभूमि', 'निर्मला' और 'ग़बन' प्रेमचंद के उपन्यास हैं।"
  },
  "modL-74": {
    "stem": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली भारतीय महिला (कानपुर अधिवेशन, 1925) कौन थीं?",
    "options": [
      "सरोजिनी नायडू",
      "एनी बेसेंट",
      "नेली सेनगुप्ता",
      "विजयलक्ष्मी पंडित"
    ],
    "explanation": "सरोजिनी नायडू ने 1925 के कानपुर अधिवेशन की अध्यक्षता की; एनी बेसेंट (1917) पहली महिला अध्यक्ष थीं, किंतु भारतीय मूल की नहीं थीं।"
  },
  "modL-75": {
    "stem": "अंतरिक्ष में जाने वाले पहले भारतीय राकेश शर्मा (1984) ने किस सोवियत अंतरिक्षयान से यात्रा की थी?",
    "options": [
      "सैल्यूट 7",
      "वोस्तोक 1",
      "सोयूज़ T-11",
      "अपोलो 11"
    ],
    "explanation": "उन्होंने सोयूज़ T-11 से उड़ान भरी और सैल्यूट 7 अंतरिक्ष स्टेशन पर रहे, जो प्रायः भ्रम का कारण बनता है।"
  },
  "modL-76": {
    "stem": "स्वतंत्र भारत के गवर्नर-जनरल के पद पर रहने वाले एकमात्र भारतीय कौन थे?",
    "options": [
      "राजेन्द्र प्रसाद",
      "सी. राजगोपालाचारी",
      "सरदार वल्लभभाई पटेल",
      "एस. राधाकृष्णन"
    ],
    "explanation": "सी. राजगोपालाचारी 1948 में लॉर्ड माउंटबेटन के बाद इस पद पर आए और 26 जनवरी 1950 को पद समाप्त होने तक रहे।"
  },
  "modL-77": {
    "stem": "निम्नलिखित में से कौन-सा ट्रॉफ़ी–खेल युग्म सुमेलित नहीं है?",
    "options": [
      "संतोष ट्रॉफ़ी – फ़ुटबॉल",
      "दलीप ट्रॉफ़ी – क्रिकेट",
      "आगा ख़ान कप – हॉकी",
      "बेटन कप – फ़ुटबॉल"
    ],
    "explanation": "बेटन कप भारत की सबसे पुरानी हॉकी प्रतियोगिताओं में से एक है; शेष तीनों युग्म सही हैं।"
  },
  "modL-78": {
    "stem": "निम्नलिखित में से किस खेल में प्रत्येक टीम के मैदान पर केवल 4 खिलाड़ी होते हैं?",
    "options": [
      "वाटर पोलो",
      "नेटबॉल",
      "बेसबॉल",
      "पोलो"
    ],
    "explanation": "पोलो की टीम में 4 घुड़सवार खिलाड़ी होते हैं; वाटर पोलो और नेटबॉल में प्रति टीम 7 तथा बेसबॉल में 9 खिलाड़ी होते हैं।"
  },
  "modL-79": {
    "stem": "एशिया में आयोजित पहले ग्रीष्मकालीन ओलंपिक खेल कहाँ हुए थे?",
    "options": [
      "टोक्यो, 1964",
      "सियोल, 1988",
      "मेलबर्न, 1956",
      "बीजिंग, 2008"
    ],
    "explanation": "टोक्यो 1964 एशिया में पहला ग्रीष्मकालीन ओलंपिक था; मेलबर्न 1956 दक्षिणी गोलार्ध (ओशिनिया) में पहला था।"
  },
  "modL-80": {
    "stem": "पहले एशियाई खेल 1951 में कहाँ आयोजित हुए थे?",
    "options": [
      "मनीला",
      "नई दिल्ली",
      "टोक्यो",
      "जकार्ता"
    ],
    "explanation": "पहले एशियाई खेल मार्च 1951 में नई दिल्ली में आयोजित हुए; दूसरे संस्करण की मेज़बानी 1954 में मनीला ने की।"
  }
};
