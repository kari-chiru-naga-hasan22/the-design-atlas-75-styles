import React from 'react';
import { Sparkles, ArrowUp, Heart, Cpu, Layers } from 'lucide-react';

interface LiquidFooterProps {
  onBackToAtlas?: () => void;
}

export function LiquidFooter({ onBackToAtlas }: LiquidFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#040408] py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-space font-black tracking-wider text-xl text-white">
                LIQUID<span className="text-cyan-400">GL</span>
              </span>
            </div>
            <p className="text-xs text-white/50 max-w-sm mt-2 font-mono">
              Liquid Glass for the modern web — rendered in real time with WebGPU and WebGL2.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-white/70">
            <a href="#hero" className="hover:text-white transition-colors">
              Hero
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Refraction
            </a>
            <a href="#playground" className="hover:text-white transition-colors">
              Playground
            </a>
            <a href="#science" className="hover:text-white transition-colors">
              Optics Science
            </a>
            <a href="#gallery" className="hover:text-white transition-colors">
              3D Sculptures
            </a>
            <a href="#components" className="hover:text-white transition-colors">
              Interface System
            </a>
            {onBackToAtlas && (
              <button
                onClick={onBackToAtlas}
                className="hover:text-cyan-400 text-indigo-400 transition-colors font-bold"
              >
                ← Return to Design Atlas
              </button>
            )}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all hover:scale-105 shrink-0 self-start md:self-auto"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Cpu className="w-3.5 h-3.5" /> WebGPU Active
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Layers className="w-3.5 h-3.5" /> 60 FPS Target
            </span>
          </div>

          <div>
            Built with Three.js, React 19, and official{' '}
            <a
              href="https://github.com/naughtyduk/liquidGL"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-cyan-400 underline transition-colors"
            >
              liquidGL
            </a>{' '}
            library.
          </div>
        </div>
      </div>
    </footer>
  );
}
