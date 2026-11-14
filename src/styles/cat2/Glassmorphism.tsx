import React, { useState } from 'react';
import { Eye, Layers, Sparkles, Sliders, Smartphone, Cpu, Shield, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const GlassmorphismPage: React.FC = () => {
  const [blurIntensity, setBlurIntensity] = useState(24);
  const [activeWindow, setActiveWindow] = useState<'spatial' | 'neural' | 'ambient'>('spatial');

  const spatialWindows = [
    {
      title: 'AMBIENT LIGHT CONSTELLATION',
      subtitle: 'Dynamic refraction mapping ambient photons onto multi-layered glass panels.',
      category: 'OPTICAL FIELD',
      year: 'OS v4.2',
      src: MEDIA_ASSETS.glassmorphism.ambientLight,
      aspectRatio: '4/3' as const
    },
    {
      title: 'CRYSTAL REFRACTIVE MATRIX',
      subtitle: 'Sub-surface light scattering rendering 120Hz spatial overlays with zero latency.',
      category: 'NEURAL DISPLAY',
      year: '60 FPS',
      src: MEDIA_ASSETS.glassmorphism.crystalRefraction,
      aspectRatio: '4/3' as const
    },
    {
      title: 'FLOATING TRANSLUCENT HUD',
      subtitle: 'Volumetric glass viewports suspended in 3D coordinate space.',
      category: 'SPATIAL VIEW',
      year: 'DEPTH 120MM',
      src: MEDIA_ASSETS.glassmorphism.floatingGlass,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#080B16] text-white font-sans selection:bg-[#38BDF8] selection:text-black relative overflow-hidden">
      {/* Dynamic Ambient Background Blur Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-pink-500/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Glassmorphic Floating Header */}
      <nav className="relative z-20 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg shadow-cyan-500/10">
            <Layers size={20} className="text-cyan-400" />
          </div>
          <span className="text-xl font-bold tracking-tight font-plus-jakarta bg-gradient-to-r from-white via-cyan-100 to-white/70 bg-clip-text text-transparent">
            AURA SPATIAL OS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-xl text-xs font-medium text-white/80">
          {(['spatial', 'neural', 'ambient'] as const).map((win) => (
            <button 
              key={win}
              onClick={() => setActiveWindow(win)}
              className={`px-4 py-2 rounded-full capitalize transition-all cursor-pointer ${
                activeWindow === win ? 'bg-white/20 text-white shadow-sm' : 'hover:text-white'
              }`}
            >
              {win} View
            </button>
          ))}
        </div>

        <button className="px-5 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-semibold backdrop-blur-xl transition-all cursor-pointer shadow-lg shadow-cyan-500/10">
          Launch Simulator
        </button>
      </nav>

      {/* Hero Section: Glass HUD Windowing with High-Res Spatial Imagery */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/20 text-cyan-300 text-xs font-medium backdrop-blur-xl shadow-inner">
          <Sparkles size={14} /> SPATIAL COMPUTING FOR THE UNBOUNDED MIND
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-syne tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">
          INTERFACE WITHOUT <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            PHYSICAL BOUNDARIES.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Translucent frosted panels floating in ambient space. Deep optical blurs, luminous chromatic refraction edges, and layered interface physics calibrated for spatial devices.
        </p>

        {/* Central Frosted Glass Window Showcase Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-4 sm:p-6 bg-white/[0.05] backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] space-y-6">
          <div className="flex justify-between items-center text-xs font-mono text-cyan-300 border-b border-white/10 pb-3">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              SPATIAL VIEWPORT // 4K 120FPS
            </span>
            <span>BLUR RADIUS: {blurIntensity}PX</span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/20">
            <ImageBox
              src={MEDIA_ASSETS.glassmorphism.ambientLight}
              alt="Spatial Glass Computing Window"
              aspectRatio="16/9"
              rounded="2xl"
              tag="OPTICAL REFRACTION ENGINE"
            />
          </div>

          {/* Interactive Blur Controller Slider */}
          <div className="flex items-center justify-between gap-6 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-mono">
            <span className="text-white/60">ADJUST FROSTED GLASS BLUR:</span>
            <input
              type="range"
              min="8"
              max="48"
              value={blurIntensity}
              onChange={(e) => setBlurIntensity(Number(e.target.value))}
              className="flex-1 accent-cyan-400 cursor-pointer"
            />
            <span className="text-cyan-300 font-bold">{blurIntensity}px</span>
          </div>
        </div>
      </section>

      {/* 3-Column Glassmorphism Gallery */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-8">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400">
              SPATIAL VIEWPORTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1">
              Ambient Glass Windowing System
            </h2>
          </div>
          <span className="text-xs font-mono text-white/50">AURA CORE 2026</span>
        </div>

        <ImageGallery items={spatialWindows} columns={3} theme="dark" />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-white/40">
        AURA SPATIAL OS // TRANSLUCENT OPTICS FOUNDATION • 2026
      </footer>
    </div>
  );
};
