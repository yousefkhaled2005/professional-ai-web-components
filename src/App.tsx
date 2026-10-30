import React from 'react';
import { FluidShaderCanvas } from './components/FluidShaderCanvas.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AgentTerminal } from './components/AgentTerminal.tsx';
import { ModelEvaluationRadar } from './components/ModelEvaluationRadar.tsx';
import { ComponentShowcase } from './components/ComponentShowcase.tsx';
import { PromptPlayground } from './components/PromptPlayground.tsx';
import { Footer } from './components/Footer.tsx';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-slate-100 overflow-hidden">
      {/* Background Ray-Marched Shader Canvas */}
      <FluidShaderCanvas />

      {/* Main Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="space-y-12">
        <HeroSection />
        <AgentTerminal />
        <ModelEvaluationRadar />
        <ComponentShowcase />
        <PromptPlayground />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
