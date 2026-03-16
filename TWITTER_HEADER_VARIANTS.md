# Twitter Header Variants - Emergence London 2026

All variants are 1500x500px with a clear 500px safe zone in the bottom-left corner for profile pictures.

## Available Variants

### V1 - Current Style (Right-Aligned)
- **File:** `twitter-header-v1.png`
- **Style:** Content positioned on the right 2/3rds
- **Features:** "EMERGENCE" wordmark + date + network nodes
- **Background:** Mint (#EAF8F5) with subtle grid pattern
- **Best for:** Professional, balanced look with visual interest

### V2 - Centered High
- **File:** `twitter-header-v2.png`
- **Style:** Content centered but positioned in upper 60%
- **Features:** "EMERGENCE" + date centered, network nodes flanking both sides
- **Background:** Mint (#EAF8F5) with subtle grid pattern
- **Best for:** Symmetrical, modern aesthetic

### V3 - Minimal Bold
- **File:** `twitter-header-v3.png`
- **Style:** Clean, wordmark-focused design
- **Features:** Huge "EMERGENCE" wordmark centered high, small date text below
- **Background:** Mint (#EAF8F5) with very subtle grid pattern
- **Best for:** Bold, minimal, high-impact branding

### V4 - Network Heavy
- **File:** `twitter-header-v4.png`
- **Style:** Large abstract network graph on right side
- **Features:** Complex node network, smaller "EMERGENCE" in upper-right
- **Background:** Mint (#EAF8F5) with subtle grid pattern
- **Best for:** Visual, abstract, tech-forward aesthetic

## Interactive Selector

Visit [emergence.london/brand-kit](https://www.emergence.london/brand-kit) to preview and download all variants with an interactive selector.

## Technical Details

- **Dimensions:** 1500x500px (3:1 ratio)
- **Format:** PNG with transparency support
- **Profile Safe Zone:** Bottom-left 500x500px clear for profile picture
- **Colors:**
  - Background: #EAF8F5 (mint)
  - Text: #251720 (dark)
  - Accent: #00D27F (emerald green)
  - Network Nodes: #FFD600 (yellow), #00D27F (emerald)
- **Fonts:**
  - Wordmark: Epilogue (900 weight)
  - Date: JetBrains Mono (700 weight)

## Generation

All variants can be regenerated using:

```bash
node scripts/generate-twitter-headers.js
```

Source HTML generators are in `public/luma-assets/generate-twitter-header-v[1-4].html`
