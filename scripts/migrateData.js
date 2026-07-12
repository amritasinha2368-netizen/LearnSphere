import mongoose from "mongoose";
import dotenv from "dotenv";
import { studentData, teacherData, adminData } from "../src/data/lmsData.js";
import User from "../src/models/User.js";
import Subject from "../src/models/Subject.js";
import ClassSchedule from "../src/models/ClassSchedule.js";
import Submission from "../src/models/Submission.js";
import Feedback from "../src/models/Feedback.js";
import Notice from "../src/models/Notice.js";
import Badge from "../src/models/Badge.js";

dotenv.config({ path: '.env.local' });

async function migrate() {
  if (!process.env.MONGODB_URI) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const opts = { bufferCommands: false };
  if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
  if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
  if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;

  await mongoose.connect(process.env.MONGODB_URI, opts);
  console.log("Connected to MongoDB for migration");

  // Clear existing collections
  await Promise.all([
    User.deleteMany({}),
    Subject.deleteMany({}),
    ClassSchedule.deleteMany({}),
    Submission.deleteMany({}),
    Feedback.deleteMany({}),
    Notice.deleteMany({}),
    Badge.deleteMany({})
  ]);
  console.log("Cleared existing collections");

  // 1. Users
  const usersToInsert = [
    { ...studentData.profile, role: 'student' },
    { ...teacherData.profile, role: 'teacher' },
    { ...adminData.profile, role: 'admin' }
  ];
  await User.insertMany(usersToInsert);
  console.log("Migrated Users");

  // 2. Subjects
  await Subject.insertMany(studentData.subjects);
  console.log("Migrated Subjects");

  // 3. ClassSchedules
  await ClassSchedule.insertMany(studentData.classSchedule);
  console.log("Migrated ClassSchedules");

  // 4. Submissions (Student Data)
  const studentSubmissions = studentData.assignments
    .filter(a => a.submitted)
    .map(a => ({
      subject: a.subject,
      title: a.title,
      due: a.due,
      points: a.points,
      submitted: a.submitted,
      status: a.status,
      action: a.action,
    }));
  await Submission.insertMany(studentSubmissions);
  console.log("Migrated Submissions");

  // 5. Feedback
  await Feedback.insertMany(teacherData.feedback || []);
  console.log("Migrated Feedback");

  // 6. Notices / Announcements
  const notices = adminData.announcements.map(a => ({
    title: typeof a === 'string' ? a : a.title,
    content: typeof a === 'string' ? a : a.title,
  }));
  await Notice.insertMany(notices);
  console.log("Migrated Notices");

  // 7. Badges
  await Badge.insertMany(studentData.badges);
  console.log("Migrated Badges");

  console.log("Migration Complete!");
  process.exit(0);
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
