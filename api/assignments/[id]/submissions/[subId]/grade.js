import connectToDatabase from '../../../../../src/lib/mongodb.js';
import Assignment from '../../../../../src/models/Assignment.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id, subId } = req.query;
    
    if (req.method === 'POST') {
      const data = req.body;
      const assignment = await Assignment.findById(id);
      
      if (!assignment) {
        return res.status(404).json({ error: "Assignment not found" });
      }

      const sub = assignment.submissions.id(subId);
      if (sub) {
        sub.grade = data.grade;
        sub.feedback = data.feedback;
        await assignment.save();
        return res.status(200).json({ success: true, submission: sub });
      } else {
        return res.status(404).json({ error: "Submission not found" });
      }
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Database Grade Error:", error);
    return res.status(500).json({ error: 'Failed to grade submission' });
  }
}
