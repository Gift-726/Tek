'use client'

import { useState } from 'react'

const services = [
  {
    id: 'enterprise',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="10" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="18" y="4" width="10" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 12h4M7 16h4M7 20h4M21 8h4M21 12h4M21 16h4M21 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Enterprise Infrastructure',
    description: 'Modernize and optimize your IT infrastructure for enhanced performance and scalability.',
  },
  {
    id: 'cyber',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 8v8c0 7 4.5 11 10 13 5.5-2 10-6 10-13V8L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Cybersecurity Solutions',
    description: 'Protect your business with cutting-edge security measures to secure your data and networks.',
  },
  {
    id: 'building',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="5" y="5" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 13h22M13 13v14M9 9h2M17 9h6M9 17h2M9 21h2M17 17h6M17 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Intelligent Building Systems',
    description: 'Transform facilities into smart environments for greater efficiency and security.',
  },
  {
    id: 'telephony',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 6h5l2 5-3 2a14 14 0 006 6l2-3 5 2v5a2 2 0 01-2 2C10 25 7 10 6 8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M21 6a6 6 0 016 6M21 10a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Telephony & Communications',
    description: 'Enhance communication systems with modern telephony and unified communication tools.',
  },
  {
    id: 'support',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16a8 8 0 1116 0" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="5" y="16" width="5" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="22" y="16" width="5" height="7" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 26h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'IT Support & Managed Services',
    description: 'Get professional IT support and managed services for proactive maintenance and monitoring.',
  },
  {
    id: 'software',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M10 20l-4-4 4-4M22 12l4 4-4 4M18 8l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Develop tailored software solutions that meet your unique business requirements.',
  },
]

const itServices = [
  {
    id: 'network',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H3a9 9 0 009 9v-2a7 7 0 01-7-7zM19 12h2a9 9 0 01-9 9v-2a7 7 0 007-7z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Network Optimization',
    description: 'Maximize network performance and reliability with advanced monitoring and optimization strategies for your enterprise infrastructure.',
  },
  {
    id: 'backup',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Data Backup & Recovery',
    description: 'Protect your critical data with automated backup solutions and rapid disaster recovery to ensure business continuity.',
  },
  {
    id: 'digital',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Digital Transformation Consulting',
    description: 'Navigate your digital transformation journey with expert guidance, strategy, and implementation support tailored to your goals.',
  },
  {
    id: 'project',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 13h4M13 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Project Management',
    description: 'Streamline project delivery with structured management frameworks ensuring on-time, on-budget results across your IT initiatives.',
  },
]

