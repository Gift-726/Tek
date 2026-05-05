import Link from 'next/link'
import styles from './landing.module.css'

const solutionLinks = [
  'Enterprise Infrastructure',
  'Cybersecurity',
  'Intelligent Building Systems',
  'Telephony & Communications',
  'Software Development',
  'IT Support & Managed Services',
]

const companyLinks = ['About Us', 'Careers', 'Case Studies', 'Insights', 'Partners']
const resourceLinks = ['Blog', 'Whitepapers', 'FAQs', 'Support']

export function FooterSection({ showCta = true }: { showCta?: boolean }) {
  return (
    <>
      {showCta && (
        <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={`${styles.container} ${styles.ctaLayout}`}>
          <div>
            <h2 className={`${styles.title} ${styles.titleOnDark}`}>Ready to Build the Future with Us?</h2>
            <p className={`${styles.sectionLead} ${styles.sectionLeadOnDark}`}>
              Let&apos;s discuss how TekSphere can help your business innovate,
              secure, and grow.
            </p>
          </div>
          <Link href="/solutions" className={styles.ctaButtonPrimary}>
            Start Your Project <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_outward</span>
          </Link>
        </div>
      </section>
      )}

      <footer className={`${styles.section} ${styles.footerSection}`}>
        <div className={`${styles.container} ${styles.footerLayout}`}>
          <div className={styles.footerBrand}>
            <div className={styles.brandRow}>
              <span className={styles.footerLogo}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 4h9v4H8v4H4V4z" fill="#1a2e6e"/>
                  <path d="M13 4h11v4h-7v4h-4V4z" fill="#3b5bdb"/>
                  <path d="M4 12h4v8H4z" fill="#1a2e6e"/>
                </svg>
              </span>
              <span className={styles.footerBrandName}>TEKSPHERE</span>
            </div>
            <p className={styles.footerCopy}>
              We deliver intelligent technology solutions
              that empower businesses to operate
              smarter, secure data, and achieve
              sustainable growth.
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialChip} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className={styles.socialChip} aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className={styles.socialChip} aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className={styles.socialChip} aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.footerColumns}>
            <FooterColumn title="Solutions" items={solutionLinks} />
            <FooterColumn title="Company" items={companyLinks} />
            <FooterColumn title="Resources" items={resourceLinks} />
            <div className={styles.footerColumn}>
              <h3 className={styles.footerHeading}>Contact Us</h3>
              <ul className={styles.footerList}>
                <li className={styles.contactItem}>
                  <span className={`material-symbols-outlined ${styles.contactIcon}`}>call</span>
                  <span>+234 818 724 5441<br />+234 805 406 1288</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={`material-symbols-outlined ${styles.contactIcon}`}>mail</span>
                  <span>enquiry@teksphereglobal.com<br />info@teksphereglobal.com</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={`material-symbols-outlined ${styles.contactIcon}`}>location_on</span>
                  <span>11, Kudirat Abiola Way, Oregun,<br/>Ikeja, Lagos, Nigeria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.container} ${styles.footerBottom}`}>
          <span>© 2026 TekSphere Global. All rights reserved.</span>
          <div className={styles.footerMeta}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.footerColumn}>
      <h3 className={styles.footerHeading}>{title}</h3>
      <ul className={styles.footerList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
