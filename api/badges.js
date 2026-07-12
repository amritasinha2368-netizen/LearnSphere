import connectToDatabase from '../src/lib/mongodb.js';
import Badge from '../src/models/Badge.js';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    if (req.method === 'GET') {
      const items = await Badge.find({}).sort({ createdAt: -1 });
      const formatted = items.map(t => {
        const doc = t.toObject();
        doc.id = doc._id.toString();
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      const item = await Badge.create(data);
      const doc = item.toObject();
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Badges API Error:", error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
