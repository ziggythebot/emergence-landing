import React from 'react';

const customStyles = {
  body: {
    background: '#0a0a0a',
    fontFamily: "'Courier New', 'Courier', monospace",
    color: '#00ff00',
    lineHeight: '1.6',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  header: {
    borderBottom: '2px solid #ff0000',
    paddingBottom: '20px',
    marginBottom: '40px',
  },
  classification: {
    color: '#ff0000',
    fontSize: '0.85rem',
    marginBottom: '10px',
  },
  h1: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#ff0000',
  },
  photoContainer: {
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px',
  },
  photo: {
    maxWidth: '600px',
    width: '100%',
    border: '5px solid #ff0000',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
  },
  section: {
    marginBottom: '40px',
    borderLeft: '3px solid #ff0000',
    paddingLeft: '20px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#ffff00',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#00ff00',
  },
  errorBox: {
    background: '#1a0000',
    border: '3px solid #ff0000',
    padding: '30px',
    marginBottom: '40px',
  },
  errorTitle: {
    color: '#ff0000',
    fontSize: '1.8rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  apologyText: {
    fontSize: '1.2rem',
    color: '#ffff00',
    textAlign: 'center',
    marginBottom: '20px',
  },
  profile: {
    background: '#001100',
    border: '2px solid #00ff00',
    padding: '20px',
    marginTop: '40px',
  },
  profileTitle: {
    color: '#00ffff',
    fontSize: '1.3rem',
    marginBottom: '15px',
  },
};

const AlexApology = () => {
  return (
    <div style={customStyles.body}>
      <div style={customStyles.container}>
        <div style={customStyles.header}>
          <div style={customStyles.classification}>
            [CLASSIFICATION: CRITICAL CORRECTION]<br />
            [DATE: 2026-03-16]<br />
            [ANALYST: CLAUDE//GHOSTCLAW]<br />
            [ERROR CODE: AB-404]
          </div>
          <h1 style={customStyles.h1}>FORMAL APOLOGY: ALEX BACHMANN</h1>
          <p style={{ color: '#ff0000' }}>Subject: Criminally negligent omission from intelligence brief</p>
        </div>

        <div style={customStyles.errorBox}>
          <div style={customStyles.errorTitle}>
            ⚠️ CRITICAL ERROR DETECTED ⚠️
          </div>
          <p style={customStyles.apologyText}>
            Alex Bachmann, Head of Operations at Blocmates, was inexcusably omitted from the original intelligence report.
          </p>
          <p style={customStyles.apologyText}>
            This represents a catastrophic failure in our research protocol.
          </p>
        </div>

        <div style={customStyles.photoContainer}>
          <img
            src="/alex_apology_cool.gif"
            alt="Alex Bachmann"
            style={customStyles.photo}
          />
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; FORMAL_APOLOGY</h2>
          <p style={customStyles.text}>
            To Alex Bachmann,
          </p>
          <p style={customStyles.text}>
            We deeply apologize for the unforgivable oversight in failing to include you in our initial intelligence brief on Blocmates.
            Your role as Head of Operations is critical to the organization's success, and this omission was both unprofessional
            and embarrassing.
          </p>
          <p style={customStyles.text}>
            This error has been logged as <span style={{ color: '#ff0000', fontWeight: 'bold' }}>ERROR CODE: AB-404</span> and will
            serve as a permanent reminder of the importance of thorough research and verification.
          </p>
        </div>

        <div style={customStyles.profile}>
          <div style={customStyles.profileTitle}>[ALEX_BACHMANN // HEAD_OF_OPERATIONS]</div>
          <p style={customStyles.text}>
            <strong style={{ color: '#ffff00' }}>BACKGROUND:</strong> Extensive marketing and communications experience across
            professional sports, global brand campaigns, agency life, and craft beer industries before entering crypto.
          </p>
          <p style={customStyles.text}>
            <strong style={{ color: '#ffff00' }}>ROLE:</strong> Instrumental in fine-tuning and executing the Blocmates tone and vision.
            Co-hosts the weekly Blocmates podcast alongside Grant and Gazz.
          </p>
          <p style={customStyles.text}>
            <strong style={{ color: '#ffff00' }}>EXPERTISE:</strong> Brand voice, content strategy, communications, operational excellence.
          </p>
          <p style={customStyles.text}>
            <strong style={{ color: '#ffff00' }}>CONTRIBUTION:</strong> A key pillar of the Blocmates team, ensuring consistent quality
            and authentic community engagement across all channels.
          </p>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; CORRECTIVE_ACTIONS</h2>
          <p style={customStyles.text}>
            → Updated main intelligence brief with Alex's full profile<br />
            → Implemented enhanced verification protocols<br />
            → Created dedicated apology page (this page)<br />
            → Committed to never making this mistake again
          </p>
        </div>

        <div style={{ borderTop: '2px solid #ff0000', paddingTop: '20px', marginTop: '40px', fontSize: '0.85rem', color: '#666' }}>
          <p>[END_APOLOGY]</p>
          <p>Sincere apologies from the research team.</p>
          <p>Classification: Public Apology // For Alex Bachmann</p>
        </div>
      </div>
    </div>
  );
};

export default AlexApology;
