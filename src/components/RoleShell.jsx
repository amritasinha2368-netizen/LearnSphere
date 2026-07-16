import { useState, useEffect, useRef } from "react";
import {
  Bell,
  CalendarDays,
  LogOut,
  Search,
  ShieldCheck,
  X,
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

  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notices, setNotices] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  const searchRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    fetch('/api/lms-data?type=notices')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setNotices(data);
      })
      .catch(console.error);

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchQuery("");
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = [];
    
    // Search navigation items
    navItems.forEach(item => {
      if (item.label.toLowerCase().includes(q)) {
        results.push({ type: 'nav', label: item.label, id: item.id, icon: item.icon });
      }
    });
    
    // Search notices
    notices.forEach(notice => {
      if (notice.title?.toLowerCase().includes(q) || notice.content?.toLowerCase().includes(q)) {
        results.push({ type: 'notice', label: notice.title, content: notice.content });
      }
    });

    setSearchResults(results.slice(0, 6));
  }, [searchQuery, navItems, notices]);

  return (
    <div className={`app-shell ${roleTone}`}>
      <aside className="sidebar">
        <div className="brand-lockup">
          <img src="/logo.jpg" alt="LearnSphere" className="brand-mark" style={{ width: '40px', height: '40px', borderRadius: '12px', objectFit: 'cover', padding: 0, background: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
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
            <div className="search-container" ref={searchRef} style={{ position: 'relative' }}>
              <label className="search-field">
                <Search size={17} />
                <input 
                  aria-label="Search LMS" 
                  placeholder="Search courses, users, reports" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </label>
              {searchQuery && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '300px', background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', zIndex: 100, overflow: 'hidden' }}>
                  {searchResults.length === 0 ? (
                    <div style={{ padding: '16px', color: '#64748b', fontSize: '14px', textAlign: 'center' }}>No results found</div>
                  ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {searchResults.map((res, i) => (
                        <li key={i}>
                          <button 
                            type="button" 
                            style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '12px 16px', background: 'none', border: 'none', borderBottom: '1px solid #f1f5f9', cursor: 'pointer', textAlign: 'left', gap: '12px' }}
                            onClick={() => {
                              if (res.type === 'nav' && onViewChange) {
                                onViewChange(res.id);
                              }
                              setSearchQuery("");
                            }}
                          >
                            {res.type === 'nav' ? <res.icon size={16} color="#64748b" /> : <Bell size={16} color="#64748b" />}
                            <div>
                              <strong style={{ display: 'block', fontSize: '14px', color: '#0f172a' }}>{res.label}</strong>
                              <span style={{ fontSize: '12px', color: '#64748b' }}>{res.type === 'nav' ? 'Navigation' : 'Announcement'}</span>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <button className="icon-button" type="button" aria-label="Calendar" onClick={() => onViewChange && onViewChange('calendar')}>
              <CalendarDays size={19} />
            </button>
            <div style={{ position: 'relative' }} ref={notifRef}>
              <button className="icon-button" type="button" aria-label="Notifications" onClick={() => setShowNotifications(!showNotifications)}>
                <Bell size={19} />
                {notices.length > 0 && <span style={{ position: 'absolute', top: '4px', right: '4px', width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }} />}
              </button>
              {showNotifications && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, width: '320px', background: 'white', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', zIndex: 100, overflow: 'hidden' }}>
                  <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ fontSize: '14px', color: '#0f172a' }}>Notifications</strong>
                    <button type="button" onClick={() => setShowNotifications(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}><X size={16} /></button>
                  </div>
                  {notices.length === 0 ? (
                    <div style={{ padding: '32px 16px', color: '#64748b', fontSize: '14px', textAlign: 'center' }}>No new notifications</div>
                  ) : (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: '360px', overflowY: 'auto' }}>
                      {notices.slice(0, 10).map((notice, i) => (
                        <li key={notice._id || notice.id || i} style={{ padding: '16px', borderBottom: '1px solid #f1f5f9' }}>
                          <strong style={{ display: 'block', fontSize: '13px', color: '#0f172a' }}>{notice.title}</strong>
                          <span style={{ fontSize: '12px', color: '#64748b', display: 'block', margin: '4px 0' }}>{new Date(notice.date || Date.now()).toLocaleDateString()}</span>
                          {notice.content && <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>{notice.content}</p>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
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
