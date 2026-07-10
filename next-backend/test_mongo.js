import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function testConnection() {
  console.log("Connecting to:", MONGODB_URI);
  try {
    const opts = {
      bufferCommands: false,
    };
    if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
    if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
    if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;

    await mongoose.connect(MONGODB_URI, opts);
    console.log("SUCCESS! Connected to MongoDB.");
    process.exit(0);
  } catch (error) {
    console.error("FAILED TO CONNECT:");
    console.error(error);
    process.exit(1);
  }
}

testConnection();
