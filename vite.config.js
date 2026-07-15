import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";
import dotenv from "dotenv";
import fs from "fs";
import { spawn } from "child_process";
import { tmpdir } from "os";
import { join } from "path";

// Load environment variables directly in the Vite process
dotenv.config({ path: '.env.local' });

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Mongoose Models
const submissionSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  fileUrl: { type: String, default: "" },
  note: { type: String, default: "" },
  feedback: { type: String, default: "" },
  grade: { type: String, default: "" },
  date: { type: Date, default: Date.now }
});

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  dueDate: { type: Date, required: true },
  maxMarks: { type: Number, required: true },
  fileUrl: { type: String, default: "" },
  contentBody: { type: String, default: "" },
  status: { type: String, default: "Published" },
  submissions: [submissionSchema]
}, { timestamps: true });

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

const codingTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  subject: { type: String, required: true },
  imageUrl: { type: String, default: "" },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CodingQuestion' }],
  submissions: [{
    studentName: String,
    score: Number,
    verdicts: [{ questionId: String, verdict: String }],
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const standardQuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  publishTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  durationMinutes: { type: Number, required: true },
  questions: [{ type: String }], // Array of string question IDs from questionsData.js
}, { timestamps: true });


// A custom Vite plugin to act as a full Node.js backend!
const apiBackendPlugin = () => {
  let isConnected = false;

  const connectDB = async () => {
    if (isConnected || !process.env.MONGODB_URI) return;
    try {
      const opts = { bufferCommands: false };
      if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
      if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
      if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;
      await mongoose.connect(process.env.MONGODB_URI, opts);
      isConnected = true;
      console.log("Vite Native Backend: Connected to MongoDB!");
    } catch (err) {
      console.error("Vite Native Backend: MongoDB connection error:", err);
    }
  };

  return {
    name: 'api-backend',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith('/api')) return next();

        await connectDB();
        const Assignment = mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);
        const CodingQuestion = mongoose.models.CodingQuestion || mongoose.model("CodingQuestion", codingQuestionSchema);
        const CodingTest = mongoose.models.CodingTest || mongoose.model("CodingTest", codingTestSchema);
        const StandardQuiz = mongoose.models.StandardQuiz || mongoose.model("StandardQuiz", standardQuizSchema);

        res.setHeader('Content-Type', 'application/json');

        try {
          // Cloudinary Upload
          if (req.url === '/api/upload' && req.method === 'POST') {
            const form = formidable({});
            form.parse(req, async (err, fields, files) => {
              if (err) {
                res.statusCode = 500;
                return res.end(JSON.stringify({ error: "File parse error" }));
              }
              const fileArray = Array.isArray(files.file) ? files.file : [files.file];
              const file = fileArray[0];
              if (!file) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ error: "No file provided" }));
              }
              
              const uploadResult = await cloudinary.uploader.upload(file.filepath, { folder: 'lms-uploads' });
              res.statusCode = 200;
              res.end(JSON.stringify({ fileUrl: uploadResult.secure_url }));
            });
            return;
          }

          // GET Assignments
          if (req.url === '/api/assignments' && req.method === 'GET') {
            const assignments = await Assignment.find({}).sort({ createdAt: -1 });
            const formatted = assignments.map(a => {
              const doc = a.toObject();
              doc.id = doc._id.toString();
              return doc;
            });
            res.end(JSON.stringify(formatted));
            return;
          }
          
          // POST Assignment
          if (req.url === '/api/assignments' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              const payload = JSON.parse(body);
              const newAssignment = await Assignment.create({
                title: payload.title,
                subject: payload.subject,
                dueDate: new Date(payload.dueDate),
                maxMarks: payload.maxMarks || 100,
                fileUrl: payload.fileUrl || "",
                contentBody: payload.contentBody || ""
              });
              const doc = newAssignment.toObject();
              doc.id = doc._id.toString();
              res.statusCode = 201;
              res.end(JSON.stringify(doc));
            });
            return;
          }

          // POST Grade Submission
          const gradeMatch = req.url.match(/^\/api\/assignments\/([^/]+)\/submissions\/([^/]+)\/grade$/);
          if (gradeMatch && req.method === 'POST') {
            const assignmentId = gradeMatch[1];
            const submissionId = gradeMatch[2];
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);
                const assignment = await Assignment.findById(assignmentId);
                if (!assignment) {
                  res.statusCode = 404;
                  return res.end(JSON.stringify({ error: "Assignment not found" }));
                }
                const sub = assignment.submissions.id(submissionId);
                if (!sub) {
                  res.statusCode = 404;
                  return res.end(JSON.stringify({ error: "Submission not found" }));
                }
                if (data.feedback !== undefined) sub.feedback = data.feedback;
                if (data.grade !== undefined) sub.grade = data.grade;
                await assignment.save();
                res.statusCode = 200;
                res.end(JSON.stringify({ message: "Submission graded" }));
              } catch(e) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }
          
          // POST Submission
          const submitMatch = req.url.match(/^\/api\/assignments\/(.+)\/submit$/);
          if (submitMatch && req.method === 'POST') {
            const assignmentId = submitMatch[1];
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              const payload = JSON.parse(body);
              const submission = {
                studentId: payload.studentId,
                studentName: payload.studentName,
                fileUrl: payload.fileUrl,
                note: payload.note,
                date: new Date()
              };

              const assignment = await Assignment.findById(assignmentId);
              if (!assignment) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "Not found" }));
              }
              if (Date.now() > new Date(assignment.dueDate).getTime()) {
                res.statusCode = 403;
                return res.end(JSON.stringify({ error: "Deadline has passed. Submission locked." }));
              }

              assignment.submissions.push(submission);
              await assignment.save();

              res.end(JSON.stringify({ success: true }));
            });
            return;
          }

          // DELETE Assignment
          const deleteMatch = req.url.match(/^\/api\/assignments\/(.+)$/);
          if (deleteMatch && req.method === 'DELETE') {
            const assignmentId = deleteMatch[1];
            await Assignment.findByIdAndDelete(assignmentId);
            res.end(JSON.stringify({ success: true }));
            return;
          }

          // GET Coding Questions
          if (req.url === '/api/coding-questions' && req.method === 'GET') {
            const questions = await CodingQuestion.find({}).sort({ createdAt: -1 });
            const formatted = questions.map(q => {
              const doc = q.toObject();
              doc.id = doc._id.toString();
              return doc;
            });
            res.end(JSON.stringify(formatted));
            return;
          }
          
          // POST Coding Questions
          if (req.url === '/api/coding-questions' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const payload = JSON.parse(body);
                const newQuestion = await CodingQuestion.create({
                  title: payload.title,
                  description: payload.description,
                  imageUrl: payload.imageUrl,
                  difficulty: payload.difficulty,
                  timeLimit: payload.timeLimit,
                  testCases: payload.testCases
                });
                const doc = newQuestion.toObject();
                doc.id = doc._id.toString();
                res.statusCode = 201;
                res.end(JSON.stringify(doc));
              } catch(e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }

          // GET Coding Tests
          if (req.url === '/api/coding-tests' && req.method === 'GET') {
            const tests = await CodingTest.find({}).populate('questions').sort({ createdAt: -1 });
            const formatted = tests.map(t => {
              const doc = t.toObject();
              doc.id = doc._id.toString();
              return doc;
            });
            res.end(JSON.stringify(formatted));
            return;
          }

          // POST Coding Test
          if (req.url === '/api/coding-tests' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);
                const test = new CodingTest({
                  title: data.title,
                  subject: data.subject,
                  dueDate: new Date(data.dueDate),
                  imageUrl: data.imageUrl || "",
                  questions: data.questions
                });
                await test.save();
                const doc = test.toObject();
                doc.id = doc._id.toString();
                res.statusCode = 201;
                res.end(JSON.stringify(doc));
              } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }

          // DELETE Coding Test
          const deleteCodingMatch = req.url.match(/^\/api\/coding-tests\/(.+)$/);
          if (deleteCodingMatch && req.method === 'DELETE') {
            const testId = deleteCodingMatch[1];
            await CodingTest.findByIdAndDelete(testId);
            res.end(JSON.stringify({ success: true }));
            return;
          }

          // GET Standard Quizzes
          if (req.url === '/api/standard-quizzes' && req.method === 'GET') {
            const quizzes = await StandardQuiz.find({}).sort({ createdAt: -1 });
            const formatted = quizzes.map(q => {
              const doc = q.toObject();
              doc.id = doc._id.toString();
              return doc;
            });
            res.end(JSON.stringify(formatted));
            return;
          }

          // POST Standard Quizzes
          if (req.url === '/api/standard-quizzes' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const data = JSON.parse(body);
                const quiz = new StandardQuiz({
                  title: data.title,
                  publishTime: new Date(data.startTime),
                  endTime: new Date(data.endTime),
                  durationMinutes: data.durationMinutes,
                  questions: data.questions
                });
                await quiz.save();
                const doc = quiz.toObject();
                doc.id = doc._id.toString();
                res.statusCode = 201;
                res.end(JSON.stringify(doc));
              } catch (e) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: e.message }));
              }
            });
            return;
          }

          // DELETE Standard Quiz
          const deleteQuizMatch = req.url.match(/^\/api\/standard-quizzes\/(.+)$/);
          if (deleteQuizMatch && req.method === 'DELETE') {
            const quizId = deleteQuizMatch[1];
            await StandardQuiz.findByIdAndDelete(quizId);
            res.end(JSON.stringify({ success: true }));
            return;
          }

          // POST Generate Coding Question with Gemini AI
          if (req.url === '/api/generate-coding-question' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const apiKey = process.env.GEMINI_API_KEY;
                if (!apiKey) {
                  res.statusCode = 500;
                  return res.end(JSON.stringify({ error: "GEMINI_API_KEY is missing in environment variables." }));
                }

                const { prompt } = JSON.parse(body);
                if (!prompt) {
                  res.statusCode = 400;
                  return res.end(JSON.stringify({ error: "Prompt is required." }));
                }

                const systemInstruction = `You are an expert computer science professor. Generate a coding algorithmic problem based on the user's prompt.
You MUST respond with ONLY a valid JSON object. Do not wrap it in markdown blockquotes like \`\`\`json.
Schema:
{
  "title": "String - The problem title",
  "description": "String - Detailed problem description including constraints and examples. DO NOT use markdown symbols like #, *, or \`. Use plain text only, with \\n\\n for paragraphs.",
  "difficulty": "String - Easy, Medium, or Hard",
  "timeLimit": 2000,
  "testCases": [
    {
      "input": "String - Strictly formatted input (e.g. '5\\n1 2 3')",
      "expectedOutput": "String - Strictly formatted expected output",
      "isHidden": true/false
    }
  ]
}
Ensure there are at least 4 test cases, with at least 2 hidden ones. Input format must be strict standard input compatible.`;
                const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key=${apiKey}`;
                
                const geminiPayload = {
                  systemInstruction: { parts: [{ text: systemInstruction }] },
                  contents: [{ parts: [{ text: prompt }] }],
                  generationConfig: {
                    responseMimeType: "application/json"
                  }
                };

                const geminiRes = await fetch(geminiUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(geminiPayload)
                });

                if (!geminiRes.ok) {
                  const errText = await geminiRes.text();
                  console.error("Gemini API Error:", errText);
                  res.statusCode = 500;
                  return res.end(JSON.stringify({ error: "Gemini API request failed.", details: errText }));
                }

                const geminiData = await geminiRes.json();
                const parts = geminiData.candidates?.[0]?.content?.parts || [];
                const textPart = parts.find(p => !p.thought) || parts[parts.length - 1];
                let textOutput = textPart?.text;
                
                // Strip markdown backticks if present
                if (textOutput) {
                  textOutput = textOutput.replace(/^```json/i, '').replace(/^```/i, '').replace(/```$/i, '').trim();
                }
                
                if (!textOutput) {
                   res.statusCode = 500;
                   return res.end(JSON.stringify({ error: "No text returned from Gemini." }));
                }

                let parsedResult;
                try {
                  parsedResult = JSON.parse(textOutput);
                  // Sanitize markdown from description to ensure UI looks clean
                  if (parsedResult.description) {
                    parsedResult.description = parsedResult.description.replace(/[#*`]/g, '');
                  }
                } catch (e) {
                  res.statusCode = 500;
                  console.error("Failed to parse JSON:", textOutput);
                  return res.end(JSON.stringify({ error: "Failed to parse JSON from AI response." }));
                }

                res.statusCode = 200;
                res.end(JSON.stringify(parsedResult));
              } catch (err) {
                console.error("Error in generate-coding-question:", err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }

          // POST Execute Code (Piston API proxy)
          if (req.url === '/api/execute-code' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', async () => {
              try {
                const { questionId, language, code } = JSON.parse(body);
                const question = await CodingQuestion.findById(questionId);
                if (!question) {
                  res.statusCode = 404;
                  return res.end(JSON.stringify({ error: "Question not found" }));
                }

                const apiKey = process.env.GEMINI_API_KEY;
                let verdict = "Wrong Answer";
                let feedback = "Failed to evaluate code.";

                if (!apiKey) {
                  res.statusCode = 500;
                  return res.end(JSON.stringify({ error: "Gemini API key not configured." }));
                }

                try {
                  const prompt = `You are an expert programming judge (like LeetCode).
Evaluate the following student submission for the problem below.

Problem Title: ${question.title}
Problem Description:
${question.description}

Student Code (${language}):
\`\`\`${language}
${code}
\`\`\`

Determine if the code correctly solves the problem, is optimal, and is free of syntax/runtime errors.
If the code is incomplete (e.g. just a class stub without implementation) or empty, it is a Wrong Answer.
Respond EXACTLY in this JSON format (no markdown blocks, just raw JSON):
{
  "verdict": "Accepted" | "Wrong Answer" | "Runtime Error" | "Compilation Error",
  "feedback": "A very brief 1-2 sentence explanation of what is wrong (or 'All test cases passed' if correct)."
}`;

                  const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      contents: [{ parts: [{ text: prompt }] }],
                      generationConfig: {
                        temperature: 0.1,
                        response_mime_type: "application/json"
                      }
                    })
                  });

                  if (aiRes.ok) {
                    const aiData = await aiRes.json();
                    const responseText = aiData.candidates[0].content.parts[0].text;
                    const parsed = JSON.parse(responseText);
                    verdict = parsed.verdict || "Wrong Answer";
                    feedback = parsed.feedback || "Feedback parsing failed.";
                  } else {
                    feedback = "AI evaluation service unavailable.";
                  }
                } catch (err) {
                  console.error("AI Evaluation error:", err);
                  feedback = "AI Evaluation encountered an error.";
                }

                const allPassed = verdict === "Accepted";
                const results = [];

                for (let i = 0; i < question.testCases.length; i++) {
                  const tc = question.testCases[i];
                  
                  let tcPassed = allPassed;
                  let tcError = allPassed ? "" : feedback;
                  let output = allPassed ? tc.expectedOutput.replace(/\r/g, '').trim() : feedback;

                  results.push({
                    testCaseIndex: i,
                    passed: tcPassed,
                    expected: tc.expectedOutput.replace(/\r/g, '').trim(),
                    output: output,
                    error: tcError,
                    isHidden: tc.isHidden
                  });
                }
                
                let finalVerdict = verdict;
                if (!allPassed && finalVerdict === "Accepted") {
                   finalVerdict = "Wrong Answer";
                }
                
                res.end(JSON.stringify({ 
                  verdict: finalVerdict,
                  results: results.map(r => r.isHidden ? { passed: r.passed, error: r.error, isHidden: true } : r)
                }));
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
            return;
          }

          // Unmatched API route
          res.statusCode = 404;
          res.end(JSON.stringify({ error: "Route not found" }));
        } catch (e) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    }
  };
};

export default defineConfig({
  plugins: [react(), apiBackendPlugin()],
});
