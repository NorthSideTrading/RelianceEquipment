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
      {/* Firefighter Axe Handle */}
      <rect
        x="45"
        y="45"
        width="8"
        height="110"
        fill="#8B4513"
        stroke="#654321"
        strokeWidth="1"
        transform="rotate(45 100 100)"
        rx="4"
      />
      
      {/* Firefighter Axe Head */}
      <path
        d="M40 35 L65 35 L75 45 L75 55 L65 65 L40 65 L30 50 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
        transform="rotate(45 100 100) translate(10, -10)"
      />
      
      {/* Axe Blade Edge */}
      <path
        d="M30 50 L40 35 L65 35 L75 45"
        stroke="#EF4444"
        strokeWidth="2"
        fill="none"
        transform="rotate(45 100 100) translate(10, -10)"
      />
      
      {/* Axe Pick/Spike */}
      <path
        d="M75 45 L85 40 L90 50 L85 60 L75 55"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="2"
        transform="rotate(45 100 100) translate(10, -10)"
      />
      
      {/* Mechanic's Wrench Handle */}
      <rect
        x="155"
        y="45"
        width="6"
        height="110"
        fill="#4B5563"
        stroke="#374151"
        strokeWidth="1"
        transform="rotate(-45 100 100)"
        rx="3"
      />
      
      {/* Wrench Head (Open End) */}
      <path
        d="M145 35 L165 35 L165 42 L158 49 L152 49 L145 42 Z"
        fill="#6B7280"
        stroke="#374151"
        strokeWidth="2"
        transform="rotate(-45 100 100) translate(10, -10)"
      />
      
      {/* Wrench Opening/Jaw */}
      <path
        d="M152 42 L158 42 L158 49 L152 49"
        fill="none"
        stroke="#374151"
        strokeWidth="1.5"
        transform="rotate(-45 100 100) translate(10, -10)"
      />
      
      {/* Wrench Box End */}
      <rect
        x="145"
        y="55"
        width="20"
        height="12"
        fill="#6B7280"
        stroke="#374151"
        strokeWidth="2"
        transform="rotate(-45 100 100) translate(10, -10)"
        rx="2"
      />
      
      {/* Wrench Box Opening (Hexagon) */}
      <polygon
        points="150,61 155,58 160,61 160,67 155,70 150,67"
        fill="none"
        stroke="#374151"
        strokeWidth="1.5"
        transform="rotate(-45 100 100) translate(10, -10)"
      />
      
      {/* Center Binding */}
      <circle
        cx="100"
        cy="100"
        r="12"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="3"
      />
      
      {/* Center Detail */}
      <circle
        cx="100"
        cy="100"
        r="6"
        fill="#EF4444"
      />
    </svg>
  );
}