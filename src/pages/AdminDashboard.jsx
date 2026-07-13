import { useState, useEffect } from "react";
import {
  BarChart3,
  BellRing,
  BookOpenCheck,
  FileBarChart2,
  GraduationCap,
  LayoutDashboard,
  Medal,
  Megaphone,
  ShieldCheck,
  UserCog,
  UsersRound,
  BookCopy,
  CalendarClock,
  ClipboardCheck,
  FilePenLine,
  MessageSquarePlus,
  Presentation,
  UploadCloud,
  Trash2,
  TerminalSquare
} from "lucide-react";
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestBuilder from "../components/TestBuilder.jsx";
import CodeBuilder from "../components/CodeBuilder.jsx";
import { adminData as adminDataMock, teacherData as teacherDataMock } from "../data/lmsData.js";
import { getAdminMetrics, getTeacherMetrics, percent } from "../data/metrics.js";
import "./AdminDashboard.css";

const navItems = [
  { id: "overview", label: "Dashboard", icon: LayoutDashboard },
  { id: "users", label: "Users", icon: UsersRound },
  { id: "curriculum", label: "Curriculum", icon: BookOpenCheck },
  { id: "mapping", label: "Teacher Mapping", icon: GraduationCap },
  { id: "governance", label: "Governance", icon: ShieldCheck },
  { id: "announcements", label: "Announcements", icon: BellRing },
  { id: "reports", label: "Reports", icon: FileBarChart2 },
  { id: "health", label: "System Health", icon: BarChart3 },
  { id: "subjects", label: "Subjects", icon: BookCopy },
  { id: "assignments", label: "Assignments", icon: UploadCloud },
  { id: "submissions", label: "Submissions", icon: UsersRound },
  { id: "classes", label: "Schedule Class", icon: CalendarClock },
  { id: "tests", label: "Test Builder", icon: FilePenLine },
  { id: "code", label: "Code Builder", icon: TerminalSquare },
  { id: "marks", label: "Quiz Marks", icon: ClipboardCheck },
  { id: "actions", label: "Feedback", icon: MessageSquarePlus },
];

