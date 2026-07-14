import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import connectToDatabase from './src/lib/mongodb.js';
import Assignment from './src/models/Assignment.js';

async function test() {
  await connectToDatabase();
  const assignments = await Assignment.find({});
  console.log("Assignments:");
  assignments.forEach(a => console.log(`- ${a.title} | fileUrl: ${a.fileUrl || 'NONE'}`));
  process.exit(0);
}
test();
