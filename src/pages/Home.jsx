import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const customStyles = {
  root: {
    '--bg-mint': '#EAF8F5',
    '--ink': '#251720',
    '--ink-light': '#5A4C55',
    '--emerald': '#00D27F',
    '--gold': '#FFD600',
    '--surface': '#FFFFFF',
  },
  body: {
    background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
    color: '#251720',
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: '1.5',
    minHeight: '100vh',
    overflowX: 'hidden',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(10px)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  logo: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoNode: {
    width: '24px',
    height: '24px',
    background: '#FFD600',
    border: '3px solid #251720',
    borderRadius: '50%',
    position: 'relative',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  navLink: {
    color: '#251720',
    textDecoration: 'none',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px solid #251720',
  },
  heroContent: {
    padding: '80px 64px',
    borderRight: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heroVisual: {
    background: '#EAF8F5',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  monoLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
    display: 'block',
    marginBottom: '0.5rem',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    border: '2px solid #251720',
    background: '#FFFFFF',
    textTransform: 'uppercase',
  },
  pillActive: {
    background: '#00D27F',
  },
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#5A4C55',
    maxWidth: '480px',
    marginBottom: '48px',
  },
  heroCtas: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },
  btn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 32px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#FFFFFF',
    border: '3px solid #251720',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.1s ease',
    boxShadow: '6px 6px 0px #251720',
  },
  btnPrimary: {
    background: '#00D27F',
  },
  btnSecondary: {
    background: '#FFD600',
  },
  btnSmall: {
    alignSelf: 'flex-start',
    padding: '12px 24px',
    fontSize: '0.9rem',
    boxShadow: '6px 6px 0px #251720',
  },
  explanation: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    borderBottom: '3px solid #251720',
  },
  explHeader: {
    padding: '64px',
    borderRight: '3px solid #251720',
    background: '#251720',
    color: '#FFFFFF',
  },
  explHeaderH2: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
    fontSize: '3rem',
  },
  explContent: {
    padding: '64px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
    background: '#FFFFFF',
  },
  explParagraph: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    letterSpacing: '-0.01em',
    maxWidth: '800px',
  },
  mechanics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderBottom: '3px solid #251720',
  },
  mechCard: {
    padding: '48px',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  mechCardLast: {
    borderRight: 'none',
  },
  mechIcon: {
    width: '64px',
    height: '64px',
    border: '3px solid #251720',
    borderRadius: '16px',
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '3px 3px 0px #251720',
  },
  mechH3: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '2rem',
    marginBottom: '16px',
  },
  mechP: {
    color: '#5A4C55',
    marginBottom: '32px',
    flexGrow: 1,
  },
  venue: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  venueInfo: {
    padding: '64px',
    borderRight: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  venueH2: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '4rem',
    marginBottom: '16px',
  },
  venueMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    flexWrap: 'wrap',
  },
  venueImageContainer: {
    position: 'relative',
    minHeight: '500px',
  },
  venueImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    inset: 0,
    filter: 'contrast(1.1) saturate(0.8)',
  },
  hudOverlay: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    background: '#FFFFFF',
    border: '3px solid #251720',
    padding: '16px',
    boxShadow: '3px 3px 0px #251720',
    zIndex: 10,
  },
  footerCapture: {
    padding: '120px 64px',
    background: '#251720',
    color: '#FFFFFF',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  footerH2: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '4rem',
    color: '#FFFFFF',
    marginBottom: '48px',
    position: 'relative',
    zIndex: 2,
  },
  captureForm: {
    display: 'flex',
    maxWidth: '600px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  captureInput: {
    flexGrow: 1,
    padding: '24px 32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.1rem',
    border: '3px solid #00D27F',
    background: '#251720',
    color: '#FFFFFF',
    outline: 'none',
  },
  footerGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    zIndex: 1,
  },
};

const LogoNode = () => (
  <div style={customStyles.logoNode}>
    <div style={{
      content: '',
      position: 'absolute',
      top: '-6px', right: '-6px', bottom: '-6px', left: '-6px',
      border: '2px solid #00D27F',
      borderRadius: '50%',
    }} />
  </div>
);

const Pill = ({ children, active }) => (
  <span style={{ ...customStyles.pill, ...(active ? customStyles.pillActive : {}) }}>
    {children}
  </span>
);

