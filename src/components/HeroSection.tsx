import React from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, Terminal, Activity, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto z-10">
      {/* Top Pill */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>ENTERPRISE AI INTERFACE SUITE · 2026 EDITION</span>
          <span className="text-slate-500">|</span>
          <span className="text-indigo-300">VIBE-CODED WITH CLAUDE AI</span>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Modern Front-End Suites for{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Autonomous AI Agents
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Production-grade, highly interactive hero sections, WebGL GLSL shaders, reactive bento components, and design systems architected by{' '}
          <strong className="text-cyan-300 font-semibold">Yousef Khaled Gouda</strong> for next-generation frontier intelligence platforms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#terminal"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Launch Interactive Agent Console</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
          <a
            href="#components"
            className="px-6 py-3.5 rounded-xl glass-panel border border-slate-700/80 text-slate-200 font-semibold text-sm hover:border-slate-500 hover:bg-slate-800/60 transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Explore Component Library</span>
          </a>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
          <Zap className="w-6 h-6 text-amber-400 mb-2" />
          <span className="text-2xl font-bold font-mono text-white">420ms</span>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">P95 Inference Latency</span>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
          <Cpu className="w-6 h-6 text-cyan-400 mb-2" />
          <span className="text-2xl font-bold font-mono text-white">100% Offline</span>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Zero Heavy Dependencies</span>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
          <Sparkles className="w-6 h-6 text-purple-400 mb-2" />
          <span className="text-2xl font-bold font-mono text-white">Claude AI</span>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Aligned & Vibe Coded</span>
        </div>
        <div className="glass-card p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
          <Activity className="w-6 h-6 text-emerald-400 mb-2" />
          <span className="text-2xl font-bold font-mono text-white">60 FPS</span>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">Hardware Accelerated</span>
        </div>
      </div>
    </section>
  );
};
