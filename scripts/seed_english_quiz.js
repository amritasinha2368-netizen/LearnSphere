import mongoose from "mongoose";
import dotenv from "dotenv";
import StandardQuiz from "../src/models/StandardQuiz.js";
import englishQuestions from "../src/data/englishQuestions.json" with { type: "json" };

dotenv.config({ path: ".env.local" });

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
    });
    console.log("Connected to MongoDB");

    const mappedQuestions = englishQuestions.map(q => ({
      id: q.id,
      prompt: q.question,
      options: q.options,
      correctAnswer: q.answer
    }));

    const englishQuiz = {
      title: "English Comprehension & Grammar Mock Test",
      publishTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // Published yesterday
      endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // Due in 7 days
      durationMinutes: 120,
      questions: mappedQuestions
    };

    // Remove any previous versions just in case
    await StandardQuiz.deleteMany({ title: "English Comprehension & Grammar Mock Test" });

    await StandardQuiz.create(englishQuiz);
    console.log("Successfully created English Quiz with 200 questions!");

    process.exit(0);
  } catch (error) {
    console.error("Failed to seed:", error);
    process.exit(1);
  }
}

seed();
