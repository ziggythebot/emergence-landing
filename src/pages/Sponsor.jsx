import React, { useState } from 'react';
import Header from '../components/Header';

const styles = {
  root: {
    '--bg-mint': '#EAF8F5',
    '--ink': '#251720',
    '--ink-light': '#5A4C55',
    '--emerald': '#00D27F',
    '--gold': '#FFD600',
    '--surface': '#FFFFFF',
  },
  body: {
    background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 100%)',
    color: '#251720',
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: 1.5,
    minHeight: '100vh',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
  },
  heroSplit: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px solid #251720',
  },
  heroText: {
    padding: '24px 32px',
    borderRight: '3px solid #251720',
  },
  monoLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#5A4C55',
    display: 'block',
    marginBottom: '0.5rem',
  },
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2.5rem',
    textTransform: 'uppercase',
    lineHeight: 0.9,
    marginBottom: '8px',
  },
  visualWell: {
    background: '#251720',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  blueprintGrid: {
    position: 'absolute',
    inset: 0,
    opacity: 0.1,
    backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
    backgroundSize: '30px 30px',
  },
  tiersGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    borderBottom: '3px solid #251720',
  },
  tierCard: {
    padding: '24px',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
  tierCardAlt: {
    padding: '24px',
    background: '#EAF8F5',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '3px solid #251720',
  },
  pill: {
    display: 'inline-flex',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    border: '2px solid #251720',
    background: '#FFFFFF',
    textTransform: 'uppercase',
    width: 'fit-content',
  },
  pillGold: {
    display: 'inline-flex',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    border: '2px solid #251720',
    background: '#FFD600',
    textTransform: 'uppercase',
    width: 'fit-content',
  },
  priceTag: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2rem',
    fontWeight: 900,
    margin: '12px 0',
    color: '#251720',
  },
  benefitList: {
    listStyle: 'none',
    marginTop: '16px',
    flexGrow: 1,
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '12px',
    fontSize: '0.95rem',
  },
  inquirySection: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    background: '#251720',
    color: '#FFFFFF',
  },
  inquirySidebar: {
    padding: '24px',
    borderRight: '3px solid rgba(255,255,255,0.1)',
  },
  formContainer: {
    padding: '24px 32px',
  },
  gridForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  formGroupFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    gridColumn: 'span 2',
  },
  input: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
  },
  select: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
  },
  textarea: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
    resize: 'vertical',
  },
  btn: {
    display: 'inline-flex',
    padding: '12px 24px',
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 900,
    textTransform: 'uppercase',
    border: '3px solid #251720',
    cursor: 'pointer',
    boxShadow: '4px 4px 0px #251720',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
    textDecoration: 'none',
    color: '#251720',
    fontSize: '0.9rem',
  },
  btnEmerald: {
    background: '#00D27F',
  },
  btnGold: {
    background: '#FFD600',
  },
  footer: {
    padding: '24px 32px',
    borderTop: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const CheckIcon = ({ color = '#00D27F' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" style={{ marginTop: '4px', flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Sponsor = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    contactName: '',
    goals: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sponsor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: formData.orgName,
          contactName: formData.contactName,
          email: formData.email,
          message: formData.goals,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div style={styles.body}>
      <style>{`
        /* Focus indicators for keyboard navigation */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        textarea:focus-visible,
        select:focus-visible {
          outline: 3px solid #00D27F;
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Reduced motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <div style={styles.systemContainer}>
        <Header />

        {/* Hero Split */}
        <section style={styles.heroSplit}>
          <div style={styles.heroText}>
            <span style={styles.monoLabel}>SPONSORSHIP</span>
            <h1 style={styles.h1}>POWER THE NETWORK.</h1>
            <p style={{ fontSize: '1rem', color: '#5A4C55', maxWidth: '500px', lineHeight: '1.4' }}>
              Support London's distributed tech ecosystem. Q3 2026.
            </p>
          </div>
          <div style={styles.visualWell}>
            <div style={styles.blueprintGrid} />
            <svg width="300" height="300" viewBox="0 0 100 100" style={{ position: 'relative', zIndex: 2 }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#00D27F" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="#FFD600" strokeWidth="0.5" />
              <rect x="35" y="35" width="30" height="30" fill="none" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="50" cy="50" r="4" fill="#00D27F" />
              <text x="50" y="75" fontFamily="JetBrains Mono" fontSize="3" fill="#FFFFFF" textAnchor="middle">SPONSOR</text>
            </svg>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section style={{ ...styles.tiersGrid, gridTemplateColumns: '1fr' }}>
          <div style={{ ...styles.tierCard, padding: '24px 32px' }}>
            <span style={styles.monoLabel}>WHY SPONSOR</span>
            <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2rem', textTransform: 'uppercase', marginBottom: '12px', lineHeight: '0.95' }}>
              REACH LONDON'S TECH BUILDERS.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '1000px' }}>
              <div>
                <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.25rem', fontWeight: 900, marginBottom: '8px' }}>DISTRIBUTED REACH</h3>
                <p style={{ color: '#5A4C55', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  Events across London. AI labs, biotech startups, web3 builders, design studios. Your brand reaches the entire ecosystem, not just one venue.
                </p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.25rem', fontWeight: 900, marginBottom: '8px' }}>BUILDER AUDIENCE</h3>
                <p style={{ color: '#5A4C55', fontSize: '0.95rem', lineHeight: '1.4' }}>
                  Founders, engineers, researchers. People building the future. Active participants, not passive attendees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section id="inquiry" style={styles.inquirySection}>
          <div style={styles.inquirySidebar}>
            <span style={{ ...styles.monoLabel, color: '#00D27F' }}>CONTACT US</span>
            <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.75rem', textTransform: 'uppercase', margin: '8px 0', lineHeight: '0.95' }}>
              LET'S TALK.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: '1.4' }}>
              Custom packages available. We'll get back to you within 24 hours.
            </p>
          </div>
          <div style={styles.formContainer}>
            {submitted ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                gap: '16px',
              }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00D27F" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#00D27F', fontSize: '1.2rem', textAlign: 'center' }}>
                  MESSAGE SENT
                </p>
              </div>
            ) : (
              <form style={styles.gridForm} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>COMPANY NAME</label>
                  <input
                    type="text"
                    name="orgName"
                    placeholder="Your company"
                    value={formData.orgName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>YOUR NAME</label>
                  <input
                    type="text"
                    name="contactName"
                    placeholder="Your name"
                    value={formData.contactName}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroupFull}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.formGroupFull}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>MESSAGE</label>
                  <textarea
                    rows={4}
                    name="goals"
                    placeholder="Tell us about your sponsorship goals..."
                    value={formData.goals}
                    onChange={handleChange}
                    style={styles.textarea}
                  />
                </div>
                <div style={styles.formGroupFull}>
                  <button
                    type="submit"
                    style={{ ...styles.btn, ...styles.btnEmerald, width: 'fit-content' }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.transform = 'translate(4px, 4px)';
                      e.currentTarget.style.boxShadow = '2px 2px 0px #251720';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.boxShadow = '6px 6px 0px #251720';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.boxShadow = '6px 6px 0px #251720';
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.monoLabel}>EMERGENCE_PROTOCOL © 2026 // LONDON</div>
          <div style={{ display: 'flex', gap: '32px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', fontWeight: 700 }}>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>TERMS</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>PRIVACY</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>MANIFESTO</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Sponsor;
