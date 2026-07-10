import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../src/lib/mongodb';
import StandardQuiz from '../../../../src/models/StandardQuiz';

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    
    await StandardQuiz.findByIdAndDelete(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database DELETE Error:", error);
    return NextResponse.json({ error: 'Failed to delete quiz' }, { status: 500 });
  }
}
