import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema({
  emoji: { type: String },
  name: { type: String, required: true },
  detail: { type: String },
  earned: { type: Boolean, default: false },
  progress: { type: Number },
  current: { type: String },
  unlockRule: { type: String },
  nextStep: { type: String }
}, { timestamps: true });

export default mongoose.models.Badge || mongoose.model("Badge", badgeSchema);
