import { processStats, processSteps } from './data'
import styles from './landing.module.css'

export function ProcessSection() {
  return (
    <section className={`${styles.section} ${styles.processSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleBlock}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>Our Process</p>
            </div>
            <h2 className={styles.title}>A Proven Approach to Delivering Excellence</h2>
          </div>
          <p className={styles.sectionLead}>
            We follow a structured process that ensures every project is
            delivered on time, within budget, and beyond expectations.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineProgressLine} />
          {processSteps.map((step, index) => (
            <article key={step.number} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <span className={styles.timelineBadge}>
                  <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--landing-primary)' }}>
                    {step.icon}
                  </span>
                </span>
                {index < processSteps.length - 1 ? <span className={styles.timelineLine} /> : null}
              </div>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardCopy}>{step.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {processStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statIconWrapper}>
                <span className="material-symbols-outlined" style={{ fontSize: '26px', color: 'var(--landing-secondary)' }}>
                  {stat.icon}
                </span>
              </span>
              <div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
