import React, { useState, useEffect } from 'react';
import './TestBuilder.css';

export default function TestBuilder() {
  const [questions, setQuestions] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  
  const [step, setStep] = useState(1); // 1: Select Questions, 2: Settings & Preview

  const [testTitle, setTestTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(30);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(err => console.error("Failed to load questions:", err));
  }, []);


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
      setMessage("Please fill all fields and select at least one question.");
      return;
    }

    setLoading(true);
    setMessage("");

    const payload = {
      title: testTitle,
      startTime,
      endTime,
      durationMinutes: Number(durationMinutes),
      questions: selectedQuestions
    };

    try {
      const response = await fetch('/api/tests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setMessage("Test published successfully to Next.js API!");
        setStep(1);
        setSelectedQuestions([]);
        setTestTitle("");
      } else {
        setMessage("Failed to publish test.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to publish test.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-builder">
      <div className="test-builder-header">
        <h2>End-to-End Test Builder</h2>
        <p>Select questions, set timers, and publish class tests.</p>
        {message && <div className="test-builder-msg">{message}</div>}
      </div>

      {step === 1 && (
        <div className="test-builder-step">
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
