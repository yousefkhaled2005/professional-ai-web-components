import React from 'react';
import { Sparkles, Terminal, Code2, Cpu, Github, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-base font-bold bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              Professional AI Components
            </span>
            <div className="text-[10px] text-cyan-400 font-mono flex items-center gap-1">
              <span>ARCHITECTED BY YOUSEF KHALED GOUDA</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#hero" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Hero Suites</span>
          </a>
          <a href="#terminal" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>Agent Console</span>
          </a>
          <a href="#components" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Design System</span>
          </a>
          <a href="#playground" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Prompt Playground</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/yousefkhaled2005/professional-ai-web-components"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-sm font-semibold text-white transition-all shadow-md hover:border-cyan-500/50"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Star on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  );
};
