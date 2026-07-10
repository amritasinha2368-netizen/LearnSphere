import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: '.env.local' });

const submissionSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  fileUrl: { type: String, default: "" },
  note: { type: String, default: "" },
  feedback: { type: String, default: "" },
  grade: { type: String, default: "" },
  date: { type: Date, default: Date.now }
});

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  dueDate: { type: Date, required: true },
  maxMarks: { type: Number, required: true },
  fileUrl: { type: String, default: "" },
  contentBody: { type: String, default: "" },
  status: { type: String, default: "Published" },
  submissions: [submissionSchema]
}, { timestamps: true });

const Assignment = mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const opts = { bufferCommands: false };
  if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
  if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
  if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;

  await mongoose.connect(process.env.MONGODB_URI, opts);
  console.log("Connected to MongoDB for seeding...");

  const assignments = [
    {
      title: "Lab 3: Binary Trees",
      subject: "Data Structures",
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // In 2 days
      maxMarks: 100,
      contentBody: "Implement a binary search tree with insert, delete, and inorder traversal methods.",
      status: "Published",
      submissions: []
    },
    {
      title: "Midterm Essay: Cloud Architecture",
      subject: "Cloud Computing",
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // In 5 days
      maxMarks: 50,
      contentBody: "Write a 5-page essay on the pros and cons of microservices architecture compared to monolithic design.",
      status: "Published",
      submissions: []
    },
    {
      title: "Week 1: Introduction to React",
      subject: "Web Development",
      dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      maxMarks: 100,
      contentBody: "Create a simple to-do list using React state and hooks.",
      status: "Published",
      submissions: [
        {
          studentId: "student_123",
          studentName: "amrita",
          note: "Here is my completed to-do list.",
          feedback: "Great job! Your code is very clean.",
          grade: "95/100"
        }
      ]
    },
    {
      title: "Assignment 4: Database Normalization",
      subject: "Database Management",
      dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // In 10 days
      maxMarks: 100,
      contentBody: "Normalize the provided spreadsheet data up to 3NF.",
      status: "Published",
      submissions: []
    }
  ];

  await Assignment.insertMany(assignments);
  console.log("Successfully seeded database with assignments.");
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
