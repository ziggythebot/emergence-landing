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
    padding: '64px',
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
    marginBottom: '1rem',
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0',
  },
  videoCard: {
    padding: '64px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  videoCardLast: {
    borderBottom: 'none',
  },
  playerContainer: {
    border: '3px solid #251720',
    boxShadow: '8px 8px 0px #251720',
    overflow: 'hidden',
    background: '#000000',
    marginTop: '32px',
  },
  specs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginTop: '24px',
  },
  specItem: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    color: '#5A4C55',
  },
  specLabel: {
    textTransform: 'uppercase',
    fontSize: '0.7rem',
    color: '#00D27F',
    marginBottom: '4px',
  },
  downloadBtn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 32px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    boxShadow: '4px 4px 0px #251720',
    marginTop: '24px',
    textDecoration: 'none',
  },
  footer: {
    padding: '48px',
    borderTop: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Videos = () => {
  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer} className="system-container">
        <Header />

        {/* Hero */}
        <section style={customStyles.hero}>
          <span style={customStyles.monoLabel}>VIDEO_LIBRARY</span>
          <h1 style={{ fontSize: '3.5rem', margin: '24px 0 16px 0', color: '#251720' }}>
            REMOTION VIDEOS.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5A4C55', maxWidth: '600px', margin: '0 auto' }}>
            Programmatic videos built from React components. Ready for social, website, and email.
          </p>
        </section>

        {/* Video Grid */}
        <div style={customStyles.videoGrid}>
          {/* Twitter Announcement */}
          <div style={customStyles.videoCard}>
            <span style={customStyles.monoLabel}>01_TWITTER</span>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 16px 0', color: '#251720' }}>
              TWITTER ANNOUNCEMENT
            </h2>
            <p style={{ fontSize: '1rem', color: '#5A4C55', marginBottom: '24px' }}>
              Brand intro video. Title animation, date reveal, tagline, pulsing CTA. Perfect for Twitter/X and LinkedIn posts.
            </p>

            <div style={customStyles.specs}>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Format</div>
                1280x720 (16:9)
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Duration</div>
                6 seconds
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Use Case</div>
                Twitter, LinkedIn
              </div>
            </div>

            <div style={customStyles.playerContainer}>
              <video
                controls
                style={{ width: '100%', display: 'block' }}
              >
                <source src="/videos/twitter-announcement.mp4" type="video/mp4" />
              </video>
            </div>

            <a
              href="/videos/twitter-announcement.mp4"
              download
              style={customStyles.downloadBtn}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
            >
              DOWNLOAD MP4
            </a>
          </div>

          {/* Event Showcase */}
          <div style={customStyles.videoCard}>
            <span style={customStyles.monoLabel}>02_INSTAGRAM</span>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 16px 0', color: '#251720' }}>
              EVENT SHOWCASE
            </h2>
            <p style={{ fontSize: '1rem', color: '#5A4C55', marginBottom: '24px' }}>
              Vertical video for Instagram/TikTok. Intro → 4 event cards → CTA. Encode Club, Space, Raum, After Party.
            </p>

            <div style={customStyles.specs}>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Format</div>
                1080x1920 (9:16)
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Duration</div>
                15 seconds
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Use Case</div>
                Reels, TikTok, Stories
              </div>
            </div>

            <div style={customStyles.playerContainer}>
              <video
                controls
                style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }}
              >
                <source src="/videos/event-showcase.mp4" type="video/mp4" />
              </video>
            </div>

            <a
              href="/videos/event-showcase.mp4"
              download
              style={customStyles.downloadBtn}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
            >
              DOWNLOAD MP4
            </a>
          </div>

          {/* Hero Loop */}
          <div style={{ ...customStyles.videoCard, ...customStyles.videoCardLast }}>
            <span style={customStyles.monoLabel}>03_HERO_LOOP</span>
            <h2 style={{ fontSize: '2.5rem', margin: '0 0 16px 0', color: '#251720' }}>
              HERO LOOP
            </h2>
            <p style={{ fontSize: '1rem', color: '#5A4C55', marginBottom: '24px' }}>
              Seamless 5-second loop. Rotating network nodes, pulsing center, floating text. Use as website hero or email header.
            </p>

            <div style={customStyles.specs}>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Format</div>
                1920x1080 (16:9)
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Duration</div>
                5 seconds (loops)
              </div>
              <div style={customStyles.specItem}>
                <div style={customStyles.specLabel}>Use Case</div>
                Website, Email
              </div>
            </div>

            <div style={customStyles.playerContainer}>
              <video
                controls
                loop
                style={{ width: '100%', display: 'block' }}
              >
                <source src="/videos/hero-loop.mp4" type="video/mp4" />
              </video>
            </div>

            <a
              href="/videos/hero-loop.mp4"
              download
              style={customStyles.downloadBtn}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
            >
              DOWNLOAD MP4
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer style={customStyles.footer} className="footer-section">
          <div style={{ ...customStyles.monoLabel, marginBottom: 0, color: '#5A4C55' }}>
            © 2026 EMERGENCE PROTOCOL // LDN
          </div>
          <div style={{ display: 'flex', gap: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>PRIVACY</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>TERMS</a>
            <a href="/host" style={{ textDecoration: 'none', color: '#251720' }}>CONTACT</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Videos;
