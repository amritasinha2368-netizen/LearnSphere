const round = (value) => Math.round(value);

export function percent(value, total) {
  if (!total) return 0;
  return Math.min(100, round((value / total) * 100));
}

export function average(values) {
  if (!values.length) return 0;
  return round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export function getStudentMetrics(data) {
  const completion = average(data.subjects.map((subject) => subject.progress));
  const gradeAverage = average(data.subjects.map((subject) => subject.grade));
  const pendingAssignments = data.assignments.filter((item) => !item.submitted).length;
  const quizAverage = average(data.quizzes.map((quiz) => percent(quiz.score, quiz.total)));
  const earnedBadges = data.badges.filter((badge) => badge.earned).length;
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
    earnedBadges,
  };
}

export function getTeacherMetrics(data) {
  const totalEnrolled = data.subjects.reduce((sum, subject) => sum + subject.enrolled, 0);
  const totalSubmitted = data.subjects.reduce((sum, subject) => sum + subject.submitted, 0);
  const submissionRate = percent(totalSubmitted, totalEnrolled);
  const contentReadiness = average(data.subjects.map((subject) => subject.contentReady));
  const quizAverage = average(data.quizStats.map((quiz) => quiz.average));
  const workflowIndex = round(submissionRate * 0.35 + contentReadiness * 0.35 + quizAverage * 0.2 + (100 - data.gradingQueue.length * 8) * 0.1);

  return {
    activeCourses: data.subjects.length,
    totalEnrolled,
    submissionRate,
    contentReadiness,
    quizAverage,
    gradingQueue: data.gradingQueue.length,
    workflowIndex,
  };
}

export function getAdminMetrics(data) {
  const totalUsers = data.users.students + data.users.teachers + data.users.admins;
  const activeRate = percent(data.users.activeToday, totalUsers);
  const curriculumCoverage = percent(data.curriculum.mappedSubjects, data.curriculum.totalSubjects);
  const assignmentCoverage = percent(data.curriculum.teacherAssignments, data.curriculum.totalSubjects);
  const systemAverage = average(data.systemHealth.map((item) => item.value));
  const governanceIndex = round(activeRate * 0.25 + curriculumCoverage * 0.25 + assignmentCoverage * 0.2 + systemAverage * 0.3);

  return {
    totalUsers,
    activeRate,
    curriculumCoverage,
    assignmentCoverage,
    systemAverage,
    governanceIndex,
    pendingInvites: data.users.pendingInvites,
  };
}

export function getLoginReadiness(form, selectedRole) {
  const nameScore = form.name.trim().length >= 3 ? 20 : form.name.trim().length ? 10 : 0;
  const usernameScore = form.username.trim().length >= 4 ? 25 : form.username.trim().length ? 12 : 0;
  const passwordScore = Math.min(35, form.password.length * 5);
  const roleScore = selectedRole ? 20 : 0;

  return nameScore + usernameScore + passwordScore + roleScore;
}
