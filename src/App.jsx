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
        .explanation-responsive {
          grid-template-columns: 1fr !important;
        }
        .mechanics-responsive {
          grid-template-columns: 1fr !important;
        }
        .venue-responsive {
          grid-template-columns: 1fr !important;
        }
        .stats-responsive {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }

      @media (max-width: 768px) {
        .header-responsive {
          flex-direction: column !important;
          gap: 24px !important;
        }
        .capture-form-responsive {
          flex-direction: column !important;
        }
        .system-container-responsive {
          border-left: none !important;
          border-right: none !important;
        }
        .stats-responsive {
          grid-template-columns: 1fr !important;
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
