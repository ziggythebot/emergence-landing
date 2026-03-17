import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import EmailCapture from '../components/EmailCapture';

const customStyles = {
  body: {
    background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#251720',
    lineHeight: '1.5',
    WebkitFontSmoothing: 'antialiased',
    margin: 0,
    padding: 0,
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  pageLayout: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    borderBottom: '3px solid #251720',
    flex: 1,
  },
  sidebar: {
    padding: '48px',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    color: '#251720',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    minHeight: '600px',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    inset: 0,
  },
  liveLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: 700,
    display: 'inline-block',
    marginBottom: '12px',
    border: '2px solid #00D27F',
    padding: '4px 10px',
    color: '#00D27F',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
};

const Map = () => {
  return (
    <div style={customStyles.body}>
      <Helmet>
        <title>Map - Emergence London 2026</title>
        <meta name="description" content="Explore London's AI and tech ecosystem. Interactive map of VCs, AI labs, coworking spaces, and innovation hubs across the city." />
      </Helmet>
      <div style={customStyles.systemContainer}>
        <Header />

        <div style={customStyles.pageLayout}>
          <aside style={customStyles.sidebar}>
            <div>
              <span style={customStyles.liveLabel}>LIVE MAP</span>
              <h1 style={{ fontSize: '3.5rem', marginTop: '24px', color: '#251720', lineHeight: 1.1 }}>
                LONDON'S TECH ECOSYSTEM.
              </h1>
              <p style={{ fontSize: '1.1rem', marginTop: '16px', color: '#5A4C55', lineHeight: '1.6' }}>
                VCs, AI labs, coworking spaces, and innovation hubs. The map behind Emergence.
              </p>
            </div>
          </aside>

          <main style={customStyles.content}>
            <div style={customStyles.mapContainer}>
              <iframe
                src="https://londonmaxxxing.com"
                style={customStyles.mapIframe}
                title="London Tech Ecosystem Map"
              />
            </div>
          </main>
        </div>

        <EmailCapture sourcePage="Map" />

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

          @media (max-width: 768px) {
            .system-container {
              border-left: none !important;
              border-right: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Map;
