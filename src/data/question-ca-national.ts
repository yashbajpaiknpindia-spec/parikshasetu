/**
 * Current affairs: national & international (Sep 2025 to Sep 2026).
 * section "gk", topic "Current affairs", shared across exam levels.
 * Every fact was checked against the source noted above it. Current affairs date
 * fast: re-verify before each exam cycle.
 */
import type { Question } from "./questions";

export const caNationalBank: Question[] = [
  // ---------------- Beginner (headline facts) ----------------

  // src: https://www.newsonair.gov.in/india-crowned-t20-world-champions-after-thumping-new-zealand-in-final (8 Mar 2026)
  {
    id: "ca-b-01", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which team won the ICC Men's T20 World Cup 2026, beating New Zealand in the final at Ahmedabad on 8 March 2026?",
    options: ["Australia", "India", "South Africa", "England"], correct: 1,
    explanation: "India beat New Zealand by 96 runs in the final at the Narendra Modi Stadium, Ahmedabad, on 8 March 2026. India became the first team to win three Men's T20 World Cup titles and the first host nation to lift the trophy.",
  },
  // src: https://www.npr.org/2026/07/19/nx-s1-5899071/2026-world-cup-fifa-argentina-spain-final-championship (19 Jul 2026)
  {
    id: "ca-b-02", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which country won the FIFA World Cup 2026, defeating Argentina 1-0 after extra time in the final on 19 July 2026?",
    options: ["France", "Brazil", "Germany", "Spain"], correct: 3,
    explanation: "Spain beat Argentina 1-0 after extra time in the final at New York New Jersey Stadium on 19 July 2026. The 2026 World Cup was co-hosted by the USA, Canada and Mexico.",
  },
  // src: https://www.olympics.com/en/news/rcb-vs-gt-ipl-2026-final-match-report-scorecard (2026)
  {
    id: "ca-b-03", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which franchise won the IPL 2026 title by beating Gujarat Titans in the final?",
    options: ["Royal Challengers Bengaluru", "Mumbai Indians", "Chennai Super Kings", "Punjab Kings"], correct: 0,
    explanation: "Royal Challengers Bengaluru beat Gujarat Titans by five wickets in the IPL 2026 final at Ahmedabad, with Virat Kohli scoring an unbeaten 75. It was RCB's second IPL title in a row.",
  },
  // src: https://www.icc-cricket.com/tournaments/womens-cricket-worldcup-2025/news/live-india-south-africa-eye-maiden-title-at-cwc25-final (2 Nov 2025)
  {
    id: "ca-b-04", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "India won its first ICC Women's ODI World Cup title in November 2025 by defeating which team in the final?",
    options: ["Australia", "England", "South Africa", "New Zealand"], correct: 2,
    explanation: "India beat South Africa by 52 runs in the final at Dr. DY Patil Stadium, Navi Mumbai, on 2 November 2025. It was India's first Women's World Cup title, in their third final.",
  },
  // src: https://www.newsonair.gov.in/ahmedabad-to-host-2030-commonwealth-games (26 Nov 2025)
  {
    id: "ca-b-05", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which Indian city was confirmed in November 2025 as the host of the 2030 Commonwealth Games?",
    options: ["New Delhi", "Ahmedabad", "Bhubaneswar", "Mumbai"], correct: 1,
    explanation: "Ahmedabad was formally awarded the 2030 Commonwealth Games at the Commonwealth Sport General Assembly in Glasgow on 26 November 2025. The 2030 edition will be the centenary Games, branded 'Amdavad 2030'.",
  },
  // src: https://www.newsonair.gov.in/justice-surya-kant-to-take-oath-as-53rd-chief-justice-of-india (24 Nov 2025)
  {
    id: "ca-b-06", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was sworn in as the 53rd Chief Justice of India on 24 November 2025?",
    options: ["Justice Surya Kant", "Justice B.R. Gavai", "Justice Vikram Nath", "Justice B.V. Nagarathna"], correct: 0,
    explanation: "President Droupadi Murmu administered the oath to Justice Surya Kant as the 53rd CJI on 24 November 2025. He succeeded Justice B.R. Gavai and is due to serve until February 2027.",
  },
  // src: https://ddnews.gov.in/en/cp-radhakrishnan-elected-as-vice-president-of-india/ (9 Sep 2025)
  {
    id: "ca-b-07", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was elected the 15th Vice President of India in September 2025?",
    options: ["Jagdeep Dhankhar", "B. Sudershan Reddy", "Om Birla", "C.P. Radhakrishnan"], correct: 3,
    explanation: "C.P. Radhakrishnan was elected Vice President on 9 September 2025 with 452 votes and took oath on 12 September 2025. The Vice President is also the ex officio Chairman of the Rajya Sabha.",
  },
  // src: https://www.nobelprize.org/prizes/peace/2025/summary/ (10 Oct 2025)
  {
    id: "ca-b-08", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was awarded the Nobel Peace Prize 2025?",
    options: ["Narges Mohammadi", "Malala Yousafzai", "Maria Corina Machado", "Ales Bialiatski"], correct: 2,
    explanation: "The Nobel Peace Prize 2025 went to Maria Corina Machado of Venezuela for her work promoting democratic rights for the people of Venezuela. The Peace Prize is announced in Oslo by the Norwegian Nobel Committee.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228777&reg=48&lang=2 (Feb 2026)
  {
    id: "ca-b-09", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The India AI Impact Summit 2026, the first global AI summit of its scale hosted in the Global South, was held in February 2026 at which venue?",
    options: ["Yashobhoomi, New Delhi", "Bharat Mandapam, New Delhi", "Jio World Centre, Mumbai", "Mahatma Mandir, Gandhinagar"], correct: 1,
    explanation: "The India AI Impact Summit 2026 was held from 16 to 20 February 2026 at Bharat Mandapam, New Delhi. More than 20 Heads of State and Government took part.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219065&reg=3&lang=1 (27 Jan 2026)
  {
    id: "ca-b-10", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "In January 2026, India concluded negotiations for a free trade agreement with which partner, a deal first taken up nearly two decades earlier?",
    options: ["European Union", "Canada", "ASEAN", "Gulf Cooperation Council"], correct: 0,
    explanation: "India and the European Union announced the conclusion of the India-EU Free Trade Agreement in New Delhi on 27 January 2026. The agreement creates a free trade area of about two billion people.",
  },
  // src: https://www.newsonair.gov.in/takaichi-sanae-elected-as-japans-first-female-prime-minister (21 Oct 2025)
  {
    id: "ca-b-11", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who became Japan's first woman Prime Minister in October 2025?",
    options: ["Yoko Kamikawa", "Sanae Takaichi", "Yuriko Koike", "Seiko Noda"], correct: 1,
    explanation: "Sanae Takaichi was elected Prime Minister by Japan's parliament (the Diet) on 21 October 2025, after winning the leadership of the Liberal Democratic Party. She is Japan's first woman Prime Minister.",
  },
  // src: https://cop30.br/en/news-about-cop30/cop30-approves-belem-package1 (Nov 2025)
  {
    id: "ca-b-12", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The COP30 UN Climate Change Conference in November 2025 was held in which city?",
    options: ["Baku", "Dubai", "Belem", "Rio de Janeiro"], correct: 2,
    explanation: "COP30 was held in Belem, Brazil, in the Amazon region, and concluded on 23 November 2025. The Brazilian Presidency framed it as a 'Global Mutirao', meaning a collective effort.",
  },
  // src: https://newsonair.gov.in/pm-modi-unveils-six-global-development-initiatives-at-g20-summit-opening-in-johannesburg/ (22 Nov 2025)
  {
    id: "ca-b-13", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The G20 Leaders' Summit of November 2025, the first G20 summit held on the African continent, took place in which city?",
    options: ["Cairo", "Nairobi", "Cape Town", "Johannesburg"], correct: 3,
    explanation: "South Africa hosted the 20th G20 Leaders' Summit in Johannesburg on 22 and 23 November 2025. It was the first G20 summit held in Africa.",
  },
  // src: https://www.newsonair.gov.in/mohanlal-to-receive-dadasaheb-phalke-award-2023-for-iconic-contribution-to-indian-cinema (20 Sep 2025)
  {
    id: "ca-b-14", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which actor received the Dadasaheb Phalke Award (for 2023) at the 71st National Film Awards ceremony on 23 September 2025?",
    options: ["Mammootty", "Mohanlal", "Rajinikanth", "Kamal Haasan"], correct: 1,
    explanation: "Malayalam actor, director and producer Mohanlal received the Dadasaheb Phalke Award for 2023 on 23 September 2025. He is the second Malayalam film personality to get the honour, after Adoor Gopalakrishnan (2004).",
  },
  // src: https://abcnews.com/GMA/Culture/oscars-2026-full-winners-list/story?id=130769299 (15 Mar 2026)
  {
    id: "ca-b-15", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which film won Best Picture at the 98th Academy Awards (Oscars) in March 2026?",
    options: ["Sinners", "Hamnet", "One Battle After Another", "Marty Supreme"], correct: 2,
    explanation: "'One Battle After Another', directed by Paul Thomas Anderson, won Best Picture at the 98th Academy Awards. The film won six Oscars in total, including Best Director.",
  },
  // src: https://www.hockeyindia.org/news/india-lift-the-hero-asia-cup-rajgir-bihar-2025-convincingly-beat-korea-4-1 (7 Sep 2025)
  {
    id: "ca-b-16", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "India won the Men's Hockey Asia Cup 2025 in September 2025. Where was the tournament held?",
    options: ["Bhubaneswar, Odisha", "Ranchi, Jharkhand", "Rajgir, Bihar", "Chennai, Tamil Nadu"], correct: 2,
    explanation: "The Men's Hockey Asia Cup 2025 was held at the Rajgir Sports Complex in Bihar from 29 August to 7 September 2025. India beat South Korea 4-1 in the final to win their fourth Asia Cup title.",
  },
  // src: https://www.olympics.com/en/news/asia-cup-2025-final-cricket-india-vs-pakistan-match-report (28 Sep 2025)
  {
    id: "ca-b-17", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "India won the Men's T20 Asia Cup 2025 in Dubai on 28 September 2025 by defeating which team in the final?",
    options: ["Sri Lanka", "Bangladesh", "Afghanistan", "Pakistan"], correct: 3,
    explanation: "India beat Pakistan by five wickets in the Asia Cup 2025 final in Dubai. Kuldeep Yadav took 4 for 30 and Tilak Varma scored an unbeaten 69 in the chase.",
  },
  // src: https://www.icc-cricket.com/tournaments/womens-t20-worldcup-2026/news/england-australia-final-womens-t20-world-cup-2026 (5 Jul 2026)
  {
    id: "ca-b-18", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which team won the ICC Women's T20 World Cup 2026, beating hosts England in the final at Lord's?",
    options: ["Australia", "India", "South Africa", "New Zealand"], correct: 0,
    explanation: "Australia beat England by seven wickets in the final at Lord's, London, on 5 July 2026. It was Australia's seventh Women's T20 World Cup title.",
  },
  // src: https://www.si.com/soccer/ballon-dor-2025-winners-full-list (22 Sep 2025)
  {
    id: "ca-b-19", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the men's Ballon d'Or 2025, presented in Paris on 22 September 2025?",
    options: ["Lamine Yamal", "Ousmane Dembele", "Kylian Mbappe", "Mohamed Salah"], correct: 1,
    explanation: "France and Paris Saint-Germain forward Ousmane Dembele won the Ballon d'Or 2025. He starred in PSG's treble season, which included their UEFA Champions League title.",
  },
  // src: https://ddnews.gov.in/en/yoga-for-healthy-ageing-announced-as-theme-for-international-day-of-yoga-2026/ (Jun 2026)
  {
    id: "ca-b-20", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "What was the theme of the International Day of Yoga 2026 (21 June 2026)?",
    options: ["Yoga for One Earth One Health", "Yoga for Self and Society", "Yoga for Healthy Ageing", "Yoga for Humanity"], correct: 2,
    explanation: "The Ministry of Ayush announced 'Yoga for Healthy Ageing' as the theme for the 12th International Day of Yoga in 2026. The 2025 theme was 'Yoga for One Earth One Health'.",
  },
  // src: https://www.unep.org/news-and-stories/press-release/republic-azerbaijan-host-world-environment-day-2026 (5 Jun 2026)
  {
    id: "ca-b-21", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which country hosted the global celebration of World Environment Day on 5 June 2026?",
    options: ["Saudi Arabia", "Azerbaijan", "Republic of Korea", "Brazil"], correct: 1,
    explanation: "Azerbaijan hosted World Environment Day 2026 in Baku, with a focus on climate change. The Republic of Korea hosted in 2025 and Saudi Arabia in 2024.",
  },
  // src: https://unric.org/en/un-international-years-2026-rangelands-and-pastoralists-volunteers-and-the-woman-farmer/ (Jan 2026)
  {
    id: "ca-b-22", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The United Nations has declared 2026 the International Year of ____.",
    options: ["Millets", "Quantum Science and Technology", "Cooperatives", "Rangelands and Pastoralists"], correct: 3,
    explanation: "2026 is the International Year of Rangelands and Pastoralists, a resolution led by Mongolia. 2026 is also the International Year of the Woman Farmer and of Volunteers for Sustainable Development.",
  },
  // src: https://www.bwwellbeingworld.com/article/finland-tops-world-happiness-report-2026-india-ranks-116-598787 (20 Mar 2026)
  {
    id: "ca-b-23", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "In the World Happiness Report 2026, released in March 2026, what was India's rank?",
    options: ["116th", "118th", "126th", "99th"], correct: 0,
    explanation: "India ranked 116th out of 147 countries in the World Happiness Report 2026, up from 118th in 2025. Finland was ranked first for the ninth year in a row.",
  },
  // src: https://www.wipo.int/web-publications/global-innovation-index-2025/en/gii-2025-results.html (Sep 2025)
  {
    id: "ca-b-24", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "What was India's rank in WIPO's Global Innovation Index 2025?",
    options: ["40th", "39th", "38th", "48th"], correct: 2,
    explanation: "India ranked 38th among 139 economies in the Global Innovation Index 2025, up from 39th in 2024. The index is published by the World Intellectual Property Organization (WIPO).",
  },
  // src: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2186757 (Nov 2025)
  {
    id: "ca-b-25", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "A year-long nationwide commemoration was launched on 7 November 2025 to mark 150 years of which composition?",
    options: ["Jana Gana Mana", "Vande Mataram", "Saare Jahan Se Achha", "Jhanda Uncha Rahe Hamara"], correct: 1,
    explanation: "Prime Minister Narendra Modi inaugurated the commemoration of 150 years of the National Song 'Vande Mataram' on 7 November 2025 in New Delhi. The song was written by Bankimchandra Chatterji in 1875.",
  },
  // src: https://www.newsonair.gov.in/pm-modi-inaugurates-%E2%82%B99000-cr-projects-in-mizoram-flags-off-first-rail-line-connecting-aizawl-to-indian-railways/ (13 Sep 2025)
  {
    id: "ca-b-26", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "The Bairabi-Sairang railway line, inaugurated in September 2025, connected which state capital to the Indian Railways network?",
    options: ["Kohima", "Imphal", "Shillong", "Aizawl"], correct: 3,
    explanation: "Prime Minister Modi inaugurated the Bairabi-Sairang line on 13 September 2025, bringing rail connectivity to Aizawl, the capital of Mizoram. The line runs through hilly terrain with dozens of tunnels and bridges.",
  },
  // src: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc202594628401.pdf (Sep 2025)
  {
    id: "ca-b-27", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Under the 'Next-Gen GST' reforms effective from 22 September 2025, the main GST slabs were reduced to which two rates?",
    options: ["5% and 18%", "5% and 12%", "12% and 18%", "5% and 28%"], correct: 0,
    explanation: "From 22 September 2025, GST moved to two main slabs of 5% and 18%, removing the 12% and 28% slabs. The change was approved at the 56th GST Council meeting on 3 September 2025.",
  },
  // src: https://ddnews.gov.in/en/lt-gen-ns-raja-subramani-appointed-next-chief-of-defence-staff/ (May 2026)
  {
    id: "ca-b-28", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who took charge as India's third Chief of Defence Staff (CDS) on 31 May 2026?",
    options: ["Gen Anil Chauhan", "N.S. Raja Subramani", "Gen Upendra Dwivedi", "Gen Dhiraj Seth"], correct: 1,
    explanation: "N.S. Raja Subramani, a former Vice Chief of the Army Staff, became the third CDS on 31 May 2026, succeeding Gen Anil Chauhan. The CDS also serves as Secretary, Department of Military Affairs.",
  },
  // src: https://www.espncricinfo.com/story/india-news-mithun-manhas-elected-37th-bcci-president-1504787 (28 Sep 2025)
  {
    id: "ca-b-29", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was elected the 37th President of the BCCI in September 2025?",
    options: ["Roger Binny", "Rajeev Shukla", "Mithun Manhas", "Devajit Saikia"], correct: 2,
    explanation: "Former Delhi captain Mithun Manhas was elected BCCI President at the board's AGM in Mumbai on 28 September 2025, succeeding Roger Binny. He is the first person from Jammu and Kashmir to hold the post.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2279326&reg=3&lang=1 (30 Jun 2026)
  {
    id: "ca-b-30", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who took over as India's Chief of the Army Staff on 30 June 2026?",
    options: ["Gen Upendra Dwivedi", "Gen Manoj Pande", "N.S. Raja Subramani", "Gen Dhiraj Seth"], correct: 3,
    explanation: "General Dhiraj Seth took over as Chief of the Army Staff from General Upendra Dwivedi on 30 June 2026. He was earlier Vice Chief of the Army Staff and GOC-in-C of the Southern Command.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2267227&reg=3&lang=1 (31 May 2026)
  {
    id: "ca-b-31", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who assumed charge as India's Chief of the Naval Staff on 31 May 2026?",
    options: ["Adm Dinesh K. Tripathi", "Adm Krishna Swaminathan", "Adm R. Hari Kumar", "Adm Karambir Singh"], correct: 1,
    explanation: "Admiral Krishna Swaminathan became the 27th Chief of the Naval Staff on 31 May 2026, succeeding Admiral Dinesh K. Tripathi. He earlier headed the Western Naval Command.",
  },
  // src: https://www.newsonair.gov.in/miss-mexico-fatima-bosch-wins-miss-universe-2025-in-thailand (21 Nov 2025)
  {
    id: "ca-b-32", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Fatima Bosch, crowned Miss Universe 2025 in Bangkok in November 2025, represents which country?",
    options: ["Thailand", "Venezuela", "Mexico", "Philippines"], correct: 2,
    explanation: "Fatima Bosch of Mexico won the 74th Miss Universe pageant in Bangkok, Thailand, on 21 November 2025. She is the fourth Miss Universe from Mexico.",
  },
  // src: https://www.forbesindia.com/article/news/rbi-mpc-live-updates-august-2026-repo-rate-sanjay-malhotra-policy-announcement-liveblog/2996705/1 (Aug 2026)
  {
    id: "ca-b-33", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "At its August 2026 monetary policy meeting, at what level did the RBI keep the repo rate?",
    options: ["5.50%", "5.25%", "6.00%", "5.00%"], correct: 1,
    explanation: "As of August 2026, the RBI's Monetary Policy Committee kept the repo rate unchanged at 5.25% with a neutral stance. The repo rate changes over time, so check the latest policy before the exam.",
  },
  // src: https://www.fide.com/javokhir-sindarov-crowned-2025-fide-world-cup-champion/ (26 Nov 2025)
  {
    id: "ca-b-34", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which Indian state hosted the FIDE Chess World Cup 2025, won by Javokhir Sindarov of Uzbekistan?",
    options: ["Goa", "Tamil Nadu", "West Bengal", "Delhi"], correct: 0,
    explanation: "The FIDE World Cup 2025 was held in Goa. 19-year-old Javokhir Sindarov beat China's Wei Yi in the final tiebreaks to become the youngest World Cup winner.",
  },
  // src: https://www.olympics.com/en/news/wimbledon-2026-tennis-results-scores-complete-list (Jul 2026)
  {
    id: "ca-b-35", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who won the men's singles title at Wimbledon 2026?",
    options: ["Carlos Alcaraz", "Novak Djokovic", "Alexander Zverev", "Jannik Sinner"], correct: 3,
    explanation: "Jannik Sinner of Italy beat Alexander Zverev in four sets in the Wimbledon 2026 final. It was Sinner's second Wimbledon title.",
  },
  // src: https://www.newsonair.gov.in/india-launches-heaviest-military-communication-satellite-cms-03-from-sriharikota (2 Nov 2025)
  {
    id: "ca-b-36", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "On 2 November 2025, ISRO launched CMS-03, the heaviest communication satellite launched from Indian soil, using which rocket?",
    options: ["PSLV", "GSLV Mk II", "LVM3", "SSLV"], correct: 2,
    explanation: "CMS-03 was launched on the LVM3-M5 mission from Satish Dhawan Space Centre, Sriharikota, on 2 November 2025. It is a multiband communication satellite placed in geosynchronous transfer orbit.",
  },
  // src: https://www.nobelprize.org/prizes/literature/2025/summary/ (9 Oct 2025)
  {
    id: "ca-b-37", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Who was awarded the Nobel Prize in Literature 2025?",
    options: ["Laszlo Krasznahorkai", "Han Kang", "Jon Fosse", "Salman Rushdie"], correct: 0,
    explanation: "Hungarian author Laszlo Krasznahorkai won the Nobel Prize in Literature 2025. Han Kang (2024) and Jon Fosse (2023) were the two previous winners.",
  },
  // src: https://www.olympics.com/en/milano-cortina-2026/medals (Feb 2026)
  {
    id: "ca-b-38", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which country topped the medal table at the Milano Cortina 2026 Winter Olympics in Italy?",
    options: ["United States", "Germany", "Norway", "Italy"], correct: 2,
    explanation: "Norway topped the Milano Cortina 2026 medal table with 18 gold medals, a record for one nation at a Winter Olympics. The United States finished second.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219065&reg=3&lang=1 (27 Jan 2026)
  {
    id: "ca-b-39", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Which European Commission President jointly announced the conclusion of the India-EU Free Trade Agreement with PM Modi in New Delhi in January 2026?",
    options: ["Christine Lagarde", "Roberta Metsola", "Kaja Kallas", "Ursula von der Leyen"], correct: 3,
    explanation: "Prime Minister Narendra Modi and European Commission President Ursula von der Leyen announced the conclusion of the India-EU FTA at the India-EU Summit on 27 January 2026.",
  },
  // src: https://www.si.com/soccer/ballon-dor-2025-winners-full-list (22 Sep 2025)
  {
    id: "ca-b-40", section: "gk", topic: "Current affairs", level: "beginner", difficulty: "medium",
    stem: "Aitana Bonmati won the Ballon d'Or Feminin for the third year in a row in September 2025. Which country does she play for?",
    options: ["England", "Spain", "France", "Brazil"], correct: 1,
    explanation: "Spain and FC Barcelona midfielder Aitana Bonmati won her third straight Ballon d'Or Feminin in 2025. She is the first woman to win the award three times.",
  },

  // ---------------- Proficient (finer details) ----------------

  // src: https://www.espn.com/commonwealth-games/story/_/id/49509606/india-commonwealth-games-2026-live-updates-scores-news-results-commentary-schedule-timings-august-02-sunday-cwg-glasgow (2 Aug 2026)
  {
    id: "ca-p-01", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "How many medals did India win in total at the Glasgow 2026 Commonwealth Games (23 July to 2 August 2026)?",
    options: ["61", "45", "39", "33"], correct: 2,
    explanation: "India won 39 medals (13 gold, 17 silver, 9 bronze) at Glasgow 2026 and finished fourth. The reduced programme left out sports such as wrestling, badminton, hockey and shooting; boxing gave India a record seven golds.",
  },
  // src: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2218547&reg=3&lang=1 (25 Jan 2026)
  {
    id: "ca-p-02", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "How many Padma awards in total were announced on the eve of Republic Day 2026?",
    options: ["139", "131", "132", "128"], correct: 1,
    explanation: "The 2026 list had 131 Padma awards: 5 Padma Vibhushan, 13 Padma Bhushan and 113 Padma Shri. It included 19 women and 16 posthumous awardees.",
  },
  // src: https://www.olympics.com/en/news/wimbledon-2026-tennis-results-scores-complete-list (Jul 2026)
  {
    id: "ca-p-03", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who won the women's singles title at Wimbledon 2026, her first Grand Slam title?",
    options: ["Aryna Sabalenka", "Iga Swiatek", "Karolina Muchova", "Linda Noskova"], correct: 3,
    explanation: "Linda Noskova of the Czech Republic beat compatriot Karolina Muchova 6-2, 5-7, 6-3 in the Wimbledon 2026 final. Aged 21, she became the youngest Wimbledon women's champion since Petra Kvitova in 2011.",
  },
  // src: https://www.npr.org/2026/05/19/nx-s1-5823677/2026-booker-prize-winner-taiwan-travelogue (19 May 2026)
  {
    id: "ca-p-04", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which novel won the International Booker Prize 2026?",
    options: ["Heart Lamp", "Taiwan Travelogue", "Kairos", "Flesh"], correct: 1,
    explanation: "'Taiwan Travelogue' by Yang Shuang-zi, translated by Lin King, won the International Booker Prize 2026 on 19 May 2026. It is the first book by a Taiwanese author to win the prize. 'Heart Lamp' by Banu Mushtaq won in 2025.",
  },
  // src: https://www.fide.com/geneva-to-host-fide-world-championship-match-2026/ (2026)
  {
    id: "ca-p-05", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The FIDE Candidates Tournament 2026, won by Javokhir Sindarov, was held in which country?",
    options: ["Canada", "Spain", "Cyprus", "Germany"], correct: 2,
    explanation: "Javokhir Sindarov of Uzbekistan won the Candidates Tournament 2026 in Cyprus with a round to spare. This earned him a World Championship match against India's D. Gukesh.",
  },
  // src: https://www.fide.com/geneva-to-host-fide-world-championship-match-2026/ (2026)
  {
    id: "ca-p-06", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which city will host the FIDE World Chess Championship 2026 match between D. Gukesh and Javokhir Sindarov?",
    options: ["Singapore", "Geneva", "London", "Chennai"], correct: 1,
    explanation: "FIDE announced that Geneva, Switzerland, will host the 2026 World Championship match in November–December 2026. Gukesh won the title in Singapore in December 2024.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228777&reg=48&lang=2 (Feb 2026)
  {
    id: "ca-p-07", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The India AI Impact Summit 2026 was built on three 'Sutras'. Which set is correct?",
    options: ["People, Planet and Progress", "Peace, Prosperity and Progress", "People, Profit and Planet", "Trust, Talent and Technology"], correct: 0,
    explanation: "The summit's three Sutras were People, Planet and Progress. Discussions were organised under seven thematic 'Chakras', such as Human Capital, Inclusion and Safe and Trusted AI.",
  },
  // src: https://www.businesstoday.in/amp/india/story/vice-president-elections-2025-cp-radhakrishnan-becomes-15th-v-p-of-india-defeats-justice-sudershan-reddy-by-152-votes-493282-2025-09-09 (9 Sep 2025)
  {
    id: "ca-p-08", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "At the time of his election as Vice President in September 2025, C.P. Radhakrishnan was serving as Governor of which state?",
    options: ["Kerala", "Telangana", "Tamil Nadu", "Maharashtra"], correct: 3,
    explanation: "C.P. Radhakrishnan was Governor of Maharashtra when he was elected Vice President. He won 452 of 767 votes cast, a margin of 152 votes. He is a two-time Lok Sabha MP from Coimbatore.",
  },
  // src: https://www.icc-cricket.com/tournaments/womens-cricket-worldcup-2025/news/live-india-south-africa-eye-maiden-title-at-cwc25-final (2 Nov 2025)
  {
    id: "ca-p-09", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who was named Player of the Match in the final of the ICC Women's World Cup 2025, which India won?",
    options: ["Deepti Sharma", "Smriti Mandhana", "Shafali Verma", "Harmanpreet Kaur"], correct: 2,
    explanation: "Shafali Verma scored 87 and also took wickets in the final against South Africa, earning Player of the Match. India posted 298 and bowled South Africa out for 246 to win by 52 runs.",
  },
  // src: https://thebookerprizes.com/media-centre/press-releases/flesh-by-david-szalay-wins-the-booker-prize-2025 (10 Nov 2025)
  {
    id: "ca-p-10", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "David Szalay won the Booker Prize 2025 for which novel?",
    options: ["Orbital", "Flesh", "Prophet Song", "Held"], correct: 1,
    explanation: "David Szalay won the Booker Prize 2025 for 'Flesh', announced in London on 10 November 2025. He is the first Hungarian-British author to win the prize.",
  },
  // src: https://www.newsonair.gov.in/india-launches-heaviest-military-communication-satellite-cms-03-from-sriharikota (2 Nov 2025)
  {
    id: "ca-p-11", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was the approximate mass of CMS-03, the communication satellite ISRO launched on LVM3-M5 in November 2025?",
    options: ["About 3,400 kg", "About 5,800 kg", "About 2,250 kg", "About 4,410 kg"], correct: 3,
    explanation: "CMS-03 weighed about 4,410 kg, the heaviest communication satellite launched to geosynchronous transfer orbit from Indian soil. It was the fifth operational flight of LVM3.",
  },
  // src: https://www.carbonbrief.org/cop30-key-outcomes-agreed-at-the-un-climate-talks-in-belem (Nov 2025)
  {
    id: "ca-p-12", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which city will host COP31 in 2026, under an arrangement in which Australia leads the negotiations?",
    options: ["Antalya, Turkiye", "Adelaide, Australia", "Istanbul, Turkiye", "Bonn, Germany"], correct: 0,
    explanation: "At COP30 it was agreed that Turkiye will host COP31 in Antalya, while Australia will lead the negotiations and host a pre-COP event in the Pacific.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2221455&lang=1&reg=3 (1 Feb 2026)
  {
    id: "ca-p-13", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What fiscal deficit target was set for 2026-27 in the Union Budget presented on 1 February 2026?",
    options: ["4.4% of GDP", "4.3% of GDP", "4.0% of GDP", "4.8% of GDP"], correct: 1,
    explanation: "Finance Minister Nirmala Sitharaman set the 2026-27 fiscal deficit target at 4.3% of GDP, down from a revised 4.4% for 2025-26. The government also aims to bring debt to about 50% of GDP by 2030-31.",
  },
  // src: https://www.mea.gov.in/press-releases.htm?dtl%2F40313%2FVisit+of+Prime+Minister+to+Johannesburg+South+Africa+for+the+G20+Leaders+Summit+November+21++23+2025= (Nov 2025)
  {
    id: "ca-p-14", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was the theme of South Africa's G20 Presidency in 2025?",
    options: ["One Earth, One Family, One Future", "Building a Just World and a Sustainable Planet", "Solidarity, Equality and Sustainability", "Recover Together, Recover Stronger"], correct: 2,
    explanation: "South Africa's 2025 G20 theme was 'Solidarity, Equality and Sustainability'. India's 2023 theme was 'One Earth, One Family, One Future' and Brazil's 2024 theme was 'Building a Just World and a Sustainable Planet'.",
  },
  // src: https://universalinstitutions.com/vinod-kumar-shukla-59th-jnanpith-award-winner/ (Nov 2025)
  {
    id: "ca-p-15", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Hindi writer Vinod Kumar Shukla, who was presented the 59th Jnanpith Award at his home in November 2025, belongs to which state?",
    options: ["Madhya Pradesh", "Chhattisgarh", "Uttar Pradesh", "Bihar"], correct: 1,
    explanation: "Vinod Kumar Shukla of Chhattisgarh was named the 59th Jnanpith awardee in March 2025 and received the award at his home in Raipur on 21 November 2025. He is the first Hindi writer from Chhattisgarh to get the honour.",
  },
  // src: https://www.olympics.com/en/milano-cortina-2026/medals (Feb 2026)
  {
    id: "ca-p-16", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which athlete won six gold medals at the Milano Cortina 2026 Winter Olympics, a record for individual golds at a single Winter Games?",
    options: ["Mikaela Shiffrin", "Jessie Diggins", "Johannes Hosflot Klaebo", "Marit Bjorgen"], correct: 2,
    explanation: "Norwegian cross-country skier Johannes Hosflot Klaebo won six gold medals at Milano Cortina 2026. His wins helped Norway top the medal table with 18 golds.",
  },
  // src: https://telanganatoday.com/india-ranks-131st-in-global-gender-gap-index-2026 (Jun 2026)
  {
    id: "ca-p-17", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was India's rank in the World Economic Forum's Global Gender Gap Index 2026?",
    options: ["129th", "131st", "127th", "140th"], correct: 1,
    explanation: "India ranked 131st in the Global Gender Gap Index 2026, the same rank as in 2025, with an overall parity score of about 64.5%. Iceland was ranked first.",
  },
  // src: https://www.navy.mil/Press-Office/News-Stories/display-news/Article/4338421/guam-hosts-australia-india-japan-and-us-forces-in-exercise-malabar-2025/ (Nov 2025)
  {
    id: "ca-p-18", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Exercise Malabar 2025, held in November 2025 with Australia, India, Japan and the USA, took place in and around which location?",
    options: ["Guam", "Visakhapatnam", "Okinawa", "Darwin"], correct: 0,
    explanation: "Malabar 2025 was held around Guam from 10 to 18 November 2025. India was represented by the indigenous stealth frigate INS Sahyadri. Malabar began in 1992 as an India-US bilateral exercise.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2162738&reg=48&lang=2 (Aug 2025)
  {
    id: "ca-p-19", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Where was the 21st edition of the India-US joint military exercise Yudh Abhyas held in September 2025?",
    options: ["Mahajan Field Firing Range, Rajasthan", "Fort Wainwright, Alaska", "Joint Base Lewis-McChord, Washington", "Auli, Uttarakhand"], correct: 1,
    explanation: "Yudh Abhyas 2025 was held at Fort Wainwright, Alaska, from 1 to 14 September 2025. The Indian contingent was led by a battalion of the Madras Regiment.",
  },
  // src: https://www.adani.com/newsroom/media-releases/pm-modi-inaugurates-navi-mumbai-international-airport (8 Oct 2025)
  {
    id: "ca-p-20", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The Navi Mumbai International Airport, inaugurated on 8 October 2025, is named after which leader?",
    options: ["Chhatrapati Shivaji Maharaj", "Balasaheb Thackeray", "Loknete D.B. Patil", "Yashwantrao Chavan"], correct: 2,
    explanation: "The airport is named after Loknete D.B. (Dinkar Balu) Patil, a farmers' leader who campaigned for fair compensation for land given for Navi Mumbai. Prime Minister Modi inaugurated it on 8 October 2025.",
  },
  // src: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/sep/doc202594628401.pdf (Sep 2025)
  {
    id: "ca-p-21", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Under the GST reforms effective 22 September 2025, a special rate of 40% applies to which category?",
    options: ["Life-saving medicines", "Packaged food items", "Electric vehicles", "Luxury and sin goods such as pan masala and aerated drinks"], correct: 3,
    explanation: "Alongside the 5% and 18% slabs, a 40% rate was set for luxury and sin goods such as pan masala, aerated drinks, high-end cars and yachts. The reforms were approved at the 56th GST Council meeting.",
  },
  // src: https://news.un.org/en/story/2026/06/1167626 (2 Jun 2026)
  {
    id: "ca-p-22", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who was elected President of the 81st session of the UN General Assembly in June 2026?",
    options: ["Annalena Baerbock", "Philemon Yang", "Khalilur Rahman", "Andreas Kakouris"], correct: 2,
    explanation: "Khalilur Rahman of Bangladesh was elected on 2 June 2026, winning 99 votes to 91 for Andreas Kakouris of Cyprus. His one-year term began in September 2026; the post rotated to the Asia-Pacific group.",
  },
  // src: https://www.un.org/en/delegate/annalena-baerbock-elected-president-80th-general-assembly (Jun 2025)
  {
    id: "ca-p-23", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Annalena Baerbock, who presided over the 80th session of the UN General Assembly (2025-26), is a former foreign minister of which country?",
    options: ["Germany", "Austria", "Netherlands", "Sweden"], correct: 0,
    explanation: "Annalena Baerbock of Germany presided over the 80th UNGA session from September 2025. She was the first woman from the Western European group to hold the post and the fifth woman overall.",
  },
  // src: https://www.nobelprize.org/all-nobel-prizes-2025/ (7 Oct 2025)
  {
    id: "ca-p-24", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The Nobel Prize in Physics 2025 (John Clarke, Michel Devoret and John Martinis) was awarded for which work?",
    options: ["Machine learning with artificial neural networks", "Macroscopic quantum tunnelling and energy quantisation in an electric circuit", "Attosecond pulses of light", "Detection of gravitational waves"], correct: 1,
    explanation: "The 2025 Physics Nobel recognised the discovery of macroscopic quantum tunnelling and energy quantisation in an electric circuit. This work underpins superconducting quantum technologies. The 2024 prize was for artificial neural networks.",
  },
  // src: https://www.nobelprize.org/all-nobel-prizes-2025/ (8 Oct 2025)
  {
    id: "ca-p-25", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The Nobel Prize in Chemistry 2025 was awarded for the development of ____.",
    options: ["click chemistry", "protein structure prediction", "quantum dots", "metal-organic frameworks"], correct: 3,
    explanation: "Susumu Kitagawa, Richard Robson and Omar Yaghi won the 2025 Chemistry Nobel for developing metal-organic frameworks (MOFs). MOFs can be used to capture carbon dioxide and harvest water from desert air.",
  },
  // src: https://www.nobelprize.org/all-nobel-prizes-2025/ (6 Oct 2025)
  {
    id: "ca-p-26", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The Nobel Prize in Physiology or Medicine 2025 (Mary Brunkow, Fred Ramsdell and Shimon Sakaguchi) was for discoveries about ____.",
    options: ["microRNA", "mRNA vaccines", "how the immune system is stopped from attacking the body's own tissues", "the hepatitis C virus"], correct: 2,
    explanation: "The 2025 Medicine Nobel was for discoveries on peripheral immune tolerance, that is, how the body stops the immune system from attacking itself. The 2024 prize was for the discovery of microRNA.",
  },
  // src: https://www.rappler.com/world/asia-pacific/2026-ramon-magsaysay-awardees/ (31 Aug 2026)
  {
    id: "ca-p-27", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Tommy Koh, one of the 2026 Ramon Magsaysay awardees and known for his role in the UN Law of the Sea (UNCLOS) negotiations, is a diplomat from which country?",
    options: ["Malaysia", "Singapore", "Indonesia", "Philippines"], correct: 1,
    explanation: "Singaporean diplomat Tommy Koh was among the 2026 Ramon Magsaysay awardees announced on 31 August 2026, along with Runa Khan of Bangladesh and Bo Kyi of Myanmar. The award is often called 'Asia's Nobel Prize'.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2219065&reg=3&lang=1 (27 Jan 2026)
  {
    id: "ca-p-28", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The conclusion of the India-EU Free Trade Agreement was announced at which edition of the India-EU Summit in January 2026?",
    options: ["14th", "15th", "16th", "18th"], correct: 2,
    explanation: "The India-EU FTA was announced at the 16th India-EU Summit in New Delhi on 27 January 2026. Negotiations had been relaunched in 2022.",
  },
  // src: https://www.fih.hockey/hero-asia-cup-rajgir-/news/india-crowned-champions-of-hero-asia-cup-rajgir-bihar-2025-qualify-for-fih-mens-hockey-world-cup-2026-rajgir-bihar-september-7-2025 (7 Sep 2025)
  {
    id: "ca-p-29", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "By winning the Men's Hockey Asia Cup 2025, India qualified for the FIH Men's Hockey World Cup 2026, hosted by which countries?",
    options: ["India and Malaysia", "Spain and Germany", "Australia and New Zealand", "Belgium and the Netherlands"], correct: 3,
    explanation: "India's 4-1 win over South Korea in the Rajgir final earned a place at the 2026 World Cup in Belgium and the Netherlands. It was India's first Asia Cup title since 2017.",
  },
  // src: https://www.olympics.com/en/news/asia-cup-2025-final-cricket-india-vs-pakistan-match-report (28 Sep 2025)
  {
    id: "ca-p-30", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "India's victory in the Asia Cup 2025 final in Dubai was its ____ Asia Cup cricket title.",
    options: ["seventh", "eighth", "ninth", "tenth"], correct: 2,
    explanation: "The 2025 win was India's ninth Asia Cup title and its second in a row, after the 2023 ODI edition. India chased 147 against Pakistan with two balls to spare.",
  },
  // src: https://www.tribuneindia.com/news/india/justice-surya-kant-sworn-in-as-53rd-cji/ (24 Nov 2025)
  {
    id: "ca-p-31", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Justice Surya Kant, the 53rd Chief Justice of India, succeeded which CJI?",
    options: ["Justice Sanjiv Khanna", "Justice B.R. Gavai", "Justice D.Y. Chandrachud", "Justice U.U. Lalit"], correct: 1,
    explanation: "Justice Surya Kant succeeded Justice B.R. Gavai, who retired on 23 November 2025 after a little over six months as CJI. Justice Kant took oath in Hindi on 24 November 2025.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2279326&reg=3&lang=1 (30 Jun 2026)
  {
    id: "ca-p-32", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "General Dhiraj Seth, who took over on 30 June 2026, is India's ____ Chief of the Army Staff.",
    options: ["29th", "30th", "31st", "32nd"], correct: 2,
    explanation: "General Dhiraj Seth became the 31st Chief of the Army Staff, succeeding General Upendra Dwivedi. He was commissioned into the Armoured Corps in December 1986.",
  },
  // src: https://www.forbesindia.com/article/news/deep-dive/why-gslv-f17-is-more-than-just-isros-first-successful-launch-of-2026/2997878/1 (Sep 2026)
  {
    id: "ca-p-33", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "In September 2026, which ISRO rocket successfully placed the EOS-05 Earth observation satellite in orbit, ISRO's first successful launch of 2026?",
    options: ["GSLV-F17", "PSLV-C62", "LVM3-M7", "SSLV-D4"], correct: 0,
    explanation: "GSLV-F17 launched EOS-05 on 4 September 2026. It followed the PSLV-C62 mission of January 2026, which failed to place its satellites in the intended orbit due to a third-stage anomaly.",
  },
  // src: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2221455&lang=1&reg=3 (1 Feb 2026)
  {
    id: "ca-p-34", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "What was the capital expenditure allocation in the Union Budget 2026-27?",
    options: ["Rs 11.2 lakh crore", "Rs 12.2 lakh crore", "Rs 10.0 lakh crore", "Rs 15.5 lakh crore"], correct: 1,
    explanation: "The Union Budget 2026-27 raised capital expenditure to about Rs 12.2 lakh crore to keep up the push on infrastructure. The fiscal deficit target was set at 4.3% of GDP.",
  },
  // src: https://www.cbsnews.com/news/2026-fifa-world-cup-final-spain-argentina-sunday/ (19 Jul 2026)
  {
    id: "ca-p-35", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Spain's victory at the 2026 FIFA World Cup was its ____ World Cup title.",
    options: ["first", "second", "third", "fourth"], correct: 1,
    explanation: "Spain won its second FIFA World Cup in 2026, after its first title in 2010. Spain conceded only one goal in eight matches, a record for a champion.",
  },
  // src: https://yogajala.com/international-yoga-day-2026-theme-healthy-ageing-kolkata/ (Jun 2026)
  {
    id: "ca-p-36", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Which city hosted the main national event of the 12th International Day of Yoga on 21 June 2026?",
    options: ["Visakhapatnam", "Srinagar", "Kolkata", "Dehradun"], correct: 2,
    explanation: "The Ministry of Ayush chose Kolkata, West Bengal, for the main national celebration of International Day of Yoga 2026. The main event was held in Visakhapatnam in 2025 and Srinagar in 2024.",
  },
  // src: https://abc7news.com/post/oscars-2026-battle-another-wins-best-picture-98th-academy-awards/18719481/ (15 Mar 2026)
  {
    id: "ca-p-37", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Who directed 'One Battle After Another', winner of Best Picture and Best Director at the 98th Academy Awards?",
    options: ["Christopher Nolan", "Ryan Coogler", "Chloe Zhao", "Paul Thomas Anderson"], correct: 3,
    explanation: "Paul Thomas Anderson directed 'One Battle After Another' and won Best Director and Best Adapted Screenplay. The film won six Oscars in all at the March 2026 ceremony.",
  },
  // src: https://www.olympics.com/en/news/commonwealth-games-2030-amdavad-next-host-edition-faqs (Nov 2025)
  {
    id: "ca-p-38", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "The 2030 Commonwealth Games in Ahmedabad will be the centenary edition. Where were the first Games (then the British Empire Games) held in 1930?",
    options: ["London, England", "Hamilton, Canada", "Sydney, Australia", "Glasgow, Scotland"], correct: 1,
    explanation: "The first Games were held in Hamilton, Canada, in 1930 as the British Empire Games. Ahmedabad was unanimously endorsed by the 74 Commonwealth Sport members on 26 November 2025.",
  },
  // src: https://www.insightsonindia.com/2025/09/13/bairabi-sairang-railway-line/ (13 Sep 2025)
  {
    id: "ca-p-39", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "With the Bairabi-Sairang line (September 2025), Aizawl became the ____ north-eastern state capital connected to the Indian Railways network.",
    options: ["second", "third", "fourth", "fifth"], correct: 2,
    explanation: "Aizawl became the fourth north-eastern capital on the rail network, after Guwahati, Agartala and Itanagar. The Bairabi-Sairang line is about 51 km long.",
  },
  // src: https://www.europarl.europa.eu/thinktank/en/document/EPRS_BRI(2025)777965 (Oct 2025)
  {
    id: "ca-p-40", section: "gk", topic: "Current affairs", level: "proficient", difficulty: "hard",
    stem: "Sanae Takaichi, who took office in October 2025, is Japan's ____ Prime Minister.",
    options: ["104th", "100th", "102nd", "106th"], correct: 0,
    explanation: "Sanae Takaichi became Japan's 104th Prime Minister on 21 October 2025 and its first woman PM. She leads a coalition of the LDP and the Japan Innovation Party (Ishin).",
  },
];

/** Hindi versions, keyed by id. Options index-aligned with the English. */
export const caNationalHi: Record<string, { stem: string; options: string[]; explanation: string }> = {
  "ca-b-01": {
    stem: "8 मार्च 2026 को अहमदाबाद में फाइनल में न्यूज़ीलैंड को हराकर ICC पुरुष T20 विश्व कप 2026 किस टीम ने जीता?",
    options: ["ऑस्ट्रेलिया", "भारत", "दक्षिण अफ्रीका", "इंग्लैंड"],
    explanation: "भारत ने 8 मार्च 2026 को नरेंद्र मोदी स्टेडियम, अहमदाबाद में फाइनल में न्यूज़ीलैंड को 96 रनों से हराया। भारत तीन पुरुष T20 विश्व कप जीतने वाली पहली टीम और खिताब जीतने वाला पहला मेज़बान देश बना।",
  },
  "ca-b-02": {
    stem: "19 जुलाई 2026 को फाइनल में अर्जेंटीना को अतिरिक्त समय में 1-0 से हराकर फीफा विश्व कप 2026 किस देश ने जीता?",
    options: ["फ्रांस", "ब्राज़ील", "जर्मनी", "स्पेन"],
    explanation: "स्पेन ने 19 जुलाई 2026 को न्यूयॉर्क न्यूजर्सी स्टेडियम में फाइनल में अर्जेंटीना को अतिरिक्त समय में 1-0 से हराया। 2026 विश्व कप की मेज़बानी अमेरिका, कनाडा और मेक्सिको ने मिलकर की।",
  },
  "ca-b-03": {
    stem: "फाइनल में गुजरात टाइटन्स को हराकर IPL 2026 का खिताब किस फ्रैंचाइज़ी ने जीता?",
    options: ["रॉयल चैलेंजर्स बेंगलुरु", "मुंबई इंडियंस", "चेन्नई सुपर किंग्स", "पंजाब किंग्स"],
    explanation: "रॉयल चैलेंजर्स बेंगलुरु ने अहमदाबाद में IPL 2026 के फाइनल में गुजरात टाइटन्स को पाँच विकेट से हराया, विराट कोहली ने नाबाद 75 रन बनाए। यह RCB का लगातार दूसरा IPL खिताब था।",
  },
  "ca-b-04": {
    stem: "नवंबर 2025 में भारत ने फाइनल में किस टीम को हराकर अपना पहला ICC महिला वनडे विश्व कप खिताब जीता?",
    options: ["ऑस्ट्रेलिया", "इंग्लैंड", "दक्षिण अफ्रीका", "न्यूज़ीलैंड"],
    explanation: "भारत ने 2 नवंबर 2025 को डॉ. डी.वाई. पाटिल स्टेडियम, नवी मुंबई में फाइनल में दक्षिण अफ्रीका को 52 रनों से हराया। यह भारत का पहला महिला विश्व कप खिताब था, जो उसके तीसरे फाइनल में आया।",
  },
  "ca-b-05": {
    stem: "नवंबर 2025 में किस भारतीय शहर को 2030 राष्ट्रमंडल खेलों के मेज़बान के रूप में पुष्टि मिली?",
    options: ["नई दिल्ली", "अहमदाबाद", "भुवनेश्वर", "मुंबई"],
    explanation: "26 नवंबर 2025 को ग्लासगो में कॉमनवेल्थ स्पोर्ट की महासभा में अहमदाबाद को औपचारिक रूप से 2030 राष्ट्रमंडल खेल सौंपे गए। 2030 का संस्करण शताब्दी खेल होगा, जिसका नाम 'अमदावाद 2030' रखा गया है।",
  },
  "ca-b-06": {
    stem: "24 नवंबर 2025 को भारत के 53वें मुख्य न्यायाधीश के रूप में किसने शपथ ली?",
    options: ["न्यायमूर्ति सूर्यकांत", "न्यायमूर्ति बी.आर. गवई", "न्यायमूर्ति विक्रम नाथ", "न्यायमूर्ति बी.वी. नागरत्ना"],
    explanation: "राष्ट्रपति द्रौपदी मुर्मु ने 24 नवंबर 2025 को न्यायमूर्ति सूर्यकांत को 53वें CJI के रूप में शपथ दिलाई। उन्होंने न्यायमूर्ति बी.आर. गवई का स्थान लिया और उनका कार्यकाल फरवरी 2027 तक है।",
  },
  "ca-b-07": {
    stem: "सितंबर 2025 में भारत के 15वें उपराष्ट्रपति के रूप में कौन निर्वाचित हुए?",
    options: ["जगदीप धनखड़", "बी. सुदर्शन रेड्डी", "ओम बिरला", "सी.पी. राधाकृष्णन"],
    explanation: "सी.पी. राधाकृष्णन 9 सितंबर 2025 को 452 मतों के साथ उपराष्ट्रपति चुने गए और 12 सितंबर 2025 को शपथ ली। उपराष्ट्रपति राज्यसभा के पदेन सभापति भी होते हैं।",
  },
  "ca-b-08": {
    stem: "नोबेल शांति पुरस्कार 2025 किसे प्रदान किया गया?",
    options: ["नरगिस मोहम्मदी", "मलाला यूसुफ़ज़ई", "मारिया कोरीना मचाडो", "एलेस बियालियात्स्की"],
    explanation: "नोबेल शांति पुरस्कार 2025 वेनेज़ुएला की मारिया कोरीना मचाडो को वेनेज़ुएला के लोगों के लोकतांत्रिक अधिकारों के लिए उनके कार्य हेतु दिया गया। शांति पुरस्कार की घोषणा ओस्लो में नॉर्वेजियन नोबेल समिति करती है।",
  },
  "ca-b-09": {
    stem: "ग्लोबल साउथ में आयोजित अपनी तरह का पहला वैश्विक AI शिखर सम्मेलन, इंडिया AI इम्पैक्ट समिट 2026, फरवरी 2026 में किस स्थान पर हुआ?",
    options: ["यशोभूमि, नई दिल्ली", "भारत मंडपम, नई दिल्ली", "जियो वर्ल्ड सेंटर, मुंबई", "महात्मा मंदिर, गांधीनगर"],
    explanation: "इंडिया AI इम्पैक्ट समिट 2026 का आयोजन 16 से 20 फरवरी 2026 तक भारत मंडपम, नई दिल्ली में हुआ। इसमें 20 से अधिक राष्ट्राध्यक्षों और शासनाध्यक्षों ने भाग लिया।",
  },
  "ca-b-10": {
    stem: "जनवरी 2026 में भारत ने किस साझेदार के साथ मुक्त व्यापार समझौते की वार्ता पूरी की, जिस पर लगभग दो दशक पहले बातचीत शुरू हुई थी?",
    options: ["यूरोपीय संघ", "कनाडा", "आसियान", "खाड़ी सहयोग परिषद"],
    explanation: "भारत और यूरोपीय संघ ने 27 जनवरी 2026 को नई दिल्ली में भारत-EU मुक्त व्यापार समझौते की वार्ता पूरी होने की घोषणा की। यह समझौता लगभग दो अरब लोगों का मुक्त व्यापार क्षेत्र बनाता है।",
  },
  "ca-b-11": {
    stem: "अक्टूबर 2025 में जापान की पहली महिला प्रधानमंत्री कौन बनीं?",
    options: ["योको कामिकावा", "सनाए ताकाइची", "युरिको कोइके", "सेइको नोदा"],
    explanation: "लिबरल डेमोक्रेटिक पार्टी का नेतृत्व जीतने के बाद सनाए ताकाइची को 21 अक्टूबर 2025 को जापान की संसद (डायट) ने प्रधानमंत्री चुना। वे जापान की पहली महिला प्रधानमंत्री हैं।",
  },
  "ca-b-12": {
    stem: "नवंबर 2025 में COP30 संयुक्त राष्ट्र जलवायु परिवर्तन सम्मेलन किस शहर में हुआ?",
    options: ["बाकू", "दुबई", "बेलेम", "रियो डी जेनेरो"],
    explanation: "COP30 ब्राज़ील के अमेज़न क्षेत्र के शहर बेलेम में हुआ और 23 नवंबर 2025 को समाप्त हुआ। ब्राज़ील की अध्यक्षता ने इसे 'ग्लोबल मुतिराओ' यानी सामूहिक प्रयास का नाम दिया।",
  },
  "ca-b-13": {
    stem: "नवंबर 2025 का G20 नेताओं का शिखर सम्मेलन, जो अफ्रीकी महाद्वीप पर होने वाला पहला G20 शिखर सम्मेलन था, किस शहर में हुआ?",
    options: ["काहिरा", "नैरोबी", "केप टाउन", "जोहान्सबर्ग"],
    explanation: "दक्षिण अफ्रीका ने 22 और 23 नवंबर 2025 को जोहान्सबर्ग में 20वें G20 नेताओं के शिखर सम्मेलन की मेज़बानी की। यह अफ्रीका में हुआ पहला G20 शिखर सम्मेलन था।",
  },
  "ca-b-14": {
    stem: "23 सितंबर 2025 को 71वें राष्ट्रीय फिल्म पुरस्कार समारोह में किस अभिनेता को (वर्ष 2023 का) दादासाहेब फाल्के पुरस्कार मिला?",
    options: ["मम्मूटी", "मोहनलाल", "रजनीकांत", "कमल हासन"],
    explanation: "मलयालम अभिनेता, निर्देशक और निर्माता मोहनलाल को 23 सितंबर 2025 को वर्ष 2023 का दादासाहेब फाल्के पुरस्कार मिला। अडूर गोपालकृष्णन (2004) के बाद यह सम्मान पाने वाले वे दूसरे मलयालम फिल्मकार हैं।",
  },
  "ca-b-15": {
    stem: "मार्च 2026 में 98वें अकादमी पुरस्कार (ऑस्कर) में सर्वश्रेष्ठ फिल्म का पुरस्कार किस फिल्म ने जीता?",
    options: ["सिनर्स", "हैमनेट", "वन बैटल आफ्टर अनदर", "मार्टी सुप्रीम"],
    explanation: "पॉल थॉमस एंडरसन द्वारा निर्देशित 'वन बैटल आफ्टर अनदर' ने 98वें अकादमी पुरस्कार में सर्वश्रेष्ठ फिल्म का पुरस्कार जीता। फिल्म ने सर्वश्रेष्ठ निर्देशक सहित कुल छह ऑस्कर जीते।",
  },
  "ca-b-16": {
    stem: "सितंबर 2025 में भारत ने पुरुष हॉकी एशिया कप 2025 जीता। यह टूर्नामेंट कहाँ आयोजित हुआ?",
    options: ["भुवनेश्वर, ओडिशा", "रांची, झारखंड", "राजगीर, बिहार", "चेन्नई, तमिलनाडु"],
    explanation: "पुरुष हॉकी एशिया कप 2025 का आयोजन 29 अगस्त से 7 सितंबर 2025 तक बिहार के राजगीर खेल परिसर में हुआ। भारत ने फाइनल में दक्षिण कोरिया को 4-1 से हराकर चौथी बार एशिया कप जीता।",
  },
  "ca-b-17": {
    stem: "28 सितंबर 2025 को दुबई में भारत ने फाइनल में किस टीम को हराकर पुरुष T20 एशिया कप 2025 जीता?",
    options: ["श्रीलंका", "बांग्लादेश", "अफगानिस्तान", "पाकिस्तान"],
    explanation: "भारत ने दुबई में एशिया कप 2025 के फाइनल में पाकिस्तान को पाँच विकेट से हराया। कुलदीप यादव ने 30 रन देकर 4 विकेट लिए और तिलक वर्मा ने लक्ष्य का पीछा करते हुए नाबाद 69 रन बनाए।",
  },
  "ca-b-18": {
    stem: "लॉर्ड्स में फाइनल में मेज़बान इंग्लैंड को हराकर ICC महिला T20 विश्व कप 2026 किस टीम ने जीता?",
    options: ["ऑस्ट्रेलिया", "भारत", "दक्षिण अफ्रीका", "न्यूज़ीलैंड"],
    explanation: "ऑस्ट्रेलिया ने 5 जुलाई 2026 को लॉर्ड्स, लंदन में फाइनल में इंग्लैंड को सात विकेट से हराया। यह ऑस्ट्रेलिया का सातवाँ महिला T20 विश्व कप खिताब था।",
  },
  "ca-b-19": {
    stem: "22 सितंबर 2025 को पेरिस में प्रदान किया गया पुरुष बैलन डी'ओर 2025 किसने जीता?",
    options: ["लामिन यमाल", "उस्मान डेम्बेले", "किलियन एम्बाप्पे", "मोहम्मद सलाह"],
    explanation: "फ्रांस और पेरिस सेंट-जर्मेन के फॉरवर्ड उस्मान डेम्बेले ने बैलन डी'ओर 2025 जीता। उन्होंने PSG के तिहरे खिताब वाले सत्र में अहम भूमिका निभाई, जिसमें UEFA चैंपियंस लीग भी शामिल थी।",
  },
  "ca-b-20": {
    stem: "अंतर्राष्ट्रीय योग दिवस 2026 (21 जून 2026) का विषय क्या था?",
    options: ["एक पृथ्वी एक स्वास्थ्य के लिए योग", "स्वयं और समाज के लिए योग", "स्वस्थ वृद्धावस्था के लिए योग", "मानवता के लिए योग"],
    explanation: "आयुष मंत्रालय ने 2026 के 12वें अंतर्राष्ट्रीय योग दिवस का विषय 'स्वस्थ वृद्धावस्था के लिए योग' (Yoga for Healthy Ageing) घोषित किया। 2025 का विषय 'एक पृथ्वी एक स्वास्थ्य के लिए योग' था।",
  },
  "ca-b-21": {
    stem: "5 जून 2026 को विश्व पर्यावरण दिवस के वैश्विक आयोजन की मेज़बानी किस देश ने की?",
    options: ["सऊदी अरब", "अज़रबैजान", "कोरिया गणराज्य", "ब्राज़ील"],
    explanation: "अज़रबैजान ने बाकू में विश्व पर्यावरण दिवस 2026 की मेज़बानी की, जिसका केंद्र जलवायु परिवर्तन था। 2025 में कोरिया गणराज्य और 2024 में सऊदी अरब मेज़बान थे।",
  },
  "ca-b-22": {
    stem: "संयुक्त राष्ट्र ने वर्ष 2026 को अंतर्राष्ट्रीय ____ वर्ष घोषित किया है।",
    options: ["मिलेट्स (मोटा अनाज)", "क्वांटम विज्ञान और प्रौद्योगिकी", "सहकारिता", "चरागाह और पशुपालक (रेंजलैंड्स एंड पास्टोरलिस्ट्स)"],
    explanation: "2026 अंतर्राष्ट्रीय चरागाह और पशुपालक वर्ष है, जिसका प्रस्ताव मंगोलिया ने आगे बढ़ाया था। 2026 को अंतर्राष्ट्रीय महिला किसान वर्ष और सतत विकास के लिए स्वयंसेवकों का अंतर्राष्ट्रीय वर्ष भी घोषित किया गया है।",
  },
  "ca-b-23": {
    stem: "मार्च 2026 में जारी विश्व खुशहाली रिपोर्ट 2026 में भारत का स्थान क्या था?",
    options: ["116वाँ", "118वाँ", "126वाँ", "99वाँ"],
    explanation: "विश्व खुशहाली रिपोर्ट 2026 में भारत 147 देशों में 116वें स्थान पर रहा, जो 2025 के 118वें स्थान से बेहतर है। फिनलैंड लगातार नौवें वर्ष पहले स्थान पर रहा।",
  },
  "ca-b-24": {
    stem: "WIPO के वैश्विक नवाचार सूचकांक (GII) 2025 में भारत का स्थान क्या था?",
    options: ["40वाँ", "39वाँ", "38वाँ", "48वाँ"],
    explanation: "वैश्विक नवाचार सूचकांक 2025 में भारत 139 अर्थव्यवस्थाओं में 38वें स्थान पर रहा, जो 2024 के 39वें स्थान से बेहतर है। यह सूचकांक विश्व बौद्धिक संपदा संगठन (WIPO) प्रकाशित करता है।",
  },
  "ca-b-25": {
    stem: "7 नवंबर 2025 को किस रचना के 150 वर्ष पूरे होने के उपलक्ष्य में वर्ष भर चलने वाला राष्ट्रव्यापी स्मरणोत्सव शुरू किया गया?",
    options: ["जन गण मन", "वंदे मातरम्", "सारे जहाँ से अच्छा", "झंडा ऊँचा रहे हमारा"],
    explanation: "प्रधानमंत्री नरेंद्र मोदी ने 7 नवंबर 2025 को नई दिल्ली में राष्ट्रीय गीत 'वंदे मातरम्' के 150 वर्ष के स्मरणोत्सव का उद्घाटन किया। यह गीत बंकिमचंद्र चट्टोपाध्याय ने 1875 में लिखा था।",
  },
  "ca-b-26": {
    stem: "सितंबर 2025 में उद्घाटित बैराबी-सैरांग रेल लाइन ने किस राज्य की राजधानी को भारतीय रेल नेटवर्क से जोड़ा?",
    options: ["कोहिमा", "इंफाल", "शिलांग", "आइज़ोल"],
    explanation: "प्रधानमंत्री मोदी ने 13 सितंबर 2025 को बैराबी-सैरांग लाइन का उद्घाटन किया, जिससे मिज़ोरम की राजधानी आइज़ोल रेल से जुड़ गई। यह लाइन कई सुरंगों और पुलों के साथ पहाड़ी इलाके से गुज़रती है।",
  },
  "ca-b-27": {
    stem: "22 सितंबर 2025 से लागू 'नेक्स्ट-जेन GST' सुधारों के तहत मुख्य GST स्लैब घटाकर किन दो दरों पर लाए गए?",
    options: ["5% और 18%", "5% और 12%", "12% और 18%", "5% और 28%"],
    explanation: "22 सितंबर 2025 से GST में 5% और 18% के दो मुख्य स्लैब रह गए और 12% तथा 28% के स्लैब हटा दिए गए। इस बदलाव को 3 सितंबर 2025 को GST परिषद की 56वीं बैठक में मंज़ूरी मिली।",
  },
  "ca-b-28": {
    stem: "31 मई 2026 को भारत के तीसरे चीफ ऑफ डिफेंस स्टाफ (CDS) के रूप में किसने कार्यभार संभाला?",
    options: ["जनरल अनिल चौहान", "एन.एस. राजा सुब्रमणि", "जनरल उपेंद्र द्विवेदी", "जनरल धीरज सेठ"],
    explanation: "पूर्व थलसेना उप प्रमुख एन.एस. राजा सुब्रमणि 31 मई 2026 को जनरल अनिल चौहान के बाद तीसरे CDS बने। CDS सैन्य मामलों के विभाग के सचिव भी होते हैं।",
  },
  "ca-b-29": {
    stem: "सितंबर 2025 में BCCI के 37वें अध्यक्ष के रूप में कौन चुने गए?",
    options: ["रोजर बिन्नी", "राजीव शुक्ला", "मिथुन मन्हास", "देवजीत सैकिया"],
    explanation: "दिल्ली के पूर्व कप्तान मिथुन मन्हास 28 सितंबर 2025 को मुंबई में BCCI की वार्षिक आम बैठक में रोजर बिन्नी के बाद अध्यक्ष चुने गए। वे यह पद संभालने वाले जम्मू-कश्मीर के पहले व्यक्ति हैं।",
  },
  "ca-b-30": {
    stem: "30 जून 2026 को भारत के थलसेना प्रमुख (चीफ ऑफ द आर्मी स्टाफ) का पद किसने संभाला?",
    options: ["जनरल उपेंद्र द्विवेदी", "जनरल मनोज पांडे", "एन.एस. राजा सुब्रमणि", "जनरल धीरज सेठ"],
    explanation: "जनरल धीरज सेठ ने 30 जून 2026 को जनरल उपेंद्र द्विवेदी से थलसेना प्रमुख का पद संभाला। वे पहले थलसेना उप प्रमुख और दक्षिणी कमान के GOC-in-C रह चुके हैं।",
  },
  "ca-b-31": {
    stem: "31 मई 2026 को भारत के नौसेना प्रमुख (चीफ ऑफ द नेवल स्टाफ) का कार्यभार किसने संभाला?",
    options: ["एडमिरल दिनेश के. त्रिपाठी", "एडमिरल कृष्णा स्वामीनाथन", "एडमिरल आर. हरि कुमार", "एडमिरल करमबीर सिंह"],
    explanation: "एडमिरल कृष्णा स्वामीनाथन 31 मई 2026 को एडमिरल दिनेश के. त्रिपाठी के बाद 27वें नौसेना प्रमुख बने। इससे पहले वे पश्चिमी नौसेना कमान के प्रमुख थे।",
  },
  "ca-b-32": {
    stem: "नवंबर 2025 में बैंकॉक में मिस यूनिवर्स 2025 का ताज पहनने वाली फातिमा बॉश किस देश का प्रतिनिधित्व करती हैं?",
    options: ["थाईलैंड", "वेनेज़ुएला", "मेक्सिको", "फिलीपींस"],
    explanation: "मेक्सिको की फातिमा बॉश ने 21 नवंबर 2025 को बैंकॉक, थाईलैंड में 74वीं मिस यूनिवर्स प्रतियोगिता जीती। वे मेक्सिको की चौथी मिस यूनिवर्स हैं।",
  },
  "ca-b-33": {
    stem: "अगस्त 2026 की मौद्रिक नीति बैठक में RBI ने रेपो दर को किस स्तर पर रखा?",
    options: ["5.50%", "5.25%", "6.00%", "5.00%"],
    explanation: "अगस्त 2026 की स्थिति के अनुसार RBI की मौद्रिक नीति समिति ने रेपो दर को तटस्थ रुख के साथ 5.25% पर अपरिवर्तित रखा। रेपो दर समय-समय पर बदलती है, इसलिए परीक्षा से पहले नवीनतम नीति देख लें।",
  },
  "ca-b-34": {
    stem: "उज़्बेकिस्तान के जावोखिर सिंदारोव द्वारा जीते गए FIDE शतरंज विश्व कप 2025 की मेज़बानी किस भारतीय राज्य ने की?",
    options: ["गोवा", "तमिलनाडु", "पश्चिम बंगाल", "दिल्ली"],
    explanation: "FIDE विश्व कप 2025 गोवा में आयोजित हुआ। 19 वर्षीय जावोखिर सिंदारोव ने फाइनल टाईब्रेक में चीन के वेई यी को हराया और सबसे कम उम्र के विश्व कप विजेता बने।",
  },
  "ca-b-35": {
    stem: "विंबलडन 2026 का पुरुष एकल खिताब किसने जीता?",
    options: ["कार्लोस अल्कराज़", "नोवाक जोकोविच", "अलेक्ज़ेंडर ज़्वेरेव", "यानिक सिनर"],
    explanation: "इटली के यानिक सिनर ने विंबलडन 2026 के फाइनल में अलेक्ज़ेंडर ज़्वेरेव को चार सेटों में हराया। यह सिनर का दूसरा विंबलडन खिताब था।",
  },
  "ca-b-36": {
    stem: "2 नवंबर 2025 को ISRO ने भारतीय धरती से प्रक्षेपित सबसे भारी संचार उपग्रह CMS-03 को किस रॉकेट से लॉन्च किया?",
    options: ["PSLV", "GSLV Mk II", "LVM3", "SSLV"],
    explanation: "CMS-03 को 2 नवंबर 2025 को सतीश धवन अंतरिक्ष केंद्र, श्रीहरिकोटा से LVM3-M5 मिशन के ज़रिए लॉन्च किया गया। यह एक बहु-बैंड संचार उपग्रह है जिसे भू-समकालिक स्थानांतरण कक्षा में स्थापित किया गया।",
  },
  "ca-b-37": {
    stem: "साहित्य का नोबेल पुरस्कार 2025 किसे प्रदान किया गया?",
    options: ["लास्लो क्रास्नाहोरकाई", "हान कांग", "योन फोस्से", "सलमान रुश्दी"],
    explanation: "हंगरी के लेखक लास्लो क्रास्नाहोरकाई को साहित्य का नोबेल पुरस्कार 2025 मिला। इससे पहले हान कांग (2024) और योन फोस्से (2023) यह पुरस्कार जीत चुके हैं।",
  },
  "ca-b-38": {
    stem: "इटली में हुए मिलानो कोर्टिना 2026 शीतकालीन ओलंपिक की पदक तालिका में कौन सा देश शीर्ष पर रहा?",
    options: ["संयुक्त राज्य अमेरिका", "जर्मनी", "नॉर्वे", "इटली"],
    explanation: "नॉर्वे 18 स्वर्ण पदकों के साथ मिलानो कोर्टिना 2026 की पदक तालिका में शीर्ष पर रहा, जो किसी एक देश का शीतकालीन ओलंपिक रिकॉर्ड है। संयुक्त राज्य अमेरिका दूसरे स्थान पर रहा।",
  },
  "ca-b-39": {
    stem: "जनवरी 2026 में नई दिल्ली में प्रधानमंत्री मोदी के साथ भारत-EU मुक्त व्यापार समझौते की वार्ता पूरी होने की संयुक्त घोषणा यूरोपीय आयोग के किस अध्यक्ष ने की?",
    options: ["क्रिस्टीन लेगार्ड", "रॉबर्टा मेट्सोला", "काया कालास", "उर्सुला फॉन डेर लेयेन"],
    explanation: "प्रधानमंत्री नरेंद्र मोदी और यूरोपीय आयोग की अध्यक्ष उर्सुला फॉन डेर लेयेन ने 27 जनवरी 2026 को भारत-EU शिखर सम्मेलन में भारत-EU FTA के पूरा होने की घोषणा की।",
  },
  "ca-b-40": {
    stem: "आइताना बोनमती ने सितंबर 2025 में लगातार तीसरे वर्ष बैलन डी'ओर फेमिनिन जीता। वे किस देश के लिए खेलती हैं?",
    options: ["इंग्लैंड", "स्पेन", "फ्रांस", "ब्राज़ील"],
    explanation: "स्पेन और FC बार्सिलोना की मिडफील्डर आइताना बोनमती ने 2025 में लगातार तीसरा बैलन डी'ओर फेमिनिन जीता। यह पुरस्कार तीन बार जीतने वाली वे पहली महिला हैं।",
  },
  "ca-p-01": {
    stem: "ग्लासगो 2026 राष्ट्रमंडल खेलों (23 जुलाई से 2 अगस्त 2026) में भारत ने कुल कितने पदक जीते?",
    options: ["61", "45", "39", "33"],
    explanation: "भारत ने ग्लासगो 2026 में 39 पदक (13 स्वर्ण, 17 रजत, 9 कांस्य) जीते और चौथे स्थान पर रहा। सीमित कार्यक्रम में कुश्ती, बैडमिंटन, हॉकी और निशानेबाज़ी जैसे खेल शामिल नहीं थे; मुक्केबाज़ी में भारत ने रिकॉर्ड सात स्वर्ण जीते।",
  },
  "ca-p-02": {
    stem: "गणतंत्र दिवस 2026 की पूर्व संध्या पर कुल कितने पद्म पुरस्कारों की घोषणा की गई?",
    options: ["139", "131", "132", "128"],
    explanation: "2026 की सूची में 131 पद्म पुरस्कार थे: 5 पद्म विभूषण, 13 पद्म भूषण और 113 पद्म श्री। इनमें 19 महिलाएँ और 16 मरणोपरांत पुरस्कार शामिल थे।",
  },
  "ca-p-03": {
    stem: "विंबलडन 2026 का महिला एकल खिताब, जो उनका पहला ग्रैंड स्लैम खिताब था, किसने जीता?",
    options: ["आर्यना सबालेंका", "इगा स्वियातेक", "कैरोलिना मुचोवा", "लिंडा नोस्कोवा"],
    explanation: "चेक गणराज्य की लिंडा नोस्कोवा ने विंबलडन 2026 के फाइनल में हमवतन कैरोलिना मुचोवा को 6-2, 5-7, 6-3 से हराया। 21 वर्ष की आयु में वे 2011 में पेत्रा क्वितोवा के बाद सबसे कम उम्र की विंबलडन महिला चैंपियन बनीं।",
  },
  "ca-p-04": {
    stem: "अंतर्राष्ट्रीय बुकर पुरस्कार 2026 किस उपन्यास ने जीता?",
    options: ["हार्ट लैम्प", "ताइवान ट्रैवलॉग", "कायरोस", "फ्लेश"],
    explanation: "यांग शुआंग-ज़ी के उपन्यास 'ताइवान ट्रैवलॉग' (अनुवाद: लिन किंग) ने 19 मई 2026 को अंतर्राष्ट्रीय बुकर पुरस्कार 2026 जीता। यह पुरस्कार जीतने वाली किसी ताइवानी लेखक की पहली पुस्तक है। 2025 में बानू मुश्ताक की 'हार्ट लैम्प' ने यह पुरस्कार जीता था।",
  },
  "ca-p-05": {
    stem: "जावोखिर सिंदारोव द्वारा जीता गया FIDE कैंडिडेट्स टूर्नामेंट 2026 किस देश में आयोजित हुआ?",
    options: ["कनाडा", "स्पेन", "साइप्रस", "जर्मनी"],
    explanation: "उज़्बेकिस्तान के जावोखिर सिंदारोव ने साइप्रस में कैंडिडेट्स टूर्नामेंट 2026 एक राउंड शेष रहते जीता। इससे उन्हें भारत के डी. गुकेश के विरुद्ध विश्व चैंपियनशिप मुकाबले का अवसर मिला।",
  },
  "ca-p-06": {
    stem: "डी. गुकेश और जावोखिर सिंदारोव के बीच FIDE विश्व शतरंज चैंपियनशिप 2026 मुकाबले की मेज़बानी कौन सा शहर करेगा?",
    options: ["सिंगापुर", "जिनेवा", "लंदन", "चेन्नई"],
    explanation: "FIDE ने घोषणा की कि जिनेवा, स्विट्ज़रलैंड नवंबर–दिसंबर 2026 में विश्व चैंपियनशिप मुकाबले की मेज़बानी करेगा। गुकेश ने दिसंबर 2024 में सिंगापुर में खिताब जीता था।",
  },
  "ca-p-07": {
    stem: "इंडिया AI इम्पैक्ट समिट 2026 तीन 'सूत्रों' पर आधारित था। कौन सा समूह सही है?",
    options: ["लोग, पृथ्वी और प्रगति (People, Planet, Progress)", "शांति, समृद्धि और प्रगति", "लोग, लाभ और पृथ्वी", "विश्वास, प्रतिभा और प्रौद्योगिकी"],
    explanation: "शिखर सम्मेलन के तीन सूत्र लोग, पृथ्वी और प्रगति (People, Planet, Progress) थे। चर्चाएँ सात विषयगत 'चक्रों' में बाँटी गई थीं, जैसे मानव पूंजी, समावेशन और सुरक्षित व भरोसेमंद AI।",
  },
  "ca-p-08": {
    stem: "सितंबर 2025 में उपराष्ट्रपति चुने जाने के समय सी.पी. राधाकृष्णन किस राज्य के राज्यपाल थे?",
    options: ["केरल", "तेलंगाना", "तमिलनाडु", "महाराष्ट्र"],
    explanation: "उपराष्ट्रपति चुने जाने के समय सी.पी. राधाकृष्णन महाराष्ट्र के राज्यपाल थे। उन्हें डाले गए 767 में से 452 मत मिले और वे 152 मतों के अंतर से जीते। वे कोयंबटूर से दो बार लोकसभा सांसद रह चुके हैं।",
  },
  "ca-p-09": {
    stem: "भारत द्वारा जीते गए ICC महिला विश्व कप 2025 के फाइनल में 'प्लेयर ऑफ द मैच' किसे चुना गया?",
    options: ["दीप्ति शर्मा", "स्मृति मंधाना", "शेफाली वर्मा", "हरमनप्रीत कौर"],
    explanation: "शेफाली वर्मा ने दक्षिण अफ्रीका के विरुद्ध फाइनल में 87 रन बनाए और विकेट भी लिए, जिसके लिए उन्हें प्लेयर ऑफ द मैच चुना गया। भारत ने 298 रन बनाए और दक्षिण अफ्रीका को 246 पर आउट कर 52 रन से जीत हासिल की।",
  },
  "ca-p-10": {
    stem: "डेविड सालाई ने बुकर पुरस्कार 2025 किस उपन्यास के लिए जीता?",
    options: ["ऑर्बिटल", "फ्लेश", "प्रॉफेट सॉन्ग", "हेल्ड"],
    explanation: "डेविड सालाई ने 10 नवंबर 2025 को लंदन में घोषित बुकर पुरस्कार 2025 'फ्लेश' के लिए जीता। वे यह पुरस्कार जीतने वाले पहले हंगेरियन-ब्रिटिश लेखक हैं।",
  },
  "ca-p-11": {
    stem: "नवंबर 2025 में LVM3-M5 से प्रक्षेपित ISRO के संचार उपग्रह CMS-03 का अनुमानित द्रव्यमान कितना था?",
    options: ["लगभग 3,400 किग्रा", "लगभग 5,800 किग्रा", "लगभग 2,250 किग्रा", "लगभग 4,410 किग्रा"],
    explanation: "CMS-03 का वज़न लगभग 4,410 किग्रा था; यह भारतीय धरती से भू-समकालिक स्थानांतरण कक्षा में भेजा गया सबसे भारी संचार उपग्रह है। यह LVM3 की पाँचवीं परिचालन उड़ान थी।",
  },
  "ca-p-12": {
    stem: "किस शहर में 2026 में COP31 आयोजित होगा, जिसकी व्यवस्था के तहत वार्ताओं का नेतृत्व ऑस्ट्रेलिया करेगा?",
    options: ["अंताल्या, तुर्किये", "एडिलेड, ऑस्ट्रेलिया", "इस्तांबुल, तुर्किये", "बॉन, जर्मनी"],
    explanation: "COP30 में तय हुआ कि तुर्किये अंताल्या में COP31 की मेज़बानी करेगा, जबकि ऑस्ट्रेलिया वार्ताओं का नेतृत्व करेगा और प्रशांत क्षेत्र में एक प्री-COP कार्यक्रम आयोजित करेगा।",
  },
  "ca-p-13": {
    stem: "1 फरवरी 2026 को प्रस्तुत केंद्रीय बजट में 2026-27 के लिए राजकोषीय घाटे का लक्ष्य क्या रखा गया?",
    options: ["GDP का 4.4%", "GDP का 4.3%", "GDP का 4.0%", "GDP का 4.8%"],
    explanation: "वित्त मंत्री निर्मला सीतारमण ने 2026-27 के लिए राजकोषीय घाटे का लक्ष्य GDP का 4.3% रखा, जो 2025-26 के संशोधित 4.4% से कम है। सरकार का लक्ष्य 2030-31 तक ऋण को GDP के लगभग 50% तक लाना भी है।",
  },
  "ca-p-14": {
    stem: "2025 में दक्षिण अफ्रीका की G20 अध्यक्षता का विषय क्या था?",
    options: ["एक पृथ्वी, एक परिवार, एक भविष्य", "एक न्यायपूर्ण विश्व और एक सतत ग्रह का निर्माण", "एकजुटता, समानता और स्थिरता", "साथ मिलकर उबरें, मज़बूती से उबरें"],
    explanation: "दक्षिण अफ्रीका की 2025 G20 अध्यक्षता का विषय 'एकजुटता, समानता और स्थिरता' (Solidarity, Equality and Sustainability) था। भारत (2023) का विषय 'एक पृथ्वी, एक परिवार, एक भविष्य' और ब्राज़ील (2024) का 'एक न्यायपूर्ण विश्व और एक सतत ग्रह का निर्माण' था।",
  },
  "ca-p-15": {
    stem: "नवंबर 2025 में अपने घर पर 59वाँ ज्ञानपीठ पुरस्कार प्राप्त करने वाले हिंदी लेखक विनोद कुमार शुक्ल किस राज्य से हैं?",
    options: ["मध्य प्रदेश", "छत्तीसगढ़", "उत्तर प्रदेश", "बिहार"],
    explanation: "छत्तीसगढ़ के विनोद कुमार शुक्ल को मार्च 2025 में 59वें ज्ञानपीठ पुरस्कार के लिए चुना गया और 21 नवंबर 2025 को रायपुर स्थित उनके घर पर यह पुरस्कार प्रदान किया गया। वे यह सम्मान पाने वाले छत्तीसगढ़ के पहले हिंदी लेखक हैं।",
  },
  "ca-p-16": {
    stem: "मिलानो कोर्टिना 2026 शीतकालीन ओलंपिक में किस खिलाड़ी ने छह स्वर्ण पदक जीते, जो एक शीतकालीन खेलों में व्यक्तिगत स्वर्ण का रिकॉर्ड है?",
    options: ["मिकाएला शिफ्रिन", "जेसी डिगिन्स", "योहानेस होस्फ्लोट क्लेबो", "मारित ब्योर्गेन"],
    explanation: "नॉर्वे के क्रॉस-कंट्री स्कीयर योहानेस होस्फ्लोट क्लेबो ने मिलानो कोर्टिना 2026 में छह स्वर्ण पदक जीते। उनकी जीतों से नॉर्वे 18 स्वर्ण के साथ पदक तालिका में शीर्ष पर रहा।",
  },
  "ca-p-17": {
    stem: "विश्व आर्थिक मंच (WEF) के वैश्विक लैंगिक अंतराल सूचकांक 2026 में भारत का स्थान क्या था?",
    options: ["129वाँ", "131वाँ", "127वाँ", "140वाँ"],
    explanation: "वैश्विक लैंगिक अंतराल सूचकांक 2026 में भारत 131वें स्थान पर रहा, जो 2025 के समान है, और उसका समग्र समानता स्कोर लगभग 64.5% था। आइसलैंड पहले स्थान पर रहा।",
  },
  "ca-p-18": {
    stem: "ऑस्ट्रेलिया, भारत, जापान और अमेरिका के साथ नवंबर 2025 में हुआ मालाबार अभ्यास 2025 किस स्थान के आसपास आयोजित हुआ?",
    options: ["गुआम", "विशाखापत्तनम", "ओकिनावा", "डार्विन"],
    explanation: "मालाबार 2025 का आयोजन 10 से 18 नवंबर 2025 तक गुआम के आसपास हुआ। भारत की ओर से स्वदेशी स्टेल्थ फ्रिगेट INS सह्याद्रि ने भाग लिया। मालाबार 1992 में भारत-अमेरिका द्विपक्षीय अभ्यास के रूप में शुरू हुआ था।",
  },
  "ca-p-19": {
    stem: "सितंबर 2025 में भारत-अमेरिका संयुक्त सैन्य अभ्यास 'युद्ध अभ्यास' का 21वाँ संस्करण कहाँ आयोजित हुआ?",
    options: ["महाजन फील्ड फायरिंग रेंज, राजस्थान", "फोर्ट वेनराइट, अलास्का", "जॉइंट बेस लुईस-मैककॉर्ड, वॉशिंगटन", "औली, उत्तराखंड"],
    explanation: "युद्ध अभ्यास 2025 का आयोजन 1 से 14 सितंबर 2025 तक फोर्ट वेनराइट, अलास्का में हुआ। भारतीय दल का नेतृत्व मद्रास रेजिमेंट की एक बटालियन ने किया।",
  },
  "ca-p-20": {
    stem: "8 अक्टूबर 2025 को उद्घाटित नवी मुंबई अंतर्राष्ट्रीय हवाई अड्डे का नाम किस नेता के नाम पर रखा गया है?",
    options: ["छत्रपति शिवाजी महाराज", "बालासाहेब ठाकरे", "लोकनेते डी.बी. पाटिल", "यशवंतराव चव्हाण"],
    explanation: "हवाई अड्डे का नाम लोकनेते डी.बी. (दिनकर बालू) पाटिल के नाम पर रखा गया है, जो किसान नेता थे और नवी मुंबई के लिए दी गई ज़मीन के उचित मुआवज़े के लिए संघर्ष करते रहे। प्रधानमंत्री मोदी ने 8 अक्टूबर 2025 को इसका उद्घाटन किया।",
  },
  "ca-p-21": {
    stem: "22 सितंबर 2025 से लागू GST सुधारों के तहत 40% की विशेष दर किस श्रेणी पर लागू होती है?",
    options: ["जीवन रक्षक दवाएँ", "पैकेटबंद खाद्य पदार्थ", "इलेक्ट्रिक वाहन", "विलासिता और हानिकारक वस्तुएँ, जैसे पान मसाला और वातित पेय"],
    explanation: "5% और 18% स्लैब के साथ, पान मसाला, वातित पेय, महंगी कारें और यॉट जैसी विलासिता और हानिकारक (सिन) वस्तुओं के लिए 40% की दर तय की गई। इन सुधारों को GST परिषद की 56वीं बैठक में मंज़ूरी मिली।",
  },
  "ca-p-22": {
    stem: "जून 2026 में संयुक्त राष्ट्र महासभा के 81वें सत्र के अध्यक्ष के रूप में कौन चुने गए?",
    options: ["अनालेना बेयरबॉक", "फिलेमोन यांग", "खलीलुर रहमान", "आंद्रेयास काकोरिस"],
    explanation: "बांग्लादेश के खलीलुर रहमान 2 जून 2026 को चुने गए; उन्हें 99 और साइप्रस के आंद्रेयास काकोरिस को 91 मत मिले। उनका एक वर्ष का कार्यकाल सितंबर 2026 में शुरू हुआ; इस बार यह पद एशिया-प्रशांत समूह को मिला।",
  },
  "ca-p-23": {
    stem: "संयुक्त राष्ट्र महासभा के 80वें सत्र (2025-26) की अध्यक्ष अनालेना बेयरबॉक किस देश की पूर्व विदेश मंत्री हैं?",
    options: ["जर्मनी", "ऑस्ट्रिया", "नीदरलैंड", "स्वीडन"],
    explanation: "जर्मनी की अनालेना बेयरबॉक ने सितंबर 2025 से UNGA के 80वें सत्र की अध्यक्षता की। वे यह पद संभालने वाली पश्चिमी यूरोपीय समूह की पहली महिला और कुल मिलाकर पाँचवीं महिला थीं।",
  },
  "ca-p-24": {
    stem: "भौतिकी का नोबेल पुरस्कार 2025 (जॉन क्लार्क, मिशेल डेवोरे और जॉन मार्टिनिस) किस कार्य के लिए दिया गया?",
    options: ["कृत्रिम तंत्रिका नेटवर्क से मशीन लर्निंग", "विद्युत परिपथ में स्थूल (मैक्रोस्कोपिक) क्वांटम टनलिंग और ऊर्जा क्वांटीकरण", "प्रकाश के एटोसेकंड स्पंद", "गुरुत्वाकर्षण तरंगों का पता लगाना"],
    explanation: "2025 का भौतिकी नोबेल विद्युत परिपथ में स्थूल क्वांटम टनलिंग और ऊर्जा क्वांटीकरण की खोज के लिए दिया गया। यह कार्य अतिचालक क्वांटम तकनीकों का आधार है। 2024 का पुरस्कार कृत्रिम तंत्रिका नेटवर्क के लिए था।",
  },
  "ca-p-25": {
    stem: "रसायन विज्ञान का नोबेल पुरस्कार 2025 ____ के विकास के लिए दिया गया।",
    options: ["क्लिक केमिस्ट्री", "प्रोटीन संरचना पूर्वानुमान", "क्वांटम डॉट्स", "मेटल-ऑर्गेनिक फ्रेमवर्क्स (MOFs)"],
    explanation: "सुसुमु कितागावा, रिचर्ड रॉबसन और उमर यागी को मेटल-ऑर्गेनिक फ्रेमवर्क्स (MOFs) विकसित करने के लिए 2025 का रसायन नोबेल मिला। MOFs का उपयोग कार्बन डाइऑक्साइड पकड़ने और रेगिस्तानी हवा से पानी निकालने में हो सकता है।",
  },
  "ca-p-26": {
    stem: "शरीर क्रिया विज्ञान या चिकित्सा का नोबेल पुरस्कार 2025 (मैरी ब्रंकॉ, फ्रेड रैम्सडेल और शिमोन साकागुची) ____ से संबंधित खोजों के लिए दिया गया।",
    options: ["माइक्रोRNA", "mRNA टीके", "प्रतिरक्षा प्रणाली को शरीर के अपने ऊतकों पर हमला करने से कैसे रोका जाता है", "हेपेटाइटिस C वायरस"],
    explanation: "2025 का चिकित्सा नोबेल परिधीय प्रतिरक्षा सहनशीलता (पेरिफेरल इम्यून टॉलरेंस) से जुड़ी खोजों के लिए दिया गया, यानी शरीर प्रतिरक्षा प्रणाली को अपने ही ऊपर हमला करने से कैसे रोकता है। 2024 का पुरस्कार माइक्रोRNA की खोज के लिए था।",
  },
  "ca-p-27": {
    stem: "2026 के रेमन मैग्सेसे पुरस्कार विजेताओं में शामिल और संयुक्त राष्ट्र समुद्री कानून (UNCLOS) वार्ताओं में अपनी भूमिका के लिए प्रसिद्ध टॉमी कोह किस देश के राजनयिक हैं?",
    options: ["मलेशिया", "सिंगापुर", "इंडोनेशिया", "फिलीपींस"],
    explanation: "सिंगापुर के राजनयिक टॉमी कोह 31 अगस्त 2026 को घोषित रेमन मैग्सेसे पुरस्कार विजेताओं में शामिल थे, साथ में बांग्लादेश की रूना खान और म्यांमार के बो क्यी भी थे। इस पुरस्कार को अक्सर 'एशिया का नोबेल' कहा जाता है।",
  },
  "ca-p-28": {
    stem: "जनवरी 2026 में भारत-EU मुक्त व्यापार समझौते के पूरा होने की घोषणा भारत-EU शिखर सम्मेलन के किस संस्करण में हुई?",
    options: ["14वें", "15वें", "16वें", "18वें"],
    explanation: "भारत-EU FTA की घोषणा 27 जनवरी 2026 को नई दिल्ली में 16वें भारत-EU शिखर सम्मेलन में हुई। वार्ताएँ 2022 में फिर से शुरू की गई थीं।",
  },
  "ca-p-29": {
    stem: "पुरुष हॉकी एशिया कप 2025 जीतकर भारत ने FIH पुरुष हॉकी विश्व कप 2026 के लिए क्वालीफाई किया, जिसकी मेज़बानी किन देशों ने की?",
    options: ["भारत और मलेशिया", "स्पेन और जर्मनी", "ऑस्ट्रेलिया और न्यूज़ीलैंड", "बेल्जियम और नीदरलैंड"],
    explanation: "राजगीर फाइनल में दक्षिण कोरिया पर 4-1 की जीत से भारत को बेल्जियम और नीदरलैंड में होने वाले 2026 विश्व कप में स्थान मिला। यह 2017 के बाद भारत का पहला एशिया कप खिताब था।",
  },
  "ca-p-30": {
    stem: "दुबई में एशिया कप 2025 के फाइनल में भारत की जीत उसका ____ एशिया कप क्रिकेट खिताब थी।",
    options: ["सातवाँ", "आठवाँ", "नौवाँ", "दसवाँ"],
    explanation: "2025 की जीत भारत का नौवाँ एशिया कप खिताब और लगातार दूसरा खिताब थी, इससे पहले 2023 का वनडे संस्करण भारत ने जीता था। भारत ने पाकिस्तान के विरुद्ध 147 रन का लक्ष्य दो गेंद शेष रहते हासिल किया।",
  },
  "ca-p-31": {
    stem: "भारत के 53वें मुख्य न्यायाधीश न्यायमूर्ति सूर्यकांत ने किस मुख्य न्यायाधीश का स्थान लिया?",
    options: ["न्यायमूर्ति संजीव खन्ना", "न्यायमूर्ति बी.आर. गवई", "न्यायमूर्ति डी.वाई. चंद्रचूड़", "न्यायमूर्ति यू.यू. ललित"],
    explanation: "न्यायमूर्ति सूर्यकांत ने न्यायमूर्ति बी.आर. गवई का स्थान लिया, जो CJI के रूप में छह महीने से कुछ अधिक समय के बाद 23 नवंबर 2025 को सेवानिवृत्त हुए। न्यायमूर्ति सूर्यकांत ने 24 नवंबर 2025 को हिंदी में शपथ ली।",
  },
  "ca-p-32": {
    stem: "30 जून 2026 को पदभार संभालने वाले जनरल धीरज सेठ भारत के ____ थलसेना प्रमुख हैं।",
    options: ["29वें", "30वें", "31वें", "32वें"],
    explanation: "जनरल धीरज सेठ जनरल उपेंद्र द्विवेदी के बाद 31वें थलसेना प्रमुख बने। उन्हें दिसंबर 1986 में आर्मर्ड कोर में कमीशन मिला था।",
  },
  "ca-p-33": {
    stem: "सितंबर 2026 में ISRO के किस रॉकेट ने EOS-05 पृथ्वी अवलोकन उपग्रह को सफलतापूर्वक कक्षा में स्थापित किया, जो 2026 में ISRO का पहला सफल प्रक्षेपण था?",
    options: ["GSLV-F17", "PSLV-C62", "LVM3-M7", "SSLV-D4"],
    explanation: "GSLV-F17 ने 4 सितंबर 2026 को EOS-05 को प्रक्षेपित किया। इससे पहले जनवरी 2026 का PSLV-C62 मिशन तीसरे चरण में गड़बड़ी के कारण अपने उपग्रहों को निर्धारित कक्षा में स्थापित नहीं कर पाया था।",
  },
  "ca-p-34": {
    stem: "केंद्रीय बजट 2026-27 में पूंजीगत व्यय का आवंटन कितना था?",
    options: ["₹11.2 लाख करोड़", "₹12.2 लाख करोड़", "₹10.0 लाख करोड़", "₹15.5 लाख करोड़"],
    explanation: "केंद्रीय बजट 2026-27 में बुनियादी ढांचे पर ज़ोर बनाए रखने के लिए पूंजीगत व्यय बढ़ाकर लगभग ₹12.2 लाख करोड़ किया गया। राजकोषीय घाटे का लक्ष्य GDP का 4.3% रखा गया।",
  },
  "ca-p-35": {
    stem: "2026 फीफा विश्व कप में स्पेन की जीत उसका ____ विश्व कप खिताब थी।",
    options: ["पहला", "दूसरा", "तीसरा", "चौथा"],
    explanation: "स्पेन ने 2026 में अपना दूसरा फीफा विश्व कप जीता; पहला खिताब 2010 में आया था। स्पेन ने आठ मैचों में केवल एक गोल खाया, जो किसी चैंपियन का रिकॉर्ड है।",
  },
  "ca-p-36": {
    stem: "21 जून 2026 को 12वें अंतर्राष्ट्रीय योग दिवस के मुख्य राष्ट्रीय कार्यक्रम की मेज़बानी किस शहर ने की?",
    options: ["विशाखापत्तनम", "श्रीनगर", "कोलकाता", "देहरादून"],
    explanation: "आयुष मंत्रालय ने अंतर्राष्ट्रीय योग दिवस 2026 के मुख्य राष्ट्रीय समारोह के लिए कोलकाता, पश्चिम बंगाल को चुना। 2025 में मुख्य कार्यक्रम विशाखापत्तनम में और 2024 में श्रीनगर में हुआ था।",
  },
  "ca-p-37": {
    stem: "98वें अकादमी पुरस्कार में सर्वश्रेष्ठ फिल्म और सर्वश्रेष्ठ निर्देशक का पुरस्कार जीतने वाली 'वन बैटल आफ्टर अनदर' का निर्देशन किसने किया?",
    options: ["क्रिस्टोफर नोलन", "रायन कूगलर", "क्लोई झाओ", "पॉल थॉमस एंडरसन"],
    explanation: "पॉल थॉमस एंडरसन ने 'वन बैटल आफ्टर अनदर' का निर्देशन किया और सर्वश्रेष्ठ निर्देशक तथा सर्वश्रेष्ठ रूपांतरित पटकथा का पुरस्कार जीता। मार्च 2026 के समारोह में फिल्म ने कुल छह ऑस्कर जीते।",
  },
  "ca-p-38": {
    stem: "अहमदाबाद में होने वाले 2030 राष्ट्रमंडल खेल शताब्दी संस्करण होंगे। 1930 में पहले खेल (तब ब्रिटिश एम्पायर गेम्स) कहाँ आयोजित हुए थे?",
    options: ["लंदन, इंग्लैंड", "हैमिल्टन, कनाडा", "सिडनी, ऑस्ट्रेलिया", "ग्लासगो, स्कॉटलैंड"],
    explanation: "पहले खेल 1930 में हैमिल्टन, कनाडा में ब्रिटिश एम्पायर गेम्स के रूप में आयोजित हुए थे। 26 नवंबर 2025 को कॉमनवेल्थ स्पोर्ट के सभी 74 सदस्यों ने सर्वसम्मति से अहमदाबाद का समर्थन किया।",
  },
  "ca-p-39": {
    stem: "बैराबी-सैरांग लाइन (सितंबर 2025) के साथ आइज़ोल भारतीय रेल नेटवर्क से जुड़ने वाली ____ पूर्वोत्तर राज्य राजधानी बन गई।",
    options: ["दूसरी", "तीसरी", "चौथी", "पाँचवीं"],
    explanation: "गुवाहाटी, अगरतला और ईटानगर के बाद आइज़ोल रेल नेटवर्क से जुड़ने वाली चौथी पूर्वोत्तर राजधानी बनी। बैराबी-सैरांग लाइन लगभग 51 किमी लंबी है।",
  },
  "ca-p-40": {
    stem: "अक्टूबर 2025 में पदभार संभालने वाली सनाए ताकाइची जापान की ____ प्रधानमंत्री हैं।",
    options: ["104वीं", "100वीं", "102वीं", "106वीं"],
    explanation: "सनाए ताकाइची 21 अक्टूबर 2025 को जापान की 104वीं प्रधानमंत्री और पहली महिला प्रधानमंत्री बनीं। वे LDP और जापान इनोवेशन पार्टी (इशिन) के गठबंधन का नेतृत्व करती हैं।",
  },
};
