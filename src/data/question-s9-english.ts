/**
 * English (Part III subject paper), Classes 9–10 teacher level (examLevel "l3"), section "english".
 * Topics: English literature, Error spotting, Tenses, Voice, Narration, Idioms, One-word substitution.
 * Original practice questions modelled on BPSC TRE 4.0 Part III; not PYQs.
 */
import type { Question } from "./questions";

const ERR = "Identify the part of the sentence that contains an error. If there is no error, choose \"No error\".";
const AR_OPTS = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

export const s9EnglishBank: Question[] = [
  // ================= English literature: beginner (medium) =================
  {
    id: "s9e-b-001", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Identify the figure of speech in: \"The pen is mightier than the sword.\"",
    options: ["Metaphor", "Synecdoche", "Metonymy", "Personification"], correct: 2,
    explanation: "\"Pen\" stands for writing and ideas, \"sword\" for military force: each is replaced by something closely associated with it, which is metonymy.",
  },
  {
    id: "s9e-b-002", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "In John Donne's line \"Death, be not proud, though some have called thee / Mighty and dreadful\", the poet speaks directly to Death. This direct address to an absent or abstract entity is called:",
    options: ["Hyperbole", "Apostrophe", "Litotes", "Oxymoron"], correct: 1,
    explanation: "Apostrophe is the direct address of an absent person, an abstraction or a thing as if it could hear. Addressing Death also personifies it, but the act of addressing is apostrophe.",
  },
  {
    id: "s9e-b-003", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The rhyme scheme of a Shakespearean (English) sonnet is:",
    options: ["abba abba cde cde", "aba bcb cdc dd", "abab cdcd efef gg", "abab bcbc cdcd ee"], correct: 2,
    explanation: "The Shakespearean sonnet has three quatrains and a closing couplet: abab cdcd efef gg. The interlocking abab bcbc cdcd ee pattern is the Spenserian sonnet; abba abba is the Petrarchan octave.",
  },
  {
    id: "s9e-b-004", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "\"Ode to a Nightingale\" was written by:",
    options: ["Percy Bysshe Shelley", "William Wordsworth", "Lord Byron", "John Keats"], correct: 3,
    explanation: "\"Ode to a Nightingale\" (1819) is one of Keats's great odes, along with \"Ode on a Grecian Urn\" and \"To Autumn\". Shelley wrote \"To a Skylark\".",
  },
  {
    id: "s9e-b-005", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "\"Elegy Written in a Country Churchyard\", a meditation on death and the lives of humble villagers, was written by:",
    options: ["Thomas Gray", "Oliver Goldsmith", "Alexander Pope", "William Cowper"], correct: 0,
    explanation: "Thomas Gray published the Elegy in 1751. Goldsmith wrote \"The Deserted Village\", a different poem about rural life.",
  },
  {
    id: "s9e-b-006", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "A regular line of iambic pentameter contains how many syllables?",
    options: ["8", "10", "12", "14"], correct: 1,
    explanation: "Pentameter means five feet; an iamb has two syllables (unstressed, stressed). So 5 × 2 = 10 syllables. Twelve syllables make an alexandrine (iambic hexameter).",
  },
  {
    id: "s9e-b-007", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Rabindranath Tagore was awarded the Nobel Prize in Literature, largely for the English Gitanjali (Song Offerings), in the year:",
    options: ["1905", "1921", "1913", "1930"], correct: 2,
    explanation: "Tagore received the Nobel Prize in Literature in 1913, the first non-European to win it.",
  },
  {
    id: "s9e-b-008", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Who wrote The Canterbury Tales?",
    options: ["Edmund Spenser", "William Langland", "John Gower", "Geoffrey Chaucer"], correct: 3,
    explanation: "Geoffrey Chaucer, often called the Father of English poetry, wrote The Canterbury Tales in Middle English in the late fourteenth century. Langland wrote Piers Plowman.",
  },
  {
    id: "s9e-b-009", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "In Juliet's line \"Parting is such sweet sorrow\" (Romeo and Juliet), the phrase \"sweet sorrow\" is an example of:",
    options: ["Oxymoron", "Simile", "Alliteration", "Metonymy"], correct: 0,
    explanation: "An oxymoron places two contradictory terms side by side (sweet / sorrow) for effect.",
  },
  {
    id: "s9e-b-010", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which sound device is most prominent in Coleridge's line \"The furrow followed free\" (The Rime of the Ancient Mariner)?",
    options: ["Assonance", "Alliteration", "Onomatopoeia", "Pun"], correct: 1,
    explanation: "Alliteration is the repetition of the same initial consonant sound in nearby words: furrow, followed, free. Assonance repeats vowel sounds.",
  },
  {
    id: "s9e-b-011", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Identify the figure of speech in Wordsworth's line \"I wandered lonely as a cloud\".",
    options: ["Metaphor", "Personification", "Simile", "Hyperbole"], correct: 2,
    explanation: "The speaker is compared to a cloud using \"as\", which makes it a simile. A metaphor would make the comparison without \"like\" or \"as\".",
  },
  {
    id: "s9e-b-012", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "A ballad is a narrative poem, usually in quatrains, that tells a story in simple language. Which of the following is a well-known literary ballad?",
    options: ["Paradise Lost", "Lycidas", "Ode on a Grecian Urn", "The Rime of the Ancient Mariner"], correct: 3,
    explanation: "Coleridge's Rime is a literary ballad using ballad stanzas and a strong narrative. Paradise Lost is an epic, Lycidas a pastoral elegy and the Grecian Urn poem an ode.",
  },
  {
    id: "s9e-b-013", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Pride and Prejudice (1813), a novel centred on Elizabeth Bennet and Mr Darcy, was written by:",
    options: ["Jane Austen", "Charlotte Brontë", "George Eliot", "Mary Shelley"], correct: 0,
    explanation: "Jane Austen wrote Pride and Prejudice. Charlotte Brontë wrote Jane Eyre, George Eliot Middlemarch and Mary Shelley Frankenstein.",
  },
  {
    id: "s9e-b-014", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which of the following poems was written by the American poet Robert Frost?",
    options: ["Daffodils", "The Road Not Taken", "The Tyger", "Ozymandias"], correct: 1,
    explanation: "\"The Road Not Taken\" (1916) is by Frost. \"Daffodils\" is by Wordsworth, \"The Tyger\" by Blake and \"Ozymandias\" by Shelley.",
  },
  {
    id: "s9e-b-015", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "In Emily Dickinson's lines \"Because I could not stop for Death, / He kindly stopped for me\", the chief figure of speech is:",
    options: ["Simile", "Onomatopoeia", "Personification", "Alliteration"], correct: 2,
    explanation: "Death is given human qualities (he is kind and stops to pick up the speaker, like a gentleman caller), which is personification.",
  },
  {
    id: "s9e-b-016", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Identify the device in: \"The oil sizzled in the pan while the kettle hissed on the stove.\"",
    options: ["Metaphor", "Irony", "Synecdoche", "Onomatopoeia"], correct: 3,
    explanation: "\"Sizzled\" and \"hissed\" imitate the sounds they describe, which is onomatopoeia.",
  },
  {
    id: "s9e-b-017", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Identify the figure of speech in: \"I have told you a million times to shut the door.\"",
    options: ["Hyperbole", "Litotes", "Euphemism", "Paradox"], correct: 0,
    explanation: "\"A million times\" is a deliberate exaggeration for emphasis, which is hyperbole. Litotes is the opposite: understatement.",
  },
  {
    id: "s9e-b-018", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which Indian poet writing in English, author of The Golden Threshold, is known as the \"Nightingale of India\"?",
    options: ["Toru Dutt", "Sarojini Naidu", "Kamala Das", "Amrita Pritam"], correct: 1,
    explanation: "Sarojini Naidu's lyrical verse, including The Golden Threshold (1905), earned her the title \"Nightingale of India\". Toru Dutt wrote \"Our Casuarina Tree\".",
  },
  {
    id: "s9e-b-019", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Which of the following is a tragedy by William Shakespeare?",
    options: ["Twelfth Night", "As You Like It", "Macbeth", "The Tempest"], correct: 2,
    explanation: "Macbeth is one of Shakespeare's four great tragedies (with Hamlet, Othello and King Lear). Twelfth Night and As You Like It are comedies; The Tempest is a romance.",
  },
  {
    id: "s9e-b-020", section: "english", topic: "English literature", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "The publication of Lyrical Ballads (1798), usually taken as the start of the Romantic age in English poetry, was a joint work of:",
    options: ["Shelley and Keats", "Byron and Shelley", "Tennyson and Browning", "Wordsworth and Coleridge"], correct: 3,
    explanation: "Wordsworth and Coleridge published Lyrical Ballads together; the 1800 edition carried Wordsworth's famous Preface. Tennyson and Browning are Victorians.",
  },

  // ================= Error spotting: beginner (medium) =================
  {
    id: "s9e-b-021", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "Neither the principal nor the teachers / was present / at the annual function."`,
    options: ["Neither the principal nor the teachers", "was present", "at the annual function", "No error"], correct: 1,
    explanation: "With neither...nor, the verb agrees with the nearer subject. \"Teachers\" is plural, so it should be \"were present\".",
  },
  {
    id: "s9e-b-022", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "Every one of the boys / in the hostel / have been given a new bed."`,
    options: ["Every one of the boys", "in the hostel", "have been given a new bed", "No error"], correct: 2,
    explanation: "The subject is \"every one\", which is singular; \"of the boys\" does not change that. It should be \"has been given\".",
  },
  {
    id: "s9e-b-023", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "If I was in your place, / I would accept the offer / without any delay."`,
    options: ["If I was in your place,", "I would accept the offer", "without any delay", "No error"], correct: 0,
    explanation: "An imaginary (hypothetical) condition takes the subjunctive \"were\" for all persons in formal English: \"If I were in your place\".",
  },
  {
    id: "s9e-b-024", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "She has been teaching / in this school / since ten years."`,
    options: ["She has been teaching", "in this school", "since ten years", "No error"], correct: 2,
    explanation: "\"Since\" marks a point of time (since 2016); \"for\" marks a period of time. So: \"for ten years\".",
  },
  {
    id: "s9e-b-025", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "Rohan is senior than me / in the department / by three years."`,
    options: ["Rohan is senior than me", "in the department", "by three years", "No error"], correct: 0,
    explanation: "Latin comparatives such as senior, junior, superior, inferior and prior take \"to\", not \"than\": \"senior to me\".",
  },
  {
    id: "s9e-b-026", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "The furniture in the new office / are made / of teak wood."`,
    options: ["The furniture in the new office", "are made", "of teak wood", "No error"], correct: 1,
    explanation: "\"Furniture\" is an uncountable noun and takes a singular verb: \"is made\".",
  },
  {
    id: "s9e-b-027", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "Between you and I, / the new scheme / is unlikely to succeed."`,
    options: ["Between you and I,", "the new scheme", "is unlikely to succeed", "No error"], correct: 0,
    explanation: "A preposition (between) takes the objective case: \"between you and me\".",
  },
  {
    id: "s9e-b-028", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "We look forward / to meet you / at the conference next week."`,
    options: ["We look forward", "to meet you", "at the conference next week", "No error"], correct: 1,
    explanation: "In \"look forward to\", \"to\" is a preposition, so it is followed by a gerund: \"to meeting you\".",
  },
  {
    id: "s9e-b-029", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "Hardly had the guests arrived / than the lights / went out."`,
    options: ["Hardly had the guests arrived", "than the lights", "went out", "No error"], correct: 1,
    explanation: "\"Hardly\" and \"scarcely\" pair with \"when\" (or \"before\"); \"than\" goes with \"no sooner\". So: \"when the lights went out\".",
  },
  {
    id: "s9e-b-030", section: "english", topic: "Error spotting", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: `${ERR} Sentence: "The committee has submitted / its report / to the minister."`,
    options: ["The committee has submitted", "its report", "to the minister", "No error"], correct: 3,
    explanation: "Here the committee acts as a single body, so the singular verb \"has\" and the pronoun \"its\" are both correct.",
  },

  // ================= Tenses: beginner (medium) =================
  {
    id: "s9e-b-031", section: "english", topic: "Tenses", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Fill in the blank: \"By the time we reached the cinema, the film ____.\"",
    options: ["started", "has started", "was starting", "had started"], correct: 3,
    explanation: "Of two past actions, the earlier one takes the past perfect. The film started before we reached, so \"had started\".",
  },
  {
    id: "s9e-b-032", section: "english", topic: "Tenses", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Fill in the blank: \"I ____ in Patna since 2015.\"",
    options: ["live", "am living", "lived", "have been living"], correct: 3,
    explanation: "An action that began in the past and continues now, with \"since\", takes the present perfect continuous (or present perfect): \"have been living\".",
  },
  {
    id: "s9e-b-033", section: "english", topic: "Tenses", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Fill in the blank: \"If it ____ tomorrow, the match will be cancelled.\"",
    options: ["rains", "will rain", "rained", "would rain"], correct: 0,
    explanation: "In a first conditional, the if-clause takes the simple present and the main clause takes \"will\": \"If it rains..., the match will be cancelled\".",
  },
  {
    id: "s9e-b-034", section: "english", topic: "Tenses", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Fill in the blank: \"She ____ her keys yesterday, so she could not get into the house.\"",
    options: ["lost", "has lost", "had been losing", "loses"], correct: 0,
    explanation: "A completed action at a stated past time (yesterday) takes the simple past. The present perfect cannot be used with a definite past time adverb.",
  },

  // ================= Voice: beginner (medium) =================
  {
    id: "s9e-b-035", section: "english", topic: "Voice", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct passive form: \"The chef cooked a delicious meal.\"",
    options: ["A delicious meal is cooked by the chef.", "A delicious meal was cooked by the chef.", "A delicious meal had been cooked by the chef.", "A delicious meal was being cooked by the chef."], correct: 1,
    explanation: "Simple past active becomes was/were + past participle in the passive: \"was cooked\".",
  },
  {
    id: "s9e-b-036", section: "english", topic: "Voice", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct passive form: \"Who wrote this letter?\"",
    options: ["By whom was this letter written?", "By whom this letter was written?", "Who was this letter written?", "By whom has this letter been written?"], correct: 0,
    explanation: "\"Who\" becomes \"by whom\", and the question keeps interrogative word order (auxiliary before subject) in the simple past: \"By whom was this letter written?\"",
  },
  {
    id: "s9e-b-037", section: "english", topic: "Voice", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct passive form: \"Open the window.\"",
    options: ["The window is opened.", "The window should open.", "The window be opened by you.", "Let the window be opened."], correct: 3,
    explanation: "An imperative with an object is made passive with \"Let + object + be + past participle\": \"Let the window be opened.\"",
  },

  // ================= Narration: beginner (medium) =================
  {
    id: "s9e-b-038", section: "english", topic: "Narration", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct indirect speech: He said, \"I am tired.\"",
    options: ["He said that he is tired.", "He said that he was tired.", "He said that I was tired.", "He said that he had been tired."], correct: 1,
    explanation: "With a past reporting verb, the simple present shifts to the simple past, and \"I\" changes to agree with the speaker (he): \"he was tired\".",
  },
  {
    id: "s9e-b-039", section: "english", topic: "Narration", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct indirect speech: She said to me, \"Where do you live?\"",
    options: ["She asked me where did I live.", "She told me where I lived.", "She asked me where do I live.", "She asked me where I lived."], correct: 3,
    explanation: "\"Said to\" becomes \"asked\"; the question becomes a statement-order clause (subject before verb) with the tense backshifted: \"where I lived\".",
  },
  {
    id: "s9e-b-040", section: "english", topic: "Narration", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the correct indirect speech: The teacher said, \"The earth revolves around the sun.\"",
    options: ["The teacher said that the earth revolves around the sun.", "The teacher said that the earth revolved around the sun.", "The teacher said that the earth had revolved around the sun.", "The teacher told that the earth revolves around the sun."], correct: 0,
    explanation: "A universal truth keeps its present tense even after a past reporting verb. \"Told\" needs an object (told us), so the last option is wrong.",
  },

  // ================= Idioms: beginner (medium) =================
  {
    id: "s9e-b-041", section: "english", topic: "Idioms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "Choose the meaning of the idiom \"a piece of cake\" as used in: \"For the experienced team, meeting the deadline was a piece of cake.\"",
    options: ["a difficult task", "a reward", "a very easy task", "a pleasant surprise"], correct: 2,
    explanation: "\"A piece of cake\" means something very easy to do.",
  },
  {
    id: "s9e-b-042", section: "english", topic: "Idioms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "What does the idiom \"to burn the midnight oil\" mean?",
    options: ["To waste resources", "To work or study late into the night", "To celebrate a festival", "To lose one's temper"], correct: 1,
    explanation: "It means to stay up late working or studying, originally by the light of an oil lamp.",
  },
  {
    id: "s9e-b-043", section: "english", topic: "Idioms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "What does the idiom \"once in a blue moon\" mean?",
    options: ["every month", "at night", "regularly", "very rarely"], correct: 3,
    explanation: "\"Once in a blue moon\" means very seldom or rarely.",
  },
  {
    id: "s9e-b-044", section: "english", topic: "Idioms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "What does the idiom \"to let the cat out of the bag\" mean?",
    options: ["to reveal a secret, often by mistake", "to set someone free", "to create confusion", "to escape punishment"], correct: 0,
    explanation: "To let the cat out of the bag is to disclose a secret, usually carelessly or unintentionally.",
  },
  {
    id: "s9e-b-045", section: "english", topic: "Idioms", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "What does the idiom \"to break the ice\" mean?",
    options: ["to end a friendship", "to start a conversation and ease initial awkwardness", "to take a firm decision", "to cause a quarrel"], correct: 1,
    explanation: "To break the ice is to do or say something that relieves tension or shyness at the start of a meeting.",
  },

  // ================= One-word substitution: beginner (medium) =================
  {
    id: "s9e-b-046", section: "english", topic: "One-word substitution", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "One word for \"a person who cannot be corrected or reformed\":",
    options: ["Incurable", "Incorrigible", "Invincible", "Indelible"], correct: 1,
    explanation: "Incorrigible means incapable of being corrected. Incurable is used of diseases, invincible means unconquerable and indelible means that which cannot be erased.",
  },
  {
    id: "s9e-b-047", section: "english", topic: "One-word substitution", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "One word for \"a person who can speak several languages\":",
    options: ["Polymath", "Philanthropist", "Polyglot", "Pedant"], correct: 2,
    explanation: "A polyglot knows or speaks many languages. A polymath has wide learning across many subjects.",
  },
  {
    id: "s9e-b-048", section: "english", topic: "One-word substitution", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "One word for \"the story of a person's life written by that person\":",
    options: ["Biography", "Anthology", "Chronicle", "Autobiography"], correct: 3,
    explanation: "An autobiography is a life story written by the subject. A biography is written by someone else.",
  },
  {
    id: "s9e-b-049", section: "english", topic: "One-word substitution", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "One word for \"a speech delivered without previous preparation\":",
    options: ["Verbatim", "Extempore", "Eulogy", "Soliloquy"], correct: 1,
    explanation: "Extempore means spoken without preparation. A eulogy is a speech of praise and a soliloquy is a character speaking alone on stage.",
  },
  {
    id: "s9e-b-050", section: "english", topic: "One-word substitution", examLevel: "l3", level: "beginner", difficulty: "medium",
    stem: "One word for \"one who is present everywhere\":",
    options: ["Omnipotent", "Omniscient", "Omnivorous", "Omnipresent"], correct: 3,
    explanation: "Omnipresent means present everywhere. Omnipotent means all-powerful and omniscient means all-knowing.",
  },

  // ================= English literature: proficient (hard) =================
  {
    id: "s9e-p-001", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "In a Petrarchan (Italian) sonnet, the volta, or turn in thought, typically comes:",
    options: ["After line 4", "After line 12", "After line 8", "In the final line only"], correct: 2,
    explanation: "The Petrarchan sonnet divides into an octave (abbaabba) and a sestet (such as cdecde); the turn usually falls between them, after line 8. In the Shakespearean sonnet the turn often comes at the closing couplet.",
  },
  {
    id: "s9e-p-002", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "\"My Last Duchess\", in which a duke reveals his jealous, controlling nature while showing a portrait to an envoy, is a celebrated dramatic monologue by:",
    options: ["Robert Browning", "Alfred Tennyson", "Matthew Arnold", "G. M. Hopkins"], correct: 0,
    explanation: "Browning perfected the dramatic monologue: a single speaker addresses a silent listener and unwittingly reveals his character. Tennyson's \"Ulysses\" is also a dramatic monologue, but \"My Last Duchess\" is Browning's.",
  },
  {
    id: "s9e-p-003", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "What is the dominant metre of Blake's lines \"Tyger Tyger, burning bright, / In the forests of the night\"?",
    options: ["Iambic", "Trochaic", "Anapaestic", "Dactylic"], correct: 1,
    explanation: "The lines fall as TY-ger | TY-ger | BURN-ing | BRIGHT: stressed followed by unstressed syllables, i.e. trochaic tetrameter with the last unstressed syllable dropped (catalectic).",
  },
  {
    id: "s9e-p-004", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Byron's line \"The Assyrian came down like the wolf on the fold\" is written in which metre?",
    options: ["Iambic", "Trochaic", "Anapaestic", "Spondaic"], correct: 2,
    explanation: "It scans as the as-SYR | ian came DOWN | like the WOLF | on the FOLD: two unstressed syllables then a stressed one, which is the anapaest (anapaestic tetrameter). The galloping rhythm suits the charging army.",
  },
  {
    id: "s9e-p-005", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Milton's Paradise Lost is written in:",
    options: ["Heroic couplets", "Terza rima", "Ottava rima", "Blank verse"], correct: 3,
    explanation: "Paradise Lost uses blank verse, i.e. unrhymed iambic pentameter; Milton defended the absence of rhyme in his note on \"The Verse\". Heroic couplets are rhymed iambic pentameter pairs, as in Pope.",
  },
  {
    id: "s9e-p-006", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Alexander Pope's The Rape of the Lock is best described as a:",
    options: ["Mock-epic in heroic couplets", "Pastoral elegy in blank verse", "Verse tragedy in blank verse", "Sonnet sequence"], correct: 0,
    explanation: "Pope applies the grand machinery of epic (invocation, battles, supernatural beings) to a trivial quarrel over a stolen lock of hair, written in rhymed heroic couplets. That is mock-epic (mock-heroic).",
  },
  {
    id: "s9e-p-007", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A stanza form in which tercets are linked by the rhyme scheme aba bcb cdc ded..., used by Dante and by Shelley in \"Ode to the West Wind\", is called:",
    options: ["Ottava rima", "Terza rima", "Rhyme royal", "Spenserian stanza"], correct: 1,
    explanation: "Terza rima chains three-line stanzas, the middle line of each supplying the rhyme for the next. Ottava rima is abababcc and rhyme royal is ababbcc.",
  },
  {
    id: "s9e-p-008", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Shelley's pastoral elegy \"Adonais\" (1821) mourns the death of:",
    options: ["Lord Byron", "Thomas Chatterton", "John Keats", "Arthur Hallam"], correct: 2,
    explanation: "\"Adonais\" laments John Keats, who died in Rome in 1821. Arthur Hallam is mourned in Tennyson's In Memoriam, a tempting distractor.",
  },
  {
    id: "s9e-p-009", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Identify the figure of speech in: \"She lost her temper and her handbag on the same afternoon.\"",
    options: ["Chiasmus", "Anaphora", "Litotes", "Zeugma"], correct: 3,
    explanation: "In zeugma one word (lost) governs two others in different senses: figuratively with \"temper\" and literally with \"handbag\".",
  },
  {
    id: "s9e-p-010", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Identify the figure of speech in: \"We should eat to live, not live to eat.\"",
    options: ["Chiasmus", "Zeugma", "Synecdoche", "Apostrophe"], correct: 0,
    explanation: "Chiasmus repeats terms in reverse order (eat...live / live...eat), an ABBA pattern that sharpens the contrast.",
  },
  {
    id: "s9e-p-011", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "In \"The captain ordered all hands on deck\", the use of \"hands\" for sailors is an example of:",
    options: ["Metonymy", "Synecdoche", "Transferred epithet", "Metaphor"], correct: 1,
    explanation: "Synecdoche uses a part (hands) to stand for the whole (the sailors). Metonymy substitutes something merely associated with the thing, not a part of it.",
  },
  {
    id: "s9e-p-012", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "A teacher, pleased with a brilliant answer script, remarks: \"Well, that is not a bad effort at all.\" The figure used is:",
    options: ["Irony", "Euphemism", "Litotes", "Hyperbole"], correct: 2,
    explanation: "Litotes is understatement that affirms something by denying its opposite (\"not bad\" meaning \"very good\").",
  },
  {
    id: "s9e-p-013", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Identify the figure of speech in: \"The anxious patient passed a sleepless night.\"",
    options: ["Oxymoron", "Pun", "Metonymy", "Transferred epithet"], correct: 3,
    explanation: "It is the patient, not the night, who is sleepless. Shifting an adjective from the person to something connected with them is a transferred epithet (hypallage).",
  },
  {
    id: "s9e-p-014", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Match the novels with their authors. A. Untouchable  B. The Guide  C. Kanthapura  D. The God of Small Things. 1. Raja Rao  2. Arundhati Roy  3. Mulk Raj Anand  4. R. K. Narayan",
    options: ["A-3, B-4, C-1, D-2", "A-4, B-3, C-1, D-2", "A-3, B-1, C-4, D-2", "A-1, B-4, C-3, D-2"], correct: 0,
    explanation: "Untouchable (1935) is by Mulk Raj Anand, The Guide (1958) by R. K. Narayan, Kanthapura (1938) by Raja Rao and The God of Small Things (1997) by Arundhati Roy.",
  },
  {
    id: "s9e-p-015", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Arrange these periods of English literature in chronological order: 1. Victorian  2. Elizabethan  3. Romantic  4. Restoration",
    options: ["2, 3, 4, 1", "2, 4, 3, 1", "4, 2, 3, 1", "2, 4, 1, 3"], correct: 1,
    explanation: "Elizabethan (late 16th century), Restoration (from 1660), Romantic (about 1798 to 1832), Victorian (1837 to 1901).",
  },
  {
    id: "s9e-p-016", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The label \"metaphysical poets\" for Donne, Cowley and their followers was established by which critic, in his Life of Cowley?",
    options: ["T. S. Eliot", "Matthew Arnold", "Samuel Johnson", "S. T. Coleridge"], correct: 2,
    explanation: "Samuel Johnson used the term in his Life of Cowley (Lives of the Poets), criticising their far-fetched conceits. T. S. Eliot's 1921 essay \"The Metaphysical Poets\" later revived their reputation but did not coin the term.",
  },
  {
    id: "s9e-p-017", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Assertion (A): Keats's \"Ode on a Grecian Urn\" closes with the famous words \"Beauty is truth, truth beauty\". Reason (R): Keats is a major poet of the Victorian age.",
    options: AR_OPTS, correct: 2,
    explanation: "A is true. R is false: Keats (1795 to 1821) is a second-generation Romantic poet; he died before the Victorian age (from 1837) began.",
  },
  {
    id: "s9e-p-018", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Which American poet is regarded as the pioneer of free verse in English through his collection Leaves of Grass?",
    options: ["Edgar Allan Poe", "Henry Wadsworth Longfellow", "Emily Dickinson", "Walt Whitman"], correct: 3,
    explanation: "Walt Whitman's Leaves of Grass (first edition 1855) abandoned regular metre and rhyme for long, cadenced free-verse lines. Poe and Longfellow wrote in strict metres.",
  },
  {
    id: "s9e-p-019", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "\"Sprung rhythm\", in which each foot has one stressed syllable and a variable number of unstressed ones, is associated with:",
    options: ["Gerard Manley Hopkins", "Robert Bridges", "A. C. Swinburne", "D. G. Rossetti"], correct: 0,
    explanation: "Hopkins named and used sprung rhythm, e.g. in \"The Windhover\". Robert Bridges only edited and published Hopkins's poems posthumously (1918).",
  },
  {
    id: "s9e-p-020", section: "english", topic: "English literature", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The Spenserian stanza, used in The Faerie Queene, consists of:",
    options: [
      "Eight lines of iambic pentameter rhyming abababcc",
      "Nine lines, eight of iambic pentameter and a final alexandrine, rhyming ababbcbcc",
      "Seven lines of iambic pentameter rhyming ababbcc",
      "Fourteen lines rhyming abab bcbc cdcd ee",
    ], correct: 1,
    explanation: "Spenser's stanza has nine lines rhyming ababbcbcc, closing with a twelve-syllable alexandrine. The other options describe ottava rima, rhyme royal and the Spenserian sonnet.",
  },

  // ================= Error spotting: proficient (hard) =================
  {
    id: "s9e-p-021", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "The sentence \"Walking along the beach, the sunset looked magnificent\" contains a dangling modifier. Choose the best correction.",
    options: [
      "Walking along the beach, the sunset was looking magnificent.",
      "The sunset looked magnificent, walking along the beach.",
      "Walking along the beach, we found the sunset magnificent.",
      "Walking along the beach, magnificent looked the sunset.",
    ], correct: 2,
    explanation: "A participial phrase must refer to the subject of the main clause. The sunset cannot walk; supplying \"we\" as the subject fixes the logic.",
  },
  {
    id: "s9e-p-022", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the sentence that correctly maintains parallel structure.",
    options: [
      "She enjoys swimming, to jog and cycling.",
      "She enjoys swimming, jogging and cycling.",
      "She enjoys to swim, jogging and to cycle.",
      "She enjoys swim, jog and cycling.",
    ], correct: 1,
    explanation: "Items in a series must share the same grammatical form. \"Enjoy\" takes a gerund, so all three should be gerunds.",
  },
  {
    id: "s9e-p-023", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "The teacher explained to the children / that water boiled / at 100 °C at sea level."`,
    options: ["The teacher explained to the children", "that water boiled", "at 100 °C at sea level", "No error"], correct: 1,
    explanation: "The sequence-of-tenses rule has an exception for universal or scientific truths, which stay in the present: \"that water boils\".",
  },
  {
    id: "s9e-p-024", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "If he would have studied harder, / he would have passed / the examination."`,
    options: ["If he would have studied harder,", "he would have passed", "the examination", "No error"], correct: 0,
    explanation: "In a third (past unreal) conditional the if-clause takes the past perfect: \"If he had studied harder\". \"Would have\" belongs only in the main clause.",
  },
  {
    id: "s9e-p-025", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "At the annual function, / the award was shared / between Ravi and myself."`,
    options: ["At the annual function,", "the award was shared", "between Ravi and myself", "No error"], correct: 2,
    explanation: "A reflexive pronoun needs an antecedent referring to the same person in the clause; here none exists. The object of \"between\" should be \"me\".",
  },
  {
    id: "s9e-p-026", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the grammatically correct sentence.",
    options: [
      "Not only he is intelligent but he is also hardworking.",
      "He is not only intelligent but hardworking also is.",
      "Not only is he intelligent but he is also hardworking.",
      "Not only is he intelligent but also he hardworking.",
    ], correct: 2,
    explanation: "When \"not only\" opens a sentence, the subject and auxiliary are inverted (\"is he\"), and the second clause needs a complete subject and verb.",
  },
  {
    id: "s9e-p-027", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "A number of candidates / has applied / for the post of lecturer."`,
    options: ["A number of candidates", "has applied", "for the post of lecturer", "No error"], correct: 1,
    explanation: "\"A number of\" means \"many\" and takes a plural verb: \"have applied\". Contrast \"The number of candidates has risen\", where \"number\" itself is the singular subject.",
  },
  {
    id: "s9e-p-028", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "Scarcely had I left home / when it began / to rain heavily."`,
    options: ["Scarcely had I left home", "when it began", "to rain heavily", "No error"], correct: 3,
    explanation: "The sentence is correct: \"scarcely\" at the start triggers inversion (had I left) and correctly pairs with \"when\".",
  },
  {
    id: "s9e-p-029", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "The inspector reported / that each of the classrooms / were poorly lit."`,
    options: ["The inspector reported", "that each of the classrooms", "were poorly lit", "No error"], correct: 2,
    explanation: "\"Each\" is the subject of the clause and is singular, so the verb must be \"was poorly lit\". The plural noun in the of-phrase does not control the verb.",
  },
  {
    id: "s9e-p-030", section: "english", topic: "Error spotting", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: `${ERR} Sentence: "Being a rainy day, / the school remained closed / and the children stayed at home."`,
    options: ["Being a rainy day,", "the school remained closed", "and the children stayed at home", "No error"], correct: 0,
    explanation: "As written, the participle wrongly attaches to \"the school\". An absolute phrase needs its own subject: \"It being a rainy day, the school remained closed\".",
  },

  // ================= Tenses: proficient (hard) =================
  {
    id: "s9e-p-031", section: "english", topic: "Tenses", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Fill in the blank: \"By next June, Meera ____ in this school for ten years.\"",
    options: ["will have been teaching", "will teach", "has been teaching", "will be teaching"], correct: 0,
    explanation: "An action continuing up to a point in the future, with a stated duration (for ten years) and \"by next June\", takes the future perfect continuous.",
  },
  {
    id: "s9e-p-032", section: "english", topic: "Tenses", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Fill in the blank: \"It is high time the government ____ strict action against polluters.\"",
    options: ["takes", "will take", "has taken", "took"], correct: 3,
    explanation: "\"It is high time\" is followed by the past subjunctive (simple past form) to express present urgency: \"took\". \"It is high time for the government to take\" is the infinitive alternative.",
  },
  {
    id: "s9e-p-033", section: "english", topic: "Tenses", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the sentence in which the tense is used correctly.",
    options: [
      "I am knowing him for many years.",
      "He has come back yesterday.",
      "When I will reach home, I will call you.",
      "She had finished her work before the guests arrived.",
    ], correct: 3,
    explanation: "The past perfect correctly marks the earlier of two past actions. \"Know\" is a stative verb (have known), the present perfect cannot take \"yesterday\", and a time clause uses the present for future (When I reach).",
  },

  // ================= Voice: proficient (hard) =================
  {
    id: "s9e-p-034", section: "english", topic: "Voice", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct passive form: \"They are building a new bridge over the river.\"",
    options: [
      "A new bridge is built over the river by them.",
      "A new bridge has been built over the river by them.",
      "A new bridge is being built over the river by them.",
      "A new bridge was being built over the river by them.",
    ], correct: 2,
    explanation: "Present continuous active becomes is/are + being + past participle: \"is being built\".",
  },
  {
    id: "s9e-p-035", section: "english", topic: "Voice", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct passive form: \"People say that he is honest.\"",
    options: ["He is said to be honest.", "He was said to be honest.", "He is said being honest.", "It is said that he was honest."], correct: 0,
    explanation: "With reporting verbs, the subject of the that-clause can be raised: \"He is said to be honest\" (or \"It is said that he is honest\"). The tense of \"say\" (present) must be kept.",
  },
  {
    id: "s9e-p-036", section: "english", topic: "Voice", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct passive form: \"I remember my grandmother taking me to the fair.\"",
    options: [
      "I remember being taken to the fair by my grandmother.",
      "I remember my grandmother being taken to the fair.",
      "I am remembered being taken to the fair by my grandmother.",
      "I remember having taken my grandmother to the fair.",
    ], correct: 0,
    explanation: "The gerund \"taking\" becomes the passive gerund \"being taken\", with \"me\" understood as the subject of remembering; the main verb \"remember\" stays active.",
  },
  {
    id: "s9e-p-037", section: "english", topic: "Voice", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct passive form: \"They will have completed the project by March.\"",
    options: [
      "The project will be completed by March by them.",
      "The project would have been completed by March.",
      "The project will have completed by March.",
      "The project will have been completed by them by March.",
    ], correct: 3,
    explanation: "Future perfect active becomes will have been + past participle in the passive: \"will have been completed\".",
  },

  // ================= Narration: proficient (hard) =================
  {
    id: "s9e-p-038", section: "english", topic: "Narration", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct indirect speech: He said to me, \"Let us go for a walk.\"",
    options: [
      "He suggested to me that we should go for a walk.",
      "He said to me that let us go for a walk.",
      "He suggested me to go for a walk.",
      "He told me that we will go for a walk.",
    ], correct: 0,
    explanation: "\"Let us\" expressing a proposal is reported with \"suggested/proposed that we should\". \"Suggest\" cannot take a person object plus infinitive (suggested me to go).",
  },
  {
    id: "s9e-p-039", section: "english", topic: "Narration", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct indirect speech: She said, \"What a beautiful painting it is!\"",
    options: [
      "She said that what a beautiful painting it was.",
      "She exclaimed what a beautiful painting it is.",
      "She exclaimed that it was a very beautiful painting.",
      "She exclaimed that it is a very beautiful painting.",
    ], correct: 2,
    explanation: "An exclamation is reported with \"exclaimed that\", turned into a statement (what a becomes very) with the tense backshifted: \"it was a very beautiful painting\".",
  },
  {
    id: "s9e-p-040", section: "english", topic: "Narration", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "Choose the correct indirect speech: He said to me, \"Did you see the film yesterday?\"",
    options: [
      "He asked me if I saw the film yesterday.",
      "He asked me whether I had seen the film the previous day.",
      "He asked me did I see the film the previous day.",
      "He asked me whether I have seen the film the day before.",
    ], correct: 1,
    explanation: "A yes/no question is introduced by if/whether, the simple past shifts to the past perfect, and \"yesterday\" becomes \"the previous day\".",
  },

  // ================= Idioms: proficient (hard) =================
  {
    id: "s9e-p-041", section: "english", topic: "Idioms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "In a detective story, the torn letter turned out to be a red herring. \"A red herring\" means:",
    options: ["a rare opportunity", "something intended to mislead or distract", "a sign of danger", "an embarrassing mistake"], correct: 1,
    explanation: "A red herring is a false clue that draws attention away from the real issue. A warning sign is a \"red flag\", a different idiom.",
  },
  {
    id: "s9e-p-042", section: "english", topic: "Idioms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "What does \"to be on the horns of a dilemma\" mean?",
    options: ["to be in a position of power", "to be ready to fight", "to face a choice between two equally unpleasant alternatives", "to be in serious debt"], correct: 2,
    explanation: "Each \"horn\" is one of two unfavourable options; whichever one chooses, one is caught.",
  },
  {
    id: "s9e-p-043", section: "english", topic: "Idioms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "What does \"to carry coals to Newcastle\" mean?",
    options: ["to take a great risk", "to work hard for little pay", "to bring bad news", "to do something wholly unnecessary or superfluous"], correct: 3,
    explanation: "Newcastle was a major coal-producing town, so taking coal there was pointless. The idiom means supplying something where it is already plentiful.",
  },
  {
    id: "s9e-p-044", section: "english", topic: "Idioms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "What is meant by \"a Pyrrhic victory\"?",
    options: ["a victory won at such heavy cost that it is almost a defeat", "an easy victory", "a victory won by deceit", "a victory celebrated too early"], correct: 0,
    explanation: "It is named after King Pyrrhus of Epirus, whose victories over Rome cost him so many men that they were ruinous.",
  },
  {
    id: "s9e-p-045", section: "english", topic: "Idioms", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "\"Everyone agreed the manager's decision was unfair, but nobody was willing to bell the cat.\" The idiom means:",
    options: ["to punish a wrongdoer", "to announce good news", "to undertake a risky task on behalf of others", "to avoid responsibility"], correct: 2,
    explanation: "From the fable of the mice who wanted a bell on the cat but found no volunteer to tie it: to take on a dangerous task for the common good.",
  },

  // ================= One-word substitution: proficient (hard) =================
  {
    id: "s9e-p-046", section: "english", topic: "One-word substitution", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "One word for \"an abnormal fear of heights\":",
    options: ["Hydrophobia", "Claustrophobia", "Acrophobia", "Agoraphobia"], correct: 2,
    explanation: "Acrophobia (Greek akron, peak) is fear of heights. Claustrophobia is fear of enclosed spaces, agoraphobia fear of open or crowded places, hydrophobia fear of water.",
  },
  {
    id: "s9e-p-047", section: "english", topic: "One-word substitution", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "One word for \"government by a small group of people\":",
    options: ["Oligarchy", "Plutocracy", "Autocracy", "Theocracy"], correct: 0,
    explanation: "Oligarchy is rule by a few. Plutocracy is rule by the wealthy specifically, autocracy rule by one person and theocracy rule by religious authority.",
  },
  {
    id: "s9e-p-048", section: "english", topic: "One-word substitution", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "One word for \"a person who hates or distrusts humankind\":",
    options: ["Philanthropist", "Misogynist", "Anthropologist", "Misanthrope"], correct: 3,
    explanation: "A misanthrope dislikes humankind in general. A misogynist hates women specifically; a philanthropist is the opposite of a misanthrope.",
  },
  {
    id: "s9e-p-049", section: "english", topic: "One-word substitution", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "One word for \"the killing of one's own brother\":",
    options: ["Patricide", "Fratricide", "Regicide", "Infanticide"], correct: 1,
    explanation: "Fratricide comes from Latin frater (brother). Patricide is killing one's father and regicide killing a king.",
  },
  {
    id: "s9e-p-050", section: "english", topic: "One-word substitution", examLevel: "l3", level: "proficient", difficulty: "hard",
    stem: "One word for \"a person who walks in their sleep\":",
    options: ["Insomniac", "Hypnotist", "Nomad", "Somnambulist"], correct: 3,
    explanation: "Somnambulist comes from Latin somnus (sleep) and ambulare (to walk). An insomniac is someone who cannot sleep.",
  },
];
