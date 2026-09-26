/**
 * Growth expansion bank ("gb") for UP Super TET practice.
 *
 * ORIGINAL, self-contained practice questions modelled on the exam pattern,
 * NOT official Previous Year Questions. Content is evergreen and each maths
 * answer has been solved and verified. 48 items:
 *   - 18 numerical (gb1–gb18)
 *   - 18 reasoning (gb19–gb36)
 *   - 12 computer  (gb37–gb48)
 *
 * `growthGbHi` holds a Hindi rendering for each id (same option order and the
 * same `correct` index). For maths, only the words are translated; digits and
 * symbols are kept as-is.
 */

import type { Question } from "./questions";

export const growthGb: Question[] = [
  // ------------------------------------------------------------- Numerical
  {
    id: "gb1", section: "numerical", topic: "Percentage", difficulty: "easy",
    stem: "What is 25% of 160?",
    options: ["30", "35", "40", "45"], correct: 2,
    explanation: "25% of 160 = 0.25 × 160 = 40.",
  },
  {
    id: "gb2", section: "numerical", topic: "Percentage", difficulty: "medium",
    stem: "A number increases from 40 to 50. What is the percentage increase?",
    options: ["20%", "25%", "30%", "10%"], correct: 1,
    explanation: "Increase = 10; percentage increase = 10/40 × 100 = 25%.",
  },
  {
    id: "gb3", section: "numerical", topic: "Ratio", difficulty: "medium",
    stem: "Divide ₹600 between A and B in the ratio 2 : 3. What is B's share?",
    options: ["₹240", "₹300", "₹360", "₹400"], correct: 2,
    explanation: "Total parts = 5, each part = ₹120; B's share = 3 × 120 = ₹360.",
  },
  {
    id: "gb4", section: "numerical", topic: "Average", difficulty: "easy",
    stem: "What is the average of the first 5 natural numbers?",
    options: ["2.5", "3", "3.5", "4"], correct: 1,
    explanation: "(1+2+3+4+5)/5 = 15/5 = 3.",
  },
  {
    id: "gb5", section: "numerical", topic: "Profit & loss", difficulty: "medium",
    stem: "An article bought for ₹500 is sold for ₹600. What is the profit percentage?",
    options: ["15%", "18%", "20%", "25%"], correct: 2,
    explanation: "Profit = ₹100; profit% = 100/500 × 100 = 20%.",
  },
  {
    id: "gb6", section: "numerical", topic: "Profit & loss", difficulty: "medium",
    stem: "The cost price is ₹800 and the selling price is ₹720. What is the loss percentage?",
    options: ["8%", "10%", "12%", "20%"], correct: 1,
    explanation: "Loss = ₹80; loss% = 80/800 × 100 = 10%.",
  },
  {
    id: "gb7", section: "numerical", topic: "Simple interest", difficulty: "easy",
    stem: "Find the simple interest on ₹2,000 at 10% per annum for 3 years.",
    options: ["₹500", "₹600", "₹660", "₹700"], correct: 1,
    explanation: "SI = P × R × T / 100 = 2000 × 10 × 3 / 100 = ₹600.",
  },
  {
    id: "gb8", section: "numerical", topic: "Compound interest", difficulty: "hard",
    stem: "Find the compound interest on ₹1,000 at 10% per annum for 2 years.",
    options: ["₹200", "₹210", "₹221", "₹100"], correct: 1,
    explanation: "Amount = 1000 × (1.1)² = ₹1210; CI = 1210 − 1000 = ₹210.",
  },
  {
    id: "gb9", section: "numerical", topic: "Time & work", difficulty: "medium",
    stem: "A can do a work in 10 days and B in 15 days. In how many days will they finish it together?",
    options: ["5 days", "6 days", "8 days", "12 days"], correct: 1,
    explanation: "1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6, so 6 days.",
  },
  {
    id: "gb10", section: "numerical", topic: "Speed & distance", difficulty: "easy",
    stem: "A car travels 150 km in 3 hours. What is its speed?",
    options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"], correct: 2,
    explanation: "Speed = distance / time = 150 / 3 = 50 km/h.",
  },
  {
    id: "gb11", section: "numerical", topic: "Speed & time", difficulty: "medium",
    stem: "A 180 m long train running at 54 km/h crosses a pole in how many seconds?",
    options: ["10 seconds", "12 seconds", "15 seconds", "18 seconds"], correct: 1,
    explanation: "54 km/h = 15 m/s; time = 180 / 15 = 12 seconds.",
  },
  {
    id: "gb12", section: "numerical", topic: "HCF", difficulty: "easy",
    stem: "What is the HCF of 12 and 18?",
    options: ["3", "6", "9", "12"], correct: 1,
    explanation: "The greatest number dividing both 12 and 18 is 6.",
  },
  {
    id: "gb13", section: "numerical", topic: "LCM", difficulty: "easy",
    stem: "What is the LCM of 5, 10 and 15?",
    options: ["15", "30", "45", "60"], correct: 1,
    explanation: "30 is the smallest number divisible by 5, 10 and 15.",
  },
  {
    id: "gb14", section: "numerical", topic: "Mensuration", difficulty: "easy",
    stem: "The length of a rectangle is 12 cm and its breadth is 5 cm. What is its area?",
    options: ["50 cm²", "55 cm²", "60 cm²", "70 cm²"], correct: 2,
    explanation: "Area = length × breadth = 12 × 5 = 60 cm².",
  },
  {
    id: "gb15", section: "numerical", topic: "Mensuration", difficulty: "easy",
    stem: "What is the perimeter of a square whose side is 9 cm?",
    options: ["27 cm", "36 cm", "45 cm", "81 cm"], correct: 1,
    explanation: "Perimeter = 4 × side = 4 × 9 = 36 cm.",
  },
  {
    id: "gb16", section: "numerical", topic: "Mensuration", difficulty: "medium",
    stem: "The radius of a circle is 7 cm. What is its circumference? (Take π = 22/7)",
    options: ["22 cm", "44 cm", "49 cm", "154 cm"], correct: 1,
    explanation: "Circumference = 2πr = 2 × 22/7 × 7 = 44 cm.",
  },
  {
    id: "gb17", section: "numerical", topic: "Simple algebra", difficulty: "easy",
    stem: "If 3x + 5 = 20, what is the value of x?",
    options: ["3", "5", "7", "15"], correct: 1,
    explanation: "3x = 20 − 5 = 15, so x = 5.",
  },
  {
    id: "gb18", section: "numerical", topic: "Data interpretation", difficulty: "medium",
    stem: "In a survey of 200 people, 45% preferred tea and the rest preferred coffee. How many preferred coffee?",
    options: ["90", "100", "110", "120"], correct: 2,
    explanation: "Coffee = 100% − 45% = 55% of 200 = 110.",
  },

  // ------------------------------------------------------------- Reasoning
  {
    id: "gb19", section: "reasoning", topic: "Analogy", difficulty: "easy",
    stem: "Cat : Kitten :: Dog : ?",
    options: ["Cub", "Puppy", "Calf", "Foal"], correct: 1,
    explanation: "A young cat is a kitten; a young dog is a puppy.",
  },
  {
    id: "gb20", section: "reasoning", topic: "Number series", difficulty: "easy",
    stem: "Find the next term: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"], correct: 2,
    explanation: "Each term is double the previous one; 40 × 2 = 80.",
  },
  {
    id: "gb21", section: "reasoning", topic: "Number series", difficulty: "medium",
    stem: "Find the next term: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "36"], correct: 2,
    explanation: "These are perfect squares (1², 2², 3², 4²); the next is 5² = 25.",
  },
  {
    id: "gb22", section: "reasoning", topic: "Coding-decoding", difficulty: "medium",
    stem: "In a code, PEN is written as QFO. How is BAG written in that code?",
    options: ["CBH", "CAH", "DBH", "CBI"], correct: 0,
    explanation: "Each letter is shifted +1: B→C, A→B, G→H, giving CBH.",
  },
  {
    id: "gb23", section: "reasoning", topic: "Coding-decoding", difficulty: "medium",
    stem: "In a code, FISH is written as HSIF (letters reversed). How is BIRD written?",
    options: ["DRIB", "DIRB", "BRID", "RDIB"], correct: 0,
    explanation: "Reversing the letters of BIRD gives DRIB.",
  },
  {
    id: "gb24", section: "reasoning", topic: "Blood relations", difficulty: "easy",
    stem: "A is the father of B. B is the sister of C. How is A related to C?",
    options: ["Brother", "Father", "Uncle", "Son"], correct: 1,
    explanation: "B and C are siblings, so their father A is also C's father.",
  },
  {
    id: "gb25", section: "reasoning", topic: "Blood relations", difficulty: "medium",
    stem: "Introducing a boy, Sita said, 'He is the son of my father's wife.' How is the boy related to Sita?",
    options: ["Cousin", "Brother", "Uncle", "Nephew"], correct: 1,
    explanation: "Her father's wife is Sita's mother; her mother's son is Sita's brother.",
  },
  {
    id: "gb26", section: "reasoning", topic: "Direction sense", difficulty: "medium",
    stem: "A person walks 4 km East and then 3 km North. How far is he from the starting point?",
    options: ["5 km", "6 km", "7 km", "1 km"], correct: 0,
    explanation: "Straight-line distance = √(4² + 3²) = √25 = 5 km.",
  },
  {
    id: "gb27", section: "reasoning", topic: "Direction sense", difficulty: "medium",
    stem: "Facing North, a man turns 90° clockwise and then turns 180°. Which direction is he facing now?",
    options: ["East", "West", "South", "North"], correct: 1,
    explanation: "North → 90° clockwise = East → 180° = West.",
  },
  {
    id: "gb28", section: "reasoning", topic: "Syllogism", difficulty: "medium",
    stem: "All roses are flowers. All flowers are plants. Which conclusion follows?",
    options: ["Some roses are not plants", "All roses are plants", "No rose is a plant", "All plants are roses"], correct: 1,
    explanation: "Roses ⊂ flowers ⊂ plants, so all roses are plants.",
  },
  {
    id: "gb29", section: "reasoning", topic: "Odd one out", difficulty: "easy",
    stem: "Find the odd one out: Dog, Cat, Lion, Table",
    options: ["Dog", "Cat", "Lion", "Table"], correct: 3,
    explanation: "Dog, cat and lion are living animals; a table is non-living.",
  },
  {
    id: "gb30", section: "reasoning", topic: "Odd one out", difficulty: "medium",
    stem: "Find the odd one out: 8, 27, 64, 100",
    options: ["8", "27", "64", "100"], correct: 3,
    explanation: "8, 27 and 64 are perfect cubes (2³, 3³, 4³); 100 is not a perfect cube.",
  },
  {
    id: "gb31", section: "reasoning", topic: "Ranking", difficulty: "easy",
    stem: "In a row of 10 students, Ravi is 4th from the left. What is his position from the right?",
    options: ["6th", "7th", "8th", "5th"], correct: 1,
    explanation: "Position from the right = 10 − 4 + 1 = 7th.",
  },
  {
    id: "gb32", section: "reasoning", topic: "Ranking", difficulty: "medium",
    stem: "Amit ranks 7th from the top and 18th from the bottom in a class. How many students are there?",
    options: ["23", "24", "25", "26"], correct: 1,
    explanation: "Total = 7 + 18 − 1 = 24.",
  },
  {
    id: "gb33", section: "reasoning", topic: "Clocks", difficulty: "easy",
    stem: "What is the angle between the hour and minute hands of a clock at 3:00?",
    options: ["60°", "90°", "120°", "180°"], correct: 1,
    explanation: "Each hour mark is 30°; at 3:00 the hands are 3 × 30° = 90° apart.",
  },
  {
    id: "gb34", section: "reasoning", topic: "Calendars", difficulty: "medium",
    stem: "If today is Monday, what day will it be after 15 days?",
    options: ["Monday", "Tuesday", "Wednesday", "Sunday"], correct: 1,
    explanation: "15 ÷ 7 leaves a remainder of 1; Monday + 1 day = Tuesday.",
  },
  {
    id: "gb35", section: "reasoning", topic: "Analogy", difficulty: "easy",
    stem: "Doctor : Hospital :: Teacher : ?",
    options: ["Classroom", "School", "Student", "Book"], correct: 1,
    explanation: "A doctor works in a hospital; a teacher works in a school.",
  },
  {
    id: "gb36", section: "reasoning", topic: "Letter series", difficulty: "easy",
    stem: "Find the next term: A, C, E, G, ?",
    options: ["H", "I", "J", "K"], correct: 1,
    explanation: "One letter is skipped each time (A, C, E, G, I); the next is I.",
  },

  // ------------------------------------------------------------- Computer
  {
    id: "gb37", section: "computer", topic: "Fundamentals", difficulty: "easy",
    stem: "What is the full form of RAM?",
    options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Random Available Memory"], correct: 1,
    explanation: "RAM stands for Random Access Memory.",
  },
  {
    id: "gb38", section: "computer", topic: "Units", difficulty: "easy",
    stem: "Which is the smallest unit of data in a computer?",
    options: ["Byte", "Bit", "Nibble", "Kilobyte"], correct: 1,
    explanation: "A bit (binary digit) is the smallest unit of data.",
  },
  {
    id: "gb39", section: "computer", topic: "Units", difficulty: "easy",
    stem: "1 Kilobyte is equal to how many bytes?",
    options: ["1000", "1024", "1048", "512"], correct: 1,
    explanation: "1 Kilobyte = 1024 bytes (2¹⁰).",
  },
  {
    id: "gb40", section: "computer", topic: "Software", difficulty: "medium",
    stem: "Which of the following is system software?",
    options: ["MS Excel", "Windows", "Photoshop", "VLC"], correct: 1,
    explanation: "Windows is an operating system (system software); the others are application software.",
  },
  {
    id: "gb41", section: "computer", topic: "Hardware", difficulty: "easy",
    stem: "Which of the following is an output device?",
    options: ["Mouse", "Scanner", "Printer", "Keyboard"], correct: 2,
    explanation: "A printer is an output device; the others are input devices.",
  },
  {
    id: "gb42", section: "computer", topic: "MS Office", difficulty: "easy",
    stem: "In MS Word, which shortcut is used to save a document?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + A", "Ctrl + Z"], correct: 1,
    explanation: "Ctrl + S saves the document.",
  },
  {
    id: "gb43", section: "computer", topic: "MS Office", difficulty: "easy",
    stem: "Which MS Office application is used to create spreadsheets?",
    options: ["Word", "PowerPoint", "Excel", "Access"], correct: 2,
    explanation: "MS Excel is used to create spreadsheets.",
  },
  {
    id: "gb44", section: "computer", topic: "Email", difficulty: "medium",
    stem: "In email, what does 'CC' stand for?",
    options: ["Carbon Copy", "Contact Copy", "Common Copy", "Copy Content"], correct: 0,
    explanation: "In email, CC stands for Carbon Copy.",
  },
  {
    id: "gb45", section: "computer", topic: "Internet", difficulty: "easy",
    stem: "What does 'www' stand for?",
    options: ["World Wide Web", "Web World Wide", "World Web Width", "Wide World Web"], correct: 0,
    explanation: "www stands for World Wide Web.",
  },
  {
    id: "gb46", section: "computer", topic: "Operating systems", difficulty: "medium",
    stem: "Which of the following is a mobile operating system?",
    options: ["Android", "Intel", "Pentium", "Oracle"], correct: 0,
    explanation: "Android is a mobile operating system; Intel and Pentium are processors and Oracle is a database.",
  },
  {
    id: "gb47", section: "computer", topic: "Shortcuts", difficulty: "easy",
    stem: "Which shortcut is used to undo the last action?",
    options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"], correct: 1,
    explanation: "Ctrl + Z undoes the last action.",
  },
  {
    id: "gb48", section: "computer", topic: "Fundamentals", difficulty: "easy",
    stem: "The 'brain' of the computer is ____",
    options: ["RAM", "CPU", "Monitor", "Hard disk"], correct: 1,
    explanation: "The CPU (Central Processing Unit) is called the brain of the computer.",
  },
];

