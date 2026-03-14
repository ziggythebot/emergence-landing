import { useCurrentFrame, AbsoluteFill, interpolate } from 'remotion';

export const HeroLoop: React.FC = () => {
  const frame = useCurrentFrame();

  // Continuous rotation for network nodes
  const rotation = interpolate(frame, [0, 150], [0, 360]);

  // Pulse effect for center node
  const pulseScale = interpolate(
    frame % 60,
    [0, 30, 60],
    [1, 1.2, 1]
  );

  // Opacity pulse for connections
  const connectionOpacity = interpolate(
    frame % 90,
    [0, 45, 90],
    [0.3, 0.8, 0.3]
  );

  // Floating animation for text
  const textY = interpolate(
    frame % 120,
    [0, 60, 120],
    [0, -10, 0]
  );

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
        backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        backgroundPosition: '-1px -1px',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Network visualization in background */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.15,
        }}
        viewBox="0 0 1920 1080"
      >
        {/* Rotating outer ring */}
        <g transform={`translate(960, 540) rotate(${rotation})`}>
          <circle cx="0" cy="0" r="400" fill="none" stroke="#00D27F" strokeWidth="2" />
          <circle cx="0" cy="-400" r="16" fill="#00D27F" />
          <circle cx="283" cy="-283" r="16" fill="#00D27F" />
          <circle cx="400" cy="0" r="16" fill="#00D27F" />
          <circle cx="283" cy="283" r="16" fill="#00D27F" />
          <circle cx="0" cy="400" r="16" fill="#00D27F" />
          <circle cx="-283" cy="283" r="16" fill="#00D27F" />
          <circle cx="-400" cy="0" r="16" fill="#00D27F" />
          <circle cx="-283" cy="-283" r="16" fill="#00D27F" />
        </g>

        {/* Connection lines */}
        <g opacity={connectionOpacity}>
          <line x1="960" y1="140" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="1243" y1="257" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="1360" y1="540" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="1243" y1="823" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="960" y1="940" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="677" y1="823" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="560" y1="540" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
          <line x1="677" y1="257" x2="960" y2="540" stroke="#251720" strokeWidth="1" />
        </g>

        {/* Pulsing center node */}
        <g transform={`translate(960, 540) scale(${pulseScale})`}>
          <circle cx="0" cy="0" r="24" fill="#00D27F" />
          <circle cx="0" cy="0" r="16" fill="#FFD600" />
        </g>
      </svg>

      {/* Content overlay */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '128px',
        }}
      >
        <div style={{ transform: `translateY(${textY}px)` }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#00D27F',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            APRIL 28-30, 2026 // LONDON
          </span>

          <h1
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '6rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.05em',
              color: '#251720',
              textAlign: 'center',
              margin: 0,
              marginBottom: '48px',
              lineHeight: 0.9,
            }}
          >
            EMERGENCE
          </h1>

          <p
            style={{
              fontSize: '2rem',
              color: '#251720',
              textAlign: 'center',
              maxWidth: '1000px',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            London's tech ecosystem, self-aware.
          </p>
        </div>
      </AbsoluteFill>

      {/* Bottom badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            padding: '16px 40px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#251720',
            background: '#FFFFFF',
            border: '3px solid #251720',
            boxShadow: '4px 4px 0px #251720',
          }}
        >
          EMERGENCE.LONDON
        </div>
      </div>
    </AbsoluteFill>
  );
};
