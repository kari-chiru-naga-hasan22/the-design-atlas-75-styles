import React from 'react';
import { Sparkles, Terminal, ExternalLink, ArrowLeft, Code } from 'lucide-react';

interface LiquidNavProps {
  onBackToAtlas?: () => void;
}

export function LiquidNav({ onBackToAtlas }: LiquidNavProps) {
  return (
    <header className="fixed top-4 inset-x-4 z-40 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
      {/* Brand Mark with Glass Backdrop */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {onBackToAtlas && (
          <button
            onClick={onBackToAtlas}
            className="px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-xs font-mono text-white/80 hover:text-white transition-all flex items-center gap-1.5 shadow-lg hover:scale-105"
            title="Return to The Design Atlas"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Design Atlas</span>
          </button>
        )}

        <div className="px-4 py-2 rounded-2xl bg-black/60 border border-white/20 backdrop-blur-xl flex items-center gap-2.5 shadow-xl">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-space font-black tracking-wider text-sm text-white">
            LIQUID<span className="text-cyan-400">GL</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/60">
            v3.0
          </span>
        </div>
      </div>

      {/* Floating Center Links */}
      <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-xl shadow-xl pointer-events-auto text-xs font-mono">
        <a href="#hero" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Hero
        </a>
        <a href="#experience" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Experience
        </a>
        <a href="#playground" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Playground
        </a>
        <a href="#science" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Science
        </a>
        <a href="#gallery" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Sculptures
        </a>
        <a href="#components" className="px-3 py-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
          Components
        </a>
      </nav>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>WebGPU • 60 FPS</span>
        </div>

        <a
          href="https://github.com/naughtyduk/liquidGL"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-2xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all hover:scale-105 flex items-center gap-2"
        >
          <Code className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Star Library</span>
        </a>
      </div>
    </header>
  );
}
