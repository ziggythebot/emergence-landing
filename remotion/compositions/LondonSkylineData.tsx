import { useCurrentFrame, AbsoluteFill, interpolate, Sequence } from 'remotion';

export const LondonSkylineData: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Fade in background
  const bgOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

  // Stats animation timing
  const stat1Opacity = interpolate(frame, [60, 90], [0, 1], { extrapolateRight: 'clamp' });
  const stat2Opacity = interpolate(frame, [120, 150], [0, 1], { extrapolateRight: 'clamp' });
  const stat3Opacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: 'clamp' });

  // Map markers appearing
  const markersProgress = interpolate(frame, [30, 150], [0, 1], { extrapolateRight: 'clamp' });

  // Connection lines animating
  const connectionsOpacity = interpolate(frame, [90, 240], [0, 0.6], { extrapolateRight: 'clamp' });

  // Company locations (real data from CSV - strategic sampling across London)
  const locations = [
    { x: 45, y: 35, name: 'DeepMind', area: 'King\'s Cross' },
    { x: 38, y: 42, name: 'Anthropic', area: 'Cheapside' },
    { x: 52, y: 38, name: 'Synthesia', area: 'Regent\'s Place' },
    { x: 25, y: 45, name: 'Stability AI', area: 'Notting Hill' },
    { x: 42, y: 48, name: 'Revolut', area: 'Canary Wharf' },
    { x: 35, y: 40, name: 'Monzo', area: 'Shoreditch' },
    { x: 40, y: 52, name: 'Stripe', area: 'Cheapside' },
    { x: 48, y: 45, name: 'Wayve', area: 'King\'s Cross' },
    { x: 55, y: 50, name: 'Faculty AI', area: 'Old Street' },
    { x: 30, y: 38, name: 'Balderton', area: 'Britannia St' },
    { x: 50, y: 55, name: 'Index Ventures', area: 'Lower John St' },
    { x: 38, y: 35, name: 'Atomico', area: 'Rathbone St' },
    { x: 60, y: 42, name: 'Octopus', area: 'Holborn' },
    { x: 33, y: 50, name: 'Wise', area: 'Shoreditch' },
    { x: 58, y: 48, name: 'GoCardless', area: 'Goswell Rd' },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #F2FDFB 0%, #EAF8F5 50%, #E5F4EF 100%)',
        fontFamily: "'Epilogue', sans-serif",
      }}
    >
      {/* London skyline silhouette (simplified geometric representation) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          opacity: bgOpacity,
        }}
      >
        {/* The Shard */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '60%',
            width: '0',
            height: '0',
            borderLeft: '40px solid transparent',
            borderRight: '40px solid transparent',
            borderBottom: '300px solid #251720',
            opacity: 0.3,
          }}
        />

        {/* Gherkin */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '45%',
            width: '60px',
            height: '250px',
            background: 'linear-gradient(to top, #251720, rgba(37, 23, 32, 0.4))',
            borderRadius: '50% 50% 0 0',
            opacity: 0.3,
          }}
        />

        {/* Generic buildings */}
        {[20, 30, 35, 50, 55, 70, 75, 80].map((left, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: 0,
              left: `${left}%`,
              width: `${40 + i * 10}px`,
              height: `${120 + i * 20}px`,
              background: '#251720',
              opacity: 0.25,
            }}
          />
        ))}
      </div>

      {/* Network connections */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: connectionsOpacity,
        }}
        viewBox="0 0 1280 720"
      >
        {locations.slice(0, Math.floor(locations.length * markersProgress)).map((loc, i) =>
          locations.slice(i + 1).map((target, j) => {
            if (Math.random() > 0.7) { // Random connections
              return (
                <line
                  key={`${i}-${j}`}
                  x1={loc.x * 12.8}
                  y1={loc.y * 7.2}
                  x2={target.x * 12.8}
                  y2={target.y * 7.2}
                  stroke="#00D27F"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              );
            }
            return null;
          })
        )}
      </svg>

      {/* Company markers */}
      {locations.slice(0, Math.floor(locations.length * markersProgress)).map((loc, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${loc.x}%`,
            top: `${loc.y}%`,
            transform: 'translate(-50%, -50%)',
            animation: `pulse ${1.5 + i * 0.1}s ease-in-out infinite`,
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#00D27F',
              border: '3px solid #251720',
              boxShadow: '0 0 20px rgba(0, 210, 127, 0.6)',
            }}
          />
        </div>
      ))}

      {/* Stats overlay */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '80px 128px',
        }}
      >
        {/* Title */}
        <div
          style={{
            opacity: bgOpacity,
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <h1
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '4rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.03em',
              color: '#251720',
              margin: 0,
              marginBottom: '24px',
            }}
          >
            LONDON'S TECH ECOSYSTEM
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#00D27F',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            APRIL 28-30, 2026
          </p>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            marginTop: 'auto',
          }}
        >
          <StatBox
            value="320+"
            label="COMPANIES"
            opacity={stat1Opacity}
          />
          <StatBox
            value="63"
            label="AI LABS"
            opacity={stat2Opacity}
          />
          <StatBox
            value="61"
            label="FINTECH UNICORNS"
            opacity={stat3Opacity}
          />
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: '60px',
            opacity: interpolate(frame, [240, 270], [0, 1], { extrapolateRight: 'clamp' }),
          }}
        >
          <div
            style={{
              padding: '20px 48px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.5rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#251720',
              background: '#FFFFFF',
              border: '4px solid #251720',
              boxShadow: '6px 6px 0px #251720',
            }}
          >
            EMERGENCE.LONDON
          </div>
        </div>
      </AbsoluteFill>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }
      `}</style>
    </AbsoluteFill>
  );
};

const StatBox: React.FC<{ value: string; label: string; opacity: number }> = ({
  value,
  label,
  opacity,
}) => (
  <div
    style={{
      opacity,
      background: 'rgba(255, 255, 255, 0.95)',
      border: '3px solid #251720',
      padding: '32px',
      boxShadow: '4px 4px 0px #251720',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '3.5rem',
        fontWeight: 900,
        color: '#00D27F',
        marginBottom: '12px',
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: "'Epilogue', sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        color: '#251720',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}
    >
      {label}
    </div>
  </div>
);
