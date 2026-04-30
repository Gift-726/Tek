'use client'

import createGlobe from 'cobe'
import { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import { LandingSections } from '../components/landing/LandingSections'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

const showcaseDefaultMarkers = [
  {
    id: 'default-sf',
    location: [37.7595, -122.4367] as [number, number],
    label: 'Enterprise Infrastructure',
  },
  {
    id: 'default-tokyo',
    location: [35.6762, 139.6503] as [number, number],
    label: 'Application Development',
  },
  {
    id: 'default-sydney',
    location: [-33.8688, 151.2093] as [number, number],
    label: 'Intelligent Building',
  },
  {
    id: 'default-capetown',
    location: [-33.9249, 18.4241] as [number, number],
    label: 'Telephony Solutions',
  },
  {
    id: 'default-dubai',
    location: [25.2048, 55.2708] as [number, number],
    label: 'IT Support',
  },
  {
    id: 'default-paris',
    location: [48.8566, 2.3522] as [number, number],
    label: 'Enterprise Security',
  },
]

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support & Monitoring' },
  { value: '10+', label: 'Industries Served' },
]

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    let currentPhi = 0
    let currentTheta = 0.2
    let targetPhi = 0
    let targetTheta = 0.2
    const width = canvasRef.current.offsetWidth

    const dpr = Math.min(
      window.devicePixelRatio || 1,
      window.innerWidth < 640 ? 1.8 : 2,
    )
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: width,
      height: width,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 1.5,
      mapSamples: 16000,
      mapBrightness: 10,
      baseColor: [1, 1, 1],
      markerColor: [0.3, 0.45, 0.85],
      glowColor: [0.94, 0.93, 0.91],
      markerElevation: 0.01,
      markers: showcaseDefaultMarkers.map((m) => ({
        location: m.location,
        size: 0.03,
        id: m.id,
      })),
      opacity: 0.7,
    })

    let animationId: number
    let isDragging = false
    let lastX = 0
    let lastY = 0

    function animate() {
      if (!isDragging) {
        targetPhi += 0.003
      }
      
      // Smooth interpolation
      currentPhi += (targetPhi - currentPhi) * 0.08
      currentTheta += (targetTheta - currentTheta) * 0.08
      
      globe.update({ phi: currentPhi, theta: currentTheta })
      animationId = requestAnimationFrame(animate)
    }

    function handleMouseDown(e: MouseEvent) {
      isDragging = true
      lastX = e.clientX
      lastY = e.clientY
    }

    function handleMouseMove(e: MouseEvent) {
      if (!isDragging) return
      const deltaX = e.clientX - lastX
      const deltaY = e.clientY - lastY
      targetPhi += deltaX * 0.01
      targetTheta += deltaY * 0.01
      lastX = e.clientX
      lastY = e.clientY
    }

    function handleMouseUp() { isDragging = false }

    canvasRef.current.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    animate()

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'))

    return () => {
      cancelAnimationFrame(animationId)
      globe.destroy()
      canvasRef.current?.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div className={`teksphere-root ${inter.className}`}>
      {/* NAV */}
      <nav className={`teksphere-nav ${scrolled ? 'teksphere-nav--scrolled' : ''}`}>
        <div className="teksphere-logo">
          <span className="teksphere-logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 4h9v4H8v4H4V4z" fill="#1a2e6e"/>
              <path d="M13 4h11v4h-7v4h-4V4z" fill="#3b5bdb"/>
              <path d="M4 12h4v8H4z" fill="#1a2e6e"/>
            </svg>
          </span>
          <span className="teksphere-logo-text">TEKSPHERE</span>
        </div>
        <ul className="teksphere-nav-links">
          {['Solutions & Services', 'Partners', 'About Us', 'Contact'].map(l => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul>
        <button className="teksphere-cta-btn teksphere-cta-btn--nav">
          Let&apos;s Talk <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
        </button>
      </nav>

      {/* HERO */}
      <main className="teksphere-hero">
        {/* Left */}
        <div className="teksphere-hero-left">
          <h1 className="teksphere-headline">
            Engineering<br />
            Intelligent Systems.<br />
            Building the <span className="teksphere-accent">Future.</span>
          </h1>
          <p className="teksphere-subtext">
            TekSphere delivers end-to-end technology solutions in
            infrastructure, cybersecurity, communications, and custom
            software — empowering businesses to scale securely
            and intelligently.
          </p>
          <div className="teksphere-hero-actions">
            <button className="teksphere-cta-btn teksphere-cta-btn--primary">
              Explore Solutions <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
            </button>
            <button className="teksphere-cta-btn teksphere-cta-btn--ghost">
              <span className="teksphere-play-icon">▶</span> Watch Overview
            </button>
          </div>
          <div className="teksphere-stats">
            {stats.map(s => (
              <div key={s.label} className="teksphere-stat">
                <span className="teksphere-stat-value">{s.value}</span>
                <span className="teksphere-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Globe */}
        <div className="teksphere-hero-right">
          <div className="teksphere-globe-wrap">
            <canvas
              ref={canvasRef}
              className="teksphere-globe-canvas showcases-canvas"
            />
            <div className="teksphere-globe-center-text">
              TEKSPHERE
            </div>
            {/* orbit ring preserved from original */}
            <div className="orbit-ring" aria-hidden="true">
              <svg className="orbit-svg" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="teksOrbitPath"
                    d="M 150,150 m -130,0 a 130,130 0 1,0 260,0 a 130,130 0 1,0 -260,0"
                  />
                </defs>
                <text className="orbit-text">
                  
                  <textPath href="#teksOrbitPath">
                    {'Powering Business With Intelligent Technology · '.repeat(6)}
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Marker labels (original logic) */}
            {showcaseDefaultMarkers.map((m) => (
              <div
                key={m.id}
                className="showcase-default-label"
                style={
                  {
                    positionAnchor: `--cobe-${m.id}`,
                    opacity: `var(--cobe-visible-${m.id}, 0)`,
                    filter: `blur(var(--cobe-visible-${m.id}, 10px))`,
                  } as React.CSSProperties
                }
              >
                {m.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="teksphere-scroll-hint">
          <span>SCROLL TO EXPLORE</span>
        </div>
      </main>

      <LandingSections />

      <style jsx>{`
        /* ── Root ─────────────────────────── */
        .teksphere-root {
          min-height: 100vh;
          background-color: #f8f9fc;
          background-image: url('/hero-bg.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
          background-attachment: fixed;
          display: flex;
          flex-direction: column;
          font-family: inherit;
          color: #0d1b3e;
          overflow-x: hidden;
        }

        /* ── Nav ─────────────────────────── */
        .teksphere-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 3rem;
          height: 80px;
          background: transparent;
          border-bottom: 1px solid transparent;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .teksphere-nav--scrolled {
          height: 72px;
          background: rgba(248, 249, 252, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .teksphere-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .teksphere-logo-text {
          font-size: 1.05rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #0d1b3e;
        }
        .teksphere-nav-links {
          display: flex;
          gap: 1.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .teksphere-nav-links a {
          font-size: 0.875rem;
          color: #3a4666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }
        .teksphere-nav-links a:hover { color: #0d1b3e; }

        /* ── Buttons ─────────────────────── */
        .teksphere-cta-btn {
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .teksphere-cta-btn--nav {
          background: #0d1b3e;
          color: #fff;
          font-size: 0.875rem;
          padding: 0.8rem 1.25rem;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .teksphere-cta-btn--nav:hover { background: #1a2e6e; }
        .teksphere-cta-btn--primary {
          background: #0d1b3e;
          color: #fff;
          font-size: 0.95rem;
          padding: 0.8rem 1.75rem;
          border-radius: 10px;
        }
        .teksphere-cta-btn--primary:hover { background: #1a2e6e; }
        .teksphere-cta-btn--ghost {
          background: transparent;
          color: #0d1b3e;
          font-size: 0.95rem;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          border: 1.5px solid #d0d5e8;
        }
        .teksphere-cta-btn--ghost:hover { border-color: #0d1b3e; }
        .teksphere-play-icon {
          width: 28px;
          height: 28px;
          background: #0d1b3e;
          color: #fff;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          padding-left: 2px;
        }

        /* ── Hero layout ─────────────────── */
        .teksphere-hero {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 100px 3rem 2rem;
          gap: 2rem;
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── Left content ─────────────────── */
        .teksphere-hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 560px;
        }
        .teksphere-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #3a4666;
          text-transform: uppercase;
        }
        .teksphere-eyebrow-dot {
          width: 8px;
          height: 8px;
          background: #3b5bdb;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .teksphere-headline {
          font-size: clamp(2rem, 3.2vw, 3.2rem);
          font-weight: 800;
          line-height: 1.12;
          color: #0d1b3e;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .teksphere-accent {
          color: #3b5bdb;
        }
        .teksphere-subtext {
          font-size: 0.95rem;
          color: #5a6480;
          line-height: 1.7;
          max-width: 460px;
          margin: 0;
        }
        .teksphere-hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* ── Stats ─────────────────────── */
        .teksphere-stats {
          display: flex;
          gap: 2.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #e4e8f0;
          flex-wrap: nowrap;
        }
        .teksphere-stat {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .teksphere-stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0d1b3e;
          letter-spacing: -0.02em;
        }
        .teksphere-stat-label {
          font-size: 0.75rem;
          color: #7a84a0;
          font-weight: 500;
        }

        /* ── Globe right side ─────────────── */
        .teksphere-hero-right {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .teksphere-globe-wrap {
          position: relative;
          width: min(580px, 100%);
          aspect-ratio: 1;
          user-select: none;
        }
        .teksphere-globe-canvas {
          width: 100% !important;
          height: 100% !important;
          border-radius: 50%;
          cursor: grab;
          touch-action: none;
          opacity: 0;
          transition: opacity 1.2s ease;
        }
        .teksphere-globe-canvas:active { cursor: grabbing; }

        .teksphere-globe-center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-pixel), monospace;
          font-size: clamp(3.5rem, 3.5vw, 5rem);
          font-weight: normal;
          color: #3b5bdb;
          z-index: 5;
          pointer-events: none;
          letter-spacing: 0.15em;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 1);
        }

        /* Scroll hint */
        .teksphere-scroll-hint {
          position: absolute;
          left: 0;
          bottom: 2.5rem;
          writing-mode: vertical-rl;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: #aab0c4;
          font-weight: 500;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .teksphere-scroll-hint::before {
          content: '';
          display: block;
          width: 1px;
          height: 36px;
          background: #d0d5e8;
        }

        /* ── Responsive ─────────────────── */
        @media (max-width: 900px) {
          .teksphere-hero {
            grid-template-columns: 1fr;
            padding: 0 1.5rem 2rem;
          }
          .teksphere-hero-right {
            order: -1;
          }
          .teksphere-globe-wrap {
            width: min(380px, 90vw);
          }
          .teksphere-nav {
            padding: 0 1.5rem;
          }
          .teksphere-nav-links { display: none; }
          .teksphere-scroll-hint { display: none; }
        }
      `}</style>
    </div>
  )
}
