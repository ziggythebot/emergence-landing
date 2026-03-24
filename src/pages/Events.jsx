import React, { useState } from 'react';
import Header from '../components/Header';

const customStyles = {
  root: {
    '--bg-mint': '#EAF8F5',
    '--ink': '#251720',
    '--ink-light': '#5A4C55',
    '--emerald': '#00D27F',
    '--gold': '#FFD600',
    '--surface': '#FFFFFF',
  },
  body: {
    background: '#EAF8F5',
    backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#251720',
    lineHeight: '1.5',
    WebkitFontSmoothing: 'antialiased',
    margin: 0,
    padding: 0,
  },
  systemContainer: {
    maxWidth: '1440px',
    margin: '0 auto',
    borderLeft: '3px solid #251720',
    borderRight: '3px solid #251720',
    background: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  filterSystem: {
    background: '#251720',
    color: '#FFFFFF',
    padding: '16px 32px',
    borderBottom: '3px solid #251720',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  filterLabel: {
    display: 'block',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#00D27F',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  pillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  pillFilterBase: {
    padding: '6px 14px',
    border: '2px solid #FFFFFF',
    background: 'transparent',
    color: '#FFFFFF',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
  },
  pillFilterActive: {
    padding: '6px 14px',
    border: '2px solid #00D27F',
    background: '#00D27F',
    color: '#251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    cursor: 'pointer',
    textTransform: 'uppercase',
    minHeight: '44px',
    minWidth: '44px',
  },
  scheduleHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
  },
  scheduleTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  datePill: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 12px',
    border: '2px solid #00D27F',
    background: 'transparent',
    color: '#00D27F',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    width: 'fit-content',
  },
  scheduleTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 900,
    textTransform: 'uppercase',
    lineHeight: 0.95,
    letterSpacing: '-0.02em',
  },
  counterBox: {
    background: '#FFD600',
    border: '3px solid #251720',
    boxShadow: '3px 3px 0px #251720',
    padding: '16px 24px',
    textAlign: 'center',
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 900,
    minWidth: '80px',
  },
  eventsGridContainer: {
    position: 'relative',
    flex: 1,
  },
  diagonalOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 210, 127, 0.85)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
  },
  overlayText: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#251720',
    textAlign: 'center',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    transform: 'rotate(-8deg)',
    textShadow: '4px 4px 0px rgba(37,23,32,0.2)',
  },
  eventGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: '3px solid #251720',
  },
  eventCard: {
    padding: '24px',
    borderRight: '3px solid #251720',
    borderBottom: '3px solid #251720',
    background: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    cursor: 'pointer',
    transition: 'background 150ms ease',
  },
  eventCardLast: {
    borderRight: 'none',
  },
  eventTime: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#5A4C55',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  eventTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  eventDesc: {
    fontSize: '0.9rem',
    color: '#5A4C55',
    lineHeight: 1.4,
    flexGrow: 1,
  },
  eventMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  eventLocation: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    color: '#5A4C55',
    textTransform: 'uppercase',
  },
  confirmedBadge: {
    padding: '4px 10px',
    border: '2px solid #251720',
    background: '#FFD600',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
  },
  tentativeBadge: {
    padding: '4px 10px',
    border: '2px solid #251720',
    background: '#EAF8F5',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
  },
  syncedBadge: {
    padding: '4px 10px',
    border: '2px solid #00D27F',
    background: '#00D27F',
    color: '#251720',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
  },
};

const events = [
  {
    id: 1,
    date: 'APR 28',
    time: '19:00',
    title: 'ENCODE CLUB: PROTOCOL BUILDERS',
    desc: 'Web3 developer community meetup. Building the next generation of decentralized apps.',
    location: 'SHOREDITCH, E1',
    status: 'confirmed',
    type: 'tech',
    lumaUrl: 'https://lu.ma/encode-emergence',
  },
  {
    id: 2,
    date: 'APR 29',
    time: '18:00',
    title: 'SPACE: ORBITAL INFRASTRUCTURE',
    desc: 'Space tech founders and investors. New space economy, satellite networks, launch systems.',
    location: 'KING\'S CROSS, N1',
    status: 'confirmed',
    type: 'tech',
    lumaUrl: 'https://lu.ma/space-emergence',
  },
  {
    id: 3,
    date: 'APR 29',
    time: '20:00',
    title: 'RAUM: DIGITAL FUTURES',
    desc: 'Creative technologists, artists, and builders exploring new media and digital art.',
    location: 'SHOREDITCH, E1',
    status: 'confirmed',
    type: 'culture',
    lumaUrl: 'https://lu.ma/raum-emergence',
  },
  {
    id: 4,
    date: 'APR 30',
    time: '22:00',
    title: 'EMERGENCE AFTER PARTY',
    desc: 'Network consolidation. All nodes converge for final sync.',
    location: 'COAL DROPS YARD, N1C',
    status: 'confirmed',
    type: 'social',
    lumaUrl: 'https://lu.ma/emergence-afterparty',
  },
];

