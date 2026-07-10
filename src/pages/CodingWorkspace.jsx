import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import './CodingWorkspace.css';
import { ArrowLeft, Play, UploadCloud, CheckCircle2, XCircle, Code2, TerminalSquare, BookOpen, Clock } from 'lucide-react';

export default function CodingWorkspace({ testId, onBack }) {
  const [testData, setTestData] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [loading, setLoading] = useState(true);
  
  const [executing, setExecuting] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [result, setResult] = useState(null);
  
  const [leftTab, setLeftTab] = useState("description");
  const [consoleTab, setConsoleTab] = useState("testcases");
  const [selectedTestCase, setSelectedTestCase] = useState(0);

  useEffect(() => {
    fetch('/api/coding-tests')
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
           setLoading(false);
           return;
        }
        const test = data.find(t => t.id === testId || t._id === testId);
        if (test) {
          setTestData(test);
          if (test.questions && test.questions.length > 0) {
            setActiveQuestion(test.questions[0]);
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [testId]);

  const handleRunCode = async (submit = false) => {
    if (!activeQuestion) return;
    setExecuting(true);
    setIsSubmit(submit);
    setResult(null);
    setConsoleTab("result");
    
    try {
      const res = await fetch('/api/execute-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: activeQuestion._id || activeQuestion.id,
          language,
          code
        })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Execution failed to reach server." });
    } finally {
      setExecuting(false);
    }
  };

  if (loading) return <div className="lc-loading">Loading Workspace...</div>;
  if (!testData) return <div className="lc-loading">Test not found.</div>;

  return (
    <div className="lc-workspace">
      {/* Top Navbar */}
      <nav className="lc-navbar">
        <div className="lc-nav-left">
          <button className="lc-ghost-btn" onClick={onBack}>
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
        </div>
        <div className="lc-nav-center">
          <span className="lc-nav-title">{testData.title}</span>
        </div>
        <div className="lc-nav-right">
        </div>
      </nav>

      <div className="lc-main-split">
        {/* Left Panel */}
        <div className="lc-left-panel">
          <div className="lc-panel-header">
             <div className="lc-tabs">
               <button className={`lc-tab ${leftTab === 'description' ? 'active' : ''}`} onClick={() => setLeftTab('description')}>
                 <BookOpen size={14} /> Description
               </button>
               <button className={`lc-tab ${leftTab === 'submissions' ? 'active' : ''}`} onClick={() => setLeftTab('submissions')}>
                 <Clock size={14} /> Submissions
               </button>
             </div>
          </div>
          
          <div className="lc-panel-content">
            {leftTab === 'description' && activeQuestion && (
              <div className="lc-problem-desc">
                <h2>{activeQuestion.title}</h2>
                <div className="lc-problem-meta">
                   <span className={`lc-badge diff-${activeQuestion.difficulty.toLowerCase()}`}>
                     {activeQuestion.difficulty}
                   </span>
                   <span className="lc-time-limit">Time Limit: {activeQuestion.timeLimit / 1000}s</span>
                </div>
                
                <div className="lc-problem-body">
                   {activeQuestion.imageUrl && (
                     <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                       <img src={activeQuestion.imageUrl} alt="Problem visual context" style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: '400px' }} />
                     </div>
                   )}
                   {activeQuestion.description.split('\n\n').map((para, i) => {
                     const cleanPara = para.replace(/[#*`]/g, '').trim();
                     if (!cleanPara) return null;
                     const lowerPara = cleanPara.toLowerCase();
                     return (
                       <div key={i} className="lc-problem-para">
                         {lowerPara.includes('input format') || lowerPara.includes('output format') || lowerPara.includes('example') || lowerPara.includes('constraints') ? (
                           <div className="lc-problem-example">
                             {cleanPara.split('\n').map((line, idx) => (
                                <p key={idx}>{line.trim()}</p>
                             ))}
                           </div>
                         ) : (
                           <p>{cleanPara}</p>
                         )}
                       </div>
                     );
                   })}
                </div>
              </div>
            )}
            
            {leftTab === 'submissions' && (
               <div className="lc-empty-state">
                  No previous submissions for this session.
               </div>
            )}
          </div>
          
          {/* Question Selector Footer */}
          <div className="lc-question-selector">
             <span>Questions</span>
             <div className="lc-q-list">
               {testData.questions.map((q, idx) => (
                 <button 
                   key={q._id || q.id}
                   className={`lc-q-btn ${activeQuestion?.title === q.title ? 'active' : ''}`}
                   onClick={() => { setActiveQuestion(q); setResult(null); }}
                   title={q.title}
                 >
                   Q{idx + 1}
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="lc-right-panel">
           {/* Editor Section */}
           <div className="lc-editor-section">
             <div className="lc-editor-header">
                <div className="lc-lang-selector">
                  <Code2 size={16} />
                  <select value={language} onChange={e => setLanguage(e.target.value)}>
                    <option value="python">Python 3</option>
                    <option value="javascript">JavaScript</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                  </select>
                </div>
                <div className="lc-action-btns">
                  <button className="lc-run-btn" onClick={() => handleRunCode(false)} disabled={executing}>
                    <Play size={14} /> Run
                  </button>
                  <button className="lc-submit-btn" onClick={() => handleRunCode(true)} disabled={executing}>
                    <UploadCloud size={14} /> Submit
                  </button>
                </div>
             </div>
             
             <div className="lc-editor-wrapper">
               <Editor
                  height="100%"
                  defaultLanguage="python"
                  language={language === 'cpp' ? 'cpp' : language}
                  theme="vs-dark"
                  value={code}
                  onChange={(val) => setCode(val)}
                  options={{ minimap: { enabled: false }, fontSize: 14, fontFamily: "'JetBrains Mono', 'Fira Code', monospace", roundedSelection: false, scrollBeyondLastLine: false }}
                />
             </div>
           </div>

           {/* Console Section */}
           <div className="lc-console-section">
             <div className="lc-console-header">
               <div className="lc-tabs">
                 <button className={`lc-tab ${consoleTab === 'testcases' ? 'active' : ''}`} onClick={() => setConsoleTab('testcases')}>
                   <TerminalSquare size={14} /> Testcases
                 </button>
                 <button className={`lc-tab ${consoleTab === 'result' ? 'active' : ''}`} onClick={() => setConsoleTab('result')}>
                   <CheckCircle2 size={14} /> Test Result
                 </button>
               </div>
             </div>
             
             <div className="lc-console-content">
               {consoleTab === 'testcases' && activeQuestion && (
                 <div className="lc-testcases">
                   <div className="lc-tc-tabs">
                     {activeQuestion.testCases.map((tc, idx) => (
                       <button 
                         key={idx}
                         className={`lc-tc-tab ${selectedTestCase === idx ? 'active' : ''}`}
                         onClick={() => setSelectedTestCase(idx)}
                       >
                         Case {idx + 1}
                       </button>
                     ))}
                   </div>
                   <div className="lc-tc-body">
                     <p className="lc-tc-label">Input:</p>
                     <pre className="lc-tc-pre">{activeQuestion.testCases[selectedTestCase]?.input}</pre>
                     {!activeQuestion.testCases[selectedTestCase]?.isHidden && (
                        <>
                          <p className="lc-tc-label">Expected Output:</p>
                          <pre className="lc-tc-pre">{activeQuestion.testCases[selectedTestCase]?.expectedOutput}</pre>
                        </>
                     )}
                     {activeQuestion.testCases[selectedTestCase]?.isHidden && (
                        <p className="lc-tc-hidden-msg">This is a hidden test case. Output is locked.</p>
                     )}
                   </div>
                 </div>
               )}

               {consoleTab === 'result' && (
                 <div className="lc-result-pane">
                   {!result && !executing && <p className="lc-empty-state">You must run or submit code first to see results.</p>}
                   {executing && (
                     <div className="lc-loading-state">
                       <span className="lc-spinner"></span> Evaluating... Please wait.
                     </div>
                   )}
                   
                   {result && result.error && <p className="lc-error-msg">{result.error}</p>}
                   
                   {result && result.verdict && (
                     <div className="lc-verdict-container">
                       <h3 className={`lc-verdict-title ${result.verdict === 'Accepted' ? 'ac' : 'wa'}`}>
                         {result.verdict}
                       </h3>
                       
                       <div className="lc-result-list">
                         {result.results && result.results.map((r, idx) => {
                           if (!isSubmit && r.isHidden) return null;
                           
                           return (
                             <div key={idx} className={`lc-tc-result-card ${r.passed ? 'pass-card' : 'fail-card'}`}>
                               <div className="lc-tc-result-header">
                                 {r.passed ? (
                                    <span className="lc-tc-status pass"><CheckCircle2 size={14}/> Case {idx+1} {r.isHidden ? '(Hidden)' : ''}</span>
                                 ) : (
                                    <span className="lc-tc-status fail"><XCircle size={14}/> Case {idx+1} {r.isHidden ? '(Hidden)' : ''}</span>
                                 )}
                               </div>
                               {!r.passed && (
                                 <div className="lc-tc-result-body">
                                   {!r.isHidden && (
                                     <>
                                       <div className="lc-tc-io">
                                         <span className="lc-tc-label">Expected:</span>
                                         <pre className="lc-tc-pre">{r.expected}</pre>
                                       </div>
                                       <div className="lc-tc-io">
                                         <span className="lc-tc-label">Actual:</span>
                                         <pre className="lc-tc-pre">{r.output}</pre>
                                       </div>
                                     </>
                                   )}
                                   {r.error && <pre className="lc-error-msg">{r.error}</pre>}
                                   {r.isHidden && !r.error && <p className="lc-tc-hidden-msg" style={{margin:0}}>Hidden Testcase. Output is locked.</p>}
                                 </div>
                               )}
                             </div>
                           );
                         })}
                       </div>
                     </div>
                   )}
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
