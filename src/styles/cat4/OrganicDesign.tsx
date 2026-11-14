import React, { useState } from 'react';
import { Sprout, Wind, Droplets, Leaf, Heart, Sun } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const OrganicDesignPage: React.FC = () => {
  const [hydration, setHydration] = useState(82);

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#2D4A22] font-sans selection:bg-[#2D4A22] selection:text-[#F5F2EB] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Curving Pebble Navigation Bar */}
        <nav className="p-6 rounded-[32px] bg-white/70 backdrop-blur-md border border-[#D6C7A1] shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2D4A22] text-[#86EFAC] flex items-center justify-center text-xl">
              🌱
            </div>
            <div>
              <div className="text-2xl font-bold font-cormorant tracking-tight text-[#2D4A22]">
                BIOME BOTANICA
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#78716C] uppercase">
                BIOMATERIALS & LIVING MYCELIUM ARCHITECTURE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono font-medium text-[#78716C]">
            <a href="#materials" className="hover:text-[#2D4A22] transition-colors">MYCELIUM BRICKS</a>
            <a href="#growth" className="hover:text-[#2D4A22] transition-colors">ALGAE FACADES</a>
            <a href="#circular" className="hover:text-[#2D4A22] transition-colors">CIRCULAR DESIGN</a>
          </div>

          <button 
            onClick={() => setHydration(h => Math.min(100, h + 5))}
            className="px-4 py-2 rounded-full bg-[#2D4A22] text-[#86EFAC] font-mono text-xs uppercase tracking-wider hover:bg-[#1E3316] transition-all cursor-pointer"
          >
            Nurture Soil ({hydration}%) 💧
          </button>
        </nav>

        {/* Hero Section: Flowing Biomorphic Contours */}
        <section className="text-center space-y-6 py-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6DFD5] text-[#2D4A22] text-xs font-mono uppercase tracking-wider">
            <Sprout size={14} /> GROWN FROM LIVING ROOT NETWORKS
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal font-cormorant text-[#2D4A22] leading-tight">
            Architecture that grows, <br />
            <span className="italic">breathes, and returns to soil.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
            We cultivate buildings instead of mining them. Carbon-negative mycelium composites, bio-cement grown from ocean bacteria, and living moss skins that filter urban air.
          </p>

          {/* Hero Visual Composition: Living Foliage Canopy */}
          <div className="pt-6 max-w-4xl mx-auto p-4 bg-white/80 rounded-[40px] border border-[#D6C7A1] shadow-lg">
            <ImageBox
              src={MEDIA_ASSETS.organicNature.livingFoliage}
              alt="Living Biophilic Forest Canopy and Microclimate"
              aspectRatio="16/9"
              rounded="3xl"
              caption="Photosynthetic architectural canopy filtering sunlight and producing fresh oxygen"
            />
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-[#2D4A22] hover:bg-[#1E3316] text-[#86EFAC] font-mono text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer">
              Examine Living Materials
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-[#2D4A22] border border-[#D6C7A1] font-mono text-xs uppercase tracking-wider hover:bg-stone-50 transition-all cursor-pointer">
              Carbon Life Cycle Audit
            </button>
          </div>
        </section>

        {/* Infinite Biophilic Marquee */}
        <div className="rounded-3xl border border-[#D6C7A1] overflow-hidden bg-white/60 p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.organicNature.livingFoliage, title: 'Living Chlorophyll Skin', tag: 'PHOTOSYNTHESIS' },
              { src: MEDIA_ASSETS.organicNature.riverStone, title: 'Eroded River Bed Stone', tag: 'GEOLOGY' },
              { src: MEDIA_ASSETS.biophilic.verticalGarden, title: 'Vertical Mycelium Trellis', tag: 'AIR PURIFIER' },
              { src: MEDIA_ASSETS.japandi.zenInteriors, title: 'Cedar Timber Frame', tag: 'PEBBLE CRAFT' }
            ]}
          />
        </div>

        {/* Biomorphic Living Material Gallery */}
        <section id="materials" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#D6C7A1] pb-3">
            <h3 className="text-3xl font-bold font-cormorant text-[#2D4A22]">Living Bio-Material Specimens</h3>
            <span className="font-mono text-xs text-[#78716C]">REGENERATIVE CYCLE 2026</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.organicNature.riverStone,
                title: 'Water-Smoothed River Pebbles',
                subtitle: 'Natural thermal mass foundations regulating subterranean temperatures',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.biophilic.verticalGarden,
                title: 'Bio-Photovoltaic Green Wall',
                subtitle: 'Living ferns absorbing volatile organic compounds while buffering exterior acoustics',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.organicNature.livingFoliage,
                title: 'Canopy Mycelium Composite',
                subtitle: 'Lightweight fungal mycelium grown inside agricultural straw with zero binders',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Organic Footer */}
        <footer className="p-6 rounded-[32px] bg-white border border-[#D6C7A1] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78716C] gap-4">
          <div>BIOME BOTANICA LAB • COPENHAGEN & COSTA RICA</div>
          <div>CARBON NEGATIVE LIVING ARCHITECTURE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
