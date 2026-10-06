/**
 * General Knowledge, Geography (topic: "Geography").
 *
 * section: "gk". Shared across both UPESSC exam levels.
 * Covers the solar system & earth, latitudes/longitudes, continents & oceans,
 * physical & Indian geography (rivers, mountains, soils, national parks) and
 * world geography. Static, verifiable facts modelled on UPESSC/UPTET/UPPSC PYQs.
 *   • beginner, landmark facts every aspirant must know.
 *   • proficient, finer physical-geography and India/world distinctions.
 */
import type { Question } from "./questions";

export const gkGeographyBank: Question[] = [
  // ==================================================== Solar system & Earth, BEGINNER
  {
    id: "gg-b-01", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which is the largest planet in the solar system?",
    options: ["Jupiter", "Saturn", "Earth", "Neptune"], correct: 0,
    explanation: "Jupiter is the largest planet in the solar system. Saturn is the second largest and is famous for its prominent rings.",
  },
  {
    id: "gg-b-02", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which planet is nearest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0,
    explanation: "Mercury is the planet nearest to the Sun and also the smallest planet in the solar system.",
  },
  {
    id: "gg-b-03", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"], correct: 0,
    explanation: "Mars is called the 'Red Planet' because of iron oxide (rust) on its surface, which gives it a reddish appearance.",
  },
  {
    id: "gg-b-04", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Earth is the ____ planet from the Sun.",
    options: ["third", "second", "fourth", "fifth"], correct: 0,
    explanation: "The Earth is the third planet from the Sun (after Mercury and Venus) and the only known planet to support life. It is called the 'Blue Planet'.",
  },
  {
    id: "gg-b-05", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which planet is the hottest in the solar system?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"], correct: 0,
    explanation: "Venus is the hottest planet due to its thick atmosphere of carbon dioxide, which traps heat (a runaway greenhouse effect), hotter even than Mercury.",
  },
  {
    id: "gg-b-06", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The rotation of the Earth on its axis causes ____",
    options: ["day and night", "the seasons", "tides only", "eclipses"], correct: 0,
    explanation: "The Earth's rotation (once in about 24 hours) causes day and night. Its revolution around the Sun (about 365¼ days), combined with axial tilt, causes the seasons.",
  },
  {
    id: "gg-b-07", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The revolution of the Earth around the Sun causes ____",
    options: ["the change of seasons", "day and night", "earthquakes", "gravity"], correct: 0,
    explanation: "The Earth's revolution around the Sun, together with the tilt of its axis (23½°), causes the change of seasons.",
  },
  {
    id: "gg-b-08", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which planet is called the 'Earth's twin'?",
    options: ["Venus", "Mars", "Mercury", "Saturn"], correct: 0,
    explanation: "Venus is called Earth's twin because it is similar to Earth in size, mass and density. It is also the brightest planet in our sky.",
  },
  {
    id: "gg-b-09", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The natural satellite of the Earth is ____",
    options: ["the Moon", "Mars", "Venus", "the Sun"], correct: 0,
    explanation: "The Moon is the Earth's only natural satellite. It takes about 27.3 days to revolve around the Earth.",
  },
  {
    id: "gg-b-10", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Sun's energy is produced by the process of ____",
    options: ["nuclear fusion", "nuclear fission", "combustion", "radiation only"], correct: 0,
    explanation: "The Sun produces energy by nuclear fusion, in which hydrogen nuclei fuse to form helium, releasing enormous energy.",
  },
  {
    id: "gg-b-11", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which planet is famous for its bright rings?",
    options: ["Saturn", "Jupiter", "Mars", "Neptune"], correct: 0,
    explanation: "Saturn is famous for its prominent, bright ring system made of ice and rock particles. (Jupiter, Uranus and Neptune have faint rings too.)",
  },
  {
    id: "gg-b-12", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The approximate tilt of the Earth's axis is ____",
    options: ["23½°", "45°", "66½°", "90°"], correct: 0,
    explanation: "The Earth's axis is tilted at about 23½° from the vertical. This tilt is responsible for the seasons and the varying length of day and night.",
  },

  // ==================================================== Lat/Long, continents & oceans, BEGINNER
  {
    id: "gg-b-13", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The imaginary line dividing the Earth into the Northern and Southern Hemispheres is the ____",
    options: ["Equator", "Prime Meridian", "Tropic of Cancer", "Arctic Circle"], correct: 0,
    explanation: "The Equator (0° latitude) is the imaginary line that divides the Earth into the Northern and Southern Hemispheres.",
  },
  {
    id: "gg-b-14", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Prime Meridian (0° longitude) passes through ____",
    options: ["Greenwich (London)", "Delhi", "New York", "Tokyo"], correct: 0,
    explanation: "The Prime Meridian (0° longitude) passes through Greenwich near London, and is the reference for measuring longitude and world time (GMT).",
  },
  {
    id: "gg-b-15", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Tropic of Cancer lies at a latitude of ____",
    options: ["23½° North", "23½° South", "66½° North", "0°"], correct: 0,
    explanation: "The Tropic of Cancer is at 23½° North latitude. The Tropic of Capricorn is at 23½° South. The Tropic of Cancer passes through central India.",
  },
  {
    id: "gg-b-16", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which is the largest continent in the world?",
    options: ["Asia", "Africa", "North America", "Europe"], correct: 0,
    explanation: "Asia is the largest continent, both in area and population. Africa is the second largest, and Australia is the smallest continent.",
  },
  {
    id: "gg-b-17", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which is the largest ocean in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0,
    explanation: "The Pacific Ocean is the largest and deepest ocean. Its deepest point, the Mariana Trench, is the deepest known point on Earth.",
  },
  {
    id: "gg-b-18", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The deepest point in the ocean, the Mariana Trench, lies in the ____",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0,
    explanation: "The Mariana Trench (Challenger Deep), the deepest known point on Earth, is located in the western Pacific Ocean.",
  },
  {
    id: "gg-b-19", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "How many continents are there in the world?",
    options: ["Seven", "Five", "Six", "Eight"], correct: 0,
    explanation: "There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe and Australia.",
  },
  {
    id: "gg-b-20", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Earth's outermost solid layer is called the ____",
    options: ["crust", "mantle", "outer core", "inner core"], correct: 0,
    explanation: "The Earth has three main layers, the crust (outermost, solid), the mantle (middle), and the core (innermost, mostly iron and nickel).",
  },
  {
    id: "gg-b-21", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The layer of the atmosphere that contains the ozone layer is the ____",
    options: ["stratosphere", "troposphere", "mesosphere", "thermosphere"], correct: 0,
    explanation: "The ozone layer, which absorbs harmful ultraviolet rays, is found in the stratosphere. Weather phenomena occur in the lowest layer, the troposphere.",
  },
  {
    id: "gg-b-22", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The lowest layer of the atmosphere, where all weather occurs, is the ____",
    options: ["troposphere", "stratosphere", "ionosphere", "exosphere"], correct: 0,
    explanation: "The troposphere is the lowest atmospheric layer, where clouds, rain and other weather phenomena occur.",
  },

  // ==================================================== Indian physical geography, BEGINNER
  {
    id: "gg-b-23", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which is the longest river of India (flowing entirely within/through India)?",
    options: ["Ganga", "Godavari", "Yamuna", "Narmada"], correct: 0,
    explanation: "The Ganga is the longest river of India (about 2,525 km). The Godavari is the longest river of peninsular (southern) India.",
  },
  {
    id: "gg-b-24", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Godavari river is also known as ____",
    options: ["Dakshin Ganga (Ganga of the South)", "Sorrow of Bengal", "Sorrow of Bihar", "Blue Nile"], correct: 0,
    explanation: "The Godavari, the longest peninsular river, is called the 'Dakshin Ganga' (Ganga of the South). (The Damodar is the 'Sorrow of Bengal'; the Kosi the 'Sorrow of Bihar'.)",
  },
  {
    id: "gg-b-25", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The highest mountain range in India is the ____",
    options: ["Himalayas", "Aravalli", "Vindhya", "Western Ghats"], correct: 0,
    explanation: "The Himalayas are the highest and youngest fold mountains in India and the world. The Aravalli range is one of the oldest.",
  },
  {
    id: "gg-b-26", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The highest mountain peak located within India is ____",
    options: ["Kanchenjunga", "Mount Everest", "K2 (Godwin Austen)", "Nanda Devi"], correct: 0,
    explanation: "Kanchenjunga (in Sikkim) is the highest peak wholly within India. (K2 is higher but lies in Pakistan-administered Kashmir; Everest is in Nepal.)",
  },
  {
    id: "gg-b-27", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Thar Desert is located mainly in which Indian state?",
    options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"], correct: 0,
    explanation: "The Thar Desert (Great Indian Desert) lies mainly in Rajasthan, extending into parts of Gujarat, Punjab and Haryana.",
  },
  {
    id: "gg-b-28", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which is the largest Indian state by area?",
    options: ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"], correct: 0,
    explanation: "Rajasthan is the largest state of India by area. Uttar Pradesh is the largest state by population.",
  },
  {
    id: "gg-b-29", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The most widespread and fertile soil found in the northern plains of India is ____",
    options: ["alluvial soil", "black soil", "red soil", "laterite soil"], correct: 0,
    explanation: "Alluvial soil, deposited by rivers, is the most widespread and fertile soil in India, covering the northern (Indo-Gangetic) plains.",
  },
  {
    id: "gg-b-30", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Black soil (regur), ideal for growing cotton, is found mainly in the ____",
    options: ["Deccan Plateau", "Northern Plains", "Thar Desert", "Himalayan region"], correct: 0,
    explanation: "Black soil (regur), formed from volcanic (basaltic) rock, is found mainly on the Deccan Plateau (Maharashtra, MP, Gujarat) and is ideal for cotton.",
  },
  {
    id: "gg-b-31", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The rivers Narmada and Tapi flow into the ____",
    options: ["Arabian Sea (westward)", "Bay of Bengal (eastward)", "Indian Ocean directly", "Ganga"], correct: 0,
    explanation: "Unlike most peninsular rivers, the Narmada and Tapi flow westward through rift valleys into the Arabian Sea.",
  },
  {
    id: "gg-b-32", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Kaziranga National Park, famous for the one-horned rhinoceros, is in which state?",
    options: ["Assam", "West Bengal", "Uttar Pradesh", "Odisha"], correct: 0,
    explanation: "Kaziranga National Park in Assam is famous for the great Indian one-horned rhinoceros and is a UNESCO World Heritage Site.",
  },
  {
    id: "gg-b-33", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Gir National Park, the only natural home of the Asiatic lion, is in ____",
    options: ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"], correct: 0,
    explanation: "Gir National Park in Gujarat is the only natural habitat of the Asiatic lion in the world.",
  },
  {
    id: "gg-b-34", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Ganga river originates from ____",
    options: ["Gangotri glacier", "Yamunotri", "Mansarovar", "Amarkantak"], correct: 0,
    explanation: "The Ganga (as the Bhagirathi) originates from the Gangotri glacier in Uttarakhand. (The Narmada originates from Amarkantak.)",
  },
  {
    id: "gg-b-35", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "How many states does India have at present?",
    options: ["28", "29", "27", "30"], correct: 0,
    explanation: "India has 28 states and 8 Union Territories at present (after the reorganisation of Jammu & Kashmir and Ladakh into UTs in 2019).",
  },
  {
    id: "gg-b-36", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The southernmost point of mainland India is ____",
    options: ["Kanyakumari", "Indira Point", "Rameswaram", "Kochi"], correct: 0,
    explanation: "Kanyakumari (Cape Comorin) is the southernmost tip of mainland India. Indira Point (in the Andaman & Nicobar Islands) is the southernmost point of India's territory.",
  },
  {
    id: "gg-b-37", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The standard meridian of India (82½° E) passes through which city?",
    options: ["Mirzapur (near Allahabad)", "Delhi", "Kolkata", "Mumbai"], correct: 0,
    explanation: "India's standard meridian, 82½° E (which fixes IST at GMT +5:30), passes through Mirzapur near Prayagraj (Allahabad) in Uttar Pradesh.",
  },
  {
    id: "gg-b-38", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The climate of India is broadly described as ____",
    options: ["monsoon type", "Mediterranean type", "polar type", "equatorial type"], correct: 0,
    explanation: "India has a monsoon-type (tropical) climate, dominated by the seasonal reversal of winds, the south-west summer monsoon brings most of the rainfall.",
  },
  {
    id: "gg-b-39", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which is the oldest mountain range in India?",
    options: ["Aravalli", "Himalaya", "Satpura", "Nilgiri"], correct: 0,
    explanation: "The Aravalli range (in Rajasthan) is one of the oldest fold mountain ranges in the world, much older than the young Himalayas.",
  },
  {
    id: "gg-b-40", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which state has the longest coastline in India?",
    options: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"], correct: 0,
    explanation: "Gujarat has the longest coastline among Indian states. India's overall coastline runs along the Arabian Sea, the Indian Ocean and the Bay of Bengal.",
  },

  // ==================================================== World geography, BEGINNER
  {
    id: "gg-b-41", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The longest river in the world is the ____",
    options: ["Nile", "Amazon", "Ganga", "Yangtze"], correct: 0,
    explanation: "The Nile (in Africa) is generally regarded as the longest river in the world. The Amazon carries the largest volume of water.",
  },
  {
    id: "gg-b-42", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The highest mountain peak in the world is ____",
    options: ["Mount Everest", "K2", "Kanchenjunga", "Mont Blanc"], correct: 0,
    explanation: "Mount Everest (in Nepal, on the Nepal–China border) at about 8,849 m is the highest mountain peak in the world.",
  },
  {
    id: "gg-b-43", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The largest hot desert in the world is the ____",
    options: ["Sahara", "Thar", "Gobi", "Kalahari"], correct: 0,
    explanation: "The Sahara (in North Africa) is the largest hot desert in the world. (Antarctica is the largest desert overall, a cold desert.)",
  },
  {
    id: "gg-b-44", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The largest country in the world by area is ____",
    options: ["Russia", "Canada", "China", "USA"], correct: 0,
    explanation: "Russia is the largest country in the world by area, spanning two continents (Europe and Asia). Canada is the second largest.",
  },
  {
    id: "gg-b-45", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Amazon rainforest, the largest tropical rainforest, lies mainly in ____",
    options: ["South America", "Africa", "Asia", "Australia"], correct: 0,
    explanation: "The Amazon rainforest lies mainly in Brazil (South America) and is often called the 'lungs of the Earth' for producing a large share of the world's oxygen.",
  },
  {
    id: "gg-b-46", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The smallest country in the world (by area) is ____",
    options: ["Vatican City", "Monaco", "Maldives", "San Marino"], correct: 0,
    explanation: "Vatican City is the smallest country in the world, both by area and population.",
  },
  {
    id: "gg-b-47", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The largest freshwater lake in the world (by area) is ____",
    options: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Wular Lake"], correct: 0,
    explanation: "Lake Superior (North America) is the largest freshwater lake by area. (The Caspian Sea is the largest lake overall, but it is saline.)",
  },
  {
    id: "gg-b-48", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Great Barrier Reef, the world's largest coral reef, is located near ____",
    options: ["Australia", "India", "Brazil", "Japan"], correct: 0,
    explanation: "The Great Barrier Reef, the world's largest coral reef system, lies off the coast of Queensland, Australia.",
  },
  {
    id: "gg-b-49", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The imaginary line at 0° latitude receives the ____ sunlight throughout the year.",
    options: ["most direct (vertical)", "least", "no", "slanting"], correct: 0,
    explanation: "The Equator (0° latitude) receives the most direct (nearly vertical) rays of the Sun throughout the year, making equatorial regions hot.",
  },
  {
    id: "gg-b-50", section: "gk", topic: "Geography", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Land of the Rising Sun' is ____",
    options: ["Japan", "China", "Norway", "Thailand"], correct: 0,
    explanation: "Japan is called the 'Land of the Rising Sun'. (Norway is the 'Land of the Midnight Sun'; Thailand the 'Land of White Elephants'.)",
  },

  // ==================================================== Physical geography, PROFICIENT
  {
    id: "gg-p-01", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The hot, dry local wind that blows over the northern plains of India in summer is called ____",
    options: ["Loo", "Chinook", "Mistral", "Foehn"], correct: 0,
    explanation: "The 'Loo' is a hot, dry, dust-laden wind that blows over the northern Indian plains in summer. (Chinook and Foehn are warm mountain winds; Mistral is a cold European wind.)",
  },
  {
    id: "gg-p-02", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The warm ocean current flowing along the eastern coast of North America is the ____",
    options: ["Gulf Stream", "Labrador Current", "Canary Current", "Humboldt Current"], correct: 0,
    explanation: "The Gulf Stream is a warm current in the Atlantic. The cold Labrador Current meets it near Newfoundland, creating fog and rich fishing grounds.",
  },
  {
    id: "gg-p-03", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The deflection of winds and currents due to the Earth's rotation is called the ____",
    options: ["Coriolis effect", "Greenhouse effect", "Doppler effect", "Ferrel effect"], correct: 0,
    explanation: "The Coriolis effect (Coriolis force) deflects moving air and water to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.",
  },
  {
    id: "gg-p-04", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'El Niño', which affects the Indian monsoon, is associated with the warming of the ____",
    options: ["central & eastern Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"], correct: 0,
    explanation: "El Niño is an abnormal warming of the central and eastern Pacific Ocean waters, which is often linked to weakened Indian monsoon rainfall.",
  },
  {
    id: "gg-p-05", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The zone of frequent earthquakes and volcanoes around the Pacific Ocean is called the ____",
    options: ["Ring of Fire", "Rift Valley", "Doldrums", "Roaring Forties"], correct: 0,
    explanation: "The 'Pacific Ring of Fire' is a horseshoe-shaped belt around the Pacific Ocean with intense volcanic and seismic activity, caused by plate movements.",
  },
  {
    id: "gg-p-06", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The highest plateau in the world, called the 'Roof of the World', is the ____",
    options: ["Tibetan Plateau", "Deccan Plateau", "Colorado Plateau", "Pamir Plateau"], correct: 0,
    explanation: "The Tibetan Plateau is the highest and largest plateau in the world, earning it the name 'Roof of the World'.",
  },
  {
    id: "gg-p-07", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The temperate grasslands of North America are known as the ____",
    options: ["Prairies", "Steppes", "Pampas", "Veld"], correct: 0,
    explanation: "The temperate grasslands are the Prairies (North America), Steppes (Eurasia), Pampas (South America), Downs (Australia) and Veld (South Africa).",
  },
  {
    id: "gg-p-08", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 0° latitude and 0° longitude intersect in the ____",
    options: ["Atlantic Ocean (Gulf of Guinea)", "Pacific Ocean", "Indian Ocean", "Sahara Desert"], correct: 0,
    explanation: "The Equator (0° latitude) and the Prime Meridian (0° longitude) intersect in the Atlantic Ocean, in the Gulf of Guinea off the coast of West Africa.",
  },
  {
    id: "gg-p-09", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The rocks formed by the cooling and solidification of molten magma are called ____",
    options: ["igneous rocks", "sedimentary rocks", "metamorphic rocks", "fossil rocks"], correct: 0,
    explanation: "Igneous ('fire-formed') rocks form from cooled magma/lava (e.g. basalt, granite). Sedimentary rocks form from deposited sediments; metamorphic rocks from heat/pressure.",
  },
  {
    id: "gg-p-10", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The imaginary line where the calendar date changes is the ____",
    options: ["International Date Line (180° meridian)", "Prime Meridian", "Equator", "Tropic of Cancer"], correct: 0,
    explanation: "The International Date Line roughly follows the 180° meridian; crossing it eastward you subtract a day, and westward you add a day.",
  },
  {
    id: "gg-p-11", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Suez Canal connects the Mediterranean Sea with the ____",
    options: ["Red Sea", "Black Sea", "Caspian Sea", "Arabian Sea"], correct: 0,
    explanation: "The Suez Canal (in Egypt) connects the Mediterranean Sea with the Red Sea, providing a shortcut between Europe and Asia. The Panama Canal links the Atlantic and Pacific.",
  },
  {
    id: "gg-p-12", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The winds that blow from the sub-tropical high-pressure belts towards the equator are the ____",
    options: ["Trade Winds", "Westerlies", "Polar winds", "Monsoon winds"], correct: 0,
    explanation: "The Trade Winds blow from the sub-tropical high-pressure belts towards the equatorial low. The Westerlies blow from the sub-tropics towards the poles.",
  },
  {
    id: "gg-p-13", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A narrow strip of water connecting two large water bodies is called a ____",
    options: ["strait", "isthmus", "peninsula", "gulf"], correct: 0,
    explanation: "A strait is a narrow strip of water joining two larger water bodies (e.g. Palk Strait). An isthmus is a narrow strip of land joining two larger landmasses.",
  },
  {
    id: "gg-p-14", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which line passes through the maximum number of continents?",
    options: ["Equator", "Tropic of Cancer", "Prime Meridian", "Arctic Circle"], correct: 1,
    explanation: "The Tropic of Cancer passes through three continents (Asia, Africa, North America) and the most countries. (The Equator passes through the largest number of countries in Africa/S. America but the Tropic of Cancer crosses more countries overall, a commonly tested point.)",
  },
  {
    id: "gg-p-15", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The process by which running water wears away the land is called ____",
    options: ["erosion", "deposition", "weathering", "condensation"], correct: 0,
    explanation: "Erosion is the wearing away and transport of land material by agents like running water, wind and glaciers. Deposition is the laying down of eroded material.",
  },
  {
    id: "gg-p-16", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The cold current off the western coast of South America is the ____",
    options: ["Humboldt (Peru) Current", "Gulf Stream", "Kuroshio Current", "Benguela Current"], correct: 0,
    explanation: "The Humboldt (Peru) Current is a cold current flowing along the western coast of South America; it supports rich fisheries off Peru.",
  },

  // ==================================================== Indian geography, PROFICIENT
  {
    id: "gg-p-17", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Tropic of Cancer passes through how many Indian states?",
    options: ["Eight", "Six", "Ten", "Five"], correct: 0,
    explanation: "The Tropic of Cancer passes through eight Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.",
  },
  {
    id: "gg-p-18", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest river island in the world, Majuli, lies in which river?",
    options: ["Brahmaputra", "Ganga", "Godavari", "Krishna"], correct: 0,
    explanation: "Majuli, in Assam, is the largest river island in the world, situated in the Brahmaputra river.",
  },
  {
    id: "gg-p-19", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Sundarbans, the world's largest mangrove forest, lies in the delta of ____",
    options: ["the Ganga–Brahmaputra", "the Godavari–Krishna", "the Narmada–Tapi", "the Mahanadi"], correct: 0,
    explanation: "The Sundarbans mangrove forest lies in the Ganga–Brahmaputra delta (India and Bangladesh) and is home to the Royal Bengal Tiger.",
  },
  {
    id: "gg-p-20", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Palk Strait separates India from ____",
    options: ["Sri Lanka", "Bangladesh", "Myanmar", "Maldives"], correct: 0,
    explanation: "The Palk Strait (and the Gulf of Mannar) separates India (Tamil Nadu) from Sri Lanka. Adam's Bridge (Ram Setu) lies across it.",
  },
  {
    id: "gg-p-21", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Chilika Lake, the largest coastal lagoon in India, is located in ____",
    options: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "Kerala"], correct: 0,
    explanation: "Chilika Lake (Odisha) is the largest coastal (brackish-water) lagoon in India and a major site for migratory birds.",
  },
  {
    id: "gg-p-22", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest freshwater lake in India is ____",
    options: ["Wular Lake", "Chilika Lake", "Sambhar Lake", "Vembanad Lake"], correct: 0,
    explanation: "Wular Lake (Jammu & Kashmir) is the largest freshwater lake in India. (Sambhar is the largest saline lake; Vembanad the longest.)",
  },
  {
    id: "gg-p-23", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Nathu La pass, an important trade route with China, is located in ____",
    options: ["Sikkim", "Himachal Pradesh", "Uttarakhand", "Arunachal Pradesh"], correct: 0,
    explanation: "The Nathu La pass, connecting Sikkim with Tibet (China), is a historic Silk Route trading pass in the eastern Himalayas.",
  },
  {
    id: "gg-p-24", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest tributary of the Ganga is the ____",
    options: ["Yamuna", "Kosi", "Gandak", "Son"], correct: 0,
    explanation: "The Yamuna is the largest tributary of the Ganga. Other important tributaries include the Ghaghara, Gandak, Kosi and Son.",
  },
  {
    id: "gg-p-25", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Sorrow of Bihar' is the river ____",
    options: ["Kosi", "Damodar", "Son", "Gandak"], correct: 0,
    explanation: "The Kosi is called the 'Sorrow of Bihar' for its frequent, destructive floods and shifting course. The Damodar was the 'Sorrow of Bengal'.",
  },
  {
    id: "gg-p-26", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The eastern coastal plain of India (along the Bay of Bengal) is called the ____",
    options: ["Coromandel/Northern Circars coast", "Konkan coast", "Malabar coast", "Kathiawar coast"], correct: 0,
    explanation: "The eastern coast is the Coromandel coast (south) and Northern Circars (north). The western coast comprises the Konkan (north) and Malabar (south) coasts.",
  },
  {
    id: "gg-p-27", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which soil is formed by the leaching of rocks in high-rainfall tropical areas and is used for making bricks?",
    options: ["laterite soil", "alluvial soil", "black soil", "desert soil"], correct: 0,
    explanation: "Laterite soil forms by intense leaching in high-rainfall tropical areas (e.g. the Western Ghats). It hardens on exposure and is used for making bricks.",
  },
  {
    id: "gg-p-28", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Duncan Passage lies between ____",
    options: ["South Andaman and Little Andaman", "the Andaman and Nicobar groups", "India and Sri Lanka", "the Lakshadweep islands"], correct: 0,
    explanation: "The Duncan Passage lies between South Andaman and Little Andaman. The Ten Degree Channel separates the Andaman group from the Nicobar group.",
  },
  {
    id: "gg-p-29", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Shifting (slash-and-burn) cultivation practised in North-East India is locally called ____",
    options: ["Jhum", "Zabo", "Kuruwa", "Podu (in the NE it is Jhum)"], correct: 0,
    explanation: "Shifting cultivation in North-East India is called 'Jhum'. (It is called 'Podu' in Andhra/Odisha and 'Penda' elsewhere.)",
  },
  {
    id: "gg-p-30", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The pre-monsoon showers in Karnataka that help the coffee crop are called ____",
    options: ["Mango showers", "Kalbaisakhi", "Loo", "Cherry blossom (both this and Mango showers)"], correct: 0,
    explanation: "Pre-monsoon showers are called 'Mango showers' (in Karnataka/Kerala, helping mangoes) and 'Cherry Blossom/Coffee showers' (helping coffee). In Bengal they are 'Kalbaisakhi'.",
  },
  {
    id: "gg-p-31", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The southernmost point of India's territory, Indira Point, is located in ____",
    options: ["the Nicobar Islands", "Kanyakumari", "Lakshadweep", "the Rann of Kutch"], correct: 0,
    explanation: "Indira Point, on Great Nicobar Island (Andaman & Nicobar), is the southernmost point of India's territory. Kanyakumari is the southern tip of the mainland.",
  },
  {
    id: "gg-p-32", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The rain-shadow effect makes which region a semi-arid area east of the Western Ghats?",
    options: ["the Deccan interior (e.g. parts of Karnataka/Maharashtra)", "the Konkan coast", "the Malabar coast", "the Ganga plains"], correct: 0,
    explanation: "The Western Ghats block the moisture-laden south-west monsoon on their windward (western) side, leaving the leeward (eastern) Deccan interior in a dry rain shadow.",
  },
  {
    id: "gg-p-33", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The retreating (north-east) monsoon brings most of the rainfall to which region in October–November?",
    options: ["Tamil Nadu (Coromandel coast)", "Punjab", "Rajasthan", "Kerala"], correct: 0,
    explanation: "During the retreating monsoon (Oct–Nov), the north-east winds pick up moisture over the Bay of Bengal and bring rain to Tamil Nadu and the Coromandel coast.",
  },
  {
    id: "gg-p-34", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which is the longest river of peninsular India?",
    options: ["Godavari", "Krishna", "Kaveri", "Mahanadi"], correct: 0,
    explanation: "The Godavari is the longest river of peninsular (southern) India, rising in Maharashtra and draining into the Bay of Bengal.",
  },
  {
    id: "gg-p-35", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Nine Degree Channel' separates ____",
    options: ["Minicoy from the main Lakshadweep group", "the Andaman from the Nicobar Islands", "India from Sri Lanka", "Minicoy from Maldives"], correct: 0,
    explanation: "The Nine Degree Channel separates the island of Minicoy from the rest of the Lakshadweep archipelago. The Eight Degree Channel separates Minicoy from the Maldives.",
  },
  {
    id: "gg-p-36", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Deccan Plateau is bordered by the Western Ghats and the ____",
    options: ["Eastern Ghats", "Aravalli", "Himalayas", "Vindhya only"], correct: 0,
    explanation: "The triangular Deccan Plateau is bordered by the Western Ghats (west), the Eastern Ghats (east) and the Satpura/Vindhya ranges (north).",
  },

  // ==================================================== World geography, PROFICIENT
  {
    id: "gg-p-37", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The river that carries the largest volume of water in the world is the ____",
    options: ["Amazon", "Nile", "Yangtze", "Congo"], correct: 0,
    explanation: "The Amazon (South America) discharges the largest volume of water of any river in the world, though the Nile is longer.",
  },
  {
    id: "gg-p-38", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Sahel is a semi-arid transition zone lying to the south of the ____",
    options: ["Sahara Desert", "Kalahari Desert", "Gobi Desert", "Atacama Desert"], correct: 0,
    explanation: "The Sahel is a semi-arid belt in Africa lying between the Sahara Desert (to the north) and the savanna (to the south).",
  },
  {
    id: "gg-p-39", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The driest desert in the world is the ____",
    options: ["Atacama Desert", "Sahara Desert", "Thar Desert", "Kalahari Desert"], correct: 0,
    explanation: "The Atacama Desert (Chile, South America) is the driest non-polar desert in the world; some areas have recorded almost no rainfall.",
  },
  {
    id: "gg-p-40", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Strait of Malacca is an important shipping route between the Indian Ocean and the ____",
    options: ["South China Sea (Pacific)", "Red Sea", "Mediterranean Sea", "Persian Gulf"], correct: 0,
    explanation: "The Strait of Malacca (between Malaysia and Sumatra) links the Indian Ocean with the South China Sea (Pacific), one of the busiest shipping lanes.",
  },
  {
    id: "gg-p-41", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest lake in the world (by area) is the ____",
    options: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Aral Sea"], correct: 0,
    explanation: "The Caspian Sea is the largest lake in the world by area (it is saline). Lake Superior is the largest freshwater lake by area.",
  },
  {
    id: "gg-p-42", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Land of the Midnight Sun' is ____",
    options: ["Norway", "Japan", "Canada", "New Zealand"], correct: 0,
    explanation: "Norway is called the 'Land of the Midnight Sun' because, being partly within the Arctic Circle, the Sun remains visible at midnight during summer.",
  },
  {
    id: "gg-p-43", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Panama Canal connects the Atlantic Ocean with the ____",
    options: ["Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Mediterranean Sea"], correct: 0,
    explanation: "The Panama Canal (in Central America) connects the Atlantic and Pacific Oceans, greatly shortening the sea route between them.",
  },
  {
    id: "gg-p-44", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Great Rift Valley is located mainly in ____",
    options: ["East Africa", "South America", "Central Asia", "Australia"], correct: 0,
    explanation: "The Great Rift Valley is a large geological trench running mainly through East Africa (from the Middle East to Mozambique), formed by diverging plates.",
  },
  {
    id: "gg-p-45", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Mount Kilimanjaro, the highest mountain in Africa, is located in ____",
    options: ["Tanzania", "Kenya", "Ethiopia", "Nigeria"], correct: 0,
    explanation: "Mount Kilimanjaro (a dormant volcano) in Tanzania is the highest mountain in Africa and the highest free-standing mountain in the world.",
  },
  {
    id: "gg-p-46", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Bosphorus Strait separates Europe from Asia and lies in ____",
    options: ["Turkey", "Greece", "Egypt", "Iran"], correct: 0,
    explanation: "The Bosphorus Strait (in Turkey) separates the European and Asian parts of Istanbul and connects the Black Sea with the Sea of Marmara.",
  },
  {
    id: "gg-p-47", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which country is the most populous in the world (as of the 2020s)?",
    options: ["India", "China", "USA", "Indonesia"], correct: 0,
    explanation: "India became the world's most populous country in 2023, surpassing China. (Verify current figures from the UN/official data before quoting.)",
  },
  {
    id: "gg-p-48", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Roaring Forties' are strong westerly winds found in the ____",
    options: ["Southern Hemisphere (around 40°S)", "Northern Hemisphere (around 40°N)", "equatorial belt", "polar region"], correct: 0,
    explanation: "The 'Roaring Forties' are strong westerly winds in the Southern Hemisphere between about 40° and 50° South, over the vast southern oceans.",
  },
  {
    id: "gg-p-49", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The longest mountain range in the world (above sea level) is the ____",
    options: ["Andes", "Himalayas", "Rockies", "Alps"], correct: 0,
    explanation: "The Andes (in South America) is the longest continental mountain range in the world, running along the western edge of the continent.",
  },
  {
    id: "gg-p-50", section: "gk", topic: "Geography", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The largest desert in the world (of any type) is the ____",
    options: ["Antarctic (cold) Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"], correct: 0,
    explanation: "By area, the largest desert in the world is the Antarctic Desert (a cold, polar desert). Among hot deserts, the Sahara is the largest.",
  },
];
