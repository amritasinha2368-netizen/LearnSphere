import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true, // ISO Date string, e.g. "2026-06-15"
  },
  description: {
    type: String,
  },
  type: {
    type: String,
    enum: ['event', 'deadline', 'holiday', 'alert'],
    default: 'event',
  }
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
