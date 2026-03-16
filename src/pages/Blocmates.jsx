import React from 'react';

const customStyles = {
  body: {
    background: '#0a0a0a',
    fontFamily: "'Courier New', 'Courier', monospace",
    color: '#00ff00',
    lineHeight: '1.6',
    minHeight: '100vh',
    padding: '40px 20px',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  ascii: {
    fontSize: '0.7rem',
    lineHeight: 1.2,
    whiteSpace: 'pre',
    color: '#00ff00',
    marginBottom: '40px',
  },
  header: {
    borderBottom: '2px solid #00ff00',
    paddingBottom: '20px',
    marginBottom: '40px',
  },
  classification: {
    color: '#ff0000',
    fontSize: '0.85rem',
    marginBottom: '10px',
  },
  h1: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#00ff00',
  },
  section: {
    marginBottom: '60px',
    borderLeft: '3px solid #00ff00',
    paddingLeft: '20px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#00ffff',
  },
  subsection: {
    marginBottom: '30px',
  },
  label: {
    color: '#ffff00',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  metric: {
    display: 'inline-block',
    padding: '5px 10px',
    border: '1px solid #00ff00',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '0.85rem',
  },
  opportunity: {
    background: '#001100',
    border: '2px solid #00ff00',
    padding: '20px',
    marginBottom: '20px',
  },
  bullet: {
    color: '#00ff00',
    marginBottom: '8px',
    paddingLeft: '20px',
  },
  warning: {
    color: '#ff0000',
    paddingLeft: '20px',
  },
};

const Blocmates = () => {
  return (
    <div style={customStyles.body}>
      <div style={customStyles.container}>
        <pre style={customStyles.ascii}>{`
██████╗ ██╗      ██████╗  ██████╗███╗   ███╗ █████╗ ████████╗███████╗███████╗
██╔══██╗██║     ██╔═══██╗██╔════╝████╗ ████║██╔══██╗╚══██╔══╝██╔════╝██╔════╝
██████╔╝██║     ██║   ██║██║     ██╔████╔██║███████║   ██║   █████╗  ███████╗
██╔══██╗██║     ██║   ██║██║     ██║╚██╔╝██║██╔══██║   ██║   ██╔══╝  ╚════██║
██████╔╝███████╗╚██████╔╝╚██████╗██║ ╚═╝ ██║██║  ██║   ██║   ███████╗███████║
╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
        `}</pre>

        <div style={customStyles.header}>
          <div style={customStyles.classification}>
            [CLASSIFICATION: INTERNAL USE ONLY]<br />
            [DATE: 2026-03-16]<br />
            [ANALYST: CLAUDE//GHOSTCLAW]
          </div>
          <h1 style={customStyles.h1}>INTELLIGENCE BRIEF: BLOCMATES</h1>
          <p>Deep dive on Blocmates founders, psychological profiling, and strategic AI agent opportunities</p>
          <div style={{ marginTop: '20px' }}>
            <span style={customStyles.metric}>17K SUBS</span>
            <span style={customStyles.metric}>$99/MO</span>
            <span style={customStyles.metric}>15 TEAM</span>
            <span style={customStyles.metric}>EST 2021</span>
          </div>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; COMPANY_OVERVIEW</h2>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[CORE_BUSINESS]</div>
            <p>Crypto-focused media, research, and education platform. Transforms complex DeFi/Web3 into accessible content. Based in North England (Blackpool/Newcastle).</p>
          </div>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[REVENUE_MODEL]</div>
            <p style={customStyles.bullet}>→ Premium subscriptions: $99/month or $989/year</p>
            <p style={customStyles.bullet}>→ NFT-based access (LARP Collective)</p>
            <p style={customStyles.bullet}>→ Consulting/advisory services</p>
            <p style={customStyles.bullet}>→ Venture capital investments</p>
          </div>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[MARKET_POSITION]</div>
            <p>Competitors: CoinDesk (largest), The Block (data-rich), Decrypt, Blockworks ($30M+ revenue)</p>
            <p>Differentiation: Community-first + portfolio transparency + "content with soul"</p>
          </div>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; FOUNDER_PROFILES</h2>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[GRANT_SHEARS // CEO]</div>
            <p><strong>BACKGROUND:</strong> Biomedical scientist → crypto educator. Started blogging 2016 from parents' box room.</p>
            <p><strong>PHILOSOPHY:</strong> "Create content with soul" — explicitly rejects automation</p>
            <p><strong>DRIVES:</strong> Democratizing crypto knowledge, authentic community building</p>
            <p><strong>DECISION_STYLE:</strong> Community-validated, quality over speed, education-first</p>
          </div>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[MIKE // COO]</div>
            <p><strong>BACKGROUND:</strong> Chemical engineer, early crypto adopter</p>
            <p><strong>ROLE:</strong> "Everything goes through Mike" — cross-functional operator</p>
            <p><strong>STRENGTHS:</strong> Process-driven, quality control, early conviction (shilled LINK pre-ATH)</p>
            <p><strong>DECISION_STYLE:</strong> Engineering rigor, operational efficiency, data-informed</p>
          </div>

          <div style={{ ...customStyles.subsection, marginTop: '40px', borderTop: '2px solid #ff0000', paddingTop: '30px' }}>
            <div style={{ ...customStyles.label, color: '#ff0000' }}>[CRITICAL UPDATE // ERROR CORRECTION]</div>
            <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
              <img src="/alex_apology.gif" alt="Alex Bachmann Apology" style={{ maxWidth: '100%', border: '2px solid #00ff00' }} />
            </div>
            <p style={{ color: '#ffff00', fontSize: '1.1rem' }}>
              <strong>NOTE:</strong> Alex Bachmann (Head of Operations) was criminally omitted from the original intelligence report.
              This oversight has been logged as ERROR CODE: AB-404. Corrective action has been initiated.
            </p>
            <p style={{ marginTop: '15px' }}>
              Alex Bachmann brings extensive marketing and communications experience across professional sports,
              global brand campaigns, agency life, and craft beer industries before entering crypto. He is instrumental
              in fine-tuning and executing the blocmates tone and vision, co-hosting the weekly blocmates podcast
              alongside Grant and Gazz.
            </p>
          </div>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; PSYCHOLOGICAL_ASSESSMENT</h2>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[WHAT_KEEPS_THEM_AWAKE]</div>
            <p style={customStyles.bullet}>→ Scaling authenticity while maintaining community intimacy</p>
            <p style={customStyles.bullet}>→ Competition: Blockworks ($30M+), The Block's data moats</p>
            <p style={customStyles.bullet}>→ Converting 17k free → $99-989/year premium</p>
            <p style={customStyles.bullet}>→ AI automation threat to "soul" positioning</p>
          </div>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[WHAT_MAKES_THEM_SAY_YES]</div>
            <p style={customStyles.bullet}>→ Enhances community (doesn't replace human touch)</p>
            <p style={customStyles.bullet}>→ Educational leverage without quality sacrifice</p>
            <p style={customStyles.bullet}>→ Operational efficiency freeing team for high-value work</p>
            <p style={customStyles.bullet}>→ Asymmetric upside opportunities</p>
            <p style={customStyles.bullet}>→ Relationship-first partnerships</p>
          </div>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; AGENTIC_AI_OPPORTUNITIES</h2>

          <div style={customStyles.opportunity}>
            <div style={customStyles.label}>[OPPORTUNITY_01 // INTELLIGENT_RESEARCH_ASSISTANT]</div>
            <p><strong>TYPE:</strong> Premium subscriber tool</p>
            <p><strong>FUNCTION:</strong> AI agent queries full Blocmates archive (podcasts, articles, reports) for personalized crypto research</p>

            <div style={{ marginTop: '15px' }}>
              <div style={customStyles.label}>[WHY_THEY_BUY]</div>
              <p style={customStyles.bullet}>→ Premium value-add justifies $99/month</p>
              <p style={customStyles.bullet}>→ Differentiates from competitors</p>
              <p style={customStyles.bullet}>→ Leverages existing content library</p>
              <p style={customStyles.bullet}>→ Enhances (not replaces) human expertise</p>
            </div>

            <div style={{ marginTop: '15px' }}>
              <div style={customStyles.label}>[IMPLEMENTATION]</div>
              <p>Pilot with 50 LARP holders → RAG on public content → human oversight on answers</p>
            </div>
          </div>

          <div style={customStyles.opportunity}>
            <div style={customStyles.label}>[OPPORTUNITY_02 // CONTENT_REPURPOSING_AGENT]</div>
            <p><strong>TYPE:</strong> Internal operations tool</p>
            <p><strong>FUNCTION:</strong> Podcast → articles → Twitter threads → YouTube clips. Trained on Grant's voice with approval gates.</p>

            <div style={{ marginTop: '15px' }}>
              <div style={customStyles.label}>[WHY_THEY_BUY]</div>
              <p style={customStyles.bullet}>→ Frees 15-person team for deep research</p>
              <p style={customStyles.bullet}>→ Maintains authenticity via approval workflow</p>
              <p style={customStyles.bullet}>→ Multiplies content reach without sacrificing soul</p>
              <p style={customStyles.bullet}>→ Addresses "quality over speed" constraint</p>
            </div>
          </div>

          <div style={customStyles.opportunity}>
            <div style={customStyles.label}>[OPPORTUNITY_03 // ON_CHAIN_ALPHA_DETECTION]</div>
            <p><strong>TYPE:</strong> Premium product</p>
            <p><strong>FUNCTION:</strong> 24/7 on-chain monitoring with plain-English alerts. Whale movements, unusual activity, emerging protocols.</p>

            <div style={{ marginTop: '15px' }}>
              <div style={customStyles.label}>[WHY_THEY_BUY]</div>
              <p style={customStyles.bullet}>→ Competes with The Block's data advantage</p>
              <p style={customStyles.bullet}>→ Premium subscriber retention tool</p>
              <p style={customStyles.bullet}>→ Aligns with "actionable insights" positioning</p>
              <p style={customStyles.bullet}>→ 24/7 coverage impossible for 15-person team</p>
            </div>
          </div>

          <div style={customStyles.opportunity}>
            <div style={customStyles.label}>[OPPORTUNITY_04 // PORTFOLIO_CO_PILOT]</div>
            <p><strong>TYPE:</strong> Premium product</p>
            <p><strong>FUNCTION:</strong> Track subscriber holdings vs. "Early Retirement Index" with personalized buy/sell alerts + educational context</p>

            <div style={{ marginTop: '15px' }}>
              <div style={customStyles.label}>[WHY_THEY_BUY]</div>
              <p style={customStyles.bullet}>→ Massive subscriber value proposition</p>
              <p style={customStyles.bullet}>→ Justifies price increase ($99 → $149/month)</p>
              <p style={customStyles.bullet}>→ Natural extension of portfolio transparency</p>
              <p style={customStyles.bullet}>→ Sticky feature (reduces churn)</p>
            </div>
          </div>
        </div>

        <div style={customStyles.section}>
          <h2 style={customStyles.sectionTitle}>&gt; STRATEGIC_APPROACH</h2>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[HOW_TO_PITCH]</div>
            <p style={customStyles.bullet}>→ Build working prototype using public Blocmates content FIRST</p>
            <p style={customStyles.bullet}>→ Approach Mike (COO) — he's the operational gatekeeper</p>
            <p style={customStyles.bullet}>→ Frame as "amplifies your teaching mission" not "replaces team"</p>
            <p style={customStyles.bullet}>→ Pilot with 50 LARP holders for feedback</p>
            <p style={customStyles.bullet}>→ Lead as fans/subscribers, not vendors</p>
          </div>

          <div style={customStyles.subsection}>
            <div style={customStyles.label}>[WHAT_TO_AVOID]</div>
            <p style={customStyles.warning}>✗ "AI will automate your content creation"</p>
            <p style={customStyles.warning}>✗ Generic SaaS sales tactics</p>
            <p style={customStyles.warning}>✗ Undermining human voice/authenticity</p>
            <p style={customStyles.warning}>✗ Complex enterprise solutions (lean 15-person team)</p>
            <p style={customStyles.warning}>✗ Transactional mindset (they value relationships)</p>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #00ff00', paddingTop: '20px', marginTop: '40px', fontSize: '0.85rem', color: '#666' }}>
          <p>[END_REPORT]</p>
          <p>Sources: 20+ primary sources including Blocmates website, LinkedIn, Twitter, competitor analysis</p>
          <p>Classification: Internal Use Only // Do Not Distribute</p>
        </div>
      </div>
    </div>
  );
};

export default Blocmates;
