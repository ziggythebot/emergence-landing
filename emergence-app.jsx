import React, { useState } from 'react';

// Preserve exact Variant color scheme and design system
const customStyles = {
  root: {
    '--bg-mint': '#EAF8F5',
    '--ink': '#251720',
    '--ink-light': '#5A4C55',
    '--emerald': '#00D27F',
    '--gold': '#FFD600',
    '--surface': '#FFFFFF',
  },
  body: {
    background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
    color: '#251720',
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: '1.5',
    minHeight: '100vh',
    overflowX: 'hidden',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(10px)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  logo: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoNode: {
    width: '24px',
    height: '24px',
    background: '#FFD600',
    border: '3px solid #251720',
    borderRadius: '50%',
    position: 'relative',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  navLink: {
    color: '#251720',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px solid #251720',
  },
  heroContent: {
    padding: '80px 64px',
    borderRight: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heroVisual: {
    background: '#EAF8F5',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  monoLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
    display: 'block',
    marginBottom: '0.5rem',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    background: '#FFD600',
    border: '2px solid #251720',
    borderRadius: '20px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    marginBottom: '24px',
  },
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3.5rem',
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    marginBottom: '24px',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#5A4C55',
    marginBottom: '32px',
    lineHeight: 1.6,
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
  },
  btnPrimary: {
    padding: '16px 32px',
    background: '#00D27F',
    border: '3px solid #251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    fontWeight: 700',
    color: '#251720',
    cursor: 'pointer',
    transition: 'transform 0.1s',
    textDecoration: 'none',
    display: 'inline-block',
  },
  btnSecondary: {
    padding: '16px 32px',
    background: '#FFFFFF',
    border: '3px solid #251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#251720',
    cursor: 'pointer',
    transition: 'transform 0.1s',
    textDecoration: 'none',
    display: 'inline-block',
  },
  section: {
    padding: '80px 64px',
    borderBottom: '3px solid #251720',
  },
  sectionDark: {
    background: '#251720',
    color: '#FFFFFF',
  },
  h2: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: '24px',
  },
  threeCol: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    marginTop: '48px',
  },
  card: {
    background: '#FFFFFF',
    border: '3px solid #251720',
    padding: '32px',
  },
  cardDark: {
    background: '#5A4C55',
    border: '3px solid #00D27F',
    padding: '32px',
    color: '#FFFFFF',
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    marginTop: '48px',
  },
  statBox: {
    border: '3px solid #00D27F',
    padding: '24px',
    textAlign: 'center',
  },
  statNumber: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3rem',
    fontWeight: 900,
    color: '#00D27F',
    display: 'block',
  },
  statLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    marginTop: '8px',
  },
  footer: {
    padding: '48px 64px',
    background: '#FFFFFF',
    textAlign: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
  },
};

