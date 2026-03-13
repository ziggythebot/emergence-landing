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
          <p style={customStyles.explParagraph}>Traditional tech conferences put everyone in a dark room. Emergence does the opposite.</p>
          <p style={customStyles.explParagraph}>London's tech scene is distributed: offices, warehouses, cafes, studios. Events happen everywhere. We make them all easy to find.</p>
          <p style={customStyles.explParagraph}>You don't attend one event. You navigate dozens.</p>
        </div>
      </section>

      <section style={customStyles.venue} className="venue-responsive">
        <div style={customStyles.venueImageContainer}>
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="London tech hub"
            style={customStyles.venueImage}
          />
          <div style={customStyles.hudOverlay}>
            <span style={{ ...customStyles.monoLabel, color: '#251720', marginBottom: '4px' }}>NETWORK_CORE // SHOREDITCH</span>
            <div style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.2rem' }}>THE SCENE</div>
          </div>
        </div>
        <div style={customStyles.venueInfo}>
          <span style={customStyles.monoLabel}>PRINCIPLE // WHY_THIS_WORKS</span>
          <h2 style={customStyles.venueH2}>VISIBILITY CREATES MOMENTUM</h2>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            London has the density. 250+ AI and tech companies. £2.3B raised. 12 unicorns. The network is real.
          </p>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55', marginBottom: '32px' }}>
            But the ecosystem doesn't see itself. Teams work in parallel. Founders solve the same problems independently. The bandwidth is low.
          </p>
          <p style={{ fontSize: '1.25rem', color: '#5A4C55' }}>
            Emergence makes the connections visible. One weekend. One map. The whole network, finally seeing itself clearly.
          </p>
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
