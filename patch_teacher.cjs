const fs = require('fs');
let code = fs.readFileSync('src/pages/TeacherDashboard.jsx', 'utf8');

// Add Calendar icon to imports
code = code.replace('CalendarClock,', 'CalendarClock,\n  Calendar,');

// Add to navItems
code = code.replace(
  '{ id: "subjects", label: "Subjects", icon: BookCopy },',
  '{ id: "calendar", label: "Calendar", icon: Calendar },\n  { id: "subjects", label: "Subjects", icon: BookCopy },'
);

// Add state
code = code.replace(
  'const [dbFeedback, setDbFeedback] = useState([]);',
  'const [dbFeedback, setDbFeedback] = useState([]);\n  const [dbEvents, setDbEvents] = useState([]);\n  const [currentMonth, setCurrentMonth] = useState(new Date());'
);

// Add fetch
code = code.replace(
  "fetch('/api/lms-data?type=feedback')",
  "fetch('/api/lms-data?type=events').then(res => res.json()).then(data => { if (Array.isArray(data)) setDbEvents(data) }).catch(console.error);\n    fetch('/api/lms-data?type=feedback')"
);

// Add renderCalendar function
const renderCalendarCode = fs.readFileSync('scratch-calendar.js', 'utf8');
code = code.replace(
  'function renderFeedback() {',
  renderCalendarCode + '\n\n  function renderFeedback() {'
);

// Add to views
code = code.replace(
  'subjects: renderSubjects,',
  'calendar: renderCalendar,\n    subjects: renderSubjects,'
);

fs.writeFileSync('src/pages/TeacherDashboard.jsx', code);
console.log('Patched TeacherDashboard.jsx');
