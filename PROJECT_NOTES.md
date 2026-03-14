# Emergence Landing - Project Notes

## Project Overview
Landing page for Emergence 2026 - London Tech Week distributed event (April 28-30, 2026).

**Live:** emergence.london
**GitHub:** ziggythebot/emergence-landing
**Tech Stack:** Vite + React + React Router + Remotion
**Deployment:** Vercel
**Video Content:** Remotion programmatic videos (Twitter, Instagram/TikTok, website hero)

---

## Design System

### Brand Colors
- **Ink:** `#251720` - Primary text, borders
- **Emerald:** `#00D27F` - Primary accent, CTAs
- **Gold:** `#FFD600` - Secondary accent
- **Mint:** `#EAF8F5` - Background tint
- **Surface:** `#FFFFFF` - Card backgrounds

### Typography
- **Headers:** Epilogue (900 weight, uppercase, tight letter-spacing)
- **Body:** DM Sans
- **Mono/Labels:** JetBrains Mono (uppercase, small size)

### Visual Style
- **Borders:** 3px solid black (`#251720`)
- **Shadows:** 6px offset on desktop, 3px on mobile
- **Grid:** Radial dot pattern background (32px grid)
- **Protocol aesthetic:** Technical labels, system status indicators, monospace elements

---

## Tone of Voice

### Core Principles
1. **Technical/Protocol Language** - Use terminology like "nodes", "network", "protocol", "sync", "inject", "bandwidth"
2. **Direct & Punchy** - Short sentences. No filler. Maximum 2 sentences per concept.
3. **Active Voice** - "Turn your space into a node" not "Your space can be turned into a node"
4. **No Corporate Speak** - Avoid: "leverage", "synergies", "facilitate", "utilize"

### Copy Formula
- **Headlines:** UPPERCASE. Single concept. 2-5 words max.
- **Body:** 1 paragraph = 1 idea. 1-3 sentences.
- **Descriptions:** Lead with action. Cut qualifiers.

### Before/After Examples

**❌ Verbose:**
> "Emergence is not a conference. It is a distributed moment in time where the city's fragmented tech nodes connect, sync, and emerge as a unified network."

**✅ Punchy:**
> "Three days. Distributed nodes. One protocol."

**❌ Over-explained:**
> "Have an office, a warehouse, or a living room? Turn your space into an active node. You control the format, the capacity, and the agenda. We provide the protocol and route the network to your door."

**✅ Direct:**
> "Your space becomes a node. You control format and agenda. We route the network."

---

## Mobile Design Approach

### Key Principles (iOS-First)
1. **Tight Padding** - 16px horizontal, 24px vertical max on mobile
2. **Single Column** - All grids stack to 1 column below 768px
3. **Viewport Fixes** - `-webkit-fill-available` for iOS Safari
4. **Safe Areas** - `env(safe-area-inset-*)` for notched devices
5. **No Zoom** - 16px minimum font size on inputs

### Breakpoints
- **Mobile:** `< 768px`
- **Tablet:** `769px - 1024px`
- **Desktop:** `> 1024px`

### Mobile Spacing Rules
```css
/* All sections */
padding: 24px 16px !important;

/* Event cards */
padding: 16px !important;

/* Header */
padding: 16px !important;

/* Typography */
h1: 1.75rem - 2rem
h2: 1.5rem
body: 0.95rem
buttons: 0.8rem - 0.9rem
```

### Border Handling on Mobile
- Remove right borders when grids stack
- Add bottom border between stacked items
- Remove border on last item

---

## Page Structure

### Home Page
1. **Hero** - Title + tagline + 2 CTAs + network SVG
2. **Explanation** - Dark sidebar + content (what Emergence is)
3. **Mechanics** - 3 cards (Host, Attend, Sponsor)
4. **Venue** - Kachette info + image
5. **Footer** - Email capture

### Events Page
- Filter system (date, type, location)
- Event grid (placeholder cards)
- Responsive: 3 cols desktop → 2 cols tablet → 1 col mobile

### Host Page (Contact Form)
- Dark sidebar with protocol label
- Simple contact form: Name, Email, Company, Message
- Submits to `/api/contact` → Airtable

### Sponsor Page
- Hero split (text + technical visual)
- Sponsorship tiers (cards with checkmarks)
- Inquiry form at bottom
- Submits to `/api/sponsor` → Airtable

### Welcome Page
- Post-signup confirmation

---

## Technical Implementation

