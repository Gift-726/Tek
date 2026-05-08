'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './about.module.css'
import { clients } from '../../components/landing/data'
import Navbar from '../../components/Navbar'
import { FooterSection } from '../../components/landing/FooterSection'


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
        {/* ── STATS (inside hero) ── */}
        <div className={`${styles.container} ${styles.heroStatsWrap}`}>
          <div className={styles.heroStats}>
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
              </article>
            ))}
          </div>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX DARK ZONE: Why Choose Us + Footer ── */}
      <div className={styles.parallaxDark}>

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


      {/* ── TEAM ── */}

      {/* <section className={styles.team}>
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
      </section> */}

        <FooterSection showCta={false} />

      </div>{/* end parallaxDark */}

    </div>

  )
}
