export default function AICentralGlyph() {
  return (
    <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center sm:h-[360px] sm:w-[360px]">
      {/* radiating rays */}
      <svg
        className="absolute inset-0 h-full w-full animate-rim-spin"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <line
              key={i}
              x1="200"
              y1="30"
              x2="200"
              y2="60"
              stroke="#2fc6ff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
              transform={`rotate(${angle} 200 200)`}
            />
          );
        })}
      </svg>

      {/* glow halo */}
      <div className="absolute h-[240px] w-[240px] rounded-full bg-cyan/25 blur-[70px] animate-pulse-glow sm:h-[280px] sm:w-[280px]" />

      <svg
        viewBox="0 0 300 340"
        className="relative h-[220px] w-[220px] drop-shadow-[0_0_35px_rgba(47,198,255,0.55)] sm:h-[260px] sm:w-[260px]"
        role="img"
        aria-label="AI-powered lightbulb and chat bubble, symbolizing prompt engineering"
      >
        <defs>
          <clipPath id="rightHalf">
            <rect x="150" y="0" width="150" height="340" />
          </clipPath>
        </defs>

        {/* bulb head - left (outline / human speech side) */}
        <path
          d="M150 40
             C90 40 55 85 55 135
             C55 170 72 195 95 215
             L95 245
             L150 245 Z"
          fill="#040a12"
          stroke="#f5f9fc"
          strokeWidth="4"
        />

        {/* bulb head - right (circuit / AI side) */}
        <path
          d="M150 40
             C210 40 245 85 245 135
             C245 170 228 195 205 215
             L205 245
             L150 245 Z"
          fill="#0a2233"
          stroke="#2fc6ff"
          strokeWidth="4"
        />

        {/* circuit traces on the right half */}
        <g clipPath="url(#rightHalf)" stroke="#2fc6ff" strokeWidth="3" fill="none">
          <path d="M150 70 H190 V100 H215" />
          <path d="M150 110 H175 V140 H210" />
          <path d="M150 150 H190 V180 H220" />
          <circle cx="190" cy="70" r="5" fill="#2fc6ff" stroke="none" />
          <circle cx="215" cy="100" r="5" fill="#2fc6ff" stroke="none" />
          <circle cx="175" cy="110" r="4" fill="#2fc6ff" stroke="none" />
          <circle cx="210" cy="140" r="5" fill="#2fc6ff" stroke="none" />
          <circle cx="190" cy="150" r="4" fill="#2fc6ff" stroke="none" />
          <circle cx="220" cy="180" r="5" fill="#2fc6ff" stroke="none" />
        </g>

        {/* speech tail, bottom-left, in outline style like a chat bubble */}
        <path
          d="M95 215 L70 260 L110 240 Z"
          fill="#040a12"
          stroke="#f5f9fc"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* three dots - conversation */}
        <circle cx="112" cy="150" r="7" fill="#f5f9fc" />
        <circle cx="140" cy="150" r="7" fill="#f5f9fc" />
        <circle cx="168" cy="150" r="7" fill="#f5f9fc" opacity="0.4" />

        {/* screw base of the bulb */}
        <rect x="115" y="245" width="70" height="14" rx="3" fill="#2fc6ff" />
        <rect x="118" y="263" width="64" height="12" rx="3" fill="#2fc6ff" opacity="0.85" />
        <rect x="122" y="279" width="56" height="12" rx="3" fill="#2fc6ff" opacity="0.7" />
        <path
          d="M130 291 H170 L158 315 H142 Z"
          fill="#2fc6ff"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
