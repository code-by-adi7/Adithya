import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>

          {/* ---- Profile Image Column ---- */}
          <div className={styles.imageCol}>
            {/* =====================================================
                ReactBits: replace this placeholder with your actual
                profile photo or a ReactBits avatar / image component.
                Example: <img src="/profile.jpg" alt="Your Name smiling" />
                ===================================================== */}
            <div
              className={styles.imagePlaceholder}
              role="img"
              aria-label="Profile photo placeholder"
            >
              <span className={styles.initials} aria-hidden="true">YN</span>
              {/* ReactBits: profile image / avatar component here */}
            </div>
          </div>

          {/* ---- Bio Column ---- */}
          <div className={styles.bioCol}>
            <h2 id="about-heading" className="section-heading">
              About <span>Me</span>
            </h2>
            <div className="section-divider" aria-hidden="true" />

            <p className={styles.bio}>
              {/* Replace this paragraph with your actual bio */}
              Hey! I'm <strong>Your Name</strong>, a 2nd-year Bachelor of
              Computer Applications (BCA) student with a love for writing clean
              code and building things that actually work. I enjoy the full
              spectrum of software development — from designing intuitive UIs to
              diving into backend logic and database structures.
            </p>
            <p className={styles.bio}>
              When I'm not coding, you'll find me exploring new tech, working on
              side projects, or levelling up on DSA. I'm actively looking for
              internship opportunities where I can contribute, learn, and grow.
            </p>

            {/* Quick-stat highlights */}
            <div className={styles.highlights} role="list">
              <div className={styles.highlight} role="listitem">
                <span className={styles.highlightNumber}>2nd</span>
                <span className={styles.highlightLabel}>Year BCA</span>
              </div>
              <div className={styles.highlight} role="listitem">
                <span className={styles.highlightNumber}>10+</span>
                <span className={styles.highlightLabel}>Skills</span>
              </div>
              <div className={styles.highlight} role="listitem">
                <span className={styles.highlightNumber}>2+</span>
                <span className={styles.highlightLabel}>Projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
