import React, { useState } from 'react';
import { Sparkles, Eye, Layers, Compass, Sliders, Box } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const HolographicPage: React.FC = () => {
  const [lightAngle, setLightAngle] = useState(45);

  return (
    <div className="min-h-screen bg-[#0A071E] text-white font-sans selection:bg-[#38BDF8] selection:text-black relative overflow-hidden p-4 sm:p-8">
      {/* Iridescent Rainbow Lightfield Shimmer Background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[160px] opacity-40 pointer-events-none transition-all duration-300"
        style={{
          background: `conic-gradient(from ${lightAngle}deg, #38BDF8, #C084FC, #F472B6, #4ADE80, #38BDF8)`
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Holographic Header */}
        <header className="p-6 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#38BDF8] via-[#C084FC] to-[#F472B6] flex items-center justify-center font-bold text-white shadow-[0_0_15px_#38BDF8]">
              💎
            </div>
            <div>
              <div className="text-xl font-bold font-plus-jakarta tracking-tight bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                PRISM LIGHTFIELDS
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase">
                TRUE VOLUMETRIC 3D LIGHT EMISSION
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase text-white/70">
            <a href="#optics" className="hover:text-cyan-400 transition-colors">DIFFRACTION GRATING</a>
            <a href="#laser" className="hover:text-cyan-400 transition-colors">LASER WAVEGUIDE</a>
            <a href="#spatial" className="hover:text-cyan-400 transition-colors">VOLUMETRIC SDK</a>
          </div>

          <button className="px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400 text-cyan-300 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer">
            Explore Hardware
          </button>
        </header>

        {/* Hero Section: Volumetric Light Projections */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
            <Sparkles size={14} /> NO GLASSES • NO HEADSETS • VOLUMETRIC LIGHT
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-syne tracking-tight text-white leading-none">
            LIGHT YOU CAN <br />
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#C084FC] to-[#F472B6] bg-clip-text text-transparent">
              WALK AROUND.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
            True spatial holographic displays emitting millions of synchronized photonic light rays. View digital 3D artifacts from any angle with physical ocular depth of field.
          </p>

          {/* Incident Light Dial */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 p-3 rounded-full bg-white/5 border border-white/20 font-mono text-xs">
              <Sliders size={14} className="text-cyan-400" />
              <span>INCIDENT LIGHT ANGLE:</span>
              <input 
                type="range" min="0" max="360" value={lightAngle} 
                onChange={(e) => setLightAngle(Number(e.target.value))} 
                className="accent-cyan-400 cursor-pointer"
              />
              <span className="text-cyan-300 font-bold">{lightAngle}°</span>
            </div>

            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#C084FC] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all cursor-pointer">
              Schedule Hologram Demo
            </button>
          </div>

          {/* Hero Visual Composition: Iridescent Light Field Dispersion */}
          <div className="pt-6 max-w-4xl mx-auto p-4 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/20 shadow-2xl">
            <ImageBox
              src={MEDIA_ASSETS.holographic.lightFieldDispersion}
              alt="Holographic Prismatic Light Field Dispersion in Clean Air"
              aspectRatio="16/9"
              rounded="2xl"
              caption="True volumetric 3D light field projection with 100 million simultaneous optical vectors"
            />
          </div>
        </section>

        {/* Infinite Holographic Marquee */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.holographic.lightFieldDispersion, title: 'Prismatic Dispersion', tag: 'VOLUMETRIC' },
              { src: MEDIA_ASSETS.holographic.iridescentGlass, title: 'Diffraction Grating', tag: 'NANO-ETCH' },
              { src: MEDIA_ASSETS.avantGarde.prismSculpture, title: 'Laser Waveguide', tag: 'PHOTONIC' },
              { src: MEDIA_ASSETS.avantGarde.holographicObject, title: 'Spatial Light Field', tag: '100M RAYS' }
            ]}
          />
        </div>

        {/* 3 Holographic Hardware Innovations Gallery */}
        <section id="optics" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h3 className="text-3xl font-bold font-syne text-white">Photonic Waveguide Systems</h3>
            <span className="font-mono text-xs text-cyan-300">80NM DIFFRACTION STANDARD</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.holographic.iridescentGlass,
                title: 'Nanoscale Grating Layer',
                subtitle: 'Precision etched glass directing discrete wavelengths into ocular viewing channels',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.avantGarde.prismSculpture,
                title: 'Prismatic Laser Waveguide',
                subtitle: 'Zero convergence eye fatigue allowing multi-hour spatial design workflows',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.holographic.lightFieldDispersion,
                title: 'Photonic Light Emitter',
                subtitle: 'Full 360-degree viewing angle without headsets or physical eyewear barriers',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Holographic Footer */}
        <footer className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
          <div>PRISM LIGHTFIELDS LAB • PASADENA & CAMBRIDGE</div>
          <div>VOLUMETRIC 3D LIGHT ARCHITECTURE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
