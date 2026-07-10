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
} from "lucide-react";
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestBuilder from "../components/TestBuilder.jsx";
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

  // Next.js Backend State for Assignments
  const [backendAssignments, setBackendAssignments] = useState([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  useEffect(() => {
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

  const handleModalSubmit = async (data) => {
    if (!action) return;

    if (action.kicker === "Publish assignment" || action.kicker === "Write Instructions" || action.kicker === "Attach File") {
      try {
        const payload = {
          title: data.title || action.title || "New Assignment",
          subject: action.subjectContext || "Data Structures",
          due: "Next Week", // Simulated
          maxMarks: 50,
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
      title: assignment.title,
      description: "Upload question papers, data sets, or reading materials for this assignment.",
      type: "upload",
      subjectContext: assignment.subject,
      noteLabel: "Attachment details",
      notePlaceholder: "E.g., Dataset required for Question 3.",
      primaryLabel: "Attach file",
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
            <div className="hero-copy">
              <p className="eyebrow">Teacher workspace</p>
              <h2>Manage teaching work from <span>one calm control panel.</span></h2>
              <p>Publish assignments, check submissions, schedule classes, monitor subjects, and release quiz marks without crowding every feature into one screen.</p>
              <div className="hero-status-row">
                <span>{teacherData.subjects.length} Subjects</span>
                <span>{metrics.gradingQueue} Pending Grades</span>
                <span>Workflow {metrics.workflowIndex}%</span>
              </div>
            </div>
          </article>
          <article className="plan-card">
            <div className="panel-head">
              <div>
                <h2>Today&apos;s Faculty Queue</h2>
                <span>Teaching actions that need attention.</span>
              </div>
            </div>
            <div className="compact-list">
              <button className="compact-item green" type="button" onClick={() => setActiveView("assignments")}><b>1</b><span><strong>Publish assignment</strong><em>Graph traversal lab</em></span><i>Ready</i></button>
              <button className="compact-item blue" type="button" onClick={() => setActiveView("submissions")}><b>2</b><span><strong>Review submissions</strong><em>13 students pending</em></span><i>Open</i></button>
              <button className="compact-item amber" type="button" onClick={() => setActiveView("marks")}><b>3</b><span><strong>Quiz marks</strong><em>Sorting Analysis needs publish</em></span><i>Marks</i></button>
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
          {!loadingAssignments && backendAssignments.map((assignment) => (
            <article className="module-card" key={assignment.id}>
              <span className="module-code blue">AS</span>
              <h3>{assignment.title}</h3>
              <p>{assignment.subject}</p>
              <b>Due {assignment.due} - {assignment.maxMarks} marks</b>
              <div className="button-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => openAssignment(assignment)}>{assignment.status}</button>
                <button type="button" className="ghost-button" onClick={() => openAssignmentUpload(assignment)}>Upload</button>
                <button type="button" className="ghost-button" onClick={() => openWriteContent(assignment)}>Write</button>
              </div>
            </article>
          ))}
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
                  <div key={idx} style={{ fontSize: '12px', borderTop: '1px solid var(--line)', paddingTop: '8px', marginTop: '8px' }}>
                    <strong>{sub.studentName}</strong>
                    <br />
                    {sub.note && <em>Note: {sub.note}</em>}
                    {sub.fileUrl && <a href={sub.fileUrl} target="_blank" rel="noreferrer" style={{display: 'block', color: 'var(--primary)', marginTop: '4px'}}>View File</a>}
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
        <TestBuilder />
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
