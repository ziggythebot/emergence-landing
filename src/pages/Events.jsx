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
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
  },
  scheduleHeader: {
    padding: '24px 32px 16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  scheduleTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    lineHeight: 0.95,
  },
  counterBox: {
    background: '#FFD600',
    border: '3px solid #251720',
    padding: '12px 16px',
    boxShadow: '3px 3px 0px #251720',
    fontFamily: "'JetBrains Mono', monospace",
    textAlign: 'right',
  },
  eventGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    borderTop: '3px solid #251720',
  },
  eventCard: {
    padding: '20px',
    borderRight: '3px solid #251720',
    borderBottom: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background 0.2s',
    cursor: 'pointer',
    background: '#FFFFFF',
  },
  eventCardHover: {
    padding: '20px',
    borderRight: '3px solid #251720',
    borderBottom: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background 0.2s',
    cursor: 'pointer',
    background: '#EAF8F5',
  },
  eventTime: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    marginBottom: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
  },
  eventTopic: {
    color: '#00D27F',
    fontSize: '0.65rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
  },
  eventTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 900,
    marginBottom: '8px',
    lineHeight: 1.05,
  },
  eventDesc: {
    color: '#5A4C55',
    fontSize: '0.85rem',
    marginBottom: '12px',
    flexGrow: 1,
    lineHeight: 1.3,
  },
  eventMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(37, 23, 32, 0.15)',
    paddingTop: '8px',
  },
  eventLocation: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: '#00D27F',
    flexShrink: 0,
  },
  btnSm: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    padding: '6px 10px',
    border: '2px solid #251720',
    background: '#FFFFFF',
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
    cursor: 'pointer',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
  },
  btnSmGold: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    padding: '6px 10px',
    border: '2px solid #251720',
    background: '#FFD600',
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
    cursor: 'pointer',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
  },
  btnSmConfirmed: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.65rem',
    fontWeight: 700,
    padding: '6px 10px',
    border: '2px solid #00D27F',
    background: '#00D27F',
    color: '#251720',
    textTransform: 'uppercase',
    boxShadow: '2px 2px 0px #251720',
    cursor: 'default',
    minHeight: '44px',
    minWidth: '44px',
    transition: 'transform 100ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 100ms ease, background 100ms ease',
  },
  liveLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    fontWeight: 700,
    display: 'inline-block',
    marginBottom: '8px',
    border: '2px solid #00D27F',
    padding: '4px 10px',
    color: '#00D27F',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  footer: {
    padding: '24px',
    textAlign: 'center',
    borderTop: '1px solid rgba(37, 23, 32, 0.15)',
  },
  footerText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#5A4C55',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
  eventsGridContainer: {
    position: 'relative',
  },
  diagonalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0, 210, 127, 0.95) 0%, rgba(0, 210, 127, 0.85) 100%)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  },
  overlayText: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '3rem',
    fontWeight: 900,
    color: '#251720',
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    padding: '40px',
    lineHeight: 1.1,
    transform: 'rotate(-12deg)',
    textShadow: '4px 4px 0px rgba(37, 23, 32, 0.2)',
  },
};

const allEvents = [
  {
    id: 1,
    date: 'APR 28',
    time: '19:00',
    topic: 'WEB3_BUILDERS',
    topicCategory: 'WEB3',
    title: 'ENCODE CLUB: PROTOCOL BUILDERS',
    desc: 'Web3 developer community meetup. Building the next generation of decentralized apps.',
    location: 'SHOREDITCH, E1',
    locationArea: 'SHOREDITCH',
    btnLabel: 'CONFIRMED',
    btnStyle: 'confirmed',
  },
  {
    id: 2,
    date: 'APR 29',
    time: '18:00',
    topic: 'SPACE_TECH',
    topicCategory: 'SPACE',
    title: 'SPACE: ORBITAL INFRASTRUCTURE',
    desc: 'Space tech founders and investors. New space economy, satellite networks, launch systems.',
    location: 'KING\'S CROSS, N1C',
    locationArea: "KING'S CROSS",
    btnLabel: 'CONFIRMED',
    btnStyle: 'confirmed',
  },
  {
    id: 3,
    date: 'APR 29',
    time: '20:00',
    topic: 'CREATIVE_TECH',
    topicCategory: 'CREATIVE',
    title: 'RAUM: DIGITAL FUTURES',
    desc: 'Creative technologists, artists, and builders exploring new media and digital art.',
    location: 'SHOREDITCH, E2',
    locationArea: 'SHOREDITCH',
    btnLabel: 'CONFIRMED',
    btnStyle: 'confirmed',
  },
  {
    id: 4,
    date: 'APR 30',
    time: '22:00',
    topic: 'NETWORK_SYNC',
    topicCategory: 'SOCIAL',
    title: 'EMERGENCE AFTER PARTY',
    desc: 'Network consolidation. All nodes converge for final sync.',
    location: 'COAL DROPS YARD, N1C',
    locationArea: "KING'S CROSS",
    btnLabel: 'CONFIRMED',
    btnStyle: 'confirmed',
  },
];

