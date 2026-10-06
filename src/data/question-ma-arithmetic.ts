/**
 * Mathematics, Percentage, Ratio & Proportion, Average (topic: "Arithmetic").
 *
 * section: "numerical". Shared across both UPESSC exam levels.
 *   • beginner, basic percentage/ratio/average calculations.
 *   • proficient, successive percentage change, partnership, mixtures, weighted average.
 *
 * Every answer carries the working. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const maArithmeticBank: Question[] = [
  // ==================================================== Percentage, BEGINNER
  {
    id: "mar-b-01", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "What is 15% of 200?",
    options: ["30", "20", "15", "45"], correct: 0,
    explanation: "15% of 200 = (15/100) × 200 = 30.",
  },
  {
    id: "mar-b-02", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "What is 25% of 80?",
    options: ["20", "25", "16", "40"], correct: 0,
    explanation: "25% = 1/4, so 25% of 80 = 80 ÷ 4 = 20.",
  },
  {
    id: "mar-b-03", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "What is 10% of 250?",
    options: ["25", "20", "30", "15"], correct: 0,
    explanation: "10% of 250 = 250 ÷ 10 = 25.",
  },
  {
    id: "mar-b-04", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Convert 3/5 into a percentage.",
    options: ["60%", "35%", "53%", "30%"], correct: 0,
    explanation: "3/5 × 100 = 60%. (Multiply the fraction by 100 to get the percentage.)",
  },
  {
    id: "mar-b-05", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Convert 0.2 into a percentage.",
    options: ["20%", "2%", "0.2%", "200%"], correct: 0,
    explanation: "0.2 × 100 = 20%.",
  },
  {
    id: "mar-b-06", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "40% of a number is 80. The number is ____",
    options: ["200", "160", "120", "320"], correct: 0,
    explanation: "Let the number be N. 40% of N = 80 → 0.4N = 80 → N = 80 ÷ 0.4 = 200.",
  },
  {
    id: "mar-b-07", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "25 is what percent of 200?",
    options: ["12.5%", "25%", "10%", "8%"], correct: 0,
    explanation: "(25/200) × 100 = 12.5%.",
  },
  {
    id: "mar-b-08", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A number is increased by 10%. If it was 200, it becomes ____",
    options: ["220", "210", "180", "230"], correct: 0,
    explanation: "10% of 200 = 20, so the increased value = 200 + 20 = 220.",
  },
  {
    id: "mar-b-09", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A number 100 is decreased by 20%. It becomes ____",
    options: ["80", "20", "120", "60"], correct: 0,
    explanation: "20% of 100 = 20, so the decreased value = 100 − 20 = 80.",
  },
  {
    id: "mar-b-10", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If a value rises from 40 to 50, the percentage increase is ____",
    options: ["25%", "20%", "10%", "50%"], correct: 0,
    explanation: "Increase = 50 − 40 = 10. Percentage increase = (10/40) × 100 = 25%. (Note: percentage change is on the original value.)",
  },
  {
    id: "mar-b-11", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In a class of 40 students, 60% are boys. The number of boys is ____",
    options: ["24", "16", "20", "26"], correct: 0,
    explanation: "60% of 40 = (60/100) × 40 = 24 boys.",
  },
  {
    id: "mar-b-12", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "50% of 50% of 400 is ____",
    options: ["100", "200", "50", "150"], correct: 0,
    explanation: "50% of 400 = 200; 50% of 200 = 100.",
  },
  {
    id: "mar-b-13", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If 20% of a class of 50 students failed, the number who passed is ____",
    options: ["40", "10", "45", "30"], correct: 0,
    explanation: "20% of 50 = 10 failed, so 50 − 10 = 40 passed (80% passed).",
  },
  {
    id: "mar-b-14", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "1/4 expressed as a percentage is ____",
    options: ["25%", "40%", "14%", "20%"], correct: 0,
    explanation: "1/4 × 100 = 25%.",
  },
  {
    id: "mar-b-15", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A shirt costs ₹500. After a 10% price rise, its new price is ____",
    options: ["₹550", "₹510", "₹450", "₹600"], correct: 0,
    explanation: "10% of 500 = 50, so the new price = 500 + 50 = ₹550.",
  },
  {
    id: "mar-b-16", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "What percentage is 45 minutes of 1 hour?",
    options: ["75%", "45%", "60%", "40%"], correct: 0,
    explanation: "1 hour = 60 minutes. (45/60) × 100 = 75%.",
  },
  {
    id: "mar-b-17", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "30% of 30% of 1000 is ____",
    options: ["90", "300", "9", "60"], correct: 0,
    explanation: "30% of 1000 = 300; 30% of 300 = 90.",
  },
  {
    id: "mar-b-18", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A man spends 75% of his income and saves ₹500. His income is ____",
    options: ["₹2000", "₹1500", "₹2500", "₹1000"], correct: 0,
    explanation: "He saves 25% of income = ₹500 → income = 500 ÷ 0.25 = ₹2000.",
  },
  {
    id: "mar-b-19", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "5% of 5% is equal to ____",
    options: ["0.25%", "10%", "25%", "1%"], correct: 0,
    explanation: "5% of 5% = (5/100) × (5/100) = 25/10000 = 0.0025 = 0.25%.",
  },
  {
    id: "mar-b-20", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If 12% of a number is 60, the number is ____",
    options: ["500", "600", "720", "450"], correct: 0,
    explanation: "0.12 × N = 60 → N = 60 ÷ 0.12 = 500.",
  },

  // ==================================================== Ratio & Proportion, BEGINNER
  {
    id: "mar-b-21", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Two numbers are in the ratio 3 : 4 and add up to 28. The larger number is ____",
    options: ["16", "12", "14", "18"], correct: 0,
    explanation: "Total parts = 3 + 4 = 7. Each part = 28 ÷ 7 = 4, so the numbers are 12 and 16. The larger is 16.",
  },
  {
    id: "mar-b-22", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Simplify the ratio 15 : 25.",
    options: ["3 : 5", "5 : 3", "1 : 2", "2 : 3"], correct: 0,
    explanation: "Divide both terms by their HCF (5): 15 ÷ 5 = 3 and 25 ÷ 5 = 5, giving 3 : 5.",
  },
  {
    id: "mar-b-23", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If x/4 = 6/8, then x = ?",
    options: ["3", "4", "6", "12"], correct: 0,
    explanation: "Cross-multiply: 8x = 24 → x = 3. (Or note 6/8 = 3/4, so x/4 = 3/4 gives x = 3.)",
  },
  {
    id: "mar-b-24", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Divide ₹500 between A and B in the ratio 2 : 3. B's share is ____",
    options: ["₹300", "₹200", "₹250", "₹350"], correct: 0,
    explanation: "Total parts = 5. Each part = 500 ÷ 5 = ₹100. B gets 3 parts = ₹300.",
  },
  {
    id: "mar-b-25", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In a school, the ratio of boys to girls is 3 : 2. If there are 30 students, the number of boys is ____",
    options: ["18", "12", "15", "20"], correct: 0,
    explanation: "Total parts = 5. Each part = 30 ÷ 5 = 6. Boys = 3 parts = 18.",
  },
  {
    id: "mar-b-26", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The fourth proportional to 2, 3, 4 is ____",
    options: ["6", "5", "8", "9"], correct: 0,
    explanation: "If 2 : 3 :: 4 : x, then 2x = 3 × 4 = 12 → x = 6.",
  },
  {
    id: "mar-b-27", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If a : b = 2 : 3 and b : c = 4 : 5, then a : b : c = ?",
    options: ["8 : 12 : 15", "2 : 3 : 5", "2 : 12 : 5", "8 : 3 : 15"], correct: 0,
    explanation: "Make b common (LCM of 3 and 4 is 12): a : b = 8 : 12 and b : c = 12 : 15. So a : b : c = 8 : 12 : 15.",
  },
  {
    id: "mar-b-28", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The ratio 0.5 : 1.5 in simplest form is ____",
    options: ["1 : 3", "5 : 15", "1 : 2", "2 : 3"], correct: 0,
    explanation: "Multiply both by 2 to remove decimals: 1 : 3. (Or divide both by 0.5.)",
  },
  {
    id: "mar-b-29", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If 5 pens cost ₹75, then 8 pens cost ____",
    options: ["₹120", "₹100", "₹110", "₹125"], correct: 0,
    explanation: "Cost of one pen = 75 ÷ 5 = ₹15. So 8 pens cost 8 × 15 = ₹120 (unitary method).",
  },
  {
    id: "mar-b-30", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The mean proportional between 4 and 9 is ____",
    options: ["6", "13", "36", "5"], correct: 0,
    explanation: "The mean proportional between a and b is √(ab) = √(4 × 9) = √36 = 6.",
  },
  {
    id: "mar-b-31", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Divide 60 in the ratio 1 : 2 : 3. The three parts are ____",
    options: ["10, 20, 30", "12, 18, 30", "10, 25, 25", "20, 20, 20"], correct: 0,
    explanation: "Total parts = 1 + 2 + 3 = 6. Each part = 60 ÷ 6 = 10. So the parts are 10, 20 and 30.",
  },
  {
    id: "mar-b-32", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If 3 : x = 12 : 20, then x = ?",
    options: ["5", "4", "6", "8"], correct: 0,
    explanation: "Cross-multiply: 12x = 3 × 20 = 60 → x = 5.",
  },
  {
    id: "mar-b-33", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A sum of ₹720 is divided among A, B, C in the ratio 2 : 3 : 4. C's share is ____",
    options: ["₹320", "₹160", "₹240", "₹360"], correct: 0,
    explanation: "Total parts = 9. Each part = 720 ÷ 9 = ₹80. C gets 4 parts = ₹320.",
  },
  {
    id: "mar-b-34", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The ratio of 2 kg to 500 g is ____",
    options: ["4 : 1", "2 : 500", "1 : 4", "2 : 5"], correct: 0,
    explanation: "Convert to the same unit: 2 kg = 2000 g. So 2000 : 500 = 4 : 1.",
  },
  {
    id: "mar-b-35", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If the ratio of two numbers is 5 : 7 and the smaller is 25, the larger is ____",
    options: ["35", "30", "40", "45"], correct: 0,
    explanation: "If 5 parts = 25, then 1 part = 5, so 7 parts = 35.",
  },
  {
    id: "mar-b-36", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The third proportional to 4 and 8 is ____",
    options: ["16", "12", "6", "2"], correct: 0,
    explanation: "If 4 : 8 :: 8 : x, then 4x = 8 × 8 = 64 → x = 16.",
  },

  // ==================================================== Average, BEGINNER
  {
    id: "mar-b-37", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The average of 10, 20, 30 and 40 is ____",
    options: ["25", "20", "30", "35"], correct: 0,
    explanation: "Average = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = 25.",
  },
  {
    id: "mar-b-38", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The average of 2, 4, 6, 8 and 10 is ____",
    options: ["6", "5", "30", "8"], correct: 0,
    explanation: "Average = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.",
  },
  {
    id: "mar-b-39", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The average of the first 5 natural numbers (1, 2, 3, 4, 5) is ____",
    options: ["3", "2.5", "15", "5"], correct: 0,
    explanation: "Average = (1 + 2 + 3 + 4 + 5) ÷ 5 = 15 ÷ 5 = 3.",
  },
  {
    id: "mar-b-40", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of 5 numbers is 20. Their sum is ____",
    options: ["100", "25", "4", "120"], correct: 0,
    explanation: "Sum = Average × Number of terms = 20 × 5 = 100.",
  },
  {
    id: "mar-b-41", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of three numbers is 15. Two of them are 10 and 20. The third is ____",
    options: ["15", "10", "25", "20"], correct: 0,
    explanation: "Sum of the three = 15 × 3 = 45. Third number = 45 − (10 + 20) = 15.",
  },
  {
    id: "mar-b-42", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of the first 10 natural numbers is ____",
    options: ["5.5", "5", "10", "55"], correct: 0,
    explanation: "Sum of first 10 natural numbers = 10 × 11 ÷ 2 = 55; average = 55 ÷ 10 = 5.5.",
  },
  {
    id: "mar-b-43", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of four consecutive even numbers 2, 4, 6, 8 is ____",
    options: ["5", "4", "6", "20"], correct: 0,
    explanation: "Average = (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5.",
  },
  {
    id: "mar-b-44", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average age of 3 boys is 15 years. If two are 14 and 16, the third boy's age is ____",
    options: ["15 years", "14 years", "16 years", "13 years"], correct: 0,
    explanation: "Total age = 15 × 3 = 45. Third boy = 45 − (14 + 16) = 15 years.",
  },
  {
    id: "mar-b-45", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of 0, 5, 10, 15 and 20 is ____",
    options: ["10", "12", "50", "5"], correct: 0,
    explanation: "Average = (0 + 5 + 10 + 15 + 20) ÷ 5 = 50 ÷ 5 = 10.",
  },
  {
    id: "mar-b-46", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of 5 numbers is 12. If one number 8 is removed, the average of the rest is ____",
    options: ["13", "11", "12", "10"], correct: 0,
    explanation: "Sum of 5 numbers = 60. After removing 8: sum = 52 for 4 numbers; average = 52 ÷ 4 = 13.",
  },
  {
    id: "mar-b-47", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of 2 numbers is 25. If one number is 30, the other is ____",
    options: ["20", "25", "30", "15"], correct: 0,
    explanation: "Sum of the two = 25 × 2 = 50. Other number = 50 − 30 = 20.",
  },
  {
    id: "mar-b-48", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of 11, 13, 15, 17 and 19 is ____",
    options: ["15", "16", "14", "13"], correct: 0,
    explanation: "For evenly spaced numbers, the average is the middle term = 15. (Or sum 75 ÷ 5 = 15.)",
  },
  {
    id: "mar-b-49", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average marks of a student in 3 subjects is 70. His total marks are ____",
    options: ["210", "70", "140", "230"], correct: 0,
    explanation: "Total = Average × Subjects = 70 × 3 = 210.",
  },
  {
    id: "mar-b-50", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The average of the first 5 multiples of 3 (3, 6, 9, 12, 15) is ____",
    options: ["9", "8", "45", "12"], correct: 0,
    explanation: "Average = (3 + 6 + 9 + 12 + 15) ÷ 5 = 45 ÷ 5 = 9 (the middle term).",
  },

  // ==================================================== Percentage, PROFICIENT
  {
    id: "mar-p-01", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A number is increased by 20% and then by another 20%. The net percentage increase is ____",
    options: ["44%", "40%", "42%", "24%"], correct: 0,
    explanation: "Successive increase = 1.2 × 1.2 = 1.44, i.e. a 44% increase. (Successive changes are multiplied, not added.)",
  },
  {
    id: "mar-p-02", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A number is increased by 10% and then decreased by 10%. The net change is ____",
    options: ["1% decrease", "no change", "1% increase", "10% decrease"], correct: 0,
    explanation: "1.10 × 0.90 = 0.99, i.e. a 1% net decrease. (Equal % rise and fall always give a small net decrease.)",
  },
  {
    id: "mar-p-03", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The population of a town is 10,000 and grows at 10% per annum. After 2 years it will be ____",
    options: ["12,100", "12,000", "11,000", "13,310"], correct: 0,
    explanation: "Population = 10000 × (1.1)² = 10000 × 1.21 = 12,100 (compound growth).",
  },
  {
    id: "mar-p-04", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A number is increased by 25% and then decreased by 20%. The net effect is ____",
    options: ["no change", "5% increase", "5% decrease", "45% increase"], correct: 0,
    explanation: "1.25 × 0.80 = 1.00, i.e. no net change.",
  },
  {
    id: "mar-p-05", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the price of an item increases by 25%, by what percent must its consumption be reduced to keep the expenditure the same?",
    options: ["20%", "25%", "15%", "30%"], correct: 0,
    explanation: "Required reduction = (increase)/(100 + increase) × 100 = 25/125 × 100 = 20%.",
  },
  {
    id: "mar-p-06", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In an election between two candidates, the winner got 60% of the votes and won by 200 votes. The total number of votes was ____",
    options: ["1000", "500", "1200", "800"], correct: 0,
    explanation: "Winner 60%, loser 40%; the margin 20% = 200 votes, so total = 200 ÷ 0.20 = 1000 votes.",
  },
  {
    id: "mar-p-07", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If A's salary is 20% more than B's, then B's salary is how much percent less than A's?",
    options: ["16⅔%", "20%", "25%", "10%"], correct: 0,
    explanation: "Let B = 100, then A = 120. B is less than A by 20/120 × 100 = 16⅔%.",
  },
  {
    id: "mar-p-08", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If x is 25% of y, then y is what percent of x?",
    options: ["400%", "25%", "75%", "125%"], correct: 0,
    explanation: "x = 25% of y = y/4, so y = 4x. Thus y is 400% of x.",
  },
  {
    id: "mar-p-09", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In a class, 40% are girls and there are 240 boys. The total number of students is ____",
    options: ["400", "360", "600", "480"], correct: 0,
    explanation: "If 40% are girls, 60% are boys. 60% = 240 → total = 240 ÷ 0.6 = 400.",
  },
  {
    id: "mar-p-10", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A student needs 40% marks to pass. He scored 150 marks and failed by 30 marks. The maximum marks are ____",
    options: ["450", "400", "375", "500"], correct: 0,
    explanation: "Pass mark = 150 + 30 = 180, which is 40% of the maximum. So maximum = 180 ÷ 0.40 = 450.",
  },
  {
    id: "mar-p-11", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "What percent of 2/3 is 1/6?",
    options: ["25%", "50%", "20%", "33⅓%"], correct: 0,
    explanation: "(1/6) ÷ (2/3) = (1/6) × (3/2) = 3/12 = 1/4 = 25%.",
  },
  {
    id: "mar-p-12", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of a machine depreciates by 10% every year. If its present value is ₹10,000, its value after 2 years will be ____",
    options: ["₹8,100", "₹8,000", "₹9,000", "₹8,900"], correct: 0,
    explanation: "Value = 10000 × (0.9)² = 10000 × 0.81 = ₹8,100.",
  },
  {
    id: "mar-p-13", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "60% of the students in a school are boys. If the number of girls is 400, the number of boys is ____",
    options: ["600", "400", "500", "240"], correct: 0,
    explanation: "Girls are 40% = 400, so 1% = 10; boys are 60% = 600.",
  },
  {
    id: "mar-p-14", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If 15% of A = 20% of B, then A : B = ?",
    options: ["4 : 3", "3 : 4", "4 : 5", "5 : 4"], correct: 0,
    explanation: "0.15A = 0.20B → A/B = 0.20/0.15 = 20/15 = 4/3, so A : B = 4 : 3.",
  },
  {
    id: "mar-p-15", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A's income is 25% more than B's income. B's income is what percent of A's?",
    options: ["80%", "75%", "125%", "20%"], correct: 0,
    explanation: "Let B = 100, A = 125. B is (100/125) × 100 = 80% of A.",
  },
  {
    id: "mar-p-16", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If a number is first increased by 50% and then decreased by 50%, the net change is ____",
    options: ["25% decrease", "no change", "25% increase", "50% decrease"], correct: 0,
    explanation: "1.5 × 0.5 = 0.75, i.e. a 25% net decrease.",
  },
  {
    id: "mar-p-17", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "72% of 25 students passed. The number who failed is ____",
    options: ["7", "18", "5", "8"], correct: 0,
    explanation: "Passed = 72% of 25 = 18, so failed = 25 − 18 = 7. (Or 28% of 25 = 7.)",
  },
  {
    id: "mar-p-18", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the length of a rectangle is increased by 20% and the breadth decreased by 20%, the area changes by ____",
    options: ["4% decrease", "no change", "4% increase", "20% decrease"], correct: 0,
    explanation: "New area factor = 1.2 × 0.8 = 0.96, i.e. a 4% decrease in area.",
  },

  // ==================================================== Ratio & Partnership, PROFICIENT
  {
    id: "mar-p-19", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Two numbers are in the ratio 3 : 5. If 10 is added to each, the ratio becomes 5 : 7. The numbers are ____",
    options: ["15 and 25", "9 and 15", "12 and 20", "6 and 10"], correct: 0,
    explanation: "Let the numbers be 3x and 5x. (3x + 10)/(5x + 10) = 5/7 → 7(3x + 10) = 5(5x + 10) → 21x + 70 = 25x + 50 → 4x = 20 → x = 5. Numbers: 15 and 25.",
  },
  {
    id: "mar-p-20", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If 2A = 3B = 4C, then A : B : C = ?",
    options: ["6 : 4 : 3", "2 : 3 : 4", "4 : 3 : 2", "3 : 4 : 6"], correct: 0,
    explanation: "Let 2A = 3B = 4C = 12k. Then A = 6k, B = 4k, C = 3k, so A : B : C = 6 : 4 : 3.",
  },
  {
    id: "mar-p-21", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A and B invest ₹3,000 and ₹5,000 in a business. Out of a profit of ₹8,000, B's share is ____",
    options: ["₹5,000", "₹3,000", "₹4,000", "₹6,000"], correct: 0,
    explanation: "Profit is shared in the ratio of investment 3000 : 5000 = 3 : 5. B's share = 5/8 × 8000 = ₹5,000.",
  },
  {
    id: "mar-p-22", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A invests ₹6,000 for 6 months and B invests ₹4,000 for 12 months. Their profit-sharing ratio is ____",
    options: ["3 : 4", "3 : 2", "1 : 1", "6 : 4"], correct: 0,
    explanation: "Ratio of (capital × time): A = 6000 × 6 = 36000; B = 4000 × 12 = 48000. So 36000 : 48000 = 3 : 4.",
  },
  {
    id: "mar-p-23", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The ratio of two numbers is 5 : 8. If 8 is added to each, the ratio becomes 2 : 3. The numbers are ____",
    options: ["40 and 64", "20 and 32", "10 and 16", "25 and 40"], correct: 0,
    explanation: "Let numbers be 5x, 8x. (5x + 8)/(8x + 8) = 2/3 → 3(5x + 8) = 2(8x + 8) → 15x + 24 = 16x + 16 → x = 8. Numbers: 40 and 64.",
  },
  {
    id: "mar-p-24", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The ratio of the ages of a father and son is 4 : 1, and the sum of their ages is 50 years. The father's age is ____",
    options: ["40 years", "35 years", "45 years", "30 years"], correct: 0,
    explanation: "Total parts = 5, each part = 50 ÷ 5 = 10. Father = 4 parts = 40 years, son = 10 years.",
  },
  {
    id: "mar-p-25", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A mixture of 20 litres has milk and water in the ratio 3 : 2. The quantity of milk is ____",
    options: ["12 litres", "8 litres", "10 litres", "15 litres"], correct: 0,
    explanation: "Total parts = 5; each part = 20 ÷ 5 = 4 litres. Milk = 3 parts = 12 litres.",
  },
  {
    id: "mar-p-26", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In a mixture of 40 litres, milk and water are in the ratio 3 : 1. How much water must be added to make the ratio 3 : 2?",
    options: ["10 litres", "5 litres", "8 litres", "15 litres"], correct: 0,
    explanation: "Milk = 30 L, water = 10 L. For milk : water = 3 : 2 with milk 30 L, water must be 20 L. So add 20 − 10 = 10 litres.",
  },
  {
    id: "mar-p-27", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "₹1,050 is divided among A, B, C such that A : B = 2 : 3 and B : C = 4 : 5. C's share is ____",
    options: ["₹450", "₹360", "₹300", "₹525"], correct: 0,
    explanation: "Make B common (LCM of 3 and 4 = 12): A : B : C = 8 : 12 : 15. Total parts = 35; each part = 1050 ÷ 35 = ₹30. C's share = 15 × 30 = ₹450.",
  },
  {
    id: "mar-p-28", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If a : b = 2 : 3, then (2a + 3b) : (a + b) = ?",
    options: ["13 : 5", "2 : 3", "5 : 13", "7 : 5"], correct: 0,
    explanation: "Let a = 2, b = 3. (2×2 + 3×3) : (2 + 3) = (4 + 9) : 5 = 13 : 5.",
  },
  {
    id: "mar-p-29", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Three partners share a profit in the ratio 1/2 : 1/3 : 1/4. The ratio in whole numbers is ____",
    options: ["6 : 4 : 3", "2 : 3 : 4", "1 : 1 : 1", "3 : 4 : 6"], correct: 0,
    explanation: "Multiply each by the LCM of denominators (12): (1/2, 1/3, 1/4) × 12 = 6 : 4 : 3.",
  },
  {
    id: "mar-p-30", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the ratio of two numbers is 3 : 4 and their HCF is 5, the numbers are ____",
    options: ["15 and 20", "3 and 4", "30 and 40", "9 and 12"], correct: 0,
    explanation: "If the ratio is 3 : 4 and HCF is 5, the numbers are 3 × 5 and 4 × 5 = 15 and 20.",
  },
  {
    id: "mar-p-31", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The duplicate ratio of 3 : 4 is ____",
    options: ["9 : 16", "6 : 8", "3 : 4", "27 : 64"], correct: 0,
    explanation: "The duplicate ratio squares both terms: 3² : 4² = 9 : 16. (The triplicate ratio cubes them: 27 : 64.)",
  },
  {
    id: "mar-p-32", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum is divided among P, Q, R so that P gets twice Q and Q gets twice R. If R gets ₹400, the total is ____",
    options: ["₹2,800", "₹2,400", "₹1,600", "₹2,000"], correct: 0,
    explanation: "R = 400, Q = 2R = 800, P = 2Q = 1600. Total = 1600 + 800 + 400 = ₹2,800.",
  },
  {
    id: "mar-p-33", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If a : b = 3 : 4 and b : c = 8 : 9, then a : c = ?",
    options: ["2 : 3", "3 : 9", "3 : 4", "8 : 9"], correct: 0,
    explanation: "a : b : c → make b common (LCM of 4 and 8 is 8): a : b = 6 : 8, b : c = 8 : 9, so a : c = 6 : 9 = 2 : 3.",
  },
  {
    id: "mar-p-34", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A, B and C started a business investing ₹5,000, ₹6,000 and ₹4,000. If the total profit is ₹4,500, A's share is ____",
    options: ["₹1,500", "₹1,800", "₹1,200", "₹2,000"], correct: 0,
    explanation: "Ratio 5 : 6 : 4, total parts 15. Each part = 4500 ÷ 15 = ₹300. A's share = 5 × 300 = ₹1,500.",
  },

  // ==================================================== Average & Mixtures, PROFICIENT
  {
    id: "mar-p-35", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of 20 students is 60 and of another 30 students is 70. The average of all 50 students is ____",
    options: ["66", "65", "68", "64"], correct: 0,
    explanation: "Total = 20×60 + 30×70 = 1200 + 2100 = 3300; average = 3300 ÷ 50 = 66 (weighted average).",
  },
  {
    id: "mar-p-36", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A batsman's average in 10 innings is 50. To raise his average to 52, his score in the 11th innings must be ____",
    options: ["72", "62", "52", "70"], correct: 0,
    explanation: "New total needed = 52 × 11 = 572; old total = 50 × 10 = 500. Required score = 572 − 500 = 72.",
  },
  {
    id: "mar-p-37", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of the first 10 even numbers (2, 4, …, 20) is ____",
    options: ["11", "10", "12", "20"], correct: 0,
    explanation: "The average of the first n even numbers is (n + 1). For n = 10, average = 11. (Or sum 110 ÷ 10 = 11.)",
  },
  {
    id: "mar-p-38", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of 5 numbers is 20. If each number is multiplied by 3, the new average is ____",
    options: ["60", "23", "20", "40"], correct: 0,
    explanation: "Multiplying every value by 3 multiplies the average by 3: 20 × 3 = 60.",
  },
  {
    id: "mar-p-39", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average age of 5 members of a family is 30 years. If a baby of age 0 is added, the new average is ____",
    options: ["25 years", "30 years", "24 years", "27 years"], correct: 0,
    explanation: "Total age = 5 × 30 = 150. With the baby, total = 150 for 6 people; average = 150 ÷ 6 = 25 years.",
  },
  {
    id: "mar-p-40", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of 6 numbers is 8. If the average of the first 4 is 5, the average of the last 2 is ____",
    options: ["14", "10", "12", "16"], correct: 0,
    explanation: "Total of 6 = 48; total of first 4 = 20; total of last 2 = 48 − 20 = 28; average = 28 ÷ 2 = 14.",
  },
  {
    id: "mar-p-41", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average weight of 10 boys is 40 kg. If a boy of 60 kg replaces one of 30 kg, the new average is ____",
    options: ["43 kg", "42 kg", "41 kg", "45 kg"], correct: 0,
    explanation: "The total changes by 60 − 30 = 30 kg, so the average rises by 30 ÷ 10 = 3 kg: 40 + 3 = 43 kg.",
  },
  {
    id: "mar-p-42", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In what ratio must rice at ₹30/kg be mixed with rice at ₹40/kg to get a mixture worth ₹34/kg?",
    options: ["3 : 2", "2 : 3", "1 : 1", "4 : 3"], correct: 0,
    explanation: "By alligation: (40 − 34) : (34 − 30) = 6 : 4 = 3 : 2 (cheaper : dearer).",
  },
  {
    id: "mar-p-43", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of 11 results is 50. If the average of the first 6 is 49 and of the last 6 is 52, the 6th result is ____",
    options: ["56", "50", "48", "60"], correct: 0,
    explanation: "First 6 total = 294; last 6 total = 312; sum = 606. This counts the 6th result twice. Total of 11 = 550. So 6th = 606 − 550 = 56.",
  },
  {
    id: "mar-p-44", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of three consecutive odd numbers is 27. The largest number is ____",
    options: ["29", "27", "25", "31"], correct: 0,
    explanation: "For consecutive numbers, the average is the middle term = 27. So the numbers are 25, 27, 29; the largest is 29.",
  },
  {
    id: "mar-p-45", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A man buys 2 kg of apples at ₹40/kg and 3 kg at ₹50/kg. The average price per kg is ____",
    options: ["₹46", "₹45", "₹44", "₹48"], correct: 0,
    explanation: "Total cost = 2×40 + 3×50 = 80 + 150 = ₹230 for 5 kg. Average = 230 ÷ 5 = ₹46/kg.",
  },
  {
    id: "mar-p-46", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of 40 numbers is 25. If two numbers, 30 and 20, are discarded, the average of the rest is ____",
    options: ["25", "24", "26", "23"], correct: 0,
    explanation: "Total = 40 × 25 = 1000. Removing 30 + 20 = 50 gives 950 for 38 numbers; average = 950 ÷ 38 = 25.",
  },
  {
    id: "mar-p-47", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average of the squares of the first 3 natural numbers (1², 2², 3²) is ____",
    options: ["14/3", "14", "6", "4"], correct: 0,
    explanation: "1² + 2² + 3² = 1 + 4 + 9 = 14; average = 14 ÷ 3 = 14/3 (≈ 4.67).",
  },
  {
    id: "mar-p-48", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If 30% of A is equal to 0.25 of B, then A : B = ?",
    options: ["5 : 6", "6 : 5", "3 : 25", "6 : 25"], correct: 0,
    explanation: "0.30A = 0.25B → A/B = 0.25/0.30 = 25/30 = 5/6, so A : B = 5 : 6.",
  },
  {
    id: "mar-p-49", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A shopkeeper mixes 30 kg of sugar worth ₹20/kg with 20 kg worth ₹25/kg. The cost per kg of the mixture is ____",
    options: ["₹22", "₹23", "₹21", "₹24"], correct: 0,
    explanation: "Total cost = 30×20 + 20×25 = 600 + 500 = ₹1100 for 50 kg; per kg = 1100 ÷ 50 = ₹22.",
  },
  {
    id: "mar-p-50", section: "numerical", topic: "Arithmetic", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The average marks of a student fell from 75 to 72 when a subject with 45 marks was added. The number of subjects (before adding) was ____",
    options: ["9", "10", "8", "12"], correct: 0,
    explanation: "Let there be n subjects at average 75 (total 75n). After adding 45: (75n + 45)/(n + 1) = 72 → 75n + 45 = 72n + 72 → 3n = 27 → n = 9.",
  },
];
