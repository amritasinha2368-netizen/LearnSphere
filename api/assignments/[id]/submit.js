import connectToDatabase from '../../../src/lib/mongodb.js';
import Assignment from '../../../src/models/Assignment.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query; // Vercel provides dynamic route parameters in req.query
    
    if (req.method === 'POST') {
      const payload = req.body;
      const submission = {
        studentId: payload.studentId,
        studentName: payload.studentName,
        fileUrl: payload.fileUrl,
        note: payload.note,
        date: new Date()
      };

      const assignment = await Assignment.findByIdAndUpdate(
        id,
        { $push: { submissions: submission } },
        { new: true }
      );

      if (!assignment) {
        return res.status(404).json({ error: "Assignment not found" });
      }

      return res.status(200).json({ success: true, submission });
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Database Submit Error:", error);
    return res.status(500).json({ error: 'Failed to submit assignment' });
  }
}
