# Emergence London 2026 — Project Documentation

**Live Site:** https://emergence-landing.vercel.app
**GitHub:** https://github.com/ziggythebot/emergence-landing
**Status:** Live, deployed to Vercel
**Dates:** April 28-30, 2026

---

## Concept

Distributed tech conference across 50+ London venues. SXSW-style model with Kachette as central hub. Alternative to cancelled Token Dubai.

**Target Audiences:**
1. Event organizers (host side events)
2. Sponsors (£10-20K founding sponsors)
3. Attendees (navigate between venues)

**Core Thesis:** London's tech scene is real, large, and fragmented. Emergence makes the network visible by turning the city itself into the venue.

---

## Design System (Variant)

**Colors:**
- Mint: `#EAF8F5`
- Emerald: `#00D27F`
- Gold: `#FFD600`
- Ink (dark): `#251720`
- Ink Light: `#5A4C55`
- Surface: `#FFFFFF`

**Fonts:**
- Display: Epilogue (800, 900)
- Body: DM Sans (400, 500, 700)
- Mono: JetBrains Mono (400, 700)

**Style:**
- Border-heavy brutalist aesthetic
- 3px solid borders
- Box shadows: `6px 6px 0px #251720` (large), `3px 3px 0px #251720` (small)
- Dot grid background: `radial-gradient(#251720 1px, transparent 1px)`
- Uppercase headings with tight letter-spacing

---

## Site Structure

**Single-page React app** (built with Vite)

### Sections:

1. **Header**
   - Logo: Emergence with node icon
   - Nav: [01] WHY, [02] HOW, [03] HUB

2. **Hero**
   - Headline: "LONDON'S TECH SCENE, EMERGING."
   - Subhead: "Three days. Fifty venues. One city finally seeing itself."
   - CTAs: Host a Node (primary), Become a Sponsor (secondary)
   - Visual: Animated network SVG with pulsing nodes

3. **The Thesis (Why Distributed?)**
   - Contrast: Traditional conferences (dark room) vs distributed network
   - Explanation of node-based architecture
   - "You don't attend Emergence; you plug into it."

4. **How It Works**
   - Three cards: Host a Node, Build Your Path (Attend), Power the Grid (Sponsor)
   - Each with icon, description, CTA

5. **Stats Section**
   - 50+ Active Venues
   - 12 Unicorns (2025)
   - £2.3B Funding Raised
   - 250+ Tech Companies

6. **Kachette Hub**
   - Central router location
   - Address: EC1V 9LP
   - Capacity: 400
   - Status: Secured
   - Lat/Long: 51.526° N, 0.078° W

7. **Footer Email Capture**
   - Headline: "YOU'RE ALREADY PART OF THIS. NOW MAKE YOURSELF VISIBLE."
   - Single-field email input
   - CTA: SYNC

---

## Marketing Psychology Framework

**Key Principles Applied:**

1. **Unity Principle** ⭐⭐⭐⭐⭐
   - "London's tech scene" language (shared identity)
   - "Plug into the network" vs "attend a conference"
   - You're already part of this ecosystem

2. **Present Bias** ⭐⭐⭐⭐
   - "Emerging" (present tense) not "will emerge"
   - "This is happening NOW" energy
   - Immediate actions: "Host a node" not "Reserve your spot"

3. **FOMO / Scarcity** ⭐⭐⭐⭐
   - Founding sponsors (limited slots)
   - Early host registration
   - First 50 venues cap

4. **Social Proof** ⭐⭐⭐⭐
   - Stats: 250+ companies, 12 unicorns, £2.3B funding
   - "50+ active venues" counter
   - London Tech Atlas data

5. **Reciprocity Principle** ⭐⭐⭐⭐
   - Free access to venue map/schedule
   - London Tech Atlas as standalone tool
   - Value before commitment

6. **Activation Energy** ⭐⭐⭐⭐
   - Single-field email capture
   - Host registration: 3 fields max
   - No "contact us" dead ends

7. **Contrast Effect** ⭐⭐⭐
   - Traditional conference vs distributed network
   - "Dark room, single broadcast" vs "City-wide, peer-to-peer"

8. **Mimetic Desire / Bandwagon** ⭐⭐⭐⭐⭐
   - Live venue counter
   - Early host testimonials
   - Sponsor logos (when available)

**Full analysis:** See `EMERGENCE_PSYCHOLOGY.md`

---

## Messaging Guidelines

