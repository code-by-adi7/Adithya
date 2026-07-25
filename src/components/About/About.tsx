import { useRef } from 'react';
import styles from './About.module.css';
import VariableProximity from '../VariableProximity/VariableProximity';

const BIO_1 =
  "Hey! I'm Adithya, a 2nd-year Bachelor of Computer Applications (BCA) student with a love for writing clean code and building things that actually work. I enjoy the full spectrum of software development — from designing intuitive UIs to diving into backend logic and database structures.";

const BIO_2 =
  "When I'm not coding, you'll find me exploring new tech, working on side projects, or levelling up on DSA. I'm actively looking for internship opportunities where I can contribute, learn, and grow.";

export default function About() {
  const bioColRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>

          {/* ---- Profile Image Column ---- */}
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder}>
              <img
                src="/aa.jpg"
                alt="Adithya"
                className={styles.profilePhoto}
              />
            </div>
          </div>

          {/* ---- Bio Column ---- */}
          <div className={styles.bioCol} ref={bioColRef} style={{ position: 'relative' }}>
            <h2 id="about-heading" className="section-heading">
              About <span>Me</span>
            </h2>
            <div className="section-divider" aria-hidden="true" />

            <p className={styles.bio}>
              <VariableProximity
                label={BIO_1}
                containerRef={bioColRef as React.RefObject<HTMLElement>}
                fromFontVariationSettings="'wght' 300, 'opsz' 9"
                toFontVariationSettings="'wght' 800, 'opsz' 40"
                radius={120}
                falloff="gaussian"
              />
            </p>
            <p className={styles.bio}>
              <VariableProximity
                label={BIO_2}
                containerRef={bioColRef as React.RefObject<HTMLElement>}
                fromFontVariationSettings="'wght' 300, 'opsz' 9"
                toFontVariationSettings="'wght' 800, 'opsz' 40"
                radius={120}
                falloff="gaussian"
              />
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
