# Emergence Pages - Template Analysis & Implementation Plan

## Template Inventory

Based on `/Users/ziggy/Desktop/variant-emergence-pages/`:

### 1. **grid-events.js** (704 lines)
**Purpose:** Events/Schedule page
**Key Features:**
- Filter system (Date, Node Type, Format)
- Grid-based event cards layout
- "What is Emergence?" and "How it Works" sections
- Event filtering by category, date, format

**Primary Sections:**
- Filter controls (dark header, pill filters)
- Event grid (3-column card layout)
- Explainer sections

---

### 2. **react-app(10).js** (422 lines)
**Purpose:** Confirmation/Success page (post-signup)
**Key Features:**
- "YOU'RE IN THE GRID" success message
- Terminal-style confirmation output
- Next steps grid (2-column)
- Social share section ("INVITE PEERS")
- Shareable referral link

**Primary Sections:**
- Hero confirmation (split layout)
- Success visual (terminal aesthetic)
- Next steps cards
- Share/invite footer

---

### 3. **react-app(7).js** (493 lines)
**Purpose:** Host Node Application form
**Key Features:**
- "INITIALIZE YOUR NODE" hero
- Multi-step form (Venue Infrastructure, Node Programming, Curation & Voices)
- "NODE APPLICATION UPLOADED" success state
- Form validation and submission flow

**Primary Sections:**
- Hero (dark background, node initialization)
- Multi-section form:
  - Venue details (space name, address, capacity)
  - Programming (event format, duration, target audience)
  - Curation (description, hosts, requirements)
- Success confirmation

---

### 4. **react-app(8).js** (566 lines)
**Purpose:** Sponsor page (primary version)
**Key Features:**
- "FUEL THE RENAISSANCE" hero
- Sponsor tier cards (3 tiers)
- Benefits breakdown
- Impact metrics/stats
- Application form

**Primary Sections:**
- Hero
- Sponsor tiers grid
- What sponsors get
- Form/CTA

---

### 5. **react-app(9).js** (566 lines)
**Purpose:** Sponsor page (alternate version)
**Key Features:**
- Same as react-app(8) but likely different copy/positioning
- "FUEL THE RENAISSANCE" hero (identical)
- Different tier structure or messaging variant

**Notes:**
- Appears to be A/B test variant of sponsor page
- Need to diff to see exact differences

---

## Current Site Structure

**Live (emergence-landing.vercel.app):**
- Single-page React app (App.jsx)
- Sections: Hero, Concept, Mechanics, Network Stats, Footer CTA
- No routing, all scroll-based

---

## Proposed Multi-Page Architecture

### Pages to Create:

```
/                    → Home (current App.jsx with improved copy)
/events              → grid-events.js (Schedule/Event Discovery)
/host                → react-app(7).js (Host Node Application)
/sponsor             → react-app(8).js (Sponsor Tiers & Form)
/sponsor-alt         → react-app(9).js (A/B test variant - optional)
/welcome             → react-app(10).js (Post-signup confirmation)
```

---

## Implementation Strategy

### Phase 1: Shared Components & Routing Setup

**1. Extract Shared Components**
- `<Header>` - Navigation (used across all pages)
- `<LogoNode>` - Logo component
- `<Pill>` - Filter/tag pill component
- `<Footer>` - Email capture (if consistent across pages)

**Files to create:**
```
src/
  components/
    Header.jsx
    LogoNode.jsx
    Pill.jsx
    Footer.jsx (optional)
  pages/
    Home.jsx (current App.jsx content)
    Events.jsx (from grid-events.js)
    Host.jsx (from react-app(7).js)
    Sponsor.jsx (from react-app(8).js)
    Welcome.jsx (from react-app(10).js)
  App.jsx (routing wrapper)
```

**2. Set Up React Router**
- Install `react-router-dom`
- Create routing wrapper in App.jsx
- Update nav links to use `<Link>` components

**3. Convert Templates to Pages**
- Copy each template
- Extract page-specific content (remove header/shared elements)
- Import shared components
- Update styles to use consistent theme

---

### Phase 2: Variant Design System Integration

**Following Variant skill principles:**

**DO:**
- Copy styles exactly as-is from templates
- Preserve all visual properties (colors, spacing, shadows)
- Keep code structure identical to templates
- No cleanup, no refactoring

**DON'T:**
- Simplify gradients or extract CSS variables
- Round numbers or normalize spacing
- Extract inline styles to separate files
- Merge similar styles

**Why:**
- Templates from Variant export are production-tested
- Any deviation risks breaking visual fidelity
- Easier to apply future Variant exports

---

### Phase 3: Content Templates for Each Page

**For future skill usage:**

Each page gets a content template so we can easily update copy without touching code.

**Example structure:**
```markdown
pages/
  home/
    content.md (copy for home page)
    variants/ (A/B test variants)
  events/
    content.md
  host/
    content.md
    form-fields.json (field definitions)
  sponsor/
    content.md
    tiers.json (sponsor tier data)
```

This allows:
- `/copywriting` skill to update content.md files
- `/variant` skill to apply visual A/B tests
- Separation of content from presentation

---

## Technical Considerations

### 1. Build Setup
**Current:** Static HTML with React via CDN
**Need:** Proper build setup for routing

