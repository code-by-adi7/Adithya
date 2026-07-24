import styles from './Education.module.css';

/* ------------------------------------------------------------------ */
/* Education data — fill in your real details here                     */
/* ------------------------------------------------------------------ */

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  achievements: string[];
}

const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Your College Name Here',
    duration: '2023 – 2026',
    achievements: [
      'Placeholder: Dean\'s List / CGPA achievement here',
      'Placeholder: Relevant coursework (DSA, DBMS, Web Tech, OOP)',
      'Placeholder: Club or event participation here',
      'Placeholder: Any certification or award here',
    ],
  },
];

/* ------------------------------------------------------------------ */

export default function Education() {
  return (
    <section id="education" className={`section ${styles.education}`} aria-labelledby="education-heading">
      <div className="container">
        <h2 id="education-heading" className="section-heading">
          <span>Education</span>
        </h2>
        <div className="section-divider" aria-hidden="true" />

        {/* Timeline wrapper */}
        <div className={styles.timeline}>
          {EDUCATION.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.card}>
                {/* Card header */}
                <div className={styles.cardHeader}>
                  <div>
                    <p className={styles.degree}>{item.degree}</p>
                    <p className={styles.institution}>{item.institution}</p>
                  </div>
                  <span className={styles.year} aria-label={`Duration: ${item.duration}`}>
                    {item.duration}
                  </span>
                </div>

                {/* Achievements / highlights list */}
                <ul
                  className={styles.achievements}
                  aria-label="Achievements and highlights"
                  role="list"
                >
                  {item.achievements.map((ach, i) => (
                    <li key={i} className={styles.achievement}>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
