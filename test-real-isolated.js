import connectToDatabase from './src/lib/mongodb.js';
import CodingTest from './src/models/CodingTest.js';
async function run() {
  await connectToDatabase();
  try {
    const res = await CodingTest.findByIdAndDelete("6a51075ee594972a5eadfbfc");
    console.log("Success:", !!res);
  } catch (e) {
    console.error("Crash!", e);
  }
  process.exit(0);
}
run();
