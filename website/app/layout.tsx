import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'TekSphere',
  description: 'Engineering Intelligent Systems. Building the Future',
}

import { Navbar } from '../components/landing/Navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&amp;icon_names=arrow_outward,business_center,call,chevron_right,design_services,dns,group,location_on,mail,rocket_launch,settings,shield,support,support_agent,verified_user,wifi_password" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
