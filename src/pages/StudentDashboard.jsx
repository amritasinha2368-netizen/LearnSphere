import { useState, useEffect } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileUp,
  GraduationCap,
  Medal,
  MessageSquare,
  Sparkles,
  Trophy,
  UploadCloud,
  Megaphone,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO } from 'date-fns';
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestEnvironment from "../components/TestEnvironment.jsx";
import CodingWorkspace from "./CodingWorkspace.jsx";
import SubjectDetails from "../components/SubjectDetails.jsx";
import { studentData as studentDataMock } from "../data/lmsData.js";
import { getStudentMetrics, percent } from "../data/metrics.js";
import "./StudentDashboard.css";

const navItems = [
  { id: "overview", label: "Dashboard", icon: BarChart3 },
  { id: "classes", label: "Classes", icon: Clock3 },
  { id: "subjects", label: "Subjects", icon: BookOpen },
  { id: "assignments", label: "Assignments", icon: FileUp },
  { id: "quizzes", label: "Quizzes", icon: ClipboardList },
  { id: "badges", label: "Badges", icon: Medal },
  { id: "announcements", label: "Announcements", icon: Megaphone },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "xp", label: "XP Progress", icon: Award },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
];

// removed calendarDays array

function DashboardMetric({ icon: Icon, code, label, value, detail, tone = "blue" }) {
  return (
    <article className={`dash-metric ${tone}`}>
      <span className="metric-code">{code}</span>
      <div>
        <strong>{value}</strong>
        <b>{label}</b>
        <em>{detail}</em>
      </div>
      <Icon size={18} />
    </article>
  );
}

