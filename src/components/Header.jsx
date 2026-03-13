import React from 'react';
import { Link } from 'react-router-dom';
import { customStyles } from '../styles';
import { LogoNode } from './SharedComponents';

const Header = () => (
  <header style={customStyles.header} className="header-responsive">
    <Link to="/" style={customStyles.logo}>
      <LogoNode />
      EMERGENCE
    </Link>
    <nav style={customStyles.navLinks}>
      <Link to="/about" style={customStyles.navLink}>[01] WHY</Link>
      <Link to="/events" style={customStyles.navLink}>[02] EVENTS</Link>
      <Link to="/map" style={customStyles.navLink}>[03] MAP</Link>
      <Link to="/host" style={customStyles.navLink}>[04] HOST</Link>
      <Link to="/sponsor" style={customStyles.navLink}>[05] SPONSOR</Link>
    </nav>
  </header>
);

export default Header;
