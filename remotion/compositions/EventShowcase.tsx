import { useCurrentFrame, AbsoluteFill, spring, interpolate } from 'remotion';

const events = [
  {
    date: 'APR 28',
    time: '19:00',
    title: 'ENCODE CLUB: PROTOCOL BUILDERS',
    desc: 'Web3 developer community meetup.',
  },
  {
    date: 'APR 29',
    time: '18:00',
    title: 'SPACE: AI LABS MIXER',
    desc: 'AI researcher networking.',
  },
  {
    date: 'APR 29',
    time: '20:00',
    title: 'RAUM: FINTECH FOUNDERS',
    desc: 'Build the future of finance.',
  },
  {
    date: 'APR 30',
    time: '21:00',
    title: 'AFTER PARTY @ SECRET LOCATION',
    desc: 'Network closing celebration.',
  },
];

export const EventShowcase: React.FC = () => {
  const frame = useCurrentFrame();

  // Intro animation - title slide (0-60 frames)
  const introOpacity = interpolate(frame, [0, 15, 45, 60], [0, 1, 1, 0]);
  const introScale = spring({
    frame,
    fps: 30,
    from: 0.8,
    to: 1,
    durationInFrames: 20,
  });

  // Event cards animation (60-420 frames)
  // Each event shows for 90 frames
  const currentEventIndex = Math.floor((frame - 60) / 90);
  const eventFrame = (frame - 60) % 90;

  const cardY = spring({
    frame: eventFrame,
    fps: 30,
    from: 100,
    to: 0,
    durationInFrames: 20,
  });

  const cardOpacity = interpolate(
    eventFrame,
    [0, 15, 75, 90],
    [0, 1, 1, 0],
    { extrapolateRight: 'clamp' }
  );

  // Outro animation (420-450 frames)
  const outroOpacity = interpolate(frame, [420, 435], [0, 1]);

  const showIntro = frame < 60;
  const showEvents = frame >= 60 && frame < 420;
  const showOutro = frame >= 420;

  const currentEvent = events[Math.min(currentEventIndex, events.length - 1)];

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
      {/* Intro */}
      {showIntro && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '64px',
            opacity: introOpacity,
            transform: `scale(${introScale})`,
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.2rem',
              color: '#00D27F',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            APRIL 28-30, 2026
          </span>
          <h1
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '4rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#251720',
              textAlign: 'center',
              margin: 0,
              marginBottom: '32px',
            }}
          >
            EMERGENCE
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              color: '#251720',
              textAlign: 'center',
              maxWidth: '600px',
              lineHeight: 1.4,
            }}
          >
            Three days. Distributed nodes. One protocol.
          </p>
        </AbsoluteFill>
      )}

      {/* Event cards */}
      {showEvents && currentEvent && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 48px',
            opacity: cardOpacity,
            transform: `translateY(${cardY}px)`,
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              border: '3px solid #251720',
              boxShadow: '8px 8px 0px #251720',
              padding: '48px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '32px',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#00D27F',
                }}
              >
                {currentEvent.date}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.5rem',
                  color: '#5A4C55',
                }}
              >
                {currentEvent.time}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Epilogue', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#251720',
                margin: '0 0 24px 0',
                lineHeight: 1.2,
              }}
            >
              {currentEvent.title}
            </h2>
            <p
              style={{
                fontSize: '1.5rem',
                color: '#5A4C55',
                margin: 0,
              }}
            >
              {currentEvent.desc}
            </p>
          </div>

          <div
            style={{
              marginTop: '48px',
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1rem',
                color: '#5A4C55',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Event {currentEventIndex + 1} of {events.length}
            </span>
          </div>
        </AbsoluteFill>
      )}

      {/* Outro */}
      {showOutro && (
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '64px',
            opacity: outroOpacity,
          }}
        >
          <h2
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '3rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#251720',
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            JOIN THE NETWORK
          </h2>
          <div
            style={{
              padding: '24px 56px',
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '2rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#251720',
              background: '#00D27F',
              border: '3px solid #251720',
              boxShadow: '8px 8px 0px #251720',
            }}
          >
            EMERGENCE.LONDON
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
