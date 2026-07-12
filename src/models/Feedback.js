import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  title: { type: String },
  subject: { type: String },
  content: { type: String },
  text: { type: String },
  score: { type: Number },
  date: { type: Date, default: Date.now },
  status: { type: String }
}, { timestamps: true });

export default mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);
