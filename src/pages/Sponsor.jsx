import React from 'react';
import { customStyles } from '../styles';

const Sponsor = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>FUNDING // POWER_THE_GRID</span>
          <h2 style={customStyles.explHeaderH2}>SPONSOR THE NETWORK</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Sponsors don't get logos on lanyards. They fund the ecosystem: supporting valuable programming, subsidizing costs for indie developers, and elevating the overall fidelity of the network.</p>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          BECOME A SPONSOR
        </span>
        <h2 style={customStyles.footerH2}>POWER THE GRID</h2>
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
            GET DETAILS
          </button>
        </form>
      </section>
    </>
  );
};

export default Sponsor;
