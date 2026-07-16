import mongoose from 'mongoose';

const classScheduleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  subject: { type: String },
  topic: { type: String },
  room: { type: String },
  title: { type: String },
  action: { type: String }
}, { timestamps: true });

export default mongoose.models.ClassSchedule || mongoose.model("ClassSchedule", classScheduleSchema);
