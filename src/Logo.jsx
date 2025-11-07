import React from 'react'

const Logo = ({ size = 40 }) => {
  return (
    <div className="logo-container" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Simple headphone icon */}
        <circle cx="25" cy="50" r="15" fill="#2b3f57" />
        <circle cx="75" cy="50" r="15" fill="#ff8c00" />
        <path
          d="M 25 35 Q 50 20 75 35"
          stroke="#ff8c00"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Simple sound wave */}
        <g transform="translate(50, 50)">
          <rect x="-8" y="-12" width="2" height="8" fill="#ffffff" />
          <rect x="-4" y="-15" width="2" height="14" fill="#ffffff" />
          <rect x="0" y="-18" width="2" height="18" fill="#ffffff" />
          <rect x="4" y="-15" width="2" height="14" fill="#ffffff" />
          <rect x="8" y="-12" width="2" height="8" fill="#ffffff" />
        </g>
      </svg>
    </div>
  )
}

export default Logo

