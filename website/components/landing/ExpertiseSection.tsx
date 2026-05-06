import { expertiseItems } from './data'
import styles from './landing.module.css'

export function ExpertiseSection() {
  return (
    <section className={`${styles.section} ${styles.expertiseSection}`}>
      <div className={`${styles.container} ${styles.expertiseLayout}`}>
        <div className={styles.expertiseCopy}>
          <p className={`${styles.eyebrow} ${styles.eyebrowOnDark}`}>Our Expertise</p>
          {/* <h2 className={`${styles.title} ${styles.titleOnDark}`}>
            Engineering the Future with Technology and Innovation
          </h2> */}
          <p className={`${styles.sectionLead} ${styles.sectionLeadOnDark}`}>
            We combine deep domain expertise with emerging technologies to
            build secure, intelligent, and future-ready systems.
          </p>

          <div className={styles.expertiseGrid}>
            {expertiseItems.map((item) => (
              <article key={item.title} className={styles.expertiseItem}>
                <span className={`material-symbols-outlined ${styles.expertiseRawIcon}`}>
                  {item.icon}
                </span>
                <h3 className={styles.expertiseTitle}>{item.title}</h3>
                <p className={`${styles.cardCopy} ${styles.cardCopyOnDark}`}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.expertiseVisual} aria-hidden="true" />
      </div>
    </section>
  )
}
