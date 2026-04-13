import React from 'react';
import { customStyles } from '../styles';
import { Pill } from '../components/SharedComponents';

const Host = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>NODE_PROTOCOL // HOST</span>
          <h2 style={customStyles.explHeaderH2}>BECOME A NODE</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Already hosting an event in Q3 2026? Turn your space into part of the network.</p>
          <p style={customStyles.explParagraph}>Submit your event. We add it to the map. Thousands discover it. You run it however you want.</p>
          <p style={customStyles.explParagraph}>No fees. No commissions. Just visibility.</p>
        </div>
      </section>

      <section style={customStyles.venue} className="venue-responsive">
        <div style={customStyles.venueInfo}>
          <span style={customStyles.monoLabel}>REQUIREMENTS // WHAT_YOU_NEED</span>
          <h2 style={customStyles.venueH2}>ELIGIBILITY</h2>
          <div style={customStyles.venueMeta}>
            <Pill>LONDON BASED</Pill>
            <Pill>Q3 2026</Pill>
            <Pill active>TECH FOCUSED</Pill>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            Your event should be tech/AI focused, happening anywhere in Greater London during the festival dates, and open to at least some external attendees.
          </p>
          <div style={{ borderTop: '1px solid rgba(37, 23, 32, 0.15)', paddingTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#251720' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>FORMAT:</span> <span>TALKS / WORKSHOPS / DEMOS / DINNERS</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>CAPACITY:</span> <span>5+ ATTENDEES</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>SUBMISSION:</span> <span>OPENS FEBRUARY 2026</span>
            </div>
          </div>
        </div>
        <div style={customStyles.venueImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="London office space"
            style={customStyles.venueImage}
          />
          <div style={customStyles.hudOverlay}>
            <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>POTENTIAL_NODE // EXAMPLE</span>
            <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>YOUR SPACE HERE</div>
          </div>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          HOST_REGISTRATION // EARLY_ACCESS
        </span>
        <h2 style={customStyles.footerH2}>GET NOTIFIED WHEN SUBMISSIONS OPEN</h2>
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
            NOTIFY ME
          </button>
        </form>
      </section>
    </>
  );
};

export default Host;
