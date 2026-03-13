import React from 'react';
import { Link } from 'react-router-dom';

const Sponsor = ({ customStyles }) => {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <span style={{ ...customStyles.monoLabel, color: '#251720' }}>POWER_THE_GRID // 03</span>
      <h1 style={{ ...customStyles.h1, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>
        FUND THE ECOSYSTEM
      </h1>

      <p style={{ ...customStyles.explParagraph, fontSize: '1.25rem', marginTop: '32px' }}>
        Sponsors don't get logos on lanyards. They fund the ecosystem: supporting valuable programming, subsidizing costs for indie developers, and elevating the overall fidelity of the network.
      </p>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          WHERE YOUR FUNDING GOES
        </h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{ padding: '32px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Node Support
            </h3>
            <p style={customStyles.explParagraph}>
              Direct funding for hosts covering venue costs, AV equipment, catering, and speaker travel.
            </p>
          </div>
          <div style={{ padding: '32px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Valuable Programming
            </h3>
            <p style={customStyles.explParagraph}>
              Grants for esoteric talks, philosophical debates, and art-led events that add depth to the ecosystem but might not have commercial backing.
            </p>
          </div>
          <div style={{ padding: '32px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Accessibility
            </h3>
            <p style={customStyles.explParagraph}>
              Subsidizing tickets for indie developers, students, and underrepresented builders who otherwise couldn't attend.
            </p>
          </div>
          <div style={{ padding: '32px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Infrastructure
            </h3>
            <p style={customStyles.explParagraph}>
              The central hub (Kachette), discovery protocol, calendar integration, and network coordination.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          SPONSORSHIP TIERS
        </h2>

        <div style={{ display: 'grid', gap: '32px', marginTop: '32px' }}>
          <div style={{ padding: '40px', border: '4px solid #00D27F', background: '#EAF8F5' }}>
            <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>NETWORK_SPONSOR</span>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2rem', fontWeight: 900, margin: '16px 0' }}>
              £50,000
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'grid', gap: '12px' }}>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Logo on main site and all discovery interfaces</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Branding at Kachette central hub</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Speaking slot at keynote stage</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Sponsor a featured node or event series</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Dedicated email blast to attendee list</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Post-event attendee insights and analytics</li>
            </ul>
            <p style={{ ...customStyles.explParagraph, fontSize: '0.9rem', marginTop: '24px' }}>
              Limited to 3 sponsors
            </p>
          </div>

          <div style={{ padding: '40px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <span style={{ ...customStyles.monoLabel }}>NODE_SPONSOR</span>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2rem', fontWeight: 900, margin: '16px 0' }}>
              £15,000
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'grid', gap: '12px' }}>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Logo on site and discovery protocol</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Sponsor 2-3 specific nodes</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Branded signage at sponsored nodes</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Social media shoutouts</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Attendee list (opt-in contacts only)</li>
            </ul>
            <p style={{ ...customStyles.explParagraph, fontSize: '0.9rem', marginTop: '24px' }}>
              Limited to 8 sponsors
            </p>
          </div>

          <div style={{ padding: '40px', border: '2px solid #251720', background: '#FFFFFF' }}>
            <span style={{ ...customStyles.monoLabel }}>SUPPORTER</span>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '2rem', fontWeight: 900, margin: '16px 0' }}>
              £5,000
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0', display: 'grid', gap: '12px' }}>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Logo on sponsors page</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Social media thank you</li>
              <li style={{ fontFamily: "'DM Sans', sans-serif" }}>✓ Support the ecosystem</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '64px', padding: '48px', background: '#EAF8F5', border: '3px solid #251720' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          INTERESTED IN SPONSORING?
        </h2>
        <p style={{ ...customStyles.explParagraph, marginBottom: '32px' }}>
          Let's talk about how your funding can elevate the network.
        </p>
        <form style={{ display: 'grid', gap: '16px' }}>
          <input type="text" placeholder="Company Name" style={{ ...customStyles.emailInput, width: '100%' }} />
          <input type="email" placeholder="Contact Email" style={{ ...customStyles.emailInput, width: '100%' }} />
          <input type="text" placeholder="Sponsorship Tier Interest" style={{ ...customStyles.emailInput, width: '100%' }} />
          <textarea placeholder="Tell us about your goals and what you want to support..." style={{ ...customStyles.emailInput, width: '100%', minHeight: '120px', resize: 'vertical' }} />
          <button type="submit" style={{ ...customStyles.btn, ...customStyles.btnPrimary, justifySelf: 'start' }}>
            GET IN TOUCH
          </button>
        </form>
      </div>

      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link to="/" style={{ ...customStyles.navLink, fontSize: '1rem' }}>
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Sponsor;
