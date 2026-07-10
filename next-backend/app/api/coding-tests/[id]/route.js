import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../src/lib/mongodb';
import CodingTest from '../../../../src/models/CodingTest';

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;
    
    await CodingTest.findByIdAndDelete(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database DELETE Error:", error);
    return NextResponse.json({ error: 'Failed to delete coding test' }, { status: 500 });
  }
}
