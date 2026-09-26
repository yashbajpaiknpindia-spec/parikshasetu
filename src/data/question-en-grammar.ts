/**
 * English Grammar, Tenses, Voice & Narration.
 *
 * section: "english". Shared across both UPESSC exam levels.
 * Topics: "Tenses" | "Voice" | "Narration".
 *   • beginner, identify the tense; simple active↔passive; simple reported speech.
 *   • proficient, tense form in context, trickier voice/narration transformations.
 *
 * Original, on-pattern items (modelled on UPESSC/UPTET English sections).
 */
import type { Question } from "./questions";

export const englishGrammarBank: Question[] = [
  // ==================================================== Tenses, BEGINNER
  {
    id: "et-b-01", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "She ____ to school every day.",
    options: ["goes", "go", "going", "gone"], correct: 0,
    explanation: "For a habitual action in the simple present with a third-person singular subject ('she'), the verb takes '-s': 'goes'. Marker: 'every day'.",
  },
  {
    id: "et-b-02", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "They ____ football at the moment.",
    options: ["are playing", "play", "plays", "played"], correct: 0,
    explanation: "'At the moment' signals the present continuous tense: is/are + verb-ing. With 'they' → 'are playing'.",
  },
  {
    id: "et-b-03", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "He ____ his homework yesterday.",
    options: ["finished", "finishes", "has finished", "will finish"], correct: 0,
    explanation: "'Yesterday' signals a completed past action → simple past: 'finished'. The simple past does not use 'has' or 'will'.",
  },
  {
    id: "et-b-04", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which tense is used in the sentence: 'I have eaten my lunch.'?",
    options: ["Present perfect", "Simple past", "Present continuous", "Past perfect"], correct: 0,
    explanation: "'Have/has + past participle (eaten)' is the present perfect tense, a past action with present relevance and no specific time.",
  },
  {
    id: "et-b-05", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Water ____ at 100 degrees Celsius.",
    options: ["boils", "boil", "is boiling", "boiled"], correct: 0,
    explanation: "Universal truths/facts take the simple present: 'Water boils at 100°C.' Third-person singular ('water') → 'boils'.",
  },
  {
    id: "et-b-06", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Look! The baby ____ .",
    options: ["is crying", "cries", "cried", "cry"], correct: 0,
    explanation: "'Look!' points to an action happening right now → present continuous: 'is crying' (is/are + verb-ing).",
  },
  {
    id: "et-b-07", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "I ____ him last Monday.",
    options: ["met", "meet", "have met", "will meet"], correct: 0,
    explanation: "A finished action at a specific past time ('last Monday') takes the simple past: 'met'.",
  },
  {
    id: "et-b-08", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "She ____ in this city since 2010.",
    options: ["has lived", "lives", "lived", "is living"], correct: 0,
    explanation: "An action that began in the past and continues now, with 'since', takes the present perfect: 'has lived'. ('Since' + a point of time.)",
  },
  {
    id: "et-b-09", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "We ____ to Delhi next week.",
    options: ["will go", "go", "went", "have gone"], correct: 0,
    explanation: "A future action ('next week') takes 'will + base verb': 'will go'.",
  },
  {
    id: "et-b-10", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "When I reached the station, the train ____ already ____ .",
    options: ["had, left", "has, left", "have, left", "was, leaving"], correct: 0,
    explanation: "For an action completed before another past action, use the past perfect: 'had + past participle' → 'had already left'.",
  },
  {
    id: "et-b-11", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Which tense is used in: 'They were watching TV.'?",
    options: ["Past continuous", "Past perfect", "Present continuous", "Simple past"], correct: 0,
    explanation: "'Was/were + verb-ing' is the past continuous tense, an action in progress at a point in the past.",
  },
  {
    id: "et-b-12", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "He ____ TV when the phone rang.",
    options: ["was watching", "watched", "watches", "has watched"], correct: 0,
    explanation: "For an ongoing past action interrupted by another, the ongoing one takes past continuous: 'was watching'; the interruption ('rang') is simple past.",
  },
  {
    id: "et-b-13", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "By next year, she ____ her degree.",
    options: ["will have completed", "will complete", "completes", "has completed"], correct: 0,
    explanation: "For an action to be finished before a future time ('by next year'), use the future perfect: 'will have + past participle'.",
  },
  {
    id: "et-b-14", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "I ____ this book for two hours.",
    options: ["have been reading", "read", "am reading", "have read"], correct: 0,
    explanation: "For an action that started in the past and is still continuing, with a duration ('for two hours'), use present perfect continuous: 'have been reading'.",
  },
  {
    id: "et-b-15", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The sun ____ in the east.",
    options: ["rises", "rise", "is rising", "rose"], correct: 0,
    explanation: "A universal truth takes the simple present: 'The sun rises in the east.' Third-person singular → 'rises'.",
  },
  {
    id: "et-b-16", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "She ____ not ____ the film yet.",
    options: ["has, seen", "did, see", "have, seen", "is, seeing"], correct: 0,
    explanation: "'Yet' with a present-perfect negative: 'has not seen'. 'Yet' is a typical present-perfect time marker.",
  },
  {
    id: "et-b-17", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Identify the tense: 'I shall be waiting for you.'",
    options: ["Future continuous", "Simple future", "Future perfect", "Present continuous"], correct: 0,
    explanation: "'Shall/will be + verb-ing' is the future continuous tense, an action that will be in progress at a future time.",
  },
  {
    id: "et-b-18", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "They ____ here for five years before they moved.",
    options: ["had lived", "have lived", "lived", "were living"], correct: 0,
    explanation: "An action completed before another past action ('before they moved') takes the past perfect: 'had lived'.",
  },
  {
    id: "et-b-19", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "My father ____ a newspaper every morning.",
    options: ["reads", "read", "is reading", "has read"], correct: 0,
    explanation: "A daily habit takes the simple present; third-person singular ('my father') → 'reads'. Marker: 'every morning'.",
  },
  {
    id: "et-b-20", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "It ____ heavily since morning.",
    options: ["has been raining", "rains", "rained", "is rain"], correct: 0,
    explanation: "An action continuing from a past point ('since morning') to now takes present perfect continuous: 'has been raining'.",
  },
  {
    id: "et-b-21", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the correct form: 'He ____ already gone.'",
    options: ["has", "have", "is", "was"], correct: 0,
    explanation: "'Already' with the present perfect, third-person singular → 'has already gone' (has + past participle).",
  },
  {
    id: "et-b-22", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "While I ____ , someone knocked at the door.",
    options: ["was cooking", "cooked", "cook", "have cooked"], correct: 0,
    explanation: "'While' introduces an ongoing past action → past continuous 'was cooking'; the sudden action ('knocked') is simple past.",
  },
  {
    id: "et-b-23", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which tense: 'She will write a letter.'?",
    options: ["Simple future", "Future continuous", "Present continuous", "Simple present"], correct: 0,
    explanation: "'Will/shall + base verb' is the simple future tense, an action expected to happen later.",
  },
  {
    id: "et-b-24", section: "english", topic: "Tenses", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "I ____ my breakfast before I left home.",
    options: ["had taken", "took", "have taken", "take"], correct: 0,
    explanation: "The earlier of two past actions takes the past perfect: 'had taken' (before 'left', which is simple past).",
  },

  // ==================================================== Voice, BEGINNER
  {
    id: "ev-b-01", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Change to passive voice: 'She writes a letter.'",
    options: ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has written by her."], correct: 0,
    explanation: "Simple present passive: object + is/are + past participle + by + agent → 'A letter is written by her.'",
  },
  {
    id: "ev-b-02", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Change to passive voice: 'They built a house.'",
    options: ["A house was built by them.", "A house is built by them.", "A house has been built by them.", "A house were built by them."], correct: 0,
    explanation: "Simple past passive: object + was/were + past participle + by + agent → 'A house was built by them.'",
  },
  {
    id: "ev-b-03", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Change to passive voice: 'He is reading a book.'",
    options: ["A book is being read by him.", "A book is read by him.", "A book was being read by him.", "A book has been read by him."], correct: 0,
    explanation: "Present continuous passive: object + is/are being + past participle + by + agent → 'A book is being read by him.'",
  },
  {
    id: "ev-b-04", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'The teacher has punished the boy.'",
    options: ["The boy has been punished by the teacher.", "The boy is punished by the teacher.", "The boy was punished by the teacher.", "The boy has punished by the teacher."], correct: 0,
    explanation: "Present perfect passive: object + has/have been + past participle + by + agent → 'The boy has been punished by the teacher.'",
  },
  {
    id: "ev-b-05", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to active voice: 'The window was broken by John.'",
    options: ["John broke the window.", "John breaks the window.", "John has broken the window.", "John was breaking the window."], correct: 0,
    explanation: "Passive 'was + past participle' → active simple past: 'John broke the window.' The agent becomes the subject.",
  },
  {
    id: "ev-b-06", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Change to passive voice: 'People speak English all over the world.'",
    options: ["English is spoken all over the world.", "English was spoken all over the world.", "English is being spoken all over the world.", "English has spoken all over the world."], correct: 0,
    explanation: "Simple present passive: 'English is spoken all over the world.' When the agent ('people') is general/unknown, 'by people' is usually dropped.",
  },
  {
    id: "ev-b-07", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'They will complete the work.'",
    options: ["The work will be completed by them.", "The work will completed by them.", "The work is completed by them.", "The work would be completed by them."], correct: 0,
    explanation: "Simple future passive: object + will be + past participle + by + agent → 'The work will be completed by them.'",
  },
  {
    id: "ev-b-08", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'Someone has stolen my purse.'",
    options: ["My purse has been stolen.", "My purse is stolen.", "My purse was stolen.", "My purse has stolen."], correct: 0,
    explanation: "Present perfect passive with an indefinite agent ('someone'): 'My purse has been stolen.', the vague agent is dropped.",
  },
  {
    id: "ev-b-09", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'Open the door.' (imperative)",
    options: ["Let the door be opened.", "The door is opened.", "The door was opened.", "You open the door."], correct: 0,
    explanation: "Imperative sentences become passive with 'Let + object + be + past participle': 'Let the door be opened.'",
  },
  {
    id: "ev-b-10", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to active voice: 'A song is being sung by her.'",
    options: ["She is singing a song.", "She sings a song.", "She sang a song.", "She has sung a song."], correct: 0,
    explanation: "Passive 'is being + past participle' → active present continuous: 'She is singing a song.'",
  },
  {
    id: "ev-b-11", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'The dog was chasing the cat.'",
    options: ["The cat was being chased by the dog.", "The cat was chased by the dog.", "The cat is being chased by the dog.", "The cat had been chased by the dog."], correct: 0,
    explanation: "Past continuous passive: object + was/were being + past participle + by + agent → 'The cat was being chased by the dog.'",
  },
  {
    id: "ev-b-12", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "In the passive voice, the ____ of the active sentence becomes the subject.",
    options: ["object", "verb", "adjective", "adverb"], correct: 0,
    explanation: "In changing active to passive, the object of the active sentence becomes the subject of the passive sentence, and the subject becomes the agent ('by ...').",
  },
  {
    id: "ev-b-13", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'She teaches us grammar.'",
    options: ["We are taught grammar by her.", "Grammar is taught us by her.", "We were taught grammar by her.", "We are teaching grammar by her."], correct: 0,
    explanation: "With two objects, the indirect object ('us') usually becomes the subject: 'We are taught grammar by her.' (Simple present passive.)",
  },
  {
    id: "ev-b-14", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to active voice: 'The letter has been posted by him.'",
    options: ["He has posted the letter.", "He posted the letter.", "He posts the letter.", "He is posting the letter."], correct: 0,
    explanation: "Passive 'has been + past participle' → active present perfect: 'He has posted the letter.'",
  },
  {
    id: "ev-b-15", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to passive voice: 'Do you know the answer?'",
    options: ["Is the answer known to you?", "Are the answer known by you?", "Was the answer known to you?", "Has the answer known to you?"], correct: 0,
    explanation: "An interrogative in the simple present passive: 'Is the answer known to you?' (verbs of state like 'know' take 'to' rather than 'by').",
  },
  {
    id: "ev-b-16", section: "english", topic: "Voice", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Which sentence is in the passive voice?",
    options: ["The cake was eaten by the children.", "The children ate the cake.", "The children are eating the cake.", "The children will eat the cake."], correct: 0,
    explanation: "'The cake was eaten by the children' is passive, the subject (cake) receives the action. The others are active (subject performs the action).",
  },

  // ==================================================== Narration, BEGINNER
  {
    id: "en-b-01", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: He said, 'I am happy.'",
    options: ["He said that he was happy.", "He said that he is happy.", "He says that he was happy.", "He said that I was happy."], correct: 0,
    explanation: "In reported speech, present tense back-shifts to past ('am' → 'was') and the pronoun 'I' changes to 'he'. 'He said that he was happy.'",
  },
  {
    id: "en-b-02", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: She said to me, 'I will help you.'",
    options: ["She told me that she would help me.", "She told me that she will help me.", "She said me that she would help you.", "She told to me that she would help me."], correct: 0,
    explanation: "'Said to' → 'told'; 'will' → 'would'; pronouns shift ('I' → 'she', 'you' → 'me'). 'She told me that she would help me.'",
  },
  {
    id: "en-b-03", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: He said, 'I work hard.'",
    options: ["He said that he worked hard.", "He said that he works hard.", "He said that I worked hard.", "He says that he worked hard."], correct: 0,
    explanation: "Simple present ('work') back-shifts to simple past ('worked'); 'I' → 'he'. 'He said that he worked hard.'",
  },
  {
    id: "en-b-04", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: She said, 'I am reading a book.'",
    options: ["She said that she was reading a book.", "She said that she is reading a book.", "She said that she was read a book.", "She said that I was reading a book."], correct: 0,
    explanation: "Present continuous ('am reading') back-shifts to past continuous ('was reading'); 'I' → 'she'.",
  },
  {
    id: "en-b-05", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: He said, 'I saw a lion.'",
    options: ["He said that he had seen a lion.", "He said that he saw a lion.", "He said that he has seen a lion.", "He said that I had seen a lion."], correct: 0,
    explanation: "Simple past ('saw') back-shifts to past perfect ('had seen') in reported speech; 'I' → 'he'.",
  },
  {
    id: "en-b-06", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In reporting, 'said to' is usually changed to ____ .",
    options: ["told", "say", "tells", "spoke"], correct: 0,
    explanation: "When a listener is mentioned, 'said to' becomes 'told' (told + object, without 'to'): 'He said to me' → 'He told me'.",
  },
  {
    id: "en-b-07", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: She said, 'I can swim.'",
    options: ["She said that she could swim.", "She said that she can swim.", "She said that she could swims.", "She said that I could swim."], correct: 0,
    explanation: "The modal 'can' back-shifts to 'could' in reported speech; 'I' → 'she'. 'She said that she could swim.'",
  },
  {
    id: "en-b-08", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In indirect speech, 'now' usually changes to ____ .",
    options: ["then", "today", "here", "soon"], correct: 0,
    explanation: "Time/place words shift in reported speech: 'now' → 'then', 'today' → 'that day', 'here' → 'there', 'tomorrow' → 'the next day'.",
  },
  {
    id: "en-b-09", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Change to indirect speech: He said, 'I have finished my work.'",
    options: ["He said that he had finished his work.", "He said that he has finished his work.", "He said that he finished his work.", "He said that I had finished my work."], correct: 0,
    explanation: "Present perfect ('have finished') back-shifts to past perfect ('had finished'); 'I' → 'he', 'my' → 'his'.",
  },
  {
    id: "en-b-10", section: "english", topic: "Narration", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "In indirect speech, 'tomorrow' usually changes to ____ .",
    options: ["the next day", "yesterday", "that day", "the previous day"], correct: 0,
    explanation: "'Tomorrow' → 'the next day / the following day' in reported speech. (Similarly 'yesterday' → 'the previous day'.)",
  },

  // ==================================================== Tenses, PROFICIENT
  {
    id: "et-p-01", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If it ____ tomorrow, we will cancel the trip.",
    options: ["rains", "will rain", "rained", "is raining"], correct: 0,
    explanation: "In a first conditional (real future condition), the 'if'-clause uses the simple present even for future meaning: 'If it rains ..., we will cancel.'",
  },
  {
    id: "et-p-02", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "He talks as if he ____ everything.",
    options: ["knew", "knows", "has known", "will know"], correct: 0,
    explanation: "'As if / as though' expressing an unreal present situation takes the past subjunctive: 'as if he knew everything' (though he doesn't).",
  },
  {
    id: "et-p-03", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "I wish I ____ taller.",
    options: ["were", "was", "am", "will be"], correct: 0,
    explanation: "After 'I wish' for an unreal present state, use the subjunctive 'were' for all persons: 'I wish I were taller.'",
  },
  {
    id: "et-p-04", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "By the time you arrive, I ____ the report.",
    options: ["will have finished", "will finish", "finish", "have finished"], correct: 0,
    explanation: "An action to be completed before a future point ('by the time you arrive') takes the future perfect: 'will have finished'.",
  },
  {
    id: "et-p-05", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "She ____ here for three hours; she looks tired.",
    options: ["has been working", "works", "worked", "is working"], correct: 0,
    explanation: "An action continuing up to now with a duration and a visible result takes the present perfect continuous: 'has been working'.",
  },
  {
    id: "et-p-06", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Hardly had I sat down ____ the phone rang.",
    options: ["when", "than", "then", "that"], correct: 0,
    explanation: "The pattern 'Hardly/Scarcely had + subject + past participle ... when ...' is fixed. (With 'No sooner', use 'than'.)",
  },
  {
    id: "et-p-07", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "No sooner had he entered the room ____ everyone stood up.",
    options: ["than", "when", "then", "that"], correct: 0,
    explanation: "The correlative 'No sooner had ... than ...' is fixed. (Do not confuse with 'Hardly ... when ...'.)",
  },
  {
    id: "et-p-08", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If I ____ rich, I would travel the world.",
    options: ["were", "am", "was", "will be"], correct: 0,
    explanation: "In a second conditional (unreal present), the 'if'-clause uses the past subjunctive 'were': 'If I were rich, I would travel ...'",
  },
  {
    id: "et-p-09", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "It is high time we ____ home.",
    options: ["went", "go", "will go", "have gone"], correct: 0,
    explanation: "After 'It is (high) time', use the past subjunctive to mean 'should now': 'It is high time we went home.'",
  },
  {
    id: "et-p-10", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The train ____ before we reached the platform.",
    options: ["had departed", "departed", "has departed", "was departing"], correct: 0,
    explanation: "The earlier of two past actions takes the past perfect: 'had departed' (before 'reached', simple past).",
  },
  {
    id: "et-p-11", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "She said she ____ the letter the previous day.",
    options: ["had written", "wrote", "has written", "writes"], correct: 0,
    explanation: "In reported speech, a simple past becomes past perfect: 'had written' (with the shifted time phrase 'the previous day').",
  },
  {
    id: "et-p-12", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Neither the teacher nor the students ____ present.",
    options: ["were", "was", "is", "has been"], correct: 0,
    explanation: "With 'neither ... nor ...', the verb agrees with the nearer subject. The nearer subject 'students' is plural, so 'were'.",
  },
  {
    id: "et-p-13", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Each of the boys ____ given a prize.",
    options: ["was", "were", "have", "are"], correct: 0,
    explanation: "'Each of + plural noun' takes a singular verb because 'each' is singular: 'Each of the boys was given a prize.'",
  },
  {
    id: "et-p-14", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "He has been ill ____ Monday.",
    options: ["since", "for", "from", "by"], correct: 0,
    explanation: "With the present perfect (continuous) and a point of time (Monday), use 'since'. Use 'for' with a period (for two days).",
  },
  {
    id: "et-p-15", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "I would rather you ____ now.",
    options: ["left", "leave", "will leave", "leaving"], correct: 0,
    explanation: "After 'would rather + subject', use the past tense form to express preference about the present/future: 'I would rather you left now.'",
  },
  {
    id: "et-p-16", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "By 2020, they ____ in this house for ten years.",
    options: ["had been living", "were living", "have lived", "lived"], correct: 0,
    explanation: "Duration up to a past point takes the past perfect continuous: 'had been living' (they had been living for ten years by 2020).",
  },
  {
    id: "et-p-17", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Unless you ____ hard, you will fail.",
    options: ["work", "will work", "worked", "are working"], correct: 0,
    explanation: "'Unless' (= if not) introduces a real condition and takes the simple present, not 'will': 'Unless you work hard, you will fail.'",
  },
  {
    id: "et-p-18", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The news ____ good.",
    options: ["is", "are", "were", "have been"], correct: 0,
    explanation: "'News' is an uncountable noun and takes a singular verb: 'The news is good.' (Similarly 'information', 'advice'.)",
  },
  {
    id: "et-p-19", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "When I got up, the sun ____ .",
    options: ["had risen", "rose", "has risen", "rises"], correct: 0,
    explanation: "The action that happened before another past action takes the past perfect: 'the sun had risen' (before 'I got up').",
  },
  {
    id: "et-p-20", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "One of my friends ____ a doctor.",
    options: ["is", "are", "were", "have been"], correct: 0,
    explanation: "'One of + plural noun' takes a singular verb because the true subject is 'one': 'One of my friends is a doctor.'",
  },
  {
    id: "et-p-21", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "He will call you when he ____ the station.",
    options: ["reaches", "will reach", "reached", "is reaching"], correct: 0,
    explanation: "In a time clause about the future ('when ...'), use the simple present, not 'will': 'when he reaches the station'.",
  },
  {
    id: "et-p-22", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The number of students ____ increasing.",
    options: ["is", "are", "were", "have been"], correct: 0,
    explanation: "'The number of + plural noun' takes a singular verb ('is'). Contrast: 'A number of students are ...' (plural).",
  },
  {
    id: "et-p-23", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "If he had studied, he ____ the exam.",
    options: ["would have passed", "would pass", "will pass", "passed"], correct: 0,
    explanation: "Third conditional (unreal past): 'If + had + past participle, ... would have + past participle' → 'would have passed'.",
  },
  {
    id: "et-p-24", section: "english", topic: "Tenses", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Mathematics ____ my favourite subject.",
    options: ["is", "are", "were", "have been"], correct: 0,
    explanation: "'Mathematics' (and 'physics', 'economics') is singular though it ends in '-s', so it takes a singular verb: 'is'.",
  },

  // ==================================================== Voice, PROFICIENT
  {
    id: "ev-p-01", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'They had completed the project.'",
    options: ["The project had been completed by them.", "The project has been completed by them.", "The project was completed by them.", "The project had completed by them."], correct: 0,
    explanation: "Past perfect passive: object + had been + past participle + by + agent → 'The project had been completed by them.'",
  },
  {
    id: "ev-p-02", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'You must obey the rules.'",
    options: ["The rules must be obeyed.", "The rules must obeyed.", "The rules are obeyed.", "The rules must be obey."], correct: 0,
    explanation: "Modal passive: object + modal + be + past participle → 'The rules must be obeyed (by you).'",
  },
  {
    id: "ev-p-03", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'Who wrote this novel?'",
    options: ["By whom was this novel written?", "By whom this novel was written?", "Whom was this novel written?", "By who was this novel written?"], correct: 0,
    explanation: "'Who' as the agent becomes 'By whom' and the question is recast: 'By whom was this novel written?'",
  },
  {
    id: "ev-p-04", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'They are building a new bridge.'",
    options: ["A new bridge is being built.", "A new bridge is built.", "A new bridge was being built.", "A new bridge has been built."], correct: 0,
    explanation: "Present continuous passive: object + is/are being + past participle → 'A new bridge is being built (by them).'",
  },
  {
    id: "ev-p-05", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to active voice: 'Let the work be done at once.'",
    options: ["Do the work at once.", "You do the work at once.", "The work is done at once.", "Work must be done at once."], correct: 0,
    explanation: "Passive imperative 'Let + object + be + past participle' → active imperative: 'Do the work at once.'",
  },
  {
    id: "ev-p-06", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'People say that he is honest.'",
    options: ["It is said that he is honest.", "He is said honest.", "It was said that he is honest.", "He said to be honest."], correct: 0,
    explanation: "For 'People say/think that ...', the passive is 'It is said/thought that ...' → 'It is said that he is honest.'",
  },
  {
    id: "ev-p-07", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'She was writing a novel.'",
    options: ["A novel was being written by her.", "A novel was written by her.", "A novel is being written by her.", "A novel had been written by her."], correct: 0,
    explanation: "Past continuous passive: object + was/were being + past participle + by + agent → 'A novel was being written by her.'",
  },
  {
    id: "ev-p-08", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'Bring me a glass of water.'",
    options: ["Let a glass of water be brought to me.", "A glass of water is brought to me.", "Bring a glass of water to me.", "I am brought a glass of water."], correct: 0,
    explanation: "Imperative passive uses 'Let + object + be + past participle': 'Let a glass of water be brought to me.'",
  },
  {
    id: "ev-p-09", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to active voice: 'By whom were you taught English?'",
    options: ["Who taught you English?", "Whom taught you English?", "Who did teach you English?", "By whom taught you English?"], correct: 0,
    explanation: "'By whom + passive' → active 'Who + past verb': 'Who taught you English?'",
  },
  {
    id: "ev-p-10", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'One should keep one's promise.'",
    options: ["One's promise should be kept.", "Promise should be kept by one.", "One's promise should keep.", "The promise is kept by one."], correct: 0,
    explanation: "Modal passive with 'should': 'One's promise should be kept.' The vague agent 'one' is usually dropped.",
  },
  {
    id: "ev-p-11", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'Has she completed the assignment?'",
    options: ["Has the assignment been completed by her?", "Is the assignment completed by her?", "Has the assignment completed by her?", "Was the assignment completed by her?"], correct: 0,
    explanation: "Present perfect interrogative passive: 'Has/Have + object + been + past participle ...?' → 'Has the assignment been completed by her?'",
  },
  {
    id: "ev-p-12", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'They are going to launch a new product.'",
    options: ["A new product is going to be launched.", "A new product is going to launch.", "A new product was going to be launched.", "A new product will launched."], correct: 0,
    explanation: "'Be going to' passive: object + is/are going to be + past participle → 'A new product is going to be launched.'",
  },
  {
    id: "ev-p-13", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'Somebody has broken the window.'",
    options: ["The window has been broken.", "The window is broken.", "The window was broken.", "The window has broken."], correct: 0,
    explanation: "Present perfect passive with an indefinite agent: 'The window has been broken.' ('by somebody' is dropped.)",
  },
  {
    id: "ev-p-14", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to active voice: 'The problem can be solved by us.'",
    options: ["We can solve the problem.", "We can solved the problem.", "We could solve the problem.", "We solve the problem."], correct: 0,
    explanation: "Modal passive 'can be + past participle' → active 'can + base verb': 'We can solve the problem.'",
  },
  {
    id: "ev-p-15", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'The committee is considering the proposal.'",
    options: ["The proposal is being considered by the committee.", "The proposal is considered by the committee.", "The proposal was being considered by the committee.", "The proposal has been considered by the committee."], correct: 0,
    explanation: "Present continuous passive: 'The proposal is being considered by the committee.'",
  },
  {
    id: "ev-p-16", section: "english", topic: "Voice", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to passive voice: 'They will have finished the task.'",
    options: ["The task will have been finished by them.", "The task will be finished by them.", "The task has been finished by them.", "The task will have finished by them."], correct: 0,
    explanation: "Future perfect passive: object + will have been + past participle + by + agent → 'The task will have been finished by them.'",
  },

  // ==================================================== Narration, PROFICIENT
  {
    id: "en-p-01", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: He said to me, 'Where are you going?'",
    options: ["He asked me where I was going.", "He asked me where was I going.", "He asked me where I am going.", "He said me where I was going."], correct: 0,
    explanation: "A 'wh-' question becomes 'asked + object + wh-word + subject + verb' (no inversion, no 'that'): 'He asked me where I was going.'",
  },
  {
    id: "en-p-02", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: She said to him, 'Do you like tea?'",
    options: ["She asked him if he liked tea.", "She asked him if did he like tea.", "She asked him that he liked tea.", "She told him if he liked tea."], correct: 0,
    explanation: "A 'yes/no' question is reported with 'if/whether' + statement word order: 'She asked him if he liked tea.'",
  },
  {
    id: "en-p-03", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: The teacher said, 'Sit down.'",
    options: ["The teacher ordered (us) to sit down.", "The teacher said to sit down.", "The teacher told that we sit down.", "The teacher ordered that sit down."], correct: 0,
    explanation: "An imperative is reported with a reporting verb (ordered/told/asked) + 'to' + base verb: 'The teacher ordered (us) to sit down.'",
  },
  {
    id: "en-p-04", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: He said, 'Please help me.'",
    options: ["He requested me to help him.", "He said to help him.", "He ordered me to help him.", "He requested that help him."], correct: 0,
    explanation: "A polite imperative ('please') is reported with 'requested + object + to + base verb': 'He requested me to help him.'",
  },
  {
    id: "en-p-05", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: She said, 'Do not touch it.'",
    options: ["She told me not to touch it.", "She told me to not touch it.", "She said not to touched it.", "She ordered that not touch it."], correct: 0,
    explanation: "A negative imperative is reported with 'told/ordered + object + not to + base verb': 'She told me not to touch it.'",
  },
  {
    id: "en-p-06", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: He said, 'What a beautiful scene!'",
    options: ["He exclaimed that it was a very beautiful scene.", "He said that what a beautiful scene.", "He exclaimed what a beautiful scene it was.", "He told that it was a beautiful scene."], correct: 0,
    explanation: "An exclamation is reported with 'exclaimed (with joy) that ...' and the exclamatory structure becomes a statement: 'He exclaimed that it was a very beautiful scene.'",
  },
  {
    id: "en-p-07", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: She said, 'May God bless you!'",
    options: ["She prayed that God might bless me.", "She said that God bless me.", "She wished God blessed me.", "She told that God may bless me."], correct: 0,
    explanation: "An optative (wish/prayer) is reported with 'prayed/wished that ...' and 'may' → 'might': 'She prayed that God might bless me.'",
  },
  {
    id: "en-p-08", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: He said, 'I went there yesterday.'",
    options: ["He said that he had gone there the previous day.", "He said that he went there yesterday.", "He said that he had gone there yesterday.", "He said that he has gone there the previous day."], correct: 0,
    explanation: "Simple past → past perfect ('had gone') and 'yesterday' → 'the previous day': 'He said that he had gone there the previous day.'",
  },
  {
    id: "en-p-09", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: He said, 'The earth moves round the sun.'",
    options: ["He said that the earth moves round the sun.", "He said that the earth moved round the sun.", "He said that the earth had moved round the sun.", "He told the earth moves round the sun."], correct: 0,
    explanation: "A universal truth is NOT back-shifted in reported speech: 'He said that the earth moves round the sun.'",
  },
  {
    id: "en-p-10", section: "english", topic: "Narration", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Change to indirect speech: 'Let us go for a walk,' he said.",
    options: ["He suggested that we should go for a walk.", "He said that let us go for a walk.", "He told to go for a walk.", "He ordered us to go for a walk."], correct: 0,
    explanation: "'Let us' (a suggestion) is reported with 'suggested that ... should': 'He suggested that we should go for a walk.'",
  },
];
