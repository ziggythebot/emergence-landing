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
    padding: '32px 64px',
    borderBottom: '3px solid #251720',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  filterLabel: {
    display: 'block',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#00D27F',
    marginBottom: '12px',
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
    transition: 'all 0.2s',
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
    transition: 'all 0.2s',
  },
  scheduleHeader: {
    padding: '48px 64px 24px 64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  scheduleTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '4rem',
    fontWeight: 900,
    letterSpacing: '-0.05em',
    lineHeight: 1.1,
  },
  counterBox: {
    background: '#FFD600',
    border: '3px solid #251720',
    padding: '16px 24px',
    boxShadow: '3px 3px 0px #251720',
    fontFamily: "'JetBrains Mono', monospace",
    textAlign: 'right',
  },
  eventGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    borderTop: '3px solid #251720',
  },
  eventCard: {
    padding: '32px',
    borderRight: '3px solid #251720',
    borderBottom: '3px solid #251720',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background 0.2s',
    cursor: 'pointer',
    background: '#FFFFFF',
  },
  eventCardHover: {
    padding: '32px',
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
    marginBottom: '6px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  eventTopic: {
    color: '#00D27F',
    fontSize: '0.75rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
  },
  eventTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '1.75rem',
    fontWeight: 900,
    marginBottom: '12px',
    lineHeight: 1.1,
  },
  eventDesc: {
    color: '#5A4C55',
    fontSize: '1rem',
    marginBottom: '20px',
    flexGrow: 1,
  },
  eventMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(37, 23, 32, 0.15)',
    paddingTop: '12px',
  },
  eventLocation: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
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
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '8px 12px',
    border: '3px solid #251720',
    background: '#FFFFFF',
    textTransform: 'uppercase',
    boxShadow: '3px 3px 0px #251720',
    cursor: 'pointer',
  },
  btnSmGold: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '8px 12px',
    border: '3px solid #251720',
    background: '#FFD600',
    textTransform: 'uppercase',
    boxShadow: '3px 3px 0px #251720',
    cursor: 'pointer',
  },
  btnSmConfirmed: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '8px 12px',
    border: '3px solid #00D27F',
    background: '#00D27F',
    color: '#251720',
    textTransform: 'uppercase',
    boxShadow: '3px 3px 0px #251720',
    cursor: 'default',
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
    padding: '40px',
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
        }
      `}</style>
      <div style={customStyles.body}>
        <div style={customStyles.systemContainer}>
          <Header />

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

        <div style={customStyles.footer}>
          <span style={customStyles.footerText}>END_OF_TRANSMISSION — [SCROLL FOR MORE]</span>
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
