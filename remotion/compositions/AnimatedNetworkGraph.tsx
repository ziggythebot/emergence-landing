import { useCurrentFrame, AbsoluteFill, interpolate, spring } from 'remotion';

export const AnimatedNetworkGraph: React.FC = () => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Top companies from the ecosystem (weighted by category importance)
  const companies = [
    // Center node
    { name: 'EMERGENCE', type: 'event', tier: 0 },

    // Tier 1 - Major players
    { name: 'DeepMind', type: 'ai', tier: 1 },
    { name: 'Anthropic', type: 'ai', tier: 1 },
    { name: 'Revolut', type: 'fintech', tier: 1 },
    { name: 'Balderton', type: 'vc', tier: 1 },

    // Tier 2 - Key ecosystem players
    { name: 'Synthesia', type: 'ai', tier: 2 },
    { name: 'Wayve', type: 'ai', tier: 2 },
    { name: 'Stability AI', type: 'ai', tier: 2 },
    { name: 'Monzo', type: 'fintech', tier: 2 },
    { name: 'Wise', type: 'fintech', tier: 2 },
    { name: 'Stripe', type: 'fintech', tier: 2 },
    { name: 'Index Ventures', type: 'vc', tier: 2 },
    { name: 'Atomico', type: 'vc', tier: 2 },

    // Tier 3 - Extended network
    { name: 'Cohere', type: 'ai', tier: 3 },
    { name: 'Faculty AI', type: 'ai', tier: 3 },
    { name: 'BenevolentAI', type: 'ai', tier: 3 },
    { name: 'Tractable', type: 'ai', tier: 3 },
    { name: 'GoCardless', type: 'fintech', tier: 3 },
    { name: 'Checkout.com', type: 'fintech', tier: 3 },
    { name: 'Plaid', type: 'fintech', tier: 3 },
    { name: 'Klarna', type: 'fintech', tier: 3 },
    { name: 'Octopus', type: 'vc', tier: 3 },
    { name: 'Accel', type: 'vc', tier: 3 },
    { name: 'Seedcamp', type: 'vc', tier: 3 },
    { name: 'Notion', type: 'vc', tier: 3 },
    { name: 'Coinbase', type: 'web3', tier: 3 },
    { name: 'Ledger', type: 'web3', tier: 3 },
    { name: 'Blockchain.com', type: 'web3', tier: 3 },
  ];

  const getColor = (type: string) => {
    const colors: Record<string, string> = {
      event: '#FFD600',
      ai: '#00D27F',
      fintech: '#FF6B9D',
      vc: '#4D9FFF',
      web3: '#A855F7',
    };
    return colors[type] || '#251720';
  };

  const getPosition = (index: number, tier: number, totalInTier: number) => {
    const angle = (index / totalInTier) * Math.PI * 2 - Math.PI / 2;
    const radius = tier === 0 ? 0 : tier * 200;
    return {
      x: 640 + Math.cos(angle) * radius,
      y: 360 + Math.sin(angle) * radius,
    };
  };

  // Group by tier
  const tiers = companies.reduce((acc, company) => {
    if (!acc[company.tier]) acc[company.tier] = [];
    acc[company.tier].push(company);
    return acc;
  }, {} as Record<number, typeof companies>);

  // Calculate positions
  const nodesWithPositions = companies.map((company, i) => {
    const tierCompanies = tiers[company.tier];
    const indexInTier = tierCompanies.indexOf(company);
    const pos = getPosition(indexInTier, company.tier, tierCompanies.length);
    return { ...company, ...pos, index: i };
  });

  // Animation: nodes appear in tiers
  const getTierStartFrame = (tier: number) => {
    return 30 + tier * 90; // Stagger tier appearance
  };

  const getNodeOpacity = (tier: number) => {
    const startFrame = getTierStartFrame(tier);
    return interpolate(frame, [startFrame, startFrame + 30], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  const getNodeScale = (tier: number) => {
    const startFrame = getTierStartFrame(tier);
    return spring({
      frame: frame - startFrame,
      fps,
      config: {
        damping: 20,
      },
    });
  };

  // Connection line opacity
  const getConnectionOpacity = (tier1: number, tier2: number) => {
    const maxTier = Math.max(tier1, tier2);
    const startFrame = getTierStartFrame(maxTier) + 30;
    return interpolate(frame, [startFrame, startFrame + 60], [0, 0.4], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    });
  };

  // Final text reveal
  const finalTextOpacity = interpolate(frame, [900, 1050], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const finalTextScale = spring({
    frame: frame - 900,
    fps,
    config: {
      damping: 15,
    },
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #F2FDFB 0%, #EAF8F5 50%, #E5F4EF 100%)',
        backgroundImage: 'radial-gradient(#251720 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        backgroundPosition: '-1px -1px',
        fontFamily: "'Epilogue', sans-serif",
      }}
    >
      {/* Connection lines */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        viewBox="0 0 1280 720"
      >
        {nodesWithPositions.map((node, i) => {
          if (node.tier === 0) return null; // Center node doesn't connect to itself

          // Connect to center
          const center = nodesWithPositions[0];
          const opacity = getConnectionOpacity(node.tier, center.tier);

          return (
            <line
              key={`center-${i}`}
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke={getColor(node.type)}
              strokeWidth="2"
              opacity={opacity}
              strokeDasharray={node.tier === 1 ? '0' : '4 4'}
            />
          );
        })}

        {/* Inter-tier connections (selective) */}
        {nodesWithPositions.map((node1, i) =>
          nodesWithPositions.slice(i + 1).map((node2, j) => {
            // Connect some nodes in same tier
            if (
              node1.tier === node2.tier &&
              node1.tier > 0 &&
              Math.abs(node1.index - node2.index) < 3 &&
              Math.random() > 0.6
            ) {
              const opacity = getConnectionOpacity(node1.tier, node2.tier);
              return (
                <line
                  key={`${i}-${j}`}
                  x1={node1.x}
                  y1={node1.y}
                  x2={node2.x}
                  y2={node2.y}
                  stroke="#251720"
                  strokeWidth="1"
                  opacity={opacity * 0.3}
                  strokeDasharray="2 2"
                />
              );
            }
            return null;
          })
        )}

        {/* Pulsing rings around center */}
        {[1, 2, 3].map((ring) => {
          const pulseOpacity = interpolate(
            (frame + ring * 20) % 120,
            [0, 60, 120],
            [0.1, 0.3, 0.1]
          );
          const opacity = getNodeOpacity(0) * pulseOpacity;

          return (
            <circle
              key={ring}
              cx="640"
              cy="360"
              r={ring * 80}
              fill="none"
              stroke="#FFD600"
              strokeWidth="2"
              opacity={opacity}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodesWithPositions.map((node, i) => {
        const opacity = getNodeOpacity(node.tier);
        const scale = getNodeScale(node.tier);
        const size = node.tier === 0 ? 80 : node.tier === 1 ? 50 : node.tier === 2 ? 36 : 28;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: node.x,
              top: node.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
            }}
          >
            {/* Node circle */}
            <div
              style={{
                width: size,
                height: size,
                borderRadius: '50%',
                background: getColor(node.type),
                border: `${node.tier === 0 ? 4 : 3}px solid #251720`,
                boxShadow: `0 0 ${size}px ${getColor(node.type)}80`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Pulse animation for center */}
              {node.tier === 0 && (
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: getColor(node.type),
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              )}
            </div>

            {/* Label */}
            <div
              style={{
                position: 'absolute',
                top: size + 8,
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontFamily: node.tier === 0 ? "'Epilogue', sans-serif" : "'JetBrains Mono', monospace",
                fontSize: node.tier === 0 ? '1rem' : node.tier === 1 ? '0.7rem' : '0.55rem',
                fontWeight: node.tier === 0 ? 900 : 700,
                color: '#251720',
                textTransform: 'uppercase',
                letterSpacing: node.tier === 0 ? '0.15em' : '0.05em',
                background: 'rgba(255, 255, 255, 0.95)',
                padding: node.tier === 0 ? '6px 12px' : '4px 8px',
                border: `2px solid #251720`,
              }}
            >
              {node.name}
            </div>
          </div>
        );
      })}

      {/* Final message */}
      <div
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '50%',
          transform: `translateX(-50%) scale(${finalTextScale})`,
          opacity: finalTextOpacity,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: "'Epilogue', sans-serif",
            fontSize: '3rem',
            fontWeight: 900,
            color: '#251720',
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}
        >
          EMERGENCE
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#00D27F',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          Q3 2026 // LONDON
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
      `}</style>
    </AbsoluteFill>
  );
};
