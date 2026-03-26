import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import EmailCapture from '../components/EmailCapture';

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
  pageLayout: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    borderBottom: '3px solid #251720',
    flex: 1,
  },
  sidebar: {
    padding: '48px',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    color: '#251720',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: '48px 64px',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentInner: {
    maxWidth: '800px',
    width: '100%',
  },
  sectionBox: {
    background: '#EAF8F5',
    padding: '32px',
    border: '3px solid #251720',
    marginBottom: '32px',
  },
  sectionTitle: {
    display: 'inline-block',
    background: '#00D27F',
    color: '#251720',
    padding: '8px 16px',
    border: '3px solid #251720',
    boxShadow: '4px 4px 0px #251720',
    marginBottom: '16px',
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 900,
    fontSize: '1.5rem',
    textTransform: 'uppercase',
  },
  email: {
    color: '#00D27F',
    textDecoration: 'none',
    fontWeight: 700,
    fontSize: '1.25rem',
  },
  logosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '24px',
  },
  logoBox: {
    height: '100px',
    background: '#FFFFFF',
    border: '3px solid #251720',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#5A4C55',
    textAlign: 'center',
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
    fontSize: '1rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
    boxShadow: '6px 6px 0px #251720',
    marginTop: '16px',
  },
  btnActive: {
    transform: 'translate(4px, 4px)',
    boxShadow: '2px 2px 0px #251720',
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

const Partners = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
        body: JSON.stringify({ ...formData, message: 'Corporate partnership inquiry' }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '' });
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
      <Helmet>
        <title>Partners - Emergence London 2026</title>
        <meta name="description" content="Community and corporate partnerships. Coworking spaces, universities, accelerators, and sponsors backing Emergence London 2026." />
      </Helmet>
      <div style={customStyles.systemContainer}>
        <Header />

        <div style={customStyles.pageLayout}>
          <aside style={customStyles.sidebar}>
            <div>
              <h1 style={{ fontSize: '3.5rem', marginTop: '24px', color: '#251720', lineHeight: 1.1 }}>
                PARTNERS.
              </h1>
              <p style={{ fontSize: '1.1rem', marginTop: '16px', color: '#5A4C55', lineHeight: '1.6' }}>
                The companies and communities behind Emergence.
              </p>
            </div>
          </aside>

          <main style={customStyles.content}>
            <div style={customStyles.contentInner}>
              <div style={customStyles.sectionBox}>
                <div style={customStyles.sectionTitle}>Community partners</div>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px', color: '#251720' }}>
                  We're announcing our first community partners soon. If you're a coworking space, university, accelerator, media outlet, developer community or government organisation — get in touch. We'll get you onboarded quickly.
                </p>
                <a href="mailto:andy@emergence.london" style={customStyles.email}>
                  andy@emergence.london
                </a>

                <div style={customStyles.logosGrid}>
                  <a
                    href="https://ramenclub.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...customStyles.logoBox,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={new URL('../assets/partners/ramen-club.jpg', import.meta.url).href}
                      alt="Ramen Club"
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                    />
                  </a>
                  <a
                    href="https://ethlondon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...customStyles.logoBox,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={new URL('../assets/partners/ethlondon.jpg', import.meta.url).href}
                      alt="ETHLondon"
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                    />
                  </a>
                  <a
                    href="https://x.com/SuperteamUK"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...customStyles.logoBox,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={new URL('../assets/partners/superteam-uk.jpg', import.meta.url).href}
                      alt="Superteam UK"
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                    />
                  </a>
                  <a
                    href="https://newspeak.house"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...customStyles.logoBox,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={new URL('../assets/partners/newspeak-house.jpg', import.meta.url).href}
                      alt="Newspeak House"
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                    />
                  </a>
                  <a
                    href="https://www.encodeclub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...customStyles.logoBox,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <img
                      src={new URL('../assets/partners/encode-club.jpg', import.meta.url).href}
                      alt="Encode Club"
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
                    />
                  </a>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                  <div style={customStyles.logoBox}>Coming<br/>Soon</div>
                </div>
              </div>

              <div style={{ background: '#FFF9E6', padding: '32px', border: '3px solid #251720', marginBottom: '32px' }}>
                <div style={{ ...customStyles.sectionTitle, background: '#FFD600' }}>Corporate partnerships</div>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '16px', color: '#251720' }}>
                  Emergence reaches London's entire AI and tech scene across three days. There are a limited number of partnership opportunities — featured events, calendar branding, daily email, and the official after party.
                </p>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px', color: '#251720' }}>
                  We're finalising packages now. Leave your details and we'll send them over as soon as they're ready.
                </p>

                {submitted ? (
                  <div style={{ 
                    padding: '32px', 
                    background: '#FFFFFF', 
                    border: '3px solid #251720',
                    textAlign: 'center',
                  }}>
                    <p style={{ 
                      fontFamily: "'Epilogue', sans-serif", 
                      fontSize: '1.5rem', 
                      fontWeight: 900,
                      color: '#00D27F',
                      margin: 0,
                    }}>
                      THANKS — WE'LL BE IN TOUCH.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                    <div style={customStyles.field}>
                      <label htmlFor="name" style={customStyles.label}>Name *</label>
                      <FocusableInput
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div style={customStyles.field}>
                      <label htmlFor="email" style={customStyles.label}>Email *</label>
                      <FocusableInput
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div style={customStyles.field}>
                      <label htmlFor="company" style={customStyles.label}>Company *</label>
                      <FocusableInput
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        ...customStyles.btn,
                        ...(btnPressed ? customStyles.btnActive : {}),
                        opacity: isSubmitting ? 0.6 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      }}
                      onMouseDown={() => setBtnPressed(true)}
                      onMouseUp={() => setBtnPressed(false)}
                      onMouseLeave={() => setBtnPressed(false)}
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </main>
        </div>

        <EmailCapture sourcePage="Partners" />

        <style>{`
          /* Focus indicators for keyboard navigation */
          button:focus-visible,
          a:focus-visible,
          input:focus-visible {
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

          @media (max-width: 768px) {
            .system-container {
              border-left: none !important;
              border-right: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Partners;
