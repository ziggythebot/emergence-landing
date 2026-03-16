import React from 'react';
import Header from '../components/Header';

const customStyles = {
  body: {
    background: '#EAF8F5',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
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
    background: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  mapHeader: {
    padding: '32px 64px',
    borderBottom: '3px solid #251720',
    textAlign: 'center',
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
  mapTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    lineHeight: 0.95,
    marginBottom: '12px',
  },
  mapDescription: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '1rem',
    color: '#5A4C55',
    lineHeight: 1.5,
    maxWidth: '800px',
    margin: '0 auto',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    borderBottom: '3px solid #251720',
  },
  mapIframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    minHeight: '600px',
  },
  footer: {
    padding: '24px',
    textAlign: 'center',
  },
  footerText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#5A4C55',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
};

const Map = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .map-header-mobile {
            padding: 24px 16px !important;
          }

          .map-title-mobile {
            font-size: 2rem !important;
          }

          .map-iframe-mobile {
            min-height: 400px !important;
          }
        }
      `}</style>
      <div style={customStyles.body}>
        <div style={customStyles.systemContainer}>
          <Header />

          <div className="map-header-mobile" style={customStyles.mapHeader}>
            <span style={customStyles.liveLabel}>INTERACTIVE MAP</span>
            <h1 className="map-title-mobile" style={customStyles.mapTitle}>LONDON TECH MAP.</h1>
            <p style={customStyles.mapDescription}>
              This map is where Emergence started. Every dot is a node in London's tech network. We built this to see the whole ecosystem at once. Then we started connecting them IRL.
            </p>
          </div>

          <div style={customStyles.mapContainer}>
            <iframe
              className="map-iframe-mobile"
              src="https://londonmaxxxing.com/embed"
              style={customStyles.mapIframe}
              title="London Tech Map"
              allowFullScreen
            />
          </div>

          <div style={customStyles.footer}>
            <span style={customStyles.footerText}>END_OF_TRANSMISSION</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
