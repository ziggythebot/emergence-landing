# Remotion Video Setup - Emergence Landing

Three video templates ready to generate social content from your React site.

---

## Quick Start

### Preview Videos (Interactive)
```bash
npm run remotion:preview
```
Opens browser with live preview of all three videos. Scrub timeline, adjust compositions.

### Render Videos

**Twitter/X announcement (16:9 landscape, 6 seconds):**
```bash
npm run video:twitter
# Output: videos/twitter-announcement.mp4
```

**Instagram/TikTok event showcase (9:16 vertical, 15 seconds):**
```bash
npm run video:events
# Output: videos/event-showcase.mp4
```

**Hero loop for website (16:9 landscape, 5 seconds):**
```bash
npm run video:hero
# Output: videos/hero-loop.mp4
```

**Render all three:**
```bash
npm run video:all
```

---

## Video Specs

### TwitterAnnouncement
- **Format:** 1280x720 (16:9 landscape)
- **Duration:** 6 seconds (180 frames @ 30fps)
- **Use case:** Twitter/X posts, LinkedIn
- **Animation:** Title fade in → Date slide → Tagline → CTA pulse
- **Brand:** Emergence colors, protocol aesthetic

### EventShowcase
- **Format:** 1080x1920 (9:16 vertical)
- **Duration:** 15 seconds (450 frames @ 30fps)
- **Use case:** Instagram Reels, TikTok, Stories
- **Animation:** Intro → 4 event cards (90 frames each) → CTA outro
- **Content:** Encode Club, Space, Raum, After Party

### HeroLoop
- **Format:** 1920x1080 (16:9 landscape)
- **Duration:** 5 seconds (150 frames @ 30fps)
- **Use case:** Website hero background, email headers
- **Animation:** Seamless loop - rotating network nodes, pulsing center, floating text
- **Brand:** Full Emergence visual identity

---

## File Structure

```
emergence-landing/
├── remotion/
│   ├── index.ts                        # Root registration
│   ├── Root.tsx                        # Composition definitions
│   └── compositions/
│       ├── TwitterAnnouncement.tsx     # Twitter video
│       ├── EventShowcase.tsx           # Vertical social video
│       └── HeroLoop.tsx                # Website hero loop
├── videos/                             # Rendered output
├── remotion.config.ts                  # Remotion settings
└── package.json                        # Scripts added
```

---

## Customization

### Change Event Content
Edit `remotion/compositions/EventShowcase.tsx`:
```typescript
const events = [
  {
    date: 'APR 28',
    time: '19:00',
    title: 'YOUR EVENT NAME',
    desc: 'Description here.',
  },
  // Add more events...
];
```

### Adjust Timing
In `remotion/Root.tsx`, change `durationInFrames`:
```typescript
<Composition
  id="TwitterAnnouncement"
  durationInFrames={240} // 8 seconds instead of 6
  fps={30}
/>
```

### Add New Composition
1. Create new component in `remotion/compositions/`
2. Register in `remotion/Root.tsx`
3. Add render script to `package.json`

---

## Video Format Templates

**TikTok / Instagram Reels (9:16 vertical):**
```typescript
{ width: 1080, height: 1920, fps: 30, durationInFrames: 450 } // 15 sec
```

**Instagram Story (9:16, shorter):**
```typescript
{ width: 1080, height: 1920, fps: 30, durationInFrames: 90 } // 3 sec
```

**Twitter/LinkedIn (16:9 landscape):**
```typescript
{ width: 1280, height: 720, fps: 30, durationInFrames: 180 } // 6 sec
```

**Square (Instagram Feed):**
```typescript
{ width: 1080, height: 1080, fps: 30, durationInFrames: 270 } // 9 sec
```

---

## Production Rendering

### Local Rendering (Free)
```bash
npm run video:all
# Uses your CPU
# Takes 2-5 minutes per video
```

