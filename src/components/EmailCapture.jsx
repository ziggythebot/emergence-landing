import React, { useState } from 'react';

const EmailCapture = ({ sourcePage = 'Home' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, sourcePage }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
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
    <section style={{
      padding: '48px 32px',
      background: '#251720',
      color: '#FFFFFF',
      textAlign: 'center',
      borderTop: '3px solid #251720',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(#FFFFFF15 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        zIndex: 1,
      }} />
      
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#00D27F',
          display: 'block',
          marginBottom: '12px',
        }}>
          {submitted ? 'SYNCED' : 'GET UPDATES'}
        </span>
        
        <h2 style={{
          fontFamily: "'Epilogue', sans-serif",
          textTransform: 'uppercase',
          lineHeight: '0.95',
          letterSpacing: '-0.02em',
          fontSize: '2rem',
          color: '#FFFFFF',
          marginBottom: '24px',
        }}>
          STAY IN THE LOOP.
        </h2>

        {submitted ? (
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00D27F',
            fontSize: '1rem',
          }}>
            YOU'RE ON THE LIST.
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            gap: '0',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            <input
              type="email"
              placeholder="YOUR EMAIL..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              style={{
                flexGrow: 1,
                padding: '14px 16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.9rem',
                border: '3px solid #00D27F',
                background: '#251720',
                color: '#FFFFFF',
                outline: 'none',
                minHeight: '44px',
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '14px 24px',
                fontFamily: "'Epilogue', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#251720',
                background: '#00D27F',
                border: '3px solid #00D27F',
                borderLeft: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                minHeight: '44px',
                minWidth: '44px',
                opacity: isSubmitting ? 0.6 : 1,
              }}
            >
              {isSubmitting ? '...' : 'SUBSCRIBE'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailCapture;
