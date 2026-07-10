export default function StatCard({ icon: Icon, label, value, detail, tone = "blue" }) {
  return (
    <article className={`stat-card ${tone}`}>
      <div className="stat-icon" aria-hidden="true">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </article>
  );
}
