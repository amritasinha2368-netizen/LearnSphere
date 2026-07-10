import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  IdCard,
  LockKeyhole,
  User,
} from "lucide-react";
import { roles } from "../data/lmsData.js";

const emptyForm = {
  name: "",
  username: "",
  password: "",
};

export default function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("student");
  const [form, setForm] = useState(emptyForm);
  const [showPassword, setShowPassword] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeRole = roles.find((role) => role.key === selectedRole);
  const canLogin = Boolean(form.name.trim() && form.username.trim() && form.password.trim() && selectedRole);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleTilt(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    setTilt({ x, y });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!canLogin) return;

    onLogin({
      role: selectedRole,
      name: form.name.trim(),
      username: form.username.trim(),
    });
  }

  return (
    <main className="login-page minimal-login">
      <section className="login-hero minimal-hero" aria-label="LearnSphere identity">
        <div className="brand-lockup login-brand">
          <span className="brand-mark">LS</span>
          <div>
            <strong>LearnSphere</strong>
            <small>Institution learning management system</small>
          </div>
        </div>

        <div className="login-3d-stage" aria-hidden="true">
          <div className="sphere-orbit orbit-one" />
          <div className="sphere-orbit orbit-two" />
          <div className="sphere-orbit orbit-three" />
          <div className="learn-sphere-core">
            <span />
            <span />
            <span />
          </div>
          <div className="glass-slab slab-one" />
          <div className="glass-slab slab-two" />
          <div className="glass-slab slab-three" />
          <div className="light-beam beam-one" />
          <div className="light-beam beam-two" />
        </div>

        <div className="minimal-copy">
          <p className="eyebrow">Secure academic access</p>
          <h1>LearnSphere</h1>
          <span>Role based entry for students, teachers, and administrators.</span>
        </div>
      </section>

      <section
        className="login-panel"
        onMouseMove={handleTilt}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ "--tilt-x": `${tilt.y}deg`, "--tilt-y": `${tilt.x}deg` }}
      >
        <form className="login-card compact-login-card" onSubmit={handleSubmit}>
          <div className="login-card-head">
            <span className={`role-signal ${activeRole.accent}`}>
              <activeRole.icon size={18} />
            </span>
            <div>
              <p className="eyebrow">Sign in</p>
              <h2>{activeRole.label} Login</h2>
            </div>
          </div>

          <div className="role-segment" role="radiogroup" aria-label="Select role">
            {roles.map((role) => (
              <button
                className={`role-chip ${selectedRole === role.key ? "selected" : ""}`}
                type="button"
                key={role.key}
                data-testid={`role-${role.key}`}
                onClick={() => setSelectedRole(role.key)}
                aria-pressed={selectedRole === role.key}
              >
                <role.icon size={17} />
                <span>{role.label}</span>
              </button>
            ))}
          </div>

          <label className="input-field">
            <span>Name</span>
            <div>
              <User size={18} />
              <input name="name" value={form.name} onChange={updateField} placeholder="Enter your name" />
            </div>
          </label>

          <label className="input-field">
            <span>Username / ID</span>
            <div>
              <IdCard size={18} />
              <input name="username" value={form.username} onChange={updateField} placeholder="Enter username or ID" />
            </div>
          </label>

          <label className="input-field">
            <span>Password</span>
            <div>
              <LockKeyhole size={18} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={updateField}
                placeholder="Enter password"
              />
              <button
                className="field-icon-button"
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <p className="login-hint">
            {canLogin ? "All set. Open your dashboard." : "Enter name, username or ID, password, and role."}
          </p>

          <button className="primary-button" type="submit" disabled={!canLogin} data-testid="login-submit">
            Open {activeRole.label} Dashboard
            <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}
