import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Pill from '../components/Pill';

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
  statsSection: {
    background: '#EAF8F5',
    borderBottom: '3px solid #251720',
    padding: '80px 64px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '64px',
  },
  statBox: {
    textAlign: 'center',
  },
  statNumber: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '4rem',
    fontWeight: 900,
    lineHeight: 1,
    marginBottom: '16px',
  },
  statLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
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
  <section style={customStyles.hero}>
    <div style={customStyles.heroContent}>
      <span style={{ ...customStyles.monoLabel, marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Pill active>SYSTEM LIVE</Pill>
        <span>LDN_TECH_ECO_V2</span>
      </span>
      <h1 style={customStyles.h1}>LONDON'S TECH ECOSYSTEM, SELF-AWARE.</h1>
      <p style={customStyles.subtitle}>Emergence is not a conference. It is a distributed moment in time where the city's fragmented tech nodes connect, sync, and emerge as a unified network. April 28-30, 2026.</p>
      <div style={customStyles.heroCtas}>
        <Link to="/host" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>HOST A NODE</Link>
        <Link to="/sponsor" style={{ ...customStyles.btn, ...customStyles.btnSecondary }}>SPONSOR THE GRID</Link>
      </div>
    </div>
    <div style={customStyles.heroVisual}>
      <NetworkSVG />
    </div>
  </section>
);

const ExplanationSection = () => (
  <section id="concept" style={customStyles.explanation}>
    <div style={customStyles.explHeader}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>// MANIFESTO</span>
      <h2 style={customStyles.explHeaderH2}>THE PROTOCOL LAYER.</h2>
    </div>
    <div style={customStyles.explContent}>
      <p style={customStyles.explParagraph}>Most conferences centralize. Everyone flies to one venue, sits in one room, hears one broadcast.</p>
      <p style={customStyles.explParagraph}>We do the opposite.</p>
      <p style={customStyles.explParagraph}>London already has the infrastructure: 321 tech companies, 50+ coworking spaces, dozens of events every week. They're just fragmented. Invisible to each other.</p>
      <p style={customStyles.explParagraph}>Emergence is the protocol layer. We don't run events. We make them discoverable. We don't build venues. We activate existing nodes. We don't consolidate. We coordinate.</p>
      <p style={customStyles.explParagraph}>Three days. One city. Dozens of simultaneous events. You decide your own path through the network.</p>
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
    <Link to={btnLink} style={{ ...customStyles.btn, ...customStyles.btnSmall, ...btnStyle }}>{btnText}</Link>
  </div>
);

const MechanicsSection = () => (
  <section id="mechanics" style={customStyles.mechanics}>
    <MechCard
      accentColor="#00D27F"
      label="// ACT_01"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      }
      title="HOST A NODE"
      description="Have an office, warehouse, or cafe? Turn your space into an active node. You control the format, capacity, and agenda. We route the network to your door."
      btnStyle={{ background: '#00D27F' }}
      btnText="INITIALIZE"
      btnLink="/host"
    />
    <MechCard
      accentColor="#FFD600"
      label="// ACT_02"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      }
      title="NAVIGATE"
      description="No single ticket. Build your path through the city. Workshops in Shoreditch. Demo day in King's Cross. Dinners in Mayfair. The map goes live April 28th."
      btnStyle={{ background: '#FFD600' }}
      btnText="ACCESS MAP"
      btnLink="/events"
    />
    <MechCard
      accentColor="#251720"
      iconColor="#FFFFFF"
      label="// ACT_03"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      }
      title="POWER THE GRID"
      description="Sponsors don't get logos on lanyards. They inject capital directly into nodes, subsidizing costs and elevating network fidelity. Visibility across the entire ecosystem."
      btnStyle={{ background: '#FFFFFF', color: '#251720' }}
      btnText="SPONSOR"
      btnLink="/sponsor"
      isLast
    />
  </section>
);

const StatsSection = () => (
  <section id="network" style={customStyles.statsSection}>
    <span style={{ ...customStyles.monoLabel, textAlign: 'center', display: 'block', marginBottom: '48px' }}>// NETWORK_EFFECTS</span>
    <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '3rem', textTransform: 'uppercase', textAlign: 'center', marginBottom: '64px', letterSpacing: '-0.02em' }}>VISIBILITY CREATES MOMENTUM</h2>
    <div style={customStyles.statsGrid}>
      <div style={customStyles.statBox}>
        <div style={customStyles.statNumber}>321</div>
        <div style={customStyles.statLabel}>Tech Companies</div>
      </div>
      <div style={customStyles.statBox}>
        <div style={customStyles.statNumber}>50+</div>
        <div style={customStyles.statLabel}>Workspaces</div>
      </div>
      <div style={customStyles.statBox}>
        <div style={customStyles.statNumber}>10</div>
        <div style={customStyles.statLabel}>Square Miles</div>
      </div>
      <div style={customStyles.statBox}>
        <div style={customStyles.statNumber}>3</div>
        <div style={customStyles.statLabel}>Days</div>
      </div>
    </div>
    <p style={{ fontSize: '1.5rem', lineHeight: '1.6', maxWidth: '900px', margin: '64px auto 0', textAlign: 'center', color: '#5A4C55' }}>
      High density. Zero coordination. Most founders don't know what's three blocks away. Most VCs don't see deals until they're priced. Most engineers don't know which companies are hiring.
    </p>
    <p style={{ fontSize: '1.5rem', lineHeight: '1.6', maxWidth: '900px', margin: '32px auto 0', textAlign: 'center', fontWeight: 500 }}>
      Information asymmetry kills momentum. Emergence solves this in three days.
    </p>
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
      <h2 style={customStyles.footerH2}>JOIN THE NETWORK.</h2>
      {submitted ? (
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00D27F', fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>
          YOU ARE NOW PART OF THE NETWORK.
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
            SYNC
          </button>
        </form>
      )}
    </section>
  );
};

function Home() {
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
        .stats-responsive {
          grid-template-columns: repeat(2, 1fr) !important;
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
        .stats-responsive {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer}>
        <Header />
        <HeroSection />
        <ExplanationSection />
        <MechanicsSection />
        <StatsSection />
        <FooterCaptureSection />
      </div>
    </div>
  );
}

export default Home;
