export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-label="GV logo" role="img">
      <defs>
        <linearGradient id="gv-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f8fff" />
          <stop offset="100%" stopColor="#9b5fff" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#gv-grad)" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="16"
        letterSpacing="-0.5"
      >
        GV
      </text>
    </svg>
  );
}
