/**
 * Reasoning, Verbal (topic: "Verbal reasoning").
 *
 * section: "reasoning". Shared across both UPESSC exam levels.
 * Series, coding-decoding, blood relations, direction sense, analogy, classification.
 *   • beginner, straightforward patterns.
 *   • proficient, multi-step series, tricky relations/directions.
 *
 * Every answer carries the reasoning. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const verbalReasoningBank: Question[] = [
  // ==================================================== Series, BEGINNER
  {
    id: "rv-b-01", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 2, 6, 12, 20, 30, ?",
    options: ["42", "40", "36", "44"], correct: 0,
    explanation: "The differences increase by 2 each time: +4, +6, +8, +10, then +12. So 30 + 12 = 42.",
  },
  {
    id: "rv-b-02", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 1, 1, 2, 3, 5, 8, ?",
    options: ["13", "11", "12", "16"], correct: 0,
    explanation: "This is the Fibonacci series: each term is the sum of the previous two. 5 + 8 = 13.",
  },
  {
    id: "rv-b-03", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 3, 6, 9, 12, ?",
    options: ["15", "14", "18", "16"], correct: 0,
    explanation: "This is the table of 3 (add 3 each time): 12 + 3 = 15.",
  },
  {
    id: "rv-b-04", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 2, 4, 8, 16, ?",
    options: ["32", "24", "20", "18"], correct: 0,
    explanation: "Each term is double the previous one: 16 × 2 = 32.",
  },
  {
    id: "rv-b-05", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 1, 4, 9, 16, ?",
    options: ["25", "20", "24", "36"], correct: 0,
    explanation: "These are perfect squares: 1², 2², 3², 4², so the next is 5² = 25.",
  },
  {
    id: "rv-b-06", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the next term: 1, 8, 27, 64, ?",
    options: ["125", "100", "81", "216"], correct: 0,
    explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, so the next is 5³ = 125.",
  },
  {
    id: "rv-b-07", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Find the next term: 5, 10, 15, 20, ?",
    options: ["25", "30", "22", "24"], correct: 0,
    explanation: "This is the table of 5 (add 5 each time): 20 + 5 = 25.",
  },
  {
    id: "rv-b-08", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Complete the series: AZ, BY, CX, ?",
    options: ["DW", "DV", "EW", "DX"], correct: 0,
    explanation: "The first letter goes forward A→B→C→D; the second goes backward Z→Y→X→W. So DW.",
  },
  {
    id: "rv-b-09", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Which letter comes next: A, C, E, G, ?",
    options: ["I", "H", "J", "F"], correct: 0,
    explanation: "Skip one letter each time (A, _, C, _, E, _, G, _), so the next is I.",
  },
  {
    id: "rv-b-10", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Which letter comes next: Z, Y, X, ?",
    options: ["W", "V", "U", "A"], correct: 0,
    explanation: "The reverse alphabet: Z, Y, X, W.",
  },
  {
    id: "rv-b-11", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the missing term: 7, 14, 28, 56, ?",
    options: ["112", "84", "98", "110"], correct: 0,
    explanation: "Each term is double the previous: 56 × 2 = 112.",
  },
  {
    id: "rv-b-12", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the next term: 100, 90, 80, 70, ?",
    options: ["60", "65", "50", "75"], correct: 0,
    explanation: "Subtract 10 each time: 70 − 10 = 60.",
  },
  {
    id: "rv-b-13", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the next term: 2, 5, 10, 17, ?",
    options: ["26", "24", "25", "28"], correct: 0,
    explanation: "The differences increase by 2: +3, +5, +7, then +9. So 17 + 9 = 26. (These are also n² + 1.)",
  },
  {
    id: "rv-b-14", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the odd number series term: 1, 3, 5, 7, ?",
    options: ["9", "8", "11", "10"], correct: 0,
    explanation: "These are consecutive odd numbers; the next is 9.",
  },

  // ==================================================== Coding-Decoding, BEGINNER
  {
    id: "rv-b-15", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If MADRAS is coded as NBESBT, then BOMBAY is coded as ____",
    options: ["CPNCBZ", "CPNBBZ", "CQNCBZ", "CPMCBZ"], correct: 0,
    explanation: "Each letter is shifted +1: B→C, O→P, M→N, B→C, A→B, Y→Z → CPNCBZ.",
  },
  {
    id: "rv-b-16", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If A = 1, B = 2, C = 3 …, the sum of the letters in 'CAT' is ____",
    options: ["24", "27", "20", "21"], correct: 0,
    explanation: "C(3) + A(1) + T(20) = 24.",
  },
  {
    id: "rv-b-17", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If CAT is coded as DBU, then DOG is coded as ____",
    options: ["EPH", "EPG", "DPH", "FPH"], correct: 0,
    explanation: "Each letter is shifted +1: D→E, O→P, G→H → EPH.",
  },
  {
    id: "rv-b-18", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "In a code, words are written by reversing their letters. In this code, 'PENCIL' is written as ____",
    options: ["LICNEP", "LICENP", "PENCIL", "LICNPE"], correct: 0,
    explanation: "Reverse the letters of P-E-N-C-I-L to get L-I-C-N-E-P.",
  },
  {
    id: "rv-b-18b", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "In a code, letters of 'PEN' are reversed. It becomes ____",
    options: ["NEP", "PNE", "ENP", "NPE"], correct: 0,
    explanation: "Reversing P-E-N gives N-E-P.",
  },
  {
    id: "rv-b-19", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If SUN is coded as TVO (each letter +1), then MOON is coded as ____",
    options: ["NPPO", "NPPN", "MPPO", "NPON"], correct: 0,
    explanation: "Shift each letter +1: M→N, O→P, O→P, N→O → NPPO.",
  },
  {
    id: "rv-b-20", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If the code for 'BAD' is 'YZW' (each letter replaced by its opposite in the alphabet), then 'CAB' is ____",
    options: ["XZY", "XYZ", "YZX", "ZYX"], correct: 0,
    explanation: "Opposite letters (A↔Z, B↔Y, C↔X …): C→X, A→Z, B→Y → XZY.",
  },
  {
    id: "rv-b-21", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If 'DELHI' is written as 'EDMIJ' by shifting each letter +1, which is the correct code for 'DELHI'?",
    options: ["EFMIJ", "EDMIJ", "CDKGH", "EFMHJ"], correct: 0,
    explanation: "Shift each letter +1: D→E, E→F, L→M, H→I, I→J → EFMIJ.",
  },
  {
    id: "rv-b-22", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If 'FISH' = 'GJTI' (each letter +1), then 'BIRD' = ____",
    options: ["CJSE", "CJSD", "CKSE", "CJTE"], correct: 0,
    explanation: "Shift each letter +1: B→C, I→J, R→S, D→E → CJSE.",
  },

  // ==================================================== Blood relations, BEGINNER
  {
    id: "rv-b-23", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Pointing to a girl, Rahul said, 'She is the daughter of my grandfather's only son.' How is the girl related to Rahul?",
    options: ["Sister", "Cousin", "Aunt", "Mother"], correct: 0,
    explanation: "Grandfather's only son is Rahul's father; his daughter is Rahul's sister.",
  },
  {
    id: "rv-b-24", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "A is the father of B. How is B's son related to A?",
    options: ["Grandson", "Son", "Brother", "Nephew"], correct: 0,
    explanation: "B is A's child, so B's son is A's grandson.",
  },
  {
    id: "rv-b-25", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "My father's sister is my ____",
    options: ["aunt", "mother", "cousin", "grandmother"], correct: 0,
    explanation: "The sister of one's father is one's aunt (bua/paternal aunt).",
  },
  {
    id: "rv-b-26", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "My mother's brother is my ____",
    options: ["uncle (maternal)", "father", "grandfather", "cousin"], correct: 0,
    explanation: "The brother of one's mother is one's maternal uncle (mama).",
  },
  {
    id: "rv-b-27", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Ram's father is Shyam's son. How is Ram related to Shyam?",
    options: ["Grandson", "Son", "Brother", "Father"], correct: 0,
    explanation: "Shyam's son is Ram's father, so Ram is Shyam's grandson.",
  },
  {
    id: "rv-b-28", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "My son's wife is my ____",
    options: ["daughter-in-law", "daughter", "sister", "niece"], correct: 0,
    explanation: "The wife of one's son is one's daughter-in-law.",
  },
  {
    id: "rv-b-29", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "The son of my father's father is my ____",
    options: ["father or uncle", "brother", "grandfather", "son"], correct: 0,
    explanation: "Father's father is the grandfather; his son is either the person's father or an uncle.",
  },
  {
    id: "rv-b-30", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If P is the brother of Q and Q is the mother of R, then P is R's ____",
    options: ["uncle (maternal)", "father", "brother", "grandfather"], correct: 0,
    explanation: "Q is R's mother, and P is Q's brother, so P is R's maternal uncle.",
  },

  // ==================================================== Direction sense, BEGINNER
  {
    id: "rv-b-31", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "A man walks 5 km North, turns right and walks 3 km, then turns right and walks 5 km. How far is he from the start?",
    options: ["3 km", "5 km", "8 km", "13 km"], correct: 0,
    explanation: "The two 5 km legs (North then South) cancel out; only the 3 km East leg remains, so he is 3 km from the start.",
  },
  {
    id: "rv-b-32", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If you face North and turn 90° clockwise, you now face ____",
    options: ["East", "West", "South", "North"], correct: 0,
    explanation: "Turning 90° clockwise from North takes you to East.",
  },
  {
    id: "rv-b-33", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If you face South and turn left, you face ____",
    options: ["East", "West", "North", "South"], correct: 0,
    explanation: "Turning left (anti-clockwise) from South takes you to East.",
  },
  {
    id: "rv-b-34", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "A man walks 4 km East, then 3 km North. His straight-line distance from the start is ____",
    options: ["5 km", "7 km", "1 km", "12 km"], correct: 0,
    explanation: "By Pythagoras: √(4² + 3²) = √(16 + 9) = √25 = 5 km.",
  },
  {
    id: "rv-b-35", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "The sun rises in the East. In the morning, if your shadow falls to your left, you are facing ____",
    options: ["North", "South", "East", "West"], correct: 0,
    explanation: "In the morning the sun is in the East, so shadows fall West. If the shadow is to your left, West is on your left, meaning you face North.",
  },
  {
    id: "rv-b-36", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "If North becomes East (the whole compass rotates), then South-West becomes ____",
    options: ["North-West", "South-East", "North-East", "South-West"], correct: 0,
    explanation: "The compass has rotated 90° clockwise. Rotating South-West by 90° clockwise gives North-West.",
  },
  {
    id: "rv-b-37", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Facing West, you turn 180°. You now face ____",
    options: ["East", "North", "South", "West"], correct: 0,
    explanation: "A 180° turn reverses your direction, so from West you now face East.",
  },

  // ==================================================== Analogy & Classification, BEGINNER
  {
    id: "rv-b-38", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Hand : Glove :: Foot : ?",
    options: ["Sock", "Shoe-lace", "Toe", "Leg"], correct: 0,
    explanation: "A glove is worn on the hand; a sock is worn on the foot.",
  },
  {
    id: "rv-b-39", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Day : Night :: Light : ?",
    options: ["Darkness", "Sun", "Lamp", "Bright"], correct: 0,
    explanation: "Day and Night are opposites; the opposite of Light is Darkness.",
  },
  {
    id: "rv-b-40", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Pen : Write :: Knife : ?",
    options: ["Cut", "Sharp", "Blade", "Kitchen"], correct: 0,
    explanation: "A pen is used to write; a knife is used to cut.",
  },
  {
    id: "rv-b-41", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Bird : Nest :: Bee : ?",
    options: ["Hive", "Honey", "Flower", "Sting"], correct: 0,
    explanation: "A bird lives in a nest; a bee lives in a hive.",
  },
  {
    id: "rv-b-42", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Which is the odd one out? 3, 5, 7, 9, 11",
    options: ["9", "3", "7", "11"], correct: 0,
    explanation: "3, 5, 7 and 11 are prime numbers; 9 (= 3 × 3) is composite, so it is the odd one out.",
  },
  {
    id: "rv-b-43", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Which is the odd one out? Dog, Cat, Cow, Rose",
    options: ["Rose", "Dog", "Cat", "Cow"], correct: 0,
    explanation: "Rose is a flower; the others are all animals.",
  },
  {
    id: "rv-b-44", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "easy",
    stem: "Teacher : School :: Doctor : ?",
    options: ["Hospital", "Medicine", "Patient", "Nurse"], correct: 0,
    explanation: "A teacher works in a school; a doctor works in a hospital.",
  },
  {
    id: "rv-b-45", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Which is the odd one out? Apple, Mango, Banana, Potato",
    options: ["Potato", "Apple", "Mango", "Banana"], correct: 0,
    explanation: "Potato is a vegetable; the others are fruits.",
  },
  {
    id: "rv-b-46", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Fish : Water :: Camel : ?",
    options: ["Desert", "Sand", "Hump", "Animal"], correct: 0,
    explanation: "A fish lives in water; a camel lives in the desert.",
  },
  {
    id: "rv-b-47", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Which is the odd one out? Delhi, Mumbai, Chennai, India",
    options: ["India", "Delhi", "Mumbai", "Chennai"], correct: 0,
    explanation: "India is a country; the others are cities.",
  },
  {
    id: "rv-b-48", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Cow : Calf :: Dog : ?",
    options: ["Puppy", "Kitten", "Cub", "Foal"], correct: 0,
    explanation: "A young cow is a calf; a young dog is a puppy.",
  },
  {
    id: "rv-b-49", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Which is the odd one out? Triangle, Square, Circle, Rectangle",
    options: ["Circle", "Triangle", "Square", "Rectangle"], correct: 0,
    explanation: "A circle has no straight sides/corners; the others are polygons with straight sides.",
  },
  {
    id: "rv-b-50", section: "reasoning", topic: "Verbal reasoning", level: "beginner", difficulty: "medium",
    stem: "Author : Book :: Composer : ?",
    options: ["Music", "Song", "Poem", "Painting"], correct: 0,
    explanation: "An author creates a book; a composer creates music.",
  },

  // ==================================================== Series, PROFICIENT
  {
    id: "rv-p-01", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 3, 7, 15, 31, ?",
    options: ["63", "62", "47", "61"], correct: 0,
    explanation: "Each term = previous × 2 + 1: 3×2+1 = 7, 7×2+1 = 15, 15×2+1 = 31, 31×2+1 = 63.",
  },
  {
    id: "rv-p-02", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 2, 3, 5, 7, 11, 13, ?",
    options: ["17", "15", "19", "14"], correct: 0,
    explanation: "These are consecutive prime numbers; the prime after 13 is 17.",
  },
  {
    id: "rv-p-03", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 1, 2, 6, 24, 120, ?",
    options: ["720", "600", "240", "360"], correct: 0,
    explanation: "Each term = previous × (its position): ×2, ×3, ×4, ×5, then ×6 → 120 × 6 = 720 (these are factorials).",
  },
  {
    id: "rv-p-04", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 1, 3, 6, 10, 15, ?",
    options: ["21", "20", "18", "25"], correct: 0,
    explanation: "The differences increase by 1: +2, +3, +4, +5, then +6. So 15 + 6 = 21 (these are triangular numbers).",
  },
  {
    id: "rv-p-05", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 5, 11, 23, 47, ?",
    options: ["95", "94", "71", "96"], correct: 0,
    explanation: "Each term = previous × 2 + 1: 5×2+1 = 11, 11×2+1 = 23, 23×2+1 = 47, 47×2+1 = 95.",
  },
  {
    id: "rv-p-06", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 6, 11, 21, 36, 56, ?",
    options: ["81", "76", "80", "72"], correct: 0,
    explanation: "The differences increase by 5: +5, +10, +15, +20, then +25. So 56 + 25 = 81.",
  },
  {
    id: "rv-p-07", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 2, 6, 18, 54, ?",
    options: ["162", "108", "150", "216"], correct: 0,
    explanation: "Each term is multiplied by 3: 54 × 3 = 162.",
  },
  {
    id: "rv-p-08", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Complete the letter series: B, D, F, H, ?",
    options: ["J", "I", "K", "G"], correct: 0,
    explanation: "Skip one letter each time (every alternate letter): B, D, F, H, J.",
  },
  {
    id: "rv-p-09", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 120, 99, 80, 63, 48, ?",
    options: ["35", "36", "33", "40"], correct: 0,
    explanation: "The differences decrease by 2: −21, −19, −17, −15, then −13. So 48 − 13 = 35.",
  },
  {
    id: "rv-p-10", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the odd one out: 8, 27, 64, 100, 125",
    options: ["100", "8", "27", "64"], correct: 0,
    explanation: "8, 27, 64 and 125 are perfect cubes (2³, 3³, 4³, 5³). 100 is a perfect square, not a cube, the odd one.",
  },
  {
    id: "rv-p-11", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the missing term: 4, 9, 16, 25, ?, 49",
    options: ["36", "30", "40", "35"], correct: 0,
    explanation: "These are consecutive squares from 2²: 4, 9, 16, 25, 36, 49. The missing term is 6² = 36.",
  },
  {
    id: "rv-p-12", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 1, 4, 27, 256, ?",
    options: ["3125", "625", "1024", "2500"], correct: 0,
    explanation: "Terms are nⁿ: 1¹, 2², 3³, 4⁴, so the next is 5⁵ = 3125.",
  },
  {
    id: "rv-p-13", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the next term: 7, 14, 28, 56, 112, ?",
    options: ["224", "168", "220", "196"], correct: 0,
    explanation: "Each term doubles: 112 × 2 = 224.",
  },
  {
    id: "rv-p-14", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the odd one out: 2, 3, 6, 7, 8, 14, 15, 30",
    options: ["7", "6", "8", "15"], correct: 0,
    explanation: "The pattern alternates +1 and ×2: 2→3 (+1), 3→6 (×2), 6→7 (+1), 7→14 (×2), 14→15 (+1), 15→30 (×2). The value 8 does not fit this chain, so 8 is the odd one out.",
  },

  // ==================================================== Coding-Decoding, PROFICIENT
  {
    id: "rv-p-15", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If 'TEACHER' is coded as 'VGCEJGT' (each letter +2), then 'STUDENT' is coded as ____",
    options: ["UVWFGPV", "UVWFGVP", "UVWFGPU", "UVXFGPV"], correct: 0,
    explanation: "Shift each letter +2: S→U, T→V, U→W, D→F, E→G, N→P, T→V → UVWFGPV.",
  },
  {
    id: "rv-p-16", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "In a certain code, 'CAB' = 6 (3+1+2). By the same rule (A=1, B=2 …), 'FED' = ?",
    options: ["15", "12", "18", "14"], correct: 0,
    explanation: "F(6) + E(5) + D(4) = 15.",
  },
  {
    id: "rv-p-17", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If 'ROSE' is coded by replacing each letter with the one opposite in the alphabet (A↔Z …), it becomes ____",
    options: ["ILHV", "ILVH", "IHLV", "JLHV"], correct: 0,
    explanation: "Opposites: R(18)→I(9), O(15)→L(12), S(19)→H(8), E(5)→V(22) → ILHV. (Each letter n → 27 − n.)",
  },
  {
    id: "rv-p-18", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If in a code 'MOUSE' is written as 'PRXVH' (each letter +3), then 'HORSE' is ____",
    options: ["KRUVH", "KRUUH", "KRXVH", "KSUVH"], correct: 0,
    explanation: "Shift each letter +3: H→K, O→R, R→U, S→V, E→H → KRUVH.",
  },
  {
    id: "rv-p-19", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If (A = 1, B = 2 …) a word is coded as the product of its letter-positions, and 'AD' = 1 × 4 = 4, then 'BC' = ?",
    options: ["6", "5", "23", "8"], correct: 0,
    explanation: "Product of letter-positions: B(2) × C(3) = 6.",
  },
  {
    id: "rv-p-20", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If 'LAMP' is coded as 'MBNQ' (each letter +1), which word is coded as 'TBU'?",
    options: ["SAT", "RAT", "TAS", "SBT"], correct: 0,
    explanation: "Decode by shifting −1: T→S, B→A, U→T → SAT.",
  },
  {
    id: "rv-p-21", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If 'BOOK' is coded as 'CPPL' (each letter +1), then 'DESK' is ____",
    options: ["EFTL", "EFTM", "EGTL", "EFSL"], correct: 0,
    explanation: "Shift each letter +1: D→E, E→F, S→T, K→L → EFTL.",
  },
  {
    id: "rv-p-22", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If '256' means 'you are good', '78 3' means 'good and bad' and '5 3 78' means 'you and bad'... which digit means 'you'?",
    options: ["5", "2", "3", "78"], correct: 0,
    explanation: "'256' and '5 3 78' both contain 'you' and share the digit 5; the common word between them is 'you', so 5 = 'you'.",
  },

  // ==================================================== Blood relations, PROFICIENT
  {
    id: "rv-p-23", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Mother", "Sister", "Aunt", "Grandmother"], correct: 0,
    explanation: "The only daughter of the woman's mother is the woman herself; so she is the man's mother.",
  },
  {
    id: "rv-p-24", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "A is B's brother, C is A's mother, D is C's father, E is D's mother. How is A related to D?",
    options: ["Grandson", "Son", "Grandfather", "Nephew"], correct: 0,
    explanation: "C is A's mother and D is C's father, so D is A's grandfather; hence A is D's grandson.",
  },
  {
    id: "rv-p-25", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If X is the son of Y, and Y is the sister of Z, then Z is X's ____",
    options: ["maternal aunt/uncle", "father", "brother", "grandmother"], correct: 0,
    explanation: "Y is X's mother (parent). Z is Y's sibling, so Z is X's maternal aunt or uncle.",
  },
  {
    id: "rv-p-26", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Pointing to a photograph, a man said, 'She is the daughter of my grandfather's only son.' How is the girl related to the man?",
    options: ["Sister", "Daughter", "Niece", "Cousin"], correct: 0,
    explanation: "Grandfather's only son is the man's father; his daughter is the man's sister.",
  },
  {
    id: "rv-p-27", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "P is the mother of Q; Q is the sister of R; R is the son of S. How is S related to P?",
    options: ["Husband", "Brother", "Son", "Father"], correct: 0,
    explanation: "R is the son of both P (through Q's mother P) and S, so P and S are the parents of R; P is the mother, so S is the father/husband of P.",
  },
  {
    id: "rv-p-28", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
    options: ["Cousin", "Brother", "Uncle", "Nephew"], correct: 0,
    explanation: "The brother of her mother is her maternal uncle; his son is her cousin.",
  },
  {
    id: "rv-p-29", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If A + B means A is the father of B, and A − B means A is the mother of B, then in 'P + Q − R', how is R related to P?",
    options: ["Grandchild", "Child", "Father", "Brother"], correct: 0,
    explanation: "P + Q → P is father of Q; Q − R → Q is mother of R. So R is P's grandchild.",
  },
  {
    id: "rv-p-30", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Ravi said, 'This girl is the wife of the grandson of my mother.' How is Ravi related to the girl?",
    options: ["Father-in-law", "Grandfather", "Father", "Husband"], correct: 0,
    explanation: "The grandson of Ravi's mother is Ravi's son (assuming Ravi is that grandson's father). The girl is that son's wife, so Ravi is her father-in-law.",
  },

  // ==================================================== Direction sense, PROFICIENT
  {
    id: "rv-p-31", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "A man walks 10 m South, turns left and walks 10 m, turns left and walks 10 m. Which direction is he now facing?",
    options: ["North", "South", "East", "West"], correct: 0,
    explanation: "Facing South; turn left → East; walk; turn left → North. He now faces North.",
  },
  {
    id: "rv-p-32", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "A person goes 3 km North, 4 km East, 3 km South. How far and in which direction is he from the start?",
    options: ["4 km East", "3 km North", "5 km East", "7 km East"], correct: 0,
    explanation: "North and South (3 km each) cancel; only the 4 km East remains. So he is 4 km East of the start.",
  },
  {
    id: "rv-p-33", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Walking 6 km North, then 8 km East, a man is how far from his start?",
    options: ["10 km", "14 km", "2 km", "48 km"], correct: 0,
    explanation: "Straight-line distance = √(6² + 8²) = √(36 + 64) = √100 = 10 km.",
  },
  {
    id: "rv-p-34", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "If South-East becomes North, then North-East becomes ____",
    options: ["West", "East", "South", "North-West"], correct: 0,
    explanation: "South-East → North is a rotation of 135° anti-clockwise. Rotating North-East by 135° anti-clockwise gives West.",
  },
  {
    id: "rv-p-35", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "A man facing North turns 45° clockwise, then 90° anti-clockwise. He now faces ____",
    options: ["North-West", "North-East", "South-West", "South-East"], correct: 0,
    explanation: "North + 45° clockwise = North-East; then 90° anti-clockwise from North-East = North-West.",
  },
  {
    id: "rv-p-36", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "At sunset a boy's shadow falls towards his right. Which direction is he facing?",
    options: ["North", "South", "East", "West"], correct: 0,
    explanation: "At sunset the sun is in the West, so shadows fall East. If the shadow is to his right, East is on his right, meaning he faces North.",
  },

  // ==================================================== Analogy, PROFICIENT
  {
    id: "rv-p-37", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "4 : 16 :: 5 : ?",
    options: ["25", "20", "10", "30"], correct: 0,
    explanation: "The relation is n : n². Since 4 : 16 (= 4²), then 5 : 25 (= 5²).",
  },
  {
    id: "rv-p-38", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "7 : 49 :: 9 : ?",
    options: ["81", "63", "72", "18"], correct: 0,
    explanation: "The relation is n : n². 7 : 49 (7²), so 9 : 81 (9²).",
  },
  {
    id: "rv-p-39", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "2 : 8 :: 3 : ?",
    options: ["27", "9", "18", "12"], correct: 0,
    explanation: "The relation is n : n³. 2 : 8 (2³), so 3 : 27 (3³).",
  },
  {
    id: "rv-p-40", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "AB : CD :: EF : ?",
    options: ["GH", "FG", "GI", "HI"], correct: 0,
    explanation: "Each pair advances by two letters: AB → CD → EF → GH.",
  },
  {
    id: "rv-p-41", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Doctor : Stethoscope :: Carpenter : ?",
    options: ["Saw", "Wood", "Hammer (either)", "Nail"], correct: 0,
    explanation: "A doctor's characteristic tool is a stethoscope; a carpenter's tool is a saw (or hammer).",
  },
  {
    id: "rv-p-42", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "144 : 12 :: 169 : ?",
    options: ["13", "14", "11", "26"], correct: 0,
    explanation: "The relation is n² : n. √144 = 12, so √169 = 13.",
  },
  {
    id: "rv-p-43", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Thermometer : Temperature :: Barometer : ?",
    options: ["Pressure", "Heat", "Rain", "Height"], correct: 0,
    explanation: "A thermometer measures temperature; a barometer measures (atmospheric) pressure.",
  },
  {
    id: "rv-p-44", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "5 : 26 :: 7 : ?",
    options: ["50", "48", "49", "52"], correct: 0,
    explanation: "The relation is n : n² + 1. 5 : 26 (25 + 1), so 7 : 50 (49 + 1).",
  },
  {
    id: "rv-p-45", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "CAT : DBU :: DOG : ?",
    options: ["EPH", "EPG", "FPH", "EQH"], correct: 0,
    explanation: "Each letter shifts +1: CAT → DBU. Similarly D→E, O→P, G→H → EPH.",
  },
  {
    id: "rv-p-46", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "January : March :: April : ?",
    options: ["June", "May", "July", "August"], correct: 0,
    explanation: "The relation skips one month (a gap of 2 months): January → March; April → June.",
  },
  {
    id: "rv-p-47", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Poet : Poem :: Sculptor : ?",
    options: ["Statue", "Stone", "Chisel", "Art"], correct: 0,
    explanation: "A poet creates a poem; a sculptor creates a statue (sculpture).",
  },
  {
    id: "rv-p-48", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "6 : 42 :: 8 : ?",
    options: ["72", "64", "56", "48"], correct: 0,
    explanation: "The relation is n : n² + n = n(n+1). 6 : 42 (6×7), so 8 : 72 (8×9).",
  },
  {
    id: "rv-p-49", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Z : 26 :: W : ?",
    options: ["23", "24", "22", "20"], correct: 0,
    explanation: "Each letter maps to its position number. Z = 26, so W = 23.",
  },
  {
    id: "rv-p-50", section: "reasoning", topic: "Verbal reasoning", level: "proficient", difficulty: "hard",
    stem: "Bee : Honey :: Cow : ?",
    options: ["Milk", "Grass", "Calf", "Farm"], correct: 0,
    explanation: "A bee produces honey; a cow produces milk.",
  },
];
