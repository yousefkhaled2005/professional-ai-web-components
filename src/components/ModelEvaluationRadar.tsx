import React, { useState } from 'react';
import { Award, CheckCircle2, TrendingUp } from 'lucide-react';

interface Metric {
  name: string;
  claude: number;
  gpt: number;
  deepseek: number;
}

const metrics: Metric[] = [
  { name: 'Coding & Architecture (SWE-bench)', claude: 94, gpt: 91, deepseek: 89 },
  { name: 'Reasoning & Multi-hop Math (AIME)', claude: 92, gpt: 95, deepseek: 93 },
  { name: 'Arabic NLP & Dialect Comprehension', claude: 91, gpt: 84, deepseek: 82 },
  { name: 'Instruction Following & Schema Alignment', claude: 96, gpt: 92, deepseek: 88 },
  { name: 'Safety & Hallucination Resistance', claude: 95, gpt: 90, deepseek: 85 },
];

export const ModelEvaluationRadar: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<'claude' | 'gpt' | 'deepseek'>('claude');

  return (
    <section className="relative py-16 px-6 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Frontier LLM Evaluation & Alignment Matrix
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Curated benchmarking data based on 80K+ SFT samples, DPO preference optimization, and empirical human evaluation across leading frontier foundation models.
        </p>

        {/* Model Switcher Tabs */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setSelectedModel('claude')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedModel === 'claude'
                ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-lg shadow-amber-500/10'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            Claude 3.5 / 3.7 Sonnet (Anthropic)
          </button>
          <button
            onClick={() => setSelectedModel('gpt')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedModel === 'gpt'
                ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 shadow-lg shadow-emerald-500/10'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            ChatGPT-4o / o-series (OpenAI)
          </button>
          <button
            onClick={() => setSelectedModel('deepseek')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              selectedModel === 'deepseek'
                ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 shadow-lg shadow-cyan-500/10'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            DeepSeek R1 / V3
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Progress Bars */}
        <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="font-semibold text-white text-sm">Evaluation Dimension</span>
            <span className="font-mono text-xs text-cyan-400">Normalized Score (0-100)</span>
          </div>

          {metrics.map((m) => {
            const val = m[selectedModel];
            const colorClass =
              selectedModel === 'claude'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                : selectedModel === 'gpt'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500';

            return (
              <div key={m.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-300">{m.name}</span>
                  <span className="font-mono font-bold text-white">{val}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${colorClass} transition-all duration-500 rounded-full`}
                    style={{ width: `${val}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Card */}
        <div className="glass-card p-8 rounded-2xl border border-indigo-500/30 flex flex-col justify-between h-full bg-gradient-to-br from-indigo-950/30 to-purple-950/20">
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              RLHF & DPO Model Alignment SME
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Empirical testing demonstrates that fine-tuned alignment pipelines utilizing Direct Preference Optimization (DPO) and curated reasoning traces boost human preference accuracy from 54% to 82% on specialized domain tasks.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full compliance with Anthropic safety standards</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <TrendingUp className="w-4 h-4" />
              <span>Verified across 5,000+ multi-step chain-of-thought traces</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
