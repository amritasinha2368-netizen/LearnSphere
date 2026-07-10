import { useEffect, useState } from "react";
import LoginPage from "./views/LoginPage.jsx";
import StudentDashboard from "./views/StudentDashboard.jsx";
import TeacherDashboard from "./views/TeacherDashboard.jsx";
import AdminDashboard from "./views/AdminDashboard.jsx";

const dashboardByRole = {
  student: StudentDashboard,
  teacher: TeacherDashboard,
  admin: AdminDashboard,
};

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [session]);

  if (!session) {
    return <LoginPage onLogin={setSession} />;
  }

  const Dashboard = dashboardByRole[session.role] ?? StudentDashboard;

  return <Dashboard session={session} onLogout={() => setSession(null)} />;
}
