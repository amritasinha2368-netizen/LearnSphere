import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questionsData.js';
import { studentData } from "../data/lmsData.js";
import './TestBuilder.css';

let cachedStandardQuizzes = [];

export default function TestBuilder({ onPublish, refreshTrigger }) {
  const [questions, setQuestions] = useState(questionsData);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  
  const [step, setStep] = useState(0); // 0: Dashboard (Published), 1: Select Questions, 2: Settings & Preview

  const [testTitle, setTestTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [publishError, setPublishError] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [publishedQuizzes, setPublishedQuizzes] = useState(cachedStandardQuizzes);

  const fetchQuizzes = () => {
    fetch('/api/lms-data?type=standard-quizzes')
      .then(res => res.json())
      .then(data => {
        const fetchedTitles = data.map(q => q.title);
        const mergedQuizzes = [...data];
        studentData.quizzes.forEach(mockQuiz => {
          if (!fetchedTitles.includes(mockQuiz.title)) {
            mergedQuizzes.push(mockQuiz);
          }
        });
        cachedStandardQuizzes = mergedQuizzes;
        setPublishedQuizzes(mergedQuizzes);
      })
      .catch(err => console.error("Error fetching standard quizzes:", err));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [refreshTrigger]);

  const [deletingId, setDeletingId] = useState(null);

  const deletePublishedQuiz = async (id) => {
    // Optimistic UI Update: Instantly remove from screen
    const previousQuizzes = [...publishedQuizzes];
    setPublishedQuizzes(publishedQuizzes.filter(q => q.id !== id));

    try {
      const res = await fetch(`/api/lms-data?type=standard-quizzes&id=${id}`, { method: 'DELETE' });
      if (!res.ok) {
        setPublishedQuizzes(previousQuizzes); // Revert on failure
        alert("Failed to delete. Please try again.");
      } else {
        cachedStandardQuizzes = cachedStandardQuizzes.filter(q => q.id !== id);
      }
    } catch (err) {
      setPublishedQuizzes(previousQuizzes);
      console.error(err);
      alert("Network error during deletion.");
    }
  };

  const categories = ["All", ...new Set(questions.map(q => q.category))];
  const filteredQuestions = categoryFilter === "All" ? questions : questions.filter(q => q.category === categoryFilter);

  const toggleQuestion = (q) => {
    if (selectedQuestions.find(sq => sq.id === q.id)) {
      setSelectedQuestions(selectedQuestions.filter(sq => sq.id !== q.id));
    } else {
      setSelectedQuestions([...selectedQuestions, q]);
    }
  };

  const handlePublish = async () => {
    if (!testTitle || !startTime || !endTime || !durationMinutes || selectedQuestions.length === 0) {
      setPublishError("Please fill all fields and select at least one question.");
      return;
    }

    setPublishError("");

    // Optimistic UI Update: Instantly inject a dummy card on the screen
    const tempQuiz = {
      id: "temp-" + Date.now(),
      title: testTitle,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      durationMinutes: Number(durationMinutes),
      questions: selectedQuestions.map(q => ({ title: q.question, type: q.type, marks: q.marks }))
    };
    setPublishedQuizzes([tempQuiz, ...publishedQuizzes]);
    
    // Close the modal visually right away
    setStep(0);
    setSelectedQuestions([]);
    setTestTitle("");
    setLoading(true);

    try {
      const res = await fetch('/api/lms-data?type=standard-quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: testTitle,
          startTime: new Date(startTime).toISOString(),
          endTime: new Date(endTime).toISOString(),
          durationMinutes: Number(durationMinutes),
          questions: selectedQuestions.map(q => q.id)
        })
      });
      
      if (res.ok) {
        // Fetch the real data from DB to replace the temp card
        fetchQuizzes();
        if (onPublish) onPublish();
      } else {
        alert("Failed to publish quiz. Reverting...");
        setPublishedQuizzes(publishedQuizzes.filter(q => q.id !== tempQuiz.id)); // Revert
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Reverting...");
      setPublishedQuizzes(publishedQuizzes.filter(q => q.id !== tempQuiz.id)); // Revert
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-builder">
      <div className="test-builder-header">
        <h2>Test Builder</h2>
        <p>Create standard multiple-choice quizzes and publish them to students.</p>
        {message && <div className="test-builder-msg">{message}</div>}
      </div>

      <div style={{ marginBottom: '32px' }}>
        <div className="coding-assessment-actions" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div className="module-card hover-lift" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #bbf7d0', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => setStep(1)}>
            <h3 style={{ color: '#166534', marginBottom: '8px', fontSize: '1.1rem' }}>📝 Create Standard Quiz</h3>
            <p style={{ color: '#14532d', margin: 0 }}>Select questions from the bank and create a timed multiple-choice quiz.</p>
          </div>
        </div>
      </div>

      {step === 0 && (
        <div className="test-builder-step" style={{ marginTop: '32px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '1.2rem', color: '#1e293b' }}>Published Quizzes</h3>
          {publishedQuizzes.length === 0 ? (
            <p style={{ color: '#64748b' }}>No standard quizzes published yet.</p>
          ) : (
            <div className="questions-list" style={{ display: 'grid', gap: '12px' }}>
              {publishedQuizzes.map(quiz => (
                <div key={quiz.id} className="question-card" style={{ borderLeft: '4px solid #3b82f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.1rem' }}>{quiz.title}</h4>
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Due: {new Date(quiz.endTime).toLocaleString()} • {quiz.durationMinutes} min • {quiz.questions?.length || 0} questions</span>
                  </div>
                  <button 
                    className="ghost-button" 
                    style={{ color: '#e11d48', padding: '6px 12px' }}
                    onClick={(e) => { e.stopPropagation(); deletePublishedQuiz(quiz.id); }}
                    disabled={deletingId === quiz.id}
                  >
                    {deletingId === quiz.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {step === 1 && (
        <div className="test-builder-step">
          <div className="filter-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <button className="ghost-button" onClick={() => setStep(0)} style={{ padding: '4px 8px', marginRight: '16px' }}>← Cancel</button>
              <h3 style={{ display: 'inline-block', margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>Create Standard Quiz</h3>
            </div>
          </div>
          <div className="filter-bar">
            <label>Filter by Category:</label>
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <span>{selectedQuestions.length} questions selected</span>
            <button className="primary-btn" onClick={() => setStep(2)} disabled={selectedQuestions.length === 0}>
              Next: Settings & Preview
            </button>
          </div>

          <div className="questions-list">
            {filteredQuestions.map((q, idx) => {
              const isSelected = !!selectedQuestions.find(sq => sq.id === q.id);
              return (
                <div key={q.id} className={`question-card ${isSelected ? 'selected' : ''}`} onClick={() => toggleQuestion(q)}>
                  <div className="q-head">
                    <input type="checkbox" checked={isSelected} readOnly />
                    <span className="q-badge">{q.category}</span>
                  </div>
                  <p><b>Q{idx + 1}:</b> {q.question}</p>
                  <div className="q-options">
                    {q.options.map(opt => (
                      <span key={opt} className={opt === q.answer ? 'correct-opt' : ''}>{opt}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="test-builder-step">
          <button className="ghost-button" onClick={() => setStep(1)}>← Back to Selection</button>
          
          <div className="settings-panel">
            <h3>Test Settings</h3>
            <div className="settings-grid">
              <label>
                Test Title:
                <input type="text" value={testTitle} onChange={e => setTestTitle(e.target.value)} placeholder="e.g., Weekly Grammar Test" />
              </label>
              <label>
                Duration (Minutes):
                <input type="number" value={durationMinutes} onChange={e => setDurationMinutes(e.target.value)} min="1" />
              </label>
              <label>
                Publish Start Time:
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
              </label>
              <label>
                Force End Time:
                <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} />
              </label>
            </div>
            
            {publishError && (
              <div style={{ color: '#ef4444', marginBottom: '16px', padding: '12px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                ⚠️ {publishError}
              </div>
            )}
            
            <button className="publish-btn" onClick={handlePublish} disabled={loading}>
              {loading ? "Publishing..." : "Publish Test to Students"}
            </button>
          </div>

          <div className="preview-panel">
            <h3>Test Preview ({selectedQuestions.length} questions)</h3>
            {selectedQuestions.map((q, idx) => (
              <div key={q.id} className="preview-q">
                <p><b>{idx + 1}.</b> {q.question}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
