import React, { useState, useEffect } from 'react';
import { UploadCloud, CheckCircle, Loader2 } from 'lucide-react';
import './TestBuilder.css'; // We can share the CSS for now

let cachedCodingQuestions = [];
let cachedPublishedTests = [];

export default function CodeBuilder({ openCreateCodingQuestion, onPublish, refreshTrigger }) {
  const [codingQuestions, setCodingQuestions] = useState(cachedCodingQuestions);
  const [selectedCodingQuestions, setSelectedCodingQuestions] = useState([]);
  const [codingStep, setCodingStep] = useState(0); // 0: Dashboard (Published), 1: Publish New
  const [codingSubject, setCodingSubject] = useState("Computer Science");
  
  const [testTitle, setTestTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [uploadedCloudUrl, setUploadedCloudUrl] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [publishError, setPublishError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [publishedTests, setPublishedTests] = useState(cachedPublishedTests);

  const fetchQuestionsAndTests = () => {
    fetch('/api/coding-questions')
      .then(res => res.json())
      .then(data => {
        cachedCodingQuestions = data;
        setCodingQuestions(data);
      })
      .catch(err => console.error("Error fetching coding questions:", err));
      
    fetch('/api/coding-tests')
      .then(res => res.json())
      .then(data => {
        cachedPublishedTests = data;
        setPublishedTests(data);
      })
      .catch(err => console.error("Error fetching coding tests:", err));
  };

  useEffect(() => {
    fetchQuestionsAndTests();
  }, [refreshTrigger]);

  const [deletingId, setDeletingId] = useState(null);

  const deletePublishedTest = async (id) => {
    // Optimistic UI Update: Instantly remove from screen
    const previousTests = [...publishedTests];
    setPublishedTests(publishedTests.filter(t => t.id !== id));

    setDeletingId(id);
    try {
      const res = await fetch(`/api/coding-tests?id=${id}`, { method: 'DELETE' });
      if (!res.ok) {
        setPublishedTests(previousTests); // Revert on failure
        alert("Failed to delete. Please try again.");
      } else {
        cachedPublishedTests = cachedPublishedTests.filter(t => t.id !== id);
      }
    } catch (err) {
      setPublishedTests(previousTests);
      console.error(err);
      alert("Network error during deletion.");
    } finally {
      setDeletingId(null);
    }
  };

  const toggleCodingQuestion = (q) => {
    if (selectedCodingQuestions.find(sq => sq._id === q._id)) {
      setSelectedCodingQuestions(selectedCodingQuestions.filter(sq => sq._id !== q._id));
    } else {
      setSelectedCodingQuestions([...selectedCodingQuestions, q]);
    }
  };

  const processFile = async (file) => {
    setUploadStatus("uploading");
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok && data.fileUrl) {
        setUploadedCloudUrl(data.fileUrl);
        setUploadStatus("success");
      } else {
        setUploadStatus("idle");
        setMessage("Upload failed");
      }
    } catch (err) {
      console.error(err);
      setUploadStatus("idle");
      setMessage("Upload error");
    }
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (uploadStatus === "uploading" || uploadStatus === "success") return;
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  };

  const handleCodingPublish = async () => {
    if (!testTitle || !startTime || selectedCodingQuestions.length === 0) {
      setPublishError("Please fill test title, start time, and select at least one question.");
      return;
    }

    setLoading(true);
    setPublishError("");
    setMessage("");

    const isoDate = new Date(startTime).toISOString();
    
    // Optimistic UI Update: Instantly inject dummy card
    const tempTest = {
      id: "temp-" + Date.now(),
      title: testTitle,
      subject: codingSubject,
      dueDate: isoDate,
      questions: selectedCodingQuestions
    };
    setPublishedTests([tempTest, ...publishedTests]);
    
    // Close modal visually right away
    setCodingStep(0);
    setSelectedCodingQuestions([]);
    setTestTitle("");
    setUploadedCloudUrl("");
    setUploadStatus("idle");
    setLoading(true);

    const payload = {
      title: testTitle,
      subject: codingSubject,
      dueDate: isoDate,
      imageUrl: uploadedCloudUrl,
      questions: selectedCodingQuestions.map(q => q._id)
    };



    try {
      const res = await fetch('/api/coding-tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setMessage("Coding Test published successfully!");
        fetchQuestionsAndTests();
        if (onPublish) onPublish();
      } else {
        alert("Failed to publish coding test. Reverting...");
        setPublishedTests(publishedTests.filter(t => t.id !== tempTest.id));
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Reverting...");
      setPublishedTests(publishedTests.filter(t => t.id !== tempTest.id));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-builder">
      <div className="test-builder-header">
        <h2>Code Builder</h2>
        <p>Create AI coding problems and group them into competitive assessments.</p>
        {message && <div className="test-builder-msg">{message}</div>}
      </div>

      <div style={{ marginBottom: '32px' }}>
        <div className="coding-assessment-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="module-card hover-lift" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border: '1px solid #bae6fd', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={openCreateCodingQuestion}>
            <h3 style={{ color: '#0369a1', marginBottom: '8px', fontSize: '1.1rem' }}>✨ Create Coding Question</h3>
            <p style={{ color: '#0c4a6e', margin: 0 }}>Author a new algorithm problem with AI assistance, test cases, and time limits.</p>
          </div>
          <div className="module-card hover-lift" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', border: '1px solid #ddd6fe', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => setCodingStep(1)}>
            <h3 style={{ color: '#6d28d9', marginBottom: '8px', fontSize: '1.1rem' }}>🚀 Publish Coding Test</h3>
            <p style={{ color: '#4c1d95', margin: 0 }}>Group your coding questions into a timed, competitive programming contest.</p>
          </div>
        </div>
      </div>

      {codingStep === 0 && (
        <div className="test-builder-step" style={{ marginTop: '32px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '1.2rem', color: '#1e293b' }}>Published Coding Assignments</h3>
          {publishedTests.length === 0 ? (
            <p style={{ color: '#64748b' }}>No coding assignments published yet.</p>
          ) : (
            <div className="questions-list" style={{ display: 'grid', gap: '12px' }}>
              {publishedTests.map(test => (
                <div key={test.id} className="question-card" style={{ borderLeft: '4px solid #10b981', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{test.title}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Due: {new Date(test.dueDate).toLocaleString()} • {test.questions?.length || 0} questions</span>
                  </div>
                  <button 
                    className="ghost-button" 
                    style={{ color: '#e11d48', padding: '6px 12px' }}
                    onClick={(e) => { e.stopPropagation(); deletePublishedTest(test.id); }}
                    disabled={deletingId === test.id}
                  >
                    {deletingId === test.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {codingStep === 1 && (
        <div className="test-builder-step">
          <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <button className="ghost-button" onClick={() => setCodingStep(0)} style={{ padding: '4px 8px', marginRight: '16px' }}>← Cancel</button>
              <h3 style={{ display: 'inline-block', margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>Publish Coding Test</h3>
            </div>
          </div>

          <div className="settings-panel" style={{ marginBottom: '32px' }}>
            <h3>Assessment Settings</h3>
            <div className="settings-grid">
              <label>
                Assessment Title:
                <input type="text" value={testTitle} onChange={e => setTestTitle(e.target.value)} placeholder="e.g., Midterm Algorithm Challenge" />
              </label>
              <label>
                Subject:
                <input type="text" value={codingSubject} onChange={e => setCodingSubject(e.target.value)} />
              </label>
              <label>
                Due Date & Time:
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
              </label>
              
              <label style={{ gridColumn: 'span 2' }}>
                Test Cover Image (Optional)
                <div 
                  className={`image-dropzone ${dragActive ? 'drag-active' : ''}`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleFileDrop}
                  onClick={() => {
                    if (uploadStatus === "uploading" || uploadStatus === "success") return;
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = (e) => {
                      if (e.target.files[0]) processFile(e.target.files[0]);
                    };
                    input.click();
                  }}
                  style={{
                    border: '2px dashed #94a3b8',
                    borderRadius: '8px',
                    padding: '24px',
                    textAlign: 'center',
                    background: dragActive ? '#f8fafc' : '#ffffff',
                    cursor: uploadStatus === 'idle' ? 'pointer' : 'default',
                    marginTop: '8px'
                  }}
                >
                  {uploadStatus === "idle" && (
                    <>
                      <UploadCloud size={32} color="#64748b" style={{ margin: '0 auto 12px' }} />
                      <p style={{ margin: 0, color: '#475569', fontWeight: 500 }}>Click or drag image to upload</p>
                      <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.85rem' }}>Supports PNG, JPG, GIF up to 5MB</p>
                    </>
                  )}
                  {uploadStatus === "uploading" && (
                    <>
                      <Loader2 size={32} color="#0ea5e9" className="spinner" style={{ margin: '0 auto 12px', animation: 'spin 1s linear infinite' }} />
                      <p style={{ margin: 0, color: '#0ea5e9', fontWeight: 600 }}>Uploading to Cloud...</p>
                    </>
                  )}
                  {uploadStatus === "success" && (
                    <>
                      <CheckCircle size={32} color="#10b981" style={{ margin: '0 auto 12px' }} />
                      <p style={{ margin: 0, color: '#10b981', fontWeight: 600 }}>Image uploaded securely!</p>
                      <img src={uploadedCloudUrl} alt="Preview" style={{ maxHeight: '120px', marginTop: '12px', borderRadius: '4px' }} />
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#334155' }}>Select Questions</h3>
            <span style={{ fontWeight: 600, color: '#0369a1' }}>{selectedCodingQuestions.length} selected</span>
          </div>

          <div className="questions-list">
            {codingQuestions.length === 0 && <p style={{ padding: '24px', textAlign: 'center', color: '#64748b' }}>No coding questions available. Create one first!</p>}
            {codingQuestions.map((q) => {
              const isSelected = !!selectedCodingQuestions.find(sq => sq._id === q._id);
              return (
                <div key={q._id} className={`question-card ${isSelected ? 'selected' : ''}`} onClick={() => toggleCodingQuestion(q)}>
                  <div className="q-head" style={{ marginBottom: '8px' }}>
                    <input type="checkbox" checked={isSelected} readOnly />
                    <span className={`q-badge ${q.difficulty === 'Hard' ? 'amber' : q.difficulty === 'Easy' ? 'green' : 'blue'}`}>{q.difficulty}</span>
                    <span style={{ marginLeft: '12px', fontSize: '0.85rem', color: '#64748b' }}>{q.timeLimit / 1000}s limit</span>
                  </div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{q.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{q.description.replace(/[#*`]/g, '')}</p>
                </div>
              );
            })}
          </div>


          <div className="preview-panel" style={{ marginTop: '32px' }}>
            <h3>Assessment Preview ({selectedCodingQuestions.length} questions)</h3>
            {selectedCodingQuestions.map((q, idx) => (
              <div key={q._id} className="preview-q" style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '16px', background: 'white' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#1e293b' }}><b>{idx + 1}.</b> {q.title} <span style={{ fontSize: '0.85rem', fontWeight: 'normal', color: '#64748b', marginLeft: '8px' }}>({q.difficulty})</span></h4>
                {q.imageUrl && <img src={q.imageUrl} alt="Context" style={{ maxHeight: '150px', objectFit: 'contain', display: 'block', marginBottom: '12px' }} />}
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', whiteSpace: 'pre-wrap' }}>{q.description.replace(/[#*`]/g, '')}</p>
              </div>
            ))}
          </div>
          
          {publishError && (
            <div style={{ color: '#ef4444', marginTop: '16px', padding: '12px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
              ⚠️ {publishError}
            </div>
          )}
          
          <button className="publish-btn" onClick={handleCodingPublish} disabled={loading || selectedCodingQuestions.length === 0} style={{ background: '#8b5cf6', color: 'white', marginTop: '16px', width: '100%', padding: '16px', fontSize: '1.15rem', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: (loading || selectedCodingQuestions.length === 0) ? 'not-allowed' : 'pointer', opacity: (loading || selectedCodingQuestions.length === 0) ? 0.6 : 1 }}>
            {loading ? "Publishing..." : "Publish Coding Test to Students"}
          </button>
        </div>
      )}
    </div>
  );
}