function AdminMetric({ code, label, value, detail, tone = "blue" }) {
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

export default function AdminDashboard({ session, onLogout }) {
  const [activeView, setActiveViewState] = useState(() => {
    try {
      const saved = localStorage.getItem("admin_active_view");
      if (saved) return saved;
    } catch (e) {
      console.error(e);
    }
    return "overview";
  });

  const setActiveView = (view) => {
    setActiveViewState(view);
    localStorage.setItem("admin_active_view", view);
  };
  const [action, setAction] = useState(null);

  // Live Database State
  const [dbUsers, setDbUsers] = useState([]);
  const [dbNotices, setDbNotices] = useState([]);

  // Ported Teacher State
  const [dbSubjects, setDbSubjects] = useState([]);
  const [dbFeedback, setDbFeedback] = useState([]);
  const [dbClasses, setDbClasses] = useState([]);
  const [backendAssignments, setBackendAssignments] = useState([]);
  const [backendCodingTests, setBackendCodingTests] = useState([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  const fetchAssignments = async () => {
    try {
      const [assnRes, codeRes] = await Promise.all([
        fetch('/api/assignments'),
        fetch('/api/coding-tests')
      ]);
      if (assnRes.ok) { const data = await assnRes.json(); setBackendAssignments(data); }
      if (codeRes.ok) { const codeData = await codeRes.json(); setBackendCodingTests(codeData); }
    } catch (err) { console.error(err); } finally { setLoadingAssignments(false); }
  };

  useEffect(() => {
    fetch('/api/lms-data?type=users').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbUsers(data) }).catch(console.error);
    fetch('/api/lms-data?type=notices').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbNotices(data) }).catch(console.error);
    
    // Teacher API calls
    fetch('/api/lms-data?type=subjects').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbSubjects(data) }).catch(console.error);
    fetch('/api/lms-data?type=feedback').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbFeedback(data) }).catch(console.error);
    fetch('/api/lms-data?type=classes').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbClasses(data) }).catch(console.error);
    fetchAssignments();
  }, []);

  const teacherData = {
    ...teacherDataMock,
    subjects: dbSubjects.length > 0 ? dbSubjects : teacherDataMock.subjects,
    recentFeedback: dbFeedback.length > 0 ? dbFeedback : teacherDataMock.recentFeedback,
  };
  const teacherMetrics = getTeacherMetrics(teacherData);

  // Merge Live Data into fallback structure
  const studentsCount = dbUsers.filter(u => u.role === 'student').length || adminDataMock.users.students;
  const teachersCount = dbUsers.filter(u => u.role === 'teacher').length || adminDataMock.users.teachers;
  const adminsCount = dbUsers.filter(u => u.role === 'admin').length || adminDataMock.users.admins;

  const adminData = {
    ...adminDataMock,
    users: {
      ...adminDataMock.users,
      students: studentsCount,
      teachers: teachersCount,
      admins: adminsCount,
    },
    announcements: dbNotices.length > 0 ? dbNotices : adminDataMock.announcements,
    recentUsers: dbUsers.slice(0, 5), // Provide latest users
  };

  const metrics = getAdminMetrics(adminData);

  function openAdminAction(title, details = []) {
    setAction({
      kicker: "Admin action",
      title,
      description: "Open the LearnSphere administration panel for this operation.",
      details,
      primaryLabel: "Open admin panel",
    });
  }

    async function handleModalSubmit(data) {
    if (!action) return;
    try {
if (data.actionType === 'create-user') {
        const payload = {
          name: data.name,
          role: data.role,
          username: data.username,
          password: data.password
        };
        const res = await fetch('/api/lms-data?type=users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const newUser = await res.json();
          setDbUsers([newUser, ...dbUsers]);
        }
      } else if (data.actionType === 'bulk-create-users') {
        const rows = data.csvData.split('\n').map(r => r.trim()).filter(Boolean);
        const usersToCreate = rows.map(row => {
          const [name, role, username, password] = row.split(',').map(s => s.trim());
          return { name, role, username, password };
        });
        
        const res = await fetch('/api/lms-data?type=users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usersToCreate) // Passing array triggers bulk insert
        });
        
        if (res.ok) {
          const newUsers = await res.json();
          setDbUsers([...newUsers, ...dbUsers]);
        }
      }
      // -- Teacher logic --
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
        }
      } catch (err) {
        console.error("Error creating class:", err);
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
    } catch (err) {
      console.error(err);
    }
  }

