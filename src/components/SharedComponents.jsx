import React from 'react';
import { customStyles } from '../styles';

export const LogoNode = () => (
  <div style={customStyles.logoNode}>
    <div style={{
      content: '',
      position: 'absolute',
      top: '-6px', right: '-6px', bottom: '-6px', left: '-6px',
      border: '2px solid #00D27F',
      borderRadius: '50%',
    }} />
  </div>
);

export const Pill = ({ children, active }) => (
  <span style={{ ...customStyles.pill, ...(active ? customStyles.pillActive : {}) }}>
    {children}
  </span>
);

export const NetworkSVG = () => (
  <svg
    style={{ width: '100%', height: '100%', maxHeight: '600px', overflow: 'visible' }}
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#251720" strokeWidth="2" fill="none" opacity="0.2" d="M100,50 L100,450 M200,50 L200,450 M300,50 L300,450 M400,50 L400,450" />
    <path stroke="#251720" strokeWidth="2" fill="none" opacity="0.2" d="M50,100 L450,100 M50,200 L450,200 M50,300 L450,300 M50,400 L450,400" />
    <path stroke="#251720" strokeWidth="3" fill="none" opacity="0.4" d="M100,200 L200,100 L400,100 L400,300 L300,400 L100,400 Z" />
    <path stroke="#251720" strokeWidth="3" fill="none" opacity="0.4" d="M200,300 L300,200 L400,200" />
    <path
      stroke="#00D27F"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M100,200 L200,300 L300,300 L400,200"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out' }}
    />
    <path
      stroke="#FFD600"
      strokeWidth="4"
      fill="none"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      d="M200,100 L200,300 L100,400"
      style={{ animation: 'drawLine 4s infinite alternate ease-in-out', animationDelay: '1.5s' }}
    />
    <circle cx="100" cy="200" r="8" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="200" cy="100" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="100" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="400" cy="300" r="12" fill="#00D27F" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="400" r="8" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="100" cy="400" r="10" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="200" cy="300" r="14" fill="#00D27F" stroke="#251720" strokeWidth="3" style={{ filter: 'drop-shadow(0px 0px 8px #00D27F)', animation: 'pulseNode 2s infinite' }} />
    <circle cx="300" cy="300" r="6" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <circle cx="300" cy="200" r="8" fill="#FFD600" stroke="#251720" strokeWidth="3" />
    <circle cx="400" cy="200" r="10" fill="#FFFFFF" stroke="#251720" strokeWidth="3" />
    <rect x="185" y="285" width="30" height="30" fill="none" stroke="#251720" strokeWidth="2" strokeDasharray="4" />
    <text x="220" y="315" fontFamily="JetBrains Mono" fontSize="10" fill="#251720">KACHETTE</text>
    <text x="85" y="195" fontFamily="JetBrains Mono" fontSize="8" fill="#251720">SHOREDITCH</text>
  </svg>
);
