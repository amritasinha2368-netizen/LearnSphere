import fs from 'fs';
import codingQuestions from '../src/data/codingQuestions.json' with { type: "json" };

function generateMockQuestions(count) {
  const topics = [
    {
      category: "Array",
      templates: [
        "Given an array of integers representing {entity}, find the {superlative} {entity} such that {condition}.",
        "You are provided an array of {entity}. Determine if there exists a subset that {condition}.",
        "Rotate the array of {entity} by k steps to the right.",
        "Find the contiguous subarray of {entity} which has the largest sum and return its sum."
      ],
      entities: ["daily temperatures", "stock prices", "student scores", "building heights"],
      conditions: ["the sum is maximized", "it forms a valid sequence", "no two elements are adjacent", "it is strictly increasing"],
      superlatives: ["maximum", "minimum", "longest", "shortest"]
    },
    {
      category: "String",
      templates: [
        "Given a string representing a {entity}, determine if it is a valid {condition}.",
        "Find the length of the {superlative} substring of {entity} that {condition}.",
        "Reverse the words in a given string of {entity}.",
        "Group anagrams together from an array of {entity}."
      ],
      entities: ["DNA sequence", "user password", "encoded message", "sentence"],
      conditions: ["palindrome", "sequence of unique characters", "anagram of another string"],
      superlatives: ["longest", "shortest"]
    },
    {
      category: "Math",
      templates: [
        "Calculate the {superlative} common divisor of two integers representing {entity}.",
        "Given an integer representing {entity}, return true if it is a prime number.",
        "Find the factorial of a number representing {entity}.",
        "Compute the nth Fibonacci number which determines the {entity}."
      ],
      entities: ["items in a knapsack", "steps in a grid", "number of distinct paths"],
      conditions: [""],
      superlatives: ["greatest", "least"]
    }
  ];

  const difficulties = ["Easy", "Medium", "Hard"];
  
  const generated = [];
  let idCounter = 100;
  
  for (let i = 0; i < count; i++) {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const template = topic.templates[Math.floor(Math.random() * topic.templates.length)];
    const entity = topic.entities[Math.floor(Math.random() * topic.entities.length)];
    const condition = topic.conditions[Math.floor(Math.random() * topic.conditions.length)];
    const superlative = topic.superlatives[Math.floor(Math.random() * topic.superlatives.length)];
    const difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
    
    let desc = template
      .replace("{entity}", entity)
      .replace("{condition}", condition)
      .replace("{superlative}", superlative);
      
    // Create a matching title
    let title = `${difficulty} ${topic.category} Challenge ${idCounter}`;
    
    generated.push({
      title: title,
      description: desc,
      difficulty: difficulty,
      timeLimit: difficulty === "Hard" ? 5000 : difficulty === "Medium" ? 3000 : 2000,
      imageUrl: "",
      testCases: [
        { input: "Custom Test Input A", expectedOutput: "Expected Output A" },
        { input: "Custom Test Input B", expectedOutput: "Expected Output B" }
      ]
    });
    idCounter++;
  }
  
  return generated;
}

function run() {
  const newQuestions = generateMockQuestions(80);
  const combined = [...codingQuestions, ...newQuestions];
  
  fs.writeFileSync('./src/data/codingQuestions.json', JSON.stringify(combined, null, 2));
  console.log(`Generated 80 new questions. Total questions now: ${combined.length}`);
}

run();
