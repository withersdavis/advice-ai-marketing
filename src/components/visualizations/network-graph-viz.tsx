'use client';

import { useEffect, useRef } from 'react';

interface Sphere {
  orbit: number;
  speed: number;
  angle: number;
  size: number;
  color: string;
  label: string;
  z: number;
  elevation: number;
}

export function NetworkGraphViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2 + 50; // Shift down slightly due to tilt

    // Refined color palette
    const colors = {
      family: { base: '#881337', light: '#a8365a', dark: '#6b0f2c' },
      entity: { base: '#d97706', light: '#f59e0b', dark: '#b45309' },
      trust: { base: '#2563eb', light: '#3b82f6', dark: '#1d4ed8' },
      strategy: { base: '#8b5cf6', light: '#a78bfa', dark: '#7c3aed' },
      cashflow: { base: '#10b981', light: '#34d399', dark: '#059669' },
      advisor: { base: '#06b6d4', light: '#22d3ee', dark: '#0891b2' },
    };

    // Define orbital system
    const spheres: Sphere[] = [
      // Center - Family
      { orbit: 0, speed: 0, angle: 0, size: 40, color: colors.family.base, label: 'Family', z: 0, elevation: 0 },

      // Inner orbit - Entities
      { orbit: 120, speed: 0.02, angle: 0, size: 28, color: colors.entity.base, label: 'Family Office', z: 0, elevation: 0 },
      { orbit: 120, speed: 0.02, angle: Math.PI * 0.66, size: 26, color: colors.trust.base, label: 'Trust', z: 0, elevation: 10 },
      { orbit: 120, speed: 0.02, angle: Math.PI * 1.33, size: 24, color: colors.entity.base, label: 'Holdings', z: 0, elevation: -10 },

      // Middle orbit - Strategies
      { orbit: 200, speed: 0.015, angle: 0, size: 22, color: colors.strategy.base, label: 'Estate', z: 0, elevation: 20 },
      { orbit: 200, speed: 0.015, angle: Math.PI * 0.5, size: 22, color: colors.strategy.base, label: 'Tax', z: 0, elevation: 0 },
      { orbit: 200, speed: 0.015, angle: Math.PI, size: 22, color: colors.strategy.base, label: 'Insurance', z: 0, elevation: -20 },
      { orbit: 200, speed: 0.015, angle: Math.PI * 1.5, size: 20, color: colors.cashflow.base, label: 'Cash Flow', z: 0, elevation: 10 },

      // Outer orbit - Advisors
      { orbit: 270, speed: 0.01, angle: 0, size: 18, color: colors.advisor.base, label: 'Attorney', z: 0, elevation: 15 },
      { orbit: 270, speed: 0.01, angle: Math.PI * 0.66, size: 18, color: colors.advisor.base, label: 'CPA', z: 0, elevation: 0 },
      { orbit: 270, speed: 0.01, angle: Math.PI * 1.33, size: 18, color: colors.advisor.base, label: 'Insurance', z: 0, elevation: -15 },
    ];

    let globalRotation = 0;
    const tiltAngle = 0.5; // Tilt forward to see orbits better

    function hexToRgb(hex: string) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    }

    function animate() {
      if (!ctx) return;
      // Subtle gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, '#ffffff');
      bgGradient.addColorStop(1, '#fafafa');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      globalRotation += 0.003;

      // Update sphere positions and sort by z for proper layering
      const sphereData = spheres.map((sphere) => {
        // Update angle
        sphere.angle += sphere.speed;

        // Calculate 3D position
        const orbitAngle = sphere.angle + globalRotation;
        const x = sphere.orbit * Math.cos(orbitAngle);
        const z = sphere.orbit * Math.sin(orbitAngle);
        const y = sphere.elevation * Math.sin(sphere.angle * 2);

        // Apply tilt (rotate around X axis)
        const cosTilt = Math.cos(tiltAngle);
        const sinTilt = Math.sin(tiltAngle);
        const y1 = y * cosTilt - z * sinTilt;
        const z1 = y * sinTilt + z * cosTilt;

        // Perspective projection
        const perspective = 800;
        const scale = perspective / (perspective + z1);

        return {
          sphere,
          x: centerX + x * scale,
          y: centerY + y1 * scale,
          z: z1,
          scale: scale,
          orbitX: x,
          orbitZ: z,
        };
      });

      // Sort by z-index (back to front)
      sphereData.sort((a, b) => a.z - b.z);

      // Draw orbital paths (ellipses due to perspective)
      spheres.forEach((sphere) => {
        if (sphere.orbit === 0) return;

        ctx.beginPath();
        for (let i = 0; i <= 360; i += 5) {
          const angle = (i * Math.PI) / 180 + globalRotation;
          const x = sphere.orbit * Math.cos(angle);
          const z = sphere.orbit * Math.sin(angle);
          const y = 0;

          // Apply tilt
          const y1 = y * Math.cos(tiltAngle) - z * Math.sin(tiltAngle);
          const z1 = y * Math.sin(tiltAngle) + z * Math.cos(tiltAngle);

          const perspective = 800;
          const scale = perspective / (perspective + z1);
          const screenX = centerX + x * scale;
          const screenY = centerY + y1 * scale;

          if (i === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw curved connections to center
      sphereData.forEach((data) => {
        if (data.sphere.orbit === 0) return;

        const centerData = sphereData.find((d) => d.sphere.orbit === 0)!;

        const gradient = ctx.createLinearGradient(centerData.x, centerData.y, data.x, data.y);
        const alpha = 0.08 + (data.scale * 0.04);
        gradient.addColorStop(0, `rgba(100, 100, 120, ${alpha})`);
        gradient.addColorStop(1, `rgba(120, 120, 140, ${alpha * 0.6})`);

        ctx.beginPath();
        ctx.moveTo(centerData.x, centerData.y);

        // Curved connection
        const cpX = (centerData.x + data.x) / 2;
        const cpY = (centerData.y + data.y) / 2 - 15;
        ctx.quadraticCurveTo(cpX, cpY, data.x, data.y);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5 * data.scale;
        ctx.lineCap = 'round';
        ctx.stroke();
      });

      // Draw spheres with sophisticated rendering
      sphereData.forEach((data) => {
        const radius = data.sphere.size * data.scale;
        const rgb = hexToRgb(data.sphere.color);

        // Ambient shadow (larger, very soft)
        const ambientGradient = ctx.createRadialGradient(
          data.x,
          data.y + radius * 0.2,
          0,
          data.x,
          data.y + radius * 0.2,
          radius * 2.5
        );
        ambientGradient.addColorStop(0, 'rgba(0, 0, 0, 0.12)');
        ambientGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.04)');
        ambientGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(data.x, data.y + radius * 0.2, radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = ambientGradient;
        ctx.fill();

        // Main sphere with realistic shading
        const mainGradient = ctx.createRadialGradient(
          data.x - radius * 0.35,
          data.y - radius * 0.35,
          radius * 0.1,
          data.x,
          data.y,
          radius * 1.2
        );

        // Sophisticated gradient stops for 3D appearance
        mainGradient.addColorStop(0, `rgb(${Math.min(255, rgb.r + 60)}, ${Math.min(255, rgb.g + 60)}, ${Math.min(255, rgb.b + 60)})`);
        mainGradient.addColorStop(0.3, `rgb(${Math.min(255, rgb.r + 30)}, ${Math.min(255, rgb.g + 30)}, ${Math.min(255, rgb.b + 30)})`);
        mainGradient.addColorStop(0.6, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
        mainGradient.addColorStop(0.85, `rgb(${Math.max(0, rgb.r - 40)}, ${Math.max(0, rgb.g - 40)}, ${Math.max(0, rgb.b - 40)})`);
        mainGradient.addColorStop(1, `rgb(${Math.max(0, rgb.r - 60)}, ${Math.max(0, rgb.g - 60)}, ${Math.max(0, rgb.b - 60)})`);

        ctx.beginPath();
        ctx.arc(data.x, data.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = mainGradient;
        ctx.fill();

        // Specular highlight
        const highlightGradient = ctx.createRadialGradient(
          data.x - radius * 0.4,
          data.y - radius * 0.4,
          0,
          data.x - radius * 0.4,
          data.y - radius * 0.4,
          radius * 0.5
        );
        highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
        highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(data.x - radius * 0.4, data.y - radius * 0.4, radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = highlightGradient;
        ctx.fill();

        // Rim light (edge lighting)
        const rimGradient = ctx.createRadialGradient(
          data.x,
          data.y,
          radius * 0.85,
          data.x,
          data.y,
          radius * 1.05
        );
        rimGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        rimGradient.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
        rimGradient.addColorStop(1, 'rgba(255, 255, 255, 0.15)');

        ctx.beginPath();
        ctx.arc(data.x, data.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = rimGradient;
        ctx.fill();

        // Label with better typography
        if (radius > 10) {
          ctx.fillStyle = '#ffffff';
          ctx.font = `600 ${Math.floor(9 * data.scale)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Text shadow for better readability
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowBlur = 4 * data.scale;
          ctx.shadowOffsetY = 1 * data.scale;

          ctx.fillText(data.sphere.label, data.x, data.y);

          // Reset shadow
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 0;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="w-full h-full relative bg-white">
      <canvas ref={canvasRef} width={1200} height={600} className="w-full h-full" />

      {/* Refined Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-neutral-200/50">
        <h3 className="text-xs font-semibold mb-3 text-neutral-500 uppercase tracking-wider">Orbital Rings</h3>
        <div className="space-y-2.5 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #a8365a 0%, #881337 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Center: Family</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Inner: Entities</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Middle: Strategies</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Outer: Advisors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
