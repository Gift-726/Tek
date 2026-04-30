import { useState, useEffect } from 'react'
import { clients, testimonials } from './data'
import styles from './landing.module.css'

export function TrustSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`${styles.section} ${styles.trustSection}`}>
      <div className={styles.container}>
        <div className={styles.trustLayout}>
          <div className={styles.trustIntro}>
            <p className={styles.eyebrow}>Clients Love Us</p>
            <h2 className={styles.title}>Trusted by Businesses Across Industries</h2>
          </div>

          <article className={styles.testimonialCard}>
            <div className={styles.testimonialSlider}>
              {testimonials.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.testimonialSlide} ${idx === activeIndex ? styles.slideActive : ''}`}
                >
                  <div className={styles.quoteIcon}>
                    <img src="/left-quote.png" alt="Quotation" className={styles.quoteImg} />
                  </div>
                  <p className={styles.testimonialCopy}>{t.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.carouselDots} aria-hidden="true">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`${styles.carouselDot} ${idx === activeIndex ? styles.carouselDotActive : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </article>
        </div>
      </div>

      <div className={styles.clientSlider}>
        <div className={styles.clientTrack}>
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={`${client.name}-${index}`} className={styles.clientCard}>
              <img src={client.logo} alt={client.name} className={styles.clientLogo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
