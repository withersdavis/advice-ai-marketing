'use client';

import { useEffect, useRef } from 'react';

interface TreeNode3D {
  x: number;
  y: number;
  z: number;
  label: string;
  color: string;
  size: number;
  children?: TreeNode3D[];
}

export function FamilyTreeViz() {
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

    // Refined color palette - more sophisticated
    const colors = {
      family1: { base: '#7c2d4a', light: '#a84465', dark: '#5a1f35' },
      family2: { base: '#9d3858', light: '#c74973', dark: '#6e2740' },
      family3: { base: '#b84569', light: '#d96385', dark: '#8a3350' },
      trust: { base: '#2563eb', light: '#3b82f6', dark: '#1d4ed8' },
      entity: { base: '#d97706', light: '#f59e0b', dark: '#b45309' },
    };

    // Define 3D tree structure
    const familyTree: TreeNode3D = {
      x: 0,
      y: -120,
      z: 0,
      label: 'Generation 1',
      color: colors.family1.base,
      size: 32,
      children: [
        {
          x: -100,
          y: 0,
          z: -40,
          label: 'Family Trust',
          color: colors.trust.base,
          size: 26,
          children: [
            {
              x: -140,
              y: 120,
              z: -60,
              label: 'Generation 2A',
              color: colors.family2.base,
              size: 24,
              children: [
                {
                  x: -180,
                  y: 220,
                  z: -80,
                  label: 'Generation 3A',
                  color: colors.family3.base,
                  size: 20,
                },
              ],
            },
          ],
        },
        {
          x: 0,
          y: 0,
          z: 40,
          label: 'Family Office',
          color: colors.entity.base,
          size: 26,
          children: [
            {
              x: 0,
              y: 120,
              z: 60,
              label: 'Generation 2B',
              color: colors.family2.base,
              size: 24,
              children: [
                {
                  x: -40,
                  y: 220,
                  z: 80,
                  label: 'Generation 3B',
                  color: colors.family3.base,
                  size: 20,
                },
                {
                  x: 40,
                  y: 220,
                  z: 80,
                  label: 'Generation 3C',
                  color: colors.family3.base,
                  size: 20,
                },
              ],
            },
          ],
        },
        {
          x: 100,
          y: 0,
          z: -40,
          label: 'Holdings LLC',
          color: colors.entity.base,
          size: 26,
          children: [
            {
              x: 140,
              y: 120,
              z: -60,
              label: 'Generation 2C',
              color: colors.family2.base,
              size: 24,
            },
          ],
        },
      ],
    };

    let rotationY = 0;
    let rotationX = 0.12;

    function hexToRgb(hex: string) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    }

    function project3D(x: number, y: number, z: number, rotation: number, tilt: number) {
      const cosY = Math.cos(rotation);
      const sinY = Math.sin(rotation);
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);

      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const perspective = 600;
      const scale = perspective / (perspective + z2);

      return {
        x: centerX + x1 * scale,
        y: centerY + y1 * scale,
        z: z2,
        scale: scale,
      };
    }

    function drawConnection(from: any, to: any) {
      if (!ctx) return;
      const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
      const alpha = 0.12 + (from.scale + to.scale) * 0.08;
      gradient.addColorStop(0, `rgba(100, 100, 120, ${alpha})`);
      gradient.addColorStop(1, `rgba(120, 120, 140, ${alpha * 0.7})`);

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);

      // Curved connection
      const cpX = (from.x + to.x) / 2;
      const cpY = (from.y + to.y) / 2 - 20;
      ctx.quadraticCurveTo(cpX, cpY, to.x, to.y);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2 * Math.min(from.scale, to.scale);
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    function drawSphere(proj: any, node: TreeNode3D) {
      if (!ctx) return;
      const radius = node.size * proj.scale;
      const rgb = hexToRgb(node.color);

      // Ambient shadow (larger, very soft)
      const ambientGradient = ctx.createRadialGradient(
        proj.x,
        proj.y + radius * 0.2,
        0,
        proj.x,
        proj.y + radius * 0.2,
        radius * 2.5
      );
      ambientGradient.addColorStop(0, 'rgba(0, 0, 0, 0.12)');
      ambientGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.04)');
      ambientGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(proj.x, proj.y + radius * 0.2, radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = ambientGradient;
      ctx.fill();

      // Main sphere with realistic shading
      const mainGradient = ctx.createRadialGradient(
        proj.x - radius * 0.35,
        proj.y - radius * 0.35,
        radius * 0.1,
        proj.x,
        proj.y,
        radius * 1.2
      );

      // Sophisticated gradient stops for 3D appearance
      mainGradient.addColorStop(0, `rgb(${Math.min(255, rgb.r + 60)}, ${Math.min(255, rgb.g + 60)}, ${Math.min(255, rgb.b + 60)})`);
      mainGradient.addColorStop(0.3, `rgb(${Math.min(255, rgb.r + 30)}, ${Math.min(255, rgb.g + 30)}, ${Math.min(255, rgb.b + 30)})`);
      mainGradient.addColorStop(0.6, `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      mainGradient.addColorStop(0.85, `rgb(${Math.max(0, rgb.r - 40)}, ${Math.max(0, rgb.g - 40)}, ${Math.max(0, rgb.b - 40)})`);
      mainGradient.addColorStop(1, `rgb(${Math.max(0, rgb.r - 60)}, ${Math.max(0, rgb.g - 60)}, ${Math.max(0, rgb.b - 60)})`);

      ctx.beginPath();
      ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = mainGradient;
      ctx.fill();

      // Specular highlight
      const highlightGradient = ctx.createRadialGradient(
        proj.x - radius * 0.4,
        proj.y - radius * 0.4,
        0,
        proj.x - radius * 0.4,
        proj.y - radius * 0.4,
        radius * 0.5
      );
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.beginPath();
      ctx.arc(proj.x - radius * 0.4, proj.y - radius * 0.4, radius * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Rim light (edge lighting)
      const rimGradient = ctx.createRadialGradient(
        proj.x,
        proj.y,
        radius * 0.85,
        proj.x,
        proj.y,
        radius * 1.05
      );
      rimGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      rimGradient.addColorStop(0.8, 'rgba(255, 255, 255, 0)');
      rimGradient.addColorStop(1, 'rgba(255, 255, 255, 0.15)');

      ctx.beginPath();
      ctx.arc(proj.x, proj.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = rimGradient;
      ctx.fill();

      // Label with better typography
      ctx.fillStyle = '#ffffff';
      ctx.font = `600 ${Math.floor(10 * proj.scale)}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Text shadow for better readability
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 4 * proj.scale;
      ctx.shadowOffsetY = 1 * proj.scale;

      ctx.fillText(node.label, proj.x, proj.y);

      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    }

    function drawNode(node: TreeNode3D, rotation: number, tilt: number, parentProj?: any) {
      const proj = project3D(node.x, node.y, node.z, rotation, tilt);

      if (parentProj) {
        drawConnection(parentProj, proj);
      }

      drawSphere(proj, node);

      if (node.children) {
        node.children.forEach((child) => {
          drawNode(child, rotation, tilt, proj);
        });
      }
    }

    function animate() {
      if (!ctx) return;
      // Subtle gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, '#ffffff');
      bgGradient.addColorStop(1, '#fafafa');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      rotationY += 0.004;

      drawNode(familyTree, rotationY, rotationX);

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="w-full h-full relative bg-white">
      <canvas
        ref={canvasRef}
        width={1200}
        height={600}
        className="w-full h-full"
      />

      {/* Refined Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-neutral-200/50">
        <h3 className="text-xs font-semibold mb-3 text-neutral-500 uppercase tracking-wider">Structure</h3>
        <div className="space-y-2.5 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #a84465 0%, #7c2d4a 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Family</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Trusts</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full shadow-sm" style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
            }}></div>
            <span className="text-neutral-700 font-medium">Entities</span>
          </div>
        </div>
      </div>
    </div>
  );
}
