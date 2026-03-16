import React, { useState } from 'react';
import Header from '../components/Header';

const customStyles = {
  body: {
    background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#251720',
    lineHeight: '1.5',
    WebkitFontSmoothing: 'antialiased',
    margin: 0,
    padding: 0,
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    padding: '48px 64px',
    borderBottom: '3px solid #251720',
    textAlign: 'center',
    background: '#FFFFFF',
  },
  monoLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#00D27F',
    display: 'block',
    marginBottom: '0.5rem',
  },
  filterSection: {
    padding: '32px 64px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  },
  filterBtn: {
    padding: '12px 24px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    background: '#FFFFFF',
    border: '3px solid #251720',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
  },
  filterBtnActive: {
    background: '#00D27F',
    boxShadow: '3px 3px 0px #251720',
  },
  partnersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '0',
  },
  partnerCard: {
    padding: '40px',
    borderBottom: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
  },
  logoPlaceholder: {
    width: '120px',
    height: '60px',
    background: '#EAF8F5',
    border: '3px solid #251720',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 900,
    fontSize: '0.9rem',
    marginBottom: '16px',
  },
  ctaSection: {
    padding: '48px 64px',
    borderBottom: '3px solid #251720',
    textAlign: 'center',
    background: '#EAF8F5',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 40px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.1s ease',
    boxShadow: '6px 6px 0px #251720',
  },
};

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Partners' },
    { id: 'ai', label: 'AI / ML' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'web3', label: 'Web3' },
    { id: 'biotech', label: 'Biotech' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ];

  const partners = [
    // Placeholder partners - replace with real data
    { name: 'Partner 1', category: 'ai', description: 'AI research lab pushing boundaries.' },
    { name: 'Partner 2', category: 'fintech', description: 'Fintech platform scaling globally.' },
    { name: 'Partner 3', category: 'web3', description: 'Web3 protocol for builders.' },
    { name: 'Partner 4', category: 'biotech', description: 'Biotech startup innovating.' },
    { name: 'Partner 5', category: 'infrastructure', description: 'Co-working hub for tech.' },
    { name: 'Partner 6', category: 'ai', description: 'Machine learning infrastructure.' },
    { name: 'Partner 7', category: 'fintech', description: 'Payment rails for developers.' },
    { name: 'Partner 8', category: 'web3', description: 'Decentralized protocols.' },
    { name: 'Partner 9', category: 'ai', description: 'Computer vision platform.' },
    { name: 'Partner 10', category: 'infrastructure', description: 'Developer workspace.' },
    { name: 'Partner 11', category: 'fintech', description: 'Banking infrastructure API.' },
    { name: 'Partner 12', category: 'web3', description: 'Crypto developer tools.' },
  ];

  const filteredPartners = activeFilter === 'all'
    ? partners
    : partners.filter(p => p.category === activeFilter);

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer} className="system-container">
        <Header />

        {/* Hero */}
        <section style={customStyles.hero}>
          <span style={customStyles.monoLabel}>NETWORK_DIRECTORY</span>
          <h1 style={{ fontSize: '3.5rem', margin: '12px 0 12px 0', color: '#251720' }}>
            PARTNERS.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5A4C55', maxWidth: '600px', margin: '0 auto' }}>
            Companies powering London's distributed network. April 28-30, 2026.
          </p>
        </section>

        {/* Filters */}
        <section style={customStyles.filterSection}>
          <span style={customStyles.monoLabel}>FILTER_BY_VERTICAL</span>
          <div style={customStyles.filterGrid}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  ...customStyles.filterBtn,
                  ...(activeFilter === cat.id ? customStyles.filterBtnActive : {}),
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Partners Grid */}
        <div style={customStyles.partnersGrid}>
          {filteredPartners.map((partner, index) => (
            <div key={index} style={customStyles.partnerCard}>
              <div>
                <div style={customStyles.logoPlaceholder}>
                  {partner.name}
                </div>
                <p style={{ fontSize: '0.95rem', color: '#5A4C55', lineHeight: 1.6 }}>
                  {partner.description}
                </p>
              </div>
              <div style={{ marginTop: '16px' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  color: '#00D27F',
                  letterSpacing: '0.1em',
                }}>
                  {categories.find(c => c.id === partner.category)?.label || partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section style={customStyles.ctaSection}>
          <span style={customStyles.monoLabel}>JOIN_NETWORK</span>
          <h2 style={{ fontSize: '2.5rem', margin: '12px 0 16px 0' }}>
            BECOME A PARTNER.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#5A4C55', maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Event organizer? Co-working hub? Tech company hosting on April 28-30? Join the network.
          </p>
          <a
            href="/contact"
            style={customStyles.btn}
            onMouseDown={(e) => e.currentTarget.style.transform = 'translate(3px, 3px)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
          >
            GET IN TOUCH
          </a>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '48px 64px',
          borderTop: '3px solid #251720',
          background: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: '#5A4C55',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            © 2026 EMERGENCE PROTOCOL // LDN
          </div>
          <div style={{ display: 'flex', gap: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>PRIVACY</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>TERMS</a>
            <a href="/contact" style={{ textDecoration: 'none', color: '#251720' }}>CONTACT</a>
          </div>
        </footer>

        {/* Mobile styles */}
        <style>{`
          @media (max-width: 768px) {
            .system-container {
              border-left: none !important;
              border-right: none !important;
              background: #FFFFFF !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Partners;
