import { useCurrentFrame, AbsoluteFill, interpolate, spring, staticFile } from 'remotion';
import { Video } from '@remotion/media';

export const EventCountdown: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Calculate days until event
  const eventDate = new Date('2026-04-28');
  const today = new Date('2026-03-15');
  const daysUntil = Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Animation phases
  const phase1Opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
  const phase1Exit = interpolate(frame, [150, 180], [1, 0], { extrapolateRight: 'clamp' });

  const phase2Opacity = interpolate(frame, [180, 210], [0, 1], { extrapolateRight: 'clamp' });
  const phase2Exit = interpolate(frame, [360, 390], [1, 0], { extrapolateRight: 'clamp' });

  const finalOpacity = interpolate(frame, [390, 420], [0, 1], { extrapolateRight: 'clamp' });

  // Number animation with spring
  const numberScale = spring({
    frame: frame % 60,
    fps,
    config: {
      damping: 20,
    },
  });

  // London landmarks silhouettes rotation
  const landmarksRotation = interpolate(frame, [0, 450], [0, 360]);

  // Pulse effect for final frame
  const pulseScale = interpolate(
    frame % 90,
    [0, 45, 90],
    [1, 1.05, 1]
  );

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Epilogue', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Real city night video background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Video
          src={staticFile('footage/city-night-aerial.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.5)',
          }}
          loop
          muted
          playbackRate={1.25}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(37, 23, 32, 0.3) 0%, rgba(58, 42, 52, 0.2) 50%, rgba(37, 23, 32, 0.3) 100%)',
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(rgba(255, 214, 0, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '-1px -1px',
        }}
      />

      {/* Phase 1: Days countdown */}
      <div
        style={{
          opacity: phase1Opacity * phase1Exit,
          transform: `scale(${numberScale})`,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12rem',
            fontWeight: 900,
            color: '#FFD600',
            lineHeight: 0.9,
            textShadow: '0 0 60px rgba(255, 214, 0, 0.6)',
            marginBottom: '32px',
          }}
        >
          {daysUntil}
        </div>
        <div
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '3rem',
            fontWeight: 700,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          DAYS
        </div>
      </div>

      {/* Phase 2: Date reveal */}
      <div
        style={{
          opacity: phase2Opacity * phase2Exit,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#00D27F',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            marginBottom: '48px',
          }}
        >
          SAVE THE DATE
        </div>
        <div
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '5rem',
            fontWeight: 900,
            color: '#FFD600',
            lineHeight: 1.1,
            marginBottom: '24px',
            textShadow: '0 0 40px rgba(255, 214, 0, 0.4)',
          }}
        >
          Q3
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          2026
        </div>
      </div>

      {/* Final: Event branding */}
      <div
        style={{
          opacity: finalOpacity,
          textAlign: 'center',
          transform: `scale(${pulseScale})`,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#00D27F',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            marginBottom: '32px',
          }}
        >
          Q3 2026
        </div>

        <div
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '6rem',
            fontWeight: 900,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            marginBottom: '32px',
            textShadow: '0 0 60px rgba(0, 210, 127, 0.4)',
          }}
        >
          EMERGENCE
        </div>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#FFD600',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
          }}
        >
          LONDON
        </div>

        {/* Bottom badge */}
        <div
          style={{
            marginTop: '64px',
            padding: '20px 48px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '3px solid #FFD600',
            boxShadow: '0 0 40px rgba(255, 214, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            EMERGENCE.LONDON
          </div>
        </div>
      </div>

      {/* Corner accent elements */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120px',
          height: '120px',
          borderTop: '4px solid #00D27F',
          borderLeft: '4px solid #00D27F',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '120px',
          borderTop: '4px solid #FFD600',
          borderRight: '4px solid #FFD600',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '120px',
          height: '120px',
          borderBottom: '4px solid #FFD600',
          borderLeft: '4px solid #FFD600',
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '120px',
          height: '120px',
          borderBottom: '4px solid #00D27F',
          borderRight: '4px solid #00D27F',
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};
