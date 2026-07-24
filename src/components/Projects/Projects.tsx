import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

/* ------------------------------------------------------------------ */
/* Project data — fill in your real details here                       */
/* ------------------------------------------------------------------ */

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageAlt: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description:
      'A brief description of what this project does, the problem it solves, and any interesting technical decisions you made while building it.',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/yourusername/project-one',
    demoUrl: 'https://project-one.vercel.app',
    imageAlt: 'Screenshot of Project One',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'A brief description of what this project does, the problem it solves, and any interesting technical decisions you made while building it.',
    tags: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
    githubUrl: 'https://github.com/yourusername/project-two',
    demoUrl: 'https://project-two.vercel.app',
    imageAlt: 'Screenshot of Project Two',
  },
];

/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`} aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="section-heading">
          Featured <span>Projects</span>
        </h2>
        <div className="section-divider" aria-hidden="true" />

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              aria-label={`Project: ${project.title}`}
            >
              {/* Project image / screenshot */}
              <div className={styles.cardImage}>
                {/* =====================================================
                    ReactBits: replace this placeholder with an actual
                    <img> tag or a ReactBits image reveal component.
                    Example:
                    <img src="/projects/project-one.png" alt={project.imageAlt} />
                    ===================================================== */}
                <span className={styles.imagePlaceholderText}>
                  {/* ReactBits: project screenshot / image here */}
                  Screenshot placeholder
                </span>
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                {/* Tech stack tags */}
                <ul className={styles.tags} aria-label="Technologies used" role="list">
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>{tag}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className={styles.cardLinks}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FiGithub aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <FiExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
