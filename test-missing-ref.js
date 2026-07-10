import connectToDatabase from './src/lib/mongodb.js';
import CodingTest from './src/models/CodingTest.js';
async function run() {
  await connectToDatabase();
  try {
    await CodingTest.findByIdAndDelete("668c12345678901234567890");
    console.log("Success");
  } catch (e) {
    console.error("Error:", e.message);
  }
  process.exit(0);
}
run();
