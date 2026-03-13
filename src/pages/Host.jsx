import React from 'react';
import { customStyles } from '../styles';

const Host = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>NODE_PROTOCOL // HOST</span>
          <h2 style={customStyles.explHeaderH2}>BECOME A NODE</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Have an office, warehouse, or living room? Turn your space into an active node for three days in April.</p>
          <p style={customStyles.explParagraph}>You control the format, capacity, and agenda. We provide the protocol and route the network to your door.</p>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          READY TO HOST?
        </span>
        <h2 style={customStyles.footerH2}>REGISTER YOUR SPACE</h2>
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
            APPLY NOW
          </button>
        </form>
      </section>
    </>
  );
};

export default Host;
