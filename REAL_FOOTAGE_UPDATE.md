# Real London Footage Integration

**Updated:** March 15, 2026

Replaced geometric/abstract backgrounds in three experimental Remotion videos with real London photography.

## Videos Updated

### 1. London Skyline + Data Overlay
**File:** `public/videos/london-skyline-data.mp4`
- **Before:** Geometric skyline silhouette (CSS shapes for Shard, Gherkin, buildings)
- **After:** Real London skyline photograph featuring The Shard and modern cityscape
- **Background:** Unsplash image with semi-transparent gradient overlay
- **Size:** 4.3 MB (down from 5.0 MB)
- **Improvements:** More professional look, authentic London feel while maintaining data visualization clarity

### 2. Location Flythrough
**File:** `public/videos/location-flythrough.mp4`
- **Before:** Simple gradient background with abstract map grid
- **After:** Real aerial photograph of London (slightly blurred for depth)
- **Background:** Unsplash aerial city view with gradient overlay
- **Size:** 4.4 MB (down from 6.0 MB)
- **Improvements:** Adds context and sense of place, makes the map animation more immersive

### 3. Event Countdown
**File:** `public/videos/event-countdown.mp4`
- **Before:** Dark gradient with geometric Shard/Gherkin patterns rotating
- **After:** Real London night cityscape photograph
- **Background:** Unsplash night photo with dark overlay to maintain contrast
- **Size:** 1.2 MB (down from 2.6 MB)
- **Improvements:** Dramatic night cityscape adds production value, better brand atmosphere

## Assets Added

**Directory:** `/public/footage/`

All images sourced from [Unsplash](https://unsplash.com) (free to use, no attribution required):

| File | Size | Description | Used In |
|------|------|-------------|---------|
| `london-skyline.jpg` | 663K | Shard and modern buildings | London Skyline Data |
| `london-aerial.jpg` | 505K | Aerial city view | Location Flythrough |
| `london-night.jpg` | 1.1M | Night cityscape | Event Countdown |
| `shoreditch-street.jpg` | 652K | Street-level Shoreditch | (Available) |
| `kings-cross.jpg` | 437K | King's Cross area | (Available) |
| `tower-bridge.jpg` | 520K | Tower Bridge landmark | (Available) |

**Total assets:** 3.9 MB

## Technical Implementation

### Code Changes

**LondonSkylineData.tsx:**
```tsx
// Before: Geometric CSS shapes
<div style={{ borderBottom: '300px solid #251720' }} /> // Shard
<div style={{ borderRadius: '50% 50% 0 0' }} />          // Gherkin

// After: Real image with overlay
<img src="/footage/london-skyline.jpg" />
<div style={{ background: 'linear-gradient(...)' }} />   // Gradient overlay
```

**LocationFlythrough.tsx:**
```tsx
// Before: Simple gradient
background: 'linear-gradient(135deg, #E5F4EF 0%, #F2FDFB 50%, #FFFFFF 100%)'

// After: Real aerial photo with blur
<img src="/footage/london-aerial.jpg" style={{ filter: 'blur(2px)' }} />
```

**EventCountdown.tsx:**
```tsx
// Before: Rotating geometric patterns
{[0, 90, 180, 270].map(angle => <div /* Shard shapes */ />)}

// After: Night photo background
<img src="/footage/london-night.jpg" style={{ filter: 'brightness(0.5)' }} />
```

### Key Techniques
1. **Semi-transparent overlays** - Gradients on top of photos maintain brand colors and text legibility
2. **Blur effects** - Subtle blur on aerial view creates depth without distraction
3. **Brightness adjustment** - Night photo darkened to maintain contrast for bright text
4. **Data visualization preserved** - All company markers, connections, and stats remain on top

## File Size Comparison

| Video | Before | After | Change |
|-------|--------|-------|--------|
| London Skyline Data | 5.0 MB | 4.3 MB | -14% |
| Location Flythrough | 6.0 MB | 4.4 MB | -27% |
| Event Countdown | 2.6 MB | 1.2 MB | -54% |

**Total reduction:** 3.7 MB saved (30% smaller overall)

Better compression achieved because real photos compress more efficiently than complex vector shapes.

## Render Performance

All videos rendered successfully with Remotion:
- **London Skyline Data:** 900 frames @ 30fps (30s)
- **Location Flythrough:** 1200 frames @ 30fps (40s)
- **Event Countdown:** 450 frames @ 30fps (15s)
- **Total render time:** ~3-4 minutes on M-series Mac

## Deployment Status

- ✅ Videos rendered to `public/videos/`
- ✅ Videos copied to `dist/videos/`
- ✅ Ready for Vercel deployment
- ✅ Documentation updated (`EXPERIMENTAL_VIDEOS.md`)

## Next Steps

### Short-term
1. Deploy to production (Vercel)
2. Share updated videos on social media
3. Test videos on landing page in real environment

### Future Enhancements
1. **Video footage upgrade** - Replace static images with time-lapse videos
   - Pexels/Pixabay have free London time-lapses
   - Would add motion to backgrounds
   - Larger file sizes to consider
2. **Dynamic zoom** - Parallax effects on background images
3. **Multiple angles** - Rotate between different London views per render
4. **Day/night transitions** - Fade between day and night cityscapes

## Credits

**Images:** [Unsplash](https://unsplash.com) contributors (free to use)
**Video creation:** Remotion 4.0.435
**Project:** Emergence London 2026 landing page

---

*March 15, 2026 - Real footage integration complete*
