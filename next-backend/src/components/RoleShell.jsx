import {
  Bell,
  CalendarDays,
  LogOut,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function RoleShell({
  children,
  session,
  profile,
  roleLabel,
  roleTone,
  navItems,
  activeView,
  onViewChange,
  onLogout,
}) {
  const initials = (session.name || profile.name)
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`app-shell ${roleTone}`}>
      <aside className="sidebar">
        <div className="brand-lockup">
          <span className="brand-mark">LS</span>
          <div>
            <strong>LearnSphere</strong>
            <small>Academic command center</small>
          </div>
        </div>

        <div className="profile-plate">
          <span>{initials}</span>
          <div>
            <strong>{session.name || profile.name}</strong>
            <small>{roleLabel}</small>
          </div>
        </div>

        <nav aria-label={`${roleLabel} dashboard navigation`}>
          {navItems.map((item, index) => (
            <button
              className={(activeView || navItems[0]?.id) === item.id ? "active" : ""}
              type="button"
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => onViewChange?.(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-depth" aria-hidden="true">
          <span className="depth-plate depth-one" />
          <span className="depth-plate depth-two" />
          <span className="depth-plate depth-three" />
        </div>
        <div className="dashboard-visual-field" aria-hidden="true">
          <span className="visual-card visual-card-one" />
          <span className="visual-card visual-card-two" />
          <span className="visual-card visual-card-three" />
          <span className="visual-ribbon visual-ribbon-one" />
          <span className="visual-ribbon visual-ribbon-two" />
        </div>

        <header className="dashboard-topbar">
          <div>
            <p className="eyebrow">{profile.scope || profile.department || profile.cohort}</p>
            <h1>{roleLabel} Dashboard</h1>
          </div>

          <div className="topbar-actions">
            <label className="search-field">
              <Search size={17} />
              <input aria-label="Search LMS" placeholder="Search courses, users, reports" />
            </label>
            <button className="icon-button" type="button" aria-label="Calendar">
              <CalendarDays size={19} />
            </button>
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={19} />
            </button>
            <button className="logout-button" type="button" onClick={onLogout} data-testid="logout">
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </header>

        <div className="security-strip">
          <ShieldCheck size={17} />
          <span>Role-based access active</span>
          <strong>{roleLabel}</strong>
        </div>

        {children}
      </main>
    </div>
  );
}
