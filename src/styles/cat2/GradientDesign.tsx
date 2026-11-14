import React, { useState } from 'react';
import { Sparkles, Palette, Zap, ArrowRight, RefreshCw, Layers, Compass, Sliders } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const GradientDesignPage: React.FC = () => {
  const [activeGradient, setActiveGradient] = useState<number>(0);

  const gradients = [
    { name: 'AURORA HYPER', css: 'from-[#FF5E62] via-[#8A2387] to-[#3B82F6]' },
    { name: 'SOLAR FLARE', css: 'from-[#F59E0B] via-[#EF4444] to-[#EC4899]' },
    { name: 'NEON MATRIX', css: 'from-[#10B981] via-[#06B6D4] to-[#8B5CF6]' },
    { name: 'VIOLET DREAM', css: 'from-[#6366F1] via-[#D946EF] to-[#F43F5E]' }
  ];

  return (
    <div className="min-h-screen bg-[#0C061F] text-white font-sans selection:bg-[#FF5E62] selection:text-white relative overflow-hidden">
      {/* Radiant Multi-Stop Background Mesh Gradient Orbs */}
      <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr ${gradients[activeGradient].css} rounded-full blur-[170px] opacity-40 pointer-events-none transition-all duration-1000`} />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 rounded-full blur-[160px] opacity-35 pointer-events-none" />

      {/* Gradient Luminous Header */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5E62] via-[#8A2387] to-[#3B82F6] flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30">
            <Palette size={20} />
          </div>
          <span className="text-2xl font-black font-syne tracking-tight bg-gradient-to-r from-white via-pink-200 to-indigo-300 bg-clip-text text-transparent">
            SPECTRUM NEURAL
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/70">
          <a href="#auroras" className="hover:text-pink-400 transition-colors">AURORAS</a>
          <a href="#science" className="hover:text-pink-400 transition-colors">COLOR SCIENCE</a>
          <a href="#palettes" className="hover:text-pink-400 transition-colors">GENERATOR</a>
        </div>

        <button 
          onClick={() => setActiveGradient((activeGradient + 1) % gradients.length)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-white transition-all cursor-pointer"
        >
          <RefreshCw size={13} />
          <span>CYCLE: {gradients[activeGradient].name}</span>
        </button>
      </nav>

      {/* Hero Section: Radiant Luminescence */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-wider backdrop-blur-xl">
          <Sparkles size={14} /> CONTINUOUS LATENT COLOR FLOW
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-syne tracking-tight text-white leading-none">
          CHROMATIC <br />
          <span className={`bg-gradient-to-r ${gradients[activeGradient].css} bg-clip-text text-transparent transition-all duration-1000`}>
            LUMINESCENCE.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-white/70 font-light leading-relaxed">
          Spectrum Neural synthesizes continuous radiant color spectrums. Seamless multidimensional gradients engineered to invoke profound emotional states and visual bliss.
        </p>

        {/* Gradient Selection Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          {gradients.map((grad, i) => (
            <button
              key={i}
              onClick={() => setActiveGradient(i)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer flex items-center gap-2 ${
                activeGradient === i
                  ? 'bg-white text-black font-bold border-white shadow-lg shadow-white/20 scale-105'
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-tr ${grad.css}`} />
              <span>{grad.name}</span>
            </button>
          ))}
        </div>

        {/* Visual Hero Composition: Aurora Liquid & Mesh Gradient Art */}
        <div className="pt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 rounded-3xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl p-2 shadow-2xl relative group">
            <ImageBox
              src={MEDIA_ASSETS.gradientDesign.auroraLiquid}
              alt="Neural Aurora Fluid Dynamics"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Neural chromatic fluid flow in 16-bit OKLCH space"
            />
          </div>
          <div className="md:col-span-5 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between text-left">
            <div>
              <span className="text-xs font-mono uppercase text-pink-400">CHROMATIC EMISSION</span>
              <h3 className="text-2xl font-bold font-syne mt-2 text-white">Non-Linear Spectral Dispersion</h3>
              <p className="text-sm text-white/70 mt-3 font-light leading-relaxed">
                By modeling photon dispersion physics rather than standard sRGB interpolations, our gradient algorithms completely prevent grey-band desaturation in intermediate stops.
              </p>
            </div>
            <div className="pt-6 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white/50">GAMUT</div>
                <div className="text-sm font-bold text-pink-300">Display P3 / Rec.2020</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-white/50">SMOOTHING</div>
                <div className="text-sm font-bold text-cyan-300">Cubic B-Spline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Radiant Stream */}
      <section className="py-8 border-y border-white/10 bg-white/[0.02]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.gradientDesign.auroraLiquid, title: 'Aurora Spectral Shift', tag: 'OKLCH 01' },
            { src: MEDIA_ASSETS.gradientDesign.fluidMesh, title: 'Liquid Chrome Gradient', tag: 'DISPERSION 02' },
            { src: MEDIA_ASSETS.avantGarde.prismSculpture, title: 'Prismatic Refraction', tag: 'SPECTRAL 03' },
            { src: MEDIA_ASSETS.abstractArt.fluidCanvas, title: 'Fluid Pigment Fusion', tag: 'CHROMATIC 04' }
          ]}
        />
      </section>

      {/* Color Science Section */}
      <section id="science" className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase text-pink-400 tracking-widest">CHROMATIC HARMONICS</span>
          <h2 className="text-3xl sm:text-5xl font-black font-syne">Perceptually Uniform Color Fields</h2>
          <p className="text-sm sm:text-base text-white/60 font-light">
            Engineered using perceptual luminosity matching so high-contrast gradient transitions preserve typographic readability without harsh optical vibration.
          </p>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.gradientDesign.fluidMesh,
              title: 'Multi-Stop Fluid Mesh',
              subtitle: 'Smooth topological tension mapping across 8 control vectors',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.abstractArt.colorExplosion,
              title: 'Explosive Chromatism',
              subtitle: 'High energy pigment collision with ultra-wide gamut saturation',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.avantGarde.spatialAbstract,
              title: 'Spatial Aurora Dispersion',
              subtitle: 'Atmospheric light scatter mapped over volumetric geometry',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Gradient Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
        <div>SPECTRUM NEURAL COLOR SCIENCE LAB • ZÜRICH & LONDON</div>
        <div>CONTINUOUS RADIANT AURORAS • © 2026</div>
      </footer>
    </div>
  );
};
