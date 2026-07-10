import connectToDatabase from '../src/lib/mongodb.js';
import CodingTest from '../src/models/CodingTest.js';
import CodingQuestion from '../src/models/CodingQuestion.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    // Ensure the models are registered in Mongoose
    CodingQuestion.init();
    
    if (req.method === 'GET') {
      const tests = await CodingTest.find({}).populate('questions').sort({ createdAt: -1 });
      const formatted = tests.map(t => {
        const doc = t.toObject();
        doc.id = doc._id.toString();
        if (doc.questions) {
          doc.questions = doc.questions.map(q => {
            q.id = q._id ? q._id.toString() : q.id;
            return q;
          });
        }
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      const test = await CodingTest.create({
        title: data.title,
        subject: data.subject,
        dueDate: new Date(data.dueDate),
        imageUrl: data.imageUrl || "",
        questions: data.questions
      });
      const doc = test.toObject();
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Coding Tests API Error:", error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
