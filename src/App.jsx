import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { customStyles } from './styles';
import Header from './components/Header';
import Home from './pages/Home';
import Host from './pages/Host';
import Events from './pages/Events';
import Sponsor from './pages/Sponsor';
import Map from './pages/Map';
import About from './pages/About';

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Epilogue:wght@800;900&family=JetBrains+Mono:wght@400;700&display=swap');

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      body {
        overflow-x: hidden;
      }

      ::selection {
        background: #00D27F;
        color: #251720;
      }

      @keyframes drawLine {
        0% { stroke-dashoffset: 1000; }
        100% { stroke-dashoffset: 0; }
      }

      @keyframes pulseNode {
        0% { filter: drop-shadow(0px 0px 4px #00D27F); }
        50% { filter: drop-shadow(0px 0px 16px #00D27F); }
        100% { filter: drop-shadow(0px 0px 4px #00D27F); }
      }

      a:hover {
        color: #00D27F !important;
      }

      button:hover {
        transform: translate(2px, 2px);
        box-shadow: 3px 3px 0px #251720 !important;
      }

      @media (max-width: 1024px) {
        .hero-responsive {
          grid-template-columns: 1fr !important;
        }
        .hero-responsive > div:first-child {
          border-right: none !important;
          border-bottom: 3px solid #251720 !important;
        }
        .explanation-responsive {
          grid-template-columns: 1fr !important;
        }
        .explanation-responsive > div:first-child {
          border-right: none !important;
          border-bottom: 3px solid #251720 !important;
          padding: 48px 32px !important;
        }
        .explanation-responsive > div:last-child {
          padding: 48px 32px !important;
        }
        .mechanics-responsive {
          grid-template-columns: 1fr !important;
        }
        .mechanics-responsive > div {
          border-right: none !important;
          border-bottom: 3px solid #251720 !important;
        }
        .mechanics-responsive > div:last-child {
          border-bottom: none !important;
        }
        .venue-responsive {
          grid-template-columns: 1fr !important;
        }
        .venue-responsive > div:first-child {
          border-right: none !important;
          padding: 48px 32px !important;
        }
        .stats-responsive {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      @media (max-width: 768px) {
        .header-responsive {
          flex-direction: column !important;
          gap: 16px !important;
          padding: 20px 24px !important;
        }
        .header-responsive nav {
          flex-wrap: wrap !important;
          gap: 16px !important;
          justify-content: center !important;
        }
        .header-responsive nav a {
          font-size: 0.75rem !important;
        }
        .hero-responsive > div:first-child {
          padding: 48px 24px !important;
        }
        .hero-responsive > div:last-child {
          padding: 32px 24px !important;
          min-height: 300px !important;
        }
        .explanation-responsive > div:first-child {
          padding: 32px 24px !important;
        }
        .explanation-responsive > div:last-child {
          padding: 32px 24px !important;
        }
        .capture-form-responsive {
          flex-direction: column !important;
        }
        .capture-form-responsive input {
          border-left: 3px solid #00D27F !important;
        }
        .capture-form-responsive button {
          border-top: none !important;
        }
        .system-container-responsive {
          border-left: none !important;
          border-right: none !important;
        }
        .stats-responsive {
          grid-template-columns: 1fr !important;
        }
        .venue-responsive > div:first-child {
          padding: 32px 24px !important;
        }
        .venue-responsive > div:last-child {
          min-height: 400px !important;
        }
        h1 {
          font-size: 2.5rem !important;
        }
        h2 {
          font-size: 2rem !important;
        }
        p {
          font-size: 1.125rem !important;
        }
        button, a[style*="btn"] {
          white-space: nowrap !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router>
      <div style={customStyles.body}>
        <div style={customStyles.systemContainer} className="system-container-responsive">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/host" element={<Host />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
