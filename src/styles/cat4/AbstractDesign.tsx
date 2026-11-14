import React, { useState } from 'react';
import { Sparkles, Palette, Circle, Triangle, Square, Music, Compass } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const AbstractDesignPage: React.FC = () => {
  const [synesthesiaColor, setSynesthesiaColor] = useState('#2563EB');

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans selection:bg-[#2563EB] selection:text-white relative p-4 sm:p-8 overflow-hidden">
      {/* Abstract Floating Geometric Primitives */}
      <div className="absolute top-16 right-20 w-44 h-44 rounded-full bg-[#F59E0B] opacity-80 mix-blend-multiply filter blur-[1px] animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-[#2563EB] opacity-75 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-[#DC2626] opacity-70 mix-blend-multiply rotate-45 pointer-events-none" />

      {/* Abstract Composition Header */}
      <header className="max-w-7xl mx-auto p-6 bg-white border border-black/10 rounded-2xl shadow-sm flex items-center justify-between mb-12 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-xl">
            ●
          </div>
          <div>
            <div className="text-2xl font-black font-syne tracking-tight text-[#1E293B]">
              KANDINSKY FLUIDICS
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
              NON-OBJECTIVE SYNESTHESIA LAB • 1911–2026
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider text-[#64748B]">
          <a href="#point" className="hover:text-[#2563EB] transition-colors">Point and Line to Plane</a>
          <a href="#synesthesia" className="hover:text-[#2563EB] transition-colors">Color Frequencies</a>
          <a href="#harmonies" className="hover:text-[#2563EB] transition-colors">Spiritual Compositions</a>
        </div>

        <button 
          onClick={() => setSynesthesiaColor(synesthesiaColor === '#2563EB' ? '#DC2626' : '#2563EB')}
          className="px-4 py-2 rounded-full border border-black text-xs font-mono font-bold hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          Shift Tone 🎨
        </button>
      </header>

      {/* Hero Section: Point, Line & Plane in Dynamic Equilibrium */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center space-y-6 relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-black text-white text-xs font-mono tracking-widest uppercase">
          COMPOSITION VII • PURE EMOTION WITHOUT FIGURATION
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-syne tracking-tight leading-none text-[#1E293B]">
          PURE COLOR, <br />
          <span style={{ color: synesthesiaColor }} className="transition-colors duration-500">
            LIBERATED FORM.
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#475569] font-light leading-relaxed">
          Art does not reproduce the visible; rather, it makes visible the inner resonance. Shapes, circles, and primary chords striking the human soul like hammer on piano wire.
        </p>

        {/* Hero Visual Composition: Fluid Canvas Painting */}
        <div className="pt-6 max-w-4xl mx-auto p-4 bg-white border border-black/10 rounded-3xl shadow-xl">
          <ImageBox
            src={MEDIA_ASSETS.abstractArt.fluidCanvas}
            alt="Abstract Non-Objective Fluid Dynamics Painting"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Dynamic equilibrium of ultramarine, cadmium yellow, and crimson pigment dispersals"
          />
        </div>

        {/* Interactive Geometric Synesthesia Pad */}
        <div className="mt-8 max-w-xl mx-auto p-6 rounded-3xl bg-white border border-black/10 shadow-lg space-y-4">
          <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
            TOUCH GEOMETRIC SYMBOL TO RESONATE
          </div>

          <div className="flex justify-around items-center">
            <button 
              onClick={() => setSynesthesiaColor('#2563EB')}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB] shadow-md flex items-center justify-center text-white font-bold text-lg">
                ●
              </div>
              <span className="font-mono text-xs font-bold text-[#2563EB]">BLUE (FLUTE)</span>
            </button>

            <button 
              onClick={() => setSynesthesiaColor('#F59E0B')}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-amber-50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#F59E0B] shadow-md flex items-center justify-center text-white font-bold text-lg rotate-45">
                ▲
              </div>
              <span className="font-mono text-xs font-bold text-[#F59E0B]">YELLOW (TRUMPET)</span>
            </button>

            <button 
              onClick={() => setSynesthesiaColor('#DC2626')}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-red-50 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#DC2626] shadow-md flex items-center justify-center text-white font-bold text-lg">
                ■
              </div>
              <span className="font-mono text-xs font-bold text-[#DC2626]">RED (TUBA)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Infinite Synesthesia Marquee */}
      <section className="py-6 border-y border-black/10 bg-white my-12">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.abstractArt.fluidCanvas, title: 'Dynamic Tension VII', tag: 'KANDINSKY' },
            { src: MEDIA_ASSETS.abstractArt.colorExplosion, title: 'Chromatic Explosion', tag: 'SYNESTHESIA' },
            { src: MEDIA_ASSETS.avantGarde.spatialAbstract, title: 'Non-Objective Plane', tag: 'SUPREMATISM' },
            { src: MEDIA_ASSETS.gradientDesign.auroraLiquid, title: 'Resonance Waves', tag: 'ACOUSTICS' }
          ]}
        />
      </section>

      {/* Spiritual Harmonic Gallery */}
      <section id="harmonies" className="max-w-7xl mx-auto py-12 px-4 space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase text-[#2563EB]">PICTORIAL SYMPHONY</span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-[#1E293B] mt-1">Harmonies in Pure Pigment</h2>
          </div>
          <span className="font-mono text-xs text-[#64748B]">MUNICH BLUE RIDER ARCHIVES</span>
        </div>

        <ImageGallery
          columns={3}
          theme="minimal"
          items={[
            {
              src: MEDIA_ASSETS.abstractArt.colorExplosion,
              title: 'Acoustic Collision',
              subtitle: 'Spontaneous high-velocity color field striking the sensory cortex',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.avantGarde.spatialAbstract,
              title: 'Floating Geometric Horizon',
              subtitle: 'Suspension of pure circular planes against deep atmospheric spatial void',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.abstractArt.fluidCanvas,
              title: 'Composition VII Fluidics',
              subtitle: 'The masterpiece of early abstraction translating orchestral crescendos into pigment',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Abstract Footer */}
      <footer className="max-w-7xl mx-auto p-6 bg-white border border-black/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B] mt-12">
        <div>KANDINSKY NON-OBJECTIVE SYNESTHESIA LAB • MUNICH & WEIMAR</div>
        <div>POINT AND LINE TO PLANE • © 1911–2026</div>
      </footer>
    </div>
  );
};
