import { ExpertiseSection } from './ExpertiseSection'
import { FooterSection } from './FooterSection'
import { ProcessSection } from './ProcessSection'
import { ServicesSection } from './ServicesSection'
import { TrustSection } from './TrustSection'
import styles from './landing.module.css'

export function LandingSections() {
  return (
    <div className={styles.landingShell}>
      <ServicesSection />
      <ExpertiseSection />
      <ProcessSection />
      <TrustSection />
      <FooterSection />
    </div>
  )
}
