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

      <section style={{ padding: '64px', background: '#FFFFFF', borderBottom: '3px solid #251720' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            border: '3px solid #251720',
            overflow: 'hidden',
            boxShadow: '6px 6px 0px #251720',
            marginBottom: '32px'
          }}>
            <iframe
              src="https://londonmaxxxing.com/embed"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                display: 'block',
              }}
              title="London Tech Ecosystem Map"
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://londonmaxxxing.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...customStyles.btn,
                ...customStyles.btnPrimary,
                textDecoration: 'none'
              }}
            >
              EXPLORE FULL MAP →
            </a>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: '#5A4C55',
              marginTop: '16px'
            }}>
              Full-screen map with filters, search, and company details
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