const NetworkSVG = () => (
  <svg
    style={{ width: '100%', height: '100%', maxHeight: '600px', overflow: 'visible' }}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#251720" strokeWidth="2" fill="none" opacity="0.2" d="M100,50 L100,450 M200,50 L200,450 M300,50 L300,450 M400,50 L400,450" />
    <path stroke="#251720" strokeWidth="2" fill="none" opacity="0.2" d="M50,100 L450,100 M50,200 L450,200 M50,300 L450,300 M50,400 L450,400" />
    <path stroke="#251720" strokeWidth="3" fill="none" opacity="0.4" d="M100,200 L200,100 L400,100 L400,300 L300,400 L100,400 Z" />
    <path stroke="#251720" strokeWidth="3" fill="none" opacity="0.4" d="M200,300 L300,200 L400,200" />
    <path
      stroke="#00D27F"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M100,200 L200,300 L300,300 L400,200"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out' }}
    />
    <path
      stroke="#FFD600"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M200,100 L200,300 L100,400"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out', animationDelay: '1.5s' }}
    />
    <circle cx="100" cy="200" r="8" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="200" cy="100" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="100" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="400" cy="300" r="12" fill="#00D27F" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="400" r="8" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="100" cy="400" r="10" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="200" cy="300" r="14" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="300" cy="300" r="6" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="200" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="200" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <rect x="185" y="285" width="30" height="30" fill="none" stroke="#251720" strokeWidth="2" strokeDasharray="4" />
    <text x="220" y="315" fontFamily="JetBrains Mono" fontSize="10" fill="#251720">HUB_01</text>
    <text x="415" y="305" fontFamily="JetBrains Mono" fontSize="10" fill="#251720">NODE_EAST</text>
  </svg>
);

const HeroSection = () => (
  <section className="hero-grid" style={customStyles.hero}>
    <div style={customStyles.heroContent}>
      <span style={{ ...customStyles.monoLabel, marginBottom: '16px', display: 'block', color: '#00D27F', fontSize: '0.85rem' }}>
        APRIL 28-30, 2026
      </span>
      <h1 style={customStyles.h1}>THREE DAYS. LONDON'S TECH ECOSYSTEM. ONE NETWORK.</h1>
      <p style={customStyles.subtitle}>Not a conference. A distributed protocol.</p>
      <div style={customStyles.heroCtas}>
        <a href="/events" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>BROWSE EVENTS</a>
      </div>
    </div>
    <div style={customStyles.heroVisual}>
      <NetworkSVG />
    </div>
  </section>
);

const ExplanationSection = () => (
  <section id="about" className="explanation-section" style={customStyles.explanation}>
    <div style={customStyles.explHeader}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>CONCEPT_FILE // 01</span>
      <h2 style={customStyles.explHeaderH2}>WHAT IS THIS.</h2>
    </div>
    <div style={customStyles.explContent}>
      <p style={customStyles.explParagraph}>London Tech Week, networked. Events happening across the city April 28-30. AI labs. Biotech. Fintech. Design studios. Web3.</p>
      <p style={customStyles.explParagraph}>Browse the grid. Pick your path. RSVP on Luma.</p>
    </div>
  </section>
);

const VisualSection = () => (
  <section style={{ borderBottom: '3px solid #251720', position: 'relative', minHeight: '400px', background: '#EAF8F5' }}>
    <img
      src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      alt="London venue space"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        inset: 0,
        filter: 'contrast(1.1) saturate(0.8)',
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      background: '#FFFFFF',
      border: '3px solid #251720',
      padding: '16px',
      boxShadow: '3px 3px 0px #251720',
    }}>
      <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>SYSTEM CAM // SHOREDITCH</span>
      <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>LONDON GRID</div>
    </div>
  </section>
);

const MechCard = ({ accentColor, iconColor, label, icon, title, description, btnStyle, btnText, btnLink, isLast }) => (
  <div style={{ ...customStyles.mechCard, ...(isLast ? customStyles.mechCardLast : {}) }}>
    <span style={{ ...customStyles.monoLabel, position: 'absolute', top: '16px', right: '16px' }}>{label}</span>
    <div style={{ ...customStyles.mechIcon, background: accentColor, color: iconColor || '#251720' }}>
      {icon}
    </div>
    <h3 style={customStyles.mechH3}>{title}</h3>
    <p style={customStyles.mechP}>{description}</p>
    <a href={btnLink} style={{ ...customStyles.btn, ...customStyles.btnSmall, ...btnStyle }}>{btnText}</a>
  </div>
);

