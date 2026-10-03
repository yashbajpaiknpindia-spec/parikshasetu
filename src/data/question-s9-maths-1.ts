/**
 * BPSC TRE 4.0 Part III, Classes 9–10 Mathematics (examLevel "l3"), bank 1.
 * section "numerical". Topics: Number systems & polynomials; Linear & quadratic equations;
 * Arithmetic progressions; Coordinate geometry. Bilingual (English bank + Hindi map).
 * Original practice questions modelled on BPSC TRE 4.0 Part III; not PYQs.
 */
import type { Question } from "./questions";

const AR_EN = [
  "Both A and R are true, and R is the correct explanation of A.",
  "Both A and R are true, but R is not the correct explanation of A.",
  "A is true, but R is false.",
  "A is false, but R is true.",
];
const AR_HI = [
  "A और R दोनों सत्य हैं, तथा R, A की सही व्याख्या है।",
  "A और R दोनों सत्य हैं, परंतु R, A की सही व्याख्या नहीं है।",
  "A सत्य है, परंतु R असत्य है।",
  "A असत्य है, परंतु R सत्य है।",
];

const NS = "Number systems & polynomials";
const LQ = "Linear & quadratic equations";
const AP = "Arithmetic progressions";
const CG = "Coordinate geometry";

export const s9Maths1Bank: Question[] = [
  // ================= Number systems & polynomials: beginner (medium) =================
  {
    id: "s9m1-b-001", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Using Euclid's division algorithm, the HCF of 306 and 657 is",
    options: ["3", "18", "9", "27"], correct: 2,
    explanation: "657 = 306 × 2 + 45; 306 = 45 × 6 + 36; 45 = 36 × 1 + 9; 36 = 9 × 4 + 0. The last non-zero remainder, 9, is the HCF.",
  },
  {
    id: "s9m1-b-002", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which of the following numbers is irrational?",
    options: ["0.333... (3 recurring)", "√225", "22/7", "3 + √2"], correct: 3,
    explanation: "The sum of a rational (3) and an irrational (√2) is irrational. 0.333... = 1/3, √225 = 15 and 22/7 are all rational.",
  },
  {
    id: "s9m1-b-003", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Without actual division, which of the following rational numbers has a terminating decimal expansion?",
    options: ["17/6", "13/3125", "64/455", "29/343"], correct: 1,
    explanation: "A fraction in lowest terms terminates only if its denominator has no prime factors other than 2 and 5. 3125 = 5⁵, whereas 6 = 2 × 3, 455 = 5 × 7 × 13 and 343 = 7³.",
  },
  {
    id: "s9m1-b-004", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The sum and the product of the zeroes of the polynomial 6x² − 7x − 3 are respectively",
    options: ["7/6 and −1/2", "−7/6 and −1/2", "7/6 and 1/2", "−7/6 and 1/2"], correct: 0,
    explanation: "Sum = −b/a = 7/6 and product = c/a = −3/6 = −1/2. (The zeroes are 3/2 and −1/3, which confirm both values.)",
  },
  {
    id: "s9m1-b-005", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "A quadratic polynomial whose sum of zeroes is −3 and product of zeroes is 2 is",
    options: ["x² − 3x + 2", "x² + 3x − 2", "x² + 3x + 2", "x² − 3x − 2"], correct: 2,
    explanation: "The polynomial is x² − (sum)x + (product) = x² − (−3)x + 2 = x² + 3x + 2, whose zeroes are −1 and −2.",
  },
  {
    id: "s9m1-b-006", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The remainder when p(x) = x³ − 3x² + 4x + 5 is divided by (x − 2) is",
    options: ["5", "13", "1", "9"], correct: 3,
    explanation: "By the remainder theorem the remainder is p(2) = 8 − 12 + 8 + 5 = 9.",
  },
  {
    id: "s9m1-b-007", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "If (x + 1) is a factor of 2x³ + ax² + 2x + 3, then the value of a is",
    options: ["−1", "1", "2", "3"], correct: 1,
    explanation: "By the factor theorem p(−1) = 0: −2 + a − 2 + 3 = a − 1 = 0, so a = 1.",
  },
  {
    id: "s9m1-b-008", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Using a suitable algebraic identity, the value of 103 × 97 is",
    options: ["9991", "9999", "10009", "9901"], correct: 0,
    explanation: "103 × 97 = (100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991.",
  },
  {
    id: "s9m1-b-009", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Euclid's division lemma states that for positive integers a and b there exist unique integers q and r with a = bq + r, where r satisfies",
    options: ["0 < r ≤ b", "0 ≤ r ≤ b", "0 < r < b", "0 ≤ r < b"], correct: 3,
    explanation: "The remainder may be zero but must be strictly less than the divisor, so 0 ≤ r < b.",
  },
  {
    id: "s9m1-b-010", section: "numerical", topic: NS, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The HCF of two numbers is 12 and their product is 1800. Their LCM is",
    options: ["180", "150", "75", "1800"], correct: 1,
    explanation: "HCF × LCM = product of the two numbers, so LCM = 1800 / 12 = 150.",
  },

  // ================= Number systems & polynomials: proficient (hard) =================
  {
    id: "s9m1-p-001", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): √3 is an irrational number. Reason (R): If a prime p divides a², where a is a positive integer, then p divides a.",
    options: [...AR_EN], correct: 0,
    explanation: "Both are true. Assuming √3 = a/b in lowest terms gives 3b² = a², so 3 divides a² and hence a (by R); then 3 also divides b, a contradiction. R is the key step of the proof.",
  },
  {
    id: "s9m1-p-002", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "For which natural number n does 4ⁿ end with the digit zero?",
    options: ["n = 5", "n = 10", "For no natural number n", "For every even n"], correct: 2,
    explanation: "A number ending in 0 must have both 2 and 5 as prime factors. 4ⁿ = 2²ⁿ has only the prime 2, and by the uniqueness of prime factorisation it can never contain 5.",
  },
  {
    id: "s9m1-p-003", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "If α and β are the zeroes of 2x² − 5x + 3, then the value of α² + β² is",
    options: ["37/4", "13/4", "19/4", "25/4"], correct: 1,
    explanation: "α + β = 5/2 and αβ = 3/2, so α² + β² = (α + β)² − 2αβ = 25/4 − 3 = 13/4. Check: the zeroes are 1 and 3/2, and 1 + 9/4 = 13/4.",
  },
  {
    id: "s9m1-p-004", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Two zeroes of the cubic polynomial 2x³ − 5x² − 14x + 8 are 4 and −2. The third zero is",
    options: ["−1/2", "2", "1/4", "1/2"], correct: 3,
    explanation: "Sum of zeroes = −b/a = 5/2, so the third zero = 5/2 − (4 − 2) = 1/2. Check with the product: 4 × (−2) × 1/2 = −4 = −d/a = −8/2.",
  },
  {
    id: "s9m1-p-005", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The largest number that divides 70 and 125 leaving remainders 5 and 8 respectively is",
    options: ["5", "65", "13", "25"], correct: 2,
    explanation: "The number must divide 70 − 5 = 65 and 125 − 8 = 117 exactly. 65 = 5 × 13 and 117 = 3² × 13, so HCF = 13 (and 13 exceeds both remainders).",
  },
  {
    id: "s9m1-p-006", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The smallest four-digit number which, when divided by 12, 15 and 20, leaves a remainder of 7 in each case is",
    options: ["1027", "1007", "1087", "1067"], correct: 0,
    explanation: "LCM(12, 15, 20) = 60. The smallest four-digit multiple of 60 is 1020, so the number is 1020 + 7 = 1027 (the previous candidate, 967, has only three digits).",
  },
  {
    id: "s9m1-p-007", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "If x = 3 + 2√2, then the value of x² + 1/x² is",
    options: ["36", "32", "38", "34"], correct: 3,
    explanation: "1/x = 1/(3 + 2√2) = 3 − 2√2 (since (3 + 2√2)(3 − 2√2) = 1). So x + 1/x = 6 and x² + 1/x² = 6² − 2 = 34.",
  },
  {
    id: "s9m1-p-008", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Consider the statements: I. The product of a non-zero rational number and an irrational number is irrational. II. The sum of two irrational numbers is always irrational. III. Every real number is either rational or irrational. IV. π is rational because π = 22/7. Which of these are correct?",
    options: ["I, II and III", "I and III only", "II and IV only", "I only"], correct: 1,
    explanation: "I and III are true. II is false: √2 + (−√2) = 0 is rational. IV is false: 22/7 is only an approximation of the irrational number π.",
  },
  {
    id: "s9m1-p-009", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Two zeroes of p(x) = x⁴ + x³ − 34x² − 4x + 120 are 2 and −2. The other two zeroes are",
    options: ["−5 and 6", "5 and 6", "5 and −6", "−5 and −6"], correct: 2,
    explanation: "Dividing p(x) by x² − 4 gives x² + x − 30 = (x + 6)(x − 5), so the other zeroes are 5 and −6. Check: 2 − 2 + 5 − 6 = −1 = −b/a.",
  },
  {
    id: "s9m1-p-010", section: "numerical", topic: NS, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Match the expressions with their equivalent forms. A. a³ + b³  B. a³ − b³  C. a³ + b³ + c³ − 3abc  D. (a + b)³ ; 1. (a − b)(a² + ab + b²)  2. a³ + b³ + 3ab(a + b)  3. (a + b)(a² − ab + b²)  4. (a + b + c)(a² + b² + c² − ab − bc − ca)",
    options: ["A-1, B-3, C-4, D-2", "A-3, B-1, C-2, D-4", "A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2"], correct: 2,
    explanation: "These are the standard factorisation identities: a³ + b³ = (a + b)(a² − ab + b²), a³ − b³ = (a − b)(a² + ab + b²), the three-variable identity gives C-4, and (a + b)³ = a³ + b³ + 3ab(a + b).",
  },

  // ================= Linear & quadratic equations: beginner (medium) =================
  {
    id: "s9m1-b-011", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The pair of equations 2x + 3y = 9 and 4x + 6y = 18 has",
    options: ["a unique solution", "no solution", "infinitely many solutions", "exactly two solutions"], correct: 2,
    explanation: "a₁/a₂ = b₁/b₂ = c₁/c₂ = 1/2, so the lines are coincident and every point on the line is a solution.",
  },
  {
    id: "s9m1-b-012", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The solution (x, y) of the pair x + y = 14 and x − y = 4 is",
    options: ["(5, 9)", "(9, 5)", "(10, 4)", "(8, 6)"], correct: 1,
    explanation: "Adding: 2x = 18, so x = 9; then y = 14 − 9 = 5. Check: 9 − 5 = 4.",
  },
  {
    id: "s9m1-b-013", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The nature of the roots of 2x² − 4x + 3 = 0 is",
    options: ["two distinct real roots", "two equal real roots", "one positive and one negative real root", "no real roots"], correct: 3,
    explanation: "D = b² − 4ac = 16 − 24 = −8 < 0, so the equation has no real roots.",
  },
  {
    id: "s9m1-b-014", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The roots of x² − 3x − 10 = 0 are",
    options: ["5 and −2", "−5 and 2", "10 and −1", "2 and −5"], correct: 0,
    explanation: "x² − 3x − 10 = (x − 5)(x + 2), so x = 5 or x = −2. Check: sum 3 and product −10 match −b/a and c/a.",
  },
  {
    id: "s9m1-b-015", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The values of k for which 2x² + kx + 3 = 0 has two equal real roots are",
    options: ["±√6", "±2√6", "±6", "±24"], correct: 1,
    explanation: "Equal roots need D = k² − 4(2)(3) = 0, so k² = 24 and k = ±√24 = ±2√6.",
  },
  {
    id: "s9m1-b-016", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The sum of two natural numbers is 27 and their product is 182. The numbers are",
    options: ["7 and 26", "12 and 15", "13 and 14", "11 and 16"], correct: 2,
    explanation: "x(27 − x) = 182 gives x² − 27x + 182 = 0 = (x − 13)(x − 14). 7 and 26 have product 182 but sum 33.",
  },
  {
    id: "s9m1-b-017", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "For the pair a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the condition a₁/a₂ ≠ b₁/b₂ means that the lines are",
    options: ["intersecting, with a unique solution", "parallel, with no solution", "coincident, with infinitely many solutions", "necessarily perpendicular to each other"], correct: 0,
    explanation: "Unequal ratios of the x and y coefficients mean the lines have different slopes, so they meet at exactly one point. They need not be perpendicular.",
  },
  {
    id: "s9m1-b-018", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "A father's present age is three times his son's. After 10 years, he will be twice as old as his son. Their present ages (father, son) in years are",
    options: ["36 and 12", "45 and 15", "40 and 20", "30 and 10"], correct: 3,
    explanation: "Let the son be s, the father 3s. Then 3s + 10 = 2(s + 10), so s = 10 and the father is 30. Check: after 10 years, 40 = 2 × 20.",
  },
  {
    id: "s9m1-b-019", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "If x = 2 is a root of x² + kx − 6 = 0, then the value of k is",
    options: ["1", "−1", "2", "3"], correct: 0,
    explanation: "Substituting x = 2: 4 + 2k − 6 = 0, so k = 1. The equation x² + x − 6 = 0 then has roots 2 and −3.",
  },
  {
    id: "s9m1-b-020", section: "numerical", topic: LQ, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which of the following is a quadratic equation?",
    options: ["x(x + 1) + 8 = (x + 2)(x − 2)", "(x + 1)² = 2(x − 3)", "x² + 3x + 1 = (x − 2)²", "(x − 2)(x + 1) = (x − 1)(x + 3)"], correct: 1,
    explanation: "(x + 1)² = 2(x − 3) simplifies to x² + 7 = 0, of degree 2. In each of the others the x² terms cancel, leaving a linear equation.",
  },

  // ================= Linear & quadratic equations: proficient (hard) =================
  {
    id: "s9m1-p-011", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "For which value of k does the pair kx + 3y = k − 3 and 12x + ky = k have no solution?",
    options: ["6", "−6", "±6", "0"], correct: 1,
    explanation: "No solution needs k/12 = 3/k ≠ (k − 3)/k. k² = 36 gives k = ±6. For k = 6, 3/k = (k − 3)/k = 1/2 (infinitely many solutions), so only k = −6 works (−1/2 ≠ 3/2).",
  },
  {
    id: "s9m1-p-012", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "For what values of a and b does the pair 2x + 3y = 7 and (a − b)x + (a + b)y = 3a + b − 2 have infinitely many solutions?",
    options: ["a = 1, b = 5", "a = 5, b = −1", "a = −5, b = 1", "a = 5, b = 1"], correct: 3,
    explanation: "Need 2/(a − b) = 3/(a + b) = 7/(3a + b − 2). The first equality gives a = 5b; the first and third give a = 9b − 4. So b = 1, a = 5. Check: 2/4 = 3/6 = 7/14.",
  },
  {
    id: "s9m1-p-013", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The sum of the digits of a two-digit number is 9. Nine times the number equals twice the number obtained by reversing its digits. The number is",
    options: ["18", "81", "27", "36"], correct: 0,
    explanation: "With tens digit x and units digit y: 9(10x + y) = 2(10y + x) gives 88x = 11y, so y = 8x. With x + y = 9, x = 1 and y = 8. Check: 9 × 18 = 162 = 2 × 81.",
  },
  {
    id: "s9m1-p-014", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A train covers 360 km at a uniform speed. Had the speed been 5 km/h more, the journey would have taken 1 hour less. The speed of the train (in km/h) is",
    options: ["45", "36", "40", "50"], correct: 2,
    explanation: "360/v − 360/(v + 5) = 1 gives v(v + 5) = 1800, i.e. v² + 5v − 1800 = 0 = (v − 40)(v + 45). So v = 40. Check: 9 h at 40 km/h, 8 h at 45 km/h.",
  },
  {
    id: "s9m1-p-015", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "If the roots of (a − b)x² + (b − c)x + (c − a) = 0, with a ≠ b, are equal, then",
    options: ["2b = a + c", "2c = a + b", "a = b = c only", "2a = b + c"], correct: 3,
    explanation: "The coefficients add to 0, so x = 1 is a root; equal roots means both are 1, hence product (c − a)/(a − b) = 1, giving 2a = b + c. The discriminant with b = 2a − c is 4(a − c)² − 4(c − a)² = 0, confirming it.",
  },
  {
    id: "s9m1-p-016", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): The equation 3x² − 4√3x + 4 = 0 has two distinct real roots. Reason (R): A quadratic equation ax² + bx + c = 0 has two distinct real roots if b² − 4ac > 0.",
    options: [...AR_EN], correct: 3,
    explanation: "Here D = (4√3)² − 4 × 3 × 4 = 48 − 48 = 0, so the roots are real and equal (both 2/√3); A is false. R is a correct statement of the discriminant rule.",
  },
  {
    id: "s9m1-p-017", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The diagonal of a rectangular field is 60 m more than its shorter side, and the longer side is 30 m more than the shorter side. The sides of the field are",
    options: ["60 m and 90 m", "90 m and 120 m", "120 m and 150 m", "30 m and 60 m"], correct: 1,
    explanation: "x² + (x + 30)² = (x + 60)² gives x² − 60x − 2700 = 0 = (x − 90)(x + 30), so x = 90 m and the longer side is 120 m. Check: 90² + 120² = 150² and 150 = 90 + 60.",
  },
  {
    id: "s9m1-p-018", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "For ax² + bx + c = 0 (a ≠ 0, real coefficients), consider: I. If a and c have opposite signs, the roots are real and distinct. II. If b = 0 and ac > 0, there are no real roots. III. The equation can have more than two distinct roots. IV. If a + b + c = 0, then x = −1 is always a root. Which are correct?",
    options: ["I and II only", "I, II and IV only", "II and III only", "I, III and IV"], correct: 0,
    explanation: "I: ac < 0 makes D = b² − 4ac > 0. II: D = −4ac < 0. III is false (at most two roots). IV is false: a + b + c = 0 makes x = 1, not −1, a root.",
  },
  {
    id: "s9m1-p-019", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The lines x − y + 1 = 0 and 3x + 2y − 12 = 0 together with the x-axis enclose a triangle. Its area (in square units) is",
    options: ["15", "6", "7.5", "10"], correct: 2,
    explanation: "The lines meet at (2, 3) and cut the x-axis at (−1, 0) and (4, 0). Base = 5, height = 3, so area = ½ × 5 × 3 = 7.5.",
  },
  {
    id: "s9m1-p-020", section: "numerical", topic: LQ, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A boat goes 30 km upstream and 44 km downstream in 10 hours, and 40 km upstream and 55 km downstream in 13 hours. The speed of the boat in still water (in km/h) is",
    options: ["3", "11", "8", "5"], correct: 2,
    explanation: "Let u = 1/(x − y), v = 1/(x + y): 30u + 44v = 10 and 40u + 55v = 13 give v = 1/11, u = 1/5. So x + y = 11, x − y = 5, x = 8 (stream 3 km/h).",
  },

  // ================= Arithmetic progressions: beginner (medium) =================
  {
    id: "s9m1-b-021", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The 10th term of the AP 2, 7, 12, ... is",
    options: ["52", "47", "45", "42"], correct: 1,
    explanation: "a₁₀ = a + 9d = 2 + 9 × 5 = 47.",
  },
  {
    id: "s9m1-b-022", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which term of the AP 3, 8, 13, ... is 78?",
    options: ["15th", "17th", "16th", "14th"], correct: 2,
    explanation: "3 + (n − 1) × 5 = 78 gives n − 1 = 15, so n = 16.",
  },
  {
    id: "s9m1-b-023", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The sum of the first 20 odd natural numbers is",
    options: ["420", "380", "441", "400"], correct: 3,
    explanation: "The sum of the first n odd numbers is n²; here S = 20/2 × (1 + 39) = 400 = 20².",
  },
  {
    id: "s9m1-b-024", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The sum of the first 15 terms of the AP 2, 5, 8, ... is",
    options: ["345", "330", "360", "315"], correct: 0,
    explanation: "S₁₅ = 15/2 × [2 × 2 + 14 × 3] = 15/2 × 46 = 345.",
  },
  {
    id: "s9m1-b-025", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "If the nth term of an AP is aₙ = 7 − 4n, its common difference is",
    options: ["4", "−4", "3", "7"], correct: 1,
    explanation: "d = aₙ₊₁ − aₙ = [7 − 4(n + 1)] − [7 − 4n] = −4. The terms are 3, −1, −5, ...",
  },
  {
    id: "s9m1-b-026", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "How many two-digit numbers are divisible by 7?",
    options: ["14", "12", "13", "15"], correct: 2,
    explanation: "The AP is 14, 21, ..., 98, so n = (98 − 14)/7 + 1 = 12 + 1 = 13.",
  },
  {
    id: "s9m1-b-027", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "If k + 2, 4k − 6 and 3k − 2 are three consecutive terms of an AP, then k equals",
    options: ["2", "4", "−3", "3"], correct: 3,
    explanation: "2(4k − 6) = (k + 2) + (3k − 2) gives 8k − 12 = 4k, so k = 3. The terms 5, 6, 7 confirm it.",
  },
  {
    id: "s9m1-b-028", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which of the following sequences is an arithmetic progression?",
    options: ["√2, √8, √18, √32", "1, 4, 9, 16", "2, 4, 8, 16", "1, 1/2, 1/3, 1/4"], correct: 0,
    explanation: "√2, √8, √18, √32 = √2, 2√2, 3√2, 4√2, with constant difference √2. The others have no constant difference.",
  },
  {
    id: "s9m1-b-029", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "A person saves ₹100 in the first month, ₹120 in the second, ₹140 in the third, and so on. The total saved in 12 months is",
    options: ["₹2640", "₹2520", "₹2400", "₹3840"], correct: 1,
    explanation: "a = 100, d = 20, n = 12: S = 12/2 × [200 + 11 × 20] = 6 × 420 = ₹2520.",
  },
  {
    id: "s9m1-b-030", section: "numerical", topic: AP, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The 20th term from the last term of the AP 3, 8, 13, ..., 253 is",
    options: ["163", "153", "158", "98"], correct: 2,
    explanation: "Reading backwards, the AP starts at 253 with d = −5, so the 20th term is 253 − 19 × 5 = 158.",
  },

  // ================= Arithmetic progressions: proficient (hard) =================
  {
    id: "s9m1-p-021", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The sum of the first n terms of an AP is Sₙ = 3n² + 5n. Its 25th term is",
    options: ["150", "158", "1950", "152"], correct: 3,
    explanation: "aₙ = Sₙ − Sₙ₋₁ = 6n + 2 (check: a₁ = S₁ = 8). So a₂₅ = 6 × 25 + 2 = 152.",
  },
  {
    id: "s9m1-p-022", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "In an AP, the pth term is q and the qth term is p (p ≠ q). The (p + q)th term is",
    options: ["0", "p + q", "p − q", "1"], correct: 0,
    explanation: "Subtracting a + (p − 1)d = q and a + (q − 1)d = p gives d = −1, so a = p + q − 1. Then the (p + q)th term = a + (p + q − 1)(−1) = 0.",
  },
  {
    id: "s9m1-p-023", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The sums of n terms of two APs are in the ratio (7n + 1) : (4n + 27). The ratio of their 11th terms is",
    options: ["3 : 4", "78 : 71", "4 : 3", "5 : 4"], correct: 2,
    explanation: "The ratio of mth terms equals the ratio of sums with n = 2m − 1. For m = 11, n = 21: (147 + 1) : (84 + 27) = 148 : 111 = 4 : 3. (78 : 71 wrongly uses n = 11.)",
  },
  {
    id: "s9m1-p-024", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "How many terms of the AP 24, 21, 18, ... must be taken so that their sum is 78?",
    options: ["4 only", "4 or 13", "13 only", "6 or 11"], correct: 1,
    explanation: "n/2 [48 − 3(n − 1)] = 78 gives n² − 17n + 52 = 0 = (n − 4)(n − 13). Both work: S₄ = 78, and in S₁₃ the terms after the 8th are negative and cancel back to 78.",
  },
  {
    id: "s9m1-p-025", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The sum of all three-digit natural numbers that are divisible by 7 is",
    options: ["70455", "69237", "71435", "70336"], correct: 3,
    explanation: "The AP is 105, 112, ..., 994, with n = (994 − 105)/7 + 1 = 128. Sum = 128/2 × (105 + 994) = 64 × 1099 = 70336.",
  },
  {
    id: "s9m1-p-026", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): 0 is a term of the AP 31, 28, 25, .... Reason (R): A number is a term of an AP only if the value of n obtained from aₙ = a + (n − 1)d is a natural number.",
    options: [...AR_EN], correct: 3,
    explanation: "31 − 3(n − 1) = 0 gives n = 34/3, not a natural number, so A is false (the terms jump from 1 to −2). R is a correct criterion.",
  },
  {
    id: "s9m1-p-027", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The first and last terms of an AP are 5 and 45, and the sum of all its terms is 400. The common difference is",
    options: ["8/3", "3", "5/2", "8/5"], correct: 0,
    explanation: "S = n/2 (a + l) gives 400 = n/2 × 50, so n = 16. Then 45 = 5 + 15d, so d = 40/15 = 8/3.",
  },
  {
    id: "s9m1-p-028", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "200 logs are stacked with 20 logs in the bottom row, 19 in the next row, 18 in the row above, and so on. The number of rows and the number of logs in the top row are",
    options: ["16 rows, with 4 logs in the top row", "15 rows, with 6 logs in the top row", "16 rows, with 5 logs in the top row", "25 rows, with 1 log in the top row"], correct: 2,
    explanation: "n/2 [40 − (n − 1)] = 200 gives n² − 41n + 400 = 0 = (n − 16)(n − 25). n = 25 would give a negative top row, so n = 16 and the top row has 20 − 15 = 5 logs.",
  },
  {
    id: "s9m1-p-029", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Consider the statements about an AP with non-zero terms: I. Multiplying every term by a non-zero constant k gives an AP. II. The squares of the terms always form an AP. III. Adding a constant to every term gives an AP with the same common difference. IV. The reciprocals of the terms always form an AP. Which are correct?",
    options: ["I, II and III", "I and III only", "II and IV only", "I, III and IV"], correct: 1,
    explanation: "I gives an AP with difference kd and III keeps difference d. II fails (1, 2, 3 gives 1, 4, 9) and IV fails (1, 2, 3 gives 1, 1/2, 1/3).",
  },
  {
    id: "s9m1-p-030", section: "numerical", topic: AP, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The middle term of the AP 213, 205, 197, ..., 37 is",
    options: ["125", "117", "133", "121"], correct: 0,
    explanation: "n = (213 − 37)/8 + 1 = 23 terms, so the middle term is the 12th: 213 − 11 × 8 = 125.",
  },

  // ================= Coordinate geometry: beginner (medium) =================
  {
    id: "s9m1-b-031", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The distance between the points (2, 3) and (4, 1) is",
    options: ["4", "2√2", "2", "√10"], correct: 1,
    explanation: "d = √[(4 − 2)² + (1 − 3)²] = √(4 + 4) = √8 = 2√2.",
  },
  {
    id: "s9m1-b-032", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The midpoint of the segment joining (−5, 7) and (3, −1) is",
    options: ["(−1, 3)", "(1, −3)", "(−4, 4)", "(−2, 6)"], correct: 0,
    explanation: "Midpoint = ((−5 + 3)/2, (7 − 1)/2) = (−1, 3).",
  },
  {
    id: "s9m1-b-033", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The point that divides the segment joining A(4, −3) and B(8, 5) internally in the ratio 3 : 1 is",
    options: ["(5, −1)", "(6, 1)", "(7, 3)", "(7, −3)"], correct: 2,
    explanation: "x = (3 × 8 + 1 × 4)/4 = 7, y = (3 × 5 + 1 × (−3))/4 = 3. (5, −1) is the point for the ratio 1 : 3.",
  },
  {
    id: "s9m1-b-034", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The distance of the point (−6, 8) from the origin is",
    options: ["2√7", "14", "100", "10"], correct: 3,
    explanation: "d = √[(−6)² + 8²] = √(36 + 64) = √100 = 10.",
  },
  {
    id: "s9m1-b-035", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The area of the triangle with vertices (2, 3), (−1, 0) and (2, −4) is (in square units)",
    options: ["21", "10.5", "7", "12"], correct: 1,
    explanation: "Area = ½|2(0 + 4) + (−1)(−4 − 3) + 2(3 − 0)| = ½|8 + 7 + 6| = 21/2 = 10.5. (Check: base 7 on x = 2, height 3.)",
  },
  {
    id: "s9m1-b-036", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The point on the x-axis that is equidistant from (2, −5) and (−2, 9) is",
    options: ["(7, 0)", "(0, −7)", "(−7, 0)", "(−5, 0)"], correct: 2,
    explanation: "(x − 2)² + 25 = (x + 2)² + 81 gives −8x = 56, so x = −7. Check: both distances are √106.",
  },
  {
    id: "s9m1-b-037", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The centroid of the triangle with vertices (1, 4), (−1, −1) and (3, −2) is",
    options: ["(1, 1/3)", "(3, 1)", "(1, 1)", "(1/3, 1)"], correct: 0,
    explanation: "Centroid = ((1 − 1 + 3)/3, (4 − 1 − 2)/3) = (1, 1/3).",
  },
  {
    id: "s9m1-b-038", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The slope of the line passing through (2, 3) and (4, 7) is",
    options: ["1/2", "−2", "5/3", "2"], correct: 3,
    explanation: "Slope = (y₂ − y₁)/(x₂ − x₁) = (7 − 3)/(4 − 2) = 2.",
  },
  {
    id: "s9m1-b-039", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "If the points (2, 3), (4, k) and (6, −3) are collinear, the value of k is",
    options: ["1", "0", "−1", "3"], correct: 1,
    explanation: "Area = 0: 2(k + 3) + 4(−3 − 3) + 6(3 − k) = −4k = 0, so k = 0. Indeed (4, 0) is the midpoint of the other two points.",
  },
  {
    id: "s9m1-b-040", section: "numerical", topic: CG, examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The line 2x + 3y = 6 meets the x-axis and the y-axis respectively at",
    options: ["(2, 0) and (0, 3)", "(6, 0) and (0, 6)", "(3, 0) and (0, 2)", "(−3, 0) and (0, −2)"], correct: 2,
    explanation: "Put y = 0: x = 3. Put x = 0: y = 2. So the intercept points are (3, 0) and (0, 2).",
  },

  // ================= Coordinate geometry: proficient (hard) =================
  {
    id: "s9m1-p-031", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The ratio in which the y-axis divides the segment joining (5, −6) and (−1, −4) is",
    options: ["1 : 5", "6 : 1", "2 : 3", "5 : 1"], correct: 3,
    explanation: "Let the ratio be k : 1. On the y-axis x = 0: (−k + 5)/(k + 1) = 0, so k = 5. The ratio is 5 : 1 and the point is (0, −13/3).",
  },
  {
    id: "s9m1-p-032", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A(1, 2), B(4, y), C(x, 6) and D(3, 5) are the vertices of parallelogram ABCD, taken in order. The values of x and y are",
    options: ["x = 6, y = 3", "x = 3, y = 6", "x = 6, y = 5", "x = 2, y = 3"], correct: 0,
    explanation: "The diagonals bisect each other, so midpoint of AC = midpoint of BD: (1 + x)/2 = 7/2 gives x = 6, and 8/2 = (y + 5)/2 gives y = 3.",
  },
  {
    id: "s9m1-p-033", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The points A(1, 7), B(4, 2), C(−1, −1) and D(−4, 4), taken in order, form a",
    options: ["rhombus that is not a square", "square", "rectangle that is not a square", "parallelogram with no right angle"], correct: 1,
    explanation: "AB² = BC² = CD² = DA² = 34 (all sides equal) and the diagonals AC² = BD² = 68 are equal, so ABCD is a square.",
  },
  {
    id: "s9m1-p-034", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The area of the quadrilateral with vertices (−4, −2), (−3, −5), (3, −2) and (2, 3), taken in order, is (in square units)",
    options: ["56", "14", "28", "21"], correct: 2,
    explanation: "Shoelace: Σxᵢyᵢ₊₁ = 20 + 6 + 9 − 4 = 31 and Σyᵢxᵢ₊₁ = 6 − 15 − 4 − 12 = −25, so area = ½|31 + 25| = 28. (Splitting into two triangles gives 10.5 + 17.5 = 28 too.)",
  },
  {
    id: "s9m1-p-035", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The area of the triangle with vertices (1, −1), (−4, 2k) and (−k, −5) is 24 square units. The possible values of k are",
    options: ["3 or −9/2", "−3 or 9/2", "3 only", "9/2 only"], correct: 0,
    explanation: "Area = ½|2k² + 3k + 21| = 24. 2k² + 3k − 27 = 0 = (k − 3)(2k + 9) gives k = 3 or −9/2; the case 2k² + 3k + 69 = 0 has no real roots.",
  },
  {
    id: "s9m1-p-036", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A(−2, −2) and B(2, −4) are given. The point P on segment AB such that AP = (3/7)AB is",
    options: ["(2/7, −22/7)", "(−2/7, 20/7)", "(−2/7, −20/7)", "(2/7, −20/7)"], correct: 2,
    explanation: "AP : PB = 3 : 4. x = (3 × 2 + 4 × (−2))/7 = −2/7, y = (3 × (−4) + 4 × (−2))/7 = −20/7. (2/7, −22/7) wrongly uses the ratio 4 : 3.",
  },
  {
    id: "s9m1-p-037", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The triangle with vertices (0, −1), (2, 1) and (0, 3) has its side midpoints joined to form a new triangle. The area of the new triangle and its ratio to the area of the original triangle are",
    options: ["2 sq units, ratio 1 : 2", "1 sq unit, ratio 1 : 2", "2 sq units, ratio 1 : 4", "1 sq unit, ratio 1 : 4"], correct: 3,
    explanation: "Midpoints are (1, 0), (1, 2), (0, 1): area = ½|1(2 − 1) + 1(1 − 0) + 0| = 1. The original area = ½|2(3 + 1)| = 4, so the ratio is 1 : 4.",
  },
  {
    id: "s9m1-p-038", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): The points A(3, 2), B(−2, −3) and C(2, 3) form a right-angled triangle. Reason (R): In every triangle, the square of the longest side equals the sum of the squares of the other two sides.",
    options: [...AR_EN], correct: 2,
    explanation: "AB² = 50, CA² = 2, BC² = 52 = 50 + 2, so the triangle is right-angled at A; A is true. R is false: the Pythagoras relation holds only for right-angled triangles.",
  },
  {
    id: "s9m1-p-039", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The centre of the circle passing through (6, −6), (3, −7) and (3, 3) is",
    options: ["(3, 2)", "(3, −2)", "(−3, 2)", "(2, −3)"], correct: 1,
    explanation: "(3, −7) and (3, 3) give y = −2 on their perpendicular bisector. Equating distances to (6, −6) and (3, 3): (x − 6)² + 16 = (x − 3)² + 25 gives x = 3. All three distances equal 5.",
  },
  {
    id: "s9m1-p-040", section: "numerical", topic: CG, examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Which pair of lines is perpendicular?",
    options: ["y = 2x + 3 and 2x − y = 1", "x + y = 1 and x + y = 5", "3x + 4y = 7 and 4x + 3y = 1", "y = 2x + 3 and x + 2y = 5"], correct: 3,
    explanation: "Slopes 2 and −1/2 have product −1, so these lines are perpendicular. The first two pairs are parallel; in the third the slopes −3/4 and −4/3 have product 1.",
  },
];