const EventCard = ({ event, onSync }) => {
  const [hovered, setHovered] = useState(false);
  const [synced, setSynced] = useState(false);

  const handleSync = (e) => {
    e.stopPropagation();
    setSynced(true);
    if (onSync) onSync(event);
  };

  return (
    <div
      style={{
        ...customStyles.eventCard,
        background: hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={customStyles.eventTime}>{event.date} // {event.time}</div>
      <div style={customStyles.eventTitle}>{event.title}</div>
      <div style={customStyles.eventDesc}>{event.desc}</div>
      <div style={customStyles.eventMeta}>
        <span style={customStyles.eventLocation}>◎ {event.location}</span>
        {synced ? (
          <span style={customStyles.syncedBadge}>SYNCED</span>
        ) : event.status === 'confirmed' ? (
          <span style={customStyles.confirmedBadge}>CONFIRMED</span>
        ) : (
          <span style={customStyles.tentativeBadge}>TENTATIVE</span>
        )}
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(37,23,32,0.8)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }} onClick={onClose}>
      <div style={{
        background: '#FFFFFF',
        border: '3px solid #251720',
        boxShadow: '6px 6px 0px #251720',
        padding: '32px',
        maxWidth: '480px',
        width: '100%',
      }} onClick={e => e.stopPropagation()}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#00D27F', marginBottom: '8px' }}>
          {event.date} // {event.time}
        </div>
        <h2 style={{ fontFamily: "'Epilogue', sans-serif", fontWeight: 900, fontSize: '1.75rem', textTransform: 'uppercase', lineHeight: 1, marginBottom: '16px' }}>
          {event.title}
        </h2>
        <p style={{ color: '#5A4C55', marginBottom: '24px', lineHeight: 1.6 }}>{event.desc}</p>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a
            href={event.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: '#00D27F',
              border: '3px solid #251720',
              boxShadow: '3px 3px 0px #251720',
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 900,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#251720',
            }}
          >
            REGISTER ON LUMA
          </a>
          <button
            onClick={onClose}
            style={{
              padding: '12px 24px',
              background: '#FFFFFF',
              border: '3px solid #251720',
              boxShadow: '3px 3px 0px #251720',
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 900,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              cursor: 'pointer',
              color: '#251720',
              borderColor: '#251720',
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [activeFilters, setActiveFilters] = useState({ date: 'ALL', type: 'ALL' });
  const [modalEvent, setModalEvent] = useState(null);
  const [syncedEvents, setSyncedEvents] = useState([]);

  const toggleFilter = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? 'ALL' : value,
    }));
  };

  const filteredEvents = events.filter(event => {
    if (activeFilters.date !== 'ALL' && event.date !== activeFilters.date) return false;
    if (activeFilters.type !== 'ALL' && event.type !== activeFilters.type) return false;
    return true;
  });

  const handleSync = (event) => {
    setSyncedEvents(prev => [...prev, event.id]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Epilogue:wght@800;900&family=JetBrains+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @media (max-width: 768px) {
          .filter-grid-mobile { grid-template-columns: 1fr !important; gap: 12px !important; }
          .events-grid { grid-template-columns: 1fr !important; }
          .events-grid > div { border-right: none !important; }
          .schedule-header-mobile { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
          .schedule-title-mobile { font-size: 2rem !important; }
          .counter-box-mobile { align-self: flex-end !important; }
          .overlay-text-mobile { font-size: 1.75rem !important; }
        }
      `}</style>

      <div style={customStyles.body}>
        <div style={customStyles.systemContainer}>
          <Header />

          <div style={customStyles.filterSystem}>
            <div className="filter-grid-mobile" style={customStyles.filterGrid}>
              <div>
                <span style={customStyles.filterLabel}>DATE_FILTER</span>
                <div style={customStyles.pillContainer}>
                  {['ALL', 'APR 28', 'APR 29', 'APR 30'].map(d => (
                    <button
                      key={d}
                      style={activeFilters.date === d ? customStyles.pillFilterActive : customStyles.pillFilterBase}
                      onClick={() => toggleFilter('date', d)}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span style={customStyles.filterLabel}>TYPE_FILTER</span>
                <div style={customStyles.pillContainer}>
                  {['ALL', 'TECH', 'CULTURE', 'SOCIAL'].map(t => (
                    <button
                      key={t}
                      style={activeFilters.type === t ? customStyles.pillFilterActive : customStyles.pillFilterBase}
                      onClick={() => toggleFilter('type', t.toLowerCase())}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span style={customStyles.filterLabel}>STATUS</span>
                <div style={customStyles.pillContainer}>
                  <span style={{ ...customStyles.pillFilterBase, cursor: 'default', borderColor: '#00D27F', color: '#00D27F' }}>
                    {filteredEvents.filter(e => e.status === 'confirmed').length} CONFIRMED
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="schedule-header-mobile" style={customStyles.scheduleHeader}>
            <div style={customStyles.scheduleTitleWrapper}>
              <span style={customStyles.datePill}>APR 28-30, 2026</span>
              <h1 className="schedule-title-mobile" style={customStyles.scheduleTitle}>BROWSE EVENTS.</h1>
            </div>
            <div className="counter-box-mobile" style={customStyles.counterBox}>
              <div style={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>{filteredEvents.length}</div>
              <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>EVENTS</div>
            </div>
          </div>

          <div style={customStyles.eventsGridContainer}>
            <div style={customStyles.diagonalOverlay}>
              <div className="overlay-text-mobile" style={customStyles.overlayText}>
                FULL EVENTS LIST<br />LAUNCHES APRIL 1ST
              </div>
            </div>
            <div className="events-grid" style={customStyles.eventGrid}>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} onSync={handleSync} />
                ))
              ) : (
                <div className="no-events-mobile" style={{
                  padding: '80px 40px',
                  textAlign: 'center',
                  gridColumn: '1 / -1',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1rem',
                  color: '#5A4C55',
                }}>
                  NO EVENTS MATCH FILTER
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={!!modalEvent} onClose={() => setModalEvent(null)} event={modalEvent} />
    </>
  );
};

export default Events;
