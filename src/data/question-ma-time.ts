/**
 * Mathematics, Time-Speed-Distance, Trains, Boats & Streams, Time & Work, Pipes.
 *
 * section: "numerical". topic: "Time & motion". Shared across both exam levels.
 *   • beginner, basic speed/distance/time, unit conversion, simple work/pipes.
 *   • proficient, relative speed, trains, boats-streams, combined work, pipes with leak.
 *
 * Every answer carries the working. Original, on-pattern items (UPESSC/UPTET style).
 */
import type { Question } from "./questions";

export const maTimeBank: Question[] = [
  // ==================================================== Speed-Distance-Time, BEGINNER
  {
    id: "mt-b-01", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "easy",
    stem: "A car travels 120 km in 2 hours. Its speed is ____",
    options: ["60 km/h", "120 km/h", "40 km/h", "240 km/h"], correct: 0,
    explanation: "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h.",
  },
  {
    id: "mt-b-02", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "easy",
    stem: "A man walks at 5 km/h for 3 hours. The distance covered is ____",
    options: ["15 km", "8 km", "10 km", "20 km"], correct: 0,
    explanation: "Distance = Speed × Time = 5 × 3 = 15 km.",
  },
  {
    id: "mt-b-03", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "easy",
    stem: "At 60 km/h, the time to cover 180 km is ____",
    options: ["3 hours", "2 hours", "4 hours", "2.5 hours"], correct: 0,
    explanation: "Time = Distance ÷ Speed = 180 ÷ 60 = 3 hours.",
  },
  {
    id: "mt-b-04", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "easy",
    stem: "Convert 72 km/h into metres per second.",
    options: ["20 m/s", "72 m/s", "25 m/s", "18 m/s"], correct: 0,
    explanation: "Multiply by 5/18: 72 × 5/18 = 20 m/s.",
  },
  {
    id: "mt-b-05", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "easy",
    stem: "Convert 10 m/s into km/h.",
    options: ["36 km/h", "10 km/h", "100 km/h", "18 km/h"], correct: 0,
    explanation: "Multiply by 18/5: 10 × 18/5 = 36 km/h.",
  },
  {
    id: "mt-b-06", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A cyclist covers 90 km in 2.5 hours. His speed is ____",
    options: ["36 km/h", "45 km/h", "30 km/h", "40 km/h"], correct: 0,
    explanation: "Speed = 90 ÷ 2.5 = 36 km/h.",
  },
  {
    id: "mt-b-07", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train runs at 90 km/h. In metres per second this is ____",
    options: ["25 m/s", "90 m/s", "20 m/s", "30 m/s"], correct: 0,
    explanation: "90 × 5/18 = 25 m/s.",
  },
  {
    id: "mt-b-08", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "How far will a car travelling at 50 km/h go in 90 minutes?",
    options: ["75 km", "50 km", "45 km", "100 km"], correct: 0,
    explanation: "90 minutes = 1.5 hours. Distance = 50 × 1.5 = 75 km.",
  },
  {
    id: "mt-b-09", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A bus covers 240 km at 60 km/h. The time taken is ____",
    options: ["4 hours", "3 hours", "5 hours", "6 hours"], correct: 0,
    explanation: "Time = 240 ÷ 60 = 4 hours.",
  },
  {
    id: "mt-b-10", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If a man covers 100 metres in 20 seconds, his speed is ____",
    options: ["5 m/s", "20 m/s", "2 m/s", "10 m/s"], correct: 0,
    explanation: "Speed = 100 ÷ 20 = 5 m/s.",
  },
  {
    id: "mt-b-11", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A car goes 300 km in 5 hours. Its average speed is ____",
    options: ["60 km/h", "50 km/h", "75 km/h", "65 km/h"], correct: 0,
    explanation: "Average speed = Total distance ÷ Total time = 300 ÷ 5 = 60 km/h.",
  },
  {
    id: "mt-b-12", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Convert 54 km/h into m/s.",
    options: ["15 m/s", "54 m/s", "20 m/s", "10 m/s"], correct: 0,
    explanation: "54 × 5/18 = 15 m/s.",
  },
  {
    id: "mt-b-13", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A person walks 6 km in 1 hour 30 minutes. His speed is ____",
    options: ["4 km/h", "6 km/h", "3 km/h", "9 km/h"], correct: 0,
    explanation: "1 hour 30 min = 1.5 hours. Speed = 6 ÷ 1.5 = 4 km/h.",
  },
  {
    id: "mt-b-14", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A scooter travels at 40 km/h. The distance covered in 45 minutes is ____",
    options: ["30 km", "40 km", "45 km", "20 km"], correct: 0,
    explanation: "45 minutes = 3/4 hour. Distance = 40 × 3/4 = 30 km.",
  },
  {
    id: "mt-b-15", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If speed is doubled, the time to cover the same distance becomes ____",
    options: ["half", "double", "the same", "one-fourth"], correct: 0,
    explanation: "Time is inversely proportional to speed (for a fixed distance). If speed doubles, time is halved.",
  },
  {
    id: "mt-b-16", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A runner completes 400 m in 50 seconds. His speed in m/s is ____",
    options: ["8 m/s", "4 m/s", "10 m/s", "5 m/s"], correct: 0,
    explanation: "Speed = 400 ÷ 50 = 8 m/s.",
  },
  {
    id: "mt-b-17", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train covers 60 km in 45 minutes. Its speed is ____",
    options: ["80 km/h", "60 km/h", "75 km/h", "45 km/h"], correct: 0,
    explanation: "45 minutes = 3/4 hour. Speed = 60 ÷ (3/4) = 60 × 4/3 = 80 km/h.",
  },
  {
    id: "mt-b-18", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Two cars start from the same point in the same direction at 40 km/h and 60 km/h. After 2 hours, the distance between them is ____",
    options: ["40 km", "20 km", "100 km", "200 km"], correct: 0,
    explanation: "Relative speed (same direction) = 60 − 40 = 20 km/h. In 2 hours, gap = 20 × 2 = 40 km.",
  },
  {
    id: "mt-b-19", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A car covers a distance in 4 hours at 45 km/h. The distance is ____",
    options: ["180 km", "160 km", "200 km", "90 km"], correct: 0,
    explanation: "Distance = 45 × 4 = 180 km.",
  },
  {
    id: "mt-b-20", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Convert 5/18 m/s into km/h.",
    options: ["1 km/h", "5 km/h", "18 km/h", "0.5 km/h"], correct: 0,
    explanation: "(5/18) × (18/5) = 1 km/h. (Indeed 1 km/h = 5/18 m/s.)",
  },

  // ==================================================== Trains / Boats, BEGINNER
  {
    id: "mt-b-21", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A 120 m long train running at 36 km/h crosses a pole in ____",
    options: ["12 seconds", "10 seconds", "15 seconds", "20 seconds"], correct: 0,
    explanation: "36 km/h = 10 m/s. To cross a pole the train covers its own length: time = 120 ÷ 10 = 12 s.",
  },
  {
    id: "mt-b-22", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train 150 m long moving at 20 m/s crosses a pole in ____",
    options: ["7.5 seconds", "10 seconds", "15 seconds", "5 seconds"], correct: 0,
    explanation: "Time = length ÷ speed = 150 ÷ 20 = 7.5 seconds.",
  },
  {
    id: "mt-b-23", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train 100 m long crosses a 100 m long bridge at 10 m/s. The time taken is ____",
    options: ["20 seconds", "10 seconds", "15 seconds", "25 seconds"], correct: 0,
    explanation: "To cross a bridge, total distance = train + bridge = 100 + 100 = 200 m. Time = 200 ÷ 10 = 20 s.",
  },
  {
    id: "mt-b-24", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A boat's speed in still water is 10 km/h and the stream flows at 2 km/h. The downstream speed is ____",
    options: ["12 km/h", "8 km/h", "5 km/h", "20 km/h"], correct: 0,
    explanation: "Downstream speed = boat speed + stream speed = 10 + 2 = 12 km/h.",
  },
  {
    id: "mt-b-25", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A boat's speed in still water is 10 km/h and the stream flows at 2 km/h. The upstream speed is ____",
    options: ["8 km/h", "12 km/h", "5 km/h", "10 km/h"], correct: 0,
    explanation: "Upstream speed = boat speed − stream speed = 10 − 2 = 8 km/h.",
  },
  {
    id: "mt-b-26", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train 200 m long crosses a pole in 10 seconds. Its speed is ____",
    options: ["20 m/s", "10 m/s", "200 m/s", "2 m/s"], correct: 0,
    explanation: "Speed = length ÷ time = 200 ÷ 10 = 20 m/s.",
  },
  {
    id: "mt-b-27", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "The downstream and upstream speeds of a boat are 15 km/h and 9 km/h. The speed of the stream is ____",
    options: ["3 km/h", "6 km/h", "12 km/h", "24 km/h"], correct: 0,
    explanation: "Stream speed = (downstream − upstream) ÷ 2 = (15 − 9) ÷ 2 = 3 km/h.",
  },
  {
    id: "mt-b-28", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "The downstream and upstream speeds of a boat are 15 km/h and 9 km/h. The speed in still water is ____",
    options: ["12 km/h", "6 km/h", "3 km/h", "24 km/h"], correct: 0,
    explanation: "Speed in still water = (downstream + upstream) ÷ 2 = (15 + 9) ÷ 2 = 12 km/h.",
  },
  {
    id: "mt-b-29", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train 180 m long crosses a platform 120 m long in 15 seconds. Its speed is ____",
    options: ["20 m/s", "12 m/s", "18 m/s", "15 m/s"], correct: 0,
    explanation: "Total distance = 180 + 120 = 300 m. Speed = 300 ÷ 15 = 20 m/s.",
  },
  {
    id: "mt-b-30", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A train travelling at 20 m/s takes 30 seconds to cross a platform. The total distance covered is ____",
    options: ["600 m", "500 m", "300 m", "450 m"], correct: 0,
    explanation: "Distance = speed × time = 20 × 30 = 600 m (this equals train length + platform length).",
  },
  {
    id: "mt-b-31", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A boat covers 24 km downstream at 12 km/h. The time taken is ____",
    options: ["2 hours", "3 hours", "1 hour", "4 hours"], correct: 0,
    explanation: "Time = distance ÷ speed = 24 ÷ 12 = 2 hours.",
  },
  {
    id: "mt-b-32", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Two trains move towards each other at 30 km/h and 20 km/h. Their relative speed is ____",
    options: ["50 km/h", "10 km/h", "600 km/h", "25 km/h"], correct: 0,
    explanation: "When moving towards each other (opposite directions), relative speed = sum = 30 + 20 = 50 km/h.",
  },

  // ==================================================== Time & Work, BEGINNER
  {
    id: "mt-b-33", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If A can finish a work in 10 days, his 1 day's work is ____",
    options: ["1/10", "10", "1/5", "1/20"], correct: 0,
    explanation: "If the whole work takes 10 days, then in 1 day A does 1/10 of the work.",
  },
  {
    id: "mt-b-34", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A does a work in 6 days and B in 12 days. Together they finish it in ____",
    options: ["4 days", "9 days", "6 days", "18 days"], correct: 0,
    explanation: "1 day's work together = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. So they finish in 4 days.",
  },
  {
    id: "mt-b-35", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A and B together do a work in 8 days; A alone in 12 days. B alone will take ____",
    options: ["24 days", "20 days", "16 days", "4 days"], correct: 0,
    explanation: "B's 1 day = (1/8) − (1/12) = 3/24 − 2/24 = 1/24. So B alone takes 24 days.",
  },
  {
    id: "mt-b-36", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If 5 men build a wall in 10 days, 10 men (working at the same rate) will build it in ____",
    options: ["5 days", "20 days", "10 days", "2 days"], correct: 0,
    explanation: "Men and days are inversely proportional. Doubling the men halves the days: 10 ÷ 2 = 5 days.",
  },
  {
    id: "mt-b-37", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A can do a work in 20 days. In 5 days, the fraction of work he completes is ____",
    options: ["1/4", "1/5", "1/2", "5"], correct: 0,
    explanation: "In 1 day A does 1/20; in 5 days he does 5 × 1/20 = 5/20 = 1/4 of the work.",
  },
  {
    id: "mt-b-38", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A does twice as much work as B. If B alone takes 12 days, A alone takes ____",
    options: ["6 days", "24 days", "12 days", "8 days"], correct: 0,
    explanation: "If A works twice as fast, he takes half the time: 12 ÷ 2 = 6 days.",
  },
  {
    id: "mt-b-39", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A and B can do a work in 10 and 15 days respectively. Together they will finish it in ____",
    options: ["6 days", "12 days", "5 days", "25 days"], correct: 0,
    explanation: "Together's 1 day = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. So 6 days.",
  },
  {
    id: "mt-b-40", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If 8 workers finish a task in 6 days, how many workers are needed to finish it in 4 days?",
    options: ["12", "10", "16", "6"], correct: 0,
    explanation: "Total work = 8 × 6 = 48 worker-days. Workers needed in 4 days = 48 ÷ 4 = 12.",
  },
  {
    id: "mt-b-41", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A can complete a job in 15 days. His work rate per day is ____",
    options: ["1/15", "15", "1/30", "2/15"], correct: 0,
    explanation: "Work rate = 1 job ÷ 15 days = 1/15 per day.",
  },
  {
    id: "mt-b-42", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A and B together finish a work in 12 days; B alone in 20 days. A alone takes ____",
    options: ["30 days", "24 days", "32 days", "8 days"], correct: 0,
    explanation: "A's 1 day = (1/12) − (1/20) = 5/60 − 3/60 = 2/60 = 1/30. So A alone takes 30 days.",
  },
  {
    id: "mt-b-43", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Three men do a work in 8 days. How long will 6 men take?",
    options: ["4 days", "16 days", "8 days", "2 days"], correct: 0,
    explanation: "Total work = 3 × 8 = 24 man-days; 6 men take 24 ÷ 6 = 4 days (inverse proportion).",
  },
  {
    id: "mt-b-44", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "If A does 1/4 of a work in 5 days, the whole work takes him ____",
    options: ["20 days", "25 days", "15 days", "10 days"], correct: 0,
    explanation: "If 1/4 of the work takes 5 days, the whole work takes 5 × 4 = 20 days.",
  },

  // ==================================================== Pipes & Cisterns, BEGINNER
  {
    id: "mt-b-45", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A pipe fills a tank in 6 hours. In 1 hour it fills ____",
    options: ["1/6 of the tank", "6 tanks", "1/3 of the tank", "1/12 of the tank"], correct: 0,
    explanation: "If the tank fills in 6 hours, in 1 hour the pipe fills 1/6 of the tank.",
  },
  {
    id: "mt-b-46", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Two pipes fill a tank in 4 hours and 6 hours. Together they fill it in ____",
    options: ["2.4 hours", "5 hours", "10 hours", "2 hours"], correct: 0,
    explanation: "Together's 1 hour = 1/4 + 1/6 = 3/12 + 2/12 = 5/12. Time = 12/5 = 2.4 hours.",
  },
  {
    id: "mt-b-47", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A pipe fills a tank in 10 hours; a drain empties it in 15 hours. With both open, the tank fills in ____",
    options: ["30 hours", "6 hours", "25 hours", "5 hours"], correct: 0,
    explanation: "Net 1 hour = 1/10 − 1/15 = 3/30 − 2/30 = 1/30. So the tank fills in 30 hours.",
  },
  {
    id: "mt-b-48", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Two pipes fill a tank in 12 and 24 hours. Together they take ____",
    options: ["8 hours", "36 hours", "18 hours", "6 hours"], correct: 0,
    explanation: "Together's 1 hour = 1/12 + 1/24 = 2/24 + 1/24 = 3/24 = 1/8. So 8 hours.",
  },
  {
    id: "mt-b-49", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "A pipe can fill a tank in 5 hours. In 2 hours, the part of the tank filled is ____",
    options: ["2/5", "1/5", "2/10", "5/2"], correct: 0,
    explanation: "In 1 hour it fills 1/5; in 2 hours it fills 2 × 1/5 = 2/5 of the tank.",
  },
  {
    id: "mt-b-50", section: "numerical", topic: "Time & motion", level: "beginner", difficulty: "medium",
    stem: "Two taps fill a tank in 20 and 30 minutes. Together they fill it in ____",
    options: ["12 minutes", "10 minutes", "50 minutes", "25 minutes"], correct: 0,
    explanation: "Together's 1 minute = 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12. So 12 minutes.",
  },

  // ==================================================== Speed / Average, PROFICIENT
  {
    id: "mt-p-01", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A man covers half a journey at 40 km/h and the other half at 60 km/h. His average speed for the whole journey is ____",
    options: ["48 km/h", "50 km/h", "45 km/h", "52 km/h"], correct: 0,
    explanation: "For equal distances, average speed = 2ab/(a+b) = (2 × 40 × 60)/(40 + 60) = 4800/100 = 48 km/h (not the simple mean 50).",
  },
  {
    id: "mt-p-02", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A car goes from A to B at 60 km/h and returns at 40 km/h. The average speed for the round trip is ____",
    options: ["48 km/h", "50 km/h", "45 km/h", "52 km/h"], correct: 0,
    explanation: "Equal distances → average = 2 × 60 × 40 / (60 + 40) = 4800/100 = 48 km/h.",
  },
  {
    id: "mt-p-03", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A person walks to a place at 4 km/h and returns at 6 km/h, taking a total of 5 hours. The distance to the place is ____",
    options: ["12 km", "10 km", "15 km", "8 km"], correct: 0,
    explanation: "Let distance = d. d/4 + d/6 = 5 → (3d + 2d)/12 = 5 → 5d/12 = 5 → d = 12 km.",
  },
  {
    id: "mt-p-04", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train increases its speed from 40 km/h to 50 km/h and saves 30 minutes on a journey. The distance is ____",
    options: ["100 km", "120 km", "80 km", "150 km"], correct: 0,
    explanation: "Let distance = d. d/40 − d/50 = 1/2 → (5d − 4d)/200 = 1/2 → d/200 = 1/2 → d = 100 km.",
  },
  {
    id: "mt-p-05", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two men start walking towards each other from points 30 km apart at 4 km/h and 6 km/h. They meet after ____",
    options: ["3 hours", "5 hours", "2 hours", "6 hours"], correct: 0,
    explanation: "Relative speed = 4 + 6 = 10 km/h. Time to meet = 30 ÷ 10 = 3 hours.",
  },
  {
    id: "mt-p-06", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A thief running at 8 km/h is chased by a policeman at 10 km/h, starting 1 km behind. The policeman catches him after ____",
    options: ["30 minutes", "1 hour", "20 minutes", "45 minutes"], correct: 0,
    explanation: "Relative speed = 10 − 8 = 2 km/h; gap = 1 km. Time = 1 ÷ 2 = 0.5 hour = 30 minutes.",
  },
  {
    id: "mt-p-07", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A man covers a distance of 600 m in 5 minutes. His speed in km/h is ____",
    options: ["7.2 km/h", "6 km/h", "10 km/h", "12 km/h"], correct: 0,
    explanation: "Speed = 600 m in 5 min = 120 m/min = 2 m/s. In km/h: 2 × 18/5 = 7.2 km/h.",
  },
  {
    id: "mt-p-08", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "If a car covers 60% of a journey at 30 km/h and the rest at 60 km/h, and the total distance is 100 km, the total time is ____",
    options: ["2⅔ hours (2 h 40 min)", "3 hours", "2.5 hours", "2 hours"], correct: 0,
    explanation: "60 km at 30 km/h = 2 h; 40 km at 60 km/h = 2/3 h. Total = 2 + 2/3 = 2⅔ hours (2 h 40 min).",
  },

  // ==================================================== Trains / Boats, PROFICIENT
  {
    id: "mt-p-09", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two trains 100 m and 150 m long move in opposite directions at 30 m/s and 20 m/s. The time to cross each other is ____",
    options: ["5 seconds", "10 seconds", "25 seconds", "12.5 seconds"], correct: 0,
    explanation: "Relative speed (opposite) = 30 + 20 = 50 m/s. Total length = 100 + 150 = 250 m. Time = 250 ÷ 50 = 5 s.",
  },
  {
    id: "mt-p-10", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two trains 100 m and 150 m long move in the same direction at 30 m/s and 20 m/s. The faster train crosses the slower in ____",
    options: ["25 seconds", "5 seconds", "10 seconds", "50 seconds"], correct: 0,
    explanation: "Relative speed (same direction) = 30 − 20 = 10 m/s. Total length = 250 m. Time = 250 ÷ 10 = 25 s.",
  },
  {
    id: "mt-p-11", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train 120 m long, moving at 54 km/h, crosses a platform 180 m long in ____",
    options: ["20 seconds", "15 seconds", "18 seconds", "24 seconds"], correct: 0,
    explanation: "54 km/h = 15 m/s. Total distance = 120 + 180 = 300 m. Time = 300 ÷ 15 = 20 s.",
  },
  {
    id: "mt-p-12", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train running at 36 km/h crosses a man standing on a platform in 10 seconds. The length of the train is ____",
    options: ["100 m", "360 m", "60 m", "120 m"], correct: 0,
    explanation: "36 km/h = 10 m/s. Length = speed × time = 10 × 10 = 100 m.",
  },
  {
    id: "mt-p-13", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A boat goes 12 km downstream in 1 hour and returns (12 km upstream) in 2 hours. The speed of the boat in still water is ____",
    options: ["9 km/h", "6 km/h", "3 km/h", "12 km/h"], correct: 0,
    explanation: "Downstream speed = 12 km/h, upstream speed = 6 km/h. Still-water speed = (12 + 6)/2 = 9 km/h.",
  },
  {
    id: "mt-p-14", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "In the previous case (downstream 12 km/h, upstream 6 km/h), the speed of the stream is ____",
    options: ["3 km/h", "6 km/h", "9 km/h", "1.5 km/h"], correct: 0,
    explanation: "Stream speed = (downstream − upstream)/2 = (12 − 6)/2 = 3 km/h.",
  },
  {
    id: "mt-p-15", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A man rows to a place 48 km away and back. His speed in still water is 8 km/h and the stream is 4 km/h. The total time is ____",
    options: ["16 hours", "12 hours", "14 hours", "18 hours"], correct: 0,
    explanation: "Downstream 12 km/h → 48/12 = 4 h; upstream 4 km/h → 48/4 = 12 h. Total = 4 + 12 = 16 hours.",
  },
  {
    id: "mt-p-16", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A boat covers 16 km upstream in 4 hours. If the stream flows at 1 km/h, the boat's speed in still water is ____",
    options: ["5 km/h", "4 km/h", "3 km/h", "6 km/h"], correct: 0,
    explanation: "Upstream speed = 16/4 = 4 km/h = (boat − stream) = boat − 1 → boat = 5 km/h.",
  },
  {
    id: "mt-p-17", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train 150 m long passes a man running at 6 km/h in the opposite direction in 6 seconds. The train's speed is ____",
    options: ["84 km/h", "90 km/h", "78 km/h", "96 km/h"], correct: 0,
    explanation: "Relative speed = 150 m ÷ 6 s = 25 m/s = 90 km/h. Since the man runs opposite at 6 km/h, train speed = 90 − 6 = 84 km/h.",
  },
  {
    id: "mt-p-18", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A boat takes twice as long to go upstream as downstream. If the stream flows at 3 km/h, the boat's speed in still water is ____",
    options: ["9 km/h", "6 km/h", "12 km/h", "3 km/h"], correct: 0,
    explanation: "Upstream time = 2 × downstream time → downstream speed = 2 × upstream speed. So (b + 3) = 2(b − 3) → b + 3 = 2b − 6 → b = 9 km/h.",
  },
  {
    id: "mt-p-19", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two trains of equal length 120 m are running on parallel tracks in the same direction at 42 km/h and 30 km/h. The faster crosses the slower in ____",
    options: ["72 seconds", "60 seconds", "48 seconds", "36 seconds"], correct: 0,
    explanation: "Relative speed = 12 km/h = 12 × 5/18 = 10/3 m/s. Total length = 240 m. Time = 240 ÷ (10/3) = 72 s.",
  },
  {
    id: "mt-p-20", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A 200 m long train crosses a bridge in 30 seconds at 72 km/h. The length of the bridge is ____",
    options: ["400 m", "600 m", "200 m", "300 m"], correct: 0,
    explanation: "72 km/h = 20 m/s. Total distance = 20 × 30 = 600 m. Bridge = 600 − 200 (train) = 400 m.",
  },
  {
    id: "mt-p-21", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A boat's downstream speed is 15 km/h and its still-water speed is 12 km/h. Its upstream speed is ____",
    options: ["9 km/h", "6 km/h", "3 km/h", "27 km/h"], correct: 0,
    explanation: "Stream = downstream − still water = 15 − 12 = 3 km/h. Upstream = still water − stream = 12 − 3 = 9 km/h.",
  },
  {
    id: "mt-p-22", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train crosses two platforms of lengths 100 m and 300 m in 10 s and 18 s respectively. The train's speed is ____",
    options: ["25 m/s", "20 m/s", "30 m/s", "15 m/s"], correct: 0,
    explanation: "Let train length L, speed v. (L + 100)/10 = v and (L + 300)/18 = v → (L+100)×18 = (L+300)×10 → 18L + 1800 = 10L + 3000 → 8L = 1200 → L = 150. v = (150+100)/10 = 25 m/s.",
  },

  // ==================================================== Time & Work, PROFICIENT
  {
    id: "mt-p-23", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A, B and C can do a work in 12, 15 and 20 days respectively. Working together, they finish it in ____",
    options: ["5 days", "6 days", "4 days", "7 days"], correct: 0,
    explanation: "1 day's work = 1/12 + 1/15 + 1/20 = 5/60 + 4/60 + 3/60 = 12/60 = 1/5. So 5 days.",
  },
  {
    id: "mt-p-24", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A is twice as efficient as B. Together they finish a work in 12 days. A alone would take ____",
    options: ["18 days", "24 days", "36 days", "16 days"], correct: 0,
    explanation: "Let B's rate = 1 unit/day, A's = 2 units/day; combined 3 units/day. Total work = 12 × 3 = 36 units. A alone = 36 ÷ 2 = 18 days.",
  },
  {
    id: "mt-p-25", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A can do a work in 10 days and B in 15 days. They work together for 4 days; then A leaves. B finishes the rest in ____",
    options: ["5 days", "6 days", "4 days", "3 days"], correct: 0,
    explanation: "Together's 1 day = 1/10 + 1/15 = 1/6. In 4 days they do 4/6 = 2/3. Remaining 1/3 by B (rate 1/15): time = (1/3) ÷ (1/15) = 5 days.",
  },
  {
    id: "mt-p-26", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "12 men can build a wall in 10 days. How many men are needed to build it in 8 days?",
    options: ["15", "16", "14", "10"], correct: 0,
    explanation: "Total work = 12 × 10 = 120 man-days. Men needed in 8 days = 120 ÷ 8 = 15.",
  },
  {
    id: "mt-p-27", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A and B can do a work in 20 days, B and C in 30 days, and A and C in 24 days. Working all together, they finish it in ____",
    options: ["16 days", "18 days", "15 days", "20 days"], correct: 0,
    explanation: "Adding the three: 2(A+B+C) = 1/20 + 1/30 + 1/24 = 6/120 + 4/120 + 5/120 = 15/120 = 1/8. So A+B+C = 1/16 → 16 days.",
  },
  {
    id: "mt-p-28", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "If 6 men or 12 women can do a work in 10 days, then 6 men and 12 women together will do it in ____",
    options: ["5 days", "8 days", "4 days", "10 days"], correct: 0,
    explanation: "6 men = 1/10 per day; 12 women = 1/10 per day. Together = 1/10 + 1/10 = 2/10 = 1/5. So 5 days.",
  },
  {
    id: "mt-p-29", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A can finish a job in 18 days and B in 9 days. B worked for 3 days, then left. A finishes the remaining work in ____",
    options: ["12 days", "9 days", "10 days", "15 days"], correct: 0,
    explanation: "In 3 days B does 3 × (1/9) = 1/3. Remaining = 2/3, done by A at 1/18 per day: (2/3) ÷ (1/18) = 12 days.",
  },
  {
    id: "mt-p-30", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A does a work in 15 days, B in 20 days. They work together for 4 days. The fraction of work left is ____",
    options: ["8/15", "7/15", "1/3", "2/5"], correct: 0,
    explanation: "Together's 1 day = 1/15 + 1/20 = 4/60 + 3/60 = 7/60. In 4 days = 28/60 = 7/15 done. Work left = 1 − 7/15 = 8/15.",
  },
  {
    id: "mt-p-31", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "If 15 workers finish a task in 12 days working 8 hours a day, how many days will 9 workers take working 10 hours a day?",
    options: ["16 days", "18 days", "20 days", "12 days"], correct: 0,
    explanation: "Total work = 15 × 12 × 8 = 1440 worker-hours. Days = 1440 ÷ (9 × 10) = 1440 ÷ 90 = 16 days.",
  },
  {
    id: "mt-p-32", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A is 25% more efficient than B. If B alone takes 25 days, A alone takes ____",
    options: ["20 days", "31.25 days", "18 days", "30 days"], correct: 0,
    explanation: "A's efficiency = 125% of B. Time is inversely proportional to efficiency: A's time = 25 × (100/125) = 20 days.",
  },
  {
    id: "mt-p-33", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A and B together do a work in 8 days, B and C in 12 days, A and C in 8 days. A alone can do it in ____",
    options: ["12 days", "24 days", "16 days", "10 days"], correct: 0,
    explanation: "Sum: 2(A+B+C) = 1/8 + 1/12 + 1/8 = 3/24 + 2/24 + 3/24 = 8/24 = 1/3 → A+B+C = 1/6. A = (A+B+C) − (B+C) = 1/6 − 1/12 = 1/12 → 12 days.",
  },
  {
    id: "mt-p-34", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A can do a piece of work in 12 days, working 6 hours a day. In how many days will he finish it working 8 hours a day?",
    options: ["9 days", "12 days", "16 days", "8 days"], correct: 0,
    explanation: "Total hours = 12 × 6 = 72. At 8 hours/day: 72 ÷ 8 = 9 days.",
  },
  {
    id: "mt-p-35", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A completes 2/5 of a work in 8 days. The number of days he needs to complete the whole work is ____",
    options: ["20 days", "16 days", "24 days", "18 days"], correct: 0,
    explanation: "If 2/5 of the work takes 8 days, the whole (5/5) takes 8 × (5/2) = 20 days.",
  },
  {
    id: "mt-p-36", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A and B can do a work in 12 days. A alone can do it in 20 days. B alone will take ____",
    options: ["30 days", "24 days", "32 days", "15 days"], correct: 0,
    explanation: "B's 1 day = 1/12 − 1/20 = 5/60 − 3/60 = 2/60 = 1/30. So B alone takes 30 days.",
  },

  // ==================================================== Pipes & Cisterns, PROFICIENT
  {
    id: "mt-p-37", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Pipe A fills a tank in 6 hours; pipe B empties it in 8 hours. If both are open, the tank fills in ____",
    options: ["24 hours", "14 hours", "48 hours", "3.4 hours"], correct: 0,
    explanation: "Net 1 hour = 1/6 − 1/8 = 4/24 − 3/24 = 1/24. So the tank fills in 24 hours.",
  },
  {
    id: "mt-p-38", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two pipes A and B fill a tank in 12 and 16 minutes. If both are opened together, the tank fills in ____",
    options: ["48/7 minutes (≈ 6.86 min)", "7 minutes", "14 minutes", "28 minutes"], correct: 0,
    explanation: "Together's 1 minute = 1/12 + 1/16 = 4/48 + 3/48 = 7/48. Time = 48/7 ≈ 6.86 minutes.",
  },
  {
    id: "mt-p-39", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A tank has a leak that empties a full tank in 12 hours. An inlet pipe fills it in 8 hours. If both are open, the tank fills in ____",
    options: ["24 hours", "20 hours", "16 hours", "4.8 hours"], correct: 0,
    explanation: "Net 1 hour = 1/8 − 1/12 = 3/24 − 2/24 = 1/24. So the tank fills in 24 hours.",
  },
  {
    id: "mt-p-40", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Three pipes fill a tank in 10, 15 and 30 hours. Together they fill it in ____",
    options: ["5 hours", "6 hours", "8 hours", "10 hours"], correct: 0,
    explanation: "Together's 1 hour = 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30 = 1/5. So 5 hours.",
  },
  {
    id: "mt-p-41", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A pipe fills a tank in 15 hours. Due to a leak, it takes 20 hours. The leak alone would empty the full tank in ____",
    options: ["60 hours", "35 hours", "5 hours", "45 hours"], correct: 0,
    explanation: "Leak's rate = 1/15 − 1/20 = 4/60 − 3/60 = 1/60 per hour (emptying). So the leak alone empties in 60 hours.",
  },
  {
    id: "mt-p-42", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two pipes fill a tank in 20 and 30 minutes; a third empties it in 40 minutes. With all open, the tank fills in ____",
    options: ["120/7 minutes (≈ 17.1 min)", "15 minutes", "24 minutes", "10 minutes"], correct: 0,
    explanation: "Net 1 min = 1/20 + 1/30 − 1/40. LCM 120: 6/120 + 4/120 − 3/120 = 7/120. Time = 120/7 ≈ 17.1 min.",
  },

  // ==================================================== Mixed motion, PROFICIENT
  {
    id: "mt-p-43", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train travelling at 60 km/h crosses a pole in 9 seconds. Its length is ____",
    options: ["150 m", "540 m", "100 m", "120 m"], correct: 0,
    explanation: "60 km/h = 60 × 5/18 = 50/3 m/s. Length = (50/3) × 9 = 150 m.",
  },
  {
    id: "mt-p-44", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A man can row 6 km/h in still water. If it takes him twice as long to row up as down the river, the speed of the stream is ____",
    options: ["2 km/h", "3 km/h", "1 km/h", "4 km/h"], correct: 0,
    explanation: "Downstream speed = 2 × upstream speed → (6 + s) = 2(6 − s) → 6 + s = 12 − 2s → 3s = 6 → s = 2 km/h.",
  },
  {
    id: "mt-p-45", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A car covers a certain distance at 40 km/h and returns at 60 km/h in a total of 5 hours. The one-way distance is ____",
    options: ["120 km", "100 km", "150 km", "90 km"], correct: 0,
    explanation: "d/40 + d/60 = 5 → (3d + 2d)/120 = 5 → 5d = 600 → d = 120 km.",
  },
  {
    id: "mt-p-46", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Walking at 3/4 of his usual speed, a man reaches his office 20 minutes late. His usual time is ____",
    options: ["60 minutes", "45 minutes", "30 minutes", "80 minutes"], correct: 0,
    explanation: "At 3/4 speed, time becomes 4/3 of usual. The extra 1/3 of usual time = 20 min → usual time = 60 min.",
  },
  {
    id: "mt-p-47", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "Two trains start at the same time from stations 300 km apart and move towards each other at 40 km/h and 60 km/h. They meet after ____",
    options: ["3 hours", "5 hours", "2.5 hours", "4 hours"], correct: 0,
    explanation: "Relative speed = 40 + 60 = 100 km/h; distance = 300 km. Time = 300 ÷ 100 = 3 hours.",
  },
  {
    id: "mt-p-48", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A can complete a work in 20 days and B in 30 days. They start together, but A leaves 5 days before completion. The work is finished in ____",
    options: ["15 days", "12 days", "18 days", "20 days"], correct: 0,
    explanation: "Let total time = t. A works (t − 5) days, B works t days: (t − 5)/20 + t/30 = 1. LCM 60: 3(t − 5) + 2t = 60 → 5t − 15 = 60 → 5t = 75 → t = 15 days.",
  },
  {
    id: "mt-p-49", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A boat covers 30 km downstream and 30 km upstream in 8 hours. If the stream is 2 km/h and the boat speed in still water is 8 km/h, is this consistent?",
    options: ["Yes, 3 h down + 5 h up = 8 h", "No, it takes 6 h", "No, it takes 10 h", "Cannot be determined"], correct: 0,
    explanation: "Downstream 10 km/h → 30/10 = 3 h; upstream 6 km/h → 30/6 = 5 h. Total = 8 h. So it is consistent.",
  },
  {
    id: "mt-p-50", section: "numerical", topic: "Time & motion", level: "proficient", difficulty: "hard",
    stem: "A train 300 m long crosses a platform 500 m long in 40 seconds. Its speed is ____",
    options: ["20 m/s (72 km/h)", "15 m/s", "25 m/s", "10 m/s"], correct: 0,
    explanation: "Total distance = 300 + 500 = 800 m. Speed = 800 ÷ 40 = 20 m/s = 72 km/h.",
  },
];
