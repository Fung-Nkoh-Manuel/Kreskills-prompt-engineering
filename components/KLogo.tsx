export default function KLogo({ className = "h-16 w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Kreskills logo"
    >
      <rect x="24" y="18" width="10" height="84" fill="#ffffff" />
      <path
        d="M34 60 L78 18 H96 L52 60 L96 102 H78 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinejoin="round"
      />
      <path
        d="M52 60 L96 102"
        stroke="#2fc6ff"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M34 60 L78 18"
        stroke="#2fc6ff"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
