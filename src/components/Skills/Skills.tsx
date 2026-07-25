import React from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiSharp,
  SiHtml5, SiCss, SiReact, SiMysql,
  SiNodedotjs,
  SiSupabase,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import styles from './Skills.module.css';
import BorderGlow from '../BorderGlow/BorderGlow';

/* ------------------------------------------------------------------ */
/* Skill data — edit names/icons here freely                           */
/* ------------------------------------------------------------------ */

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '🧠 Languages',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C#', icon: <SiSharp /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    title: '🌐 Web',
    skills: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
    ],
  },
  {
    title: '🗄️ Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
  },
];

/* ------------------------------------------------------------------ */

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-labelledby="skills-heading">

      {/* =====================================================
          ReactBits: background decoration here
          Example: <GridPattern /> or <DotPattern />
          ===================================================== */}
      <div className={styles.background} aria-hidden="true">
        {/* ReactBits: background decoration here */}
      </div>

      <div className={`container ${styles.inner}`}>
        <h2 id="skills-heading" className="section-heading">
          My <span>Skills</span>
        </h2>
        <div className="section-divider" aria-hidden="true" />

        <div className={styles.categories}>
          {SKILL_CATEGORIES.map((category) => (
            <BorderGlow
              key={category.title}
              className={styles.category}
              edgeSensitivity={30}
              glowColor="268 100 76" /* Using an accent-like hue */
              backgroundColor="#1a1a24" /* matching var(--color-surface) roughly */
              borderRadius={16}
              glowRadius={30}
              glowIntensity={1.0}
              coneSpread={25}
              animated={true}
              colors={['#0e0e0eff', '#ffffffff', '#59595cff']}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>

              <ul className={styles.skillGrid} role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill.name} className={styles.skillChip}>
                    <span className={styles.skillIcon} aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