### React Router Setup
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/events" element={<Events />} />
  <Route path="/host" element={<Host />} />
  <Route path="/sponsor" element={<Sponsor />} />
  <Route path="/welcome" element={<Welcome />} />
</Routes>
```

### Header Component
- Shared across all pages
- Desktop: Logo + nav links
- Mobile: Logo + hamburger → full-screen overlay menu
- Hamburger animates to X when open

### Airtable Integration
**Setup:** `AIRTABLE_SETUP.md` (in repo)

**Tables:**
1. **Contact Inquiries** - Name, Email, Company, Message, Submitted
2. **Sponsor Inquiries** - Company, Contact Name, Email, Message, Status, Submitted
3. **London Ecosystem** (optional) - Import 302 companies CSV for outreach tracking

**API Endpoints:**
- `/api/contact.js` - Vercel serverless function
- `/api/sponsor.js` - Vercel serverless function

**Environment Variables (Vercel):**
```
AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

---

## Video Content (Remotion)

**Setup:** `REMOTION_SETUP.md` (in repo)

### Three Video Templates

**1. Twitter Announcement (16:9 landscape, 6 seconds)**
- Format: 1280x720
- Use: Twitter/X posts, LinkedIn
- Animation: Title fade → Date slide → Tagline → CTA pulse
- Output: `videos/twitter-announcement.mp4`
- Command: `npm run video:twitter`

**2. Event Showcase (9:16 vertical, 15 seconds)**
- Format: 1080x1920 (Instagram/TikTok)
- Use: Instagram Reels, TikTok, Stories
- Animation: Intro → 4 event cards (90 frames each) → CTA
- Content: Encode Club, Space, Raum, After Party
- Output: `videos/event-showcase.mp4`
- Command: `npm run video:events`

**3. Hero Loop (16:9 landscape, 5 seconds)**
- Format: 1920x1080
- Use: Website hero background, email headers
- Animation: Seamless loop - rotating network nodes, pulsing center
- Output: `videos/hero-loop.mp4`
- Command: `npm run video:hero`

### Quick Commands

```bash
# Preview all videos (interactive)
npm run remotion:preview

# Render all three videos
npm run video:all

# Individual renders
npm run video:twitter
npm run video:events
npm run video:hero
```

### Video Specs
- **FPS:** 30 (all videos)
- **Codec:** H.264
- **Brand consistency:** All videos use Emergence design system (colors, fonts, borders, shadows)
- **Protocol aesthetic:** Network nodes, technical labels, system animations

### Use Cases
- **Social launch:** Post to Twitter/Instagram/TikTok
- **Website:** Embed hero loop as background video
- **Email campaigns:** Use hero loop in headers
- **Ads:** Upload to Facebook/Instagram Ads Manager

---

## Mobile CSS Strategy

### Global Fixes
```css
/* iOS viewport fix */
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

/* Prevent horizontal scroll */
* {
  max-width: 100vw;
}
```

### Layout Classes
```css
/* Stack all grids */
.hero-grid,
.form-hero-grid,
.mechanics-grid,
.venue-grid,
.events-grid,
.tier-grid {
  grid-template-columns: 1fr !important;
}

/* Remove side borders when stacked */
.hero-grid > div:first-child,
.form-sidebar-resp,
.mechanics-grid > div {
  border-right: none !important;
  border-bottom: 3px solid #251720 !important;
}
```

### Attribute Selectors (Override Inline Styles)
```css
/* Target specific padding values */
[style*="padding: 64px"] {
  padding: 24px 16px !important;
}

[style*="padding: 80px 64px"] {
  padding: 24px 16px !important;
}
```

---

## Copy Guidelines

### Writing New Copy

1. **Start with the action/benefit**
   - ✅ "Build your path. Sync with nodes."
   - ❌ "You can build your own customized path through the city and sync your personal calendar."

2. **Cut 50% on first pass**
   - Write normal copy first
   - Then cut every other sentence
   - Then cut half the words from remaining sentences

3. **Use protocol language**
   - Network, nodes, protocol, sync, inject, bandwidth, router, grid
   - Think: technical infrastructure, not event marketing

4. **One idea per sentence**
   - ✅ "Your space becomes a node. You control format and agenda."
   - ❌ "Your space becomes a node where you can control the format, capacity, and agenda."

5. **Active verbs**
   - Build, sync, inject, power, route, navigate
   - Not: facilitate, enable, leverage, optimize

### Copy Checklist
- [ ] Is it under 20 words?
- [ ] Can I cut it in half?
- [ ] Does it use protocol language?
- [ ] Active voice?
- [ ] No corporate jargon?
- [ ] One idea only?

