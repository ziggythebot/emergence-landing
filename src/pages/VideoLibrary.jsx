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
    padding: '80px 64px',
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
  videosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '0',
  },
  videoCard: {
    padding: '48px',
    borderBottom: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
};

const VideoLibrary = () => {
  const videos = [
    {
      title: 'Twitter Announcement',
      description: 'Brand intro video. Title animation, date reveal, tagline, pulsing CTA.',
      format: '1280x720 (16:9)',
      duration: '6 seconds',
      useCase: 'Twitter, LinkedIn',
    },
    {
      title: 'Event Showcase',
      description: 'Vertical video for Instagram/TikTok. Intro → 4 event cards → CTA.',
      format: '1080x1920 (9:16)',
      duration: '15 seconds',
      useCase: 'Reels, TikTok, Stories',
    },
    {
      title: 'Hero Loop',
      description: 'Seamless 5-second loop. Rotating network nodes, pulsing center.',
      format: '1920x1080 (16:9)',
      duration: '5 seconds (loops)',
      useCase: 'Website, Email',
    },
  ];

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer} className="system-container">
        <Header />

        <section style={customStyles.hero}>
          <span style={customStyles.monoLabel}>VIDEO_LIBRARY</span>
          <h1 style={{ fontSize: '3.5rem', margin: '24px 0 16px 0', color: '#251720' }}>
            REMOTION VIDEOS.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5A4C55', maxWidth: '600px', margin: '0 auto' }}>
            Programmatic videos built from React components. Ready for social, website, and email.
          </p>
        </section>

        <div style={customStyles.videosGrid}>
          {videos.map((video, index) => (
            <div key={index} style={customStyles.videoCard}>
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
                  {String(index + 1).padStart(2, '0')}_{video.title.toUpperCase().replace(/\s+/g, '_')}
                </span>
                <h2 style={{ fontSize: '2rem', margin: '0 0 12px 0', color: '#251720' }}>
                  {video.title.toUpperCase()}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#5A4C55', lineHeight: 1.6, marginBottom: '24px' }}>
                  {video.description}
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                }}>
                  <div>
                    <div style={{ color: '#00D27F', marginBottom: '4px', textTransform: 'uppercase', fontSize: '0.65rem' }}>
                      Format
                    </div>
                    <div style={{ color: '#5A4C55' }}>{video.format}</div>
                  </div>
                  <div>
                    <div style={{ color: '#00D27F', marginBottom: '4px', textTransform: 'uppercase', fontSize: '0.65rem' }}>
                      Duration
                    </div>
                    <div style={{ color: '#5A4C55' }}>{video.duration}</div>
                  </div>
                  <div>
                    <div style={{ color: '#00D27F', marginBottom: '4px', textTransform: 'uppercase', fontSize: '0.65rem' }}>
                      Use Case
                    </div>
                    <div style={{ color: '#5A4C55' }}>{video.useCase}</div>
                  </div>
                </div>
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

export default VideoLibrary;
