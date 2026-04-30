// feature-icons.jsx

import React from "react"

const baseProps = {
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

// ⚙️ Innovation Driven
export const InnovationIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <g transform="scale(0.85) translate(2.1, 2.1)">
      <path d="M12 8.5l3.5 3.5-3.5 3.5-3.5-3.5z" fill="currentColor" />
      <path d="M19.4 15a7.97 7.97 0 0 0 .1-2l2-1.5-2-3.5-2.4 1a8.2 8.2 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6c-.6.2-1.2.6-1.7 1l-2.4-1-2 3.5 2 1.5c.1.7.1 1.4 0 2l-2 1.5 2 3.5 2.4-1c.5.4 1.1.8 1.7 1l.3 2.6h4l.3-2.6c.6-.2 1.2-.6 1.7-1l2.4 1 2-3.5-2-1.5Z"/>
    </g>
    <path d="M4 1L4.5 3.5L7 4L4.5 4.5L4 7L3.5 4.5L1 4L3.5 3.5Z" fill="currentColor" stroke="none" />
  </svg>
)

// 🔐 Secure by Design
export const SecureIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M10 3l-7 3v5c0 4.5 3 8 7 9.5 3-1 5.5-3.5 6.5-6.5" />
    <path d="M10 3l7 3v4" />
    <rect x="13" y="14" width="8" height="6" rx="1" />
    <path d="M15 14v-2.5a2 2 0 1 1 4 0V14" />
  </svg>
)

// 📶 Scalable Solutions
export const ScalableIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <path d="M4 8a11 11 0 0 1 16 0" />
    <path d="M7.5 11.5a6 6 0 0 1 9 0" />
    <path d="M11 15h2" />
    <rect x="5" y="17" width="4" height="6" rx="1" />
    <path d="M5 20h4" />
    <rect x="14" y="19" width="4" height="4" rx="1" />
    <path d="M15 19v-1.5a1 1 0 0 1 2 0V19" />
  </svg>
)

// 👥 Expert Team
export const TeamIcon = (props) => (
  <svg viewBox="0 0 24 24" {...baseProps} {...props}>
    <circle cx="9" cy="8" r="4" />
    <path d="M15 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="18" cy="7" r="1.5" />
    <circle cx="15" cy="12" r="1.5" />
    <circle cx="21" cy="12" r="1.5" />
    <path d="M17 8.5l-1 2" />
    <path d="M19 8.5l1 2" />
    <path d="M16.5 12h3" />
  </svg>
)