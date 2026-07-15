import fs from 'fs';

// Helper to paraphrase questions slightly
function paraphrase(text) {
  const replacements = [
    { from: /\bWhat is\b/gi, to: "Identify" },
    { from: /\bWhich of the following\b/gi, to: "Which option" },
    { from: /\bHow many\b/gi, to: "What is the number of" },
    { from: /\bWhy did\b/gi, to: "For what reason did" },
    { from: /\bWhere is\b/gi, to: "In what location is" },
    { from: /\bWhen did\b/gi, to: "At what time did" },
    { from: /\bWho was\b/gi, to: "Which person was" },
  ];
  let res = text;
  replacements.forEach(r => {
    res = res.replace(r.from, r.to);
  });
  return res;
}

// Helper to shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function run() {
  console.log("Fetching SQuAD dataset...");
  const url = "https://rajpurkar.github.io/SQuAD-explorer/dataset/dev-v1.1.json";
  const res = await fetch(url);
  const data = await res.json();
  
  const allQs = [];
  
  // Parse SQuAD
  for (const article of data.data) {
    for (const paragraph of article.paragraphs) {
      const context = paragraph.context;
      
      // Gather all possible answers in this paragraph to use as distractors
      const allAnswersInParagraph = paragraph.qas
        .map(qa => qa.answers[0]?.text)
        .filter(t => !!t);
        
      for (const qa of paragraph.qas) {
        if (!qa.answers || qa.answers.length === 0) continue;
        const correctAnswer = qa.answers[0].text;
        
        // Pick 3 random distractors
        const distractors = allAnswersInParagraph.filter(a => a !== correctAnswer);
        const uniqueDistractors = [...new Set(distractors)];
        
        if (uniqueDistractors.length >= 3) {
          const selectedDistractors = shuffle(uniqueDistractors).slice(0, 3);
          
          allQs.push({
            id: qa.id,
            category: "English Comprehension",
            difficulty: "easy",
            question: `Read the following passage and answer the question:\n\n"${context}"\n\nQuestion: ${paraphrase(qa.question)}`,
            options: shuffle([correctAnswer, ...selectedDistractors]),
            answer: correctAnswer
          });
        }
      }
    }
  }
  
  console.log(`Total viable MCQ questions extracted: ${allQs.length}`);
  
  // Pick exactly 200 random questions
  const selectedQs = shuffle(allQs).slice(0, 200);
  
  // Format the IDs cleanly
  const finalQuestions = selectedQs.map((q, idx) => ({
    ...q,
    id: `eng_comp_${idx + 1}`
  }));
  
  fs.writeFileSync('./src/data/englishQuestions.json', JSON.stringify(finalQuestions, null, 2));
  console.log(`Successfully saved 200 English questions to src/data/englishQuestions.json`);
}

run().catch(console.error);
