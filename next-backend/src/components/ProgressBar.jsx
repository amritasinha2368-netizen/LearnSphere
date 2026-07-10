export default function ProgressBar({ value, label, tone = "blue" }) {
  return (
    <div className="progress-block" aria-label={`${label}: ${value}%`}>
      <div className="progress-row">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="progress-track">
        <span className={`progress-fill ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
