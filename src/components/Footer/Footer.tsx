import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {year} <strong>Your Name</strong>. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Built with <span>React</span> &amp; <span>TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
