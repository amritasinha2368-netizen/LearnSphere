import connectToDatabase from '../src/lib/mongodb.js';
import StandardQuiz from '../src/models/StandardQuiz.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    if (req.method === 'GET') {
      const tests = await StandardQuiz.find({}).sort({ createdAt: -1 });
      const formatted = tests.map(t => {
        const doc = t.toObject();
        doc.id = doc._id.toString();
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      const test = await StandardQuiz.create({
        title: data.title,
        publishTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        durationMinutes: data.durationMinutes,
        questions: data.questions
      });
      const doc = test.toObject();
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Standard Quizzes API Error:", error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
