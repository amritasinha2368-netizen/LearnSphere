import connectToDatabase from '../src/lib/mongodb.js';
import CodingQuestion from '../src/models/CodingQuestion.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  try {
    await connectToDatabase();
    const { questionId, language, code } = req.body;
    
    const question = await CodingQuestion.findById(questionId);
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    let verdict = "Wrong Answer";
    let feedback = "Failed to evaluate code.";

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API key not configured." });
    }

    try {
      const prompt = `You are an expert programming judge (like LeetCode).
Evaluate the following student submission for the problem below.

Problem Title: ${question.title}
Problem Description:
${question.description}

Student Code (${language}):
\`\`\`${language}
${code}
\`\`\`

Determine if the code correctly solves the problem, is optimal, and is free of syntax/runtime errors.
If the code is incomplete (e.g. just a class stub without implementation) or empty, it is a Wrong Answer.
Respond EXACTLY in this JSON format (no markdown blocks, just raw JSON):
{
  "verdict": "Accepted" | "Wrong Answer" | "Runtime Error" | "Compilation Error",
  "feedback": "A very brief 1-2 sentence explanation of what is wrong (or 'All test cases passed' if correct)."
}`;

      const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            response_mime_type: "application/json"
          }
        })
      });

      if (aiRes.ok) {
        const aiData = await aiRes.json();
        const responseText = aiData.candidates[0].content.parts[0].text;
        const parsed = JSON.parse(responseText);
        verdict = parsed.verdict || "Wrong Answer";
        feedback = parsed.feedback || "Feedback parsing failed.";
      } else {
        feedback = "AI evaluation service unavailable.";
      }
    } catch (err) {
      console.error("AI Evaluation error:", err);
      feedback = "AI Evaluation encountered an error.";
    }

    const allPassed = verdict === "Accepted";
    const results = [];

    for (let i = 0; i < question.testCases.length; i++) {
      const tc = question.testCases[i];
      
      let tcPassed = allPassed;
      let tcError = allPassed ? "" : feedback;
      let output = allPassed ? tc.expectedOutput.replace(/\r/g, '').trim() : feedback;

      results.push({
        testCaseIndex: i,
        passed: tcPassed,
        expected: tc.expectedOutput.replace(/\r/g, '').trim(),
        output: output,
        error: tcError,
        isHidden: tc.isHidden
      });
    }
    
    // Determine overall verdict
    let finalVerdict = verdict;
    if (!allPassed && finalVerdict === "Accepted") {
       finalVerdict = "Wrong Answer";
    }

    return res.status(200).json({ 
      verdict: finalVerdict,
      results: results.map(r => r.isHidden ? { passed: r.passed, error: r.error, isHidden: true } : r)
    });
  } catch (err) {
    console.error("Execute code error:", err);
    return res.status(500).json({ error: err.message });
  }
}