export default function StudentDashboard({ session, onLogout }) {
  const [activeView, setActiveViewState] = useState(() => {
    try {
      const saved = localStorage.getItem("student_active_view");
      if (saved) return saved;
    } catch (e) {
      console.error(e);
    }
    return "overview";
  });

  const setActiveView = (view) => {
    setActiveViewState(view);
    localStorage.setItem("student_active_view", view);
  };
  const [action, setAction] = useState(null);
  
  // Test Environment State
  const [activeTest, setActiveTest] = useState(null);
  const [availableTests, setAvailableTests] = useState([]);
  
  const [activeCodingTest, setActiveCodingTest] = useState(null);
  const [codingTests, setCodingTests] = useState([]);
  const [activeSubject, setActiveSubject] = useState(null);

  // Assignment Backend State
  const [backendAssignments, setBackendAssignments] = useState([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  useEffect(() => {
    fetch('/api/lms-data?type=standard-quizzes')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setAvailableTests(data);
        else setAvailableTests([]);
      })
      .catch(err => console.error("Failed to load tests:", err));
      
    fetch('/api/coding-tests')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setCodingTests(data);
        else setCodingTests([]);
      })
      .catch(err => console.error("Failed to load coding tests:", err));
      
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const res = await fetch('/api/assignments');
      if (res.ok) {
        const data = await res.json();
        setBackendAssignments(data);
      }
    } catch (err) {
      console.error("Failed to fetch assignments:", err);
    } finally {
      setLoadingAssignments(false);
    }
  };

  const metrics = getStudentMetrics(studentDataMock);

  // Live Database State
  const [dbSubjects, setDbSubjects] = useState([]);
  const [dbClasses, setDbClasses] = useState([]);
  const [dbBadges, setDbBadges] = useState([]);
  const [dbUsers, setDbUsers] = useState([]);
  const [dbNotices, setDbNotices] = useState([]);
  const [dbEvents, setDbEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    fetch('/api/lms-data?type=subjects').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbSubjects(data) }).catch(console.error);
    fetch('/api/lms-data?type=classes').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbClasses(data) }).catch(console.error);
    fetch('/api/lms-data?type=badges').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbBadges(data) }).catch(console.error);
    fetch('/api/lms-data?type=users').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbUsers(data) }).catch(console.error);
    fetch('/api/lms-data?type=notices').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbNotices(data) }).catch(console.error);
    fetch('/api/lms-data?type=events').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbEvents(data) }).catch(console.error);
  }, []);

  const studentData = {
    ...studentDataMock,
    subjects: dbSubjects.length > 0 ? dbSubjects : studentDataMock.subjects,
    classSchedule: dbClasses.length > 0 ? dbClasses : studentDataMock.classSchedule,
    badges: dbBadges.length > 0 ? dbBadges : studentDataMock.badges,
  };

  const handleModalSubmit = async (data) => {
    if (!action) return;

    if (action.kicker === "Assignment upload" && action.assignmentId) {
      try {
        const payload = {
          studentName: studentData.profile.name,
          studentId: "student_123", // Dummy ID
          fileUrl: data.fileUrl,
          note: data.note
        };

        const res = await fetch(`/api/assignments/${action.assignmentId}/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          fetchAssignments();
        } else {
          console.error("Failed to submit assignment");
        }
      } catch (err) {
        console.error("Error submitting assignment:", err);
      }
    } else if (data.actionType === "send-feedback") {
      try {
        const payload = {
          teacherName: data.teacherName,
          studentName: studentData.profile.name,
          message: data.message,
        };
        const res = await fetch('/api/lms-data?type=feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          setAction(null);
          alert("Feedback sent successfully!");
        }
      } catch (err) {
        console.error("Error sending feedback:", err);
      }
    } else if (data.actionType === "quiz") {
      setActiveTest(action);
      setAction(null);
    }
  };

  function openClass(item) {
    if (item.room && item.room.startsWith('http')) {
      window.open(item.room, '_blank');
      return;
    }
    setAction({
      kicker: "Class details",
      title: item.subject,
      description: `Scheduled class for ${item.topic}.`,
      details: [
        { label: "Time", value: item.time },
        { label: "Room / Link", value: item.room },
        { label: "Topic", value: item.topic },
      ],
      primaryLabel: "Close",
    });
  }

  function openSubject(subject) {
    setActiveSubject(subject);
  }

  function openAssignment(assignment) {
    const existingSubmission = assignment.submissions?.find(sub => sub.studentId === "student-123");

    setAction({
      kicker: "Assignment upload",
      title: assignment.title,
      assignmentId: assignment.id || assignment._id, // For backend targeting
      description: assignment.contentBody || assignment.description || "Choose a file and submit your assignment before the due date.",
      fileUrl: assignment.fileUrl,
      type: "upload",
      existingSubmission,
      details: [
        { label: "Subject", value: assignment.subject },
        { label: "Due", value: assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString('en-GB') : assignment.due },
        { label: "Marks", value: `${assignment.maxMarks}` },
      ],
      primaryLabel: existingSubmission ? "Close" : "Upload assignment",
    });
  }

  function openQuiz(quiz) {
    setAction({
      kicker: "Assigned quiz",
      title: quiz.title,
      description: "Attempt the quiz directly here. Choose one option for each question and submit when ready.",
      type: "quiz",
      details: [
        { label: "Subject", value: quiz.subject },
        { label: "Duration", value: quiz.duration },
        { label: "Status", value: quiz.status },
      ],
      questions: quiz.questions,
      primaryLabel: quiz.action === "Review answers" ? "Close review" : "Submit quiz",
    });
  }

  function openFeedback() {
    setAction({
      kicker: "Teacher Feedback",
      title: "Provide Feedback",
      description: "Send a direct message to any teacher. They will receive it in their dashboard.",
      type: "send-feedback", 
      primaryLabel: "Submit Feedback",
    });
  }

  function sectionTitle(title, subtitle, actionLabel) {
    return (
      <div className="view-head">
        <div>
          <p className="eyebrow">Student module</p>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
        {actionLabel && <button className="panel-button" type="button">{actionLabel}</button>}
      </div>
    );
  }

  function renderOverview() {
    const todayCards = [
      {
        Icon: Clock3,
        label: "Today's Class",
        title: studentData.today.class.subject,
        detail: `${studentData.today.class.topic} - ${studentData.today.class.room}`,
        meta: studentData.today.class.time,
        tone: "blue",
        action: "Open class",
        onClick: () => openClass(studentData.today.class),
      },
      {
        Icon: ClipboardList,
        label: "Today's Quiz",
        title: studentData.today.quiz.title,
        detail: `${studentData.today.quiz.subject} - ${studentData.today.quiz.duration}`,
        meta: studentData.today.quiz.status,
        tone: "green",
        action: studentData.today.quiz.action,
        onClick: () => openQuiz(studentData.quizzes[0]),
      },
      {
        Icon: MessageSquare,
        label: "Teacher Feedback",
        title: "Voice Your Opinion",
        detail: "Share feedback or ask for help",
        meta: "Always open",
        tone: "pink",
        action: "Give feedback",
        onClick: () => openFeedback(),
      },
    ];

    return (
      <section className="role-view">
        <div className="overview-layout">
          <article className="hero-panel hero-panel-3d student-hero">
            <div className="student-figure-scene" aria-hidden="true">
              <div className="figure-screen">
                <span className="screen-row wide" />
                <span className="screen-row short" />
                <div className="screen-chart">
                  <i /><i /><i />
                </div>
              </div>
              <div className="student-avatar-3d">
                <span className="avatar-head" />
                <span className="avatar-hair" />
                <span className="avatar-body" />
                <span className="avatar-laptop" />
              </div>
              <span className="floating-checklist">
                <b /><b /><b />
              </span>
              <span className="floating-sticker sticker-xp">XP</span>
              <span className="floating-sticker sticker-quiz">QZ</span>
              <span className="floating-sticker sticker-badge">BD</span>
            </div>
            <div className="hero-copy">
              <p className="eyebrow">Good evening, Student</p>
              <h2>Today at <span>LearnSphere</span></h2>
              <p>A focused view of your batch, live class, assignment deadline, quiz attempt, XP progress, badges, and leaderboard position.</p>
              <div className="hero-status-row">
                <span>{studentData.batch.name}</span>
                <span>{studentData.today.class.time} class</span>
                <span>Rank #{studentData.xp.rank}</span>
              </div>
            </div>
          </article>

          <article className="plan-card batch-card">
            <div className="panel-head">
              <div>
                <h2>My Batch</h2>
                <span>{studentData.batch.name} - {studentData.batch.semester}</span>
              </div>
            </div>
            <div className="batch-identity">
              <span className="batch-avatar"><GraduationCap size={24} /></span>
              <div>
                <strong>{studentData.profile.cohort}</strong>
                <em>Mentor: {studentData.batch.mentor}</em>
              </div>
            </div>
            <div className="batch-stat-grid">
              <div><strong>{studentData.batch.strength}</strong><span>Students</span></div>
              <div><strong>{studentData.batch.attendance}</strong><span>Attendance</span></div>
              <div><strong>#{studentData.xp.rank}</strong><span>Your rank</span></div>
              <div><strong>{studentData.batch.batchAverageXp}</strong><span>Batch avg XP</span></div>
            </div>
          </article>
        </div>

        <div className="today-focus-grid">
          {todayCards.map(({ Icon, label, title, detail, meta, tone, action: actionLabel, onClick }) => (
            <article className={`today-focus-card ${tone}`} key={label}>
              <div className="today-focus-head">
                <span><Icon size={20} /></span>
                <p>{label}</p>
              </div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <strong>{meta}</strong>
              <button type="button" onClick={onClick}>{actionLabel}</button>
            </article>
          ))}
        </div>

        <div className="dash-metric-grid">
          <DashboardMetric icon={Award} code="XP" label="XP Progress" value={`${studentData.xp.current} XP`} detail={`${metrics.xpProgress}% toward Quiz Master`} />
          <DashboardMetric icon={ClipboardList} code="QZ" label="Quizzes" value={studentData.quizzes.length} detail="Assigned quizzes can be attempted here" tone="green" />
          <DashboardMetric icon={UploadCloud} code="AS" label="Assignments" value={backendAssignments.length} detail="Submitted and pending work" tone="amber" />
          <DashboardMetric icon={Medal} code="BD" label="Badges" value={`${metrics.earnedBadges} / 5`} detail="Starter unlocked. Quiz Master is next" tone="pink" />
        </div>

      </section>
    );
  }



  function renderClasses() {
    return (
      <section className="role-view">
        {sectionTitle("Scheduled Classes", "Classes scheduled by teachers appear with subject, time, and room/link status.", "View timetable")}
        <div className="compact-list" style={{ display: 'grid', gap: '12px' }}>
          {studentData.classSchedule.map((item, idx) => (
            <div key={idx} className="list-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)'}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                <strong style={{ fontSize: '16px' }}>{item.title || item.subject}</strong>
                <span className="meta">{item.time} • {item.room} {item.topic ? `• ${item.topic}` : ''}</span>
              </div>
              <button type="button" onClick={() => openClass(item)} style={{ background: '#f0f9ff', border: '1px solid #bae6fd', color: '#0284c7', cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', fontWeight: 500 }}>
                Open class
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function renderSubjects() {
    return (
      <section className="role-view">
        {sectionTitle("Subjects", "Each subject focuses on content and a clear view option.", "View all subjects")}
        <div className="module-grid three">
          {studentData.subjects.map((subject) => (
            <article className="module-card subject-module" key={subject.title}>
              <span className="module-code">{(subject.title || ' ')[0]}</span>
              <small>{subject.progress}% complete</small>
              <h3>{subject.title}</h3>
              <p>{subject.instructor}. Next class {subject.nextClass}.</p>
              <button type="button" onClick={() => openSubject(subject)}>{subject.option || 'Open lessons'}</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderAssignments() {
    // Check if the current user (Aarav Mehta) has submitted the assignment
    const isSubmitted = (assignment) => {
      return assignment.submissions && assignment.submissions.some(sub => sub.studentName === studentData.profile.name);
    };

    const getAssignmentStatus = (assignment) => {
      if (isSubmitted(assignment)) return "Completed";
      if (new Date() > new Date(assignment.dueDate)) return "Missed";
      return "Pending";
    };

    const submittedAssignments = backendAssignments.filter(a => getAssignmentStatus(a) === "Completed").length;
    const missedAssignments = backendAssignments.filter(a => getAssignmentStatus(a) === "Missed").length;
    const pendingAssignments = backendAssignments.filter(a => getAssignmentStatus(a) === "Pending").length;
    const nextPending = backendAssignments.find((assignment) => getAssignmentStatus(assignment) === "Pending");

    return (
      <section className="role-view">
        {sectionTitle("Assignments", "Current assignment status and upload actions.", "View all")}
        <div className="assignment-workspace">
          <article className="panel assignment-list-panel">
            <div className="stack-list">
              {loadingAssignments && <p>Loading assignments...</p>}
              {!loadingAssignments && backendAssignments.map((assignment, index) => {
                const status = getAssignmentStatus(assignment);
                const formattedDate = new Date(assignment.dueDate).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
                const mySubmission = assignment.submissions?.find(s => s.studentName === studentData.profile.name);
                const hasFeedback = mySubmission && (mySubmission.grade || mySubmission.feedback);
                
                return (
                  <div key={assignment.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '16px' }}>
                    <div className="list-action-row" onClick={() => openAssignment(assignment)} style={{ cursor: 'pointer' }}>
                      <b>{index + 1}</b>
                      <span>
                        <strong>{assignment.title}</strong>
                        <em>{assignment.subject} - Due {formattedDate}</em>
                      </span>
                      {status === "Completed" && !hasFeedback && (
                        <button type="button" onClick={() => openAssignment(assignment)} style={{opacity: 0.8}}><CheckCircle2 size={16} /> View Submission</button>
                      )}
                      {status === "Completed" && hasFeedback && (
                        <button type="button" onClick={() => openAssignment(assignment)} style={{backgroundColor: '#10b981', color: 'white', border: 'none', opacity: 1}}><CheckCircle2 size={16} /> View Grade</button>
                      )}
                      {status === "Missed" && (
                        <button type="button" disabled style={{opacity: 0.5, backgroundColor: 'var(--rose-600)', color: 'white', border: 'none'}}>Locked</button>
                      )}
                      {status === "Pending" && (
                        <button type="button" onClick={() => openAssignment(assignment)}>Upload</button>
                      )}
                    </div>
                    {hasFeedback && (
                      <div style={{ marginLeft: '40px', padding: '12px', background: '#ecfdf5', borderLeft: '4px solid #10b981', borderRadius: '4px' }}>
                        {mySubmission.grade && <strong style={{ color: '#065f46', display: 'block', fontSize: '1.05rem', marginBottom: '4px' }}>Grade: {mySubmission.grade}</strong>}
                        {mySubmission.feedback && <p style={{ margin: 0, color: '#064e3b', fontSize: '0.9rem', lineHeight: 1.4 }}>{mySubmission.feedback}</p>}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </article>
          <article className="panel assignment-summary-panel">
            <div className="assignment-summary-head">
              <p className="eyebrow">Assignment queue</p>
              <h2>Due work is grouped by action.</h2>
              <span>Use this panel to see what needs upload, what is pending, and what is already submitted.</span>
            </div>

            <div className="assignment-summary-stats">
              <div><strong>{pendingAssignments}</strong><span>Pending</span></div>
              <div><strong>{submittedAssignments}</strong><span>Completed</span></div>
              <div><strong>{missedAssignments}</strong><span>Missed</span></div>
            </div>

            {nextPending && (
              <div className="assignment-next-card">
                <span><UploadCloud size={20} /></span>
                <div>
                  <strong>{nextPending.title}</strong>
                  <em>{nextPending.subject} - due {new Date(nextPending.dueDate).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' })}</em>
                </div>
                <button type="button" onClick={() => openAssignment(nextPending)}>Upload</button>
              </div>
            )}
          </article>
        </div>
      </section>
    );
  }

  function renderQuizzes() {
    const allQuizzes = (Array.isArray(availableTests) ? availableTests : []).map(quiz => {
      if (quiz.questions && quiz.questions.length > 0 && typeof quiz.questions[0] === 'string') {
        // Fallback: backend only returned IDs, inject mock questions so it doesn't crash
        return { ...quiz, questions: studentData.quizzes[0].questions };
      }
      return quiz;
    });
    // If backend returns nothing, fallback to mock data
    if (allQuizzes.length === 0) {
      allQuizzes.push(...studentData.quizzes);
    }
    const allCodingTests = Array.isArray(codingTests) ? codingTests : [];
    
    const now = new Date();
    
    let pendingCount = 0;
    let missedCount = 0;
    let completedCount = 0; 
    
    [...allQuizzes, ...allCodingTests].forEach(test => {
       const start = new Date(test.publishTime || test.startTime || test.createdAt);
       const end = new Date(test.endTime || test.dueDate);
       if (now > end) {
         missedCount++;
       } else if (now >= start && now <= end) {
         pendingCount++;
       }
    });

    return (
      <section className="role-view">
        {sectionTitle("Active Tests & Quizzes", "Tests assigned by your teacher. Some tests may be time-locked.", "View all")}
        
        <div className="module-grid three" style={{ marginBottom: '32px' }}>
          <article className="panel" style={{ textAlign: 'center', padding: '32px 20px', background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', border: '1px solid #bae6fd', boxShadow: '0 10px 25px -5px rgba(56, 189, 248, 0.2)', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '3.5rem', margin: '0 0 8px 0', color: '#0284c7' }}>{pendingCount}</h2>
            <p style={{ margin: 0, fontWeight: 600, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '1px' }}>Pending</p>
          </article>
          <article className="panel" style={{ textAlign: 'center', padding: '32px 20px', background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: '1px solid #bbf7d0', boxShadow: '0 10px 25px -5px rgba(74, 222, 128, 0.2)', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '3.5rem', margin: '0 0 8px 0', color: '#16a34a' }}>{completedCount}</h2>
            <p style={{ margin: 0, fontWeight: 600, color: '#15803d', textTransform: 'uppercase', letterSpacing: '1px' }}>Completed</p>
          </article>
          <article className="panel" style={{ textAlign: 'center', padding: '32px 20px', background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', border: '1px solid #fecaca', boxShadow: '0 10px 25px -5px rgba(248, 113, 113, 0.2)', borderRadius: '12px' }}>
            <h2 style={{ fontSize: '3.5rem', margin: '0 0 8px 0', color: '#dc2626' }}>{missedCount}</h2>
            <p style={{ margin: 0, fontWeight: 600, color: '#b91c1c', textTransform: 'uppercase', letterSpacing: '1px' }}>Missed</p>
          </article>
        </div>

        {allQuizzes.length === 0 ? (
          <div className="panel" style={{ textAlign: 'center', padding: '40px 20px', background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '12px', marginBottom: '32px' }}>
            <h3 style={{ color: '#475569', margin: '0 0 8px 0' }}>No Active Quizzes</h3>
            <p style={{ color: '#64748b', margin: 0 }}>You don't have any standard quizzes assigned right now.</p>
          </div>
        ) : (
          <div className="module-grid three" style={{ marginBottom: '32px' }}>
            {allQuizzes.map((test, index) => {
              const start = new Date(test.publishTime || test.startTime);
              const end = new Date(test.endTime);
              const isLocked = now < start;
              const isExpired = now > end;

              return (
                <article className="module-card quiz-module" key={test.id} style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '260px', ...(isExpired ? {opacity: 0.7} : {}) }}>
                  {isExpired && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#ef4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px', textAlign: 'center' }}>Missed Quiz - Access Expired</div>}
                  
                  <span className={`module-code ${isLocked ? 'amber' : isExpired ? 'red' : 'green'}`} style={{ marginTop: isExpired ? '16px' : '0', width: 'fit-content' }}>T{index + 1}</span>
                  <h3 style={{ margin: '4px 0 0 0' }}>{test.title}</h3>
                  <p style={{ margin: 0 }}>{test.questions?.length || 0} Questions • {test.durationMinutes} Minutes</p>
                  {isLocked && <b style={{ margin: 0 }}>Opens at: {start.toLocaleString()}</b>}
                  {isExpired && <b style={{color: '#ef4444', margin: 0 }}>Expired on: {end.toLocaleString()}</b>}
                  {!isLocked && !isExpired && <b style={{ margin: 0 }}>Available Now! Closes at: {end.toLocaleString()}</b>}
                  
                  <button 
                    className={`primary-button ${isExpired || isLocked ? 'disabled-quiz-btn' : ''}`}
                    type="button" 
                    disabled={isLocked || isExpired}
                    onClick={() => setActiveTest(test)}
                    style={{ 
                      marginTop: 'auto',
                      opacity: (isLocked || isExpired) ? 0.7 : 1, 
                      cursor: (isLocked || isExpired) ? 'not-allowed' : 'pointer',
                      backgroundColor: isExpired ? '#e2e8f0' : isLocked ? '#f59e0b' : '#3b82f6',
                      color: isExpired ? '#64748b' : '#ffffff',
                      width: '100%',
                      justifyContent: 'center',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}
                  >
                    {isLocked ? "Locked" : isExpired ? "Missed" : "Attempt the Quiz"}
                  </button>
                </article>
              );
            })}
          </div>
        )}
        
        {sectionTitle("Coding Assessments", "Competitive programming tests assigned by your teacher. Complete algorithms within the time limits.", "View all")}
        {allCodingTests.length === 0 ? (
          <div className="panel" style={{ textAlign: 'center', padding: '40px 20px', background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '12px', marginBottom: '32px' }}>
            <h3 style={{ color: '#475569', margin: '0 0 8px 0' }}>No Active Coding Assessments</h3>
            <p style={{ color: '#64748b', margin: 0 }}>You don't have any competitive programming assessments right now.</p>
          </div>
        ) : (
          <div className="module-grid three">
            {allCodingTests.map((test, index) => {
              const start = new Date(test.createdAt); 
              const end = new Date(test.dueDate);
              const isLocked = now < start;
              const isExpired = now > end;

              return (
                <article className="module-card quiz-module" key={test.id || test._id} style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '260px', ...(isExpired ? {opacity: 0.7} : {}) }}>
                  {isExpired && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: '#ef4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px', textAlign: 'center' }}>Missed Assessment - Access Expired</div>}
                  
                  <span className={`module-code ${isLocked ? 'amber' : isExpired ? 'red' : 'violet'}`} style={{ marginTop: isExpired ? '16px' : '0', width: 'fit-content' }}>CT{index + 1}</span>
                  <h3 style={{ margin: '4px 0 0 0' }}>{test.title}</h3>
                  <p style={{ margin: 0 }}>{test.questions?.length || 0} Questions • {test.subject}</p>
                  {isExpired && <b style={{color: '#ef4444', margin: 0 }}>Expired on: {end.toLocaleString()}</b>}
                  {!isLocked && !isExpired && <b style={{ margin: 0 }}>Available Now! Due: {end.toLocaleString()}</b>}
                  
                  <button 
                    className={`primary-button ${isExpired || isLocked ? 'disabled-quiz-btn' : ''}`}
                    type="button" 
                    disabled={isLocked || isExpired}
                    onClick={() => setActiveCodingTest(test)}
                    style={{ 
                      marginTop: 'auto',
                      opacity: (isLocked || isExpired) ? 0.7 : 1, 
                      cursor: (isLocked || isExpired) ? 'not-allowed' : 'pointer',
                      backgroundColor: isExpired ? '#e2e8f0' : isLocked ? '#f59e0b' : '#8b5cf6',
                      color: isExpired ? '#64748b' : '#ffffff',
                      width: '100%',
                      justifyContent: 'center',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '6px',
                      fontWeight: 600
                    }}
                  >
                    {isLocked ? "Locked" : isExpired ? "Missed" : "Attempt the Quiz"}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  function renderBadges() {
    const earnedBadges = studentData.badges.filter((badge) => badge.earned);
    const lockedBadges = studentData.badges.filter((badge) => !badge.earned);
    const nextBadge = lockedBadges[0];

    return (
      <section className="role-view">
        {sectionTitle("Badge Journey", "Earned badges, locked badges, and the exact completion needed to unlock each one.")}
        <div className="badge-status-grid">
          <article className="badge-collection-card earned-list">
            <div>
              <p className="eyebrow">Badges you have</p>
              <h3>{earnedBadges.length} unlocked badges</h3>
              <span>These are already active on your student profile.</span>
            </div>
            <div className="earned-badge-row">
              {earnedBadges.map((badge) => (
                <span key={badge.name} title={badge.name}>{badge.emoji}<b>{badge.name}</b></span>
              ))}
            </div>
          </article>

          <article className="badge-collection-card next-badge-card">
            <div>
              <p className="eyebrow">Next unlock</p>
              <h3>{nextBadge.name}</h3>
              <span>{nextBadge.nextStep}</span>
            </div>
            <ProgressBar value={nextBadge.progress} label={`${nextBadge.progress}% complete`} tone="blue" />
          </article>
        </div>

        <div className="badge-roadmap-grid">
          {studentData.badges.map((badge) => (
            <article className={badge.earned ? "badge-detail-card earned" : "badge-detail-card"} key={badge.name}>
              <div className="badge-detail-head">
                <span className="badge-emoji">{badge.emoji}</span>
                <i>{badge.earned ? "Unlocked" : "Locked"}</i>
              </div>
              <h3>{badge.name}</h3>
              <p>{badge.detail}</p>
              <ProgressBar value={badge.progress} label={badge.current} tone={badge.earned ? "green" : "blue"} />
              <small>{badge.unlockRule}</small>
              <b>{badge.nextStep}</b>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderCalendar() {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStarts: 1 }); // Monday start
    const endDate = endOfWeek(monthEnd, { weekStarts: 1 });

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayEvents = dbEvents.filter(e => isSameDay(parseISO(e.date), cloneDay));
        
        let colorClass = "muted"; // Default out of month
        if (isSameMonth(day, monthStart)) {
          if (dayEvents.some(e => e.type === 'alert')) colorClass = "red";
          else if (dayEvents.some(e => e.type === 'deadline')) colorClass = "amber";
          else if (dayEvents.some(e => e.type === 'event')) colorClass = "blue";
          else colorClass = "green";
        }

        days.push(
          <div 
            className={`calendar-day ${colorClass}`} 
            key={day} 
            style={{ cursor: 'default' }}
          >
            {formattedDate}
            {dayEvents.length > 0 && <div style={{ fontSize: '10px', marginTop: '4px', color: '#1e293b' }}>{dayEvents[0].title}</div>}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="calendar-grid" key={day} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px' }}>{days}</div>);
      days = [];
    }

    return (
      <section className="role-view">
        <div className="section-title">
          <div>
            <h1>Institution Calendar</h1>
            <span>Monthly activity overview for classes, deadlines, and system events.</span>
          </div>
        </div>
        <div className="calendar-shell">
          <article className="panel calendar-panel">
            <div className="calendar-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2>{format(currentMonth, "MMMM yyyy")}</h2>
                <span>Important dates and system events.</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="panel-button" onClick={prevMonth} style={{ padding: '8px' }}><ChevronLeft size={20} /></button>
                <button className="panel-button" onClick={nextMonth} style={{ padding: '8px' }}><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="calendar-weekdays" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', marginBottom: '8px' }}>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <b key={d} style={{ color: '#64748b' }}>{d}</b>)}
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid #e2e8f0' }}>
              {rows}
            </div>
          </article>
          <article className="panel calendar-stats">
            {[
              ["Total Events", dbEvents.length.toString()],
              ["Alerts", dbEvents.filter(e => e.type === 'alert').length.toString()],
              ["Deadlines", dbEvents.filter(e => e.type === 'deadline').length.toString()],
            ].map(([label, value]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }

  function renderXp() {
    return (
      <section className="role-view">
        {sectionTitle("XP Progress", "Readable XP and next badge progress.")}
        <div className="split-panels">
          <article className="panel xp-panel">
            <div className="xp-ring" style={{ "--value": `${metrics.xpProgress}%` }}>
              <strong>{metrics.xpProgress}%</strong>
              <span>complete</span>
            </div>
            <div className="xp-lines">
              <p><strong>Current XP</strong><span>{studentData.xp.current}</span></p>
              <p><strong>Goal</strong><span>{studentData.xp.target}</span></p>
              <p><strong>Next Badge</strong><span>Quiz Master</span></p>
            </div>
          </article>
          <article className="panel">
            <h2>How XP grows</h2>
            <div className="xp-rule-list">
              <div className="xp-rule"><b>AS</b><span><strong>Submit assignment</strong><em>On-time uploads add XP.</em></span><i>+20 XP</i></div>
              <div className="xp-rule"><b>QZ</b><span><strong>Score well</strong><em>Quiz marks increase rewards.</em></span><i>+30 XP</i></div>
              <div className="xp-rule"><b>ST</b><span><strong>Keep streak</strong><em>Daily consistency adds bonus XP.</em></span><i>+10 XP</i></div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  function renderLeaderboard() {
    // 1. Calculate Real XP Leaderboard
    const xpMap = {};
    const students = dbUsers.filter(u => u.role === 'student');
    
    // Fallback to mock if dbUsers is not loaded or empty yet
    let activeLeaderboard = studentData.leaderboard;

    if (students.length > 0) {
      students.forEach(s => { xpMap[s.name] = 0; });
      
      const processSubmissions = (arr) => {
        arr.forEach(item => {
          if (item.submissions) {
            item.submissions.forEach(sub => {
              if (sub.grade) {
                // Grade might be "8/10", parse first number
                const gradeStr = sub.grade.split('/')[0];
                const gradeNum = parseInt(gradeStr, 10);
                if (!isNaN(gradeNum) && xpMap[sub.studentName] !== undefined) {
                  xpMap[sub.studentName] += gradeNum;
                } else if (!isNaN(gradeNum)) {
                  // If student wasn't in dbUsers but has submissions (e.g. mock student Aarav)
                  xpMap[sub.studentName] = (xpMap[sub.studentName] || 0) + gradeNum;
                }
              }
            });
          }
        });
      };

      processSubmissions(backendAssignments);
      processSubmissions(codingTests);

      // Add current user if not in map
      if (xpMap[studentData.profile.name] === undefined) {
        xpMap[studentData.profile.name] = 0;
      }

      const board = Object.keys(xpMap).map(name => ({
        name,
        xp: xpMap[name]
      })).sort((a, b) => b.xp - a.xp);

      board.forEach((item, idx) => { item.rank = idx + 1; });
      activeLeaderboard = board;
    }

    const topThree = activeLeaderboard.slice(0, 3);
    const currentRank = activeLeaderboard.find((item) => item.name === studentData.profile.name) || activeLeaderboard[0] || { rank: 1, xp: 0, name: studentData.profile.name };
    const gapToTopThree = topThree.length >= 3 && currentRank.rank > 3 ? topThree[2].xp - currentRank.xp : 0;

    return (
      <section className="role-view">
        {sectionTitle("Leaderboard", "Batch ranking with your current XP position and the gap to the top three.", "View full")}
        <div className="leaderboard-overview">
          <article className="leaderboard-rank-card">
            <p className="eyebrow">Your position</p>
            <h3>Rank #{currentRank.rank}</h3>
            <span>{currentRank.xp} XP collected in {studentData.batch.name}</span>
            <ProgressBar value={topThree.length > 0 ? Math.min(100, percent(currentRank.xp, topThree[0].xp)) : 0} label={currentRank.rank > 3 ? `${gapToTopThree} XP to enter top 3` : `You are in the top 3!`} tone="blue" />
          </article>

          <div className="podium-grid">
            {topThree.map((item) => (
              <article className={`podium-card rank-${item.rank}`} key={item.name}>
                <b>#{item.rank}</b>
                <strong>{item.name}</strong>
                <span>{item.xp} XP</span>
              </article>
            ))}
          </div>
        </div>

        <article className="panel leaderboard-panel detailed-leaderboard">
          {activeLeaderboard.map((item) => (
            <div className={item.name === studentData.profile.name ? "rank-row current" : "rank-row"} key={item.name}>
              <b>{item.rank}</b>
              <span>
                <strong>{item.name}</strong>
                <em>{item.name === studentData.profile.name ? "You - keep pushing toward top 3" : `${studentData.batch.name} batchmate`}</em>
              </span>
              <i>{item.xp} XP</i>
            </div>
          ))}
        </article>
      </section>
    );
  }

  function renderAnnouncements() {
    const studentNotices = dbNotices.filter(notice => notice.audience === 'All' || notice.audience === 'Students');
    return (
      <section className="role-view">
        <div className="view-head">
          <div>
            <p className="eyebrow">Campus Feed</p>
            <h2>Announcements</h2>
            <span>Important notices from the administration and faculty.</span>
          </div>
        </div>
        <article className="panel" style={{ marginTop: '24px' }}>
          <div className="stack-list">
            {studentNotices.length === 0 && <p style={{ color: '#64748b', padding: '16px' }}>No announcements published yet.</p>}
            {studentNotices.map((notice, idx) => (
              <div className="list-action-row" key={notice._id || notice.title || idx}>
                <b>{(notice.status || notice.title || 'N')[0]}</b>
                <div style={{ flex: 1, padding: '0 12px' }}>
                  <strong style={{ display: 'block' }}>{notice.title}</strong>
                  <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>{notice.status || 'Published'} • {new Date(notice.date || Date.now()).toLocaleDateString()}</span>
                  {notice.content && <p style={{ fontSize: '13px', color: '#334155', marginTop: '4px' }}>{notice.content}</p>}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }

  const views = {
    overview: renderOverview,
    classes: renderClasses,
    subjects: renderSubjects,
    assignments: renderAssignments,
    quizzes: renderQuizzes,
    badges: renderBadges,
    calendar: renderCalendar,
    xp: renderXp,
    leaderboard: renderLeaderboard,
    announcements: renderAnnouncements,
  };

  // If a test is active, hijack the entire UI to lock the student into the Test Environment Arena
  if (activeTest) {
    return <TestEnvironment test={activeTest} onExit={() => setActiveTest(null)} />;
  }
  
  if (activeCodingTest) {
    return <CodingWorkspace testId={activeCodingTest.id || activeCodingTest._id} onBack={() => setActiveCodingTest(null)} />;
  }

  if (activeSubject) {
    return (
      <RoleShell
        session={session}
        profile={studentData.profile}
        roleLabel="Student"
        roleTone="student"
        navItems={navItems}
        activeView={activeView}
        onViewChange={setActiveView}
        onLogout={onLogout}
      >
        <SubjectDetails 
          subject={activeSubject} 
          onBack={() => setActiveSubject(null)} 
        />
      </RoleShell>
    );
  }

  return (
    <RoleShell
      session={session}
      profile={studentData.profile}
      roleLabel="Student"
      roleTone="student"
      navItems={navItems}
      activeView={activeView}
      onViewChange={setActiveView}
      onLogout={onLogout}
    >
      {views[activeView]()}
      <ActionModal 
        action={action} 
        onClose={() => setAction(null)} 
        onSubmit={handleModalSubmit}
      />
    </RoleShell>
  );
}
