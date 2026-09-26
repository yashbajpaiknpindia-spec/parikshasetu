/**
 * Reasoning, Analytical & Puzzles (topic: "Analytical reasoning").
 *
 * section: "reasoning". Shared across both UPESSC exam levels.
 * Clocks, calendars, ranking/order, alphabet test, syllogism/Venn, number puzzles.
 *   • beginner, direct facts and single-step reasoning.
 *   • proficient, multi-step ranking, clock angles, calendar day-finding, syllogisms.
 *
 * Every answer carries the reasoning. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const analyticalReasoningBank: Question[] = [
  // ==================================================== Clocks, BEGINNER
  {
    id: "ra-b-01", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "easy",
    stem: "The angle between the hands of a clock at 3:00 is ____",
    options: ["90°", "180°", "45°", "120°"], correct: 0,
    explanation: "At 3:00 the hour hand is at 3 and the minute hand at 12, three hour-marks apart. Each hour-mark = 30°, so 3 × 30 = 90°.",
  },
  {
    id: "ra-b-02", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "easy",
    stem: "The angle between the hands of a clock at 6:00 is ____",
    options: ["180°", "90°", "120°", "150°"], correct: 0,
    explanation: "At 6:00 the hands point in exactly opposite directions (6 and 12), giving a straight angle of 180°.",
  },
  {
    id: "ra-b-03", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "The minute hand of a clock moves through how many degrees in one minute?",
    options: ["6°", "1°", "30°", "12°"], correct: 0,
    explanation: "The minute hand covers 360° in 60 minutes, so it moves 360 ÷ 60 = 6° per minute.",
  },
  {
    id: "ra-b-04", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In 12 hours, the hands of a clock coincide (overlap) how many times?",
    options: ["11", "12", "24", "10"], correct: 0,
    explanation: "The hands overlap 11 times in 12 hours (not 12, because one overlap is 'lost' between 11 and 12 o'clock).",
  },
  {
    id: "ra-b-05", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "The angle between the hands of a clock at 9:00 is ____",
    options: ["90°", "180°", "270°", "120°"], correct: 0,
    explanation: "At 9:00 the hands are 3 hour-marks apart (9 and 12), so 3 × 30 = 90°.",
  },
  {
    id: "ra-b-06", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "How many degrees does the hour hand of a clock move in one hour?",
    options: ["30°", "6°", "60°", "12°"], correct: 0,
    explanation: "The hour hand covers 360° in 12 hours, so 360 ÷ 12 = 30° per hour.",
  },
  {
    id: "ra-b-07", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "At what time do the hands of a clock form a straight line (180°) in the '6 o'clock' position?",
    options: ["6:00", "3:00", "12:00", "9:00"], correct: 0,
    explanation: "At 6:00 the hands are exactly opposite (a straight line, 180°).",
  },
  {
    id: "ra-b-08", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "How many times do the hands of a clock make a right angle (90°) in 12 hours?",
    options: ["22", "24", "12", "11"], correct: 0,
    explanation: "The hands are at right angles 22 times in 12 hours (twice each hour, minus 2 overlaps in the pattern).",
  },

  // ==================================================== Calendars, BEGINNER
  {
    id: "ra-b-09", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "easy",
    stem: "How many days are there in a leap year?",
    options: ["366", "365", "364", "367"], correct: 0,
    explanation: "A leap year has 366 days (February has 29 days instead of 28).",
  },
  {
    id: "ra-b-10", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "The number of odd days in an ordinary (non-leap) year is ____",
    options: ["1", "2", "0", "3"], correct: 0,
    explanation: "365 days = 52 weeks + 1 day, so an ordinary year has 1 odd day. (A leap year has 2 odd days.)",
  },
  {
    id: "ra-b-11", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which of these is a leap year?",
    options: ["2024", "2023", "2022", "2021"], correct: 0,
    explanation: "A year is a leap year if it is divisible by 4 (and, for century years, by 400). 2024 ÷ 4 = 506, so 2024 is a leap year.",
  },
  {
    id: "ra-b-12", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which century year is a leap year?",
    options: ["2000", "1900", "2100", "1800"], correct: 0,
    explanation: "A century year is a leap year only if divisible by 400. 2000 ÷ 400 = 5, so 2000 is a leap year (1900, 2100, 1800 are not).",
  },
  {
    id: "ra-b-13", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If today is Monday, what day will it be after 7 days?",
    options: ["Monday", "Sunday", "Tuesday", "Saturday"], correct: 0,
    explanation: "After every 7 days the day repeats, so 7 days after Monday is again Monday.",
  },
  {
    id: "ra-b-14", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If today is Wednesday, what day was it 2 days ago?",
    options: ["Monday", "Friday", "Sunday", "Tuesday"], correct: 0,
    explanation: "2 days before Wednesday: Tuesday (1 day), Monday (2 days). So it was Monday.",
  },
  {
    id: "ra-b-15", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If today is Friday, what day will it be after 10 days?",
    options: ["Monday", "Sunday", "Tuesday", "Saturday"], correct: 0,
    explanation: "10 days = 1 week + 3 days. 3 days after Friday: Saturday, Sunday, Monday. So Monday.",
  },
  {
    id: "ra-b-16", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "How many months in a year have 31 days?",
    options: ["7", "6", "5", "8"], correct: 0,
    explanation: "The months with 31 days are January, March, May, July, August, October and December, that is 7 months.",
  },

  // ==================================================== Ranking / Order, BEGINNER
  {
    id: "ra-b-17", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a row of 10 children, A is 3rd from the left. What is A's position from the right?",
    options: ["8th", "7th", "6th", "9th"], correct: 0,
    explanation: "Position from right = Total − position from left + 1 = 10 − 3 + 1 = 8th.",
  },
  {
    id: "ra-b-18", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a class, if a student is 5th from the top and 6th from the bottom, how many students are there?",
    options: ["10", "11", "12", "9"], correct: 0,
    explanation: "Total = (position from top) + (position from bottom) − 1 = 5 + 6 − 1 = 10.",
  },
  {
    id: "ra-b-19", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a queue, Ram is 7th from the front and 4th from the back. How many people are in the queue?",
    options: ["10", "11", "9", "12"], correct: 0,
    explanation: "Total = 7 + 4 − 1 = 10.",
  },
  {
    id: "ra-b-20", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a row of 20 students, if Sita is 8th from the left, her position from the right is ____",
    options: ["13th", "12th", "14th", "11th"], correct: 0,
    explanation: "Position from right = 20 − 8 + 1 = 13th.",
  },
  {
    id: "ra-b-21", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "A is taller than B, and B is taller than C. Who is the shortest?",
    options: ["C", "A", "B", "cannot say"], correct: 0,
    explanation: "A > B > C in height, so C is the shortest.",
  },
  {
    id: "ra-b-22", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If P is heavier than Q, and R is heavier than P, who is the heaviest?",
    options: ["R", "P", "Q", "cannot say"], correct: 0,
    explanation: "R > P > Q in weight, so R is the heaviest.",
  },
  {
    id: "ra-b-23", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a race, if you overtake the person in 2nd place, you are now in ____",
    options: ["2nd place", "1st place", "3rd place", "cannot say"], correct: 0,
    explanation: "By overtaking the person in 2nd place, you take their position, so you are now 2nd (not 1st).",
  },
  {
    id: "ra-b-24", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a row of 15, a boy is 6th from the left. How many boys are to his right?",
    options: ["9", "8", "10", "6"], correct: 0,
    explanation: "Boys to his right = Total − his position from left = 15 − 6 = 9.",
  },
  {
    id: "ra-b-25", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Five friends A, B, C, D, E are ranked by marks: A > B > C > D > E. Who ranks in the middle?",
    options: ["C", "B", "D", "A"], correct: 0,
    explanation: "With 5 friends in order A > B > C > D > E, the middle (3rd) is C.",
  },
  {
    id: "ra-b-26", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a row of 12 students, Rohan is 4th from the right. His position from the left is ____",
    options: ["9th", "8th", "10th", "7th"], correct: 0,
    explanation: "Position from left = 12 − 4 + 1 = 9th.",
  },

  // ==================================================== Alphabet test, BEGINNER
  {
    id: "ra-b-27", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "easy",
    stem: "Which is the 5th letter of the English alphabet?",
    options: ["E", "F", "D", "G"], correct: 0,
    explanation: "A(1), B(2), C(3), D(4), E(5). The 5th letter is E.",
  },
  {
    id: "ra-b-28", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "easy",
    stem: "Which is the 10th letter of the English alphabet?",
    options: ["J", "I", "K", "H"], correct: 0,
    explanation: "Counting A to J: the 10th letter is J.",
  },
  {
    id: "ra-b-29", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which letter is exactly in the middle of the English alphabet (between M and N)? The 13th letter is ____",
    options: ["M", "N", "L", "O"], correct: 0,
    explanation: "The alphabet has 26 letters; the 13th letter is M (and the 14th is N).",
  },
  {
    id: "ra-b-30", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which letter is 4th to the right of the 10th letter from the left?",
    options: ["N", "M", "O", "L"], correct: 0,
    explanation: "The 10th letter is J; 4 letters to its right: K, L, M, N. So the answer is N (the 14th letter).",
  },
  {
    id: "ra-b-31", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "How many letters are there between D and K in the alphabet (exclusive)?",
    options: ["6", "7", "5", "8"], correct: 0,
    explanation: "Between D and K are E, F, G, H, I, J, that is 6 letters.",
  },
  {
    id: "ra-b-32", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which is the 3rd letter from the right end of the alphabet?",
    options: ["X", "Y", "W", "Z"], correct: 0,
    explanation: "From the right: Z (1st), Y (2nd), X (3rd). So the answer is X.",
  },
  {
    id: "ra-b-33", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If the alphabet is written in reverse, which letter takes the place of C?",
    options: ["X", "W", "Y", "Z"], correct: 0,
    explanation: "In reverse, position n maps to letter (27 − n). C is 3rd, so it maps to the 24th letter = X.",
  },
  {
    id: "ra-b-34", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which letter is midway between G and M?",
    options: ["J", "I", "K", "H"], correct: 0,
    explanation: "G is 7th and M is 13th; the midpoint is the 10th letter = J.",
  },

  // ==================================================== Syllogism / Venn, BEGINNER
  {
    id: "ra-b-35", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "All roses are flowers. All flowers are plants. Therefore ____",
    options: ["all roses are plants", "all plants are roses", "no rose is a plant", "some plants are not flowers"], correct: 0,
    explanation: "If all roses are flowers and all flowers are plants, then all roses must be plants (chained inclusion).",
  },
  {
    id: "ra-b-36", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "All dogs are animals. Rex is a dog. Therefore ____",
    options: ["Rex is an animal", "Rex is not an animal", "all animals are dogs", "Rex is a cat"], correct: 0,
    explanation: "Since all dogs are animals and Rex is a dog, Rex is an animal.",
  },
  {
    id: "ra-b-37", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "No cat is a dog. All dogs are animals. Which conclusion follows?",
    options: ["Some animals are not cats", "All cats are dogs", "No animal is a cat", "All animals are dogs"], correct: 0,
    explanation: "Dogs are animals but no dog is a cat, so at least some animals (the dogs) are not cats.",
  },
  {
    id: "ra-b-38", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "All students are humans. Some humans are teachers. Which is definitely true?",
    options: ["All students are humans", "All teachers are students", "Some students are teachers", "No student is a teacher"], correct: 0,
    explanation: "Only the first statement ('all students are humans') is definitely true; the others cannot be concluded.",
  },
  {
    id: "ra-b-39", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If 'some A are B' and 'all B are C', then ____",
    options: ["some A are C", "all A are C", "no A is C", "all C are A"], correct: 0,
    explanation: "The A that are B are also C (since all B are C), so at least some A are C.",
  },
  {
    id: "ra-b-40", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "All apples are fruits. No fruit is a stone. Therefore ____",
    options: ["no apple is a stone", "some apples are stones", "all stones are fruits", "all fruits are apples"], correct: 0,
    explanation: "Apples are fruits and no fruit is a stone, so no apple is a stone.",
  },
  {
    id: "ra-b-41", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "In a Venn diagram, the region common to two overlapping circles represents ____",
    options: ["elements in both sets", "elements in neither set", "elements in only one set", "the total"], correct: 0,
    explanation: "The overlapping (intersection) region contains elements that belong to both sets.",
  },
  {
    id: "ra-b-42", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Which diagram best shows the relation: Dogs, Animals, Plants?",
    options: ["Dogs inside Animals; Plants separate", "All three overlapping", "Plants inside Animals", "Dogs and Plants overlapping"], correct: 0,
    explanation: "All dogs are animals (dogs circle inside the animals circle), while plants form a separate, non-overlapping circle.",
  },

  // ==================================================== Number / misc puzzles, BEGINNER
  {
    id: "ra-b-43", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If '+' means '×', and '×' means '+', then 4 + 2 × 3 = ?",
    options: ["11", "14", "24", "9"], correct: 0,
    explanation: "Replace symbols: 4 + 2 × 3 becomes 4 × 2 + 3 = 8 + 3 = 11.",
  },
  {
    id: "ra-b-44", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If '−' means '÷', then 12 − 4 = ?",
    options: ["3", "8", "48", "16"], correct: 0,
    explanation: "Replace '−' with '÷': 12 ÷ 4 = 3.",
  },
  {
    id: "ra-b-45", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Find the missing number: 2, 4, 8, ?, 32",
    options: ["16", "12", "24", "20"], correct: 0,
    explanation: "Each term doubles: 8 × 2 = 16.",
  },
  {
    id: "ra-b-46", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If in a code 5 = E, 3 = C, then 1 = ?",
    options: ["A", "B", "D", "F"], correct: 0,
    explanation: "The number equals the letter's position (E = 5, C = 3), so 1 = A.",
  },
  {
    id: "ra-b-47", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Complete the pattern: 1, 4, 9, 16, ? (square numbers)",
    options: ["25", "20", "24", "36"], correct: 0,
    explanation: "These are squares: 1², 2², 3², 4², so the next is 5² = 25.",
  },
  {
    id: "ra-b-48", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "If Monday is the 1st, what is the day on the 8th?",
    options: ["Monday", "Sunday", "Tuesday", "Saturday"], correct: 0,
    explanation: "The 8th is exactly 7 days after the 1st, so the day repeats: Monday.",
  },
  {
    id: "ra-b-49", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "Ravi is 12 years old, and his father is 3 times his age. The father's age is ____",
    options: ["36 years", "15 years", "24 years", "48 years"], correct: 0,
    explanation: "Father's age = 3 × 12 = 36 years.",
  },
  {
    id: "ra-b-50", section: "reasoning", topic: "Analytical reasoning", level: "beginner", difficulty: "medium",
    stem: "A is B's brother, and B is C's mother. How is A related to C?",
    options: ["Maternal uncle", "Father", "Grandfather", "Brother"], correct: 0,
    explanation: "B is C's mother, and A is B's brother, so A is C's maternal uncle.",
  },

  // ==================================================== Clocks, PROFICIENT
  {
    id: "ra-p-01", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "What is the angle between the hands of a clock at 3:30?",
    options: ["75°", "90°", "60°", "80°"], correct: 0,
    explanation: "Hour-hand angle = 30 × 3 + 0.5 × 30 = 90 + 15 = 105°. Minute-hand angle = 6 × 30 = 180°. Difference = 180 − 105 = 75°.",
  },
  {
    id: "ra-p-02", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "What is the angle between the hands of a clock at 4:20?",
    options: ["10°", "20°", "0°", "15°"], correct: 0,
    explanation: "Hour hand = 30 × 4 + 0.5 × 20 = 120 + 10 = 130°. Minute hand = 6 × 20 = 120°. Difference = 130 − 120 = 10°.",
  },
  {
    id: "ra-p-03", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "At 2:15, what is the angle between the hour and minute hands?",
    options: ["22.5°", "30°", "15°", "45°"], correct: 0,
    explanation: "Hour hand = 30 × 2 + 0.5 × 15 = 60 + 7.5 = 67.5°. Minute hand = 6 × 15 = 90°. Difference = 90 − 67.5 = 22.5°.",
  },
  {
    id: "ra-p-04", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How many times in 24 hours do the hands of a clock coincide?",
    options: ["22", "24", "44", "20"], correct: 0,
    explanation: "The hands coincide 11 times every 12 hours, so in 24 hours they coincide 11 × 2 = 22 times.",
  },
  {
    id: "ra-p-05", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A clock is set right at 12 noon. It gains 5 minutes per hour. What time will it show at the actual 6 PM?",
    options: ["6:30 PM", "6:25 PM", "6:05 PM", "7:00 PM"], correct: 0,
    explanation: "In 6 actual hours it gains 5 × 6 = 30 minutes, so it shows 6:00 + 0:30 = 6:30 PM.",
  },
  {
    id: "ra-p-06", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "The reflex angle between the hands of a clock at 8:00 is ____",
    options: ["240°", "120°", "180°", "210°"], correct: 0,
    explanation: "At 8:00 the hands are 4 hour-marks apart = 120°. The reflex (larger) angle is 360 − 120 = 240°.",
  },
  {
    id: "ra-p-07", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How much does a clock's hour hand turn between 3 PM and 3:40 PM?",
    options: ["20°", "40°", "30°", "12°"], correct: 0,
    explanation: "The hour hand moves 0.5° per minute, so in 40 minutes it turns 0.5 × 40 = 20°.",
  },
  {
    id: "ra-p-08", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A watch loses 2 minutes every hour. After 12 hours, how far behind is it?",
    options: ["24 minutes", "12 minutes", "20 minutes", "2 minutes"], correct: 0,
    explanation: "Loss = 2 minutes/hour × 12 hours = 24 minutes behind.",
  },

  // ==================================================== Calendars, PROFICIENT
  {
    id: "ra-p-09", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If 1 January 2024 is a Monday, what day is 1 January 2025? (2024 is a leap year)",
    options: ["Wednesday", "Tuesday", "Thursday", "Monday"], correct: 0,
    explanation: "A leap year has 2 odd days, so the day advances by 2: Monday → Wednesday.",
  },
  {
    id: "ra-p-10", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If 15 August falls on a Friday, on what day will 15 September of the same year fall?",
    options: ["Monday", "Sunday", "Tuesday", "Saturday"], correct: 0,
    explanation: "August has 31 days, so 15 Aug to 15 Sep is 31 days = 4 weeks + 3 odd days. Friday + 3 = Monday.",
  },
  {
    id: "ra-p-11", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How many odd days are there in 100 years?",
    options: ["5", "0", "1", "2"], correct: 0,
    explanation: "100 years contain 24 leap years and 76 ordinary years = 24×2 + 76×1 = 124 days = 17 weeks + 5 odd days.",
  },
  {
    id: "ra-p-12", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How many odd days are there in 400 years?",
    options: ["0", "1", "5", "3"], correct: 0,
    explanation: "The pattern of odd days over 100/200/300/400 years is 5/3/1/0. So 400 years have 0 odd days, the calendar repeats every 400 years.",
  },
  {
    id: "ra-p-13", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If the 3rd of a month is a Sunday, what day is the 25th of the same month?",
    options: ["Monday", "Sunday", "Tuesday", "Saturday"], correct: 0,
    explanation: "From the 3rd to the 25th is 22 days = 3 weeks + 1 day. Sunday + 1 = Monday.",
  },
  {
    id: "ra-p-14", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How many times does the 29th of February occur in 100 years (a normal century like 1901–2000, where 2000 is a leap year)?",
    options: ["25", "24", "26", "20"], correct: 0,
    explanation: "In 1901–2000 there are 25 leap years (every 4th year, and 2000 qualifies), so 29 February occurs 25 times.",
  },
  {
    id: "ra-p-15", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If 26 January 2023 is a Thursday, what day is 26 January 2024?",
    options: ["Friday", "Thursday", "Saturday", "Wednesday"], correct: 0,
    explanation: "2023 is an ordinary year (1 odd day) between the two dates, so the day advances by 1: Thursday → Friday.",
  },
  {
    id: "ra-p-16", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "The calendar for the year 2023 will be exactly the same as which future year?",
    options: ["2034", "2028", "2029", "2030"], correct: 0,
    explanation: "A non-leap year's calendar repeats after 11 years when the leap-year pattern realigns; for 2023 the next identical calendar is 2034.",
  },

  // ==================================================== Ranking / order, PROFICIENT
  {
    id: "ra-p-17", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a class, Ravi is 12th from the top and 18th from the bottom. How many students are in the class?",
    options: ["29", "30", "31", "28"], correct: 0,
    explanation: "Total = 12 + 18 − 1 = 29.",
  },
  {
    id: "ra-p-18", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a row of 40 students, A is 11th from the left and B is 15th from the right. How many students are between them?",
    options: ["14", "15", "13", "16"], correct: 0,
    explanation: "A is at position 11 from left; B is at 40 − 15 + 1 = 26 from left. Students between = 26 − 11 − 1 = 14.",
  },
  {
    id: "ra-p-19", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a row of children, Meena is 9th from the left and 6th from the right. How many children are in the row?",
    options: ["14", "15", "13", "16"], correct: 0,
    explanation: "Total = 9 + 6 − 1 = 14.",
  },
  {
    id: "ra-p-20", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A is taller than B but shorter than C. D is taller than C. Who is the tallest?",
    options: ["D", "C", "A", "B"], correct: 0,
    explanation: "C > A > B and D > C, so D > C > A > B. D is the tallest.",
  },
  {
    id: "ra-p-21", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Five boys are sitting. P is to the left of Q, R is to the right of Q, S is to the left of P, and T is between P and Q. The order from left is ____",
    options: ["S P T Q R", "P S T Q R", "S T P Q R", "P T S Q R"], correct: 0,
    explanation: "S is leftmost, then P, then T (between P and Q), then Q, then R: S P T Q R.",
  },
  {
    id: "ra-p-22", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In an exam, Anil ranked 16th from the top and 29th from the bottom among those who passed. If 6 students failed, how many appeared?",
    options: ["50", "45", "44", "51"], correct: 0,
    explanation: "Students who passed = 16 + 29 − 1 = 44. Adding 6 who failed: 44 + 6 = 50 appeared.",
  },
  {
    id: "ra-p-23", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a row of 25, if the position of a boy from the left (13th) and from the right are equal, what is his position from the right?",
    options: ["13th", "12th", "14th", "11th"], correct: 0,
    explanation: "In a row of 25 the middle position is (25+1)/2 = 13th, equal from both ends.",
  },
  {
    id: "ra-p-24", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Amit is heavier than Bina but lighter than Chetan. Deep is lighter than Bina. Who is the lightest?",
    options: ["Deep", "Bina", "Amit", "Chetan"], correct: 0,
    explanation: "Chetan > Amit > Bina > Deep, so Deep is the lightest.",
  },
  {
    id: "ra-p-25", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a row of 30 girls, Priya is 7th from one end. Sunita is 10th from the other end. If 4 girls sit between them, and they do not overlap, how many are at the ends beyond them together? (Priya 7th from left)",
    options: ["Positions 7 and 21", "Positions 7 and 20", "Positions 8 and 21", "Positions 6 and 21"], correct: 0,
    explanation: "Priya is 7th from left; Sunita 10th from right = position 30 − 10 + 1 = 21 from left. Gap between = 21 − 7 − 1 = 13 (consistent placement).",
  },
  {
    id: "ra-p-26", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a class of 60, a student's rank is 24th from the top. What is the rank from the bottom?",
    options: ["37th", "36th", "38th", "35th"], correct: 0,
    explanation: "Rank from bottom = 60 − 24 + 1 = 37th.",
  },

  // ==================================================== Alphabet / coding, PROFICIENT
  {
    id: "ra-p-27", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Which letter is 7th to the left of the 20th letter from the left?",
    options: ["M", "N", "L", "K"], correct: 0,
    explanation: "The 20th letter is T; 7 letters to its left is the (20 − 7) = 13th letter = M.",
  },
  {
    id: "ra-p-28", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If the letters of the word 'MASTER' are arranged in alphabetical order, which letter comes third?",
    options: ["M", "E", "R", "S"], correct: 0,
    explanation: "Letters A, E, M, R, S, T sorted → A, E, M, R, S, T. The third letter is M.",
  },
  {
    id: "ra-p-29", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a certain code, if position from right of a letter is used: the 22nd letter from the left corresponds to which from the right?",
    options: ["5th", "4th", "6th", "3rd"], correct: 0,
    explanation: "Position from right = 26 − 22 + 1 = 5th.",
  },
  {
    id: "ra-p-30", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If in a code EAT = 5+1+20 = 26, then what is the code value of CAT?",
    options: ["24", "26", "27", "22"], correct: 0,
    explanation: "Using letter positions: C(3) + A(1) + T(20) = 24.",
  },
  {
    id: "ra-p-31", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Which letter is midway between the 8th letter from the left and the 8th letter from the right?",
    options: ["M", "N", "L", "K"], correct: 0,
    explanation: "8th from left = H (8); 8th from right = S (19). Midpoint = (8 + 19)/2 = 13.5, nearest whole = 13th = M.",
  },
  {
    id: "ra-p-32", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If 'PAPER' is coded such that each letter is shifted +1, the code is ____",
    options: ["QBQFS", "OZODQ", "QBQFR", "PBPES"], correct: 0,
    explanation: "Shift each letter forward by 1: P→Q, A→B, P→Q, E→F, R→S = QBQFS.",
  },
  {
    id: "ra-p-33", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "How many letters in the word 'EDUCATION' occupy the same position when arranged alphabetically as in the original word?",
    options: ["1", "2", "0", "3"], correct: 2,
    explanation: "EDUCATION (E D U C A T I O N) → sorted: A C D E I N O T U. Comparing position by position, no letter stays in the same place, so the answer is 0.",
  },
  {
    id: "ra-p-34", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If A=1, B=2 … Z=26, what is the sum of the letters of the word 'SUN'?",
    options: ["54", "53", "55", "52"], correct: 0,
    explanation: "S(19) + U(21) + N(14) = 54.",
  },

  // ==================================================== Syllogism, PROFICIENT
  {
    id: "ra-p-35", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: All pens are books. Some books are red. Conclusion?",
    options: ["Some books are pens", "All books are pens", "All red things are pens", "No pen is red"], correct: 0,
    explanation: "'All pens are books' converts to 'some books are pens'. The others cannot be concluded.",
  },
  {
    id: "ra-p-36", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: Some doctors are fools. All fools are rich. Which follows?",
    options: ["Some doctors are rich", "All doctors are rich", "All rich are doctors", "No doctor is rich"], correct: 0,
    explanation: "The doctors who are fools are also rich (all fools are rich), so some doctors are rich.",
  },
  {
    id: "ra-p-37", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: All cats are mammals. No mammal is a bird. Conclusion?",
    options: ["No cat is a bird", "Some cats are birds", "All mammals are cats", "All birds are mammals"], correct: 0,
    explanation: "Cats are mammals, and no mammal is a bird, so no cat is a bird.",
  },
  {
    id: "ra-p-38", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: Some A are B. No B is C. Which conclusion is valid?",
    options: ["Some A are not C", "All A are C", "No A is C", "All C are B"], correct: 0,
    explanation: "The A that are B cannot be C (no B is C), so some A are not C.",
  },
  {
    id: "ra-p-39", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: All squares are rectangles. All rectangles are quadrilaterals. Conclusion?",
    options: ["All squares are quadrilaterals", "All quadrilaterals are squares", "No square is a quadrilateral", "Some rectangles are not quadrilaterals"], correct: 0,
    explanation: "Chained inclusion: squares ⊂ rectangles ⊂ quadrilaterals, so all squares are quadrilaterals.",
  },
  {
    id: "ra-p-40", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Statements: No student is lazy. Ravi is lazy. Conclusion?",
    options: ["Ravi is not a student", "Ravi is a student", "All students are lazy", "Ravi is hardworking"], correct: 0,
    explanation: "No student is lazy, but Ravi is lazy, so Ravi cannot be a student.",
  },
  {
    id: "ra-p-41", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a group of 50, 30 like tea, 25 like coffee, and 10 like both. How many like neither?",
    options: ["5", "10", "15", "0"], correct: 0,
    explanation: "Like at least one = 30 + 25 − 10 = 45. Neither = 50 − 45 = 5.",
  },
  {
    id: "ra-p-42", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "In a class, 20 play cricket, 15 play football, and 5 play both. How many play at least one game?",
    options: ["30", "35", "25", "40"], correct: 0,
    explanation: "At least one = 20 + 15 − 5 = 30.",
  },

  // ==================================================== Puzzles / misc, PROFICIENT
  {
    id: "ra-p-43", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If '+' means '÷', '÷' means '−', '−' means '×', and '×' means '+', then 16 + 4 ÷ 2 − 3 × 5 = ?",
    options: ["3", "7", "9", "11"], correct: 0,
    explanation: "Replace: 16 ÷ 4 − 2 × 3 + 5 = 4 − 6 + 5 = 3.",
  },
  {
    id: "ra-p-44", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Pointing to a photo, a man said, 'She is the daughter of my grandfather's only son.' How is the girl related to the man?",
    options: ["Sister", "Daughter", "Niece", "Mother"], correct: 0,
    explanation: "Grandfather's only son is the man's father; his daughter is the man's sister.",
  },
  {
    id: "ra-p-45", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A man walks 5 km east, turns right and walks 3 km, turns right and walks 5 km. How far is he from the start?",
    options: ["3 km", "5 km", "8 km", "13 km"], correct: 0,
    explanation: "He goes east 5, south 3, then west 5 (cancelling the east). Net displacement = 3 km south of start.",
  },
  {
    id: "ra-p-46", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Find the missing number: 3, 6, 11, 18, 27, ?",
    options: ["38", "36", "40", "35"], correct: 0,
    explanation: "Differences are +3, +5, +7, +9, +11 (odd numbers). 27 + 11 = 38.",
  },
  {
    id: "ra-p-47", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A father is now 4 times as old as his son. In 20 years he will be twice as old. What is the son's present age?",
    options: ["10 years", "12 years", "15 years", "8 years"], correct: 0,
    explanation: "Let son = x, father = 4x. In 20 years: 4x + 20 = 2(x + 20) → 4x + 20 = 2x + 40 → 2x = 20 → x = 10.",
  },
  {
    id: "ra-p-48", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "If in a code 'MANGO' is written as 'NBOHP', how is 'APPLE' written?",
    options: ["BQQMF", "BQQMG", "AQQMF", "BPPMF"], correct: 0,
    explanation: "Each letter shifts +1: A→B, P→Q, P→Q, L→M, E→F = BQQMF.",
  },
  {
    id: "ra-p-49", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "Six people A, B, C, D, E, F sit around a circle facing centre. A is between F and B. D is between C and E. Who is opposite A if F is next to C?",
    options: ["D", "E", "C", "B"], correct: 0,
    explanation: "Order around the circle: A, B, then across, placing F-A-B and F next to C gives the sequence A B E D C F, so D sits opposite A.",
  },
  {
    id: "ra-p-50", section: "reasoning", topic: "Analytical reasoning", level: "proficient", difficulty: "hard",
    stem: "A cube is painted on all faces and cut into 27 smaller equal cubes. How many small cubes have exactly two faces painted?",
    options: ["12", "8", "6", "1"], correct: 0,
    explanation: "In a 3×3×3 cube, the edge cubes (not corners) have two painted faces. A cube has 12 edges, one such cube per edge, so 12.",
  },
];
