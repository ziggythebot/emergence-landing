# Emergence Luma Assets

Branded images for the Emergence Luma account.

## Files

### luma-header.png (1400x400)
**Usage:** Luma event page header banner (3.5:1 aspect ratio)

Wide banner featuring:
- London skyline with data overlay background (from london-skyline-data video)
- "EMERGENCE" in large white text with emerald green shadow
- Gold accent line
- "APRIL 28-30, 2026 // LONDON" in emerald green
- Yellow node logo mark

### luma-logo.png (512x512)
**Usage:** Luma account profile picture (square)

Simple, recognizable logo featuring:
- Emerald-to-mint gradient background
- Geometric grid pattern overlay
- Large yellow node with "E" mark
- "EMERGENCE" text below

### luma-sharing.png (1200x630)
**Usage:** Social media preview / OG image (1.91:1 aspect ratio)

Sharing card featuring:
- Animated network graph background (from animated-network-graph video)
- Full Emergence branding
- "Mapping London's Tech Ecosystem" tagline
- Date and location
- Stats: 100+ Events, 320+ Companies

## Design System

**Colors:**
- Emerald: `#00D27F`
- Ink: `#251720`
- Gold: `#FFD600`
- Mint: `#EAF8F5`

**Fonts:**
- Epilogue 900 (headings)
- JetBrains Mono 700 (labels/dates)

**Style:**
- Bold borders
- Network nodes
- Geometric shapes
- High contrast

## Generation

Images are generated from HTML templates using Puppeteer.

To regenerate:
```bash
node generate-luma-images.js
```

Source templates:
- `generate-header.html`
- `generate-logo.html`
- `generate-sharing.html`

Background images extracted from Remotion-generated videos using ffmpeg.
