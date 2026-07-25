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
    title: 'Share-in-room',
    description:
      'RoomShare is a modern, real-time file sharing application designed to make temporary file exchanges simple, secure, and collaborative.',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL'],
    githubUrl: 'https://github.com/code-by-adi7/share-in-room',
    demoUrl: 'https://share-in-room.netlify.app/',
    imageAlt: '',
  },
  {
    id: 2,
    title: 'AI-virtual mouse',
    description:
      'Virtual Mouse is a Python-based computer vision project that replaces the physical mouse with real-time hand gesture recognition.',
    tags: ['Python', 'opencv', 'mediapipe', 'pyautogui'],
    githubUrl: 'https://github.com/code-by-adi7/virtual-mouse',
    demoUrl: 'https://github.com/code-by-adi7/virtual-mouse',
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