**Tone:**
- Confident, not hype-y
- "This is happening" not "This will change everything!"
- Inclusive, not exclusive
- Ambitious but grounded
- Present tense throughout

**Hero Message:**
"London's tech scene, emerging.
Three days. Fifty venues. One city finally seeing itself."

**Key Themes:**
1. Unity: You're already part of this ecosystem
2. Momentum: This is happening now
3. Agency: You shape this (host, attend, sponsor)
4. Visibility: The scene exists, we're just making it visible

**Avoid:**
- "Revolutionary" or "game-changing" (too hype-y)
- "Join the future of conferences" (too abstract)
- "Apply to attend" (too exclusive)
- Generic conference language (keynotes, sessions, speakers)

---

## Technical Stack

**Frontend:**
- React 18.2
- Vite 5.0
- Inline styles (no CSS-in-JS library)

**Deployment:**
- Vercel (production)
- Auto-deploy from GitHub master branch

**Mobile:**
- iOS-optimized responsive design
- Grid layouts collapse to single column < 1024px
- Header stacks vertically < 768px
- Stats grid: 4 columns → 2 columns → 1 column

---

## Key Files

```
emergence-landing/
├── src/
│   ├── App.jsx              # Main React component
│   └── main.jsx             # React entry point
├── dist/                    # Build output (deployed to Vercel)
├── index.html               # Vite entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── PROJECT.md               # This file
├── EMERGENCE_PSYCHOLOGY.md  # Marketing psychology analysis
└── README.md                # GitHub readme
```

---

## CTAs & Conversion Flow

**Primary CTAs:**
1. **"Host a Node"** — For venue organizers (highest priority)
2. **"Become a Sponsor"** — For sponsors (scarcity/urgency)
3. **"Access the Map"** — For attendees (low friction)

**Secondary:**
4. **"Join Early Access"** — Email capture (low commitment)
5. **"Explore London Tech Atlas"** — Free tool (reciprocity)

**Email Capture Flow:**
1. Single field: email input
2. CTA: "SYNC" button
3. On submit: "CONNECTION ESTABLISHED" + "ACCESS LINK SENT. CHECK YOUR EMAIL."
4. (Backend integration needed for actual email sending)

---

## Next Steps / TODO

### Content
- [ ] Add founding sponsor logos (when available)
- [ ] Add early host testimonials
- [ ] Build "London Tech Atlas" free tool (reciprocity play)
- [ ] Create "How to Host a Tech Event" guide
- [ ] Add FAQ section

### Features
- [ ] Connect email capture to backend (Mailchimp/ConvertKit/custom)
- [ ] Add live venue counter (updates from backend)
- [ ] Build interactive venue map
- [ ] Add calendar integration for attendees
- [ ] Create host registration form (typeform/custom)
- [ ] Create sponsor packages page

### Marketing
- [ ] Set up analytics (GA4/Plausible)
- [ ] Set up conversion tracking
- [ ] Create social share images (OG tags)
- [ ] Launch soft (no big announcement)
- [ ] Seed social proof (early hosts, sponsors)
- [ ] Press outreach (TechCrunch, Sifted, etc.)

### Technical
- [ ] Add favicon
- [ ] Add OG meta tags for social sharing
- [ ] Set up custom domain (if needed)
- [ ] Add error handling to email form
- [ ] Add form validation
- [ ] Add loading states

---

## Domain & Deployment

**Current:**
- **Vercel URL:** https://emergence-landing.vercel.app
- **GitHub:** https://github.com/ziggythebot/emergence-landing
- **Auto-deploy:** Enabled (master branch)

**Future:**
- Custom domain: TBD (emergence.london? emergenceLDN.com?)
- DNS: Namecheap (in progress)

---

## Collaborators

- **ziggythebot** (owner)
- **b1rdmania** (collaborator)

---

## Project History

**March 13, 2026:**
- Initial concept discussion (alternative to Token Dubai)
- Built React app from Variant template
- Ran marketing psychology analysis
- Deployed to Vercel
- Pushed to GitHub

**Key Decisions:**
1. Single-page vs multi-page → Single-page (launch fast, iterate later)
2. Messaging: "A celebration of London's tech renaissance" → "London's tech scene, emerging" (present tense, more active)
3. Design system: Variant (brutalist, border-heavy, mint/emerald colors)
4. Model: SXSW-style distributed vs traditional conference venue

---

## Contact

For questions or collaboration: (add contact info when ready)

---

## License

(Add license when ready)
