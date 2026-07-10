import { NextResponse } from 'next/server';
import connectToDatabase from '../../../src/lib/mongodb';
import Assignment from '../../../src/models/Assignment';

export async function GET() {
  try {
    await connectToDatabase();
    const assignments = await Assignment.find({}).sort({ createdAt: -1 });
    
    const formattedAssignments = assignments.map(a => {
      const doc = a.toObject();
      doc.id = doc._id.toString();
      delete doc._id;
      delete doc.__v;
      return doc;
    });

    return NextResponse.json(formattedAssignments);
  } catch (error) {
    console.error("Database GET Error:", error);
    return NextResponse.json({ error: 'Failed to load assignments' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const payload = await request.json();
    
    const newAssignment = await Assignment.create({
      title: payload.title,
      subject: payload.subject,
      due: payload.due,
      maxMarks: payload.maxMarks || 100,
      fileUrl: payload.fileUrl || "",
      contentBody: payload.contentBody || ""
    });

    const doc = newAssignment.toObject();
    doc.id = doc._id.toString();
    
    return NextResponse.json(doc, { status: 201 });
  } catch (error) {
    console.error("Database POST Error:", error);
    return NextResponse.json({ error: 'Failed to create assignment' }, { status: 500 });
  }
}