function sectionTitle(title, subtitle, actionLabel, actionHandler) {
    return (
      <div className="view-head">
        <div>
          <p className="eyebrow">Admin module</p>
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
          <article className="hero-panel hero-panel-3d admin-hero">

            <div className="hero-copy">
              <p className="eyebrow">Admin control room</p>
              <h2>Run LearnSphere through <span>separate command modules.</span></h2>
              <p>Manage users, curriculum, teacher assignments, announcements, badges, leaderboards, system health, and reports without stacking everything in one long screen.</p>
              <div className="hero-status-row" aria-label="Admin dashboard status">
                <span>{adminData.users.students + adminData.users.teachers + adminData.users.admins} Total Users</span>
                <span>System {metrics.systemAverage}%</span>
                <span>{adminData.governance.reportRequests} Open Reports</span>
              </div>
            </div>
            <div className="admin-figure-scene" aria-hidden="true">
              <div className="admin-server-stack">
                <div className="server-blade" />
                <div className="server-blade" />
                <div className="server-blade" />
              </div>
              <div className="admin-radar-3d">
                <div className="radar-ring" />
                <div className="radar-sweep" />
              </div>
              <span className="floating-sticker sticker-security">SEC</span>
              <span className="floating-sticker sticker-sync">SYNC</span>
              <span className="floating-sticker sticker-live">LIVE</span>
            </div>
            <div className="hero-3d-object" aria-hidden="true"><span /><span /><span /></div>
          </article>
          <article className="plan-card">
            <div className="panel-head">
              <div>
                <h2>Admin Queue</h2>
                <span>High priority campus operations.</span>
              </div>
            </div>
            <div className="compact-list">
              <button className="compact-item violet" type="button" onClick={() => setActiveView("users")}><b>1</b><span><strong>Pending invites</strong><em>{adminData.users.pendingInvites} invitations pending</em></span><i>Users</i></button>
              <button className="compact-item green" type="button" onClick={() => setActiveView("curriculum")}><b>2</b><span><strong>Curriculum mapping</strong><em>{metrics.curriculumCoverage}% complete</em></span><i>Map</i></button>
              <button className="compact-item amber" type="button" onClick={() => setActiveView("reports")}><b>3</b><span><strong>Report requests</strong><em>{adminData.governance.reportRequests} open</em></span><i>Reports</i></button>
            </div>
          </article>
        </div>
        <div className="dash-metric-grid">
          <AdminMetric code="US" label="Total users" value={metrics.totalUsers.toLocaleString()} detail={`${metrics.activeRate}% active today`} tone="violet" />
          <AdminMetric code="CU" label="Curriculum coverage" value={`${metrics.curriculumCoverage}%`} detail="Subjects mapped to LMS" />
          <AdminMetric code="TA" label="Teacher assignment" value={`${metrics.assignmentCoverage}%`} detail="Courses with assigned faculty" tone="green" />
          <AdminMetric code="GI" label="Governance index" value={`${metrics.governanceIndex}%`} detail="Calculated health score" tone="amber" />
        </div>
      </section>
    );
  }

  function renderUsers() {
    return (
      <section className="role-view">
        {sectionTitle("User Distribution", "Manage students, teachers, admins, active users, and pending invites.", "Manage users", () => openAdminAction("Manage users", [
          { label: "Students", value: adminData.users.students },
          { label: "Teachers", value: adminData.users.teachers },
          { label: "Pending invites", value: adminData.users.pendingInvites },
        ]))}
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <button className="panel-button" style={{ flex: 1 }} onClick={() => setAction({
            type: 'create-user',
            kicker: 'User management',
            title: 'Create new user',
            primaryLabel: 'Create User'
          })}>+ Create single user</button>
          <button className="panel-button" style={{ flex: 1, backgroundColor: 'var(--surface-sunken)', color: 'var(--text-main)', border: '1px solid var(--line)', justifyContent: 'center' }} onClick={() => setAction({
            type: 'bulk-create-users',
            kicker: 'Bulk operation',
            title: 'Bulk create users',
            primaryLabel: 'Upload CSV Data'
          })}>Bulk upload</button>
        </div>
        <div className="module-grid three">
          {[
            ["Students", adminData.users.students, "Learner accounts"],
            ["Teachers", adminData.users.teachers, "Faculty accounts"],
            ["Admins", adminData.users.admins, "Operations accounts"],
          ].map(([label, value, detail]) => (
            <article className="module-card" key={label}>
              <span className="module-code violet">{label[0]}</span>
              <h3>{label}</h3>
              <strong className="module-big">{value}</strong>
              <p>{detail}</p>
              <button type="button" onClick={() => openAdminAction(label, [{ label, value }])}>Open</button>
            </article>
          ))}
        </div>

        {dbUsers && dbUsers.length > 0 && (
          <article className="panel" style={{ marginTop: '24px' }}>
            <div className="panel-head" style={{ marginBottom: '16px' }}>
              <div>
                <h2>Recently Added Users</h2>
                <span>Preview of the latest accounts created in the system.</span>
              </div>
            </div>
            <div className="stack-list">
              {dbUsers.slice(0, 10).map((user, idx) => (
                <div className="list-action-row" key={user._id || idx}>
                  <b>{(user.name && user.name[0]) || '?'}</b>
                  <span>
                    <strong>{user.name}</strong>
                    <em>{user.role} • {user.username}</em>
                  </span>
                  <span className="pill" style={{ marginLeft: 'auto', textTransform: 'capitalize' }}>
                    {user.role}
                  </span>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>
    );
  }

  function renderCurriculum() {
    return (
      <section className="role-view">
        {sectionTitle("Department Mapping", "Manage users and curriculum department-wise.", "Open curriculum panel", () => openAdminAction("Curriculum mapping", [
          { label: "Mapped subjects", value: adminData.curriculum.mappedSubjects },
          { label: "Total subjects", value: adminData.curriculum.totalSubjects },
        ]))}
        <div className="module-grid three">
          {adminData.departments.map((department) => (
            <article className="module-card" key={department.name}>
              <span className="module-code blue">{department.name[0]}</span>
              <h3>{department.name}</h3>
              <p>Lead: {department.lead}. {department.users} users.</p>
              <ProgressBar value={department.mapped} label="Mapped" tone="blue" />
              <button type="button" onClick={() => openAdminAction(`${department.name} mapping`, [
                { label: "Department lead", value: department.lead },
                { label: "Users", value: department.users },
                { label: "Mapped", value: `${department.mapped}%` },
              ])}>Open mapping</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderMapping() {
    return (
      <section className="role-view">
        {sectionTitle("Teacher and Student Assignment", "Assign teachers and students to curriculum, sections, and subjects.")}
        <div className="split-panels">
          <article className="panel">
            <h2>Assignment Coverage</h2>
            <ProgressBar value={metrics.assignmentCoverage} label="Teacher assignment coverage" tone="green" />
            <ProgressBar value={metrics.curriculumCoverage} label="Curriculum coverage" tone="blue" />
            <button className="panel-button" type="button" onClick={() => openAdminAction("Assign teachers/students", [
              { label: "Teacher assignments", value: adminData.curriculum.teacherAssignments },
              { label: "Student mappings", value: adminData.curriculum.studentMappings },
            ])}>Assign teachers/students</button>
          </article>
          <article className="panel soft-panel">
            <h2>Mapping Summary</h2>
            <p>Use this module to connect faculty and students to the right courses and sections.</p>
          </article>
        </div>
      </section>
    );
  }

  function renderGovernance() {
    const items = [
      ["Badge rules", adminData.governance.badgeRules, Medal],
      ["Leaderboards", adminData.governance.leaderboardGroups, TrophyFallback],
      ["Announcements", adminData.governance.openAnnouncements, BellRing],
      ["Report requests", adminData.governance.reportRequests, FileBarChart2],
    ];

    return (
      <section className="role-view">
        {sectionTitle("Governance", "Control badges, leaderboards, announcements, and report requests.")}
        <div className="module-grid four">
          {items.map(([label, value, Icon]) => (
            <article className="module-card" key={label}>
              <span className="module-code violet"><Icon size={18} /></span>
              <h3>{label}</h3>
              <strong className="module-big">{value}</strong>
              <p>Open governance control for {label.toLowerCase()}.</p>
              <button type="button" onClick={() => openAdminAction(label, [{ label, value }])}>Open</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function TrophyFallback(props) {
    return <Medal {...props} />;
  }

  function renderAnnouncements() {
    return (
      <section className="role-view">
        {sectionTitle("System Announcements", "Publish and review campus-wide announcements.", "New announcement", () => openAdminAction("New announcement"))}
        <article className="panel">
          <div className="stack-list">
            {adminData.announcements.map((notice, idx) => (
              <div className="list-action-row" key={notice._id || notice.title || idx}>
                <b>{(notice.status || notice.title || 'N')[0]}</b>
                <span><strong>{notice.title}</strong><em>{notice.status || 'Draft'} - {notice.audience || 'All'}</em></span>
                <button type="button" onClick={() => openAdminAction(notice.title, [
                  { label: "Status", value: notice.status },
                  { label: "Audience", value: notice.audience },
                ])}>Open</button>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }

  function renderReports() {
    return (
      <section className="role-view">
        {sectionTitle("Performance Reports", "Generate performance reports, badge audits, and curriculum mapping reports.", "Generate report", () => openAdminAction("Generate performance report"))}
        <div className="module-grid three">
          {adminData.reports.map((report) => (
            <article className="module-card" key={report.name}>
              <span className="module-code blue">RP</span>
              <h3>{report.name}</h3>
              <p>Owner: {report.owner}</p>
              <ProgressBar value={report.progress} label="Progress" tone="blue" />
              <button type="button" onClick={() => openAdminAction(report.name, [
                { label: "Owner", value: report.owner },
                { label: "Progress", value: `${report.progress}%` },
              ])}>Open report</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderHealth() {
    return (
      <section className="role-view">
        {sectionTitle("Health Calculation", "System health, LMS activity, grading SLA, and attendance sync.", "Publish campus summary", () => openAdminAction("Publish campus summary", [
          { label: "System average", value: `${metrics.systemAverage}%` },
          { label: "Governance index", value: `${metrics.governanceIndex}%` },
        ]))}
        <div className="module-grid four">
          {adminData.systemHealth.map((item) => (
            <article className="module-card" key={item.label}>
              <span className="module-code green">{item.value}%</span>
              <h3>{item.label}</h3>
              <ProgressBar value={item.value} label="Current value" tone="green" />
            </article>
          ))}
        </div>
      </section>
    );
  }

  

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
        {sectionTitle("Subjects Under Teacher", "All subjects assigned to the teacher, with student count and content readiness.", "Add Subject", openCreateSubject)}
        <div className="module-grid three">
          {teacherData.subjects.map((subject) => (
            <article className="module-card subject-module" key={subject.title}>
              <span className="module-code green">{subject.title[0]}</span>
              <small>{subject.section}</small>
              <h3>{subject.title}</h3>
              <p>{subject.enrolled} students - {subject.materials ? subject.materials.length : 0} materials</p>
              <ProgressBar value={subject.contentReady} label="Content ready" tone="green" />
              <button type="button" onClick={() => deleteSubject(subject.id || subject._id)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }} title="Delete subject">
                <Trash2 size={18} />
              </button>
              <div className="button-row" style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                <button type="button" onClick={() => openSubject(subject)}>Open subject</button>
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
          <div className="compact-list" style={{flex: 1}}>
            {dbClasses.map(cls => (
              <div key={cls.id || cls._id} className="list-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                  <strong>{cls.title}</strong>
                  <span className="meta">{cls.time} - {cls.room}</span>
                </div>
                <button type="button" onClick={() => deleteClass(cls.id || cls._id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px' }} title="Delete class">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
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

  function renderAnnouncements() {
    return (
      <section className="role-view">
        {sectionTitle("Class Notices", "Announcements and reminders for students.")}
      </section>
    );
  }

  const views = {
    overview: renderOverview,
    users: renderUsers,
    curriculum: renderCurriculum,
    mapping: renderMapping,
    governance: renderGovernance,
    announcements: renderAnnouncements,
    reports: renderReports,
    health: renderHealth,
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
    actions: renderFeedback,
  };
  return (
    <RoleShell
      session={session}
      profile={adminData.profile}
      roleLabel="Admin"
      roleTone="admin"
      navItems={navItems}
      activeView={activeView}
      onViewChange={setActiveView}
      onLogout={onLogout}
    >
      {views[activeView]()}
      <ActionModal action={action} onClose={() => setAction(null)} onSubmit={handleModalSubmit} />
    </RoleShell>
  );
}
