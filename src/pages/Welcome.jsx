import React, { useState } from 'react';
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  systemContainer: {
    width: '100%',
    maxWidth: '1440px',
    minHeight: '900px',
    margin: '0 auto',
    border: '3px solid #251720',
    background: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
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
  confirmationHero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    flexGrow: 1,
  },
  confirmationContent: {
    padding: '48px 64px',
    borderRight: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '5rem',
    marginBottom: '16px',
  },
  subtext: {
    fontSize: '1.5rem',
    color: '#5A4C55',
    maxWidth: '520px',
    marginBottom: '40px',
  },
  successVisual: {
    background: '#EAF8F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px',
    position: 'relative',
  },
  terminalOutput: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    background: '#1a1118',
    color: '#00D27F',
    padding: '24px',
    border: '3px solid #251720',
    boxShadow: '3px 3px 0px #251720',
    marginTop: '24px',
    maxWidth: '400px',
  },
  nextStepsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderTop: '3px solid #251720',
    background: '#FFFFFF',
  },
  stepCard: {
    padding: '40px 64px',
    borderRight: '3px solid #251720',
    display: 'flex',
    gap: '24px',
  },
  stepCardLast: {
    padding: '40px 64px',
    display: 'flex',
    gap: '24px',
  },
  stepNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    color: '#00D27F',
    fontSize: '1.25rem',
  },
  stepH3: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '1.25rem',
    marginBottom: '8px',
  },
  stepP: {
    color: '#5A4C55',
    fontSize: '0.95rem',
  },
  shareSection: {
    padding: '48px',
    background: '#251720',
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareH2: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: '2.5rem',
    marginBottom: '8px',
  },
  shareActions: {
    display: 'flex',
    gap: '16px',
  },
  btn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 32px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#FFFFFF',
    border: '3px solid #251720',
    cursor: 'pointer',
    textDecoration: 'none',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
    boxShadow: '3px 3px 0px #251720',
  },
  btnEmerald: {
    background: '#00D27F',
  },
  btnGold: {
    background: '#FFD600',
  },
  networkAnimation: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
  },
};

const NetworkAnimation = () => (
  <svg style={customStyles.networkAnimation} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <circle cx="200" cy="200" r="140" fill="none" stroke="#251720" strokeWidth="1" strokeDasharray="8 8" />
    <circle cx="200" cy="200" r="80" fill="none" stroke="#251720" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="200" y1="200" x2="300" y2="100" stroke="#251720" strokeWidth="2" />
    <line x1="200" y1="200" x2="100" y2="100" stroke="#251720" strokeWidth="2" />
    <line x1="200" y1="200" x2="200" y2="340" stroke="#00D27F" strokeWidth="3" />
    <circle cx="200" cy="200" r="20" className="net-node-active" fill="#00D27F" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="100" r="10" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="100" cy="100" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="200" cy="340" r="15" fill="#00D27F" stroke="#251720" strokeWidth="3" />
    <text x="230" y="205" fontFamily="JetBrains Mono" fontSize="12" fill="#251720" fontWeight="bold">SOURCE_NODE</text>
    <text x="225" y="345" fontFamily="JetBrains Mono" fontSize="10" fill="#251720">USER_UPLINK</text>
  </svg>
);

const ConfirmationHero = () => (
  <div style={customStyles.confirmationHero}>
    <div style={customStyles.confirmationContent}>
      <span style={{ ...customStyles.monoLabel, marginBottom: '16px' }}>
        <span style={{ ...customStyles.pill, ...customStyles.pillActive }}>CONNECTION SUCCESSFUL</span>
      </span>
      <h1 style={customStyles.h1}>YOU'RE IN THE GRID.</h1>
      <p style={customStyles.subtext}>
        Synchronisation sequence initiated. You have been added to the early-access registry for the 2026 London Tech Renaissance.
      </p>
      <div style={customStyles.terminalOutput}>
        <div>&gt; ANALYZING COMM-LINK... DONE</div>
        <div>&gt; ENCRYPTING NODE IDENTITY... SECURE</div>
        <div>&gt; ALLOCATING BANDWIDTH... SUCCESS</div>
        <div>&gt; WELCOME TO EMERGENCE // v1.0.4</div>
      </div>
    </div>
    <div style={customStyles.successVisual} className="success-visual-overlay">
      <NetworkAnimation />
    </div>
  </div>
);

const NextStepsGrid = () => (
  <div style={customStyles.nextStepsGrid}>
    <div style={customStyles.stepCard}>
      <div style={customStyles.stepNum}>01</div>
      <div>
        <h3 style={customStyles.stepH3}>CHECK COMM-LINK</h3>
        <p style={customStyles.stepP}>A verification packet has been sent to your inbox. Confirm your frequency to finalize the handshake.</p>
      </div>
    </div>
    <div style={customStyles.stepCardLast}>
      <div style={customStyles.stepNum}>02</div>
      <div>
        <h3 style={customStyles.stepH3}>DEFINE YOUR NODE</h3>
        <p style={customStyles.stepP}>Keep an eye out for the 'Node Definition' form in Q3 2026. You'll be able to claim your spot on the London network map.</p>
      </div>
    </div>
  </div>
);

const ShareSection = () => {
  const [copyLabel, setCopyLabel] = useState('COPY LINK');

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopyLabel('COPIED!');
      setTimeout(() => setCopyLabel('COPY LINK'), 2000);
    });
  };

  return (
    <section style={customStyles.shareSection}>
      <div>
        <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>EXPAND THE NETWORK</span>
        <h2 style={customStyles.shareH2}>INVITE PEERS.</h2>
      </div>
      <div style={customStyles.shareActions}>
        <a
          href="https://twitter.com/intent/tweet?text=I%27m%20in%20the%20grid.%20Emergence%202026%20London%20Tech%20Renaissance.&url=https://emergence2026.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover"
          style={{ ...customStyles.btn, ...customStyles.btnEmerald }}
        >
          SHARE ON X
        </a>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=https://emergence2026.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover"
          style={{ ...customStyles.btn, ...customStyles.btnGold }}
        >
          LINKEDIN SYNC
        </a>
        <button
          onClick={handleCopy}
          className="btn-hover"
          style={{ ...customStyles.btn, background: '#FFFFFF' }}
        >
          {copyLabel}
        </button>
      </div>
    </section>
  );
};

const Welcome = () => {
  return (
    <div style={customStyles.body}>
      <style>{`
        /* Focus indicators for keyboard navigation */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
          outline: 3px solid #00D27F;
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Reduced motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <div style={customStyles.systemContainer}>
        <Header />
        <ConfirmationHero />
        <NextStepsGrid />
        <ShareSection />
      </div>
    </div>
  );
};

export default Welcome;
