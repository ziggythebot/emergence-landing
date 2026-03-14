import React, { useState, useEffect } from 'react';

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

const Header = ({ onNavClick }) => (
  <header style={customStyles.header}>
    <div style={customStyles.logo}>
      <LogoNode />
      EMERGENCE
    </div>
    <nav style={customStyles.navLinks}>
      <a href="#about" style={customStyles.navLink} onClick={(e) => { e.preventDefault(); onNavClick('about'); }}>[01] ABOUT</a>
      <a href="#mechanics" style={customStyles.navLink} onClick={(e) => { e.preventDefault(); onNavClick('mechanics'); }}>[02] MECHANICS</a>
      <a href="#venue" style={customStyles.navLink} onClick={(e) => { e.preventDefault(); onNavClick('venue'); }}>[03] CORE HUB</a>
    </nav>
  </header>
);

const HeroSection = () => (
  <section style={customStyles.hero}>
    <div style={customStyles.heroContent}>
      <span style={{ ...customStyles.monoLabel, marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Pill active>SYSTEM LIVE</Pill>
        <span>LDN_TECH_ECO_V2</span>
      </span>
      <h1 style={customStyles.h1}>LONDON'S TECH ECOSYSTEM, SELF-AWARE.</h1>
      <p style={customStyles.subtitle}>Emergence is not a conference. It is a distributed moment in time where the city's fragmented tech nodes connect, sync, and emerge as a unified network.</p>
      <div style={customStyles.heroCtas}>
        <a href="#" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>HOST A NODE</a>
        <a href="#" style={{ ...customStyles.btn, ...customStyles.btnSecondary }}>SPONSOR THE GRID</a>
      </div>
    </div>
    <div style={customStyles.heroVisual}>
      <NetworkSVG />
    </div>
  </section>
);

const ExplanationSection = () => (
  <section id="about" style={customStyles.explanation}>
    <div style={customStyles.explHeader}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>CONCEPT_FILE // 01</span>
      <h2 style={customStyles.explHeaderH2}>EMERGENCE.</h2>
    </div>
    <div style={customStyles.explContent}>
      <p style={customStyles.explParagraph}>Traditional tech conferences put everyone in a dark room to listen to a single broadcast. Emergence inverts this architecture. We are turning London itself into the venue, utilizing distributed spaces to facilitate a decentralized exchange of ideas.</p>
      <p style={customStyles.explParagraph}>For three days, offices, cafes, warehouses, and studios across the city become active "Nodes" in the Emergence network. Each node hosts autonomous programming—workshops, debates, hackathons, or dinners—governed entirely by the hosts but discoverable through the central protocol.</p>
      <p style={customStyles.explParagraph}>This is not a top-down event. It is a peer-to-peer protocol for the ecosystem to map itself, share bandwidth, and build unexpected connections. You don't just attend Emergence; you plug into it.</p>
    </div>
  </section>
);

const MechCard = ({ accentColor, iconColor, label, icon, title, description, btnStyle, btnText, isLast }) => (
  <div style={{ ...customStyles.mechCard, ...(isLast ? customStyles.mechCardLast : {}) }}>
    <span style={{ ...customStyles.monoLabel, position: 'absolute', top: '16px', right: '16px' }}>{label}</span>
    <div style={{ ...customStyles.mechIcon, background: accentColor, color: iconColor || '#251720' }}>
      {icon}
    </div>
    <h3 style={customStyles.mechH3}>{title}</h3>
    <p style={customStyles.mechP}>{description}</p>
    <a href="#" style={{ ...customStyles.btn, ...customStyles.btnSmall, ...btnStyle }}>{btnText}</a>
  </div>
);

const MechanicsSection = () => (
  <section id="mechanics" style={customStyles.mechanics}>
    <MechCard
      accentColor="#00D27F"
      label="// ACT_01"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      }
      title="HOST A NODE"
      description="Have an office, a warehouse, or a living room? Turn your space into an active node. You control the format, the capacity, and the agenda. We provide the protocol and route the network to your door."
      btnStyle={{ background: '#00D27F' }}
      btnText="INITIALIZE"
    />
    <MechCard
      accentColor="#FFD600"
      label="// ACT_02"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
        </svg>
      }
      title="ATTEND & SYNC"
      description="No single ticket. Build your own path through the city. Sync your calendar with nodes that match your frequency. Navigate between micro-summits, underground demos, and rooftop debates."
      btnStyle={{ background: '#FFD600' }}
      btnText="ACCESS MAP"
    />
    <MechCard
      accentColor="#251720"
      iconColor="#FFFFFF"
      label="// ACT_03"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      }
      title="POWER THE GRID"
      description="Provide bandwidth. Sponsors don't get logos on lanyards; they inject capital directly into nodes, subsidizing costs for indie developers and elevating the overall fidelity of the network."
      btnStyle={{ background: '#FFFFFF', color: '#251720' }}
      btnText="INJECT CAPITAL"
      isLast
    />
  </section>
);

const VenueSection = () => (
  <section id="venue" style={customStyles.venue}>
    <div style={customStyles.venueInfo}>
      <span style={customStyles.monoLabel}>PHYSICAL_INFRASTRUCTURE // CENTRAL ROUTER</span>
      <h2 style={customStyles.venueH2}>KACHETTE.</h2>
      <div style={customStyles.venueMeta}>
        <Pill>EC1V 9LP</Pill>
        <Pill>CAPACITY: 400</Pill>
        <Pill>STATUS: SECURED</Pill>
      </div>
      <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
        While the network is distributed, every system needs a central router. Located in the historic railway arches of Shoreditch, Kachette acts as the physical core. Come here to sync, collect credentials, and access the master schedule.
      </p>
      <div style={{ borderTop: '1px solid rgba(37, 23, 32, 0.15)', paddingTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#251720' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>LAT/LONG:</span> <span>51.526° N, 0.078° W</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>ARCHITECTURE:</span> <span>EXPOSED BRICK / DUAL ARCH</span>
        </div>
      </div>
    </div>
    <div style={customStyles.venueImageContainer}>
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Exposed brick arches of Kachette venue"
        style={customStyles.venueImage}
      />
      <div style={customStyles.hudOverlay}>
        <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>SYSTEM CAM // 04</span>
        <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>MAIN ARCHWAY</div>
      </div>
    </div>
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
    <section style={customStyles.footerCapture}>
      <div style={customStyles.footerGrid} />
      <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        {submitted ? 'CONNECTION ESTABLISHED' : 'AWAITING INPUT'}
      </span>
      <h2 style={customStyles.footerH2}>ESTABLISH CONNECTION.</h2>
      {submitted ? (
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00D27F', fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>
          YOU ARE NOW PART OF THE NETWORK.
        </p>
      ) : (
        <form style={customStyles.captureForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ENTER COMM-LINK (EMAIL)..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={customStyles.captureInput}
          />
          <button
            type="submit"
            style={{ ...customStyles.btn, ...customStyles.btnPrimary, boxShadow: 'none', borderLeft: 'none' }}
          >
            SYNC
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
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer}>
        <Header onNavClick={scrollToSection} />
        <HeroSection />
        <ExplanationSection />
        <MechanicsSection />
        <VenueSection />
        <FooterCaptureSection />
      </div>
    </div>
  );
};

export default App;