export default function SolutionsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [hoveredItCard, setHoveredItCard] = useState<string | null>(null)

  return (
    <div className="solutions-root">
      {/* ── HERO SECTION ── */}
      <section className="solutions-hero">
        <div className="solutions-hero-content">
          <div className="solutions-hero-text">
            <h1 className="solutions-hero-title">Solutions &amp; Services</h1>
            <p className="solutions-hero-subtitle">
              Delivering comprehensive technology solutions that<br />
              power modern enterprises securely and efficiently.
            </p>
            <a href="#services" className="solutions-learn-btn">
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 6 }}>
                <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="solutions-hero-visual" aria-hidden="true">
            {/* Decorative animated graphic */}
            {/* <div className="solutions-hero-globe-wrap">
              <div className="solutions-hero-orbit" />
              <div className="solutions-hero-orbit solutions-hero-orbit--2" />
              <div className="solutions-hero-core">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <rect x="4" y="8" width="20" height="32" rx="2" fill="rgba(59,91,219,0.25)" stroke="#3b5bdb" strokeWidth="1.5"/>
                  <rect x="28" y="4" width="24" height="36" rx="2" fill="rgba(59,91,219,0.35)" stroke="#3b5bdb" strokeWidth="1.5"/>
                  <path d="M8 16h12M8 22h12M8 28h12M32 12h16M32 18h16M32 24h16M32 30h16" stroke="#3b5bdb" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
              <div className="solutions-floating-icon solutions-floating-icon--shield">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3L5 7v7c0 6 3.9 9.6 9 11 5.1-1.4 9-5 9-11V7L14 3z" fill="rgba(59,91,219,0.2)" stroke="#3b5bdb" strokeWidth="1.5"/>
                  <path d="M9 14l3 3 7-7" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="solutions-floating-icon solutions-floating-icon--cloud">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M7 20a5 5 0 01-1-10 7 7 0 0114 2 4 4 0 010 8H7z" fill="rgba(59,91,219,0.2)" stroke="#3b5bdb" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="solutions-floating-icon solutions-floating-icon--wifi">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 12a14 14 0 0120 0M8 16a9 9 0 0112 0M12 20a4 4 0 014 0" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="14" cy="23" r="1.5" fill="#3b5bdb"/>
                </svg>
              </div>
              <div className="solutions-floating-icon solutions-floating-icon--doc">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="4" y="2" width="14" height="18" rx="2" fill="rgba(59,91,219,0.2)" stroke="#3b5bdb" strokeWidth="1.5"/>
                  <path d="M7 7h8M7 11h8M7 15h5" stroke="#3b5bdb" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ── MAIN SERVICES GRID ── */}
      <section id="services" className="solutions-services-section">
        <div className="solutions-container">
          <div className="solutions-services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className={`solutions-service-card ${hoveredCard === service.id ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="solutions-service-icon">
                  {service.icon}
                </div>
                <h3 className="solutions-service-title">{service.title}</h3>
                <p className="solutions-service-desc">{service.description}</p>
                <button className="solutions-service-btn">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: 6 }}>
                    <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IT SERVICES & CONSULTING ── */}
      <section className="solutions-it-section">
        <div className="solutions-container">
          <h2 className="solutions-it-heading">IT Services and Consulting</h2>
          <div className="solutions-it-grid">
            {itServices.map((svc) => (
              <div
                key={svc.id}
                className={`solutions-it-card ${hoveredItCard === svc.id ? 'solutions-it-card--featured' : ''}`}
                onMouseEnter={() => setHoveredItCard(svc.id)}
                onMouseLeave={() => setHoveredItCard(null)}
              >
                <div className="solutions-it-icon-wrap">
                  {svc.icon}
                </div>
                <h4 className="solutions-it-title">{svc.title}</h4>
                <p className="solutions-it-desc">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BANNER ── */}
      

      <style jsx>{`
        /* ── Root ── */
        .solutions-root {
          font-family: 'Inter', system-ui, sans-serif;
          color: #0d1b3e;
          background: #f8f9fc;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .solutions-hero {
          background: url('/solution-bg.png') center center / cover no-repeat;
          min-height: 440px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 200px 0 80px;
        }

        .solutions-hero-content {
          position: relative;
          z-index: 1;
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
        }

        .solutions-hero-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0d1b3e;
          margin: 0 0 16px;
        }

        .solutions-hero-subtitle {
          font-size: 1rem;
          color: #5a6480;
          line-height: 1.7;
          margin: 0 0 28px;
        }

        .solutions-learn-btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: #0d1b3e;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }

        .solutions-learn-btn:hover {
          background: #1a2e6e;
          transform: translateY(-1px);
          opacity: 1;
        }

        /* ── Hero globe / visual ── */
        .solutions-hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .solutions-hero-globe-wrap {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .solutions-hero-orbit {
          position: absolute;
          inset: 20px;
          border: 1.5px solid rgba(59,91,219,0.2);
          border-radius: 50%;
          animation: orbitSpin 18s linear infinite;
        }

        .solutions-hero-orbit--2 {
          inset: 50px;
          border-color: rgba(59,91,219,0.15);
          animation-direction: reverse;
          animation-duration: 12s;
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .solutions-hero-core {
          position: relative;
          z-index: 2;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(59,91,219,0.15);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(59,91,219,0.12), 0 4px 16px rgba(0,0,0,0.06);
        }

        .solutions-floating-icon {
          position: absolute;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(59,91,219,0.2);
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 4px 16px rgba(59,91,219,0.12);
          animation: floatBob 3s ease-in-out infinite;
        }

        .solutions-floating-icon--shield { top: 30px; left: 20px; animation-delay: 0s; }
        .solutions-floating-icon--cloud  { top: 20px; right: 30px; animation-delay: 0.8s; }
        .solutions-floating-icon--wifi   { bottom: 60px; left: 10px; animation-delay: 1.4s; }
        .solutions-floating-icon--doc    { bottom: 40px; right: 20px; animation-delay: 0.4s; }

        @keyframes floatBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ── Container ── */
        .solutions-container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* ── Main Services Section ── */
        .solutions-services-section {
          padding: 80px 0;
          background: #ffffff;
        }

        .solutions-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .solutions-service-card {
          background: #ffffff;
          border: 1px solid #e8ecf4;
          border-radius: 14px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }

        .solutions-service-card.is-hovered {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(59,91,219,0.12);
          border-color: rgba(59,91,219,0.2);
        }

        .solutions-service-icon {
          width: 56px;
          height: 56px;
          background: rgba(59,91,219,0.07);
          border: 1px solid rgba(59,91,219,0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d1b3e;
          margin-bottom: 4px;
          transition: background 0.2s;
        }

        .solutions-service-card.is-hovered .solutions-service-icon {
          background: rgba(59,91,219,0.12);
        }

        .solutions-service-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0d1b3e;
          margin: 0;
          line-height: 1.3;
        }

        .solutions-service-desc {
          font-size: 0.875rem;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }

        .solutions-service-btn {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          margin-top: 8px;
          padding: 9px 20px;
          background: #0d1b3e;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }

        .solutions-service-btn:hover {
          background: #1a2e6e;
          transform: translateY(-1px);
        }

        /* ── IT Services & Consulting ── */
        .solutions-it-section {
          padding: 80px 0;
          background: #f4f6fb;
        }

        .solutions-it-heading {
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #0d1b3e;
          margin: 0 0 32px;
          letter-spacing: -0.02em;
        }

        .solutions-it-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .solutions-it-card {
          background: #ffffff;
          border: 1px solid #e8ecf4;
          border-radius: 12px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .solutions-it-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(59,91,219,0.1);
        }

        .solutions-it-card--featured {
          border-color: rgba(59,91,219,0.3);
          background: linear-gradient(135deg, #ffffff 0%, rgba(59,91,219,0.04) 100%);
        }

        .solutions-it-card--featured .solutions-it-title {
          color: #3b5bdb;
        }

        .solutions-it-icon-wrap {
          width: 44px;
          height: 44px;
          background: rgba(59,91,219,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0d1b3e;
        }

        .solutions-it-card--featured .solutions-it-icon-wrap {
          background: rgba(59,91,219,0.12);
          color: #3b5bdb;
        }

        .solutions-it-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0d1b3e;
          margin: 0;
          line-height: 1.3;
        }

        .solutions-it-desc {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* ── CTA Section ── */
        .solutions-cta-section {
          background: linear-gradient(135deg, #0d1b3e 0%, #1a2e6e 50%, #0d1b3e 100%);
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }

        .solutions-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/hero-bg.png') center center / cover no-repeat;
          opacity: 0.08;
          pointer-events: none;
        }

        .solutions-cta-inner {
          position: relative;
          z-index: 1;
          width: min(1000px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .solutions-cta-text { flex: 1; min-width: 260px; }

        .solutions-cta-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .solutions-cta-subtitle {
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
          margin: 0;
          line-height: 1.7;
        }

        .solutions-cta-visual {
          position: relative;
          width: 280px;
          height: 160px;
          flex-shrink: 0;
        }

        .cta-icon {
          position: absolute;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          padding: 8px;
          backdrop-filter: blur(4px);
          animation: floatBob 3s ease-in-out infinite;
        }

        .cta-icon--1 { top: 10px; left: 0; animation-delay: 0s; }
        .cta-icon--2 { top: 0; left: 80px; animation-delay: 0.5s; }
        .cta-icon--3 { top: 30px; left: 160px; animation-delay: 1s; }
        .cta-icon--4 { bottom: 10px; left: 40px; animation-delay: 0.3s; }
        .cta-icon--5 { bottom: 20px; right: 0; animation-delay: 0.8s; }

        .solutions-cta-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          padding: 14px 32px;
          background: rgba(255,255,255,0.95);
          color: #0d1b3e;
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .solutions-cta-btn:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .solutions-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .solutions-it-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .solutions-hero-content {
            grid-template-columns: 1fr;
          }
          .solutions-hero-visual { display: none; }
          .solutions-services-grid {
            grid-template-columns: 1fr;
          }
          .solutions-it-grid {
            grid-template-columns: 1fr 1fr;
          }
          .solutions-cta-visual { display: none; }
        }

        @media (max-width: 480px) {
          .solutions-it-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
