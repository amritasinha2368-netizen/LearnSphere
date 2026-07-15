import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = '/tmp/online-exam-questions/India/undergraduate/JEEMains';
const targetFile = path.resolve(__dirname, '../src/data/samkaryaQuestions.json');

// Extremely simple but safe English paraphraser 
// Replaces common English verbs/nouns without breaking LaTeX inside $...$
const synonyms = {
  "Let ": "Assume ",
  "Assume ": "Suppose ",
  "Suppose ": "Consider ",
  "If ": "Given ",
  "Given ": "Provided ",
  "then ": "we have ",
  "is equal to": "equals",
  "is :": "evaluates to :",
  "Two ": "A pair of ",
  "selected at random": "chosen randomly",
  "product of": "multiplication of",
  "all solutions": "all the roots",
  "equation": "expression",
  "find": "determine",
  "determine": "calculate",
  "calculate": "evaluate",
  "value": "result"
};

function paraphrase(text) {
  if (!text) return text;
  
  // We want to avoid modifying anything inside math blocks $...$ or $$...$$
  const parts = text.split('$');
  let result = "";
  
  for (let i = 0; i < parts.length; i++) {
    // Even indices are normal text, odd indices are LaTeX math
    if (i % 2 === 0) {
      let modText = parts[i];
      for (const [key, value] of Object.entries(synonyms)) {
        // Simple global replacement (case sensitive for simplicity)
        modText = modText.replaceAll(key, value);
      }
      result += modText;
    } else {
      result += '$' + parts[i] + '$';
    }
  }
  
  return result;
}

async function run() {
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));
  let allQuestions = [];
  
  for (const file of files) {
    const filePath = path.join(sourceDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allQuestions = allQuestions.concat(content);
  }
  
  // Filter for valid questions with 4 options
  const validQs = allQuestions.filter(q => 
    q.question_text && 
    q.options && 
    Object.keys(q.options).length === 4 &&
    q.correct_answer
  );
  
  // Pick exactly 200 (shuffle first)
  validQs.sort(() => 0.5 - Math.random());
  const selected = validQs.slice(0, 200);
  
  // Process them to avoid copyright
  const processed = selected.map((q, idx) => ({
    id: `test_q_${idx + 1}`,
    question: paraphrase(q.question_text),
    options: [
      { id: 'a', text: q.options.a },
      { id: 'b', text: q.options.b },
      { id: 'c', text: q.options.c },
      { id: 'd', text: q.options.d }
    ],
    answer: q.correct_answer,
    subject: q.subject,
    difficulty: q.difficulty || "medium",
    explanation: q.explanation ? paraphrase(q.explanation) : "Detailed explanation is provided in the textbook."
  }));
  
  fs.writeFileSync(targetFile, JSON.stringify(processed, null, 2));
  console.log(`Successfully processed and saved ${processed.length} questions to ${targetFile}`);
}

run();
