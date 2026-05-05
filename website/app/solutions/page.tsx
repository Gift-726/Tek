'use client'

import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import SolutionsPage from '../../components/landing/solutions/SolutionsPage'
import { FooterSection } from '../../components/landing/FooterSection'
import Navbar from '../../components/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export default function Solutions() {

  return (
    <div className={`teksphere-root ${inter.className}`}>
      {/* Navigation */}
      <Navbar />

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


        .solutions-view {
          padding-top: 0;
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
