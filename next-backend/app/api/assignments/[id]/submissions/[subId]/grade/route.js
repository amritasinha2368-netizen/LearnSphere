import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../../../../src/lib/mongodb';
import Assignment from '../../../../../../../src/models/Assignment';

export async function POST(request, { params }) {
  try {
    await connectToDatabase();
    
    const resolvedParams = await params;
    const assignmentId = resolvedParams.id;
    const submissionId = resolvedParams.subId;
    
    const data = await request.json();
    const assignment = await Assignment.findById(assignmentId);
    
    if (!assignment) {
      return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
    }

    const sub = assignment.submissions.id(submissionId);
    if (sub) {
      sub.grade = data.grade;
      sub.feedback = data.feedback;
      await assignment.save();
      return NextResponse.json({ success: true, submission: sub });
    } else {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Database Grade Error:", error);
    return NextResponse.json({ error: 'Failed to grade submission' }, { status: 500 });
  }
}
