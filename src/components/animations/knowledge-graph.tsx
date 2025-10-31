'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type NodeType = 'family' | 'entity' | 'strategy' | 'advisor';

interface Node {
  id: string;
  label: string;
  type: NodeType;
  x: number;
  y: number;
  size: number;
}

interface Connection {
  from: string;
  to: string;
}

const nodes: Node[] = [
  // Generation 1 - Top tier (founders)
  { id: 'gen1-a', label: 'Gen 1A', type: 'family', x: 300, y: 80, size: 40 },
  { id: 'gen1-b', label: 'Gen 1B', type: 'family', x: 420, y: 80, size: 40 },

  // Generation 2 - Middle tier (children)
  { id: 'gen2-a', label: 'Gen 2A', type: 'family', x: 210, y: 230, size: 34 },
  { id: 'gen2-b', label: 'Gen 2B', type: 'family', x: 360, y: 230, size: 34 },
  { id: 'gen2-c', label: 'Gen 2C', type: 'family', x: 510, y: 230, size: 34 },

  // Generation 3 - Bottom tier (grandchildren)
  { id: 'gen3-a', label: 'Gen 3A', type: 'family', x: 180, y: 400, size: 28 },
  { id: 'gen3-b', label: 'Gen 3B', type: 'family', x: 300, y: 400, size: 28 },
  { id: 'gen3-c', label: 'Gen 3C', type: 'family', x: 420, y: 400, size: 28 },
  { id: 'gen3-d', label: 'Gen 3D', type: 'family', x: 540, y: 400, size: 28 },

  // Entity Nodes - Right side
  { id: 'family-office', label: 'Family Office', type: 'entity', x: 645, y: 100, size: 32 },
  { id: 'trust-1', label: 'Trust I', type: 'entity', x: 645, y: 210, size: 30 },
  { id: 'trust-2', label: 'Trust II', type: 'entity', x: 645, y: 300, size: 30 },
  { id: 'holdings', label: 'Holdings LLC', type: 'entity', x: 645, y: 390, size: 30 },

  // Strategy Nodes - Left side
  { id: 'estate', label: 'Estate', type: 'strategy', x: 75, y: 100, size: 26 },
  { id: 'tax', label: 'Tax', type: 'strategy', x: 75, y: 200, size: 26 },
  { id: 'insurance', label: 'Insurance', type: 'strategy', x: 75, y: 300, size: 26 },
  { id: 'cashflow', label: 'Cash Flow', type: 'strategy', x: 75, y: 400, size: 26 },

  // Advisor Nodes - Outer ring
  { id: 'attorney', label: 'Attorney', type: 'advisor', x: 750, y: 80, size: 24 },
  { id: 'cpa', label: 'CPA', type: 'advisor', x: 750, y: 220, size: 24 },
  { id: 'insurance-adv', label: 'Ins Advisor', type: 'advisor', x: 750, y: 380, size: 24 },
];

const connections: Connection[] = [
  // Generation 1 to Generation 2
  { from: 'gen1-a', to: 'gen2-a' },
  { from: 'gen1-a', to: 'gen2-b' },
  { from: 'gen1-b', to: 'gen2-b' },
  { from: 'gen1-b', to: 'gen2-c' },

  // Generation 2 to Generation 3
  { from: 'gen2-a', to: 'gen3-a' },
  { from: 'gen2-a', to: 'gen3-b' },
  { from: 'gen2-b', to: 'gen3-b' },
  { from: 'gen2-b', to: 'gen3-c' },
  { from: 'gen2-c', to: 'gen3-c' },
  { from: 'gen2-c', to: 'gen3-d' },

  // Family to Entity connections
  { from: 'gen1-a', to: 'family-office' },
  { from: 'gen1-b', to: 'trust-1' },
  { from: 'gen2-a', to: 'trust-1' },
  { from: 'gen2-b', to: 'trust-2' },
  { from: 'gen2-c', to: 'holdings' },
  { from: 'family-office', to: 'holdings' },

  // Strategy to Family connections
  { from: 'estate', to: 'gen1-a' },
  { from: 'estate', to: 'trust-1' },
  { from: 'tax', to: 'gen2-b' },
  { from: 'tax', to: 'family-office' },
  { from: 'insurance', to: 'gen1-b' },
  { from: 'insurance', to: 'gen2-c' },
  { from: 'cashflow', to: 'holdings' },

  // Advisor to Strategy connections
  { from: 'attorney', to: 'estate' },
  { from: 'cpa', to: 'tax' },
  { from: 'insurance-adv', to: 'insurance' },

  // Advisor to Entity connections
  { from: 'attorney', to: 'trust-2' },
  { from: 'cpa', to: 'family-office' },
];

type Phase = 'family' | 'entities' | 'strategies' | 'advisors' | 'full';

