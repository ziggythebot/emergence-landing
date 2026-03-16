import React from 'react';
import Header from '../components/Header';

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
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    padding: '48px 64px 40px 64px',
    borderBottom: '3px solid #251720',
    textAlign: 'center',
    background: '#FFFFFF',
  },
  monoLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#00D27F',
    display: 'block',
    marginBottom: '0.5rem',
  },
  assetsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '0',
  },
  assetCard: {
    padding: '48px',
    borderBottom: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
  imagePreview: {
    border: '3px solid #251720',
    boxShadow: '8px 8px 0px #251720',
    overflow: 'hidden',
    background: '#F5F5F5',
    marginBottom: '24px',
  },
  downloadBtn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 24px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '0.85rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    boxShadow: '4px 4px 0px #251720',
    textDecoration: 'none',
    marginTop: 'auto',
  },
};

const BrandKit = () => {
  const assets = [
    {
      title: 'Luma Header',
      description: 'Wide banner for Luma event pages',
      dimensions: '1400x400px (3.5:1)',
      file: '/luma-assets/luma-header.png',
    },
    {
      title: 'Luma Logo',
      description: 'Profile picture for Luma account',
      dimensions: '512x512px (Square)',
      file: '/luma-assets/luma-logo.png',
    },
    {
      title: 'Luma Sharing Image',
      description: 'Social media preview image',
      dimensions: '1200x630px (1.91:1)',
      file: '/luma-assets/luma-sharing.png',
    },
  ];

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer} className="system-container">
        <Header />

        <section style={customStyles.hero}>
          <span style={customStyles.monoLabel}>BRAND_KIT</span>
          <h1 style={{
            fontSize: '4rem',
            margin: '0 0 12px 0',
            color: '#251720',
            fontFamily: "'Epilogue', sans-serif",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
          }}>
            EMERGENCE ASSETS.
          </h1>
          <p style={{ fontSize: '1rem', color: '#5A4C55', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
            Brand assets for event organizers and partners. Luma images, logos, and sharing assets.
          </p>
        </section>

        <div style={customStyles.assetsGrid}>
          {assets.map((asset, index) => (
            <div key={index} style={customStyles.assetCard}>
              <div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  color: '#00D27F',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '12px',
                }}>
                  {String(index + 1).padStart(2, '0')}_{asset.title.toUpperCase().replace(/\s+/g, '_')}
                </span>
                <h2 style={{ fontSize: '2rem', margin: '0 0 12px 0', color: '#251720' }}>
                  {asset.title.toUpperCase()}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#5A4C55', lineHeight: 1.6, marginBottom: '24px' }}>
                  {asset.description}
                </p>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#5A4C55',
                  marginBottom: '24px',
                }}>
                  <div style={{ color: '#00D27F', marginBottom: '4px', textTransform: 'uppercase', fontSize: '0.65rem' }}>
                    Dimensions
                  </div>
                  {asset.dimensions}
                </div>
                <div style={customStyles.imagePreview}>
                  <img
                    src={asset.file}
                    alt={asset.title}
                    style={{
                      width: '100%',
                      display: 'block',
                    }}
                  />
                </div>
                <a
                  href={asset.file}
                  download
                  style={customStyles.downloadBtn}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
                >
                  DOWNLOAD PNG
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer style={{
          padding: '48px 64px',
          borderTop: '3px solid #251720',
          background: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#5A4C55',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            © 2026 EMERGENCE PROTOCOL // LDN
          </div>
          <div style={{ display: 'flex', gap: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>PRIVACY</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>TERMS</a>
            <a href="/contact" style={{ textDecoration: 'none', color: '#251720' }}>CONTACT</a>
          </div>
        </footer>

        <style>{`
          @media (max-width: 768px) {
            .system-container {
              border-left: none !important;
              border-right: none !important;
              background: #FFFFFF !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BrandKit;
