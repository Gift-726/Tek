import Link from 'next/link'
import { services } from './data'
import styles from './landing.module.css'
import {
  EnterpriseIcon,
  CyberSecurityIcon,
  BuildingIcon,
  PhoneIcon,
  SupportIcon,
  CodeIcon,
} from './icons'

type IconName = 'EnterpriseIcon' | 'CyberSecurityIcon' | 'BuildingIcon' | 'PhoneIcon' | 'SupportIcon' | 'CodeIcon'

const iconMap: Record<IconName, typeof EnterpriseIcon> = {
  EnterpriseIcon,
  CyberSecurityIcon,
  BuildingIcon,
  PhoneIcon,
  SupportIcon,
  CodeIcon,
}

export function ServicesSection() {
  return (
    <section className={`${styles.section} ${styles.servicesSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleBlock}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowDot} />
              <p className={styles.eyebrow}>What We Do</p>
            </div>
            <h2 className={styles.title}>Solutions That Power Modern Enterprises</h2>
          </div>
          <p className={styles.sectionLead}>
            From infrastructure to intelligent systems and custom software,
            we deliver end-to-end technology solutions that drive
            efficiency, security, and growth.
          </p>
        </div>

        <div className={styles.servicesSlider}>
          <div className={styles.servicesTrack}>
            {[...services, ...services].map((service, index) => {
              const IconComponent = iconMap[service.icon as IconName]
              return (
                <article key={`${service.title}-${index}`} className={styles.serviceCard}>
                  <div className={styles.cardIconWrapper}>
                    <IconComponent className={styles.cardIcon} />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardCopy}>{service.description}</p>


                </article>
              )
            })}
          </div>
        </div>

        <div className={styles.sectionActionRow}>
          <Link href="/solutions" className={styles.exploreButton}>
            Explore All Services <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_outward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
