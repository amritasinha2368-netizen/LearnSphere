import mongoose from 'mongoose';

const codingQuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  difficulty: { type: String, default: "Medium" },
  timeLimit: { type: Number, default: 2000 },
  testCases: [{
    input: String,
    expectedOutput: String,
    isHidden: { type: Boolean, default: true }
  }]
});

export default mongoose.models.CodingQuestion || mongoose.model("CodingQuestion", codingQuestionSchema);
