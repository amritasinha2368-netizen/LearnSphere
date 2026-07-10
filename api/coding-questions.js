import connectToDatabase from '../src/lib/mongodb.js';
import CodingQuestion from '../src/models/CodingQuestion.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    if (req.method === 'GET') {
      const questions = await CodingQuestion.find({}).sort({ _id: -1 });
      const formatted = questions.map(q => {
        const doc = q.toObject();
        doc.id = doc._id.toString();
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const payload = req.body;
      const newQuestion = await CodingQuestion.create({
        title: payload.title,
        description: payload.description,
        imageUrl: payload.imageUrl || "",
        difficulty: payload.difficulty || "Medium",
        timeLimit: payload.timeLimit || 2000,
        testCases: payload.testCases || []
      });
      const doc = newQuestion.toObject();
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Coding Questions API Error:", error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
