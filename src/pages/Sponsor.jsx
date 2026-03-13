import React from 'react';
import { customStyles } from '../styles';
import { Pill } from '../components/SharedComponents';

const Sponsor = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>FUNDING // SPONSORS</span>
          <h2 style={customStyles.explHeaderH2}>ALIGN WITH THE MOMENTUM</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Sponsors don't get logos on lanyards. They fund the platform: the site, the closing party, and free discovery for everyone.</p>
          <p style={customStyles.explParagraph}>Your brand gets associated with London's tech scene, emerging.</p>
        </div>
      </section>

      <section style={customStyles.venue} className="venue-responsive">
        <div style={customStyles.venueImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="London skyline"
            style={customStyles.venueImage}
          />
          <div style={customStyles.hudOverlay}>
            <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>NETWORK_VIEW // ECOSYSTEM</span>
            <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>LONDON RISING</div>
          </div>
        </div>
        <div style={customStyles.venueInfo}>
          <span style={customStyles.monoLabel}>SCALE // DENSITY</span>
          <h2 style={customStyles.venueH2}>THE NETWORK IS REAL</h2>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            250+ AI and tech companies mapped across London. 12 unicorns. £2.3B raised in 2025. This is the ecosystem that makes Emergence possible.
          </p>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55' }}>
            Sponsor packages and benefits available on request. Limited slots.
          </p>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          BECOME_A_SPONSOR
        </span>
        <h2 style={customStyles.footerH2}>POWER THE INFRASTRUCTURE</h2>
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
            GET INFO DECK
          </button>
        </form>
      </section>
    </>
  );
};

export default Sponsor;
