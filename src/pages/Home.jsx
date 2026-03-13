import React from 'react';
import { Link } from 'react-router-dom';

const NetworkSVG = () => (
  <svg viewBox="0 0 500 500" style={{ width: '100%', height: '100%' }}>
    <defs>
      <style>{`
        @keyframes drawLine {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulseNode {
          0% { filter: drop-shadow(0px 0px 4px #00D27F); }
          50% { filter: drop-shadow(0px 0px 16px #00D27F); }
          100% { filter: drop-shadow(0px 0px 4px #00D27F); }
        }
      `}</style>
    </defs>
    <line x1="100" y1="200" x2="200" y2="100" stroke="#251720" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'drawLine 3s infinite alternate ease-in-out' }} />
    <line x1="200" y1="100" x2="400" y2="100" stroke="#251720" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'drawLine 3s infinite alternate ease-in-out', animationDelay: '0.5s' }} />
    <line x1="400" y1="100" x2="400" y2="300" stroke="#251720" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'drawLine 3s infinite alternate ease-in-out', animationDelay: '1s' }} />
    <line x1="400" y1="300" x2="300" y2="400" stroke="#251720" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'drawLine 4s infinite alternate ease-in-out', animationDelay: '1.5s' }} />
    <line x1="200" y1="100" x2="200" y2="300" stroke="#251720" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" d="M200,100 L200,300 L100,400" style={{ animation: 'drawLine 4s infinite alternate ease-in-out', animationDelay: '1.5s' }} />
    <circle cx="100" cy="200" r="8" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="200" cy="100" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="100" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="400" cy="300" r="12" fill="#00D27F" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="400" r="8" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="100" cy="400" r="10" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="200" cy="300" r="14" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="300" cy="300" r="6" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="200" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="200" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <rect x="185" y="285" width="30" height="30" fill="none" stroke="#251720" strokeWidth="2" strokeDasharray="4" />
    <text x="220" y="315" fontFamily="JetBrains Mono" fontSize="10" fill="#251720">KACHETTE</text>
  </svg>
);

const Pill = ({ children, active }) => (
  <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    border: '2px solid #251720',
    background: active ? '#00D27F' : '#FFFFFF',
    textTransform: 'uppercase',
  }}>
    {children}
  </span>
);

const Home = ({ customStyles }) => {
  return (
    <>
      <section style={customStyles.hero} className="hero-responsive">
        <div style={customStyles.heroContent}>
          <span style={{ ...customStyles.monoLabel, marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Pill active>APRIL 28-30, 2026</Pill>
            <span>LONDON</span>
          </span>
          <h1 style={customStyles.h1}>LONDON'S TECH SCENE, EMERGING.</h1>
          <p style={customStyles.subtitle}>Three days. Fifty venues. One city finally seeing itself.</p>
          <div style={customStyles.heroCtas}>
            <Link to="/host" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>HOST A NODE</Link>
            <Link to="/sponsor" style={{ ...customStyles.btn, ...customStyles.btnSecondary }}>BECOME A SPONSOR</Link>
          </div>
        </div>
        <div style={customStyles.heroVisual}>
          <NetworkSVG />
        </div>
      </section>

      <section style={customStyles.explanation} className="explanation-responsive">
        <div style={customStyles.explHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>THE_THESIS // 01</span>
          <h2 style={customStyles.explHeaderH2}>WHY DISTRIBUTED?</h2>
        </div>
        <div style={customStyles.explContent}>
          <p style={customStyles.explParagraph}>Traditional tech conferences put everyone in a dark room to listen to a single broadcast. Emergence inverts this architecture.</p>
          <p style={customStyles.explParagraph}>For three days, offices, cafes, warehouses, and studios across London become active nodes in the network. Each node hosts autonomous programming: workshops, debates, hackathons, dinners, governed by the hosts but discoverable through the central protocol.</p>
          <p style={customStyles.explParagraph}>This is not a top-down event. It's a peer-to-peer protocol for London's tech ecosystem to map itself, share bandwidth, and build unexpected connections. You don't just attend Emergence; you plug into it.</p>
        </div>
      </section>

      <section style={customStyles.stats} className="stats-responsive">
        <div style={customStyles.statItem}>
          <div style={customStyles.statNumber}>50+</div>
          <div style={customStyles.statLabel}>Active Nodes</div>
        </div>
        <div style={customStyles.statItem}>
          <div style={customStyles.statNumber}>3 Days</div>
          <div style={customStyles.statLabel}>Continuous Programming</div>
        </div>
        <div style={customStyles.statItem}>
          <div style={customStyles.statNumber}>100%</div>
          <div style={customStyles.statLabel}>Peer-to-Peer</div>
        </div>
      </section>

      <section style={customStyles.venue}>
        <div style={customStyles.venueHeader}>
          <span style={{ ...customStyles.monoLabel, color: '#FFD600' }}>CENTRAL_HUB // 03</span>
          <h2 style={customStyles.venueH2}>KACHETTE</h2>
        </div>
        <div style={customStyles.venueContent}>
          <div style={customStyles.venueLeft}>
            <p style={customStyles.venueParagraph}>While the network operates in distributed mode, Kachette serves as the central router. A 10,000 sq ft multi-level venue in East London, hosting keynotes, demo stages, and the coordination hub.</p>
            <p style={customStyles.venueParagraph}>Think of it as the kernel: always running, routing connections between nodes, and providing the baseline infrastructure for the entire event.</p>
            <div style={customStyles.venueDetails}>
              <div style={customStyles.venueDetailItem}>
                <span style={customStyles.venueDetailLabel}>LOCATION</span>
                <span style={customStyles.venueDetailValue}>East London</span>
              </div>
              <div style={customStyles.venueDetailItem}>
                <span style={customStyles.venueDetailLabel}>CAPACITY</span>
                <span style={customStyles.venueDetailValue}>500+ concurrent</span>
              </div>
              <div style={customStyles.venueDetailItem}>
                <span style={customStyles.venueDetailLabel}>ROLE</span>
                <span style={customStyles.venueDetailValue}>Central Hub</span>
              </div>
            </div>
          </div>
          <div style={customStyles.venueRight}>
            <div style={customStyles.venueImagePlaceholder}>
              [VENUE IMAGE]
            </div>
          </div>
        </div>
      </section>

      <section style={customStyles.emailCapture}>
        <div style={customStyles.emailCaptureContent}>
          <span style={customStyles.monoLabel}>STAY_CONNECTED // 04</span>
          <h2 style={customStyles.emailH2}>GET UPDATES</h2>
          <p style={customStyles.emailParagraph}>Node announcements, speaker reveals, and protocol updates.</p>
          <form style={customStyles.emailForm}>
            <input type="email" placeholder="your@email.com" style={customStyles.emailInput} />
            <button type="submit" style={{ ...customStyles.btn, ...customStyles.btnPrimary }}>SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
