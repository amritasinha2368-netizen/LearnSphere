import {
  BadgeCheck,
  BookOpenCheck,
  GraduationCap,
  Landmark,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const roles = [
  {
    key: "student",
    label: "Student",
    icon: GraduationCap,
    accent: "blue",
    line: "Courses, assignments, quizzes, marks, XP, and rank progress.",
  },
  {
    key: "teacher",
    label: "Teacher",
    icon: BookOpenCheck,
    accent: "green",
    line: "Content planning, grading queues, submissions, and feedback.",
  },
  {
    key: "admin",
    label: "Admin",
    icon: ShieldCheck,
    accent: "violet",
    line: "Users, curriculum, governance, announcements, and reports.",
  },
];

export const studentData = {
  profile: {
    name: "Aarav Mehta",
    cohort: "B.Tech CSE - Semester 4",
    mentor: "Dr. Meera Rao",
  },
  batch: {
    name: "CSE 4A",
    semester: "Semester 4",
    strength: 64,
    mentor: "Dr. Meera Rao",
    attendance: "94%",
    batchAverageXp: 1720,
  },
  today: {
    class: { time: "09:30 AM", subject: "Data Structures", topic: "Trees and heaps", room: "Lab 3" },
    assignment: {
      subject: "Data Structures",
      title: "Graph traversal lab",
      due: "Today, 11:59 PM",
      points: 50,
      submitted: false,
      status: "Due today",
      action: "Upload assignment",
    },
    quiz: {
      subject: "Data Structures",
      title: "Trees and Heaps Checkpoint",
      status: "Assigned today",
      duration: "12 min",
      action: "Attempt quiz",
    },
  },
  subjects: [
    {
      title: "Data Structures",
      instructor: "Prof. Iyer",
      progress: 82,
      grade: 91,
      option: "Open lessons",
      nextClass: "Mon, 09:30 AM",
    },
    {
      title: "Database Systems",
      instructor: "Dr. Kapoor",
      progress: 74,
      grade: 86,
      option: "View resources",
      nextClass: "Tue, 11:00 AM",
    },
    {
      title: "Engineering Math",
      instructor: "Dr. Rao",
      progress: 68,
      grade: 79,
      option: "Practice sets",
      nextClass: "Wed, 10:15 AM",
    },
  ],
  classSchedule: [
    { time: "09:30 AM", subject: "Data Structures", topic: "Trees and heaps", room: "Lab 3" },
    { time: "11:00 AM", subject: "Database Systems", topic: "Joins and indexing", room: "Room 204" },
    { time: "02:15 PM", subject: "Engineering Math", topic: "Probability review", room: "Online" },
  ],
  assignments: [
    {
      subject: "Data Structures",
      title: "Graph traversal lab",
      due: "02 Jul",
      points: 50,
      submitted: false,
      status: "Due",
      action: "Upload assignment",
    },
    {
      subject: "Database Systems",
      title: "Normalization case study",
      due: "04 Jul",
      points: 40,
      submitted: false,
      status: "Draft",
      action: "Upload draft",
    },
    {
      subject: "Engineering Math",
      title: "Probability worksheet",
      due: "Submitted",
      points: 30,
      submitted: true,
      status: "Graded",
      action: "View file",
    },
  ],
  quizzes: [
    {
      subject: "Data Structures",
      title: "Trees and Heaps Checkpoint",
      score: 18,
      total: 20,
      status: "Assigned today",
      action: "Attempt quiz",
      duration: "12 min",
      questions: [
        {
          prompt: "Which structure is commonly used to implement a priority queue?",
          options: ["Stack", "Heap", "Queue", "Linked list"],
        },
        {
          prompt: "What is the time complexity of searching in a balanced binary search tree?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        },
        {
          prompt: "Which traversal visits left subtree, root, and right subtree?",
          options: ["Preorder", "Inorder", "Postorder", "Level order"],
        },
      ],
    },
    {
      subject: "Database Systems",
      title: "Normalization Sprint",
      score: 16,
      total: 20,
      status: "Completed - marks visible",
      action: "Review answers",
      duration: "10 min",
      questions: [
        {
          prompt: "Which normal form removes partial dependency?",
          options: ["1NF", "2NF", "3NF", "BCNF"],
        },
        {
          prompt: "A primary key must be:",
          options: ["Nullable", "Unique", "Duplicated", "Only text"],
        },
      ],
    },
    {
      subject: "Engineering Math",
      title: "Probability Practice",
      score: 14,
      total: 20,
      status: "Teacher review",
      action: "Attempt quiz",
      duration: "15 min",
      questions: [
        {
          prompt: "The probability of an impossible event is:",
          options: ["0", "1", "0.5", "Undefined"],
        },
        {
          prompt: "If two events cannot happen together, they are called:",
          options: ["Independent", "Mutually exclusive", "Dependent", "Exhaustive"],
        },
      ],
    },
  ],
  badges: [
    {
      emoji: "🏆",
      name: "Top Performer",
      detail: "Score above 90% in any subject",
      earned: true,
      progress: 100,
      current: "91% in Data Structures",
      unlockRule: "Unlocks at 90% or above in one subject.",
      nextStep: "Unlocked",
    },
    {
      emoji: "🔥",
      name: "Streak Star",
      detail: "Attend learning tasks for 10 days",
      earned: true,
      progress: 100,
      current: "12 of 10 active days",
      unlockRule: "Unlocks after a 10-day learning streak.",
      nextStep: "Unlocked",
    },
    {
      emoji: "📚",
      name: "Subject Explorer",
      detail: "Open all subject resources",
      earned: true,
      progress: 100,
      current: "3 of 3 subject spaces explored",
      unlockRule: "Unlocks when every assigned subject space is opened.",
      nextStep: "Unlocked",
    },
    {
      emoji: "⚡",
      name: "Quick Submitter",
      detail: "Upload work before the due date",
      earned: false,
      progress: 60,
      current: "3 of 5 early submissions",
      unlockRule: "Unlocks after 5 assignments are submitted before deadline.",
      nextStep: "Submit 2 more assignments early.",
    },
    {
      emoji: "🎯",
      name: "Quiz Master",
      detail: "Average 85% across quizzes",
      earned: false,
      progress: 76,
      current: "80% quiz average",
      unlockRule: "Unlocks when quiz average reaches 85%.",
      nextStep: "Improve by 5 percentage points.",
    },
  ],
  taskCalendar: [
    { date: "01", day: "Mon", label: "Class", subject: "Data Structures", tone: "blue" },
    { date: "02", day: "Tue", label: "Assignment", subject: "Graph lab upload", tone: "amber" },
    { date: "03", day: "Wed", label: "Quiz", subject: "DBMS quiz marks", tone: "green" },
    { date: "04", day: "Thu", label: "Deadline", subject: "Case study", tone: "red" },
    { date: "05", day: "Fri", label: "Feedback", subject: "Math worksheet", tone: "violet" },
  ],
  xp: {
    current: 1860,
    target: 2400,
    rank: 7,
    streakDays: 12,
    weeklyGoal: 420,
    earnedThisWeek: 310,
  },
  leaderboard: [
    { rank: 1, name: "Mira", xp: 2320 },
    { rank: 2, name: "Dev", xp: 2180 },
    { rank: 3, name: "Isha", xp: 2075 },
    { rank: 7, name: "Aarav", xp: 1860 },
  ],
  feedback: [
    { subject: "Data Structures", text: "Strong implementation, improve edge-case notes.", score: 46 },
    { subject: "Engineering Math", text: "Good method selection, show full derivation.", score: 25 },
  ],
};

export const teacherData = {
  profile: {
    name: "Dr. Meera Rao",
    department: "Computer Science",
    role: "Senior Faculty",
  },
  subjects: [
    {
      title: "Data Structures",
      section: "CSE 4A",
      enrolled: 64,
      contentReady: 88,
      submitted: 51,
      assignments: 6,
    },
    {
      title: "Algorithm Design",
      section: "CSE 5B",
      enrolled: 58,
      contentReady: 76,
      submitted: 44,
      assignments: 5,
    },
    {
      title: "Programming Lab",
      section: "CSE 2C",
      enrolled: 72,
      contentReady: 92,
      submitted: 69,
      assignments: 4,
    },
  ],
  assignmentDrafts: [
    { subject: "Data Structures", title: "Graph traversal lab", due: "02 Jul", maxMarks: 50, status: "Ready to publish" },
    { subject: "Algorithm Design", title: "Greedy strategy proof", due: "05 Jul", maxMarks: 35, status: "Needs rubric" },
    { subject: "Programming Lab", title: "File parser implementation", due: "06 Jul", maxMarks: 40, status: "Ready to publish" },
  ],
  submissions: [
    { assignment: "Graph traversal lab", submitted: 51, total: 64, pending: 13, students: "Naina, Dev, Isha, Rohan" },
    { assignment: "Greedy strategy proof", submitted: 44, total: 58, pending: 14, students: "Mira, Aditya, Kavya, Omar" },
    { assignment: "File parser implementation", submitted: 69, total: 72, pending: 3, students: "Amit, Sara, Tejas, Leena" },
  ],
  gradingQueue: [
    { student: "Naina S.", subject: "Data Structures", item: "Graph lab", age: "8h", points: 50 },
    { student: "Rohan P.", subject: "Algorithm Design", item: "Greedy proof", age: "1d", points: 35 },
    { student: "Amit V.", subject: "Programming Lab", item: "File parser", age: "2d", points: 40 },
  ],
  schedule: [
    { time: "09:30 AM", title: "CSE 4A live session", room: "Lab 3", action: "Schedule class" },
    { time: "12:15 PM", title: "Assignment review", room: "Faculty studio", action: "Add class note" },
    { time: "03:00 PM", title: "Quiz marks publishing", room: "Online", action: "Open mark sheet" },
  ],
  quizStats: [
    { title: "Trees and Heaps", attempted: 56, total: 64, average: 82, published: true },
    { title: "Sorting Analysis", attempted: 61, total: 64, average: 78, published: false },
    { title: "Graph Basics", attempted: 49, total: 58, average: 74, published: true },
  ],
  announcements: [
    "Quiz 3 unlocks after the Monday lecture.",
    "Lab submissions need repository links and test screenshots.",
  ],
};

export const adminData = {
  profile: {
    name: "LearnSphere Admin",
    scope: "Campus LMS Operations",
    role: "Administrator",
  },
  users: {
    students: 1248,
    teachers: 86,
    admins: 9,
    activeToday: 1084,
    pendingInvites: 42,
  },
  curriculum: {
    totalSubjects: 142,
    mappedSubjects: 128,
    teacherAssignments: 119,
    studentMappings: 1210,
  },
  governance: {
    badgeRules: 18,
    leaderboardGroups: 12,
    openAnnouncements: 4,
    reportRequests: 9,
  },
  systemHealth: [
    { label: "Login success", value: 97 },
    { label: "Content coverage", value: 90 },
    { label: "Grading SLA", value: 83 },
    { label: "Attendance sync", value: 94 },
  ],
  departments: [
    { name: "Computer Science", users: 438, mapped: 96, lead: "Dr. Rao" },
    { name: "Business Studies", users: 352, mapped: 88, lead: "Prof. Shah" },
    { name: "Applied Sciences", users: 294, mapped: 91, lead: "Dr. Nair" },
  ],
  announcements: [
    { title: "Mid-term assessment calendar", status: "Scheduled", audience: "All students" },
    { title: "Faculty moderation workflow", status: "Draft", audience: "Teachers" },
    { title: "LMS maintenance window", status: "Published", audience: "Campus" },
  ],
  reports: [
    { name: "Performance report", owner: "Academics", progress: 72 },
    { name: "Badge audit", owner: "Student affairs", progress: 64 },
    { name: "Curriculum mapping", owner: "Departments", progress: 91 },
  ],
};

export const appHighlights = [
  { label: "Role security", icon: ShieldCheck },
  { label: "Academic records", icon: Landmark },
  { label: "Smart progress", icon: BadgeCheck },
  { label: "User management", icon: UsersRound },
];
