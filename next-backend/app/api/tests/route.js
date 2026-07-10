import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const TESTS_FILE = path.join(DATA_DIR, 'tests.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export async function GET() {
  try {
    if (fs.existsSync(TESTS_FILE)) {
      const data = fs.readFileSync(TESTS_FILE, 'utf8');
      return NextResponse.json(JSON.parse(data));
    } else {
      return NextResponse.json([]);
    }
  } catch (err) {
    return NextResponse.json({ error: "Failed to read tests" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const newTest = await request.json();
    
    // Validate required fields
    if (!newTest.title || !newTest.questions || !newTest.startTime || !newTest.endTime || !newTest.durationMinutes) {
      return NextResponse.json({ error: "Missing required test fields" }, { status: 400 });
    }

    if (!newTest.id) {
      newTest.id = `test_${Date.now()}`;
    }
    
    let tests = [];
    if (fs.existsSync(TESTS_FILE)) {
      tests = JSON.parse(fs.readFileSync(TESTS_FILE, 'utf8'));
    }
    
    tests.push(newTest);
    fs.writeFileSync(TESTS_FILE, JSON.stringify(tests, null, 2));
    
    return NextResponse.json(newTest, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to save test" }, { status: 500 });
  }
}
