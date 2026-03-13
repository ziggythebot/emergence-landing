import React from 'react';
import { Link } from 'react-router-dom';

const Map = ({ customStyles }) => {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>ECOSYSTEM_MAP // 04</span>
      <h1 style={{ ...customStyles.h1, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>
        LONDON'S TECH ECOSYSTEM
      </h1>

      <p style={{ ...customStyles.explParagraph, fontSize: '1.25rem', marginTop: '32px', maxWidth: '800px' }}>
        This is the density that makes Emergence possible. Over 300 AI and tech companies building in London, mapped and categorized by the LondonMaxxing community.
      </p>

      <p style={{ ...customStyles.explParagraph, marginTop: '16px', maxWidth: '800px' }}>
        These aren't just potential venues. They're nodes in an existing network that doesn't yet see itself clearly. Emergence makes the connections visible.
      </p>

      <div style={{ marginTop: '48px', width: '100%', border: '3px solid #251720', overflow: 'hidden' }}>
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
      </div>

      <div style={{ marginTop: '32px', padding: '32px', background: '#EAF8F5', border: '3px solid #251720' }}>
        <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
          About LondonMaxxing
        </h3>
        <p style={{ ...customStyles.explParagraph, marginBottom: '16px' }}>
          LondonMaxxing is a community-driven project mapping London's AI and tech ecosystem. Every company, investor, and founder location is crowd-sourced and verified.
        </p>
        <p style={customStyles.explParagraph}>
          Emergence partners with LondonMaxxing to showcase the density and diversity of what's being built here. Many of these companies will host nodes during the festival.
        </p>
        <a
          href="https://londonmaxxxing.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...customStyles.btn,
            ...customStyles.btnPrimary,
            display: 'inline-block',
            marginTop: '24px',
            textDecoration: 'none',
          }}
        >
          EXPLORE FULL MAP →
        </a>
      </div>

      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link to="/" style={{ ...customStyles.navLink, fontSize: '1rem' }}>
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Map;
