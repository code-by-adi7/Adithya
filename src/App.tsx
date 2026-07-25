import { useState } from 'react';
import './index.css';
import BubbleMenu from './components/BubbleMenu/BubbleMenu';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CurvedLoop from './components/CurvedLoop/CurvedLoop';

// ─── Navigation items ─────────────────────────────────────────────────────────
// Each pill links to a section anchor. Hover colours cycle through accent shades.
const NAV_ITEMS = [
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About section',
    rotation: -6,
    hoverStyles: { bgColor: '#646468ff', textColor: '#ffffff' }
  },
  {
    label: 'skills',
    href: '#skills',
    ariaLabel: 'Skills section',
    rotation: 4,
    hoverStyles: { bgColor: '#626263ff', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects section',
    rotation: -4,
    hoverStyles: { bgColor: '#616161ff', textColor: '#ffffff' }
  },
  {
    label: 'education',
    href: '#education',
    ariaLabel: 'Education section',
    rotation: 6,
    hoverStyles: { bgColor: '#606063ff', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact section',
    rotation: -6,
    hoverStyles: { bgColor: '#56565aff', textColor: '#ffffff' }
  },
] as const;

// ─── Logo node shown in the left bubble ───────────────────────────────────────
const LOGO = (
  <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.5px', color: '#6c63ff' }}>
    &lt;A /&gt;
  </span>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* BubbleMenu replaces the Navbar — fixed so it follows on scroll */}
      <BubbleMenu
        logo={LOGO}
        items={NAV_ITEMS as any}
        useFixedPosition={true}
        menuBg="#1a1a24"
        menuContentColor="#f0f0f5"
        menuAriaLabel="Toggle navigation"
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        onMenuClick={setMenuOpen}
      />

      {/* Page content — blurs when the menu overlay is open */}
      <div className={menuOpen ? 'page-content page-blur' : 'page-content'}>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <CurvedLoop marqueeText="BUILT BY ADITHYA WITH REACT AND TYPESCRIPT✦" />
        <Footer />
      </div>
    </>
  );
}

export default App;
