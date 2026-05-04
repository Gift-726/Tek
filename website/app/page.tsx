'use client'

import createGlobe from 'cobe'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import { LandingSections } from '../components/landing/LandingSections'
import SolutionsPage from '../components/landing/solutions/SolutionsPage'
import { FooterSection } from '../components/landing/FooterSection'


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
            <Link href="/solutions" className="teksphere-cta-btn teksphere-cta-btn--primary">
              Explore Solutions <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
            </Link>
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
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="teksphere-scroll-hint">
          <span>SCROLL TO EXPLORE</span>
        </div>
      </main>

      <LandingSections />
      <FooterSection />

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
          text-decoration: none;
        }
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
          padding: 160px 3rem 4rem;
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
        .teksphere-headline {
          font-size: clamp(2.4rem, 4.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #0d1b3e;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .teksphere-accent {
          color: #3b5bdb;
        }
        .teksphere-subtext {
          font-size: 1.05rem;
          color: #5a6480;
          line-height: 1.7;
          max-width: 480px;
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
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.06);
          flex-wrap: nowrap;
        }
        .teksphere-stat {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .teksphere-stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0d1b3e;
          letter-spacing: -0.02em;
        }
        .teksphere-stat-label {
          font-size: 0.8rem;
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
          width: min(640px, 100%);
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
          font-family: inherit;
          font-size: clamp(2.5rem, 4vw, 4.5rem);
          font-weight: 900;
          color: #3b5bdb;
          z-index: 5;
          pointer-events: none;
          letter-spacing: 0.15em;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(255, 255, 255, 0.8);
        }

        .orbit-ring {
          position: absolute;
          inset: -10%;
          pointer-events: none;
          opacity: 0.6;
        }
        .orbit-svg {
          width: 100%;
          height: 100%;
          animation: rotateClockwise 60s linear infinite;
        }
        .orbit-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          fill: #3b5bdb;
          text-transform: uppercase;
        }

        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Scroll hint */
        .teksphere-scroll-hint {
          position: absolute;
          left: 0;
          bottom: 2.5rem;
          writing-mode: vertical-rl;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: #aab0c4;
          font-weight: 600;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .teksphere-scroll-hint::before {
          content: '';
          display: block;
          width: 1px;
          height: 48px;
          background: #d0d5e8;
        }

        /* ── Responsive ─────────────────── */
        @media (max-width: 900px) {
          .teksphere-hero {
            grid-template-columns: 1fr;
            padding: 100px 1.5rem 4rem;
          }
          .teksphere-hero-right {
            order: -1;
          }
          .teksphere-globe-wrap {
            width: min(440px, 90vw);
          }
          .teksphere-scroll-hint { display: none; }
        }
      `}</style>
    </div>
  )
}

