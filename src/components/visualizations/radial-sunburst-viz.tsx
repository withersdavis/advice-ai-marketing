'use client';

import { useEffect, useRef } from 'react';

interface HelixNode {
  position: number; // 0-1 along helix
  radius: number; // distance from center
  label: string;
  color: string;
  size: number;
  type: 'family' | 'entity' | 'strategy';
}

export function RadialSunburstViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Define double helix structure
    const helixNodes: HelixNode[] = [
      // Generation 1 - Bottom
      { position: 0, radius: 80, label: 'Gen 1', color: '#881337', size: 32, type: 'family' },
      { position: 0.05, radius: 80, label: 'Trust 1', color: '#3b82f6', size: 24, type: 'entity' },
      { position: 0.1, radius: 80, label: 'Estate Strategy', color: '#8b5cf6', size: 20, type: 'strategy' },

      // Generation 1.5
      { position: 0.2, radius: 70, label: 'Family Office', color: '#f59e0b', size: 26, type: 'entity' },
      { position: 0.25, radius: 70, label: 'Tax Strategy', color: '#8b5cf6', size: 20, type: 'strategy' },

      // Generation 2 - Middle
      { position: 0.35, radius: 65, label: 'Gen 2A', color: '#be123c', size: 28, type: 'family' },
      { position: 0.4, radius: 65, label: 'Gen 2B', color: '#be123c', size: 28, type: 'family' },
      { position: 0.45, radius: 65, label: 'Holdings LLC', color: '#f59e0b', size: 24, type: 'entity' },
      { position: 0.5, radius: 65, label: 'Insurance', color: '#8b5cf6', size: 20, type: 'strategy' },

      // Generation 2.5
      { position: 0.6, radius: 60, label: 'Trust 2', color: '#3b82f6', size: 22, type: 'entity' },
      { position: 0.65, radius: 60, label: 'Investment', color: '#8b5cf6', size: 18, type: 'strategy' },

      // Generation 3 - Top
      { position: 0.75, radius: 55, label: 'Gen 3A', color: '#f43f5e', size: 24, type: 'family' },
      { position: 0.8, radius: 55, label: 'Gen 3B', color: '#f43f5e', size: 24, type: 'family' },
      { position: 0.85, radius: 55, label: 'Gen 3C', color: '#f43f5e', size: 24, type: 'family' },
      { position: 0.9, radius: 55, label: 'Future Trusts', color: '#3b82f6', size: 20, type: 'entity' },
      { position: 0.95, radius: 55, label: 'Legacy', color: '#8b5cf6', size: 18, type: 'strategy' },
    ];

    let rotation = 0;

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      rotation += 0.005;

      // Draw helix spine
      const helixHeight = 400;
      const helixRadius = 100;
      const helixTurns = 2.5;

      // Draw the helix path
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const angle = t * helixTurns * Math.PI * 2 + rotation;
        const x = Math.cos(angle) * helixRadius;
        const y = -helixHeight / 2 + t * helixHeight;
        const z = Math.sin(angle) * helixRadius;

        const perspective = 800;
        const scale = perspective / (perspective + z);
        const screenX = centerX + x * scale;
        const screenY = centerY + y * scale;

        if (i === 0) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Second helix strand (offset)
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const angle = t * helixTurns * Math.PI * 2 + rotation + Math.PI;
        const x = Math.cos(angle) * helixRadius;
        const y = -helixHeight / 2 + t * helixHeight;
        const z = Math.sin(angle) * helixRadius;

        const perspective = 800;
        const scale = perspective / (perspective + z);
        const screenX = centerX + x * scale;
        const screenY = centerY + y * scale;

        if (i === 0) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw connecting bars between helices
      for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const angle1 = t * helixTurns * Math.PI * 2 + rotation;
        const angle2 = angle1 + Math.PI;

        const x1 = Math.cos(angle1) * helixRadius;
        const y1 = -helixHeight / 2 + t * helixHeight;
        const z1 = Math.sin(angle1) * helixRadius;

        const x2 = Math.cos(angle2) * helixRadius;
        const y2 = y1;
        const z2 = Math.sin(angle2) * helixRadius;

        const perspective = 800;
        const scale1 = perspective / (perspective + z1);
        const scale2 = perspective / (perspective + z2);

        const screenX1 = centerX + x1 * scale1;
        const screenY1 = centerY + y1 * scale1;
        const screenX2 = centerX + x2 * scale2;
        const screenY2 = centerY + y2 * scale2;

        ctx.beginPath();
        ctx.moveTo(screenX1, screenY1);
        ctx.lineTo(screenX2, screenY2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw nodes along helix
      const nodeData = helixNodes.map((node) => {
        const angle = node.position * helixTurns * Math.PI * 2 + rotation;
        const baseRadius = helixRadius + node.radius - 80;
        const x = Math.cos(angle) * baseRadius;
        const y = -helixHeight / 2 + node.position * helixHeight;
        const z = Math.sin(angle) * baseRadius;

        const perspective = 800;
        const scale = perspective / (perspective + z);

        return {
          node,
          x: centerX + x * scale,
          y: centerY + y * scale,
          z: z,
          scale: scale,
        };
      });

      // Sort by z for proper layering
      nodeData.sort((a, b) => a.z - b.z);

      // Draw nodes
      nodeData.forEach((data) => {
        const radius = data.node.size * data.scale * 0.8;

        // Glow
        const glowGradient = ctx.createRadialGradient(
          data.x,
          data.y,
          0,
          data.x,
          data.y,
          radius * 2.5
        );
        glowGradient.addColorStop(0, data.node.color);
        glowGradient.addColorStop(0.4, data.node.color);
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(data.x, data.y, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.globalAlpha = 0.3 * data.scale;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Sphere with 3D lighting
        const sphereGradient = ctx.createRadialGradient(
          data.x - radius * 0.3,
          data.y - radius * 0.3,
          0,
          data.x,
          data.y,
          radius
        );

        const color = data.node.color;
        sphereGradient.addColorStop(0, lightenColor(color, 40));
        sphereGradient.addColorStop(0.6, color);
        sphereGradient.addColorStop(1, darkenColor(color, 40));

        ctx.beginPath();
        ctx.arc(data.x, data.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = sphereGradient;
        ctx.shadowColor = data.node.color;
        ctx.shadowBlur = 20 * data.scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Highlight
        ctx.beginPath();
        ctx.arc(data.x - radius * 0.25, data.y - radius * 0.25, radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();

        // Border
        ctx.strokeStyle = data.z > 0 ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 2.5 * data.scale;
        ctx.stroke();

        // Label
        if (radius > 12) {
          ctx.fillStyle = '#fff';
          ctx.font = `bold ${9 * data.scale}px Inter, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
          ctx.shadowBlur = 4;
          ctx.fillText(data.node.label, data.x, data.y);
          ctx.shadowBlur = 0;
        }
      });

      // Draw generation markers
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = 'bold 14px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Gen 1', 30, height - 80);
      ctx.fillText('Gen 2', 30, height / 2);
      ctx.fillText('Gen 3', 30, 80);

      requestAnimationFrame(animate);
    }

    function lightenColor(color: string, percent: number): string {
      const num = parseInt(color.replace('#', ''), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = ((num >> 8) & 0x00ff) + amt;
      const B = (num & 0x0000ff) + amt;
      return `rgb(${Math.min(255, R)}, ${Math.min(255, G)}, ${Math.min(255, B)})`;
    }

    function darkenColor(color: string, percent: number): string {
      const num = parseInt(color.replace('#', ''), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) - amt;
      const G = ((num >> 8) & 0x00ff) - amt;
      const B = (num & 0x0000ff) - amt;
      return `rgb(${Math.max(0, R)}, ${Math.max(0, G)}, ${Math.max(0, B)})`;
    }

    animate();
  }, []);

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      <canvas ref={canvasRef} width={1200} height={600} className="w-full h-full" />

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-lg border border-white/20">
        <h3 className="text-sm font-semibold mb-2 text-white">3D Helix Structure</h3>
        <p className="text-xs text-white/70 mb-3">Generational flow spiraling through time</p>
        <div className="space-y-2 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#881337' }}></div>
            <span>Family (Gen 1)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#be123c' }}></div>
            <span>Family (Gen 2)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#f43f5e' }}></div>
            <span>Family (Gen 3)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
            <span>Trusts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
            <span>Entities</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
            <span>Strategies</span>
          </div>
        </div>
      </div>
    </div>
  );
}
