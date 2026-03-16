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
    padding: '24px',
    borderRight: '3px solid #251720',
    background: '#251720',
    color: '#FFFFFF',
  },
  formContainer: {
    padding: '24px 32px',
    background: '#FFFFFF',
  },
  formSection: {
    marginBottom: '12px',
    maxWidth: '800px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '12px',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#251720',
  },
  input: {
    padding: '12px',
    border: '3px solid #251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.9rem',
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
    padding: '12px 32px',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    background: '#00D27F',
    border: '3px solid #251720',
    cursor: 'pointer',
    transition: 'all 0.1s ease',
    boxShadow: '4px 4px 0px #251720',
    marginTop: '16px',
  },
  btnActive: {
    transform: 'translate(3px, 3px)',
    boxShadow: '1px 1px 0px #251720',
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
    padding: '24px',
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

const Contact = () => {
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
            <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>CONTACT</span>
            <h1 style={{ fontSize: '2rem', marginTop: '8px', color: '#FFFFFF', lineHeight: '0.95' }}>GET INVOLVED.</h1>
            <p style={{ marginTop: '12px', fontSize: '0.95rem', opacity: 0.8, fontFamily: "'DM Sans', sans-serif", lineHeight: '1.4' }}>
              Event organizer? Want to add Emergence as co-host? Sponsor inquiry? Drop a message.
            </p>
          </aside>

          <main className="form-container-resp" style={customStyles.formContainer}>
            {submitted ? (
              <div style={{ maxWidth: '800px', textAlign: 'center', padding: '24px 0' }}>
                <span style={{ ...customStyles.monoLabel, color: '#00D27F', fontSize: '0.85rem' }}>MESSAGE RECEIVED</span>
                <h2 style={{ fontSize: '1.75rem', marginTop: '8px', color: '#251720', lineHeight: '0.95' }}>THANKS FOR REACHING OUT.</h2>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#5A4C55', marginTop: '12px' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={customStyles.formSection}>
                  <div style={customStyles.field}>
                    <label style={customStyles.label}>NAME</label>
                    <FocusableInput
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div style={customStyles.field}>
                    <label style={customStyles.label}>EMAIL</label>
                    <FocusableInput
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div style={customStyles.field}>
                    <label style={customStyles.label}>COMPANY / ORGANIZATION (OPTIONAL)</label>
                    <FocusableInput
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={customStyles.field}>
                    <label style={customStyles.label}>MESSAGE</label>
                    <FocusableInput
                      as="textarea"
                      name="message"
                      rows={6}
                      placeholder="What's on your mind?"
                      value={formData.message}
                      onChange={handleChange}
                      style={{ resize: 'vertical' }}
                      required
                    />
                  </div>
                </div>

                <div style={{ borderTop: '3px solid #251720', paddingTop: '16px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      ...customStyles.btn,
                      ...(btnPressed ? customStyles.btnActive : {}),
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onMouseDown={() => setBtnPressed(true)}
                    onMouseUp={() => setBtnPressed(false)}
                    onMouseLeave={() => setBtnPressed(false)}
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
          </main>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .form-hero-grid {
              grid-template-columns: 1fr !important;
            }
            .form-sidebar-resp {
              border-right: none !important;
              border-bottom: 3px solid #251720 !important;
              padding: 32px 24px !important;
            }
            .form-sidebar-resp h1 {
              font-size: 2.5rem !important;
            }
            .form-container-resp {
              padding: 32px 24px !important;
            }
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

export default Contact;
