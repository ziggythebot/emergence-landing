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
    padding: '64px',
    borderRight: '3px solid #251720',
    background: '#251720',
    color: '#FFFFFF',
  },
  formContainer: {
    padding: '80px 64px',
    background: '#FFFFFF',
  },
  formSection: {
    marginBottom: '64px',
    maxWidth: '800px',
  },
  formSectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
    borderBottom: '3px solid #251720',
    paddingBottom: '12px',
  },
  sectionNum: {
    fontFamily: "'JetBrains Mono', monospace",
    background: '#251720',
    color: '#FFFFFF',
    padding: '4px 8px',
    fontSize: '0.9rem',
  },
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginBottom: '24px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  fieldFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    gridColumn: 'span 2',
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
    venueName: '',
    postcode: '',
    capacity: '',
    venueDescription: '',
    eventCategory: 'HACKATHON / BUILD',
    preferredDate: 'APRIL 28 (DAY 01)',
    programmingTitle: '',
    leadSpeaker: '',
    digitalHandle: '',
    synopsis: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [btnPressed, setBtnPressed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={customStyles.body}>
      <div style={customStyles.systemContainer}>
        <Header />

        <div className="form-hero-grid" style={customStyles.formHero}>
          <aside className="form-sidebar-resp" style={customStyles.formSidebar}>
            <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>NODE_INITIALIZATION_PROTOCOL</span>
            <h1 style={{ fontSize: '3.5rem', marginTop: '24px', color: '#FFFFFF' }}>INITIALIZE YOUR NODE.</h1>
            <p style={{ marginTop: '32px', fontSize: '1.1rem', opacity: 0.8, fontFamily: "'DM Sans', sans-serif" }}>
              Apply to register your space on the Emergence 2026 grid. Every node is an autonomous point of connection in the London tech renaissance.
            </p>
            <div style={{ marginTop: '64px', border: '2px solid #00D27F', padding: '24px' }}>
              <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>SYSTEM_STATUS</span>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#FFFFFF' }}>
                &gt; Grid density: High<br />
                &gt; Latency: 12ms<br />
                &gt; Active nodes: 142/200
              </p>
            </div>
          </aside>

          <main className="form-container-resp" style={customStyles.formContainer}>
            {submitted ? (
              <div style={{ maxWidth: '800px', textAlign: 'center', padding: '80px 0' }}>
                <span style={{ ...customStyles.monoLabel, color: '#00D27F', fontSize: '1rem' }}>SUBMISSION_RECEIVED</span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '16px', color: '#251720' }}>NODE APPLICATION UPLOADED.</h2>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem', color: '#5A4C55', marginTop: '24px' }}>
                  Your application has been queued for grid compatibility review. Response time: &lt; 48hrs.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ ...customStyles.btn, marginTop: '48px' }}
                >
                  SUBMIT ANOTHER NODE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* Section 01 */}
                <div style={customStyles.formSection}>
                  <div style={customStyles.formSectionTitle}>
                    <span style={customStyles.sectionNum}>01</span>
                    <h2 style={{ fontSize: '1.5rem', color: '#251720' }}>VENUE INFRASTRUCTURE</h2>
                  </div>
                  <div className="input-group-resp" style={customStyles.inputGroup}>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>VENUE NAME</label>
                      <FocusableInput
                        type="text"
                        name="venueName"
                        placeholder="e.g. THE SIGNAL LAB"
                        value={formData.venueName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>POSTCODE / LOCATION</label>
                      <FocusableInput
                        type="text"
                        name="postcode"
                        placeholder="e.g. E1 6HU"
                        value={formData.postcode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-full-resp" style={customStyles.fieldFull}>
                      <label style={customStyles.label}>PHYSICAL CAPACITY (PEOPLE)</label>
                      <FocusableInput
                        type="number"
                        name="capacity"
                        placeholder="40"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="field-full-resp" style={customStyles.fieldFull}>
                      <label style={customStyles.label}>VENUE DESCRIPTION</label>
                      <FocusableInput
                        as="textarea"
                        name="venueDescription"
                        rows={3}
                        placeholder="Describe the spatial qualities and technical facilities..."
                        value={formData.venueDescription}
                        onChange={handleChange}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 02 */}
                <div style={customStyles.formSection}>
                  <div style={customStyles.formSectionTitle}>
                    <span style={customStyles.sectionNum}>02</span>
                    <h2 style={{ fontSize: '1.5rem', color: '#251720' }}>NODE PROGRAMMING</h2>
                  </div>
                  <div className="input-group-resp" style={customStyles.inputGroup}>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>EVENT CATEGORY</label>
                      <FocusableInput
                        as="select"
                        name="eventCategory"
                        value={formData.eventCategory}
                        onChange={handleChange}
                        required
                      >
                        <option>HACKATHON / BUILD</option>
                        <option>DEBATE / SALON</option>
                        <option>DEMO DAY</option>
                        <option>PEER-TO-PEER WORKSHOP</option>
                        <option>NETWORKING SYNC</option>
                      </FocusableInput>
                    </div>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>PREFERRED DATE</label>
                      <FocusableInput
                        as="select"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                      >
                        <option>APRIL 28 (DAY 01)</option>
                        <option>APRIL 29 (DAY 02)</option>
                        <option>APRIL 30 (DAY 03)</option>
                      </FocusableInput>
                    </div>
                    <div className="field-full-resp" style={customStyles.fieldFull}>
                      <label style={customStyles.label}>PROGRAMMING TITLE</label>
                      <FocusableInput
                        type="text"
                        name="programmingTitle"
                        placeholder="The Future of Distributed Compute..."
                        value={formData.programmingTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Section 03 */}
                <div style={customStyles.formSection}>
                  <div style={customStyles.formSectionTitle}>
                    <span style={customStyles.sectionNum}>03</span>
                    <h2 style={{ fontSize: '1.5rem', color: '#251720' }}>CURATION &amp; VOICES</h2>
                  </div>
                  <div className="input-group-resp" style={customStyles.inputGroup}>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>LEAD SPEAKER / HOST</label>
                      <FocusableInput
                        type="text"
                        name="leadSpeaker"
                        placeholder="Full Name"
                        value={formData.leadSpeaker}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div style={customStyles.field}>
                      <label style={customStyles.label}>DIGITAL HANDLE (X/GH)</label>
                      <FocusableInput
                        type="text"
                        name="digitalHandle"
                        placeholder="@handle"
                        value={formData.digitalHandle}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field-full-resp" style={customStyles.fieldFull}>
                      <label style={customStyles.label}>PROPOSED TOPICS / SYNOPSIS</label>
                      <FocusableInput
                        as="textarea"
                        name="synopsis"
                        rows={4}
                        placeholder="Outline the core thesis of your node session..."
                        value={formData.synopsis}
                        onChange={handleChange}
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div style={{ borderTop: '3px solid #251720', paddingTop: '40px' }}>
                  <span style={customStyles.monoLabel}>VERIFY ALL FIELDS BEFORE UPLOAD</span>
                  <button
                    type="submit"
                    style={{
                      ...customStyles.btn,
                      ...(btnPressed ? customStyles.btnActive : {}),
                    }}
                    onMouseDown={() => setBtnPressed(true)}
                    onMouseUp={() => setBtnPressed(false)}
                    onMouseLeave={() => setBtnPressed(false)}
                  >
                    SUBMIT TO GRID
                  </button>
                  <p style={{ marginTop: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: '#5A4C55' }}>
                    By submitting, you agree to the Emergence Node Protocol. Applications are reviewed for grid compatibility and technical relevance. Response time: &lt; 48hrs.
                  </p>
                </div>
              </form>
            )}
          </main>
        </div>

        <footer style={customStyles.footer}>
          <div style={{ ...customStyles.monoLabel, marginBottom: 0 }}>© 2026 EMERGENCE PROTOCOL // LDN</div>
          <div style={{ display: 'flex', gap: '24px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>
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
