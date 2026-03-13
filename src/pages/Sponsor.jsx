import React from 'react';
import { customStyles } from '../styles';
import { Pill } from '../components/SharedComponents';

const Sponsor = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>FUNDING // POWER_THE_GRID</span>
          <h2 style={customStyles.explHeaderH2}>SPONSOR THE NETWORK</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Sponsors don't get logos on lanyards. They fund the platform.</p>
          <p style={customStyles.explParagraph}>Your support pays for the site, makes discovery free for every host, and funds the closing party.</p>
          <p style={customStyles.explParagraph}>Associate your brand with London's tech scene. Help make it visible to itself.</p>
        </div>
      </section>

      <section style={customStyles.venue} className="venue-responsive">
        <div style={customStyles.venueInfo}>
          <span style={customStyles.monoLabel}>INVESTMENT // WHAT_YOU_GET</span>
          <h2 style={customStyles.venueH2}>VISIBILITY. ALIGNMENT. ACCESS.</h2>
          <div style={customStyles.venueMeta}>
            <Pill active>BRAND PLACEMENT</Pill>
            <Pill>CLOSING PARTY</Pill>
            <Pill>FEATURED CONTENT</Pill>
          </div>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            Sponsor packages include brand placement across the platform, featured positioning in event discovery, VIP access to the closing party, and editorial opportunities throughout the festival.
          </p>
          <div style={{ borderTop: '1px solid rgba(37, 23, 32, 0.15)', paddingTop: '16px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#251720' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>PACKAGES:</span> <span>NETWORK / NODE / SUPPORTER</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>AVAILABILITY:</span> <span>LIMITED SLOTS</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>INFO DECK:</span> <span>AVAILABLE ON REQUEST</span>
            </div>
          </div>
        </div>
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
