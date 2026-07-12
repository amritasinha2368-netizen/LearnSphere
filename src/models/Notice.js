import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String },
  date: { type: Date, default: Date.now },
  content: { type: String },
  priority: { type: String },
  status: { type: String },
  audience: { type: String }
}, { timestamps: true });

export default mongoose.models.Notice || mongoose.model("Notice", noticeSchema);
