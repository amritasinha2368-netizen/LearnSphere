import { useState, useRef, useEffect } from "react";
import { CheckCircle2, X, UploadCloud, FileImage, Loader2 } from "lucide-react";
import { uploadFileToCloud } from "../services/cloudStorage.js";

export default function ActionModal({ action, onClose, onSubmit }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadedCloudUrl, setUploadedCloudUrl] = useState(null);
  
  // Controlled inputs
  const [noteText, setNoteText] = useState("");
  const [writeTitle, setWriteTitle] = useState("");
  const [writeBody, setWriteBody] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [subject, setSubject] = useState("");
  const [maxMarks, setMaxMarks] = useState(100);
  
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");
  
  // New States for Classes and Subjects
  const [classTitle, setClassTitle] = useState("");
  const [classTime, setClassTime] = useState("");
  const [classRoom, setClassRoom] = useState("");
  
  const [subjectSection, setSubjectSection] = useState("");
  const [subjectInstructor, setSubjectInstructor] = useState("");
  
  // User Fields
  const [userEmail, setUserEmail] = useState("");
  const [userParentName, setUserParentName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  
  const [teacherName, setTeacherName] = useState("");
  
  const [codingQuestions, setCodingQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  
  // Custom Coding Question State
  const [newQTitle, setNewQTitle] = useState("");
  const [newQDesc, setNewQDesc] = useState("");
  const [newQDiff, setNewQDiff] = useState("Easy");
  const [newQTimeLimit, setNewQTimeLimit] = useState(2000);
  const [newQTestCases, setNewQTestCases] = useState([{ input: "", expectedOutput: "", isHidden: false }]);
  const [publishImmediately, setPublishImmediately] = useState(false);
  
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateAI = async () => {
    if (!aiPrompt) return;
    setIsGenerating(true);
    try {
      const res = await fetch('/api/generate-coding-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: aiPrompt })
      });
      const data = await res.json();
      if (res.ok) {
        setNewQTitle(data.title || "");
        setNewQDesc(data.description || "");
        setNewQDiff(data.difficulty || "Medium");
        setNewQTimeLimit(data.timeLimit || 2000);
        if (data.testCases && data.testCases.length > 0) {
          setNewQTestCases(data.testCases);
        }
        setAiPrompt("");
      } else {
        alert("AI Generation failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Error calling AI API.");
    } finally {
      setIsGenerating(false);
    }
  };

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!action) {
      setFile(null);
      setPreviewUrl(null);
      setUploadProgress(0);
      setUploadStatus("idle");
      setUploadedCloudUrl(null);
      setNoteText("");
      setWriteTitle("");
      setWriteBody("");
      setDueDate("");
      setDueTime("");
      setSubject("");
      setMaxMarks(100);
      setSelectedQuestions([]);
      setPublishImmediately(false);
      setGrade("");
      setFeedback("");
      setClassTitle("");
      setClassTime("");
      setClassRoom("");
      setSubjectSection("");
      setSubjectInstructor("");
      setTeacherName("");
    } else if (action) {
      if (action.prefill) {
        if (action.prefill.status) setGrade(action.prefill.status);
        if (action.prefill.title) setClassTitle(action.prefill.title);
        if (action.prefill.time) setClassTime(action.prefill.time);
        if (action.prefill.room) setClassRoom(action.prefill.room);
        if (action.prefill.feedback) setFeedback(action.prefill.feedback);
      }
      if (action.subjectContext) setSubject(action.subjectContext);
    }
  }, [action]);


  if (!action) return null;

  function handleFileDrop(e) {
    e.preventDefault();
    if (uploadStatus === "uploading" || uploadStatus === "success") return;
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  }

  function handleFileSelect(e) {
    if (uploadStatus === "uploading" || uploadStatus === "success") return;
    const selectedFile = e.target.files[0];
    if (selectedFile) processFile(selectedFile);
  }

  function processFile(selectedFile) {
    setFile(selectedFile);
    setUploadStatus("idle");
    setUploadProgress(0);
    setUploadedCloudUrl(null);
    if (selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  }

  async function handleCloudUpload() {
    if (!file || uploadStatus === "uploading") return;
    setUploadStatus("uploading");
    try {
      const url = await uploadFileToCloud(file, (progress) => {
        setUploadProgress(progress);
      });
      setUploadedCloudUrl(url);
      setUploadStatus("success");
    } catch (err) {
      console.error(err);
      setUploadStatus("error");
    }
  }

  function handleDone() {
    if (onSubmit) {
      if (action.type === 'create-coding-question') {
        onSubmit({
          actionType: action.type,
          title: newQTitle,
          description: newQDesc,
          imageUrl: uploadedCloudUrl,
          difficulty: newQDiff,
          timeLimit: newQTimeLimit,
          testCases: newQTestCases,
          publishImmediately: true,
          dueDate,
          dueTime,
          subject
        });
      } else if (action.type === 'grade') {
        onSubmit({
          actionType: action.type,
          assignmentId: action.assignmentId,
          submissionId: action.submissionId,
          grade,
          feedback,
        });
      } else if (action.type === 'schedule') {
        onSubmit({
          actionType: action.type,
          title: classTitle,
          time: classTime,
          room: classRoom,
        });
      } else if (action.type === 'create-subject') {
        onSubmit({
          actionType: action.type,
          title: writeTitle,
          section: subjectSection,
          instructor: subjectInstructor,
        });
      } else if (action.type === 'upload-material') {
        onSubmit({
          actionType: action.type,
          title: writeTitle,
          fileUrl: uploadedCloudUrl || noteText, // fallback to link if pasted
          subjectId: action.subjectId
        });
      } else if (action.type === 'send-feedback') {
        onSubmit({
          actionType: action.type,
          teacherName,
          message: noteText,
        });
      } else if (action.type === 'create-user') {
        onSubmit({ 
          actionType: 'create-user', 
          name: writeTitle, 
          role: subject, 
          username: subjectSection, 
          password: subjectInstructor,
          email: userEmail,
          parentName: userParentName,
          mobileNumber: userMobile
        });
      } else if (action.type === 'bulk-create-users') {
        onSubmit({
          actionType: action.type,
          csvData: noteText,
        });
      } else {
        const data = {
          actionType: action.type,
          fileUrl: uploadedCloudUrl,
          note: noteText,
          title: writeTitle,
          body: writeBody,
          dueDate,
          dueTime,
          subject,
          maxMarks,
          selectedQuestions
        };
        onSubmit(data);
      }
    }
    onClose();
  }

  const renderDropzone = () => (
    <div 
      className={`cloud-dropzone ${uploadStatus}`} 
      onDragOver={(e) => e.preventDefault()} 
      onDrop={handleFileDrop}
      onClick={() => uploadStatus === "idle" && fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileSelect} 
        className="hidden-file-input" 
        style={{ display: "none" }}
      />
      
      {uploadStatus === "idle" && !file && (
        <div className="dropzone-prompt">
          <UploadCloud size={32} />
          <strong>Drag & drop file here</strong>
          <span>or click to browse local files</span>
          <em>Supports images, PDFs, and code files</em>
        </div>
      )}

      {uploadStatus === "idle" && file && (
        <div className="dropzone-preview">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="file-preview-img" />
          ) : (
            <FileImage size={40} className="file-preview-icon" />
          )}
          <div className="file-info">
            <strong>{file.name}</strong>
            <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
          </div>
          <button type="button" className="ghost-button upload-trigger-btn" onClick={(e) => { e.stopPropagation(); handleCloudUpload(); }}>
            Upload to Cloud
          </button>
        </div>
      )}

      {uploadStatus === "uploading" && (
        <div className="dropzone-uploading">
          <Loader2 size={32} className="spinning-icon" />
          <strong>Uploading to Cloud Storage...</strong>
          <div className="upload-progress-bar">
            <div className="upload-progress-fill" style={{ width: `${uploadProgress}%` }} />
          </div>
          <span>{Math.round(uploadProgress)}%</span>
        </div>
      )}

      {uploadStatus === "success" && (
        <div className="dropzone-success">
          <CheckCircle2 size={40} className="success-icon" />
          <strong>Upload Complete!</strong>
          <a href={uploadedCloudUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>View File in Cloud</a>
        </div>
      )}
    </div>
  );

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="action-modal" role="dialog" aria-modal="true" aria-labelledby="action-modal-title" onClick={(event) => event.stopPropagation()}>
        <header>
          <div>
            <p className="eyebrow">{action.kicker}</p>
            <h2 id="action-modal-title">{action.title}</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </header>

        {action.description && <p className="modal-description">{action.description}</p>}

        {action.details?.length ? (
          <div className="modal-detail-grid">
            {action.details.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        ) : null}

        {action.materials && action.materials.length > 0 && (
          <div className="action-details" style={{ flexDirection: 'column', gap: '8px', alignItems: 'flex-start', marginTop: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary)', marginBottom: '4px' }}>Study Materials:</span>
            {action.materials.map((m, idx) => (
              <a key={idx} href={m.fileUrl} target="_blank" rel="noreferrer" style={{ background: '#f8fafc', padding: '10px 14px', borderRadius: '6px', fontSize: '14px', color: '#0f172a', display: 'flex', alignItems: 'center', width: '100%', textDecoration: 'none', border: '1px solid #e2e8f0', gap: '8px' }}>
                <FileImage size={18} color="#64748b" />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <strong>{m.title}</strong>
                  <small style={{ color: '#64748b', fontSize: '12px' }}>Added by {m.addedBy}</small>
                </div>
              </a>
            ))}
          </div>
        )}

        {action.type === "upload" && (
          <div className="modal-form">
            <label>
              Note (Optional)
              <textarea 
                rows="3" 
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Any context or remarks about this submission..." 
              />
            </label>
            {renderDropzone()}
          </div>
        )}

        {action.type === "grade" && (
          <div className="modal-form">
            <label>
              Grade (e.g. "10/10", "A+", "Pending")
              <input 
                type="text" 
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                placeholder="Enter a grade..." 
              />
            </label>
            <label>
              Teacher Feedback
              <textarea 
                rows="4" 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Provide constructive feedback for the student..." 
              />
            </label>
          </div>
        )}

        {action.type === "write" && (
          <div className="modal-form write-content-form">
            <label>
              {action.writeTitleLabel || "Content Title"}
              <input 
                type="text" 
                placeholder={action.writeTitlePlaceholder || "Enter title..."} 
                value={writeTitle}
                onChange={(e) => setWriteTitle(e.target.value)}
              />
            </label>
            <div className="date-time-row" style={{ display: "flex", gap: "12px" }}>
              <label style={{ flex: 1 }}>
                Subject
                <input 
                  type="text" 
                  placeholder="e.g. Mathematics"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </label>
              <label style={{ flex: 1 }}>
                Max Marks
                <input 
                  type="number" 
                  value={maxMarks}
                  onChange={(e) => setMaxMarks(e.target.value)}
                  required
                  min="0"
                />
              </label>
            </div>
            <div className="date-time-row" style={{ display: "flex", gap: "12px" }}>
              <label style={{ flex: 1 }}>
                Due Date
                <input 
                  type="date" 
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </label>
              <label style={{ flex: 1 }}>
                Due Time
                <input 
                  type="time" 
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                  required
                />
              </label>
            </div>
            {action.kicker === "Publish assignment" && (
              <>
                <label>Attach File (Optional)</label>
                {renderDropzone()}
              </>
            )}
            <label className="rich-text-label">
              {action.writeBodyLabel || "Content Body"}
              <textarea 
                className="rich-text-area" 
                placeholder={action.writeBodyPlaceholder || "Write your content here..."} 
                rows={8} 
                value={writeBody}
                onChange={(e) => setWriteBody(e.target.value)}
              />
            </label>
          </div>
        )}

        {action.type === "quiz" && (
          <form className="quiz-attempt-form">
            {action.questions?.map((question, questionIndex) => (
              <fieldset className="quiz-question" key={question.prompt}>
                <legend>
                  <span>Question {questionIndex + 1}</span>
                  {question.prompt}
                </legend>
                <div className="quiz-options">
                  {question.options.map((option, optionIndex) => (
                    <label key={option}>
                      <input name={`question-${questionIndex}`} type="radio" required={optionIndex === 0} />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </form>
        )}


        {action.type === "create-coding-question" && (
          <div className="modal-form write-content-form">
            <div style={{ background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', padding: '16px', borderRadius: '8px', border: '1px solid #bae6fd', marginBottom: '16px' }}>
              <label style={{ color: '#0284c7', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
                ✨ Auto-Generate with AI
              </label>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <input 
                  type="text" 
                  placeholder="e.g. A dynamic programming problem about robbing houses..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  style={{ flex: 1, border: '1px solid #7dd3fc', padding: '8px 12px', borderRadius: '6px' }}
                />
                <button 
                  type="button" 
                  onClick={handleGenerateAI}
                  disabled={isGenerating || !aiPrompt}
                  style={{ 
                    background: '#0ea5e9', color: '#fff', border: 'none', padding: '0 16px', borderRadius: '6px', fontWeight: 600, cursor: isGenerating || !aiPrompt ? 'not-allowed' : 'pointer', opacity: isGenerating || !aiPrompt ? 0.7 : 1, display: 'flex', alignItems: 'center', gap: '6px'
                  }}
                >
                  {isGenerating ? <><Loader2 size={16} /> Generating...</> : 'Generate'}
                </button>
              </div>
            </div>

            <label>
              Problem Title
              <input 
                type="text" 
                placeholder="e.g. Reverse Linked List" 
                value={newQTitle}
                onChange={(e) => setNewQTitle(e.target.value)}
              />
            </label>
            <label>
              Full Description
              <textarea 
                placeholder="Explain the problem clearly, including constraints and examples..." 
                value={newQDesc}
                onChange={(e) => setNewQDesc(e.target.value)}
                rows={6}
                style={{ fontFamily: 'inherit', resize: 'vertical' }}
              />
            </label>
            <div className="date-time-row" style={{ display: "flex", gap: "12px" }}>
              <label style={{ flex: 1 }}>
                Difficulty
                <select value={newQDiff} onChange={(e) => setNewQDiff(e.target.value)}>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </label>
              <label style={{ flex: 1 }}>
                Time Limit (ms)
                <input 
                  type="number" 
                  value={newQTimeLimit}
                  onChange={(e) => setNewQTimeLimit(Number(e.target.value))}
                />
              </label>
            </div>
            
            <label className="rich-text-label">
              Test Cases
              <div style={{ maxHeight: '250px', overflowY: 'auto', border: '1px solid var(--line)', borderRadius: '6px', padding: '12px', background: '#f8fbff', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {newQTestCases.map((tc, idx) => (
                  <div key={idx} style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '12px', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ fontSize: '0.85rem' }}>Test Case {idx + 1}</strong>
                      <label style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', margin: 0, fontWeight: 'normal' }}>
                        <input type="checkbox" checked={tc.isHidden} onChange={(e) => {
                          const updated = [...newQTestCases];
                          updated[idx].isHidden = e.target.checked;
                          setNewQTestCases(updated);
                        }} style={{width: 'auto'}} />
                        Hidden Test Case
                      </label>
                    </div>
                    <label style={{ fontSize: '0.8rem', marginBottom: '8px' }}>
                      Input
                      <textarea 
                        rows={2} 
                        value={tc.input} 
                        onChange={(e) => {
                          const updated = [...newQTestCases];
                          updated[idx].input = e.target.value;
                          setNewQTestCases(updated);
                        }} 
                        style={{ fontFamily: 'monospace', fontSize: '0.85rem' }} 
                      />
                    </label>
                    <label style={{ fontSize: '0.8rem', margin: 0 }}>
                      Expected Output
                      <textarea 
                        rows={2} 
                        value={tc.expectedOutput} 
                        onChange={(e) => {
                          const updated = [...newQTestCases];
                          updated[idx].expectedOutput = e.target.value;
                          setNewQTestCases(updated);
                        }} 
                        style={{ fontFamily: 'monospace', fontSize: '0.85rem' }} 
                      />
                    </label>
                  </div>
                ))}
                <button type="button" className="ghost-button" onClick={() => setNewQTestCases([...newQTestCases, { input: "", expectedOutput: "", isHidden: false }])} style={{ alignSelf: 'flex-start' }}>+ Add Test Case</button>
              </div>
            </label>

            <label className="rich-text-label" style={{ marginTop: '16px' }}>
              Optional Context Image
              {renderDropzone()}
            </label>

            <div style={{ padding: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', marginTop: '16px' }}>
              <label style={{ margin: 0, fontWeight: 600, color: '#334155' }}>
                Publish Assessment Due Date
              </label>
              <div className="date-time-row" style={{ display: "flex", gap: "12px", marginTop: '8px' }}>
                <label style={{ flex: 1, margin: 0 }}>
                  Due Date
                  <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                </label>
                <label style={{ flex: 1, margin: 0 }}>
                  Time
                  <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} required />
                </label>
              </div>
            </div>
          </div>
        )}

        {action.type === 'create-user' && (
          <div className="action-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '350px' }}>
            <label>Name<input type="text" value={writeTitle} onChange={(e) => setWriteTitle(e.target.value)} required /></label>
            <label>Role
              <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
                <option value="">Select role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </label>
            <label>Username (ID)<input type="text" value={subjectSection} onChange={(e) => setSubjectSection(e.target.value)} required /></label>
            <label>Password<input type="text" value={subjectInstructor} onChange={(e) => setSubjectInstructor(e.target.value)} required /></label>
            <label>Email ID<input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /></label>
            <label>Parent's Name<input type="text" value={userParentName} onChange={(e) => setUserParentName(e.target.value)} /></label>
            <label>Mobile Number<input type="tel" value={userMobile} onChange={(e) => setUserMobile(e.target.value)} /></label>
          </div>
        )}

        {action.type === 'bulk-create-users' && (
          <div className="action-form" style={{ minWidth: '350px' }}>
            <label>
              Upload CSV File
              <input 
                type="file" 
                accept=".csv"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => setNoteText(event.target.result);
                    reader.readAsText(file);
                  }
                }}
                style={{ marginTop: '8px' }}
                required
              />
            </label>
            {noteText && <p style={{ color: 'var(--success-main)', fontSize: '13px', marginTop: '12px' }}>✓ File loaded successfully</p>}
            <p style={{ fontSize: '12px', color: '#64748b', margin: '8px 0 0 0' }}>
              Format: Name, Role, Username, Password. Ensure each user is on a new line. Supported roles: student, teacher, admin.
            </p>
          </div>
        )}



        {action.type === "schedule" && (
          <div className="modal-form">
            <label>
              Class Topic / Title
              <input value={classTitle} onChange={(e) => setClassTitle(e.target.value)} placeholder="E.g., Data Structures - Trees" />
            </label>
            <label>
              Date and time
              <input value={classTime} onChange={(e) => setClassTime(e.target.value)} placeholder="E.g., 09:30 AM, Monday" />
            </label>
            <label>
              Room or meeting link
              <input value={classRoom} onChange={(e) => setClassRoom(e.target.value)} placeholder="E.g., https://zoom.us/j/12345" />
            </label>
          </div>
        )}

        {action.type === "create-subject" && (
          <div className="modal-form">
            <label>
              Subject Title
              <input value={writeTitle} onChange={(e) => setWriteTitle(e.target.value)} placeholder="E.g., Computer Networks" />
            </label>
            <label>
              Section / Cohort
              <input value={subjectSection} onChange={(e) => setSubjectSection(e.target.value)} placeholder="E.g., CSE 4A" />
            </label>
            <label>
              Instructor Name
              <input value={subjectInstructor} onChange={(e) => setSubjectInstructor(e.target.value)} placeholder="E.g., Dr. Smith" />
            </label>
          </div>
        )}

        {action.type === "upload-material" && (
          <div className="modal-form">
            <label>
              Material Title
              <input value={writeTitle} onChange={(e) => setWriteTitle(e.target.value)} placeholder="E.g., Lecture 4 Slides" />
            </label>
            <label>Upload File</label>
            {renderDropzone()}
            <label>
              Or paste an external link
              <input value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="https://..." />
            </label>
          </div>
        )}

        {action.type === "send-feedback" && (
          <div className="modal-form">
            <label>
              To Teacher
              <input value={teacherName} onChange={(e) => setTeacherName(e.target.value)} placeholder="E.g., Dr. Smith" required />
            </label>
            <label>
              Your Message
              <textarea 
                rows="5" 
                value={noteText} 
                onChange={(e) => setNoteText(e.target.value)} 
                placeholder="Write your feedback or request for help here..." 
                required
              />
            </label>
          </div>
        )}

        {action.type === "marks" && (
          <div className="modal-form">
            <label>
              Marks status
              <input defaultValue={action.prefill?.status || "Ready to publish"} />
            </label>
            <label>
              Feedback note
              <textarea placeholder="Add feedback or publishing remarks" />
            </label>
          </div>
        )}

        <footer>
          <button className="ghost-button" type="button" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="primary-button modal-primary" 
            type="button" 
            onClick={handleDone} 
            disabled={action.type === "upload" && uploadStatus !== "success"}
          >
            <CheckCircle2 size={18} />
            {action.primaryLabel || "Done"}
          </button>
        </footer>
      </section>
    </div>
  );
}
