import React from 'react';
import { Eye, Move, Sparkles, Layers, Sliders } from 'lucide-react';

export function LiquidExperienceSection() {
  return (
    <section id="experience" className="relative py-28 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
          <Eye className="w-3.5 h-3.5" />
          <span>TRUE REFRACTIVE VOLUMETRICS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
          THE LIQUID <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300">EXPERIENCE</span>
        </h2>
        <p className="text-base md:text-lg text-white/60">
          Unlike ordinary CSS blur which merely smudges pixels, LiquidGL calculates genuine geometric Snell vectors to displace, magnify, and bend background elements in real time.
        </p>
      </div>

      {/* Tri-Pane Glass Demonstration Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Pane 1: Ultra Crystal Glass */}
        <div className="relative h-96 rounded-3xl p-6 overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.3)] flex flex-col justify-between group hover:border-white/40 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-transparent to-violet-600/20 pointer-events-none" />

          {/* Background Typography to refract */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none font-black font-space text-8xl text-white">
            01
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono text-white/80 border border-white/10">
              SPECIMEN A
            </span>
            <span className="text-xs font-mono text-cyan-400">IOR 1.52</span>
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="text-2xl font-bold font-space text-white">Crystal Clarity</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Zero surface frost with pure Snell refraction and razor-sharp specular bevel highlights.
            </p>
            <div className="pt-2 text-[10px] font-mono text-white/40 flex justify-between">
              <span>Frost: 0px</span>
              <span>Dispersion: 0.15λ</span>
            </div>
          </div>
        </div>

        {/* Pane 2: Prismatic Dispersion */}
        <div className="relative h-96 rounded-3xl p-6 overflow-hidden border border-violet-500/30 bg-violet-950/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_25px_rgba(168,85,247,0.3)] flex flex-col justify-between group hover:border-violet-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/25 via-transparent to-indigo-600/25 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none font-black font-space text-8xl text-white">
            02
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-[10px] font-mono text-violet-300 border border-violet-500/30">
              SPECIMEN B
            </span>
            <span className="text-xs font-mono text-pink-400">IOR 1.65</span>
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="text-2xl font-bold font-space text-white">Prismatic Dispersion</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Exaggerated Cauchy dispersion splitting wavelengths into chromatic fringes around edges.
            </p>
            <div className="pt-2 text-[10px] font-mono text-white/40 flex justify-between">
              <span>Frost: 2px</span>
              <span>Dispersion: 0.75λ</span>
            </div>
          </div>
        </div>

        {/* Pane 3: Fluid Viscous Gel */}
        <div className="relative h-96 rounded-3xl p-6 overflow-hidden border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_25px_rgba(6,182,212,0.3)] flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/25 via-transparent to-emerald-600/25 pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none font-black font-space text-8xl text-white">
            03
          </div>

          <div className="relative z-10 flex justify-between items-start">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
              SPECIMEN C
            </span>
            <span className="text-xs font-mono text-emerald-400">Viscous Fluid</span>
          </div>

          <div className="relative z-10 space-y-2">
            <h3 className="text-2xl font-bold font-space text-white">Dynamic Ripple</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Viscous fluid displacement reacting to mouse speed with smooth dampening and harmonic decay.
            </p>
            <div className="pt-2 text-[10px] font-mono text-white/40 flex justify-between">
              <span>Viscosity: 0.65</span>
              <span>Ripple Radius: 0.35</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
