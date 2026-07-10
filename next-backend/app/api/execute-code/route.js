import { NextResponse } from 'next/server';
import connectToDatabase from '../../../src/lib/mongodb';
import CodingQuestion from '../../../src/models/CodingQuestion';

export async function POST(request) {
  try {
    await connectToDatabase();
    const { questionId, language, code } = await request.json();
    
    const question = await CodingQuestion.findById(questionId);
    if (!question) {
      return NextResponse.json({ error: "Question not found" }, { status: 404 });
    }

    const langMap = {
      'python': { language: 'python', version: '3.10.0' },
      'javascript': { language: 'javascript', version: '18.15.0' },
      'cpp': { language: 'c++', version: '10.2.0' },
      'java': { language: 'java', version: '15.0.2' }
    };
    
    const langData = langMap[language] || langMap['python'];
    let allPassed = true;
    const results = [];

    // Execute remotely using Piston API (Vercel serverless-safe)
    for (let i = 0; i < question.testCases.length; i++) {
      const tc = question.testCases[i];
      
      const pistonPayload = {
        language: langData.language,
        version: langData.version,
        files: [{ content: code }],
        stdin: tc.input || ""
      };

      let output = "";
      let stderr = "";
      
      try {
        const pistonRes = await fetch('https://emkc.org/api/v2/piston/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pistonPayload)
        });
        
        if (pistonRes.ok) {
          const pistonData = await pistonRes.json();
          stderr = pistonData.run?.stderr || "";
          output = (pistonData.run?.stdout || "").trim();
        } else {
          stderr = "Failed to communicate with execution server.";
        }
      } catch (err) {
        stderr = "Execution network error.";
      }

      const expected = tc.expectedOutput.trim();
      
      if (stderr && !output) {
         results.push({ passed: false, error: stderr, expected, output, isHidden: tc.isHidden });
         allPassed = false;
         continue;
      }
      
      const passed = output === expected;
      if (!passed) allPassed = false;
      
      results.push({
        testCaseIndex: i,
        passed,
        expected,
        output,
        isHidden: tc.isHidden
      });
    }
    
    return NextResponse.json({ 
      verdict: allPassed ? "Accepted" : "Wrong Answer",
      results: results.map(r => r.isHidden ? { passed: r.passed, error: r.error, isHidden: true } : r)
    });
  } catch (err) {
    console.error("Execute code error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
