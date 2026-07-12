import connectToDatabase from '../src/lib/mongodb.js';
import User from '../src/models/User.js';
import Subject from '../src/models/Subject.js';
import ClassSchedule from '../src/models/ClassSchedule.js';
import Submission from '../src/models/Submission.js';
import Feedback from '../src/models/Feedback.js';
import Notice from '../src/models/Notice.js';
import Badge from '../src/models/Badge.js';
import StandardQuiz from '../src/models/StandardQuiz.js';

const models = {
  users: User,
  subjects: Subject,
  classes: ClassSchedule,
  submissions: Submission,
  feedback: Feedback,
  notices: Notice,
  badges: Badge,
  'standard-quizzes': StandardQuiz
};

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    
    const { type } = req.query;
    if (!type || !models[type]) {
      return res.status(400).json({ error: "Invalid or missing type parameter" });
    }
    
    const Model = models[type];

    if (req.method === 'GET') {
      const items = await Model.find({}).sort({ createdAt: -1 });
      const formatted = items.map(t => {
        const doc = t.toObject ? t.toObject() : t;
        doc.id = doc._id.toString();
        return doc;
      });
      return res.status(200).json(formatted);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      
      let createData = data;
      if (type === 'standard-quizzes') {
        createData = {
          title: data.title,
          publishTime: new Date(data.startTime),
          endTime: new Date(data.endTime),
          durationMinutes: data.durationMinutes,
          questions: data.questions
        };
      }
      
      const item = await Model.create(createData);
      const doc = item.toObject ? item.toObject() : item;
      doc.id = doc._id.toString();
      return res.status(201).json(doc);
    }
    
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error(`LMS Data API Error [${req.query.type}]:`, error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
