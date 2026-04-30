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

// 🧩 Enterprise Infrastructure
export const EnterpriseIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3L3 7l9 4 9-4-9-4Z" />
    <path d="M3 12l9 4 9-4" />
    <path d="M3 17l9 4 9-4" />
  </svg>
)

// 🔐 Cybersecurity
export const CyberSecurityIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
  </svg>
)

// 🏢 Intelligent Building
export const BuildingIcon = (props) => (
  <svg {...baseProps} {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
  </svg>
)

// 📞 Telephony & Communications
export const PhoneIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 
    19.79 19.79 0 0 1-8.63-3.07 
    19.5 19.5 0 0 1-6-6 
    19.79 19.79 0 0 1-3.07-8.67A2 
    2 0 0 1 4.11 2h2a2 2 0 0 1 2 
    1.72c.12.9.32 1.78.59 2.63a2 
    2 0 0 1-.45 2L7.09 9.91a16 
    16 0 0 0 6 6l1.56-1.56a2 
    2 0 0 1 2-.45c.85.27 1.73.47 
    2.63.59A2 2 0 0 1 22 16.92Z"/>
  </svg>
)

// 🎧 IT Support
export const SupportIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M4 12a8 8 0 0 1 16 0" />
    <rect x="2" y="12" width="4" height="6" rx="2" />
    <rect x="18" y="12" width="4" height="6" rx="2" />
    <path d="M12 20h4" />
  </svg>
)

// 💻 Custom Software
export const CodeIcon = (props) => (
  <svg {...baseProps} {...props}>
    <path d="M8 16l-4-4 4-4M16 8l4 4-4 4M14 4l-4 16" />
  </svg>
)
