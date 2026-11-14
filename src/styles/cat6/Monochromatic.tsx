import React, { useState } from 'react';
import { Volume2, Activity, Disc, Radio, Sliders, ArrowRight } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MonochromaticPage: React.FC = () => {
  const [dbLevel, setDbLevel] = useState(85);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Monochromatic 0% Saturation Header */}
        <header className="p-6 border border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black font-black flex items-center justify-center text-xl">
              0%
            </div>
            <div>
              <div className="text-2xl font-black tracking-tighter uppercase font-mono">
                GREYSCALE SOUND
              </div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                BERYLLIUM REFERENCE ACOUSTICS • ZERO CHROMATIC NOISE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase text-zinc-400">
            <a href="#monitors" className="hover:text-white transition-colors">MONITORS (3-WAY)</a>
            <a href="#beryllium" className="hover:text-white transition-colors">BERYLLIUM INVAR</a>
            <a href="#acoustics" className="hover:text-white transition-colors">ANECHOIC TESTING</a>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            SPL: {dbLevel} dB (FLAT ±0.5dB)
          </div>
        </header>

        {/* Hero Section: Pure Typographic Scale & Zero Color Saturation */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-700 text-xs font-mono uppercase tracking-widest text-zinc-400">
            100% MONOCHROMATIC DISCIPLINE • NO CHROMATIC INTERFERENCE
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-none">
            PURE SOUND. <br />
            <span className="text-zinc-600">ZERO COLOR.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-zinc-400 font-light leading-relaxed font-sans">
            In reference studio monitoring, any color added to the signal is distortion. We manufacture precision beryllium tweeters that reproduce recorded frequencies without warmth, hype, or flattering deception.
          </p>

          {/* Hero Visual Composition: Stark Black and White Architecture */}
          <div className="pt-6 max-w-4xl mx-auto p-3 bg-zinc-950 border border-zinc-800 shadow-2xl">
            <ImageBox
              src={MEDIA_ASSETS.monochromatic.blackWhiteArchitecture}
              alt="High-Contrast Black and White Architectural Monolith Geometry"
              aspectRatio="16/9"
              rounded="none"
              caption="Zero chromatic aberration: pure luminance values across 256 grayscale gradations"
            />
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer">
              Order Pair ($8,400)
            </button>
            <button className="px-8 py-3.5 border border-zinc-700 text-zinc-300 font-mono text-xs uppercase tracking-wider hover:bg-zinc-900 transition-colors cursor-pointer">
              Anechoic Chamber Measurements
            </button>
          </div>
        </section>

        {/* Infinite Monochromatic Grayscale Marquee */}
        <div className="border border-zinc-800 bg-zinc-950 p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.monochromatic.blackWhiteArchitecture, title: 'Black & White Geometry', tag: '0% SATURATION' },
              { src: MEDIA_ASSETS.monochromatic.shadowGeometry, title: 'Shadow Angle Gradients', tag: 'ANECHOIC' },
              { src: MEDIA_ASSETS.editorial.monochromeEditorial, title: 'Beryllium Transducer', tag: 'BERYLLIUM' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Solid Monolith Baffle', tag: '40MM CNC' }
            ]}
          />
        </div>

        {/* 3 Industrial Studio Monitor Specs Gallery */}
        <section id="monitors" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-zinc-800 pb-3">
            <h3 className="text-3xl font-bold uppercase font-mono">Anechoic Lab Transducers</h3>
            <span className="font-mono text-xs text-zinc-500">BERYLLIUM INVAR LINE</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.monochromatic.shadowGeometry,
                title: 'Cast Aluminum Baffle Matrix',
                subtitle: 'Internal honeycomb bracing eliminating internal standing waves down to 28Hz',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.editorial.monochromeEditorial,
                title: 'Vapor-Deposited Beryllium Dome',
                subtitle: 'First breakup harmonic resonance pushed beyond 42kHz, well past human hearing',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.monochromatic.blackWhiteArchitecture,
                title: 'High-Precision Acoustic Geometry',
                subtitle: 'Zero diffraction elliptical waveguide matching high and midrange directivity angles',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Monochromatic Footer */}
        <footer className="p-8 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>GREYSCALE SOUND RESEARCH GMBH • MUNICH & STOCKHOLM</div>
          <div>ZERO SATURATION • PURE REFERENCE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