function EmergenceLanding() {
  const [email, setEmail] = useState('');

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer}>

        {/* Header */}
        <header style={customStyles.header}>
          <div style={customStyles.logo}>
            <div style={customStyles.logoNode}></div>
            EMERGENCE
          </div>
          <nav style={customStyles.navLinks}>
            <a href="#concept" style={customStyles.navLink}>CONCEPT</a>
            <a href="#how-it-works" style={customStyles.navLink}>HOW_IT_WORKS</a>
            <a href="#sponsor" style={customStyles.navLink}>SPONSOR</a>
          </nav>
        </header>

        {/* Hero */}
        <section style={customStyles.hero}>
          <div style={customStyles.heroContent}>
            <span style={customStyles.pill}>APR_28-30_//=2026</span>
            <h1 style={customStyles.h1}>
              London's tech scene,<br/>emerging.
            </h1>
            <p style={customStyles.subtitle}>
              Three days. Fifty venues. One city finally seeing itself.
            </p>
            <div style={customStyles.ctaGroup}>
              <a href="#host" style={customStyles.btnPrimary}>HOST_AN_EVENT</a>
              <a href="#sponsor" style={customStyles.btnSecondary}>BECOME_A_SPONSOR</a>
            </div>
          </div>

          <div style={customStyles.heroVisual}>
            {/* Network visualization - simplified SVG */}
            <svg width="400" height="400" viewBox="0 0 400 400">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Grid of nodes representing venues */}
              {[...Array(7)].map((_, row) =>
                [...Array(7)].map((_, col) => {
                  const x = 50 + col * 50;
                  const y = 50 + row * 50;
                  const isActive = Math.random() > 0.3;
                  return isActive ? (
                    <circle
                      key={`${row}-${col}`}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#00D27F"
                      filter="url(#glow)"
                    />
                  ) : null;
                })
              )}

              {/* Connecting lines */}
              <line x1="100" y1="100" x2="150" y2="150" stroke="#00D27F" strokeWidth="2" opacity="0.3"/>
              <line x1="150" y1="100" x2="200" y2="150" stroke="#00D27F" strokeWidth="2" opacity="0.3"/>
              <line x1="200" y1="150" x2="250" y2="200" stroke="#00D27F" strokeWidth="2" opacity="0.3"/>
              <line x1="100" y1="200" x2="200" y2="200" stroke="#00D27F" strokeWidth="2" opacity="0.3"/>
              <line x1="250" y1="100" x2="300" y2="150" stroke="#00D27F" strokeWidth="2" opacity="0.3"/>

              {/* Central hub node */}
              <circle cx="200" cy="200" r="12" fill="#FFD600" stroke="#251720" strokeWidth="3"/>
            </svg>
          </div>
        </section>

        {/* The Concept */}
        <section style={customStyles.section} id="concept">
          <span style={customStyles.monoLabel}>// THE_CONCEPT</span>
          <h2 style={customStyles.h2}>Not a conference.<br/>An emergence.</h2>
          <p style={{fontSize: '1.125rem', maxWidth: '70ch', lineHeight: 1.7}}>
            Token Dubai's cancellation left a gap. London's tech ecosystem doesn't need another conference center event.
            It needs what it already has: universities, coworking spaces, galleries, and studios buzzing with ideas.
          </p>
          <p style={{fontSize: '1.125rem', maxWidth: '70ch', lineHeight: 1.7, marginTop: '24px'}}>
            Emergence is a three-day distributed celebration. No single venue. No central stage. Just 50+ side events
            across London — panels, workshops, hackathons, dinners — all coordinated under one umbrella.
          </p>
          <p style={{fontSize: '1.125rem', maxWidth: '70ch', lineHeight: 1.7, marginTop: '24px', fontWeight: 600}}>
            Think South by Southwest meets London Tech Week. Decentralized. Organic. Already happening.
          </p>
        </section>

        {/* How It Works */}
        <section style={{...customStyles.section, ...customStyles.sectionDark}} id="how-it-works">
          <span style={{...customStyles.monoLabel, color: '#00D27F'}}>// HOW_IT_WORKS</span>
          <h2 style={{...customStyles.h2, color: '#FFFFFF'}}>Three paths in.</h2>

          <div style={customStyles.threeCol}>
            {/* Host */}
            <div style={customStyles.cardDark}>
              <span style={{...customStyles.monoLabel, color: '#FFD600'}}>01_HOST</span>
              <h3 style={{fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 900, margin: '16px 0'}}>
                Host an Event
              </h3>
              <p style={{marginBottom: '16px'}}>
                Got a space? Run a panel, workshop, or meetup.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: '16px 0'}}>
                <li style={{marginBottom: '8px'}}>→ We provide: branding, schedule, marketing</li>
                <li style={{marginBottom: '8px'}}>→ You provide: venue, speakers, content</li>
              </ul>
              <a href="#" style={{...customStyles.btnPrimary, display: 'inline-block', marginTop: '16px'}}>
                SUBMIT_EVENT
              </a>
            </div>

            {/* Attend */}
            <div style={customStyles.cardDark}>
              <span style={{...customStyles.monoLabel, color: '#FFD600'}}>02_ATTEND</span>
              <h3 style={{fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 900, margin: '16px 0'}}>
                Attend
              </h3>
              <p style={{marginBottom: '16px'}}>
                Browse 50+ events across London. Build your own schedule.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: '16px 0'}}>
                <li style={{marginBottom: '8px'}}>→ Free to browse and register</li>
                <li style={{marginBottom: '8px'}}>→ Optional: Emergence Pass for exclusive Kachette sessions</li>
              </ul>
              <a href="#" style={{...customStyles.btnSecondary, display: 'inline-block', marginTop: '16px', background: '#00D27F', color: '#FFFFFF'}}>
                VIEW_SCHEDULE
              </a>
            </div>

            {/* Sponsor */}
            <div style={customStyles.cardDark}>
              <span style={{...customStyles.monoLabel, color: '#FFD600'}}>03_SPONSOR</span>
              <h3 style={{fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 900, margin: '16px 0'}}>
                Sponsor
              </h3>
              <p style={{marginBottom: '16px'}}>
                Be a founding sponsor. 3-5 companies only.
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: '16px 0'}}>
                <li style={{marginBottom: '8px'}}>→ £10-20K investment</li>
                <li style={{marginBottom: '8px'}}>→ Brand across 50+ venues</li>
                <li style={{marginBottom: '8px'}}>→ Stage time at Kachette hub</li>
              </ul>
              <a href="mailto:hello@emergence.london" style={{...customStyles.btnPrimary, display: 'inline-block', marginTop: '16px'}}>
                SPONSOR_INQUIRY
              </a>
            </div>
          </div>
        </section>

        {/* Kachette Hub */}
        <section style={customStyles.section}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
            <div>
              <span style={customStyles.monoLabel}>// BASE_CAMP</span>
              <h2 style={customStyles.h2}>Kachette:<br/>where the network meets</h2>
              <p style={{fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '16px'}}>
                While events happen across London, Kachette serves as coordination HQ:
              </p>
              <ul style={{fontSize: '1.125rem', lineHeight: 1.7, listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '12px'}}>→ Morning coffee & registration</li>
                <li style={{marginBottom: '12px'}}>→ Sponsor booths</li>
                <li style={{marginBottom: '12px'}}>→ Evening networking & after-parties</li>
                <li style={{marginBottom: '12px'}}>→ Small-format talks & fireside chats</li>
              </ul>
              <p style={{fontSize: '1rem', color: '#5A4C55', marginTop: '24px'}}>
                Free to drop in. Optional paid sessions for deeper programming.
              </p>
            </div>
            <div style={{background: '#EAF8F5', border: '3px solid #251720', padding: '48px', textAlign: 'center'}}>
              <div style={{fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', marginBottom: '16px'}}>
                KACHETTE_LONDON
              </div>
              <div style={{fontSize: '3rem', fontWeight: 900, marginBottom: '8px'}}>🏢</div>
              <div style={{fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#5A4C55'}}>
                CENTRAL_HUB_//=NETWORKING_SPACE
              </div>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section style={{...customStyles.section, background: '#FFD600'}}>
          <span style={customStyles.monoLabel}>// WHY_NOW</span>
          <h2 style={customStyles.h2}>London's moment.</h2>

          <div style={customStyles.statGrid}>
            <div style={{...customStyles.statBox, borderColor: '#251720'}}>
              <span style={{...customStyles.statNumber, color: '#251720'}}>50K+</span>
              <span style={customStyles.statLabel}>London Tech Map followers<br/>(6 months)</span>
            </div>
            <div style={{...customStyles.statBox, borderColor: '#251720'}}>
              <span style={{...customStyles.statNumber, color: '#251720'}}>£XXB</span>
              <span style={customStyles.statLabel}>AI funding raised<br/>(2025)</span>
            </div>
            <div style={{...customStyles.statBox, borderColor: '#251720'}}>
              <span style={{...customStyles.statNumber, color: '#251720'}}>APR 28</span>
              <span style={customStyles.statLabel}>Token Dubai cancelled.<br/>The gap is here.</span>
            </div>
          </div>

          <p style={{fontSize: '1.25rem', fontWeight: 600, marginTop: '48px', maxWidth: '70ch'}}>
            London's tech ecosystem is at an inflection point. AI funding is flowing. Talent is concentrating.
            The infrastructure is here. Emergence celebrates what's already happening — and accelerates it.
          </p>
        </section>

        {/* Early Interest CTA */}
        <section style={customStyles.section}>
          <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{...customStyles.h2, marginBottom: '16px'}}>Be part of the emergence.</h2>
            <p style={{fontSize: '1.125rem', color: '#5A4C55', marginBottom: '32px'}}>
              Get early access to the schedule, host opportunities, and sponsor packages.
            </p>

            <form style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '16px',
                  border: '3px solid #251720',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1rem',
                }}
              />
              <button type="submit" style={customStyles.btnPrimary}>
                GET_EARLY_ACCESS
              </button>
            </form>

            <div style={{display: 'flex', gap: '16px', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem'}}>
              <label style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <input type="checkbox" /> I'm interested in hosting
              </label>
              <label style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <input type="checkbox" /> I'm interested in sponsoring
              </label>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={customStyles.footer}>
          <div style={{marginBottom: '24px'}}>
            <div style={{fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px'}}>
              EMERGENCE
            </div>
            <div style={{color: '#5A4C55'}}>
              A celebration of London's tech renaissance
            </div>
          </div>

          <div style={{borderTop: '2px solid #251720', paddingTop: '24px', color: '#5A4C55'}}>
            <a href="mailto:hello@emergence.london" style={{color: '#251720', textDecoration: 'none', marginRight: '24px'}}>
              CONTACT
            </a>
            <a href="https://twitter.com/emergenceLDN" style={{color: '#251720', textDecoration: 'none', marginRight: '24px'}}>
              TWITTER/X
            </a>
            <a href="#" style={{color: '#251720', textDecoration: 'none'}}>
              PRIVACY
            </a>
          </div>

          <div style={{marginTop: '24px', fontSize: '0.75rem', color: '#5A4C55'}}>
            © 2026 EMERGENCE_LONDON // APRIL_28-30_2026
          </div>
        </footer>

      </div>
    </div>
  );
}

export default EmergenceLanding;
