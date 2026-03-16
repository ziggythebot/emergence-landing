import React from 'react';
import Header from '../components/Header';

const customStyles = {
  body: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
    backgroundImage: 'radial-gradient(#00D27F 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    backgroundPosition: '-1px -1px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#E8E8E8',
    lineHeight: '1.6',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  hero: {
    padding: '80px 0 60px',
    borderBottom: '3px solid #00D27F',
  },
  classification: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.75rem',
    color: '#00D27F',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    marginBottom: '16px',
  },
  h1: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: '24px',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#A0A0A0',
    maxWidth: '800px',
  },
  section: {
    padding: '60px 0',
    borderBottom: '1px solid rgba(0, 210, 127, 0.2)',
  },
  sectionTitle: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: '2rem',
    fontWeight: 900,
    textTransform: 'uppercase',
    marginBottom: '32px',
    color: '#00D27F',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(0, 210, 127, 0.3)',
    padding: '32px',
    marginBottom: '24px',
    backdropFilter: 'blur(10px)',
  },
  founderCard: {
    background: 'linear-gradient(135deg, rgba(0, 210, 127, 0.1) 0%, rgba(255, 214, 0, 0.05) 100%)',
    border: '2px solid #00D27F',
    padding: '40px',
    marginBottom: '32px',
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.7rem',
    color: '#00D27F',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '8px',
  },
  metric: {
    display: 'inline-block',
    padding: '8px 16px',
    background: 'rgba(0, 210, 127, 0.1)',
    border: '1px solid #00D27F',
    borderRadius: '4px',
    marginRight: '12px',
    marginBottom: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
  },
  opportunity: {
    background: 'rgba(255, 214, 0, 0.1)',
    border: '2px solid #FFD600',
    padding: '32px',
    marginBottom: '24px',
  },
  bulletList: {
    paddingLeft: '24px',
    margin: '16px 0',
  },
  bullet: {
    marginBottom: '12px',
    lineHeight: 1.7,
  },
};

