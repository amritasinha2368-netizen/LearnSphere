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

      const cleanExpected = tc.expectedOutput.replace(/\r/g, '').trim();
      const cleanOutput = output.replace(/\r/g, '').trim();
      
      let tcPassed = false;
      let tcError = stderr;

      if (stderr) {
         tcPassed = false;
         allPassed = false;
      } else {
         tcPassed = cleanOutput === cleanExpected;
         if (!tcPassed) allPassed = false;
      }
      
      results.push({
        testCaseIndex: i,
        passed: tcPassed,
        expected: cleanExpected,
        output: cleanOutput,
        error: tcError,
        isHidden: tc.isHidden
      });
    }
    
    // Determine overall verdict
    let finalVerdict = "Accepted";
    if (!allPassed) {
       const hasErrors = results.some(r => r.error && r.error.length > 0);
       finalVerdict = hasErrors ? "Runtime Error" : "Wrong Answer";
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
