import connectToDatabase from '../../src/lib/mongodb.js';
import StandardQuiz from '../../src/models/StandardQuiz.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    if (req.method === 'DELETE') {
      const deletedTest = await StandardQuiz.findByIdAndDelete(id);
      if (!deletedTest) {
        return res.status(404).json({ error: "Standard quiz not found" });
      }
      return res.status(200).json({ success: true, message: "Standard quiz deleted successfully" });
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Delete Standard Quiz Error:", error);
    return res.status(500).json({ error: 'Failed to delete standard quiz' });
  }
}
