const fs = require('fs');

const teacherStr = fs.readFileSync('src/pages/TeacherDashboard.jsx', 'utf8');
const adminStr = fs.readFileSync('src/pages/AdminDashboard.jsx', 'utf8');

// 1. Extract handleModalSubmit from Teacher
const teacherModalStart = teacherStr.indexOf('const handleModalSubmit = async (data) => {');
const teacherModalEnd = teacherStr.indexOf('const [deletingAssignmentId', teacherModalStart);
let teacherModal = teacherStr.slice(teacherModalStart, teacherModalEnd);
teacherModal = teacherModal.replace('const handleModalSubmit = async (data) => {', '');

// Clean up the end of teacherModal
const lastBraceTeacherModal = teacherModal.lastIndexOf('};');
teacherModal = teacherModal.slice(0, lastBraceTeacherModal).trim();

// 2. Extract Admin Modal logic
const adminModalStart = adminStr.indexOf('async function handleModalSubmit(data) {');
const adminModalEnd = adminStr.indexOf('function sectionTitle(', adminModalStart);
let adminModal = adminStr.slice(adminModalStart, adminModalEnd);
adminModal = adminModal.replace('async function handleModalSubmit(data) {\n    if (!action) return;\n    \n    try {\n', '');
adminModal = adminModal.replace('} catch (err) {\n      console.error("Error creating users:", err);\n    }\n  }\n\n', '').trim();

const newModalSubmit = `  async function handleModalSubmit(data) {
    if (!action) return;
    try {
${adminModal}
      // -- Teacher logic --
${teacherModal.slice(teacherModal.indexOf('if (action.kicker'))}
    } catch (err) {
      console.error(err);
    }
  }`;

// 3. Extract the rest of the functions from TeacherDashboard
const teacherFunctionsStart = teacherStr.indexOf('const [deletingAssignmentId');
const teacherFunctionsEnd = teacherStr.indexOf('return (\n    <RoleShell');
const teacherFunctions = teacherStr.slice(teacherFunctionsStart, teacherFunctionsEnd);

// 4. Merge into Admin
const adminViewsStart = adminStr.indexOf('const views = {');
let newAdminStr = adminStr.slice(0, adminModalStart) + newModalSubmit + '\n\n' + adminStr.slice(adminModalEnd, adminViewsStart) + '\n\n' + teacherFunctions + '\n\n' + adminStr.slice(adminViewsStart);

// 5. Update views dictionary
newAdminStr = newAdminStr.replace(
  'const views = {\n    overview: renderOverview(),\n    users: renderUsers(),\n    curriculum: renderCurriculum(),\n    mapping: renderMapping(),\n    governance: renderGovernance(),\n    announcements: renderAnnouncements(),\n    reports: renderReports(),\n    health: renderHealth(),\n  };',
  `const views = {
    overview: renderOverview(),
    users: renderUsers(),
    curriculum: renderCurriculum(),
    mapping: renderMapping(),
    governance: renderGovernance(),
    announcements: renderAnnouncements(),
    reports: renderReports(),
    health: renderHealth(),
    subjects: renderSubjects(),
    assignments: renderAssignments(),
    submissions: renderSubmissions(),
    classes: renderClasses(),
    tests: renderTests(),
    code: renderCodeBuilder(),
    marks: renderMarks(),
    actions: renderActions(),
  };`
);

fs.writeFileSync('src/pages/AdminDashboard.jsx', newAdminStr);
console.log('Merged successfully.');
