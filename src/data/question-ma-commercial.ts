/**
 * Mathematics, Profit & Loss, Discount, Simple & Compound Interest.
 *
 * section: "numerical". topic: "Commercial maths". Shared across both exam levels.
 *   • beginner, basic profit/loss %, discount, SI and CI.
 *   • proficient, successive discount, CI–SI difference, profit after discount, tricks.
 *
 * Every answer carries the working. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const maCommercialBank: Question[] = [
  // ==================================================== Profit & Loss, BEGINNER
  {
    id: "mc-b-01", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "An article bought for ₹100 is sold for ₹120. The profit percent is ____",
    options: ["20%", "12%", "10%", "25%"], correct: 0,
    explanation: "Profit = 120 − 100 = ₹20. Profit% = (Profit/CP) × 100 = (20/100) × 100 = 20%.",
  },
  {
    id: "mc-b-02", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "An article bought for ₹100 is sold for ₹80. The loss percent is ____",
    options: ["20%", "25%", "80%", "10%"], correct: 0,
    explanation: "Loss = 100 − 80 = ₹20. Loss% = (Loss/CP) × 100 = (20/100) × 100 = 20%.",
  },
  {
    id: "mc-b-03", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The cost price is ₹500 and the profit is ₹100. The selling price is ____",
    options: ["₹600", "₹400", "₹550", "₹650"], correct: 0,
    explanation: "SP = CP + Profit = 500 + 100 = ₹600.",
  },
  {
    id: "mc-b-04", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "A shopkeeper buys an item for ₹400 and wants a 25% profit. The selling price should be ____",
    options: ["₹500", "₹425", "₹450", "₹525"], correct: 0,
    explanation: "Profit = 25% of 400 = ₹100. SP = 400 + 100 = ₹500.",
  },
  {
    id: "mc-b-05", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "An article is sold for ₹150 at a profit of ₹50. The cost price was ____",
    options: ["₹100", "₹200", "₹150", "₹125"], correct: 0,
    explanation: "CP = SP − Profit = 150 − 50 = ₹100.",
  },
  {
    id: "mc-b-06", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If CP = ₹200 and SP = ₹250, the profit percent is ____",
    options: ["25%", "20%", "50%", "10%"], correct: 0,
    explanation: "Profit = 250 − 200 = ₹50. Profit% = (50/200) × 100 = 25%.",
  },
  {
    id: "mc-b-07", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "By selling a pen for ₹18, a shopkeeper gains 20%. The cost price of the pen is ____",
    options: ["₹15", "₹14", "₹16", "₹20"], correct: 0,
    explanation: "SP = 120% of CP → 18 = 1.2 × CP → CP = 18 ÷ 1.2 = ₹15.",
  },
  {
    id: "mc-b-08", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A man buys a cycle for ₹1,000 and sells it for ₹1,100. His gain percent is ____",
    options: ["10%", "11%", "9%", "20%"], correct: 0,
    explanation: "Gain = 100. Gain% = (100/1000) × 100 = 10%.",
  },
  {
    id: "mc-b-09", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "An item costing ₹800 is sold at a 10% loss. The selling price is ____",
    options: ["₹720", "₹880", "₹700", "₹790"], correct: 0,
    explanation: "Loss = 10% of 800 = ₹80. SP = 800 − 80 = ₹720.",
  },
  {
    id: "mc-b-10", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If a book bought for ₹250 is sold for ₹300, the gain percent is ____",
    options: ["20%", "25%", "50%", "15%"], correct: 0,
    explanation: "Gain = 50. Gain% = (50/250) × 100 = 20%.",
  },
  {
    id: "mc-b-11", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A trader sells goods for ₹550 at a 10% profit. The cost price was ____",
    options: ["₹500", "₹495", "₹450", "₹600"], correct: 0,
    explanation: "SP = 110% of CP → 550 = 1.1 × CP → CP = 550 ÷ 1.1 = ₹500.",
  },
  {
    id: "mc-b-12", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If the cost price of 10 articles equals the selling price of 8 articles, the profit percent is ____",
    options: ["25%", "20%", "10%", "8%"], correct: 0,
    explanation: "Let CP of 1 article = ₹1. CP of 10 = ₹10 = SP of 8, so SP of 1 = 10/8 = ₹1.25. Profit% = (0.25/1) × 100 = 25%.",
  },
  {
    id: "mc-b-13", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A fruit-seller buys apples at ₹40/kg and sells at ₹50/kg. His profit percent is ____",
    options: ["25%", "20%", "10%", "50%"], correct: 0,
    explanation: "Profit per kg = ₹10. Profit% = (10/40) × 100 = 25%.",
  },
  {
    id: "mc-b-14", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If SP = ₹960 and loss = 20%, the cost price is ____",
    options: ["₹1,200", "₹1,150", "₹800", "₹1,000"], correct: 0,
    explanation: "SP = 80% of CP → 960 = 0.8 × CP → CP = 960 ÷ 0.8 = ₹1,200.",
  },
  {
    id: "mc-b-15", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A man gains ₹40 on selling an item for ₹240. His profit percent is ____",
    options: ["20%", "16⅔%", "25%", "40%"], correct: 0,
    explanation: "CP = 240 − 40 = ₹200. Profit% = (40/200) × 100 = 20%.",
  },
  {
    id: "mc-b-16", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If an item is sold at ₹90 with a 25% profit, the cost price is ____",
    options: ["₹72", "₹67.50", "₹65", "₹75"], correct: 0,
    explanation: "SP = 125% of CP → 90 = 1.25 × CP → CP = 90 ÷ 1.25 = ₹72.",
  },
  {
    id: "mc-b-17", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A shopkeeper sells a watch for ₹450 at a loss of ₹50. His loss percent is ____",
    options: ["10%", "11%", "12%", "9%"], correct: 0,
    explanation: "CP = 450 + 50 = ₹500. Loss% = (50/500) × 100 = 10%.",
  },
  {
    id: "mc-b-18", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If a chair costing ₹600 is sold at a profit of 15%, the selling price is ____",
    options: ["₹690", "₹660", "₹615", "₹700"], correct: 0,
    explanation: "Profit = 15% of 600 = ₹90. SP = 600 + 90 = ₹690.",
  },
  {
    id: "mc-b-19", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A dozen bananas cost ₹36 and are sold at ₹4 each. The profit percent is ____",
    options: ["33⅓%", "25%", "20%", "10%"], correct: 0,
    explanation: "CP of 12 = ₹36; SP of 12 = 12 × 4 = ₹48. Profit = ₹12. Profit% = (12/36) × 100 = 33⅓%.",
  },
  {
    id: "mc-b-20", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If CP = ₹250 and SP = ₹200, the loss percent is ____",
    options: ["20%", "25%", "50%", "10%"], correct: 0,
    explanation: "Loss = 250 − 200 = ₹50. Loss% = (50/250) × 100 = 20%.",
  },

  // ==================================================== Discount, BEGINNER
  {
    id: "mc-b-21", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The marked price of an item is ₹200. After a 10% discount, the selling price is ____",
    options: ["₹180", "₹190", "₹220", "₹170"], correct: 0,
    explanation: "Discount = 10% of 200 = ₹20. SP = 200 − 20 = ₹180.",
  },
  {
    id: "mc-b-22", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "After a 20% discount, an item sells for ₹240. Its marked price was ____",
    options: ["₹300", "₹288", "₹280", "₹320"], correct: 0,
    explanation: "₹240 is 80% of the marked price → MP = 240 ÷ 0.8 = ₹300.",
  },
  {
    id: "mc-b-23", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A discount of 25% is given on a marked price of ₹800. The discount amount is ____",
    options: ["₹200", "₹600", "₹250", "₹175"], correct: 0,
    explanation: "Discount = 25% of 800 = ₹200.",
  },
  {
    id: "mc-b-24", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The marked price is ₹500 and the selling price is ₹400. The rate of discount is ____",
    options: ["20%", "25%", "10%", "100%"], correct: 0,
    explanation: "Discount = 500 − 400 = ₹100. Discount% = (100/500) × 100 = 20%.",
  },
  {
    id: "mc-b-25", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A shirt marked at ₹1,000 is sold after a 15% discount. The selling price is ____",
    options: ["₹850", "₹900", "₹150", "₹815"], correct: 0,
    explanation: "Discount = 15% of 1000 = ₹150. SP = 1000 − 150 = ₹850.",
  },
  {
    id: "mc-b-26", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If a ₹600 item is sold for ₹480 after a discount, the discount percent is ____",
    options: ["20%", "25%", "15%", "30%"], correct: 0,
    explanation: "Discount = 600 − 480 = ₹120. Discount% = (120/600) × 100 = 20%.",
  },
  {
    id: "mc-b-27", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A ₹250 item has a 40% discount. The customer pays ____",
    options: ["₹150", "₹100", "₹210", "₹160"], correct: 0,
    explanation: "Discount = 40% of 250 = ₹100. SP = 250 − 100 = ₹150.",
  },
  {
    id: "mc-b-28", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Marked price is ₹1,200 and discount is ₹300. The discount rate is ____",
    options: ["25%", "30%", "20%", "40%"], correct: 0,
    explanation: "Discount% = (300/1200) × 100 = 25%.",
  },
  {
    id: "mc-b-29", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "An item marked ₹450 is sold at a 10% discount. The selling price is ____",
    options: ["₹405", "₹440", "₹360", "₹415"], correct: 0,
    explanation: "Discount = 10% of 450 = ₹45. SP = 450 − 45 = ₹405.",
  },
  {
    id: "mc-b-30", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "After a discount of ₹80, a shirt costs ₹320. Its marked price was ____",
    options: ["₹400", "₹380", "₹240", "₹360"], correct: 0,
    explanation: "Marked price = SP + Discount = 320 + 80 = ₹400.",
  },
  {
    id: "mc-b-31", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A book marked at ₹360 is sold at a 25% discount. The selling price is ____",
    options: ["₹270", "₹90", "₹300", "₹280"], correct: 0,
    explanation: "Discount = 25% of 360 = ₹90. SP = 360 − 90 = ₹270.",
  },
  {
    id: "mc-b-32", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The list price of a fan is ₹2,000 and it is sold for ₹1,700. The discount percent is ____",
    options: ["15%", "20%", "17%", "30%"], correct: 0,
    explanation: "Discount = 2000 − 1700 = ₹300. Discount% = (300/2000) × 100 = 15%.",
  },

  // ==================================================== Simple Interest, BEGINNER
  {
    id: "mc-b-33", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Simple interest on ₹1,000 at 5% per annum for 2 years is ____",
    options: ["₹100", "₹50", "₹200", "₹110"], correct: 0,
    explanation: "SI = (P × R × T)/100 = (1000 × 5 × 2)/100 = ₹100.",
  },
  {
    id: "mc-b-34", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Simple interest on ₹2,000 at 10% per annum for 3 years is ____",
    options: ["₹600", "₹200", "₹300", "₹660"], correct: 0,
    explanation: "SI = (2000 × 10 × 3)/100 = ₹600.",
  },
  {
    id: "mc-b-35", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Find the simple interest on ₹5,000 at 8% per annum for 1 year.",
    options: ["₹400", "₹500", "₹800", "₹40"], correct: 0,
    explanation: "SI = (5000 × 8 × 1)/100 = ₹400.",
  },
  {
    id: "mc-b-36", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The amount (principal + SI) on ₹1,000 at 10% per annum for 2 years is ____",
    options: ["₹1,200", "₹1,100", "₹1,210", "₹200"], correct: 0,
    explanation: "SI = (1000 × 10 × 2)/100 = ₹200. Amount = 1000 + 200 = ₹1,200.",
  },
  {
    id: "mc-b-37", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "At what rate will ₹1,000 give ₹150 as SI in 3 years?",
    options: ["5%", "10%", "15%", "3%"], correct: 0,
    explanation: "R = (SI × 100)/(P × T) = (150 × 100)/(1000 × 3) = 15000/3000 = 5%.",
  },
  {
    id: "mc-b-38", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In how many years will ₹2,000 give ₹400 as SI at 5% per annum?",
    options: ["4 years", "2 years", "5 years", "3 years"], correct: 0,
    explanation: "T = (SI × 100)/(P × R) = (400 × 100)/(2000 × 5) = 40000/10000 = 4 years.",
  },
  {
    id: "mc-b-39", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The SI on ₹800 at 12% per annum for 6 months is ____",
    options: ["₹48", "₹96", "₹24", "₹64"], correct: 0,
    explanation: "6 months = 0.5 year. SI = (800 × 12 × 0.5)/100 = ₹48.",
  },
  {
    id: "mc-b-40", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A sum doubles itself in 10 years at simple interest. The rate of interest is ____",
    options: ["10%", "20%", "5%", "12%"], correct: 0,
    explanation: "To double, SI = P over 10 years. R = (SI × 100)/(P × T) = (P × 100)/(P × 10) = 10%.",
  },
  {
    id: "mc-b-41", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Simple interest on ₹1,200 at 5% per annum for 4 years is ____",
    options: ["₹240", "₹120", "₹300", "₹60"], correct: 0,
    explanation: "SI = (1200 × 5 × 4)/100 = ₹240.",
  },
  {
    id: "mc-b-42", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The principal that gives ₹200 as SI in 2 years at 10% per annum is ____",
    options: ["₹1,000", "₹2,000", "₹500", "₹1,200"], correct: 0,
    explanation: "P = (SI × 100)/(R × T) = (200 × 100)/(10 × 2) = 20000/20 = ₹1,000.",
  },
  {
    id: "mc-b-43", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "SI on ₹600 at 15% per annum for 2 years is ____",
    options: ["₹180", "₹90", "₹150", "₹120"], correct: 0,
    explanation: "SI = (600 × 15 × 2)/100 = ₹180.",
  },
  {
    id: "mc-b-44", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A sum of ₹500 amounts to ₹600 in 4 years at simple interest. The rate is ____",
    options: ["5%", "4%", "10%", "6%"], correct: 0,
    explanation: "SI = 600 − 500 = ₹100. R = (100 × 100)/(500 × 4) = 10000/2000 = 5%.",
  },

  // ==================================================== Compound Interest, BEGINNER
  {
    id: "mc-b-45", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The compound interest on ₹1,000 at 10% per annum for 2 years is ____",
    options: ["₹210", "₹200", "₹100", "₹220"], correct: 0,
    explanation: "Amount = 1000 × (1.1)² = ₹1,210. CI = 1210 − 1000 = ₹210. (CI exceeds the SI of ₹200 because interest is earned on interest.)",
  },
  {
    id: "mc-b-46", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The amount on ₹2,000 at 10% per annum compounded annually for 2 years is ____",
    options: ["₹2,420", "₹2,400", "₹2,200", "₹2,410"], correct: 0,
    explanation: "Amount = 2000 × (1.1)² = 2000 × 1.21 = ₹2,420.",
  },
  {
    id: "mc-b-47", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "For the first year, the compound interest and simple interest on the same sum and rate are ____",
    options: ["equal", "CI is more", "SI is more", "cannot be compared"], correct: 0,
    explanation: "For 1 year (compounded annually), CI and SI are equal because there is no interest-on-interest yet.",
  },
  {
    id: "mc-b-48", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The CI on ₹5,000 at 20% per annum for 1 year is ____",
    options: ["₹1,000", "₹1,200", "₹2,000", "₹500"], correct: 0,
    explanation: "For 1 year, CI = SI = (5000 × 20 × 1)/100 = ₹1,000.",
  },
  {
    id: "mc-b-49", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The amount on ₹1,000 at 10% per annum compounded annually for 3 years is ____",
    options: ["₹1,331", "₹1,300", "₹1,300.10", "₹1,210"], correct: 0,
    explanation: "Amount = 1000 × (1.1)³ = 1000 × 1.331 = ₹1,331.",
  },
  {
    id: "mc-b-50", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The difference between the CI and SI on ₹1,000 at 10% per annum for 2 years is ____",
    options: ["₹10", "₹100", "₹20", "₹0"], correct: 0,
    explanation: "CI = ₹210 and SI = ₹200, so the difference = ₹10 (this equals the interest on the first year's interest).",
  },

  // ==================================================== Profit & Loss, PROFICIENT
  {
    id: "mc-p-01", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A dishonest dealer sells goods at cost price but uses a weight of 800 g for 1 kg. His gain percent is ____",
    options: ["25%", "20%", "12.5%", "200%"], correct: 0,
    explanation: "He gives 800 g but charges for 1000 g, gaining 200 g on 800 g sold. Gain% = (200/800) × 100 = 25%.",
  },
  {
    id: "mc-p-02", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A shopkeeper marks his goods 40% above cost and allows a 25% discount. His profit percent is ____",
    options: ["5%", "15%", "10%", "20%"], correct: 0,
    explanation: "Let CP = 100, MP = 140, SP = 75% of 140 = 105. Profit% = (105 − 100) = 5%.",
  },
  {
    id: "mc-p-03", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A man sells two articles at ₹99 each. On one he gains 10% and on the other he loses 10%. His overall result is ____",
    options: ["1% loss", "no profit no loss", "1% gain", "10% loss"], correct: 0,
    explanation: "CP1 = 99/1.1 = 90, CP2 = 99/0.9 = 110; total CP = 200, total SP = 198. Loss = ₹2 → 2/200 = 1% loss. (Equal % gain and loss on equal SP always give a loss.)",
  },
  {
    id: "mc-p-04", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "An article costs ₹100. It is marked 25% above cost and sold at a 10% discount. The profit percent is ____",
    options: ["12.5%", "15%", "10%", "25%"], correct: 0,
    explanation: "MP = 125; SP = 90% of 125 = 112.5. Profit% = 112.5 − 100 = 12.5%.",
  },
  {
    id: "mc-p-05", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the selling price of 10 articles equals the cost price of 12 articles, the profit percent is ____",
    options: ["20%", "12%", "10%", "25%"], correct: 0,
    explanation: "Let CP of 1 article = ₹1. SP of 10 = CP of 12 = ₹12, so SP of 1 = 12/10 = ₹1.20. Profit% = 20%.",
  },
  {
    id: "mc-p-06", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A trader wants a 20% profit after allowing a 20% discount on the marked price. If CP is ₹800, the marked price should be ____",
    options: ["₹1,200", "₹1,000", "₹1,100", "₹1,150"], correct: 0,
    explanation: "Required SP = 120% of 800 = ₹960. SP = 80% of MP → 960 = 0.8 × MP → MP = ₹1,200.",
  },
  {
    id: "mc-p-07", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "By selling an article for ₹450, a man loses 10%. To gain 10%, he should sell it for ____",
    options: ["₹550", "₹500", "₹540", "₹495"], correct: 0,
    explanation: "CP = 450/0.9 = ₹500. To gain 10%: SP = 1.1 × 500 = ₹550.",
  },
  {
    id: "mc-p-08", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A man buys 6 oranges for ₹10 and sells 4 oranges for ₹10. His profit percent is ____",
    options: ["50%", "40%", "25%", "20%"], correct: 0,
    explanation: "CP of 1 orange = 10/6; SP of 1 = 10/4 = 2.5. Profit% = ((2.5 − 1.667)/1.667) × 100 = 50%. (Buy 12 for ₹20, sell 12 for ₹30 → 50% profit.)",
  },
  {
    id: "mc-p-09", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A shopkeeper gains 20% even after giving a 10% discount. By what percent is the marked price above cost?",
    options: ["33⅓%", "30%", "25%", "40%"], correct: 0,
    explanation: "Let CP = 100. SP = 120; SP = 90% of MP → MP = 120/0.9 = 133⅓. So MP is 33⅓% above CP.",
  },
  {
    id: "mc-p-10", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If a man sells an article at 2/3 of its actual selling price, he incurs a 10% loss. His profit percent at the actual SP is ____",
    options: ["35%", "25%", "30%", "40%"], correct: 0,
    explanation: "Let actual SP = S. (2/3)S = 90% of CP → CP = (2/3)S/0.9 = 0.7407S. Profit% = ((S − 0.7407S)/0.7407S) × 100 = 35%.",
  },
  {
    id: "mc-p-11", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A person sells an article at a 20% profit. If he had bought it at 20% less and sold it for ₹5 less, he would still have gained 25%. The cost price is ____",
    options: ["₹25", "₹20", "₹30", "₹40"], correct: 0,
    explanation: "Let CP = x. SP = 1.2x. New CP = 0.8x, new SP = 1.2x − 5 = 1.25 × 0.8x = x → 1.2x − 5 = x → 0.2x = 5 → x = ₹25.",
  },
  {
    id: "mc-p-12", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A fruit-seller sells mangoes at a loss of 10%. Had he sold them for ₹30 more, he would have gained 5%. The cost price is ____",
    options: ["₹200", "₹150", "₹250", "₹180"], correct: 0,
    explanation: "Let CP = x. 0.9x + 30 = 1.05x → 30 = 0.15x → x = ₹200.",
  },
  {
    id: "mc-p-13", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The cost price of 20 articles equals the selling price of 16 articles. The gain percent is ____",
    options: ["25%", "20%", "16%", "4%"], correct: 0,
    explanation: "Let CP of 1 = ₹1. SP of 16 = CP of 20 = ₹20, so SP of 1 = 20/16 = ₹1.25. Gain% = 25%.",
  },
  {
    id: "mc-p-14", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A retailer buys 40 pens for ₹120 and sells them at ₹4 each. His profit percent is ____",
    options: ["33⅓%", "25%", "20%", "40%"], correct: 0,
    explanation: "CP of 40 = ₹120; SP of 40 = 40 × 4 = ₹160. Profit = ₹40. Profit% = (40/120) × 100 = 33⅓%.",
  },
  {
    id: "mc-p-15", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "On selling an article for ₹720, a shopkeeper loses 10%. To gain 20%, the selling price should be ____",
    options: ["₹960", "₹864", "₹900", "₹1,000"], correct: 0,
    explanation: "CP = 720/0.9 = ₹800. For 20% gain: SP = 1.2 × 800 = ₹960.",
  },
  {
    id: "mc-p-16", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A man buys an article and sells it at a 20% profit. If both CP and SP were ₹100 more, his profit would be 15%. The original CP is ____",
    options: ["₹300", "₹400", "₹250", "₹200"], correct: 0,
    explanation: "Let CP = x, SP = 1.2x. New: (1.2x + 100) − (x + 100) = 0.15(x + 100) → 0.2x = 0.15x + 15 → 0.05x = 15 → x = ₹300.",
  },

  // ==================================================== Discount, PROFICIENT
  {
    id: "mc-p-17", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Two successive discounts of 20% and 10% are equivalent to a single discount of ____",
    options: ["28%", "30%", "25%", "32%"], correct: 0,
    explanation: "Net factor = 0.8 × 0.9 = 0.72, so the price paid is 72% of MP → single discount = 28%.",
  },
  {
    id: "mc-p-18", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Two successive discounts of 20% and 20% are equivalent to a single discount of ____",
    options: ["36%", "40%", "30%", "44%"], correct: 0,
    explanation: "Net factor = 0.8 × 0.8 = 0.64, so single discount = 36%.",
  },
  {
    id: "mc-p-19", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A discount series of 10%, 20% and 30% is equivalent to a single discount of ____",
    options: ["49.6%", "60%", "50.4%", "45%"], correct: 0,
    explanation: "Net factor = 0.9 × 0.8 × 0.7 = 0.504, so the single discount = 1 − 0.504 = 0.496 = 49.6%.",
  },
  {
    id: "mc-p-20", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "After two successive discounts of 20% and 10%, an item marked ₹1,000 is sold for ____",
    options: ["₹720", "₹700", "₹750", "₹680"], correct: 0,
    explanation: "SP = 1000 × 0.8 × 0.9 = ₹720.",
  },
  {
    id: "mc-p-21", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A shopkeeper allows a 20% discount and still makes a 25% profit. If CP is ₹600, the marked price is ____",
    options: ["₹937.50", "₹900", "₹750", "₹1,000"], correct: 0,
    explanation: "SP = 1.25 × 600 = ₹750; SP = 80% of MP → MP = 750/0.8 = ₹937.50.",
  },
  {
    id: "mc-p-22", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which offer is better on a ₹1,000 item: a single discount of 30%, or two successive discounts of 20% and 10%?",
    options: ["Single 30% (SP ₹700)", "20% + 10% (SP ₹700)", "Both give the same SP", "Cannot be determined"], correct: 0,
    explanation: "Single 30% → SP = ₹700. Successive 20% + 10% → 1000 × 0.8 × 0.9 = ₹720. So the single 30% discount (₹700) is better for the buyer.",
  },
  {
    id: "mc-p-23", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A trader marks an article 50% above CP and gives a 20% discount. His profit percent is ____",
    options: ["20%", "30%", "25%", "15%"], correct: 0,
    explanation: "Let CP = 100, MP = 150, SP = 80% of 150 = 120. Profit% = 20%.",
  },
  {
    id: "mc-p-24", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "An article marked at ₹2,000 is sold after successive discounts of 25% and 20%. The selling price is ____",
    options: ["₹1,200", "₹1,100", "₹1,300", "₹1,400"], correct: 0,
    explanation: "SP = 2000 × 0.75 × 0.8 = 2000 × 0.6 = ₹1,200.",
  },
  {
    id: "mc-p-25", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A single discount equivalent to successive discounts of 10% and 10% is ____",
    options: ["19%", "20%", "18%", "21%"], correct: 0,
    explanation: "Net factor = 0.9 × 0.9 = 0.81, so single discount = 19%.",
  },
  {
    id: "mc-p-26", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The marked price of a fan is ₹1,500. After a discount, it is sold at ₹1,275. The discount percent is ____",
    options: ["15%", "20%", "12%", "10%"], correct: 0,
    explanation: "Discount = 1500 − 1275 = ₹225. Discount% = (225/1500) × 100 = 15%.",
  },
  {
    id: "mc-p-27", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A shopkeeper marks up 20% and then gives a 20% discount. His result is ____",
    options: ["4% loss", "no profit no loss", "4% profit", "20% loss"], correct: 0,
    explanation: "Let CP = 100, MP = 120, SP = 80% of 120 = 96. So there is a 4% loss.",
  },
  {
    id: "mc-p-28", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A dealer offers '20% off, plus an extra 25% off on the reduced price'. The equivalent single discount is ____",
    options: ["40%", "45%", "35%", "50%"], correct: 0,
    explanation: "Net factor = 0.8 × 0.75 = 0.60, so the single discount = 40%.",
  },

  // ==================================================== Simple Interest, PROFICIENT
  {
    id: "mc-p-29", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum of money triples itself in 20 years at simple interest. The rate of interest is ____",
    options: ["10%", "15%", "5%", "20%"], correct: 0,
    explanation: "To triple, SI = 2P over 20 years. R = (SI × 100)/(P × T) = (2P × 100)/(P × 20) = 10%.",
  },
  {
    id: "mc-p-30", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum amounts to ₹1,200 in 2 years and ₹1,300 in 3 years at simple interest. The principal is ____",
    options: ["₹1,000", "₹900", "₹1,100", "₹950"], correct: 0,
    explanation: "SI for 1 year = 1300 − 1200 = ₹100. SI for 2 years = ₹200. Principal = 1200 − 200 = ₹1,000.",
  },
  {
    id: "mc-p-31", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "At what rate of simple interest will a sum double itself in 8 years?",
    options: ["12.5%", "10%", "8%", "15%"], correct: 0,
    explanation: "To double, SI = P over 8 years. R = (P × 100)/(P × 8) = 12.5%.",
  },
  {
    id: "mc-p-32", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The simple interest on a sum for 4 years at 5% per annum is ₹400. The sum is ____",
    options: ["₹2,000", "₹1,600", "₹2,500", "₹1,800"], correct: 0,
    explanation: "P = (SI × 100)/(R × T) = (400 × 100)/(5 × 4) = 40000/20 = ₹2,000.",
  },
  {
    id: "mc-p-33", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In how many years will ₹800 become ₹1,000 at 5% simple interest per annum?",
    options: ["5 years", "4 years", "6 years", "8 years"], correct: 0,
    explanation: "SI = 1000 − 800 = ₹200. T = (SI × 100)/(P × R) = (200 × 100)/(800 × 5) = 20000/4000 = 5 years.",
  },
  {
    id: "mc-p-34", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A certain sum at simple interest amounts to ₹560 in 3 years and ₹600 in 5 years. The rate of interest is ____",
    options: ["4%", "5%", "6%", "3%"], correct: 0,
    explanation: "SI for 2 years (5th − 3rd) = 600 − 560 = ₹40 → SI/yr = ₹20; SI for 3 yr = ₹60, so P = 560 − 60 = ₹500. R = (20 × 100)/(500 × 1) = 4%.",
  },
  {
    id: "mc-p-35", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The simple interest on ₹1,500 for 2 years is ₹150. The rate of interest per annum is ____",
    options: ["5%", "10%", "7.5%", "6%"], correct: 0,
    explanation: "R = (SI × 100)/(P × T) = (150 × 100)/(1500 × 2) = 15000/3000 = 5%.",
  },
  {
    id: "mc-p-36", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum of ₹3,000 is lent partly at 5% and partly at 8%. If the total annual SI is ₹210, the sum lent at 5% is ____",
    options: ["₹1,000", "₹1,500", "₹2,000", "₹1,200"], correct: 0,
    explanation: "Let ₹x be at 5% and ₹(3000 − x) at 8%. 0.05x + 0.08(3000 − x) = 210 → 240 − 0.03x = 210 → 0.03x = 30 → x = ₹1,000.",
  },
  {
    id: "mc-p-37", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum at simple interest amounts to 7/6 of itself in 4 years. The rate of interest is ____",
    options: ["4.17% (25/6 %)", "5%", "6%", "4%"], correct: 0,
    explanation: "SI = (7/6 − 1)P = P/6 over 4 years. R = (P/6 × 100)/(P × 4) = 100/24 = 25/6 ≈ 4.17%.",
  },
  {
    id: "mc-p-38", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the rate of SI increases from 4% to 6%, a man's yearly income increases by ₹40. His principal is ____",
    options: ["₹2,000", "₹1,000", "₹2,500", "₹1,500"], correct: 0,
    explanation: "Extra 2% of P = ₹40 per year → 0.02P = 40 → P = ₹2,000.",
  },

  // ==================================================== Compound Interest, PROFICIENT
  {
    id: "mc-p-39", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The difference between CI and SI on a sum for 2 years at 10% per annum is ₹20. The sum is ____",
    options: ["₹2,000", "₹1,000", "₹2,500", "₹1,500"], correct: 0,
    explanation: "For 2 years, CI − SI = P(R/100)² = P × 0.01. So 0.01P = 20 → P = ₹2,000.",
  },
  {
    id: "mc-p-40", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The compound interest on ₹8,000 at 5% per annum for 2 years is ____",
    options: ["₹820", "₹800", "₹840", "₹810"], correct: 0,
    explanation: "Amount = 8000 × (1.05)² = 8000 × 1.1025 = ₹8,820. CI = 8820 − 8000 = ₹820.",
  },
  {
    id: "mc-p-41", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum amounts to ₹1,102.50 in 2 years at 5% per annum compound interest. The sum is ____",
    options: ["₹1,000", "₹1,050", "₹1,100", "₹950"], correct: 0,
    explanation: "P = Amount / (1.05)² = 1102.50 / 1.1025 = ₹1,000.",
  },
  {
    id: "mc-p-42", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The difference between CI and SI on ₹5,000 at 10% per annum for 2 years is ____",
    options: ["₹50", "₹100", "₹25", "₹500"], correct: 0,
    explanation: "CI − SI = P(R/100)² = 5000 × 0.01 = ₹50.",
  },
  {
    id: "mc-p-43", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum of money at compound interest doubles in 5 years. In how many years will it become 4 times?",
    options: ["10 years", "15 years", "20 years", "25 years"], correct: 0,
    explanation: "If it doubles in 5 years, it becomes 4 (= 2²) times in 5 × 2 = 10 years (each doubling takes 5 years under CI).",
  },
  {
    id: "mc-p-44", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The compound interest on ₹10,000 at 10% per annum for 2 years, compounded annually, is ____",
    options: ["₹2,100", "₹2,000", "₹1,100", "₹2,200"], correct: 0,
    explanation: "Amount = 10000 × (1.1)² = ₹12,100. CI = 12100 − 10000 = ₹2,100.",
  },
  {
    id: "mc-p-45", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "At what rate percent per annum will ₹1,000 amount to ₹1,210 in 2 years at compound interest?",
    options: ["10%", "20%", "5%", "21%"], correct: 0,
    explanation: "1210/1000 = (1 + R/100)² → 1.21 = (1 + R/100)² → 1 + R/100 = 1.1 → R = 10%.",
  },
  {
    id: "mc-p-46", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The population of a town increases at 5% per annum. If it is 8,000 now, after 2 years it will be ____",
    options: ["8,820", "8,800", "8,400", "9,000"], correct: 0,
    explanation: "Population = 8000 × (1.05)² = 8000 × 1.1025 = 8,820 (compound growth).",
  },
  {
    id: "mc-p-47", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of a car depreciates 20% every year. If its present value is ₹1,00,000, its value after 2 years is ____",
    options: ["₹64,000", "₹60,000", "₹80,000", "₹72,000"], correct: 0,
    explanation: "Value = 100000 × (0.8)² = 100000 × 0.64 = ₹64,000.",
  },
  {
    id: "mc-p-48", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The compound interest on ₹4,000 at 10% per annum for 1½ years, compounded annually, is (interest for the half-year charged simply) ____",
    options: ["₹620", "₹600", "₹640", "₹660"], correct: 0,
    explanation: "After 1 year: 4000 × 1.1 = ₹4,400. For the next half-year at 10%: interest = 4400 × 10% × ½ = ₹220. Amount = ₹4,620; CI = 4620 − 4000 = ₹620.",
  },
  {
    id: "mc-p-49", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The difference between CI (compounded annually) and SI on ₹2,000 for 2 years at 10% per annum is ____",
    options: ["₹20", "₹40", "₹10", "₹200"], correct: 0,
    explanation: "CI − SI = P(R/100)² = 2000 × 0.01 = ₹20.",
  },
  {
    id: "mc-p-50", section: "numerical", topic: "Commercial maths", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A sum becomes ₹9,680 in 2 years and ₹10,648 in 3 years at compound interest. The rate of interest is ____",
    options: ["10%", "12%", "8%", "9%"], correct: 0,
    explanation: "Ratio of successive amounts = 10648/9680 = 1.1 = (1 + R/100). So R = 10%.",
  },
];
