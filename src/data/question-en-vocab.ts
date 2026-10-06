/**
 * English Vocabulary, Synonyms, Antonyms, One-word substitution, Idioms, Spelling.
 *
 * section: "english". Shared across both UPESSC exam levels.
 * Topics: "Synonyms" | "Antonyms" | "One-word substitution" | "Idioms" | "Spelling".
 *   • beginner, common words and everyday idioms.
 *   • proficient, tougher words and near-synonym/antonym traps.
 *
 * Original, on-pattern items (modelled on UPESSC/UPTET English sections).
 */
import type { Question } from "./questions";

export const englishVocabBank: Question[] = [
  // ==================================================== Synonyms, BEGINNER
  {
    id: "es-b-01", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'abundant'.",
    options: ["Plentiful", "Scarce", "Empty", "Tiny"], correct: 0,
    explanation: "'Abundant' means existing in large quantity, plentiful. Related synonyms: ample, copious, profuse. (Its antonym is 'scarce'.)",
  },
  {
    id: "es-b-02", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'brave'.",
    options: ["Valiant", "Timid", "Weak", "Fearful"], correct: 0,
    explanation: "'Brave' means showing courage, valiant. Related synonyms: courageous, bold, gallant, intrepid. (Antonym: cowardly.)",
  },
  {
    id: "es-b-03", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'diligent'.",
    options: ["Hardworking", "Lazy", "Careless", "Slow"], correct: 0,
    explanation: "'Diligent' means showing careful, persistent effort, hardworking. Related: industrious, assiduous, conscientious.",
  },
  {
    id: "es-b-04", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'huge'.",
    options: ["Immense", "Tiny", "Narrow", "Short"], correct: 0,
    explanation: "'Huge' means very large, immense. Related synonyms: enormous, gigantic, colossal, vast.",
  },
  {
    id: "es-b-05", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'happy'.",
    options: ["Jovial", "Gloomy", "Angry", "Tired"], correct: 0,
    explanation: "'Happy' means feeling joy, jovial. Related synonyms: cheerful, merry, content, delighted.",
  },
  {
    id: "es-b-06", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the synonym of 'calm'.",
    options: ["Tranquil", "Noisy", "Violent", "Restless"], correct: 0,
    explanation: "'Calm' means free from disturbance, tranquil. Related synonyms: placid, serene, peaceful, composed.",
  },
  {
    id: "es-b-07", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'candid'.",
    options: ["Frank", "Dishonest", "Shy", "Rude"], correct: 0,
    explanation: "'Candid' means truthful and straightforward, frank. Related: honest, open, forthright, blunt.",
  },
  {
    id: "es-b-08", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'wary'.",
    options: ["Cautious", "Careless", "Bold", "Friendly"], correct: 0,
    explanation: "'Wary' means feeling caution about possible danger, cautious. Related: watchful, alert, circumspect. (Antonym: reckless.)",
  },
  {
    id: "es-b-09", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'lucid'.",
    options: ["Clear", "Confusing", "Dark", "Vague"], correct: 0,
    explanation: "'Lucid' means expressed clearly and easy to understand, clear. Related: coherent, intelligible, transparent.",
  },
  {
    id: "es-b-10", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'obstinate'.",
    options: ["Stubborn", "Flexible", "Gentle", "Obedient"], correct: 0,
    explanation: "'Obstinate' means refusing to change one's mind, stubborn. Related: headstrong, inflexible, adamant.",
  },
  {
    id: "es-b-11", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'generous'.",
    options: ["Benevolent", "Selfish", "Cruel", "Poor"], correct: 0,
    explanation: "'Generous' means willing to give freely, benevolent. Related: liberal, magnanimous, charitable.",
  },
  {
    id: "es-b-12", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'fluent'.",
    options: ["Eloquent", "Halting", "Silent", "Slow"], correct: 0,
    explanation: "'Fluent' means able to speak smoothly and readily, eloquent. Related: articulate, expressive, well-spoken.",
  },
  {
    id: "es-b-13", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'sociable'.",
    options: ["Gregarious", "Reserved", "Hostile", "Quiet"], correct: 0,
    explanation: "'Sociable' means enjoying the company of others, gregarious. Related: friendly, outgoing, affable.",
  },
  {
    id: "es-b-14", section: "english", topic: "Synonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the synonym of 'thrifty'.",
    options: ["Frugal", "Wasteful", "Generous", "Rich"], correct: 0,
    explanation: "'Thrifty' means careful with money, frugal. Related: economical, prudent, sparing. (Antonym: extravagant.)",
  },

  // ==================================================== Antonyms, BEGINNER
  {
    id: "ea-b-01", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'scarce'.",
    options: ["Abundant", "Rare", "Limited", "Few"], correct: 0,
    explanation: "'Scarce' means in short supply; its opposite is 'abundant' (plentiful). Rare/limited/few are near-synonyms of scarce, not antonyms.",
  },
  {
    id: "ea-b-02", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'ancient'.",
    options: ["Modern", "Old", "Historic", "Antique"], correct: 0,
    explanation: "'Ancient' means very old; its opposite is 'modern' (of the present). The other options are near-synonyms of ancient.",
  },
  {
    id: "ea-b-03", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'artificial'.",
    options: ["Natural", "Fake", "Synthetic", "Man-made"], correct: 0,
    explanation: "'Artificial' means made by humans / not natural; its opposite is 'natural'. The others are synonyms of artificial.",
  },
  {
    id: "ea-b-04", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'victory'.",
    options: ["Defeat", "Triumph", "Win", "Success"], correct: 0,
    explanation: "'Victory' means success in a contest; its opposite is 'defeat'. Triumph/win/success are synonyms of victory.",
  },
  {
    id: "ea-b-05", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'expand'.",
    options: ["Contract", "Stretch", "Grow", "Widen"], correct: 0,
    explanation: "'Expand' means to grow larger; its opposite is 'contract' (to shrink). The others are synonyms of expand.",
  },
  {
    id: "ea-b-06", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the antonym of 'humble'.",
    options: ["Arrogant", "Modest", "Simple", "Meek"], correct: 0,
    explanation: "'Humble' means modest and unassuming; its opposite is 'arrogant' (proud). Modest/simple/meek are synonyms of humble.",
  },
  {
    id: "ea-b-07", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'generous'.",
    options: ["Stingy", "Kind", "Giving", "Liberal"], correct: 0,
    explanation: "'Generous' means willing to give; its opposite is 'stingy' (mean with money). The others are synonyms of generous.",
  },
  {
    id: "ea-b-08", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'transparent'.",
    options: ["Opaque", "Clear", "Glassy", "See-through"], correct: 0,
    explanation: "'Transparent' means allowing light through / clear; its opposite is 'opaque' (not see-through). The others are synonyms.",
  },
  {
    id: "ea-b-09", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'include'.",
    options: ["Exclude", "Contain", "Add", "Involve"], correct: 0,
    explanation: "'Include' means to take in as part of a whole; its opposite is 'exclude' (leave out). The others are synonyms of include.",
  },
  {
    id: "ea-b-10", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'permanent'.",
    options: ["Temporary", "Lasting", "Fixed", "Stable"], correct: 0,
    explanation: "'Permanent' means lasting forever; its opposite is 'temporary' (short-lived). The others are synonyms of permanent.",
  },
  {
    id: "ea-b-11", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'barren'.",
    options: ["Fertile", "Dry", "Empty", "Bare"], correct: 0,
    explanation: "'Barren' means unable to produce (crops/children); its opposite is 'fertile' (productive). The others are near-synonyms of barren.",
  },
  {
    id: "ea-b-12", section: "english", topic: "Antonyms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the antonym of 'praise'.",
    options: ["Criticize", "Applaud", "Admire", "Compliment"], correct: 0,
    explanation: "'Praise' means to express approval; its opposite is 'criticize' (find fault). The others are synonyms of praise.",
  },

  // ==================================================== One-word substitution, BEGINNER
  {
    id: "eo-b-01", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "A person who cannot read or write is ____",
    options: ["Illiterate", "Illegible", "Ignorant", "Innocent"], correct: 0,
    explanation: "'Illiterate' means unable to read or write. Do not confuse with 'illegible' (unclear handwriting) or 'ignorant' (lacking knowledge).",
  },
  {
    id: "eo-b-02", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "One who walks on foot is a ____",
    options: ["Pedestrian", "Passenger", "Traveller", "Commuter"], correct: 0,
    explanation: "'Pedestrian' is a person travelling on foot. A 'passenger' travels in a vehicle; a 'commuter' travels regularly to work.",
  },
  {
    id: "eo-b-03", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "The life history of a person written by himself is an ____",
    options: ["Autobiography", "Biography", "Memoir", "Diary"], correct: 0,
    explanation: "'Autobiography' is a life story written by the person themselves ('auto' = self). A 'biography' is written by someone else.",
  },
  {
    id: "eo-b-04", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "A doctor who treats teeth is a ____",
    options: ["Dentist", "Surgeon", "Physician", "Optician"], correct: 0,
    explanation: "'Dentist' treats teeth. An 'optician' deals with eyes/spectacles; a 'physician' treats general illness with medicine.",
  },
  {
    id: "eo-b-05", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A person who does not believe in the existence of God is an ____",
    options: ["Atheist", "Theist", "Agnostic", "Pagan"], correct: 0,
    explanation: "'Atheist' denies the existence of God. A 'theist' believes in God; an 'agnostic' thinks it cannot be known.",
  },
  {
    id: "eo-b-06", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "One who eats both plants and flesh is ____",
    options: ["Omnivore", "Herbivore", "Carnivore", "Insectivore"], correct: 0,
    explanation: "'Omnivore' eats both plants and animals. 'Herbivore' eats plants only; 'carnivore' eats flesh only.",
  },
  {
    id: "eo-b-07", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A place where birds are kept is an ____",
    options: ["Aviary", "Apiary", "Aquarium", "Orchard"], correct: 0,
    explanation: "'Aviary' is an enclosure for birds. An 'apiary' is for bees; an 'aquarium' is for fish; an 'orchard' is for fruit trees.",
  },
  {
    id: "eo-b-08", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Government by the people is called ____",
    options: ["Democracy", "Monarchy", "Aristocracy", "Autocracy"], correct: 0,
    explanation: "'Democracy' is rule by the people ('demos' = people). 'Monarchy' = rule by a king; 'autocracy' = rule by one person with absolute power.",
  },
  {
    id: "eo-b-09", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A speech made without previous preparation is ____",
    options: ["Extempore", "Eloquent", "Verbose", "Fluent"], correct: 0,
    explanation: "'Extempore' means spoken without prior preparation (impromptu). 'Verbose' means using too many words; 'fluent' means smooth in speech.",
  },
  {
    id: "eo-b-10", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "One who loves books is a ____",
    options: ["Bibliophile", "Bibliographer", "Librarian", "Scholar"], correct: 0,
    explanation: "'Bibliophile' is a lover/collector of books ('biblio' = book, 'phile' = lover). A 'librarian' manages a library.",
  },
  {
    id: "eo-b-11", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "An animal that can live both on land and in water is ____",
    options: ["Amphibian", "Reptile", "Mammal", "Aquatic"], correct: 0,
    explanation: "'Amphibian' can live both on land and in water (e.g. frog). 'Aquatic' means living in water only.",
  },
  {
    id: "eo-b-12", section: "english", topic: "One-word substitution", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "A medicine that kills germs is an ____",
    options: ["Antiseptic", "Anaesthetic", "Antibiotic", "Analgesic"], correct: 0,
    explanation: "'Antiseptic' prevents infection by destroying germs on the skin. (An 'anaesthetic' numbs sensation; an 'analgesic' relieves pain.)",
  },

  // ==================================================== Idioms, BEGINNER
  {
    id: "ei-b-01", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'a piece of cake' means ____",
    options: ["something very easy", "a sweet dish", "a small share", "a difficult task"], correct: 0,
    explanation: "'A piece of cake' means something very easy to do. e.g. 'The exam was a piece of cake.' Similar: 'as easy as pie'.",
  },
  {
    id: "ei-b-02", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'to break the ice' means ____",
    options: ["to start a conversation", "to feel cold", "to end a friendship", "to solve a problem"], correct: 0,
    explanation: "'Break the ice' means to initiate conversation and ease initial tension in a social situation. e.g. 'A joke helped break the ice.'",
  },
  {
    id: "ei-b-03", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'once in a blue moon' means ____",
    options: ["very rarely", "at night", "very often", "suddenly"], correct: 0,
    explanation: "'Once in a blue moon' means something that happens very rarely. e.g. 'He visits us once in a blue moon.'",
  },
  {
    id: "ei-b-04", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'to spill the beans' means ____",
    options: ["to reveal a secret", "to waste food", "to make a mess", "to lose money"], correct: 0,
    explanation: "'Spill the beans' means to reveal secret information, often accidentally. Similar: 'let the cat out of the bag'.",
  },
  {
    id: "ei-b-05", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'to bite the bullet' means ____",
    options: ["to face a difficulty bravely", "to give up easily", "to eat quickly", "to make a mistake"], correct: 0,
    explanation: "'Bite the bullet' means to endure a painful or difficult situation with courage. e.g. 'She bit the bullet and apologised.'",
  },
  {
    id: "ei-b-06", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'to hit the nail on the head' means ____",
    options: ["to be exactly right", "to work hard", "to hurt someone", "to fix something"], correct: 0,
    explanation: "'Hit the nail on the head' means to describe or identify something exactly right. e.g. 'Your analysis hit the nail on the head.'",
  },
  {
    id: "ei-b-07", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'under the weather' means ____",
    options: ["feeling ill", "outdoors", "very happy", "in trouble"], correct: 0,
    explanation: "'Under the weather' means feeling slightly unwell. e.g. 'He stayed home, feeling under the weather.'",
  },
  {
    id: "ei-b-08", section: "english", topic: "Idioms", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "The idiom 'to cost an arm and a leg' means ____",
    options: ["to be very expensive", "to be dangerous", "to cause injury", "to be cheap"], correct: 0,
    explanation: "'Cost an arm and a leg' means to be very expensive. e.g. 'That car cost an arm and a leg.' Antonym idea: 'a piece of cake' (for ease, not cost).",
  },

  // ==================================================== Spelling, BEGINNER
  {
    id: "ep-b-01", section: "english", topic: "Spelling", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the correctly spelt word.",
    options: ["Definitely", "Definately", "Definitly", "Defenitely"], correct: 0,
    explanation: "The correct spelling is 'definitely' (note 'finite' inside it). 'Definately' is a very common misspelling.",
  },
  {
    id: "ep-b-02", section: "english", topic: "Spelling", examLevel: "l1", level: "beginner", difficulty: "easy",
    stem: "Choose the correctly spelt word.",
    options: ["Receive", "Recieve", "Receeve", "Receve"], correct: 0,
    explanation: "The correct spelling is 'receive', remember the rule 'i before e, except after c'. Hence 'ceive', not 'cieve'.",
  },
  {
    id: "ep-b-03", section: "english", topic: "Spelling", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the correctly spelt word.",
    options: ["Necessary", "Neccessary", "Necesary", "Neccesary"], correct: 0,
    explanation: "The correct spelling is 'necessary', one 'c' and double 's'. Tip: 'one Collar, two Sleeves'.",
  },
  {
    id: "ep-b-04", section: "english", topic: "Spelling", examLevel: "l1", level: "beginner", difficulty: "medium",
    stem: "Choose the correctly spelt word.",
    options: ["Separate", "Seperate", "Seperete", "Saparate"], correct: 0,
    explanation: "The correct spelling is 'separate' (there's 'a rat' in sep-a-rate). 'Seperate' is a very common error.",
  },

  // ==================================================== Synonyms, PROFICIENT
  {
    id: "es-p-01", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the word most nearly the same in meaning as 'ephemeral'.",
    options: ["Short-lived", "Eternal", "Powerful", "Hidden"], correct: 0,
    explanation: "'Ephemeral' means lasting a very short time, short-lived, transient, fleeting. (Its antonym is 'eternal/permanent'.)",
  },
  {
    id: "es-p-02", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'meticulous'.",
    options: ["Scrupulous", "Careless", "Hasty", "Vague"], correct: 0,
    explanation: "'Meticulous' means showing great attention to detail, scrupulous, painstaking, thorough. (Antonym: careless.)",
  },
  {
    id: "es-p-03", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'benevolent'.",
    options: ["Kind-hearted", "Cruel", "Selfish", "Hostile"], correct: 0,
    explanation: "'Benevolent' means well-meaning and kindly, kind-hearted, charitable, magnanimous. (Antonym: malevolent.)",
  },
  {
    id: "es-p-04", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'candour'.",
    options: ["Frankness", "Deceit", "Shyness", "Cruelty"], correct: 0,
    explanation: "'Candour' means the quality of being open and honest, frankness, sincerity. (Its opposite is deceit/evasiveness.)",
  },
  {
    id: "es-p-05", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'audacious'.",
    options: ["Bold", "Timid", "Weak", "Modest"], correct: 0,
    explanation: "'Audacious' means showing a willingness to take bold risks, bold, daring, intrepid. (Antonym: timid.)",
  },
  {
    id: "es-p-06", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'gregarious'.",
    options: ["Sociable", "Solitary", "Rude", "Silent"], correct: 0,
    explanation: "'Gregarious' means fond of company, sociable, outgoing, convivial. (Antonym: solitary/reclusive.)",
  },
  {
    id: "es-p-07", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'tenacious'.",
    options: ["Persistent", "Weak", "Careless", "Flexible"], correct: 0,
    explanation: "'Tenacious' means holding firmly / not giving up, persistent, determined, dogged. (Antonym: yielding.)",
  },
  {
    id: "es-p-08", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'affluent'.",
    options: ["Wealthy", "Poor", "Generous", "Frugal"], correct: 0,
    explanation: "'Affluent' means having plenty of money, wealthy, prosperous, well-off. (Antonym: impoverished.)",
  },
  {
    id: "es-p-09", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'placid'.",
    options: ["Serene", "Turbulent", "Angry", "Loud"], correct: 0,
    explanation: "'Placid' means calm and peaceful, serene, tranquil, unruffled. (Antonym: agitated/turbulent.)",
  },
  {
    id: "es-p-10", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'reticent'.",
    options: ["Reserved", "Talkative", "Cheerful", "Rude"], correct: 0,
    explanation: "'Reticent' means not revealing one's thoughts readily, reserved, taciturn, tight-lipped. (Antonym: forthcoming/loquacious.)",
  },
  {
    id: "es-p-11", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'lethargic'.",
    options: ["Sluggish", "Energetic", "Alert", "Quick"], correct: 0,
    explanation: "'Lethargic' means lacking energy, sluggish, lazy, listless. (Antonym: energetic/vigorous.)",
  },
  {
    id: "es-p-12", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'pragmatic'.",
    options: ["Practical", "Idealistic", "Emotional", "Careless"], correct: 0,
    explanation: "'Pragmatic' means dealing with things sensibly and realistically, practical, sensible, down-to-earth. (Antonym: idealistic.)",
  },
  {
    id: "es-p-13", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'ambiguous'.",
    options: ["Vague", "Clear", "Certain", "Obvious"], correct: 0,
    explanation: "'Ambiguous' means open to more than one interpretation, vague, unclear, equivocal. (Antonym: unambiguous/clear.)",
  },
  {
    id: "es-p-14", section: "english", topic: "Synonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the synonym of 'zenith'.",
    options: ["Peak", "Bottom", "Middle", "Edge"], correct: 0,
    explanation: "'Zenith' means the highest point, peak, summit, apex, pinnacle. (Its antonym is 'nadir', the lowest point.)",
  },

  // ==================================================== Antonyms, PROFICIENT
  {
    id: "ea-p-01", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'benevolent'.",
    options: ["Malevolent", "Generous", "Gentle", "Kind"], correct: 0,
    explanation: "'Benevolent' (well-meaning) is opposed by 'malevolent' (wishing harm). The prefixes 'bene-' (good) and 'male-' (bad) mark the contrast.",
  },
  {
    id: "ea-p-02", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'frugal'.",
    options: ["Extravagant", "Thrifty", "Economical", "Careful"], correct: 0,
    explanation: "'Frugal' (careful with money) is opposed by 'extravagant' (spending excessively). The other options are synonyms of frugal.",
  },
  {
    id: "ea-p-03", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'optimist'.",
    options: ["Pessimist", "Idealist", "Realist", "Dreamer"], correct: 0,
    explanation: "'Optimist' (expects the best) is opposed by 'pessimist' (expects the worst). A 'realist' judges things as they are.",
  },
  {
    id: "ea-p-04", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'condemn'.",
    options: ["Praise", "Blame", "Criticize", "Accuse"], correct: 0,
    explanation: "'Condemn' (express strong disapproval) is opposed by 'praise' (express approval). The other options are synonyms of condemn.",
  },
  {
    id: "ea-p-05", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'liberty'.",
    options: ["Bondage", "Freedom", "Independence", "Choice"], correct: 0,
    explanation: "'Liberty' (freedom) is opposed by 'bondage/slavery'. Freedom/independence/choice are synonyms of liberty.",
  },
  {
    id: "ea-p-06", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'conceal'.",
    options: ["Reveal", "Hide", "Cover", "Mask"], correct: 0,
    explanation: "'Conceal' (hide) is opposed by 'reveal' (make known). The other options are synonyms of conceal.",
  },
  {
    id: "ea-p-07", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'humility'.",
    options: ["Arrogance", "Modesty", "Meekness", "Shyness"], correct: 0,
    explanation: "'Humility' (a modest view of oneself) is opposed by 'arrogance' (an inflated sense of self). The others are synonyms of humility.",
  },
  {
    id: "ea-p-08", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'diligent'.",
    options: ["Indolent", "Industrious", "Careful", "Hardworking"], correct: 0,
    explanation: "'Diligent' (hardworking) is opposed by 'indolent' (lazy). The other options are synonyms of diligent.",
  },
  {
    id: "ea-p-09", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'flexible'.",
    options: ["Rigid", "Elastic", "Adaptable", "Supple"], correct: 0,
    explanation: "'Flexible' (able to bend/adapt) is opposed by 'rigid' (stiff, unbending). The other options are synonyms of flexible.",
  },
  {
    id: "ea-p-10", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'abundant'.",
    options: ["Meagre", "Plentiful", "Ample", "Copious"], correct: 0,
    explanation: "'Abundant' (plentiful) is opposed by 'meagre/scanty' (very little). The other options are synonyms of abundant.",
  },
  {
    id: "ea-p-11", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'novice'.",
    options: ["Expert", "Beginner", "Learner", "Amateur"], correct: 0,
    explanation: "'Novice' (a beginner) is opposed by 'expert/veteran'. Beginner/learner/amateur are synonyms of novice.",
  },
  {
    id: "ea-p-12", section: "english", topic: "Antonyms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the antonym of 'monotonous'.",
    options: ["Varied", "Dull", "Repetitive", "Tedious"], correct: 0,
    explanation: "'Monotonous' (dull and unvarying) is opposed by 'varied/lively'. The other options are synonyms of monotonous.",
  },

  // ==================================================== One-word substitution, PROFICIENT
  {
    id: "eo-p-01", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "One who is incapable of being corrected is ____",
    options: ["Incorrigible", "Incurable", "Invincible", "Incredible"], correct: 0,
    explanation: "'Incorrigible' means not able to be corrected or reformed. 'Invincible' = cannot be defeated; 'incredible' = unbelievable.",
  },
  {
    id: "eo-p-02", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Words inscribed on a tomb are an ____",
    options: ["Epitaph", "Epilogue", "Epigram", "Epithet"], correct: 0,
    explanation: "'Epitaph' is an inscription on a tombstone. 'Epilogue' = closing part of a book; 'epigram' = a witty saying; 'epithet' = a descriptive term.",
  },
  {
    id: "eo-p-03", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The murder of a king is called ____",
    options: ["Regicide", "Homicide", "Genocide", "Patricide"], correct: 0,
    explanation: "'Regicide' is the killing of a king ('rex' = king). 'Homicide' = killing a person; 'genocide' = a race; 'patricide' = one's father.",
  },
  {
    id: "eo-p-04", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A person who speaks many languages is a ____",
    options: ["Polyglot", "Linguist", "Bilingual", "Interpreter"], correct: 0,
    explanation: "'Polyglot' knows and uses several languages ('poly' = many, 'glot' = tongue). 'Bilingual' means using only two languages.",
  },
  {
    id: "eo-p-05", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "One who is indifferent to pleasure and pain is a ____",
    options: ["Stoic", "Cynic", "Sceptic", "Epicure"], correct: 0,
    explanation: "'Stoic' endures pleasure and pain without complaint. A 'cynic' distrusts others' motives; an 'epicure' loves fine food and pleasure.",
  },
  {
    id: "eo-p-06", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A place where government records are kept is an ____",
    options: ["Archive", "Arsenal", "Museum", "Gallery"], correct: 0,
    explanation: "'Archive' is a place where public/historical records are stored. An 'arsenal' stores weapons; a 'museum' displays objects of interest.",
  },
  {
    id: "eo-p-07", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "That which cannot be avoided is ____",
    options: ["Inevitable", "Invisible", "Inaudible", "Illegible"], correct: 0,
    explanation: "'Inevitable' means certain to happen and unavoidable. 'Invisible' = cannot be seen; 'illegible' = cannot be read.",
  },
  {
    id: "eo-p-08", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A person who hates mankind is a ____",
    options: ["Misanthrope", "Philanthropist", "Misogynist", "Egotist"], correct: 0,
    explanation: "'Misanthrope' dislikes humankind. A 'philanthropist' loves and helps humankind; a 'misogynist' hates women.",
  },
  {
    id: "eo-p-09", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "One who studies the past through remains is an ____",
    options: ["Archaeologist", "Astrologer", "Anthropologist", "Geologist"], correct: 0,
    explanation: "'Archaeologist' studies human history through excavated remains. A 'geologist' studies rocks; an 'anthropologist' studies human societies.",
  },
  {
    id: "eo-p-10", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A statement open to more than one interpretation is ____",
    options: ["Ambiguous", "Ambitious", "Amiable", "Amicable"], correct: 0,
    explanation: "'Ambiguous' means having a double or unclear meaning. 'Ambitious' = eager to succeed; 'amicable' = friendly.",
  },
  {
    id: "eo-p-11", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Something that can be heard is ____",
    options: ["Audible", "Visible", "Edible", "Tangible"], correct: 0,
    explanation: "'Audible' means able to be heard. 'Visible' = able to be seen; 'edible' = fit to eat; 'tangible' = able to be touched.",
  },
  {
    id: "eo-p-12", section: "english", topic: "One-word substitution", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "A cure for all diseases or troubles is a ____",
    options: ["Panacea", "Placebo", "Vaccine", "Antidote"], correct: 0,
    explanation: "'Panacea' is a supposed remedy for all ills. A 'placebo' is a harmless pill with no active effect; an 'antidote' counters a specific poison.",
  },

  // ==================================================== Idioms, PROFICIENT
  {
    id: "ei-p-01", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'a blessing in disguise' means ____",
    options: ["a misfortune that turns out to be good", "a hidden gift", "a lucky charm", "a false promise"], correct: 0,
    explanation: "'A blessing in disguise' is something that seems bad at first but results in something good. e.g. 'Losing that job was a blessing in disguise.'",
  },
  {
    id: "ei-p-02", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to let the cat out of the bag' means ____",
    options: ["to reveal a secret", "to free an animal", "to make a mistake", "to cause chaos"], correct: 0,
    explanation: "'Let the cat out of the bag' means to disclose a secret carelessly. Similar: 'spill the beans'.",
  },
  {
    id: "ei-p-03", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to add fuel to the fire' means ____",
    options: ["to make a bad situation worse", "to work harder", "to start a quarrel", "to warm up"], correct: 0,
    explanation: "'Add fuel to the fire' means to worsen an already tense situation. Hindi equivalent: 'आग में घी डालना'.",
  },
  {
    id: "ei-p-04", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to turn a blind eye' means ____",
    options: ["to ignore deliberately", "to go blind", "to look away", "to forgive"], correct: 0,
    explanation: "'Turn a blind eye' means to pretend not to notice something wrong. e.g. 'The guard turned a blind eye to the rule-breaking.'",
  },
  {
    id: "ei-p-05", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to burn the midnight oil' means ____",
    options: ["to work or study late into the night", "to waste resources", "to celebrate", "to cause a fire"], correct: 0,
    explanation: "'Burn the midnight oil' means to work or study until very late at night. e.g. 'She burned the midnight oil before exams.'",
  },
  {
    id: "ei-p-06", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to make a mountain out of a molehill' means ____",
    options: ["to exaggerate a minor problem", "to climb higher", "to build something", "to solve a big problem"], correct: 0,
    explanation: "'Make a mountain out of a molehill' means to treat a trivial matter as very serious. Hindi equivalent: 'तिल का ताड़ बनाना'.",
  },
  {
    id: "ei-p-07", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to be in hot water' means ____",
    options: ["to be in trouble", "to be in danger of drowning", "to be very busy", "to be angry"], correct: 0,
    explanation: "'In hot water' means in a difficult situation or in trouble. e.g. 'He landed in hot water for missing the deadline.'",
  },
  {
    id: "ei-p-08", section: "english", topic: "Idioms", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "The idiom 'to cry over spilt milk' means ____",
    options: ["to regret what cannot be undone", "to be very sad", "to waste food", "to complain often"], correct: 0,
    explanation: "'Cry over spilt milk' means to waste time regretting something that has already happened and cannot be changed. Similar Hindi: 'अब पछताए होत क्या...'.",
  },

  // ==================================================== Spelling, PROFICIENT
  {
    id: "ep-p-01", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Accommodation", "Acommodation", "Accomodation", "Accomadation"], correct: 0,
    explanation: "The correct spelling is 'accommodation', double 'c' and double 'm'. This is one of the most commonly misspelt words.",
  },
  {
    id: "ep-p-02", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Embarrass", "Embarass", "Embaras", "Embarras"], correct: 0,
    explanation: "The correct spelling is 'embarrass', double 'r' and double 's'.",
  },
  {
    id: "ep-p-03", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Occurrence", "Occurence", "Ocurrence", "Occurrance"], correct: 0,
    explanation: "The correct spelling is 'occurrence', double 'c', double 'r', and '-ence' (not '-ance').",
  },
  {
    id: "ep-p-04", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Privilege", "Priviledge", "Privilage", "Privelege"], correct: 0,
    explanation: "The correct spelling is 'privilege', no 'd', and '-lege' at the end. 'Priviledge' is a common misspelling.",
  },
  {
    id: "ep-p-05", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Maintenance", "Maintainance", "Maintenence", "Maintainence"], correct: 0,
    explanation: "The correct spelling is 'maintenance', note it is 'mainten-ance', though the verb is 'maintain'.",
  },
  {
    id: "ep-p-06", section: "english", topic: "Spelling", examLevel: "l1", level: "proficient", difficulty: "hard",
    stem: "Choose the correctly spelt word.",
    options: ["Conscience", "Concience", "Conscence", "Consience"], correct: 0,
    explanation: "The correct spelling is 'conscience' (con-sci-ence), the sense of right and wrong. Related: 'conscious', 'science'.",
  },
];
