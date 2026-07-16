import { useState, useEffect } from "react";
import {
  BarChart3,
  BookCopy,
  CalendarClock,
  Calendar,
  ClipboardCheck,
  FilePenLine,
  Megaphone,
  MessageSquarePlus,
  Presentation,
  UploadCloud,
  UsersRound,
  Trash2,
  TerminalSquare,
  ChevronLeft,
  ChevronRight,
  Trophy
} from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parseISO, parse, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestBuilder from "../components/TestBuilder.jsx";
import CodeBuilder from "../components/CodeBuilder.jsx";
import SubjectDetails from "../components/SubjectDetails.jsx";
import CalendarWorkspace from "../components/CalendarWorkspace.jsx";
import LeaderboardWorkspace from "../components/LeaderboardWorkspace.jsx";
import { teacherData as teacherDataMock } from "../data/lmsData.js";
import { getTeacherMetrics, percent } from "../data/metrics.js";
import "./TeacherDashboard.css";

const navItems = [
  { id: "overview", label: "Dashboard", icon: BarChart3 },
  { id: "calendar", label: "Calendar", icon: Calendar },
  { id: "subjects", label: "Subjects", icon: BookCopy },
  { id: "assignments", label: "Assignments", icon: UploadCloud },
  { id: "submissions", label: "Submissions", icon: UsersRound },
  { id: "classes", label: "Classes", icon: CalendarClock },
  { id: "tests", label: "Test Builder", icon: FilePenLine },
  { id: "code", label: "Code Builder", icon: TerminalSquare },

  { id: "actions", label: "Feedback", icon: MessageSquarePlus },
  { id: "announcements", label: "Notices", icon: Megaphone },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
];

function TeacherMetric({ code, label, value, detail, tone = "blue" }) {
  return (
    <article className={`dash-metric ${tone}`}>
      <span className="metric-code">{code}</span>
      <div>
        <strong>{value}</strong>
        <b>{label}</b>
        <em>{detail}</em>
      </div>
    </article>
  );
}

