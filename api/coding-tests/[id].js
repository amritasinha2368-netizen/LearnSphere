import connectToDatabase from '../../src/lib/mongodb.js';
import CodingTest from '../../src/models/CodingTest.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;
    
    if (req.method === 'DELETE') {
      const deletedTest = await CodingTest.findByIdAndDelete(id);
      if (!deletedTest) {
        return res.status(404).json({ error: "Coding test not found" });
      }
      return res.status(200).json({ success: true, message: "Coding test deleted successfully" });
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Delete Coding Test Error:", error);
    return res.status(500).json({ error: 'Failed to delete coding test' });
  }
}
