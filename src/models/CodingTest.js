import mongoose from 'mongoose';

const codingTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  subject: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CodingQuestion' }],
  submissions: [{
    studentName: String,
    score: Number,
    verdicts: [{ questionId: String, verdict: String }],
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.models.CodingTest || mongoose.model("CodingTest", codingTestSchema);
