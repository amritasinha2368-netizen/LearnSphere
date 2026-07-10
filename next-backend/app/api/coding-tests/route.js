import { NextResponse } from 'next/server';
import connectToDatabase from '../../../src/lib/mongodb';
import CodingTest from '../../../src/models/CodingTest';

export async function GET() {
  try {
    await connectToDatabase();
    const tests = await CodingTest.find({}).populate('questions').sort({ createdAt: -1 });
    
    const formatted = tests.map(t => {
      const doc = t.toObject();
      doc.id = doc._id.toString();
      if (doc.questions) {
        doc.questions = doc.questions.map(q => {
          q.id = q._id ? q._id.toString() : q.id;
          return q;
        });
      }
      return doc;
    });

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Database GET Error:", error);
    return NextResponse.json({ error: 'Failed to load coding tests' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    
    const test = await CodingTest.create({
      title: data.title,
      subject: data.subject,
      dueDate: new Date(data.dueDate),
      imageUrl: data.imageUrl || "",
      questions: data.questions
    });

    const doc = test.toObject();
    doc.id = doc._id.toString();
    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    console.error("Database POST Error:", err);
    return NextResponse.json({ error: "Failed to save test" }, { status: 500 });
  }
}
