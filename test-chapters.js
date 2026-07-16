import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const subjectSchema = new mongoose.Schema({
  title: String,
  chapters: [{
    title: String,
    materials: [{
      title: String,
      url: String,
      type: { type: String },
      addedBy: String
    }]
  }]
}, { timestamps: true });

const Subject = mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  const sub = new Subject({ title: "Test Subject" });
  sub.chapters.push({ title: "Test Chapter", materials: [] });
  await sub.save();
  
  const chapterId = sub.chapters[0]._id.toString();
  
  // Now add material
  const chapter = sub.chapters.id(chapterId);
  chapter.materials.push({
    title: "Test Material",
    url: "https://example.com",
    type: "link",
    addedBy: "Teacher"
  });
  sub.markModified('chapters');
  await sub.save();
  
  console.log("After save:", JSON.stringify(sub.chapters[0].materials, null, 2));
  
  await Subject.deleteOne({ _id: sub._id });
  process.exit(0);
}
run();
