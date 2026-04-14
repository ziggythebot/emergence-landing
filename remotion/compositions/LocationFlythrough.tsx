import { useCurrentFrame, AbsoluteFill, interpolate, Easing, staticFile } from 'remotion';
import { Video } from '@remotion/media';

export const LocationFlythrough: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // London neighborhoods with real companies
  const locations = [
    {
      name: 'SHOREDITCH',
      coords: { x: 520, y: 340 },
      companies: [
        { name: 'Monzo', color: '#FF6B9D' },
        { name: 'Wise', color: '#00D27F' },
        { name: 'Entrepreneur First', color: '#4D9FFF' },
      ],
      zoom: { start: 90, peak: 300 },
    },
    {
      name: 'KING\'S CROSS',
      coords: { x: 450, y: 280 },
      companies: [
        { name: 'DeepMind', color: '#00D27F' },
        { name: 'Isomorphic Labs', color: '#00D27F' },
        { name: 'Wayve', color: '#00D27F' },
      ],
      zoom: { start: 360, peak: 570 },
    },
    {
      name: 'SOHO',
      coords: { x: 400, y: 380 },
      companies: [
        { name: 'Seedcamp', color: '#4D9FFF' },
        { name: 'Cohere', color: '#00D27F' },
        { name: 'Felix Capital', color: '#4D9FFF' },
      ],
      zoom: { start: 630, peak: 840 },
    },
  ];

  // Get current location based on frame
  const getCurrentLocation = () => {
    for (let i = locations.length - 1; i >= 0; i--) {
      if (frame >= locations[i].zoom.start) {
        return { location: locations[i], index: i };
      }
    }
    return { location: locations[0], index: 0 };
  };

  const { location: currentLocation, index: currentIndex } = getCurrentLocation();

  // Camera zoom and pan
  const isZoomedOut = frame < 60 || frame > 900;
  const zoomLevel = isZoomedOut
    ? interpolate(frame, [0, 60, 900, 960], [0.3, 1, 1, 0.3], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      })
    : interpolate(
        frame,
        [
          currentLocation.zoom.start,
          currentLocation.zoom.start + 60,
          currentLocation.zoom.peak - 60,
          currentLocation.zoom.peak,
        ],
        [1, 3, 3, 1],
        {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        }
      );

  const cameraX = interpolate(
    frame,
    [0, 60, ...locations.flatMap((loc) => [loc.zoom.start, loc.zoom.peak]), 900, 960],
    [640, 640, ...locations.flatMap((loc) => [loc.coords.x, loc.coords.x]), 640, 640],
    {
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }
  );

  const cameraY = interpolate(
    frame,
    [0, 60, ...locations.flatMap((loc) => [loc.zoom.start, loc.zoom.peak]), 900, 960],
    [360, 360, ...locations.flatMap((loc) => [loc.coords.y, loc.coords.y]), 360, 360],
    {
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }
  );

  // Title animations
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
  const titleExit = interpolate(frame, [30, 60], [1, 0], { extrapolateRight: 'clamp' });

  const finalOpacity = interpolate(frame, [960, 1020], [0, 1], { extrapolateRight: 'clamp' });

  // All 302+ companies as dots
  const allCompanyDots = Array.from({ length: 302 }).map((_, i) => ({
    x: 200 + (i * 37) % 880,
    y: 150 + Math.floor((i * 37) / 880) * 45,
    delay: i * 2,
  }));

  return (
    <AbsoluteFill
      style={{
        fontFamily: "'Epilogue', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Real London business district video background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 1,
        }}
      >
        <Video
          src={staticFile('footage/london-business-district.mp4')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(2px) brightness(1.1)',
          }}
          loop
          muted
          playbackRate={1.2}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(229, 244, 239, 0.25) 0%, rgba(242, 253, 251, 0.2) 50%, rgba(255, 255, 255, 0.3) 100%)',
          }}
        />
      </div>
      {/* Initial title */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          opacity: titleOpacity * titleExit,
          zIndex: 100,
        }}
      >
        <h1
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '5rem',
            fontWeight: 900,
            color: '#251720',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: '24px',
          }}
        >
          LONDON'S ECOSYSTEM
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#00D27F',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          A FLYTHROUGH
        </p>
      </div>

      {/* Map view */}
      <div
        style={{
          position: 'absolute',
          width: '1280px',
          height: '720px',
          transform: `translate(${640 - cameraX}px, ${360 - cameraY}px) scale(${zoomLevel})`,
          transformOrigin: `${cameraX}px ${cameraY}px`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Base map (simplified London grid) */}
        <svg
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.15,
          }}
          viewBox="0 0 1280 720"
        >
          {/* Thames river curve */}
          <path
            d="M 100 500 Q 400 450, 700 480 T 1180 450"
            stroke="#4D9FFF"
            strokeWidth="40"
            fill="none"
            opacity="0.3"
          />

          {/* Street grid */}
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={`grid-${i}`}>
              <line
                x1={i * 64}
                y1="0"
                x2={i * 64}
                y2="720"
                stroke="#251720"
                strokeWidth="1"
                opacity="0.2"
              />
              <line
                x1="0"
                y1={i * 36}
                x2="1280"
                y2={i * 36}
                stroke="#251720"
                strokeWidth="1"
                opacity="0.2"
              />
            </g>
          ))}
        </svg>

        {/* Location zones */}
        {locations.map((loc, i) => {
          const isActive =
            frame >= loc.zoom.start && frame < (locations[i + 1]?.zoom.start || 900);
          const zoneOpacity = isActive ? 0.2 : 0.05;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: loc.coords.x - 100,
                top: loc.coords.y - 100,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: '#00D27F',
                opacity: zoneOpacity,
                transition: 'opacity 0.5s',
              }}
            />
          );
        })}

        {/* Company markers per location */}
        {locations.map((loc, locIndex) => {
          const isZoomedIn =
            frame >= loc.zoom.start + 60 && frame < loc.zoom.peak - 60;
          const markersOpacity = isZoomedIn ? 1 : 0;

          return (
            <div key={`markers-${locIndex}`}>
              {loc.companies.map((company, i) => {
                const angle = (i / loc.companies.length) * Math.PI * 2;
                const radius = 60;
                const x = loc.coords.x + Math.cos(angle) * radius;
                const y = loc.coords.y + Math.sin(angle) * radius;

                const delay = (loc.zoom.start + 60 + i * 20);
                const opacity = interpolate(
                  frame,
                  [delay, delay + 20],
                  [0, markersOpacity],
                  { extrapolateRight: 'clamp' }
                );

                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: x,
                      top: y,
                      transform: 'translate(-50%, -50%)',
                      opacity,
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: company.color,
                        border: '2px solid #251720',
                        boxShadow: `0 0 20px ${company.color}80`,
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '24px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#251720',
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '4px 8px',
                        border: '2px solid #251720',
                      }}
                    >
                      {company.name}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Location labels */}
        {locations.map((loc, i) => {
          const labelOpacity = interpolate(
            frame,
            [loc.zoom.start, loc.zoom.start + 30, loc.zoom.peak - 30, loc.zoom.peak],
            [0, 1, 1, 0],
            { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
          );

          return (
            <div
              key={`label-${i}`}
              style={{
                position: 'absolute',
                left: loc.coords.x,
                top: loc.coords.y - 120,
                transform: 'translateX(-50%)',
                opacity: labelOpacity,
              }}
            >
              <div
                style={{
                  fontFamily: "'Epilogue', sans-serif",
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#251720',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '12px 32px',
                  border: '3px solid #251720',
                  boxShadow: '4px 4px 0px #251720',
                  whiteSpace: 'nowrap',
                }}
              >
                {loc.name}
              </div>
            </div>
          );
        })}

        {/* Final: All 302 companies as dots */}
        {frame > 900 &&
          allCompanyDots.map((dot, i) => {
            const dotOpacity = interpolate(
              frame,
              [900 + dot.delay, 900 + dot.delay + 20],
              [0, 1],
              { extrapolateRight: 'clamp' }
            );

            return (
              <div
                key={`dot-${i}`}
                style={{
                  position: 'absolute',
                  left: dot.x,
                  top: dot.y,
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#00D27F',
                  opacity: dotOpacity,
                  boxShadow: '0 0 4px #00D27F',
                }}
              />
            );
          })}
      </div>

      {/* Final message */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          opacity: finalOpacity,
          zIndex: 100,
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
            marginBottom: '24px',
          }}
        >
          320+ COMPANIES
        </div>
        <div
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '4rem',
            fontWeight: 900,
            color: '#251720',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          EMERGENCE
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#251720',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          Q3 2026 // LONDON
        </div>
      </div>
    </AbsoluteFill>
  );
};
