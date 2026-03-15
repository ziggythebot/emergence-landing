# Experimental Remotion Videos for Emergence

Built on March 15, 2026. All videos use real data from the London Maxxxing ecosystem CSV (320+ companies).

## Videos Created

### 1. London Skyline + Data Overlay
**File:** `public/videos/london-skyline-data.mp4`
**Duration:** 30 seconds (900 frames @ 30fps)
**Format:** 1280x720 (16:9)
**Size:** 5.0 MB

**Features:**
- Geometric London skyline silhouette (The Shard, Gherkin, buildings)
- 15 real company markers from CSV (DeepMind, Anthropic, Synthesia, Revolut, Monzo, Wise, etc.)
- Animated network connections between companies
- Stats overlay: "320+ Companies", "63 AI Labs", "61 Fintech Unicorns"
- Emergence branding and date reveal

**Use Cases:** LinkedIn hero, Twitter announcement, website background

---

### 2. Animated Network Graph
**File:** `public/videos/animated-network-graph.mp4`
**Duration:** 45 seconds (1350 frames @ 30fps)
**Format:** 1280x720 (16:9)
**Size:** 4.1 MB

**Features:**
- Full ecosystem network visualization
- 30 real company names appearing in tiers:
  - **Tier 1 (Center):** EMERGENCE event node
  - **Tier 2:** DeepMind, Anthropic, Revolut, Balderton
  - **Tier 3:** Synthesia, Wayve, Stability AI, Monzo, Wise, Stripe, Index, Atomico
  - **Tier 4:** Extended network (20+ companies including Cohere, Faculty AI, GoCardless, Octopus, Accel, Web3 companies)
- Color-coded by category: AI (green), Fintech (pink), VC (blue), Web3 (purple), Event (yellow)
- Animated connection lines showing ecosystem relationships
- Spring animations for node appearances
- Pulsing rings around center node

**Use Cases:** Presentation slides, LinkedIn showcase, website explainer

---

### 3. Event Countdown
**File:** `public/videos/event-countdown.mp4`
**Duration:** 15 seconds (450 frames @ 30fps)
**Format:** 1080x1080 (1:1 square)
**Size:** 2.6 MB

**Features:**
- Three-phase animation:
  1. Days countdown: "44 DAYS" (calculated from March 15 to April 28)
  2. Date reveal: "APRIL 28-30, 2026"
  3. Final branding: "EMERGENCE // LONDON"
