import connectToDatabase from '../../../src/lib/mongodb.js';
import Assignment from '../../../src/models/Assignment.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    if (req.method === 'DELETE') {
      const deletedAssignment = await Assignment.findByIdAndDelete(id);
      if (!deletedAssignment) {
        return res.status(404).json({ error: "Assignment not found" });
      }
      return res.status(200).json({ success: true, message: "Assignment deleted successfully" });
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Delete Assignment Error:", error);
    return res.status(500).json({ error: 'Failed to delete assignment' });
  }
}
