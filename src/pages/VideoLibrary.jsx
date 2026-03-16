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
    padding: '48px 64px',
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
      file: 'twitter-announcement.mp4',
      vertical: false,
    },
    {
      title: 'Event Showcase',
      description: 'Vertical video for Instagram/TikTok. Intro → 4 event cards → CTA.',
      format: '1080x1920 (9:16)',
      duration: '15 seconds',
      useCase: 'Reels, TikTok, Stories',
      file: 'event-showcase.mp4',
      vertical: true,
    },
    {
      title: 'Hero Loop',
      description: 'Seamless 5-second loop. Rotating network nodes, pulsing center.',
      format: '1920x1080 (16:9)',
      duration: '5 seconds (loops)',
      useCase: 'Website, Email',
      file: 'hero-loop.mp4',
      vertical: false,
    },
    // EXPERIMENTAL VIDEOS
    {
      title: 'London Skyline + Data',
      description: 'Ecosystem visualization over London skyline. Company markers, network connections, and stats (320+ companies, 63 AI labs, 61 fintech).',
      format: '1280x720 (16:9)',
      duration: '30 seconds',
      useCase: 'LinkedIn, Twitter, Website Hero',
      file: 'london-skyline-data.mp4',
      vertical: false,
    },
    {
      title: 'Animated Network Graph',
      description: 'Full ecosystem network expanding from center node. 30+ real company names (DeepMind, Anthropic, Revolut, etc.) appearing in tiers.',
      format: '1280x720 (16:9)',
      duration: '45 seconds',
      useCase: 'Presentation, Website, LinkedIn',
      file: 'animated-network-graph.mp4',
      vertical: false,
    },
    {
      title: 'Event Countdown',
      description: 'Kinetic countdown animation. "44 DAYS" → "APRIL 28-30" → "EMERGENCE". Dark theme with London landmarks.',
      format: '1080x1080 (1:1)',
      duration: '15 seconds',
      useCase: 'Instagram Post, Twitter',
      file: 'event-countdown.mp4',
      vertical: false,
    },
    {
      title: 'Ecosystem Stats',
      description: 'Data-driven kinetic typography. Real stats cascading: 320+ Companies → 63 AI Labs → 61 Fintech → 53 Web3.',
      format: '1280x720 (16:9)',
      duration: '20 seconds',
      useCase: 'LinkedIn, Presentation, Website',
      file: 'ecosystem-stats.mp4',
      vertical: false,
    },
    {
      title: 'Location Flythrough',
      description: 'Map-based journey through London tech hubs. Zooms through Shoreditch → King\'s Cross → Soho, revealing company locations. Ends with 302+ companies as dots.',
      format: '1280x720 (16:9)',
      duration: '40 seconds',
      useCase: 'Website Hero, LinkedIn, Presentation',
      file: 'location-flythrough.mp4',
      vertical: false,
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
          <p style={{ fontSize: '1.1rem', color: '#5A4C55', maxWidth: '700px', margin: '0 auto 16px auto' }}>
            Programmatic videos built from React components. Ready for social, website, and email.
          </p>
          <div style={{
            padding: '12px 24px',
            background: 'rgba(0, 210, 127, 0.1)',
            border: '2px solid #00D27F',
            borderRadius: '4px',
            display: 'inline-block',
            marginTop: '16px',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              color: '#00D27F',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              8 VIDEOS TOTAL // 5 EXPERIMENTAL WITH REAL LONDON ECOSYSTEM DATA (320+ COMPANIES)
            </span>
          </div>
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
                <p style={{ fontSize: '0.95rem', color: '#5A4C55', lineHeight: 1.6, marginBottom: '16px' }}>
                  {video.description}
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  marginBottom: '16px',
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
                <div style={{
                  border: '3px solid #251720',
                  boxShadow: '8px 8px 0px #251720',
                  overflow: 'hidden',
                  background: '#000000',
                  marginBottom: '16px',
                }}>
                  <video
                    controls
                    loop={video.file === 'hero-loop.mp4'}
                    style={{
                      width: '100%',
                      display: 'block',
                      maxWidth: video.vertical ? '400px' : '100%',
                      margin: video.vertical ? '0 auto' : '0',
                    }}
                  >
                    <source src={`/videos/${video.file}`} type="video/mp4" />
                  </video>
                </div>
                <a
                  href={`/videos/${video.file}`}
                  download
                  style={{
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
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'translate(2px, 2px)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
                >
                  DOWNLOAD MP4
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

export default VideoLibrary;
