/**
 * English Grammar 2, Articles, Prepositions & Modals + Error-spotting.
 *
 * section: "english". Shared across both UPESSC exam levels.
 * Topics: "Articles" | "Prepositions" | "Modals" | "Error spotting" | "Subject-verb agreement".
 *   • beginner, common article/preposition/modal use; obvious errors.
 *   • proficient, tricky usage and error identification.
 *
 * Original, on-pattern items (modelled on UPESSC/UPTET English sections).
 */
import type { Question } from "./questions";

export const englishGrammar2Bank: Question[] = [
  // ==================================================== Articles, BEGINNER
  {
    id: "ec-b-01", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "He is ____ honest man.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "Use 'an' before a word beginning with a vowel SOUND. 'Honest' has a silent 'h', so it begins with a vowel sound → 'an honest man'.",
  },
  {
    id: "ec-b-02", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "____ sun rises in the east.",
    options: ["The", "A", "An", "No article"], correct: 0,
    explanation: "Use 'the' before unique objects that there is only one of ____ the sun, the moon, the earth, the sky.",
  },
  {
    id: "ec-b-03", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "I saw ____ elephant in the zoo.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "Use 'an' before a vowel sound. 'Elephant' begins with the vowel sound /e/ → 'an elephant'.",
  },
  {
    id: "ec-b-04", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "He is ____ university student.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'University' begins with a consonant sound /yu/, so use 'a', not 'an': 'a university'. (It's the sound, not the letter, that matters.)",
  },
  {
    id: "ec-b-05", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "She has ____ MA degree.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'MA' begins with the vowel sound /em/, so use 'an': 'an MA degree'. (Sound rule, not spelling.)",
  },
  {
    id: "ec-b-06", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "____ Ganga is a holy river.",
    options: ["The", "A", "An", "No article"], correct: 0,
    explanation: "Use 'the' before names of rivers, seas, oceans and mountain ranges, the Ganga, the Himalayas, the Pacific.",
  },
  {
    id: "ec-b-07", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "An apple ____ day keeps the doctor away.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'A' here means 'per/each': 'an apple a day' = one apple each day. 'A' is used before a consonant sound (day).",
  },
  {
    id: "ec-b-08", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "____ gold is a precious metal.",
    options: ["No article", "The", "A", "An"], correct: 0,
    explanation: "Uncountable/material nouns used in a general sense take no article: 'Gold is a precious metal.' (Use 'the' only for a specific quantity.)",
  },
  {
    id: "ec-b-09", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "She plays ____ violin very well.",
    options: ["the", "a", "an", "no article"], correct: 0,
    explanation: "Use 'the' before names of musical instruments: 'play the violin, the piano, the guitar'.",
  },
  {
    id: "ec-b-10", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "He is ____ European by birth.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'European' begins with the consonant sound /yu/, so use 'a': 'a European'. (Same reason as 'a university'.)",
  },
  {
    id: "ec-b-11", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "The Taj Mahal is ____ beautiful monument.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'Beautiful' begins with a consonant sound /b/, so use 'a': 'a beautiful monument'.",
  },
  {
    id: "ec-b-12", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "He goes to ____ school by bus.",
    options: ["no article", "a", "an", "the"], correct: 0,
    explanation: "No article is used with school/college/church/prison etc. when referring to their primary purpose: 'goes to school' (to study).",
  },
  {
    id: "ec-b-13", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "____ rich should help ____ poor.",
    options: ["The, the", "A, a", "The, a", "No article, the"], correct: 0,
    explanation: "'The + adjective' denotes a whole class of people: 'the rich' (rich people), 'the poor' (poor people).",
  },
  {
    id: "ec-b-14", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "I bought ____ umbrella yesterday.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'Umbrella' begins with the vowel sound /ʌ/, so use 'an': 'an umbrella'.",
  },
  {
    id: "ec-b-15", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "He is ____ honourable person.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'Honourable' has a silent 'h' (vowel sound), so use 'an': 'an honourable person'. Compare 'a horse' (sounded h).",
  },
  {
    id: "ec-b-16", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "____ Mount Everest is the highest peak.",
    options: ["No article", "The", "A", "An"], correct: 0,
    explanation: "Names of single mountains/peaks take no article: 'Mount Everest', 'Kanchenjunga'. (But ranges take 'the', the Himalayas.)",
  },
  {
    id: "ec-b-17", section: "english", topic: "Articles", level: "beginner", difficulty: "easy",
    stem: "There is ____ one-rupee coin on the table.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'One' begins with the consonant sound /w/, so use 'a': 'a one-rupee coin'. (Sound, not spelling.)",
  },
  {
    id: "ec-b-18", section: "english", topic: "Articles", level: "beginner", difficulty: "medium",
    stem: "She is ____ best student in the class.",
    options: ["the", "a", "an", "no article"], correct: 0,
    explanation: "Use 'the' before superlatives: 'the best', 'the tallest', 'the most beautiful'.",
  },

  // ==================================================== Prepositions, BEGINNER
  {
    id: "epr-b-01", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "She has been living here ____ 2010.",
    options: ["since", "for", "from", "by"], correct: 0,
    explanation: "'Since' is used with a point of time (2010). 'For' is used with a period (for ten years).",
  },
  {
    id: "epr-b-02", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "He is good ____ mathematics.",
    options: ["at", "in", "on", "with"], correct: 0,
    explanation: "'Good at' is the correct collocation for skills/subjects: 'good at maths', 'good at football'.",
  },
  {
    id: "epr-b-03", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "She is afraid ____ dogs.",
    options: ["of", "from", "with", "at"], correct: 0,
    explanation: "'Afraid of' is the fixed collocation: 'afraid of the dark', 'afraid of failure'.",
  },
  {
    id: "epr-b-04", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "The book is ____ the table.",
    options: ["on", "in", "at", "into"], correct: 0,
    explanation: "'On' is used for a surface contact: 'on the table', 'on the wall'.",
  },
  {
    id: "epr-b-05", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "He died ____ cholera.",
    options: ["of", "from", "with", "by"], correct: 0,
    explanation: "'Die of' is used with diseases/hunger: 'died of cholera', 'died of hunger'. ('Die from' is used with injuries/external causes.)",
  },
  {
    id: "epr-b-06", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "She is fond ____ music.",
    options: ["of", "for", "with", "in"], correct: 0,
    explanation: "'Fond of' is the fixed collocation: 'fond of sweets', 'fond of reading'.",
  },
  {
    id: "epr-b-07", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "Please wait ____ me at the gate.",
    options: ["for", "on", "at", "to"], correct: 0,
    explanation: "'Wait for' is the correct phrase: 'wait for someone/something'. ('Wait on' means to serve.)",
  },
  {
    id: "epr-b-08", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "He is senior ____ me by two years.",
    options: ["to", "than", "from", "of"], correct: 0,
    explanation: "Latin-origin comparatives (senior, junior, superior, inferior, prior) take 'to', not 'than': 'senior to me'.",
  },
  {
    id: "epr-b-09", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "Congratulations ____ your success!",
    options: ["on", "for", "at", "of"], correct: 0,
    explanation: "'Congratulate/Congratulations on' is the fixed usage: 'congratulations on your success/promotion'.",
  },
  {
    id: "epr-b-10", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "She jumped ____ the river to save the child.",
    options: ["into", "in", "on", "at"], correct: 0,
    explanation: "'Into' shows movement from outside to inside: 'jumped into the river'. ('In' shows a static position.)",
  },
  {
    id: "epr-b-11", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "This book is different ____ that one.",
    options: ["from", "than", "to", "with"], correct: 0,
    explanation: "'Different from' is the standard usage in formal English: 'different from', not 'different than'.",
  },
  {
    id: "epr-b-12", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "The cat is hiding ____ the bed.",
    options: ["under", "on", "at", "into"], correct: 0,
    explanation: "'Under' shows a position directly below something: 'under the bed', 'under the table'.",
  },
  {
    id: "epr-b-13", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "He is angry ____ his friend.",
    options: ["with", "on", "at", "from"], correct: 0,
    explanation: "'Angry with' is used for a person; 'angry at/about' is used for a thing/situation. Here: 'angry with his friend'.",
  },
  {
    id: "epr-b-14", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "We will meet ____ Monday.",
    options: ["on", "in", "at", "by"], correct: 0,
    explanation: "'On' is used with days and dates: 'on Monday', 'on 15 August'. ('In' for months/years, 'at' for times.)",
  },
  {
    id: "epr-b-15", section: "english", topic: "Prepositions", level: "beginner", difficulty: "easy",
    stem: "The train arrives ____ 5 o'clock.",
    options: ["at", "on", "in", "by"], correct: 0,
    explanation: "'At' is used with a precise time: 'at 5 o'clock', 'at noon', 'at midnight'.",
  },
  {
    id: "epr-b-16", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "He was born ____ 1990.",
    options: ["in", "on", "at", "by"], correct: 0,
    explanation: "'In' is used with years, months and seasons: 'in 1990', 'in June', 'in winter'.",
  },
  {
    id: "epr-b-17", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "Divide the cake ____ four parts.",
    options: ["into", "in", "to", "by"], correct: 0,
    explanation: "'Divide into' is used for splitting into parts: 'divide into four parts'.",
  },
  {
    id: "epr-b-18", section: "english", topic: "Prepositions", level: "beginner", difficulty: "medium",
    stem: "I agree ____ your opinion.",
    options: ["with", "to", "on", "for"], correct: 0,
    explanation: "'Agree with' a person or an opinion; 'agree to' a proposal/plan. Here, with an opinion → 'agree with'.",
  },

  // ==================================================== Modals, BEGINNER
  {
    id: "em-b-01", section: "english", topic: "Modals", level: "beginner", difficulty: "easy",
    stem: "You ____ obey your parents.",
    options: ["should", "may", "can", "might"], correct: 0,
    explanation: "'Should' expresses duty/advice: 'You should obey your parents.' ('Must' would express stronger obligation.)",
  },
  {
    id: "em-b-02", section: "english", topic: "Modals", level: "beginner", difficulty: "easy",
    stem: "____ I come in, sir?",
    options: ["May", "Will", "Shall", "Would"], correct: 0,
    explanation: "'May' is used to ask for polite permission: 'May I come in?'. ('Can I' is more informal.)",
  },
  {
    id: "em-b-03", section: "english", topic: "Modals", level: "beginner", difficulty: "easy",
    stem: "He ____ speak English fluently.",
    options: ["can", "may", "should", "must"], correct: 0,
    explanation: "'Can' expresses present ability: 'He can speak English fluently.'",
  },
  {
    id: "em-b-04", section: "english", topic: "Modals", level: "beginner", difficulty: "easy",
    stem: "You ____ not smoke here; it is prohibited.",
    options: ["must", "may", "can", "would"], correct: 0,
    explanation: "'Must not' expresses strong prohibition: 'You must not smoke here.'",
  },
  {
    id: "em-b-05", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "She ____ swim when she was five.",
    options: ["could", "can", "may", "should"], correct: 0,
    explanation: "'Could' is the past form of 'can' for ability: 'She could swim when she was five.'",
  },
  {
    id: "em-b-06", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "It ____ rain today; take an umbrella.",
    options: ["may", "must", "should", "can"], correct: 0,
    explanation: "'May/might' expresses possibility: 'It may rain today.'",
  },
  {
    id: "em-b-07", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "____ you please pass the salt?",
    options: ["Could", "Should", "Must", "Shall"], correct: 0,
    explanation: "'Could/Would you please ...' makes a polite request: 'Could you please pass the salt?'",
  },
  {
    id: "em-b-08", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "We ____ respect our elders.",
    options: ["should", "may", "might", "could"], correct: 0,
    explanation: "'Should' (or 'ought to') expresses moral duty: 'We should respect our elders.'",
  },
  {
    id: "em-b-09", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "Students ____ submit the assignment by Friday.",
    options: ["must", "may", "could", "would"], correct: 0,
    explanation: "'Must' expresses necessity/obligation: 'Students must submit the assignment by Friday.'",
  },
  {
    id: "em-b-10", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "____ we go for a walk?",
    options: ["Shall", "Will", "May", "Must"], correct: 0,
    explanation: "'Shall we ...?' is used to make a suggestion or offer with 'we': 'Shall we go for a walk?'",
  },
  {
    id: "em-b-11", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "You ____ have finished the work by now.",
    options: ["ought to", "may", "can", "shall"], correct: 0,
    explanation: "'Ought to' (like 'should') expresses expectation/duty: 'You ought to have finished the work by now.'",
  },
  {
    id: "em-b-12", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "He ____ be at home; the lights are on.",
    options: ["must", "may not", "cannot", "should not"], correct: 0,
    explanation: "'Must' can express a logical certainty/deduction: 'He must be at home' (I'm sure, because the lights are on).",
  },
  {
    id: "em-b-13", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "When I was young, I ____ run very fast.",
    options: ["could", "can", "may", "must"], correct: 0,
    explanation: "'Could' expresses past ability: 'When I was young, I could run very fast.'",
  },
  {
    id: "em-b-14", section: "english", topic: "Modals", level: "beginner", difficulty: "medium",
    stem: "You ____ take an umbrella in case it rains.",
    options: ["had better", "must not", "cannot", "may not"], correct: 0,
    explanation: "'Had better' gives strong advice/warning: 'You had better take an umbrella in case it rains.'",
  },

  // ==================================================== Articles, PROFICIENT
  {
    id: "ec-p-01", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "He returned after ____ hour.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'Hour' has a silent 'h' and begins with a vowel sound → 'an hour'. The sound, not the spelling, decides a/an.",
  },
  {
    id: "ec-p-02", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "____ more you read, ____ more you learn.",
    options: ["The, the", "A, a", "The, a", "No article, the"], correct: 0,
    explanation: "In the 'the + comparative ..., the + comparative ...' structure, both take 'the': 'The more you read, the more you learn.'",
  },
  {
    id: "ec-p-03", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Kalidas is called ____ Shakespeare of India.",
    options: ["the", "a", "an", "no article"], correct: 0,
    explanation: "'The' is used before a proper noun to mean 'the famous / a comparable one': 'the Shakespeare of India'.",
  },
  {
    id: "ec-p-04", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Copper is ____ useful metal.",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "'Useful' begins with the consonant sound /yu/, so use 'a': 'a useful metal'. (Same as 'a university'.)",
  },
  {
    id: "ec-p-05", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "He is ____ heir to a huge fortune.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'Heir' has a silent 'h' (vowel sound) → 'an heir'. Compare 'a hero' (sounded h).",
  },
  {
    id: "ec-p-06", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "____ Netherlands is a European country.",
    options: ["The", "A", "An", "No article"], correct: 0,
    explanation: "'The' is used before names of countries that are plural or include 'republic/kingdom/states', the Netherlands, the USA, the UK.",
  },
  {
    id: "ec-p-07", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Honesty is ____ best policy.",
    options: ["the", "a", "an", "no article"], correct: 0,
    explanation: "Use 'the' before a superlative: 'the best policy'. (Note: 'honesty' itself, an abstract noun in general sense, takes no article.)",
  },
  {
    id: "ec-p-08", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "She goes to ____ bed early. (habitual purpose)",
    options: ["no article", "the", "a", "an"], correct: 0,
    explanation: "No article with bed/school/church/hospital when the primary purpose is meant: 'go to bed' (to sleep).",
  },
  {
    id: "ec-p-09", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "What ____ beautiful painting this is!",
    options: ["a", "an", "the", "no article"], correct: 0,
    explanation: "In exclamations with a singular countable noun, use 'a/an': 'What a beautiful painting!' ('Beautiful' → consonant sound → 'a').",
  },
  {
    id: "ec-p-10", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "The train runs at 80 km ____ hour.",
    options: ["an", "a", "the", "per a"], correct: 0,
    explanation: "'A/an' can mean 'per': '80 km an hour' (= per hour). 'Hour' takes 'an' (silent h).",
  },
  {
    id: "ec-p-11", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "He plays ____ cricket every evening.",
    options: ["no article", "the", "a", "an"], correct: 0,
    explanation: "No article is used before the names of games/sports: 'play cricket, play football, play chess'. (Compare 'play the piano'.)",
  },
  {
    id: "ec-p-12", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Delhi is ____ capital of India.",
    options: ["the", "a", "an", "no article"], correct: 0,
    explanation: "Use 'the' before a unique post/thing when followed by 'of': 'the capital of India', 'the President of India'.",
  },
  {
    id: "ec-p-13", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Iron is ____ useful metal, and ____ iron in this box is rusty.",
    options: ["a, the", "the, a", "an, the", "a, a"], correct: 0,
    explanation: "General sense → 'a useful metal'; specific quantity → 'the iron in this box'. The same material noun shifts article with meaning.",
  },
  {
    id: "ec-p-14", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "He is ____ M.L.A. of our area.",
    options: ["an", "a", "the", "no article"], correct: 0,
    explanation: "'M.L.A.' begins with the vowel sound /em/, so use 'an': 'an M.L.A.' (sound rule).",
  },
  {
    id: "ec-p-15", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "____ cow is a useful animal. (whole class)",
    options: ["The", "A", "An", "No article (either 'The cow' or 'A cow' works)"], correct: 3,
    explanation: "To denote a whole class, both 'The cow is a useful animal' and 'A cow is a useful animal' are correct. The best option here acknowledges both are acceptable.",
  },
  {
    id: "ec-p-16", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "She is ____ university topper and ____ honour to her college.",
    options: ["a, an", "an, a", "the, the", "a, a"], correct: 0,
    explanation: "'University' → consonant sound /yu/ → 'a'; 'honour' → silent h, vowel sound → 'an'. So 'a university topper and an honour'.",
  },
  {
    id: "ec-p-17", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "____ Andaman and Nicobar Islands are in the Bay of Bengal.",
    options: ["The", "A", "An", "No article"], correct: 0,
    explanation: "'The' is used before names of island groups, the Andamans, the Maldives, the West Indies.",
  },
  {
    id: "ec-p-18", section: "english", topic: "Articles", level: "proficient", difficulty: "hard",
    stem: "Man does not live by ____ bread alone.",
    options: ["no article", "the", "a", "an"], correct: 0,
    explanation: "Material/uncountable nouns used generally take no article: 'live by bread alone'. (Also 'Man' as mankind takes no article.)",
  },

  // ==================================================== Prepositions, PROFICIENT
  {
    id: "epr-p-01", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He has been ill ____ three days.",
    options: ["for", "since", "from", "by"], correct: 0,
    explanation: "'For' is used with a period of time: 'for three days'. ('Since' would need a point of time.)",
  },
  {
    id: "epr-p-02", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He is not capable ____ doing this work.",
    options: ["of", "to", "for", "in"], correct: 0,
    explanation: "'Capable of + -ing' is the fixed pattern: 'capable of doing'. (Compare 'able to do'.)",
  },
  {
    id: "epr-p-03", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "The manager acceded ____ our request.",
    options: ["to", "with", "for", "on"], correct: 0,
    explanation: "'Accede to' means to agree to ____ 'acceded to our request'.",
  },
  {
    id: "epr-p-04", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "She was married ____ a doctor.",
    options: ["to", "with", "by", "for"], correct: 0,
    explanation: "'Married to' (a person) is correct: 'married to a doctor'. ('Married with' is wrong in this sense.)",
  },
  {
    id: "epr-p-05", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He was accused ____ theft.",
    options: ["of", "for", "with", "about"], correct: 0,
    explanation: "'Accuse of' is the fixed collocation: 'accused of theft'. (Compare 'charged with'.)",
  },
  {
    id: "epr-p-06", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "There is no exception ____ this rule.",
    options: ["to", "of", "for", "in"], correct: 0,
    explanation: "'Exception to' is the correct phrase: 'an exception to the rule'.",
  },
  {
    id: "epr-p-07", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He prevented me ____ going there.",
    options: ["from", "to", "of", "for"], correct: 0,
    explanation: "'Prevent someone from + -ing' is the fixed pattern: 'prevented me from going'.",
  },
  {
    id: "epr-p-08", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "I congratulated him ____ his success.",
    options: ["on", "for", "at", "about"], correct: 0,
    explanation: "'Congratulate someone on something': 'congratulated him on his success'.",
  },
  {
    id: "epr-p-09", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "She is confident ____ her success.",
    options: ["of", "on", "for", "in"], correct: 0,
    explanation: "'Confident of' something is the standard collocation: 'confident of her success' (also 'confident about').",
  },
  {
    id: "epr-p-10", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He is indifferent ____ praise or blame.",
    options: ["to", "of", "with", "for"], correct: 0,
    explanation: "'Indifferent to' is the fixed collocation: 'indifferent to praise or blame'.",
  },
  {
    id: "epr-p-11", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "The thief was charged ____ murder.",
    options: ["with", "of", "for", "on"], correct: 0,
    explanation: "'Charge someone with a crime': 'charged with murder'. (Compare 'accused of murder'.)",
  },
  {
    id: "epr-p-12", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He deals ____ groceries.",
    options: ["in", "with", "on", "at"], correct: 0,
    explanation: "'Deal in' goods (trade in): 'deals in groceries'. ('Deal with' means to handle a matter/person.)",
  },
  {
    id: "epr-p-13", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "She takes after ____ her mother.",
    options: ["No preposition ('takes after' is already complete)", "to", "with", "from"], correct: 0,
    explanation: "'Take after' (resemble) is a phrasal verb that needs no extra preposition: 'She takes after her mother.'",
  },
  {
    id: "epr-p-14", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "I have no faith ____ him.",
    options: ["in", "on", "at", "for"], correct: 0,
    explanation: "'Faith in' someone/something is correct: 'no faith in him'. (Similarly 'belief in', 'trust in'.)",
  },
  {
    id: "epr-p-15", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He was absorbed ____ his work.",
    options: ["in", "with", "on", "at"], correct: 0,
    explanation: "'Absorbed in' means deeply engrossed: 'absorbed in his work'.",
  },
  {
    id: "epr-p-16", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "There is nothing wrong ____ this plan.",
    options: ["with", "in", "of", "about"], correct: 0,
    explanation: "'Wrong with' is the fixed collocation: 'nothing wrong with this plan'.",
  },
  {
    id: "epr-p-17", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "The bridge is made ____ concrete.",
    options: ["of", "from", "with", "by"], correct: 0,
    explanation: "'Made of' is used when the material is still recognisable: 'made of concrete/wood'. ('Made from' when the original is transformed, e.g. paper from wood.)",
  },
  {
    id: "epr-p-18", section: "english", topic: "Prepositions", level: "proficient", difficulty: "hard",
    stem: "He is bent ____ mischief.",
    options: ["on", "upon (either)", "for", "to"], correct: 1,
    explanation: "'Bent on/upon' means firmly determined (usually on something bad): 'bent on/upon mischief'. Both 'on' and 'upon' are accepted.",
  },

  // ==================================================== Modals, PROFICIENT
  {
    id: "em-p-01", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "You ____ have informed me earlier. (past regret/reproach)",
    options: ["should", "must", "can", "may"], correct: 0,
    explanation: "'Should have + past participle' expresses a past duty that was not done (reproach): 'You should have informed me earlier.'",
  },
  {
    id: "em-p-02", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "He ____ have been very rich; he owned three houses.",
    options: ["must", "should", "can", "may not"], correct: 0,
    explanation: "'Must have + past participle' expresses a strong past deduction/certainty: 'He must have been very rich.'",
  },
  {
    id: "em-p-03", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "I ____ rather walk than take a crowded bus.",
    options: ["would", "should", "could", "must"], correct: 0,
    explanation: "'Would rather ... than ...' expresses preference: 'I would rather walk than take a crowded bus.'",
  },
  {
    id: "em-p-04", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "She ____ not have taken the medicine; it was harmful. (past, but she did)",
    options: ["should", "must", "can", "will"], correct: 0,
    explanation: "'Should not have + past participle' expresses that a past action was wrong (though it happened): 'She should not have taken the medicine.'",
  },
  {
    id: "em-p-05", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "He works hard so that he ____ succeed.",
    options: ["may", "can not", "would", "must"], correct: 0,
    explanation: "In a clause of purpose ('so that'), 'may/might' (present) or 'could' (past) is used: 'so that he may succeed.'",
  },
  {
    id: "em-p-06", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "You ____ not have worried; everything was fine.",
    options: ["need", "must", "should", "can"], correct: 0,
    explanation: "'Need not have + past participle' means an action was done although it was unnecessary: 'You need not have worried.'",
  },
  {
    id: "em-p-07", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "It's very late; he ____ be sleeping now.",
    options: ["must", "should", "can", "may not"], correct: 0,
    explanation: "'Must be + -ing' expresses a confident present deduction: 'He must be sleeping now.'",
  },
  {
    id: "em-p-08", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "____ that I were young again! (a wish)",
    options: ["Would", "Will", "Should", "Could"], correct: 0,
    explanation: "'Would that ...' is an archaic/literary way of expressing a wish: 'Would that I were young again!'",
  },
  {
    id: "em-p-09", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "You ____ to help the poor.",
    options: ["ought", "should to", "must to", "may"], correct: 0,
    explanation: "'Ought to' is followed by the base verb: 'You ought to help the poor.' (Do not say 'should to' or 'must to'.)",
  },
  {
    id: "em-p-10", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "If you had asked, I ____ have helped you.",
    options: ["would", "will", "shall", "may"], correct: 0,
    explanation: "In a third conditional, the main clause uses 'would have + past participle': 'I would have helped you.'",
  },
  {
    id: "em-p-11", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "He ____ not swim, so he stayed on the shore.",
    options: ["could", "can", "may", "must"], correct: 0,
    explanation: "'Could not' is the past of 'cannot' (inability): 'He could not swim, so he stayed on the shore.'",
  },
  {
    id: "em-p-12", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "You ____ better consult a doctor.",
    options: ["had", "have", "would", "should"], correct: 0,
    explanation: "The correct form is 'had better + base verb' (strong advice): 'You had better consult a doctor.' Never 'have better' / 'would better'.",
  },
  {
    id: "em-p-13", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "Scarcely ____ he arrived when the meeting began.",
    options: ["had", "did", "has", "was"], correct: 0,
    explanation: "With 'Scarcely/Hardly' at the start, the auxiliary is inverted and past perfect used: 'Scarcely had he arrived when ...'",
  },
  {
    id: "em-p-14", section: "english", topic: "Modals", level: "proficient", difficulty: "hard",
    stem: "He dare ____ oppose his boss. (negative)",
    options: ["not", "to not", "don't", "not to"], correct: 0,
    explanation: "As a modal, 'dare' is followed by the bare infinitive in the negative: 'He dare not oppose his boss.'",
  },
];
