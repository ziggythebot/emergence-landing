import { useCurrentFrame, AbsoluteFill, spring } from 'remotion';

export const CaptionsOnly: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 29.97;

  // Caption timing (convert seconds to frames)
  const caption1Start = 5 * fps;
  const caption1End = 12 * fps;
  const caption2Start = 15 * fps;
  const caption2End = 25 * fps;
  const caption3Start = 27 * fps;
  const caption3End = 35 * fps;
  const caption4Start = 37 * fps;
  const caption4End = 43 * fps;

  // Smooth spring animations for fade in/out
  const caption1FadeIn = spring({
    frame: frame - caption1Start,
    fps,
    config: { damping: 200 },
  });
  const caption1FadeOut = spring({
    frame: frame - (caption1End - 20),
    fps,
    config: { damping: 200 },
    reverse: true,
  });
  const caption1Opacity = Math.min(caption1FadeIn, caption1FadeOut);

  const caption2FadeIn = spring({
    frame: frame - caption2Start,
    fps,
    config: { damping: 200 },
  });
  const caption2FadeOut = spring({
    frame: frame - (caption2End - 20),
    fps,
    config: { damping: 200 },
    reverse: true,
  });
  const caption2Opacity = Math.min(caption2FadeIn, caption2FadeOut);

  const caption3FadeIn = spring({
    frame: frame - caption3Start,
    fps,
    config: { damping: 200 },
  });
  const caption3FadeOut = spring({
    frame: frame - (caption3End - 20),
    fps,
    config: { damping: 200 },
    reverse: true,
  });
  const caption3Opacity = Math.min(caption3FadeIn, caption3FadeOut);

  const caption4FadeIn = spring({
    frame: frame - caption4Start,
    fps,
    config: { damping: 200 },
  });
  const caption4FadeOut = spring({
    frame: frame - (caption4End - 20),
    fps,
    config: { damping: 200 },
    reverse: true,
  });
  const caption4Opacity = Math.min(caption4FadeIn, caption4FadeOut);

  const baseTextStyle = {
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: 900,
    textAlign: 'center' as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    padding: '20px 40px',
    position: 'absolute' as const,
    bottom: '80px',
    left: 0,
    right: 0,
    textShadow: `
      0 0 30px rgba(0, 0, 0, 0.95),
      0 4px 20px rgba(0, 0, 0, 0.9),
      4px 4px 0 rgba(0, 0, 0, 1)
    `,
  };

  return (
    <AbsoluteFill style={{ backgroundColor: 'transparent' }}>
      {/* Caption overlays - positioned at bottom */}
      <AbsoluteFill style={{ pointerEvents: 'none' }}>
        {/* Caption 1 */}
        {frame >= caption1Start && frame <= caption1End && (
          <div
            style={{
              ...baseTextStyle,
              fontSize: '56px',
              opacity: caption1Opacity,
              color: '#FFFFFF',
            }}
          >
            A CITY FINDING ITS VOICE.
          </div>
        )}

        {/* Caption 2 */}
        {frame >= caption2Start && frame <= caption2End && (
          <div
            style={{
              ...baseTextStyle,
              fontSize: '80px',
              opacity: caption2Opacity,
              color: '#00D27F',
            }}
          >
            EMERGENCE.
            <br />
            <span style={{ color: '#FFFFFF' }}>LONDON.</span>
          </div>
        )}

        {/* Caption 3 */}
        {frame >= caption3Start && frame <= caption3End && (
          <div
            style={{
              ...baseTextStyle,
              fontSize: '58px',
              opacity: caption3Opacity,
              color: '#FFFFFF',
            }}
          >
            <span style={{ color: '#00D27F' }}>28-30 APRIL</span> 2026
          </div>
        )}

        {/* Caption 4 */}
        {frame >= caption4Start && frame <= caption4End && (
          <div
            style={{
              ...baseTextStyle,
              fontSize: '72px',
              opacity: caption4Opacity,
              color: '#00D27F',
            }}
          >
            GET INVOLVED.
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