- Dark theme (#251720 background)
- Rotating London landmarks silhouettes (Shard, Gherkin) in background
- Kinetic typography with brand colors (#FFD600 yellow, #00D27F green)
- Grid pattern overlay
- Corner accent elements

**Use Cases:** Instagram post, Twitter countdown, social media square format

---

### 4. Ecosystem Stats
**File:** `public/videos/ecosystem-stats.mp4`
**Duration:** 20 seconds (600 frames @ 30fps)
**Format:** 1280x720 (16:9)
**Size:** 3.4 MB

**Features:**
- Data-driven kinetic typography cascade
- Real stats from CSV:
  - **320+** COMPANIES
  - **63** AI LABS
  - **61** FINTECH
  - **53** WEB3
- Count-up number animations
- Color-coded accent bars per category
- Animated background network grid
- Exit/enter transitions between stats

**Use Cases:** LinkedIn announcement, presentation slides, data showcase

---

### 5. Location Flythrough
**File:** `public/videos/location-flythrough.mp4`
**Duration:** 40 seconds (1200 frames @ 30fps)
**Format:** 1280x720 (16:9)
**Size:** 6.0 MB

**Features:**
- Cinematic camera movements through London tech hubs
- Three location stops with company reveals:
  1. **SHOREDITCH** - Monzo, Wise, Entrepreneur First
  2. **KING'S CROSS** - DeepMind, Isomorphic Labs, Wayve
  3. **SOHO** - Seedcamp, Cohere, Felix Capital
- Simplified London map with Thames river
- Zoom in/out transitions with easing
- Final reveal: 302+ companies shown as animated dots
- Location zone highlights

**Use Cases:** Website hero video, LinkedIn showcase, presentation opener

---

## Technical Details

### Data Source
All company data pulled from `/Users/ziggy/londonmaxxxing-repo/data/ecosystem.csv`:
- 320+ total companies
- Categories: AI (63), Fintech (61), Web3 (53), VC (33), Big Tech (48), others
- Includes: name, category, address, coordinates (latitude/longitude), Twitter handles

### Visual Style
All videos match Emergence brand guidelines:
- **Colors:**
  - Primary Green: `#00D27F`
  - Dark Purple: `#251720`
  - Yellow: `#FFD600`
  - Accent Pink: `#FF6B9D`
  - Accent Blue: `#4D9FFF`
- **Typography:**
  - Headings: Epilogue (900 weight)
  - Mono/Labels: JetBrains Mono (700 weight)
  - Body: DM Sans
- **Design System:**
  - 3px solid borders
  - Box shadows for depth
  - Grid/dot pattern backgrounds
  - Kinetic animations with spring physics

### Components
All compositions located in:
```
emergence-landing/remotion/compositions/
├── LondonSkylineData.tsx
├── AnimatedNetworkGraph.tsx
├── EventCountdown.tsx
├── EcosystemStats.tsx
└── LocationFlythrough.tsx
```

Registered in: `remotion/Root.tsx`

### Video Library
Updated: `src/pages/VideoLibrary.jsx`
- All 8 videos now displayed (3 original + 5 experimental)
- Metadata includes format, duration, use cases
- Download links for each MP4
- Responsive grid layout

---

## Rendering Commands

Individual videos:
```bash
npm run remotion:render LondonSkylineData public/videos/london-skyline-data.mp4
npm run remotion:render AnimatedNetworkGraph public/videos/animated-network-graph.mp4
npm run remotion:render EventCountdown public/videos/event-countdown.mp4
npm run remotion:render EcosystemStats public/videos/ecosystem-stats.mp4
npm run remotion:render LocationFlythrough public/videos/location-flythrough.mp4
```

Batch render all:
```bash
npm run video:all
```

Preview in Remotion Studio:
```bash
npm run remotion:preview
```

---

## Updated with Real London Footage (March 15, 2026)

**Three videos now use real London imagery:**
1. **London Skyline Data** - Real London skyline photo background (663KB from Unsplash)
2. **Location Flythrough** - Real aerial London view (505KB from Unsplash)
3. **Event Countdown** - Real London night cityscape (1.1MB from Unsplash)

All images sourced from Unsplash (free to use, no attribution required). Backgrounds are overlaid with semi-transparent gradients to maintain brand colors and text legibility while showing authentic London scenery.

**Source images stored in:** `/public/footage/`
- `london-skyline.jpg` - Shard and modern buildings
- `london-aerial.jpg` - Aerial city view
- `london-night.jpg` - Cityscape at night
- `shoreditch-street.jpg`, `kings-cross.jpg`, `tower-bridge.jpg` (available for future use)

## Next Steps

1. **Deploy to production** - Push to Vercel, videos are already in public/videos/
2. **Share on social** - Download from `/videos/` page and post
3. **A/B test formats** - Try different aspect ratios for Instagram vs LinkedIn
4. **Add audio** - Consider background music or voiceover for longer videos
5. **MapBox integration** - Use real interactive maps instead of simplified SVG for location video
6. **Company logos** - Add actual logos instead of just names (requires licensing/permission)
7. **Video footage upgrade** - Consider replacing static images with time-lapse videos from Pexels/Pixabay

---

## Performance Notes

- Total render time: ~3-4 minutes for all 5 videos
- File sizes optimized (2.6-6.0 MB range)
- H.264 codec for maximum compatibility
- 30fps for smooth playback across all platforms
- Concurrency: 5x parallel rendering

Built using Remotion 4.0.435 + React 19.2.4
