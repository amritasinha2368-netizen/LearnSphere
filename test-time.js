import connectToDatabase from './src/lib/mongodb.js';
import CodingTest from './src/models/CodingTest.js';
async function run() {
  const start = Date.now();
  console.log("Connecting...");
  await connectToDatabase();
  console.log(`Connected in ${Date.now() - start}ms`);
  
  const qStart = Date.now();
  console.log("Querying...");
  await CodingTest.findById("668c12345678901234567890");
  console.log(`Queried in ${Date.now() - qStart}ms`);
  
  process.exit(0);
}
run();
