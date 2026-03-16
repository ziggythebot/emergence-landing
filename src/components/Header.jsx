import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoNode from './LogoNode';

const customStyles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 32px',
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
    zIndex: 1001,
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
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    zIndex: 1001,
  },
  hamburgerLine: {
    width: '28px',
    height: '3px',
    background: '#251720',
    transition: 'all 0.3s ease',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    height: '-webkit-fill-available',
    background: '#251720',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    zIndex: 1000,
    transition: 'transform 0.3s ease',
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: 'env(safe-area-inset-bottom)',
  },
  mobileMenuHidden: {
    transform: 'translateX(100%)',
  },
  mobileMenuVisible: {
    transform: 'translateX(0)',
  },
  mobileNavLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    textTransform: 'uppercase',
  },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>

      <header style={customStyles.header}>
        <Link to="/" style={customStyles.logo}>
          <LogoNode />
          EMERGENCE v1.0
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={customStyles.navLinks}>
          <Link to="/" style={customStyles.navLink}>HOME</Link>
          <Link to="/host" style={customStyles.navLink}>HOST</Link>
          <Link to="/events" style={customStyles.navLink}>EVENTS</Link>
          <Link to="/map" style={customStyles.navLink}>MAP</Link>
          <Link to="/contact" style={customStyles.navLink}>CONTACT</Link>
          <a href="https://x.com/emergenceldn" target="_blank" rel="noopener noreferrer" style={customStyles.navLink}>X</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-hamburger"
          style={customStyles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span style={{
            ...customStyles.hamburgerLine,
            transform: menuOpen ? 'rotate(45deg) translateY(9px)' : 'none',
          }} />
          <span style={{
            ...customStyles.hamburgerLine,
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            ...customStyles.hamburgerLine,
            transform: menuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none',
          }} />
        </button>
      </header>

      {/* Mobile Menu */}
      <div style={{
        ...customStyles.mobileMenu,
        ...(menuOpen ? customStyles.mobileMenuVisible : customStyles.mobileMenuHidden),
      }}>
        <Link
          to="/"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          HOME
        </Link>
        <Link
          to="/host"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          HOST
        </Link>
        <Link
          to="/events"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          EVENTS
        </Link>
        <Link
          to="/map"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          MAP
        </Link>
        <Link
          to="/contact"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          CONTACT
        </Link>
        <a
          href="https://x.com/emergenceldn"
          target="_blank"
          rel="noopener noreferrer"
          style={customStyles.mobileNavLink}
          onClick={closeMenu}
        >
          X
        </a>
      </div>
    </>
  );
}

export default Header;
