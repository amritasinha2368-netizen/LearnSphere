import { NextResponse } from 'next/server';
import connectToDatabase from '../../../src/lib/mongodb';
import CodingQuestion from '../../../src/models/CodingQuestion';

export async function GET() {
  try {
    await connectToDatabase();
    const questions = await CodingQuestion.find({}).sort({ _id: -1 });
    
    const formatted = questions.map(q => {
      const doc = q.toObject();
      doc.id = doc._id.toString();
      return doc;
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Database GET Error:", error);
    return NextResponse.json({ error: 'Failed to load coding questions' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const payload = await request.json();
    
    const newQuestion = await CodingQuestion.create({
      title: payload.title,
      description: payload.description,
      imageUrl: payload.imageUrl || "",
      difficulty: payload.difficulty || "Medium",
      timeLimit: payload.timeLimit || 2000,
      testCases: payload.testCases || []
    });

    const doc = newQuestion.toObject();
    doc.id = doc._id.toString();
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Database POST Error:", err);
    return NextResponse.json({ error: "Failed to save coding question" }, { status: 500 });
  }
}
