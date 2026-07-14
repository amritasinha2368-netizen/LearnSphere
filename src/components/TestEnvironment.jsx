import React, { useState, useEffect } from 'react';
import './TestEnvironment.css';

export default function TestEnvironment({ test, onExit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (isSubmitted) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isSubmitted]);

  const handleSelectOption = (qId, option) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [qId]: option });
  };

  const handleSubmit = () => {
    if (!window.confirm("Are you sure you want to submit your test?")) return;
    
    setIsSubmitted(true);
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    test.questions.forEach(q => {
      const userAns = answers[q.id];
      if (!userAns) {
        unattempted++;
      } else if (userAns === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    setResults({
      correct,
      wrong,
      unattempted,
      total: test.questions.length,
      score: (correct / test.questions.length) * 100
    });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  if (isSubmitted && results) {
    return (
      <div className="test-env-container results-mode">
        <div className="results-card">
          <h2>Test Completed!</h2>
          <div className="score-circle">
            <span>{Math.round(results.score)}%</span>
          </div>
          <div className="results-stats">
            <div className="stat-item correct">
              <b>{results.correct}</b>
              <span>Correct</span>
            </div>
            <div className="stat-item wrong">
              <b>{results.wrong}</b>
              <span>Wrong</span>
            </div>
            <div className="stat-item unattempted">
              <b>{results.unattempted}</b>
              <span>Unattempted</span>
            </div>
          </div>
          <button className="primary-btn" onClick={onExit}>Return to Dashboard</button>
        </div>
      </div>
    );
  }

  const currentQ = test.questions[currentQuestionIndex];
  const attemptedCount = Object.keys(answers).length;

  return (
    <div className="test-env-container">
      <header className="test-header">
        <div className="test-info">
          <h2>{test.title}</h2>
          <span>Question {currentQuestionIndex + 1} of {test.questions.length}</span>
        </div>
        <div className={`test-timer ${timeLeft < 60 ? 'danger' : ''}`}>
          Time Left: <b>{formatTime(timeLeft)}</b>
        </div>
      </header>

      <div className="test-body-layout">
        <main className="test-arena">
          <div className="question-box">
            <h3><span>Q{currentQuestionIndex + 1}.</span> {currentQ.question || currentQ.prompt || "Question Text"}</h3>
            {currentQ.imageUrl && (
              <img src={currentQ.imageUrl} alt="Question" style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '16px' }} />
            )}
            <div className="options-grid">
              {(currentQ.options || []).map(opt => {
                const isSelected = answers[currentQ.id || currentQ.prompt] === opt;
                return (
                  <div 
                    key={opt} 
                    className={`option-row ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(currentQ.id || currentQ.prompt, opt)}
                  >
                    <div className="radio-circle">{isSelected && <div className="radio-dot"/>}</div>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
        
        <aside className="test-sidebar">
          <h3>Question Palette</h3>
          <div className="palette-grid">
            {(test.questions || []).map((q, idx) => {
              const qId = typeof q === 'string' ? q : (q.id || q.prompt);
              const isAnswered = !!answers[qId];
              const isCurrent = idx === currentQuestionIndex;
              let classes = "palette-btn";
              if (isAnswered) classes += " answered";
              if (isCurrent) classes += " current";
              return (
                <button 
                  key={q.id} 
                  className={classes}
                  onClick={() => setCurrentQuestionIndex(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          
          <div className="palette-legend">
            <div><span className="legend-dot answered"></span> Answered</div>
            <div><span className="legend-dot"></span> Pending</div>
          </div>
          
          <div className="palette-progress">
            <p>{attemptedCount} of {test.questions.length} answered</p>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${(attemptedCount / test.questions.length) * 100}%` }}></div>
            </div>
          </div>
        </aside>
      </div>

      <footer className="test-footer">
        <div className="footer-nav">
          <button 
            className="ghost-button" 
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
          >
            ← Previous
          </button>
          
          <button 
            className="primary-btn"
            disabled={currentQuestionIndex === test.questions.length - 1}
            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
          >
            Next →
          </button>
        </div>
        
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Test
        </button>
      </footer>
    </div>
  );
}
