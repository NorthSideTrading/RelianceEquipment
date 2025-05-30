interface CrossedAxeWrenchProps {
  className?: string;
  size?: number;
}

export default function CrossedAxeWrench({ className = "", size = 100 }: CrossedAxeWrenchProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Axe Handle */}
      <line
        x1="40"
        y1="160"
        x2="110"
        y2="90"
        stroke="#8B4513"
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      {/* Axe Head */}
      <path
        d="M115 85 L125 75 L140 80 L145 95 L135 105 L120 100 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
      />
      
      {/* Axe Blade */}
      <path
        d="M120 100 L135 105 L145 95 L150 110 L125 120 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
      />
      
      {/* Wrench Handle */}
      <line
        x1="160"
        y1="40"
        x2="90"
        y2="110"
        stroke="#6B7280"
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      {/* Wrench Head */}
      <rect
        x="75"
        y="115"
        width="25"
        height="15"
        fill="#6B7280"
        stroke="#374151"
        strokeWidth="2"
        rx="2"
        transform="rotate(-45 87.5 122.5)"
      />
      
      {/* Wrench Opening */}
      <rect
        x="85"
        y="120"
        width="12"
        height="8"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        rx="1"
        transform="rotate(-45 91 124)"
      />
      
      {/* Center Binding */}
      <circle
        cx="100"
        cy="100"
        r="10"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
      />
    </svg>
  );
}