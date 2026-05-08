import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navInner}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>
              <Image 
                src="/Teksphere_Logo.png" 
                alt="TekSphere Logo" 
                width={180} 
                height={80} 
                className={styles.logoImg}
                priority
              />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={styles.mobileToggle} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuMobileOpen : ''}`}>
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

          {/* Mobile CTA inside menu */}
          <li className={styles.mobileCtaLi}>
            <Link href="/contact#contact-form" className={styles.navCta}>
              Contact Us <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact#contact-form" className={`${styles.navCta} ${styles.desktopCta}`}>
          Contact Us <span className="material-symbols-outlined" style={{ fontSize: '1.1em' }}>arrow_outward</span>
        </Link>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}
    </nav>
  )
}
