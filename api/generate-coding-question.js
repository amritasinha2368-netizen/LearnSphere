export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Method not allowed" });

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is missing in environment variables." });
    }

    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const systemInstruction = `You are an expert computer science professor. Generate a coding algorithmic problem based on the user's prompt.
You MUST respond with ONLY a valid JSON object. Do not wrap it in markdown blockquotes like \`\`\`json.
Schema:
{
  "title": "String - The problem title",
  "description": "String - Detailed problem description including constraints and examples. DO NOT use markdown symbols like #, *, or \`. Use plain text only, with \\n\\n for paragraphs.",
  "difficulty": "String - Easy, Medium, or Hard",
  "timeLimit": 2000,
  "testCases": [
    {
      "input": "String - Strictly formatted input (e.g. '5\\n1 2 3')",
      "expectedOutput": "String - Strictly formatted expected output",
      "isHidden": true/false
    }
  ]
}
Ensure there are at least 4 test cases, with at least 2 hidden ones. Input format must be strict standard input compatible.`;
    
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`;
    
    const geminiPayload = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    };

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiPayload)
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API Error:", errText);
      return res.status(500).json({ error: "Gemini API request failed.", details: errText });
    }

    const geminiData = await geminiRes.json();
    const parts = geminiData.candidates?.[0]?.content?.parts || [];
    const textPart = parts.find(p => !p.thought) || parts[parts.length - 1];
    let textOutput = textPart?.text;
    
    if (textOutput) {
      textOutput = textOutput.replace(/^```json/i, '').replace(/^```/i, '').replace(/```$/i, '').trim();
    }
    
    if (!textOutput) {
       return res.status(500).json({ error: "No text returned from Gemini." });
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(textOutput);
      if (parsedResult.description) {
        parsedResult.description = parsedResult.description.replace(/[#*`]/g, '');
      }
    } catch (e) {
      console.error("Failed to parse JSON:", textOutput);
      return res.status(500).json({ error: "Failed to parse JSON from AI response." });
    }

    return res.status(200).json(parsedResult);
  } catch (err) {
    console.error("Error in generate-coding-question:", err);
    return res.status(500).json({ error: err.message });
  }
}
