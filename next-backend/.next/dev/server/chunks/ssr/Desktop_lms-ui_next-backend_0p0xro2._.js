module.exports = [
"[project]/Desktop/lms-ui/next-backend/src/data/lmsData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminData",
    ()=>adminData,
    "appHighlights",
    ()=>appHighlights,
    "roles",
    ()=>roles,
    "studentData",
    ()=>studentData,
    "teacherData",
    ()=>teacherData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/badge-check.mjs [app-ssr] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/book-open-check.mjs [app-ssr] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-ssr] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/users-round.mjs [app-ssr] (ecmascript) <export default as UsersRound>");
;
const roles = [
    {
        key: "student",
        label: "Student",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        accent: "blue",
        line: "Courses, assignments, quizzes, marks, XP, and rank progress."
    },
    {
        key: "teacher",
        label: "Teacher",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"],
        accent: "green",
        line: "Content planning, grading queues, submissions, and feedback."
    },
    {
        key: "admin",
        label: "Admin",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        accent: "violet",
        line: "Users, curriculum, governance, announcements, and reports."
    }
];
const studentData = {
    profile: {
        name: "Aarav Mehta",
        cohort: "B.Tech CSE - Semester 4",
        mentor: "Dr. Meera Rao"
    },
    batch: {
        name: "CSE 4A",
        semester: "Semester 4",
        strength: 64,
        mentor: "Dr. Meera Rao",
        attendance: "94%",
        batchAverageXp: 1720
    },
    today: {
        class: {
            time: "09:30 AM",
            subject: "Data Structures",
            topic: "Trees and heaps",
            room: "Lab 3"
        },
        assignment: {
            subject: "Data Structures",
            title: "Graph traversal lab",
            due: "Today, 11:59 PM",
            points: 50,
            submitted: false,
            status: "Due today",
            action: "Upload assignment"
        },
        quiz: {
            subject: "Data Structures",
            title: "Trees and Heaps Checkpoint",
            status: "Assigned today",
            duration: "12 min",
            action: "Attempt quiz"
        }
    },
    subjects: [
        {
            title: "Data Structures",
            instructor: "Prof. Iyer",
            progress: 82,
            grade: 91,
            option: "Open lessons",
            nextClass: "Mon, 09:30 AM"
        },
        {
            title: "Database Systems",
            instructor: "Dr. Kapoor",
            progress: 74,
            grade: 86,
            option: "View resources",
            nextClass: "Tue, 11:00 AM"
        },
        {
            title: "Engineering Math",
            instructor: "Dr. Rao",
            progress: 68,
            grade: 79,
            option: "Practice sets",
            nextClass: "Wed, 10:15 AM"
        }
    ],
    classSchedule: [
        {
            time: "09:30 AM",
            subject: "Data Structures",
            topic: "Trees and heaps",
            room: "Lab 3"
        },
        {
            time: "11:00 AM",
            subject: "Database Systems",
            topic: "Joins and indexing",
            room: "Room 204"
        },
        {
            time: "02:15 PM",
            subject: "Engineering Math",
            topic: "Probability review",
            room: "Online"
        }
    ],
    assignments: [
        {
            subject: "Data Structures",
            title: "Graph traversal lab",
            due: "02 Jul",
            points: 50,
            submitted: false,
            status: "Due",
            action: "Upload assignment"
        },
        {
            subject: "Database Systems",
            title: "Normalization case study",
            due: "04 Jul",
            points: 40,
            submitted: false,
            status: "Draft",
            action: "Upload draft"
        },
        {
            subject: "Engineering Math",
            title: "Probability worksheet",
            due: "Submitted",
            points: 30,
            submitted: true,
            status: "Graded",
            action: "View file"
        }
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
                    options: [
                        "Stack",
                        "Heap",
                        "Queue",
                        "Linked list"
                    ]
                },
                {
                    prompt: "What is the time complexity of searching in a balanced binary search tree?",
                    options: [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n log n)"
                    ]
                },
                {
                    prompt: "Which traversal visits left subtree, root, and right subtree?",
                    options: [
                        "Preorder",
                        "Inorder",
                        "Postorder",
                        "Level order"
                    ]
                }
            ]
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
                    options: [
                        "1NF",
                        "2NF",
                        "3NF",
                        "BCNF"
                    ]
                },
                {
                    prompt: "A primary key must be:",
                    options: [
                        "Nullable",
                        "Unique",
                        "Duplicated",
                        "Only text"
                    ]
                }
            ]
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
                    options: [
                        "0",
                        "1",
                        "0.5",
                        "Undefined"
                    ]
                },
                {
                    prompt: "If two events cannot happen together, they are called:",
                    options: [
                        "Independent",
                        "Mutually exclusive",
                        "Dependent",
                        "Exhaustive"
                    ]
                }
            ]
        }
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
            nextStep: "Unlocked"
        },
        {
            emoji: "🔥",
            name: "Streak Star",
            detail: "Attend learning tasks for 10 days",
            earned: true,
            progress: 100,
            current: "12 of 10 active days",
            unlockRule: "Unlocks after a 10-day learning streak.",
            nextStep: "Unlocked"
        },
        {
            emoji: "📚",
            name: "Subject Explorer",
            detail: "Open all subject resources",
            earned: true,
            progress: 100,
            current: "3 of 3 subject spaces explored",
            unlockRule: "Unlocks when every assigned subject space is opened.",
            nextStep: "Unlocked"
        },
        {
            emoji: "⚡",
            name: "Quick Submitter",
            detail: "Upload work before the due date",
            earned: false,
            progress: 60,
            current: "3 of 5 early submissions",
            unlockRule: "Unlocks after 5 assignments are submitted before deadline.",
            nextStep: "Submit 2 more assignments early."
        },
        {
            emoji: "🎯",
            name: "Quiz Master",
            detail: "Average 85% across quizzes",
            earned: false,
            progress: 76,
            current: "80% quiz average",
            unlockRule: "Unlocks when quiz average reaches 85%.",
            nextStep: "Improve by 5 percentage points."
        }
    ],
    taskCalendar: [
        {
            date: "01",
            day: "Mon",
            label: "Class",
            subject: "Data Structures",
            tone: "blue"
        },
        {
            date: "02",
            day: "Tue",
            label: "Assignment",
            subject: "Graph lab upload",
            tone: "amber"
        },
        {
            date: "03",
            day: "Wed",
            label: "Quiz",
            subject: "DBMS quiz marks",
            tone: "green"
        },
        {
            date: "04",
            day: "Thu",
            label: "Deadline",
            subject: "Case study",
            tone: "red"
        },
        {
            date: "05",
            day: "Fri",
            label: "Feedback",
            subject: "Math worksheet",
            tone: "violet"
        }
    ],
    xp: {
        current: 1860,
        target: 2400,
        rank: 7,
        streakDays: 12,
        weeklyGoal: 420,
        earnedThisWeek: 310
    },
    leaderboard: [
        {
            rank: 1,
            name: "Mira",
            xp: 2320
        },
        {
            rank: 2,
            name: "Dev",
            xp: 2180
        },
        {
            rank: 3,
            name: "Isha",
            xp: 2075
        },
        {
            rank: 7,
            name: "Aarav",
            xp: 1860
        }
    ],
    feedback: [
        {
            subject: "Data Structures",
            text: "Strong implementation, improve edge-case notes.",
            score: 46
        },
        {
            subject: "Engineering Math",
            text: "Good method selection, show full derivation.",
            score: 25
        }
    ]
};
const teacherData = {
    profile: {
        name: "Dr. Meera Rao",
        department: "Computer Science",
        role: "Senior Faculty"
    },
    subjects: [
        {
            title: "Data Structures",
            section: "CSE 4A",
            enrolled: 64,
            contentReady: 88,
            submitted: 51,
            assignments: 6
        },
        {
            title: "Algorithm Design",
            section: "CSE 5B",
            enrolled: 58,
            contentReady: 76,
            submitted: 44,
            assignments: 5
        },
        {
            title: "Programming Lab",
            section: "CSE 2C",
            enrolled: 72,
            contentReady: 92,
            submitted: 69,
            assignments: 4
        }
    ],
    assignmentDrafts: [
        {
            subject: "Data Structures",
            title: "Graph traversal lab",
            due: "02 Jul",
            maxMarks: 50,
            status: "Ready to publish"
        },
        {
            subject: "Algorithm Design",
            title: "Greedy strategy proof",
            due: "05 Jul",
            maxMarks: 35,
            status: "Needs rubric"
        },
        {
            subject: "Programming Lab",
            title: "File parser implementation",
            due: "06 Jul",
            maxMarks: 40,
            status: "Ready to publish"
        }
    ],
    submissions: [
        {
            assignment: "Graph traversal lab",
            submitted: 51,
            total: 64,
            pending: 13,
            students: "Naina, Dev, Isha, Rohan"
        },
        {
            assignment: "Greedy strategy proof",
            submitted: 44,
            total: 58,
            pending: 14,
            students: "Mira, Aditya, Kavya, Omar"
        },
        {
            assignment: "File parser implementation",
            submitted: 69,
            total: 72,
            pending: 3,
            students: "Amit, Sara, Tejas, Leena"
        }
    ],
    gradingQueue: [
        {
            student: "Naina S.",
            subject: "Data Structures",
            item: "Graph lab",
            age: "8h",
            points: 50
        },
        {
            student: "Rohan P.",
            subject: "Algorithm Design",
            item: "Greedy proof",
            age: "1d",
            points: 35
        },
        {
            student: "Amit V.",
            subject: "Programming Lab",
            item: "File parser",
            age: "2d",
            points: 40
        }
    ],
    schedule: [
        {
            time: "09:30 AM",
            title: "CSE 4A live session",
            room: "Lab 3",
            action: "Schedule class"
        },
        {
            time: "12:15 PM",
            title: "Assignment review",
            room: "Faculty studio",
            action: "Add class note"
        },
        {
            time: "03:00 PM",
            title: "Quiz marks publishing",
            room: "Online",
            action: "Open mark sheet"
        }
    ],
    quizStats: [
        {
            title: "Trees and Heaps",
            attempted: 56,
            total: 64,
            average: 82,
            published: true
        },
        {
            title: "Sorting Analysis",
            attempted: 61,
            total: 64,
            average: 78,
            published: false
        },
        {
            title: "Graph Basics",
            attempted: 49,
            total: 58,
            average: 74,
            published: true
        }
    ],
    announcements: [
        "Quiz 3 unlocks after the Monday lecture.",
        "Lab submissions need repository links and test screenshots."
    ]
};
const adminData = {
    profile: {
        name: "LearnSphere Admin",
        scope: "Campus LMS Operations",
        role: "Administrator"
    },
    users: {
        students: 1248,
        teachers: 86,
        admins: 9,
        activeToday: 1084,
        pendingInvites: 42
    },
    curriculum: {
        totalSubjects: 142,
        mappedSubjects: 128,
        teacherAssignments: 119,
        studentMappings: 1210
    },
    governance: {
        badgeRules: 18,
        leaderboardGroups: 12,
        openAnnouncements: 4,
        reportRequests: 9
    },
    systemHealth: [
        {
            label: "Login success",
            value: 97
        },
        {
            label: "Content coverage",
            value: 90
        },
        {
            label: "Grading SLA",
            value: 83
        },
        {
            label: "Attendance sync",
            value: 94
        }
    ],
    departments: [
        {
            name: "Computer Science",
            users: 438,
            mapped: 96,
            lead: "Dr. Rao"
        },
        {
            name: "Business Studies",
            users: 352,
            mapped: 88,
            lead: "Prof. Shah"
        },
        {
            name: "Applied Sciences",
            users: 294,
            mapped: 91,
            lead: "Dr. Nair"
        }
    ],
    announcements: [
        {
            title: "Mid-term assessment calendar",
            status: "Scheduled",
            audience: "All students"
        },
        {
            title: "Faculty moderation workflow",
            status: "Draft",
            audience: "Teachers"
        },
        {
            title: "LMS maintenance window",
            status: "Published",
            audience: "Campus"
        }
    ],
    reports: [
        {
            name: "Performance report",
            owner: "Academics",
            progress: 72
        },
        {
            name: "Badge audit",
            owner: "Student affairs",
            progress: 64
        },
        {
            name: "Curriculum mapping",
            owner: "Departments",
            progress: 91
        }
    ]
};
const appHighlights = [
    {
        label: "Role security",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        label: "Academic records",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
    },
    {
        label: "Smart progress",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"]
    },
    {
        label: "User management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    }
];
}),
"[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/id-card.mjs [app-ssr] (ecmascript) <export default as IdCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/lock-keyhole.mjs [app-ssr] (ecmascript) <export default as LockKeyhole>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/lmsData.js [app-ssr] (ecmascript)");
;
;
;
;
const emptyForm = {
    name: "",
    username: "",
    password: ""
};
function LoginPage({ onLogin }) {
    const [selectedRole, setSelectedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("student");
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const activeRole = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roles"].find((role)=>role.key === selectedRole);
    const canLogin = Boolean(form.name.trim() && form.username.trim() && form.password.trim() && selectedRole);
    function updateField(event) {
        const { name, value } = event.target;
        setForm((current)=>({
                ...current,
                [name]: value
            }));
    }
    function handleTilt(event) {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
        const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
        setTilt({
            x,
            y
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!canLogin) return;
        onLogin({
            role: selectedRole,
            name: form.name.trim(),
            username: form.username.trim()
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "login-page minimal-login",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "login-hero minimal-hero",
                "aria-label": "LearnSphere identity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-lockup login-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "LS"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "LearnSphere"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Institution learning management system"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "login-3d-stage",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sphere-orbit orbit-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sphere-orbit orbit-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sphere-orbit orbit-three"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "learn-sphere-core",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-slab slab-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-slab slab-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-slab slab-three"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "light-beam beam-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "light-beam beam-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "minimal-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: "Secure academic access"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "LearnSphere"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Role based entry for students, teachers, and administrators."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "login-panel",
                onMouseMove: handleTilt,
                onMouseLeave: ()=>setTilt({
                        x: 0,
                        y: 0
                    }),
                style: {
                    "--tilt-x": `${tilt.y}deg`,
                    "--tilt-y": `${tilt.x}deg`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "login-card compact-login-card",
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "login-card-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `role-signal ${activeRole.accent}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(activeRole.icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                activeRole.label,
                                                " Login"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "role-segment",
                            role: "radiogroup",
                            "aria-label": "Select role",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roles"].map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `role-chip ${selectedRole === role.key ? "selected" : ""}`,
                                    type: "button",
                                    "data-testid": `role-${role.key}`,
                                    onClick: ()=>setSelectedRole(role.key),
                                    "aria-pressed": selectedRole === role.key,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(role.icon, {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: role.label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, role.key, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "input-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "name",
                                            value: form.name,
                                            onChange: updateField,
                                            placeholder: "Enter your name"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "input-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Username / ID"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__["IdCard"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "username",
                                            value: form.username,
                                            onChange: updateField,
                                            placeholder: "Enter username or ID"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "input-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$keyhole$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LockKeyhole$3e$__["LockKeyhole"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "password",
                                            type: showPassword ? "text" : "password",
                                            value: form.password,
                                            onChange: updateField,
                                            placeholder: "Enter password"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "field-icon-button",
                                            type: "button",
                                            "aria-label": showPassword ? "Hide password" : "Show password",
                                            onClick: ()=>setShowPassword((visible)=>!visible),
                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                                lineNumber: 150,
                                                columnNumber: 56
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "login-hint",
                            children: canLogin ? "All set. Open your dashboard." : "Enter name, username or ID, password, and role."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "primary-button",
                            type: "submit",
                            disabled: !canLogin,
                            "data-testid": "login-submit",
                            children: [
                                "Open ",
                                activeRole.label,
                                " Dashboard",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/services/cloudStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Cloud Storage Service
 * 
 * Connects to the Express backend (/api/upload).
 * The backend handles streaming the file directly to AWS S3 (if configured)
 * or saving it to local disk as a fallback.
 */ __turbopack_context__.s([
    "uploadFileToCloud",
    ()=>uploadFileToCloud
]);
async function uploadFileToCloud(file, onProgress) {
    return new Promise((resolve, reject)=>{
        if (!file) {
            return reject(new Error("No file provided for upload."));
        }
        const xhr = new XMLHttpRequest();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default"); // Direct Unsigned Upload Preset
        // Track upload progress
        xhr.upload.addEventListener("progress", (event)=>{
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total * 100;
                if (onProgress) onProgress(percentComplete);
            }
        });
        // Handle response
        xhr.addEventListener("load", ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    // Return the secure cloud URL generated directly by Cloudinary
                    resolve(response.secure_url);
                } catch (e) {
                    reject(new Error("Invalid response from Cloudinary"));
                }
            } else {
                reject(new Error(`Cloudinary responded with ${xhr.status}: ${xhr.statusText}`));
            }
        });
        // Handle errors
        xhr.addEventListener("error", ()=>{
            reject(new Error("Network error occurred during direct Cloudinary upload."));
        });
        // Send the request directly to Cloudinary (Bypassing backend entirely)
        xhr.open("POST", "https://api.cloudinary.com/v1_1/gkv58by2/image/upload", true);
        xhr.send(formData);
    });
}
}),
"[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/file-image.mjs [app-ssr] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$services$2f$cloudStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/services/cloudStorage.js [app-ssr] (ecmascript)");
;
;
;
;
function ActionModal({ action, onClose, onSubmit }) {
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewUrl, setPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [uploadedCloudUrl, setUploadedCloudUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Controlled inputs
    const [noteText, setNoteText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [writeTitle, setWriteTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [writeBody, setWriteBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!action) {
            setFile(null);
            setPreviewUrl(null);
            setUploadProgress(0);
            setUploadStatus("idle");
            setUploadedCloudUrl(null);
            setNoteText("");
            setWriteTitle("");
            setWriteBody("");
        }
    }, [
        action
    ]);
    if (!action) return null;
    function handleFileDrop(e) {
        e.preventDefault();
        if (uploadStatus === "uploading" || uploadStatus === "success") return;
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) processFile(droppedFile);
    }
    function handleFileSelect(e) {
        if (uploadStatus === "uploading" || uploadStatus === "success") return;
        const selectedFile = e.target.files[0];
        if (selectedFile) processFile(selectedFile);
    }
    function processFile(selectedFile) {
        setFile(selectedFile);
        setUploadStatus("idle");
        setUploadProgress(0);
        setUploadedCloudUrl(null);
        if (selectedFile.type.startsWith("image/")) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    }
    async function handleCloudUpload() {
        if (!file || uploadStatus === "uploading") return;
        setUploadStatus("uploading");
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$services$2f$cloudStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFileToCloud"])(file, (progress)=>{
                setUploadProgress(progress);
            });
            setUploadedCloudUrl(url);
            setUploadStatus("success");
        } catch (err) {
            console.error(err);
            setUploadStatus("error");
        }
    }
    function handleDone() {
        if (onSubmit) {
            const data = {
                fileUrl: uploadedCloudUrl,
                note: noteText,
                title: writeTitle,
                body: writeBody
            };
            onSubmit(data);
        }
        onClose();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-backdrop",
        role: "presentation",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "action-modal",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "action-modal-title",
            onClick: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: action.kicker
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "action-modal-title",
                                    children: action.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "icon-button",
                            type: "button",
                            "aria-label": "Close",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                action.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "modal-description",
                    children: action.description
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 101,
                    columnNumber: 32
                }, this),
                action.details?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-detail-grid",
                    children: action.details.map((detail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: detail.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: detail.value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, detail.label, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 104,
                    columnNumber: 11
                }, this) : null,
                action.type === "upload" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-form cloud-upload-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `cloud-dropzone ${uploadStatus}`,
                            onDragOver: (e)=>e.preventDefault(),
                            onDrop: handleFileDrop,
                            onClick: ()=>uploadStatus === "idle" && fileInputRef.current?.click(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    ref: fileInputRef,
                                    onChange: handleFileSelect,
                                    className: "hidden-file-input",
                                    style: {
                                        display: "none"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                uploadStatus === "idle" && !file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dropzone-prompt",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                            size: 32
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Drag & drop file here"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "or click to browse local files"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Supports images, PDFs, and code files"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                uploadStatus === "idle" && file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dropzone-preview",
                                    children: [
                                        previewUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: previewUrl,
                                            alt: "Preview",
                                            className: "file-preview-img"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 142,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                            size: 40,
                                            className: "file-preview-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 144,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        (file.size / 1024 / 1024).toFixed(2),
                                                        " MB"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "ghost-button upload-trigger-btn",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleCloudUpload();
                                            },
                                            children: "Upload to Cloud"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this),
                                uploadStatus === "uploading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dropzone-uploading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            size: 32,
                                            className: "spinning-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Uploading to Cloud Storage..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "upload-progress-bar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "upload-progress-fill",
                                                style: {
                                                    width: `${uploadProgress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                Math.round(uploadProgress),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                uploadStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dropzone-success",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 40,
                                            className: "success-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 169,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Upload Complete!"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: uploadedCloudUrl,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: "View File in Cloud"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 168,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                action.noteLabel || "Student note",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: action.notePlaceholder || "Add a short note for your teacher",
                                    value: noteText,
                                    onChange: (e)=>setNoteText(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this),
                action.type === "write" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-form write-content-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                action.writeTitleLabel || "Content Title",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: action.writeTitlePlaceholder || "Enter title...",
                                    value: writeTitle,
                                    onChange: (e)=>setWriteTitle(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "rich-text-label",
                            children: [
                                action.writeBodyLabel || "Content Body",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "rich-text-area",
                                    placeholder: action.writeBodyPlaceholder || "Write your content here...",
                                    rows: 12,
                                    value: writeBody,
                                    onChange: (e)=>setWriteBody(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this),
                action.type === "quiz" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "quiz-attempt-form",
                    children: action.questions?.map((question, questionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                            className: "quiz-question",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Question ",
                                                questionIndex + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        question.prompt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "quiz-options",
                                    children: question.options.map((option, optionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    name: `question-${questionIndex}`,
                                                    type: "radio",
                                                    required: optionIndex === 0
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: option
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                                    lineNumber: 223,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, option, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                            lineNumber: 221,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, question.prompt, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 214,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this),
                action.type === "schedule" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Class title",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    defaultValue: action.prefill?.title || ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Date and time",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    defaultValue: action.prefill?.time || ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Room or meeting link",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    defaultValue: action.prefill?.room || ""
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this),
                action.type === "marks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Marks status",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    defaultValue: action.prefill?.status || "Ready to publish"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: [
                                "Feedback note",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Add feedback or publishing remarks"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "ghost-button",
                            type: "button",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "primary-button modal-primary",
                            type: "button",
                            onClick: handleDone,
                            disabled: action.type === "upload" && uploadStatus !== "success",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                action.primaryLabel || "Done"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoleShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
;
;
function RoleShell({ children, session, profile, roleLabel, roleTone, navItems, activeView, onViewChange, onLogout }) {
    const initials = (session.name || profile.name).split(" ").map((part)=>part[0]).join("").slice(0, 2).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `app-shell ${roleTone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-lockup",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brand-mark",
                                children: "LS"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "LearnSphere"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Academic command center"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "profile-plate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: initials
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: session.name || profile.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: roleLabel
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": `${roleLabel} dashboard navigation`,
                        children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: (activeView || navItems[0]?.id) === item.id ? "active" : "",
                                type: "button",
                                "data-testid": `nav-${item.id}`,
                                onClick: ()=>onViewChange?.(item.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "dashboard-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-depth",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "depth-plate depth-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "depth-plate depth-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "depth-plate depth-three"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-visual-field",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visual-card visual-card-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visual-card visual-card-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visual-card visual-card-three"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visual-ribbon visual-ribbon-one"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "visual-ribbon visual-ribbon-two"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "dashboard-topbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: profile.scope || profile.department || profile.cohort
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: [
                                            roleLabel,
                                            " Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "search-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "aria-label": "Search LMS",
                                                placeholder: "Search courses, users, reports"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-button",
                                        type: "button",
                                        "aria-label": "Calendar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            size: 19
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "icon-button",
                                        type: "button",
                                        "aria-label": "Notifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            size: 19
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "logout-button",
                                        type: "button",
                                        onClick: onLogout,
                                        "data-testid": "logout",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            "Logout"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "security-strip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Role-based access active"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: roleLabel
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ProgressBar({ value, label, tone = "blue" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress-block",
        "aria-label": `${label}: ${value}%`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
                        lineNumber: 5,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: [
                            value,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "progress-track",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `progress-fill ${tone}`,
                    style: {
                        width: `${value}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function TestEnvironment({ test, onExit }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(test.durationMinutes * 60);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSubmitted) return;
        const timerId = setInterval(()=>{
            setTimeLeft((prev)=>{
                if (prev <= 1) {
                    clearInterval(timerId);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return ()=>clearInterval(timerId);
    }, [
        isSubmitted
    ]);
    const handleSelectOption = (qId, option)=>{
        if (isSubmitted) return;
        setAnswers({
            ...answers,
            [qId]: option
        });
    };
    const handleSubmit = ()=>{
        if (!window.confirm("Are you sure you want to submit your test?")) return;
        setIsSubmitted(true);
        let correct = 0;
        let wrong = 0;
        let unattempted = 0;
        test.questions.forEach((q)=>{
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
            score: correct / test.questions.length * 100
        });
    };
    const formatTime = (seconds)=>{
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };
    if (isSubmitted && results) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "test-env-container results-mode",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "results-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Test Completed!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "score-circle",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                Math.round(results.score),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "results-stats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-item correct",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: results.correct
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Correct"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-item wrong",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: results.wrong
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Wrong"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-item unattempted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: results.unattempted
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Unattempted"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "primary-btn",
                        onClick: onExit,
                        children: "Return to Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    const currentQ = test.questions[currentQuestionIndex];
    const attemptedCount = Object.keys(answers).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "test-env-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "test-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "test-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: test.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Question ",
                                    currentQuestionIndex + 1,
                                    " of ",
                                    test.questions.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `test-timer ${timeLeft < 60 ? 'danger' : ''}`,
                        children: [
                            "Time Left: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: formatTime(timeLeft)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 106,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "test-body-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "test-arena",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "question-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Q",
                                                currentQuestionIndex + 1,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        currentQ.question
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "options-grid",
                                    children: currentQ.options.map((opt)=>{
                                        const isSelected = answers[currentQ.id] === opt;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `option-row ${isSelected ? 'selected' : ''}`,
                                            onClick: ()=>handleSelectOption(currentQ.id, opt),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "radio-circle",
                                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "radio-dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 66
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: opt
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, opt, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "test-sidebar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Question Palette"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "palette-grid",
                                children: test.questions.map((q, idx)=>{
                                    const isAnswered = !!answers[q.id];
                                    const isCurrent = idx === currentQuestionIndex;
                                    let classes = "palette-btn";
                                    if (isAnswered) classes += " answered";
                                    if (isCurrent) classes += " current";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: classes,
                                        onClick: ()=>setCurrentQuestionIndex(idx),
                                        children: idx + 1
                                    }, q.id, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "palette-legend",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend-dot answered"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                                lineNumber: 154,
                                                columnNumber: 18
                                            }, this),
                                            " Answered"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "legend-dot"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                                lineNumber: 155,
                                                columnNumber: 18
                                            }, this),
                                            " Pending"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "palette-progress",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            attemptedCount,
                                            " of ",
                                            test.questions.length,
                                            " answered"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "progress-bar-bg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "progress-bar-fill",
                                            style: {
                                                width: `${attemptedCount / test.questions.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "test-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "ghost-button",
                                disabled: currentQuestionIndex === 0,
                                onClick: ()=>setCurrentQuestionIndex((prev)=>prev - 1),
                                children: "← Previous"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-btn",
                                disabled: currentQuestionIndex === test.questions.length - 1,
                                onClick: ()=>setCurrentQuestionIndex((prev)=>prev + 1),
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "submit-btn",
                        onClick: handleSubmit,
                        children: "Submit Test"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/data/metrics.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "average",
    ()=>average,
    "getAdminMetrics",
    ()=>getAdminMetrics,
    "getLoginReadiness",
    ()=>getLoginReadiness,
    "getStudentMetrics",
    ()=>getStudentMetrics,
    "getTeacherMetrics",
    ()=>getTeacherMetrics,
    "percent",
    ()=>percent
]);
const round = (value)=>Math.round(value);
function percent(value, total) {
    if (!total) return 0;
    return Math.min(100, round(value / total * 100));
}
function average(values) {
    if (!values.length) return 0;
    return round(values.reduce((sum, value)=>sum + value, 0) / values.length);
}
function getStudentMetrics(data) {
    const completion = average(data.subjects.map((subject)=>subject.progress));
    const gradeAverage = average(data.subjects.map((subject)=>subject.grade));
    const pendingAssignments = data.assignments.filter((item)=>!item.submitted).length;
    const quizAverage = average(data.quizzes.map((quiz)=>percent(quiz.score, quiz.total)));
    const earnedBadges = data.badges.filter((badge)=>badge.earned).length;
    const xpProgress = percent(data.xp.current, data.xp.target);
    const weeklyXpProgress = percent(data.xp.earnedThisWeek, data.xp.weeklyGoal);
    const readinessIndex = round(completion * 0.35 + quizAverage * 0.3 + gradeAverage * 0.2 + xpProgress * 0.15);
    return {
        completion,
        gradeAverage,
        pendingAssignments,
        quizAverage,
        xpProgress,
        weeklyXpProgress,
        readinessIndex,
        xpToNextRank: Math.max(data.xp.target - data.xp.current, 0),
        earnedBadges
    };
}
function getTeacherMetrics(data) {
    const totalEnrolled = data.subjects.reduce((sum, subject)=>sum + subject.enrolled, 0);
    const totalSubmitted = data.subjects.reduce((sum, subject)=>sum + subject.submitted, 0);
    const submissionRate = percent(totalSubmitted, totalEnrolled);
    const contentReadiness = average(data.subjects.map((subject)=>subject.contentReady));
    const quizAverage = average(data.quizStats.map((quiz)=>quiz.average));
    const workflowIndex = round(submissionRate * 0.35 + contentReadiness * 0.35 + quizAverage * 0.2 + (100 - data.gradingQueue.length * 8) * 0.1);
    return {
        activeCourses: data.subjects.length,
        totalEnrolled,
        submissionRate,
        contentReadiness,
        quizAverage,
        gradingQueue: data.gradingQueue.length,
        workflowIndex
    };
}
function getAdminMetrics(data) {
    const totalUsers = data.users.students + data.users.teachers + data.users.admins;
    const activeRate = percent(data.users.activeToday, totalUsers);
    const curriculumCoverage = percent(data.curriculum.mappedSubjects, data.curriculum.totalSubjects);
    const assignmentCoverage = percent(data.curriculum.teacherAssignments, data.curriculum.totalSubjects);
    const systemAverage = average(data.systemHealth.map((item)=>item.value));
    const governanceIndex = round(activeRate * 0.25 + curriculumCoverage * 0.25 + assignmentCoverage * 0.2 + systemAverage * 0.3);
    return {
        totalUsers,
        activeRate,
        curriculumCoverage,
        assignmentCoverage,
        systemAverage,
        governanceIndex,
        pendingInvites: data.users.pendingInvites
    };
}
function getLoginReadiness(form, selectedRole) {
    const nameScore = form.name.trim().length >= 3 ? 20 : form.name.trim().length ? 10 : 0;
    const usernameScore = form.username.trim().length >= 4 ? 25 : form.username.trim().length ? 12 : 0;
    const passwordScore = Math.min(35, form.password.length * 5);
    const roleScore = selectedRole ? 20 : 0;
    return nameScore + usernameScore + passwordScore + roleScore;
}
}),
"[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/award.mjs [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-ssr] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/file-up.mjs [app-ssr] (ecmascript) <export default as FileUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/medal.mjs [app-ssr] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$TestEnvironment$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/TestEnvironment.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/lmsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/metrics.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const navItems = [
    {
        id: "overview",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        id: "plan",
        label: "Learning Plan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        id: "classes",
        label: "Classes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"]
    },
    {
        id: "subjects",
        label: "Subjects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        id: "assignments",
        label: "Assignments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUp$3e$__["FileUp"]
    },
    {
        id: "quizzes",
        label: "Quizzes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        id: "badges",
        label: "Badges",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"]
    },
    {
        id: "calendar",
        label: "Calendar",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"]
    },
    {
        id: "xp",
        label: "XP Progress",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        id: "leaderboard",
        label: "Leaderboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"]
    }
];
const calendarDays = Array.from({
    length: 30
}, (_, index)=>{
    const day = index + 1;
    const color = [
        1,
        2,
        3,
        5,
        6,
        8,
        9,
        10,
        12,
        16,
        18,
        22,
        23,
        26,
        27,
        30
    ].includes(day) ? "green" : [
        4,
        19
    ].includes(day) ? "blue" : [
        11,
        25
    ].includes(day) ? "amber" : [
        13
    ].includes(day) ? "red" : "muted";
    return {
        day,
        color
    };
});
function DashboardMetric({ icon: Icon, code, label, value, detail, tone = "blue" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `dash-metric ${tone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "metric-code",
                children: code
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                size: 18
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
function StudentDashboard({ session, onLogout }) {
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Test Environment State
    const [activeTest, setActiveTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [availableTests, setAvailableTests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Assignment Backend State
    const [backendAssignments, setBackendAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAssignments, setLoadingAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/tests').then((res)=>res.json()).then((data)=>setAvailableTests(data)).catch((err)=>console.error("Failed to load tests:", err));
        fetchAssignments();
    }, []);
    const fetchAssignments = async ()=>{
        try {
            const res = await fetch('/api/assignments');
            if (res.ok) {
                const data = await res.json();
                setBackendAssignments(data);
            }
        } catch (err) {
            console.error("Failed to fetch assignments:", err);
        } finally{
            setLoadingAssignments(false);
        }
    };
    const handleModalSubmit = async (data)=>{
        if (!action) return;
        if (action.kicker === "Assignment upload" && action.assignmentId) {
            try {
                const payload = {
                    studentName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].profile.name,
                    studentId: "student_123",
                    fileUrl: data.fileUrl,
                    note: data.note
                };
                const res = await fetch(`/api/assignments/${action.assignmentId}/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
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
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStudentMetrics"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"]);
    function openClass(item) {
        setAction({
            kicker: "Class details",
            title: item.subject,
            description: `Scheduled class for ${item.topic}.`,
            details: [
                {
                    label: "Time",
                    value: item.time
                },
                {
                    label: "Room / Link",
                    value: item.room
                },
                {
                    label: "Topic",
                    value: item.topic
                }
            ],
            primaryLabel: "Join class"
        });
    }
    function openSubject(subject) {
        setAction({
            kicker: "Subject workspace",
            title: subject.title,
            description: "Open lessons, resources, assignments, quiz marks, and teacher notes for this subject.",
            details: [
                {
                    label: "Teacher",
                    value: subject.instructor
                },
                {
                    label: "Next class",
                    value: subject.nextClass
                },
                {
                    label: "Progress",
                    value: `${subject.progress}%`
                }
            ],
            primaryLabel: subject.option
        });
    }
    function openAssignment(assignment) {
        setAction({
            kicker: "Assignment upload",
            title: assignment.title,
            assignmentId: assignment.id,
            description: "Choose a file and submit your assignment before the due date.",
            type: "upload",
            details: [
                {
                    label: "Subject",
                    value: assignment.subject
                },
                {
                    label: "Due",
                    value: assignment.due
                },
                {
                    label: "Marks",
                    value: `${assignment.maxMarks}`
                }
            ],
            primaryLabel: "Upload assignment"
        });
    }
    function openQuiz(quiz) {
        setAction({
            kicker: "Assigned quiz",
            title: quiz.title,
            description: "Attempt the quiz directly here. Choose one option for each question and submit when ready.",
            type: "quiz",
            details: [
                {
                    label: "Subject",
                    value: quiz.subject
                },
                {
                    label: "Duration",
                    value: quiz.duration
                },
                {
                    label: "Status",
                    value: quiz.status
                }
            ],
            questions: quiz.questions,
            primaryLabel: quiz.action === "Review answers" ? "Close review" : "Submit quiz"
        });
    }
    function sectionTitle(title, subtitle, actionLabel) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "view-head",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Student module"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                actionLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "panel-button",
                    type: "button",
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 201,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 195,
            columnNumber: 7
        }, this);
    }
    function renderOverview() {
        const todayCards = [
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
                label: "Today's Class",
                title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class.subject,
                detail: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class.topic} - ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class.room}`,
                meta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class.time,
                tone: "blue",
                action: "Open class",
                onClick: ()=>openClass(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class)
            },
            {
                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                label: "Today's Quiz",
                title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.quiz.title,
                detail: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.quiz.subject} - ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.quiz.duration}`,
                meta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.quiz.status,
                tone: "green",
                action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.quiz.action,
                onClick: ()=>openQuiz(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].quizzes[0])
            }
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overview-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "hero-panel hero-panel-3d student-hero",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Good evening, Student"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Today at ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "LearnSphere"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 236,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "A focused view of your batch, live class, assignment deadline, quiz attempt, XP progress, badges, and leaderboard position."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-status-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].today.class.time,
                                                    " class"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Rank #",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].xp.rank
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "plan-card batch-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "My Batch"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.name,
                                                    " - ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.semester
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "batch-identity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "batch-avatar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 254,
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].profile.cohort
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: [
                                                        "Mentor: ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.mentor
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 255,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "batch-stat-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.strength
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Students"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 65
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.attendance
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Attendance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 67
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        "#",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].xp.rank
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Your rank"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.batchAverageXp
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Batch avg XP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 71
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "today-focus-grid",
                    children: todayCards.map(({ Icon, label, title, detail, meta, tone, action: actionLabel, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: `today-focus-card ${tone}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "today-focus-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 273,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: detail
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: meta
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClick,
                                    children: actionLabel
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-metric-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardMetric, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                            code: "XP",
                            label: "XP Progress",
                            value: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].xp.current} XP`,
                            detail: `${metrics.xpProgress}% toward Quiz Master`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardMetric, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
                            code: "QZ",
                            label: "Quizzes",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].quizzes.length,
                            detail: "Assigned quizzes can be attempted here",
                            tone: "green"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardMetric, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"],
                            code: "AS",
                            label: "Assignments",
                            value: backendAssignments.length,
                            detail: "Submitted and pending work",
                            tone: "amber"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardMetric, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"],
                            code: "BD",
                            label: "Badges",
                            value: `${metrics.earnedBadges} / 5`,
                            detail: "Starter unlocked. Quiz Master is next",
                            tone: "pink"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 231,
            columnNumber: 7
        }, this);
    }
    function renderPlan() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Today's Learning Plan", "A clean queue of what the student should do today."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].classSchedule.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card class-module",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code",
                                    children: item.subject[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: item.subject
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: item.topic
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        item.time,
                                        " - ",
                                        item.room
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openClass(item),
                                    children: "Open class"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.subject, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 297,
            columnNumber: 7
        }, this);
    }
    function renderClasses() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Scheduled Classes", "Classes scheduled by teachers appear with subject, time, and room/link status.", "View timetable"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].classSchedule.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card class-module",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code",
                                    children: item.subject[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: item.subject
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: item.topic
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        item.time,
                                        " - ",
                                        item.room
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openClass(item),
                                    children: "Open class"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${item.time}-${item.subject}`, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 316,
            columnNumber: 7
        }, this);
    }
    function renderSubjects() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Subjects", "Each subject focuses on content and a clear view option.", "View all subjects"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card subject-module",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code",
                                    children: subject.title[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: [
                                        subject.progress,
                                        "% complete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: subject.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        subject.instructor,
                                        ". Next class ",
                                        subject.nextClass,
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openSubject(subject),
                                    children: subject.option
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, subject.title, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 337,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 335,
            columnNumber: 7
        }, this);
    }
    function renderAssignments() {
        // Check if the current user (Aarav Mehta) has submitted the assignment
        const isSubmitted = (assignment)=>{
            return assignment.submissions && assignment.submissions.some((sub)=>sub.studentName === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].profile.name);
        };
        const submittedAssignments = backendAssignments.filter(isSubmitted).length;
        const pendingAssignments = backendAssignments.length - submittedAssignments;
        const nextPending = backendAssignments.find((assignment)=>!isSubmitted(assignment));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Assignments", "Current assignment status and upload actions.", "View all"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "assignment-workspace",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel assignment-list-panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stack-list",
                                children: [
                                    loadingAssignments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Loading assignments..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 368,
                                        columnNumber: 38
                                    }, this),
                                    !loadingAssignments && backendAssignments.map((assignment, index)=>{
                                        const submitted = isSubmitted(assignment);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "list-action-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: assignment.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 375,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: [
                                                                assignment.subject,
                                                                " - Due ",
                                                                assignment.due
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 376,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 374,
                                                    columnNumber: 21
                                                }, this),
                                                submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: true,
                                                    style: {
                                                        opacity: 0.5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 379,
                                                            columnNumber: 77
                                                        }, this),
                                                        " Submitted"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 379,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>openAssignment(assignment),
                                                    children: "Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 381,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, assignment.id, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 372,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel assignment-summary-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "assignment-summary-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Assignment queue"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Due work is grouped by action."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Use this panel to see what needs upload, what is pending, and what is already submitted."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "assignment-summary-stats",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: pendingAssignments
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Pending"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 57
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: submittedAssignments
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Submitted"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 59
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "50"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Marks today"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this),
                                nextPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "assignment-next-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                lineNumber: 403,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: nextPending.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: [
                                                        nextPending.subject,
                                                        " - due ",
                                                        nextPending.due
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>openAssignment(nextPending),
                                            children: "Upload"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 363,
            columnNumber: 7
        }, this);
    }
    function renderQuizzes() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Active Tests & Quizzes", "Tests assigned by your teacher. Some tests may be time-locked.", "View all"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: [
                        availableTests.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#888'
                            },
                            children: "No tests available right now."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 422,
                            columnNumber: 43
                        }, this),
                        availableTests.map((test, index)=>{
                            const now = new Date();
                            const start = new Date(test.startTime);
                            const end = new Date(test.endTime);
                            const isLocked = now < start;
                            const isExpired = now > end;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "module-card quiz-module",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `module-code ${isLocked ? 'amber' : isExpired ? 'red' : 'green'}`,
                                        children: [
                                            "T",
                                            index + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 433,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: test.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 434,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            test.questions.length,
                                            " Questions • ",
                                            test.durationMinutes,
                                            " Minutes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 435,
                                        columnNumber: 17
                                    }, this),
                                    isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Opens at: ",
                                            start.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 436,
                                        columnNumber: 30
                                    }, this),
                                    isExpired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Expired on: ",
                                            end.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 437,
                                        columnNumber: 31
                                    }, this),
                                    !isLocked && !isExpired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Available Now! Closes at: ",
                                            end.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 438,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: isLocked || isExpired,
                                        onClick: ()=>setActiveTest(test),
                                        style: {
                                            opacity: isLocked || isExpired ? 0.5 : 1,
                                            cursor: isLocked || isExpired ? 'not-allowed' : 'pointer'
                                        },
                                        children: isLocked ? "Locked" : isExpired ? "Expired" : "Start Test"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                        lineNumber: 440,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, test.id, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                lineNumber: 432,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 419,
            columnNumber: 7
        }, this);
    }
    function renderBadges() {
        const earnedBadges = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].badges.filter((badge)=>badge.earned);
        const lockedBadges = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].badges.filter((badge)=>!badge.earned);
        const nextBadge = lockedBadges[0];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Badge Journey", "Earned badges, locked badges, and the exact completion needed to unlock each one."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "badge-status-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "badge-collection-card earned-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Badges you have"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: [
                                                earnedBadges.length,
                                                " unlocked badges"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "These are already active on your student profile."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 469,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "earned-badge-row",
                                    children: earnedBadges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            title: badge.name,
                                            children: [
                                                badge.emoji,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: badge.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 473,
                                                    columnNumber: 72
                                                }, this)
                                            ]
                                        }, badge.name, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "badge-collection-card next-badge-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Next unlock"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: nextBadge.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: nextBadge.nextStep
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: nextBadge.progress,
                                    label: `${nextBadge.progress}% complete`,
                                    tone: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "badge-roadmap-grid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: badge.earned ? "badge-detail-card earned" : "badge-detail-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge-detail-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "badge-emoji",
                                            children: badge.emoji
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: badge.earned ? "Unlocked" : "Locked"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: badge.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 495,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: badge.detail
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: badge.progress,
                                    label: badge.current,
                                    tone: badge.earned ? "green" : "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: badge.unlockRule
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 498,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: badge.nextStep
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 499,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, badge.name, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 462,
            columnNumber: 7
        }, this);
    }
    function renderCalendar() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Learning Calendar", "Monthly activity overview for submissions, quizzes, classes, and deadlines."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "calendar-shell",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel calendar-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "calendar-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "June 2026"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 514,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Green completed, amber pending, red missed, blue quiz completed."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "calendar-weekdays",
                                    children: [
                                        "Mon",
                                        "Tue",
                                        "Wed",
                                        "Thu",
                                        "Fri",
                                        "Sat",
                                        "Sun"
                                    ].map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: day
                                        }, day, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 518,
                                            columnNumber: 79
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "calendar-grid",
                                    children: calendarDays.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `calendar-day ${day.color}`,
                                            type: "button",
                                            children: [
                                                day.day,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, day.day, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel calendar-stats",
                            children: [
                                [
                                    "Tasks Done",
                                    "32"
                                ],
                                [
                                    "Missed Tasks",
                                    "2"
                                ],
                                [
                                    "Active Days",
                                    "20"
                                ],
                                [
                                    "Completion Rate",
                                    "94%"
                                ]
                            ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: value
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, label, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 509,
            columnNumber: 7
        }, this);
    }
    function renderXp() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("XP Progress", "Readable XP and next badge progress."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "split-panels",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel xp-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "xp-ring",
                                    style: {
                                        "--value": `${metrics.xpProgress}%`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                metrics.xpProgress,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "complete"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 555,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "xp-lines",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Current XP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 558,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].xp.current
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 558,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 558,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Goal"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 559,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].xp.target
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 559,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Next Badge"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Quiz Master"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 557,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "How XP grows"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "xp-rule-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xp-rule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "AS"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Submit assignment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 566,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "On-time uploads add XP."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 566,
                                                            columnNumber: 89
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "+20 XP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 128
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xp-rule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "QZ"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Score well"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 567,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Quiz marks increase rewards."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 567,
                                                            columnNumber: 82
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "+30 XP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 126
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xp-rule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "ST"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 568,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Keep streak"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Daily consistency adds bonus XP."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 83
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 568,
                                                    columnNumber: 49
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "+10 XP"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                                    lineNumber: 568,
                                                    columnNumber: 131
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 563,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 551,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 549,
            columnNumber: 7
        }, this);
    }
    function renderLeaderboard() {
        const topThree = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].leaderboard.slice(0, 3);
        const currentRank = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].leaderboard.find((item)=>item.name === "Aarav");
        const gapToTopThree = topThree[2].xp - currentRank.xp;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Leaderboard", "Batch ranking with your current XP position and the gap to the top three.", "View full"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leaderboard-overview",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "leaderboard-rank-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "Your position"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        "Rank #",
                                        currentRank.rank
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        currentRank.xp,
                                        " XP collected in ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: Math.min(100, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["percent"])(currentRank.xp, topThree[0].xp)),
                                    label: `${gapToTopThree} XP to enter top 3`,
                                    tone: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 589,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "podium-grid",
                            children: topThree.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: `podium-card rank-${item.rank}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: [
                                                "#",
                                                item.rank
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                item.xp,
                                                " XP"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.rank, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 584,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "panel leaderboard-panel detailed-leaderboard",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].leaderboard.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: item.name === "Aarav" ? "rank-row current" : "rank-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: item.rank
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 608,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: item.name === "Aarav" ? "You - keep pushing toward top 3" : `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].batch.name} batchmate`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                            lineNumber: 609,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: [
                                        item.xp,
                                        " XP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                                    lineNumber: 611,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.rank, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                            lineNumber: 605,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                    lineNumber: 603,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 582,
            columnNumber: 7
        }, this);
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
        leaderboard: renderLeaderboard
    };
    // If a test is active, hijack the entire UI to lock the student into the Test Environment Arena
    if (activeTest) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$TestEnvironment$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            test: activeTest,
            onExit: ()=>setActiveTest(null)
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
            lineNumber: 634,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        session: session,
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["studentData"].profile,
        roleLabel: "Student",
        roleTone: "student",
        navItems: navItems,
        activeView: activeView,
        onViewChange: setActiveView,
        onLogout: onLogout,
        children: [
            views[activeView](),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                action: action,
                onClose: ()=>setAction(null),
                onSubmit: handleModalSubmit
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
                lineNumber: 649,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx",
        lineNumber: 638,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function TestBuilder() {
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [selectedQuestions, setSelectedQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1); // 1: Select Questions, 2: Settings & Preview
    const [testTitle, setTestTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [startTime, setStartTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endTime, setEndTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [durationMinutes, setDurationMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(30);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('/api/questions').then((res)=>res.json()).then((data)=>setQuestions(data)).catch((err)=>console.error("Failed to load questions:", err));
    }, []);
    const categories = [
        "All",
        ...new Set(questions.map((q)=>q.category))
    ];
    const filteredQuestions = categoryFilter === "All" ? questions : questions.filter((q)=>q.category === categoryFilter);
    const toggleQuestion = (q)=>{
        if (selectedQuestions.find((sq)=>sq.id === q.id)) {
            setSelectedQuestions(selectedQuestions.filter((sq)=>sq.id !== q.id));
        } else {
            setSelectedQuestions([
                ...selectedQuestions,
                q
            ]);
        }
    };
    const handlePublish = async ()=>{
        if (!testTitle || !startTime || !endTime || !durationMinutes || selectedQuestions.length === 0) {
            setMessage("Please fill all fields and select at least one question.");
            return;
        }
        setLoading(true);
        setMessage("");
        const payload = {
            title: testTitle,
            startTime,
            endTime,
            durationMinutes: Number(durationMinutes),
            questions: selectedQuestions
        };
        try {
            const response = await fetch('/api/tests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                setMessage("Test published successfully to Next.js API!");
                setStep(1);
                setSelectedQuestions([]);
                setTestTitle("");
            } else {
                setMessage("Failed to publish test.");
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to publish test.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "test-builder",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "test-builder-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "End-to-End Test Builder"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select questions, set timers, and publish class tests."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "test-builder-msg",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "test-builder-step",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Filter by Category:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: categoryFilter,
                                onChange: (e)=>setCategoryFilter(e.target.value),
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat,
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    selectedQuestions.length,
                                    " questions selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "primary-btn",
                                onClick: ()=>setStep(2),
                                disabled: selectedQuestions.length === 0,
                                children: "Next: Settings & Preview"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "questions-list",
                        children: filteredQuestions.map((q, idx)=>{
                            const isSelected = !!selectedQuestions.find((sq)=>sq.id === q.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `question-card ${isSelected ? 'selected' : ''}`,
                                onClick: ()=>toggleQuestion(q),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "q-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: isSelected,
                                                readOnly: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "q-badge",
                                                children: q.category
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    "Q",
                                                    idx + 1,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 110,
                                                columnNumber: 22
                                            }, this),
                                            " ",
                                            q.question
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 110,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "q-options",
                                        children: q.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: opt === q.answer ? 'correct-opt' : '',
                                                children: opt
                                            }, opt, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, q.id, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "test-builder-step",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "ghost-button",
                        onClick: ()=>setStep(1),
                        children: "← Back to Selection"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "settings-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Test Settings"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "settings-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Test Title:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: testTitle,
                                                onChange: (e)=>setTestTitle(e.target.value),
                                                placeholder: "e.g., Weekly Grammar Test"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Duration (Minutes):",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: durationMinutes,
                                                onChange: (e)=>setDurationMinutes(e.target.value),
                                                min: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Publish Start Time:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                value: startTime,
                                                onChange: (e)=>setStartTime(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Force End Time:",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "datetime-local",
                                                value: endTime,
                                                onChange: (e)=>setEndTime(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "publish-btn",
                                onClick: handlePublish,
                                disabled: loading,
                                children: loading ? "Publishing..." : "Publish Test to Students"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "preview-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "Test Preview (",
                                    selectedQuestions.length,
                                    " questions)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            selectedQuestions.map((q, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "preview-q",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    idx + 1,
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                                lineNumber: 156,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            q.question
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                }, q.id, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeacherDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookCopy$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/book-copy.mjs [app-ssr] (ecmascript) <export default as BookCopy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/calendar-clock.mjs [app-ssr] (ecmascript) <export default as CalendarClock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-ssr] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePenLine$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/file-pen-line.mjs [app-ssr] (ecmascript) <export default as FilePenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [app-ssr] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/message-square-plus.mjs [app-ssr] (ecmascript) <export default as MessageSquarePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/users-round.mjs [app-ssr] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$TestBuilder$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/TestBuilder.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/lmsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/metrics.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const navItems = [
    {
        id: "overview",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        id: "subjects",
        label: "Subjects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$copy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookCopy$3e$__["BookCopy"]
    },
    {
        id: "assignments",
        label: "Assignments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"]
    },
    {
        id: "submissions",
        label: "Submissions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        id: "classes",
        label: "Schedule Class",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$clock$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarClock$3e$__["CalendarClock"]
    },
    {
        id: "tests",
        label: "Test Builder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2d$line$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePenLine$3e$__["FilePenLine"]
    },
    {
        id: "marks",
        label: "Quiz Marks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"]
    },
    {
        id: "actions",
        label: "Feedback",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$plus$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquarePlus$3e$__["MessageSquarePlus"]
    },
    {
        id: "announcements",
        label: "Notices",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
    }
];
function TeacherMetric({ code, label, value, detail, tone = "blue" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `dash-metric ${tone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "metric-code",
                children: code
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function TeacherDashboard({ session, onLogout }) {
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTeacherMetrics"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherData"]);
    // Next.js Backend State for Assignments
    const [backendAssignments, setBackendAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAssignments, setLoadingAssignments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAssignments();
    }, []);
    const fetchAssignments = async ()=>{
        try {
            const res = await fetch('/api/assignments');
            if (res.ok) {
                const data = await res.json();
                setBackendAssignments(data);
            }
        } catch (err) {
            console.error("Failed to fetch assignments:", err);
        } finally{
            setLoadingAssignments(false);
        }
    };
    const handleModalSubmit = async (data)=>{
        if (!action) return;
        if (action.kicker === "Publish assignment" || action.kicker === "Write Instructions" || action.kicker === "Attach File") {
            try {
                const payload = {
                    title: data.title || action.title || "New Assignment",
                    subject: action.subjectContext || "Data Structures",
                    due: "Next Week",
                    maxMarks: 50,
                    fileUrl: data.fileUrl,
                    contentBody: data.body
                };
                const res = await fetch('/api/assignments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
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
                {
                    label: "Section",
                    value: subject.section
                },
                {
                    label: "Students",
                    value: subject.enrolled
                },
                {
                    label: "Assignments",
                    value: subject.assignments
                }
            ],
            primaryLabel: "Open subject"
        });
    }
    function openAssignment(assignment) {
        setAction({
            kicker: "View assignment",
            title: assignment.title,
            description: "Review this assignment.",
            type: "marks",
            details: [
                {
                    label: "Subject",
                    value: assignment.subject
                },
                {
                    label: "Due date",
                    value: assignment.due
                },
                {
                    label: "Maximum marks",
                    value: assignment.maxMarks
                }
            ],
            prefill: {
                status: assignment.status
            },
            primaryLabel: "Close"
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
                room: "Lab 3 or online meeting"
            },
            primaryLabel: "Save class"
        });
    }
    function openQuizMarks(quiz) {
        setAction({
            kicker: "Quiz marks publishing",
            title: quiz.title,
            description: "Review attempts and publish marks for students.",
            type: "marks",
            details: [
                {
                    label: "Attempted",
                    value: `${quiz.attempted}/${quiz.total}`
                },
                {
                    label: "Average",
                    value: `${quiz.average}%`
                },
                {
                    label: "Status",
                    value: quiz.published ? "Published" : "Ready"
                }
            ],
            prefill: {
                status: quiz.published ? "Marks published" : "Ready to publish"
            },
            primaryLabel: "Publish marks"
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
            primaryLabel: "Publish Assignment"
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
            primaryLabel: "Attach file"
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
            primaryLabel: "Save content"
        });
    }
    function sectionTitle(title, subtitle, actionLabel, actionHandler) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "view-head",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Teacher module"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                actionLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "panel-button",
                    type: "button",
                    onClick: actionHandler,
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 216,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    }
    function renderOverview() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overview-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "hero-panel hero-panel-3d teacher-hero",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Teacher workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            "Manage teaching work from ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "one calm control panel."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 228,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Publish assignments, check submissions, schedule classes, monitor subjects, and release quiz marks without crowding every feature into one screen."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-status-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherData"].subjects.length,
                                                    " Subjects"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    metrics.gradingQueue,
                                                    " Pending Grades"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Workflow ",
                                                    metrics.workflowIndex,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "plan-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Today's Faculty Queue"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Teaching actions that need attention."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "compact-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item green",
                                            type: "button",
                                            onClick: ()=>setActiveView("assignments"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Publish assignment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 127
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Graph traversal lab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 245,
                                                            columnNumber: 162
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 121
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Ready"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 197
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item blue",
                                            type: "button",
                                            onClick: ()=>setActiveView("submissions"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 112
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Review submissions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 126
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "13 students pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 246,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Open"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 196
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item amber",
                                            type: "button",
                                            onClick: ()=>setActiveView("marks"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 107
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Quiz marks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 121
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: "Sorting Analysis needs publish"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 148
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 115
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Marks"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                    lineNumber: 247,
                                                    columnNumber: 194
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-metric-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeacherMetric, {
                            code: "SB",
                            label: "Subjects under you",
                            value: metrics.activeCourses,
                            detail: `${metrics.totalEnrolled} students enrolled`,
                            tone: "green"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeacherMetric, {
                            code: "SU",
                            label: "Submission rate",
                            value: `${metrics.submissionRate}%`,
                            detail: "Submitted across sections"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeacherMetric, {
                            code: "GQ",
                            label: "Review queue",
                            value: metrics.gradingQueue,
                            detail: "Student files need grading",
                            tone: "amber"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeacherMetric, {
                            code: "WI",
                            label: "Workflow index",
                            value: `${metrics.workflowIndex}%`,
                            detail: "Calculated from teaching activity",
                            tone: "violet"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 223,
            columnNumber: 7
        }, this);
    }
    function renderSubjects() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Subjects Under Teacher", "All subjects assigned to the teacher, with student count and content readiness."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherData"].subjects.map((subject)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card subject-module",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code green",
                                    children: subject.title[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: subject.section
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: subject.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        subject.enrolled,
                                        " students - ",
                                        subject.assignments,
                                        " assignments"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 271,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: subject.contentReady,
                                    label: "Content ready",
                                    tone: "green"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "button-row",
                                    style: {
                                        display: 'flex',
                                        gap: '8px',
                                        marginTop: '12px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openSubject(subject),
                                        children: "Open subject"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, subject.title, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 263,
            columnNumber: 7
        }, this);
    }
    function renderAssignments() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Create Assignment", "Teachers can publish the assignment to be performed by students, with due dates and marks.", "New assignment", ()=>openTeacherAction("New assignment")),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: [
                        loadingAssignments && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Loading assignments from server..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 288,
                            columnNumber: 34
                        }, this),
                        !loadingAssignments && backendAssignments.map((assignment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "module-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "module-code blue",
                                        children: "AS"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: assignment.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: assignment.subject
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            "Due ",
                                            assignment.due,
                                            " - ",
                                            assignment.maxMarks,
                                            " marks"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "button-row",
                                        style: {
                                            display: 'flex',
                                            gap: '8px',
                                            marginTop: '12px',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openAssignment(assignment),
                                                children: assignment.status
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ghost-button",
                                                onClick: ()=>openAssignmentUpload(assignment),
                                                children: "Upload"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "ghost-button",
                                                onClick: ()=>openWriteContent(assignment),
                                                children: "Write"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, assignment.id, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 285,
            columnNumber: 7
        }, this);
    }
    function renderSubmissions() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Who Submitted", "Submission monitor shows student assignments pushed to the backend server."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: [
                        !loadingAssignments && backendAssignments.filter((a)=>a.submissions && a.submissions.length > 0).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "module-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "module-code green",
                                        children: "SB"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: item.subject
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: [
                                            item.submissions.length,
                                            " submissions received"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "submission-list",
                                        style: {
                                            marginTop: '10px'
                                        },
                                        children: item.submissions.map((sub, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '12px',
                                                    borderTop: '1px solid var(--line)',
                                                    paddingTop: '8px',
                                                    marginTop: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: sub.studentName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 21
                                                    }, this),
                                                    sub.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        children: [
                                                            "Note: ",
                                                            sub.note
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                        lineNumber: 323,
                                                        columnNumber: 34
                                                    }, this),
                                                    sub.fileUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: sub.fileUrl,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        style: {
                                                            display: 'block',
                                                            color: 'var(--primary)',
                                                            marginTop: '4px'
                                                        },
                                                        children: "View File"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)),
                        !loadingAssignments && backendAssignments.filter((a)=>a.submissions && a.submissions.length > 0).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#666'
                            },
                            children: "No student submissions received yet."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 331,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 309,
            columnNumber: 7
        }, this);
    }
    function renderClasses() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Class Scheduler", "Schedule a class with subject, time, room, or link.", "Schedule class", openSchedule),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "split-panels",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "panel schedule-card-large",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Subject",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Data Structures - CSE 4A"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 344,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Time",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "09:30 AM, Monday"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 345,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    "Room / Link",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Lab 3 or online meeting"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                        lineNumber: 346,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "panel-button",
                                type: "button",
                                onClick: openSchedule,
                                children: "Open scheduling panel"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 340,
            columnNumber: 7
        }, this);
    }
    function renderMarks() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Quiz Marks Center", "Publish marks and see how many students have already given the quiz.", "Publish selected", ()=>openTeacherAction("Publish selected quiz marks")),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherData"].quizStats.map((quiz)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card quiz-module",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code green",
                                    children: "QZ"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: quiz.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        quiz.attempted,
                                        " of ",
                                        quiz.total,
                                        " students have given the quiz."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: [
                                        quiz.average,
                                        "% average"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    className: quiz.published ? "status success" : "status warning",
                                    children: quiz.published ? "Marks published" : "Ready to publish"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openQuizMarks(quiz),
                                    children: "Open marks"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, quiz.title, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 356,
            columnNumber: 7
        }, this);
    }
    function renderActions() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: sectionTitle("Grade and Feedback", "Common teaching actions for grading and student progress review.")
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 376,
            columnNumber: 7
        }, this);
    }
    function renderAnnouncements() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: sectionTitle("Class Notices", "Announcements and reminders for students.")
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
            lineNumber: 384,
            columnNumber: 7
        }, this);
    }
    const views = {
        overview: renderOverview,
        subjects: renderSubjects,
        assignments: renderAssignments,
        submissions: renderSubmissions,
        classes: renderClasses,
        tests: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "role-view",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$TestBuilder$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
        marks: renderMarks,
        actions: renderActions,
        announcements: renderAnnouncements
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        session: session,
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["teacherData"].profile,
        roleLabel: "Teacher",
        roleTone: "teacher",
        navItems: navItems,
        activeView: activeView,
        onViewChange: setActiveView,
        onLogout: onLogout,
        children: [
            views[activeView](),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                action: action,
                onClose: ()=>setAction(null),
                onSubmit: handleModalSubmit
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/bell-ring.mjs [app-ssr] (ecmascript) <export default as BellRing>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/book-open-check.mjs [app-ssr] (ecmascript) <export default as BookOpenCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart2$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/file-chart-column.mjs [app-ssr] (ecmascript) <export default as FileBarChart2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/medal.mjs [app-ssr] (ecmascript) <export default as Medal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/lucide-react/dist/esm/icons/users-round.mjs [app-ssr] (ecmascript) <export default as UsersRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ActionModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/RoleShell.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/components/ProgressBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/lmsData.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/data/metrics.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const navItems = [
    {
        id: "overview",
        label: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        id: "users",
        label: "Users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2d$round$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersRound$3e$__["UsersRound"]
    },
    {
        id: "curriculum",
        label: "Curriculum",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenCheck$3e$__["BookOpenCheck"]
    },
    {
        id: "mapping",
        label: "Teacher Mapping",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "governance",
        label: "Governance",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        id: "announcements",
        label: "Announcements",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__["BellRing"]
    },
    {
        id: "reports",
        label: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart2$3e$__["FileBarChart2"]
    },
    {
        id: "health",
        label: "System Health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    }
];
function AdminMetric({ code, label, value, detail, tone = "blue" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `dash-metric ${tone}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "metric-code",
                children: code
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function AdminDashboard({ session, onLogout }) {
    const [activeView, setActiveView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [action, setAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$metrics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAdminMetrics"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"]);
    function openAdminAction(title, details = []) {
        setAction({
            kicker: "Admin action",
            title,
            description: "Open the LearnSphere administration panel for this operation.",
            details,
            primaryLabel: "Open admin panel"
        });
    }
    function sectionTitle(title, subtitle, actionLabel, actionHandler) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "view-head",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: "Admin module"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                actionLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "panel-button",
                    type: "button",
                    onClick: actionHandler,
                    children: actionLabel
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 69,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    function renderOverview() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overview-layout",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "hero-panel hero-panel-3d admin-hero",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "eyebrow",
                                            children: "Admin control room"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                "Run LearnSphere through ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "separate command modules."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Manage users, curriculum, teacher assignments, announcements, badges, leaderboards, system health, and reports without stacking everything in one long screen."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hero-status-row",
                                            "aria-label": "Admin dashboard status",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.students + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.teachers + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.admins,
                                                        " Total Users"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "System ",
                                                        metrics.systemAverage,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.reportRequests,
                                                        " Open Reports"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "admin-figure-scene",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "admin-server-stack",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "server-blade"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "server-blade"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "server-blade"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "admin-radar-3d",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "radar-ring"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "radar-sweep"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "floating-sticker sticker-security",
                                            children: "SEC"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "floating-sticker sticker-sync",
                                            children: "SYNC"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "floating-sticker sticker-live",
                                            children: "LIVE"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-3d-object",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 103,
                                            columnNumber: 64
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 103,
                                            columnNumber: 72
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 103,
                                            columnNumber: 80
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "plan-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "panel-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Admin Queue"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "High priority campus operations."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "compact-list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item violet",
                                            type: "button",
                                            onClick: ()=>setActiveView("users"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 108
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Pending invites"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 122
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.pendingInvites,
                                                                " invitations pending"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 113,
                                                            columnNumber: 154
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 116
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Users"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 222
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item green",
                                            type: "button",
                                            onClick: ()=>setActiveView("curriculum"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 112
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Curriculum mapping"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 126
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: [
                                                                metrics.curriculumCoverage,
                                                                "% complete"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 114,
                                                            columnNumber: 161
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 120
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Map"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 215
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "compact-item amber",
                                            type: "button",
                                            onClick: ()=>setActiveView("reports"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 109
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Report requests"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 115,
                                                            columnNumber: 123
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.reportRequests,
                                                                " open"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                            lineNumber: 115,
                                                            columnNumber: 155
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 117
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Reports"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 213
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dash-metric-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMetric, {
                            code: "US",
                            label: "Total users",
                            value: metrics.totalUsers.toLocaleString(),
                            detail: `${metrics.activeRate}% active today`,
                            tone: "violet"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMetric, {
                            code: "CU",
                            label: "Curriculum coverage",
                            value: `${metrics.curriculumCoverage}%`,
                            detail: "Subjects mapped to LMS"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMetric, {
                            code: "TA",
                            label: "Teacher assignment",
                            value: `${metrics.assignmentCoverage}%`,
                            detail: "Courses with assigned faculty",
                            tone: "green"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminMetric, {
                            code: "GI",
                            label: "Governance index",
                            value: `${metrics.governanceIndex}%`,
                            detail: "Calculated health score",
                            tone: "amber"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    function renderUsers() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("User Distribution", "Manage students, teachers, admins, active users, and pending invites.", "Manage users", ()=>openAdminAction("Manage users", [
                        {
                            label: "Students",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.students
                        },
                        {
                            label: "Teachers",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.teachers
                        },
                        {
                            label: "Pending invites",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.pendingInvites
                        }
                    ])),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: [
                        [
                            "Students",
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.students,
                            "Learner accounts"
                        ],
                        [
                            "Teachers",
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.teachers,
                            "Faculty accounts"
                        ],
                        [
                            "Admins",
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].users.admins,
                            "Operations accounts"
                        ]
                    ].map(([label, value, detail])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code violet",
                                    children: label[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "module-big",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: detail
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openAdminAction(label, [
                                            {
                                                label,
                                                value
                                            }
                                        ]),
                                    children: "Open"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    function renderCurriculum() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Department Mapping", "Manage users and curriculum department-wise.", "Open curriculum panel", ()=>openAdminAction("Curriculum mapping", [
                        {
                            label: "Mapped subjects",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].curriculum.mappedSubjects
                        },
                        {
                            label: "Total subjects",
                            value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].curriculum.totalSubjects
                        }
                    ])),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].departments.map((department)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code blue",
                                    children: department.name[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: department.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Lead: ",
                                        department.lead,
                                        ". ",
                                        department.users,
                                        " users."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: department.mapped,
                                    label: "Mapped",
                                    tone: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openAdminAction(`${department.name} mapping`, [
                                            {
                                                label: "Department lead",
                                                value: department.lead
                                            },
                                            {
                                                label: "Users",
                                                value: department.users
                                            },
                                            {
                                                label: "Mapped",
                                                value: `${department.mapped}%`
                                            }
                                        ]),
                                    children: "Open mapping"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, department.name, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 158,
            columnNumber: 7
        }, this);
    }
    function renderMapping() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Teacher and Student Assignment", "Assign teachers and students to curriculum, sections, and subjects."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "split-panels",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Assignment Coverage"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: metrics.assignmentCoverage,
                                    label: "Teacher assignment coverage",
                                    tone: "green"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: metrics.curriculumCoverage,
                                    label: "Curriculum coverage",
                                    tone: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "panel-button",
                                    type: "button",
                                    onClick: ()=>openAdminAction("Assign teachers/students", [
                                            {
                                                label: "Teacher assignments",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].curriculum.teacherAssignments
                                            },
                                            {
                                                label: "Student mappings",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].curriculum.studentMappings
                                            }
                                        ]),
                                    children: "Assign teachers/students"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "panel soft-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Mapping Summary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Use this module to connect faculty and students to the right courses and sections."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 184,
            columnNumber: 7
        }, this);
    }
    function renderGovernance() {
        const items = [
            [
                "Badge rules",
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.badgeRules,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"]
            ],
            [
                "Leaderboards",
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.leaderboardGroups,
                TrophyFallback
            ],
            [
                "Announcements",
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.openAnnouncements,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2d$ring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BellRing$3e$__["BellRing"]
            ],
            [
                "Report requests",
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].governance.reportRequests,
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$chart$2d$column$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileBarChart2$3e$__["FileBarChart2"]
            ]
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Governance", "Control badges, leaderboards, announcements, and report requests."),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid four",
                    children: items.map(([label, value, Icon])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code violet",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                        lineNumber: 219,
                                        columnNumber: 52
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "module-big",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Open governance control for ",
                                        label.toLowerCase(),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openAdminAction(label, [
                                            {
                                                label,
                                                value
                                            }
                                        ]),
                                    children: "Open"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 214,
            columnNumber: 7
        }, this);
    }
    function TrophyFallback(props) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$medal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Medal$3e$__["Medal"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 232,
            columnNumber: 12
        }, this);
    }
    function renderAnnouncements() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("System Announcements", "Publish and review campus-wide announcements.", "New announcement", ()=>openAdminAction("New announcement")),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "panel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stack-list",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].announcements.map((notice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "list-action-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: notice.status[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: notice.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                lineNumber: 244,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                children: [
                                                    notice.status,
                                                    " - ",
                                                    notice.audience
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                                lineNumber: 244,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openAdminAction(notice.title, [
                                                {
                                                    label: "Status",
                                                    value: notice.status
                                                },
                                                {
                                                    label: "Audience",
                                                    value: notice.audience
                                                }
                                            ]),
                                        children: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, notice.title, true, {
                                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                lineNumber: 242,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 237,
            columnNumber: 7
        }, this);
    }
    function renderReports() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Performance Reports", "Generate performance reports, badge audits, and curriculum mapping reports.", "Generate report", ()=>openAdminAction("Generate performance report")),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid three",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].reports.map((report)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code blue",
                                    children: "RP"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: report.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "Owner: ",
                                        report.owner
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: report.progress,
                                    label: "Progress",
                                    tone: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 267,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openAdminAction(report.name, [
                                            {
                                                label: "Owner",
                                                value: report.owner
                                            },
                                            {
                                                label: "Progress",
                                                value: `${report.progress}%`
                                            }
                                        ]),
                                    children: "Open report"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, report.name, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 263,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 259,
            columnNumber: 7
        }, this);
    }
    function renderHealth() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "role-view",
            children: [
                sectionTitle("Health Calculation", "System health, LMS activity, grading SLA, and attendance sync.", "Publish campus summary", ()=>openAdminAction("Publish campus summary", [
                        {
                            label: "System average",
                            value: `${metrics.systemAverage}%`
                        },
                        {
                            label: "Governance index",
                            value: `${metrics.governanceIndex}%`
                        }
                    ])),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "module-grid four",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].systemHealth.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "module-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "module-code green",
                                    children: [
                                        item.value,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ProgressBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    value: item.value,
                                    label: "Current value",
                                    tone: "green"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
            lineNumber: 281,
            columnNumber: 7
        }, this);
    }
    const views = {
        overview: renderOverview,
        users: renderUsers,
        curriculum: renderCurriculum,
        mapping: renderMapping,
        governance: renderGovernance,
        announcements: renderAnnouncements,
        reports: renderReports,
        health: renderHealth
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$RoleShell$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        session: session,
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$data$2f$lmsData$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adminData"].profile,
        roleLabel: "Admin",
        roleTone: "admin",
        navItems: navItems,
        activeView: activeView,
        onViewChange: setActiveView,
        onLogout: onLogout,
        children: [
            views[activeView](),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$components$2f$ActionModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                action: action,
                onClose: ()=>setAction(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx",
        lineNumber: 311,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/src/App.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$LoginPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/views/LoginPage.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$StudentDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/views/StudentDashboard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$TeacherDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/views/TeacherDashboard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$AdminDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/views/AdminDashboard.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const dashboardByRole = {
    student: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$StudentDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    teacher: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$TeacherDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    admin: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$AdminDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
};
function App() {
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, [
        session
    ]);
    if (!session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$LoginPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLogin: setSession
        }, void 0, false, {
            fileName: "[project]/Desktop/lms-ui/next-backend/src/App.jsx",
            lineNumber: 21,
            columnNumber: 12
        }, this);
    }
    const Dashboard = dashboardByRole[session.role] ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$views$2f$StudentDashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Dashboard, {
        session: session,
        onLogout: ()=>setSession(null)
    }, void 0, false, {
        fileName: "[project]/Desktop/lms-ui/next-backend/src/App.jsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
}),
"[project]/Desktop/lms-ui/next-backend/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$App$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/App.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$App$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/lms-ui/next-backend/app/page.js",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_lms-ui_next-backend_0p0xro2._.js.map