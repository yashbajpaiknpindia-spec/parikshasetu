/**
 * Mathematics, Geometry & Mensuration (topic: "Geometry & mensuration").
 *
 * section: "numerical". Shared across both UPESSC exam levels.
 *   • beginner, angles, triangles, areas/perimeters, volumes, Pythagoras.
 *   • proficient, circle theorems, mensuration of composite solids, trigonometry basics.
 *
 * Uses π = 22/7 where needed. Every answer carries the working. Original items.
 */
import type { Question } from "./questions";

export const maGeometryBank: Question[] = [
  // ==================================================== Angles & Triangles, BEGINNER
  {
    id: "mg-b-01", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The sum of the angles of a triangle is ____",
    options: ["180°", "90°", "360°", "270°"], correct: 0,
    explanation: "The three interior angles of any triangle always add up to 180°.",
  },
  {
    id: "mg-b-02", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The sum of the angles of a quadrilateral is ____",
    options: ["360°", "180°", "270°", "540°"], correct: 0,
    explanation: "A quadrilateral can be divided into two triangles, so its angles add up to 2 × 180° = 360°.",
  },
  {
    id: "mg-b-03", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "A right angle measures ____",
    options: ["90°", "180°", "45°", "60°"], correct: 0,
    explanation: "A right angle is exactly 90°. A straight angle is 180°.",
  },
  {
    id: "mg-b-04", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Two angles are complementary if their sum is ____",
    options: ["90°", "180°", "360°", "45°"], correct: 0,
    explanation: "Complementary angles add up to 90°. (Supplementary angles add up to 180°.)",
  },
  {
    id: "mg-b-05", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Two angles are supplementary if their sum is ____",
    options: ["180°", "90°", "360°", "270°"], correct: 0,
    explanation: "Supplementary angles add up to 180°.",
  },
  {
    id: "mg-b-06", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Each angle of an equilateral triangle is ____",
    options: ["60°", "90°", "45°", "30°"], correct: 0,
    explanation: "An equilateral triangle has three equal angles summing to 180°, so each = 180 ÷ 3 = 60°.",
  },
  {
    id: "mg-b-07", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In a right-angled triangle, the two non-right angles must add up to ____",
    options: ["90°", "180°", "45°", "60°"], correct: 0,
    explanation: "The angles sum to 180°; one is 90°, so the other two together = 180 − 90 = 90°.",
  },
  {
    id: "mg-b-08", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Two angles of a triangle are 50° and 60°. The third angle is ____",
    options: ["70°", "80°", "60°", "90°"], correct: 0,
    explanation: "Third angle = 180 − (50 + 60) = 180 − 110 = 70°.",
  },
  {
    id: "mg-b-09", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The complement of a 30° angle is ____",
    options: ["60°", "150°", "70°", "90°"], correct: 0,
    explanation: "Complement = 90 − 30 = 60°.",
  },
  {
    id: "mg-b-10", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The supplement of a 110° angle is ____",
    options: ["70°", "80°", "90°", "250°"], correct: 0,
    explanation: "Supplement = 180 − 110 = 70°.",
  },
  {
    id: "mg-b-11", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A triangle with all sides equal is called ____",
    options: ["equilateral", "isosceles", "scalene", "right-angled"], correct: 0,
    explanation: "A triangle with all three sides equal is equilateral. Two equal sides → isosceles; all different → scalene.",
  },
  {
    id: "mg-b-12", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "By the Pythagoras theorem, if the two legs of a right triangle are 3 and 4, the hypotenuse is ____",
    options: ["5", "7", "6", "12"], correct: 0,
    explanation: "Hypotenuse² = 3² + 4² = 9 + 16 = 25, so hypotenuse = √25 = 5.",
  },
  {
    id: "mg-b-13", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If the legs of a right triangle are 6 and 8, the hypotenuse is ____",
    options: ["10", "14", "12", "48"], correct: 0,
    explanation: "Hypotenuse² = 6² + 8² = 36 + 64 = 100, so hypotenuse = 10.",
  },
  {
    id: "mg-b-14", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The exterior angles of any polygon add up to ____",
    options: ["360°", "180°", "540°", "720°"], correct: 0,
    explanation: "The sum of the exterior angles of any convex polygon (one at each vertex) is always 360°.",
  },

  // ==================================================== Perimeter & Area, BEGINNER
  {
    id: "mg-b-15", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The area of a rectangle 5 cm long and 4 cm wide is ____",
    options: ["20 cm²", "9 cm²", "18 cm²", "40 cm²"], correct: 0,
    explanation: "Area of a rectangle = length × breadth = 5 × 4 = 20 cm².",
  },
  {
    id: "mg-b-16", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The area of a square of side 6 cm is ____",
    options: ["36 cm²", "24 cm²", "12 cm²", "18 cm²"], correct: 0,
    explanation: "Area of a square = side² = 6² = 36 cm².",
  },
  {
    id: "mg-b-17", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The perimeter of a rectangle 5 cm by 3 cm is ____",
    options: ["16 cm", "15 cm", "8 cm", "30 cm"], correct: 0,
    explanation: "Perimeter of a rectangle = 2 × (length + breadth) = 2 × (5 + 3) = 16 cm.",
  },
  {
    id: "mg-b-18", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The perimeter of a square of side 7 cm is ____",
    options: ["28 cm", "49 cm", "14 cm", "21 cm"], correct: 0,
    explanation: "Perimeter of a square = 4 × side = 4 × 7 = 28 cm.",
  },
  {
    id: "mg-b-19", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a triangle with base 8 cm and height 5 cm is ____",
    options: ["20 cm²", "40 cm²", "13 cm²", "26 cm²"], correct: 0,
    explanation: "Area of a triangle = ½ × base × height = ½ × 8 × 5 = 20 cm².",
  },
  {
    id: "mg-b-20", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a circle of radius 7 cm (π = 22/7) is ____",
    options: ["154 cm²", "44 cm²", "77 cm²", "22 cm²"], correct: 0,
    explanation: "Area = πr² = (22/7) × 7 × 7 = 22 × 7 = 154 cm².",
  },
  {
    id: "mg-b-21", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The circumference of a circle of radius 7 cm (π = 22/7) is ____",
    options: ["44 cm", "154 cm", "22 cm", "88 cm"], correct: 0,
    explanation: "Circumference = 2πr = 2 × (22/7) × 7 = 44 cm.",
  },
  {
    id: "mg-b-22", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The diameter of a circle whose radius is 9 cm is ____",
    options: ["18 cm", "9 cm", "4.5 cm", "81 cm"], correct: 0,
    explanation: "Diameter = 2 × radius = 2 × 9 = 18 cm.",
  },
  {
    id: "mg-b-23", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a parallelogram with base 10 cm and height 6 cm is ____",
    options: ["60 cm²", "30 cm²", "16 cm²", "32 cm²"], correct: 0,
    explanation: "Area of a parallelogram = base × height = 10 × 6 = 60 cm².",
  },
  {
    id: "mg-b-24", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a square whose perimeter is 20 cm is ____",
    options: ["25 cm²", "20 cm²", "100 cm²", "16 cm²"], correct: 0,
    explanation: "Side = perimeter ÷ 4 = 20 ÷ 4 = 5 cm. Area = 5² = 25 cm².",
  },
  {
    id: "mg-b-25", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A rectangle has area 48 cm² and length 8 cm. Its breadth is ____",
    options: ["6 cm", "8 cm", "40 cm", "12 cm"], correct: 0,
    explanation: "Breadth = Area ÷ length = 48 ÷ 8 = 6 cm.",
  },
  {
    id: "mg-b-26", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a right triangle with legs 6 cm and 8 cm is ____",
    options: ["24 cm²", "48 cm²", "14 cm²", "10 cm²"], correct: 0,
    explanation: "The two legs act as base and height: Area = ½ × 6 × 8 = 24 cm².",
  },
  {
    id: "mg-b-27", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The perimeter of an equilateral triangle of side 5 cm is ____",
    options: ["15 cm", "25 cm", "10 cm", "20 cm"], correct: 0,
    explanation: "Perimeter = 3 × side = 3 × 5 = 15 cm.",
  },
  {
    id: "mg-b-28", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If the side of a square is doubled, its area becomes ____",
    options: ["4 times", "2 times", "8 times", "the same"], correct: 0,
    explanation: "Area = side². Doubling the side gives (2s)² = 4s², i.e. 4 times the area.",
  },
  {
    id: "mg-b-29", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The circumference of a circle of diameter 14 cm (π = 22/7) is ____",
    options: ["44 cm", "22 cm", "88 cm", "154 cm"], correct: 0,
    explanation: "Circumference = πd = (22/7) × 14 = 44 cm.",
  },
  {
    id: "mg-b-30", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a circle of diameter 14 cm (π = 22/7) is ____",
    options: ["154 cm²", "44 cm²", "88 cm²", "22 cm²"], correct: 0,
    explanation: "Radius = 14 ÷ 2 = 7 cm. Area = πr² = (22/7) × 49 = 154 cm².",
  },

  // ==================================================== Volume & Surface Area, BEGINNER
  {
    id: "mg-b-31", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The volume of a cube of side 3 cm is ____",
    options: ["27 cm³", "9 cm³", "18 cm³", "54 cm³"], correct: 0,
    explanation: "Volume of a cube = side³ = 3³ = 27 cm³.",
  },
  {
    id: "mg-b-32", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The volume of a cuboid 2 cm × 3 cm × 4 cm is ____",
    options: ["24 cm³", "9 cm³", "12 cm³", "48 cm³"], correct: 0,
    explanation: "Volume of a cuboid = length × breadth × height = 2 × 3 × 4 = 24 cm³.",
  },
  {
    id: "mg-b-33", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The total surface area of a cube of side 2 cm is ____",
    options: ["24 cm²", "8 cm²", "12 cm²", "16 cm²"], correct: 0,
    explanation: "Surface area of a cube = 6 × side² = 6 × 2² = 6 × 4 = 24 cm².",
  },
  {
    id: "mg-b-34", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The volume of a cube is 64 cm³. Its side is ____",
    options: ["4 cm", "8 cm", "16 cm", "6 cm"], correct: 0,
    explanation: "Side = ∛64 = 4 cm (since 4³ = 64).",
  },
  {
    id: "mg-b-35", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The volume of a cylinder of radius 7 cm and height 10 cm (π = 22/7) is ____",
    options: ["1540 cm³", "440 cm³", "154 cm³", "770 cm³"], correct: 0,
    explanation: "Volume = πr²h = (22/7) × 7 × 7 × 10 = 22 × 7 × 10 = 1540 cm³.",
  },
  {
    id: "mg-b-36", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The number of edges in a cube is ____",
    options: ["12", "8", "6", "4"], correct: 0,
    explanation: "A cube has 12 edges, 8 vertices (corners) and 6 faces.",
  },
  {
    id: "mg-b-37", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The number of faces of a cube is ____",
    options: ["6", "8", "12", "4"], correct: 0,
    explanation: "A cube has 6 (square) faces.",
  },
  {
    id: "mg-b-38", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The volume of a cuboid 5 m × 4 m × 3 m is ____",
    options: ["60 m³", "12 m³", "20 m³", "47 m³"], correct: 0,
    explanation: "Volume = 5 × 4 × 3 = 60 m³.",
  },

  // ==================================================== Mixed geometry, BEGINNER
  {
    id: "mg-b-39", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The longest chord of a circle is called the ____",
    options: ["diameter", "radius", "arc", "tangent"], correct: 0,
    explanation: "The diameter is the longest chord of a circle; it passes through the centre and equals twice the radius.",
  },
  {
    id: "mg-b-40", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The angle in a semicircle is ____",
    options: ["90°", "180°", "60°", "45°"], correct: 0,
    explanation: "An angle inscribed in a semicircle (subtended by the diameter) is always a right angle, 90°.",
  },
  {
    id: "mg-b-41", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A polygon with 5 sides is called a ____",
    options: ["pentagon", "hexagon", "octagon", "quadrilateral"], correct: 0,
    explanation: "A 5-sided polygon is a pentagon. (6 → hexagon, 8 → octagon.)",
  },
  {
    id: "mg-b-42", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The sum of the interior angles of a quadrilateral is ____",
    options: ["360°", "180°", "540°", "720°"], correct: 0,
    explanation: "Interior angle sum of a polygon = (n − 2) × 180°. For a quadrilateral (n = 4): (4 − 2) × 180 = 360°.",
  },
  {
    id: "mg-b-43", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a rhombus with diagonals 6 cm and 8 cm is ____",
    options: ["24 cm²", "48 cm²", "14 cm²", "12 cm²"], correct: 0,
    explanation: "Area of a rhombus = ½ × d₁ × d₂ = ½ × 6 × 8 = 24 cm².",
  },
  {
    id: "mg-b-44", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "How many degrees are there in a full circle?",
    options: ["360°", "180°", "90°", "270°"], correct: 0,
    explanation: "A complete revolution/full circle measures 360°.",
  },
  {
    id: "mg-b-45", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The perimeter (circumference) of a semicircle of radius 7 cm, along the curved part only (π = 22/7), is ____",
    options: ["22 cm", "44 cm", "11 cm", "14 cm"], correct: 0,
    explanation: "Curved length of a semicircle = πr = (22/7) × 7 = 22 cm (half of the full circumference 44 cm).",
  },
  {
    id: "mg-b-46", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "If two angles of a triangle are equal to 45° each, the triangle is ____",
    options: ["right-angled isosceles", "equilateral", "obtuse", "scalene"], correct: 0,
    explanation: "Third angle = 180 − (45 + 45) = 90°. With two equal 45° angles and a right angle, it is a right-angled isosceles triangle.",
  },
  {
    id: "mg-b-47", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a triangle with base 10 cm and height 12 cm is ____",
    options: ["60 cm²", "120 cm²", "22 cm²", "30 cm²"], correct: 0,
    explanation: "Area = ½ × base × height = ½ × 10 × 12 = 60 cm².",
  },
  {
    id: "mg-b-48", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Lines in the same plane that never meet are called ____",
    options: ["parallel lines", "perpendicular lines", "intersecting lines", "concurrent lines"], correct: 0,
    explanation: "Parallel lines lie in the same plane and never meet, however far they are extended.",
  },
  {
    id: "mg-b-49", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Two lines meeting at 90° are called ____",
    options: ["perpendicular", "parallel", "oblique", "curved"], correct: 0,
    explanation: "Lines that meet (intersect) at a right angle (90°) are perpendicular to each other.",
  },
  {
    id: "mg-b-50", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The area of a square whose diagonal is 10 cm is ____",
    options: ["50 cm²", "100 cm²", "25 cm²", "20 cm²"], correct: 0,
    explanation: "Area of a square in terms of its diagonal d = d²/2 = 10²/2 = 100/2 = 50 cm².",
  },

  // ==================================================== Geometry / Circle, PROFICIENT
  {
    id: "mg-p-01", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The angle subtended by an arc at the centre of a circle is 80°. The angle it subtends at any point on the remaining circumference is ____",
    options: ["40°", "80°", "160°", "20°"], correct: 0,
    explanation: "The angle at the centre is twice the angle at the circumference on the same arc. So the angle at the circumference = 80 ÷ 2 = 40°.",
  },
  {
    id: "mg-p-02", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In a cyclic quadrilateral, one angle is 70°. Its opposite angle is ____",
    options: ["110°", "70°", "90°", "20°"], correct: 0,
    explanation: "Opposite angles of a cyclic quadrilateral are supplementary (sum 180°). So the opposite angle = 180 − 70 = 110°.",
  },
  {
    id: "mg-p-03", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The angle between a tangent to a circle and the radius at the point of contact is ____",
    options: ["90°", "0°", "45°", "180°"], correct: 0,
    explanation: "A tangent is always perpendicular (90°) to the radius drawn to the point of contact.",
  },
  {
    id: "mg-p-04", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The area of an equilateral triangle of side 4 cm is ____",
    options: ["4√3 cm²", "8 cm²", "16 cm²", "12 cm²"], correct: 0,
    explanation: "Area of an equilateral triangle = (√3/4) × side² = (√3/4) × 16 = 4√3 cm².",
  },
  {
    id: "mg-p-05", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Each interior angle of a regular hexagon is ____",
    options: ["120°", "60°", "108°", "135°"], correct: 0,
    explanation: "Interior angle = [(n − 2) × 180] ÷ n = (4 × 180) ÷ 6 = 720 ÷ 6 = 120°.",
  },
  {
    id: "mg-p-06", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The sum of the interior angles of a pentagon is ____",
    options: ["540°", "360°", "720°", "450°"], correct: 0,
    explanation: "Sum = (n − 2) × 180 = (5 − 2) × 180 = 3 × 180 = 540°.",
  },
  {
    id: "mg-p-07", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Each exterior angle of a regular polygon is 40°. The number of sides is ____",
    options: ["9", "8", "10", "6"], correct: 0,
    explanation: "Number of sides = 360 ÷ (each exterior angle) = 360 ÷ 40 = 9.",
  },
  {
    id: "mg-p-08", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The diagonal of a cube of side 2 cm is ____",
    options: ["2√3 cm", "2√2 cm", "6 cm", "4 cm"], correct: 0,
    explanation: "The space diagonal of a cube = side × √3 = 2√3 cm.",
  },
  {
    id: "mg-p-09", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The diagonal of a rectangle with sides 3 cm and 4 cm is ____",
    options: ["5 cm", "7 cm", "12 cm", "6 cm"], correct: 0,
    explanation: "Diagonal = √(l² + b²) = √(9 + 16) = √25 = 5 cm (Pythagoras).",
  },
  {
    id: "mg-p-10", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The distance between the points (0, 0) and (3, 4) is ____",
    options: ["5", "7", "1", "12"], correct: 0,
    explanation: "Distance = √[(3 − 0)² + (4 − 0)²] = √(9 + 16) = √25 = 5.",
  },
  {
    id: "mg-p-11", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The mid-point of the line segment joining (2, 3) and (4, 7) is ____",
    options: ["(3, 5)", "(6, 10)", "(1, 2)", "(3, 4)"], correct: 0,
    explanation: "Mid-point = ((2 + 4)/2, (3 + 7)/2) = (3, 5).",
  },
  {
    id: "mg-p-12", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "An exterior angle of a triangle is 120° and one interior opposite angle is 50°. The other interior opposite angle is ____",
    options: ["70°", "60°", "80°", "50°"], correct: 0,
    explanation: "An exterior angle equals the sum of the two interior opposite angles: 120 = 50 + x → x = 70°.",
  },
  {
    id: "mg-p-13", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm is ____",
    options: ["50 cm²", "100 cm²", "48 cm²", "40 cm²"], correct: 0,
    explanation: "Area = ½ × (sum of parallel sides) × height = ½ × (8 + 12) × 5 = ½ × 20 × 5 = 50 cm².",
  },
  {
    id: "mg-p-14", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The height of an equilateral triangle of side 6 cm is ____",
    options: ["3√3 cm", "6√3 cm", "3 cm", "9 cm"], correct: 0,
    explanation: "Height of an equilateral triangle = (√3/2) × side = (√3/2) × 6 = 3√3 cm.",
  },
  {
    id: "mg-p-15", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The diagonal of a cuboid with edges 3, 4 and 12 cm is ____",
    options: ["13 cm", "19 cm", "12 cm", "√19 cm"], correct: 0,
    explanation: "Space diagonal = √(l² + b² + h²) = √(9 + 16 + 144) = √169 = 13 cm.",
  },
  {
    id: "mg-p-16", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the radius of a circle is doubled, its area becomes ____",
    options: ["4 times", "2 times", "8 times", "the same"], correct: 0,
    explanation: "Area = πr². Doubling r gives π(2r)² = 4πr², i.e. 4 times the original area.",
  },

  // ==================================================== Mensuration of solids, PROFICIENT
  {
    id: "mg-p-17", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The volume of a cone with radius 3 cm and height 7 cm (π = 22/7) is ____",
    options: ["66 cm³", "198 cm³", "132 cm³", "22 cm³"], correct: 0,
    explanation: "Volume of a cone = (1/3)πr²h = (1/3) × (22/7) × 9 × 7 = (1/3) × 22 × 9 = 66 cm³.",
  },
  {
    id: "mg-p-18", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The surface area of a sphere of radius 7 cm (π = 22/7) is ____",
    options: ["616 cm²", "154 cm²", "1232 cm²", "308 cm²"], correct: 0,
    explanation: "Surface area of a sphere = 4πr² = 4 × (22/7) × 49 = 4 × 22 × 7 = 616 cm².",
  },
  {
    id: "mg-p-19", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The curved surface area of a cylinder with radius 7 cm and height 10 cm (π = 22/7) is ____",
    options: ["440 cm²", "1540 cm²", "220 cm²", "880 cm²"], correct: 0,
    explanation: "Curved surface area of a cylinder = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm².",
  },
  {
    id: "mg-p-20", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The slant height of a cone with radius 6 cm and vertical height 8 cm is ____",
    options: ["10 cm", "14 cm", "48 cm", "12 cm"], correct: 0,
    explanation: "Slant height l = √(r² + h²) = √(36 + 64) = √100 = 10 cm.",
  },
  {
    id: "mg-p-21", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The total surface area of a cube of side 5 cm is ____",
    options: ["150 cm²", "125 cm²", "100 cm²", "25 cm²"], correct: 0,
    explanation: "Surface area = 6 × side² = 6 × 25 = 150 cm².",
  },
  {
    id: "mg-p-22", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The volume of a hemisphere of radius 3 cm (π = 22/7) is ____",
    options: ["(2/3)π(27) = 396/7 ≈ 56.57 cm³", "18π cm³", "27π cm³", "9π cm³"], correct: 0,
    explanation: "Volume of a hemisphere = (2/3)πr³ = (2/3) × (22/7) × 27 = (2 × 22 × 27)/(3 × 7) = 1188/21 = 396/7 ≈ 56.57 cm³.",
  },
  {
    id: "mg-p-23", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If each edge of a cube is increased by 100%, its volume increases by ____",
    options: ["700%", "100%", "200%", "800%"], correct: 0,
    explanation: "New edge = 2 × old. New volume = (2)³ = 8 times. Increase = 8 − 1 = 7 times = 700%.",
  },
  {
    id: "mg-p-24", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A cylinder and a cone have the same radius and height. The ratio of their volumes (cylinder : cone) is ____",
    options: ["3 : 1", "1 : 3", "1 : 1", "2 : 1"], correct: 0,
    explanation: "Cone volume = (1/3)πr²h; cylinder = πr²h. So cylinder : cone = 1 : (1/3) = 3 : 1.",
  },
  {
    id: "mg-p-25", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The volume of a cylinder of radius 7 cm and height 5 cm (π = 22/7) is ____",
    options: ["770 cm³", "220 cm³", "154 cm³", "385 cm³"], correct: 0,
    explanation: "Volume = πr²h = (22/7) × 49 × 5 = 22 × 7 × 5 = 770 cm³.",
  },
  {
    id: "mg-p-26", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A cube of side 6 cm is cut into cubes of side 2 cm. The number of small cubes formed is ____",
    options: ["27", "9", "18", "36"], correct: 0,
    explanation: "Number = (big edge ÷ small edge)³ = (6 ÷ 2)³ = 3³ = 27.",
  },
  {
    id: "mg-p-27", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The area of the four walls of a room 5 m × 4 m × 3 m (length × breadth × height) is ____",
    options: ["54 m²", "60 m²", "47 m²", "108 m²"], correct: 0,
    explanation: "Area of four walls = 2 × height × (length + breadth) = 2 × 3 × (5 + 4) = 6 × 9 = 54 m².",
  },
  {
    id: "mg-p-28", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The total surface area of a cuboid 5 × 4 × 3 cm is ____",
    options: ["94 cm²", "60 cm²", "47 cm²", "120 cm²"], correct: 0,
    explanation: "TSA = 2(lb + bh + hl) = 2(20 + 12 + 15) = 2 × 47 = 94 cm².",
  },
  {
    id: "mg-p-29", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A wire of length 44 cm is bent into a circle (π = 22/7). The radius of the circle is ____",
    options: ["7 cm", "14 cm", "22 cm", "11 cm"], correct: 0,
    explanation: "Circumference = 2πr = 44 → r = 44 ÷ (2 × 22/7) = 44 × 7 ÷ 44 = 7 cm.",
  },
  {
    id: "mg-p-30", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The area of the sector of a circle with radius 6 cm and central angle 60° (π = 22/7) is ____",
    options: ["132/7 cm² (≈ 18.86)", "36 cm²", "6 cm²", "22 cm²"], correct: 0,
    explanation: "Sector area = (θ/360) × πr² = (60/360) × (22/7) × 36 = (1/6) × 792/7 = 132/7 ≈ 18.86 cm².",
  },
  {
    id: "mg-p-31", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The ratio of the areas of two circles whose radii are in the ratio 2 : 3 is ____",
    options: ["4 : 9", "2 : 3", "8 : 27", "√2 : √3"], correct: 0,
    explanation: "Area ∝ r². So the ratio of areas = 2² : 3² = 4 : 9.",
  },
  {
    id: "mg-p-32", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If the perimeter of a square equals the circumference of a circle of radius 7 cm (π = 22/7), the side of the square is ____",
    options: ["11 cm", "22 cm", "7 cm", "14 cm"], correct: 0,
    explanation: "Circumference = 2 × 22/7 × 7 = 44 cm. Square perimeter = 4 × side = 44 → side = 11 cm.",
  },
  {
    id: "mg-p-33", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The number of vertices (corners) of a cuboid is ____",
    options: ["8", "6", "12", "4"], correct: 0,
    explanation: "A cuboid, like a cube, has 8 vertices, 12 edges and 6 faces.",
  },
  {
    id: "mg-p-34", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The volume of a cube whose surface area is 96 cm² is ____",
    options: ["64 cm³", "96 cm³", "16 cm³", "48 cm³"], correct: 0,
    explanation: "6 × side² = 96 → side² = 16 → side = 4 cm. Volume = 4³ = 64 cm³.",
  },

  // ==================================================== Trigonometry, PROFICIENT
  {
    id: "mg-p-35", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of sin 30° is ____",
    options: ["1/2", "√3/2", "1", "1/√2"], correct: 0,
    explanation: "sin 30° = 1/2 (a standard trigonometric value).",
  },
  {
    id: "mg-p-36", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of cos 60° is ____",
    options: ["1/2", "√3/2", "1", "0"], correct: 0,
    explanation: "cos 60° = 1/2. (Note: sin 30° = cos 60° = 1/2.)",
  },
  {
    id: "mg-p-37", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of tan 45° is ____",
    options: ["1", "0", "√3", "1/√3"], correct: 0,
    explanation: "tan 45° = 1 (since sin 45° = cos 45° = 1/√2).",
  },
  {
    id: "mg-p-38", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of sin 90° is ____",
    options: ["1", "0", "1/2", "√3/2"], correct: 0,
    explanation: "sin 90° = 1 (its maximum value).",
  },
  {
    id: "mg-p-39", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of sin²30° + cos²30° is ____",
    options: ["1", "0", "1/2", "2"], correct: 0,
    explanation: "By the identity sin²θ + cos²θ = 1, the value is 1 for any angle, including 30°.",
  },
  {
    id: "mg-p-40", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of tan 30° × tan 60° is ____",
    options: ["1", "√3", "1/3", "3"], correct: 0,
    explanation: "tan 30° × tan 60° = (1/√3) × √3 = 1.",
  },
  {
    id: "mg-p-41", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of cos 0° is ____",
    options: ["1", "0", "1/2", "√3/2"], correct: 0,
    explanation: "cos 0° = 1 (its maximum value). (sin 0° = 0.)",
  },
  {
    id: "mg-p-42", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The angle of elevation of the top of a tower from a point 30 m away is 45°. The height of the tower is ____",
    options: ["30 m", "15 m", "30√3 m", "60 m"], correct: 0,
    explanation: "tan 45° = height/distance → 1 = height/30 → height = 30 m.",
  },
  {
    id: "mg-p-43", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A pole casts a shadow equal to its own height. The angle of elevation of the sun is ____",
    options: ["45°", "30°", "60°", "90°"], correct: 0,
    explanation: "tan θ = height/shadow = 1 (they are equal) → θ = 45°.",
  },
  {
    id: "mg-p-44", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of sin 60° is ____",
    options: ["√3/2", "1/2", "1", "1/√2"], correct: 0,
    explanation: "sin 60° = √3/2 (a standard value). Note cos 30° = √3/2 as well.",
  },
  {
    id: "mg-p-45", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of (1 + tan²45°) is ____",
    options: ["2", "1", "0", "√2"], correct: 0,
    explanation: "1 + tan²45° = 1 + 1² = 2. (This also equals sec²45° by the identity 1 + tan²θ = sec²θ.)",
  },
  {
    id: "mg-p-46", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If sin θ = 1/2, then θ = ?",
    options: ["30°", "45°", "60°", "90°"], correct: 0,
    explanation: "sin 30° = 1/2, so θ = 30°.",
  },
  {
    id: "mg-p-47", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The angle of elevation of the sun is 60° when a tower casts a shadow of 10 m. The height of the tower is ____",
    options: ["10√3 m", "10 m", "20 m", "10/√3 m"], correct: 0,
    explanation: "tan 60° = height/shadow → √3 = height/10 → height = 10√3 m.",
  },
  {
    id: "mg-p-48", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of cos 90° + sin 0° is ____",
    options: ["0", "1", "2", "1/2"], correct: 0,
    explanation: "cos 90° = 0 and sin 0° = 0, so the sum = 0.",
  },
  {
    id: "mg-p-49", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "In a right triangle, sin θ is defined as ____",
    options: ["opposite / hypotenuse", "adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite"], correct: 0,
    explanation: "sin θ = opposite side / hypotenuse. (cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent.)",
  },
  {
    id: "mg-p-50", section: "numerical", topic: "Geometry & mensuration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The value of tan 60° is ____",
    options: ["√3", "1/√3", "1", "√3/2"], correct: 0,
    explanation: "tan 60° = √3 (a standard value). (tan 30° = 1/√3.)",
  },
];
