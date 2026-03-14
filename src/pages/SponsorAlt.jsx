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
    padding: '80px 64px',
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
    fontSize: '4.5rem',
    textTransform: 'uppercase',
    lineHeight: 0.95,
    marginBottom: '32px',
  },
  visualWell: {
    background: '#251720',
    padding: '64px',
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
    padding: '64px',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
  tierCardAlt: {
    padding: '64px',
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
    fontSize: '3.5rem',
    fontWeight: 900,
    margin: '16px 0',
    color: '#251720',
  },
  benefitList: {
    listStyle: 'none',
    marginTop: '32px',
    flexGrow: 1,
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '16px',
    fontSize: '1.1rem',
  },
  inquirySection: {
    display: 'grid',
    gridTemplateColumns: '400px 1fr',
    background: '#251720',
    color: '#FFFFFF',
  },
  inquirySidebar: {
    padding: '64px',
    borderRight: '3px solid rgba(255,255,255,0.1)',
  },
  formContainer: {
    padding: '80px 64px',
  },
  gridForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  formGroupFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    gridColumn: 'span 2',
  },
  input: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '16px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
  },
  select: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '16px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
  },
  textarea: {
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.2)',
    padding: '16px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#FFFFFF',
    outline: 'none',
    width: '100%',
    resize: 'vertical',
  },
  btn: {
    display: 'inline-flex',
    padding: '16px 32px',
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 900,
    textTransform: 'uppercase',
    border: '3px solid #251720',
    cursor: 'pointer',
    boxShadow: '6px 6px 0px #251720',
    transition: 'transform 0.1s',
    textDecoration: 'none',
    color: '#251720',
    fontSize: '1rem',
  },
  btnEmerald: {
    background: '#00D27F',
  },
  btnGold: {
    background: '#FFD600',
  },
  footer: {
    padding: '48px 64px',
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

const SponsorAlt = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    tier: 'SELECT ALLOCATION...',
    sector: '',
    goals: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollToInquiry = () => {
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getBtnStyle = (type, isActive) => ({
    ...styles.btn,
    ...(type === 'emerald' ? styles.btnEmerald : styles.btnGold),
    ...(isActive ? { transform: 'translate(4px, 4px)', boxShadow: '2px 2px 0px #251720' } : {}),
    marginTop: '40px',
  });

  return (
    <div style={styles.body}>
      <div style={styles.systemContainer}>
        <Header />

        {/* Hero Split */}
        <section style={styles.heroSplit}>
          <div style={styles.heroText}>
            <span style={styles.monoLabel}>TRANSMISSION // GRID_SPONSORSHIP</span>
            <h1 style={styles.h1}>FUEL THE RENAISSANCE.</h1>
            <p style={{ fontSize: '1.25rem', color: '#5A4C55', maxWidth: '500px' }}>
              We are building the infrastructure for London's tech future. Sponsors don't just get visibility; they provide the bandwidth that powers every Node in the network.
            </p>
          </div>
          <div style={styles.visualWell}>
            <div style={styles.blueprintGrid} />
            <svg width="300" height="300" viewBox="0 0 100 100" style={{ position: 'relative', zIndex: 2 }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="#00D27F" strokeWidth="0.5" strokeDasharray="2 2" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="#FFD600" strokeWidth="0.5" />
              <rect x="35" y="35" width="30" height="30" fill="none" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="50" cy="50" r="4" fill="#00D27F" />
              <text x="50" y="75" fontFamily="JetBrains Mono" fontSize="3" fill="#FFFFFF" textAnchor="middle">CAPITAL_INJECTION_CORE</text>
            </svg>
          </div>
        </section>

        {/* Tiers Grid */}
        <section style={styles.tiersGrid}>
          {/* Tier 1 */}
          <div style={styles.tierCard}>
            <div style={styles.pill}>FOUNDING_NODE</div>
            <div style={styles.priceTag}>£10,000</div>
            <p style={{ color: '#5A4C55', fontWeight: 500 }}>
              Establish a presence within the distributed network. Perfect for scaling startups and community-led organisations.
            </p>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckIcon color="#00D27F" />
                Logo placement on the Unified Map &amp; Protocol Docs
              </li>
              <li style={styles.benefitItem}>
                <CheckIcon color="#00D27F" />
                Direct routing: Host up to 2 specific community events
              </li>
              <li style={styles.benefitItem}>
                <CheckIcon color="#00D27F" />
                Access to the 'Sync' private lounge at Kachette
              </li>
            </ul>
            <button
              style={getBtnStyle('emerald', activeBtn === 'founding')}
              onMouseDown={() => setActiveBtn('founding')}
              onMouseUp={() => { setActiveBtn(null); scrollToInquiry(); }}
              onMouseLeave={() => setActiveBtn(null)}
            >
              SELECT TIER
            </button>
          </div>

          {/* Tier 2 */}
          <div style={styles.tierCardAlt}>
            <div style={styles.pillGold}>SYSTEM_ARCHITECT</div>
            <div style={styles.priceTag}>£20,000</div>
            <p style={{ color: '#5A4C55', fontWeight: 500 }}>
              Directly influence the topology of the event. For industry leaders shaping the future of the London ecosystem.
            </p>
            <ul style={styles.benefitList}>
              <li style={styles.benefitItem}>
                <CheckIcon color="#251720" />
                Premier "Core Node" placement in the central physical hub
              </li>
              <li style={styles.benefitItem}>
                <CheckIcon color="#251720" />
                Data Insights: Full post-event network flow analysis
              </li>
              <li style={styles.benefitItem}>
                <CheckIcon color="#251720" />
                Keynote position at the Opening Sync ceremony
              </li>
              <li style={styles.benefitItem}>
                <CheckIcon color="#251720" />
                Branded 'Node' sponsorship for 5 indie developer spaces
              </li>
            </ul>
            <button
              style={getBtnStyle('gold', activeBtn === 'architect')}
              onMouseDown={() => setActiveBtn('architect')}
              onMouseUp={() => { setActiveBtn(null); scrollToInquiry(); }}
              onMouseLeave={() => setActiveBtn(null)}
            >
              SELECT TIER
            </button>
          </div>
        </section>

        {/* Inquiry Section */}
        <section id="inquiry" style={styles.inquirySection}>
          <div style={styles.inquirySidebar}>
            <span style={{ ...styles.monoLabel, color: '#00D27F' }}>DATA_LINK // INQUIRY</span>
            <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2.5rem', textTransform: 'uppercase', margin: '16px 0' }}>
              GET IN THE GRID.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9rem' }}>
              Fill out the packet. Our team will verify your connection and reach out to finalize the injection parameters.
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
                  PACKET_SENT // AWAITING_VERIFICATION
                </p>
              </div>
            ) : (
              <form style={styles.gridForm} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>ORGANISATION_NAME</label>
                  <input
                    type="text"
                    name="orgName"
                    placeholder="e.g. CORE DYNAMICS"
                    value={formData.orgName}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>COMM_LINK_EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="CONTACT@GRID.SYS"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>DESIRED_TIER</label>
                  <select
                    name="tier"
                    value={formData.tier}
                    onChange={handleChange}
                    style={styles.select}
                  >
                    <option>SELECT ALLOCATION...</option>
                    <option>FOUNDING_NODE (£10K)</option>
                    <option>SYSTEM_ARCHITECT (£20K)</option>
                    <option>CUSTOM_INJECTION</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>INDUSTRY_SECTOR</label>
                  <input
                    type="text"
                    name="sector"
                    placeholder="e.g. WEB3 / AI / BIOTECH"
                    value={formData.sector}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroupFull}>
                  <label style={{ ...styles.monoLabel, color: '#FFFFFF' }}>NETWORK_GOALS</label>
                  <textarea
                    rows={4}
                    name="goals"
                    placeholder="HOW DO YOU WANT TO IMPACT THE LONDON TECH ECOSYSTEM?"
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
                    SEND INQUIRY PACKET
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

export default SponsorAlt;