const PillFilter = ({ label, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const baseStyle = active ? customStyles.pillFilterActive : {
    ...customStyles.pillFilterBase,
    background: hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
  };
  return (
    <button
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
};

const EventCard = ({ event, onSync }) => {
  const [hovered, setHovered] = useState(false);
  const cardStyle = hovered ? customStyles.eventCardHover : customStyles.eventCard;

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={customStyles.eventTime}>
        <span>{event.date} // {event.time}</span>
        <span style={customStyles.eventTopic}>{event.topic}</span>
      </div>
      <h3 style={customStyles.eventTitle}>{event.title}</h3>
      <p style={customStyles.eventDesc}>{event.desc}</p>
      <div style={customStyles.eventMeta}>
        <div style={customStyles.eventLocation}>
          <div style={customStyles.statusDot}></div>
          {event.location}
        </div>
        <button
          style={
            event.btnStyle === 'gold' ? customStyles.btnSmGold :
            event.btnStyle === 'confirmed' ? customStyles.btnSmConfirmed :
            customStyles.btnSm
          }
          onClick={() => event.btnStyle !== 'confirmed' && onSync(event)}
        >
          {event.btnLabel}
        </button>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;
  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(37,23,32,0.7)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          border: '3px solid #251720',
          boxShadow: '6px 6px 0px #251720',
          maxWidth: '500px',
          width: '100%',
          padding: '40px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ ...customStyles.eventTime, marginBottom: '16px' }}>
          <span>{event.date} // {event.time}</span>
          <span style={customStyles.eventTopic}>{event.topic}</span>
        </div>
        <h3 style={{ ...customStyles.eventTitle, marginBottom: '12px' }}>{event.title}</h3>
        <p style={{ ...customStyles.eventDesc, marginBottom: '16px' }}>{event.desc}</p>
        <div style={customStyles.eventMeta}>
          <div style={customStyles.eventLocation}>
            <div style={customStyles.statusDot}></div>
            {event.location}
          </div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button
            style={{
              ...customStyles.btnSm,
              background: '#00D27F',
              borderColor: '#251720',
              color: '#251720',
              padding: '12px 20px',
            }}
          >
            ✓ SYNCED TO CALENDAR
          </button>
          <button
            style={{ ...customStyles.btnSm, padding: '12px 20px' }}
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [activeDay, setActiveDay] = useState('ALL DAYS');
  const [activeTopic, setActiveTopic] = useState('ALL');
  const [activeLocation, setActiveLocation] = useState('EVERYWHERE');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const dayFilters = ['ALL DAYS', 'APR 28', 'APR 29', 'APR 30'];
  const topicFilters = ['ALL', 'AI', 'CRYPTO', 'HARDWARE', 'SOCIAL'];
  const locationFilters = ['EVERYWHERE', 'SHOREDITCH', 'SOHO', 'HACKNEY', "KING'S CROSS"];

  const filteredEvents = allEvents.filter((event) => {
    const dayMatch = activeDay === 'ALL DAYS' || event.date === activeDay;
    const topicMatch = activeTopic === 'ALL' || event.topicCategory === activeTopic;
    const locationMatch = activeLocation === 'EVERYWHERE' || event.locationArea === activeLocation;
    return dayMatch && topicMatch && locationMatch;
  });

  const handleSync = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          /* Filter system mobile */
          .filter-system-mobile {
            padding: 20px 16px !important;
          }

          .filter-grid-mobile {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          /* Schedule header mobile */
          .schedule-header-mobile {
            padding: 24px 16px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }

          .schedule-title-mobile {
            font-size: 2rem !important;
          }

          .counter-box-mobile {
            align-self: flex-start !important;
          }

          /* No events message */
          .no-events-mobile {
            padding: 40px 16px !important;
          }

          /* Diagonal overlay mobile */
          .overlay-text-mobile {
            font-size: 1.75rem !important;
            padding: 20px !important;
          }
        }
        /* Focus indicators for keyboard navigation */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible {
          outline: 3px solid #00D27F;
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Reduced motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
      <div style={customStyles.body}>
        <div style={customStyles.systemContainer}>
          <Header />

        {/* Filter bar hidden for launch */}
        {false && (
        <div className="filter-system-mobile" style={customStyles.filterSystem}>
          <div className="filter-grid-mobile" style={customStyles.filterGrid}>
            <div>
              <label style={customStyles.filterLabel}>CHRONO_INDEX</label>
              <div style={customStyles.pillContainer}>
                {dayFilters.map((day) => (
                  <PillFilter
                    key={day}
                    label={day}
                    active={activeDay === day}
                    onClick={() => setActiveDay(day)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label style={customStyles.filterLabel}>TOPIC_FREQUENCY</label>
              <div style={customStyles.pillContainer}>
                {topicFilters.map((topic) => (
                  <PillFilter
                    key={topic}
                    label={topic}
                    active={activeTopic === topic}
                    onClick={() => setActiveTopic(topic)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label style={customStyles.filterLabel}>LOC_COORDINATES</label>
              <div style={customStyles.pillContainer}>
                {locationFilters.map((loc) => (
                  <PillFilter
                    key={loc}
                    label={loc}
                    active={activeLocation === loc}
                    onClick={() => setActiveLocation(loc)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        )}

        <div className="schedule-header-mobile" style={customStyles.scheduleHeader}>
          <div>
            <span style={customStyles.liveLabel}>APR 28-30, 2026</span>
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
                NO_NODES_FOUND — TRY ADJUSTING FILTERS
              </div>
            )}
          </div>
        </div>


        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          event={selectedEvent}
        />
      </div>
    </div>
    </>
  );
};

export default Events;
