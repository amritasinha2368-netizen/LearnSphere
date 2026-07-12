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
  contentReady: { type: Number, default: 0 },
  submitted: { type: Number, default: 0 },
  assignments: { type: Number, default: 0 },
  materials: [{
    title: { type: String },
    fileUrl: { type: String },
    addedBy: { type: String },
    addedAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.models.Subject || mongoose.model("Subject", subjectSchema);
