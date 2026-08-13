export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
      aria-hidden="true"
    >
      {/* base grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* diagonal cut top-right, echoing the poster's angular corner */}
      <div
        className="absolute -right-24 -top-24 h-[420px] w-[420px] rotate-45 border border-cyan/20 bg-gradient-to-br from-cyan/10 via-transparent to-transparent"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 70%)" }}
      />

      {/* soft glow blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-deep/25 blur-[120px]" />
      <div className="absolute right-[-8%] top-[35%] h-[320px] w-[320px] rounded-full bg-cyan/10 blur-[110px]" />

      {/* circuit traces, left */}
      <svg
        className="absolute left-0 top-0 h-[520px] w-[220px] opacity-40"
        viewBox="0 0 220 520"
        fill="none"
      >
        <path
          d="M0 40 H60 V120 H140 V200 H90 V300 H160 V400 H40 V520"
          stroke="#2fc6ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-circuit-flow"
        />
        {[40, 120, 200, 300, 400].map((y, i) => (
          <circle key={i} cx={i % 2 === 0 ? 60 : 140} cy={y} r="4" fill="#2fc6ff" />
        ))}
      </svg>

      {/* circuit traces, right */}
      <svg
        className="absolute right-0 top-0 h-[520px] w-[220px] opacity-40"
        viewBox="0 0 220 520"
        fill="none"
      >
        <path
          d="M220 40 H160 V120 H80 V200 H130 V300 H60 V400 H180 V520"
          stroke="#2fc6ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="animate-circuit-flow"
        />
        {[40, 120, 200, 300, 400].map((y, i) => (
          <circle key={i} cx={i % 2 === 0 ? 160 : 80} cy={y} r="4" fill="#2fc6ff" />
        ))}
      </svg>

      {/* vignette so decoration never feels noisy */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(4,10,18,0.9)]" />
    </div>
  );
}