**Options:**
- **Vite** (recommended - fast, simple, React Router support)
- **Next.js** (overkill for this, but could enable SSR later)
- **Create React App** (bloated, not recommended)

**Recommendation:** Vite
- Minimal config
- Fast dev server
- React Router works out of box
- Easy Vercel deployment

### 2. Form Handling
**Host & Sponsor forms need:**
- Form state management
- Validation
- Submission endpoint (Tally embed? Custom endpoint?)
- Success redirects to `/welcome`

**Recommendation:**
- Embed Tally forms for sponsor/host (easiest)
- OR build custom forms → post to Airtable via API
- Redirect to `/welcome?type=host` or `/welcome?type=sponsor` on success

### 3. Events Data
**grid-events.js filters and displays events:**
- Need events data source
- Could be:
  - Static JSON file (for now)
  - Luma API integration (future)
  - Airtable as CMS

**Recommendation:**
- Start with static `events.json`
- Filter/search works client-side
- Add Luma sync later

---

## Migration Plan (Step-by-Step)

### Step 1: Setup Vite Project (Don't Execute Yet)
```bash
cd /Users/ziggy/emergence-landing
npm create vite@latest . -- --template react
npm install react-router-dom
```

### Step 2: Create Directory Structure
```
src/
  components/
    Header.jsx
    LogoNode.jsx
    Pill.jsx
  pages/
    Home.jsx
    Events.jsx
    Host.jsx
    Sponsor.jsx
    Welcome.jsx
  App.jsx
  main.jsx
index.html (Vite entry point)
```

### Step 3: Extract Shared Components
- Pull Header, LogoNode, Pill from current App.jsx
- Create reusable components with consistent styling
- Export with props for customization

### Step 4: Convert Each Template to Page
**For each template:**
1. Copy template file → `src/pages/[PageName].jsx`
2. Remove header (import shared `<Header>`)
3. Remove footer if duplicate
4. Keep all page-specific sections
5. Preserve all inline styles exactly (Variant principle)

### Step 5: Create Routing in App.jsx
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
// etc

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/host" element={<Host />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### Step 6: Update Header Nav Links
Change from `<a href="#section">` to:
```jsx
<Link to="/events">EVENTS</Link>
<Link to="/host">HOST NODE</Link>
<Link to="/sponsor">SPONSOR</Link>
```

### Step 7: Update Vercel Config
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
(Ensures client-side routing works)

### Step 8: Test Locally
```bash
npm run dev
```
- Verify all routes work
- Check nav links
- Test forms
- Verify styles match templates exactly

### Step 9: Deploy
```bash
npm run build
vercel --prod
```

---

## Content Migration Strategy

### Home Page
**Current content (App.jsx):**
- Keep updated "MANIFESTO" section
- Keep new "NETWORK" stats section
- Keep improved "MECHANICS" cards
- Remove or archive "CORE HUB" (Kachette) section

### Events Page
**From grid-events.js:**
- Need sample events data (create `events.json`)
- Filter system ready to go
- Add "Map goes live April 1st" banner

### Host Page
**From react-app(7).js:**
- Form needs Tally integration or Airtable endpoint
- Success redirect to `/welcome?type=host`

### Sponsor Page
**From react-app(8).js:**
- Define sponsor tiers (move to `sponsor-tiers.json`)
- Form needs integration
- Success redirect to `/welcome?type=sponsor`

### Welcome Page
**From react-app(10).js:**
- Dynamic content based on query param (`?type=host` or `?type=sponsor`)
- Share links need actual URLs
- Next steps vary by user type

---

## Questions to Resolve Before Implementation

1. **Build tool preference?**
   - Vite (recommended)
   - Next.js
   - Other

2. **Form handling?**
   - Tally embeds (easiest)
   - Custom forms → Airtable
   - Custom forms → separate backend

3. **Events data source?**
   - Static JSON (MVP)
   - Luma API (future)
   - Manual Airtable

4. **Do we keep both sponsor page variants (react-app(8) and (9))?**
   - A/B test setup
   - Pick one for now
   - Need to diff to see differences

5. **Should we add date/event info now or wait?**
   - You mentioned "Map goes live April 1st"
   - When is the actual event?

6. **Domain setup?**
   - Currently: emergence-landing.vercel.app
   - Target: emergence.london
   - Need DNS config

---

## Variant Skill Template Setup

**Once pages are created, add Variant skill templates:**

Create `.claude/skills/emergence-templates/` with:
```
templates/
  home-hero-variants.json (A/B test hero copy)
  sponsor-tiers-variants.json (A/B test pricing)
  events-filters-variants.json (different filter UI)
```

This allows future use of `/variant` skill to:
- Apply copy variations without code changes
- Test different tier structures
- Experiment with CTA placement

---

## Next Steps

**Awaiting your approval on:**
1. Build tool choice (Vite recommended)
2. Form integration approach
3. Events data strategy
4. Which sponsor page variant to use
5. Timeline/event dates to add

**Then I'll:**
1. Set up Vite project structure
2. Extract shared components
3. Convert all 5 templates to pages
4. Add routing
5. Integrate forms
6. Deploy multi-page site
7. Create content templates for future updates

---

## Files Ready for Review

All 5 templates located at:
`/Users/ziggy/Desktop/variant-emergence-pages/`

**Suggested next action:**
Review templates yourself first, then let me know which decisions to make on build setup, forms, and data sources.
