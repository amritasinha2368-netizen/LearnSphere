import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Assignment from './src/models/Assignment.js';
import http from 'http';

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  // Clean up old
  await Assignment.deleteMany({ title: "Flow Test" });
  
  // 1. Create an assignment directly in DB
  const assn = new Assignment({
    title: "Flow Test",
    subject: "Math",
    dueDate: new Date(),
    maxMarks: 100
  });
  await assn.save();
  const id = assn._id.toString();
  
  // 2. Simulate what StudentDashboard does
  const payload = {
    studentName: "Test Student",
    studentId: "test_std",
    fileUrl: "https://example.com/file",
    note: "Test note"
  };
  
  // Mock the Next.js API handler
  const req = {
    method: 'POST',
    query: { id: id },
    body: payload
  };
  
  const res = {
    status: function(code) {
      this.statusCode = code;
      return this;
    },
    json: function(data) {
      console.log(`Mock response ${this.statusCode}:`, data);
    }
  };
  
  // Call the handler directly
  const submitHandler = (await import('./api/assignments/[id]/submit.js')).default;
  await submitHandler(req, res);
  
  // 3. Verify in DB
  const verify = await Assignment.findById(id);
  console.log("Submissions count in DB:", verify.submissions.length);
  
  // Clean up
  await Assignment.deleteMany({ title: "Flow Test" });
  process.exit(0);
}
run();
