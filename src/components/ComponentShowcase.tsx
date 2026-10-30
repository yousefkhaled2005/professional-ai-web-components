import React, { useState } from 'react';
import { Layers, Copy, Check, Sparkles, Sliders, Box, Palette } from 'lucide-react';

interface ComponentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  snippet: string;
}

const componentList: ComponentItem[] = [
  {
    id: 'fluid-glass-card',
    title: 'Liquid Glassmorphism Bento Tile',
    category: 'Cards & Bento',
    description: 'Hardware-accelerated blurred backdrop tile with dynamic multi-color specular borders and interactive tilt responsiveness.',
    snippet: `<div className="glass-card p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-xl hover:border-cyan-400/50 transition-all">
  <h4 className="text-lg font-bold text-white">Neural Hub</h4>
  <p className="text-slate-400 text-sm mt-1">Autonomous Agent Workspace</p>
</div>`
  },
  {
    id: 'glsl-pulse-button',
    title: 'Cyber Pulse Action Trigger',
    category: 'Buttons & CTAs',
    description: 'Pulsing gradient glow button featuring hardware-accelerated SVG glow filter and micro-interaction spring physics.',
    snippet: `<button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all">
  Deploy Agentic Node
</button>`
  },
  {
    id: 'telemetry-badge',
    title: 'Real-Time Telemetry Status Badge',
    category: 'Badges & Indicators',
    description: 'Blinking latency & model state indicator with monospace metadata and verified state transitions.',
    snippet: `<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
  LIVE INFERENCE :: 420ms
</span>`
  },
  {
    id: 'mesh-shader-view',
    title: 'Ray-Marched Mesh Background Canvas',
    category: 'WebGL & Shaders',
    description: 'Lightweight HTML5 Canvas shader simulating organic multi-color plasma waves with zero WebGL overhead.',
    snippet: `<canvas id="shader" className="fixed inset-0 pointer-events-none opacity-80" />`
  }
];

export const ComponentShowcase: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="components" className="relative py-16 px-6 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
            <Layers className="w-4 h-4" />
            <span>MODULAR FRONT-END LIBRARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Vibe-Coded Design System
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Plug-and-play components crafted with clean React, Tailwind CSS, and optimized canvas animations. Designed to drop directly into your modern web application.
          </p>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5 text-cyan-400" /> React 18+
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-purple-400" /> Tailwind JIT
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-emerald-400" /> TypeScript
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {componentList.map((comp) => {
          const isCopied = copiedId === comp.id;
          return (
            <div key={comp.id} className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-medium px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40">
                    {comp.category}
                  </span>
                  <button
                    onClick={() => handleCopy(comp.id, comp.snippet)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-all border border-slate-700"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied!' : 'Copy JSX'}</span>
                  </button>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{comp.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{comp.description}</p>
              </div>

              {/* Code Preview Strip */}
              <div className="bg-[#050811] px-6 py-3 border-t border-slate-800/80 font-mono text-xs text-slate-400 overflow-x-auto">
                <pre><code>{comp.snippet}</code></pre>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
