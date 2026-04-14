import { useCurrentFrame, AbsoluteFill, spring, interpolate } from 'remotion';

export const TwitterAnnouncement: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in title
  const titleOpacity = spring({
    frame,
    fps: 30,
    from: 0,
    to: 1,
    durationInFrames: 20,
  });

  // Slide in date
  const dateY = spring({
    frame: frame - 15,
    fps: 30,
    from: 50,
    to: 0,
    durationInFrames: 20,
  });

  // Fade in tagline
  const taglineOpacity = interpolate(
    frame,
    [30, 50],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  // Pulse CTA at end
  const ctaScale = interpolate(
    frame,
    [120, 135, 150, 165, 180],
    [1, 1.05, 1, 1.05, 1],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
        backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        backgroundPosition: '-1px -1px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '64px',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Main title */}
      <h1
        style={{
          fontFamily: "'Epilogue', sans-serif",
          fontSize: '4.5rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          color: '#251720',
          opacity: titleOpacity,
          textAlign: 'center',
          margin: 0,
          marginBottom: '24px',
        }}
      >
        EMERGENCE
      </h1>

      {/* Date */}
      <div
        style={{
          transform: `translateY(${dateY}px)`,
          opacity: frame > 15 ? 1 : 0,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#00D27F',
            letterSpacing: '0.1em',
          }}
        >
          Q3 2026 // LONDON
        </span>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: '1.75rem',
          color: '#251720',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '48px 0',
          opacity: taglineOpacity,
          lineHeight: 1.4,
        }}
      >
        London's tech ecosystem, self-aware. Not a conference. A distributed protocol for the city to self-organize.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: '32px',
          transform: `scale(${ctaScale})`,
          opacity: frame > 90 ? 1 : 0,
        }}
      >
        <div
          style={{
            padding: '20px 48px',
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#251720',
            background: '#00D27F',
            border: '3px solid #251720',
            boxShadow: '6px 6px 0px #251720',
          }}
        >
          EMERGENCE.LONDON
        </div>
      </div>

      {/* Network node decoration */}
      <svg
        style={{
          position: 'absolute',
          top: '32px',
          left: '32px',
          opacity: 0.3,
        }}
        width="120"
        height="120"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="#00D27F" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#00D27F" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#251720" strokeWidth="1" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#251720" strokeWidth="1" />
      </svg>
    </AbsoluteFill>
  );
};
