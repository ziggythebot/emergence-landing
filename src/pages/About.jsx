import React from 'react';
import { customStyles } from '../styles';

const About = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>MANIFESTO // ABOUT</span>
          <h2 style={customStyles.explHeaderH2}>THE IDEA</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Traditional tech conferences put everyone in a dark room to listen to a single broadcast. Emergence inverts this architecture.</p>
          <p style={customStyles.explParagraph}>For three days, London's tech scene becomes a peer-to-peer network. You don't attend Emergence. You run a node in it.</p>
        </div>
      </section>

      <section style={customStyles.footerCapture}>
        <div style={customStyles.footerGrid} />
        <span style={{ ...customStyles.monoLabel, color: '#00D27F', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
          QUESTIONS?
        </span>
        <h2 style={customStyles.footerH2}>GET IN TOUCH</h2>
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
            CONTACT US
          </button>
        </form>
      </section>
    </>
  );
};

export default About;
