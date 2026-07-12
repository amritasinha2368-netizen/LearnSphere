import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  subject: { type: String },
  title: { type: String, required: true },
  due: { type: String },
  points: { type: Number },
  submitted: { type: Boolean, default: false },
  status: { type: String },
  action: { type: String },
  fileUrl: { type: String },
  total: { type: Number },
  pending: { type: Number },
  students: { type: String }
}, { timestamps: true });

export default mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
