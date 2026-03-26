import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles';
import { Pill, NetworkSVG } from '../components/SharedComponents';

const HeroSection = () => (
  <section style={customStyles.hero} className="hero-responsive">
    <div style={customStyles.heroContent}>
      <span style={{ ...customStyles.monoLabel, marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Pill active>APRIL 28-30, 2026</Pill>
        <span>LONDON</span>
      </span>
      <h1 style={customStyles.h1}>LONDON'S TECH SCENE, EMERGING.</h1>
      <p style={customStyles.subtitle}>Three days. Fifty venues. One city finally seeing itself.</p>
      <div style={customStyles.heroCtas}>
        <Link to="/host" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>HOST A NODE</Link>
        <Link to="/sponsor" style={{ ...customStyles.btn, ...customStyles.btnSecondary }}>BECOME A SPONSOR</Link>
      </div>
    </div>
    <div style={customStyles.heroVisual}>
      <NetworkSVG />
    </div>
  </section>
);

const ExplanationSection = () => (
  <section id="about" style={customStyles.explanation} className="explanation-responsive">
    <div style={customStyles.explHeader}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>THE_THESIS // 01</span>
      <h2 style={customStyles.explHeaderH2}>WHY DISTRIBUTED?</h2>
    </div>
    <div style={customStyles.explContent}>
      <p style={customStyles.explParagraph}>Traditional tech conferences put everyone in a dark room. Emergence does the opposite.</p>
      <p style={customStyles.explParagraph}>For three days, offices, cafes, and warehouses across London host events: workshops, talks, hackathons, dinners. Each host runs their own programming. We make them all easy to find.</p>
      <p style={customStyles.explParagraph}>This isn't one event. It's dozens of events, all happening at once. You don't attend Emergence. You navigate it.</p>
    </div>
  </section>
);

const MechCard = ({ accentColor, iconColor, label, icon, title, description, btnStyle, btnText, btnLink, isLast }) => (
  <div style={{ ...customStyles.mechCard, ...(isLast ? customStyles.mechCardLast : {}) }}>
    <span style={{ ...customStyles.monoLabel, position: 'absolute', top: '16px', right: '16px' }}>{label}</span>
    <div style={{ ...customStyles.mechIcon, background: accentColor, color: iconColor || '#251720' }}>
      {icon}
    </div>
    <h3 style={customStyles.mechH3}>{title}</h3>
    <p style={customStyles.mechP}>{description}</p>
    <Link to={btnLink} style={{ ...customStyles.btn, ...customStyles.btnSmall, ...btnStyle }}>{btnText}</Link>
  </div>
);

const MechanicsSection = () => (
  <section id="mechanics" style={customStyles.mechanics} className="mechanics-responsive">
    <MechCard
      accentColor="#00D27F"
      label="// HOST"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      }
      title="HOST A NODE"
      description="Have a space? Host an event. You control the format, capacity, and agenda. We list your event. People find it."
      btnStyle={{ background: '#00D27F' }}
      btnText="REGISTER VENUE"
      btnLink="/host"
    />
    <MechCard
      accentColor="#FFD600"
      label="// ATTEND"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#251720" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      }
      title="BUILD YOUR PATH"
      description="No single ticket. Choose your events across London. Add them to your calendar. Navigate between talks, demos, and dinners."
      btnStyle={{ background: '#FFD600' }}
      btnText="ACCESS MAP"
      btnLink="/map"
    />
    <MechCard
      accentColor="#251720"
      iconColor="#FFFFFF"
      label="// SPONSOR"
      icon={
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      }
      title="POWER THE GRID"
      description="Sponsors don't get logos on lanyards. They fund the platform: paying for events, covering costs for indie devs, making better programming possible."
      btnStyle={{ background: '#FFFFFF', color: '#251720' }}
      btnText="VIEW PACKAGES"
      btnLink="/sponsor"
      isLast
    />
  </section>
);

const StatsSection = () => (
  <section style={customStyles.statsSection}>
    <span style={customStyles.monoLabel}>LONDON_TECH_ECOSYSTEM // BASELINE_METRICS</span>
    <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '48px' }}>THE NETWORK IS REAL.</h2>
    <div style={customStyles.statsGrid} className="stats-responsive">
      <div style={customStyles.statCard}>
        <div style={customStyles.statNumber}>250+</div>
        <div style={customStyles.statLabel}>AI & Tech Companies</div>
      </div>
      <div style={customStyles.statCard}>
        <div style={customStyles.statNumber}>12</div>
        <div style={customStyles.statLabel}>Unicorns (2025)</div>
      </div>
      <div style={customStyles.statCard}>
        <div style={customStyles.statNumber}>£2.3B</div>
        <div style={customStyles.statLabel}>Funding Raised</div>
      </div>
      <div style={customStyles.statCard}>
        <div style={customStyles.statNumber}>3 Days</div>
        <div style={customStyles.statLabel}>April 28-30, 2026</div>
      </div>
    </div>
  </section>
);

