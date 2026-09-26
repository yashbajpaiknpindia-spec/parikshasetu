/**
 * General Knowledge, Indian History (topic: "History").
 *
 * section: "gk". Shared across both UPESSC exam levels.
 * Covers Ancient (Indus, Vedic, Mauryas, Guptas, Buddhism/Jainism), Medieval
 * (Delhi Sultanate, Mughals, key battles) and Modern (British rule, 1857, the
 * freedom struggle). Static, verifiable facts modelled on UPESSC/UPTET/UPPSC PYQs.
 *   • beginner, landmark facts most aspirants must know.
 *   • proficient, finer dates, causes, and who-did-what distinctions.
 */
import type { Question } from "./questions";

export const gkHistoryBank: Question[] = [
  // ==================================================== Ancient, BEGINNER
  {
    id: "gh-b-01", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Indus Valley (Harappan) Civilisation belonged to which age?",
    options: ["Bronze Age", "Stone Age", "Iron Age", "Copper-less Age"], correct: 0,
    explanation: "The Indus Valley Civilisation (c. 2500 BCE) was a Bronze Age civilisation, known for planned cities, drainage systems and standardised weights. Its people used bronze but not iron.",
  },
  {
    id: "gh-b-02", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The famous 'Great Bath' of the Indus Valley Civilisation was found at ____",
    options: ["Mohenjodaro", "Harappa", "Lothal", "Kalibangan"], correct: 0,
    explanation: "The Great Bath, a large public water tank, was discovered at Mohenjodaro (in present-day Pakistan). Lothal is known for its dockyard.",
  },
  {
    id: "gh-b-03", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which is the oldest of the four Vedas?",
    options: ["Rigveda", "Samaveda", "Yajurveda", "Atharvaveda"], correct: 0,
    explanation: "The Rigveda is the oldest Veda (and the oldest text in an Indo-Aryan language). The Samaveda relates to music, the Yajurveda to rituals, and the Atharvaveda to charms and medicine.",
  },
  {
    id: "gh-b-04", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Gayatri Mantra is found in which Veda?",
    options: ["Rigveda", "Samaveda", "Yajurveda", "Atharvaveda"], correct: 0,
    explanation: "The Gayatri Mantra, dedicated to the Sun (Savitr), occurs in the Rigveda (Mandala 3), composed by sage Vishvamitra.",
  },
  {
    id: "gh-b-05", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Who founded the Maurya Empire?",
    options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"], correct: 0,
    explanation: "Chandragupta Maurya founded the Maurya Empire around 322 BCE with the guidance of his mentor Chanakya (Kautilya). He was succeeded by Bindusara, then Ashoka.",
  },
  {
    id: "gh-b-06", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The 'Arthashastra' was written by ____",
    options: ["Kautilya (Chanakya)", "Kalidasa", "Megasthenes", "Vishnu Sharma"], correct: 0,
    explanation: "The Arthashastra, a treatise on statecraft, economics and military strategy, was written by Kautilya (Chanakya), the chief adviser of Chandragupta Maurya.",
  },
  {
    id: "gh-b-07", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Kalinga War, after which the emperor embraced Buddhism, was fought by ____",
    options: ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"], correct: 0,
    explanation: "Ashoka fought the Kalinga War (c. 261 BCE). The bloodshed transformed him, and he adopted and propagated Buddhism and the policy of 'Dhamma'.",
  },
  {
    id: "gh-b-08", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Where did Gautama Buddha attain enlightenment?",
    options: ["Bodh Gaya", "Lumbini", "Sarnath", "Kushinagar"], correct: 0,
    explanation: "Buddha attained enlightenment at Bodh Gaya (Bihar) under the Bodhi tree. He was born at Lumbini, gave his first sermon at Sarnath, and died at Kushinagar.",
  },
  {
    id: "gh-b-09", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Gautama Buddha delivered his first sermon at ____",
    options: ["Sarnath", "Bodh Gaya", "Lumbini", "Vaishali"], correct: 0,
    explanation: "Buddha delivered his first sermon ('Dharmachakra Pravartana') at Sarnath, near Varanasi (UP). This event set in motion the wheel of dharma.",
  },
  {
    id: "gh-b-10", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The National Emblem of India is adapted from the Lion Capital of Ashoka located at ____",
    options: ["Sarnath", "Sanchi", "Bodh Gaya", "Amaravati"], correct: 0,
    explanation: "India's national emblem is adapted from the Lion Capital of Ashoka at Sarnath. The words 'Satyameva Jayate' below it are from the Mundaka Upanishad.",
  },
  {
    id: "gh-b-11", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who is known as the 'Napoleon of India'?",
    options: ["Samudragupta", "Chandragupta Maurya", "Ashoka", "Harshavardhana"], correct: 0,
    explanation: "Samudragupta of the Gupta dynasty is called the 'Napoleon of India' (a title given by historian V. A. Smith) for his extensive military conquests.",
  },
  {
    id: "gh-b-12", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The period of the Gupta dynasty is often called the ____",
    options: ["Golden Age of India", "Dark Age", "Iron Age", "Age of Migration"], correct: 0,
    explanation: "The Gupta period (4th–6th century CE) is called the 'Golden Age of India' for its achievements in science, mathematics, art and literature (Aryabhata, Kalidasa).",
  },
  {
    id: "gh-b-13", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Mahavira was the ____ Tirthankara of Jainism.",
    options: ["24th", "1st", "23rd", "12th"], correct: 0,
    explanation: "Mahavira was the 24th (and last) Tirthankara of Jainism. Rishabhdev (Adinath) was the first, and Parshvanath the 23rd.",
  },
  {
    id: "gh-b-14", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The ancient university of Nalanda was located in the present-day state of ____",
    options: ["Bihar", "Uttar Pradesh", "West Bengal", "Odisha"], correct: 0,
    explanation: "Nalanda, a great centre of Buddhist learning, was located in present-day Bihar. It flourished under the Guptas and later rulers.",
  },
  {
    id: "gh-b-15", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Megasthenes, the Greek ambassador who wrote 'Indica', visited the court of ____",
    options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Kanishka"], correct: 0,
    explanation: "Megasthenes was the Greek ambassador (sent by Seleucus) to the court of Chandragupta Maurya at Pataliputra. His account is called 'Indica'.",
  },
  {
    id: "gh-b-16", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Chinese pilgrim Fa-Hien (Faxian) visited India during the reign of ____",
    options: ["Chandragupta II", "Ashoka", "Harsha", "Kanishka"], correct: 0,
    explanation: "Fa-Hien visited India during the reign of Chandragupta II (Vikramaditya) of the Gupta dynasty. (Hiuen Tsang visited later, during Harsha's reign.)",
  },
  {
    id: "gh-b-17", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Lord Mahavira was born at ____",
    options: ["Kundagram (Vaishali)", "Lumbini", "Pataliputra", "Kapilvastu"], correct: 0,
    explanation: "Mahavira was born at Kundagram near Vaishali (Bihar). (Gautama Buddha was born at Lumbini in present-day Nepal.)",
  },
  {
    id: "gh-b-18", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Aryabhata, the great mathematician-astronomer, belonged to which age?",
    options: ["Gupta age", "Maurya age", "Sultanate age", "Vedic age"], correct: 0,
    explanation: "Aryabhata (author of 'Aryabhatiya') belonged to the Gupta age. He explained that the earth rotates on its axis and calculated the value of pi.",
  },

  // ==================================================== Medieval, BEGINNER
  {
    id: "gh-b-19", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Who founded the Slave (Mamluk) dynasty of the Delhi Sultanate?",
    options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Razia Sultan"], correct: 0,
    explanation: "Qutbuddin Aibak founded the Slave dynasty (1206) and began the construction of the Qutub Minar in Delhi. Iltutmish completed it.",
  },
  {
    id: "gh-b-20", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Who was the first woman ruler of the Delhi Sultanate?",
    options: ["Razia Sultan", "Chand Bibi", "Rani Durgavati", "Nur Jahan"], correct: 0,
    explanation: "Razia Sultan (daughter of Iltutmish) was the first and only woman to rule the Delhi Sultanate (1236–1240).",
  },
  {
    id: "gh-b-21", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which Sultan shifted his capital from Delhi to Daulatabad?",
    options: ["Muhammad bin Tughlaq", "Alauddin Khilji", "Firoz Shah Tughlaq", "Balban"], correct: 0,
    explanation: "Muhammad bin Tughlaq shifted the capital from Delhi to Daulatabad (Devagiri) and later reversed the decision. He also introduced token currency.",
  },
  {
    id: "gh-b-22", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Who founded the Mughal Empire in India?",
    options: ["Babur", "Akbar", "Humayun", "Shah Jahan"], correct: 0,
    explanation: "Babur founded the Mughal Empire after defeating Ibrahim Lodi in the First Battle of Panipat (1526).",
  },
  {
    id: "gh-b-23", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The First Battle of Panipat (1526) was fought between Babur and ____",
    options: ["Ibrahim Lodi", "Rana Sanga", "Hemu", "Sher Shah Suri"], correct: 0,
    explanation: "In the First Battle of Panipat (1526), Babur defeated Ibrahim Lodi (the last Lodi Sultan), founding the Mughal Empire.",
  },
  {
    id: "gh-b-24", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who among the Mughal emperors built the Taj Mahal?",
    options: ["Shah Jahan", "Akbar", "Jahangir", "Aurangzeb"], correct: 0,
    explanation: "Shah Jahan built the Taj Mahal at Agra in memory of his wife Mumtaz Mahal. His reign is called the golden age of Mughal architecture.",
  },
  {
    id: "gh-b-25", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Din-i-Ilahi, a new religious path, was introduced by ____",
    options: ["Akbar", "Aurangzeb", "Babur", "Shah Jahan"], correct: 0,
    explanation: "Akbar introduced Din-i-Ilahi (1582), a syncretic faith blending elements of various religions, reflecting his policy of religious tolerance (sulh-i-kul).",
  },
  {
    id: "gh-b-26", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Battle of Haldighati (1576) was fought between Akbar's forces and ____",
    options: ["Maharana Pratap", "Rana Sanga", "Shivaji", "Hemu"], correct: 0,
    explanation: "The Battle of Haldighati (1576) was fought between the Mughal forces (led by Man Singh) and Maharana Pratap of Mewar.",
  },
  {
    id: "gh-b-27", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The famous Bhakti saint who founded Sikhism was ____",
    options: ["Guru Nanak", "Kabir", "Ramananda", "Tulsidas"], correct: 0,
    explanation: "Guru Nanak Dev (1469–1539) was the founder of Sikhism and the first of the ten Sikh Gurus.",
  },
  {
    id: "gh-b-28", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who built the Qutub Minar's first storey in Delhi?",
    options: ["Qutbuddin Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"], correct: 0,
    explanation: "Qutbuddin Aibak began the Qutub Minar (first storey); it was completed by his successor Iltutmish.",
  },
  {
    id: "gh-b-29", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Todar Mal, famous for the land-revenue system, was a minister of ____",
    options: ["Akbar", "Sher Shah Suri", "Aurangzeb", "Shah Jahan"], correct: 0,
    explanation: "Raja Todar Mal, one of Akbar's Navratnas, reformed the land-revenue (bandobast/zabt) system. (Sher Shah Suri had laid its groundwork earlier.)",
  },
  {
    id: "gh-b-30", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Krishnadevaraya was the greatest ruler of which empire?",
    options: ["Vijayanagara", "Bahmani", "Chola", "Maratha"], correct: 0,
    explanation: "Krishnadevaraya (r. 1509–1529) was the greatest ruler of the Vijayanagara Empire, under whom it reached its cultural and political zenith.",
  },
  {
    id: "gh-b-31", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which Mughal emperor reimposed the Jizya tax on non-Muslims?",
    options: ["Aurangzeb", "Akbar", "Jahangir", "Shah Jahan"], correct: 0,
    explanation: "Aurangzeb reimposed the Jizya tax (1679), which Akbar had abolished. His reign marked a reversal of the earlier policy of religious tolerance.",
  },
  {
    id: "gh-b-32", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Third Battle of Panipat (1761) was fought between the Marathas and ____",
    options: ["Ahmad Shah Abdali", "Nadir Shah", "Babur", "The British"], correct: 0,
    explanation: "The Third Battle of Panipat (1761) was fought between the Marathas and Ahmad Shah Abdali (Durrani) of Afghanistan, resulting in a major Maratha defeat.",
  },

  // ==================================================== Modern, BEGINNER
  {
    id: "gh-b-33", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Battle of Plassey (1757) was won by the British under ____",
    options: ["Robert Clive", "Warren Hastings", "Lord Dalhousie", "Lord Curzon"], correct: 0,
    explanation: "In the Battle of Plassey (1757), Robert Clive of the East India Company defeated Siraj-ud-Daulah, the Nawab of Bengal, laying the foundation of British rule.",
  },
  {
    id: "gh-b-34", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Revolt of 1857 began at ____",
    options: ["Meerut", "Delhi", "Kanpur", "Jhansi"], correct: 0,
    explanation: "The Revolt of 1857 (India's First War of Independence) began at Meerut on 10 May 1857, and soon spread to Delhi, Kanpur, Lucknow and Jhansi.",
  },
  {
    id: "gh-b-35", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Who is remembered for firing the first shot of the 1857 Revolt at Barrackpore?",
    options: ["Mangal Pandey", "Tantia Tope", "Nana Sahib", "Bahadur Shah Zafar"], correct: 0,
    explanation: "Mangal Pandey, a sepoy at Barrackpore, is remembered for sparking the 1857 Revolt by attacking his officers over the greased-cartridge issue.",
  },
  {
    id: "gh-b-36", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Indian National Congress was founded in ____",
    options: ["1885", "1857", "1905", "1920"], correct: 0,
    explanation: "The Indian National Congress was founded in 1885 by A. O. Hume. Its first president was W. C. Bonnerjee and the first session was held in Bombay.",
  },
  {
    id: "gh-b-37", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The Jallianwala Bagh massacre took place in which year?",
    options: ["1919", "1905", "1857", "1930"], correct: 0,
    explanation: "The Jallianwala Bagh massacre took place at Amritsar on 13 April 1919, when General Dyer ordered firing on an unarmed gathering.",
  },
  {
    id: "gh-b-38", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Mahatma Gandhi led the Dandi (Salt) March in ____",
    options: ["1930", "1920", "1919", "1942"], correct: 0,
    explanation: "Gandhi led the Dandi March in 1930 as part of the Civil Disobedience Movement, breaking the salt law by making salt at Dandi on the Gujarat coast.",
  },
  {
    id: "gh-b-39", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Quit India Movement' was launched in ____",
    options: ["1942", "1930", "1920", "1919"], correct: 0,
    explanation: "The Quit India Movement was launched by Gandhi on 8 August 1942 with the slogan 'Do or Die', demanding an end to British rule.",
  },
  {
    id: "gh-b-40", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who founded the Brahmo Samaj?",
    options: ["Raja Ram Mohan Roy", "Dayanand Saraswati", "Swami Vivekananda", "Ishwar Chandra Vidyasagar"], correct: 0,
    explanation: "Raja Ram Mohan Roy founded the Brahmo Samaj (1828). He also campaigned successfully for the abolition of Sati (banned in 1829).",
  },
  {
    id: "gh-b-41", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Arya Samaj was founded by ____",
    options: ["Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Swami Vivekananda", "Keshab Chandra Sen"], correct: 0,
    explanation: "Swami Dayanand Saraswati founded the Arya Samaj (1875) with the slogan 'Back to the Vedas'. He wrote 'Satyarth Prakash'.",
  },
  {
    id: "gh-b-42", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "India attained independence on ____",
    options: ["15 August 1947", "26 January 1950", "15 August 1950", "26 November 1949"], correct: 0,
    explanation: "India became independent on 15 August 1947. (The Constitution came into force later, on 26 January 1950, Republic Day.)",
  },
  {
    id: "gh-b-43", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who was the last Viceroy of India?",
    options: ["Lord Mountbatten", "Lord Curzon", "Lord Canning", "Lord Wavell"], correct: 0,
    explanation: "Lord Mountbatten was the last Viceroy of British India, under whom India gained independence and was partitioned in 1947.",
  },
  {
    id: "gh-b-44", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The Rani of Jhansi who fought in 1857 was ____",
    options: ["Lakshmibai", "Ahilyabai", "Durgavati", "Chennamma"], correct: 0,
    explanation: "Rani Lakshmibai of Jhansi was a leading figure in the Revolt of 1857 and a symbol of resistance against British rule.",
  },
  {
    id: "gh-b-45", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "'Indian National Army' (Azad Hind Fauj) is associated with ____",
    options: ["Subhas Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad", "Lala Lajpat Rai"], correct: 0,
    explanation: "Subhas Chandra Bose reorganised and led the Indian National Army (Azad Hind Fauj) with the slogan 'Give me blood, I will give you freedom'.",
  },
  {
    id: "gh-b-46", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who gave the slogan 'Swaraj is my birthright'?",
    options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Lala Lajpat Rai", "Bipin Chandra Pal"], correct: 0,
    explanation: "Bal Gangadhar Tilak gave the slogan 'Swaraj is my birthright, and I shall have it.' He was a leading extremist and part of the 'Lal-Bal-Pal' trio.",
  },
  {
    id: "gh-b-47", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The partition of Bengal by Lord Curzon took place in ____",
    options: ["1905", "1885", "1911", "1919"], correct: 0,
    explanation: "Lord Curzon partitioned Bengal in 1905, which triggered the Swadeshi Movement. The partition was annulled in 1911.",
  },
  {
    id: "gh-b-48", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The first railway line in India (1853) ran between ____",
    options: ["Bombay and Thane", "Calcutta and Delhi", "Madras and Bangalore", "Delhi and Agra"], correct: 0,
    explanation: "India's first railway line ran between Bombay and Thane in 1853, during the governor-generalship of Lord Dalhousie.",
  },
  {
    id: "gh-b-49", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Who was the first Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Warren Hastings", "Rajendra Prasad"], correct: 0,
    explanation: "Lord Mountbatten was the first Governor-General of independent India (1947–48). C. Rajagopalachari was the first Indian and the last Governor-General.",
  },
  {
    id: "gh-b-50", section: "gk", topic: "History", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The 'Doctrine of Lapse' was introduced by ____",
    options: ["Lord Dalhousie", "Lord Curzon", "Lord Canning", "Warren Hastings"], correct: 0,
    explanation: "Lord Dalhousie introduced the Doctrine of Lapse, under which princely states without a natural male heir were annexed by the British, a cause of the 1857 Revolt.",
  },

  // ==================================================== Ancient, PROFICIENT
  {
    id: "gh-p-01", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Harappa, the first site of the Indus Valley Civilisation to be excavated, is situated on the bank of the river ____",
    options: ["Ravi", "Indus", "Sutlej", "Beas"], correct: 0,
    explanation: "Harappa is located on the bank of the river Ravi (in present-day Pakistan), while Mohenjodaro lies on the Indus. Harappa was excavated in 1921 by Daya Ram Sahni.",
  },
  {
    id: "gh-p-02", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Harappan site famous for its dockyard is ____",
    options: ["Lothal", "Kalibangan", "Dholavira", "Ropar"], correct: 0,
    explanation: "Lothal (Gujarat) is known for its dockyard, indicating maritime trade. Kalibangan is known for ploughed fields, and Dholavira for its water-management system.",
  },
  {
    id: "gh-p-03", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Allahabad Pillar Inscription (Prayag Prashasti), praising Samudragupta, was composed by ____",
    options: ["Harishena", "Kalidasa", "Banabhatta", "Ravikirti"], correct: 0,
    explanation: "The Prayag Prashasti (Allahabad Pillar Inscription) was composed by Harishena, the court poet of Samudragupta, detailing his conquests.",
  },
  {
    id: "gh-p-04", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which Gupta ruler adopted the title 'Vikramaditya'?",
    options: ["Chandragupta II", "Samudragupta", "Chandragupta I", "Skandagupta"], correct: 0,
    explanation: "Chandragupta II adopted the title 'Vikramaditya'. His court had the 'Navratnas', including Kalidasa, and he defeated the Western Kshatrapas (Shakas).",
  },
  {
    id: "gh-p-05", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Fourth Buddhist Council was held under the patronage of ____",
    options: ["Kanishka", "Ashoka", "Ajatashatru", "Kalashoka"], correct: 0,
    explanation: "The Fourth Buddhist Council was held in Kashmir under the Kushana ruler Kanishka. The First was held under Ajatashatru and the Third under Ashoka.",
  },
  {
    id: "gh-p-06", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Ashokan edicts were first successfully deciphered by ____",
    options: ["James Prinsep", "William Jones", "John Marshall", "Alexander Cunningham"], correct: 0,
    explanation: "James Prinsep first deciphered the Brahmi and Kharosthi scripts of the Ashokan edicts (1837), identifying the king referred to as 'Devanampiya Piyadassi' as Ashoka.",
  },
  {
    id: "gh-p-07", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Eightfold Path' (Ashtangika Marga) is a core teaching of ____",
    options: ["Buddhism", "Jainism", "Vedic religion", "Ajivika sect"], correct: 0,
    explanation: "The Eightfold Path (right view, intention, speech, action, livelihood, effort, mindfulness, concentration) is the Buddhist path to end suffering, alongside the Four Noble Truths.",
  },
  {
    id: "gh-p-08", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which dynasty did Bimbisara and Ajatashatru belong to?",
    options: ["Haryanka", "Nanda", "Maurya", "Shishunaga"], correct: 0,
    explanation: "Bimbisara and his son Ajatashatru belonged to the Haryanka dynasty of Magadha, which laid the foundations of Magadhan imperialism with capital at Rajgir/Pataliputra.",
  },
  {
    id: "gh-p-09", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Junagadh Rock Inscription' of Rudradaman is notable as one of the earliest inscriptions in ____",
    options: ["chaste Sanskrit", "Pali", "Prakrit", "Tamil"], correct: 0,
    explanation: "The Junagadh Rock Inscription of the Shaka ruler Rudradaman (2nd century CE) is among the earliest inscriptions written in relatively pure Sanskrit.",
  },
  {
    id: "gh-p-10", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which text is a Sangam-age Tamil work?",
    options: ["Tolkappiyam", "Mudrarakshasa", "Mrichchhakatika", "Harshacharita"], correct: 0,
    explanation: "'Tolkappiyam' (on Tamil grammar and poetics) is a key work of the Sangam age. Mudrarakshasa (Vishakhadatta) and Harshacharita (Banabhatta) are Sanskrit works.",
  },
  {
    id: "gh-p-11", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The gold coins issued in large numbers, indicating flourishing trade, are especially associated with the ____",
    options: ["Guptas", "Mauryas", "Cholas", "Kushanas & Guptas both"], correct: 3,
    explanation: "Both the Kushanas and the Guptas issued fine gold coins. The Guptas issued the largest number of gold coins ('dinaras') in ancient India, reflecting prosperity.",
  },
  {
    id: "gh-p-12", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Chandragupta Maurya, in his last years, is said to have embraced ____",
    options: ["Jainism", "Buddhism", "Shaivism", "Vaishnavism"], correct: 0,
    explanation: "Chandragupta Maurya is traditionally believed to have embraced Jainism, abdicated, and migrated south to Shravanabelagola with the Jain saint Bhadrabahu.",
  },
  {
    id: "gh-p-13", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Chinese traveller Hiuen Tsang (Xuanzang) visited India during the reign of ____",
    options: ["Harshavardhana", "Chandragupta II", "Kanishka", "Pulakeshin I"], correct: 0,
    explanation: "Hiuen Tsang visited India in the 7th century during the reign of Harshavardhana of Kannauj, and studied at Nalanda.",
  },
  {
    id: "gh-p-14", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The rock-cut caves of Ajanta are famous for their ____",
    options: ["Buddhist paintings", "Jain sculptures", "Chola bronzes", "Mughal frescoes"], correct: 0,
    explanation: "The Ajanta caves (Maharashtra) are famous for their Buddhist mural paintings, largely from the Gupta and post-Gupta period. Ellora has Buddhist, Hindu and Jain caves.",
  },
  {
    id: "gh-p-15", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Kailasa Temple' at Ellora, carved out of a single rock, was built by the ____",
    options: ["Rashtrakutas", "Pallavas", "Cholas", "Chalukyas"], correct: 0,
    explanation: "The monolithic Kailasa Temple at Ellora was built by the Rashtrakuta ruler Krishna I. It is one of the largest rock-cut temples in the world.",
  },
  {
    id: "gh-p-16", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Nataraja' bronze sculptures are a hallmark of art under the ____",
    options: ["Cholas", "Pallavas", "Guptas", "Mauryas"], correct: 0,
    explanation: "The exquisite Nataraja (dancing Shiva) bronzes are a hallmark of Chola art in South India, made by the lost-wax casting technique.",
  },

  // ==================================================== Medieval, PROFICIENT
  {
    id: "gh-p-17", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The market-control (price-control) reforms of the Delhi Sultanate are associated with ____",
    options: ["Alauddin Khilji", "Balban", "Firoz Shah Tughlaq", "Iltutmish"], correct: 0,
    explanation: "Alauddin Khilji introduced strict market (price) control regulations to maintain a large standing army cheaply. His general Malik Kafur led campaigns into the south.",
  },
  {
    id: "gh-p-18", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Who introduced token (bronze) currency in the Delhi Sultanate?",
    options: ["Muhammad bin Tughlaq", "Alauddin Khilji", "Balban", "Sikandar Lodi"], correct: 0,
    explanation: "Muhammad bin Tughlaq introduced a token currency of bronze/copper coins meant to circulate at the value of silver, which failed due to widespread forgery.",
  },
  {
    id: "gh-p-19", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Sher Shah Suri is well known for building the ____",
    options: ["Grand Trunk Road", "Qutub Minar", "Buland Darwaza", "Jama Masjid, Delhi"], correct: 0,
    explanation: "Sher Shah Suri rebuilt and extended the Grand Trunk Road (Sadak-e-Azam) and introduced the silver 'rupiya' and administrative reforms later adopted by Akbar.",
  },
  {
    id: "gh-p-20", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Second Battle of Panipat (1556) was fought between Akbar's forces (led by Bairam Khan) and ____",
    options: ["Hemu (Hemchandra Vikramaditya)", "Ibrahim Lodi", "Rana Sanga", "Sher Shah Suri"], correct: 0,
    explanation: "The Second Battle of Panipat (1556) was fought between Akbar's forces under Bairam Khan and Hemu, the Hindu general/king. Akbar's victory consolidated Mughal power.",
  },
  {
    id: "gh-p-21", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Mansabdari' system of the Mughals was introduced by ____",
    options: ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"], correct: 0,
    explanation: "Akbar introduced the Mansabdari system, a rank-based (mansab) administrative and military structure indicating an officer's status ('zat') and cavalry ('sawar').",
  },
  {
    id: "gh-p-22", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Buland Darwaza at Fatehpur Sikri was built by Akbar to commemorate his victory over ____",
    options: ["Gujarat", "Mewar", "Bengal", "Malwa"], correct: 0,
    explanation: "Akbar built the Buland Darwaza (1576) at Fatehpur Sikri to commemorate his conquest of Gujarat. It is one of the highest gateways in the world.",
  },
  {
    id: "gh-p-23", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Who was the founder of the Maratha Empire?",
    options: ["Shivaji", "Baji Rao I", "Balaji Vishwanath", "Shahu"], correct: 0,
    explanation: "Chhatrapati Shivaji founded the Maratha Empire, crowning himself at Raigad in 1674. He developed guerrilla warfare ('ganimi kava') and a navy.",
  },
  {
    id: "gh-p-24", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Vijayanagara Empire was founded by ____",
    options: ["Harihara and Bukka", "Krishnadevaraya", "Deva Raya II", "Pulakeshin II"], correct: 0,
    explanation: "The Vijayanagara Empire was founded in 1336 by the brothers Harihara and Bukka (Sangama dynasty). Krishnadevaraya was its most famous later ruler.",
  },
  {
    id: "gh-p-25", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Bhakti saint-poet Kabir was a disciple of ____",
    options: ["Ramananda", "Ramanuja", "Chaitanya", "Nanak"], correct: 0,
    explanation: "Kabir is traditionally regarded as a disciple of Ramananda. His verses (dohas), collected as the 'Bijak', preached a nirguna (formless) devotion beyond caste and creed.",
  },
  {
    id: "gh-p-26", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "'Tuzuk-i-Baburi' (Baburnama), the autobiography of Babur, was originally written in ____",
    options: ["Turki (Chagatai Turkish)", "Persian", "Arabic", "Urdu"], correct: 0,
    explanation: "Babur wrote his memoirs, the Baburnama (Tuzuk-i-Baburi), in Turki (Chagatai Turkish). It was later translated into Persian during Akbar's reign.",
  },
  {
    id: "gh-p-27", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Guru Gobind Singh founded the 'Khalsa' in the year ____",
    options: ["1699", "1605", "1657", "1708"], correct: 0,
    explanation: "Guru Gobind Singh, the tenth Sikh Guru, founded the Khalsa in 1699 at Anandpur Sahib, instituting the 'Panj Pyare' and the five Ks.",
  },
  {
    id: "gh-p-28", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Ain-i-Akbari' and 'Akbarnama' were written by ____",
    options: ["Abul Fazl", "Badauni", "Faizi", "Todar Mal"], correct: 0,
    explanation: "Abul Fazl, one of Akbar's Navratnas, wrote the Akbarnama, whose third volume is the Ain-i-Akbari, a detailed account of Akbar's administration.",
  },
  {
    id: "gh-p-29", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Kakatiya dynasty, whose capital was Warangal, ruled parts of present-day ____",
    options: ["Telangana", "Gujarat", "Rajasthan", "Bengal"], correct: 0,
    explanation: "The Kakatiya dynasty ruled from Warangal in present-day Telangana. The Ramappa Temple (a Kakatiya monument) is a UNESCO World Heritage Site.",
  },
  {
    id: "gh-p-30", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Which Mughal emperor is known as 'Zinda Pir' (living saint)?",
    options: ["Aurangzeb", "Akbar", "Humayun", "Jahangir"], correct: 0,
    explanation: "Aurangzeb was called 'Zinda Pir' for his austere, orthodox lifestyle. He was the last of the strong Mughal emperors; the empire declined after his death (1707).",
  },
  {
    id: "gh-p-31", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Chola king who led naval expeditions to Southeast Asia (Srivijaya) was ____",
    options: ["Rajendra Chola I", "Rajaraja Chola I", "Karikala", "Kulottunga"], correct: 0,
    explanation: "Rajendra Chola I led naval expeditions to Southeast Asia (the Srivijaya empire) and up to the Ganga (earning the title 'Gangaikonda'). The Cholas had a powerful navy.",
  },
  {
    id: "gh-p-32", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Vijayanagara' capital's ruins at Hampi lie on the bank of the river ____",
    options: ["Tungabhadra", "Krishna", "Kaveri", "Godavari"], correct: 0,
    explanation: "The ruins of the Vijayanagara capital at Hampi (a UNESCO World Heritage Site) lie on the bank of the Tungabhadra river in Karnataka.",
  },

  // ==================================================== Modern, PROFICIENT
  {
    id: "gh-p-33", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Battle of Buxar (1764) was fought between the British and the combined forces of Mir Qasim, the Nawab of Awadh, and ____",
    options: ["Mughal Emperor Shah Alam II", "Siraj-ud-Daulah", "Tipu Sultan", "The Marathas"], correct: 0,
    explanation: "At the Battle of Buxar (1764), the British defeated the combined forces of Mir Qasim, Shuja-ud-Daula (Awadh) and Mughal Emperor Shah Alam II, gaining the Diwani of Bengal (1765).",
  },
  {
    id: "gh-p-34", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Who was the first President of the Indian National Congress?",
    options: ["W. C. Bonnerjee", "A. O. Hume", "Dadabhai Naoroji", "Surendranath Banerjee"], correct: 0,
    explanation: "W. C. Bonnerjee presided over the first session of the INC (Bombay, 1885). A. O. Hume was the founder and general secretary.",
  },
  {
    id: "gh-p-35", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Congress adopted the resolution of 'Purna Swaraj' (complete independence) at its session held at ____",
    options: ["Lahore (1929)", "Calcutta (1928)", "Karachi (1931)", "Lucknow (1916)"], correct: 0,
    explanation: "At the Lahore Session (1929), presided over by Jawaharlal Nehru, the Congress adopted the 'Purna Swaraj' resolution. 26 January 1930 was observed as the first Independence Day.",
  },
  {
    id: "gh-p-36", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Gandhi's first satyagraha in India was launched in 1917 at ____",
    options: ["Champaran (Bihar)", "Kheda (Gujarat)", "Ahmedabad", "Bardoli"], correct: 0,
    explanation: "Gandhi's first satyagraha in India was the Champaran Satyagraha (1917, Bihar), on behalf of indigo cultivators oppressed by European planters.",
  },
  {
    id: "gh-p-37", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Non-Cooperation Movement was withdrawn by Gandhi after the violent incident at ____",
    options: ["Chauri Chaura (1922)", "Jallianwala Bagh (1919)", "Chittagong (1930)", "Kakori (1925)"], correct: 0,
    explanation: "Gandhi withdrew the Non-Cooperation Movement in February 1922 after the Chauri Chaura incident (UP), where a mob set fire to a police station, killing policemen.",
  },
  {
    id: "gh-p-38", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The slogan 'Simon Go Back' (1928) was raised against a commission that had no ____",
    options: ["Indian member", "British member", "legal power", "budget"], correct: 0,
    explanation: "The Simon Commission (1928) was boycotted because it had no Indian member. During protests, Lala Lajpat Rai was fatally injured in a lathi charge at Lahore.",
  },
  {
    id: "gh-p-39", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Bhagat Singh, Rajguru and Sukhdev were hanged in connection with the ____",
    options: ["Lahore Conspiracy Case", "Kakori Conspiracy Case", "Meerut Conspiracy Case", "Chittagong Armoury Raid"], correct: 0,
    explanation: "Bhagat Singh, Rajguru and Sukhdev were hanged on 23 March 1931 in the Lahore Conspiracy Case (linked to the killing of police officer Saunders).",
  },
  {
    id: "gh-p-40", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Who wrote the book 'Poverty and Un-British Rule in India', developing the 'Drain of Wealth' theory?",
    options: ["Dadabhai Naoroji", "R. C. Dutt", "M. G. Ranade", "Gopal Krishna Gokhale"], correct: 0,
    explanation: "Dadabhai Naoroji (the 'Grand Old Man of India') developed the 'Drain of Wealth' theory in 'Poverty and Un-British Rule in India'.",
  },
  {
    id: "gh-p-41", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The revolutionary organisation 'Hindustan Socialist Republican Association' (HSRA) was associated with ____",
    options: ["Bhagat Singh & Chandrashekhar Azad", "Gandhi & Nehru", "Tilak & Gokhale", "Bose & Patel"], correct: 0,
    explanation: "The HSRA was a revolutionary organisation associated with Bhagat Singh, Chandrashekhar Azad, Ram Prasad Bismil and others, active in the 1920s.",
  },
  {
    id: "gh-p-42", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Kakori Train Robbery (1925) was carried out by revolutionaries led by ____",
    options: ["Ram Prasad Bismil & Ashfaqullah Khan", "Bhagat Singh", "Subhas Bose", "Surya Sen"], correct: 0,
    explanation: "The Kakori conspiracy (1925, near Lucknow) was led by Ram Prasad Bismil, Ashfaqullah Khan and others of the HRA to fund revolutionary activity.",
  },
  {
    id: "gh-p-43", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 'Cabinet Mission' came to India in ____",
    options: ["1946", "1942", "1945", "1947"], correct: 0,
    explanation: "The Cabinet Mission (1946) proposed a plan for the transfer of power and the framing of the Constitution. The Constituent Assembly was formed under its plan.",
  },
  {
    id: "gh-p-44", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Indian Independence Act, which partitioned India, was passed by the British Parliament in ____",
    options: ["1947", "1945", "1935", "1950"], correct: 0,
    explanation: "The Indian Independence Act 1947 provided for the partition of British India into India and Pakistan and the transfer of power on 15 August 1947.",
  },
  {
    id: "gh-p-45", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Who among the following was the first Indian (and last) Governor-General of independent India?",
    options: ["C. Rajagopalachari", "Rajendra Prasad", "Lord Mountbatten", "Sardar Patel"], correct: 0,
    explanation: "C. Rajagopalachari was the first Indian and the last Governor-General of India (1948–1950), until the office was abolished when India became a republic.",
  },
  {
    id: "gh-p-46", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The 1857 Revolt at Kanpur was led by ____",
    options: ["Nana Sahib", "Kunwar Singh", "Begum Hazrat Mahal", "Tantia Tope (at Jhansi)"], correct: 0,
    explanation: "The revolt at Kanpur was led by Nana Sahib (assisted by Tantia Tope). At Lucknow it was Begum Hazrat Mahal, at Jhansi Rani Lakshmibai, and in Bihar Kunwar Singh.",
  },
  {
    id: "gh-p-47", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Governor-General during the Revolt of 1857 was ____",
    options: ["Lord Canning", "Lord Dalhousie", "Lord Curzon", "Warren Hastings"], correct: 0,
    explanation: "Lord Canning was the Governor-General during the 1857 Revolt. He later became the first Viceroy of India (1858) after the Crown took over from the Company.",
  },
  {
    id: "gh-p-48", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The newspaper 'Kesari' was started by ____",
    options: ["Bal Gangadhar Tilak", "Gandhi", "Lala Lajpat Rai", "Motilal Nehru"], correct: 0,
    explanation: "Bal Gangadhar Tilak started the Marathi newspaper 'Kesari' (and English 'Mahratta') to spread nationalist ideas.",
  },
  {
    id: "gh-p-49", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Ramakrishna Mission was founded (1897) by ____",
    options: ["Swami Vivekananda", "Ramakrishna Paramhansa", "Dayanand Saraswati", "Keshab Chandra Sen"], correct: 0,
    explanation: "Swami Vivekananda founded the Ramakrishna Mission (1897) in memory of his guru Ramakrishna Paramhansa. Vivekananda's 1893 Chicago address made him world-famous.",
  },
  {
    id: "gh-p-50", section: "gk", topic: "History", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The Government of India Act that introduced 'provincial autonomy' was the Act of ____",
    options: ["1935", "1919", "1909", "1858"], correct: 0,
    explanation: "The Government of India Act 1935 introduced provincial autonomy and a proposed all-India federation. It became a key basis for the Constitution of India.",
  },
];
