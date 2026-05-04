'use client'

import SolutionsPage from '../../components/landing/solutions/SolutionsPage'
import { FooterSection } from '../../components/landing/FooterSection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export default function Page() {
  return (
    <div className={`teksphere-root ${inter.className}`}>
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
          flex: 1;
        }
      `}</style>
    </div>
  )
}