const MechanicsSection = () => (
  <section id="mechanics" className="mechanics-grid" style={customStyles.mechanics}>
    <MechCard
      accentColor="#00D27F"
      label="// STEP_01"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      }
      title="BROWSE THE GRID"
      description="Events across London. Filter by topic, location, date."
      btnStyle={{ background: '#00D27F' }}
      btnText="SEE EVENTS"
      btnLink="/events"
    />
    <MechCard
      accentColor="#FFD600"
      label="// STEP_02"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      }
      title="RSVP ON LUMA"
      description="Each event links to Luma. RSVP. Get location details."
      btnStyle={{ background: '#FFD600' }}
      btnText="ACCESS MAP"
      btnLink="/events"
    />
    <MechCard
      accentColor="#251720"
      iconColor="#FFFFFF"
      label="// STEP_03"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      }
      title="SHOW UP"
      description="April 28-30. Navigate London. Build your network."
      btnStyle={{ background: '#FFFFFF', color: '#251720' }}
      btnText="SEE SCHEDULE"
      btnLink="/events"
      isLast
    />
  </section>
);


const FooterCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="footer-section" style={customStyles.footerCapture}>
      <div style={customStyles.footerGrid} />
      <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        {submitted ? 'SYNCED' : 'GET UPDATES'}
      </span>
      <h2 style={customStyles.footerH2}>STAY IN THE LOOP.</h2>
      {submitted ? (
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00D27F', fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>
          YOU'RE ON THE LIST.
        </p>
      ) : (
        <form style={customStyles.captureForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="YOUR EMAIL..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={customStyles.captureInput}
          />
          <button
            type="submit"
            style={{ ...customStyles.btn, ...customStyles.btnPrimary, boxShadow: 'none', borderLeft: 'none' }}
          >
            SUBSCRIBE
          </button>
        </form>
      )}
    </section>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Epilogue:wght@800;900&family=JetBrains+Mono:wght@400;700&display=swap');

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        overflow-x: hidden;
      }

      ::selection {
        background: #00D27F;
        color: #251720;
      }

      @keyframes drawLine {
        0% { stroke-dashoffset: 1000; }
        100% { stroke-dashoffset: 0; }
      }

      @keyframes pulseNode {
        0% { filter: drop-shadow(0px 0px 4px #00D27F); }
        50% { filter: drop-shadow(0px 0px 16px #00D27F); }
        100% { filter: drop-shadow(0px 0px 4px #00D27F); }
      }

      a:hover {
        color: #00D27F !important;
      }

      @media (max-width: 1024px) {
        .hero-responsive {
          grid-template-columns: 1fr !important;
        }
        .explanation-responsive {
          grid-template-columns: 1fr !important;
        }
        .mechanics-responsive {
          grid-template-columns: 1fr !important;
        }
        .venue-responsive {
          grid-template-columns: 1fr !important;
        }
      }

      @media (max-width: 768px) {
        .header-responsive {
          flex-direction: column !important;
          gap: 24px !important;
        }
        .capture-form-responsive {
          flex-direction: column !important;
        }
        .system-container-responsive {
          border-left: none !important;
          border-right: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          /* Global mobile resets */
          body { overflow-x: hidden !important; }

          /* Hero section */
          .hero-grid h1 {
            font-size: 1.75rem !important;
            margin: 12px 0 16px 0 !important;
            line-height: 1.1 !important;
          }

          .hero-grid p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-bottom: 24px !important;
            max-width: 100% !important;
          }

          .hero-grid a {
            padding: 12px 20px !important;
            font-size: 0.8rem !important;
            white-space: nowrap !important;
            box-shadow: 3px 3px 0px #251720 !important;
          }

          .hero-grid > div:first-child > div:last-child {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
          }

          .hero-grid > div:last-child {
            min-height: 200px !important;
          }

          .hero-grid > div:last-child svg {
            max-width: 100% !important;
            height: auto !important;
          }

          /* Explanation section typography */
          .explanation-section h2 {
            font-size: 1.75rem !important;
            margin: 8px 0 !important;
          }

          .explanation-section p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            max-width: 100% !important;
          }

          /* Mechanics cards */
          .mechanics-grid h3 {
            font-size: 1.25rem !important;
          }

          .mechanics-grid p {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }

          .mechanics-grid svg {
            width: 20px !important;
            height: 20px !important;
          }

          .mechanics-grid button,
          .mechanics-grid a {
            padding: 10px 20px !important;
            font-size: 0.8rem !important;
            box-shadow: 3px 3px 0px #251720 !important;
          }


          /* Footer capture */
          .footer-section h2 {
            font-size: 1.75rem !important;
          }

          .footer-section input {
            font-size: 14px !important;
            padding: 12px !important;
          }

          .footer-section button {
            padding: 12px 24px !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
      <div style={customStyles.body}>
        <div className="system-container" style={customStyles.systemContainer}>
          <Header />
          <HeroSection />
          <ExplanationSection />
          <VisualSection />
          <MechanicsSection />
          <FooterCaptureSection />
        </div>
      </div>
    </>
  );
};

export default App;
