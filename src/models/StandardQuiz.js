import mongoose from 'mongoose';

const standardQuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  publishTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  durationMinutes: { type: Number, required: true },
  questions: [{ type: mongoose.Schema.Types.Mixed }],
}, { timestamps: true });

export default mongoose.models.StandardQuiz || mongoose.model("StandardQuiz", standardQuizSchema);
