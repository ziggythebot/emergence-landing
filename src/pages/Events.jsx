import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({ customStyles }) => {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <span style={{ ...customStyles.monoLabel, color: '#FFD600' }}>EVENTS // 02</span>
      <h1 style={{ ...customStyles.h1, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>
        BUILD YOUR PATH THROUGH THE NETWORK
      </h1>

      <p style={{ ...customStyles.explParagraph, fontSize: '1.25rem', marginTop: '32px' }}>
        No single ticket. Navigate between micro-summits, underground demos, and rooftop debates across London.
      </p>

      <div style={{ marginTop: '64px', padding: '48px', background: '#EAF8F5', border: '3px solid #251720', textAlign: 'center' }}>
        <span style={{ ...customStyles.monoLabel, fontSize: '0.9rem' }}>DISCOVERY_PROTOCOL // COMING_SOON</span>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginTop: '16px', marginBottom: '24px' }}>
          EVENT AGGREGATION LAUNCHING FEBRUARY 2026
        </h2>
        <p style={{ ...customStyles.explParagraph, maxWidth: '700px', margin: '0 auto' }}>
          All Emergence events will be discoverable through our Luma integration. Browse by venue, topic, time, or build your custom path through the city.
        </p>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          FEATURED PROGRAMMING
        </h2>
        <p style={{ ...customStyles.explParagraph, marginBottom: '32px' }}>
          Editorial highlights from the network. Check back in February for curated selections.
        </p>

        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ border: '3px solid #251720', padding: '32px', background: '#FFFFFF' }}>
              <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>APRIL {27 + i}</span>
              <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, margin: '16px 0' }}>
                Event Title TBA
              </h3>
              <p style={{ ...customStyles.explParagraph, marginBottom: '16px' }}>
                Node location and details coming soon.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  background: '#EAF8F5',
                  border: '2px solid #251720',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                }}>
                  TAG
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '64px', padding: '48px', border: '3px solid #251720', background: '#FFFFFF' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          HOW TO ATTEND
        </h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{ borderLeft: '4px solid #FFD600', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              1. Browse the Map
            </h3>
            <p style={customStyles.explParagraph}>
              Explore all active nodes and their programming. Filter by topic, capacity, and time.
            </p>
          </div>
          <div style={{ borderLeft: '4px solid #FFD600', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              2. RSVP Directly
            </h3>
            <p style={customStyles.explParagraph}>
              Each node manages its own capacity. RSVP through Luma, sync to your calendar.
            </p>
          </div>
          <div style={{ borderLeft: '4px solid #FFD600', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              3. Navigate the City
            </h3>
            <p style={customStyles.explParagraph}>
              Move between nodes throughout the day. Drop into talks, stay for dinners, build your own experience.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link to="/" style={{ ...customStyles.navLink, fontSize: '1rem' }}>
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Events;
