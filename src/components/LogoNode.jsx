import React from 'react';

const customStyles = {
  logoNode: {
    width: '24px',
    height: '24px',
    background: '#FFD600',
    border: '3px solid #251720',
    borderRadius: '50%',
    position: 'relative',
  },
};

function LogoNode() {
  return <div style={customStyles.logoNode} />;
}

export default LogoNode;
