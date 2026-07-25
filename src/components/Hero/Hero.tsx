import styles from './Hero.module.css';
import LineWaves from '../LineWaves/LineWaves';
import Shuffle from '../Shuffle/Shuffle';
import DecryptedText from '../DecryptedText/DecryptedText';
import TiltedCard from '../TiltedCard/TiltedCard';
import SpecularButton from '../SpecularButton/SpecularButton';


export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">

      {/* ── Background layer (full bleed, behind both columns) ─────────────── */}
      <div className={styles.background} aria-hidden="true">
        {/* ReactBits: LineWaves background */}
        <LineWaves
          speed={0.9}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#524b4bff"
          color2="#a09e9eff"
          color3="#ffffff"
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        />
      </div>

      {/* ── Two-column grid ────────────────────────────────────────────────── */}
      <div className={`container ${styles.grid}`}>

        {/* ════════════════════════════════════════════════════════════════════
            LEFT COLUMN — content
            ════════════════════════════════════════════════════════════════════ */}
        <div className={styles.contentCol}>

          {/* Eyebrow label */}
          <p className={styles.eyebrow} aria-label="Introduction">
            Hi, I'm
          </p>

          {/* Name — h1 for SEO & a11y */}
          {/* ReactBits: Shuffle animation */}
          <Shuffle
            text="Adithya"
            tag="h1"
            className={styles.name}
            textAlign="left"
            shuffleDirection="down"
            duration={0.45}
            animationMode="evenodd"
            shuffleTimes={3}
            ease="expo.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />

          {/* Role / tagline */}
          <p className={styles.tagline}>
            BCA Student &amp; Aspiring Full-Stack Developer
          </p>

          {/* Short pitch */}
          {/* ReactBits: DecryptedText animation */}
          <p className={styles.subtext}>
            <DecryptedText
              text="I build clean, purposeful web experiences — from interactive frontends to full-stack applications and data-driven solutions."
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={18}
              maxIterations={8}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
              encryptedClassName={styles.subtextEncrypted}
            />
          </p>


          {/* CTA buttons */}
          <div className={styles.ctas}>
            <SpecularButton
              size="md"
              radius={8}
              tint="#696969ff"
              tintOpacity={0.8}
              blur={10}
              textColor="#ffffff"
              lineColor="#ffffff"
              baseColor="#56565a"
              intensity={1.2}
              shineSize={15}
              shineFade={30}
              thickness={1.5}
              speed={0.5}
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </SpecularButton>
            <a
              href="/Adithya.pdf"
              download
              className={styles.ctaSecondary}
              aria-label="Download resume PDF"
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            RIGHT COLUMN — visual placeholder
            ════════════════════════════════════════════════════════════════════ */}
        <div className={styles.visualCol} aria-label="Profile photo">
          <TiltedCard
            imageSrc="adithya.png"
            altText="Adithya — BCA Student & Full-Stack Developer"
            captionText="Scroll down"
            containerHeight="min(60vh, 480px)"
            containerWidth="100%"
            imageHeight="min(60vh, 480px)"
            imageWidth="min(46vh, 360px)"
            rotateAmplitude={18}
            scaleOnHover={1.29}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
        </div>

      </div>
    </section>
  );
}