export default function TeacherDashboard({ session, onLogout }) {
  const [activeView, setActiveViewState] = useState("overview");

  const setActiveView = (view) => {
    setActiveViewState(view);
    localStorage.setItem("teacher_active_view", view);
  };
  const [action, setAction] = useState(null);
  const [activeSubject, setActiveSubject] = useState(null);
  const [newClassTitle, setNewClassTitle] = useState("");
  const [newClassDate, setNewClassDate] = useState("");
  const [newClassTime, setNewClassTime] = useState("");
  const [newClassRoom, setNewClassRoom] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [dbSubjects, setDbSubjects] = useState([]);
  const [dbFeedback, setDbFeedback] = useState([]);
  const [dbClasses, setDbClasses] = useState([]);
  const [dbNotices, setDbNotices] = useState([]);
  const [dbEvents, setDbEvents] = useState([]);
  const [dbUsers, setDbUsers] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    fetch('/api/lms-data?type=subjects').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbSubjects(data) }).catch(console.error);
    fetch('/api/lms-data?type=events').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbEvents(data) }).catch(console.error);
    fetch('/api/lms-data?type=feedback').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbFeedback(data) }).catch(console.error);
    fetch('/api/lms-data?type=classes').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbClasses(data) }).catch(console.error);
    fetch('/api/lms-data?type=notices').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbNotices(data) }).catch(console.error);
    fetch('/api/lms-data?type=events').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbEvents(data) }).catch(console.error);
    fetch('/api/lms-data?type=users').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbUsers(data) }).catch(console.error);
  }, []);

  const teacherData = {
    ...teacherDataMock,
    subjects: dbSubjects.length > 0 ? dbSubjects : (teacherDataMock.subjects || []),
    recentFeedback: dbFeedback.length > 0 ? dbFeedback : (teacherDataMock.recentFeedback || []),
  };

  const metrics = getTeacherMetrics(teacherData);

  // Next.js Backend State for Assignments & Coding Tests
  const [backendAssignments, setBackendAssignments] = useState([]);
  const [backendCodingTests, setBackendCodingTests] = useState([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const [assnRes, codeRes] = await Promise.all([
        fetch('/api/assignments'),
        fetch('/api/coding-tests')
      ]);
      
      if (assnRes.ok) {
        const data = await assnRes.json();
        setBackendAssignments(data);
      }
      if (codeRes.ok) {
        const codeData = await codeRes.json();
        setBackendCodingTests(codeData);
      }
    } catch (err) {
      console.error("Failed to fetch assignments:", err);
    } finally {
      setLoadingAssignments(false);
    }
  };

  const handleModalSubmit = async (data) => {
    if (!action) return;

    if (data.actionType === 'publish-announcement') {
      const res = await fetch('/api/lms-data?type=notices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          audience: data.audience,
          content: data.content,
          publisher: "Teacher",
        })
      });
      if (res.ok) {
        const newNotice = await res.json();
        setDbNotices([newNotice, ...dbNotices]);
        setAction(null);
      } else {
        alert("Failed to publish announcement.");
      }
    } else if (data.actionType === 'add-event') {
      const res = await fetch('/api/lms-data?type=events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          date: data.date,
          type: data.type,
          description: data.description
        })
      });
      if (res.ok) {
        const newEvent = await res.json();
        setDbEvents([...dbEvents, newEvent]);
        setAction(null);
      } else {
        alert("Failed to add event.");
      }
    } else if (action.kicker === "Publish assignment" || action.kicker === "Write Instructions" || action.kicker === "Attach File") {
      try {
        const isoDate = data.dueDate && data.dueTime 
          ? new Date(`${data.dueDate}T${data.dueTime}`).toISOString() 
          : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // Default +7 days

        const payload = {
          title: data.title || action.title || "New Assignment",
          subject: data.subject || action.subjectContext || "Data Structures",
          dueDate: isoDate,
          maxMarks: data.maxMarks ? parseInt(data.maxMarks, 10) : 100,
          fileUrl: data.fileUrl,
          contentBody: data.body
        };

        // Optimistic UI Update
        const tempAssignment = {
          id: "temp-" + Date.now(),
          ...payload
        };
        setBackendAssignments([tempAssignment, ...backendAssignments]);
        setAction(null); // Close modal instantly

        const res = await fetch('/api/assignments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          fetchAssignments();
        } else {
          console.error("Failed to create assignment");
          setBackendAssignments(backendAssignments); // Revert
          alert("Failed to publish assignment.");
        }
      } catch (err) {
        console.error("Error posting assignment:", err);
        setBackendAssignments(backendAssignments); // Revert
        alert("Network error publishing assignment.");
      }

    } else if (action.type === "create-coding-question") {
      try {
        const payload = {
          title: data.title || "Untitled Algorithm",
          description: data.description || "Description pending...",
          imageUrl: data.imageUrl || "",
          difficulty: data.difficulty,
          timeLimit: data.timeLimit,
          testCases: data.testCases
        };

        const res = await fetch('/api/coding-questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          console.error("Failed to save coding question");
          return;
        }

        const newQuestion = await res.json();

        if (data.publishImmediately) {
          const isoDate = data.dueDate && data.dueTime 
            ? new Date(`${data.dueDate}T${data.dueTime}`).toISOString() 
            : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
            
          const testPayload = {
            title: newQuestion.title,
            subject: data.subject || "Computer Science",
            dueDate: isoDate,
            imageUrl: newQuestion.imageUrl || "",
            questions: [newQuestion._id]
          };

          // Optimistic UI Update
          const tempTest = {
            id: "temp-" + Date.now(),
            ...testPayload
          };
          setBackendCodingTests([tempTest, ...backendCodingTests]);
          setAction(null); // Close modal instantly
          
          const testRes = await fetch('/api/coding-tests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testPayload)
          });
          
          if (testRes.ok) {
            fetchAssignments();
          } else {
            console.error("Failed to publish coding test");
            setBackendCodingTests(backendCodingTests); // Revert
          }
        } else {
          setAction(null);
        }
      } catch (err) {
        console.error("Error creating coding question:", err);
      }
    } else if (data.actionType === "initiate-grade") {
      openGradeSubmission(data.assignmentId, data.submission);
    } else if (action.type === "grade") {
      try {
        const res = await fetch(`/api/assignments/${data.assignmentId}/submissions/${data.submissionId}/grade`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ grade: data.grade, feedback: data.feedback })
        });
        if (res.ok) {
          fetchAssignments();
        } else {
          console.error("Failed to submit grade");
        }
      } catch (err) {
        console.error("Error submitting grade:", err);
      }
    } else if (action.type === "schedule" || data.actionType === "schedule") {
      try {
        const payload = {
          title: data.title,
          date: data.date,
          time: data.time,
          room: data.room
        };
        const res = await fetch('/api/lms-data?type=classes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const newClass = await res.json();
          setDbClasses([newClass, ...dbClasses]); // Optimistic update
          setAction(null);
        } else {
          console.error("Failed to schedule class");
        }
      } catch (err) {
        console.error("Error scheduling class:", err);
      }
    } else if (data.actionType === 'publish-announcement') {
      try {
        const res = await fetch('/api/lms-data?type=notices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: data.title,
            audience: data.audience,
            content: data.content,
            date: new Date().toISOString(),
            status: "Published",
            type: "notice"
          })
        });
        if (res.ok) {
          const newNotice = await res.json();
          setDbNotices([newNotice, ...dbNotices]);
          setAction(null);
        } else {
          alert("Failed to publish announcement.");
        }
      } catch (err) {
        console.error("Error publishing announcement:", err);
      }
    } else if (data.actionType === "create-subject") {
      try {
        const payload = {
          title: data.title,
          section: data.section,
          instructor: data.instructor,
          enrolled: 0,
          assignments: 0,
          progress: 0,
          contentReady: 0,
          submitted: 0,
          materials: []
        };
        const res = await fetch('/api/lms-data?type=subjects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const newSubject = await res.json();
          setDbSubjects([newSubject, ...dbSubjects]);
          setAction(null);
        }
      } catch (err) {
        console.error("Error creating subject:", err);
      }
    } else if (data.actionType === "upload-material") {
      try {
        const payload = {
          action: "add_material",
          subjectId: data.subjectId,
          title: data.title,
          fileUrl: data.fileUrl,
          addedBy: "Teacher"
        };
        const res = await fetch('/api/lms-data?type=subjects', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const updatedSubject = await res.json();
          setDbSubjects(dbSubjects.map(s => s._id === updatedSubject._id ? updatedSubject : s));
          setAction(null);
        }
      } catch (err) {
        console.error("Error uploading material:", err);
      }
    }
  };

  const [deletingAssignmentId, setDeletingAssignmentId] = useState(null);

  const deleteAssignment = async (id) => {
    // Optimistic UI Update: Instantly remove from screen
    const previousAssignments = [...backendAssignments];
    setBackendAssignments(backendAssignments.filter(a => a.id !== id));

    setDeletingAssignmentId(id);
    try {
      const res = await fetch(`/api/assignments?id=${id}`, { method: 'DELETE' });
      if (!res.ok) {
        setBackendAssignments(previousAssignments); // Revert on failure
        alert("Failed to delete assignment. Please try again.");
      }
    } catch (err) {
      setBackendAssignments(previousAssignments);
      console.error(err);
      alert("Network error during deletion.");
    } finally {
      setDeletingAssignmentId(null);
    }
  };

  const deleteCodingTest = async (id) => {
    try {
      const res = await fetch(`/api/coding-tests?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAssignments();
      } else {
        console.error("Failed to delete coding test");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteClass = async (id) => {
    setDbClasses(dbClasses.filter(c => (c.id || c._id) !== id));
    try {
      await fetch(`/api/lms-data?type=classes&id=${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteSubject = async (id) => {
    setDbSubjects(dbSubjects.filter(s => (s.id || s._id) !== id));
    try {
      await fetch(`/api/lms-data?type=subjects&id=${id}`, { method: 'DELETE' });
    } catch (err) {
      console.error(err);
    }
  };

  function openSubject(subject) {
    setActiveSubject(subject);
  }

  function openCreateSubject() {
    setAction({
      kicker: "Add Subject",
      title: "Create a new subject",
      description: "Define a new subject to track curriculum and materials.",
      type: "create-subject",
      primaryLabel: "Save Subject",
    });
  }

  function openUploadMaterial(subject) {
    setAction({
      kicker: "Upload Material",
      title: `Upload notes to ${subject.title}`,
      description: "Attach reference files, notes, or external links for students.",
      type: "upload-material",
      subjectId: subject._id || subject.id,
      primaryLabel: "Upload Material",
    });
  }

  function openAssignment(assignment) {
    setAction({
      kicker: "View assignment",
      title: assignment.title,
      description: assignment.contentBody || assignment.description || "Review this assignment.",
      fileUrl: assignment.fileUrl,
      type: "marks",
      details: [
        { label: "Subject", value: assignment.subject },
        { label: "Due date", value: assignment.due },
        { label: "Maximum marks", value: assignment.maxMarks },
      ],
      prefill: { status: assignment.status },
      primaryLabel: "Close",
    });
  }

  function openSchedule() {
    setAction({
      kicker: "Schedule class",
      title: "Create class schedule",
      description: "Add or update class details for students.",
      type: "schedule",
      prefill: {
        title: "Data Structures - CSE 4A",
        time: "09:30 AM, Monday",
        room: "Lab 3 or online meeting",
      },
      primaryLabel: "Save class",
    });
  }

  function openQuizMarks(quiz) {
    setAction({
      kicker: "Quiz marks publishing",
      title: quiz.title,
      description: "Review attempts and publish marks for students.",
      type: "marks",
      details: [
        { label: "Attempted", value: `${quiz.attempted}/${quiz.total}` },
        { label: "Average", value: `${quiz.average}%` },
        { label: "Status", value: quiz.published ? "Published" : "Ready" },
      ],
      prefill: { status: quiz.published ? "Marks published" : "Ready to publish" },
      primaryLabel: "Publish marks",
    });
  }

  function openTeacherAction(title) {
    setAction({
      kicker: "Publish assignment",
      title: title,
      description: "Draft a new assignment for your students.",
      type: "write",
      writeTitleLabel: "Assignment Title",
      writeTitlePlaceholder: "E.g., Graph traversal lab",
      writeBodyLabel: "Detailed instructions",
      writeBodyPlaceholder: "Write the assignment objectives and instructions here...",
      primaryLabel: "Publish Assignment",
    });
  }

  function openAssignmentUpload(assignment) {
    setAction({
      kicker: "Attach File",
      title: `Upload material to ${assignment.title}`,
      description: "Attach reference files, notes, or starter code.",
      type: "upload",
      noteLabel: "Teacher remarks",
      notePlaceholder: "Any instructions regarding this file...",
      primaryLabel: "Upload file",
    });
  }

  function openGradeSubmission(assignmentId, sub) {
    setAction({
      kicker: "Grade submission",
      title: "Evaluate Work",
      description: `Grade submission by ${sub.studentName}.`,
      type: "grade",
      assignmentId,
      submissionId: sub._id || sub.id,
      prefill: { grade: sub.grade || "", feedback: sub.feedback || "" },
      primaryLabel: "Submit Feedback",
    });
  }

  function openWriteContent(assignment) {
    setAction({
      kicker: "Publish assignment",
      title: "Write details for " + assignment.title,
      description: "Provide comprehensive instructions, guidelines, and optionally attach a file for this assignment.",
      type: "upload",
      primaryLabel: "Publish to students",
      writeBodyLabel: "Assignment Description",
      writeBodyPlaceholder: "Write the assignment prompt and details here...",
      assignmentId: assignment.id,
    });
  }

  function openSubmissions(assignment) {
    setAction({
      kicker: "Submissions Monitor",
      title: assignment.title,
      description: `Viewing submissions for ${assignment.subject}`,
      type: "view-submissions",
      submissions: assignment.submissions || [],
      assignmentId: assignment.id,
      primaryLabel: "Close",
    });
  }


  function openCreateCodingQuestion() {
    setAction({
      id: "create-coding-question",
      kicker: "Create Coding Question",
      title: "Author New Algorithm",
      description: "Define a new competitive programming problem, test cases, and time limits.",
      type: "create-coding-question",
      primaryLabel: "Publish Question",
    });
  }

  function sectionTitle(title, subtitle, actionLabel, actionHandler) {
    return (
      <div className="view-head">
        <div>
          <p className="eyebrow">Teacher module</p>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
        {actionLabel && <button className="panel-button" type="button" onClick={actionHandler}>{actionLabel}</button>}
      </div>
    );
  }

  function renderOverview() {
    return (
      <section className="role-view">
        <div className="overview-layout">
          <article className="hero-panel hero-panel-3d teacher-hero">
            <div className="teacher-figure-scene" aria-hidden="true">
              <div className="figure-board">
                <div className="board-chart">
                  <i /><i /><i /><i />
                </div>
              </div>
              <div className="desk-paper" />
              <span className="floating-sticker sticker-grade">A+</span>
              <span className="floating-sticker sticker-check">✓</span>
              <span className="floating-sticker sticker-star">★</span>
            </div>
            <div className="hero-copy">
              <p className="eyebrow">Teacher Workspace</p>
              <h1>Manage teaching work from <span>one calm control panel.</span></h1>
              <p>Publish assignments, schedule classes, monitor subjects, and release quiz marks without crowding every feature into one screen.</p>
              <div className="hero-pills">
                <span><b>{metrics.activeCourses}</b> Subjects</span>
                <span><b>{metrics.gradingQueue}</b> Pending Grades</span>
                <span className="status-pill">Workflow {metrics.workflowIndex}%</span>
              </div>
            </div>
          </article>
          <article className="panel schedule-panel faculty-queue">
            <div className="panel-head">
              <div>
                <h2>Today's Faculty Queue</h2>
                <span>Teaching actions that need attention.</span>
              </div>
            </div>
            <div className="compact-list">
              <button className="compact-item green" type="button" onClick={() => setActiveView("assignments")}><b>1</b><span><strong>Publish assignment</strong><em>Graph traversal lab</em></span><i>Ready</i></button>
              <button className="compact-item blue" type="button" onClick={() => setActiveView("calendar")}><b>2</b><span><strong>Global Calendar</strong><em>All upcoming schedules</em></span><i>Calendar</i></button>
              <button className="compact-item amber" type="button" onClick={() => setActiveView("classes")}><b>3</b><span><strong>Scheduled Classes</strong><em>View upcoming classes</em></span><i>Plan</i></button>
            </div>
          </article>
        </div>
        <div className="dash-metric-grid">
          <TeacherMetric code="SB" label="Subjects under you" value={metrics.activeCourses} detail={`${metrics.totalEnrolled} students enrolled`} tone="green" />
          <TeacherMetric code="SU" label="Submission rate" value={`${metrics.submissionRate}%`} detail="Submitted across sections" />
          <TeacherMetric code="GQ" label="Review queue" value={metrics.gradingQueue} detail="Student files need grading" tone="amber" />
          <TeacherMetric code="WI" label="Workflow index" value={`${metrics.workflowIndex}%`} detail="Calculated from teaching activity" tone="violet" />
        </div>
      </section>
    );
  }

  function renderSubjects() {
    return (
      <section className="role-view">
        {sectionTitle("Subjects Under Teacher", "All subjects assigned to the teacher, with student count and content readiness.", "Add Subject", openCreateSubject)}
        <div className="module-grid three">
          {teacherData.subjects.map((subject) => (
            <article className="module-card subject-module" key={subject.title}>
              <span className="module-code green">{(subject.title || ' ')[0]}</span>
              <small>{subject.section}</small>
              <h3>{subject.title}</h3>
              <p>{subject.enrolled} students - {subject.materials ? subject.materials.length : 0} materials</p>
              <ProgressBar value={subject.contentReady} label="Content ready" tone="green" />
              <button type="button" onClick={() => deleteSubject(subject.id || subject._id)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }} title="Delete subject">
                <Trash2 size={18} />
              </button>
              <div className="button-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => openSubject(subject)}>Create chapters</button>
                <button type="button" className="ghost-button" onClick={() => openUploadMaterial(subject)}>Upload Material</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderAssignments() {
    return (
      <section className="role-view">
        {sectionTitle("Create Assignment", "Teachers can publish the assignment to be performed by students, with due dates and marks.", "New assignment", () => openTeacherAction("New assignment"))}
        <div className="module-grid three">
          {loadingAssignments && <p>Loading assignments from server...</p>}
          
          {/* Render standard assignments */}
          {!loadingAssignments && backendAssignments.map((assignment) => {
            const formattedDate = new Date(assignment.dueDate).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
            return (
              <article className="module-card" key={assignment.id} style={{ position: 'relative', borderTop: '3px solid var(--primary)' }}>
                <span className="module-code" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>AS</span>
                <h3>{assignment.title}</h3>
                <p>{assignment.subject}</p>
                <b>Due {formattedDate} - {assignment.maxMarks} marks</b>
                
                <button type="button" onClick={() => deleteAssignment(assignment.id)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', color: deletingAssignmentId === assignment.id ? '#9ca3af' : '#ef4444', cursor: deletingAssignmentId === assignment.id ? 'not-allowed' : 'pointer', padding: '4px' }} title="Delete assignment" disabled={deletingAssignmentId === assignment.id}>
                  <Trash2 size={18} />
                </button>

                <div className="button-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <button type="button" onClick={() => openAssignment(assignment)}>{assignment.status || "Published"}</button>
                  <button type="button" className="ghost-button" onClick={() => openAssignmentUpload(assignment)}>Upload</button>
                  <button type="button" className="ghost-button" onClick={() => openWriteContent(assignment)}>Write</button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  function renderSubmissions() {
    return (
      <section className="role-view">
        {sectionTitle("Who Submitted", "Submission monitor shows student assignments pushed to the backend server.")}
        <div className="module-grid three">
          {!loadingAssignments && backendAssignments.map((item) => (
            <article className="module-card" key={item.id}>
              <span className="module-code green">SB</span>
              <h3>{item.title}</h3>
              <p>{item.subject}</p>
              <div style={{ marginTop: '12px', padding: '12px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <b style={{ fontSize: '18px', color: '#0f172a', display: 'block' }}>{item.submissions?.length || 0}</b>
                <span style={{ fontSize: '12px', color: '#64748b' }}>submissions received</span>
              </div>
              <button 
                type="button" 
                style={{ marginTop: '16px', width: '100%' }}
                onClick={() => openSubmissions(item)}
              >
                View Submissions
              </button>
            </article>
          ))}
          {!loadingAssignments && backendAssignments.length === 0 && (
             <p style={{color: '#666'}}>No assignments created yet.</p>
          )}
        </div>
      </section>
    );
  }

  const handleScheduleClass = async (e) => {
    e.preventDefault();
    if (!newClassTitle || !newClassTime || !newClassRoom || !newClassDate) return;
    try {
      const res = await fetch('/api/lms-data?type=classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newClassTitle, date: newClassDate, time: newClassTime, room: newClassRoom })
      });
      if (res.ok) {
        const newClass = await res.json();
        setDbClasses([newClass, ...dbClasses]);
        setNewClassTitle("");
        setNewClassDate("");
        setNewClassTime("");
        setNewClassRoom("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  function renderClasses() {
    const localizer = dateFnsLocalizer({
      format, parse, startOfWeek, getDay, locales: { 'en-US': enUS }
    });
    
    return (
      <section className="role-view">
        {sectionTitle("Classes", "View scheduled classes and events on your calendar.")}
        
        {/* Preview List & Calendar */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Upcoming Classes</h3>
            <div className="compact-list" style={{ display: 'grid', gap: '12px' }}>
              {dbClasses.length === 0 && <p style={{ color: '#64748b' }}>No classes scheduled.</p>}
              {dbClasses.map(cls => (
                <div key={cls.id || cls._id} className="list-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    <strong style={{ fontSize: '16px' }}>{cls.title}</strong>
                    <span className="meta">{cls.time} • {cls.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ flex: '2 1 600px', background: 'white', padding: '16px', borderRadius: '12px', border: '1px solid var(--line)', height: '600px' }}>
            <BigCalendar
              localizer={localizer}
              events={[
                ...dbClasses.map(c => {
                  let startDate = new Date();
                  return { title: `Class: ${c.title} (${c.room})`, start: startDate, end: startDate, allDay: false, resource: c }
                }),
                ...dbEvents.map(e => ({ title: `Event: ${e.title}`, start: parseISO(e.date), end: parseISO(e.date), allDay: true, resource: e }))
              ]}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              views={['month', 'week', 'day']}
              defaultView="month"
              eventPropGetter={(event) => {
                let backgroundColor = '#3b82f6';
                if (event.title.startsWith('Event')) backgroundColor = '#8b5cf6';
                return { style: { backgroundColor, borderRadius: '4px', border: 'none' } };
              }}
            />
          </div>
        </div>
      </section>
    );
  }



  function renderMarks() {
    return (
      <section className="role-view">
        {sectionTitle("Quiz Marks Center", "Publish marks and see how many students have already given the quiz.")}
        <div className="module-grid three">
          {backendCodingTests.length === 0 && <p style={{color: '#64748b'}}>No quizzes found in the LMS.</p>}
          {backendCodingTests.map((quiz) => {
            const attempted = quiz.submissions ? quiz.submissions.length : 0;
            return (
              <article className="module-card quiz-module" key={quiz.id || quiz._id}>
                <span className="module-code green">QZ</span>
                <h3>{quiz.title}</h3>
                <p style={{ marginTop: '8px', color: '#475569' }}>{quiz.subject}</p>
                <div style={{ margin: '16px 0' }}>
                  <b>{attempted} student{attempted !== 1 ? 's' : ''} attempted</b>
                </div>
                <button type="button" onClick={() => {
                  setSelectedQuiz(quiz);
                  setActiveView('quiz-attempts-view');
                }}>View Attempted</button>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  function renderQuizAttempts() {
    if (!selectedQuiz) return null;
    
    // In our backend, quiz submissions are stored in `submissions` array
    const attempts = selectedQuiz.submissions || [];

    return (
      <section className="role-view">
        <div className="view-head">
          <div>
            <p className="eyebrow">Quiz Marks Center</p>
            <h2>{selectedQuiz.title} Attempts</h2>
            <span>Review and grade student quiz submissions.</span>
          </div>
          <button className="panel-button" onClick={() => setActiveView('marks')}>Back to Quizzes</button>
        </div>
        
        <div className="panel" style={{ marginTop: '24px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Student Submissions</h3>
          {attempts.length === 0 && <p style={{ color: '#64748b' }}>No students have attempted this quiz yet.</p>}
          
          <div className="stack-list">
            {attempts.map((sub, idx) => (
              <div key={idx} className="list-action-row" style={{ alignItems: 'flex-start', padding: '16px' }}>
                <b style={{ background: 'var(--primary)', color: 'white' }}>{(sub.studentName && sub.studentName[0]) || '?'}</b>
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: '16px' }}>{sub.studentName || "Unknown Student"}</strong>
                  <br />
                  <span style={{ fontSize: '12px', color: '#64748b' }}>Submitted recently</span>
                  
                  {(sub.grade || sub.feedback) && (
                    <div style={{ marginTop: '8px', padding: '8px', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                      {sub.grade && <strong style={{ color: '#0369a1', display: 'block', marginBottom: '2px' }}>Grade: {sub.grade}</strong>}
                      {sub.feedback && <span style={{ color: '#334155' }}>{sub.feedback}</span>}
                    </div>
                  )}
                </div>
                <button 
                  className="ghost-button" 
                  style={{ padding: '6px 12px', fontSize: '12px', border: '1px solid #cbd5e1' }}
                  onClick={() => openGradeSubmission(selectedQuiz.id, sub)}
                >
                  {sub.grade || sub.feedback ? "Edit Marks" : "Give Marks"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function renderClasses() {
    return (
      <section className="role-view">
        {sectionTitle("Scheduled Classes", "View all upcoming classes scheduled by the administration.")}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 100%' }}>
            <div className="compact-list" style={{ display: 'grid', gap: '12px' }}>
              {dbClasses.length === 0 && <p style={{ color: '#64748b' }}>No classes scheduled.</p>}
              {dbClasses.map(cls => (
                <div key={cls.id || cls._id} className="list-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid var(--line)'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    <strong style={{ fontSize: '16px' }}>{cls.title}</strong>
                    <span className="meta">{cls.time} • {cls.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function renderFeedback() {
    return (
      <section className="role-view">
        {sectionTitle("Student Feedback", "Direct messages and feedback sent to you by students.")}
        <div className="module-grid three">
          {teacherData.recentFeedback.length === 0 && <p style={{color: '#64748b'}}>No feedback received yet.</p>}
          {teacherData.recentFeedback.map((fb, idx) => (
            <article className="module-card" key={fb._id || idx} style={{ borderTop: '3px solid #8b5cf6' }}>
              <span className="module-code" style={{ backgroundColor: '#8b5cf6', color: 'white' }}>FB</span>
              <h3>From: {fb.studentName || "Anonymous Student"}</h3>
              <p style={{ marginTop: '8px', color: '#334155', fontStyle: 'italic', flex: 1 }}>"{fb.message || fb.content}"</p>
              <div style={{ marginTop: '12px', fontSize: '12px', color: '#94a3b8' }}>
                {new Date(fb.date).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  const deleteNotice = async (id) => {
    if (!id) return;
    if (!confirm("Are you sure you want to delete this notice?")) return;
    try {
      const res = await fetch(`/api/lms-data?type=notices&id=${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setDbNotices(dbNotices.filter(n => (n.id || n._id) !== id));
      } else {
        alert("Failed to delete notice.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete notice.");
    }
  };

  function renderAnnouncements() {
    return (
      <section className="role-view">
        {sectionTitle("Class Notices", "Announcements and reminders for students.", "New announcement", () => setAction({ type: 'publish-announcement', title: 'New announcement', kicker: 'Announcements', primaryLabel: 'Publish' }))}
        <article className="panel">
          <div className="stack-list">
            {dbNotices.length === 0 && <p style={{ color: '#64748b', padding: '16px' }}>No announcements published yet.</p>}
            {dbNotices.map((notice, idx) => (
              <div className="list-action-row" key={notice._id || notice.title || idx}>
                <b>{(notice.status || notice.title || 'N')[0]}</b>
                <div style={{ flex: 1, padding: '0 12px' }}>
                  <strong style={{ display: 'block' }}>{notice.title}</strong>
                  <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>{notice.status || 'Draft'} - {notice.audience || 'All'} • {new Date(notice.date || Date.now()).toLocaleDateString()}</span>
                  {notice.content && <p style={{ fontSize: '13px', color: '#334155', marginTop: '4px' }}>{notice.content}</p>}
                </div>
                {(notice._id || notice.id) && (
                  <button 
                    type="button" 
                    onClick={() => deleteNotice(notice._id || notice.id)} 
                    style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px' }}
                    title="Delete notice"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }

  const views = {
    overview: renderOverview,
    calendar: () => <CalendarWorkspace classes={dbClasses} notices={dbNotices} assignments={backendAssignments} subjects={dbSubjects} dbEvents={dbEvents} />,
    classes: renderClasses,
    subjects: renderSubjects,
    assignments: renderAssignments,
    submissions: renderSubmissions,
    tests: () => (
      <section className="role-view">
        <TestBuilder 
          refreshTrigger={backendAssignments.length}
          onPublish={() => {
            fetchAssignments();
          }}
        />
      </section>
    ),
    code: () => (
      <section className="role-view">
        <CodeBuilder 
          refreshTrigger={backendCodingTests.length}
          openCreateCodingQuestion={openCreateCodingQuestion}
          onPublish={() => {
            fetchAssignments();
          }}
        />
      </section>
    ),
    'quiz-attempts-view': renderQuizAttempts,

    actions: renderFeedback,
    announcements: renderAnnouncements,
    leaderboard: () => (
      <LeaderboardWorkspace 
        users={dbUsers} 
        assignments={backendAssignments} 
        codingTests={backendCodingTests} 
        currentUser={teacherData.profile} 
      />
    ),
  };

  if (activeSubject) {
    return (
      <RoleShell
        session={session}
        profile={teacherData.profile}
        roleLabel="Teacher"
        roleTone="teacher"
        navItems={navItems}
        activeView={activeView}
        onViewChange={setActiveView}
        onLogout={onLogout}
      >
        <SubjectDetails 
          subject={activeSubject} 
          onBack={() => setActiveSubject(null)} 
          onUpdate={(updated) => {
            setDbSubjects(dbSubjects.map(s => (s._id === updated._id || s.id === updated.id) ? updated : s));
            if (activeSubject && (activeSubject._id === updated._id || activeSubject.id === updated.id)) {
              setActiveSubject(updated);
            }
          }}
          role="teacher"
        />
      </RoleShell>
    );
  }

  return (
    <RoleShell
      session={session}
      profile={teacherData.profile}
      roleLabel="Teacher"
      roleTone="teacher"
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