const VenueSection = () => (
  <section id="venue" style={customStyles.venue} className="venue-responsive">
    <div style={customStyles.venueInfo}>
      <span style={customStyles.monoLabel}>PHYSICAL_INFRASTRUCTURE // CENTRAL_ROUTER</span>
      <h2 style={customStyles.venueH2}>KACHETTE.</h2>
      <div style={customStyles.venueMeta}>
        <Pill>EC1V 9LP</Pill>
        <Pill>CAPACITY: 400</Pill>
        <Pill active>STATUS: SECURED</Pill>
      </div>
      <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
        While events happen everywhere, every system needs a hub. Kachette is that hub. Located in Shoreditch's railway arches. Get your pass here. See the full schedule.
      </p>
      <div style={{ borderTop: '1px solid rgba(37, 23, 32, 0.15)', paddingTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#251720' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>LAT/LONG:</span> <span>51.526° N, 0.078° W</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>ARCHITECTURE:</span> <span>EXPOSED BRICK / DUAL ARCH</span>
        </div>
      </div>
    </div>
    <div style={customStyles.venueImageContainer}>
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        alt="Exposed brick arches of Kachette venue"
        style={customStyles.venueImage}
      />
      <div style={customStyles.hudOverlay}>
        <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>SYSTEM CAM // 01</span>
        <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>MAIN ARCHWAY</div>
      </div>
    </div>
  </section>
);

const CommunityPartnersSection = () => {
  const partners = [
    {
      name: 'Ramen Club',
      logo: new URL('../assets/partners/ramen-club.jpg', import.meta.url).href,
      url: 'https://ramenclub.so',
      type: 'square'
    },
    {
      name: 'ETHLondon',
      logo: new URL('../assets/partners/ethlondon.jpg', import.meta.url).href,
      url: 'https://ethlondon.com/',
      type: 'wide'
    }
  ];

  return (
    <section style={{
      padding: '80px 48px',
      borderTop: '3px solid #251720',
      background: '#FFFFFF'
    }}>
      <span style={{ ...customStyles.monoLabel, color: '#5A4C55', marginBottom: '16px', display: 'block' }}>
        COMMUNITY_PARTNERS // NETWORK_NODES
      </span>
      <h2 style={{
        fontFamily: "'Epilogue', sans-serif",
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        marginBottom: '48px',
        color: '#251720'
      }}>
        BUILDING TOGETHER.
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '32px',
        alignItems: 'center'
      }}>
        {partners.map((partner, idx) => (
          partner.url ? (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                border: '3px solid #251720',
                background: '#FFFFFF',
                transition: 'all 0.2s',
                textDecoration: 'none',
                minHeight: '180px'
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </a>
          ) : (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                border: '3px solid #251720',
                background: '#FFFFFF',
                minHeight: '180px'
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          )
        ))}
      </div>
    </section>
  );
};

const FooterCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section style={customStyles.footerCapture}>
      <div style={customStyles.footerGrid} />
      <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
        {submitted ? 'CONNECTION ESTABLISHED' : 'JOIN THE NETWORK'}
      </span>
      <h2 style={customStyles.footerH2}>YOU'RE ALREADY PART OF THIS. NOW MAKE YOURSELF VISIBLE.</h2>
      {submitted ? (
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00D27F', fontSize: '1.1rem', position: 'relative', zIndex: 2 }}>
          ACCESS LINK SENT. CHECK YOUR EMAIL.
        </p>
      ) : (
        <form style={customStyles.captureForm} onSubmit={handleSubmit} className="capture-form-responsive">
          <input
            type="email"
            placeholder="YOUR EMAIL..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={customStyles.captureInput}
          />
          <button
            type="submit"
            style={{ ...customStyles.btn, ...customStyles.btnPrimary, boxShadow: 'none', borderLeft: 'none' }}
          >
            SYNC
          </button>
        </form>
      )}
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExplanationSection />
      <MechanicsSection />
      <StatsSection />
      <VenueSection />
      <CommunityPartnersSection />
      <FooterCaptureSection />
    </>
  );
};

export default Home;