export const growthGbHi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  // ------------------------------------------------------------- Numerical
  gb1: {
    stem: "160 का 25% कितना है?",
    options: ["30", "35", "40", "45"],
    explanation: "160 का 25% = 0.25 × 160 = 40।",
  },
  gb2: {
    stem: "एक संख्या 40 से बढ़कर 50 हो जाती है। प्रतिशत वृद्धि कितनी है?",
    options: ["20%", "25%", "30%", "10%"],
    explanation: "वृद्धि = 10; प्रतिशत वृद्धि = 10/40 × 100 = 25%।",
  },
  gb3: {
    stem: "₹600 को A और B के बीच 2 : 3 के अनुपात में बाँटें। B का हिस्सा कितना है?",
    options: ["₹240", "₹300", "₹360", "₹400"],
    explanation: "कुल भाग = 5, प्रत्येक भाग = ₹120; B का हिस्सा = 3 × 120 = ₹360।",
  },
  gb4: {
    stem: "पहली 5 प्राकृत संख्याओं का औसत कितना है?",
    options: ["2.5", "3", "3.5", "4"],
    explanation: "(1+2+3+4+5)/5 = 15/5 = 3।",
  },
  gb5: {
    stem: "₹500 में खरीदी गई वस्तु ₹600 में बेची जाती है। लाभ प्रतिशत कितना है?",
    options: ["15%", "18%", "20%", "25%"],
    explanation: "लाभ = ₹100; लाभ% = 100/500 × 100 = 20%।",
  },
  gb6: {
    stem: "क्रय मूल्य ₹800 और विक्रय मूल्य ₹720 है। हानि प्रतिशत कितनी है?",
    options: ["8%", "10%", "12%", "20%"],
    explanation: "हानि = ₹80; हानि% = 80/800 × 100 = 10%।",
  },
  gb7: {
    stem: "₹2,000 पर 10% वार्षिक दर से 3 वर्ष का साधारण ब्याज ज्ञात कीजिए।",
    options: ["₹500", "₹600", "₹660", "₹700"],
    explanation: "साधारण ब्याज = मूलधन × दर × समय / 100 = 2000 × 10 × 3 / 100 = ₹600।",
  },
  gb8: {
    stem: "₹1,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज ज्ञात कीजिए।",
    options: ["₹200", "₹210", "₹221", "₹100"],
    explanation: "मिश्रधन = 1000 × (1.1)² = ₹1210; चक्रवृद्धि ब्याज = 1210 − 1000 = ₹210।",
  },
  gb9: {
    stem: "A एक काम को 10 दिन में और B 15 दिन में करता है। दोनों मिलकर उसे कितने दिन में पूरा करेंगे?",
    options: ["5 दिन", "6 दिन", "8 दिन", "12 दिन"],
    explanation: "1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6, अतः 6 दिन।",
  },
  gb10: {
    stem: "एक कार 3 घंटे में 150 किमी चलती है। इसकी चाल कितनी है?",
    options: ["40 किमी/घंटा", "45 किमी/घंटा", "50 किमी/घंटा", "55 किमी/घंटा"],
    explanation: "चाल = दूरी / समय = 150 / 3 = 50 किमी/घंटा।",
  },
  gb11: {
    stem: "54 किमी/घंटा की चाल से चल रही 180 मीटर लंबी रेलगाड़ी एक खंभे को कितने सेकंड में पार करती है?",
    options: ["10 सेकंड", "12 सेकंड", "15 सेकंड", "18 सेकंड"],
    explanation: "54 किमी/घंटा = 15 मी/से; समय = 180 / 15 = 12 सेकंड।",
  },
  gb12: {
    stem: "12 और 18 का महत्तम समापवर्तक (HCF) कितना है?",
    options: ["3", "6", "9", "12"],
    explanation: "12 और 18 दोनों को विभाजित करने वाली सबसे बड़ी संख्या 6 है।",
  },
  gb13: {
    stem: "5, 10 और 15 का लघुत्तम समापवर्त्य (LCM) कितना है?",
    options: ["15", "30", "45", "60"],
    explanation: "5, 10 और 15 से विभाज्य सबसे छोटी संख्या 30 है।",
  },
  gb14: {
    stem: "एक आयत की लंबाई 12 सेमी और चौड़ाई 5 सेमी है। इसका क्षेत्रफल कितना है?",
    options: ["50 सेमी²", "55 सेमी²", "60 सेमी²", "70 सेमी²"],
    explanation: "क्षेत्रफल = लंबाई × चौड़ाई = 12 × 5 = 60 सेमी²।",
  },
  gb15: {
    stem: "9 सेमी भुजा वाले वर्ग का परिमाप कितना है?",
    options: ["27 सेमी", "36 सेमी", "45 सेमी", "81 सेमी"],
    explanation: "परिमाप = 4 × भुजा = 4 × 9 = 36 सेमी।",
  },
  gb16: {
    stem: "एक वृत्त की त्रिज्या 7 सेमी है। इसकी परिधि कितनी है? (π = 22/7 लें)",
    options: ["22 सेमी", "44 सेमी", "49 सेमी", "154 सेमी"],
    explanation: "परिधि = 2πr = 2 × 22/7 × 7 = 44 सेमी।",
  },
  gb17: {
    stem: "यदि 3x + 5 = 20 है, तो x का मान क्या है?",
    options: ["3", "5", "7", "15"],
    explanation: "3x = 20 − 5 = 15, अतः x = 5।",
  },
  gb18: {
    stem: "200 लोगों के एक सर्वेक्षण में 45% ने चाय और शेष ने कॉफ़ी पसंद की। कितने लोगों ने कॉफ़ी पसंद की?",
    options: ["90", "100", "110", "120"],
    explanation: "कॉफ़ी = 100% − 45% = 55% of 200 = 110।",
  },

  // ------------------------------------------------------------- Reasoning
  gb19: {
    stem: "बिल्ली : बिलौटा :: कुत्ता : ?",
    options: ["शावक", "पिल्ला", "बछड़ा", "बछेड़ा"],
    explanation: "बिल्ली का बच्चा बिलौटा होता है; कुत्ते का बच्चा पिल्ला होता है।",
  },
  gb20: {
    stem: "अगला पद ज्ञात कीजिए: 5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    explanation: "प्रत्येक पद पिछले पद का दुगुना है; 40 × 2 = 80।",
  },
  gb21: {
    stem: "अगला पद ज्ञात कीजिए: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "36"],
    explanation: "ये पूर्ण वर्ग हैं (1², 2², 3², 4²); अगला 5² = 25।",
  },
  gb22: {
    stem: "एक कोड में PEN को QFO लिखा जाता है। उसी कोड में BAG को कैसे लिखा जाएगा?",
    options: ["CBH", "CAH", "DBH", "CBI"],
    explanation: "प्रत्येक अक्षर +1 खिसकता है: B→C, A→B, G→H, अर्थात् CBH।",
  },
  gb23: {
    stem: "एक कोड में FISH को उल्टा करके HSIF लिखा जाता है। BIRD को कैसे लिखा जाएगा?",
    options: ["DRIB", "DIRB", "BRID", "RDIB"],
    explanation: "BIRD के अक्षरों को उल्टा करने पर DRIB बनता है।",
  },
  gb24: {
    stem: "A, B का पिता है। B, C की बहन है। A का C से क्या संबंध है?",
    options: ["भाई", "पिता", "चाचा", "पुत्र"],
    explanation: "B और C भाई-बहन हैं, अतः उनका पिता A, C का भी पिता है।",
  },
  gb25: {
    stem: "एक लड़के का परिचय देते हुए सीता ने कहा, 'वह मेरे पिता की पत्नी का पुत्र है।' वह लड़का सीता से किस प्रकार संबंधित है?",
    options: ["चचेरा भाई", "भाई", "चाचा", "भतीजा"],
    explanation: "पिता की पत्नी सीता की माता है; माता का पुत्र सीता का भाई है।",
  },
  gb26: {
    stem: "एक व्यक्ति 4 किमी पूर्व और फिर 3 किमी उत्तर चलता है। वह प्रारंभिक बिंदु से कितनी दूर है?",
    options: ["5 किमी", "6 किमी", "7 किमी", "1 किमी"],
    explanation: "सीधी दूरी = √(4² + 3²) = √25 = 5 किमी।",
  },
  gb27: {
    stem: "उत्तर की ओर मुख करके एक व्यक्ति 90° दक्षिणावर्त घूमता है और फिर 180° घूमता है। अब उसका मुख किस दिशा में है?",
    options: ["पूर्व", "पश्चिम", "दक्षिण", "उत्तर"],
    explanation: "उत्तर → 90° दक्षिणावर्त = पूर्व → 180° = पश्चिम।",
  },
  gb28: {
    stem: "सभी गुलाब फूल हैं। सभी फूल पौधे हैं। कौन-सा निष्कर्ष सही है?",
    options: ["कुछ गुलाब पौधे नहीं हैं", "सभी गुलाब पौधे हैं", "कोई गुलाब पौधा नहीं है", "सभी पौधे गुलाब हैं"],
    explanation: "गुलाब ⊂ फूल ⊂ पौधे, अतः सभी गुलाब पौधे हैं।",
  },
  gb29: {
    stem: "विषम को चुनिए: कुत्ता, बिल्ली, शेर, मेज़",
    options: ["कुत्ता", "बिल्ली", "शेर", "मेज़"],
    explanation: "कुत्ता, बिल्ली और शेर जीवित प्राणी हैं; मेज़ निर्जीव है।",
  },
  gb30: {
    stem: "विषम को चुनिए: 8, 27, 64, 100",
    options: ["8", "27", "64", "100"],
    explanation: "8, 27 और 64 पूर्ण घन हैं (2³, 3³, 4³); 100 पूर्ण घन नहीं है।",
  },
  gb31: {
    stem: "10 विद्यार्थियों की एक पंक्ति में रवि बाएँ से चौथे स्थान पर है। दाएँ से उसका स्थान क्या है?",
    options: ["6वाँ", "7वाँ", "8वाँ", "5वाँ"],
    explanation: "दाएँ से स्थान = 10 − 4 + 1 = 7वाँ।",
  },
  gb32: {
    stem: "एक कक्षा में अमित ऊपर से 7वें और नीचे से 18वें स्थान पर है। कक्षा में कितने विद्यार्थी हैं?",
    options: ["23", "24", "25", "26"],
    explanation: "कुल = 7 + 18 − 1 = 24।",
  },
  gb33: {
    stem: "3:00 बजे घड़ी की घंटे और मिनट की सूइयों के बीच का कोण कितना है?",
    options: ["60°", "90°", "120°", "180°"],
    explanation: "प्रत्येक घंटे का निशान 30° का होता है; 3:00 बजे सूइयाँ 3 × 30° = 90° दूर हैं।",
  },
  gb34: {
    stem: "यदि आज सोमवार है, तो 15 दिन बाद कौन-सा दिन होगा?",
    options: ["सोमवार", "मंगलवार", "बुधवार", "रविवार"],
    explanation: "15 ÷ 7 का शेष 1 है; सोमवार + 1 दिन = मंगलवार।",
  },
  gb35: {
    stem: "डॉक्टर : अस्पताल :: शिक्षक : ?",
    options: ["कक्षा", "विद्यालय", "विद्यार्थी", "पुस्तक"],
    explanation: "डॉक्टर अस्पताल में कार्य करता है; शिक्षक विद्यालय में कार्य करता है।",
  },
  gb36: {
    stem: "अगला पद ज्ञात कीजिए: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    explanation: "प्रत्येक बार एक अक्षर छोड़ा जाता है (A, C, E, G, I); अगला I है।",
  },

  // ------------------------------------------------------------- Computer
  gb37: {
    stem: "RAM का पूर्ण रूप क्या है?",
    options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Random Available Memory"],
    explanation: "RAM का अर्थ Random Access Memory (रैंडम एक्सेस मेमोरी) है।",
  },
  gb38: {
    stem: "कंप्यूटर में डेटा की सबसे छोटी इकाई कौन-सी है?",
    options: ["Byte", "Bit", "Nibble", "Kilobyte"],
    explanation: "बिट (Bit) डेटा की सबसे छोटी इकाई है।",
  },
  gb39: {
    stem: "1 किलोबाइट कितने बाइट के बराबर होता है?",
    options: ["1000", "1024", "1048", "512"],
    explanation: "1 किलोबाइट = 1024 बाइट (2¹⁰) होता है।",
  },
  gb40: {
    stem: "निम्नलिखित में से कौन सिस्टम सॉफ़्टवेयर है?",
    options: ["MS Excel", "Windows", "Photoshop", "VLC"],
    explanation: "Windows एक ऑपरेटिंग सिस्टम (सिस्टम सॉफ़्टवेयर) है; शेष अनुप्रयोग सॉफ़्टवेयर हैं।",
  },
  gb41: {
    stem: "निम्नलिखित में से कौन एक आउटपुट डिवाइस है?",
    options: ["माउस", "स्कैनर", "प्रिंटर", "कीबोर्ड"],
    explanation: "प्रिंटर एक आउटपुट डिवाइस है; शेष इनपुट डिवाइस हैं।",
  },
  gb42: {
    stem: "MS Word में दस्तावेज़ को सहेजने के लिए कौन-सा शॉर्टकट प्रयोग होता है?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + A", "Ctrl + Z"],
    explanation: "Ctrl + S दस्तावेज़ को सहेजता (Save) है।",
  },
  gb43: {
    stem: "स्प्रेडशीट बनाने के लिए कौन-सा MS Office अनुप्रयोग प्रयोग होता है?",
    options: ["Word", "PowerPoint", "Excel", "Access"],
    explanation: "MS Excel का उपयोग स्प्रेडशीट बनाने के लिए किया जाता है।",
  },
  gb44: {
    stem: "ईमेल में 'CC' का क्या अर्थ है?",
    options: ["Carbon Copy", "Contact Copy", "Common Copy", "Copy Content"],
    explanation: "ईमेल में CC का अर्थ Carbon Copy (कार्बन कॉपी) है।",
  },
  gb45: {
    stem: "'www' का पूर्ण रूप क्या है?",
    options: ["World Wide Web", "Web World Wide", "World Web Width", "Wide World Web"],
    explanation: "www का अर्थ World Wide Web है।",
  },
  gb46: {
    stem: "निम्नलिखित में से कौन एक मोबाइल ऑपरेटिंग सिस्टम है?",
    options: ["Android", "Intel", "Pentium", "Oracle"],
    explanation: "Android एक मोबाइल ऑपरेटिंग सिस्टम है; Intel और Pentium प्रोसेसर हैं तथा Oracle एक डेटाबेस है।",
  },
  gb47: {
    stem: "अंतिम क्रिया को पूर्ववत (Undo) करने के लिए कौन-सा शॉर्टकट प्रयोग होता है?",
    options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + U", "Ctrl + R"],
    explanation: "Ctrl + Z अंतिम क्रिया को पूर्ववत (Undo) करता है।",
  },
  gb48: {
    stem: "कंप्यूटर का 'मस्तिष्क' कहलाता है ____",
    options: ["RAM", "CPU", "मॉनिटर", "हार्ड डिस्क"],
    explanation: "CPU (केंद्रीय प्रोसेसिंग यूनिट) को कंप्यूटर का मस्तिष्क कहा जाता है।",
  },
};
