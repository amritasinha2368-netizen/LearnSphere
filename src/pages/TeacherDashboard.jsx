import { useState, useEffect } from "react";
import {
  BarChart3,
  BookCopy,
  CalendarClock,
  ClipboardCheck,
  FilePenLine,
  Megaphone,
  MessageSquarePlus,
  Presentation,
  UploadCloud,
  UsersRound,
  Trash2,
  TerminalSquare
} from "lucide-react";
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestBuilder from "../components/TestBuilder.jsx";
import CodeBuilder from "../components/CodeBuilder.jsx";
import { teacherData } from "../data/lmsData.js";
import { getTeacherMetrics, percent } from "../data/metrics.js";
import "./TeacherDashboard.css";

const navItems = [
  { id: "overview", label: "Dashboard", icon: BarChart3 },
  { id: "subjects", label: "Subjects", icon: BookCopy },
  { id: "assignments", label: "Assignments", icon: UploadCloud },
  { id: "submissions", label: "Submissions", icon: UsersRound },
  { id: "classes", label: "Schedule Class", icon: CalendarClock },
  { id: "tests", label: "Test Builder", icon: FilePenLine },
  { id: "code", label: "Code Builder", icon: TerminalSquare },
  { id: "marks", label: "Quiz Marks", icon: ClipboardCheck },
  { id: "actions", label: "Feedback", icon: MessageSquarePlus },
  { id: "announcements", label: "Notices", icon: Megaphone },
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
  const [activeView, setActiveView] = useState("overview");
  const [action, setAction] = useState(null);
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

    if (action.kicker === "Publish assignment" || action.kicker === "Write Instructions" || action.kicker === "Attach File") {
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

        const res = await fetch('/api/assignments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          fetchAssignments();
        } else {
          console.error("Failed to create assignment");
        }
      } catch (err) {
        console.error("Error posting assignment:", err);
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
            questions: [newQuestion.id]
          };
          
          const testRes = await fetch('/api/coding-tests', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testPayload)
          });
          
          if (testRes.ok) {
            fetchAssignments();
          } else {
            console.error("Failed to publish coding test");
          }
        }
      } catch (err) {
        console.error("Error posting coding question:", err);
      }
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
    }
  };

  const deleteAssignment = async (id) => {
    try {
      const res = await fetch(`/api/assignments/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAssignments();
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCodingTest = async (id) => {
    try {
      const res = await fetch(`/api/coding-tests/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchAssignments();
      } else {
        console.error("Failed to delete coding test");
      }
    } catch (err) {
      console.error(err);
    }
  };

  function openSubject(subject) {
    setAction({
      kicker: "Subject management",
      title: subject.title,
      description: "Manage content, assignments, student submissions, and quiz marks for this subject.",
      details: [
        { label: "Section", value: subject.section },
        { label: "Students", value: subject.enrolled },
        { label: "Assignments", value: subject.assignments },
      ],
      primaryLabel: "Open subject",
    });
  }

  function openAssignment(assignment) {
    setAction({
      kicker: "View assignment",
      title: assignment.title,
      description: "Review this assignment.",
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
      kicker: "Write Instructions",
      title: assignment.title,
      description: "Write detailed text instructions or content directly into the LMS.",
      type: "write",
      subjectContext: assignment.subject,
      writeTitleLabel: "Section title",
      writeTitlePlaceholder: "E.g., Lab Requirements",
      writeBodyLabel: "Detailed instructions",
      writeBodyPlaceholder: "Write the assignment objectives and instructions here...",
      primaryLabel: "Save content",
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
              <button className="compact-item blue" type="button" onClick={() => setActiveView("submissions")}><b>2</b><span><strong>Review submissions</strong><em>13 students pending</em></span><i>Open</i></button>
              <button className="compact-item violet" type="button" onClick={() => setActiveView("marks")}><b>3</b><span><strong>Publish Quiz Marks</strong><em>Review test attempts</em></span><i>Marks</i></button>
              <button className="compact-item amber" type="button" onClick={() => setActiveView("classes")}><b>4</b><span><strong>Schedule Class</strong><em>Set up next meeting</em></span><i>Plan</i></button>
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
        {sectionTitle("Subjects Under Teacher", "All subjects assigned to the teacher, with student count and content readiness.")}
        <div className="module-grid three">
          {teacherData.subjects.map((subject) => (
            <article className="module-card subject-module" key={subject.title}>
              <span className="module-code green">{subject.title[0]}</span>
              <small>{subject.section}</small>
              <h3>{subject.title}</h3>
              <p>{subject.enrolled} students - {subject.assignments} assignments</p>
              <ProgressBar value={subject.contentReady} label="Content ready" tone="green" />
              <div className="button-row" style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button type="button" onClick={() => openSubject(subject)}>Open subject</button>
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
                
                <button type="button" onClick={() => deleteAssignment(assignment.id)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }} title="Delete assignment">
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
          {!loadingAssignments && backendAssignments.filter(a => a.submissions && a.submissions.length > 0).map((item) => (
            <article className="module-card" key={item.id}>
              <span className="module-code green">SB</span>
              <h3>{item.title}</h3>
              <p>{item.subject}</p>
              <b>{item.submissions.length} submissions received</b>
              <div className="submission-list" style={{ marginTop: '10px' }}>
                {item.submissions.map((sub, idx) => (
                  <div key={idx} style={{ fontSize: '12px', borderTop: '1px solid var(--line)', paddingTop: '12px', paddingBottom: '4px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ fontSize: '14px', color: '#0f172a' }}>{sub.studentName}</strong>
                      <br />
                      {sub.note && <em style={{ color: '#475569', display: 'block', marginTop: '4px' }}>Note: {sub.note}</em>}
                      {sub.fileUrl && <a href={sub.fileUrl} target="_blank" rel="noreferrer" style={{display: 'inline-block', color: 'var(--primary)', marginTop: '6px', fontWeight: 500}}>View File</a>}
                      
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
                      onClick={() => openGradeSubmission(item.id, sub)}
                    >
                      {sub.grade || sub.feedback ? "Edit Grade" : "Grade"}
                    </button>
                  </div>
                ))}
              </div>
            </article>
          ))}
          {!loadingAssignments && backendAssignments.filter(a => a.submissions && a.submissions.length > 0).length === 0 && (
             <p style={{color: '#666'}}>No student submissions received yet.</p>
          )}
        </div>
      </section>
    );
  }

  function renderClasses() {
    return (
      <section className="role-view">
        {sectionTitle("Class Scheduler", "Schedule a class with subject, time, room, or link.", "Schedule class", openSchedule)}
        <div className="split-panels">
          <article className="panel schedule-card-large">
            <label>Subject<span>Data Structures - CSE 4A</span></label>
            <label>Time<span>09:30 AM, Monday</span></label>
            <label>Room / Link<span>Lab 3 or online meeting</span></label>
            <button className="panel-button" type="button" onClick={openSchedule}>Open scheduling panel</button>
          </article>
        </div>
      </section>
    );
  }

  function renderMarks() {
    return (
      <section className="role-view">
        {sectionTitle("Quiz Marks Center", "Publish marks and see how many students have already given the quiz.", "Publish selected", () => openTeacherAction("Publish selected quiz marks"))}
        <div className="module-grid three">
          {teacherData.quizStats.map((quiz) => (
            <article className="module-card quiz-module" key={quiz.title}>
              <span className="module-code green">QZ</span>
              <h3>{quiz.title}</h3>
              <p>{quiz.attempted} of {quiz.total} students have given the quiz.</p>
              <b>{quiz.average}% average</b>
              <em className={quiz.published ? "status success" : "status warning"}>{quiz.published ? "Marks published" : "Ready to publish"}</em>
              <button type="button" onClick={() => openQuizMarks(quiz)}>Open marks</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderActions() {
    return (
      <section className="role-view">
        {sectionTitle("Grade and Feedback", "Common teaching actions for grading and student progress review.")}
      </section>
    );
  }

  function renderAnnouncements() {
    return (
      <section className="role-view">
        {sectionTitle("Class Notices", "Announcements and reminders for students.")}
      </section>
    );
  }

  const views = {
    overview: renderOverview,
    subjects: renderSubjects,
    assignments: renderAssignments,
    submissions: renderSubmissions,
    classes: renderClasses,
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
    marks: renderMarks,
    actions: renderActions,
    announcements: renderAnnouncements,
  };

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
