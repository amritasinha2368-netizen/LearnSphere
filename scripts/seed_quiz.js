import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

// We need to import the schema directly since this is a script outside of Next.js API
import StandardQuiz from '../src/models/StandardQuiz.js';

async function seedQuiz() {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const opts = { bufferCommands: false };
  if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
  if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
  if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;

  await mongoose.connect(process.env.MONGODB_URI, opts);
  console.log("Connected to MongoDB");

  const questionsFile = path.resolve(__dirname, '../src/data/samkaryaQuestions.json');
  const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));

  // Ensure they match the TestEnvironment expected format
  const formattedQuestions = questions.map(q => ({
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation || "Detailed explanation is provided in the textbook."
  }));

  const megaQuiz = {
    title: "JEE Mains Advanced Grand Mock Test (200 Questions)",
    publishTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // Published yesterday
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // Due in 7 days
    durationMinutes: 180,
    questions: formattedQuestions
  };

  await StandardQuiz.create(megaQuiz);
  console.log("Successfully created Mega Quiz with 200 questions!");
  
  process.exit(0);
}

seedQuiz();
