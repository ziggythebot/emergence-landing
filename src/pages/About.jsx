import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ customStyles }) => {
  return (
    <div style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <span style={{ ...customStyles.monoLabel, color: '#FFD600' }}>ABOUT // 05</span>
      <h1 style={{ ...customStyles.h1, fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '16px' }}>
        WHY EMERGENCE EXISTS
      </h1>

      <div style={{ marginTop: '48px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          The Problem
        </h2>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          London has one of the densest concentrations of AI and tech talent in the world. Over 300 companies building, thousands of engineers shipping, billions in funding deployed.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          But the ecosystem doesn't see itself. Teams work in parallel, unaware of adjacent breakthroughs. Founders solve the same problems independently. The network exists but operates at low bandwidth.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem' }}>
          Traditional conferences try to solve this by putting everyone in a dark room to watch slides. Emergence inverts the model.
        </p>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          The Architecture
        </h2>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          Instead of centralization, we build a distributed protocol. Fifty venues across London become active nodes. Each node runs autonomous programming: workshops, debates, demos, dinners.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          Kachette serves as the central hub, routing connections and hosting keynotes. But the real value happens at the edges: in offices, warehouses, and living rooms where small groups go deep on specific problems.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem' }}>
          Attendees don't buy a single ticket. They build their own path through the city, navigating between nodes based on their interests and frequency.
        </p>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          Why London
        </h2>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          London's geography enables this. The density of Zone 1 and East London means you can hit 5 events in a day without leaving a 3-mile radius.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          The ecosystem is mature enough to sustain distributed programming but young enough to benefit from increased connectivity. The timing is right.
        </p>
      </div>

      <div style={{ marginTop: '64px' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          What Success Looks Like
        </h2>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          Three days in April 2026. Fifty nodes operating in parallel. Thousands of builders moving through the city, forming unexpected connections.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          Six months later: new companies founded, talent reallocated, ideas cross-pollinated. The network operates at higher bandwidth because it finally saw itself clearly.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem' }}>
          That's Emergence. Not a conference. A protocol for London's tech ecosystem to map itself, share bandwidth, and build unexpected connections.
        </p>
      </div>

      <div style={{ marginTop: '64px', padding: '48px', background: '#EAF8F5', border: '3px solid #251720' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          The Team
        </h2>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem', marginBottom: '20px' }}>
          Emergence is organized by a small team of builders, operators, and community organizers embedded in London's tech scene.
        </p>
        <p style={{ ...customStyles.explParagraph, fontSize: '1.15rem' }}>
          We're not event professionals. We're engineers and founders who want to see London's ecosystem operate at full capacity. Details coming soon.
        </p>
      </div>

      <div style={{ marginTop: '64px', padding: '48px', background: '#FFFFFF', border: '3px solid #251720' }}>
        <h2 style={{ ...customStyles.explHeaderH2, fontSize: '2rem', marginBottom: '24px' }}>
          Get Involved
        </h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              Host a Node
            </h3>
            <p style={{ ...customStyles.explParagraph, marginBottom: '12px' }}>
              Turn your space into part of the network.
            </p>
            <Link to="/host" style={{ ...customStyles.btn, ...customStyles.btnPrimary, display: 'inline-block', textDecoration: 'none' }}>
              APPLY TO HOST →
            </Link>
          </div>
          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontFamily: "'Epilogue', sans-serif", fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              Sponsor the Ecosystem
            </h3>
            <p style={{ ...customStyles.explParagraph, marginBottom: '12px' }}>
              Fund valuable programming and support builders.
            </p>
            <Link to="/sponsor" style={{ ...customStyles.btn, ...customStyles.btnSecondary, display: 'inline-block', textDecoration: 'none' }}>
              VIEW PACKAGES →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '48px', textAlign: 'center' }}>
        <Link to="/" style={{ ...customStyles.navLink, fontSize: '1rem' }}>
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default About;
