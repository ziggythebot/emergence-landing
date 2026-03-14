import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// A/B test router for sponsor page variants
// Randomly assigns users to either /sponsor or /sponsor-alt
// Persists choice in localStorage to ensure consistency

function SponsorRouter() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user already has a variant assigned
    let variant = localStorage.getItem('sponsor-variant');

    // If not, randomly assign one
    if (!variant) {
      variant = Math.random() < 0.5 ? 'a' : 'b';
      localStorage.setItem('sponsor-variant', variant);

      // Track assignment in analytics if available
      if (window.gtag) {
        window.gtag('event', 'sponsor_variant_assigned', {
          variant: variant,
        });
      }
    }

    // Redirect to assigned variant
    const path = variant === 'a' ? '/sponsor' : '/sponsor-alt';
    navigate(path, { replace: true });
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#EAF8F5',
        fontFamily: "'JetBrains Mono', monospace",
      }}>
        LOADING...
      </div>
    );
  }

  return null;
}

export default SponsorRouter;
