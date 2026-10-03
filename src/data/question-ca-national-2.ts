/**
 * Current affairs: national & international, second set (Sep 2025 to Sep 2026).
 * section "gk", topic "Current affairs", shared across exam levels.
 * Every fact was checked against the source noted above it. Re-verify each exam cycle.
 */
import type { Question } from "./questions";

export const caNational2Bank: Question[] = [
  // ---------------- Beginner (headline facts) ----------------

  // src: https://www.newsonair.gov.in/timor-leste-joins-asean-as-11th-member (26 Oct 2025)
  {
    id: "ca2-b-01", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which country became the 11th member of ASEAN at the 47th ASEAN Summit in Kuala Lumpur in October 2025?",
    options: ["Timor-Leste", "Papua New Guinea", "Sri Lanka", "Bhutan"], correct: 0,
    explanation: "Timor-Leste was formally admitted as ASEAN's 11th member on 26 October 2025 at the 47th ASEAN Summit in Kuala Lumpur, Malaysia. It was the first new member since Cambodia joined in 1999.",
  },
  // src: https://www.consilium.europa.eu/en/meetings/international-summit/2026/06/15-17/ (Jun 2026)
  {
    id: "ca2-b-02", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The G7 Leaders' Summit of June 2026 was held at Evian-les-Bains. Which country hosted it?",
    options: ["Italy", "Canada", "France", "Germany"], correct: 2,
    explanation: "France hosted the G7 summit at Evian-les-Bains from 15 to 17 June 2026. India was among the outreach countries invited, along with Brazil, Egypt, Kenya and the Republic of Korea.",
  },
  // src: https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2026/07/08/the-ankara-summit-declaration (8 Jul 2026)
  {
    id: "ca2-b-03", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The NATO Summit of July 2026 was held in which city?",
    options: ["The Hague", "Ankara", "Washington, D.C.", "Vilnius"], correct: 1,
    explanation: "The 2026 NATO Summit was held in Ankara, Turkiye, on 7 and 8 July 2026, and ended with the Ankara Summit Declaration. The 2025 summit was held in The Hague.",
  },
  // src: https://www.sanews.gov.za/south-africa/brics-summit-concludes-adoption-new-delhi-declaration-0 (Sep 2026)
  {
    id: "ca2-b-04", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which city hosted the 18th BRICS Summit on 12 and 13 September 2026?",
    options: ["Rio de Janeiro", "Kazan", "Johannesburg", "New Delhi"], correct: 3,
    explanation: "India hosted the 18th BRICS Summit at Bharat Mandapam, New Delhi, on 12 and 13 September 2026, where leaders adopted the New Delhi Declaration. Brazil hosted the 2025 summit in Rio de Janeiro.",
  },
  // src: https://eng.sectsco.org/20260901/2493609.html (1 Sep 2026)
  {
    id: "ca2-b-05", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The 26th meeting of the SCO Council of Heads of State, held on 1 September 2026, took place in which city?",
    options: ["Bishkek", "Tianjin", "Astana", "Tashkent"], correct: 0,
    explanation: "The SCO Heads of State Council met in Bishkek, Kyrgyzstan, on 1 September 2026 and adopted the Bishkek Declaration. The 2025 summit was held in Tianjin, China.",
  },
  // src: https://janegoodall.org/jane-goodall-renowned-ethologist-conservationist-and-animal-behavior-expert-passes-away-at-age-91/ (1 Oct 2025)
  {
    id: "ca2-b-06", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Jane Goodall, who died on 1 October 2025 at the age of 91, was world famous for her long-term study of which animals?",
    options: ["Gorillas", "Chimpanzees", "Orangutans", "Elephants"], correct: 1,
    explanation: "British primatologist Jane Goodall died on 1 October 2025 at 91. Her research on wild chimpanzees at Gombe in Tanzania spanned more than 60 years, and she was a UN Messenger of Peace from 2002.",
  },
  // src: https://www.newsonair.gov.in/legendary-actor-dharmendra-passes-away/ (24 Nov 2025)
  {
    id: "ca2-b-07", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which veteran Hindi film actor died in Mumbai on 24 November 2025 at the age of 89?",
    options: ["Manoj Kumar", "Jeetendra", "Dharmendra", "Rajesh Khanna"], correct: 2,
    explanation: "Dharmendra died at his Mumbai home on 24 November 2025, aged 89, after a career of about 65 years and more than 300 films. He was awarded the Padma Vibhushan posthumously in January 2026.",
  },
  // src: https://www.newsonair.gov.in/singer-zubeen-garg-cremated-with-state-honours-at-his-native-village-in-assam (Sep 2025)
  {
    id: "ca2-b-08", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Zubeen Garg, the popular singer who died in Singapore in September 2025, was known as the voice of which state?",
    options: ["Manipur", "Meghalaya", "West Bengal", "Assam"], correct: 3,
    explanation: "Zubeen Garg, 52, died on 19 September 2025 in a sea swimming accident in Singapore, where he had gone for the North East India Festival. He was cremated with state honours in Assam.",
  },
  // src: https://www.newsonair.gov.in/sushila-karki-sworn-in-as-nepals-first-woman-prime-minister (13 Sep 2025)
  {
    id: "ca2-b-09", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was sworn in as Nepal's first woman Prime Minister (interim) in September 2025?",
    options: ["Sushila Karki", "Bidya Devi Bhandari", "Arzu Rana Deuba", "Pampha Bhusal"], correct: 0,
    explanation: "Sushila Karki, a former Chief Justice of Nepal, was sworn in as interim Prime Minister on 12 September 2025 after youth-led protests. She was also Nepal's first woman Chief Justice.",
  },
  // src: https://www.newsonair.gov.in/bangladesh-bnp-chief-tarique-rahman-sworn-in-as-prime-minister (17 Feb 2026)
  {
    id: "ca2-b-10", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was sworn in as Prime Minister of Bangladesh on 17 February 2026, after the parliamentary election?",
    options: ["Muhammad Yunus", "Mirza Fakhrul Islam Alamgir", "Tarique Rahman", "Shafiqur Rahman"], correct: 2,
    explanation: "Tarique Rahman, chairman of the Bangladesh Nationalist Party (BNP), took oath as Prime Minister on 17 February 2026 after his party won the February 2026 election. He is the son of former PM Khaleda Zia.",
  },
  // src: https://www.npr.org/2026/02/02/nx-s1-5693043/grammys-2026-bad-bunny-album-of-the-year (2 Feb 2026)
  {
    id: "ca2-b-11", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which artist won Album of the Year at the 68th Grammy Awards in February 2026?",
    options: ["Taylor Swift", "Bad Bunny", "Beyonce", "Kendrick Lamar"], correct: 1,
    explanation: "Bad Bunny won Album of the Year for 'Debi Tirar Mas Fotos' at the 68th Grammy Awards on 1 February 2026. It was the first primarily Spanish-language album to win the top prize.",
  },
  // src: https://variety.com/2026/film/news/cannes-film-festival-reveals-2026-award-winners-1236757655/ (May 2026)
  {
    id: "ca2-b-12", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which film won the Palme d'Or at the 79th Cannes Film Festival in May 2026?",
    options: ["Anora", "Woman Unknown", "It Was Just an Accident", "Fjord"], correct: 3,
    explanation: "'Fjord', directed by Romanian filmmaker Cristian Mungiu, won the Palme d'Or at Cannes 2026. It was Mungiu's second Palme d'Or, after '4 Months, 3 Weeks and 2 Days' (2007).",
  },
  // src: https://www.pulitzer.org/prize-winners-by-year/2026 (4 May 2026)
  {
    id: "ca2-b-13", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which novel won the Pulitzer Prize for Fiction 2026?",
    options: ["Angel Down", "James", "Audition", "Stag Dance"], correct: 0,
    explanation: "'Angel Down' by Daniel Kraus, a World War I novel told in a single sentence, won the 2026 Pulitzer Prize for Fiction, announced on 4 May 2026. 'James' by Percival Everett won in 2025.",
  },
  // src: https://www.newsonair.gov.in/sahitya-akademi-announces-winners-of-sahitya-akademi-awards-2025-in-24-indian-languages (16 Mar 2026)
  {
    id: "ca2-b-14", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the Sahitya Akademi Award 2025 for Hindi, for the memoir 'Jeete Jee Allahabad'?",
    options: ["Gagan Gill", "Chitra Mudgal", "Mamta Kalia", "Mridula Garg"], correct: 2,
    explanation: "Mamta Kalia won the Sahitya Akademi Award 2025 (Hindi) for her memoir 'Jeete Jee Allahabad'. The Akademi announced awards in 24 languages in March 2026; each carries Rs 1 lakh, a copper plaque and a shawl.",
  },
  // src: https://www.educategirls.ngo/ramon-magsaysay-award-2025/ (Aug 2025)
  {
    id: "ca2-b-15", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which organisation became the first Indian organisation to win the Ramon Magsaysay Award, as a 2025 awardee?",
    options: ["Pratham", "Educate Girls", "SEWA", "Akshaya Patra Foundation"], correct: 1,
    explanation: "Educate Girls, founded by Safeena Husain in 2007, was named a 2025 Ramon Magsaysay awardee for its work bringing out-of-school girls back to school. It is the first Indian organisation to receive the award.",
  },
  // src: https://www.atptour.com/en/news/alcaraz-laureus-world-sportsman-of-the-year-2026 (Apr 2026)
  {
    id: "ca2-b-16", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was named Laureus World Sportsman of the Year at the 2026 Laureus World Sports Awards in Madrid?",
    options: ["Jannik Sinner", "Mondo Duplantis", "Tadej Pogacar", "Carlos Alcaraz"], correct: 3,
    explanation: "Spanish tennis player Carlos Alcaraz won Laureus World Sportsman of the Year in April 2026 for his 2025 season, in which he won the French Open and US Open. Aryna Sabalenka won the Sportswoman award.",
  },
  // src: https://www.usopen.org/en_US/news/articles/2026-09-13/alexander_zverev_defeats_ben_shelton_to_win_2026_us_open.html (13 Sep 2026)
  {
    id: "ca2-b-17", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the men's singles title at the US Open 2026, beating Ben Shelton in the final?",
    options: ["Alexander Zverev", "Jannik Sinner", "Carlos Alcaraz", "Taylor Fritz"], correct: 0,
    explanation: "Germany's Alexander Zverev beat Ben Shelton of the USA 6-3, 7-6, 5-7, 6-2 in the US Open 2026 final. It was Zverev's second Grand Slam title, after the French Open 2026.",
  },
  // src: https://ausopen.com/articles/news/resilient-rybakina-beats-sabalenka-ao-2026-title (31 Jan 2026)
  {
    id: "ca2-b-18", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the women's singles title at the Australian Open 2026?",
    options: ["Aryna Sabalenka", "Coco Gauff", "Elena Rybakina", "Iga Swiatek"], correct: 2,
    explanation: "Elena Rybakina of Kazakhstan beat Aryna Sabalenka 6-4, 4-6, 6-4 in the final on 31 January 2026. It was her second Grand Slam title after Wimbledon 2022.",
  },
  // src: https://www.olympics.com/en/news/french-open-2026-roland-garros-live-updates-womens-singles-final-mirra-andreeva-maja-chwalinska (6 Jun 2026)
  {
    id: "ca2-b-19", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the women's singles title at the French Open (Roland Garros) 2026, her first Grand Slam?",
    options: ["Coco Gauff", "Mirra Andreeva", "Jasmine Paolini", "Elena Rybakina"], correct: 1,
    explanation: "19-year-old Mirra Andreeva beat Poland's Maja Chwalinska 6-3, 6-3 in the final on 6 June 2026. She became the first teenager to win the French Open women's title since Iga Swiatek in 2020.",
  },
  // src: https://www.olympics.com/en/news/football-uefa-mens-champions-league-final-2026-arsenal-psg-results (30 May 2026)
  {
    id: "ca2-b-20", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which club won the UEFA Champions League 2025-26, beating Arsenal on penalties in the final at Budapest?",
    options: ["Real Madrid", "Bayern Munich", "Inter Milan", "Paris Saint-Germain"], correct: 3,
    explanation: "Paris Saint-Germain drew 1-1 with Arsenal and won the shoot-out 4-3 at the Puskas Arena, Budapest, on 30 May 2026. PSG retained the title they first won in 2025.",
  },
  // src: https://www.fia.com/news/f1-norris-crowned-fia-formula-one-world-champion-verstappen-takes-abu-dhabi-win (Dec 2025)
  {
    id: "ca2-b-21", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the 2025 Formula One World Drivers' Championship?",
    options: ["Lando Norris", "Max Verstappen", "Oscar Piastri", "Lewis Hamilton"], correct: 0,
    explanation: "McLaren's Lando Norris clinched his first F1 world title at the Abu Dhabi season finale in December 2025, finishing two points ahead of Max Verstappen.",
  },
  // src: https://www.npr.org/2026/07/26/nx-s1-5908503/tadej-pogacar-tour-de-france-2026-winner-wildfires (26 Jul 2026)
  {
    id: "ca2-b-22", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the Tour de France 2026 cycling race, his fifth Tour title?",
    options: ["Jonas Vingegaard", "Remco Evenepoel", "Tadej Pogacar", "Isaac del Toro"], correct: 2,
    explanation: "Slovenia's Tadej Pogacar won the Tour de France 2026, his fifth title, equalling the record held by Anquetil, Merckx, Hinault and Indurain. Remco Evenepoel finished second.",
  },
  // src: https://www.olympics.com/en/news/fih-hockey-world-cup-2026-germany-defeat-spain-mens-fih-hockey-world-cup-title (30 Aug 2026)
  {
    id: "ca2-b-23", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which country won the FIH Men's Hockey World Cup 2026, beating Spain 1-0 in the final?",
    options: ["Netherlands", "Germany", "Belgium", "Australia"], correct: 1,
    explanation: "Germany beat Spain 1-0 in the final on 30 August 2026 to retain the men's world title they won in 2023. Michel Struthoff scored the winning goal.",
  },
  // src: https://www.newsonair.gov.in/architect-frank-gehry-passs-away (6 Dec 2025)
  {
    id: "ca2-b-24", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Frank Gehry, the architect who died in December 2025 at 96, designed which famous museum?",
    options: ["Louvre Pyramid, Paris", "Tate Modern, London", "Museum of the Future, Dubai", "Guggenheim Museum, Bilbao"], correct: 3,
    explanation: "Canadian-born American architect Frank Gehry died on 5 December 2025 at 96. His best-known works include the Guggenheim Museum in Bilbao, Spain, and the Walt Disney Concert Hall in Los Angeles.",
  },
  // src: https://www.newsonair.gov.in/giorgio-armani-billionaire-designer-who-redefined-italian-elegance-dies-at-91 (4 Sep 2025)
  {
    id: "ca2-b-25", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Giorgio Armani, who died in September 2025 at the age of 91, was a famous name in which field?",
    options: ["Fashion design", "Opera singing", "Film direction", "Motor racing"], correct: 0,
    explanation: "Italian fashion designer Giorgio Armani died at his home in Milan on 4 September 2025, aged 91. He founded the Armani fashion house in 1975.",
  },
  // src: https://theprint.in/india/ex-kenya-pm-raila-odinga-dies-in-kerala/2764818/ (15 Oct 2025)
  {
    id: "ca2-b-26", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Raila Odinga, who died in Kerala in October 2025 while undergoing Ayurvedic treatment, was a former Prime Minister of which country?",
    options: ["Tanzania", "Uganda", "Kenya", "Ethiopia"], correct: 2,
    explanation: "Former Kenyan Prime Minister Raila Odinga, 80, died of a cardiac arrest on 15 October 2025 at Koothattukulam in Ernakulam district, Kerala. He was a leading figure in Kenyan politics for decades.",
  },
  // src: https://www.pritzkerprize.com/laureates/smiljan-radic-clarke (Mar 2026)
  {
    id: "ca2-b-27", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Smiljan Radic Clarke, winner of the Pritzker Architecture Prize 2026, is an architect from which country?",
    options: ["Argentina", "Chile", "Spain", "Mexico"], correct: 1,
    explanation: "Chilean architect Smiljan Radic Clarke, based in Santiago, was named the 55th Pritzker laureate in March 2026. The Pritzker is often called the Nobel Prize of architecture.",
  },
  // src: https://www.screendaily.com/news/woman-unknown-wins-golden-lion-at-venice-film-festival-2026/5220360.article (Sep 2026)
  {
    id: "ca2-b-28", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which film won the Golden Lion at the 83rd Venice International Film Festival in September 2026?",
    options: ["Fjord", "Father Mother Sister Brother", "The Brutalist", "Woman Unknown"], correct: 3,
    explanation: "'Woman Unknown', directed by Danish filmmaker May el-Toukhy, won the Golden Lion at Venice 2026. It is a psychological drama set in Denmark in the summer of 1945.",
  },
  // src: https://president.ie/en/diary/details/inauguration-of-president-catherine-connolly (11 Nov 2025)
  {
    id: "ca2-b-29", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was inaugurated as the 10th President of Ireland on 11 November 2025?",
    options: ["Catherine Connolly", "Mary McAleese", "Heather Humphreys", "Michael D. Higgins"], correct: 0,
    explanation: "Catherine Connolly was inaugurated as Ireland's 10th President on 11 November 2025, succeeding Michael D. Higgins. She is Ireland's third woman President, after Mary Robinson and Mary McAleese.",
  },
  // src: https://www.newsonair.gov.in/renowned-kannada-writer-dr-s-l-bhyrappa-passes-away-in-bengaluru (24 Sep 2025)
  {
    id: "ca2-b-30", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "S.L. Bhyrappa, the noted novelist who died in Bengaluru on 24 September 2025, wrote mainly in which language?",
    options: ["Telugu", "Tamil", "Kannada", "Malayalam"], correct: 2,
    explanation: "Kannada novelist S.L. Bhyrappa died in Bengaluru on 24 September 2025, aged 94. A Padma Bhushan and Saraswati Samman recipient, he was among the best-selling writers in Kannada.",
  },

  // ---------------- Proficient (finer details) ----------------
  // src: https://thediplomat.com/2025/10/history-is-made-timor-leste-becomes-aseans-11th-member/ (Oct 2025)
  {
    id: "ca2-p-01", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Timor-Leste, admitted to ASEAN in October 2025, was the first new member since which country joined the grouping in 1999?",
    options: ["Myanmar", "Cambodia", "Laos", "Brunei"], correct: 1,
    explanation: "Timor-Leste became ASEAN's 11th member on 26 October 2025, the first addition since Cambodia in 1999. It had applied in 2011 and was granted observer status in 2022.",
  },
  // src: https://www.drishtiias.com/daily-updates/daily-news-analysis/18th-brics-summit-2026-adoption-of-the-new-delhi-declaration (Sep 2026)
  {
    id: "ca2-p-02", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was the theme of the 18th BRICS Summit held in New Delhi in September 2026?",
    options: ["Strengthening Multilateralism for Just Global Development and Security", "BRICS and Africa: Partnership for Mutually Accelerated Growth", "Strengthening Global South Cooperation for More Inclusive and Sustainable Governance", "Building for Resilience, Innovation, Cooperation and Sustainability"], correct: 3,
    explanation: "India's 2026 BRICS chairship ran under the theme 'Building for Resilience, Innovation, Cooperation and Sustainability'. The summit on 12 and 13 September 2026 adopted the New Delhi Declaration.",
  },
  // src: https://eng.sectsco.org/20260901/2493609.html (1 Sep 2026)
  {
    id: "ca2-p-03", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "At the end of the SCO summit in Bishkek in September 2026, which country took over the SCO chairmanship for 2026-27?",
    options: ["Pakistan", "India", "Tajikistan", "Belarus"], correct: 0,
    explanation: "Kyrgyzstan handed the rotating SCO chairmanship for 2026-27 to Pakistan at the Bishkek meeting on 1 September 2026. The summit approved 28 documents, including the Bishkek Declaration.",
  },
  // src: https://www.nobelprize.org/prizes/economic-sciences/2025/press-release/ (13 Oct 2025)
  {
    id: "ca2-p-04", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Joel Mokyr, Philippe Aghion and Peter Howitt shared the 2025 Nobel Prize in Economic Sciences for explaining ____.",
    options: ["how institutions shape national prosperity", "the role of banks in financial crises", "innovation-driven economic growth", "women's labour market outcomes"], correct: 2,
    explanation: "The 2025 economics prize, announced on 13 October 2025, went half to Joel Mokyr and half jointly to Philippe Aghion and Peter Howitt for work on innovation-driven growth and 'creative destruction'. The 2024 prize was for research on institutions and prosperity.",
  },
  // src: https://abelprize.no/article/2026/gerd-faltings-awarded-2026-abel-prize (Mar 2026)
  {
    id: "ca2-p-05", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who was awarded the Abel Prize 2026, often described as the Nobel of mathematics?",
    options: ["Masaki Kashiwara", "Gerd Faltings", "Michel Talagrand", "Terence Tao"], correct: 1,
    explanation: "German mathematician Gerd Faltings of the Max Planck Institute for Mathematics, Bonn, won the Abel Prize 2026 for work in arithmetic geometry, including resolving the Mordell conjecture. He is the first German to win the prize.",
  },
  // src: https://www.nbcsports.com/olympics/news/laureus-awards-2026-winners-list (Apr 2026)
  {
    id: "ca2-p-06", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who was named Laureus World Sportswoman of the Year at the 2026 Laureus Awards?",
    options: ["Sydney McLaughlin-Levrone", "Katie Ledecky", "Aryna Sabalenka", "Faith Kipyegon"], correct: 2,
    explanation: "Belarusian tennis player Aryna Sabalenka won Laureus World Sportswoman of the Year at the April 2026 ceremony in Madrid, while Carlos Alcaraz won the Sportsman award. Tennis players took both top individual awards.",
  },
  // src: https://www.olympics.com/en/news/fih-hockey-world-cup-2026-final-argentina-beat-netherlands-3-1-shootout (29 Aug 2026)
  {
    id: "ca2-p-07", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which team won the FIH Women's Hockey World Cup 2026, beating the Netherlands in a shoot-out in the final?",
    options: ["Australia", "Germany", "Belgium", "Argentina"], correct: 3,
    explanation: "Argentina drew 1-1 with the Netherlands and won the shoot-out 3-1 in the final on 29 August 2026. It was Argentina's first global title in 16 years.",
  },
  // src: https://ausopen.com/articles/news/major-milestone-alcaraz-completes-slam-set-ao-2026-title (1 Feb 2026)
  {
    id: "ca2-p-08", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Carlos Alcaraz completed a career Grand Slam by winning the Australian Open 2026. Whom did he beat in the final?",
    options: ["Novak Djokovic", "Jannik Sinner", "Alexander Zverev", "Daniil Medvedev"], correct: 0,
    explanation: "Alcaraz beat Novak Djokovic 2-6, 6-2, 6-3, 7-5 in the Australian Open 2026 final. At 22, he became the youngest man to complete the career Grand Slam in singles.",
  },
  // src: https://www.npr.org/2026/06/07/g-s1-126803/french-open-2026-alexander-zverev-grand-slam-title (7 Jun 2026)
  {
    id: "ca2-p-09", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "By winning the French Open 2026, Alexander Zverev became the first German man to win a Grand Slam singles title since ____.",
    options: ["Michael Stich", "Boris Becker", "Tommy Haas", "Gottfried von Cramm"], correct: 1,
    explanation: "Zverev beat Flavio Cobolli of Italy in five sets on 7 June 2026 for his first major title. He was the first German man to win a major singles title since Boris Becker at the 1996 Australian Open.",
  },
  // src: https://www.aljazeera.com/news/2026/3/27/nepals-youngest-premier-sworn-in-after-releasing-new-rap-song-about-unity (27 Mar 2026)
  {
    id: "ca2-p-10", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Balendra (Balen) Shah, sworn in as Nepal's youngest Prime Minister on 27 March 2026, leads which party?",
    options: ["Nepali Congress", "CPN (UML)", "Rastriya Swatantra Party", "Janata Samajbadi Party"], correct: 2,
    explanation: "Balendra Shah, 35, a former Mayor of Kathmandu, was sworn in on 27 March 2026 after the Rastriya Swatantra Party won 182 of 275 seats in the 5 March 2026 election. He is Nepal's first Madhesi Prime Minister.",
  },
  // src: https://www.npr.org/2025/12/14/nx-s1-5644074/chile-kast-right (14 Dec 2025)
  {
    id: "ca2-p-11", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Jose Antonio Kast won the presidential run-off election of December 2025 in which country?",
    options: ["Argentina", "Peru", "Colombia", "Chile"], correct: 3,
    explanation: "Jose Antonio Kast won Chile's presidential run-off on 14 December 2025 with over 58% of the vote, defeating Jeannette Jara. He took office on 11 March 2026.",
  },
  // src: https://www.newsonair.gov.in/former-bangladeshi-pm-khaleda-zia-passes-away-in-dhaka-pm-modi-expresses-grief (30 Dec 2025)
  {
    id: "ca2-p-12", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which former Prime Minister, the first woman to hold the post in her country, died in Dhaka on 30 December 2025?",
    options: ["Khaleda Zia", "Sheikh Hasina", "Sirimavo Bandaranaike", "Benazir Bhutto"], correct: 0,
    explanation: "Khaleda Zia, two-time Prime Minister of Bangladesh and long-time BNP chairperson, died in Dhaka on 30 December 2025, aged 80. Bangladesh declared three days of state mourning.",
  },
  // src: https://www.theweek.in/news/india/2025/10/24/who-is-piyush-pandey-indias-advertising-legend-padma-shri-recipient-dies-at-70.html (24 Oct 2025)
  {
    id: "ca2-p-13", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Advertising legend Piyush Pandey, who died in October 2025, spent more than four decades with which agency?",
    options: ["Lintas", "Ogilvy", "McCann", "Leo Burnett"], correct: 1,
    explanation: "Piyush Pandey, Padma Shri 2016, died on 23 October 2025 at 70. At Ogilvy India he created well-known campaigns for Fevicol, Cadbury and Asian Paints, and the 'Do Boond Zindagi Ki' polio campaign.",
  },
  // src: https://www.olympics.com/en/news/bwf-thomas-uber-cup-2026-republic-of-korea-stops-chinese-women-third-triumph-team-event-men (May 2026)
  {
    id: "ca2-p-14", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "China won the Thomas Cup 2026 badminton title at Horsens, Denmark. Which team did it beat in the final?",
    options: ["Indonesia", "Denmark", "France", "India"], correct: 2,
    explanation: "China beat France 3-1 in the Thomas Cup final in May 2026, its 13th title. In the Uber Cup (women), South Korea beat China 3-1 to win for the third time.",
  },
  // src: https://www.espncricinfo.com/series/ranji-trophy-2025-26-1492381/karnataka-vs-jammu-kashmir-final-1492524/match-report (28 Feb 2026)
  {
    id: "ca2-p-15", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which team won its maiden Ranji Trophy title in the 2025-26 season, beating Karnataka in the final at Hubballi?",
    options: ["Kerala", "Vidarbha", "Madhya Pradesh", "Jammu and Kashmir"], correct: 3,
    explanation: "Jammu and Kashmir won the 2025-26 Ranji Trophy on 28 February 2026 on first-innings lead against eight-time champions Karnataka. It was J&K's first Ranji final and first title.",
  },
  // src: https://www.fih.hockey/fih-hockey-mens-junior-world-cup-tamil-nadu-/news/germany-win-record-extending-8thhockey-mens-junior-world-cup (Dec 2025)
  {
    id: "ca2-p-16", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "At the FIH Men's Junior Hockey World Cup 2025, held in Chennai and Madurai, India won bronze by beating which team?",
    options: ["Argentina", "Spain", "Netherlands", "Belgium"], correct: 0,
    explanation: "India came back to beat Argentina 4-2 in the bronze medal match in December 2025. Germany beat Spain on penalties in the final for a record eighth Junior World Cup title.",
  },
  // src: https://www.espncricinfo.com/series/wpl-2025-26-1510059/delhi-capitals-women-vs-royal-challengers-bengaluru-women-final-1513703/live-match-blog (5 Feb 2026)
  {
    id: "ca2-p-17", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Royal Challengers Bengaluru won the Women's Premier League 2026 at Vadodara by beating which team in the final?",
    options: ["Mumbai Indians", "Delhi Capitals", "Gujarat Giants", "UP Warriorz"], correct: 1,
    explanation: "RCB chased 204 to beat Delhi Capitals by six wickets on 5 February 2026, the highest chase in WPL history, for their second title. Smriti Mandhana (87) and Georgia Voll (79) led the chase.",
  },
  // src: https://www.downtoearth.org.in/governance/hamburg-sustainability-conference-india-climbs-to-its-highest-ever-rank-in-the-2026-un-sdg-index-but-hunger-remains-a-major-challenge (Jun 2026)
  {
    id: "ca2-p-18", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was India's rank in the SDG Index of the Sustainable Development Report 2026?",
    options: ["99th", "109th", "94th", "112th"], correct: 2,
    explanation: "India ranked 94th of 167 countries with a score of 68.3, its best position so far, up from 99th in 2025. The report is published by the UN Sustainable Development Solutions Network (SDSN).",
  },
  // src: https://thebridge.in/others/national-sports-awards-2025-khel-ratna-57289 (18 Aug 2026)
  {
    id: "ca2-p-19", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "In the National Sports Awards 2025, announced in August 2026, how many sportspersons were selected for the Arjuna Award?",
    options: ["26", "32", "12", "17"], correct: 3,
    explanation: "The Sports Ministry named 17 Arjuna awardees, and no one was named for the Major Dhyan Chand Khel Ratna. The selection committee was chaired by Justice (Retd.) Arun Kumar Mishra.",
  },
  // src: https://www.unesco.org/en/articles/ancient-buddhist-site-sarnath-inscribed-unesco-world-heritage-list (25 Jul 2026)
  {
    id: "ca2-p-20", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "With the inscription of the Ancient Buddhist Site of Sarnath (Uttar Pradesh) in July 2026, how many World Heritage Sites does India have?",
    options: ["43", "45", "44", "46"], correct: 1,
    explanation: "Sarnath was inscribed on the World Heritage List on 25 July 2026 at the 48th session of the World Heritage Committee in Busan, Republic of Korea, taking India's total to 45. The Buddha gave his first sermon at Sarnath.",
  },
  // src: https://www.newsonair.gov.in/unesco-adds-deepavali-to-intangible-cultural-heritage-list (10 Dec 2025)
  {
    id: "ca2-p-21", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Deepavali was added to UNESCO's Intangible Cultural Heritage list in December 2025 at a committee session held at which venue?",
    options: ["Bharat Mandapam, New Delhi", "Yashobhoomi, New Delhi", "Red Fort, New Delhi", "Kartavya Path, New Delhi"], correct: 2,
    explanation: "Deepavali was inscribed on 10 December 2025 at the 20th session of UNESCO's Intangible Cultural Heritage committee, held at the Red Fort, New Delhi. It is India's 16th element on the Representative List.",
  },
  // src: https://thebookerprizes.com/the-booker-library/books/the-loneliness-of-sonia-and-sunny (Sep 2025)
  {
    id: "ca2-p-22", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which Indian-origin author was shortlisted for the Booker Prize 2025 for 'The Loneliness of Sonia and Sunny'?",
    options: ["Jhumpa Lahiri", "Anita Desai", "Arundhati Roy", "Kiran Desai"], correct: 3,
    explanation: "Kiran Desai's 'The Loneliness of Sonia and Sunny' was on the six-book Booker 2025 shortlist; the prize went to David Szalay's 'Flesh'. Desai had won the Booker in 2006 for 'The Inheritance of Loss'.",
  },
  // src: https://www.aljazeera.com/sports/2025/9/18/walcott-wins-javelin-gold-as-chopra-nadeem-disappoint-at-athletics-worlds (18 Sep 2025)
  {
    id: "ca2-p-23", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which Indian javelin thrower finished fourth, the best Indian finish, in the men's javelin final at the 2025 World Athletics Championships in Tokyo?",
    options: ["Sachin Yadav", "Neeraj Chopra", "Kishore Jena", "Rohit Yadav"], correct: 0,
    explanation: "Sachin Yadav finished fourth with a personal best of 86.27 m, while defending champion Neeraj Chopra was eighth. Keshorn Walcott of Trinidad and Tobago won gold with 88.16 m.",
  },
  // src: https://thefederal.com/category/news/padma-awards-2026-full-winners-list-226932 (Jan 2026)
  {
    id: "ca2-p-24", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which Hindustani classical violinist was among the five Padma Vibhushan awardees of 2026?",
    options: ["L. Subramaniam", "N. Rajam", "Kala Ramnath", "M.S. Gopalakrishnan"], correct: 1,
    explanation: "Violinist N. Rajam received the Padma Vibhushan 2026 in the Art category. The other Vibhushan awardees were Dharmendra (posthumous), V.S. Achuthanandan (posthumous), K.T. Thomas and P. Narayanan.",
  },
  // src: https://www.educategirls.ngo/ramon-magsaysay-award-2025/ (Aug 2025)
  {
    id: "ca2-p-25", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who founded Educate Girls, the first Indian organisation to receive the Ramon Magsaysay Award (2025)?",
    options: ["Aruna Roy", "Sudha Murty", "Safeena Husain", "Ela Bhatt"], correct: 2,
    explanation: "Safeena Husain founded Educate Girls (Foundation to Educate Girls Globally) in 2007. The organisation works in rural areas to bring out-of-school girls back to school and has reached over two million girls.",
  },
  // src: https://gulfnews.com/world/asia/india/padma-awards-2026-dharmendra-vs-achuthanandan-get-padma-vibhushan-posthumously-1.500420249 (Jan 2026)
  {
    id: "ca2-p-26", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which former Chief Minister of Kerala was awarded the Padma Vibhushan posthumously in 2026?",
    options: ["Oommen Chandy", "E.K. Nayanar", "K. Karunakaran", "V.S. Achuthanandan"], correct: 3,
    explanation: "Former Kerala Chief Minister V.S. Achuthanandan and actor Dharmendra were the two posthumous Padma Vibhushan awardees in the 2026 list, announced on the eve of the 77th Republic Day.",
  },
  // src: https://www.screendaily.com/news/cristian-mungius-fjord-wins-palme-dor-at-2026-cannes-film-festival/5217162.article (May 2026)
  {
    id: "ca2-p-27", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Cristian Mungiu, whose 'Fjord' won the Palme d'Or 2026, had earlier won the Palme d'Or for which film?",
    options: ["4 Months, 3 Weeks and 2 Days", "Beyond the Hills", "Graduation", "R.M.N."], correct: 0,
    explanation: "Romanian director Cristian Mungiu first won the Palme d'Or in 2007 for '4 Months, 3 Weeks and 2 Days'. With 'Fjord' (2026), starring Sebastian Stan and Renate Reinsve, he became the tenth director to win it twice.",
  },
  // src: https://www.npr.org/2026/02/02/nx-s1-5693043/grammys-2026-bad-bunny-album-of-the-year (2 Feb 2026)
  {
    id: "ca2-p-28", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Bad Bunny's 'Debi Tirar Mas Fotos' made history at the 2026 Grammys as the first ____ to win Album of the Year.",
    options: ["debut album", "live album", "primarily Spanish-language album", "independently released album"], correct: 2,
    explanation: "At the 68th Grammy Awards on 1 February 2026, Bad Bunny's 'Debi Tirar Mas Fotos' became the first primarily Spanish-language album to win Album of the Year. He won three Grammys that night.",
  },
  // src: https://www.nbcnews.com/world/india/zubeen-garg-singer-ya-ali-dies-scuba-diving-incident-rcna232815 (Sep 2025)
  {
    id: "ca2-p-29", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Zubeen Garg, who died in Singapore in September 2025, is best known to Hindi film audiences for which song?",
    options: ["Kajra Re", "Tum Hi Ho", "Chaiyya Chaiyya", "Ya Ali"], correct: 3,
    explanation: "Zubeen Garg, known as the voice of Assam, sang the hit Hindi film song 'Ya Ali'. He died on 19 September 2025 in Singapore and was cremated with state honours at Kamarkuchi in Kamrup district, near Guwahati.",
  },
  // src: https://www.labiennale.org/en/news/george-clooney-golden-lion-lifetime-achievement (Sep 2026)
  {
    id: "ca2-p-30", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which actor-director received the Golden Lion for Lifetime Achievement at the 83rd Venice Film Festival in September 2026?",
    options: ["Tom Hanks", "George Clooney", "Denzel Washington", "Brad Pitt"], correct: 1,
    explanation: "La Biennale di Venezia gave George Clooney the Golden Lion for Lifetime Achievement at the 83rd Venice Film Festival (2 to 12 September 2026). The festival's top prize, the Golden Lion for Best Film, went to 'Woman Unknown'.",
  },
];

