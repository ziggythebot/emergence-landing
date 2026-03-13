import React from 'react';
import { customStyles } from '../styles';

const Map = () => {
  return (
    <>
      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>ECOSYSTEM // MAP</span>
          <h2 style={customStyles.explHeaderH2}>LONDON'S TECH NETWORK</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Over 300 AI and tech companies mapped across London. This is the density that makes Emergence possible.</p>
        </div>
      </section>

      <section style={{ borderBottom: '3px solid #251720', background: '#FFFFFF' }}>
        <iframe
          src="https://londonmaxxxing.com/embed"
          style={{
            width: '100%',
            height: '800px',
            border: 'none',
            display: 'block',
          }}
          title="London Tech Ecosystem Map"
        />
      </section>
    </>
  );
};

export default Map;
