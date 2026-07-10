import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const codingQuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, default: "Medium" },
  timeLimit: { type: Number, default: 2000 },
  testCases: [{
    input: String,
    expectedOutput: String,
    isHidden: { type: Boolean, default: true }
  }]
});

const CodingQuestion = mongoose.models.CodingQuestion || mongoose.model("CodingQuestion", codingQuestionSchema);

const sampleQuestions = [
  {
    title: "Two Sum",
    description: "Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.\n\nInput format: The first line contains the array numbers separated by spaces. The second line contains the target.\n\nOutput format: Print the two indices separated by a space.",
    difficulty: "Easy",
    timeLimit: 1000,
    testCases: [
      { input: "2 7 11 15\n9\n", expectedOutput: "0 1", isHidden: false },
      { input: "3 2 4\n6\n", expectedOutput: "1 2", isHidden: true },
      { input: "3 3\n6\n", expectedOutput: "0 1", isHidden: true }
    ]
  },
  {
    title: "Palindrome Number",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.\n\nInput format: A single integer x.\nOutput format: Print 'true' or 'false' (lowercase).",
    difficulty: "Easy",
    timeLimit: 1000,
    testCases: [
      { input: "121\n", expectedOutput: "true", isHidden: false },
      { input: "-121\n", expectedOutput: "false", isHidden: true },
      { input: "10\n", expectedOutput: "false", isHidden: true }
    ]
  },
  {
    title: "Fibonacci Sequence",
    description: "Write a program that takes an integer N and prints the Nth Fibonacci number. F(0) = 0, F(1) = 1.\n\nInput format: A single integer N.\nOutput format: A single integer.",
    difficulty: "Easy",
    timeLimit: 1000,
    testCases: [
      { input: "2\n", expectedOutput: "1", isHidden: false },
      { input: "3\n", expectedOutput: "2", isHidden: true },
      { input: "10\n", expectedOutput: "55", isHidden: true }
    ]
  },
  {
    title: "Maximum Subarray",
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.\n\nInput format: Space-separated integers.\nOutput format: A single integer.",
    difficulty: "Medium",
    timeLimit: 2000,
    testCases: [
      { input: "-2 1 -3 4 -1 2 1 -5 4\n", expectedOutput: "6", isHidden: false },
      { input: "1\n", expectedOutput: "1", isHidden: true },
      { input: "5 4 -1 7 8\n", expectedOutput: "23", isHidden: true }
    ]
  }
];

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error("No MONGODB_URI found in .env.local");
    process.exit(1);
  }

  try {
    const opts = {};
    if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
    await mongoose.connect(process.env.MONGODB_URI, opts);
    console.log("Connected to MongoDB!");

    await CodingQuestion.deleteMany({});
    console.log("Cleared existing Coding Questions.");

    await CodingQuestion.insertMany(sampleQuestions);
    console.log(`Inserted ${sampleQuestions.length} Coding Questions.`);

    mongoose.disconnect();
    console.log("Done.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
