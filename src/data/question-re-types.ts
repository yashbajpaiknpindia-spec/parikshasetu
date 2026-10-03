/**
 * Reasoning: question types from the official SUPER TET syllabus that the older banks
 * missed. section "reasoning", shared across levels.
 *
 * Topics: Assertion & reason, Binary logic, Coded inequalities, Grouping & selection,
 * Symbols & notations, Venn diagrams, Cubes & dice, Statement & inference.
 * 20 per topic: 10 beginner (difficulty "medium"), 10 proficient (difficulty "hard").
 */
import type { Question } from "./questions";

const AR_OPTS = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];
const AR_OPTS_HI = [
  "A और R दोनों सही हैं, और R, A की सही व्याख्या है",
  "A और R दोनों सही हैं, परन्तु R, A की सही व्याख्या नहीं है",
  "A सही है, परन्तु R गलत है",
  "A गलत है, परन्तु R सही है",
];

const IC_OPTS = ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"];
const IC_OPTS_HI = [
  "केवल I अनुसरण करता है",
  "केवल II अनुसरण करता है",
  "I और II दोनों अनुसरण करते हैं",
  "न तो I और न ही II अनुसरण करता है",
];

const CI1 = "In the following question, '%' means 'greater than', '@' means 'less than', '#' means 'equal to', '$' means 'greater than or equal to' and '&' means 'less than or equal to'.";
const CI1_HI = "निम्नलिखित प्रश्न में '%' का अर्थ 'से बड़ा', '@' का अर्थ 'से छोटा', '#' का अर्थ 'के बराबर', '$' का अर्थ 'से बड़ा या बराबर' और '&' का अर्थ 'से छोटा या बराबर' है।";
const CI2 = "In the following question, 'P @ Q' means P is not greater than Q; 'P # Q' means P is neither smaller than nor equal to Q; 'P $ Q' means P is neither greater than nor smaller than Q; 'P % Q' means P is not smaller than Q; 'P & Q' means P is neither greater than nor equal to Q.";
const CI2_HI = "निम्नलिखित प्रश्न में 'P @ Q' का अर्थ है P, Q से बड़ा नहीं है; 'P # Q' का अर्थ है P, Q से न तो छोटा है और न बराबर; 'P $ Q' का अर्थ है P, Q से न तो बड़ा है और न छोटा; 'P % Q' का अर्थ है P, Q से छोटा नहीं है; 'P & Q' का अर्थ है P, Q से न तो बड़ा है और न बराबर।";

