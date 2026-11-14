import React, { useState } from 'react';
import { Palette, Sparkles, Droplets, Layers } from 'lucide-react';

interface TintOption {
  id: string;
  name: string;
  hex: string;
  rgba: string;
  wavelength: string;
  description: string;
}

const TINTS: TintOption[] = [
  {
    id: 'violet',
    name: 'Electric Violet',
    hex: '#8B5CF6',
    rgba: 'rgba(139, 92, 246, 0.25)',
    wavelength: '390 nm',
    description: 'Deep ultraviolet tint with high photon energy, accentuating crisp specular edge highlights.',
  },
  {
    id: 'cyan',
    name: 'Cyan Aurora',
    hex: '#06B6D4',
    rgba: 'rgba(6, 182, 212, 0.25)',
    wavelength: '485 nm',
    description: 'Crisp Arctic glacial optic with maximum transparency and atmospheric light dispersion.',
  },
  {
    id: 'lime',
    name: 'Acid Lime',
    hex: '#84CC16',
    rgba: 'rgba(132, 204, 22, 0.22)',
    wavelength: '540 nm',
    description: 'High-contrast luminescent frequency optimized for human photopic eye sensitivity.',
  },
  {
    id: 'amber',
    name: 'Warm Amber',
    hex: '#F59E0B',
    rgba: 'rgba(245, 158, 11, 0.28)',
    wavelength: '590 nm',
    description: 'Analog golden hour warmth inspired by 1970s hand-blown glass and warm tungsten studios.',
  },
  {
    id: 'rose',
    name: 'Rose Quartz',
    hex: '#F43F5E',
    rgba: 'rgba(244, 63, 94, 0.25)',
    wavelength: '650 nm',
    description: 'Vibrant magenta-rose spectrum creating ethereal sunset refractions over dark backgrounds.',
  },
  {
    id: 'chrome',
    name: 'Holographic Chrome',
    hex: '#E0E7FF',
    rgba: 'rgba(224, 231, 255, 0.15)',
    wavelength: 'Multi-λ',
    description: 'Thin-film optical interference splitting all incident white wavelengths into iridescent soap-bubble spectra.',
  },
];

export function LiquidColorSpectrum() {
  const [selectedTint, setSelectedTint] = useState<TintOption>(TINTS[0]);

  return (
    <section className="relative py-28 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-mono text-pink-300 mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>THIN-FILM INTERFERENCE & SPECTRAL DYE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-space tracking-tight text-white">
            A WORLD OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400">COLOR</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-white/60 max-w-md font-mono">
          Pure glass dyes absorb specific spectral bands while maintaining pristine white specular highlights on surface bevels.
        </p>
      </div>

      {/* Main Color Experience Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080810] border border-white/15 rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden relative">
        {/* Dynamic Glowing Ambient Ambient Background */}
        <div
          style={{ backgroundColor: selectedTint.hex }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[140px] opacity-25 transition-all duration-700 pointer-events-none"
        />

        {/* Left Column (7 Cols): Glass Sphere Specimen with Active Tint */}
        <div className="lg:col-span-7 relative h-80 md:h-96 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden">
          {/* Background Grid Pattern Underneath to Prove Refraction */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20 pointer-events-none">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-white/10 flex items-center justify-center font-mono text-[9px] text-white/40">
                {i.toString(16).toUpperCase()}
              </div>
            ))}
          </div>

          {/* Large Central Tinted Glass Specimen */}
          <div
            style={{
              backgroundColor: selectedTint.rgba,
              boxShadow: `
                0 30px 80px rgba(0,0,0,0.8),
                inset 0 0 40px rgba(255,255,255,0.4),
                0 0 50px ${selectedTint.rgba}
              `,
            }}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-2 border-white/50 backdrop-blur-md relative flex items-center justify-center transition-all duration-500"
          >
            {/* Top Light Sheen */}
            <div className="absolute top-4 left-10 w-24 h-12 bg-white/40 rounded-full blur-sm -rotate-45 pointer-events-none" />
            {/* Bottom Counter Sheen */}
            <div className="absolute bottom-6 right-10 w-16 h-8 bg-white/20 rounded-full blur-sm -rotate-45 pointer-events-none" />

            <div className="text-center px-4">
              <span className="text-xs font-mono tracking-widest uppercase text-white/60 block">
                {selectedTint.wavelength}
              </span>
              <span className="text-2xl font-black font-space text-white">
                {selectedTint.name}
              </span>
            </div>
          </div>

          {/* Pill Badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-white/10 text-xs font-mono text-white/70">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span>Dynamic liquidGL.tint: "{selectedTint.rgba}"</span>
          </div>
        </div>

        {/* Right Column (5 Cols): Tint Swatch Palette Selector */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-white/40 block">
            Select Optical Dye Formula
          </span>

          <div className="grid grid-cols-2 gap-3">
            {TINTS.map((tint) => (
              <button
                key={tint.id}
                onClick={() => setSelectedTint(tint)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 ${
                  selectedTint.id === tint.id
                    ? 'border-white bg-white/15 shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-102'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div
                  style={{ backgroundColor: tint.hex }}
                  className="w-8 h-8 rounded-full border border-white/30 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{tint.name}</div>
                  <div className="text-[10px] font-mono text-white/50">{tint.wavelength}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <h4 className="text-sm font-bold text-white mb-1">Material Physics</h4>
            <p className="text-xs text-white/60 leading-relaxed">
              {selectedTint.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
