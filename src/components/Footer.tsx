import React from 'react';
import { Github, Globe, FileText, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#040711] py-12 px-6 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-base font-bold text-white tracking-tight">
            Professional AI Web Components
          </span>
          <p className="text-xs text-slate-400 mt-1">
            Engineered & architected by <strong className="text-white">Yousef Khaled Gouda</strong> · 21+ Years Distributed AI Infrastructure.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a
            href="https://github.com/yousefkhaled2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://github.com/yousefkhaled2005/yousef-khaled-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>Executive CV</span>
          </a>
          <a
            href="https://huggingface.co/Yousef1258852"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4" />
            <span>Hugging Face</span>
          </a>
        </div>

        <div className="text-xs text-slate-500 font-mono flex items-center gap-1">
          <span>Released under MIT License</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            Built with Claude AI <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </span>
        </div>
      </div>
    </footer>
  );
};