---

## Design Patterns to Reuse

### Dark Sidebar Pattern
**Used in:** Home (Explanation), Host (Contact), Sponsor (Inquiry)

```jsx
<div className="form-hero-grid">
  <aside className="form-sidebar-resp">
    <span>PROTOCOL_LABEL</span>
    <h1>TITLE.</h1>
    <p>Brief description.</p>
  </aside>
  <main className="form-container-resp">
    {/* Content */}
  </main>
</div>
```

**Styling:**
- Dark sidebar: `#251720` background
- Emerald label: `#00D27F`
- Stacks on mobile with border-bottom

### Card Grid Pattern
**Used in:** Mechanics, Sponsor Tiers, Events

```jsx
<section className="mechanics-grid">
  {cards.map(card => (
    <div style={cardStyle}>
      {/* Card content */}
    </div>
  ))}
</section>
```

**Styling:**
- 3 cols desktop → 1 col mobile
- Border-right between cards (desktop)
- Border-bottom between cards (mobile)

### System Status Indicators
**Pattern:** Small pills with monospace text

```jsx
<Pill active>SYSTEM LIVE</Pill>
<Pill>STATUS: SECURED</Pill>
```

---

## Deployment Workflow

### Local Development
```bash
npm run dev          # Vite dev server (port 5173)
npm run build        # Build for production
```

### Deploy to Production
```bash
git add -A
git commit -m "Description"
git push
vercel --prod --yes  # Auto-deploy
```

**Live URLs:**
- Main: www.emergence.london
- Vercel: emergence-landing.vercel.app

---

## Files Reference

### Key Files
- `src/pages/Home.jsx` - Main landing page
- `src/pages/Events.jsx` - Events grid with filters
- `src/pages/Host.jsx` - Contact form
- `src/pages/Sponsor.jsx` - Sponsor tiers + inquiry form
- `src/components/Header.jsx` - Shared header/nav
- `src/index.css` - Global styles + mobile responsive
- `api/contact.js` - Airtable contact form handler
- `api/sponsor.js` - Airtable sponsor form handler
- `remotion/` - Video composition templates
- `videos/` - Rendered video output

### Documentation
- `AIRTABLE_SETUP.md` - Step-by-step Airtable integration
- `REMOTION_SETUP.md` - Video generation guide
- `DESIGN_NOTES.md` - Saved design patterns
- `.env.example` - Environment variables template

---

## Future Improvements

### Next Steps
1. **Airtable Setup** - Create tables, get API keys, add env vars
2. **Luma Integration** - Pull events from Luma API where Emergence is co-host
3. **Events Page** - Replace placeholder cards with real Luma events
4. **SEO** - Add meta tags, OG images, structured data
5. **Analytics** - Add tracking (Plausible/GA4)

### Nice-to-Haves
- Email capture → Mailchimp/Loops integration
- Map view of nodes
- Real-time node status updates
- LinkedIn profiles integration for ecosystem CSV

---

## Session Summary (March 14, 2026)

### What We Built
1. ✅ Multi-page React site (5 pages)
2. ✅ Mobile-responsive design (iOS-optimized)
3. ✅ Hamburger menu for mobile
4. ✅ Airtable form integration (contact + sponsor)
5. ✅ Copy slimmed by 50%
6. ✅ Consistent header across all pages
7. ✅ Variant design system preserved
8. ✅ Remotion video templates (Twitter, Instagram/TikTok, website hero)

### Key Decisions
- **No node approval needed** - Anyone can host via Luma
- **Luma as source of truth** - Events pulled from Luma API
- **Contact form not host form** - Repurposed host page as general contact
- **Mobile-first approach** - iOS Safari as primary target
- **Technical tone** - Protocol language, no corporate speak
- **Punchy copy** - 50% reduction, direct statements only

### Issues Resolved
- ✅ Vercel deployment config (buildCommand, outputDirectory)
- ✅ Static HTML blocking React build
- ✅ Mobile spacing too wide (reduced from 64px to 16px)
- ✅ Mint background bleeding through (made container opaque)
- ✅ Grid layouts not stacking properly on mobile
- ✅ Copy too verbose (cut by 50%)
- ✅ Header navigation missing on mobile (added hamburger)

---

## Contact & Collaborators

**Main:** Ziggy (@ziggythebot)
**Collaborator:** Birdmania (@birdmania)

**GitHub:** github.com/ziggythebot/emergence-landing
**Vercel:** emergence-landing.vercel.app
**Domain:** emergence.london
