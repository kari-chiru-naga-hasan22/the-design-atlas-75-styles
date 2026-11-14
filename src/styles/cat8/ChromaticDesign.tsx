import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Sun, Eye, Sliders, Layers } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ChromaticDesignPage: React.FC = () => {
  const [dispersionOffset, setDispersionOffset] = useState<number>(4);

  return (
    <div className="min-h-screen bg-[#07070A] text-white font-sans selection:bg-[#00F0FF] selection:text-black relative overflow-x-hidden">
      
      {/* Radiant Spectral Light Dispersion Bar Top */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#FF0055] via-[#00FF66] to-[#00F0FF] shadow-[0_0_15px_#00F0FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Optical Lab Header */}
        <header className="flex flex-wrap justify-between items-center border-b border-white/10 pb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-black border border-white/20 flex items-center justify-center text-lg shadow-[0_0_12px_#00F0FF]">
              💎
            </div>
            <div>
              <div 
                className="text-2xl sm:text-3xl font-black uppercase tracking-wider font-space-grotesk"
                style={{
                  textShadow: `${dispersionOffset}px 0 #FF0055, -${dispersionOffset}px 0 #00F0FF`
                }}
              >
                RGB PRISM DISPERSION
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#00F0FF] uppercase">
                ADVANCED OPTICAL SPECTRAL EMISSION LAB
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden sm:flex items-center gap-2 text-white/60">
              <Sun className="w-4 h-4 text-[#00FF66]" />
              <span>CAUCHY CONSTANT: B = 0.0042 μm²</span>
            </div>
            <div className="bg-white/5 border border-white/20 px-3 py-1.5 rounded text-white">
              OFFSET: {dispersionOffset}PX
            </div>
          </div>
        </header>

        {/* Hero Section: Chromatic Aberration & Spectral Splitting */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest text-[#00F0FF]">
              <Sparkles className="w-4 h-4 text-[#FF0055]" />
              DIFFRACTION SPECTROMETRY
            </div>

            {/* Chromatic Headline */}
            <h1 
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none font-space-grotesk transition-all duration-200"
              style={{
                textShadow: `${dispersionOffset * 1.5}px 0 #FF0055, -${dispersionOffset * 1.5}px 0 #00F0FF`
              }}
            >
              RADIANT <br />
              SPECTRAL <br />
              SPLIT.
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
              When pure white photons strike our flint glass prisms, the beam fractures into 
              its fundamental frequencies: crimson reds, radioactive greens, and ionosphere cyans. 
              We engineer holographic diffraction lenses for astronomical observatories.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF0055] to-[#00F0FF] text-black font-space-grotesk text-xs uppercase font-bold tracking-widest rounded hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer">
                DISPERSE SPECTRUM BEAM
              </button>
              <div className="text-xs font-mono text-white/50">
                WAVELENGTH: 380nm – 750nm
              </div>
            </div>
          </div>

          {/* Hero Optical Dispersion ImageBox Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#111118] border border-white/20 p-4 rounded-2xl shadow-2xl space-y-4">
              <ImageBox
                src={MEDIA_ASSETS.chromatic.opticalPrismFlare}
                alt="Optical Prism Light Dispersion and Chromatic Flare"
                aspectRatio="4/3"
                caption="Dense flint glass prism dispersing coherent white light into spectral chromatic wavelengths."
                className="rounded-xl overflow-hidden border border-white/10"
              />

              {/* Offset tuning slider */}
              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white/60">SPECTRAL ABERRATION OFFSET:</span>
                  <span className="text-[#00F0FF] font-bold">{dispersionOffset}px</span>
                </div>
                <input 
                  type="range"
                  min="0"
                  max="12"
                  value={dispersionOffset}
                  onChange={(e) => setDispersionOffset(Number(e.target.value))}
                  className="w-full accent-[#00F0FF] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono pt-1">
                <div className="p-1.5 bg-white/5 rounded border border-[#FF0055]/30 text-[#FF0055]">
                  650 NM RED
                </div>
                <div className="p-1.5 bg-white/5 rounded border border-[#00FF66]/30 text-[#00FF66]">
                  532 NM GREEN
                </div>
                <div className="p-1.5 bg-white/5 rounded border border-[#00F0FF]/30 text-[#00F0FF]">
                  445 NM CYAN
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chromatic Spectral Infinite Marquee */}
        <section className="py-2 border-y border-white/10">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.chromatic.opticalPrismFlare, title: 'Dense Flint Prism Flare', tag: 'REFRACTION' },
              { src: MEDIA_ASSETS.chromatic.diffractionSpectrum, title: 'Diffraction Grating Spectrum', tag: 'DISPERSION' },
              { src: MEDIA_ASSETS.holographic.lightFieldDispersion, title: 'Photonic Light Field', tag: 'INTERFERENCE' },
              { src: MEDIA_ASSETS.gradientDesign.auroraLiquid, title: 'Spectral Aurora Glow', tag: 'EMISSION' }
            ]}
          />
        </section>

        {/* Optical Products Grid */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight font-space-grotesk">
              SPECTRAL OPTICAL INSTRUMENTS
            </h2>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#FF0055] to-[#00F0FF]" />
            <span className="text-xs font-mono text-[#00F0FF]">GRADE N-BK7</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.chromatic.opticalPrismFlare,
                title: 'Dense Flint Prisms',
                subtitle: 'SF11 optical grade glass (nd = 1.784)',
                category: 'REFRACTION'
              },
              {
                src: MEDIA_ASSETS.chromatic.diffractionSpectrum,
                title: 'Holographic Transmission Gratings',
                subtitle: '1,800 grooves/mm fused silica substrate',
                category: 'SPECTRAL'
              },
              {
                src: MEDIA_ASSETS.holographic.lightFieldDispersion,
                title: 'Achromatic Objectives',
                subtitle: 'Zero primary axial chromatic aberration',
                category: 'ASTRONOMY'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <div>
            RGB PRISM DISPERSION LAB // HOLOGRAPHIC OPTICAL PHYSICS
          </div>
          <div>
            REFRACTING THE BOUNDARIES OF LIGHT • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
