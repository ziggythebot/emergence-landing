import React, { useState } from 'react';
import Header from '../components/Header';

const NetworkSVG = () => (
  <svg
    style={{ width: '100%', height: '100%', maxHeight: '400px', overflow: 'visible' }}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      @keyframes drawLine {
        to { stroke-dashoffset: 0; }
      }
      @keyframes pulseNode {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
    `}</style>
    <path stroke="#00D27F" strokeWidth="2" fill="none" opacity="0.2" d="M100,50 L100,450 M200,50 L200,450 M300,50 L300,450 M400,50 L400,450" />
    <path stroke="#00D27F" strokeWidth="2" fill="none" opacity="0.2" d="M50,100 L450,100 M50,200 L450,200 M50,300 L450,300 M50,400 L450,400" />
    <path stroke="#00D27F" strokeWidth="3" fill="none" opacity="0.4" d="M100,200 L200,100 L400,100 L400,300 L300,400 L100,400 Z" />
    <path stroke="#00D27F" strokeWidth="3" fill="none" opacity="0.4" d="M200,300 L300,200 L400,200" />
    <path
      stroke="#00D27F"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M100,200 L200,300 L300,300 L400,200"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out' }}
    />
    <path
      stroke="#FFD600"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M200,100 L200,300 L100,400"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out', animationDelay: '1.5s' }}
    />
    <circle cx="100" cy="200" r="8" fill="#00D27F" stroke="#FFFFFF" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="200" cy="100" r="10" fill="#FFFFFF" stroke="#00D27F" strokeWidth="3" />
    <circle cx="400" cy="100" r="8" fill="#FFD600" stroke="#FFFFFF" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #FFD600)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="400" cy="300" r="12" fill="#00D27F" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="300" cy="400" r="8" fill="#FFFFFF" stroke="#00D27F" strokeWidth="3" />
    <circle cx="100" cy="400" r="10" fill="#FFD600" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="200" cy="300" r="14" fill="#00D27F" stroke="#FFFFFF" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="300" cy="300" r="6" fill="#FFFFFF" stroke="#00D27F" strokeWidth="3" />
    <circle cx="300" cy="200" r="8" fill="#FFD600" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="400" cy="200" r="10" fill="#FFFFFF" stroke="#00D27F" strokeWidth="3" />
    <rect x="185" y="285" width="30" height="30" fill="none" stroke="#00D27F" strokeWidth="2" strokeDasharray="4" />
  </svg>
);

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
    background: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(10px)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  formHero: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    borderBottom: '3px solid #251720',
    flex: 1,
  },
  formSidebar: {
    padding: '48px',
    borderRight: '3px solid #251720',
    background: '#251720',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  formContainer: {
    padding: '48px 64px',
    background: '#FFFFFF',
  },
  formSection: {
    marginBottom: '16px',
    maxWidth: '800px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '16px',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#251720',
  },
  input: {
    padding: '16px',
    border: '3px solid #251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1rem',
    outline: 'none',
    background: '#FFFFFF',
    transition: 'all 0.2s',
    width: '100%',
  },
  inputFocus: {
    borderColor: '#00D27F',
    boxShadow: '4px 4px 0px #00D27F',
  },
  btn: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 48px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    boxShadow: '6px 6px 0px #251720',
    marginTop: '32px',
  },
  btnActive: {
    transform: 'translate(4px, 4px)',
    boxShadow: '2px 2px 0px #251720',
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
  footer: {
    padding: '48px',
    borderTop: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const FocusableInput = ({ as: Tag = 'input', ...props }) => {
  const [focused, setFocused] = useState(false);
  const baseStyle = {
    ...customStyles.input,
    ...(focused ? customStyles.inputFocus : {}),
    ...(props.style || {}),
  };
  return (
    <Tag
      {...props}
      style={baseStyle}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const Host = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [btnPressed, setBtnPressed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
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
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer}>
        <Header />

        <div className="form-hero-grid" style={customStyles.formHero}>
          <aside className="form-sidebar-resp" style={customStyles.formSidebar}>
            <div>
              <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>HOST_PROTOCOL</span>
              <h1 style={{ fontSize: '3.5rem', marginTop: '24px', color: '#FFFFFF', lineHeight: 1.1 }}>HOST AN EVENT.</h1>
            </div>
            <div style={{ marginTop: '40px', opacity: 0.8 }}>
              <NetworkSVG />
            </div>
          </aside>

          <main className="form-container-resp" style={customStyles.formContainer}>
            {submitted ? (
              <div style={{ maxWidth: '800px', textAlign: 'center', padding: '80px 0' }}>
                <span style={{ ...customStyles.monoLabel, color: '#00D27F', fontSize: '1rem' }}>REQUEST_RECEIVED</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '16px', color: '#251720' }}>YOU'RE IN THE QUEUE.</h2>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#5A4C55', marginTop: '24px' }}>
                  We'll review your event and add it to the calendar within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
                  <div style={{ background: '#EAF8F5', padding: '32px', border: '3px solid #251720', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: "'Epilogue', sans-serif", fontWeight: 900, textTransform: 'uppercase', color: '#251720' }}>How it works.</h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0', color: '#251720' }}>
                      Create your event on <a href="https://lu.ma" target="_blank" rel="noopener noreferrer" style={{ color: '#00D27F', textDecoration: 'none', fontWeight: 700 }}>Luma</a>. Either email us the event link, or make <a href="mailto:events@emergence.london" style={{ color: '#00D27F', textDecoration: 'none', fontWeight: 700 }}>events@emergence.london</a> a co-host.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0', marginTop: '16px', color: '#251720' }}>
                      We review it and list it to our calendar launching next week.
                    </p>
                  </div>

                  <div style={{ background: '#FFF9E6', padding: '32px', border: '3px solid #251720', marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontFamily: "'Epilogue', sans-serif", fontWeight: 900, textTransform: 'uppercase', color: '#251720' }}>What we want.</h2>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px', color: '#251720' }}>
                      Bringing London's tech scene together. Use your imagination.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px', color: '#251720' }}>
                      Examples: Open your doors for a demo, host a roof party, talks series, mini conference, art show — the floor is open. Where London tech happens. VCs, AI labs, fintech, web3.
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '0', color: '#251720' }}>
                      You host, we bring the audience. If you need help with ideas or implementation then reach out.
                    </p>
                  </div>

                  <div style={{ padding: '24px', border: '3px solid #251720', background: '#FFFFFF', marginBottom: '32px' }}>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#5A4C55', fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>
                      *It must be London tech scene related, happening between April 28-30th.
                    </p>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#5A4C55', fontFamily: "'JetBrains Mono', monospace", margin: '8px 0 0 0' }}>
                      We will be building out some featured events, but for now get cooking.
                    </p>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>

        <footer style={customStyles.footer}>
          <div style={{ ...customStyles.monoLabel, marginBottom: 0 }}>© 2026 EMERGENCE PROTOCOL // LDN</div>
          <div style={{ display: 'flex', gap: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
            <a href="https://x.com/emergenceldn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#251720' }}>X</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>PRIVACY</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>TERMS</a>
            <a href="#" style={{ textDecoration: 'none', color: '#251720' }}>CONTACT</a>
          </div>
        </footer>

        <style>{`
          @media (max-width: 768px) {
            .form-hero-grid {
              grid-template-columns: 1fr !important;
            }
            .form-sidebar-resp {
              border-right: none !important;
              border-bottom: 3px solid #251720 !important;
              padding: 32px 24px !important;
              min-height: auto !important;
            }
            .form-sidebar-resp h1 {
              font-size: 2.5rem !important;
            }
            .form-container-resp {
              padding: 32px 24px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Host;