export const caNational2Hi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  "ca2-b-01": {
    stem: "अक्टूबर 2025 में कुआलालंपुर में हुए 47वें आसियान शिखर सम्मेलन में कौन-सा देश आसियान का 11वाँ सदस्य बना?",
    options: ["तिमोर-लेस्ते", "पापुआ न्यू गिनी", "श्रीलंका", "भूटान"],
    explanation: "26 अक्टूबर 2025 को कुआलालंपुर (मलेशिया) में 47वें आसियान शिखर सम्मेलन में तिमोर-लेस्ते को औपचारिक रूप से आसियान का 11वाँ सदस्य बनाया गया। 1999 में कंबोडिया के बाद यह पहला नया सदस्य है।",
  },
  "ca2-b-02": {
    stem: "जून 2026 का G7 शिखर सम्मेलन एवियन-लेस-बेन्स में हुआ। इसकी मेज़बानी किस देश ने की?",
    options: ["इटली", "कनाडा", "फ्रांस", "जर्मनी"],
    explanation: "फ्रांस ने 15 से 17 जून 2026 तक एवियन-लेस-बेन्स में G7 शिखर सम्मेलन की मेज़बानी की। भारत को ब्राज़ील, मिस्र, केन्या और दक्षिण कोरिया के साथ आउटरीच देश के रूप में आमंत्रित किया गया था।",
  },
  "ca2-b-03": {
    stem: "जुलाई 2026 का नाटो शिखर सम्मेलन किस शहर में हुआ?",
    options: ["द हेग", "अंकारा", "वॉशिंगटन डी.सी.", "विलनियस"],
    explanation: "2026 का नाटो शिखर सम्मेलन 7 और 8 जुलाई 2026 को अंकारा (तुर्किये) में हुआ और 'अंकारा शिखर घोषणा' के साथ समाप्त हुआ। 2025 का सम्मेलन द हेग में हुआ था।",
  },
  "ca2-b-04": {
    stem: "12 और 13 सितंबर 2026 को 18वें ब्रिक्स शिखर सम्मेलन की मेज़बानी किस शहर ने की?",
    options: ["रियो डी जनेरियो", "कज़ान", "जोहान्सबर्ग", "नई दिल्ली"],
    explanation: "भारत ने 12 और 13 सितंबर 2026 को भारत मंडपम, नई दिल्ली में 18वें ब्रिक्स शिखर सम्मेलन की मेज़बानी की, जहाँ 'नई दिल्ली घोषणा' अपनाई गई। 2025 का सम्मेलन ब्राज़ील ने रियो डी जनेरियो में आयोजित किया था।",
  },
  "ca2-b-05": {
    stem: "1 सितंबर 2026 को SCO राष्ट्राध्यक्ष परिषद की 26वीं बैठक किस शहर में हुई?",
    options: ["बिश्केक", "तियानजिन", "अस्ताना", "ताशकंद"],
    explanation: "SCO राष्ट्राध्यक्ष परिषद की बैठक 1 सितंबर 2026 को बिश्केक (किर्गिस्तान) में हुई और 'बिश्केक घोषणा' अपनाई गई। 2025 का सम्मेलन तियानजिन (चीन) में हुआ था।",
  },
  "ca2-b-06": {
    stem: "1 अक्टूबर 2025 को 91 वर्ष की आयु में दिवंगत जेन गुडॉल किन जानवरों के दीर्घकालिक अध्ययन के लिए विश्व प्रसिद्ध थीं?",
    options: ["गोरिल्ला", "चिम्पैंज़ी", "ओरांगउटान", "हाथी"],
    explanation: "ब्रिटिश प्राइमेटोलॉजिस्ट जेन गुडॉल का 1 अक्टूबर 2025 को 91 वर्ष की आयु में निधन हुआ। तंज़ानिया के गोम्बे में जंगली चिम्पैंज़ियों पर उनका शोध 60 से अधिक वर्षों तक चला और वे 2002 से संयुक्त राष्ट्र शांतिदूत थीं।",
  },
  "ca2-b-07": {
    stem: "किस दिग्गज हिंदी फ़िल्म अभिनेता का 24 नवंबर 2025 को मुंबई में 89 वर्ष की आयु में निधन हुआ?",
    options: ["मनोज कुमार", "जीतेंद्र", "धर्मेंद्र", "राजेश खन्ना"],
    explanation: "धर्मेंद्र का 24 नवंबर 2025 को 89 वर्ष की आयु में मुंबई स्थित घर पर निधन हुआ। लगभग 65 वर्ष के करियर में उन्होंने 300 से अधिक फ़िल्में कीं। जनवरी 2026 में उन्हें मरणोपरांत पद्म विभूषण दिया गया।",
  },
  "ca2-b-08": {
    stem: "सितंबर 2025 में सिंगापुर में दिवंगत लोकप्रिय गायक ज़ुबीन गर्ग किस राज्य की आवाज़ के रूप में जाने जाते थे?",
    options: ["मणिपुर", "मेघालय", "पश्चिम बंगाल", "असम"],
    explanation: "52 वर्षीय ज़ुबीन गर्ग का 19 सितंबर 2025 को सिंगापुर में समुद्र में तैरते समय हुई दुर्घटना में निधन हुआ। वे वहाँ नॉर्थ ईस्ट इंडिया फ़ेस्टिवल के लिए गए थे। असम में राजकीय सम्मान के साथ उनका अंतिम संस्कार हुआ।",
  },
  "ca2-b-09": {
    stem: "सितंबर 2025 में नेपाल की पहली महिला (अंतरिम) प्रधानमंत्री के रूप में किसने शपथ ली?",
    options: ["सुशीला कार्की", "बिद्या देवी भंडारी", "आरज़ू राणा देउबा", "पम्फा भुसाल"],
    explanation: "नेपाल की पूर्व मुख्य न्यायाधीश सुशीला कार्की ने युवाओं के नेतृत्व वाले आंदोलन के बाद 12 सितंबर 2025 को अंतरिम प्रधानमंत्री पद की शपथ ली। वे नेपाल की पहली महिला मुख्य न्यायाधीश भी रह चुकी हैं।",
  },
  "ca2-b-10": {
    stem: "संसदीय चुनाव के बाद 17 फ़रवरी 2026 को बांग्लादेश के प्रधानमंत्री के रूप में किसने शपथ ली?",
    options: ["मुहम्मद यूनुस", "मिर्ज़ा फ़ख़रुल इस्लाम आलमगीर", "तारिक़ रहमान", "शफ़ीक़ुर रहमान"],
    explanation: "बांग्लादेश नेशनलिस्ट पार्टी (BNP) के अध्यक्ष तारिक़ रहमान ने फ़रवरी 2026 के चुनाव में पार्टी की जीत के बाद 17 फ़रवरी 2026 को प्रधानमंत्री पद की शपथ ली। वे पूर्व प्रधानमंत्री ख़ालिदा ज़िया के पुत्र हैं।",
  },
  "ca2-b-11": {
    stem: "फ़रवरी 2026 में 68वें ग्रैमी पुरस्कारों में 'एल्बम ऑफ़ द ईयर' किस कलाकार ने जीता?",
    options: ["टेलर स्विफ़्ट", "बैड बनी", "बियॉन्से", "केंड्रिक लैमर"],
    explanation: "बैड बनी ने 1 फ़रवरी 2026 को 68वें ग्रैमी पुरस्कारों में 'देबी तिरार मास फ़ोतोस' के लिए एल्बम ऑफ़ द ईयर जीता। यह शीर्ष पुरस्कार जीतने वाला पहला मुख्यतः स्पैनिश भाषा का एल्बम है।",
  },
  "ca2-b-12": {
    stem: "मई 2026 में 79वें कान फ़िल्म महोत्सव में 'पाम डी'ओर' किस फ़िल्म ने जीता?",
    options: ["अनोरा", "वुमन अननोन", "इट वॉज़ जस्ट एन एक्सीडेंट", "फ़्योर्ड"],
    explanation: "रोमानियाई फ़िल्मकार क्रिस्टियन मुंगियू की फ़िल्म 'फ़्योर्ड' ने कान 2026 में पाम डी'ओर जीता। '4 मंथ्स, 3 वीक्स एंड 2 डेज़' (2007) के बाद यह मुंगियू का दूसरा पाम डी'ओर है।",
  },
  "ca2-b-13": {
    stem: "कथा साहित्य (फ़िक्शन) का पुलित्ज़र पुरस्कार 2026 किस उपन्यास को मिला?",
    options: ["एंजेल डाउन", "जेम्स", "ऑडिशन", "स्टैग डांस"],
    explanation: "डेनियल क्रॉस के उपन्यास 'एंजेल डाउन' को, जो प्रथम विश्व युद्ध पर आधारित है और एक ही वाक्य में लिखा गया है, 4 मई 2026 को फ़िक्शन का पुलित्ज़र पुरस्कार मिला। 2025 में यह पुरस्कार पर्सिवल एवरेट की 'जेम्स' को मिला था।",
  },
  "ca2-b-14": {
    stem: "संस्मरण 'जीते जी इलाहाबाद' के लिए हिंदी का साहित्य अकादमी पुरस्कार 2025 किसे मिला?",
    options: ["गगन गिल", "चित्रा मुद्गल", "ममता कालिया", "मृदुला गर्ग"],
    explanation: "ममता कालिया को उनके संस्मरण 'जीते जी इलाहाबाद' के लिए हिंदी का साहित्य अकादमी पुरस्कार 2025 मिला। अकादमी ने मार्च 2026 में 24 भाषाओं के पुरस्कार घोषित किए; प्रत्येक में 1 लाख रुपये, ताम्रपत्र और शॉल दिया जाता है।",
  },
  "ca2-b-15": {
    stem: "2025 के पुरस्कार विजेता के रूप में रेमन मैग्सेसे पुरस्कार जीतने वाला पहला भारतीय संगठन कौन-सा बना?",
    options: ["प्रथम", "एजुकेट गर्ल्स", "सेवा (SEWA)", "अक्षय पात्र फ़ाउंडेशन"],
    explanation: "2007 में सफ़ीना हुसैन द्वारा स्थापित 'एजुकेट गर्ल्स' को स्कूल से बाहर की लड़कियों को वापस स्कूल लाने के काम के लिए 2025 का रेमन मैग्सेसे पुरस्कार मिला। यह पुरस्कार पाने वाला पहला भारतीय संगठन है।",
  },
  "ca2-b-16": {
    stem: "मैड्रिड में 2026 लॉरियस वर्ल्ड स्पोर्ट्स अवॉर्ड्स में 'वर्ल्ड स्पोर्ट्समैन ऑफ़ द ईयर' किसे चुना गया?",
    options: ["यानिक सिनर", "मोंडो डुप्लांटिस", "तादेज पोगाचार", "कार्लोस अल्कराज़"],
    explanation: "स्पेन के टेनिस खिलाड़ी कार्लोस अल्कराज़ को अप्रैल 2026 में उनके 2025 सत्र के लिए लॉरियस वर्ल्ड स्पोर्ट्समैन ऑफ़ द ईयर चुना गया, जिसमें उन्होंने फ़्रेंच ओपन और यूएस ओपन जीते थे। स्पोर्ट्सवुमन पुरस्कार आर्यना सबालेंका को मिला।",
  },
  "ca2-b-17": {
    stem: "यूएस ओपन 2026 के फ़ाइनल में बेन शेल्टन को हराकर पुरुष एकल ख़िताब किसने जीता?",
    options: ["अलेक्ज़ेंडर ज़्वेरेव", "यानिक सिनर", "कार्लोस अल्कराज़", "टेलर फ़्रिट्ज़"],
    explanation: "जर्मनी के अलेक्ज़ेंडर ज़्वेरेव ने यूएस ओपन 2026 के फ़ाइनल में अमेरिका के बेन शेल्टन को 6-3, 7-6, 5-7, 6-2 से हराया। फ़्रेंच ओपन 2026 के बाद यह उनका दूसरा ग्रैंड स्लैम ख़िताब था।",
  },
  "ca2-b-18": {
    stem: "ऑस्ट्रेलियन ओपन 2026 का महिला एकल ख़िताब किसने जीता?",
    options: ["आर्यना सबालेंका", "कोको गॉफ़", "एलेना रिबाकिना", "इगा श्वियोंतेक"],
    explanation: "कज़ाख़स्तान की एलेना रिबाकिना ने 31 जनवरी 2026 को फ़ाइनल में आर्यना सबालेंका को 6-4, 4-6, 6-4 से हराया। विंबलडन 2022 के बाद यह उनका दूसरा ग्रैंड स्लैम ख़िताब था।",
  },
  "ca2-b-19": {
    stem: "फ़्रेंच ओपन (रोलां गैरो) 2026 का महिला एकल ख़िताब, जो उनका पहला ग्रैंड स्लैम था, किसने जीता?",
    options: ["कोको गॉफ़", "मीरा आंद्रेयेवा", "जैस्मिन पाओलिनी", "एलेना रिबाकिना"],
    explanation: "19 वर्षीय मीरा आंद्रेयेवा ने 6 जून 2026 को फ़ाइनल में पोलैंड की माया ख्वालिंस्का को 6-3, 6-3 से हराया। 2020 में इगा श्वियोंतेक के बाद फ़्रेंच ओपन महिला ख़िताब जीतने वाली वे पहली किशोरी बनीं।",
  },
  "ca2-b-20": {
    stem: "बुडापेस्ट में फ़ाइनल में आर्सेनल को पेनल्टी शूटआउट में हराकर UEFA चैंपियंस लीग 2025-26 किस क्लब ने जीती?",
    options: ["रियल मैड्रिड", "बायर्न म्यूनिख", "इंटर मिलान", "पेरिस सेंट-जर्मेन"],
    explanation: "30 मई 2026 को बुडापेस्ट के पुस्कास एरेना में पेरिस सेंट-जर्मेन और आर्सेनल का मैच 1-1 से बराबर रहा और PSG ने शूटआउट 4-3 से जीता। PSG ने 2025 में पहली बार जीता ख़िताब बरकरार रखा।",
  },
  "ca2-b-21": {
    stem: "2025 की फ़ॉर्मूला वन वर्ल्ड ड्राइवर्स चैंपियनशिप किसने जीती?",
    options: ["लैंडो नॉरिस", "मैक्स वरस्टैपन", "ऑस्कर पियास्त्री", "लुईस हैमिल्टन"],
    explanation: "मैकलारेन के लैंडो नॉरिस ने दिसंबर 2025 में अबू धाबी की अंतिम रेस में अपना पहला F1 विश्व ख़िताब पक्का किया। वे मैक्स वरस्टैपन से दो अंक आगे रहे।",
  },
  "ca2-b-22": {
    stem: "टूर डी फ़्रांस 2026 साइकिल रेस, जो उनका पाँचवाँ टूर ख़िताब था, किसने जीती?",
    options: ["योनास विंगेगार्ड", "रेम्को एवेनपोल", "तादेज पोगाचार", "इसाक डेल तोरो"],
    explanation: "स्लोवेनिया के तादेज पोगाचार ने टूर डी फ़्रांस 2026 जीतकर अपना पाँचवाँ ख़िताब हासिल किया और आंकेतील, मर्क्स, इनो तथा इंदुरैन के रिकॉर्ड की बराबरी की। रेम्को एवेनपोल दूसरे स्थान पर रहे।",
  },
  "ca2-b-23": {
    stem: "फ़ाइनल में स्पेन को 1-0 से हराकर FIH पुरुष हॉकी विश्व कप 2026 किस देश ने जीता?",
    options: ["नीदरलैंड्स", "जर्मनी", "बेल्जियम", "ऑस्ट्रेलिया"],
    explanation: "जर्मनी ने 30 अगस्त 2026 को फ़ाइनल में स्पेन को 1-0 से हराकर 2023 में जीता पुरुष विश्व ख़िताब बरकरार रखा। विजयी गोल मिशेल स्ट्रुथॉफ़ ने किया।",
  },
  "ca2-b-24": {
    stem: "दिसंबर 2025 में 96 वर्ष की आयु में दिवंगत वास्तुकार फ़्रैंक गेहरी ने किस प्रसिद्ध संग्रहालय का डिज़ाइन बनाया था?",
    options: ["लूव्र पिरामिड, पेरिस", "टेट मॉडर्न, लंदन", "म्यूज़ियम ऑफ़ द फ़्यूचर, दुबई", "गुगेनहाइम संग्रहालय, बिलबाओ"],
    explanation: "कनाडा में जन्मे अमेरिकी वास्तुकार फ़्रैंक गेहरी का 5 दिसंबर 2025 को 96 वर्ष की आयु में निधन हुआ। उनकी प्रसिद्ध कृतियों में स्पेन का गुगेनहाइम संग्रहालय (बिलबाओ) और लॉस एंजिलिस का वॉल्ट डिज़्नी कॉन्सर्ट हॉल शामिल हैं।",
  },
  "ca2-b-25": {
    stem: "सितंबर 2025 में 91 वर्ष की आयु में दिवंगत जॉर्जियो अरमानी किस क्षेत्र का प्रसिद्ध नाम थे?",
    options: ["फ़ैशन डिज़ाइन", "ओपेरा गायन", "फ़िल्म निर्देशन", "मोटर रेसिंग"],
    explanation: "इतालवी फ़ैशन डिज़ाइनर जॉर्जियो अरमानी का 4 सितंबर 2025 को 91 वर्ष की आयु में मिलान स्थित घर पर निधन हुआ। उन्होंने 1975 में अरमानी फ़ैशन हाउस की स्थापना की थी।",
  },
  "ca2-b-26": {
    stem: "अक्टूबर 2025 में केरल में आयुर्वेदिक उपचार के दौरान दिवंगत रैला ओडिंगा किस देश के पूर्व प्रधानमंत्री थे?",
    options: ["तंज़ानिया", "युगांडा", "केन्या", "इथियोपिया"],
    explanation: "केन्या के पूर्व प्रधानमंत्री रैला ओडिंगा (80) का 15 अक्टूबर 2025 को केरल के एर्नाकुलम ज़िले के कूथट्टुकुलम में हृदयाघात से निधन हुआ। वे दशकों तक केन्याई राजनीति के प्रमुख चेहरे रहे।",
  },
  "ca2-b-27": {
    stem: "प्रित्ज़कर आर्किटेक्चर पुरस्कार 2026 के विजेता स्मिलयान रादिच क्लार्क किस देश के वास्तुकार हैं?",
    options: ["अर्जेंटीना", "चिली", "स्पेन", "मेक्सिको"],
    explanation: "सैंटियागो में कार्यरत चिली के वास्तुकार स्मिलयान रादिच क्लार्क को मार्च 2026 में 55वाँ प्रित्ज़कर पुरस्कार विजेता घोषित किया गया। प्रित्ज़कर को अक्सर वास्तुकला का नोबेल कहा जाता है।",
  },
  "ca2-b-28": {
    stem: "सितंबर 2026 में 83वें वेनिस अंतरराष्ट्रीय फ़िल्म महोत्सव में 'गोल्डन लायन' किस फ़िल्म ने जीता?",
    options: ["फ़्योर्ड", "फ़ादर मदर सिस्टर ब्रदर", "द ब्रूटलिस्ट", "वुमन अननोन"],
    explanation: "डेनिश फ़िल्मकार मे एल-तूख़ी की फ़िल्म 'वुमन अननोन' ने वेनिस 2026 में गोल्डन लायन जीता। यह 1945 की गर्मियों के डेनमार्क पर आधारित एक मनोवैज्ञानिक ड्रामा है।",
  },
  "ca2-b-29": {
    stem: "11 नवंबर 2025 को आयरलैंड के 10वें राष्ट्रपति के रूप में किसका पदारोहण हुआ?",
    options: ["कैथरीन कोनोली", "मैरी मैकएलीज़", "हेदर हम्फ़्रीज़", "माइकल डी. हिगिंस"],
    explanation: "कैथरीन कोनोली ने 11 नवंबर 2025 को माइकल डी. हिगिंस के बाद आयरलैंड की 10वीं राष्ट्रपति के रूप में पदभार ग्रहण किया। मैरी रॉबिन्सन और मैरी मैकएलीज़ के बाद वे आयरलैंड की तीसरी महिला राष्ट्रपति हैं।",
  },
  "ca2-b-30": {
    stem: "24 सितंबर 2025 को बेंगलुरु में दिवंगत प्रसिद्ध उपन्यासकार एस.एल. भैरप्पा मुख्य रूप से किस भाषा में लिखते थे?",
    options: ["तेलुगु", "तमिल", "कन्नड़", "मलयालम"],
    explanation: "कन्नड़ उपन्यासकार एस.एल. भैरप्पा का 24 सितंबर 2025 को 94 वर्ष की आयु में बेंगलुरु में निधन हुआ। पद्म भूषण और सरस्वती सम्मान से सम्मानित भैरप्पा कन्नड़ के सबसे अधिक बिकने वाले लेखकों में थे।",
  },
  "ca2-p-01": {
    stem: "अक्टूबर 2025 में आसियान में शामिल तिमोर-लेस्ते, 1999 में किस देश के शामिल होने के बाद पहला नया सदस्य है?",
    options: ["म्यांमार", "कंबोडिया", "लाओस", "ब्रुनेई"],
    explanation: "तिमोर-लेस्ते 26 अक्टूबर 2025 को आसियान का 11वाँ सदस्य बना; 1999 में कंबोडिया के बाद यह पहला नया सदस्य है। उसने 2011 में आवेदन किया था और 2022 में उसे पर्यवेक्षक का दर्जा मिला था।",
  },
  "ca2-p-02": {
    stem: "सितंबर 2026 में नई दिल्ली में हुए 18वें ब्रिक्स शिखर सम्मेलन का विषय (थीम) क्या था?",
    options: ["न्यायसंगत वैश्विक विकास और सुरक्षा के लिए बहुपक्षवाद को सुदृढ़ करना", "ब्रिक्स और अफ़्रीका: पारस्परिक त्वरित विकास के लिए साझेदारी", "अधिक समावेशी और सतत शासन के लिए ग्लोबल साउथ सहयोग को सुदृढ़ करना", "लचीलापन, नवाचार, सहयोग और स्थिरता के लिए निर्माण"],
    explanation: "भारत की 2026 की ब्रिक्स अध्यक्षता का विषय 'Building for Resilience, Innovation, Cooperation and Sustainability' था। 12 और 13 सितंबर 2026 के शिखर सम्मेलन में 'नई दिल्ली घोषणा' अपनाई गई।",
  },
  "ca2-p-03": {
    stem: "सितंबर 2026 में बिश्केक SCO शिखर सम्मेलन के अंत में 2026-27 के लिए SCO की अध्यक्षता किस देश ने संभाली?",
    options: ["पाकिस्तान", "भारत", "ताजिकिस्तान", "बेलारूस"],
    explanation: "1 सितंबर 2026 को बिश्केक बैठक में किर्गिस्तान ने 2026-27 के लिए SCO की बारी-बारी से मिलने वाली अध्यक्षता पाकिस्तान को सौंपी। सम्मेलन में बिश्केक घोषणा सहित 28 दस्तावेज़ स्वीकृत हुए।",
  },
  "ca2-p-04": {
    stem: "जोएल मोकिर, फ़िलिप आघियों और पीटर हॉविट को 2025 का अर्थशास्त्र नोबेल ____ की व्याख्या के लिए मिला।",
    options: ["संस्थाएँ राष्ट्रीय समृद्धि को कैसे आकार देती हैं", "वित्तीय संकटों में बैंकों की भूमिका", "नवाचार-आधारित आर्थिक वृद्धि", "श्रम बाज़ार में महिलाओं के परिणाम"],
    explanation: "13 अक्टूबर 2025 को घोषित अर्थशास्त्र पुरस्कार का आधा भाग जोएल मोकिर को और आधा संयुक्त रूप से फ़िलिप आघियों व पीटर हॉविट को नवाचार-आधारित वृद्धि और 'रचनात्मक विनाश' पर काम के लिए मिला। 2024 का पुरस्कार संस्थाओं और समृद्धि पर शोध के लिए था।",
  },
  "ca2-p-05": {
    stem: "गणित का नोबेल कहे जाने वाला एबेल पुरस्कार 2026 किसे मिला?",
    options: ["मसाकी काशिवारा", "गर्ड फ़ाल्टिंग्स", "मिशेल तालाग्रां", "टेरेंस ताओ"],
    explanation: "बॉन स्थित मैक्स प्लांक गणित संस्थान के जर्मन गणितज्ञ गर्ड फ़ाल्टिंग्स को अंकगणितीय ज्यामिति में काम, जिसमें मॉर्डेल अनुमान का समाधान शामिल है, के लिए एबेल पुरस्कार 2026 मिला। यह पुरस्कार पाने वाले वे पहले जर्मन हैं।",
  },
  "ca2-p-06": {
    stem: "2026 लॉरियस पुरस्कारों में 'वर्ल्ड स्पोर्ट्सवुमन ऑफ़ द ईयर' किसे चुना गया?",
    options: ["सिडनी मैकलॉफ़लिन-लेवरोन", "केटी लेडेकी", "आर्यना सबालेंका", "फ़ेथ किपयेगोन"],
    explanation: "बेलारूस की टेनिस खिलाड़ी आर्यना सबालेंका को अप्रैल 2026 में मैड्रिड समारोह में लॉरियस वर्ल्ड स्पोर्ट्सवुमन ऑफ़ द ईयर चुना गया, जबकि स्पोर्ट्समैन पुरस्कार कार्लोस अल्कराज़ को मिला। दोनों शीर्ष व्यक्तिगत पुरस्कार टेनिस खिलाड़ियों को मिले।",
  },
  "ca2-p-07": {
    stem: "फ़ाइनल में नीदरलैंड्स को शूटआउट में हराकर FIH महिला हॉकी विश्व कप 2026 किस टीम ने जीता?",
    options: ["ऑस्ट्रेलिया", "जर्मनी", "बेल्जियम", "अर्जेंटीना"],
    explanation: "29 अगस्त 2026 को फ़ाइनल में अर्जेंटीना और नीदरलैंड्स का मैच 1-1 से बराबर रहा और अर्जेंटीना ने शूटआउट 3-1 से जीता। यह 16 वर्षों में अर्जेंटीना का पहला वैश्विक ख़िताब था।",
  },
  "ca2-p-08": {
    stem: "कार्लोस अल्कराज़ ने ऑस्ट्रेलियन ओपन 2026 जीतकर करियर ग्रैंड स्लैम पूरा किया। फ़ाइनल में उन्होंने किसे हराया?",
    options: ["नोवाक जोकोविच", "यानिक सिनर", "अलेक्ज़ेंडर ज़्वेरेव", "दानिल मेदवेदेव"],
    explanation: "अल्कराज़ ने ऑस्ट्रेलियन ओपन 2026 के फ़ाइनल में नोवाक जोकोविच को 2-6, 6-2, 6-3, 7-5 से हराया। 22 वर्ष की आयु में वे एकल में करियर ग्रैंड स्लैम पूरा करने वाले सबसे कम उम्र के पुरुष खिलाड़ी बने।",
  },
  "ca2-p-09": {
    stem: "फ़्रेंच ओपन 2026 जीतकर अलेक्ज़ेंडर ज़्वेरेव ____ के बाद ग्रैंड स्लैम एकल ख़िताब जीतने वाले पहले जर्मन पुरुष बने।",
    options: ["माइकल श्टिख", "बोरिस बेकर", "टॉमी हास", "गॉटफ़्रीड फ़ॉन क्राम"],
    explanation: "ज़्वेरेव ने 7 जून 2026 को इटली के फ़्लावियो कोबोली को पाँच सेटों में हराकर अपना पहला मेजर ख़िताब जीता। 1996 ऑस्ट्रेलियन ओपन में बोरिस बेकर के बाद मेजर एकल ख़िताब जीतने वाले वे पहले जर्मन पुरुष बने।",
  },
  "ca2-p-10": {
    stem: "27 मार्च 2026 को नेपाल के सबसे युवा प्रधानमंत्री के रूप में शपथ लेने वाले बालेंद्र (बालेन) शाह किस दल का नेतृत्व करते हैं?",
    options: ["नेपाली कांग्रेस", "सीपीएन (यूएमएल)", "राष्ट्रीय स्वतंत्र पार्टी", "जनता समाजवादी पार्टी"],
    explanation: "काठमांडू के पूर्व मेयर 35 वर्षीय बालेंद्र शाह ने 27 मार्च 2026 को शपथ ली। 5 मार्च 2026 के चुनाव में राष्ट्रीय स्वतंत्र पार्टी ने 275 में से 182 सीटें जीतीं। वे नेपाल के पहले मधेसी प्रधानमंत्री हैं।",
  },
  "ca2-p-11": {
    stem: "होसे आंतोनियो कास्ट ने दिसंबर 2025 में किस देश का राष्ट्रपति पद का दूसरे दौर (रन-ऑफ़) का चुनाव जीता?",
    options: ["अर्जेंटीना", "पेरू", "कोलंबिया", "चिली"],
    explanation: "होसे आंतोनियो कास्ट ने 14 दिसंबर 2025 को चिली के राष्ट्रपति पद का रन-ऑफ़ चुनाव 58% से अधिक मतों से जीता और जेनेट हारा को हराया। उन्होंने 11 मार्च 2026 को पदभार ग्रहण किया।",
  },
  "ca2-p-12": {
    stem: "अपने देश में इस पद पर पहुँचने वाली पहली महिला रहीं किस पूर्व प्रधानमंत्री का 30 दिसंबर 2025 को ढाका में निधन हुआ?",
    options: ["ख़ालिदा ज़िया", "शेख़ हसीना", "सिरिमावो भंडारनायके", "बेनज़ीर भुट्टो"],
    explanation: "बांग्लादेश की दो बार प्रधानमंत्री रहीं और लंबे समय तक BNP अध्यक्ष रहीं ख़ालिदा ज़िया का 30 दिसंबर 2025 को 80 वर्ष की आयु में ढाका में निधन हुआ। बांग्लादेश ने तीन दिन का राजकीय शोक घोषित किया।",
  },
  "ca2-p-13": {
    stem: "अक्टूबर 2025 में दिवंगत विज्ञापन जगत के दिग्गज पीयूष पांडे ने चार दशक से अधिक समय किस एजेंसी के साथ बिताया?",
    options: ["लिंटास", "ओगिल्वी", "मैकैन", "लियो बर्नेट"],
    explanation: "पद्म श्री (2016) से सम्मानित पीयूष पांडे का 23 अक्टूबर 2025 को 70 वर्ष की आयु में निधन हुआ। ओगिल्वी इंडिया में उन्होंने फ़ेविकोल, कैडबरी और एशियन पेंट्स के प्रसिद्ध विज्ञापन और 'दो बूँद ज़िंदगी की' पोलियो अभियान बनाया।",
  },
  "ca2-p-14": {
    stem: "चीन ने डेनमार्क के हॉर्सेन्स में थॉमस कप 2026 बैडमिंटन ख़िताब जीता। फ़ाइनल में उसने किस टीम को हराया?",
    options: ["इंडोनेशिया", "डेनमार्क", "फ़्रांस", "भारत"],
    explanation: "मई 2026 में थॉमस कप फ़ाइनल में चीन ने फ़्रांस को 3-1 से हराकर अपना 13वाँ ख़िताब जीता। उबेर कप (महिला) में दक्षिण कोरिया ने चीन को 3-1 से हराकर तीसरी बार ख़िताब जीता।",
  },
  "ca2-p-15": {
    stem: "2025-26 सत्र में हुबली (हुब्बल्ली) में फ़ाइनल में कर्नाटक को हराकर किस टीम ने अपना पहला रणजी ट्रॉफ़ी ख़िताब जीता?",
    options: ["केरल", "विदर्भ", "मध्य प्रदेश", "जम्मू और कश्मीर"],
    explanation: "जम्मू और कश्मीर ने 28 फ़रवरी 2026 को आठ बार के चैंपियन कर्नाटक के विरुद्ध पहली पारी की बढ़त के आधार पर 2025-26 रणजी ट्रॉफ़ी जीती। यह J&K का पहला रणजी फ़ाइनल और पहला ख़िताब था।",
  },
  "ca2-p-16": {
    stem: "चेन्नई और मदुरै में हुए FIH पुरुष जूनियर हॉकी विश्व कप 2025 में भारत ने किस टीम को हराकर कांस्य पदक जीता?",
    options: ["अर्जेंटीना", "स्पेन", "नीदरलैंड्स", "बेल्जियम"],
    explanation: "दिसंबर 2025 में कांस्य पदक मैच में भारत ने पिछड़ने के बाद वापसी करते हुए अर्जेंटीना को 4-2 से हराया। फ़ाइनल में जर्मनी ने स्पेन को पेनल्टी शूटआउट में हराकर रिकॉर्ड आठवाँ जूनियर विश्व कप जीता।",
  },
  "ca2-p-17": {
    stem: "रॉयल चैलेंजर्स बेंगलुरु ने वडोदरा में फ़ाइनल में किस टीम को हराकर महिला प्रीमियर लीग 2026 जीती?",
    options: ["मुंबई इंडियंस", "दिल्ली कैपिटल्स", "गुजरात जायंट्स", "यूपी वॉरियर्ज़"],
    explanation: "5 फ़रवरी 2026 को RCB ने 204 रनों का लक्ष्य हासिल कर दिल्ली कैपिटल्स को छह विकेट से हराया, जो WPL इतिहास का सबसे बड़ा सफल रन-चेज़ है। यह RCB का दूसरा ख़िताब था; स्मृति मंधाना (87) और जॉर्जिया वॉल (79) ने लक्ष्य का पीछा करने में अगुवाई की।",
  },
  "ca2-p-18": {
    stem: "सतत विकास रिपोर्ट (Sustainable Development Report) 2026 के SDG सूचकांक में भारत की रैंक क्या थी?",
    options: ["99वीं", "109वीं", "94वीं", "112वीं"],
    explanation: "भारत 68.3 अंकों के साथ 167 देशों में 94वें स्थान पर रहा, जो अब तक की उसकी सबसे अच्छी रैंक है; 2025 में वह 99वें स्थान पर था। यह रिपोर्ट संयुक्त राष्ट्र सस्टेनेबल डेवलपमेंट सॉल्यूशंस नेटवर्क (SDSN) प्रकाशित करता है।",
  },
  "ca2-p-19": {
    stem: "अगस्त 2026 में घोषित राष्ट्रीय खेल पुरस्कार 2025 में कितने खिलाड़ियों को अर्जुन पुरस्कार के लिए चुना गया?",
    options: ["26", "32", "12", "17"],
    explanation: "खेल मंत्रालय ने 17 अर्जुन पुरस्कार विजेताओं के नाम घोषित किए और मेजर ध्यानचंद खेल रत्न के लिए किसी का नाम नहीं दिया गया। चयन समिति की अध्यक्षता न्यायमूर्ति (सेवानिवृत्त) अरुण कुमार मिश्रा ने की।",
  },
  "ca2-p-20": {
    stem: "जुलाई 2026 में सारनाथ (उत्तर प्रदेश) के प्राचीन बौद्ध स्थल को सूची में शामिल किए जाने के बाद भारत में कितने विश्व धरोहर स्थल हो गए?",
    options: ["43", "45", "44", "46"],
    explanation: "25 जुलाई 2026 को बुसान (दक्षिण कोरिया) में विश्व धरोहर समिति के 48वें सत्र में सारनाथ को विश्व धरोहर सूची में शामिल किया गया, जिससे भारत के कुल स्थल 45 हो गए। सारनाथ में बुद्ध ने अपना पहला उपदेश दिया था।",
  },
  "ca2-p-21": {
    stem: "दिसंबर 2025 में दीपावली को यूनेस्को की अमूर्त सांस्कृतिक विरासत सूची में किस स्थान पर हुए समिति सत्र में शामिल किया गया?",
    options: ["भारत मंडपम, नई दिल्ली", "यशोभूमि, नई दिल्ली", "लाल क़िला, नई दिल्ली", "कर्तव्य पथ, नई दिल्ली"],
    explanation: "10 दिसंबर 2025 को लाल क़िला, नई दिल्ली में यूनेस्को की अमूर्त सांस्कृतिक विरासत समिति के 20वें सत्र में दीपावली को सूची में शामिल किया गया। प्रतिनिधि सूची में यह भारत का 16वाँ तत्व है।",
  },
  "ca2-p-22": {
    stem: "'द लोनलीनेस ऑफ़ सोनिया एंड सनी' के लिए बुकर पुरस्कार 2025 की शॉर्टलिस्ट में किस भारतीय मूल की लेखिका का नाम था?",
    options: ["झुम्पा लाहिड़ी", "अनीता देसाई", "अरुंधति रॉय", "किरण देसाई"],
    explanation: "किरण देसाई की 'द लोनलीनेस ऑफ़ सोनिया एंड सनी' बुकर 2025 की छह पुस्तकों की शॉर्टलिस्ट में थी; पुरस्कार डेविड सज़ाले की 'फ़्लेश' को मिला। देसाई 2006 में 'द इनहेरिटेंस ऑफ़ लॉस' के लिए बुकर जीत चुकी हैं।",
  },
  "ca2-p-23": {
    stem: "टोक्यो में 2025 विश्व एथलेटिक्स चैंपियनशिप के पुरुष भाला फेंक फ़ाइनल में कौन-सा भारतीय खिलाड़ी चौथे स्थान पर रहा, जो भारत का सर्वश्रेष्ठ प्रदर्शन था?",
    options: ["सचिन यादव", "नीरज चोपड़ा", "किशोर जेना", "रोहित यादव"],
    explanation: "सचिन यादव 86.27 मीटर के व्यक्तिगत सर्वश्रेष्ठ के साथ चौथे स्थान पर रहे, जबकि गत चैंपियन नीरज चोपड़ा आठवें स्थान पर रहे। त्रिनिदाद और टोबैगो के केशोर्न वॉलकॉट ने 88.16 मीटर के साथ स्वर्ण जीता।",
  },
  "ca2-p-24": {
    stem: "2026 के पाँच पद्म विभूषण विजेताओं में कौन-सी हिंदुस्तानी शास्त्रीय वायलिन वादक शामिल थीं?",
    options: ["एल. सुब्रमण्यम", "एन. राजम", "कला रामनाथ", "एम.एस. गोपालकृष्णन"],
    explanation: "वायलिन वादक एन. राजम को कला श्रेणी में पद्म विभूषण 2026 मिला। अन्य पद्म विभूषण विजेता थे: धर्मेंद्र (मरणोपरांत), वी.एस. अच्युतानंदन (मरणोपरांत), के.टी. थॉमस और पी. नारायणन।",
  },
  "ca2-p-25": {
    stem: "रेमन मैग्सेसे पुरस्कार (2025) पाने वाले पहले भारतीय संगठन 'एजुकेट गर्ल्स' की स्थापना किसने की?",
    options: ["अरुणा रॉय", "सुधा मूर्ति", "सफ़ीना हुसैन", "इला भट्ट"],
    explanation: "सफ़ीना हुसैन ने 2007 में 'एजुकेट गर्ल्स' (फ़ाउंडेशन टु एजुकेट गर्ल्स ग्लोबली) की स्थापना की। यह संगठन ग्रामीण क्षेत्रों में स्कूल से बाहर की लड़कियों को वापस स्कूल लाने का काम करता है और 20 लाख से अधिक लड़कियों तक पहुँच चुका है।",
  },
  "ca2-p-26": {
    stem: "2026 में केरल के किस पूर्व मुख्यमंत्री को मरणोपरांत पद्म विभूषण दिया गया?",
    options: ["ओमन चांडी", "ई.के. नयनार", "के. करुणाकरन", "वी.एस. अच्युतानंदन"],
    explanation: "77वें गणतंत्र दिवस की पूर्व संध्या पर घोषित 2026 की सूची में केरल के पूर्व मुख्यमंत्री वी.एस. अच्युतानंदन और अभिनेता धर्मेंद्र दो मरणोपरांत पद्म विभूषण विजेता थे।",
  },
  "ca2-p-27": {
    stem: "पाम डी'ओर 2026 जीतने वाली 'फ़्योर्ड' के निर्देशक क्रिस्टियन मुंगियू ने इससे पहले किस फ़िल्म के लिए पाम डी'ओर जीता था?",
    options: ["4 मंथ्स, 3 वीक्स एंड 2 डेज़", "बियॉन्ड द हिल्स", "ग्रेजुएशन", "आर.एम.एन."],
    explanation: "रोमानियाई निर्देशक क्रिस्टियन मुंगियू ने पहली बार 2007 में '4 मंथ्स, 3 वीक्स एंड 2 डेज़' के लिए पाम डी'ओर जीता था। सेबेस्टियन स्टैन और रेनाटे राइन्सवे अभिनीत 'फ़्योर्ड' (2026) के साथ वे इसे दो बार जीतने वाले दसवें निर्देशक बने।",
  },
  "ca2-p-28": {
    stem: "बैड बनी के 'देबी तिरार मास फ़ोतोस' ने 2026 ग्रैमी में एल्बम ऑफ़ द ईयर जीतने वाला पहला ____ बनकर इतिहास रचा।",
    options: ["पहला (डेब्यू) एल्बम", "लाइव एल्बम", "मुख्यतः स्पैनिश भाषा का एल्बम", "स्वतंत्र रूप से जारी एल्बम"],
    explanation: "1 फ़रवरी 2026 को 68वें ग्रैमी पुरस्कारों में बैड बनी का 'देबी तिरार मास फ़ोतोस' एल्बम ऑफ़ द ईयर जीतने वाला पहला मुख्यतः स्पैनिश भाषा का एल्बम बना। उस रात उन्होंने तीन ग्रैमी जीते।",
  },
  "ca2-p-29": {
    stem: "सितंबर 2025 में सिंगापुर में दिवंगत ज़ुबीन गर्ग हिंदी फ़िल्मों के दर्शकों में किस गीत के लिए सबसे अधिक जाने जाते हैं?",
    options: ["कजरा रे", "तुम ही हो", "छैयाँ छैयाँ", "या अली"],
    explanation: "'असम की आवाज़' कहे जाने वाले ज़ुबीन गर्ग ने हिंदी फ़िल्म का लोकप्रिय गीत 'या अली' गाया था। 19 सितंबर 2025 को सिंगापुर में उनका निधन हुआ और गुवाहाटी के पास कामरूप ज़िले के कमरकुची में राजकीय सम्मान के साथ उनका अंतिम संस्कार हुआ।",
  },
  "ca2-p-30": {
    stem: "सितंबर 2026 में 83वें वेनिस फ़िल्म महोत्सव में किस अभिनेता-निर्देशक को 'लाइफ़टाइम अचीवमेंट के लिए गोल्डन लायन' मिला?",
    options: ["टॉम हैंक्स", "जॉर्ज क्लूनी", "डेंज़ल वॉशिंगटन", "ब्रैड पिट"],
    explanation: "ला बिएनाले दी वेनेज़िया ने 83वें वेनिस फ़िल्म महोत्सव (2 से 12 सितंबर 2026) में जॉर्ज क्लूनी को लाइफ़टाइम अचीवमेंट के लिए गोल्डन लायन दिया। महोत्सव का सर्वोच्च पुरस्कार, सर्वश्रेष्ठ फ़िल्म का गोल्डन लायन, 'वुमन अननोन' को मिला।",
  },
};
