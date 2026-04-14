import { useCurrentFrame, AbsoluteFill, interpolate, spring } from 'remotion';

export const EcosystemStats: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Stats from real CSV data
  const stats = [
    { value: '320+', label: 'COMPANIES', color: '#FFD600', delay: 0 },
    { value: '63', label: 'AI LABS', color: '#00D27F', delay: 180 },
    { value: '61', label: 'FINTECH', color: '#FF6B9D', delay: 360 },
    { value: '53', label: 'WEB3', color: '#A855F7', delay: 480 },
  ];

  // Network visualization in background
  const networkOpacity = interpolate(frame, [0, 60], [0, 0.15], { extrapolateRight: 'clamp' });
  const networkRotation = interpolate(frame, [0, 600], [0, 180]);

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F2FDFB 50%, #EAF8F5 100%)',
        fontFamily: "'Epilogue', sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background network */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: networkOpacity,
        }}
      >
        <svg
          style={{
            width: '100%',
            height: '100%',
            transform: `rotate(${networkRotation}deg)`,
          }}
          viewBox="0 0 1280 720"
        >
          {/* Grid of nodes */}
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 5 }).map((_, j) => {
              const x = 160 + i * 140;
              const y = 144 + j * 144;
              const delay = (i + j) * 10;
              const pulse = interpolate(
                (frame + delay) % 120,
                [0, 60, 120],
                [0.3, 1, 0.3]
              );

              return (
                <g key={`${i}-${j}`}>
                  {/* Connection to right neighbor */}
                  {i < 7 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x + 140}
                      y2={y}
                      stroke="#251720"
                      strokeWidth="2"
                      opacity={pulse * 0.3}
                    />
                  )}
                  {/* Connection to bottom neighbor */}
                  {j < 4 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={y + 144}
                      stroke="#251720"
                      strokeWidth="2"
                      opacity={pulse * 0.3}
                    />
                  )}
                  {/* Node */}
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#251720"
                    opacity={pulse}
                  />
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '-1px -1px',
          opacity: 0.05,
        }}
      />

      {/* Stats cascade */}
      <AbsoluteFill
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {stats.map((stat, index) => {
          const startFrame = stat.delay;
          const endFrame = startFrame + 120;

          const opacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            { extrapolateRight: 'clamp' }
          );

          const scale = spring({
            frame: frame - startFrame,
            fps,
            config: {
              damping: 18,
            },
          });

          const slideY = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [50, 0],
            { extrapolateRight: 'clamp' }
          );

          // Number count-up animation
          const countUpProgress = interpolate(
            frame,
            [startFrame, startFrame + 60],
            [0, 1],
            { extrapolateRight: 'clamp' }
          );

          // Exit animation for previous stat
          const exitOpacity =
            index < stats.length - 1
              ? interpolate(
                  frame,
                  [stats[index + 1].delay - 30, stats[index + 1].delay],
                  [1, 0],
                  { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' }
                )
              : 1;

          const finalOpacity = opacity * exitOpacity;

          // Parse numeric value for count-up
          const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10);
          const currentValue = Math.floor(numericValue * countUpProgress);
          const displayValue = stat.value.includes('+')
            ? `${currentValue}+`
            : currentValue.toString();

          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                opacity: finalOpacity,
                transform: `translateY(${slideY}px) scale(${scale})`,
                textAlign: 'center',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12rem',
                  fontWeight: 900,
                  color: stat.color,
                  lineHeight: 0.9,
                  marginBottom: '32px',
                  textShadow: `0 0 80px ${stat.color}60`,
                  letterSpacing: '-0.05em',
                }}
              >
                {displayValue}
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "'Epilogue', sans-serif",
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: '#251720',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '48px',
                }}
              >
                {stat.label}
              </div>

              {/* Accent bar */}
              <div
                style={{
                  width: '400px',
                  height: '8px',
                  background: stat.color,
                  margin: '0 auto',
                  boxShadow: `0 0 30px ${stat.color}80`,
                }}
              />
            </div>
          );
        })}

        {/* Final branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: interpolate(frame, [540, 570], [0, 1], { extrapolateRight: 'clamp' }),
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Epilogue', sans-serif",
              fontSize: '3rem',
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
              color: '#00D27F',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Q3 2026 // LONDON
          </div>
          <div
            style={{
              marginTop: '32px',
              padding: '16px 40px',
              background: '#FFFFFF',
              border: '3px solid #251720',
              boxShadow: '4px 4px 0px #251720',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#251720',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              EMERGENCE.LONDON
            </div>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