export const reasoningTypesBank: Question[] = [
  // ==================================================== Assertion & reason, BEGINNER
  {
    id: "rt-ar-b-01", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Iron objects rust faster in coastal areas than in dry inland areas. Reason (R): Moist air carrying dissolved salts speeds up the oxidation of iron.",
    options: [...AR_OPTS], correct: 0,
    explanation: "Rusting needs oxygen and moisture, and dissolved salts make water a better electrolyte, which speeds it up. Both are true and R explains A.",
  },
  {
    id: "rt-ar-b-02", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): The Right of Children to Free and Compulsory Education Act, 2009 covers children aged 6 to 14 years. Reason (R): The Act came into force on 1 April 2010.",
    options: [...AR_OPTS], correct: 1,
    explanation: "Both statements are true, but the date on which the Act came into force does not explain the age group it covers. So R is not the explanation of A.",
  },
  {
    id: "rt-ar-b-03", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): The Sun rises in the west. Reason (R): The Earth rotates on its axis from west to east.",
    options: [...AR_OPTS], correct: 3,
    explanation: "Because the Earth rotates from west to east, the Sun appears to rise in the east. So A is false and R is true.",
  },
  {
    id: "rt-ar-b-04", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Ice floats on water. Reason (R): Ice is denser than water.",
    options: [...AR_OPTS], correct: 2,
    explanation: "Ice floats because it is LESS dense than water (about 0.92 g/cm³ against 1 g/cm³). A is true, R is false.",
  },
  {
    id: "rt-ar-b-05", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Most leaves appear green. Reason (R): Chlorophyll absorbs mainly red and blue light and reflects green light.",
    options: [...AR_OPTS], correct: 0,
    explanation: "We see the colour a surface reflects. Chlorophyll reflects green light, so leaves look green. Both true and R explains A.",
  },
  {
    id: "rt-ar-b-06", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Mount Everest is the highest peak in the world above sea level. Reason (R): Mount Everest lies in the Himalayas.",
    options: [...AR_OPTS], correct: 1,
    explanation: "Both are true, but lying in the Himalayas does not explain why Everest is the highest; many lower peaks also lie there. R does not explain A.",
  },
  {
    id: "rt-ar-b-07", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Sound travels faster in air than in steel. Reason (R): Sound needs a material medium to travel.",
    options: [...AR_OPTS], correct: 3,
    explanation: "Sound travels much faster in solids such as steel (about 5,000 m/s) than in air (about 343 m/s), so A is false. R is true: sound cannot travel in a vacuum.",
  },
  {
    id: "rt-ar-b-08", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): The Tropic of Cancer passes through India. Reason (R): The Tropic of Cancer lies at about 23.5 degrees South latitude.",
    options: [...AR_OPTS], correct: 2,
    explanation: "The Tropic of Cancer (about 23.5° N) passes through eight Indian states, so A is true. It lies in the NORTHERN hemisphere, so R is false.",
  },
  {
    id: "rt-ar-b-09", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Lightning is seen before the thunder is heard. Reason (R): Light travels much faster than sound.",
    options: [...AR_OPTS], correct: 0,
    explanation: "Both are produced together, but light (3 × 10⁸ m/s) reaches us almost instantly while sound (about 343 m/s) lags. R explains A.",
  },
  {
    id: "rt-ar-b-10", section: "reasoning", topic: "Assertion & reason", level: "beginner", difficulty: "medium",
    stem: "Assertion (A): Whales are mammals. Reason (R): Whales breathe through gills.",
    options: [...AR_OPTS], correct: 2,
    explanation: "Whales are mammals (warm-blooded, give birth, suckle young), so A is true. They breathe air through lungs, not gills, so R is false.",
  },
  // ==================================================== Assertion & reason, PROFICIENT
  {
    id: "rt-ar-p-01", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Water boils at a temperature below 100 °C at high altitudes. Reason (R): Atmospheric pressure decreases with increasing altitude.",
    options: [...AR_OPTS], correct: 0,
    explanation: "A liquid boils when its vapour pressure equals the surrounding pressure. Lower air pressure at altitude means this is reached at a lower temperature. R explains A.",
  },
  {
    id: "rt-ar-p-02", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Venus is the hottest planet in the solar system. Reason (R): Venus is the planet closest to the Sun.",
    options: [...AR_OPTS], correct: 2,
    explanation: "Venus is the hottest planet because of its thick carbon dioxide atmosphere (runaway greenhouse effect), so A is true. Mercury, not Venus, is closest to the Sun, so R is false.",
  },
  {
    id: "rt-ar-p-03", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): The Earth experiences seasons. Reason (R): The Earth's orbit around the Sun is elliptical.",
    options: [...AR_OPTS], correct: 1,
    explanation: "Both are true, but seasons are caused by the tilt of the Earth's axis (about 23.5°), not by the shape of the orbit. The Earth is in fact nearest the Sun in early January, during the northern winter. R does not explain A.",
  },
  {
    id: "rt-ar-p-04", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): A convex lens is used to correct myopia (short-sightedness). Reason (R): A convex lens is a converging lens.",
    options: [...AR_OPTS], correct: 3,
    explanation: "Myopia is corrected with a CONCAVE (diverging) lens, so A is false. R is true: a convex lens converges light.",
  },
  {
    id: "rt-ar-p-05", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Diamond is a good conductor of electricity. Reason (R): In diamond, each carbon atom is bonded to four other carbon atoms.",
    options: [...AR_OPTS], correct: 3,
    explanation: "Because all four valence electrons of each carbon are used in bonding, diamond has no free electrons and is an insulator. So A is false while R is true.",
  },
  {
    id: "rt-ar-p-06", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Piaget's theory describes four stages of cognitive development. Reason (R): Jean Piaget was a Swiss psychologist.",
    options: [...AR_OPTS], correct: 1,
    explanation: "Both are true (sensorimotor, pre-operational, concrete operational, formal operational; Piaget was Swiss), but his nationality does not explain the number of stages.",
  },
  {
    id: "rt-ar-p-07", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): A person standing in a lift that is accelerating upward feels heavier. Reason (R): When the lift accelerates upward, the normal force from the floor on the person is greater than the person's weight.",
    options: [...AR_OPTS], correct: 0,
    explanation: "Felt weight is the normal force. For upward acceleration a, N = m(g + a) > mg, so the person feels heavier. R explains A.",
  },
  {
    id: "rt-ar-p-08", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): The Constitution of India came into force on 26 January 1950. Reason (R): The Constituent Assembly adopted the Constitution on 26 November 1949.",
    options: [...AR_OPTS], correct: 1,
    explanation: "Both dates are correct. But adoption on 26 November 1949 does not explain why commencement was on 26 January; that date was chosen to honour the Purna Swaraj declaration of 1930. R is not the explanation.",
  },
  {
    id: "rt-ar-p-09", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Children learn new ideas more effectively when these are linked to what they already know. Reason (R): According to Ausubel, meaningful learning occurs when new information is related to the learner's existing cognitive structure.",
    options: [...AR_OPTS], correct: 0,
    explanation: "Ausubel's theory of meaningful learning says new material is learnt well when anchored to existing concepts. This is exactly why linking to prior knowledge works, so R explains A.",
  },
  {
    id: "rt-ar-p-10", section: "reasoning", topic: "Assertion & reason", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): The Ganga originates from the Gangotri glacier. Reason (R): The Ganga drains into the Arabian Sea.",
    options: [...AR_OPTS], correct: 2,
    explanation: "The Ganga (as the Bhagirathi) rises from the Gangotri glacier at Gaumukh, so A is true. It drains into the Bay of Bengal, not the Arabian Sea, so R is false.",
  },
  // ==================================================== Binary logic, BEGINNER
  {
    id: "rt-bl-b-01", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "On an island, every person is either a truth-teller (always speaks the truth) or a liar (always lies). A says, \"B is a liar.\" B says, \"A and I are of the same type.\" What are A and B?",
    options: ["Both are truth-tellers", "Both are liars", "A is a liar, B is a truth-teller", "A is a truth-teller, B is a liar"], correct: 3,
    explanation: "If A lies, B is a truth-teller; then B's claim 'same type' would be true, but they differ. Contradiction. So A tells the truth, B is a liar, and B's claim 'same type' is indeed false. Consistent.",
  },
  {
    id: "rt-bl-b-02", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "On an island, every person either always tells the truth or always lies. Which of the following statements can NO person on the island ever make?",
    options: ["\"I always tell the truth.\"", "\"I always lie.\"", "\"Two plus two is four.\"", "\"Two plus two is five.\""], correct: 1,
    explanation: "A truth-teller saying 'I always lie' would be lying, and a liar saying it would be telling the truth. Both are impossible. The other three can each be said by one type.",
  },
  {
    id: "rt-bl-b-03", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Each of A and B is either a truth-teller or a liar. A says, \"At least one of us is a liar.\" What are A and B?",
    options: ["A is a truth-teller, B is a liar", "Both are liars", "Both are truth-tellers", "A is a liar, B is a truth-teller"], correct: 0,
    explanation: "If A were a liar, the statement 'at least one of us is a liar' would be true, which a liar cannot say. So A is a truth-teller, and then the statement is true, so B must be the liar.",
  },
  {
    id: "rt-bl-b-04", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Three statements are made about a whole number N: (1) N is greater than 10. (2) N is greater than 5. (3) N is greater than 20. Exactly one of the statements is true. Which of the following must be correct?",
    options: ["N is greater than 10", "N is not greater than 5", "N is greater than 5 but not greater than 10", "N is greater than 20"], correct: 2,
    explanation: "If (3) is true, all three are true; if (1) is true, (2) is also true. So neither (1) nor (3) can be the lone true one. Hence only (2) is true: 5 < N ≤ 10. If N ≤ 5, none would be true.",
  },
  {
    id: "rt-bl-b-05", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Statement p: \"It is raining\" is TRUE. Statement q: \"The ground is wet\" is FALSE. Which compound statement is TRUE?",
    options: ["p and q", "If p, then q", "p or q", "not p"], correct: 2,
    explanation: "'p and q' needs both true (false). 'If p then q' is false when p is true and q false. 'not p' is false. 'p or q' is true because p is true.",
  },
  {
    id: "rt-bl-b-06", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Each of A and B is either a truth-teller or a liar. A says, \"B is a truth-teller.\" B says, \"A and I are of opposite types.\" What are A and B?",
    options: ["Both are truth-tellers", "Both are liars", "A is a truth-teller, B is a liar", "A is a liar, B is a truth-teller"], correct: 1,
    explanation: "If A tells the truth, B is a truth-teller, so B's claim 'opposite types' must be true, but both would be truth-tellers. Contradiction. So A lies, B is a liar, and B's claim 'opposite types' is false (both liars). Consistent.",
  },
  {
    id: "rt-bl-b-07", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "What is the correct negation of the statement \"All students passed the examination\"?",
    options: ["No student passed the examination", "Some students passed the examination", "All students failed the examination", "At least one student did not pass the examination"], correct: 3,
    explanation: "The negation of 'all X are Y' is 'at least one X is not Y'. 'No student passed' is too strong; it is not the logical opposite.",
  },
  {
    id: "rt-bl-b-08", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Two doors: one leads out, the other does not. Each door has a guard; one guard always tells the truth and the other always lies, but you do not know which is which. You ask one guard, \"Which door would the OTHER guard say leads out?\" He answers, \"Door 1.\" Which door should you take?",
    options: ["Door 1", "Door 2", "Either door, it cannot be decided", "Ask again; no conclusion is possible"], correct: 1,
    explanation: "If you asked the truth-teller, he truthfully reports the liar's wrong answer. If you asked the liar, he falsely reports the truth-teller's right answer. Either way the reply names the wrong door, so take Door 2.",
  },
  {
    id: "rt-bl-b-09", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "Of X, Y and Z, exactly one is a truth-teller and the other two are liars. X says, \"Y is a liar.\" Y says, \"Z is a liar.\" Z says, \"X and Y are both liars.\" Who is the truth-teller?",
    options: ["X", "Z", "Y", "Cannot be determined"], correct: 2,
    explanation: "If X is truthful, Y lies, so Z is truthful: two truth-tellers, contradiction. If Z is truthful, X and Y lie, but then X's 'Y is a liar' would be true, contradiction. If Y is truthful: Z lies (fine), X's claim is false (fine), Z's claim is false because Y is truthful (fine). So Y.",
  },
  {
    id: "rt-bl-b-10", section: "reasoning", topic: "Binary logic", level: "beginner", difficulty: "medium",
    stem: "The conditional statement \"If p, then q\" is FALSE only when ____",
    options: ["p is true and q is false", "p is false and q is true", "both p and q are false", "both p and q are true"], correct: 0,
    explanation: "A conditional is broken only when the condition holds (p true) but the result fails (q false). In every other case it is true.",
  },
  // ==================================================== Binary logic, PROFICIENT
  {
    id: "rt-bl-p-01", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A, B and C are each either a truth-teller or a liar. A says, \"All three of us are liars.\" B says, \"Exactly one of us is a truth-teller.\" What are A, B and C?",
    options: ["A liar, B truth-teller, C liar", "A liar, B liar, C truth-teller", "A truth-teller, B liar, C liar", "All three are liars"], correct: 0,
    explanation: "A cannot be truthful (he would be calling himself a liar), so A lies and at least one of them is truthful. If B lied, the lone truth-teller would have to be C, making B's statement true: contradiction. So B is truthful, and 'exactly one' means C is a liar.",
  },
  {
    id: "rt-bl-p-02", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A, B and C are each either a truth-teller or a liar. A says, \"B is a liar.\" B says, \"A and C are of the same type.\" Which of the following can be concluded with certainty?",
    options: ["A is a truth-teller", "B is a truth-teller", "C is a truth-teller", "C is a liar"], correct: 3,
    explanation: "Case 1: A truthful, so B lies, so A and C differ, so C lies. Case 2: A lies, so B is truthful, so A and C are the same, so C lies. In both cases C is a liar; A and B are not fixed.",
  },
  {
    id: "rt-bl-p-03", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A card has four statements: (1) \"Exactly one statement on this card is false.\" (2) \"Exactly two statements on this card are false.\" (3) \"Exactly three statements on this card are false.\" (4) \"All four statements on this card are false.\" Which statement is true?",
    options: ["Statement 1", "Statement 2", "Statement 4", "Statement 3"], correct: 3,
    explanation: "The statements contradict one another, so at most one is true. If none were true, statement 4 would be true, a contradiction. So exactly one is true and three are false, which is what statement 3 says.",
  },
  {
    id: "rt-bl-p-04", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "One of A, B, C and D broke a window. A says, \"B did it.\" B says, \"D did it.\" C says, \"I did not do it.\" D says, \"B is lying.\" If exactly one of the four statements is true, who broke the window?",
    options: ["A", "C", "B", "D"], correct: 1,
    explanation: "B's and D's statements contradict each other, so exactly one of them is true. Hence A's and C's are false. C's being false means C did it. Check: A's 'B did it' is false; B's 'D did it' is false; D's 'B is lying' is true. Exactly one true.",
  },
  {
    id: "rt-bl-p-05", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "One of P, Q, R and S broke a vase. P says, \"Q did it.\" Q says, \"S did it.\" R says, \"I did not do it.\" S says, \"Q is lying.\" If exactly one of the four is lying, who broke the vase?",
    options: ["P", "S", "R", "Q"], correct: 3,
    explanation: "Q and S contradict each other, so one of them is the single liar. So P and R are truthful: Q did it. Then Q's 'S did it' is the lie and S's 'Q is lying' is true. Exactly one liar.",
  },
  {
    id: "rt-bl-p-06", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A and B are each either a truth-teller or a liar. A says, \"If I am a truth-teller, then B is a truth-teller.\" What are A and B?",
    options: ["A truth-teller, B liar", "Both truth-tellers", "Both liars", "A liar, B truth-teller"], correct: 1,
    explanation: "If A were a liar, the condition 'I am a truth-teller' is false, so the whole 'if ... then' statement is automatically true, which a liar cannot say. So A is truthful, the statement is true, and since its condition holds, B is a truth-teller.",
  },
  {
    id: "rt-bl-p-07", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A and B are each either a truth-teller or a liar. A says, \"I am a liar and B is a truth-teller.\" What are A and B?",
    options: ["A truth-teller, B liar", "Both truth-tellers", "A liar, B truth-teller", "Both liars"], correct: 3,
    explanation: "A truth-teller cannot call himself a liar, so A lies and the whole statement is false. Its first part ('I am a liar') is true, so the second part must be false: B is a liar.",
  },
  {
    id: "rt-bl-p-08", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "Which statement is logically equivalent to \"If a student studies regularly, the student passes\"?",
    options: ["If a student passes, the student studied regularly", "If a student does not pass, the student did not study regularly", "If a student does not study regularly, the student does not pass", "A student passes only if the student studies regularly"], correct: 1,
    explanation: "'If p then q' is equivalent only to its contrapositive 'if not q then not p'. Option 1 is the converse, option 3 the inverse, and option 4 means 'if passes then studied', again the converse.",
  },
  {
    id: "rt-bl-p-09", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "Three boxes are labelled \"Apples\", \"Oranges\" and \"Mixed\". Every label is wrong. You take one fruit from the box labelled \"Mixed\" and it is an apple. What does the box labelled \"Oranges\" contain?",
    options: ["Only apples", "Only oranges", "Mixed fruit", "It cannot be determined"], correct: 2,
    explanation: "The 'Mixed' box is not mixed, and it gave an apple, so it holds only apples. The 'Oranges' box cannot hold oranges (wrong label) or apples (already placed), so it is Mixed. The 'Apples' box holds oranges.",
  },
  {
    id: "rt-bl-p-10", section: "reasoning", topic: "Binary logic", level: "proficient", difficulty: "hard",
    stem: "A Lion lies on Monday, Tuesday and Wednesday and tells the truth on other days. A Unicorn lies on Thursday, Friday and Saturday and tells the truth on other days. One day both say, \"Yesterday was one of my lying days.\" What day is it?",
    options: ["Monday", "Sunday", "Thursday", "Friday"], correct: 2,
    explanation: "The Lion can say it on Monday (lying, and Sunday was not a lying day) or Thursday (truthful, Wednesday was a lying day). The Unicorn can say it on Thursday (lying, Wednesday was not its lying day) or Sunday (truthful, Saturday was a lying day). The common day is Thursday.",
  },
  // ==================================================== Coded inequalities, BEGINNER
  {
    id: "rt-ci-b-01", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: A % B, B # C, C $ D. Conclusions: I. A % D  II. B $ D`,
    options: [...IC_OPTS], correct: 2,
    explanation: "Decoded: A > B = C ≥ D. So A > D (I true) and B = C ≥ D, so B ≥ D (II true). Both follow.",
  },
  {
    id: "rt-ci-b-02", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: M @ N, N & O, O # P. Conclusions: I. M @ P  II. N % P`,
    options: [...IC_OPTS], correct: 0,
    explanation: "Decoded: M < N ≤ O = P. So M < P (I true). N ≤ P, so 'N > P' is false (II does not follow). Only I.",
  },
  {
    id: "rt-ci-b-03", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: K & L, L % M, N # M. Conclusions: I. K % N  II. K @ M`,
    options: [...IC_OPTS], correct: 3,
    explanation: "Decoded: K ≤ L > M = N. The signs between K and M point in opposite directions, so no relation between K and M (or N) can be fixed. Neither follows.",
  },
  {
    id: "rt-ci-b-04", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: R # S, S @ T, T & U. Conclusions: I. R # U  II. U % S`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: R = S < T ≤ U. So U > S (II true) and R < U, so R = U is false (I does not follow). Only II.",
  },
  {
    id: "rt-ci-b-05", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: A $ B, C & B, D # C. Conclusions: I. A $ D  II. A % D`,
    options: [...IC_OPTS], correct: 0,
    explanation: "Decoded: A ≥ B ≥ C = D, so A ≥ D. I (A ≥ D) follows. II (A > D) is not certain because all could be equal. Only I.",
  },
  {
    id: "rt-ci-b-06", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: P @ Q, Q # R, S % R. Conclusions: I. S % P  II. Q @ S`,
    options: [...IC_OPTS], correct: 2,
    explanation: "Decoded: P < Q = R < S. So S > P (I true) and Q < S (II true). Both follow.",
  },
  {
    id: "rt-ci-b-07", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: E % F, F $ G, H @ G. Conclusions: I. E # G  II. F % H`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: E > F ≥ G > H. E > G, so E = G is false (I fails). F ≥ G > H gives F > H (II true). Only II.",
  },
  {
    id: "rt-ci-b-08", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: J & K, K & L, M % L. Conclusions: I. J # L  II. M % J`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: J ≤ K ≤ L < M. J ≤ L, so J = L is possible but not certain (I fails). J ≤ L < M gives M > J (II true). Only II.",
  },
  {
    id: "rt-ci-b-09", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: T $ U, U @ V, V # W. Conclusions: I. T % W  II. U @ W`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: T ≥ U < V = W. T and W are linked through opposite signs, so I cannot be decided. U < V = W gives U < W (II true). Only II.",
  },
  {
    id: "rt-ci-b-10", section: "reasoning", topic: "Coded inequalities", level: "beginner", difficulty: "medium",
    stem: `${CI1} Statements: G # H, H $ I, I % J. Conclusions: I. G % I  II. H # J`,
    options: [...IC_OPTS], correct: 3,
    explanation: "Decoded: G = H ≥ I > J. G ≥ I, so 'G > I' is not certain (I fails). H > J, so 'H = J' is false (II fails). Neither follows.",
  },
  // ==================================================== Coded inequalities, PROFICIENT
  {
    id: "rt-ci-p-01", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: A @ B, B & C, C $ D, D % E. Conclusions: I. A & D  II. B # E`,
    options: [...IC_OPTS], correct: 0,
    explanation: "Decoded: A ≤ B < C = D ≥ E. So A < D (I true). B < D and E ≤ D, so B and E cannot be compared (II fails). Only I.",
  },
  {
    id: "rt-ci-p-02", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: M % N, N # O, O $ P, P @ Q. Conclusions: I. M # P  II. Q % O`,
    options: [...IC_OPTS], correct: 2,
    explanation: "Decoded: M ≥ N > O = P ≤ Q. M ≥ N > P gives M > P (I true). Q ≥ P = O gives Q ≥ O (II true). Both follow.",
  },
  {
    id: "rt-ci-p-03", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: R $ S, S @ T, T & U, V # U. Conclusions: I. R $ T  II. V # S`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: R = S ≤ T < U < V. R ≤ T, so R = T is not certain (I fails). V > U > T ≥ S gives V > S (II true). Only II.",
  },
  {
    id: "rt-ci-p-04", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: W % X, X $ Y, Y @ Z. Conclusions: I. W # Y  II. W $ Y`,
    options: ["Only I follows", "Only II follows", "Either I or II follows", "Neither I nor II follows"], correct: 2,
    explanation: "Decoded: W ≥ X = Y ≤ Z, so W ≥ Y. Neither 'W > Y' (I) nor 'W = Y' (II) is certain alone, but together they cover every possibility of W ≥ Y. So either I or II follows.",
  },
  {
    id: "rt-ci-p-05", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: B # C, C % D, D $ E, F @ E. Conclusions: I. B # F  II. F $ C`,
    options: [...IC_OPTS], correct: 0,
    explanation: "Decoded: B > C ≥ D = E ≥ F. So B > F (I true). C ≥ F, so C = F is only possible, not certain (II fails). Only I.",
  },
  {
    id: "rt-ci-p-06", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: G & H, H @ I, I $ J, J # K. Conclusions: I. H # K  II. G & I`,
    options: [...IC_OPTS], correct: 1,
    explanation: "Decoded: G < H ≤ I = J > K. H and K meet through opposite signs (H ≤ J, K < J), so I cannot be decided. G < H ≤ I gives G < I (II true). Only II.",
  },
  {
    id: "rt-ci-p-07", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: L @ M, M & N, O # N, O @ P. Conclusions: I. L & P  II. P # M`,
    options: [...IC_OPTS], correct: 2,
    explanation: "Decoded: L ≤ M < N < O ≤ P. So L < P (I true) and P > M (II true). Both follow.",
  },
  {
    id: "rt-ci-p-08", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: Q % R, R # S, T $ S, T % U. Conclusions: I. Q # U  II. R $ U`,
    options: [...IC_OPTS], correct: 0,
    explanation: "Decoded: Q ≥ R > S = T ≥ U. So Q > U (I true). R > S ≥ U gives R > U, so R = U is false (II fails). Only I.",
  },
  {
    id: "rt-ci-p-09", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: V # W, X & W, X % Y, Z @ Y. Conclusions: I. Y $ Z  II. X & Z`,
    options: [...IC_OPTS], correct: 3,
    explanation: "Decoded: V > W > X ≥ Y ≥ Z. Y ≥ Z, so Y = Z is not certain (I fails). X ≥ Z, so X < Z is false (II fails). Neither follows.",
  },
  {
    id: "rt-ci-p-10", section: "reasoning", topic: "Coded inequalities", level: "proficient", difficulty: "hard",
    stem: `${CI2} Statements: A $ B, B % C, D # C. Conclusions: I. A # C  II. A $ C`,
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Either I or II follows"], correct: 3,
    explanation: "Decoded: A = B ≥ C < D, so A ≥ C. 'A > C' (I) and 'A = C' (II) are each uncertain alone, but one of them must hold. So either I or II follows.",
  },
  // ==================================================== Grouping & selection, BEGINNER
  {
    id: "rt-gs-b-01", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A committee of 3 is to be chosen from A, B, C, D and E. Conditions: A and B cannot both be chosen; C must be chosen; if D is chosen, E must also be chosen. Which committee is acceptable?",
    options: ["A, B, C", "A, C, D", "C, D, E", "A, D, E"], correct: 2,
    explanation: "A, B, C puts A and B together. A, C, D has D without E. A, D, E leaves out C. Only C, D, E meets every condition.",
  },
  {
    id: "rt-gs-b-02", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A team of 4 is to be chosen from three men (P, Q, R) and three women (S, T, U). Conditions: at least two women must be chosen; P and S must be chosen together or not at all; Q cannot be in a team with T. If Q is chosen, who are the other three members?",
    options: ["P, S and U", "R, S and U", "P, T and U", "R, S and T"], correct: 0,
    explanation: "With Q, T is out, so the two women must be S and U. S requires P. That makes Q, P, S, U: four members. R, S, U fails because S is without P.",
  },
  {
    id: "rt-gs-b-03", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "Three students are to be selected from A, B, C, D and E. Conditions: E must be selected; A and E cannot be selected together; B and D cannot both be selected. How many different selections are possible?",
    options: ["1", "2", "3", "4"], correct: 1,
    explanation: "E is in, so A is out. Two more must come from B, C, D without B and D together: {B, C} or {C, D}. So 2 selections.",
  },
  {
    id: "rt-gs-b-04", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "Three of five friends K, L, M, N and O will go for a quiz. Conditions: K goes only if L goes; M and N never go together; O must go. Which of these CANNOT be the group?",
    options: ["O, K, L", "O, M, L", "O, K, M", "O, N, L"], correct: 2,
    explanation: "O, K, M has K without L, which breaks the first condition. The other three groups satisfy all conditions.",
  },
  {
    id: "rt-gs-b-05", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A committee has 2 teachers from A, B, C, D and 2 clerks from P, Q, R. Conditions: A and P cannot be together; B must be selected; if C is selected, Q is not selected. If A is selected, which clerks are on the committee?",
    options: ["P and Q", "Q and R", "P and R", "Only R"], correct: 1,
    explanation: "A and B fill the two teacher places (so C is out and the Q restriction does not apply). A excludes P, so the two clerks must be Q and R.",
  },
  {
    id: "rt-gs-b-06", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A group of 3 is to be formed from A, B, C, D, E and F. Conditions: A and B must be selected together or not at all; C and D cannot both be selected. How many different groups are possible?",
    options: ["4", "5", "6", "8"], correct: 2,
    explanation: "With A and B: third member is any of C, D, E, F, giving 4. Without A and B: choose 3 of C, D, E, F (4 ways) minus those containing both C and D (CDE, CDF), giving 2. Total 6.",
  },
  {
    id: "rt-gs-b-07", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "Four people are to be chosen from P, Q, R, S, T and U. Conditions: P must be chosen; Q and R cannot both be chosen; if S is chosen, T must be chosen. If U is NOT chosen, which two must both be in the team?",
    options: ["Q and S", "S and T", "R and T", "Q and R"], correct: 1,
    explanation: "Besides P, three must come from Q, R, S, T without both Q and R. Possible sets: Q, S, T or R, S, T. Both contain S and T.",
  },
  {
    id: "rt-gs-b-08", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A panel of 4 is chosen from engineers A, B, C; doctors D, E, F; and lawyers G, H. The panel must have at least one of each profession. A and D cannot be together; F and G must be together; H is not selected. Which panel is valid?",
    options: ["G, F, A, D", "G, F, B, E", "G, D, B, C", "F, G, D, E"], correct: 1,
    explanation: "Option 1 has A with D. Option 3 has G without F. Option 4 has no engineer. G, F, B, E has a lawyer, two doctors and an engineer and breaks no condition.",
  },
  {
    id: "rt-gs-b-09", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "A team of 2 boys and 2 girls is to be chosen from boys A, B, C, D and girls E, F, G. A and E refuse to be in the same team. How many different teams are possible?",
    options: ["12", "15", "9", "18"], correct: 0,
    explanation: "Without restriction: C(4,2) × C(3,2) = 6 × 3 = 18. Teams with both A and E: A plus one of 3 boys (3 ways) × E plus one of 2 girls (2 ways) = 6. Valid teams = 18 − 6 = 12.",
  },
  {
    id: "rt-gs-b-10", section: "reasoning", topic: "Grouping & selection", level: "beginner", difficulty: "medium",
    stem: "Five players are to be picked from A, B, C, D, E, F and G. Conditions: A and B are picked together or not at all; C must be picked; D and E cannot both be picked; F is picked only if G is picked. Which team is valid?",
    options: ["A, B, C, D, E", "A, C, D, F, G", "A, B, C, E, F", "A, B, C, D, G"], correct: 3,
    explanation: "Option 1 has D and E together. Option 2 has A without B. Option 3 has F without G. A, B, C, D, G breaks no condition.",
  },
  // ==================================================== Grouping & selection, PROFICIENT
  {
    id: "rt-gs-p-01", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "A committee of 5 is formed from men A, B, C, D and women E, F, G, H. Conditions: at least two women; A and E cannot serve together; B serves only if F serves; C and G serve together or not at all; D cannot serve with H. Which committee is possible?",
    options: ["A, B, F, G, H", "B, C, D, F, G", "A, C, E, F, G", "B, D, E, F, H"], correct: 1,
    explanation: "Option 1 has G without C. Option 3 has A with E. Option 4 has D with H. B, C, D, F, G: B has F, C and G are together, D is without H, A is absent, two women. Valid.",
  },
  {
    id: "rt-gs-p-02", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "Five members are chosen from A, B, C, D, E, F and G. Conditions: if A is chosen, B is chosen; if C is chosen, D is not chosen; E and F are chosen together or not at all; G must be chosen. If D is chosen, which of the following must be true?",
    options: ["A is chosen", "C is chosen", "F is not chosen", "A is not chosen"], correct: 3,
    explanation: "D and G are in, C is out. Three more come from A, B, E, F. E and F go as a pair, and A needs B. The only valid trio is B, E, F (A with B would need a third single member, but E or F alone is not allowed). So A is not chosen.",
  },
  {
    id: "rt-gs-p-03", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "Four people are to be selected from A, B, C, D, E and F. Conditions: A and B cannot both be selected; if C is selected, D must be selected; E must be selected. How many selections are possible?",
    options: ["4", "5", "6", "7"], correct: 1,
    explanation: "E is in; choose 3 of A, B, C, D, F. Of the 10 trios, reject those with A and B (ABC, ABD, ABF) and those with C but not D (ACF, BCF). Remaining: ACD, ADF, BCD, BDF, CDF = 5.",
  },
  {
    id: "rt-gs-p-04", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "A school sends 4 students: from Class IX (P, Q, R) and Class X (S, T, U, V). Conditions: at least one from Class IX and at least two from Class X; P and S never go together; Q goes only if T goes; R and V go together or not at all. If P and Q both go, who are the other two?",
    options: ["T and U", "T and V", "R and V", "S and T"], correct: 0,
    explanation: "Q needs T, so P, Q, T are in and one place remains. S is barred by P. V alone is barred (needs R) and R alone is barred (needs V). So the fourth is U. Class X has T and U: two, as required.",
  },
  {
    id: "rt-gs-p-05", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "A team has 3 boys chosen from A, B, C, D, E and 2 girls chosen from F, G, H, I. Conditions: A and F cannot both be in the team; B and C must be chosen together or not at all. How many different teams are possible?",
    options: ["16", "20", "18", "24"], correct: 2,
    explanation: "Boy trios: with B and C (BCA, BCD, BCE) or without them (ADE): 4 in all. Two contain A (BCA, ADE); these can take any girl pair except those with F: C(3,2) = 3 each, so 6. The other two can take any of C(4,2) = 6 pairs, so 12. Total 18.",
  },
  {
    id: "rt-gs-p-06", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "Three people are selected from J, K, L, M, N and O. Conditions: J and K cannot both be selected; L is selected only if M is selected; N and O cannot both be selected. If L is selected, which of these CANNOT be the selection?",
    options: ["L, M, J", "L, M, N", "L, M, O", "L, J, K"], correct: 3,
    explanation: "L, J, K breaks two rules: J and K are together, and L is there without M. The other three contain L with M and one permitted third member.",
  },
  {
    id: "rt-gs-p-07", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "Three members are selected from A, B, C, D, E and F. Conditions: exactly one of A and B must be selected; C and D cannot both be selected; if E is selected, F must be selected. How many selections are possible?",
    options: ["6", "8", "4", "9"], correct: 0,
    explanation: "With A (not B), two more from C, D, E, F: CD is barred, CE and DE have E without F, leaving CF, DF, EF = 3. The same 3 with B. Total 6.",
  },
  {
    id: "rt-gs-p-08", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "Four members are chosen from P, Q, R, S, T and U. Conditions: if P is chosen, Q is chosen; R and S cannot both be chosen; at least one of T and U must be chosen; if Q is chosen, T is not chosen. If P is chosen, which two must also be chosen?",
    options: ["Q and T", "Q and U", "R and S", "T and U"], correct: 1,
    explanation: "P brings Q; Q rules out T; then U is needed to have at least one of T and U. The fourth is R or S (not both), so only Q and U are certain.",
  },
  {
    id: "rt-gs-p-09", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "A panel of 4 is chosen from teachers A, B, C; principals D, E; and officers F, G, H, with at least one from each group. Conditions: A and D cannot both be chosen; B is chosen only if G is chosen; E and H are chosen together or not at all; C cannot be chosen with F. Which panel is valid?",
    options: ["C, E, F, H", "B, E, G, C", "A, B, D, F", "A, E, H, F"], correct: 3,
    explanation: "Option 1 has C with F. Option 2 has E without H. Option 3 has A with D (and B without G). A, E, H, F has one teacher, one principal and two officers and breaks no rule.",
  },
  {
    id: "rt-gs-p-10", section: "reasoning", topic: "Grouping & selection", level: "proficient", difficulty: "hard",
    stem: "A group of 4 is formed from men P, Q, R and women X, Y, Z. The group must have at least two women, and P and X cannot both be in it. How many different groups are possible?",
    options: ["6", "8", "7", "9"], correct: 2,
    explanation: "Groups with at least two women: 2 women and 2 men = 3 × 3 = 9; 3 women and 1 man = 3; total 12. Those with P and X: (X + 1 of Y, Z) × (P + 1 of Q, R) = 2 × 2 = 4, plus X, Y, Z, P = 1. Valid = 12 − 5 = 7.",
  },
  // ==================================================== Symbols & notations, BEGINNER
  {
    id: "rt-sn-b-01", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If '+' means '×', '−' means '+', '×' means '÷' and '÷' means '−', find the value of 8 + 3 − 12 × 4 ÷ 5.",
    options: ["22", "20", "18", "24"], correct: 0,
    explanation: "Rewrite: 8 × 3 + 12 ÷ 4 − 5 = 24 + 3 − 5 = 22.",
  },
  {
    id: "rt-sn-b-02", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If 'P' means '+', 'Q' means '−', 'R' means '×' and 'S' means '÷', find the value of 18 S 3 R 4 P 6 Q 2.",
    options: ["26", "28", "30", "24"], correct: 1,
    explanation: "Rewrite: 18 ÷ 3 × 4 + 6 − 2 = 6 × 4 + 6 − 2 = 24 + 6 − 2 = 28.",
  },
  {
    id: "rt-sn-b-03", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If '×' means '+', '+' means '÷', '−' means '×' and '÷' means '−', find the value of 36 + 4 × 5 − 3 ÷ 7.",
    options: ["15", "19", "17", "13"], correct: 2,
    explanation: "Rewrite: 36 ÷ 4 + 5 × 3 − 7 = 9 + 15 − 7 = 17.",
  },
  {
    id: "rt-sn-b-04", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If '+' means '−', '−' means '+', '×' means '÷' and '÷' means '×', find the value of 40 × 8 − 6 ÷ 3 + 9.",
    options: ["12", "16", "10", "14"], correct: 3,
    explanation: "Rewrite: 40 ÷ 8 + 6 × 3 − 9 = 5 + 18 − 9 = 14.",
  },
  {
    id: "rt-sn-b-05", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "Which two signs must be interchanged to make the equation correct? 12 ÷ 4 + 3 × 2 = 11",
    options: ["÷ and +", "+ and ×", "÷ and ×", "÷ and −"], correct: 1,
    explanation: "Swapping + and × gives 12 ÷ 4 × 3 + 2 = 9 + 2 = 11. Correct. The others give 12 + 4 ÷ 3 × 2 (not whole), 12 × 4 + 3 ÷ 2 = 49.5 and 12 − 4 + 3 × 2 = 14.",
  },
  {
    id: "rt-sn-b-06", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If 'A' means '÷', 'B' means '×', 'C' means '+' and 'D' means '−', find the value of 45 A 5 B 3 C 7 D 4.",
    options: ["30", "28", "32", "26"], correct: 0,
    explanation: "Rewrite: 45 ÷ 5 × 3 + 7 − 4 = 9 × 3 + 7 − 4 = 27 + 3 = 30.",
  },
  {
    id: "rt-sn-b-07", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If '×' means '−', '−' means '+', '+' means '÷' and '÷' means '×', find the value of 15 − 3 ÷ 4 + 2 × 5.",
    options: ["14", "18", "16", "20"], correct: 2,
    explanation: "Rewrite: 15 + 3 × 4 ÷ 2 − 5 = 15 + 6 − 5 = 16.",
  },
  {
    id: "rt-sn-b-08", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If a ★ b = 2a + 3b, find the value of (2 ★ 3) ★ 1.",
    options: ["27", "29", "31", "25"], correct: 1,
    explanation: "2 ★ 3 = 4 + 9 = 13. Then 13 ★ 1 = 26 + 3 = 29.",
  },
  {
    id: "rt-sn-b-09", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If '>' means '+', '<' means '−', '+' means '÷' and '−' means '×', find the value of 24 + 6 > 5 − 3 < 7.",
    options: ["10", "14", "16", "12"], correct: 3,
    explanation: "Rewrite: 24 ÷ 6 + 5 × 3 − 7 = 4 + 15 − 7 = 12.",
  },
  {
    id: "rt-sn-b-10", section: "reasoning", topic: "Symbols & notations", level: "beginner", difficulty: "medium",
    stem: "If 'P' denotes '×', 'Q' denotes '÷', 'R' denotes '+' and 'T' denotes '−', find the value of 7 P 6 Q 3 T 4 R 10.",
    options: ["18", "22", "16", "20"], correct: 3,
    explanation: "Rewrite: 7 × 6 ÷ 3 − 4 + 10 = 42 ÷ 3 − 4 + 10 = 14 − 4 + 10 = 20.",
  },
  // ==================================================== Symbols & notations, PROFICIENT
  {
    id: "rt-sn-p-01", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If '+' means '÷', '÷' means '−', '−' means '×' and '×' means '+', find the value of 48 + 6 × 9 − 4 ÷ 12.",
    options: ["30", "32", "34", "28"], correct: 1,
    explanation: "Rewrite: 48 ÷ 6 + 9 × 4 − 12 = 8 + 36 − 12 = 32.",
  },
  {
    id: "rt-sn-p-02", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If the signs '+' and '−' are interchanged and the numbers 4 and 8 are interchanged, which of the following equations becomes correct?",
    options: ["4 + 8 − 6 = 12", "8 − 4 + 2 = 2", "4 − 8 + 2 = 10", "4 − 8 + 10 = 16"], correct: 2,
    explanation: "Apply both changes. Option 1: 8 − 4 + 6 = 10, not 12. Option 2: 4 + 8 − 2 = 10, not 2. Option 3: 8 + 4 − 2 = 10. Correct. Option 4: 8 + 4 − 10 = 2, not 16.",
  },
  {
    id: "rt-sn-p-03", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If a @ b = (a + b) ÷ 2 and a $ b = a × b − b, find the value of (6 @ 10) $ 3.",
    options: ["21", "24", "18", "27"], correct: 0,
    explanation: "6 @ 10 = 16 ÷ 2 = 8. Then 8 $ 3 = 8 × 3 − 3 = 21.",
  },
  {
    id: "rt-sn-p-04", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If 'L' means '÷', 'M' means '×', 'N' means '+' and 'O' means '−', find the value of 72 L 8 M 5 O 9 N 3 L 3.",
    options: ["35", "39", "37", "33"], correct: 2,
    explanation: "Rewrite: 72 ÷ 8 × 5 − 9 + 3 ÷ 3 = 9 × 5 − 9 + 1 = 45 − 9 + 1 = 37.",
  },
  {
    id: "rt-sn-p-05", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "Which two signs must be interchanged to make the equation correct? 16 ÷ 4 − 3 × 2 + 5 = 15",
    options: ["+ and −", "× and +", "÷ and ×", "− and ×"], correct: 3,
    explanation: "Swapping − and × gives 16 ÷ 4 × 3 − 2 + 5 = 12 − 2 + 5 = 15. Correct. The others give 16 ÷ 4 + 3 × 2 − 5 = 5; 16 ÷ 4 − 3 + 2 × 5 = 11; 16 × 4 − 3 ÷ 2 + 5 = 67.5.",
  },
  {
    id: "rt-sn-p-06", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If a ∆ b = a + b + ab, find x when 3 ∆ x = 23.",
    options: ["4", "5", "6", "7"], correct: 1,
    explanation: "3 + x + 3x = 23, so 4x = 20 and x = 5. Check: 3 + 5 + 15 = 23.",
  },
  {
    id: "rt-sn-p-07", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If '+' means '×', '×' means '−', '−' means '÷' and '÷' means '+', find the value of (15 − 3) + 4 × 6 ÷ 2.",
    options: ["16", "14", "18", "12"], correct: 0,
    explanation: "Rewrite: (15 ÷ 3) × 4 − 6 + 2 = 5 × 4 − 6 + 2 = 20 − 6 + 2 = 16.",
  },
  {
    id: "rt-sn-p-08", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If '÷' means '+', '−' means '÷', '×' means '−' and '+' means '×', find the value of 18 ÷ 12 − 4 × 5 + 2.",
    options: ["9", "13", "11", "15"], correct: 2,
    explanation: "Rewrite: 18 + 12 ÷ 4 − 5 × 2 = 18 + 3 − 10 = 11.",
  },
  {
    id: "rt-sn-p-09", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "Define a ⊕ b = a² − b when a > b, and a ⊕ b = a + b² when a ≤ b. Find the value of (5 ⊕ 3) ⊕ 4.",
    options: ["470", "484", "488", "480"], correct: 3,
    explanation: "5 > 3, so 5 ⊕ 3 = 25 − 3 = 22. Then 22 > 4, so 22 ⊕ 4 = 484 − 4 = 480.",
  },
  {
    id: "rt-sn-p-10", section: "reasoning", topic: "Symbols & notations", level: "proficient", difficulty: "hard",
    stem: "If 5 ◊ 3 = 34, 4 ◊ 2 = 20 and 3 ◊ 3 = 18, then 6 ◊ 1 = ____",
    options: ["37", "35", "36", "49"], correct: 0,
    explanation: "The rule is a ◊ b = a² + b²: 25 + 9 = 34, 16 + 4 = 20, 9 + 9 = 18. So 6 ◊ 1 = 36 + 1 = 37.",
  },
  // ==================================================== Venn diagrams, BEGINNER
  {
    id: "rt-vd-b-01", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between Teachers, Women and Doctors?",
    options: ["Three circles, each overlapping the other two", "One circle inside another, the third separate", "Three circles one inside another", "Two overlapping circles, the third separate"], correct: 0,
    explanation: "Some teachers are women, some doctors are women, and some teachers are doctors (and some are all three). No group contains another, so all three circles overlap one another.",
  },
  {
    id: "rt-vd-b-02", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between India, Uttar Pradesh and Lucknow?",
    options: ["Three separate circles", "Two separate circles inside a third", "Three circles one inside another", "Three circles, each overlapping the other two"], correct: 2,
    explanation: "Lucknow is wholly within Uttar Pradesh, which is wholly within India. So the circles are nested: Lucknow inside Uttar Pradesh inside India.",
  },
  {
    id: "rt-vd-b-03", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between Vegetables, Potatoes and Mangoes?",
    options: ["Three circles one inside another", "One circle inside another, the third separate", "Two separate circles inside a third", "Three separate circles"], correct: 1,
    explanation: "Every potato is a vegetable, so Potatoes lies inside Vegetables. A mango is a fruit, neither a vegetable nor a potato, so its circle is separate.",
  },
  {
    id: "rt-vd-b-04", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between Animals, Cows and Dogs?",
    options: ["Three circles one inside another", "Three separate circles", "Three circles, each overlapping the other two", "Two separate circles inside a third"], correct: 3,
    explanation: "Cows and dogs are both animals, but no cow is a dog. So two non-touching circles (Cows, Dogs) sit inside the larger circle (Animals).",
  },
  {
    id: "rt-vd-b-05", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between Doctors, Men and Women?",
    options: ["Two separate circles, both partly overlapped by a third circle", "Three separate circles", "Three circles one inside another", "One circle inside another, the third separate"], correct: 0,
    explanation: "Men and Women do not overlap. Some doctors are men and some are women, so the Doctors circle crosses both separate circles.",
  },
  {
    id: "rt-vd-b-06", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "In a group, 30 people like tea, 25 like coffee and 10 like both. How many people like at least one of the two drinks?",
    options: ["55", "45", "35", "40"], correct: 1,
    explanation: "n(Tea ∪ Coffee) = 30 + 25 − 10 = 45. The 10 who like both are counted twice in 30 + 25, so they are subtracted once.",
  },
  {
    id: "rt-vd-b-07", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Three circles are drawn so that every pair overlaps and there is also a region common to all three. How many separate regions lie inside at least one circle?",
    options: ["6", "7", "8", "9"], correct: 1,
    explanation: "Regions: 3 'only one circle' parts, 3 'exactly two circles' parts and 1 'all three' part = 7. (With the outside area it would be 8.)",
  },
  {
    id: "rt-vd-b-08", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between the Earth, the Moon and the Sun?",
    options: ["One circle inside another, the third separate", "Three circles one inside another", "Three separate circles", "Two overlapping circles, the third separate"], correct: 2,
    explanation: "These are three distinct objects; none is a part or a type of another. So three separate circles.",
  },
  {
    id: "rt-vd-b-09", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "In a class of 50 students, 28 study Hindi, 30 study English and 5 study neither. How many study both languages?",
    options: ["8", "10", "13", "15"], correct: 2,
    explanation: "Students studying at least one = 50 − 5 = 45. Both = 28 + 30 − 45 = 13.",
  },
  {
    id: "rt-vd-b-10", section: "reasoning", topic: "Venn diagrams", level: "beginner", difficulty: "medium",
    stem: "Which diagram best represents the relationship between Furniture, Chairs and Wooden objects?",
    options: ["Three separate circles", "Three circles one inside another", "Two separate circles inside a third", "One circle inside another, with a third circle overlapping both"], correct: 3,
    explanation: "All chairs are furniture (Chairs inside Furniture). Some chairs and some other furniture are wooden, and some wooden objects are not furniture, so Wooden objects overlaps both.",
  },
  // ==================================================== Venn diagrams, PROFICIENT
  {
    id: "rt-vd-p-01", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Of 100 people surveyed, 50 read newspaper A, 40 read B and 30 read C; 15 read A and B, 10 read B and C, 12 read A and C, and 5 read all three. How many read none of the three?",
    options: ["17", "8", "12", "15"], correct: 2,
    explanation: "n(A ∪ B ∪ C) = 50 + 40 + 30 − 15 − 10 − 12 + 5 = 88. None = 100 − 88 = 12.",
  },
  {
    id: "rt-vd-p-02", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Of 100 people, 50 read A, 40 read B and 30 read C; 15 read A and B, 10 read B and C, 12 read A and C, and 5 read all three. How many read exactly one newspaper?",
    options: ["61", "56", "66", "71"], correct: 0,
    explanation: "Only A = 50 − 15 − 12 + 5 = 28. Only B = 40 − 15 − 10 + 5 = 20. Only C = 30 − 10 − 12 + 5 = 13. Exactly one = 28 + 20 + 13 = 61.",
  },
  {
    id: "rt-vd-p-03", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "In a group of 60, 35 play cricket, 25 play football and 20 play hockey; 10 play cricket and football, 8 play football and hockey, 9 play cricket and hockey, and 4 play all three. How many play exactly two games?",
    options: ["27", "15", "23", "12"], correct: 1,
    explanation: "Exactly two = (10 − 4) + (8 − 4) + (9 − 4) = 6 + 4 + 5 = 15.",
  },
  {
    id: "rt-vd-p-04", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Which diagram best represents the relationship between Mammals, Whales and Aquatic animals?",
    options: ["Three circles one inside another", "Two separate circles inside a third", "Two overlapping circles, with the third circle lying entirely within their common part", "Three separate circles"], correct: 2,
    explanation: "Mammals and Aquatic animals overlap (some mammals live in water, some aquatic animals are fish). Every whale is both a mammal and aquatic, so Whales sits wholly inside the overlap.",
  },
  {
    id: "rt-vd-p-05", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Which diagram best represents the relationship between Integers, Even numbers and Prime numbers?",
    options: ["Two separate circles inside a third", "Three circles one inside another", "One circle inside another, the third separate", "Two overlapping circles, both inside a third circle"], correct: 3,
    explanation: "Even numbers and primes are both sets of integers. They overlap in exactly one number, 2, so they are two overlapping circles inside the Integers circle.",
  },
  {
    id: "rt-vd-p-06", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "In a class of 40 students, 25 like Mathematics and 22 like Science. What is the MINIMUM possible number of students who like both?",
    options: ["3", "7", "15", "22"], correct: 1,
    explanation: "Both = 25 + 22 − (number liking at least one). This is smallest when the union is as large as possible, i.e. 40. Minimum both = 47 − 40 = 7.",
  },
  {
    id: "rt-vd-p-07", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "In a figure, a circle represents Teachers, a triangle represents Graduates and a square represents Urban people; all three overlap one another. The region inside the triangle and the square but outside the circle represents ____",
    options: ["Urban graduates who are teachers", "Urban teachers who are not graduates", "Graduates who are neither urban nor teachers", "Urban graduates who are not teachers"], correct: 3,
    explanation: "Inside the triangle = graduates; inside the square = urban; outside the circle = not teachers. So: urban graduates who are not teachers.",
  },
  {
    id: "rt-vd-p-08", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "In a group of 50, 30 drink tea and 25 drink coffee. What is the MAXIMUM possible number of people who drink neither?",
    options: ["15", "20", "25", "5"], correct: 1,
    explanation: "Neither is greatest when the union is smallest. The union is at least 30 (the larger set), achieved if all 25 coffee drinkers also drink tea. Maximum neither = 50 − 30 = 20.",
  },
  {
    id: "rt-vd-p-09", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Sets A, B and C have 40, 35 and 30 members. In all, 70 people belong to at least one set, and 15 belong to exactly two sets. How many belong to all three?",
    options: ["5", "10", "15", "20"], correct: 1,
    explanation: "Let x₁, x₂, x₃ be the numbers in exactly one, two and three sets. x₁ + x₂ + x₃ = 70 and x₁ + 2x₂ + 3x₃ = 40 + 35 + 30 = 105. Subtracting: x₂ + 2x₃ = 35, so 15 + 2x₃ = 35 and x₃ = 10.",
  },
  {
    id: "rt-vd-p-10", section: "reasoning", topic: "Venn diagrams", level: "proficient", difficulty: "hard",
    stem: "Which diagram best represents the relationship between Conductors of electricity, Metals and Iron?",
    options: ["Three circles one inside another", "Two separate circles inside a third", "One circle inside another, the third separate", "Three circles, each overlapping the other two"], correct: 0,
    explanation: "Iron is a metal, and all metals conduct electricity, while some conductors (such as graphite) are not metals. So Iron lies inside Metals, which lies inside Conductors.",
  },
  // ==================================================== Cubes & dice, BEGINNER
  {
    id: "rt-cd-b-01", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 27 equal smaller cubes. How many small cubes have exactly two faces painted?",
    options: ["8", "12", "6", "24"], correct: 1,
    explanation: "Here n = 3. Two-face cubes lie on the edges, excluding corners: 12 × (n − 2) = 12 × 1 = 12.",
  },
  {
    id: "rt-cd-b-02", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 27 equal smaller cubes. How many small cubes have no face painted?",
    options: ["8", "6", "1", "0"], correct: 2,
    explanation: "Unpainted cubes form the inner core: (n − 2)³ = 1³ = 1, the centre cube.",
  },
  {
    id: "rt-cd-b-03", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 64 equal smaller cubes. How many small cubes have exactly one face painted?",
    options: ["24", "16", "32", "8"], correct: 0,
    explanation: "Here n = 4. One-face cubes are the middle parts of each face: 6 × (n − 2)² = 6 × 4 = 24.",
  },
  {
    id: "rt-cd-b-04", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 64 equal smaller cubes. How many small cubes have three faces painted?",
    options: ["4", "6", "12", "8"], correct: 3,
    explanation: "Only corner cubes have three painted faces, and a cube always has 8 corners, whatever n is.",
  },
  {
    id: "rt-cd-b-05", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 125 equal smaller cubes. How many small cubes have no face painted?",
    options: ["36", "27", "64", "48"], correct: 1,
    explanation: "Here n = 5. Unpainted cubes = (n − 2)³ = 3³ = 27.",
  },
  {
    id: "rt-cd-b-06", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "Two views of the same die (faces numbered 1 to 6) are seen. In the first view the visible faces are 1, 2 and 3. In the second view the visible faces are 1, 4 and 5. Which number is opposite 1?",
    options: ["6", "4", "3", "2"], correct: 0,
    explanation: "In each view the three visible faces meet at a corner, so all are adjacent to 1. Thus 2, 3, 4 and 5 are all adjacent to 1. The only face left, 6, must be opposite 1.",
  },
  {
    id: "rt-cd-b-07", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "On a standard die, the numbers on opposite faces add up to 7. If 3 is on the top face, which number is on the bottom face?",
    options: ["5", "2", "4", "6"], correct: 2,
    explanation: "Top and bottom are opposite faces, so bottom = 7 − 3 = 4.",
  },
  {
    id: "rt-cd-b-08", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube painted on all faces is cut into 8 equal smaller cubes. How many small cubes have exactly three faces painted?",
    options: ["4", "6", "8", "0"], correct: 2,
    explanation: "With n = 2 every small cube is a corner cube, so all 8 have three painted faces.",
  },
  {
    id: "rt-cd-b-09", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "Two views of the same die (faces 1 to 6) are seen. In the first view the visible faces are 2, 3 and 4. In the second view the visible faces are 2, 5 and 6. Which number is opposite 2?",
    options: ["5", "6", "1", "3"], correct: 2,
    explanation: "Faces 3, 4, 5 and 6 are all seen next to 2, so they are adjacent to 2. The remaining face, 1, must be opposite 2.",
  },
  {
    id: "rt-cd-b-10", section: "reasoning", topic: "Cubes & dice", level: "beginner", difficulty: "medium",
    stem: "A cube of side 4 cm is painted on all faces and cut into cubes of side 1 cm. How many small cubes have at least one face painted?",
    options: ["48", "52", "60", "56"], correct: 3,
    explanation: "Total small cubes = 4³ = 64. Unpainted (inner) cubes = (4 − 2)³ = 8. At least one face painted = 64 − 8 = 56.",
  },
  // ==================================================== Cubes & dice, PROFICIENT
  {
    id: "rt-cd-p-01", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cuboid measuring 4 cm × 3 cm × 2 cm is painted on all faces and cut into 1 cm cubes. How many small cubes have exactly one face painted?",
    options: ["2", "4", "6", "8"], correct: 1,
    explanation: "With a height of 2, every cube is in the top or bottom layer. In each 4 × 3 layer, only the inner (4 − 2) × (3 − 2) = 2 cubes touch just one painted face (top or bottom). Two layers give 4.",
  },
  {
    id: "rt-cd-p-02", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cube is painted red on two opposite faces, green on two other opposite faces and blue on the remaining two. It is cut into 64 equal cubes. How many small cubes have exactly two painted faces, one red and one green?",
    options: ["16", "4", "8", "12"], correct: 2,
    explanation: "Red and green faces meet along 4 edges. Each edge has 4 small cubes, of which the 2 end ones are corners (they also carry blue). So 2 per edge × 4 edges = 8.",
  },
  {
    id: "rt-cd-p-03", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A painted cube is cut into equal smaller cubes, and 125 of them have no face painted. How many small cubes have exactly one face painted?",
    options: ["125", "150", "100", "180"], correct: 1,
    explanation: "(n − 2)³ = 125 gives n = 7. One-face cubes = 6 × (n − 2)² = 6 × 25 = 150.",
  },
  {
    id: "rt-cd-p-04", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "Three views of the same die (faces 1 to 6) show these visible faces: View 1: 1, 2, 3. View 2: 1, 5, 6. View 3: 2, 4, 5. Which number is opposite 3?",
    options: ["4", "6", "5", "2"], correct: 2,
    explanation: "From Views 1 and 2, faces 2, 3, 5, 6 touch 1, so 4 is opposite 1. From Views 1 and 3, faces 1, 3, 4, 5 touch 2, so 6 is opposite 2. The remaining pair is 3 and 5.",
  },
  {
    id: "rt-cd-p-05", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A standard die (opposite faces add to 7) rests with 3 on top, 1 facing you and 2 on the right. It is tipped over once to the right, so that it now rests on the face that was on the right. Which number is now on top?",
    options: ["2", "6", "4", "5"], correct: 3,
    explanation: "Tipping to the right sends the top face to the right, the right face to the bottom and the left face to the top. The left face is opposite the right face 2, so it is 7 − 2 = 5.",
  },
  {
    id: "rt-cd-p-06", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cube painted on all faces is cut into 216 equal smaller cubes. How many small cubes have at most two faces painted?",
    options: ["200", "208", "152", "96"], correct: 1,
    explanation: "Only corner cubes have three painted faces, and there are 8. So at most two faces = 216 − 8 = 208.",
  },
  {
    id: "rt-cd-p-07", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cube is to be cut into 27 identical smaller cubes by straight plane cuts. What is the minimum number of cuts needed, even if pieces may be rearranged between cuts?",
    options: ["6", "9", "8", "27"], correct: 0,
    explanation: "Two cuts in each of the three directions (2 × 3 = 6) are enough. Fewer is impossible: the centre cube has six faces that are all newly cut, and one plane cut can create at most one face of any single piece.",
  },
  {
    id: "rt-cd-p-08", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A wooden cube is painted on only two opposite faces and then cut into 27 equal cubes. How many small cubes have no paint at all?",
    options: ["18", "3", "9", "12"], correct: 2,
    explanation: "Let the top and bottom be painted. All 9 cubes of the top layer and all 9 of the bottom layer touch paint. The 9 cubes of the middle layer have no paint.",
  },
  {
    id: "rt-cd-p-09", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cube is painted on only two ADJACENT faces and then cut into 64 equal cubes. How many small cubes have no paint at all?",
    options: ["27", "32", "48", "36"], correct: 3,
    explanation: "Say the front and left faces are painted. A small cube avoids paint if it is not in the front layer (3 of 4 choices) and not in the left layer (3 of 4 choices), at any height (4 choices): 3 × 3 × 4 = 36.",
  },
  {
    id: "rt-cd-p-10", section: "reasoning", topic: "Cubes & dice", level: "proficient", difficulty: "hard",
    stem: "A cube of side 4 cm is painted on all faces and cut into 1 cm cubes. All small cubes with exactly one painted face are removed. How many small cubes remain?",
    options: ["48", "32", "40", "36"], correct: 2,
    explanation: "Total = 64. One-face cubes = 6 × (4 − 2)² = 24. Remaining = 64 − 24 = 40.",
  },
  // ==================================================== Statement & inference, BEGINNER
  {
    id: "rt-si-b-01", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: All the teachers of the school attended the training programme. Ravi is a teacher of the school. Conclusions: I. Ravi attended the training programme. II. Some of those who attended the training programme are teachers of the school.",
    options: [...IC_OPTS], correct: 2,
    explanation: "Ravi is one of 'all the teachers', so he attended (I). Since Ravi, a teacher of the school, attended, some attendees are teachers of the school (II). Both follow.",
  },
  {
    id: "rt-si-b-02", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: No student who failed the test was allowed to go on the trip. Meena was allowed to go on the trip. Conclusions: I. Meena did not fail the test. II. Meena passed the test with distinction.",
    options: [...IC_OPTS], correct: 0,
    explanation: "If Meena had failed, she would not have been allowed; she was allowed, so she did not fail (I). Nothing tells us her grade, so II does not follow.",
  },
  {
    id: "rt-si-b-03", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statements: Some books are novels. All novels are interesting. Conclusions: I. All interesting things are novels. II. Some books are interesting.",
    options: [...IC_OPTS], correct: 1,
    explanation: "The books that are novels are interesting, so some books are interesting (II). 'All novels are interesting' does not reverse into 'all interesting things are novels', so I fails.",
  },
  {
    id: "rt-si-b-04", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: Only candidates who hold a B.Ed. degree can apply for the post. Anil has applied for the post. Conclusions: I. All B.Ed. degree holders have applied for the post. II. Anil holds a B.Ed. degree.",
    options: [...IC_OPTS], correct: 1,
    explanation: "'Only B.Ed. holders can apply' means every applicant holds a B.Ed., so Anil does (II). It does not say every B.Ed. holder applied, so I fails.",
  },
  {
    id: "rt-si-b-05", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statements: All cars in the parking lot are white. Some white things are expensive. Conclusions: I. Some cars in the parking lot are expensive. II. All white things are cars.",
    options: [...IC_OPTS], correct: 3,
    explanation: "The expensive white things may or may not be the cars in the lot, so I is not certain. 'All cars are white' does not mean all white things are cars, so II fails. Neither follows.",
  },
  {
    id: "rt-si-b-06", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: If it rains, the match will be cancelled. The match was not cancelled. Conclusions: I. The match was played on time. II. It did not rain.",
    options: [...IC_OPTS], correct: 1,
    explanation: "Rain would have led to cancellation; there was no cancellation, so it did not rain (II). 'Not cancelled' does not guarantee 'on time'; it could have been delayed, so I fails.",
  },
  {
    id: "rt-si-b-07", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: The state government has announced free textbooks for all students of government primary schools. Inferences: I. Students of government primary schools will receive textbooks without paying for them. II. Students of private schools will also receive free textbooks.",
    options: [...IC_OPTS], correct: 0,
    explanation: "I restates the announcement. The scheme covers only government primary schools, so nothing supports II.",
  },
  {
    id: "rt-si-b-08", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: Priya is taller than Rahul. Rahul is taller than Sohan. Conclusions: I. Priya is taller than Sohan. II. Sohan is the shortest of the three.",
    options: [...IC_OPTS], correct: 2,
    explanation: "Priya > Rahul > Sohan in height. So Priya is taller than Sohan (I) and Sohan is the shortest (II). Both follow.",
  },
  {
    id: "rt-si-b-09", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statements: All squares are rectangles. No rectangle is a circle. Conclusions: I. No square is a circle. II. Some rectangles are squares.",
    options: [...IC_OPTS], correct: 2,
    explanation: "Squares lie inside rectangles, which share nothing with circles, so no square is a circle (I). 'All squares are rectangles' converts to 'some rectangles are squares' (II). Both follow.",
  },
  {
    id: "rt-si-b-10", section: "reasoning", topic: "Statement & inference", level: "beginner", difficulty: "medium",
    stem: "Statement: Every student of Class 8 who scored above 80 per cent was given a prize. Kiran, a student of Class 8, was not given a prize. Conclusions: I. Kiran scored 80 per cent or less. II. Kiran failed the examination.",
    options: [...IC_OPTS], correct: 0,
    explanation: "Had Kiran scored above 80 per cent, she would have got a prize; she did not, so she scored 80 per cent or less (I). That does not mean she failed, so II does not follow.",
  },
  // ==================================================== Statement & inference, PROFICIENT
  {
    id: "rt-si-p-01", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: Some teachers are poets. Some poets are painters. Conclusions: I. Some teachers are painters. II. All poets are teachers.",
    options: [...IC_OPTS], correct: 3,
    explanation: "Two 'some' statements give no definite conclusion: the poets who are teachers may be different from the poets who are painters, so I is not certain. II reverses 'some teachers are poets' into 'all', which is invalid. Neither follows.",
  },
  {
    id: "rt-si-p-02", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: All engineers are graduates. Some graduates are unemployed. Conclusions: I. Some engineers are unemployed. II. Some unemployed persons are graduates.",
    options: [...IC_OPTS], correct: 1,
    explanation: "The unemployed graduates may all be non-engineers, so I is not certain. 'Some graduates are unemployed' converts directly to 'some unemployed persons are graduates' (II). Only II.",
  },
  {
    id: "rt-si-p-03", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: No A is B. Some B are C. Conclusions: I. Some C are not A. II. Some A are not C.",
    options: [...IC_OPTS], correct: 0,
    explanation: "The C's that are B cannot be A (no A is B), so some C are not A (I). A could lie entirely within C (outside B), so II is not certain. Only I.",
  },
  {
    id: "rt-si-p-04", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statement: If the monsoon is good, farm output rises. If farm output rises, food prices fall. This year food prices did not fall. Conclusions: I. Farm output did not rise this year. II. The monsoon was not good this year.",
    options: [...IC_OPTS], correct: 2,
    explanation: "Prices did not fall, so output did not rise (otherwise prices would have fallen): I. Output did not rise, so the monsoon was not good (otherwise output would have risen): II. Both follow.",
  },
  {
    id: "rt-si-p-05", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statement: The meeting will be chaired by either the principal or the vice-principal, but not both. The vice-principal is on leave and will not attend the meeting. Conclusions: I. The principal will chair the meeting. II. The meeting will be postponed.",
    options: [...IC_OPTS], correct: 0,
    explanation: "One of the two will chair; the vice-principal cannot chair a meeting he does not attend, so the principal will (I). Nothing indicates postponement, so II does not follow.",
  },
  {
    id: "rt-si-p-06", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: All who passed the interview were selected. Some who were selected are women. Conclusions: I. Some women passed the interview. II. Some who were selected passed the interview.",
    options: [...IC_OPTS], correct: 1,
    explanation: "The selected women may have been selected without passing the interview, so I is not certain. Those who passed are all selected, so some selected persons passed (II). Only II.",
  },
  {
    id: "rt-si-p-07", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statement (an advertisement): \"Use biodegradable bags and help reduce plastic pollution.\" Assumptions: I. Biodegradable bags cause less plastic pollution than ordinary plastic bags. II. People read advertisements and may act on them. Which assumption(s) is/are implicit?",
    options: ["Only I is implicit", "Only II is implicit", "Both I and II are implicit", "Neither I nor II is implicit"], correct: 2,
    explanation: "The advice makes sense only if such bags reduce plastic pollution (I). Any advertisement assumes people will read it and may respond (II). Both are implicit.",
  },
  {
    id: "rt-si-p-08", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: Only graduates can become officers. Some clerks are graduates. Conclusions: I. Some clerks can become officers. II. All officers are graduates.",
    options: [...IC_OPTS], correct: 1,
    explanation: "'Only graduates can become officers' means every officer is a graduate (II). Being a graduate is necessary, not sufficient, so graduate clerks are not shown to be able to become officers. Only II.",
  },
  {
    id: "rt-si-p-09", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statements: No student who attended all the classes failed. Some students who failed were given extra coaching. Conclusions: I. Some students who were given extra coaching did not attend all the classes. II. All students who attended all the classes were given extra coaching.",
    options: [...IC_OPTS], correct: 0,
    explanation: "The coached students who failed cannot have attended all classes, so I follows. Nothing links full attendance to coaching, so II does not follow. Only I.",
  },
  {
    id: "rt-si-p-10", section: "reasoning", topic: "Statement & inference", level: "proficient", difficulty: "hard",
    stem: "Statement: Every member of the committee is either a teacher or a parent. No teacher on the committee is a parent. Sunil is a member of the committee and is not a parent. Conclusions: I. Sunil is a teacher. II. Some members of the committee are not parents.",
    options: [...IC_OPTS], correct: 2,
    explanation: "Sunil must be a teacher or a parent; he is not a parent, so he is a teacher (I). Sunil himself is a member who is not a parent, so II follows. Both follow.",
  },
];

