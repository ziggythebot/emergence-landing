import React from 'react';
import { customStyles } from '../styles';

const Events = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>PROGRAMMING // SCHEDULE</span>
          <h2 style={customStyles.explHeaderH2}>THE NETWORK</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Three days. Fifty venues. No single ticket. Build your own path through the city.</p>
          <p style={customStyles.explParagraph}>Events aggregated from Luma. Map launches April 1, 2026.</p>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          GET EARLY ACCESS
        </span>
        <h2 style={customStyles.footerH2}>ACCESS THE MAP WHEN IT LAUNCHES</h2>
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

export default Events;
