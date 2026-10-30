import React, { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

const mockLogs = [
  { step: '01', agent: 'Supervisor', action: 'Receiving multimodal architecture request from user' },
  { step: '02', agent: 'Orchestrator', action: 'Allocating Claude 3.5 Sonnet context: 200K tokens window active' },
  { step: '03', agent: 'CodePlanner', action: 'Synthesizing React component tree and Three.js shader geometry' },
  { step: '04', agent: 'TailwindJIT', action: 'Injecting dynamic CSS variables and fluid glassmorphism blur classes' },
  { step: '05', agent: 'SecurityAudit', action: 'Static analysis passed: 0 vulnerabilities, CSP-compliant sandbox' },
  { step: '06', agent: 'Deployer', action: 'Vite build optimized: Chunk size 34.2 KB (gzipped), 60 FPS verified' }
];

export const AgentTerminal: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(mockLogs.length);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;
    setActiveStep(0);
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= mockLogs.length) {
          setIsRunning(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section id="terminal" className="relative py-16 px-6 max-w-7xl mx-auto z-10">
      <div className="glass-card rounded-3xl border border-cyan-500/20 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="h-4 w-[1px] bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>claude-agent-daemon :: session://v2026-production</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRunning(true)}
              disabled={isRunning}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-mono font-medium border border-cyan-500/40 transition-all disabled:opacity-50"
            >
              <Play className="w-3 h-3" />
              <span>{isRunning ? 'Running Agent...' : 'Simulate Workflow'}</span>
            </button>
            <button
              onClick={() => setActiveStep(mockLogs.length)}
              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-8 font-mono text-xs md:text-sm space-y-3 bg-[#060a12]/95 min-h-[300px]">
          <div className="text-slate-500 pb-2 border-b border-slate-800/80 flex items-center justify-between">
            <span>[AGENT_SYSTEM] Autonomous Agent Orchestration Pipeline</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> SECURE_SANDBOX
            </span>
          </div>

          {mockLogs.map((log, index) => {
            const isVisible = index < activeStep;
            return (
              <div
                key={log.step}
                className={`flex items-start gap-3 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                <span className="text-cyan-500/70 select-none">[{log.step}]</span>
                <span className="px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 text-xs border border-indigo-800/50">
                  {log.agent}
                </span>
                <span className="text-slate-300">{log.action}</span>
                {isVisible && <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto flex-shrink-0" />}
              </div>
            );
          })}

          {activeStep === mockLogs.length && (
            <div className="pt-4 text-emerald-400 flex items-center gap-2 border-t border-slate-800/80 mt-4">
              <Cpu className="w-4 h-4" />
              <span>Pipeline Status: ALL SYSTEMS HEALTHY · READY FOR PRODUCTION</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
