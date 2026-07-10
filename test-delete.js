import connectToDatabase from './src/lib/mongodb.js';
import CodingTest from './src/models/CodingTest.js';
async function run() {
  await connectToDatabase();
  console.log("Connected");
  try {
    const deletedTest = await CodingTest.findByIdAndDelete("668c12345678901234567890");
    console.log(deletedTest);
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
}
run();
