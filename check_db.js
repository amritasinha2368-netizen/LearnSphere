import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import mongoose from "mongoose";
import CodingQuestion from "./src/models/CodingQuestion.js";

async function test() {
  await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB, user: process.env.MONGODB_USER, pass: process.env.MONGODB_PASSWORD });
  const count = await CodingQuestion.countDocuments();
  console.log("Total Coding Questions in DB: " + count);
  const qs = await CodingQuestion.find({}).limit(5);
  qs.forEach(q => console.log(q.title));
  process.exit(0);
}
test();
