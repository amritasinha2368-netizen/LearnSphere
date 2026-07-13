import connectToDatabase from '../src/lib/mongodb.js';
import Assignment from '../src/models/Assignment.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    if (req.method === 'GET') {
      const assignments = await Assignment.find({}).sort({ createdAt: -1 });
      const formatted = assignments.map(a => {
        const doc = a.toObject();
        doc.id = doc._id.toString();
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const payload = req.body;
      const newAssignment = await Assignment.create({
        title: payload.title,
        subject: payload.subject,
        dueDate: new Date(payload.dueDate),
        maxMarks: payload.maxMarks || 100,
        fileUrl: payload.fileUrl || "",
        contentBody: payload.contentBody || ""
      });
      const doc = newAssignment.toObject();
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) return res.status(400).json({ error: "Missing ID" });
      const deleted = await Assignment.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: "Not found" });
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error("Assignments API Error:", error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
