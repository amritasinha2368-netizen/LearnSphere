const fs = require('fs');

const grammarQuestions = [
  {
    id: "grammar_1",
    category: "English Grammar",
    difficulty: "easy",
    question: "Choose the correct article: I saw ___ elephant at the zoo.",
    options: ["a", "an", "the", "no article"],
    answer: "an"
  },
  {
    id: "grammar_2",
    category: "English Grammar",
    difficulty: "easy",
    question: "Choose the correct preposition: The book is ___ the table.",
    options: ["in", "on", "at", "under"],
    answer: "on"
  },
  {
    id: "grammar_3",
    category: "English Grammar",
    difficulty: "easy",
    question: "Choose the correct verb: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes"
  },
  {
    id: "grammar_4",
    category: "English Grammar",
    difficulty: "medium",
    question: "Identify the tense: They have been playing cricket since morning.",
    options: ["Simple Present", "Present Continuous", "Present Perfect", "Present Perfect Continuous"],
    answer: "Present Perfect Continuous"
  },
  {
    id: "grammar_5",
    category: "English Grammar",
    difficulty: "easy",
    question: "What is the plural of 'Child'?",
    options: ["Childs", "Childrens", "Children", "Childes"],
    answer: "Children"
  },
  {
    id: "grammar_6",
    category: "English Grammar",
    difficulty: "easy",
    question: "Choose the correct spelling:",
    options: ["Tommorow", "Tomorrow", "Tomorow", "Tommorrow"],
    answer: "Tomorrow"
  },
  {
    id: "grammar_7",
    category: "English Grammar",
    difficulty: "medium",
    question: "Choose the correct conjunction: He is poor ___ he is honest.",
    options: ["and", "or", "but", "so"],
    answer: "but"
  },
  {
    id: "grammar_8",
    category: "English Grammar",
    difficulty: "easy",
    question: "Which of the following is a noun?",
    options: ["Quickly", "Beautiful", "Happiness", "Run"],
    answer: "Happiness"
  },
  {
    id: "grammar_9",
    category: "English Grammar",
    difficulty: "medium",
    question: "Choose the correct word: My mother asked me to ___ the door.",
    options: ["close", "clothes", "cloes", "cloze"],
    answer: "close"
  },
  {
    id: "grammar_10",
    category: "English Grammar",
    difficulty: "easy",
    question: "The dog barked ___ at the stranger.",
    options: ["loud", "loudly", "louder", "loudness"],
    answer: "loudly"
  }
];

const paths = [
  './src/data/questionsData.js',
  './next-backend/src/data/questionsData.js'
];

for (const p of paths) {
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf-8');
    // We want to insert the questions into the array.
    // The array starts with `export const questionsData = [`
    const insertString = JSON.stringify(grammarQuestions, null, 2).slice(1, -1) + ",";
    content = content.replace("export const questionsData = [", "export const questionsData = [\n" + insertString);
    fs.writeFileSync(p, content);
    console.log("Updated", p);
  }
}