export const s9Maths1Hi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  // संख्या पद्धति एवं बहुपद
  "s9m1-b-001": { stem: "यूक्लिड विभाजन एल्गोरिथ्म का प्रयोग करके 306 और 657 का HCF है", options: ["3", "18", "9", "27"], explanation: "657 = 306 × 2 + 45; 306 = 45 × 6 + 36; 45 = 36 × 1 + 9; 36 = 9 × 4 + 0। अंतिम शून्येतर शेषफल 9 ही HCF है।" },
  "s9m1-b-002": { stem: "निम्नलिखित में से कौन-सी संख्या अपरिमेय है?", options: ["0.333... (3 की पुनरावृत्ति)", "√225", "22/7", "3 + √2"], explanation: "एक परिमेय संख्या (3) और एक अपरिमेय संख्या (√2) का योग अपरिमेय होता है। 0.333... = 1/3, √225 = 15 और 22/7 सभी परिमेय हैं।" },
  "s9m1-b-003": { stem: "वास्तविक भाग किए बिना बताइए कि निम्नलिखित में से किस परिमेय संख्या का दशमलव प्रसार सांत है?", options: ["17/6", "13/3125", "64/455", "29/343"], explanation: "न्यूनतम रूप की भिन्न का प्रसार तभी सांत होता है जब हर के अभाज्य गुणनखंड केवल 2 और 5 हों। 3125 = 5⁵, जबकि 6 = 2 × 3, 455 = 5 × 7 × 13 और 343 = 7³।" },
  "s9m1-b-004": { stem: "बहुपद 6x² − 7x − 3 के शून्यकों का योग और गुणनफल क्रमशः हैं", options: ["7/6 और −1/2", "−7/6 और −1/2", "7/6 और 1/2", "−7/6 और 1/2"], explanation: "योग = −b/a = 7/6 और गुणनफल = c/a = −3/6 = −1/2। (शून्यक 3/2 और −1/3 हैं, जो दोनों मानों की पुष्टि करते हैं।)" },
  "s9m1-b-005": { stem: "वह द्विघात बहुपद जिसके शून्यकों का योग −3 और गुणनफल 2 है, है", options: ["x² − 3x + 2", "x² + 3x − 2", "x² + 3x + 2", "x² − 3x − 2"], explanation: "बहुपद = x² − (योग)x + (गुणनफल) = x² − (−3)x + 2 = x² + 3x + 2, जिसके शून्यक −1 और −2 हैं।" },
  "s9m1-b-006": { stem: "p(x) = x³ − 3x² + 4x + 5 को (x − 2) से भाग देने पर शेषफल है", options: ["5", "13", "1", "9"], explanation: "शेषफल प्रमेय से शेषफल p(2) = 8 − 12 + 8 + 5 = 9 है।" },
  "s9m1-b-007": { stem: "यदि (x + 1), 2x³ + ax² + 2x + 3 का एक गुणनखंड है, तो a का मान है", options: ["−1", "1", "2", "3"], explanation: "गुणनखंड प्रमेय से p(−1) = 0: −2 + a − 2 + 3 = a − 1 = 0, अतः a = 1।" },
  "s9m1-b-008": { stem: "उपयुक्त बीजीय सर्वसमिका का प्रयोग करके 103 × 97 का मान है", options: ["9991", "9999", "10009", "9901"], explanation: "103 × 97 = (100 + 3)(100 − 3) = 100² − 3² = 10000 − 9 = 9991।" },
  "s9m1-b-009": { stem: "यूक्लिड विभाजन प्रमेयिका के अनुसार धनात्मक पूर्णांकों a और b के लिए ऐसे अद्वितीय पूर्णांक q और r होते हैं कि a = bq + r, जहाँ r संतुष्ट करता है", options: ["0 < r ≤ b", "0 ≤ r ≤ b", "0 < r < b", "0 ≤ r < b"], explanation: "शेषफल शून्य हो सकता है, परंतु भाजक से सदैव कम होना चाहिए, अतः 0 ≤ r < b।" },
  "s9m1-b-010": { stem: "दो संख्याओं का HCF 12 है और उनका गुणनफल 1800 है। उनका LCM है", options: ["180", "150", "75", "1800"], explanation: "HCF × LCM = दोनों संख्याओं का गुणनफल, अतः LCM = 1800 / 12 = 150।" },
  "s9m1-p-001": { stem: "अभिकथन (A): √3 एक अपरिमेय संख्या है। कारण (R): यदि कोई अभाज्य संख्या p, a² को विभाजित करती है (a धनात्मक पूर्णांक), तो p, a को भी विभाजित करती है।", options: [...AR_HI], explanation: "दोनों सत्य हैं। √3 = a/b (न्यूनतम रूप) मानने पर 3b² = a², अतः 3, a² को और इसलिए (R से) a को विभाजित करता है; फिर 3, b को भी विभाजित करेगा, जो विरोधाभास है। R ही उपपत्ति का मुख्य चरण है।" },
  "s9m1-p-002": { stem: "किस प्राकृत संख्या n के लिए 4ⁿ का अंतिम अंक शून्य होगा?", options: ["n = 5", "n = 10", "किसी भी प्राकृत संख्या n के लिए नहीं", "प्रत्येक सम n के लिए"], explanation: "शून्य पर समाप्त होने वाली संख्या के अभाज्य गुणनखंडों में 2 और 5 दोनों होने चाहिए। 4ⁿ = 2²ⁿ में केवल 2 है, और अंकगणित की आधारभूत प्रमेय (गुणनखंडन की अद्वितीयता) से इसमें 5 कभी नहीं आ सकता।" },
  "s9m1-p-003": { stem: "यदि α और β बहुपद 2x² − 5x + 3 के शून्यक हैं, तो α² + β² का मान है", options: ["37/4", "13/4", "19/4", "25/4"], explanation: "α + β = 5/2 और αβ = 3/2, अतः α² + β² = (α + β)² − 2αβ = 25/4 − 3 = 13/4। जाँच: शून्यक 1 और 3/2 हैं, तथा 1 + 9/4 = 13/4।" },
  "s9m1-p-004": { stem: "त्रिघात बहुपद 2x³ − 5x² − 14x + 8 के दो शून्यक 4 और −2 हैं। तीसरा शून्यक है", options: ["−1/2", "2", "1/4", "1/2"], explanation: "शून्यकों का योग = −b/a = 5/2, अतः तीसरा शून्यक = 5/2 − (4 − 2) = 1/2। गुणनफल से जाँच: 4 × (−2) × 1/2 = −4 = −d/a = −8/2।" },
  "s9m1-p-005": { stem: "वह सबसे बड़ी संख्या जो 70 और 125 को भाग देने पर क्रमशः 5 और 8 शेष छोड़ती है, है", options: ["5", "65", "13", "25"], explanation: "संख्या 70 − 5 = 65 और 125 − 8 = 117 को पूर्णतः विभाजित करेगी। 65 = 5 × 13 और 117 = 3² × 13, अतः HCF = 13 (और 13 दोनों शेषफलों से बड़ा है)।" },
  "s9m1-p-006": { stem: "चार अंकों की वह सबसे छोटी संख्या जिसे 12, 15 और 20 से भाग देने पर प्रत्येक दशा में शेषफल 7 बचे, है", options: ["1027", "1007", "1087", "1067"], explanation: "LCM(12, 15, 20) = 60। 60 का चार अंकों वाला सबसे छोटा गुणज 1020 है, अतः संख्या 1020 + 7 = 1027 है (इससे पहला विकल्प 967 तीन अंकों का है)।" },
  "s9m1-p-007": { stem: "यदि x = 3 + 2√2, तो x² + 1/x² का मान है", options: ["36", "32", "38", "34"], explanation: "1/x = 1/(3 + 2√2) = 3 − 2√2 (क्योंकि (3 + 2√2)(3 − 2√2) = 1)। अतः x + 1/x = 6 और x² + 1/x² = 6² − 2 = 34।" },
  "s9m1-p-008": { stem: "कथनों पर विचार कीजिए: I. एक शून्येतर परिमेय संख्या और एक अपरिमेय संख्या का गुणनफल अपरिमेय होता है। II. दो अपरिमेय संख्याओं का योग सदैव अपरिमेय होता है। III. प्रत्येक वास्तविक संख्या या तो परिमेय है या अपरिमेय। IV. π परिमेय है क्योंकि π = 22/7। इनमें से कौन-से सही हैं?", options: ["I, II और III", "केवल I और III", "केवल II और IV", "केवल I"], explanation: "I और III सत्य हैं। II असत्य है: √2 + (−√2) = 0 परिमेय है। IV असत्य है: 22/7 अपरिमेय संख्या π का केवल एक सन्निकट मान है।" },
  "s9m1-p-009": { stem: "p(x) = x⁴ + x³ − 34x² − 4x + 120 के दो शून्यक 2 और −2 हैं। अन्य दो शून्यक हैं", options: ["−5 और 6", "5 और 6", "5 और −6", "−5 और −6"], explanation: "p(x) को x² − 4 से भाग देने पर x² + x − 30 = (x + 6)(x − 5) मिलता है, अतः अन्य शून्यक 5 और −6 हैं। जाँच: 2 − 2 + 5 − 6 = −1 = −b/a।" },
  "s9m1-p-010": { stem: "व्यंजकों का उनके तुल्य रूपों से मिलान कीजिए। A. a³ + b³  B. a³ − b³  C. a³ + b³ + c³ − 3abc  D. (a + b)³ ; 1. (a − b)(a² + ab + b²)  2. a³ + b³ + 3ab(a + b)  3. (a + b)(a² − ab + b²)  4. (a + b + c)(a² + b² + c² − ab − bc − ca)", options: ["A-1, B-3, C-4, D-2", "A-3, B-1, C-2, D-4", "A-3, B-1, C-4, D-2", "A-3, B-4, C-1, D-2"], explanation: "ये मानक गुणनखंडन सर्वसमिकाएँ हैं: a³ + b³ = (a + b)(a² − ab + b²), a³ − b³ = (a − b)(a² + ab + b²), तीन चरों वाली सर्वसमिका से C-4, और (a + b)³ = a³ + b³ + 3ab(a + b)।" },

  // रैखिक एवं द्विघात समीकरण
  "s9m1-b-011": { stem: "समीकरण युग्म 2x + 3y = 9 और 4x + 6y = 18 का", options: ["एक अद्वितीय हल है", "कोई हल नहीं है", "अपरिमित रूप से अनेक हल हैं", "ठीक दो हल हैं"], explanation: "a₁/a₂ = b₁/b₂ = c₁/c₂ = 1/2, अतः रेखाएँ संपाती हैं और रेखा का प्रत्येक बिंदु एक हल है।" },
  "s9m1-b-012": { stem: "युग्म x + y = 14 और x − y = 4 का हल (x, y) है", options: ["(5, 9)", "(9, 5)", "(10, 4)", "(8, 6)"], explanation: "जोड़ने पर 2x = 18, अतः x = 9; फिर y = 14 − 9 = 5। जाँच: 9 − 5 = 4।" },
  "s9m1-b-013": { stem: "2x² − 4x + 3 = 0 के मूलों की प्रकृति है", options: ["दो भिन्न वास्तविक मूल", "दो समान वास्तविक मूल", "एक धनात्मक और एक ऋणात्मक वास्तविक मूल", "कोई वास्तविक मूल नहीं"], explanation: "विविक्तकर D = b² − 4ac = 16 − 24 = −8 < 0, अतः समीकरण का कोई वास्तविक मूल नहीं है।" },
  "s9m1-b-014": { stem: "x² − 3x − 10 = 0 के मूल हैं", options: ["5 और −2", "−5 और 2", "10 और −1", "2 और −5"], explanation: "x² − 3x − 10 = (x − 5)(x + 2), अतः x = 5 या x = −2। जाँच: योग 3 और गुणनफल −10, जो −b/a और c/a से मेल खाते हैं।" },
  "s9m1-b-015": { stem: "k के वे मान जिनके लिए 2x² + kx + 3 = 0 के दो समान वास्तविक मूल हों, हैं", options: ["±√6", "±2√6", "±6", "±24"], explanation: "समान मूलों के लिए D = k² − 4(2)(3) = 0, अतः k² = 24 और k = ±√24 = ±2√6।" },
  "s9m1-b-016": { stem: "दो प्राकृत संख्याओं का योग 27 और गुणनफल 182 है। संख्याएँ हैं", options: ["7 और 26", "12 और 15", "13 और 14", "11 और 16"], explanation: "x(27 − x) = 182 से x² − 27x + 182 = 0 = (x − 13)(x − 14)। 7 और 26 का गुणनफल 182 है, पर योग 33 है।" },
  "s9m1-b-017": { stem: "युग्म a₁x + b₁y + c₁ = 0 और a₂x + b₂y + c₂ = 0 के लिए प्रतिबंध a₁/a₂ ≠ b₁/b₂ का अर्थ है कि रेखाएँ", options: ["प्रतिच्छेदी हैं, और एक अद्वितीय हल है", "समांतर हैं, और कोई हल नहीं है", "संपाती हैं, और अपरिमित रूप से अनेक हल हैं", "अनिवार्यतः एक-दूसरे पर लंब हैं"], explanation: "x और y के गुणांकों के असमान अनुपात का अर्थ है कि रेखाओं की ढालें भिन्न हैं, अतः वे ठीक एक बिंदु पर मिलती हैं। उनका लंब होना आवश्यक नहीं।" },
  "s9m1-b-018": { stem: "पिता की वर्तमान आयु पुत्र की आयु की तीन गुनी है। 10 वर्ष बाद वह पुत्र से दुगुनी आयु का होगा। उनकी वर्तमान आयु (पिता, पुत्र) वर्षों में है", options: ["36 और 12", "45 और 15", "40 और 20", "30 और 10"], explanation: "पुत्र की आयु s और पिता की 3s मानें। 3s + 10 = 2(s + 10), अतः s = 10 और पिता 30 वर्ष। जाँच: 10 वर्ष बाद 40 = 2 × 20।" },
  "s9m1-b-019": { stem: "यदि x = 2, समीकरण x² + kx − 6 = 0 का एक मूल है, तो k का मान है", options: ["1", "−1", "2", "3"], explanation: "x = 2 रखने पर 4 + 2k − 6 = 0, अतः k = 1। तब x² + x − 6 = 0 के मूल 2 और −3 हैं।" },
  "s9m1-b-020": { stem: "निम्नलिखित में से कौन-सा द्विघात समीकरण है?", options: ["x(x + 1) + 8 = (x + 2)(x − 2)", "(x + 1)² = 2(x − 3)", "x² + 3x + 1 = (x − 2)²", "(x − 2)(x + 1) = (x − 1)(x + 3)"], explanation: "(x + 1)² = 2(x − 3) सरल करने पर x² + 7 = 0 बनता है, जिसकी घात 2 है। अन्य सभी में x² के पद कट जाते हैं और रैखिक समीकरण बचता है।" },
  "s9m1-p-011": { stem: "k के किस मान के लिए युग्म kx + 3y = k − 3 और 12x + ky = k का कोई हल नहीं है?", options: ["6", "−6", "±6", "0"], explanation: "कोई हल न होने के लिए k/12 = 3/k ≠ (k − 3)/k। k² = 36 से k = ±6। k = 6 पर 3/k = (k − 3)/k = 1/2 (अपरिमित हल), अतः केवल k = −6 मान्य है (−1/2 ≠ 3/2)।" },
  "s9m1-p-012": { stem: "a और b के किन मानों के लिए युग्म 2x + 3y = 7 और (a − b)x + (a + b)y = 3a + b − 2 के अपरिमित रूप से अनेक हल होंगे?", options: ["a = 1, b = 5", "a = 5, b = −1", "a = −5, b = 1", "a = 5, b = 1"], explanation: "2/(a − b) = 3/(a + b) = 7/(3a + b − 2) होना चाहिए। पहली समता से a = 5b; पहली और तीसरी से a = 9b − 4। अतः b = 1, a = 5। जाँच: 2/4 = 3/6 = 7/14।" },
  "s9m1-p-013": { stem: "दो अंकों की एक संख्या के अंकों का योग 9 है। संख्या का नौ गुना, अंकों को उलटने से बनी संख्या के दुगुने के बराबर है। संख्या है", options: ["18", "81", "27", "36"], explanation: "दहाई का अंक x और इकाई का y लें: 9(10x + y) = 2(10y + x) से 88x = 11y, अर्थात y = 8x। x + y = 9 से x = 1, y = 8। जाँच: 9 × 18 = 162 = 2 × 81।" },
  "s9m1-p-014": { stem: "एक रेलगाड़ी 360 km की दूरी एकसमान चाल से तय करती है। यदि चाल 5 km/h अधिक होती, तो यात्रा में 1 घंटा कम लगता। रेलगाड़ी की चाल (km/h में) है", options: ["45", "36", "40", "50"], explanation: "360/v − 360/(v + 5) = 1 से v(v + 5) = 1800, अर्थात v² + 5v − 1800 = 0 = (v − 40)(v + 45)। अतः v = 40। जाँच: 40 km/h पर 9 घंटे, 45 km/h पर 8 घंटे।" },
  "s9m1-p-015": { stem: "यदि (a − b)x² + (b − c)x + (c − a) = 0 (a ≠ b) के मूल समान हैं, तो", options: ["2b = a + c", "2c = a + b", "केवल a = b = c", "2a = b + c"], explanation: "गुणांकों का योग 0 है, अतः x = 1 एक मूल है; समान मूल होने से दोनों मूल 1 हैं, इसलिए गुणनफल (c − a)/(a − b) = 1, जिससे 2a = b + c। b = 2a − c रखने पर विविक्तकर 4(a − c)² − 4(c − a)² = 0 होता है, जो इसकी पुष्टि करता है।" },
  "s9m1-p-016": { stem: "अभिकथन (A): समीकरण 3x² − 4√3x + 4 = 0 के दो भिन्न वास्तविक मूल हैं। कारण (R): द्विघात समीकरण ax² + bx + c = 0 के दो भिन्न वास्तविक मूल होते हैं यदि b² − 4ac > 0।", options: [...AR_HI], explanation: "यहाँ D = (4√3)² − 4 × 3 × 4 = 48 − 48 = 0, अतः मूल वास्तविक और समान (दोनों 2/√3) हैं; A असत्य है। R विविक्तकर का सही नियम है।" },
  "s9m1-p-017": { stem: "एक आयताकार खेत का विकर्ण उसकी छोटी भुजा से 60 m अधिक है और बड़ी भुजा छोटी भुजा से 30 m अधिक है। खेत की भुजाएँ हैं", options: ["60 m और 90 m", "90 m और 120 m", "120 m और 150 m", "30 m और 60 m"], explanation: "x² + (x + 30)² = (x + 60)² से x² − 60x − 2700 = 0 = (x − 90)(x + 30), अतः x = 90 m और बड़ी भुजा 120 m। जाँच: 90² + 120² = 150² और 150 = 90 + 60।" },
  "s9m1-p-018": { stem: "ax² + bx + c = 0 (a ≠ 0, वास्तविक गुणांक) के लिए विचार कीजिए: I. यदि a और c विपरीत चिह्नों के हैं, तो मूल वास्तविक और भिन्न हैं। II. यदि b = 0 और ac > 0, तो कोई वास्तविक मूल नहीं है। III. समीकरण के दो से अधिक भिन्न मूल हो सकते हैं। IV. यदि a + b + c = 0, तो x = −1 सदैव एक मूल है। कौन-से सही हैं?", options: ["केवल I और II", "केवल I, II और IV", "केवल II और III", "I, III और IV"], explanation: "I: ac < 0 से D = b² − 4ac > 0। II: D = −4ac < 0। III असत्य है (अधिकतम दो मूल)। IV असत्य है: a + b + c = 0 होने पर x = 1 मूल होता है, x = −1 नहीं।" },
  "s9m1-p-019": { stem: "रेखाएँ x − y + 1 = 0 और 3x + 2y − 12 = 0 तथा x-अक्ष मिलकर एक त्रिभुज बनाती हैं। इसका क्षेत्रफल (वर्ग मात्रक में) है", options: ["15", "6", "7.5", "10"], explanation: "रेखाएँ (2, 3) पर मिलती हैं और x-अक्ष को (−1, 0) तथा (4, 0) पर काटती हैं। आधार = 5, ऊँचाई = 3, अतः क्षेत्रफल = ½ × 5 × 3 = 7.5।" },
  "s9m1-p-020": { stem: "एक नाव 10 घंटे में धारा के प्रतिकूल 30 km और धारा के अनुकूल 44 km जाती है, तथा 13 घंटे में धारा के प्रतिकूल 40 km और अनुकूल 55 km जाती है। स्थिर जल में नाव की चाल (km/h में) है", options: ["3", "11", "8", "5"], explanation: "u = 1/(x − y), v = 1/(x + y) लें: 30u + 44v = 10 और 40u + 55v = 13 से v = 1/11, u = 1/5। अतः x + y = 11, x − y = 5, x = 8 (धारा की चाल 3 km/h)।" },

  // समांतर श्रेढ़ी
  "s9m1-b-021": { stem: "समांतर श्रेढ़ी 2, 7, 12, ... का 10वाँ पद है", options: ["52", "47", "45", "42"], explanation: "a₁₀ = a + 9d = 2 + 9 × 5 = 47।" },
  "s9m1-b-022": { stem: "समांतर श्रेढ़ी 3, 8, 13, ... का कौन-सा पद 78 है?", options: ["15वाँ", "17वाँ", "16वाँ", "14वाँ"], explanation: "3 + (n − 1) × 5 = 78 से n − 1 = 15, अतः n = 16।" },
  "s9m1-b-023": { stem: "प्रथम 20 विषम प्राकृत संख्याओं का योग है", options: ["420", "380", "441", "400"], explanation: "प्रथम n विषम संख्याओं का योग n² होता है; यहाँ S = 20/2 × (1 + 39) = 400 = 20²।" },
  "s9m1-b-024": { stem: "समांतर श्रेढ़ी 2, 5, 8, ... के प्रथम 15 पदों का योग है", options: ["345", "330", "360", "315"], explanation: "S₁₅ = 15/2 × [2 × 2 + 14 × 3] = 15/2 × 46 = 345।" },
  "s9m1-b-025": { stem: "यदि किसी समांतर श्रेढ़ी का nवाँ पद aₙ = 7 − 4n है, तो उसका सार्व अंतर है", options: ["4", "−4", "3", "7"], explanation: "d = aₙ₊₁ − aₙ = [7 − 4(n + 1)] − [7 − 4n] = −4। पद 3, −1, −5, ... हैं।" },
  "s9m1-b-026": { stem: "दो अंकों वाली कितनी संख्याएँ 7 से विभाज्य हैं?", options: ["14", "12", "13", "15"], explanation: "समांतर श्रेढ़ी 14, 21, ..., 98 है, अतः n = (98 − 14)/7 + 1 = 12 + 1 = 13।" },
  "s9m1-b-027": { stem: "यदि k + 2, 4k − 6 और 3k − 2 किसी समांतर श्रेढ़ी के तीन क्रमागत पद हैं, तो k बराबर है", options: ["2", "4", "−3", "3"], explanation: "2(4k − 6) = (k + 2) + (3k − 2) से 8k − 12 = 4k, अतः k = 3। पद 5, 6, 7 इसकी पुष्टि करते हैं।" },
  "s9m1-b-028": { stem: "निम्नलिखित में से कौन-सा अनुक्रम समांतर श्रेढ़ी है?", options: ["√2, √8, √18, √32", "1, 4, 9, 16", "2, 4, 8, 16", "1, 1/2, 1/3, 1/4"], explanation: "√2, √8, √18, √32 = √2, 2√2, 3√2, 4√2, जिनमें सार्व अंतर √2 अचर है। अन्य में अंतर अचर नहीं है।" },
  "s9m1-b-029": { stem: "एक व्यक्ति पहले महीने ₹100, दूसरे महीने ₹120, तीसरे महीने ₹140 और इसी प्रकार आगे बचत करता है। 12 महीनों में कुल बचत है", options: ["₹2640", "₹2520", "₹2400", "₹3840"], explanation: "a = 100, d = 20, n = 12: S = 12/2 × [200 + 11 × 20] = 6 × 420 = ₹2520।" },
  "s9m1-b-030": { stem: "समांतर श्रेढ़ी 3, 8, 13, ..., 253 के अंतिम पद से 20वाँ पद है", options: ["163", "153", "158", "98"], explanation: "पीछे से पढ़ने पर श्रेढ़ी 253 से आरंभ होती है और d = −5, अतः 20वाँ पद 253 − 19 × 5 = 158 है।" },
  "s9m1-p-021": { stem: "किसी समांतर श्रेढ़ी के प्रथम n पदों का योग Sₙ = 3n² + 5n है। इसका 25वाँ पद है", options: ["150", "158", "1950", "152"], explanation: "aₙ = Sₙ − Sₙ₋₁ = 6n + 2 (जाँच: a₁ = S₁ = 8)। अतः a₂₅ = 6 × 25 + 2 = 152।" },
  "s9m1-p-022": { stem: "किसी समांतर श्रेढ़ी का pवाँ पद q और qवाँ पद p है (p ≠ q)। उसका (p + q)वाँ पद है", options: ["0", "p + q", "p − q", "1"], explanation: "a + (p − 1)d = q और a + (q − 1)d = p को घटाने पर d = −1, अतः a = p + q − 1। तब (p + q)वाँ पद = a + (p + q − 1)(−1) = 0।" },
  "s9m1-p-023": { stem: "दो समांतर श्रेढ़ियों के n पदों के योगों का अनुपात (7n + 1) : (4n + 27) है। उनके 11वें पदों का अनुपात है", options: ["3 : 4", "78 : 71", "4 : 3", "5 : 4"], explanation: "mवें पदों का अनुपात, n = 2m − 1 रखने पर योगों के अनुपात के बराबर होता है। m = 11 के लिए n = 21: (147 + 1) : (84 + 27) = 148 : 111 = 4 : 3। (78 : 71 में गलती से n = 11 रखा गया है।)" },
  "s9m1-p-024": { stem: "समांतर श्रेढ़ी 24, 21, 18, ... के कितने पद लिए जाएँ ताकि उनका योग 78 हो?", options: ["केवल 4", "4 या 13", "केवल 13", "6 या 11"], explanation: "n/2 [48 − 3(n − 1)] = 78 से n² − 17n + 52 = 0 = (n − 4)(n − 13)। दोनों मान्य हैं: S₄ = 78, और S₁₃ में 8वें पद के बाद के ऋणात्मक पद कटकर योग पुनः 78 कर देते हैं।" },
  "s9m1-p-025": { stem: "7 से विभाज्य सभी तीन अंकों वाली प्राकृत संख्याओं का योग है", options: ["70455", "69237", "71435", "70336"], explanation: "श्रेढ़ी 105, 112, ..., 994 है, जिसमें n = (994 − 105)/7 + 1 = 128। योग = 128/2 × (105 + 994) = 64 × 1099 = 70336।" },
  "s9m1-p-026": { stem: "अभिकथन (A): 0, समांतर श्रेढ़ी 31, 28, 25, ... का एक पद है। कारण (R): कोई संख्या किसी समांतर श्रेढ़ी का पद तभी होती है जब aₙ = a + (n − 1)d से प्राप्त n एक प्राकृत संख्या हो।", options: [...AR_HI], explanation: "31 − 3(n − 1) = 0 से n = 34/3, जो प्राकृत संख्या नहीं है, अतः A असत्य है (पद 1 से सीधे −2 पर जाते हैं)। R एक सही कसौटी है।" },
  "s9m1-p-027": { stem: "किसी समांतर श्रेढ़ी का प्रथम पद 5 और अंतिम पद 45 है, तथा सभी पदों का योग 400 है। सार्व अंतर है", options: ["8/3", "3", "5/2", "8/5"], explanation: "S = n/2 (a + l) से 400 = n/2 × 50, अतः n = 16। तब 45 = 5 + 15d, अतः d = 40/15 = 8/3।" },
  "s9m1-p-028": { stem: "200 लट्ठे इस प्रकार रखे गए हैं कि सबसे नीचे की पंक्ति में 20, उसके ऊपर 19, फिर 18 लट्ठे, और इसी प्रकार आगे। पंक्तियों की संख्या और सबसे ऊपरी पंक्ति में लट्ठों की संख्या है", options: ["16 पंक्तियाँ, ऊपरी पंक्ति में 4 लट्ठे", "15 पंक्तियाँ, ऊपरी पंक्ति में 6 लट्ठे", "16 पंक्तियाँ, ऊपरी पंक्ति में 5 लट्ठे", "25 पंक्तियाँ, ऊपरी पंक्ति में 1 लट्ठा"], explanation: "n/2 [40 − (n − 1)] = 200 से n² − 41n + 400 = 0 = (n − 16)(n − 25)। n = 25 पर ऊपरी पंक्ति ऋणात्मक हो जाती है, अतः n = 16 और ऊपरी पंक्ति में 20 − 15 = 5 लट्ठे हैं।" },
  "s9m1-p-029": { stem: "शून्येतर पदों वाली किसी समांतर श्रेढ़ी के बारे में कथन: I. प्रत्येक पद को शून्येतर अचर k से गुणा करने पर समांतर श्रेढ़ी बनती है। II. पदों के वर्ग सदैव समांतर श्रेढ़ी बनाते हैं। III. प्रत्येक पद में एक अचर जोड़ने पर उसी सार्व अंतर वाली समांतर श्रेढ़ी बनती है। IV. पदों के व्युत्क्रम सदैव समांतर श्रेढ़ी बनाते हैं। कौन-से सही हैं?", options: ["I, II और III", "केवल I और III", "केवल II और IV", "I, III और IV"], explanation: "I से सार्व अंतर kd वाली श्रेढ़ी बनती है और III में सार्व अंतर d रहता है। II असत्य है (1, 2, 3 से 1, 4, 9) और IV असत्य है (1, 2, 3 से 1, 1/2, 1/3)।" },
  "s9m1-p-030": { stem: "समांतर श्रेढ़ी 213, 205, 197, ..., 37 का मध्य पद है", options: ["125", "117", "133", "121"], explanation: "n = (213 − 37)/8 + 1 = 23 पद, अतः मध्य पद 12वाँ है: 213 − 11 × 8 = 125।" },

  // निर्देशांक ज्यामिति
  "s9m1-b-031": { stem: "बिंदुओं (2, 3) और (4, 1) के बीच की दूरी है", options: ["4", "2√2", "2", "√10"], explanation: "d = √[(4 − 2)² + (1 − 3)²] = √(4 + 4) = √8 = 2√2।" },
  "s9m1-b-032": { stem: "(−5, 7) और (3, −1) को मिलाने वाले रेखाखंड का मध्य-बिंदु है", options: ["(−1, 3)", "(1, −3)", "(−4, 4)", "(−2, 6)"], explanation: "मध्य-बिंदु = ((−5 + 3)/2, (7 − 1)/2) = (−1, 3)।" },
  "s9m1-b-033": { stem: "A(4, −3) और B(8, 5) को मिलाने वाले रेखाखंड को 3 : 1 के अनुपात में आंतरिक रूप से विभाजित करने वाला बिंदु है", options: ["(5, −1)", "(6, 1)", "(7, 3)", "(7, −3)"], explanation: "x = (3 × 8 + 1 × 4)/4 = 7, y = (3 × 5 + 1 × (−3))/4 = 3। (5, −1) अनुपात 1 : 3 का बिंदु है।" },
  "s9m1-b-034": { stem: "बिंदु (−6, 8) की मूल बिंदु से दूरी है", options: ["2√7", "14", "100", "10"], explanation: "d = √[(−6)² + 8²] = √(36 + 64) = √100 = 10।" },
  "s9m1-b-035": { stem: "शीर्षों (2, 3), (−1, 0) और (2, −4) वाले त्रिभुज का क्षेत्रफल (वर्ग मात्रक में) है", options: ["21", "10.5", "7", "12"], explanation: "क्षेत्रफल = ½|2(0 + 4) + (−1)(−4 − 3) + 2(3 − 0)| = ½|8 + 7 + 6| = 21/2 = 10.5। (जाँच: x = 2 पर आधार 7, ऊँचाई 3।)" },
  "s9m1-b-036": { stem: "x-अक्ष पर वह बिंदु जो (2, −5) और (−2, 9) से समदूरस्थ है, है", options: ["(7, 0)", "(0, −7)", "(−7, 0)", "(−5, 0)"], explanation: "(x − 2)² + 25 = (x + 2)² + 81 से −8x = 56, अतः x = −7। जाँच: दोनों दूरियाँ √106 हैं।" },
  "s9m1-b-037": { stem: "शीर्षों (1, 4), (−1, −1) और (3, −2) वाले त्रिभुज का केंद्रक है", options: ["(1, 1/3)", "(3, 1)", "(1, 1)", "(1/3, 1)"], explanation: "केंद्रक = ((1 − 1 + 3)/3, (4 − 1 − 2)/3) = (1, 1/3)।" },
  "s9m1-b-038": { stem: "(2, 3) और (4, 7) से होकर जाने वाली रेखा की ढाल है", options: ["1/2", "−2", "5/3", "2"], explanation: "ढाल = (y₂ − y₁)/(x₂ − x₁) = (7 − 3)/(4 − 2) = 2।" },
  "s9m1-b-039": { stem: "यदि बिंदु (2, 3), (4, k) और (6, −3) संरेख हैं, तो k का मान है", options: ["1", "0", "−1", "3"], explanation: "क्षेत्रफल = 0: 2(k + 3) + 4(−3 − 3) + 6(3 − k) = −4k = 0, अतः k = 0। वास्तव में (4, 0) अन्य दो बिंदुओं का मध्य-बिंदु है।" },
  "s9m1-b-040": { stem: "रेखा 2x + 3y = 6, x-अक्ष और y-अक्ष को क्रमशः किन बिंदुओं पर मिलती है?", options: ["(2, 0) और (0, 3)", "(6, 0) और (0, 6)", "(3, 0) और (0, 2)", "(−3, 0) और (0, −2)"], explanation: "y = 0 रखने पर x = 3; x = 0 रखने पर y = 2। अतः प्रतिच्छेद बिंदु (3, 0) और (0, 2) हैं।" },
  "s9m1-p-031": { stem: "y-अक्ष, (5, −6) और (−1, −4) को मिलाने वाले रेखाखंड को किस अनुपात में विभाजित करता है?", options: ["1 : 5", "6 : 1", "2 : 3", "5 : 1"], explanation: "अनुपात k : 1 मानें। y-अक्ष पर x = 0: (−k + 5)/(k + 1) = 0, अतः k = 5। अनुपात 5 : 1 है और बिंदु (0, −13/3) है।" },
  "s9m1-p-032": { stem: "A(1, 2), B(4, y), C(x, 6) और D(3, 5) इसी क्रम में समांतर चतुर्भुज ABCD के शीर्ष हैं। x और y के मान हैं", options: ["x = 6, y = 3", "x = 3, y = 6", "x = 6, y = 5", "x = 2, y = 3"], explanation: "विकर्ण परस्पर समद्विभाजित करते हैं, अतः AC का मध्य-बिंदु = BD का मध्य-बिंदु: (1 + x)/2 = 7/2 से x = 6, और 8/2 = (y + 5)/2 से y = 3।" },
  "s9m1-p-033": { stem: "बिंदु A(1, 7), B(4, 2), C(−1, −1) और D(−4, 4) इसी क्रम में लेने पर बनाते हैं एक", options: ["समचतुर्भुज जो वर्ग नहीं है", "वर्ग", "आयत जो वर्ग नहीं है", "समांतर चतुर्भुज जिसमें कोई समकोण नहीं"], explanation: "AB² = BC² = CD² = DA² = 34 (सभी भुजाएँ बराबर) और विकर्ण AC² = BD² = 68 बराबर हैं, अतः ABCD एक वर्ग है।" },
  "s9m1-p-034": { stem: "शीर्षों (−4, −2), (−3, −5), (3, −2) और (2, 3) (इसी क्रम में) वाले चतुर्भुज का क्षेत्रफल (वर्ग मात्रक में) है", options: ["56", "14", "28", "21"], explanation: "शूलेस विधि: Σxᵢyᵢ₊₁ = 20 + 6 + 9 − 4 = 31 और Σyᵢxᵢ₊₁ = 6 − 15 − 4 − 12 = −25, अतः क्षेत्रफल = ½|31 + 25| = 28। (दो त्रिभुजों में बाँटने पर भी 10.5 + 17.5 = 28।)" },
  "s9m1-p-035": { stem: "शीर्षों (1, −1), (−4, 2k) और (−k, −5) वाले त्रिभुज का क्षेत्रफल 24 वर्ग मात्रक है। k के संभावित मान हैं", options: ["3 या −9/2", "−3 या 9/2", "केवल 3", "केवल 9/2"], explanation: "क्षेत्रफल = ½|2k² + 3k + 21| = 24। 2k² + 3k − 27 = 0 = (k − 3)(2k + 9) से k = 3 या −9/2; 2k² + 3k + 69 = 0 वाली स्थिति का कोई वास्तविक मूल नहीं है।" },
  "s9m1-p-036": { stem: "A(−2, −2) और B(2, −4) दिए हैं। रेखाखंड AB पर वह बिंदु P जिसके लिए AP = (3/7)AB है, है", options: ["(2/7, −22/7)", "(−2/7, 20/7)", "(−2/7, −20/7)", "(2/7, −20/7)"], explanation: "AP : PB = 3 : 4। x = (3 × 2 + 4 × (−2))/7 = −2/7, y = (3 × (−4) + 4 × (−2))/7 = −20/7। (2/7, −22/7) में गलती से अनुपात 4 : 3 लिया गया है।" },
  "s9m1-p-037": { stem: "शीर्षों (0, −1), (2, 1) और (0, 3) वाले त्रिभुज की भुजाओं के मध्य-बिंदुओं को मिलाकर एक नया त्रिभुज बनाया जाता है। नए त्रिभुज का क्षेत्रफल और मूल त्रिभुज के क्षेत्रफल से उसका अनुपात है", options: ["2 वर्ग मात्रक, अनुपात 1 : 2", "1 वर्ग मात्रक, अनुपात 1 : 2", "2 वर्ग मात्रक, अनुपात 1 : 4", "1 वर्ग मात्रक, अनुपात 1 : 4"], explanation: "मध्य-बिंदु (1, 0), (1, 2), (0, 1) हैं: क्षेत्रफल = ½|1(2 − 1) + 1(1 − 0) + 0| = 1। मूल क्षेत्रफल = ½|2(3 + 1)| = 4, अतः अनुपात 1 : 4 है।" },
  "s9m1-p-038": { stem: "अभिकथन (A): बिंदु A(3, 2), B(−2, −3) और C(2, 3) एक समकोण त्रिभुज बनाते हैं। कारण (R): प्रत्येक त्रिभुज में सबसे बड़ी भुजा का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है।", options: [...AR_HI], explanation: "AB² = 50, CA² = 2, BC² = 52 = 50 + 2, अतः त्रिभुज A पर समकोण है; A सत्य है। R असत्य है: पाइथागोरस संबंध केवल समकोण त्रिभुजों पर लागू होता है।" },
  "s9m1-p-039": { stem: "(6, −6), (3, −7) और (3, 3) से होकर जाने वाले वृत्त का केंद्र है", options: ["(3, 2)", "(3, −2)", "(−3, 2)", "(2, −3)"], explanation: "(3, −7) और (3, 3) का लंब समद्विभाजक y = −2 है। (6, −6) और (3, 3) से दूरियाँ बराबर करने पर (x − 6)² + 16 = (x − 3)² + 25, अतः x = 3। तीनों दूरियाँ 5 हैं।" },
  "s9m1-p-040": { stem: "रेखाओं का कौन-सा युग्म परस्पर लंब है?", options: ["y = 2x + 3 और 2x − y = 1", "x + y = 1 और x + y = 5", "3x + 4y = 7 और 4x + 3y = 1", "y = 2x + 3 और x + 2y = 5"], explanation: "ढालें 2 और −1/2 का गुणनफल −1 है, अतः ये रेखाएँ लंब हैं। पहले दो युग्म समांतर हैं; तीसरे में ढालें −3/4 और −4/3 का गुणनफल 1 है।" },
};
