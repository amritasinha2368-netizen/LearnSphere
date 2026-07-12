import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  cohort: { type: String },
  mentor: { type: String },
  department: { type: String },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);
