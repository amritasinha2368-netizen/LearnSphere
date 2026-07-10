import connectToDatabase from './src/lib/mongodb.js';
import CodingTest from './src/models/CodingTest.js';
import CodingQuestion from './src/models/CodingQuestion.js';
async function run() {
  await connectToDatabase();
  const q = await CodingQuestion.create({ title: 'T', description: 'T', difficulty: 'Easy', timeLimit: 1 });
  const t = await CodingTest.create({ title: 'T', dueDate: new Date(), subject: 'S', questions: [q._id] });
  console.log("Created test ID:", t._id.toString());
  process.exit(0);
}
run();