export const reasoningTypesHi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  // ---------------------------------------------------- अभिकथन और कारण
  "rt-ar-b-01": {
    stem: "अभिकथन (A): तटीय क्षेत्रों में लोहे की वस्तुओं में शुष्क भीतरी क्षेत्रों की तुलना में जंग जल्दी लगती है। कारण (R): घुले हुए लवणों वाली नम हवा लोहे के ऑक्सीकरण को तेज़ कर देती है।",
    options: [...AR_OPTS_HI],
    explanation: "जंग लगने के लिए ऑक्सीजन और नमी चाहिए, और घुले लवण पानी को बेहतर विद्युत-अपघट्य बनाकर इसे तेज़ करते हैं। दोनों सही हैं और R, A की व्याख्या करता है।",
  },
  "rt-ar-b-02": {
    stem: "अभिकथन (A): निःशुल्क और अनिवार्य बाल शिक्षा का अधिकार अधिनियम, 2009, 6 से 14 वर्ष के बच्चों पर लागू होता है। कारण (R): यह अधिनियम 1 अप्रैल 2010 को लागू हुआ।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों कथन सही हैं, परन्तु अधिनियम लागू होने की तिथि उसकी आयु-सीमा की व्याख्या नहीं करती। अतः R, A की व्याख्या नहीं है।",
  },
  "rt-ar-b-03": {
    stem: "अभिकथन (A): सूर्य पश्चिम में उगता है। कारण (R): पृथ्वी अपने अक्ष पर पश्चिम से पूर्व की ओर घूमती है।",
    options: [...AR_OPTS_HI],
    explanation: "पृथ्वी पश्चिम से पूर्व घूमती है, इसलिए सूर्य पूर्व में उगता दिखाई देता है। अतः A गलत है और R सही है।",
  },
  "rt-ar-b-04": {
    stem: "अभिकथन (A): बर्फ़ पानी पर तैरती है। कारण (R): बर्फ़ का घनत्व पानी से अधिक होता है।",
    options: [...AR_OPTS_HI],
    explanation: "बर्फ़ इसलिए तैरती है क्योंकि उसका घनत्व पानी से कम है (लगभग 0.92 g/cm³ बनाम 1 g/cm³)। A सही है, R गलत है।",
  },
  "rt-ar-b-05": {
    stem: "अभिकथन (A): अधिकांश पत्तियाँ हरी दिखाई देती हैं। कारण (R): क्लोरोफ़िल मुख्यतः लाल और नीला प्रकाश अवशोषित करता है और हरा प्रकाश परावर्तित करता है।",
    options: [...AR_OPTS_HI],
    explanation: "हमें वही रंग दिखता है जो सतह परावर्तित करती है। क्लोरोफ़िल हरा प्रकाश परावर्तित करता है, इसलिए पत्तियाँ हरी दिखती हैं। दोनों सही और R, A की व्याख्या है।",
  },
  "rt-ar-b-06": {
    stem: "अभिकथन (A): माउंट एवरेस्ट समुद्र तल से विश्व की सबसे ऊँची चोटी है। कारण (R): माउंट एवरेस्ट हिमालय में स्थित है।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों सही हैं, परन्तु हिमालय में स्थित होना यह नहीं समझाता कि एवरेस्ट सबसे ऊँचा क्यों है; वहाँ कई निचली चोटियाँ भी हैं। R, A की व्याख्या नहीं है।",
  },
  "rt-ar-b-07": {
    stem: "अभिकथन (A): ध्वनि स्टील की तुलना में वायु में तेज़ चलती है। कारण (R): ध्वनि को चलने के लिए किसी भौतिक माध्यम की आवश्यकता होती है।",
    options: [...AR_OPTS_HI],
    explanation: "ध्वनि ठोसों जैसे स्टील में (लगभग 5,000 m/s) वायु (लगभग 343 m/s) से बहुत तेज़ चलती है, अतः A गलत है। R सही है: ध्वनि निर्वात में नहीं चल सकती।",
  },
  "rt-ar-b-08": {
    stem: "अभिकथन (A): कर्क रेखा भारत से होकर गुज़रती है। कारण (R): कर्क रेखा लगभग 23.5 डिग्री दक्षिणी अक्षांश पर स्थित है।",
    options: [...AR_OPTS_HI],
    explanation: "कर्क रेखा (लगभग 23.5° उत्तर) भारत के आठ राज्यों से गुज़रती है, अतः A सही है। यह उत्तरी गोलार्ध में है, अतः R गलत है।",
  },
  "rt-ar-b-09": {
    stem: "अभिकथन (A): बिजली की चमक गरज सुनाई देने से पहले दिखाई देती है। कारण (R): प्रकाश ध्वनि से बहुत तेज़ चलता है।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों एक साथ उत्पन्न होते हैं, परन्तु प्रकाश (3 × 10⁸ m/s) लगभग तुरन्त पहुँचता है जबकि ध्वनि (लगभग 343 m/s) पीछे रह जाती है। R, A की व्याख्या करता है।",
  },
  "rt-ar-b-10": {
    stem: "अभिकथन (A): व्हेल स्तनधारी हैं। कारण (R): व्हेल गलफड़ों से साँस लेती हैं।",
    options: [...AR_OPTS_HI],
    explanation: "व्हेल स्तनधारी हैं (उष्ण-रक्त, बच्चों को जन्म देती और दूध पिलाती हैं), अतः A सही है। वे फेफड़ों से वायु में साँस लेती हैं, गलफड़ों से नहीं, अतः R गलत है।",
  },
  "rt-ar-p-01": {
    stem: "अभिकथन (A): अधिक ऊँचाई पर पानी 100 °C से कम तापमान पर उबलता है। कारण (R): ऊँचाई बढ़ने के साथ वायुमंडलीय दाब घटता है।",
    options: [...AR_OPTS_HI],
    explanation: "द्रव तब उबलता है जब उसका वाष्प-दाब आसपास के दाब के बराबर हो जाता है। ऊँचाई पर कम दाब के कारण यह स्थिति कम तापमान पर आ जाती है। R, A की व्याख्या करता है।",
  },
  "rt-ar-p-02": {
    stem: "अभिकथन (A): शुक्र सौरमंडल का सबसे गर्म ग्रह है। कारण (R): शुक्र सूर्य के सबसे निकट का ग्रह है।",
    options: [...AR_OPTS_HI],
    explanation: "शुक्र अपने घने कार्बन डाइऑक्साइड वायुमंडल (अनियंत्रित हरितगृह प्रभाव) के कारण सबसे गर्म है, अतः A सही है। सूर्य के सबसे निकट बुध है, शुक्र नहीं, अतः R गलत है।",
  },
  "rt-ar-p-03": {
    stem: "अभिकथन (A): पृथ्वी पर ऋतुएँ होती हैं। कारण (R): सूर्य के चारों ओर पृथ्वी की कक्षा दीर्घवृत्ताकार है।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों सही हैं, परन्तु ऋतुएँ पृथ्वी के अक्ष के झुकाव (लगभग 23.5°) के कारण होती हैं, कक्षा के आकार के कारण नहीं। पृथ्वी जनवरी के आरम्भ में, उत्तरी शीत ऋतु में, सूर्य के सबसे निकट होती है। R, A की व्याख्या नहीं है।",
  },
  "rt-ar-p-04": {
    stem: "अभिकथन (A): निकट-दृष्टि दोष (मायोपिया) को ठीक करने के लिए उत्तल लेंस का प्रयोग होता है। कारण (R): उत्तल लेंस एक अभिसारी लेंस है।",
    options: [...AR_OPTS_HI],
    explanation: "मायोपिया अवतल (अपसारी) लेंस से ठीक होता है, अतः A गलत है। R सही है: उत्तल लेंस प्रकाश को अभिसरित करता है।",
  },
  "rt-ar-p-05": {
    stem: "अभिकथन (A): हीरा विद्युत का सुचालक है। कारण (R): हीरे में प्रत्येक कार्बन परमाणु चार अन्य कार्बन परमाणुओं से जुड़ा होता है।",
    options: [...AR_OPTS_HI],
    explanation: "प्रत्येक कार्बन के चारों संयोजी इलेक्ट्रॉन बन्ध बनाने में लगे होते हैं, इसलिए हीरे में मुक्त इलेक्ट्रॉन नहीं होते और वह कुचालक है। अतः A गलत और R सही है।",
  },
  "rt-ar-p-06": {
    stem: "अभिकथन (A): पियाजे का सिद्धान्त संज्ञानात्मक विकास की चार अवस्थाओं का वर्णन करता है। कारण (R): जीन पियाजे एक स्विस मनोवैज्ञानिक थे।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों सही हैं (संवेदी-गामक, पूर्व-संक्रियात्मक, मूर्त संक्रियात्मक, औपचारिक संक्रियात्मक; पियाजे स्विस थे), परन्तु उनकी राष्ट्रीयता अवस्थाओं की संख्या की व्याख्या नहीं करती।",
  },
  "rt-ar-p-07": {
    stem: "अभिकथन (A): ऊपर की ओर त्वरित हो रही लिफ़्ट में खड़ा व्यक्ति स्वयं को भारी अनुभव करता है। कारण (R): लिफ़्ट के ऊपर त्वरित होने पर फ़र्श द्वारा व्यक्ति पर लगाया गया अभिलम्ब बल उसके भार से अधिक होता है।",
    options: [...AR_OPTS_HI],
    explanation: "अनुभव किया गया भार अभिलम्ब बल ही है। ऊपर की ओर त्वरण a होने पर N = m(g + a) > mg, इसलिए व्यक्ति भारी अनुभव करता है। R, A की व्याख्या करता है।",
  },
  "rt-ar-p-08": {
    stem: "अभिकथन (A): भारत का संविधान 26 जनवरी 1950 को लागू हुआ। कारण (R): संविधान सभा ने 26 नवम्बर 1949 को संविधान अंगीकृत किया।",
    options: [...AR_OPTS_HI],
    explanation: "दोनों तिथियाँ सही हैं। परन्तु 26 नवम्बर 1949 को अंगीकरण यह नहीं समझाता कि लागू होने की तिथि 26 जनवरी क्यों रखी गई; यह तिथि 1930 की पूर्ण स्वराज घोषणा के सम्मान में चुनी गई थी। R व्याख्या नहीं है।",
  },
  "rt-ar-p-09": {
    stem: "अभिकथन (A): बच्चे नए विचार तब अधिक प्रभावी ढंग से सीखते हैं जब उन्हें उनके पूर्व ज्ञान से जोड़ा जाता है। कारण (R): ऑसुबेल के अनुसार सार्थक अधिगम तब होता है जब नई जानकारी को शिक्षार्थी की मौजूदा संज्ञानात्मक संरचना से जोड़ा जाता है।",
    options: [...AR_OPTS_HI],
    explanation: "ऑसुबेल का सार्थक अधिगम सिद्धान्त कहता है कि नई सामग्री तब अच्छी तरह सीखी जाती है जब वह मौजूदा अवधारणाओं से जुड़ी हो। यही कारण है कि पूर्व ज्ञान से जोड़ना कारगर है, अतः R, A की व्याख्या करता है।",
  },
  "rt-ar-p-10": {
    stem: "अभिकथन (A): गंगा का उद्गम गंगोत्री हिमनद से होता है। कारण (R): गंगा अरब सागर में गिरती है।",
    options: [...AR_OPTS_HI],
    explanation: "गंगा (भागीरथी के रूप में) गोमुख पर गंगोत्री हिमनद से निकलती है, अतः A सही है। यह बंगाल की खाड़ी में गिरती है, अरब सागर में नहीं, अतः R गलत है।",
  },
  // ---------------------------------------------------- द्विआधारी तर्क
  "rt-bl-b-01": {
    stem: "एक द्वीप पर प्रत्येक व्यक्ति या तो सत्यवादी (सदा सच बोलता है) है या झूठा (सदा झूठ बोलता है)। A कहता है, \"B झूठा है।\" B कहता है, \"A और मैं एक ही प्रकार के हैं।\" A और B क्या हैं?",
    options: ["दोनों सत्यवादी हैं", "दोनों झूठे हैं", "A झूठा है, B सत्यवादी है", "A सत्यवादी है, B झूठा है"],
    explanation: "यदि A झूठा हो, तो B सत्यवादी होगा; तब B का 'एक ही प्रकार' वाला कथन सच होना चाहिए, पर दोनों भिन्न हैं। विरोधाभास। अतः A सत्यवादी, B झूठा है, और B का 'एक ही प्रकार' वाला कथन वास्तव में झूठा है। संगत।",
  },
  "rt-bl-b-02": {
    stem: "एक द्वीप पर प्रत्येक व्यक्ति या तो सदा सच बोलता है या सदा झूठ। निम्नलिखित में से कौन-सा कथन द्वीप का कोई भी व्यक्ति कभी नहीं कह सकता?",
    options: ["\"मैं सदा सच बोलता हूँ।\"", "\"मैं सदा झूठ बोलता हूँ।\"", "\"दो और दो चार होते हैं।\"", "\"दो और दो पाँच होते हैं।\""],
    explanation: "सत्यवादी यदि कहे 'मैं सदा झूठ बोलता हूँ' तो वह झूठ होगा, और झूठा यदि कहे तो वह सच होगा। दोनों असम्भव हैं। बाकी तीन कथन किसी न किसी प्रकार का व्यक्ति कह सकता है।",
  },
  "rt-bl-b-03": {
    stem: "A और B में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"हम दोनों में से कम से कम एक झूठा है।\" A और B क्या हैं?",
    options: ["A सत्यवादी है, B झूठा है", "दोनों झूठे हैं", "दोनों सत्यवादी हैं", "A झूठा है, B सत्यवादी है"],
    explanation: "यदि A झूठा होता, तो 'कम से कम एक झूठा है' कथन सच हो जाता, जो झूठा नहीं कह सकता। अतः A सत्यवादी है, कथन सच है, इसलिए B झूठा है।",
  },
  "rt-bl-b-04": {
    stem: "एक पूर्ण संख्या N के बारे में तीन कथन हैं: (1) N, 10 से बड़ी है। (2) N, 5 से बड़ी है। (3) N, 20 से बड़ी है। इनमें से ठीक एक कथन सच है। निम्नलिखित में से क्या निश्चित रूप से सही है?",
    options: ["N, 10 से बड़ी है", "N, 5 से बड़ी नहीं है", "N, 5 से बड़ी है परन्तु 10 से बड़ी नहीं है", "N, 20 से बड़ी है"],
    explanation: "यदि (3) सच हो तो तीनों सच होंगे; यदि (1) सच हो तो (2) भी सच होगा। अतः (1) या (3) अकेले सच नहीं हो सकते। केवल (2) सच है: 5 < N ≤ 10। यदि N ≤ 5 हो तो कोई भी कथन सच नहीं होगा।",
  },
  "rt-bl-b-05": {
    stem: "कथन p: \"बारिश हो रही है\" सत्य है। कथन q: \"ज़मीन गीली है\" असत्य है। कौन-सा संयुक्त कथन सत्य है?",
    options: ["p और q", "यदि p, तो q", "p या q", "p नहीं"],
    explanation: "'p और q' के लिए दोनों सत्य चाहिए (असत्य)। 'यदि p तो q' तब असत्य है जब p सत्य और q असत्य हो। 'p नहीं' असत्य है। 'p या q' सत्य है क्योंकि p सत्य है।",
  },
  "rt-bl-b-06": {
    stem: "A और B में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"B सत्यवादी है।\" B कहता है, \"A और मैं विपरीत प्रकार के हैं।\" A और B क्या हैं?",
    options: ["दोनों सत्यवादी हैं", "दोनों झूठे हैं", "A सत्यवादी है, B झूठा है", "A झूठा है, B सत्यवादी है"],
    explanation: "यदि A सच बोले, तो B सत्यवादी है, इसलिए B का 'विपरीत प्रकार' वाला कथन सच होना चाहिए, पर दोनों सत्यवादी होंगे। विरोधाभास। अतः A झूठा है, B भी झूठा है, और B का 'विपरीत प्रकार' वाला कथन झूठा है (दोनों झूठे)। संगत।",
  },
  "rt-bl-b-07": {
    stem: "कथन \"सभी विद्यार्थी परीक्षा में उत्तीर्ण हुए\" का सही निषेध क्या है?",
    options: ["कोई भी विद्यार्थी परीक्षा में उत्तीर्ण नहीं हुआ", "कुछ विद्यार्थी परीक्षा में उत्तीर्ण हुए", "सभी विद्यार्थी परीक्षा में अनुत्तीर्ण हुए", "कम से कम एक विद्यार्थी परीक्षा में उत्तीर्ण नहीं हुआ"],
    explanation: "'सभी X, Y हैं' का निषेध है 'कम से कम एक X, Y नहीं है'। 'कोई भी उत्तीर्ण नहीं हुआ' बहुत कठोर है; वह तार्किक विपरीत नहीं है।",
  },
  "rt-bl-b-08": {
    stem: "दो दरवाज़े हैं: एक बाहर जाता है, दूसरा नहीं। प्रत्येक दरवाज़े पर एक पहरेदार है; एक सदा सच बोलता है और दूसरा सदा झूठ, पर आप नहीं जानते कि कौन कौन है। आप एक पहरेदार से पूछते हैं, \"दूसरा पहरेदार किस दरवाज़े को बाहर जाने वाला बताएगा?\" वह उत्तर देता है, \"दरवाज़ा 1।\" आपको कौन-सा दरवाज़ा चुनना चाहिए?",
    options: ["दरवाज़ा 1", "दरवाज़ा 2", "कोई भी, निर्णय नहीं हो सकता", "फिर से पूछें; कोई निष्कर्ष सम्भव नहीं"],
    explanation: "यदि आपने सत्यवादी से पूछा, तो वह झूठे का गलत उत्तर सच-सच बताएगा। यदि झूठे से पूछा, तो वह सत्यवादी का सही उत्तर उलटकर बताएगा। दोनों स्थितियों में उत्तर गलत दरवाज़ा बताता है, अतः दरवाज़ा 2 चुनें।",
  },
  "rt-bl-b-09": {
    stem: "X, Y और Z में से ठीक एक सत्यवादी है और शेष दो झूठे हैं। X कहता है, \"Y झूठा है।\" Y कहता है, \"Z झूठा है।\" Z कहता है, \"X और Y दोनों झूठे हैं।\" सत्यवादी कौन है?",
    options: ["X", "Z", "Y", "निर्धारित नहीं किया जा सकता"],
    explanation: "यदि X सत्यवादी हो, तो Y झूठा है, इसलिए Z सत्यवादी होगा: दो सत्यवादी, विरोधाभास। यदि Z सत्यवादी हो, तो X और Y झूठे हैं, पर तब X का 'Y झूठा है' सच होगा, विरोधाभास। यदि Y सत्यवादी हो: Z झूठा (ठीक), X का कथन झूठा (ठीक), Z का कथन झूठा क्योंकि Y सत्यवादी है (ठीक)। अतः Y।",
  },
  "rt-bl-b-10": {
    stem: "सप्रतिबन्ध कथन \"यदि p, तो q\" केवल तब असत्य होता है जब ____",
    options: ["p सत्य हो और q असत्य हो", "p असत्य हो और q सत्य हो", "p और q दोनों असत्य हों", "p और q दोनों सत्य हों"],
    explanation: "सप्रतिबन्ध कथन तभी टूटता है जब शर्त पूरी हो (p सत्य) पर परिणाम न हो (q असत्य)। अन्य सभी स्थितियों में यह सत्य है।",
  },
  "rt-bl-p-01": {
    stem: "A, B और C में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"हम तीनों झूठे हैं।\" B कहता है, \"हममें से ठीक एक सत्यवादी है।\" A, B और C क्या हैं?",
    options: ["A झूठा, B सत्यवादी, C झूठा", "A झूठा, B झूठा, C सत्यवादी", "A सत्यवादी, B झूठा, C झूठा", "तीनों झूठे हैं"],
    explanation: "A सत्यवादी नहीं हो सकता (वह स्वयं को झूठा कह रहा है), अतः A झूठा है और कम से कम एक सत्यवादी है। यदि B झूठा होता, तो अकेला सत्यवादी C होता, जिससे B का कथन सच हो जाता: विरोधाभास। अतः B सत्यवादी है, और 'ठीक एक' का अर्थ है C झूठा है।",
  },
  "rt-bl-p-02": {
    stem: "A, B और C में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"B झूठा है।\" B कहता है, \"A और C एक ही प्रकार के हैं।\" निम्नलिखित में से क्या निश्चित रूप से निकाला जा सकता है?",
    options: ["A सत्यवादी है", "B सत्यवादी है", "C सत्यवादी है", "C झूठा है"],
    explanation: "स्थिति 1: A सत्यवादी, तो B झूठा, तो A और C भिन्न, तो C झूठा। स्थिति 2: A झूठा, तो B सत्यवादी, तो A और C समान, तो C झूठा। दोनों स्थितियों में C झूठा है; A और B निश्चित नहीं।",
  },
  "rt-bl-p-03": {
    stem: "एक कार्ड पर चार कथन हैं: (1) \"इस कार्ड पर ठीक एक कथन असत्य है।\" (2) \"इस कार्ड पर ठीक दो कथन असत्य हैं।\" (3) \"इस कार्ड पर ठीक तीन कथन असत्य हैं।\" (4) \"इस कार्ड पर चारों कथन असत्य हैं।\" कौन-सा कथन सत्य है?",
    options: ["कथन 1", "कथन 2", "कथन 4", "कथन 3"],
    explanation: "ये कथन एक-दूसरे का खंडन करते हैं, अतः अधिकतम एक सत्य हो सकता है। यदि कोई सत्य न हो तो कथन 4 सत्य हो जाएगा, विरोधाभास। अतः ठीक एक सत्य और तीन असत्य हैं, और यही कथन 3 कहता है।",
  },
  "rt-bl-p-04": {
    stem: "A, B, C और D में से किसी एक ने खिड़की तोड़ी। A कहता है, \"B ने तोड़ी।\" B कहता है, \"D ने तोड़ी।\" C कहता है, \"मैंने नहीं तोड़ी।\" D कहता है, \"B झूठ बोल रहा है।\" यदि चारों कथनों में से ठीक एक सत्य है, तो खिड़की किसने तोड़ी?",
    options: ["A", "C", "B", "D"],
    explanation: "B और D के कथन परस्पर विरोधी हैं, अतः इनमें से ठीक एक सत्य है। इसलिए A और C के कथन असत्य हैं। C का कथन असत्य है, अर्थात् C ने तोड़ी। जाँच: A का 'B ने तोड़ी' असत्य; B का 'D ने तोड़ी' असत्य; D का 'B झूठ बोल रहा है' सत्य। ठीक एक सत्य।",
  },
  "rt-bl-p-05": {
    stem: "P, Q, R और S में से किसी एक ने फूलदान तोड़ा। P कहता है, \"Q ने तोड़ा।\" Q कहता है, \"S ने तोड़ा।\" R कहता है, \"मैंने नहीं तोड़ा।\" S कहता है, \"Q झूठ बोल रहा है।\" यदि चारों में से ठीक एक झूठ बोल रहा है, तो फूलदान किसने तोड़ा?",
    options: ["P", "S", "R", "Q"],
    explanation: "Q और S परस्पर विरोधी हैं, अतः इन्हीं में से एक अकेला झूठा है। इसलिए P और R सच बोल रहे हैं: Q ने तोड़ा। तब Q का 'S ने तोड़ा' झूठ है और S का 'Q झूठ बोल रहा है' सच है। ठीक एक झूठा।",
  },
  "rt-bl-p-06": {
    stem: "A और B में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"यदि मैं सत्यवादी हूँ, तो B सत्यवादी है।\" A और B क्या हैं?",
    options: ["A सत्यवादी, B झूठा", "दोनों सत्यवादी", "दोनों झूठे", "A झूठा, B सत्यवादी"],
    explanation: "यदि A झूठा होता, तो शर्त 'मैं सत्यवादी हूँ' असत्य होती और पूरा 'यदि ... तो' कथन स्वतः सत्य हो जाता, जिसे झूठा नहीं कह सकता। अतः A सत्यवादी है, कथन सत्य है, और शर्त पूरी होने से B सत्यवादी है।",
  },
  "rt-bl-p-07": {
    stem: "A और B में से प्रत्येक या तो सत्यवादी है या झूठा। A कहता है, \"मैं झूठा हूँ और B सत्यवादी है।\" A और B क्या हैं?",
    options: ["A सत्यवादी, B झूठा", "दोनों सत्यवादी", "A झूठा, B सत्यवादी", "दोनों झूठे"],
    explanation: "सत्यवादी स्वयं को झूठा नहीं कह सकता, अतः A झूठा है और पूरा कथन असत्य है। इसका पहला भाग ('मैं झूठा हूँ') सत्य है, इसलिए दूसरा भाग असत्य होना चाहिए: B झूठा है।",
  },
  "rt-bl-p-08": {
    stem: "कौन-सा कथन \"यदि कोई विद्यार्थी नियमित रूप से पढ़ता है, तो वह उत्तीर्ण होता है\" के तार्किक रूप से तुल्य है?",
    options: ["यदि कोई विद्यार्थी उत्तीर्ण होता है, तो उसने नियमित रूप से पढ़ाई की", "यदि कोई विद्यार्थी उत्तीर्ण नहीं होता, तो उसने नियमित रूप से पढ़ाई नहीं की", "यदि कोई विद्यार्थी नियमित रूप से नहीं पढ़ता, तो वह उत्तीर्ण नहीं होता", "कोई विद्यार्थी तभी उत्तीर्ण होता है जब वह नियमित रूप से पढ़ता है"],
    explanation: "'यदि p तो q' केवल अपने प्रतिधनात्मक रूप 'यदि q नहीं तो p नहीं' के तुल्य है। विकल्प 1 विलोम है, विकल्प 3 प्रतिलोम है, और विकल्प 4 का अर्थ है 'यदि उत्तीर्ण तो पढ़ा', जो फिर से विलोम है।",
  },
  "rt-bl-p-09": {
    stem: "तीन डिब्बों पर \"सेब\", \"संतरे\" और \"मिश्रित\" लेबल लगे हैं। हर लेबल गलत है। आप \"मिश्रित\" लेबल वाले डिब्बे से एक फल निकालते हैं और वह सेब है। \"संतरे\" लेबल वाले डिब्बे में क्या है?",
    options: ["केवल सेब", "केवल संतरे", "मिश्रित फल", "निर्धारित नहीं किया जा सकता"],
    explanation: "'मिश्रित' डिब्बा मिश्रित नहीं है और उससे सेब निकला, अतः उसमें केवल सेब हैं। 'संतरे' डिब्बे में संतरे (गलत लेबल) या सेब (पहले ही तय) नहीं हो सकते, अतः वह मिश्रित है। 'सेब' डिब्बे में संतरे हैं।",
  },
  "rt-bl-p-10": {
    stem: "एक शेर सोमवार, मंगलवार और बुधवार को झूठ बोलता है और अन्य दिनों सच। एक यूनिकॉर्न गुरुवार, शुक्रवार और शनिवार को झूठ बोलता है और अन्य दिनों सच। एक दिन दोनों कहते हैं, \"कल मेरे झूठ बोलने के दिनों में से एक था।\" आज कौन-सा दिन है?",
    options: ["सोमवार", "रविवार", "गुरुवार", "शुक्रवार"],
    explanation: "शेर यह सोमवार (झूठ बोलते हुए, रविवार झूठ का दिन नहीं था) या गुरुवार (सच बोलते हुए, बुधवार झूठ का दिन था) को कह सकता है। यूनिकॉर्न यह गुरुवार (झूठ बोलते हुए, बुधवार उसका झूठ का दिन नहीं था) या रविवार (सच बोलते हुए, शनिवार झूठ का दिन था) को कह सकता है। साझा दिन गुरुवार है।",
  },
  // ---------------------------------------------------- कूट असमानताएँ
  "rt-ci-b-01": {
    stem: `${CI1_HI} कथन: A % B, B # C, C $ D। निष्कर्ष: I. A % D  II. B $ D`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ निकालने पर: A > B = C ≥ D। अतः A > D (I सही) और B = C ≥ D, इसलिए B ≥ D (II सही)। दोनों अनुसरण करते हैं।",
  },
  "rt-ci-b-02": {
    stem: `${CI1_HI} कथन: M @ N, N & O, O # P। निष्कर्ष: I. M @ P  II. N % P`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: M < N ≤ O = P। अतः M < P (I सही)। N ≤ P, इसलिए 'N > P' असत्य है (II नहीं)। केवल I।",
  },
  "rt-ci-b-03": {
    stem: `${CI1_HI} कथन: K & L, L % M, N # M। निष्कर्ष: I. K % N  II. K @ M`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: K ≤ L > M = N। K और M के बीच के चिह्न विपरीत दिशाओं में हैं, इसलिए K और M (या N) का कोई सम्बन्ध तय नहीं होता। कोई भी अनुसरण नहीं करता।",
  },
  "rt-ci-b-04": {
    stem: `${CI1_HI} कथन: R # S, S @ T, T & U। निष्कर्ष: I. R # U  II. U % S`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: R = S < T ≤ U। अतः U > S (II सही) और R < U, इसलिए R = U असत्य (I नहीं)। केवल II।",
  },
  "rt-ci-b-05": {
    stem: `${CI1_HI} कथन: A $ B, C & B, D # C। निष्कर्ष: I. A $ D  II. A % D`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: A ≥ B ≥ C = D, अतः A ≥ D। I (A ≥ D) अनुसरण करता है। II (A > D) निश्चित नहीं क्योंकि सभी बराबर भी हो सकते हैं। केवल I।",
  },
  "rt-ci-b-06": {
    stem: `${CI1_HI} कथन: P @ Q, Q # R, S % R। निष्कर्ष: I. S % P  II. Q @ S`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: P < Q = R < S। अतः S > P (I सही) और Q < S (II सही)। दोनों अनुसरण करते हैं।",
  },
  "rt-ci-b-07": {
    stem: `${CI1_HI} कथन: E % F, F $ G, H @ G। निष्कर्ष: I. E # G  II. F % H`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: E > F ≥ G > H। E > G, इसलिए E = G असत्य (I नहीं)। F ≥ G > H से F > H (II सही)। केवल II।",
  },
  "rt-ci-b-08": {
    stem: `${CI1_HI} कथन: J & K, K & L, M % L। निष्कर्ष: I. J # L  II. M % J`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: J ≤ K ≤ L < M। J ≤ L, अतः J = L सम्भव है पर निश्चित नहीं (I नहीं)। J ≤ L < M से M > J (II सही)। केवल II।",
  },
  "rt-ci-b-09": {
    stem: `${CI1_HI} कथन: T $ U, U @ V, V # W। निष्कर्ष: I. T % W  II. U @ W`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: T ≥ U < V = W। T और W विपरीत चिह्नों से जुड़े हैं, इसलिए I तय नहीं होता। U < V = W से U < W (II सही)। केवल II।",
  },
  "rt-ci-b-10": {
    stem: `${CI1_HI} कथन: G # H, H $ I, I % J। निष्कर्ष: I. G % I  II. H # J`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: G = H ≥ I > J। G ≥ I, अतः 'G > I' निश्चित नहीं (I नहीं)। H > J, अतः 'H = J' असत्य (II नहीं)। कोई भी अनुसरण नहीं करता।",
  },
  "rt-ci-p-01": {
    stem: `${CI2_HI} कथन: A @ B, B & C, C $ D, D % E। निष्कर्ष: I. A & D  II. B # E`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: A ≤ B < C = D ≥ E। अतः A < D (I सही)। B < D और E ≤ D, इसलिए B और E की तुलना सम्भव नहीं (II नहीं)। केवल I।",
  },
  "rt-ci-p-02": {
    stem: `${CI2_HI} कथन: M % N, N # O, O $ P, P @ Q। निष्कर्ष: I. M # P  II. Q % O`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: M ≥ N > O = P ≤ Q। M ≥ N > P से M > P (I सही)। Q ≥ P = O से Q ≥ O (II सही)। दोनों अनुसरण करते हैं।",
  },
  "rt-ci-p-03": {
    stem: `${CI2_HI} कथन: R $ S, S @ T, T & U, V # U। निष्कर्ष: I. R $ T  II. V # S`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: R = S ≤ T < U < V। R ≤ T, अतः R = T निश्चित नहीं (I नहीं)। V > U > T ≥ S से V > S (II सही)। केवल II।",
  },
  "rt-ci-p-04": {
    stem: `${CI2_HI} कथन: W % X, X $ Y, Y @ Z। निष्कर्ष: I. W # Y  II. W $ Y`,
    options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "या तो I या II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"],
    explanation: "अर्थ: W ≥ X = Y ≤ Z, अतः W ≥ Y। अकेले 'W > Y' (I) या 'W = Y' (II) निश्चित नहीं, पर दोनों मिलकर W ≥ Y की हर सम्भावना को ढक लेते हैं। अतः या तो I या II अनुसरण करता है।",
  },
  "rt-ci-p-05": {
    stem: `${CI2_HI} कथन: B # C, C % D, D $ E, F @ E। निष्कर्ष: I. B # F  II. F $ C`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: B > C ≥ D = E ≥ F। अतः B > F (I सही)। C ≥ F, इसलिए C = F केवल सम्भव है, निश्चित नहीं (II नहीं)। केवल I।",
  },
  "rt-ci-p-06": {
    stem: `${CI2_HI} कथन: G & H, H @ I, I $ J, J # K। निष्कर्ष: I. H # K  II. G & I`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: G < H ≤ I = J > K। H और K विपरीत चिह्नों से मिलते हैं (H ≤ J, K < J), अतः I तय नहीं होता। G < H ≤ I से G < I (II सही)। केवल II।",
  },
  "rt-ci-p-07": {
    stem: `${CI2_HI} कथन: L @ M, M & N, O # N, O @ P। निष्कर्ष: I. L & P  II. P # M`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: L ≤ M < N < O ≤ P। अतः L < P (I सही) और P > M (II सही)। दोनों अनुसरण करते हैं।",
  },
  "rt-ci-p-08": {
    stem: `${CI2_HI} कथन: Q % R, R # S, T $ S, T % U। निष्कर्ष: I. Q # U  II. R $ U`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: Q ≥ R > S = T ≥ U। अतः Q > U (I सही)। R > S ≥ U से R > U, इसलिए R = U असत्य (II नहीं)। केवल I।",
  },
  "rt-ci-p-09": {
    stem: `${CI2_HI} कथन: V # W, X & W, X % Y, Z @ Y। निष्कर्ष: I. Y $ Z  II. X & Z`,
    options: [...IC_OPTS_HI],
    explanation: "अर्थ: V > W > X ≥ Y ≥ Z। Y ≥ Z, अतः Y = Z निश्चित नहीं (I नहीं)। X ≥ Z, अतः X < Z असत्य (II नहीं)। कोई भी अनुसरण नहीं करता।",
  },
  "rt-ci-p-10": {
    stem: `${CI2_HI} कथन: A $ B, B % C, D # C। निष्कर्ष: I. A # C  II. A $ C`,
    options: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "I और II दोनों अनुसरण करते हैं", "या तो I या II अनुसरण करता है"],
    explanation: "अर्थ: A = B ≥ C < D, अतः A ≥ C। 'A > C' (I) और 'A = C' (II) अकेले-अकेले अनिश्चित हैं, पर इनमें से एक अवश्य सही है। अतः या तो I या II अनुसरण करता है।",
  },
  // ---------------------------------------------------- समूहन और चयन
  "rt-gs-b-01": {
    stem: "A, B, C, D और E में से 3 सदस्यों की समिति चुननी है। शर्तें: A और B दोनों एक साथ नहीं चुने जा सकते; C का चयन अनिवार्य है; यदि D चुना जाए तो E भी चुना जाना चाहिए। कौन-सी समिति स्वीकार्य है?",
    options: ["A, B, C", "A, C, D", "C, D, E", "A, D, E"],
    explanation: "A, B, C में A और B साथ हैं। A, C, D में D है पर E नहीं। A, D, E में C नहीं है। केवल C, D, E सभी शर्तें पूरी करती है।",
  },
  "rt-gs-b-02": {
    stem: "तीन पुरुषों (P, Q, R) और तीन महिलाओं (S, T, U) में से 4 की टीम चुननी है। शर्तें: कम से कम दो महिलाएँ हों; P और S या तो साथ चुने जाएँ या दोनों न चुने जाएँ; Q, T के साथ टीम में नहीं हो सकता। यदि Q चुना जाता है, तो अन्य तीन सदस्य कौन हैं?",
    options: ["P, S और U", "R, S और U", "P, T और U", "R, S और T"],
    explanation: "Q के होने पर T बाहर है, अतः दोनों महिलाएँ S और U होंगी। S के लिए P आवश्यक है। इस प्रकार Q, P, S, U: चार सदस्य। R, S, U गलत है क्योंकि S बिना P के है।",
  },
  "rt-gs-b-03": {
    stem: "A, B, C, D और E में से तीन विद्यार्थी चुनने हैं। शर्तें: E का चयन अनिवार्य है; A और E एक साथ नहीं चुने जा सकते; B और D दोनों नहीं चुने जा सकते। कितने भिन्न चयन सम्भव हैं?",
    options: ["1", "2", "3", "4"],
    explanation: "E चुना गया, अतः A बाहर। शेष दो B, C, D में से आएँगे, B और D साथ नहीं: {B, C} या {C, D}। अतः 2 चयन।",
  },
  "rt-gs-b-04": {
    stem: "पाँच मित्रों K, L, M, N और O में से तीन प्रश्नोत्तरी में जाएँगे। शर्तें: K तभी जाएगा जब L जाए; M और N कभी साथ नहीं जाते; O का जाना अनिवार्य है। इनमें से कौन-सा समूह नहीं हो सकता?",
    options: ["O, K, L", "O, M, L", "O, K, M", "O, N, L"],
    explanation: "O, K, M में K बिना L के है, जिससे पहली शर्त टूटती है। अन्य तीनों समूह सभी शर्तें पूरी करते हैं।",
  },
  "rt-gs-b-05": {
    stem: "एक समिति में A, B, C, D में से 2 शिक्षक और P, Q, R में से 2 लिपिक होंगे। शर्तें: A और P साथ नहीं हो सकते; B का चयन अनिवार्य है; यदि C चुना जाए तो Q नहीं चुना जाएगा। यदि A चुना जाता है, तो समिति में कौन-से लिपिक होंगे?",
    options: ["P और Q", "Q और R", "P और R", "केवल R"],
    explanation: "A और B दोनों शिक्षक स्थान भर देते हैं (अतः C बाहर है और Q वाली शर्त लागू नहीं होती)। A के कारण P बाहर है, इसलिए दोनों लिपिक Q और R होंगे।",
  },
  "rt-gs-b-06": {
    stem: "A, B, C, D, E और F में से 3 का समूह बनाना है। शर्तें: A और B या तो साथ चुने जाएँ या दोनों न चुने जाएँ; C और D दोनों नहीं चुने जा सकते। कितने भिन्न समूह सम्भव हैं?",
    options: ["4", "5", "6", "8"],
    explanation: "A और B के साथ: तीसरा सदस्य C, D, E, F में से कोई भी, कुल 4। A और B के बिना: C, D, E, F में से 3 चुनना (4 तरीके) घटा वे जिनमें C और D दोनों हैं (CDE, CDF), कुल 2। योग 6।",
  },
  "rt-gs-b-07": {
    stem: "P, Q, R, S, T और U में से चार लोग चुनने हैं। शर्तें: P का चयन अनिवार्य है; Q और R दोनों नहीं चुने जा सकते; यदि S चुना जाए तो T भी चुना जाए। यदि U नहीं चुना जाता, तो कौन-से दो अवश्य टीम में होंगे?",
    options: ["Q और S", "S और T", "R और T", "Q और R"],
    explanation: "P के अतिरिक्त तीन सदस्य Q, R, S, T में से आएँगे, Q और R दोनों नहीं। सम्भव समूह: Q, S, T या R, S, T। दोनों में S और T हैं।",
  },
  "rt-gs-b-08": {
    stem: "इंजीनियरों A, B, C; डॉक्टरों D, E, F; और वकीलों G, H में से 4 का पैनल चुना जाता है। पैनल में प्रत्येक व्यवसाय से कम से कम एक होना चाहिए। A और D साथ नहीं हो सकते; F और G साथ होने चाहिए; H नहीं चुना गया है। कौन-सा पैनल मान्य है?",
    options: ["G, F, A, D", "G, F, B, E", "G, D, B, C", "F, G, D, E"],
    explanation: "विकल्प 1 में A और D साथ हैं। विकल्प 3 में G बिना F के है। विकल्प 4 में कोई इंजीनियर नहीं। G, F, B, E में एक वकील, दो डॉक्टर और एक इंजीनियर हैं और कोई शर्त नहीं टूटती।",
  },
  "rt-gs-b-09": {
    stem: "लड़कों A, B, C, D और लड़कियों E, F, G में से 2 लड़कों और 2 लड़कियों की टीम बनानी है। A और E एक ही टीम में रहने से मना करते हैं। कितनी भिन्न टीमें सम्भव हैं?",
    options: ["12", "15", "9", "18"],
    explanation: "बिना प्रतिबन्ध: C(4,2) × C(3,2) = 6 × 3 = 18। जिनमें A और E दोनों हैं: A और 3 में से एक लड़का (3 तरीके) × E और 2 में से एक लड़की (2 तरीके) = 6। मान्य टीमें = 18 − 6 = 12।",
  },
  "rt-gs-b-10": {
    stem: "A, B, C, D, E, F और G में से पाँच खिलाड़ी चुनने हैं। शर्तें: A और B या तो साथ चुने जाएँ या दोनों नहीं; C का चयन अनिवार्य है; D और E दोनों नहीं चुने जा सकते; F तभी चुना जाएगा जब G चुना जाए। कौन-सी टीम मान्य है?",
    options: ["A, B, C, D, E", "A, C, D, F, G", "A, B, C, E, F", "A, B, C, D, G"],
    explanation: "विकल्प 1 में D और E साथ हैं। विकल्प 2 में A बिना B के है। विकल्प 3 में F बिना G के है। A, B, C, D, G में कोई शर्त नहीं टूटती।",
  },
  "rt-gs-p-01": {
    stem: "पुरुषों A, B, C, D और महिलाओं E, F, G, H में से 5 की समिति बनती है। शर्तें: कम से कम दो महिलाएँ; A और E साथ नहीं रह सकते; B तभी रहेगा जब F रहे; C और G या तो साथ रहेंगे या दोनों नहीं; D, H के साथ नहीं रह सकता। कौन-सी समिति सम्भव है?",
    options: ["A, B, F, G, H", "B, C, D, F, G", "A, C, E, F, G", "B, D, E, F, H"],
    explanation: "विकल्प 1 में G बिना C के है। विकल्प 3 में A और E साथ हैं। विकल्प 4 में D और H साथ हैं। B, C, D, F, G: B के साथ F है, C और G साथ हैं, D बिना H के है, A अनुपस्थित है, दो महिलाएँ हैं। मान्य।",
  },
  "rt-gs-p-02": {
    stem: "A, B, C, D, E, F और G में से पाँच सदस्य चुने जाते हैं। शर्तें: यदि A चुना जाए तो B भी चुना जाए; यदि C चुना जाए तो D नहीं चुना जाए; E और F या तो साथ चुने जाएँ या दोनों नहीं; G का चयन अनिवार्य है। यदि D चुना जाता है, तो निम्न में से क्या अवश्य सत्य है?",
    options: ["A चुना गया है", "C चुना गया है", "F नहीं चुना गया है", "A नहीं चुना गया है"],
    explanation: "D और G अंदर हैं, C बाहर है। शेष तीन A, B, E, F में से आएँगे। E और F जोड़े में ही जाते हैं और A के लिए B चाहिए। एकमात्र मान्य तिकड़ी B, E, F है (A और B के साथ तीसरा अकेला सदस्य चाहिए, पर E या F अकेले नहीं जा सकते)। अतः A नहीं चुना गया।",
  },
  "rt-gs-p-03": {
    stem: "A, B, C, D, E और F में से चार लोग चुनने हैं। शर्तें: A और B दोनों नहीं चुने जा सकते; यदि C चुना जाए तो D भी चुना जाए; E का चयन अनिवार्य है। कितने चयन सम्भव हैं?",
    options: ["4", "5", "6", "7"],
    explanation: "E अंदर है; A, B, C, D, F में से 3 चुनने हैं। 10 तिकड़ियों में से वे हटाएँ जिनमें A और B हैं (ABC, ABD, ABF) और जिनमें C है पर D नहीं (ACF, BCF)। शेष: ACD, ADF, BCD, BDF, CDF = 5।",
  },
  "rt-gs-p-04": {
    stem: "एक विद्यालय 4 विद्यार्थी भेजता है: कक्षा IX (P, Q, R) और कक्षा X (S, T, U, V) से। शर्तें: कक्षा IX से कम से कम एक और कक्षा X से कम से कम दो; P और S कभी साथ नहीं जाते; Q तभी जाएगा जब T जाए; R और V या तो साथ जाएँगे या दोनों नहीं। यदि P और Q दोनों जाते हैं, तो अन्य दो कौन हैं?",
    options: ["T और U", "T और V", "R और V", "S और T"],
    explanation: "Q के लिए T आवश्यक है, अतः P, Q, T अंदर हैं और एक स्थान बचा है। P के कारण S वर्जित है। V अकेला वर्जित है (R चाहिए) और R अकेला वर्जित है (V चाहिए)। अतः चौथा U है। कक्षा X से T और U: दो, जैसा आवश्यक है।",
  },
  "rt-gs-p-05": {
    stem: "एक टीम में A, B, C, D, E में से 3 लड़के और F, G, H, I में से 2 लड़कियाँ होंगी। शर्तें: A और F दोनों टीम में नहीं हो सकते; B और C या तो साथ चुने जाएँ या दोनों नहीं। कितनी भिन्न टीमें सम्भव हैं?",
    options: ["16", "20", "18", "24"],
    explanation: "लड़कों की तिकड़ियाँ: B और C के साथ (BCA, BCD, BCE) या उनके बिना (ADE): कुल 4। दो में A है (BCA, ADE); इनके साथ F रहित कोई भी लड़की-जोड़ी: C(3,2) = 3 प्रत्येक, कुल 6। अन्य दो के साथ C(4,2) = 6 में से कोई भी जोड़ी, कुल 12। योग 18।",
  },
  "rt-gs-p-06": {
    stem: "J, K, L, M, N और O में से तीन लोग चुने जाते हैं। शर्तें: J और K दोनों नहीं चुने जा सकते; L तभी चुना जाएगा जब M चुना जाए; N और O दोनों नहीं चुने जा सकते। यदि L चुना जाता है, तो इनमें से कौन-सा चयन नहीं हो सकता?",
    options: ["L, M, J", "L, M, N", "L, M, O", "L, J, K"],
    explanation: "L, J, K दो नियम तोड़ता है: J और K साथ हैं, और L बिना M के है। अन्य तीनों में L, M के साथ है और तीसरा सदस्य अनुमत है।",
  },
  "rt-gs-p-07": {
    stem: "A, B, C, D, E और F में से तीन सदस्य चुने जाते हैं। शर्तें: A और B में से ठीक एक अवश्य चुना जाए; C और D दोनों नहीं चुने जा सकते; यदि E चुना जाए तो F भी चुना जाए। कितने चयन सम्भव हैं?",
    options: ["6", "8", "4", "9"],
    explanation: "A (बिना B) के साथ C, D, E, F में से दो: CD वर्जित, CE और DE में E बिना F के है, शेष CF, DF, EF = 3। B के साथ भी यही 3। योग 6।",
  },
  "rt-gs-p-08": {
    stem: "P, Q, R, S, T और U में से चार सदस्य चुने जाते हैं। शर्तें: यदि P चुना जाए तो Q चुना जाए; R और S दोनों नहीं चुने जा सकते; T और U में से कम से कम एक अवश्य चुना जाए; यदि Q चुना जाए तो T नहीं चुना जाए। यदि P चुना जाता है, तो कौन-से दो अवश्य चुने जाएँगे?",
    options: ["Q और T", "Q और U", "R और S", "T और U"],
    explanation: "P से Q आता है; Q के कारण T बाहर; तब T और U में से कम से कम एक के लिए U आवश्यक है। चौथा R या S (दोनों नहीं) होगा, अतः केवल Q और U निश्चित हैं।",
  },
  "rt-gs-p-09": {
    stem: "शिक्षकों A, B, C; प्रधानाचार्यों D, E; और अधिकारियों F, G, H में से 4 का पैनल चुना जाता है, प्रत्येक समूह से कम से कम एक। शर्तें: A और D दोनों नहीं चुने जा सकते; B तभी चुना जाएगा जब G चुना जाए; E और H या तो साथ चुने जाएँ या दोनों नहीं; C, F के साथ नहीं चुना जा सकता। कौन-सा पैनल मान्य है?",
    options: ["C, E, F, H", "B, E, G, C", "A, B, D, F", "A, E, H, F"],
    explanation: "विकल्प 1 में C और F साथ हैं। विकल्प 2 में E बिना H के है। विकल्प 3 में A और D साथ हैं (और B बिना G के)। A, E, H, F में एक शिक्षक, एक प्रधानाचार्य और दो अधिकारी हैं और कोई नियम नहीं टूटता।",
  },
  "rt-gs-p-10": {
    stem: "पुरुषों P, Q, R और महिलाओं X, Y, Z में से 4 का समूह बनाना है। समूह में कम से कम दो महिलाएँ होनी चाहिए, और P तथा X दोनों इसमें नहीं हो सकते। कितने भिन्न समूह सम्भव हैं?",
    options: ["6", "8", "7", "9"],
    explanation: "कम से कम दो महिलाओं वाले समूह: 2 महिलाएँ और 2 पुरुष = 3 × 3 = 9; 3 महिलाएँ और 1 पुरुष = 3; कुल 12। जिनमें P और X हैं: (X और Y, Z में से एक) × (P और Q, R में से एक) = 2 × 2 = 4, तथा X, Y, Z, P = 1। मान्य = 12 − 5 = 7।",
  },
  // ---------------------------------------------------- प्रतीक और संकेत
  "rt-sn-b-01": {
    stem: "यदि '+' का अर्थ '×', '−' का अर्थ '+', '×' का अर्थ '÷' और '÷' का अर्थ '−' हो, तो 8 + 3 − 12 × 4 ÷ 5 का मान ज्ञात कीजिए।",
    options: ["22", "20", "18", "24"],
    explanation: "पुनर्लेखन: 8 × 3 + 12 ÷ 4 − 5 = 24 + 3 − 5 = 22।",
  },
  "rt-sn-b-02": {
    stem: "यदि 'P' का अर्थ '+', 'Q' का अर्थ '−', 'R' का अर्थ '×' और 'S' का अर्थ '÷' हो, तो 18 S 3 R 4 P 6 Q 2 का मान ज्ञात कीजिए।",
    options: ["26", "28", "30", "24"],
    explanation: "पुनर्लेखन: 18 ÷ 3 × 4 + 6 − 2 = 6 × 4 + 6 − 2 = 24 + 6 − 2 = 28।",
  },
  "rt-sn-b-03": {
    stem: "यदि '×' का अर्थ '+', '+' का अर्थ '÷', '−' का अर्थ '×' और '÷' का अर्थ '−' हो, तो 36 + 4 × 5 − 3 ÷ 7 का मान ज्ञात कीजिए।",
    options: ["15", "19", "17", "13"],
    explanation: "पुनर्लेखन: 36 ÷ 4 + 5 × 3 − 7 = 9 + 15 − 7 = 17।",
  },
  "rt-sn-b-04": {
    stem: "यदि '+' का अर्थ '−', '−' का अर्थ '+', '×' का अर्थ '÷' और '÷' का अर्थ '×' हो, तो 40 × 8 − 6 ÷ 3 + 9 का मान ज्ञात कीजिए।",
    options: ["12", "16", "10", "14"],
    explanation: "पुनर्लेखन: 40 ÷ 8 + 6 × 3 − 9 = 5 + 18 − 9 = 14।",
  },
  "rt-sn-b-05": {
    stem: "समीकरण को सही बनाने के लिए किन दो चिह्नों को आपस में बदलना होगा? 12 ÷ 4 + 3 × 2 = 11",
    options: ["÷ और +", "+ और ×", "÷ और ×", "÷ और −"],
    explanation: "+ और × बदलने पर 12 ÷ 4 × 3 + 2 = 9 + 2 = 11। सही। अन्य से 12 + 4 ÷ 3 × 2 (पूर्णांक नहीं), 12 × 4 + 3 ÷ 2 = 49.5 और 12 − 4 + 3 × 2 = 14 मिलते हैं।",
  },
  "rt-sn-b-06": {
    stem: "यदि 'A' का अर्थ '÷', 'B' का अर्थ '×', 'C' का अर्थ '+' और 'D' का अर्थ '−' हो, तो 45 A 5 B 3 C 7 D 4 का मान ज्ञात कीजिए।",
    options: ["30", "28", "32", "26"],
    explanation: "पुनर्लेखन: 45 ÷ 5 × 3 + 7 − 4 = 9 × 3 + 7 − 4 = 27 + 3 = 30।",
  },
  "rt-sn-b-07": {
    stem: "यदि '×' का अर्थ '−', '−' का अर्थ '+', '+' का अर्थ '÷' और '÷' का अर्थ '×' हो, तो 15 − 3 ÷ 4 + 2 × 5 का मान ज्ञात कीजिए।",
    options: ["14", "18", "16", "20"],
    explanation: "पुनर्लेखन: 15 + 3 × 4 ÷ 2 − 5 = 15 + 6 − 5 = 16।",
  },
  "rt-sn-b-08": {
    stem: "यदि a ★ b = 2a + 3b हो, तो (2 ★ 3) ★ 1 का मान ज्ञात कीजिए।",
    options: ["27", "29", "31", "25"],
    explanation: "2 ★ 3 = 4 + 9 = 13। फिर 13 ★ 1 = 26 + 3 = 29।",
  },
  "rt-sn-b-09": {
    stem: "यदि '>' का अर्थ '+', '<' का अर्थ '−', '+' का अर्थ '÷' और '−' का अर्थ '×' हो, तो 24 + 6 > 5 − 3 < 7 का मान ज्ञात कीजिए।",
    options: ["10", "14", "16", "12"],
    explanation: "पुनर्लेखन: 24 ÷ 6 + 5 × 3 − 7 = 4 + 15 − 7 = 12।",
  },
  "rt-sn-b-10": {
    stem: "यदि 'P' का अर्थ '×', 'Q' का अर्थ '÷', 'R' का अर्थ '+' और 'T' का अर्थ '−' हो, तो 7 P 6 Q 3 T 4 R 10 का मान ज्ञात कीजिए।",
    options: ["18", "22", "16", "20"],
    explanation: "पुनर्लेखन: 7 × 6 ÷ 3 − 4 + 10 = 42 ÷ 3 − 4 + 10 = 14 − 4 + 10 = 20।",
  },
  "rt-sn-p-01": {
    stem: "यदि '+' का अर्थ '÷', '÷' का अर्थ '−', '−' का अर्थ '×' और '×' का अर्थ '+' हो, तो 48 + 6 × 9 − 4 ÷ 12 का मान ज्ञात कीजिए।",
    options: ["30", "32", "34", "28"],
    explanation: "पुनर्लेखन: 48 ÷ 6 + 9 × 4 − 12 = 8 + 36 − 12 = 32।",
  },
  "rt-sn-p-02": {
    stem: "यदि '+' और '−' चिह्नों को आपस में बदल दिया जाए और संख्याओं 4 और 8 को आपस में बदल दिया जाए, तो निम्नलिखित में से कौन-सा समीकरण सही हो जाएगा?",
    options: ["4 + 8 − 6 = 12", "8 − 4 + 2 = 2", "4 − 8 + 2 = 10", "4 − 8 + 10 = 16"],
    explanation: "दोनों परिवर्तन लागू करें। विकल्प 1: 8 − 4 + 6 = 10, 12 नहीं। विकल्प 2: 4 + 8 − 2 = 10, 2 नहीं। विकल्प 3: 8 + 4 − 2 = 10। सही। विकल्प 4: 8 + 4 − 10 = 2, 16 नहीं।",
  },
  "rt-sn-p-03": {
    stem: "यदि a @ b = (a + b) ÷ 2 और a $ b = a × b − b हो, तो (6 @ 10) $ 3 का मान ज्ञात कीजिए।",
    options: ["21", "24", "18", "27"],
    explanation: "6 @ 10 = 16 ÷ 2 = 8। फिर 8 $ 3 = 8 × 3 − 3 = 21।",
  },
  "rt-sn-p-04": {
    stem: "यदि 'L' का अर्थ '÷', 'M' का अर्थ '×', 'N' का अर्थ '+' और 'O' का अर्थ '−' हो, तो 72 L 8 M 5 O 9 N 3 L 3 का मान ज्ञात कीजिए।",
    options: ["35", "39", "37", "33"],
    explanation: "पुनर्लेखन: 72 ÷ 8 × 5 − 9 + 3 ÷ 3 = 9 × 5 − 9 + 1 = 45 − 9 + 1 = 37।",
  },
  "rt-sn-p-05": {
    stem: "समीकरण को सही बनाने के लिए किन दो चिह्नों को आपस में बदलना होगा? 16 ÷ 4 − 3 × 2 + 5 = 15",
    options: ["+ और −", "× और +", "÷ और ×", "− और ×"],
    explanation: "− और × बदलने पर 16 ÷ 4 × 3 − 2 + 5 = 12 − 2 + 5 = 15। सही। अन्य से 16 ÷ 4 + 3 × 2 − 5 = 5; 16 ÷ 4 − 3 + 2 × 5 = 11; 16 × 4 − 3 ÷ 2 + 5 = 67.5 मिलते हैं।",
  },
  "rt-sn-p-06": {
    stem: "यदि a ∆ b = a + b + ab हो, तो 3 ∆ x = 23 होने पर x ज्ञात कीजिए।",
    options: ["4", "5", "6", "7"],
    explanation: "3 + x + 3x = 23, अतः 4x = 20 और x = 5। जाँच: 3 + 5 + 15 = 23।",
  },
  "rt-sn-p-07": {
    stem: "यदि '+' का अर्थ '×', '×' का अर्थ '−', '−' का अर्थ '÷' और '÷' का अर्थ '+' हो, तो (15 − 3) + 4 × 6 ÷ 2 का मान ज्ञात कीजिए।",
    options: ["16", "14", "18", "12"],
    explanation: "पुनर्लेखन: (15 ÷ 3) × 4 − 6 + 2 = 5 × 4 − 6 + 2 = 20 − 6 + 2 = 16।",
  },
  "rt-sn-p-08": {
    stem: "यदि '÷' का अर्थ '+', '−' का अर्थ '÷', '×' का अर्थ '−' और '+' का अर्थ '×' हो, तो 18 ÷ 12 − 4 × 5 + 2 का मान ज्ञात कीजिए।",
    options: ["9", "13", "11", "15"],
    explanation: "पुनर्लेखन: 18 + 12 ÷ 4 − 5 × 2 = 18 + 3 − 10 = 11।",
  },
  "rt-sn-p-09": {
    stem: "मान लीजिए a ⊕ b = a² − b जब a > b, और a ⊕ b = a + b² जब a ≤ b। (5 ⊕ 3) ⊕ 4 का मान ज्ञात कीजिए।",
    options: ["470", "484", "488", "480"],
    explanation: "5 > 3, अतः 5 ⊕ 3 = 25 − 3 = 22। फिर 22 > 4, अतः 22 ⊕ 4 = 484 − 4 = 480।",
  },
  "rt-sn-p-10": {
    stem: "यदि 5 ◊ 3 = 34, 4 ◊ 2 = 20 और 3 ◊ 3 = 18 हो, तो 6 ◊ 1 = ____",
    options: ["37", "35", "36", "49"],
    explanation: "नियम a ◊ b = a² + b² है: 25 + 9 = 34, 16 + 4 = 20, 9 + 9 = 18। अतः 6 ◊ 1 = 36 + 1 = 37।",
  },
  // ---------------------------------------------------- वेन आरेख
  "rt-vd-b-01": {
    stem: "शिक्षक, महिलाएँ और डॉक्टर के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन वृत्त, प्रत्येक अन्य दोनों को आंशिक रूप से काटता है", "एक वृत्त दूसरे के अंदर, तीसरा अलग", "तीन वृत्त एक-दूसरे के अंदर", "दो परस्पर कटते वृत्त, तीसरा अलग"],
    explanation: "कुछ शिक्षक महिलाएँ हैं, कुछ डॉक्टर महिलाएँ हैं, और कुछ शिक्षक डॉक्टर हैं (कुछ तीनों भी)। कोई समूह दूसरे को पूरा नहीं समाता, अतः तीनों वृत्त एक-दूसरे को काटते हैं।",
  },
  "rt-vd-b-02": {
    stem: "भारत, उत्तर प्रदेश और लखनऊ के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन अलग-अलग वृत्त", "एक तीसरे वृत्त के अंदर दो अलग वृत्त", "तीन वृत्त एक-दूसरे के अंदर", "तीन वृत्त, प्रत्येक अन्य दोनों को आंशिक रूप से काटता है"],
    explanation: "लखनऊ पूरी तरह उत्तर प्रदेश में है, जो पूरी तरह भारत में है। अतः वृत्त एक के अंदर एक हैं: लखनऊ, उत्तर प्रदेश के अंदर, और वह भारत के अंदर।",
  },
  "rt-vd-b-03": {
    stem: "सब्ज़ियाँ, आलू और आम के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन वृत्त एक-दूसरे के अंदर", "एक वृत्त दूसरे के अंदर, तीसरा अलग", "एक तीसरे वृत्त के अंदर दो अलग वृत्त", "तीन अलग-अलग वृत्त"],
    explanation: "हर आलू सब्ज़ी है, अतः आलू का वृत्त सब्ज़ियों के अंदर है। आम एक फल है, न सब्ज़ी न आलू, अतः उसका वृत्त अलग है।",
  },
  "rt-vd-b-04": {
    stem: "पशु, गाय और कुत्ते के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन वृत्त एक-दूसरे के अंदर", "तीन अलग-अलग वृत्त", "तीन वृत्त, प्रत्येक अन्य दोनों को आंशिक रूप से काटता है", "एक तीसरे वृत्त के अंदर दो अलग वृत्त"],
    explanation: "गाय और कुत्ते दोनों पशु हैं, पर कोई गाय कुत्ता नहीं है। अतः दो न छूने वाले वृत्त (गाय, कुत्ता) बड़े वृत्त (पशु) के अंदर हैं।",
  },
  "rt-vd-b-05": {
    stem: "डॉक्टर, पुरुष और महिलाएँ के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["दो अलग वृत्त, जिन दोनों को एक तीसरा वृत्त आंशिक रूप से काटता है", "तीन अलग-अलग वृत्त", "तीन वृत्त एक-दूसरे के अंदर", "एक वृत्त दूसरे के अंदर, तीसरा अलग"],
    explanation: "पुरुष और महिलाएँ परस्पर नहीं कटते। कुछ डॉक्टर पुरुष हैं और कुछ महिलाएँ, अतः डॉक्टर का वृत्त दोनों अलग वृत्तों को काटता है।",
  },
  "rt-vd-b-06": {
    stem: "एक समूह में 30 लोगों को चाय, 25 को कॉफ़ी और 10 को दोनों पसन्द हैं। कितने लोगों को दोनों में से कम से कम एक पेय पसन्द है?",
    options: ["55", "45", "35", "40"],
    explanation: "n(चाय ∪ कॉफ़ी) = 30 + 25 − 10 = 45। दोनों पसन्द करने वाले 10 लोग 30 + 25 में दो बार गिने गए हैं, इसलिए एक बार घटाए जाते हैं।",
  },
  "rt-vd-b-07": {
    stem: "तीन वृत्त इस प्रकार बनाए गए हैं कि हर जोड़ा एक-दूसरे को काटता है और तीनों का एक साझा भाग भी है। कम से कम एक वृत्त के अंदर कितने अलग-अलग क्षेत्र हैं?",
    options: ["6", "7", "8", "9"],
    explanation: "क्षेत्र: 3 'केवल एक वृत्त' वाले भाग, 3 'ठीक दो वृत्त' वाले भाग और 1 'तीनों' वाला भाग = 7। (बाहरी क्षेत्र मिलाकर 8 होंगे।)",
  },
  "rt-vd-b-08": {
    stem: "पृथ्वी, चन्द्रमा और सूर्य के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["एक वृत्त दूसरे के अंदर, तीसरा अलग", "तीन वृत्त एक-दूसरे के अंदर", "तीन अलग-अलग वृत्त", "दो परस्पर कटते वृत्त, तीसरा अलग"],
    explanation: "ये तीन भिन्न पिंड हैं; कोई भी दूसरे का भाग या प्रकार नहीं है। अतः तीन अलग-अलग वृत्त।",
  },
  "rt-vd-b-09": {
    stem: "50 विद्यार्थियों की एक कक्षा में 28 हिन्दी पढ़ते हैं, 30 अंग्रेज़ी पढ़ते हैं और 5 दोनों में से कोई नहीं पढ़ते। कितने विद्यार्थी दोनों भाषाएँ पढ़ते हैं?",
    options: ["8", "10", "13", "15"],
    explanation: "कम से कम एक भाषा पढ़ने वाले = 50 − 5 = 45। दोनों = 28 + 30 − 45 = 13।",
  },
  "rt-vd-b-10": {
    stem: "फ़र्नीचर, कुर्सियाँ और लकड़ी की वस्तुएँ के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन अलग-अलग वृत्त", "तीन वृत्त एक-दूसरे के अंदर", "एक तीसरे वृत्त के अंदर दो अलग वृत्त", "एक वृत्त दूसरे के अंदर, और एक तीसरा वृत्त दोनों को आंशिक रूप से काटता है"],
    explanation: "सभी कुर्सियाँ फ़र्नीचर हैं (कुर्सियाँ, फ़र्नीचर के अंदर)। कुछ कुर्सियाँ और कुछ अन्य फ़र्नीचर लकड़ी के हैं, और कुछ लकड़ी की वस्तुएँ फ़र्नीचर नहीं हैं, अतः लकड़ी की वस्तुओं का वृत्त दोनों को काटता है।",
  },
  "rt-vd-p-01": {
    stem: "सर्वेक्षण किए गए 100 लोगों में से 50 समाचार-पत्र A, 40 B और 30 C पढ़ते हैं; 15 A और B, 10 B और C, 12 A और C पढ़ते हैं, और 5 तीनों पढ़ते हैं। कितने लोग तीनों में से कोई नहीं पढ़ते?",
    options: ["17", "8", "12", "15"],
    explanation: "n(A ∪ B ∪ C) = 50 + 40 + 30 − 15 − 10 − 12 + 5 = 88। कोई नहीं = 100 − 88 = 12।",
  },
  "rt-vd-p-02": {
    stem: "100 लोगों में से 50 A, 40 B और 30 C पढ़ते हैं; 15 A और B, 10 B और C, 12 A और C पढ़ते हैं, और 5 तीनों पढ़ते हैं। कितने लोग ठीक एक समाचार-पत्र पढ़ते हैं?",
    options: ["61", "56", "66", "71"],
    explanation: "केवल A = 50 − 15 − 12 + 5 = 28। केवल B = 40 − 15 − 10 + 5 = 20। केवल C = 30 − 10 − 12 + 5 = 13। ठीक एक = 28 + 20 + 13 = 61।",
  },
  "rt-vd-p-03": {
    stem: "60 लोगों के समूह में 35 क्रिकेट, 25 फ़ुटबॉल और 20 हॉकी खेलते हैं; 10 क्रिकेट और फ़ुटबॉल, 8 फ़ुटबॉल और हॉकी, 9 क्रिकेट और हॉकी खेलते हैं, और 4 तीनों खेलते हैं। कितने लोग ठीक दो खेल खेलते हैं?",
    options: ["27", "15", "23", "12"],
    explanation: "ठीक दो = (10 − 4) + (8 − 4) + (9 − 4) = 6 + 4 + 5 = 15।",
  },
  "rt-vd-p-04": {
    stem: "स्तनधारी, व्हेल और जलीय जीव के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन वृत्त एक-दूसरे के अंदर", "एक तीसरे वृत्त के अंदर दो अलग वृत्त", "दो परस्पर कटते वृत्त, और तीसरा वृत्त पूरी तरह उनके साझा भाग के अंदर", "तीन अलग-अलग वृत्त"],
    explanation: "स्तनधारी और जलीय जीव परस्पर कटते हैं (कुछ स्तनधारी जल में रहते हैं, कुछ जलीय जीव मछलियाँ हैं)। हर व्हेल स्तनधारी भी है और जलीय भी, अतः व्हेल का वृत्त पूरी तरह साझा भाग के अंदर है।",
  },
  "rt-vd-p-05": {
    stem: "पूर्णांक, सम संख्याएँ और अभाज्य संख्याएँ के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["एक तीसरे वृत्त के अंदर दो अलग वृत्त", "तीन वृत्त एक-दूसरे के अंदर", "एक वृत्त दूसरे के अंदर, तीसरा अलग", "दो परस्पर कटते वृत्त, दोनों एक तीसरे वृत्त के अंदर"],
    explanation: "सम संख्याएँ और अभाज्य संख्याएँ दोनों पूर्णांकों के समुच्चय हैं। इनमें ठीक एक संख्या, 2, साझा है, अतः ये पूर्णांक वृत्त के अंदर दो परस्पर कटते वृत्त हैं।",
  },
  "rt-vd-p-06": {
    stem: "40 विद्यार्थियों की कक्षा में 25 को गणित और 22 को विज्ञान पसन्द है। दोनों को पसन्द करने वाले विद्यार्थियों की न्यूनतम सम्भव संख्या क्या है?",
    options: ["3", "7", "15", "22"],
    explanation: "दोनों = 25 + 22 − (कम से कम एक पसन्द करने वाले)। यह सबसे कम तब होगा जब संघ सबसे बड़ा हो, अर्थात् 40। न्यूनतम दोनों = 47 − 40 = 7।",
  },
  "rt-vd-p-07": {
    stem: "एक आकृति में वृत्त शिक्षकों को, त्रिभुज स्नातकों को और वर्ग शहरी लोगों को दर्शाता है; तीनों एक-दूसरे को काटते हैं। त्रिभुज और वर्ग के अंदर परन्तु वृत्त के बाहर का क्षेत्र किसे दर्शाता है?",
    options: ["शहरी स्नातक जो शिक्षक हैं", "शहरी शिक्षक जो स्नातक नहीं हैं", "स्नातक जो न शहरी हैं न शिक्षक", "शहरी स्नातक जो शिक्षक नहीं हैं"],
    explanation: "त्रिभुज के अंदर = स्नातक; वर्ग के अंदर = शहरी; वृत्त के बाहर = शिक्षक नहीं। अतः: शहरी स्नातक जो शिक्षक नहीं हैं।",
  },
  "rt-vd-p-08": {
    stem: "50 लोगों के समूह में 30 चाय पीते हैं और 25 कॉफ़ी पीते हैं। दोनों में से कुछ भी न पीने वालों की अधिकतम सम्भव संख्या क्या है?",
    options: ["15", "20", "25", "5"],
    explanation: "'कोई नहीं' तब अधिकतम है जब संघ न्यूनतम हो। संघ कम से कम 30 (बड़ा समुच्चय) होगा, जो तब सम्भव है जब सभी 25 कॉफ़ी पीने वाले चाय भी पीते हों। अधिकतम 'कोई नहीं' = 50 − 30 = 20।",
  },
  "rt-vd-p-09": {
    stem: "समुच्चयों A, B और C में क्रमशः 40, 35 और 30 सदस्य हैं। कुल 70 लोग कम से कम एक समुच्चय में हैं, और 15 लोग ठीक दो समुच्चयों में हैं। कितने लोग तीनों में हैं?",
    options: ["5", "10", "15", "20"],
    explanation: "मान लें x₁, x₂, x₃ क्रमशः ठीक एक, दो और तीन समुच्चयों वाले लोग हैं। x₁ + x₂ + x₃ = 70 और x₁ + 2x₂ + 3x₃ = 40 + 35 + 30 = 105। घटाने पर: x₂ + 2x₃ = 35, अतः 15 + 2x₃ = 35 और x₃ = 10।",
  },
  "rt-vd-p-10": {
    stem: "विद्युत के चालक, धातुएँ और लोहा के बीच सम्बन्ध को कौन-सा आरेख सबसे अच्छी तरह दर्शाता है?",
    options: ["तीन वृत्त एक-दूसरे के अंदर", "एक तीसरे वृत्त के अंदर दो अलग वृत्त", "एक वृत्त दूसरे के अंदर, तीसरा अलग", "तीन वृत्त, प्रत्येक अन्य दोनों को आंशिक रूप से काटता है"],
    explanation: "लोहा एक धातु है, और सभी धातुएँ विद्युत का चालन करती हैं, जबकि कुछ चालक (जैसे ग्रेफ़ाइट) धातु नहीं हैं। अतः लोहा धातुओं के अंदर, और धातुएँ चालकों के अंदर।",
  },
  // ---------------------------------------------------- घन और पासा
  "rt-cd-b-01": {
    stem: "सभी फलकों पर रंगे एक घन को 27 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों के ठीक दो फलक रंगे हैं?",
    options: ["8", "12", "6", "24"],
    explanation: "यहाँ n = 3। दो रंगे फलक वाले घन किनारों पर होते हैं, कोनों को छोड़कर: 12 × (n − 2) = 12 × 1 = 12।",
  },
  "rt-cd-b-02": {
    stem: "सभी फलकों पर रंगे एक घन को 27 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों का कोई भी फलक रंगा नहीं है?",
    options: ["8", "6", "1", "0"],
    explanation: "बिना रंग वाले घन भीतरी भाग बनाते हैं: (n − 2)³ = 1³ = 1, केन्द्रीय घन।",
  },
  "rt-cd-b-03": {
    stem: "सभी फलकों पर रंगे एक घन को 64 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों का ठीक एक फलक रंगा है?",
    options: ["24", "16", "32", "8"],
    explanation: "यहाँ n = 4। एक रंगे फलक वाले घन प्रत्येक फलक के बीच के भाग हैं: 6 × (n − 2)² = 6 × 4 = 24।",
  },
  "rt-cd-b-04": {
    stem: "सभी फलकों पर रंगे एक घन को 64 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों के तीन फलक रंगे हैं?",
    options: ["4", "6", "12", "8"],
    explanation: "केवल कोने वाले घनों के तीन फलक रंगे होते हैं, और घन में सदा 8 कोने होते हैं, n चाहे जो हो।",
  },
  "rt-cd-b-05": {
    stem: "सभी फलकों पर रंगे एक घन को 125 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों का कोई भी फलक रंगा नहीं है?",
    options: ["36", "27", "64", "48"],
    explanation: "यहाँ n = 5। बिना रंग वाले घन = (n − 2)³ = 3³ = 27।",
  },
  "rt-cd-b-06": {
    stem: "एक ही पासे (फलकों पर 1 से 6) के दो दृश्य दिखते हैं। पहले दृश्य में दिखने वाले फलक 1, 2 और 3 हैं। दूसरे दृश्य में दिखने वाले फलक 1, 4 और 5 हैं। 1 के विपरीत कौन-सी संख्या है?",
    options: ["6", "4", "3", "2"],
    explanation: "प्रत्येक दृश्य में दिखने वाले तीनों फलक एक कोने पर मिलते हैं, अतः सभी 1 के आसन्न हैं। इस प्रकार 2, 3, 4 और 5 सभी 1 के आसन्न हैं। शेष फलक 6 ही 1 के विपरीत होगा।",
  },
  "rt-cd-b-07": {
    stem: "एक मानक पासे पर विपरीत फलकों की संख्याओं का योग 7 होता है। यदि ऊपरी फलक पर 3 है, तो निचले फलक पर कौन-सी संख्या है?",
    options: ["5", "2", "4", "6"],
    explanation: "ऊपरी और निचला फलक विपरीत हैं, अतः निचला = 7 − 3 = 4।",
  },
  "rt-cd-b-08": {
    stem: "सभी फलकों पर रंगे एक घन को 8 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों के ठीक तीन फलक रंगे हैं?",
    options: ["4", "6", "8", "0"],
    explanation: "n = 2 होने पर हर छोटा घन कोने का घन है, अतः सभी 8 के तीन फलक रंगे हैं।",
  },
  "rt-cd-b-09": {
    stem: "एक ही पासे (फलक 1 से 6) के दो दृश्य दिखते हैं। पहले दृश्य में दिखने वाले फलक 2, 3 और 4 हैं। दूसरे दृश्य में दिखने वाले फलक 2, 5 और 6 हैं। 2 के विपरीत कौन-सी संख्या है?",
    options: ["5", "6", "1", "3"],
    explanation: "फलक 3, 4, 5 और 6 सभी 2 के साथ दिखते हैं, अतः वे 2 के आसन्न हैं। शेष फलक 1 ही 2 के विपरीत होगा।",
  },
  "rt-cd-b-10": {
    stem: "4 सेमी भुजा वाले एक घन को सभी फलकों पर रंगकर 1 सेमी भुजा वाले घनों में काटा जाता है। कितने छोटे घनों का कम से कम एक फलक रंगा है?",
    options: ["48", "52", "60", "56"],
    explanation: "कुल छोटे घन = 4³ = 64। बिना रंग वाले (भीतरी) घन = (4 − 2)³ = 8। कम से कम एक फलक रंगा = 64 − 8 = 56।",
  },
  "rt-cd-p-01": {
    stem: "4 सेमी × 3 सेमी × 2 सेमी माप के एक घनाभ को सभी फलकों पर रंगकर 1 सेमी के घनों में काटा जाता है। कितने छोटे घनों का ठीक एक फलक रंगा है?",
    options: ["2", "4", "6", "8"],
    explanation: "ऊँचाई 2 होने से हर घन ऊपरी या निचली परत में है। प्रत्येक 4 × 3 परत में केवल भीतरी (4 − 2) × (3 − 2) = 2 घन एक ही रंगे फलक (ऊपर या नीचे) को छूते हैं। दो परतों से 4।",
  },
  "rt-cd-p-02": {
    stem: "एक घन के दो विपरीत फलक लाल, अन्य दो विपरीत फलक हरे और शेष दो नीले रंगे हैं। इसे 64 बराबर घनों में काटा जाता है। कितने छोटे घनों के ठीक दो फलक रंगे हैं, एक लाल और एक हरा?",
    options: ["16", "4", "8", "12"],
    explanation: "लाल और हरे फलक 4 किनारों पर मिलते हैं। प्रत्येक किनारे पर 4 छोटे घन हैं, जिनमें 2 सिरे वाले कोने हैं (उन पर नीला भी है)। अतः प्रति किनारा 2 × 4 किनारे = 8।",
  },
  "rt-cd-p-03": {
    stem: "एक रंगे घन को बराबर छोटे घनों में काटा जाता है, और उनमें से 125 का कोई फलक रंगा नहीं है। कितने छोटे घनों का ठीक एक फलक रंगा है?",
    options: ["125", "150", "100", "180"],
    explanation: "(n − 2)³ = 125 से n = 7। एक रंगे फलक वाले घन = 6 × (n − 2)² = 6 × 25 = 150।",
  },
  "rt-cd-p-04": {
    stem: "एक ही पासे (फलक 1 से 6) के तीन दृश्यों में ये फलक दिखते हैं: दृश्य 1: 1, 2, 3। दृश्य 2: 1, 5, 6। दृश्य 3: 2, 4, 5। 3 के विपरीत कौन-सी संख्या है?",
    options: ["4", "6", "5", "2"],
    explanation: "दृश्य 1 और 2 से, फलक 2, 3, 5, 6 सभी 1 को छूते हैं, अतः 4, 1 के विपरीत है। दृश्य 1 और 3 से, फलक 1, 3, 4, 5 सभी 2 को छूते हैं, अतः 6, 2 के विपरीत है। शेष जोड़ा 3 और 5 है।",
  },
  "rt-cd-p-05": {
    stem: "एक मानक पासा (विपरीत फलकों का योग 7) इस प्रकार रखा है कि ऊपर 3, आपकी ओर 1 और दाईं ओर 2 है। इसे एक बार दाईं ओर लुढ़काया जाता है, जिससे यह अब उस फलक पर टिका है जो पहले दाईं ओर था। अब ऊपर कौन-सी संख्या है?",
    options: ["2", "6", "4", "5"],
    explanation: "दाईं ओर लुढ़काने पर ऊपरी फलक दाईं ओर, दायाँ फलक नीचे, और बायाँ फलक ऊपर आ जाता है। बायाँ फलक दाएँ फलक 2 के विपरीत है, अतः वह 7 − 2 = 5 है।",
  },
  "rt-cd-p-06": {
    stem: "सभी फलकों पर रंगे एक घन को 216 बराबर छोटे घनों में काटा जाता है। कितने छोटे घनों के अधिकतम दो फलक रंगे हैं?",
    options: ["200", "208", "152", "96"],
    explanation: "केवल कोने वाले घनों के तीन फलक रंगे होते हैं, और वे 8 हैं। अतः अधिकतम दो फलक = 216 − 8 = 208।",
  },
  "rt-cd-p-07": {
    stem: "एक घन को सीधे समतल कटों द्वारा 27 एक जैसे छोटे घनों में काटना है। कटों के बीच टुकड़ों को फिर से व्यवस्थित करने की छूट हो, तब भी न्यूनतम कितने कट आवश्यक हैं?",
    options: ["6", "9", "8", "27"],
    explanation: "तीनों दिशाओं में दो-दो कट (2 × 3 = 6) पर्याप्त हैं। इससे कम असम्भव है: केन्द्रीय घन के छहों फलक नए कटे हुए होते हैं, और एक समतल कट किसी एक टुकड़े का अधिकतम एक फलक ही बना सकता है।",
  },
  "rt-cd-p-08": {
    stem: "लकड़ी के एक घन के केवल दो विपरीत फलक रंगे जाते हैं और फिर उसे 27 बराबर घनों में काटा जाता है। कितने छोटे घनों पर बिल्कुल रंग नहीं है?",
    options: ["18", "3", "9", "12"],
    explanation: "मान लें ऊपरी और निचला फलक रंगे हैं। ऊपरी परत के सभी 9 और निचली परत के सभी 9 घन रंग को छूते हैं। बीच की परत के 9 घनों पर कोई रंग नहीं है।",
  },
  "rt-cd-p-09": {
    stem: "एक घन के केवल दो आसन्न फलक रंगे जाते हैं और फिर उसे 64 बराबर घनों में काटा जाता है। कितने छोटे घनों पर बिल्कुल रंग नहीं है?",
    options: ["27", "32", "48", "36"],
    explanation: "मान लें सामने और बायाँ फलक रंगे हैं। कोई छोटा घन रंग से बचता है यदि वह सामने की परत में न हो (4 में से 3 विकल्प) और बाईं परत में न हो (4 में से 3 विकल्प), किसी भी ऊँचाई पर (4 विकल्प): 3 × 3 × 4 = 36।",
  },
  "rt-cd-p-10": {
    stem: "4 सेमी भुजा वाले एक घन को सभी फलकों पर रंगकर 1 सेमी के घनों में काटा जाता है। ठीक एक रंगे फलक वाले सभी छोटे घन हटा दिए जाते हैं। कितने छोटे घन बचते हैं?",
    options: ["48", "32", "40", "36"],
    explanation: "कुल = 64। एक रंगे फलक वाले घन = 6 × (4 − 2)² = 24। शेष = 64 − 24 = 40।",
  },
  // ---------------------------------------------------- कथन और निष्कर्ष
  "rt-si-b-01": {
    stem: "कथन: विद्यालय के सभी शिक्षकों ने प्रशिक्षण कार्यक्रम में भाग लिया। रवि विद्यालय का एक शिक्षक है। निष्कर्ष: I. रवि ने प्रशिक्षण कार्यक्रम में भाग लिया। II. प्रशिक्षण कार्यक्रम में भाग लेने वालों में से कुछ विद्यालय के शिक्षक हैं।",
    options: [...IC_OPTS_HI],
    explanation: "रवि 'सभी शिक्षकों' में से एक है, अतः उसने भाग लिया (I)। चूँकि विद्यालय के शिक्षक रवि ने भाग लिया, कुछ प्रतिभागी विद्यालय के शिक्षक हैं (II)। दोनों अनुसरण करते हैं।",
  },
  "rt-si-b-02": {
    stem: "कथन: परीक्षा में अनुत्तीर्ण होने वाले किसी भी विद्यार्थी को भ्रमण पर जाने की अनुमति नहीं दी गई। मीना को भ्रमण पर जाने की अनुमति दी गई। निष्कर्ष: I. मीना परीक्षा में अनुत्तीर्ण नहीं हुई। II. मीना विशेष योग्यता के साथ उत्तीर्ण हुई।",
    options: [...IC_OPTS_HI],
    explanation: "यदि मीना अनुत्तीर्ण होती, तो उसे अनुमति नहीं मिलती; उसे अनुमति मिली, अतः वह अनुत्तीर्ण नहीं हुई (I)। उसके अंकों के बारे में कुछ ज्ञात नहीं, अतः II अनुसरण नहीं करता।",
  },
  "rt-si-b-03": {
    stem: "कथन: कुछ पुस्तकें उपन्यास हैं। सभी उपन्यास रोचक हैं। निष्कर्ष: I. सभी रोचक चीज़ें उपन्यास हैं। II. कुछ पुस्तकें रोचक हैं।",
    options: [...IC_OPTS_HI],
    explanation: "जो पुस्तकें उपन्यास हैं वे रोचक हैं, अतः कुछ पुस्तकें रोचक हैं (II)। 'सभी उपन्यास रोचक हैं' को उलटकर 'सभी रोचक चीज़ें उपन्यास हैं' नहीं कहा जा सकता, अतः I नहीं।",
  },
  "rt-si-b-04": {
    stem: "कथन: केवल बी.एड. उपाधि धारक अभ्यर्थी ही इस पद के लिए आवेदन कर सकते हैं। अनिल ने इस पद के लिए आवेदन किया है। निष्कर्ष: I. सभी बी.एड. उपाधि धारकों ने इस पद के लिए आवेदन किया है। II. अनिल के पास बी.एड. उपाधि है।",
    options: [...IC_OPTS_HI],
    explanation: "'केवल बी.एड. धारक आवेदन कर सकते हैं' का अर्थ है हर आवेदक के पास बी.एड. है, अतः अनिल के पास भी है (II)। यह नहीं कहा गया कि हर बी.एड. धारक ने आवेदन किया, अतः I नहीं।",
  },
  "rt-si-b-05": {
    stem: "कथन: पार्किंग स्थल की सभी कारें सफ़ेद हैं। कुछ सफ़ेद चीज़ें महँगी हैं। निष्कर्ष: I. पार्किंग स्थल की कुछ कारें महँगी हैं। II. सभी सफ़ेद चीज़ें कारें हैं।",
    options: [...IC_OPTS_HI],
    explanation: "महँगी सफ़ेद चीज़ें पार्किंग की कारें हो भी सकती हैं और नहीं भी, अतः I निश्चित नहीं। 'सभी कारें सफ़ेद हैं' का अर्थ यह नहीं कि सभी सफ़ेद चीज़ें कारें हैं, अतः II नहीं। कोई भी अनुसरण नहीं करता।",
  },
  "rt-si-b-06": {
    stem: "कथन: यदि बारिश होती है, तो मैच रद्द हो जाएगा। मैच रद्द नहीं हुआ। निष्कर्ष: I. मैच समय पर खेला गया। II. बारिश नहीं हुई।",
    options: [...IC_OPTS_HI],
    explanation: "बारिश होने पर मैच रद्द होता; मैच रद्द नहीं हुआ, अतः बारिश नहीं हुई (II)। 'रद्द नहीं हुआ' का अर्थ 'समय पर' नहीं है; मैच देर से भी हो सकता था, अतः I नहीं।",
  },
  "rt-si-b-07": {
    stem: "कथन: राज्य सरकार ने सभी सरकारी प्राथमिक विद्यालयों के विद्यार्थियों को निःशुल्क पाठ्यपुस्तकें देने की घोषणा की है। अनुमान: I. सरकारी प्राथमिक विद्यालयों के विद्यार्थियों को पाठ्यपुस्तकें बिना भुगतान के मिलेंगी। II. निजी विद्यालयों के विद्यार्थियों को भी निःशुल्क पाठ्यपुस्तकें मिलेंगी।",
    options: [...IC_OPTS_HI],
    explanation: "I घोषणा को ही दोहराता है। योजना केवल सरकारी प्राथमिक विद्यालयों के लिए है, अतः II का कोई आधार नहीं।",
  },
  "rt-si-b-08": {
    stem: "कथन: प्रिया, राहुल से लम्बी है। राहुल, सोहन से लम्बा है। निष्कर्ष: I. प्रिया, सोहन से लम्बी है। II. तीनों में सोहन सबसे छोटा है।",
    options: [...IC_OPTS_HI],
    explanation: "लम्बाई में प्रिया > राहुल > सोहन। अतः प्रिया, सोहन से लम्बी है (I) और सोहन सबसे छोटा है (II)। दोनों अनुसरण करते हैं।",
  },
  "rt-si-b-09": {
    stem: "कथन: सभी वर्ग आयत हैं। कोई भी आयत वृत्त नहीं है। निष्कर्ष: I. कोई भी वर्ग वृत्त नहीं है। II. कुछ आयत वर्ग हैं।",
    options: [...IC_OPTS_HI],
    explanation: "वर्ग आयतों के अंदर हैं, और आयतों का वृत्तों से कुछ भी साझा नहीं, अतः कोई वर्ग वृत्त नहीं (I)। 'सभी वर्ग आयत हैं' का परिवर्तन 'कुछ आयत वर्ग हैं' है (II)। दोनों अनुसरण करते हैं।",
  },
  "rt-si-b-10": {
    stem: "कथन: कक्षा 8 के हर उस विद्यार्थी को पुरस्कार दिया गया जिसने 80 प्रतिशत से अधिक अंक प्राप्त किए। कक्षा 8 की विद्यार्थी किरन को पुरस्कार नहीं दिया गया। निष्कर्ष: I. किरन ने 80 प्रतिशत या उससे कम अंक प्राप्त किए। II. किरन परीक्षा में अनुत्तीर्ण हुई।",
    options: [...IC_OPTS_HI],
    explanation: "यदि किरन के 80 प्रतिशत से अधिक अंक होते, तो उसे पुरस्कार मिलता; नहीं मिला, अतः उसके अंक 80 प्रतिशत या कम हैं (I)। इसका अर्थ यह नहीं कि वह अनुत्तीर्ण हुई, अतः II नहीं।",
  },
  "rt-si-p-01": {
    stem: "कथन: कुछ शिक्षक कवि हैं। कुछ कवि चित्रकार हैं। निष्कर्ष: I. कुछ शिक्षक चित्रकार हैं। II. सभी कवि शिक्षक हैं।",
    options: [...IC_OPTS_HI],
    explanation: "दो 'कुछ' वाले कथनों से कोई निश्चित निष्कर्ष नहीं निकलता: शिक्षक-कवि और चित्रकार-कवि भिन्न हो सकते हैं, अतः I निश्चित नहीं। II 'कुछ शिक्षक कवि हैं' को 'सभी' में बदल देता है, जो अमान्य है। कोई भी अनुसरण नहीं करता।",
  },
  "rt-si-p-02": {
    stem: "कथन: सभी इंजीनियर स्नातक हैं। कुछ स्नातक बेरोज़गार हैं। निष्कर्ष: I. कुछ इंजीनियर बेरोज़गार हैं। II. कुछ बेरोज़गार व्यक्ति स्नातक हैं।",
    options: [...IC_OPTS_HI],
    explanation: "बेरोज़गार स्नातक सभी गैर-इंजीनियर भी हो सकते हैं, अतः I निश्चित नहीं। 'कुछ स्नातक बेरोज़गार हैं' का सीधा परिवर्तन 'कुछ बेरोज़गार व्यक्ति स्नातक हैं' है (II)। केवल II।",
  },
  "rt-si-p-03": {
    stem: "कथन: कोई भी A, B नहीं है। कुछ B, C हैं। निष्कर्ष: I. कुछ C, A नहीं हैं। II. कुछ A, C नहीं हैं।",
    options: [...IC_OPTS_HI],
    explanation: "जो C, B हैं वे A नहीं हो सकते (कोई A, B नहीं है), अतः कुछ C, A नहीं हैं (I)। A पूरी तरह C के अंदर (B के बाहर) भी हो सकता है, अतः II निश्चित नहीं। केवल I।",
  },
  "rt-si-p-04": {
    stem: "कथन: यदि मानसून अच्छा हो, तो कृषि उत्पादन बढ़ता है। यदि कृषि उत्पादन बढ़े, तो खाद्य कीमतें घटती हैं। इस वर्ष खाद्य कीमतें नहीं घटीं। निष्कर्ष: I. इस वर्ष कृषि उत्पादन नहीं बढ़ा। II. इस वर्ष मानसून अच्छा नहीं था।",
    options: [...IC_OPTS_HI],
    explanation: "कीमतें नहीं घटीं, अतः उत्पादन नहीं बढ़ा (अन्यथा कीमतें घटतीं): I। उत्पादन नहीं बढ़ा, अतः मानसून अच्छा नहीं था (अन्यथा उत्पादन बढ़ता): II। दोनों अनुसरण करते हैं।",
  },
  "rt-si-p-05": {
    stem: "कथन: बैठक की अध्यक्षता या तो प्रधानाचार्य करेंगे या उप-प्रधानाचार्य, दोनों नहीं। उप-प्रधानाचार्य अवकाश पर हैं और बैठक में उपस्थित नहीं होंगे। निष्कर्ष: I. प्रधानाचार्य बैठक की अध्यक्षता करेंगे। II. बैठक स्थगित कर दी जाएगी।",
    options: [...IC_OPTS_HI],
    explanation: "दोनों में से एक अध्यक्षता करेगा; उप-प्रधानाचार्य उस बैठक की अध्यक्षता नहीं कर सकते जिसमें वे उपस्थित ही नहीं, अतः प्रधानाचार्य करेंगे (I)। स्थगन का कोई संकेत नहीं, अतः II नहीं।",
  },
  "rt-si-p-06": {
    stem: "कथन: साक्षात्कार में उत्तीर्ण सभी लोगों का चयन हुआ। चयनित लोगों में से कुछ महिलाएँ हैं। निष्कर्ष: I. कुछ महिलाएँ साक्षात्कार में उत्तीर्ण हुईं। II. चयनित लोगों में से कुछ साक्षात्कार में उत्तीर्ण हुए।",
    options: [...IC_OPTS_HI],
    explanation: "चयनित महिलाओं का चयन साक्षात्कार उत्तीर्ण किए बिना भी हो सकता है, अतः I निश्चित नहीं। उत्तीर्ण सभी चयनित हैं, अतः कुछ चयनित व्यक्ति उत्तीर्ण हुए (II)। केवल II।",
  },
  "rt-si-p-07": {
    stem: "कथन (एक विज्ञापन): \"जैव-निम्नीकरणीय थैलों का प्रयोग करें और प्लास्टिक प्रदूषण कम करने में सहायता करें।\" पूर्वधारणाएँ: I. जैव-निम्नीकरणीय थैले सामान्य प्लास्टिक थैलों की तुलना में कम प्लास्टिक प्रदूषण करते हैं। II. लोग विज्ञापन पढ़ते हैं और उन पर अमल कर सकते हैं। कौन-सी पूर्वधारणा निहित है?",
    options: ["केवल I निहित है", "केवल II निहित है", "I और II दोनों निहित हैं", "न तो I और न ही II निहित है"],
    explanation: "यह सलाह तभी सार्थक है जब ऐसे थैले प्लास्टिक प्रदूषण कम करते हों (I)। हर विज्ञापन यह मानकर चलता है कि लोग उसे पढ़ेंगे और उस पर अमल कर सकते हैं (II)। दोनों निहित हैं।",
  },
  "rt-si-p-08": {
    stem: "कथन: केवल स्नातक ही अधिकारी बन सकते हैं। कुछ लिपिक स्नातक हैं। निष्कर्ष: I. कुछ लिपिक अधिकारी बन सकते हैं। II. सभी अधिकारी स्नातक हैं।",
    options: [...IC_OPTS_HI],
    explanation: "'केवल स्नातक ही अधिकारी बन सकते हैं' का अर्थ है हर अधिकारी स्नातक है (II)। स्नातक होना आवश्यक है, पर्याप्त नहीं, अतः यह सिद्ध नहीं कि स्नातक लिपिक अधिकारी बन सकते हैं। केवल II।",
  },
  "rt-si-p-09": {
    stem: "कथन: सभी कक्षाओं में उपस्थित रहने वाला कोई भी विद्यार्थी अनुत्तीर्ण नहीं हुआ। अनुत्तीर्ण होने वाले कुछ विद्यार्थियों को अतिरिक्त कोचिंग दी गई। निष्कर्ष: I. अतिरिक्त कोचिंग पाने वाले कुछ विद्यार्थी सभी कक्षाओं में उपस्थित नहीं रहे। II. सभी कक्षाओं में उपस्थित रहने वाले सभी विद्यार्थियों को अतिरिक्त कोचिंग दी गई।",
    options: [...IC_OPTS_HI],
    explanation: "कोचिंग पाने वाले अनुत्तीर्ण विद्यार्थी निश्चित रूप से सभी कक्षाओं में उपस्थित नहीं रहे थे, अतः I अनुसरण करता है। पूर्ण उपस्थिति और कोचिंग के बीच कोई सम्बन्ध नहीं बताया गया, अतः II नहीं। केवल I।",
  },
  "rt-si-p-10": {
    stem: "कथन: समिति का हर सदस्य या तो शिक्षक है या अभिभावक। समिति का कोई भी शिक्षक अभिभावक नहीं है। सुनील समिति का सदस्य है और अभिभावक नहीं है। निष्कर्ष: I. सुनील शिक्षक है। II. समिति के कुछ सदस्य अभिभावक नहीं हैं।",
    options: [...IC_OPTS_HI],
    explanation: "सुनील शिक्षक या अभिभावक होना चाहिए; वह अभिभावक नहीं है, अतः शिक्षक है (I)। सुनील स्वयं ऐसा सदस्य है जो अभिभावक नहीं है, अतः II अनुसरण करता है। दोनों अनुसरण करते हैं।",
  },
};
