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
      <path
        d="M60 140 L140 60"
        stroke="#8B4513"
        strokeWidth="8"
        strokeLinecap="round"
      />
      
      {/* Axe Head */}
      <path
        d="M50 150 Q35 135 40 120 L55 105 Q65 100 75 110 L85 120 Q90 130 85 140 L70 155 Q60 160 50 150 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
      />
      
      {/* Axe Blade Detail */}
      <path
        d="M45 145 Q38 138 42 128 L50 120 Q55 118 60 123 L65 128 Q68 133 65 138 L57 146 Q52 148 45 145 Z"
        fill="#EF4444"
      />
      
      {/* Wrench Handle */}
      <path
        d="M140 140 L60 60"
        stroke="#6B7280"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Wrench Head */}
      <ellipse
        cx="55"
        cy="55"
        rx="12"
        ry="8"
        fill="#4B5563"
        stroke="#374151"
        strokeWidth="2"
        transform="rotate(-45 55 55)"
      />
      
      {/* Wrench Jaw */}
      <path
        d="M48 48 L52 44 L58 50 L54 54 Z"
        fill="#6B7280"
        stroke="#374151"
        strokeWidth="1"
      />
      
      {/* Wrench Detail */}
      <circle
        cx="55"
        cy="55"
        r="4"
        fill="#9CA3AF"
        stroke="#6B7280"
        strokeWidth="1"
      />
      
      {/* Center Circle */}
      <circle
        cx="100"
        cy="100"
        r="15"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="3"
      />
      
      {/* Center Detail */}
      <circle
        cx="100"
        cy="100"
        r="8"
        fill="#EF4444"
      />
    </svg>
  );
}