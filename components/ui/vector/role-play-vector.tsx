import React from "react";
import { useId } from "react";

const RolePlayVector = ({ 
  className = "",
  stop_color = "#FDBF6D", 
  offset_stop_color = "#FC7525" 
}) => {
  // Generate a unique ID for each instance
  const gradientId = useId();

  return (
    <svg 
      className={className}
      viewBox="0 0 658 370" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M564.985 472.213H93.0145C41.644 472.213 0 430.569 0 379.198V170.114C0 161.236 3.15356 152.647 8.89822 145.878C14.1506 139.69 21.2713 135.375 29.1881 133.584L615.033 1.04159C628.102 -1.91516 641.716 2.80439 650.151 13.2157C655.229 19.484 658 27.3066 658 35.3739V379.198C658 430.569 616.356 472.213 564.985 472.213Z" 
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient 
          id={gradientId}
          x1="273.916" 
          y1="70.8556" 
          x2="264.947" 
          y2="472.147" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stop_color} />
          <stop offset="1" stopColor={offset_stop_color} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RolePlayVector;