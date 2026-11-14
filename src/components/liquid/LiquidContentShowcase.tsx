import React, { useState } from 'react';
import { Layers, Image as ImageIcon, Type, Video, Activity, Sparkles } from 'lucide-react';

export function LiquidContentShowcase() {
  const [contentType, setContentType] = useState<'typography' | 'photography' | 'telemetry' | 'particles'>('photography');

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
          <Layers className="w-3.5 h-3.5" />
          <span>CONTENT TRANSMISSION LAYER</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
          CONTENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">BEHIND GLASS</span>
        </h2>
        <p className="text-base md:text-lg text-white/60">
          Observe how the liquid lens distorts, magnifies, and refracts diverse content media: high-resolution photography, live typography, data telemetry, and generative particle matrices.
        </p>

        {/* Media Selector Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            { id: 'photography', label: 'Architectural Photography', icon: ImageIcon },
            { id: 'typography', label: 'Kinetic Typography', icon: Type },
            { id: 'telemetry', label: 'Data Telemetry', icon: Activity },
            { id: 'particles', label: 'Generative Field', icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setContentType(item.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                  contentType === item.id
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="relative h-[480px] md:h-[540px] rounded-3xl border border-white/20 overflow-hidden shadow-2xl bg-black flex items-center justify-center">
        {/* Layer 0: The Underlying Content */}
        {contentType === 'photography' && (
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Minimalist Architecture"
              className="w-full h-full object-cover brightness-75 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Archival Photography</span>
              <h3 className="text-2xl md:text-3xl font-bold font-space mt-1">Swiss Minimalist Pavilion</h3>
              <p className="text-xs text-white/70 mt-1">Concrete, floating cantilevered glass facades, and architectural water mirrors.</p>
            </div>
          </div>
        )}

        {contentType === 'typography' && (
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-indigo-950 via-purple-950 to-black select-none">
            <div className="text-right">
              <span className="text-xs font-mono text-purple-400">TYPOGRAPHIC DISPERSION</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl md:text-8xl font-black text-white/30 tracking-tighter leading-none font-space">
                REFRACTIVE
              </h1>
              <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-amber-300 tracking-tighter leading-none font-space">
                DIMENSION
              </h1>
              <h1 className="text-5xl md:text-8xl font-black text-white/20 tracking-tighter leading-none font-space">
                MAGNIFY
              </h1>
            </div>
            <div className="flex justify-between text-xs font-mono text-white/40 border-t border-white/10 pt-4">
              <span>Grotesk Display Font Hierarchy</span>
              <span>120 FPS Subpixel Kerning</span>
            </div>
          </div>
        )}

        {contentType === 'telemetry' && (
          <div className="absolute inset-0 p-8 bg-[#080812] font-mono text-xs text-white/70 overflow-hidden select-none">
            <div className="flex justify-between pb-3 border-b border-white/10 text-cyan-400">
              <span>SYSTEM DIAGNOSTIC TELEMETRY</span>
              <span>BUFFER STATUS: 100% NOMINAL</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {[
                { label: 'GPU CLOCK', val: '2450 MHz', status: 'OPTIMAL' },
                { label: 'RASTER SHADER', val: 'GLSL v300es', status: 'COMPILED' },
                { label: 'FRAME TIMING', val: '16.6 ms', status: 'LOCKED' },
                { label: 'MEMORY BANDWIDTH', val: '864 GB/s', status: 'ACTIVE' },
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/40">{m.label}</div>
                  <div className="text-xl font-bold text-white my-1">{m.val}</div>
                  <div className="text-[10px] text-emerald-400">{m.status}</div>
                </div>
              ))}
            </div>
            {/* Telemetry Matrix Grid */}
            <div className="space-y-1 text-white/30 text-[10px]">
              <div>0x7FFF5FBFFD40: 4C 69 71 75 69 64 2D 47 4C 20 57 65 62 47 50 55 [Liquid-GL WebGPU]</div>
              <div>0x7FFF5FBFFD50: 53 6E 65 6C 6C 20 4F 70 74 69 63 73 20 45 6E 67 [Snell Optics Eng]</div>
              <div>0x7FFF5FBFFD60: 43 61 75 63 68 79 20 44 69 73 70 65 72 73 69 6F [Cauchy Dispersio]</div>
              <div>0x7FFF5FBFFD70: 53 63 68 6C 69 63 6B 20 46 72 65 73 6E 65 6C 20 [Schlick Fresnel ]</div>
            </div>
          </div>
        )}

        {contentType === 'particles' && (
          <div className="absolute inset-0 bg-[#05050A] flex items-center justify-center overflow-hidden">
            <div className="grid grid-cols-12 grid-rows-8 gap-4 w-full h-full p-8 opacity-40">
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${(i % 12) * 0.15}s` }}
                  className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mx-auto my-auto"
                />
              ))}
            </div>
            <div className="absolute text-center">
              <span className="text-4xl md:text-6xl font-black font-space text-white/40">
                PARTICLE RESONANCE
              </span>
            </div>
          </div>
        )}

        {/* Layer 1: Floating Liquid Glass Lenses Intersecting the Content */}
        <div className="relative z-20 flex flex-col md:flex-row gap-6 items-center justify-center p-4 pointer-events-none">
          {/* Lens 1: Crystal Magnifier */}
          <div
            style={{
              backdropFilter: 'blur(3px) saturate(180%)',
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.7), inset 0 0 25px rgba(255,255,255,0.4), 0 0 35px rgba(6,182,212,0.3)',
            }}
            className="w-56 h-56 rounded-full border-2 border-white/60 flex flex-col items-center justify-center p-4 text-center transform hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Crystal Lens
            </span>
            <span className="text-[10px] font-mono text-white/60 mt-1">
              1.25x Optical Zoom
            </span>
          </div>

          {/* Lens 2: Lavender Bevel Slab */}
          <div
            style={{
              backdropFilter: 'blur(8px) saturate(150%)',
              WebkitBackdropFilter: 'blur(8px) saturate(150%)',
              backgroundColor: 'rgba(168, 85, 247, 0.12)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.7), inset 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(168,85,247,0.35)',
            }}
            className="w-64 h-48 rounded-3xl border-2 border-white/40 flex flex-col justify-between p-6 transform hover:scale-105 transition-transform"
          >
            <div className="flex justify-between items-center text-xs font-mono text-white/80">
              <span className="font-bold">LAVENDER FROST</span>
              <span className="text-violet-300">IOR 1.54</span>
            </div>
            <p className="text-xs text-white/80 font-medium">
              Real-time light refraction dispersing underlying pixels with subtle blur and edge bevels.
            </p>
            <div className="text-[10px] font-mono text-white/50">
              liquidGL WebGPU Rendered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
