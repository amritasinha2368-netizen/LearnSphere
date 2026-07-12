import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: String },
  progress: { type: Number },
  grade: { type: Number },
  nextClass: { type: String },
  option: { type: String },
  section: { type: String },
  enrolled: { type: Number },
  contentReady: { type: Number },
  submitted: { type: Number },
  assignments: { type: Number }
}, { timestamps: true });

export default mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
