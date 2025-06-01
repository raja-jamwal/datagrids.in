import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className={`${sizeClasses[size]}`}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Row 1 */}
        <rect x="5"  y="5"  width="30" height="30" fill="#2492e7" />
        <rect x="40" y="5"  width="30" height="30" fill="#1d81d6" />
        <rect x="75" y="5"  width="30" height="30" fill="#0076d6" />

        {/* Row 2 */}
        <rect x="5"  y="40" width="30" height="30" fill="#479fe7" />
        <rect x="40" y="40" width="30" height="30" fill="#2891ed" />
        <rect x="75" y="40" width="30" height="30" fill="#1783dd" />

        {/* Row 3 (bottom‐right square is intentionally omitted) */}
        <rect x="5"  y="75" width="30" height="30" fill="#4bacfb" />
        <rect x="40" y="75" width="30" height="30" fill="#409deb" />
        {/* (skip x="75", y="75") */}
      </svg>
      
      <div className="flex flex-col">
        <span className="text-6xl">
          DataGrids
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
        Empowering Intelligence, Connecting Possibilities
        </span>
      </div>
    </div>
  );
};

export default Logo; 