const getNodeColor = (type: NodeType): string => {
  switch (type) {
    case 'family':
      return 'rgb(169, 49, 77)'; // accent-700
    case 'entity':
      return 'rgb(64, 64, 64)'; // neutral-700
    case 'strategy':
      return 'rgb(223, 95, 119)'; // accent-500
    case 'advisor':
      return 'rgb(115, 115, 115)'; // neutral-500
  }
};

const getNodeGradientId = (type: NodeType): string => {
  return `gradient-${type}`;
};

const getNodeOpacity = (node: Node, phase: Phase): number => {
  if (phase === 'full') return 1;
  if (phase === 'family' && node.type === 'family') return 1;
  if (phase === 'entities' && (node.type === 'entity' || node.type === 'family')) return 1;
  if (phase === 'strategies' && (node.type === 'strategy' || node.type === 'family')) return 1;
  if (phase === 'advisors' && (node.type === 'advisor' || node.type === 'strategy')) return 1;
  return 0.25;
};

const getConnectionOpacity = (conn: Connection, phase: Phase, nodes: Node[]): number => {
  if (phase === 'full') return 1;

  const fromNode = nodes.find((n) => n.id === conn.from);
  const toNode = nodes.find((n) => n.id === conn.to);

  if (phase === 'family') {
    if (fromNode?.type === 'family' && toNode?.type === 'family') return 1;
  }

  if (phase === 'entities') {
    if (fromNode?.type === 'entity' || toNode?.type === 'entity') return 1;
  }

  if (phase === 'strategies') {
    if (fromNode?.type === 'strategy' || toNode?.type === 'strategy') return 1;
  }

  if (phase === 'advisors') {
    if (fromNode?.type === 'advisor' || toNode?.type === 'advisor') return 1;
  }

  return 0.12;
};

export function KnowledgeGraph() {
  const [phase, setPhase] = useState<Phase>('family');

  useEffect(() => {
    const phases: Phase[] = ['family', 'entities', 'strategies', 'advisors', 'full'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % phases.length;
      setPhase(phases[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Create SVG path for connection
  const getConnectionPath = (from: Node, to: Node): string => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const controlX = from.x + dx / 2;
    const controlY = from.y + dy / 2;

    return `M ${from.x},${from.y} Q ${controlX},${controlY} ${to.x},${to.y}`;
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 820 500"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        aria-label="Knowledge graph visualization showing multi-generational family ecosystem"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Gradient Definitions */}
        <defs>
          {/* Family gradient */}
          <radialGradient id="gradient-family" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgb(220, 90, 115)" />
            <stop offset="100%" stopColor="rgb(140, 35, 60)" />
          </radialGradient>

          {/* Entity gradient */}
          <radialGradient id="gradient-entity" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgb(100, 100, 100)" />
            <stop offset="100%" stopColor="rgb(50, 50, 50)" />
          </radialGradient>

          {/* Strategy gradient */}
          <radialGradient id="gradient-strategy" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgb(235, 120, 140)" />
            <stop offset="100%" stopColor="rgb(200, 80, 105)" />
          </radialGradient>

          {/* Advisor gradient */}
          <radialGradient id="gradient-advisor" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgb(140, 140, 140)" />
            <stop offset="100%" stopColor="rgb(90, 90, 90)" />
          </radialGradient>
        </defs>

        {/* Connections */}
        <g>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from);
            const toNode = nodes.find((n) => n.id === conn.to);

            if (!fromNode || !toNode) return null;

            const path = getConnectionPath(fromNode, toNode);
            const opacity = getConnectionOpacity(conn, phase, nodes);

            return (
              <motion.path
                key={`${conn.from}-${conn.to}-${i}`}
                d={path}
                stroke="rgb(212, 212, 212)"
                strokeWidth={2.5}
                fill="none"
                initial={{ opacity: 0.12 }}
                animate={{
                  opacity,
                  stroke: opacity > 0.5 ? 'rgb(236, 138, 154)' : 'rgb(212, 212, 212)',
                  strokeWidth: opacity > 0.5 ? 3.5 : 2.5,
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node) => {
            const opacity = getNodeOpacity(node, phase);
            const gradientId = getNodeGradientId(node.type);

            return (
              <g key={node.id}>
                {/* Node circle */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size}
                  fill={`url(#${gradientId})`}
                  initial={{ opacity: 0.25, scale: 1 }}
                  animate={{
                    opacity,
                    scale: opacity > 0.5 ? [1, 1.08, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    },
                  }}
                />

                {/* Node label */}
                <motion.text
                  x={node.x}
                  y={node.y + node.size + 20}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="600"
                  fill="rgb(64, 64, 64)"
                  initial={{ opacity: 0.25 }}
                  animate={{ opacity }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                >
                  {node.label}
                </motion.text>
              </g>
            );
          })}
        </g>

        {/* Animated pulse effect on active phase */}
        {phase !== 'full' && (
          <motion.circle
            cx={410}
            cy={250}
            r={220}
            fill="none"
            stroke="rgb(236, 138, 154)"
            strokeWidth={2}
            opacity={0.15}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1.15, opacity: [0.15, 0, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </svg>
    </div>
  );
}
