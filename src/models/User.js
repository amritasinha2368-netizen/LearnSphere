import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  parentName: { type: String },
  mobileNumber: { type: String },
  cohort: { type: String },
  mentor: { type: String },
  department: { type: String },
  year: { type: String },
  branch: { type: String },
  collegeName: { type: String },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema);
