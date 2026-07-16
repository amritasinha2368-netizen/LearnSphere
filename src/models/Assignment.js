import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  grade: {
    type: String,
    default: "",
  },
  feedback: {
    type: String,
    default: "",
  }
});

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  maxMarks: {
    type: Number,
    required: true,
  },
  fileUrl: {
    type: String,
    default: "",
  },
  contentBody: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Published",
  },
  submissions: [submissionSchema]
}, { timestamps: true });

// Check if the model is already compiled to avoid overwriting during HMR
const Assignment = mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);

export default Assignment;
