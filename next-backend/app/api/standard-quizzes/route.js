import { NextResponse } from 'next/server';
import connectToDatabase from '../../../src/lib/mongodb';
import StandardQuiz from '../../../src/models/StandardQuiz';

export async function GET() {
  try {
    await connectToDatabase();
    const tests = await StandardQuiz.find({}).sort({ createdAt: -1 });
    
    const formatted = tests.map(t => {
      const doc = t.toObject();
      doc.id = doc._id.toString();
      return doc;
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Database GET Error:", error);
    return NextResponse.json({ error: 'Failed to load quizzes' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    const test = await StandardQuiz.create({
      title: data.title,
      publishTime: new Date(data.startTime),
      endTime: new Date(data.endTime),
      durationMinutes: data.durationMinutes,
      questions: data.questions
    });

    const doc = test.toObject();
    doc.id = doc._id.toString();
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Database POST Error:", err);
    return NextResponse.json({ error: "Failed to save quiz" }, { status: 500 });
  }
}
