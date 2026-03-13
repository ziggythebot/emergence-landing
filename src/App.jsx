import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Host from './pages/Host';
import Events from './pages/Events';
import Sponsor from './pages/Sponsor';
import Map from './pages/Map';
import About from './pages/About';

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
    color: '#251720',
    textDecoration: 'none',
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
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    textTransform: 'uppercase',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '1.35rem',
    color: '#5A4C55',
    marginBottom: '48px',
    lineHeight: '1.4',
  },
  heroCtas: {
    display: 'flex',
    gap: '16px',
  },
  btn: {
    padding: '16px 32px',
    border: '3px solid #251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '4px 4px 0px #251720',
  },
  btnPrimary: {
    background: '#00D27F',
    color: '#251720',
  },
  btnSecondary: {
    background: '#FFFFFF',
    color: '#251720',
  },
  btnSmall: {
    padding: '12px 24px',
    fontSize: '0.75rem',
  },
  explanation: {
    padding: '80px 64px',
    borderBottom: '3px solid #251720',
  },
  explHeader: {
    marginBottom: '48px',
  },
  explHeaderH2: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3rem',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  explContent: {
    display: 'grid',
    gap: '24px',
  },
  explParagraph: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    color: '#251720',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderBottom: '3px solid #251720',
  },
  statItem: {
    padding: '64px 40px',
    textAlign: 'center',
    borderRight: '3px solid #251720',
  },
  statNumber: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '4rem',
    fontWeight: 900,
    marginBottom: '12px',
    color: '#00D27F',
  },
  statLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
  },
  venue: {
    padding: '80px 64px',
    borderBottom: '3px solid #251720',
  },
  venueHeader: {
    marginBottom: '48px',
  },
  venueH2: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3rem',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  venueContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '64px',
  },
  venueLeft: {},
  venueParagraph: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '24px',
  },
  venueDetails: {
    marginTop: '48px',
    display: 'grid',
    gap: '24px',
  },
  venueDetailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px 0',
    borderBottom: '2px solid #251720',
  },
  venueDetailLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
  },
  venueDetailValue: {
    fontWeight: 600,
  },
  venueRight: {},
  venueImagePlaceholder: {
    width: '100%',
    height: '400px',
    background: '#EAF8F5',
    border: '3px solid #251720',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    color: '#5A4C55',
  },
  emailCapture: {
    padding: '80px 64px',
    textAlign: 'center',
  },
  emailCaptureContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  emailH2: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3rem',
    textTransform: 'uppercase',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    marginBottom: '16px',
  },
  emailParagraph: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    marginBottom: '32px',
    color: '#5A4C55',
  },
  emailForm: {
    display: 'flex',
    gap: '16px',
  },
  emailInput: {
    flex: 1,
    padding: '16px',
    border: '3px solid #251720',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    background: '#FFFFFF',
  },
  footer: {
    padding: '48px 64px',
    borderTop: '3px solid #251720',
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'center',
    marginBottom: '24px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
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
    }}></div>
  </div>
);

const Header = () => (
  <header style={customStyles.header} className="header-responsive">
    <Link to="/" style={customStyles.logo}>
      <LogoNode />
      EMERGENCE
    </Link>
    <nav style={customStyles.navLinks}>
      <Link to="/about" style={customStyles.navLink}>ABOUT</Link>
      <Link to="/events" style={customStyles.navLink}>EVENTS</Link>
      <Link to="/host" style={customStyles.navLink}>HOST</Link>
      <Link to="/sponsor" style={customStyles.navLink}>SPONSOR</Link>
      <Link to="/map" style={customStyles.navLink}>MAP</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer style={customStyles.footer}>
    <div style={customStyles.footerLinks}>
      <Link to="/about" style={customStyles.navLink}>ABOUT</Link>
      <Link to="/events" style={customStyles.navLink}>EVENTS</Link>
      <Link to="/host" style={customStyles.navLink}>HOST</Link>
      <Link to="/sponsor" style={customStyles.navLink}>SPONSOR</Link>
      <Link to="/map" style={customStyles.navLink}>MAP</Link>
    </div>
    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#5A4C55' }}>
      EMERGENCE LONDON © 2026 / APRIL 28-30
    </p>
  </footer>
);

function App() {
  return (
    <Router>
      <div style={customStyles.body}>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'DM Sans', sans-serif;
          }
          @media (max-width: 768px) {
            .header-responsive {
              flex-direction: column !important;
              gap: 24px !important;
            }
            .hero-responsive {
              grid-template-columns: 1fr !important;
            }
            .hero-responsive > div:first-child {
              border-right: none !important;
              border-bottom: 3px solid #251720 !important;
            }
            .stats-responsive {
              grid-template-columns: 1fr !important;
            }
            .stats-responsive > div {
              border-right: none !important;
              border-bottom: 3px solid #251720 !important;
            }
            .stats-responsive > div:last-child {
              border-bottom: none !important;
            }
            .mechanics-responsive {
              grid-template-columns: 1fr !important;
            }
            .explanation-responsive,
            .venue {
              padding: 48px 24px !important;
            }
          }
        `}</style>
        <div style={customStyles.systemContainer}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home customStyles={customStyles} />} />
              <Route path="/host" element={<Host customStyles={customStyles} />} />
              <Route path="/events" element={<Events customStyles={customStyles} />} />
              <Route path="/sponsor" element={<Sponsor customStyles={customStyles} />} />
              <Route path="/map" element={<Map customStyles={customStyles} />} />
              <Route path="/about" element={<About customStyles={customStyles} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
