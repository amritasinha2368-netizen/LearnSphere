import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import mongoose from "mongoose";
import CodingQuestion from "./src/models/CodingQuestion.js";

async function test() {
  await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB, user: process.env.MONGODB_USER, pass: process.env.MONGODB_PASSWORD });
  const q = await CodingQuestion.findOne({ title: "Two Sum" });
  if (q) console.log(JSON.stringify(q.testCases, null, 2));
  process.exit(0);
}
test();