const Blocmates = () => {
  return (
    <div style={customStyles.body}>
      <div style={customStyles.container}>
        <section style={customStyles.hero}>
          <div style={customStyles.classification}>INTELLIGENCE REPORT // CONFIDENTIAL</div>
          <h1 style={customStyles.h1}>BLOCMATES<br />AGENTIC AI OPPORTUNITY BRIEF</h1>
          <p style={customStyles.subtitle}>
            Deep dive on Blocmates founders, psychological profiling, and strategic AI agent opportunities for crypto education platform
          </p>
          <div style={{ marginTop: '32px' }}>
            <span style={customStyles.metric}>17K+ SUBSCRIBERS</span>
            <span style={customStyles.metric}>$99/MO PREMIUM</span>
            <span style={customStyles.metric}>15-PERSON TEAM</span>
            <span style={customStyles.metric}>FOUNDED 2021</span>
          </div>
        </section>

        <section style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>Company Overview</h2>
          <div style={customStyles.card}>
            <p><strong>Blocmates</strong> is a crypto-focused media, research, and education platform transforming complex DeFi and Web3 topics into accessible content. Based in North England (Blackpool/Newcastle), founded 2021.</p>

            <div style={{ marginTop: '24px' }}>
              <div style={customStyles.label}>Business Model</div>
              <ul style={customStyles.bulletList}>
                <li style={customStyles.bullet}>Premium subscriptions ("The Meal Deal"): $99/month or $989/year</li>
                <li style={customStyles.bullet}>NFT-based access (LARP Collective)</li>
                <li style={customStyles.bullet}>Consulting/advisory services</li>
                <li style={customStyles.bullet}>Venture capital investments</li>
              </ul>
            </div>

            <div style={{ marginTop: '24px' }}>
              <div style={customStyles.label}>Market Position</div>
              <p>Differentiation: Community-first approach with portfolio transparency. Competitors include CoinDesk, The Block (data-rich), Decrypt, and Blockworks ($30M+ revenue).</p>
            </div>
          </div>
        </section>

        <section style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>Founder Profiles</h2>

          <div style={customStyles.founderCard}>
            <h3 style={{ fontSize: '2rem', color: '#00D27F', marginBottom: '16px' }}>Grant Shears — CEO</h3>
            <div style={customStyles.label}>Background</div>
            <p style={{ marginBottom: '16px' }}>Biomedical scientist turned crypto educator. Started blogging from parents' box room in North England in 2016. Academic background: Biology, Chemistry, Maths.</p>

            <div style={customStyles.label}>Philosophy</div>
            <p style={{ marginBottom: '16px' }}><em>"Create content with soul"</em> — explicitly rejects automation. Values authentic community engagement over scalable systems.</p>

            <div style={customStyles.label}>What Drives Him</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Democratizing crypto knowledge</li>
              <li style={customStyles.bullet}>Building authentic community</li>
              <li style={customStyles.bullet}>Education-first approach</li>
              <li style={customStyles.bullet}>Being part of the community, not above it</li>
            </ul>

            <div style={customStyles.label}>Decision Style</div>
            <p>Community-validated, quality over speed, detail-oriented. Recent personal transformation alongside business growth shows commitment to continuous improvement.</p>
          </div>

          <div style={customStyles.founderCard}>
            <h3 style={{ fontSize: '2rem', color: '#00D27F', marginBottom: '16px' }}>Mike — COO</h3>
            <div style={customStyles.label}>Background</div>
            <p style={{ marginBottom: '16px' }}>Chemical engineer, early crypto adopter. "Everything goes through Mike" — cross-functional operator who touches all aspects of the business.</p>

            <div style={customStyles.label}>Strengths</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Process-driven operational excellence</li>
              <li style={customStyles.bullet}>Quality control gatekeeper</li>
              <li style={customStyles.bullet}>Early conviction (shilled LINK pre-ATH)</li>
            </ul>

            <div style={customStyles.label}>Decision Style</div>
            <p>Engineering rigor, data-informed, operational efficiency focus. Balances Grant's vision with execution reality.</p>
          </div>
        </section>

        <section style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>Psychological Assessment</h2>

          <div style={customStyles.card}>
            <div style={customStyles.label}>What Keeps Them Up at Night</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}><strong>Scaling authenticity:</strong> Maintaining community intimacy as they grow</li>
              <li style={customStyles.bullet}><strong>Competition:</strong> Blockworks ($30M+ revenue), The Block's data moats</li>
              <li style={customStyles.bullet}><strong>Conversion:</strong> 17k free → premium ($99-989/year) pipeline</li>
              <li style={customStyles.bullet}><strong>AI threat:</strong> Automation undermining their "content with soul" positioning</li>
            </ul>
          </div>

          <div style={customStyles.card}>
            <div style={customStyles.label}>What Makes Them Say YES</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Enhances community relationships (doesn't replace human touch)</li>
              <li style={customStyles.bullet}>Educational leverage without sacrificing quality</li>
              <li style={customStyles.bullet}>Operational efficiency freeing team for high-value work</li>
              <li style={customStyles.bullet}>Asymmetric upside opportunities</li>
              <li style={customStyles.bullet}>Relationship-first partnerships (not transactional)</li>
            </ul>
          </div>
        </section>

        <section style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>Agentic AI Opportunities</h2>

          <div style={customStyles.opportunity}>
            <h3 style={{ fontSize: '1.75rem', color: '#FFD600', marginBottom: '16px' }}>1. Intelligent Research Assistant</h3>
            <div style={customStyles.label}>Premium Subscriber Tool</div>
            <p style={{ marginBottom: '16px' }}>AI agent that queries full Blocmates archive (podcasts, articles, reports) to provide personalized crypto research for Meal Deal subscribers.</p>

            <div style={customStyles.label}>Why They'd Buy</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Premium value-add justifies $99/month price</li>
              <li style={customStyles.bullet}>Differentiates from competitors</li>
              <li style={customStyles.bullet}>Leverages existing content library</li>
              <li style={customStyles.bullet}>Enhances rather than replaces human expertise</li>
            </ul>

            <div style={customStyles.label}>Implementation Path</div>
            <p>Start with LARP holder pilot (50 users), RAG on public content, human oversight on answers.</p>
          </div>

          <div style={customStyles.opportunity}>
            <h3 style={{ fontSize: '1.75rem', color: '#FFD600', marginBottom: '16px' }}>2. Content Repurposing Agent</h3>
            <div style={customStyles.label}>Internal Operations Tool</div>
            <p style={{ marginBottom: '16px' }}>Transform podcast episodes → articles → Twitter threads → YouTube clips. Trained on Grant's voice/style with human approval workflow.</p>

            <div style={customStyles.label}>Why They'd Buy</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Frees 15-person team for deep research</li>
              <li style={customStyles.bullet}>Maintains authenticity through approval gates</li>
              <li style={customStyles.bullet}>Multiplies content reach without sacrificing soul</li>
              <li style={customStyles.bullet}>Addresses "quality over speed" constraint</li>
            </ul>
          </div>

          <div style={customStyles.opportunity}>
            <h3 style={{ fontSize: '1.75rem', color: '#FFD600', marginBottom: '16px' }}>3. On-Chain Alpha Detection</h3>
            <div style={customStyles.label}>Premium Product</div>
            <p style={{ marginBottom: '16px' }}>24/7 on-chain monitoring with plain-English alerts for community. Detects whale movements, unusual activity, emerging protocols.</p>

            <div style={customStyles.label}>Why They'd Buy</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Competes with The Block's data advantage</li>
              <li style={customStyles.bullet}>Premium subscriber retention tool</li>
              <li style={customStyles.bullet}>Aligns with "actionable insights" positioning</li>
              <li style={customStyles.bullet}>24/7 coverage impossible for 15-person team</li>
            </ul>
          </div>

          <div style={customStyles.opportunity}>
            <h3 style={{ fontSize: '1.75rem', color: '#FFD600', marginBottom: '16px' }}>4. Portfolio Co-Pilot</h3>
            <div style={customStyles.label}>Premium Product</div>
            <p style={{ marginBottom: '16px' }}>Track subscriber holdings vs. Blocmates' "Early Retirement Index" with personalized buy/sell alerts and educational context.</p>

            <div style={customStyles.label}>Why They'd Buy</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>Massive subscriber value proposition</li>
              <li style={customStyles.bullet}>Justifies price increase ($99 → $149/month)</li>
              <li style={customStyles.bullet}>Natural extension of portfolio transparency</li>
              <li style={customStyles.bullet}>Sticky feature (harder to churn)</li>
            </ul>
          </div>
        </section>

        <section style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>Strategic Approach</h2>

          <div style={customStyles.card}>
            <div style={customStyles.label}>How to Pitch</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}><strong>Build first, pitch second:</strong> Working prototype using public Blocmates content</li>
              <li style={customStyles.bullet}><strong>Approach Mike (COO):</strong> He's the operational gatekeeper</li>
              <li style={customStyles.bullet}><strong>Frame as amplification:</strong> "Amplifies your teaching mission" not "replaces your team"</li>
              <li style={customStyles.bullet}><strong>Pilot with believers:</strong> 50 LARP holders for feedback loop</li>
              <li style={customStyles.bullet}><strong>Lead with fans:</strong> Genuine subscribers, not vendors</li>
            </ul>
          </div>

          <div style={customStyles.card}>
            <div style={customStyles.label}>What to Avoid</div>
            <ul style={customStyles.bulletList}>
              <li style={customStyles.bullet}>❌ "AI will automate your content creation"</li>
              <li style={customStyles.bullet}>❌ Generic SaaS sales tactics</li>
              <li style={customStyles.bullet}>❌ Undermining human voice/authenticity</li>
              <li style={customStyles.bullet}>❌ Complex enterprise solutions (lean team, 15 people)</li>
              <li style={customStyles.bullet}>❌ Transactional mindset (relationship-first culture)</li>
            </ul>
          </div>
        </section>

        <section style={{ padding: '60px 0 80px' }}>
          <div style={customStyles.card}>
            <div style={customStyles.label}>Report Metadata</div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#A0A0A0' }}>
              Research Date: March 16, 2026<br />
              Sources: 20+ primary sources including Blocmates website, LinkedIn, Twitter, podcast transcripts, competitor analysis<br />
              Analyst: Claude (GhostClaw Agent)<br />
              Classification: Internal Use Only
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blocmates;
