'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import { clients } from '../../components/landing/data'
import Navbar from '../../components/Navbar'

const values = [
  {
    title: 'Innovation First',
    copy: 'We continuously explore new technologies to deliver smarter and future-ready solutions.',
  },
  {
    title: 'Customer-Centric Approach',
    copy: 'We anticipate client needs and tailor solutions that align with their goals.',
  },
  {
    title: 'Excellence & Quality',
    copy: 'We focus on delivering high-quality solutions while optimizing performance and cost.',
  },
  {
    title: 'Agility & Adaptability',
    copy: 'We evolve quickly with changing technologies and business demands.',
  },
]

const expertise = [
  {
    title: 'Enterprise Infrastructure Solutions',
    desc: 'Robust IT infrastructure designed for performance, scalability, and reliability.',
  },
  {
    title: 'Cybersecurity & Information Protection',
    desc: 'Advanced security frameworks to protect your business, data, and digital assets.',
  },
  {
    title: 'Intelligent Building Systems',
    desc: 'Smart building technologies that enhance safety, comfort, and efficiency.',
  },
  {
    title: 'Telephony & Communications',
    desc: 'Integrated voice and communication systems that keep your business connected.',
  },
  {
    title: 'IT Support & Managed Services',
    desc: 'Proactive support and monitoring to ensure smooth operations 24/7.',
  },
  {
    title: 'Custom Software Development',
    desc: 'Tailored software and web applications that solve real business challenges.',
  },
]

const whyChooseUs = [
  {
    title: 'Deep Industry Expertise',
    desc: 'Years of experience across multiple industries.',
    icon: 'groups',
  },
  {
    title: 'Proven Track Record',
    desc: '250+ successful projects and satisfied clients.',
    icon: 'trending_up',
  },
  {
    title: 'Scalable & Secure Solutions',
    desc: 'Built to scale with enterprise-grade security.',
    icon: 'security',
  },
  {
    title: 'Continuous Innovation',
    desc: 'Investing in R&D to bring future-ready technology.',
    icon: 'lightbulb',
  },
  {
    title: 'Client Success Focused',
    desc: 'Your growth is at the heart of everything we do.',
    icon: 'star',
  },
]

const stats = [
  { value: '250+', label: 'Projects Delivered', icon: 'inventory_2' },
  { value: '98%', label: 'Client Satisfaction', icon: 'person' },
  { value: '24/7', label: 'Support & Monitoring', icon: 'support_agent' },
  { value: '10+', label: 'Industries Served', icon: 'business_center' },
]