### Cloud Rendering (Remotion Lambda)
```bash
# Setup (one-time)
npx remotion lambda sites create remotion/index.ts --site-name=emergence

# Render
npx remotion lambda render \
  --function-name=remotion-render-4-0-199 \
  --codec=h264 \
  emergence TwitterAnnouncement videos/twitter.mp4
```
- **Cost:** ~$0.01-0.10 per video
- **Speed:** 30 seconds - 2 minutes
- **Docs:** remotion.dev/docs/lambda

---

## Animation Techniques Used

### Spring Animations
Smooth, physics-based motion:
```typescript
const titleOpacity = spring({
  frame,
  fps: 30,
  from: 0,
  to: 1,
  durationInFrames: 20,
});
```

### Interpolation
Linear or custom easing:
```typescript
const opacity = interpolate(
  frame,
  [30, 50],
  [0, 1],
  { extrapolateRight: 'clamp' }
);
```

### Looping
Seamless repeating animations:
```typescript
const rotation = interpolate(frame, [0, 150], [0, 360]);
// Loops when video loops (5 seconds)
```

---

## Brand Consistency

All videos preserve Emergence design system:

**Colors:**
- **Ink:** `#251720` - Text, borders
- **Emerald:** `#00D27F` - Primary accent
- **Gold:** `#FFD600` - Secondary accent
- **Mint:** `#EAF8F5` - Background

**Typography:**
- **Headers:** Epilogue (900 weight, uppercase)
- **Body:** DM Sans
- **Labels:** JetBrains Mono (uppercase, monospace)

**Visual Style:**
- 3px solid black borders
- 6px offset shadows
- Radial dot grid background (32px)
- Protocol/network aesthetic

---

## Use Cases

### Social Media Launch
1. Render `EventShowcase` for Instagram/TikTok
2. Render `TwitterAnnouncement` for Twitter/X
3. Post with link to emergence.london

### Email Campaign
1. Render `HeroLoop` as header
2. Convert to GIF or embed MP4
3. Use in announcement emails

### Website Integration
1. Render `HeroLoop`
2. Add to homepage hero as background video:
```jsx
<video autoPlay loop muted playsInline>
  <source src="/videos/hero-loop.mp4" type="video/mp4" />
</video>
```

### Ad Creative
1. Render all three formats
2. Upload to Facebook/Instagram Ads Manager
3. Use for paid promotion

---

## Performance Tips

**Faster renders:**
- Lower FPS: `fps: 24` instead of `30`
- Shorter duration: Only render needed length
- Disable effects during dev: Use conditionals

**Smaller file sizes:**
- Target < 50MB for TikTok/Instagram
- Use H.264 codec (default)
- Adjust quality: `--quality=80`

**Better quality:**
- Export at 1080p minimum
- Use 30fps (or 60fps for premium)
- Enable motion blur: `Config.setMotionBlur(true)` in config

---

## Troubleshooting

**Video won't render:**
```bash
# Check Remotion installation
npx remotion --version

# Clear cache
rm -rf node_modules/.remotion
npm run video:twitter
```

**Fonts not loading:**
Add Google Fonts to `<head>` in composition or use local fonts.

**Video looks choppy:**
Increase `fps` or enable motion blur in `remotion.config.ts`.

**File size too large:**
```bash
# Render with lower quality
remotion render remotion/index.ts TwitterAnnouncement output.mp4 --quality=60
```

---

## Next Steps

1. **Preview videos:** `npm run remotion:preview`
2. **Render all formats:** `npm run video:all`
3. **Post to social:** Use rendered MP4s on Twitter, Instagram, TikTok
4. **Add to website:** Embed hero loop as background video
5. **Customize:** Edit event content, timing, colors as needed

---

## Resources

- **Remotion Docs:** remotion.dev/docs
- **Templates:** remotion.dev/templates
- **Discord:** remotion.dev/discord
- **Blog Post:** 32blog.com/en/react/remotion-claude-code-video-generation

---

**Built with Remotion + React. Zero manual video editing.**
