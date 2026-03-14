import React from 'react';
import { Link } from 'react-router-dom';
import LogoNode from './LogoNode';

const customStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  logo: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#251720',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    fontWeight: 700,
  },
  navLink: {
    color: '#251720',
    textDecoration: 'none',
  },
};

function Header() {
  return (
    <header style={customStyles.header}>
      <Link to="/" style={customStyles.logo}>
        <LogoNode />
        EMERGENCE
      </Link>
      <nav style={customStyles.navLinks}>
        <Link to="/" style={customStyles.navLink}>HOME</Link>
        <Link to="/events" style={customStyles.navLink}>EVENTS</Link>
        <Link to="/host" style={customStyles.navLink}>HOST</Link>
        <Link to="/sponsor" style={customStyles.navLink}>SPONSOR</Link>
      </nav>
    </header>
  );
}

export default Header;
