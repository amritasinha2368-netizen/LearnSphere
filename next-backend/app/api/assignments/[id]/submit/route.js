import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../src/lib/mongodb';
import Assignment from '../../../../src/models/Assignment';

export async function POST(request, { params }) {
  try {
    await connectToDatabase();
    
    // In Next.js 16 app router, params should be awaited if they are dynamic
    const resolvedParams = await params;
    const assignmentId = resolvedParams.id;
    
    const payload = await request.json();

    const submission = {
      studentId: payload.studentId,
      studentName: payload.studentName,
      fileUrl: payload.fileUrl,
      note: payload.note,
      date: new Date()
    };

    const assignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { $push: { submissions: submission } },
      { new: true }
    );

    if (!assignment) {
      return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error("Database Submit Error:", error);
    return NextResponse.json({ error: 'Failed to submit assignment' }, { status: 500 });
  }
}
