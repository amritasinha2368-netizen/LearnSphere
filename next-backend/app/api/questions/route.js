import { NextResponse } from 'next/server';
import { questionsData } from '../../../src/data/questionsData.js';

export async function GET() {
  return NextResponse.json(questionsData);
}
