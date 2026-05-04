import Link from 'next/link'
import styles from './about.module.css'

const values = [
  {
    title: 'Innovation First',
    copy: 'We continuously explore new technologies to deliver smarter and future-ready solutions.',
  },
  {
    title: 'Customer-Centric Approach',
    copy: 'We prioritize client needs and tailor solutions that align with their goals.',
  },
  {
    title: 'Excellence & Quality',
    copy: 'We focus on delivering high-quality solutions while enhancing performance and cost outcomes.',
  },
  {
    title: 'Agility & Adaptability',
    copy: 'We evolve quickly with changing technologies and business demands.',
  },
]

const expertise = [
  'Enterprise Infrastructure Solutions',
  'Cybersecurity & Information Protection',
  'Intelligent Building Systems',
  'Telephony & Communications',
  'IT Support & Managed Services',
  'Custom Software Development',
]

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support & Monitoring' },
  { value: '10+', label: 'Industries Served' },
]

export default function AboutPage() {
  return (
    <div className={styles.aboutPage} style={{ paddingTop: '80px' }}>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div>
            <p className={styles.eyebrow}>Who We Are</p>
            <h1 className={styles.heroTitle}>
              Driven by Innovation.
              <br />
              Powered by <span>Expertise.</span>
            </h1>
            <p className={styles.heroText}>
              At TekSphere, we are a team of young, vibrant, and highly experienced professionals delivering cutting-edge ICT solutions. We combine deep technical expertise with a strong understanding of modern business environments to help organizations scale efficiently, securely, and intelligently.
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden='true' />
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesGrid}>
            {values.map((item) => (
              <article key={item.title} className={styles.valueCard}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.missionVision}>
        <div className={`${styles.container} ${styles.missionVisionGrid}`}>
          <article className={styles.missionCard}>
            <h4>Our Mission</h4>
            <p>
              To empower organizations with innovative, reliable, and cost-effective ICT solutions that drive efficiency, growth, and long-term success.
            </p>
          </article>
          <article className={styles.missionCard}>
            <h4>Our Vision</h4>
            <p>
              To be a leading technology solutions provider recognized for innovation, excellence, and customer satisfaction across industries.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.expertiseHead}>
            <h2>End-to-End Technology Expertise</h2>
            <p>
              We provide a wide range of integrated solutions that help businesses operate securely, efficiently, and intelligently.
            </p>
          </div>
          <div className={styles.expertiseGrid}>
            {expertise.map((item) => (
              <article key={item} className={styles.expertiseCard}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.why}>
        <div className={`${styles.container} ${styles.whyGrid}`}>
          <h2 className={styles.whyTitle}>Built for Performance. Designed for Growth.</h2>
          <p className={styles.whyItem}>Deep Industry Expertise</p>
          <p className={styles.whyItem}>Proven Track Record</p>
          <p className={styles.whyItem}>Scalable & Secure Solutions</p>
          <p className={styles.whyItem}>Continuous Innovation</p>
          <p className={styles.whyItem}>Client Success Focused</p>
        </div>
        <div className={styles.container}>
          <div className={styles.stats}>
            {stats.map((item) => (
              <article key={item.label} className={styles.stat}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={`${styles.container} ${styles.teamGrid}`}>
          <article className={styles.teamCard}>
            <h2>A Team Built for Impact</h2>
            <p>
              Our team consists of experienced engineers, innovative thinkers, and technology specialists dedicated to delivering excellence. We combine technical depth with practical business insight to create solutions that truly work.
            </p>
            <button className={styles.teamButton}>Join Our Team</button>
          </article>
          <div className={styles.teamImage} aria-hidden='true' />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`${styles.container} ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Let&apos;s Build the Future Together</h2>
          <div className={styles.ctaActions}>
            <button className={styles.ctaButton}>Start Your Project</button>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>© 2026 TekSphere Global. All rights reserved.</div>
      </footer>
    </div>
  )
}
