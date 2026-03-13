# Emergence London - Current Site Content

**Live URL:** https://emergence-landing.vercel.app

**Design System:** Variant (brutalist, 3px borders, DM Sans/Epilogue/JetBrains Mono fonts, #00D27F emerald, #FFD600 gold, #251720 ink)

## Navigation

- Home
- About
- Events
- Host
- Sponsor
- Map

---

## Home Page (/)

### Hero Section
**Headline:** LONDON'S TECH SCENE, EMERGING.

**Subheadline:** Three days. Fifty venues. One city finally seeing itself.

**CTAs:**
- HOST A NODE
- BECOME A SPONSOR

**Visual:** Network SVG with animated nodes and connections labeled "KACHETTE" and "SHOREDITCH"

### Thesis Section (Black Sidebar + White Content)
**Label:** THE_THESIS // 01

**Headline:** WHY DISTRIBUTED?

**Body:**
- Traditional tech conferences put everyone in a dark room to listen to a single broadcast. Emergence inverts this architecture.
- For three days, offices, cafes, warehouses, and studios across London become active nodes in the network. Each node hosts autonomous programming: workshops, debates, hackathons, dinners, governed by the hosts but discoverable through the central protocol.
- This is not a top-down event. It's a peer-to-peer protocol for London's tech ecosystem to map itself, share bandwidth, and build unexpected connections. You don't just attend Emergence; you plug into it.

### How It Works - 3 Cards
**Card 1: HOST A NODE**
- Icon: Concentric circles (node icon)
- Label: // HOST
- Description: Have an office, a warehouse, or a living room? Turn your space into an active node. You control the format, the capacity, and the agenda. We provide the protocol and route the network to your door.
- CTA: REGISTER VENUE

**Card 2: BUILD YOUR PATH**
- Icon: House icon
- Label: // ATTEND
- Description: No single ticket. Build your own journey through the city. Sync your calendar with nodes that match your frequency. Navigate between micro-summits, underground demos, and rooftop debates.
- CTA: ACCESS MAP

**Card 3: POWER THE GRID**
- Icon: Lightning bolt
- Label: // SPONSOR
- Description: Sponsors don't get logos on lanyards. They fund the ecosystem: supporting valuable programming, subsidizing costs for indie developers, and elevating the overall fidelity of the network.
- CTA: VIEW PACKAGES

### Stats Section
**Label:** LONDON_TECH_ECOSYSTEM // BASELINE_METRICS

**Headline:** THE NETWORK IS REAL.

**Stats:**
- 50+ Active Venues
- 12 Unicorns (2025)
- £2.3B Funding Raised
- 250+ Tech Companies

### Venue Section (Kachette)
**Label:** PHYSICAL_INFRASTRUCTURE // CENTRAL_ROUTER

**Headline:** KACHETTE.

**Pills:**
- EC1V 9LP
- CAPACITY: 400
- STATUS: SECURED (active pill)

**Body:** While the network is distributed, every system needs a central router. Located in the historic railway arches of Shoreditch, Kachette acts as the physical core. Come here to sync, collect credentials, and access the master schedule.

**Meta:**
- LAT/LONG: 51.526° N, 0.078° W
- ARCHITECTURE: EXPOSED BRICK / DUAL ARCH

**Image:** Railway arches with HUD overlay labeled "SYSTEM CAM // 01 - MAIN ARCHWAY"

### Footer CTA (Dark Section)
**Label:** JOIN THE NETWORK

**Headline:** YOU'RE ALREADY PART OF THIS. NOW MAKE YOURSELF VISIBLE.

**Form:** Email input + SYNC button

**Success state:** CONNECTION ESTABLISHED / ACCESS LINK SENT. CHECK YOUR EMAIL.

---

## Host Page (/host)

### Explanation Section
**Label:** NODE_PROTOCOL // HOST

**Headline:** BECOME A NODE

**Body:**
- Have an office, warehouse, or living room? Turn your space into an active node for three days in April.
- You control the format, capacity, and agenda. We provide the protocol and route the network to your door.

### Footer CTA
**Label:** READY TO HOST?

**Headline:** REGISTER YOUR SPACE

**Form:** Email input + APPLY NOW button

---

## Events Page (/events)

### Explanation Section
**Label:** PROGRAMMING // SCHEDULE

**Headline:** THE NETWORK

**Body:**
- Three days. Fifty venues. No single ticket. Build your own path through the city.
- Events aggregated from Luma. Map launches April 1, 2026.

### Footer CTA
**Label:** GET EARLY ACCESS

**Headline:** ACCESS THE MAP WHEN IT LAUNCHES

**Form:** Email input + NOTIFY ME button

---

## Sponsor Page (/sponsor)

### Explanation Section
**Label:** FUNDING // POWER_THE_GRID

**Headline:** SPONSOR THE NETWORK

**Body:**
- Sponsors don't get logos on lanyards. They fund the ecosystem: supporting valuable programming, subsidizing costs for indie developers, and elevating the overall fidelity of the network.

### Footer CTA
**Label:** BECOME A SPONSOR

**Headline:** POWER THE GRID

**Form:** Email input + GET DETAILS button

---

## About Page (/about)

### Explanation Section
**Label:** MANIFESTO // ABOUT

**Headline:** THE IDEA

**Body:**
- Traditional tech conferences put everyone in a dark room to listen to a single broadcast. Emergence inverts this architecture.
- For three days, London's tech scene becomes a peer-to-peer network. You don't attend Emergence. You run a node in it.

### Footer CTA
**Label:** QUESTIONS?

**Headline:** GET IN TOUCH

**Form:** Email input + CONTACT US button

---

## Map Page (/map)

### Explanation Section
**Label:** ECOSYSTEM // MAP

**Headline:** LONDON'S TECH NETWORK

**Body:**
- Over 300 AI and tech companies mapped across London. This is the density that makes Emergence possible.

### Map Embed
Full-width iframe embedding https://londonmaxxxing.com/embed (800px height)

---

## Design Patterns Used

### Component Types
1. **Explanation Section** - 300px black sidebar + white content area (all pages except home)
2. **Hero Section** - 2-column grid, left content + right visual (home only)
3. **Mechanics Cards** - 3-column grid with icons, labels, descriptions (home only)
4. **Stats Section** - 4-card grid with numbers + labels (home only)
5. **Venue Section** - 2-column, info + image with HUD overlay (home only)
6. **Footer CTA** - Dark background (#251720) with grid overlay, centered email form (all pages)

### Typography
- Headers: Epilogue, 900 weight, uppercase
- Body: DM Sans, 1.5rem for explParagraph
- Labels: JetBrains Mono, 0.75rem, uppercase, letter-spacing
- Buttons: Epilogue, 1.1rem, 900 weight

### Shadows
- Buttons: 6px 6px 0px #251720
- Cards: 3px 3px 0px #251720

### Colors
- Emerald: #00D27F (primary)
- Gold: #FFD600 (secondary)
- Ink: #251720 (text/borders)
- Mint: #EAF8F5 (backgrounds)
- White: #FFFFFF (surfaces)

---

## Key Messaging Themes

1. **Distributed vs Centralized** - Inverts traditional conference model
2. **Peer-to-Peer Protocol** - Not top-down, autonomous nodes
3. **City as Venue** - Navigate between nodes across London
4. **Autonomy + Discovery** - Hosts control programming, attendees build paths
5. **Network Visibility** - Making London's tech ecosystem see itself
6. **Real Infrastructure** - Kachette as central router, real metrics (50+ venues, £2.3B funding)
7. **No Passive Sponsorship** - Fund the ecosystem, not logos on lanyards

---

## Current Gaps / Questions

1. **Luma Integration** - Events page mentions it but no implementation yet
2. **Map Launch Date** - April 1, 2026 mentioned but no actual map built
3. **Host Application Process** - Email capture only, no actual form
4. **Sponsor Tiers** - Mentioned on home but no detail pages
5. **RSVP/Ticketing** - How does the "no single ticket" model actually work?
6. **Node Requirements** - What makes a valid node?
7. **Programming Examples** - What actually happens at nodes?
8. **Success Metrics** - How do we measure if this works?
