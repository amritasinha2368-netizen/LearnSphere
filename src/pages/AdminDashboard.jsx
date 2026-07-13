import { useState } from "react";
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
} from "lucide-react";
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import { adminData as adminDataMock } from "../data/lmsData.js";
import { getAdminMetrics } from "../data/metrics.js";
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

  useEffect(() => {
    fetch('/api/lms-data?type=users').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbUsers(data) }).catch(console.error);
    fetch('/api/lms-data?type=notices').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbNotices(data) }).catch(console.error);
  }, []);

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
            {adminData.announcements.map((notice) => (
              <div className="list-action-row" key={notice.title}>
                <b>{notice.status[0]}</b>
                <span><strong>{notice.title}</strong><em>{notice.status} - {notice.audience}</em></span>
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

  const views = {
    overview: renderOverview,
    users: renderUsers,
    curriculum: renderCurriculum,
    mapping: renderMapping,
    governance: renderGovernance,
    announcements: renderAnnouncements,
    reports: renderReports,
    health: renderHealth,
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
      <ActionModal action={action} onClose={() => setAction(null)} />
    </RoleShell>
  );
}
