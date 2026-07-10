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
  Sparkles,
  Trophy,
  UploadCloud,
} from "lucide-react";
import ActionModal from "../components/ActionModal.jsx";
import RoleShell from "../components/RoleShell.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import TestEnvironment from "../components/TestEnvironment.jsx";
import { studentData } from "../data/lmsData.js";
import { getStudentMetrics, percent } from "../data/metrics.js";
import "./StudentDashboard.css";

const navItems = [
  { id: "overview", label: "Dashboard", icon: BarChart3 },
  { id: "plan", label: "Learning Plan", icon: Sparkles },
  { id: "classes", label: "Classes", icon: Clock3 },
  { id: "subjects", label: "Subjects", icon: BookOpen },
  { id: "assignments", label: "Assignments", icon: FileUp },
  { id: "quizzes", label: "Quizzes", icon: ClipboardList },
  { id: "badges", label: "Badges", icon: Medal },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "xp", label: "XP Progress", icon: Award },
  { id: "leaderboard", label: "Leaderboard", icon: Trophy },
];

const calendarDays = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  const color = [1, 2, 3, 5, 6, 8, 9, 10, 12, 16, 18, 22, 23, 26, 27, 30].includes(day)
    ? "green"
    : [4, 19].includes(day)
      ? "blue"
      : [11, 25].includes(day)
        ? "amber"
        : [13].includes(day)
          ? "red"
          : "muted";

  return { day, color };
});

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
  const [activeView, setActiveView] = useState("overview");
  const [action, setAction] = useState(null);
  
  // Test Environment State
  const [activeTest, setActiveTest] = useState(null);
  const [availableTests, setAvailableTests] = useState([]);

  // Assignment Backend State
  const [backendAssignments, setBackendAssignments] = useState([]);
  const [loadingAssignments, setLoadingAssignments] = useState(true);

  useEffect(() => {
    fetch('/api/tests')
      .then(res => res.json())
      .then(data => setAvailableTests(data))
      .catch(err => console.error("Failed to load tests:", err));
      
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
    }
  };

  const metrics = getStudentMetrics(studentData);

  function openClass(item) {
    setAction({
      kicker: "Class details",
      title: item.subject,
      description: `Scheduled class for ${item.topic}.`,
      details: [
        { label: "Time", value: item.time },
        { label: "Room / Link", value: item.room },
        { label: "Topic", value: item.topic },
      ],
      primaryLabel: "Join class",
    });
  }

  function openSubject(subject) {
    setAction({
      kicker: "Subject workspace",
      title: subject.title,
      description: "Open lessons, resources, assignments, quiz marks, and teacher notes for this subject.",
      details: [
        { label: "Teacher", value: subject.instructor },
        { label: "Next class", value: subject.nextClass },
        { label: "Progress", value: `${subject.progress}%` },
      ],
      primaryLabel: subject.option,
    });
  }

  function openAssignment(assignment) {
    setAction({
      kicker: "Assignment upload",
      title: assignment.title,
      assignmentId: assignment.id, // For backend targeting
      description: "Choose a file and submit your assignment before the due date.",
      type: "upload",
      details: [
        { label: "Subject", value: assignment.subject },
        { label: "Due", value: assignment.due },
        { label: "Marks", value: `${assignment.maxMarks}` },
      ],
      primaryLabel: "Upload assignment",
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
    ];

    return (
      <section className="role-view">
        <div className="overview-layout">
          <article className="hero-panel hero-panel-3d student-hero">
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

  function renderPlan() {
    return (
      <section className="role-view">
        {sectionTitle("Today's Learning Plan", "A clean queue of what the student should do today.")}
        <div className="module-grid three">
          {studentData.classSchedule.map((item) => (
            <article className="module-card class-module" key={item.subject}>
              <span className="module-code">{item.subject[0]}</span>
              <h3>{item.subject}</h3>
              <p>{item.topic}</p>
              <b>{item.time} - {item.room}</b>
              <button type="button" onClick={() => openClass(item)}>Open class</button>
            </article>
          ))}
        </div>
      </section>
    );
  }

  function renderClasses() {
    return (
      <section className="role-view">
        {sectionTitle("Scheduled Classes", "Classes scheduled by teachers appear with subject, time, and room/link status.", "View timetable")}
        <div className="module-grid three">
          {studentData.classSchedule.map((item) => (
            <article className="module-card class-module" key={`${item.time}-${item.subject}`}>
              <span className="module-code">{item.subject[0]}</span>
              <h3>{item.subject}</h3>
              <p>{item.topic}</p>
              <b>{item.time} - {item.room}</b>
              <button type="button" onClick={() => openClass(item)}>Open class</button>
            </article>
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
              <span className="module-code">{subject.title[0]}</span>
              <small>{subject.progress}% complete</small>
              <h3>{subject.title}</h3>
              <p>{subject.instructor}. Next class {subject.nextClass}.</p>
              <button type="button" onClick={() => openSubject(subject)}>{subject.option}</button>
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

    const submittedAssignments = backendAssignments.filter(isSubmitted).length;
    const pendingAssignments = backendAssignments.length - submittedAssignments;
    const nextPending = backendAssignments.find((assignment) => !isSubmitted(assignment));

    return (
      <section className="role-view">
        {sectionTitle("Assignments", "Current assignment status and upload actions.", "View all")}
        <div className="assignment-workspace">
          <article className="panel assignment-list-panel">
            <div className="stack-list">
              {loadingAssignments && <p>Loading assignments...</p>}
              {!loadingAssignments && backendAssignments.map((assignment, index) => {
                const submitted = isSubmitted(assignment);
                return (
                  <div className="list-action-row" key={assignment.id}>
                    <b>{index + 1}</b>
                    <span>
                      <strong>{assignment.title}</strong>
                      <em>{assignment.subject} - Due {assignment.due}</em>
                    </span>
                    {submitted ? (
                      <button type="button" disabled style={{opacity: 0.5}}><CheckCircle2 size={16} /> Submitted</button>
                    ) : (
                      <button type="button" onClick={() => openAssignment(assignment)}>Upload</button>
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
              <div><strong>{submittedAssignments}</strong><span>Submitted</span></div>
              <div><strong>50</strong><span>Marks today</span></div>
            </div>

            {nextPending && (
              <div className="assignment-next-card">
                <span><UploadCloud size={20} /></span>
                <div>
                  <strong>{nextPending.title}</strong>
                  <em>{nextPending.subject} - due {nextPending.due}</em>
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
    return (
      <section className="role-view">
        {sectionTitle("Active Tests & Quizzes", "Tests assigned by your teacher. Some tests may be time-locked.", "View all")}
        <div className="module-grid three">
          {availableTests.length === 0 && <p style={{color: '#888'}}>No tests available right now.</p>}
          
          {availableTests.map((test, index) => {
            const now = new Date();
            const start = new Date(test.startTime);
            const end = new Date(test.endTime);
            const isLocked = now < start;
            const isExpired = now > end;

            return (
              <article className="module-card quiz-module" key={test.id}>
                <span className={`module-code ${isLocked ? 'amber' : isExpired ? 'red' : 'green'}`}>T{index + 1}</span>
                <h3>{test.title}</h3>
                <p>{test.questions.length} Questions • {test.durationMinutes} Minutes</p>
                {isLocked && <b>Opens at: {start.toLocaleString()}</b>}
                {isExpired && <b>Expired on: {end.toLocaleString()}</b>}
                {!isLocked && !isExpired && <b>Available Now! Closes at: {end.toLocaleString()}</b>}
                
                <button 
                  type="button" 
                  disabled={isLocked || isExpired}
                  onClick={() => setActiveTest(test)}
                  style={{ opacity: (isLocked || isExpired) ? 0.5 : 1, cursor: (isLocked || isExpired) ? 'not-allowed' : 'pointer' }}
                >
                  {isLocked ? "Locked" : isExpired ? "Expired" : "Start Test"}
                </button>
              </article>
            );
          })}
        </div>
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
    return (
      <section className="role-view">
        {sectionTitle("Learning Calendar", "Monthly activity overview for submissions, quizzes, classes, and deadlines.")}
        <div className="calendar-shell">
          <article className="panel calendar-panel">
            <div className="calendar-title">
              <h2>June 2026</h2>
              <span>Green completed, amber pending, red missed, blue quiz completed.</span>
            </div>
            <div className="calendar-weekdays">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <b key={day}>{day}</b>)}
            </div>
            <div className="calendar-grid">
              {calendarDays.map((day) => (
                <button className={`calendar-day ${day.color}`} type="button" key={day.day}>
                  {day.day}
                  <span />
                </button>
              ))}
            </div>
          </article>
          <article className="panel calendar-stats">
            {[
              ["Tasks Done", "32"],
              ["Missed Tasks", "2"],
              ["Active Days", "20"],
              ["Completion Rate", "94%"],
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
    const topThree = studentData.leaderboard.slice(0, 3);
    const currentRank = studentData.leaderboard.find((item) => item.name === "Aarav");
    const gapToTopThree = topThree[2].xp - currentRank.xp;

    return (
      <section className="role-view">
        {sectionTitle("Leaderboard", "Batch ranking with your current XP position and the gap to the top three.", "View full")}
        <div className="leaderboard-overview">
          <article className="leaderboard-rank-card">
            <p className="eyebrow">Your position</p>
            <h3>Rank #{currentRank.rank}</h3>
            <span>{currentRank.xp} XP collected in {studentData.batch.name}</span>
            <ProgressBar value={Math.min(100, percent(currentRank.xp, topThree[0].xp))} label={`${gapToTopThree} XP to enter top 3`} tone="blue" />
          </article>

          <div className="podium-grid">
            {topThree.map((item) => (
              <article className={`podium-card rank-${item.rank}`} key={item.rank}>
                <b>#{item.rank}</b>
                <strong>{item.name}</strong>
                <span>{item.xp} XP</span>
              </article>
            ))}
          </div>
        </div>

        <article className="panel leaderboard-panel detailed-leaderboard">
          {studentData.leaderboard.map((item) => (
            <div className={item.name === "Aarav" ? "rank-row current" : "rank-row"} key={item.rank}>
              <b>{item.rank}</b>
              <span>
                <strong>{item.name}</strong>
                <em>{item.name === "Aarav" ? "You - keep pushing toward top 3" : `${studentData.batch.name} batchmate`}</em>
              </span>
              <i>{item.xp} XP</i>
            </div>
          ))}
        </article>
      </section>
    );
  }

  const views = {
    overview: renderOverview,
    plan: renderPlan,
    classes: renderClasses,
    subjects: renderSubjects,
    assignments: renderAssignments,
    quizzes: renderQuizzes,
    badges: renderBadges,
    calendar: renderCalendar,
    xp: renderXp,
    leaderboard: renderLeaderboard,
  };

  // If a test is active, hijack the entire UI to lock the student into the Test Environment Arena
  if (activeTest) {
    return <TestEnvironment test={activeTest} onExit={() => setActiveTest(null)} />;
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
