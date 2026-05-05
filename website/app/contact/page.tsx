'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './contact.module.css'
import Navbar from '../../components/Navbar'

const infoCards = [
  {
    icon: 'location_on',
    title: 'Mainland Office',
    text: '11, Kudirat Abiola Way, Oregun,\nIkeja, Lagos, Nigeria',
  },
  {
    icon: 'call',
    title: 'Call Us',
    text: '+234 818 724 5441,\n+234 805 406 1288',
  },
  {
    icon: 'mail',
    title: 'Email',
    text: 'enquiry@teksphereglobal.com\ninfo@teksphereglobal.com',
  },
  {
    icon: 'schedule',
    title: 'Working Hours',
    text: 'Mon - Fri: 8:00 AM - 6:00 PM\n24/7 Support Availability',
  },
]

const quickActions = [
  {
    icon: 'work',
    title: 'Start a Project',
    text: 'Let us put your idea into motion.',
  },
  {
    icon: 'handshake',
    title: 'Partnership',
    text: 'Join forces for growth and impact.',
  },
  {
    icon: 'support_agent',
    title: 'Support',
    text: 'Get fast, expert technical help.',
  },
]

const faqs = [
  'How quickly can you start my project?',
  'Do you offer ongoing support?',
  'Can you provide enterprise-scale solutions?',
  'What industries do you serve?',
]

const officeAddress = '11, Kudirat Abiola Way, Oregun, Ikeja, Lagos, Nigeria'
const mapsQuery = encodeURIComponent(officeAddress)
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
const embedMapUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

export default function ContactPage() {

  return (
    <div className={styles.contactPage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.heroBlock}>
            <h1 className={styles.heroTitle}>Get in Touch</h1>
            <p className={styles.heroSub}>Get in touch to discuss your next project.</p>
          </section>

          <section className={styles.topCards}>
            {infoCards.map((card) => (
              <article key={card.title} className={styles.infoCard}>
                <div className={styles.iconWrap}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <div>
                  <h3 className={styles.cardHeading}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </article>
            ))}
          </section>

          <section id="contact-form" className={styles.formPanel}>
            <article className={styles.formCard}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formHint}>Tell us what you need and we will respond quickly.</p>

              <form>
                <div className={styles.formGrid}>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="full-name">Full Name</label>
                    <input id="full-name" type="text" placeholder="Enter your full name" />
                  </div>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="company">Company Name (Optional)</label>
                    <input id="company" type="text" placeholder="Enter your company name" />
                  </div>
                  <div className={styles.fieldWrap}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className={`${styles.fieldWrap} ${styles.full}`}>
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option>Enterprise Infrastructure</option>
                      <option>Cybersecurity</option>
                      <option>Telephony & Communications</option>
                      <option>Software Development</option>
                      <option>Managed IT Support</option>
                    </select>
                  </div>
                  <div className={`${styles.fieldWrap} ${styles.full}`}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Tell us about your project or requirements." />
                  </div>
                </div>
                <div className={styles.formActions}>
                  <button type="submit" className={styles.sendBtn}>
                    Send Message <span className="material-symbols-outlined">arrow_outward</span>
                  </button>
                  <p className={styles.privacy}>We respect your privacy. Your information is safe with us.</p>
                </div>
              </form>
            </article>

            <aside className={styles.visualCard}>
              <Image
                src="/cta.png"
                alt="Technology collaboration illustration"
                fill
                className={styles.visualImage}
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </aside>
          </section>

          <section className={styles.visitCard}>
            <div>
              <p className={styles.sectionEyebrow}>OUR LOCATION</p>
              <h2 className={styles.visitTitle}>Visit Our Office</h2>
              <p className={styles.visitText}>
                TekSphere Global Services Limited, 11, Kudirat Abiola Way, Oregun, Ikeja, Lagos, Nigeria.
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionBtn}
              >
                Get Directions <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            </div>
            <div className={styles.mapMock}>
              <iframe
                title="TekSphere Office Location"
                src={embedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              />
            </div>
          </section>

          <section className={styles.quickActions}>
            <p className={styles.sectionEyebrow}>QUICK HELP SECTIONS</p>
            <div className={styles.sectionTitleRow}>
              <h2 className={styles.sectionTitle}>Quick Actions</h2>
              <Link href="/" className={styles.faqLink}>
                View all FAQs <span className="material-symbols-outlined">arrow_outward</span>
              </Link>
            </div>
            <div className={styles.quickGrid}>
              {quickActions.map((item) => (
                <Link key={item.title} href="/" className={styles.quickCard}>
                  <div className={styles.iconWrap}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.faq}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map((question) => (
                <div key={question} className={styles.faqItem}>
                  <p className={styles.faqQuestion}>
                    <button className={styles.faqButton} type="button">
                      <span>{question}</span>
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.ctaBand}>
            <div>
              <h3>Let&apos;s Build the Future Together</h3>
              <p>
                We&apos;re ready to help your business grow with innovative, reliable, and scalable solutions.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/" className={styles.primaryCta}>
                Start Your Project <span className="material-symbols-outlined">arrow_outward</span>
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                Contact Us <span className="material-symbols-outlined">arrow_outward</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
