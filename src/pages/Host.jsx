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
            <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>HOST_PROTOCOL</span>
            <h1 style={{ fontSize: '3.5rem', marginTop: '24px', color: '#FFFFFF', lineHeight: 1.1 }}>HOST AN EVENT.</h1>
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

                  <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px', color: '#251720' }}>
                    Open your doors for a demo, host a roof party, talks series, mini conference, art show, the floor is open. Where London tech happens. VCs, AI labs, fintech, web3. You host, we bring the audience. If you need help with ideas or implementation then reach out.
                  </p>

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
      </div>
    </div>
  );
};

export default Host;
