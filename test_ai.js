import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function test() {
  const apiKey = process.env.GEMINI_API_KEY;
  const prompt = `You are an expert programming judge.
Respond EXACTLY in this JSON format (no markdown blocks, just raw JSON):
{
  "verdict": "Accepted",
  "feedback": "All test cases passed"
}`;
  try {
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
    const aiData = await aiRes.json();
    console.log("Raw Response:", JSON.stringify(aiData, null, 2));
    const responseText = aiData.candidates[0].content.parts[0].text;
    console.log("Text:", responseText);
    const parsed = JSON.parse(responseText);
    console.log("Parsed:", parsed);
  } catch (err) {
    console.error("Error:", err);
  }
}
test();
