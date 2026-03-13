import React from 'react';
import { customStyles } from '../styles';
import { Pill } from '../components/SharedComponents';

const Events = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>DISCOVERY // SCHEDULE</span>
          <h2 style={customStyles.explHeaderH2}>BUILD YOUR PATH</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Three days. Dozens of events. No single ticket.</p>
          <p style={customStyles.explParagraph}>Browse workshops, talks, hackathons, and dinners across London. Build your own journey through the city.</p>
          <p style={customStyles.explParagraph}>Events aggregated from Luma and direct submissions. Full map launches April 1, 2026.</p>
        </div>
      </section>

      <section style={customStyles.venue} className="venue-responsive">
        <div style={customStyles.venueInfo}>
          <span style={customStyles.monoLabel}>NAVIGATION // HOW_IT_WORKS</span>
          <h2 style={customStyles.venueH2}>DISCOVER. RSVP. ATTEND.</h2>
          <div style={customStyles.venueMeta}>
            <Pill active>LAUNCHES APRIL 1</Pill>
            <Pill>FREE ACCESS</Pill>
            <Pill>ALL VENUES</Pill>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            Starting April 1, browse the full event map. Filter by topic, time, and location. RSVP directly through each event's host. No platform fees.
          </p>
          <div style={{ borderTop: '1px solid rgba(37, 23, 32, 0.15)', paddingTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#251720' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>MAP LAUNCH:</span> <span>APRIL 1, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>FESTIVAL DATES:</span> <span>APRIL 28-30, 2026</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>COST:</span> <span>FREE (INDIVIDUAL EVENTS VARY)</span>
            </div>
          </div>
        </div>
        <div style={customStyles.venueImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Tech event crowd"
            style={customStyles.venueImage}
          />
          <div style={customStyles.hudOverlay}>
            <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>PREVIEW // COMING_SOON</span>
            <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>EVENT MAP</div>
          </div>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          EARLY_ACCESS // MAP_PREVIEW
        </span>
        <h2 style={customStyles.footerH2}>BE THE FIRST TO SEE THE FULL NETWORK</h2>
        <form style={customStyles.captureForm} className="capture-form-responsive">
          <input
            type="email"
            placeholder="YOUR EMAIL..."
            required
            style={customStyles.captureInput}
          />
          <button
            type="submit"
            style={{ ...customStyles.btn, ...customStyles.btnPrimary, boxShadow: 'none', borderLeft: 'none' }}
          >
            GET ACCESS
          </button>
        </form>
      </section>
    </>
  );
};

export default Events;
