import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 4h9v4H8v4H4V4z" fill="#1a2e6e"/>
                <path d="M13 4h11v4h-7v4h-4V4z" fill="#3b5bdb"/>
                <path d="M4 12h4v8H4z" fill="#1a2e6e"/>
              </svg>
            </span>
            <span className={styles.logoText}>TEKSPHERE</span>
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link 
              href="/solutions" 
              className={pathname === '/solutions' ? styles.activeLink : ''}
            >
              Solutions & Services
            </Link>
          </li>
          <li>
            <Link 
              href="/" 
              className={pathname === '/partners' ? styles.activeLink : ''}
            >
              Partners
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={pathname === '/about' ? styles.activeLink : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={pathname === '/contact' ? styles.activeLink : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/contact#contact-form" className={styles.navCta}>
          Let&apos;s Talk <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
        </Link>
      </div>
    </nav>
  )
}
