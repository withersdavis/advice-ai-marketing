'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FamilyTreeViz } from '@/components/visualizations/family-tree-viz';
import { NetworkGraphViz } from '@/components/visualizations/network-graph-viz';

export default function VizTestPage() {
  const [activeViz, setActiveViz] = useState<'tree' | 'network'>('tree');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-4">Knowledge Graph Visualization Tests</h1>
          <div className="flex gap-3 flex-wrap">
            <Button
              onClick={() => setActiveViz('tree')}
              variant={activeViz === 'tree' ? 'default' : 'outline'}
            >
              Version 1: Hierarchical Tree
            </Button>
            <Button
              onClick={() => setActiveViz('network')}
              variant={activeViz === 'network' ? 'default' : 'outline'}
            >
              Version 2: Orbital System
            </Button>
          </div>
        </div>
      </header>

      {/* Visualization Area */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {activeViz === 'tree' && '3D Hierarchical Family Tree'}
              {activeViz === 'network' && '3D Orbital Ecosystem'}
            </h2>
            <p className="text-neutral-600">
              {activeViz === 'tree' && 'Multi-generational structure with proper family hierarchy, trusts, and entities'}
              {activeViz === 'network' && 'Ecosystem components orbiting the family center with tilted perspective'}
            </p>
          </div>

          <div className="relative w-full h-[600px] bg-white rounded-lg border border-neutral-200">
            {activeViz === 'tree' && <FamilyTreeViz />}
            {activeViz === 'network' && <NetworkGraphViz />}
          </div>
        </div>
      </main>
    </div>
  );
}
