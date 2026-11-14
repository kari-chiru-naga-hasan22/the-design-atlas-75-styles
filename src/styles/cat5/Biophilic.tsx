import React, { useState } from 'react';
import { Wind, Droplets, Sun, Sparkles, ArrowRight, ShieldCheck, TreePine, Leaf } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const BiophilicPage: React.FC = () => {
  const [oxygenCounter, setOxygenCounter] = useState(14820);

  return (
    <div className="min-h-screen bg-[#042F24] text-white font-sans selection:bg-[#10B981] selection:text-black relative">
      {/* Biophilic Foliage Gradient Atmosphere */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#10B981]/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Living Wall Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-emerald-500/20 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#10B981] text-[#042F24] flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/30">
            🌿
          </div>
          <div>
            <div className="text-2xl font-bold font-cormorant tracking-tight text-white">
              TERRA VERDE
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#86EFAC] uppercase">
              BIOPHILIC ARCHITECTURE & VERTICAL RAINFORESTS
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-emerald-200">
          <a href="#towers" className="hover:text-emerald-400 transition-colors">VERTICAL FORESTS</a>
          <a href="#air" className="hover:text-emerald-400 transition-colors">MICROCLIMATE COOLING</a>
          <a href="#species" className="hover:text-emerald-400 transition-colors">ENDEMIC FLORA</a>
        </div>

        <button 
          onClick={() => setOxygenCounter(c => c + 150)}
          className="px-4 py-2 rounded-full bg-[#10B981] hover:bg-[#34d399] text-[#042F24] font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
        >
          Generate Oxygen (+150L) 🍃
        </button>
      </header>

      {/* Hero Section: The Vertical Forest Skyline */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#86EFAC] text-xs font-mono uppercase tracking-widest">
          <Wind size={14} /> LIVING ARCHITECTURE TO REWILD METROPOLITAN SKIES
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal font-cormorant tracking-tight text-white leading-none">
          CITIES THAT <br />
          <span className="text-[#10B981] italic font-serif">BREATHE AGAIN.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-emerald-100/80 font-light leading-relaxed">
          Terra Verde embeds 20,000 square meters of living cloud forest flora directly onto high-rise architectural facades. Reducing urban heat island temperatures by 4.2°C while sequestering 120 tons of carbon annually.
        </p>

        {/* Environmental Telemetry Stat Bar */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-[#064E3B]/80 border border-emerald-500/30 text-left font-mono backdrop-blur-md">
          <div className="p-3">
            <span className="text-[10px] text-emerald-300 uppercase">OXYGEN GENERATED</span>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {oxygenCounter.toLocaleString()} L/DAY
            </div>
          </div>
          <div className="p-3">
            <span className="text-[10px] text-emerald-300 uppercase">HEAT REDUCTION</span>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-1">-4.2°C AMBIENT</div>
          </div>
          <div className="p-3">
            <span className="text-[10px] text-emerald-300 uppercase">NATIVE BIRD SPECIES</span>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-1">68 COLONIES</div>
          </div>
          <div className="p-3">
            <span className="text-[10px] text-emerald-300 uppercase">RAINWATER RECYCLED</span>
            <div className="text-2xl sm:text-3xl font-bold text-white mt-1">100% CLOSED LOOP</div>
          </div>
        </div>

        {/* Hero Visual Composition: Vertical Forest Architecture */}
        <div className="pt-6 max-w-5xl mx-auto p-3 rounded-3xl bg-[#03241C] border border-emerald-500/40 shadow-2xl">
          <ImageBox
            src={MEDIA_ASSETS.biophilic.verticalGarden}
            alt="Vertical Forest Skyscraper with Cantilevered Balconies and Trees"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Living high-rise façade with 800 indigenous trees and 15,000 perennial plants (Milan Bosco)"
          />
        </div>
      </section>

      {/* Infinite Biophilic Foliage Marquee */}
      <section className="py-6 border-y border-emerald-500/20 bg-[#021F17] my-8">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.biophilic.verticalGarden, title: 'Bosco Verticale Tower', tag: '800 TREES' },
            { src: MEDIA_ASSETS.biophilic.rainforestCanopy, title: 'Pristine Mist Canopy', tag: 'RAINFOREST' },
            { src: MEDIA_ASSETS.organicNature.livingFoliage, title: 'Bio-Living Louver System', tag: 'PHOTOSYNTHESIS' },
            { src: MEDIA_ASSETS.tropical.bambooResort, title: 'Bamboo Bio-Pavilion', tag: 'CLOSED LOOP' }
          ]}
        />
      </section>

      {/* 3 Biophilic Innovations Gallery */}
      <section id="towers" className="relative z-10 py-12 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-emerald-500/20 pb-4">
          <div>
            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest">FACADE FORESTRY</span>
            <h2 className="text-3xl sm:text-5xl font-cormorant font-normal text-white mt-1">Vertical Ecosystem Integration</h2>
          </div>
          <span className="font-mono text-xs text-emerald-400">NET POSITIVE BIO-FOOTPRINT</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.biophilic.rainforestCanopy,
              title: 'Tropical Microclimate Canopy',
              subtitle: 'Multi-layer canopy cooling urban breezes by evapotranspiration of collected rainwater',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.organicNature.livingFoliage,
              title: 'Living Shading Louvers',
              subtitle: 'Seasonal deciduous foliage allowing maximum winter sunlight and dense summer shade',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.biophilic.verticalGarden,
              title: 'Cantilever Balcony Arboretums',
              subtitle: 'Pre-stressed reinforced planters carrying volcanic soil substrates and tap roots',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Biophilic Footer */}
      <footer className="border-t border-emerald-500/20 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-emerald-300/60">
        <div>TERRA VERDE ARCHITECTURAL FORESTRY • MILAN, SINGAPORE & BOGOTÁ</div>
        <div>NATURE CO-HABITATION • © 2026</div>
      </footer>
    </div>
  );
};
