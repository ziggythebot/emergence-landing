import React from 'react';
import { Link } from 'react-router-dom';

const Host = ({ customStyles }) => {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <span style={{ ...customStyles.monoLabel, color: '#00D27F' }}>HOST_A_NODE // 01</span>
      <h1 style={{ ...customStyles.h1, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>
        TURN YOUR SPACE INTO AN ACTIVE NODE
      </h1>

      <p style={{ ...customStyles.explParagraph, fontSize: '1.25rem', marginTop: '32px' }}>
        Have an office, warehouse, or living room? For three days in April, your space can become part of London's distributed tech festival.
      </p>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          WHAT YOU CONTROL
        </h2>
        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{ borderLeft: '4px solid #00D27F', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Format
            </h3>
            <p style={customStyles.explParagraph}>
              Workshops, talks, hackathons, dinners, demos, debates. You decide what happens in your space.
            </p>
          </div>
          <div style={{ borderLeft: '4px solid #00D27F', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Capacity
            </h3>
            <p style={customStyles.explParagraph}>
              5 people or 500. Intimate fireside chats or standing-room demos. Scale to your space.
            </p>
          </div>
          <div style={{ borderLeft: '4px solid #00D27F', paddingLeft: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>
              Agenda
            </h3>
            <p style={customStyles.explParagraph}>
              Your programming, your speakers, your schedule. Autonomous nodes, discoverable network.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          WHAT WE PROVIDE
        </h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ padding: '20px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <p style={customStyles.explParagraph}>
              <strong>Network Visibility:</strong> Your events appear in the central map, calendar feeds, and discovery protocol.
            </p>
          </div>
          <div style={{ padding: '20px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <p style={customStyles.explParagraph}>
              <strong>Support Funding:</strong> Grants available for valuable programming: esoteric talks, philosophical debates, art-led events that add to the ecosystem.
            </p>
          </div>
          <div style={{ padding: '20px', border: '3px solid #251720', background: '#FFFFFF' }}>
            <p style={customStyles.explParagraph}>
              <strong>Marketing Assets:</strong> Branded templates, social graphics, and promotional support.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          VENUE REQUIREMENTS
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
          <li style={{ padding: '16px', border: '2px solid #251720', fontFamily: "'DM Sans', sans-serif" }}>
            ✓ Located within Greater London
          </li>
          <li style={{ padding: '16px', border: '2px solid #251720', fontFamily: "'DM Sans', sans-serif" }}>
            ✓ Available for at least one full day during April 28-30, 2026
          </li>
          <li style={{ padding: '16px', border: '2px solid #251720', fontFamily: "'DM Sans', sans-serif" }}>
            ✓ Capacity to host 5+ attendees safely
          </li>
          <li style={{ padding: '16px', border: '2px solid #251720', fontFamily: "'DM Sans', sans-serif" }}>
            ✓ Basic AV setup (projector/screen or large monitor)
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '64px', padding: '48px', background: '#EAF8F5', border: '3px solid #251720' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          APPLY TO HOST
        </h2>
        <p style={{ ...customStyles.explParagraph, marginBottom: '32px' }}>
          Applications open February 2026. Share details about your space, proposed programming, and what you want to contribute to the network.
        </p>
        <form style={{ display: 'grid', gap: '16px' }}>
          <input type="text" placeholder="Venue Name" style={{ ...customStyles.emailInput, width: '100%' }} />
          <input type="text" placeholder="Location (Borough/Area)" style={{ ...customStyles.emailInput, width: '100%' }} />
          <input type="email" placeholder="Contact Email" style={{ ...customStyles.emailInput, width: '100%' }} />
          <textarea placeholder="Tell us about your space and proposed programming..." style={{ ...customStyles.emailInput, width: '100%', minHeight: '120px', resize: 'vertical' }} />
          <button type="submit" style={{ ...customStyles.btn, ...customStyles.btnPrimary, justifySelf: 'start' }}>
            SUBMIT APPLICATION
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

export default Host;
