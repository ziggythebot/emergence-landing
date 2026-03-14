import React from 'react';

const customStyles = {
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    borderRadius: '999px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    border: '2px solid #251720',
    background: '#FFFFFF',
    textTransform: 'uppercase',
  },
  pillActive: {
    background: '#00D27F',
  },
};

function Pill({ children, active = false }) {
  return (
    <span style={{...customStyles.pill, ...(active ? customStyles.pillActive : {})}}>
      {children}
    </span>
  );
}

export default Pill;
