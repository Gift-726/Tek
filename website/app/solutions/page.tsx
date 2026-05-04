'use client'

import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import SolutionsPage from '../../components/landing/solutions/SolutionsPage'
import { FooterSection } from '../../components/landing/FooterSection'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export default function Solutions() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`teksphere-root ${inter.className}`}>
      {/* Navigation */}
      <nav className={`teksphere-nav ${scrolled ? 'teksphere-nav--scrolled' : ''}`}>
        <div className="teksphere-logo">
          <Link href="/" className="teksphere-logo-link">
            <span className="teksphere-logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 4h9v4H8v4H4V4z" fill="#1a2e6e"/>
                <path d="M13 4h11v4h-7v4h-4V4z" fill="#3b5bdb"/>
                <path d="M4 12h4v8H4z" fill="#1a2e6e"/>
              </svg>
            </span>
            <span className="teksphere-logo-text">TEKSPHERE</span>
          </Link>
        </div>
        <ul className="teksphere-nav-links">
          <li>
            <Link href="/solutions" className="active">Solutions & Services</Link>
          </li>
          <li>
            <Link href="/">Partners</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <button className="teksphere-cta-btn teksphere-cta-btn--nav">
          Let&apos;s Talk <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
        </button>
      </nav>

      <main className="solutions-view">
        <SolutionsPage />
        <FooterSection />
      </main>

      <style jsx>{`
        .teksphere-root {
          min-height: 100vh;
          background-color: #f8f9fc;
          display: flex;
          flex-direction: column;
          font-family: inherit;
          color: #0d1b3e;
          overflow-x: hidden;
        }

        .teksphere-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 0 3rem;
          height: 80px;
          background: transparent;
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
        }

        .teksphere-logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
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

        .teksphere-nav-links :global(a) {
          font-size: 0.875rem;
          color: #3a4666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s;
        }

        .teksphere-nav-links :global(a:hover) {
          color: #0d1b3e;
        }

        .teksphere-nav-links :global(a.active) {
          color: #3b5bdb;
          font-weight: 700;
        }

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
        }

        .solutions-view {
          padding-top: 80px;
        }

        @media (max-width: 900px) {
          .teksphere-nav {
            padding: 0 1.5rem;
          }
          .teksphere-nav-links {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
