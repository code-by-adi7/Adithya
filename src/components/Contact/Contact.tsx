import { useState } from 'react';
import type { FormEvent } from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './Contact.module.css';

/* ------------------------------------------------------------------ */
/* Replace the placeholder values below with your real details         */
/* ------------------------------------------------------------------ */

const CONTACT_INFO = {
  email: 'adicazz7@gmail.com',
  github: 'https://github.com/code-by-adi7',
  linkedin: 'https://linkedin.com/in/yourusername',
  githubHandle: '@code-by-adi7',
  linkedinHandle: 'in/yourusername',
};

/* ------------------------------------------------------------------ */

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // mailto: approach — no backend needed
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-heading">

      {/* =====================================================
          ReactBits: background effect here
          Example: <NoisyBackground /> or <GlowEffect />
          ===================================================== */}
      <div className={styles.background} aria-hidden="true">
        {/* ReactBits: background effect here */}
      </div>

      <div className={`container ${styles.inner}`}>
        <h2 id="contact-heading" className="section-heading">
          Get In <span>Touch</span>
        </h2>
        <div className="section-divider" aria-hidden="true" />

        <div className={styles.grid}>
          {/* ---- Left: Contact info & social links ---- */}
          <div className={styles.infoCol}>
            <p>
              I'm currently open to internships, freelance projects, and
              collaboration opportunities. Feel free to reach out — I'll get back
              to you as soon as I can!
            </p>

            <nav aria-label="Social and contact links" className={styles.socialLinks}>
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className={styles.socialLink}
                aria-label={`Send email to ${CONTACT_INFO.email}`}
              >
                <FiMail className={styles.socialIcon} aria-hidden="true" />
                <span className={styles.socialInfo}>
                  <span className={styles.socialLabel}>Email</span>
                  <span className={styles.socialValue}>{CONTACT_INFO.email}</span>
                </span>
              </a>

              {/* GitHub */}
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit GitHub profile"
              >
                <FiGithub className={styles.socialIcon} aria-hidden="true" />
                <span className={styles.socialInfo}>
                  <span className={styles.socialLabel}>GitHub</span>
                  <span className={styles.socialValue}>{CONTACT_INFO.githubHandle}</span>
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Visit LinkedIn profile"
              >
                <FiLinkedin className={styles.socialIcon} aria-hidden="true" />
                <span className={styles.socialInfo}>
                  <span className={styles.socialLabel}>LinkedIn</span>
                  <span className={styles.socialValue}>{CONTACT_INFO.linkedinHandle}</span>
                </span>
              </a>
            </nav>
          </div>

          {/* ---- Right: Contact form ---- */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            aria-label="Contact form"
            noValidate
          >
            <div className={styles.formGroup}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              aria-label="Send message via email client"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
