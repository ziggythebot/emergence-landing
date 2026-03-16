# Luma Assets Redesign - Emergence London 2026

## Changes Made (March 16, 2026)

### Problems Fixed
1. **Logo was weak** → Now bold, iconic yellow node with huge "E"
2. **Sharing image said "Shoreditch"** → Now says "LONDON"
3. **Overall design didn't match site** → Now matches Emergence design system

### Design System Applied
- **Colors**: `#251720` (ink), `#FFD600` (gold), `#00D27F` (emerald), `#EAF8F5` (mint)
- **Borders**: 3px solid #251720 everywhere
- **Typography**: Arial Black (bold) for headings, Courier New for monospace
- **Background**: Mint gradient + 32px dot grid pattern (light assets) or dark ink (sharing)
- **Visual elements**: Yellow/emerald network nodes with geometric connections

### Assets Generated

#### 1. Logo (512x512)
- Large yellow circle node with thick border
- Bold "E" in dark ink filling most of the circle
- Mint gradient background with dot grid
- Works perfectly at profile picture sizes

#### 2. Sharing Image (1200x630)
- Dark background (matches footer style)
- Yellow node in top left
- "EMERGENCE" in large bold white text
- "APRIL 28-30, 2026 // LONDON" in emerald green
- "LONDON'S TECH ECOSYSTEM" subtitle
- Stats on right: 320+ COMPANIES, 100+ EVENTS
- Emerald accents throughout

#### 3. Header (1400x400)
- Mint gradient background with dot grid
- Yellow nodes on left with connection lines
- Bold "EMERGENCE" text
- "APRIL 28-30, 2026 // LONDON" in emerald
- Network visualization on right (connected nodes pattern)

## Files
- **Generator script**: `generate-luma-assets.cjs`
- **Output location**: `public/luma-assets/` (and copied to `dist/luma-assets/`)
- **Assets**:
  - `luma-logo.png` (512x512)
  - `luma-sharing.png` (1200x630)
  - `luma-header.png` (1400x400)

## Usage
To regenerate assets:
```bash
cd /Users/ziggy/emergence-landing
node generate-luma-assets.cjs
```

## Design Consistency
These assets now match:
- Homepage hero aesthetic
- Partners page header
- Footer capture section style
- Overall bold, geometric, high-contrast design language
