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

    const langMap = {
      'python': { language: 'python', version: '3.10.0' },
      'javascript': { language: 'javascript', version: '18.15.0' },
      'cpp': { language: 'c++', version: '10.2.0' },
      'java': { language: 'java', version: '15.0.2' }
    };
    
    const langData = langMap[language] || langMap['python'];
    let allPassed = true;
    const results = [];

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
    
    return res.status(200).json({ 
      verdict: allPassed ? "Accepted" : "Wrong Answer",
      results: results.map(r => r.isHidden ? { passed: r.passed, error: r.error, isHidden: true } : r)
    });
  } catch (err) {
    console.error("Execute code error:", err);
    return res.status(500).json({ error: err.message });
  }
}
