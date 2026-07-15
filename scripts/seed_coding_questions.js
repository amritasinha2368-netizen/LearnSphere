import mongoose from "mongoose";
import dotenv from "dotenv";
import CodingQuestion from "../src/models/CodingQuestion.js";
import CodingTest from "../src/models/CodingTest.js";
import codingQuestions from "../src/data/codingQuestions.json" with { type: "json" };

dotenv.config({ path: ".env.local" });

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD,
    });
    console.log("Connected to MongoDB");

    // Remove any previous versions just in case
    await CodingQuestion.deleteMany({});
    console.log("Cleared old mock coding questions.");

    const insertedQuestions = await CodingQuestion.insertMany(codingQuestions);
    console.log(`Successfully created ${codingQuestions.length} Coding Questions from LeetCode!`);

    // Create a mock coding test using the first 5 questions
    await CodingTest.deleteMany({});
    
    await CodingTest.create({
      title: "Algorithms & Data Structures Challenge",
      subject: "Computer Science",
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // due in 3 days
      imageUrl: "",
      questions: insertedQuestions.slice(0, 5).map(q => q._id)
    });
    console.log("Created a mock Coding Test containing 5 LeetCode problems.");

    process.exit(0);
  } catch (error) {
    console.error("Failed to seed:", error);
    process.exit(1);
  }
}

seed();
