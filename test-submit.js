import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Assignment from './src/models/Assignment.js';

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const assn = new Assignment({
    title: "Test Assignment",
    subject: "Math",
    dueDate: new Date(),
    maxMarks: 100
  });
  await assn.save();
  
  const updated = await Assignment.findByIdAndUpdate(
    assn._id,
    { $push: { submissions: { studentId: "student_1", studentName: "John Doe", fileUrl: "url" } } },
    { new: true }
  );
  
  console.log("Updated submissions:", updated.submissions.length);
  console.log("Submission student name:", updated.submissions[0].studentName);
  
  await Assignment.deleteOne({ _id: assn._id });
  process.exit(0);
}
run();