export default function AboutPage() {

  return (
    <div className={styles.aboutPage}>
      {/* ── NAV ── */}
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>Who We Are</p>
            </div>
            <h1 className={styles.heroTitle}>
              Driven by Innovation.<br />
              Powered by <span>Expertise.</span>
            </h1>
            <p className={styles.heroText}>
              At TekSphere, we are a team of young, vibrant, and highly experienced professionals delivering cutting-edge ICT solutions. We combine deep technical expertise with a strong understanding of modern business environments to help organizations scale efficiently, securely, and intelligently.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES (WHAT DRIVES US) ── */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>What Drives Us</p>
            </div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((item, idx) => (
              <article key={item.title} className={styles.valueCard}>
                <div className={styles.cardIcon}>
                   <span className="material-symbols-outlined">{['lightbulb', 'person', 'verified', 'bolt'][idx]}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className={`material-symbols-outlined ${styles.cardArrow}`}>chevron_right</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className={styles.missionVision}>
        <div className={`${styles.container} ${styles.missionVisionGrid}`}>
          <article className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>target</span>
            </div>
            <div className={styles.missionContent}>
              <h4>Our Mission</h4>
              <p>To empower organizations with innovative, reliable, and cost-effective ICT solutions that drive efficiency, growth, and long-term success.</p>
            </div>
          </article>
          <article className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>visibility</span>
            </div>
            <div className={styles.missionContent}>
              <h4>Our Vision</h4>
              <p>To be a leading technology solutions provider recognized for innovation, excellence, and customer satisfaction across industries.</p>
            </div>
          </article>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
             <div className={styles.eyebrowWrapper}>
                <span className={styles.eyebrowDot} />
                <p className={styles.eyebrow}>What We Do</p>
              </div>
              <h2 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>End-to-End Technology Expertise</h2>
              <p className={styles.heroText}>We provide a wide range of integrated solutions that help businesses operate securely, efficiently, and intelligently.</p>
          </div>
          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article key={item.title} className={styles.expertiseCard}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className={`material-symbols-outlined ${styles.cardArrow}`}>chevron_right</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={styles.why}>
        <div className={styles.container}>
          <div className={styles.whyHeader}>
             <div className={styles.eyebrowWrapper}>
                <p className={styles.eyebrow} style={{ color: 'rgba(255,255,255,0.6)' }}>Why Choose Us</p>
              </div>
              <h2 className={styles.whyTitle}>Built for Performance.<br />Designed for Growth.</h2>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item) => (
              <article key={item.title} className={styles.whyItem}>
                <span className={`material-symbols-outlined ${styles.whyIcon}`}>{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.container}>
        <div className={styles.stats}>
          {stats.map((item) => (
            <article key={item.label} className={styles.stat}>
              <div className={styles.statIcon}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className={styles.statContent}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.team}>
        <div className={`${styles.container} ${styles.teamGrid}`}>
          <div className={styles.teamContent}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>Our Team</p>
            </div>
            <h2 className={styles.teamTitle}>A Team Built for Impact</h2>
            <p className={styles.teamText}>
              Our team consists of experienced engineers, innovative thinkers, and technology specialists dedicated to delivering excellence. We combine technical depth with practical business insight to create solutions that truly work.
            </p>
            <button className={styles.teamButton}>
              Join Our Team <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
            </button>
          </div>
          <div className={styles.teamVisual}>
             <div className={styles.teamImage}>
                <Image 
                  src="/team.png" 
                  alt="TekSphere Team" 
                  width={800} 
                  height={500}
                  className={styles.actualTeamImage}
                  priority
                />
             </div>
          </div>
        </div>

        <div className={`${styles.container} ${styles.trusted}`}>
          <p className={styles.trustedLabel}>Trusted by businesses across industries</p>
          <div className={styles.clientSlider}>
            <div className={styles.clientTrack}>
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client.name}-${index}`} className={styles.clientCard}>
                  <img src={client.logo} alt={client.name} className={styles.clientLogo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={`${styles.container} ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <h2>Let&apos;s Build the Future Together</h2>
            <p>We&apos;re committed to helping businesses innovate, scale, and succeed with technology.</p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/" className={styles.ctaPrimary}>
              Start Your Project <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
            <Link href="/" className={styles.ctaSecondary}>
              Contact Us <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerInfo}>
              <div className={styles.logoLink} style={{ cursor: 'default' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 4h9v4H8v4H4V4z" fill="#1a2e6e"/>
                  <path d="M13 4h11v4h-7v4h-4V4z" fill="#3b5bdb"/>
                  <path d="M4 12h4v8H4z" fill="#1a2e6e"/>
                </svg>
                <span className={styles.logoText}>TEKSPHERE</span>
              </div>
              <p>Delivering intelligent technology solutions for a smarter future.</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
            
            <div className={styles.footerCol}>
              <h5>Solutions</h5>
              <ul>
                <li><Link href="/">Enterprise Infrastructure</Link></li>
                <li><Link href="/">Cybersecurity</Link></li>
                <li><Link href="/">Intelligent Building Systems</Link></li>
                <li><Link href="/">Telephony & Communications</Link></li>
                <li><Link href="/">Software Development</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h5>Company</h5>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/">Careers</Link></li>
                <li><Link href="/">Case Studies</Link></li>
                <li><Link href="/">Insights</Link></li>
                <li><Link href="/">Partners</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h5>Resources</h5>
              <ul>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Whitepapers</Link></li>
                <li><Link href="/">FAQs</Link></li>
                <li><Link href="/">Support</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h5>Contact Us</h5>
              <div className={styles.contactItem}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>call</span>
                +234 818 724 5441, +234 805 406 1288
              </div>
              <div className={styles.contactItem} style={{ marginTop: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>mail</span>
                enquiry@teksphereglobal.com / info@teksphereglobal.com
              </div>
              <div className={styles.contactItem} style={{ marginTop: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>location_on</span>
                11, Kudirat Abiola Way, Oregun, Ikeja, Lagos, Nigeria
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>© 2026 TekSphere Global. All rights reserved.</p>
            <div className={styles.footerLegal}>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
