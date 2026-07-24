import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow / darker bg once user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      role="banner"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
    >
      <nav
        className={`container ${styles.inner}`}
        aria-label="Main navigation"
      >
        {/* Logo / Brand */}
        <a href="#hero" className={styles.logo} aria-label="Go to top">
          &lt;<span>Adi</span> /&gt;
        </a>

        {/* Desktop nav links */}
        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className={styles.resumeBtn}
              aria-label="Download resume PDF"
            >
              Resume ↓
            </a>
          </li>
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={handleNavClick}>
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          className={styles.mobileResumeBtn}
          onClick={handleNavClick}
          aria-label="Download resume PDF"
        >
          Download Resume ↓
        </a>
      </div>
    </header>
  );
}
