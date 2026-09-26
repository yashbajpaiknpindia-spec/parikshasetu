/**
 * Mathematics, Data Interpretation, Statistics & Probability.
 *
 * section: "numerical". topic: "Data interpretation". Shared across both exam levels.
 *   • beginner, mean/median/mode/range, simple probability, reading small data sets.
 *   • proficient, combined mean, grouped-data logic, tougher probability, chart maths.
 *
 * Every answer carries the working. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const maDiBank: Question[] = [
  // ==================================================== Averages / Central tendency, BEGINNER
  {
    id: "md-b-01", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The mean of 10, 20, 30, 40 and 50 is ____",
    options: ["30", "25", "35", "150"], correct: 0,
    explanation: "Mean = sum ÷ number of values = (10+20+30+40+50) ÷ 5 = 150 ÷ 5 = 30.",
  },
  {
    id: "md-b-02", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The median of 3, 5, 7, 9, 11 is ____",
    options: ["7", "5", "9", "35"], correct: 0,
    explanation: "For an odd number of sorted values, the median is the middle one. Here the middle value is 7.",
  },
  {
    id: "md-b-03", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The mode of 2, 3, 3, 4, 5 is ____",
    options: ["3", "4", "2", "5"], correct: 0,
    explanation: "The mode is the value that occurs most often. Here 3 appears twice, more than any other, so the mode is 3.",
  },
  {
    id: "md-b-04", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The range of the data 3, 5, 8, 12 is ____",
    options: ["9", "12", "3", "8"], correct: 0,
    explanation: "Range = highest value − lowest value = 12 − 3 = 9.",
  },
  {
    id: "md-b-05", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The median of 2, 4, 6, 8 is ____",
    options: ["5", "4", "6", "20"], correct: 0,
    explanation: "For an even number of values, the median is the average of the two middle values: (4 + 6) ÷ 2 = 5.",
  },
  {
    id: "md-b-06", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mean of the first 10 natural numbers is ____",
    options: ["5.5", "5", "10", "55"], correct: 0,
    explanation: "Sum of 1 to 10 = 55; mean = 55 ÷ 10 = 5.5.",
  },
  {
    id: "md-b-07", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The average of 6 numbers is 15. Their total is ____",
    options: ["90", "21", "15", "45"], correct: 0,
    explanation: "Total = average × count = 15 × 6 = 90.",
  },
  {
    id: "md-b-08", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mode of 5, 6, 6, 7, 6, 8 is ____",
    options: ["6", "7", "5", "8"], correct: 0,
    explanation: "6 appears three times, more than any other value, so the mode is 6.",
  },
  {
    id: "md-b-09", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mean of 12, 15, 18 is ____",
    options: ["15", "16", "14", "45"], correct: 0,
    explanation: "Mean = (12 + 15 + 18) ÷ 3 = 45 ÷ 3 = 15.",
  },
  {
    id: "md-b-10", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The median of 7, 3, 9, 5, 11 (after arranging) is ____",
    options: ["7", "9", "5", "3"], correct: 0,
    explanation: "Arrange in order: 3, 5, 7, 9, 11. The middle value is 7.",
  },
  {
    id: "md-b-11", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The range of 15, 22, 8, 30, 12 is ____",
    options: ["22", "30", "8", "15"], correct: 0,
    explanation: "Range = 30 (max) − 8 (min) = 22.",
  },
  {
    id: "md-b-12", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The average of the first 5 even numbers (2, 4, 6, 8, 10) is ____",
    options: ["6", "5", "30", "8"], correct: 0,
    explanation: "Mean = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6.",
  },
  {
    id: "md-b-13", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The marks of a student in 5 subjects are 60, 70, 80, 90, 100. His average is ____",
    options: ["80", "70", "75", "400"], correct: 0,
    explanation: "Average = (60+70+80+90+100) ÷ 5 = 400 ÷ 5 = 80.",
  },
  {
    id: "md-b-14", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mean of 5 observations is 20. If four of them are 15, 18, 22, 25, the fifth is ____",
    options: ["20", "15", "25", "18"], correct: 0,
    explanation: "Total = 20 × 5 = 100. Fifth = 100 − (15+18+22+25) = 100 − 80 = 20.",
  },
  {
    id: "md-b-15", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The median of 10, 20, 30, 40, 50, 60 is ____",
    options: ["35", "30", "40", "45"], correct: 0,
    explanation: "Six values → median = average of the 3rd and 4th = (30 + 40) ÷ 2 = 35.",
  },
  {
    id: "md-b-16", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "If all values in a data set are 8, the mean is ____",
    options: ["8", "0", "1", "64"], correct: 0,
    explanation: "If every value is the same (8), the mean is also 8.",
  },
  {
    id: "md-b-17", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The average temperature over 4 days was 30°C. If three days were 28°, 32° and 29°, the fourth day was ____",
    options: ["31°C", "30°C", "29°C", "33°C"], correct: 0,
    explanation: "Total = 30 × 4 = 120. Fourth = 120 − (28 + 32 + 29) = 120 − 89 = 31°C.",
  },
  {
    id: "md-b-18", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mode of 4, 4, 5, 5, 5, 6 is ____",
    options: ["5", "4", "6", "4.5"], correct: 0,
    explanation: "5 occurs three times, more than any other value, so the mode is 5.",
  },
  {
    id: "md-b-19", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The average of 25 and 35 is ____",
    options: ["30", "60", "10", "25"], correct: 0,
    explanation: "Average = (25 + 35) ÷ 2 = 60 ÷ 2 = 30.",
  },
  {
    id: "md-b-20", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mean of x, 2x and 3x is ____",
    options: ["2x", "x", "3x", "6x"], correct: 0,
    explanation: "Mean = (x + 2x + 3x) ÷ 3 = 6x ÷ 3 = 2x.",
  },
  {
    id: "md-b-21", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The median of 8, 2, 6, 4 (after arranging) is ____",
    options: ["5", "4", "6", "3"], correct: 0,
    explanation: "Arrange: 2, 4, 6, 8. Median = average of 4 and 6 = (4 + 6) ÷ 2 = 5.",
  },
  {
    id: "md-b-22", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The average of 0 and 100 is ____",
    options: ["50", "100", "0", "10"], correct: 0,
    explanation: "Average = (0 + 100) ÷ 2 = 50.",
  },
  {
    id: "md-b-23", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The mean of 5 numbers is 12. If a 6th number 18 is added, the new mean is ____",
    options: ["13", "12", "15", "14"], correct: 0,
    explanation: "Old total = 5 × 12 = 60; new total = 60 + 18 = 78 over 6 numbers; new mean = 78 ÷ 6 = 13.",
  },
  {
    id: "md-b-24", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The most frequently occurring value in a data set is called the ____",
    options: ["mode", "mean", "median", "range"], correct: 0,
    explanation: "The mode is the value that occurs most frequently in a data set.",
  },

  // ==================================================== Probability, BEGINNER
  {
    id: "md-b-25", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The probability of getting a head when a fair coin is tossed is ____",
    options: ["1/2", "1", "1/4", "0"], correct: 0,
    explanation: "A coin has 2 equally likely outcomes (head, tail); P(head) = 1/2.",
  },
  {
    id: "md-b-26", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "easy",
    stem: "The probability of getting a 3 when a fair die is rolled is ____",
    options: ["1/6", "1/3", "1/2", "3/6"], correct: 0,
    explanation: "A die has 6 equally likely outcomes; only one is a 3, so P(3) = 1/6.",
  },
  {
    id: "md-b-27", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of getting an even number on a die is ____",
    options: ["1/2", "1/3", "1/6", "2/3"], correct: 0,
    explanation: "Even numbers on a die are 2, 4, 6, that is 3 outcomes out of 6. P(even) = 3/6 = 1/2.",
  },
  {
    id: "md-b-28", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A bag has 3 red and 2 blue balls. The probability of drawing a red ball is ____",
    options: ["3/5", "2/5", "1/5", "3/2"], correct: 0,
    explanation: "P(red) = favourable ÷ total = 3 ÷ (3 + 2) = 3/5.",
  },
  {
    id: "md-b-29", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of a sure (certain) event is ____",
    options: ["1", "0", "1/2", "100"], correct: 0,
    explanation: "A certain (sure) event always happens, so its probability is 1. An impossible event has probability 0.",
  },
  {
    id: "md-b-30", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of an impossible event is ____",
    options: ["0", "1", "1/2", "−1"], correct: 0,
    explanation: "An impossible event never occurs, so its probability is 0. (Probability always lies between 0 and 1.)",
  },
  {
    id: "md-b-31", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of getting a number greater than 4 on a die is ____",
    options: ["1/3", "1/6", "1/2", "2/3"], correct: 0,
    explanation: "Numbers greater than 4 are 5 and 6, 2 outcomes out of 6. P = 2/6 = 1/3.",
  },
  {
    id: "md-b-32", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A bag has 4 white and 6 black balls. The probability of drawing a black ball is ____",
    options: ["3/5", "2/5", "4/6", "1/6"], correct: 0,
    explanation: "P(black) = 6 ÷ (4 + 6) = 6/10 = 3/5.",
  },
  {
    id: "md-b-33", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of getting a tail when a coin is tossed is ____",
    options: ["1/2", "1", "0", "2"], correct: 0,
    explanation: "P(tail) = 1 out of 2 outcomes = 1/2.",
  },
  {
    id: "md-b-34", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of drawing a red card from a standard pack of 52 cards is ____",
    options: ["1/2", "1/4", "1/13", "1/26"], correct: 0,
    explanation: "There are 26 red cards (hearts + diamonds) out of 52. P = 26/52 = 1/2.",
  },
  {
    id: "md-b-35", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "The probability of getting a number less than 3 on a die is ____",
    options: ["1/3", "1/2", "1/6", "2/3"], correct: 0,
    explanation: "Numbers less than 3 are 1 and 2, 2 outcomes out of 6. P = 2/6 = 1/3.",
  },
  {
    id: "md-b-36", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "If the probability of an event is 0.3, the probability of it NOT happening is ____",
    options: ["0.7", "0.3", "1.3", "0"], correct: 0,
    explanation: "P(not happening) = 1 − P(happening) = 1 − 0.3 = 0.7.",
  },
  {
    id: "md-b-37", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A die is rolled. The probability of getting an odd number is ____",
    options: ["1/2", "1/3", "2/3", "1/6"], correct: 0,
    explanation: "Odd numbers on a die are 1, 3, 5, 3 outcomes out of 6. P = 3/6 = 1/2.",
  },
  {
    id: "md-b-38", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A bag has 5 balls, all green. The probability of drawing a green ball is ____",
    options: ["1", "1/5", "0", "5"], correct: 0,
    explanation: "All 5 balls are green, so drawing a green ball is a certain event; P = 5/5 = 1.",
  },

  // ==================================================== Data reading, BEGINNER
  {
    id: "md-b-39", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A shop sold 20, 30, 25 and 25 units on four days. The total units sold were ____",
    options: ["100", "80", "90", "75"], correct: 0,
    explanation: "Total = 20 + 30 + 25 + 25 = 100 units.",
  },
  {
    id: "md-b-40", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "In the above data (20, 30, 25, 25), the average daily sale was ____",
    options: ["25", "30", "20", "100"], correct: 0,
    explanation: "Average = total ÷ number of days = 100 ÷ 4 = 25 units per day.",
  },
  {
    id: "md-b-41", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A pie chart shows 25% for 'Food'. If total spending is ₹4,000, the amount on Food is ____",
    options: ["₹1,000", "₹250", "₹2,500", "₹400"], correct: 0,
    explanation: "25% of 4000 = (25/100) × 4000 = ₹1,000.",
  },
  {
    id: "md-b-42", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "In a pie chart, a sector for 'Rent' takes up 90°. What percentage of the total is Rent?",
    options: ["25%", "90%", "50%", "10%"], correct: 0,
    explanation: "A full circle is 360°. Percentage = (90/360) × 100 = 25%.",
  },
  {
    id: "md-b-43", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A class has 40 students; 25% play cricket. The number who play cricket is ____",
    options: ["10", "25", "15", "20"], correct: 0,
    explanation: "25% of 40 = (25/100) × 40 = 10 students.",
  },
  {
    id: "md-b-44", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A bar chart shows sales of 50, 70 and 80 for three months. The highest sale was in the month with ____",
    options: ["80", "50", "70", "200"], correct: 0,
    explanation: "The largest value is 80, so that month had the highest sale.",
  },
  {
    id: "md-b-45", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "In a survey of 200 people, 40% liked tea. The number who liked tea is ____",
    options: ["80", "40", "160", "120"], correct: 0,
    explanation: "40% of 200 = (40/100) × 200 = 80 people.",
  },
  {
    id: "md-b-46", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A table shows a factory producing 100, 150 and 200 units in three years. The total production is ____",
    options: ["450", "350", "300", "500"], correct: 0,
    explanation: "Total = 100 + 150 + 200 = 450 units.",
  },
  {
    id: "md-b-47", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "If a pie chart shows 'Savings' as 20% of ₹5,000, the savings amount is ____",
    options: ["₹1,000", "₹500", "₹100", "₹2,000"], correct: 0,
    explanation: "20% of 5000 = (20/100) × 5000 = ₹1,000.",
  },
  {
    id: "md-b-48", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A bar chart shows rainfall of 10, 20, 30 and 40 mm over four weeks. The average weekly rainfall is ____",
    options: ["25 mm", "20 mm", "30 mm", "100 mm"], correct: 0,
    explanation: "Average = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = 25 mm.",
  },
  {
    id: "md-b-49", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "In a class of 50, if 30 are girls, the percentage of boys is ____",
    options: ["40%", "60%", "30%", "20%"], correct: 0,
    explanation: "Boys = 50 − 30 = 20. Percentage of boys = (20/50) × 100 = 40%.",
  },
  {
    id: "md-b-50", section: "numerical", topic: "Data interpretation", level: "beginner", difficulty: "medium",
    stem: "A shopkeeper's earnings for 5 days are ₹200, ₹250, ₹300, ₹150 and ₹100. His average daily earning is ____",
    options: ["₹200", "₹250", "₹150", "₹1000"], correct: 0,
    explanation: "Total = 200 + 250 + 300 + 150 + 100 = ₹1000; average = 1000 ÷ 5 = ₹200.",
  },

  // ==================================================== Statistics, PROFICIENT
  {
    id: "md-p-01", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The mean of 20 students is 60 and of another 30 students is 70. The combined mean of all 50 students is ____",
    options: ["66", "65", "68", "64"], correct: 0,
    explanation: "Combined mean = (20×60 + 30×70) ÷ 50 = (1200 + 2100) ÷ 50 = 3300 ÷ 50 = 66.",
  },
  {
    id: "md-p-02", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The mean of 10 observations is 25. One observation, 30, was wrongly recorded as 20. The correct mean is ____",
    options: ["26", "25", "24", "27"], correct: 0,
    explanation: "Wrong sum = 25 × 10 = 250. The value was understated by 10, so correct sum = 260; correct mean = 260 ÷ 10 = 26.",
  },
  {
    id: "md-p-03", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The mean of the first n natural numbers is ____",
    options: ["(n + 1)/2", "n/2", "n(n+1)/2", "(n − 1)/2"], correct: 0,
    explanation: "Sum of first n naturals = n(n+1)/2; mean = that ÷ n = (n + 1)/2.",
  },
  {
    id: "md-p-04", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "For a moderately skewed distribution, Mode = 3 Median − 2 Mean. If Mean = 30 and Median = 32, the Mode is ____",
    options: ["36", "34", "30", "28"], correct: 0,
    explanation: "Mode = 3 × 32 − 2 × 30 = 96 − 60 = 36.",
  },
  {
    id: "md-p-05", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of 5 numbers is 30. If each number is increased by 4, the new average is ____",
    options: ["34", "30", "150", "38"], correct: 0,
    explanation: "Adding a constant to every value adds the same constant to the mean: 30 + 4 = 34.",
  },
  {
    id: "md-p-06", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of 8 numbers is 20. If each is multiplied by 5, the new average is ____",
    options: ["100", "25", "20", "40"], correct: 0,
    explanation: "Multiplying every value by 5 multiplies the mean by 5: 20 × 5 = 100.",
  },
  {
    id: "md-p-07", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The mean of 11 numbers is 35. If the mean of the first 6 is 32 and of the last 6 is 37, the 6th number is ____",
    options: ["29", "35", "41", "34"], correct: 0,
    explanation: "First 6 total = 192; last 6 total = 222; sum = 414, counting the 6th twice. Total of 11 = 385. So 6th = 414 − 385 = 29.",
  },
  {
    id: "md-p-08", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average weight of 10 men is 60 kg. When one man leaves, the average of the remaining 9 becomes 59 kg. The weight of the man who left is ____",
    options: ["69 kg", "60 kg", "59 kg", "70 kg"], correct: 0,
    explanation: "Total of 10 = 600; total of 9 = 531. The man who left = 600 − 531 = 69 kg.",
  },
  {
    id: "md-p-09", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The median of the data 12, 15, 10, 8, 20, 18 (after arranging) is ____",
    options: ["13.5", "15", "12", "14"], correct: 0,
    explanation: "Arrange: 8, 10, 12, 15, 18, 20. Six values → median = average of 3rd and 4th = (12 + 15) ÷ 2 = 13.5.",
  },
  {
    id: "md-p-10", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average marks of a class of 40 students is 65. If the average of the boys (25) is 60, the average of the 15 girls is ____",
    options: ["73⅓", "70", "75", "68"], correct: 0,
    explanation: "Total = 40 × 65 = 2600; boys' total = 25 × 60 = 1500; girls' total = 1100 for 15 girls → 1100 ÷ 15 = 73⅓.",
  },
  {
    id: "md-p-11", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average age of a family of 6 members is 25 years. The youngest member is 5 years old. The average age of the other 5 members at the time the youngest was born was ____",
    options: ["24 years", "20 years", "25 years", "30 years"], correct: 0,
    explanation: "Present total age = 6 × 25 = 150. Five years ago the youngest was not born, and each of the other 5 members was 5 years younger: their total then = (150 − 5) − (5 × 5) = 145 − 25 = 120. Average = 120 ÷ 5 = 24 years.",
  },
  {
    id: "md-p-12", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of 50 numbers is 30. If two numbers, 35 and 40, are removed, the average of the remaining 48 is ____",
    options: ["29.7 (approx)", "30", "28", "31"], correct: 0,
    explanation: "Total = 1500; after removing 75 → 1425 over 48 numbers; average = 1425 ÷ 48 ≈ 29.7.",
  },
  {
    id: "md-p-13", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The arithmetic mean of 2, 4, 6, 8, …, 20 (first 10 even numbers) is ____",
    options: ["11", "10", "12", "20"], correct: 0,
    explanation: "Sum of first 10 even numbers = 10 × 11 = 110; mean = 110 ÷ 10 = 11 (equal to n+1).",
  },
  {
    id: "md-p-14", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The mode of the data 4, 6, 8, 6, 4, 6, 8, 4 is ____",
    options: ["4 and 6 (bimodal)", "4", "6", "8"], correct: 0,
    explanation: "4 appears 3 times and 6 appears 3 times (8 appears twice). Two values share the highest frequency, so the data is bimodal, modes 4 and 6.",
  },
  {
    id: "md-p-15", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The sum of 12 numbers is 600. If two numbers are wrongly added as 50 and 60 instead of 40 and 30, the correct sum is ____",
    options: ["560", "600", "640", "540"], correct: 0,
    explanation: "Excess added = (50 − 40) + (60 − 30) = 10 + 30 = 40. Correct sum = 600 − 40 = 560.",
  },
  {
    id: "md-p-16", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of 9 consecutive numbers is 20. The largest of these numbers is ____",
    options: ["24", "20", "28", "25"], correct: 0,
    explanation: "For consecutive numbers, the middle (5th) equals the average 20. So the numbers run 16…24; the largest is 24.",
  },
  {
    id: "md-p-17", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "If the mean of 5 numbers is 18 and four of them are 12, 20, 22, 16, the standard 'missing value' is ____",
    options: ["20", "18", "22", "16"], correct: 0,
    explanation: "Total = 90; missing = 90 − (12 + 20 + 22 + 16) = 90 − 70 = 20.",
  },
  {
    id: "md-p-18", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a data set, the mean is 25 and the median is 25. The data is most likely ____",
    options: ["symmetric", "positively skewed", "negatively skewed", "bimodal"], correct: 0,
    explanation: "When the mean and median are equal, the distribution is symmetric (not skewed).",
  },
  {
    id: "md-p-19", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of the squares 1², 2², 3², 4² is ____",
    options: ["7.5", "10", "30", "6"], correct: 0,
    explanation: "1 + 4 + 9 + 16 = 30; average = 30 ÷ 4 = 7.5.",
  },
  {
    id: "md-p-20", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The average of 40 numbers is 18 and of another 60 numbers is 28. The average of all 100 numbers is ____",
    options: ["24", "23", "25", "46"], correct: 0,
    explanation: "Combined = (40×18 + 60×28) ÷ 100 = (720 + 1680) ÷ 100 = 2400 ÷ 100 = 24.",
  },

  // ==================================================== Probability, PROFICIENT
  {
    id: "md-p-21", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Two dice are thrown. The probability that the sum is 7 is ____",
    options: ["1/6", "1/12", "5/36", "1/9"], correct: 0,
    explanation: "Sum 7 occurs as (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 ways out of 36. P = 6/36 = 1/6.",
  },
  {
    id: "md-p-22", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Two dice are thrown. The probability that both show even numbers is ____",
    options: ["1/4", "1/2", "1/9", "1/6"], correct: 0,
    explanation: "Each die shows even (2,4,6) with 3 options; favourable = 3 × 3 = 9 out of 36. P = 9/36 = 1/4.",
  },
  {
    id: "md-p-23", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Two dice are thrown. The probability that the sum is 8 is ____",
    options: ["5/36", "1/6", "1/9", "1/12"], correct: 0,
    explanation: "Sum 8: (2,6),(3,5),(4,4),(5,3),(6,2) = 5 ways out of 36. P = 5/36.",
  },
  {
    id: "md-p-24", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A card is drawn from a pack of 52. The probability that it is a king is ____",
    options: ["1/13", "1/4", "1/52", "4/13"], correct: 0,
    explanation: "There are 4 kings in 52 cards. P = 4/52 = 1/13.",
  },
  {
    id: "md-p-25", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A card is drawn from a pack of 52. The probability that it is a face card (J, Q, K) is ____",
    options: ["3/13", "1/13", "1/4", "12/13"], correct: 0,
    explanation: "There are 12 face cards (3 in each of 4 suits). P = 12/52 = 3/13.",
  },
  {
    id: "md-p-26", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A card is drawn from a pack of 52. The probability that it is a spade is ____",
    options: ["1/4", "1/13", "1/2", "13/26"], correct: 0,
    explanation: "There are 13 spades out of 52 cards. P = 13/52 = 1/4.",
  },
  {
    id: "md-p-27", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A bag has 3 red and 2 blue balls. Two balls are drawn one after another without replacement. The probability that both are red is ____",
    options: ["3/10", "9/25", "2/5", "1/2"], correct: 0,
    explanation: "P = (3/5) × (2/4) = 6/20 = 3/10 (after the first red, 2 reds remain out of 4 balls).",
  },
  {
    id: "md-p-28", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A coin is tossed twice. The probability of getting at least one head is ____",
    options: ["3/4", "1/2", "1/4", "1"], correct: 0,
    explanation: "P(no head) = (1/2)(1/2) = 1/4. P(at least one head) = 1 − 1/4 = 3/4.",
  },
  {
    id: "md-p-29", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A leap year is chosen at random. The probability that it has 53 Sundays is ____",
    options: ["2/7", "1/7", "53/366", "3/7"], correct: 0,
    explanation: "A leap year has 366 days = 52 weeks + 2 extra days. Those 2 days can be (Sun-Mon) or (Sat-Sun) among 7 equally likely consecutive pairs, so P(53 Sundays) = 2/7.",
  },
  {
    id: "md-p-30", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A non-leap year is chosen at random. The probability that it has 53 Mondays is ____",
    options: ["1/7", "2/7", "53/365", "3/7"], correct: 0,
    explanation: "A normal year has 365 days = 52 weeks + 1 extra day. That extra day is Monday with probability 1/7.",
  },
  {
    id: "md-p-31", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A number is chosen at random from 1 to 20. The probability that it is a prime number is ____",
    options: ["2/5", "1/2", "1/4", "3/5"], correct: 0,
    explanation: "Primes from 1 to 20: 2,3,5,7,11,13,17,19 = 8 numbers. P = 8/20 = 2/5.",
  },
  {
    id: "md-p-32", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A die is thrown. The probability of getting a multiple of 3 is ____",
    options: ["1/3", "1/2", "1/6", "2/3"], correct: 0,
    explanation: "Multiples of 3 on a die are 3 and 6, 2 outcomes out of 6. P = 2/6 = 1/3.",
  },
  {
    id: "md-p-33", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A bag has 4 red, 5 green and 6 blue balls. The probability of drawing a green ball is ____",
    options: ["1/3", "2/3", "1/4", "2/5"], correct: 0,
    explanation: "Total = 4 + 5 + 6 = 15. P(green) = 5/15 = 1/3.",
  },
  {
    id: "md-p-34", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Two coins are tossed. The probability of getting exactly one head is ____",
    options: ["1/2", "1/4", "3/4", "1"], correct: 0,
    explanation: "Outcomes: HH, HT, TH, TT. Exactly one head: HT, TH = 2 out of 4. P = 2/4 = 1/2.",
  },
  {
    id: "md-p-35", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A card is drawn from a pack of 52. The probability that it is a red king is ____",
    options: ["1/26", "1/13", "1/52", "1/4"], correct: 0,
    explanation: "There are 2 red kings (hearts and diamonds) out of 52. P = 2/52 = 1/26.",
  },
  {
    id: "md-p-36", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Two dice are thrown. The probability of getting a doublet (same number on both) is ____",
    options: ["1/6", "1/36", "1/12", "1/3"], correct: 0,
    explanation: "Doublets: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6 out of 36. P = 6/36 = 1/6.",
  },
  {
    id: "md-p-37", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "The probability of drawing an ace or a king from a pack of 52 cards is ____",
    options: ["2/13", "1/13", "1/26", "8/13"], correct: 0,
    explanation: "There are 4 aces and 4 kings = 8 favourable cards. P = 8/52 = 2/13.",
  },
  {
    id: "md-p-38", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A bag has 6 white and 4 black balls. One ball is drawn. The probability that it is NOT white is ____",
    options: ["2/5", "3/5", "4/6", "1/10"], correct: 0,
    explanation: "P(not white) = P(black) = 4 ÷ 10 = 2/5 (or 1 − 6/10 = 4/10 = 2/5).",
  },

  // ==================================================== Data / chart calculation, PROFICIENT
  {
    id: "md-p-39", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A company's sales rose from ₹200 crore to ₹250 crore. The percentage increase is ____",
    options: ["25%", "20%", "50%", "12.5%"], correct: 0,
    explanation: "Increase = 50; % increase = (50/200) × 100 = 25%.",
  },
  {
    id: "md-p-40", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a pie chart of a ₹36,000 budget, 'Education' is 40°. The amount for Education is ____",
    options: ["₹4,000", "₹3,600", "₹8,000", "₹14,400"], correct: 0,
    explanation: "Fraction = 40/360 = 1/9. Amount = 36000 × 1/9 = ₹4,000.",
  },
  {
    id: "md-p-41", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A factory produced 500 units in Year 1 and 650 in Year 2. The percentage growth is ____",
    options: ["30%", "25%", "15%", "20%"], correct: 0,
    explanation: "Growth = 150; % = (150/500) × 100 = 30%.",
  },
  {
    id: "md-p-42", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a class, the ratio of students opting for Science, Commerce and Arts is 3 : 2 : 1. If there are 120 students, the number in Commerce is ____",
    options: ["40", "60", "20", "80"], correct: 0,
    explanation: "Total parts = 6; each = 120 ÷ 6 = 20. Commerce = 2 parts = 40.",
  },
  {
    id: "md-p-43", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A bar chart shows profits of ₹20, ₹30, ₹25 and ₹25 lakh over four quarters. The quarter with maximum profit exceeds the minimum by ____",
    options: ["₹10 lakh", "₹5 lakh", "₹25 lakh", "₹15 lakh"], correct: 0,
    explanation: "Maximum = 30, minimum = 20; difference = ₹10 lakh.",
  },
  {
    id: "md-p-44", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a pie chart, if 'Transport' is 15% of a ₹8,000 budget, the amount is ____",
    options: ["₹1,200", "₹800", "₹1,500", "₹1,000"], correct: 0,
    explanation: "15% of 8000 = (15/100) × 8000 = ₹1,200.",
  },
  {
    id: "md-p-45", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A table shows a shop's sales as 400, 500, 600 and 500 over four weeks. The average of the last two weeks exceeds that of the first two weeks by ____",
    options: ["100", "50", "150", "0"], correct: 0,
    explanation: "First two average = (400+500)/2 = 450; last two average = (600+500)/2 = 550. Difference = 100.",
  },
  {
    id: "md-p-46", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a pie chart, two sectors are 90° and 60°. Their ratio is ____",
    options: ["3 : 2", "2 : 3", "3 : 1", "1 : 2"], correct: 0,
    explanation: "Ratio = 90 : 60 = 3 : 2 (divide both by 30).",
  },
  {
    id: "md-p-47", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "Sales fell from ₹800 to ₹600. The percentage decrease is ____",
    options: ["25%", "20%", "33⅓%", "15%"], correct: 0,
    explanation: "Decrease = 200; % decrease = (200/800) × 100 = 25%.",
  },
  {
    id: "md-p-48", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "In a survey of 500 people, 30% preferred tea, 45% coffee and the rest neither. The number preferring neither is ____",
    options: ["125", "150", "225", "75"], correct: 0,
    explanation: "Neither = 100% − (30 + 45)% = 25%. 25% of 500 = 125.",
  },
  {
    id: "md-p-49", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A pie chart of 360° represents ₹7,200. Each degree represents ____",
    options: ["₹20", "₹36", "₹72", "₹10"], correct: 0,
    explanation: "₹7,200 ÷ 360° = ₹20 per degree.",
  },
  {
    id: "md-p-50", section: "numerical", topic: "Data interpretation", level: "proficient", difficulty: "hard",
    stem: "A student scored 60, 75, 80, 85 and 100 in five tests. The percentage of the maximum possible (100 each) that he scored is ____",
    options: ["80%", "75%", "85%", "90%"], correct: 0,
    explanation: "Total = 400 out of 500. Percentage = (400/500) × 100 = 80%.",
  },
];
