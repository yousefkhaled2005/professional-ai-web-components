import React, { useState } from 'react';
import { Sparkles, Play, Code, CheckCircle, RefreshCw } from 'lucide-react';

const presetPrompts = [
  {
    title: 'Autonomous Hero with Video Streaming',
    prompt: 'Generate a dark-mode cyber hero section with responsive video player, P95 telemetry badges, and fluid glassmorphism container cards.',
    result: `// Generated via Claude Prompt Architecture
export function CyberHero() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center p-8 bg-black">
      <div className="backdrop-blur-2xl border border-cyan-500/20 p-10 rounded-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Autonomous Agent Interface
        </h1>
      </div>
    </div>
  );
}`
  },
  {
    title: 'Arabic Multilingual Bento Grid',
    prompt: 'Create an RTL/LTR adaptive Arabic design bento grid showcasing legal document RAG retrieval with hybrid BM25 and dense embedding stats.',
    result: `// Generated via Claude Multilingual Architecture
export function ArabicRAGBento() {
  return (
    <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="glass-card p-6 rounded-2xl text-right">
        <h3 className="text-xl font-bold text-white">منصة استرجاع الوثائق القانونية</h3>
        <p className="text-slate-400 text-sm mt-2">دقة 88% عبر 10,000+ وثيقة قانونية مع Qdrant و LangChain.</p>
      </div>
    </div>
  );
}`
  }
];

export const PromptPlayground: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleRun = (idx: number) => {
    setIsGenerating(true);
    setSelectedIdx(idx);
    setTimeout(() => {
      setIsGenerating(false);
    }, 500);
  };

  const current = presetPrompts[selectedIdx];

  return (
    <section id="playground" className="relative py-16 px-6 max-w-7xl mx-auto z-10">
      <div className="glass-card p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs mb-2">
              <Sparkles className="w-4 h-4" />
              <span>PROMPT ARCHITECTURE LAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Interactive Prompt-to-Component Studio
            </h2>
          </div>

          <div className="flex gap-2">
            {presetPrompts.map((p, i) => (
              <button
                key={p.title}
                onClick={() => handleRun(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedIdx === i
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Preset 0{i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Prompt Column */}
          <div className="space-y-4">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Originating Prompt Specification
            </label>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm font-mono text-slate-300 leading-relaxed min-h-[160px]">
              {current.prompt}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-mono">Model: Claude 3.5 Sonnet / Fable 5</span>
              <button
                onClick={() => handleRun(selectedIdx)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium text-xs shadow-md hover:scale-105 transition-all"
              >
                {isGenerating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isGenerating ? 'Synthesizing...' : 'Regenerate Code'}</span>
              </button>
            </div>
          </div>

          {/* Generated Code Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Vibe-Coded Output (React TSX)
              </label>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#04060d] border border-slate-800/90 text-xs font-mono text-cyan-300 overflow-x-auto min-h-[160px]">
              <pre><code>{current.result}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
