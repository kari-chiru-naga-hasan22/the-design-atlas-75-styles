import React, { useState } from 'react';
import { Compass, Sun, Sparkles, Heart, Globe, Flame } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const BohemianPage: React.FC = () => {
  const [activeCaravan, setActiveCaravan] = useState('MARRAKECH OASIS');

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#431407] font-serif selection:bg-[#C2593F] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Bohemian Macramé Top Border */}
        <div className="w-full flex justify-around text-xs font-mono text-[#C2593F] select-none py-2 border-b-2 border-dashed border-[#C2593F]/40">
          <span>◆ ❖ ◆ ❖ ◆ ❖ ◆</span>
          <span className="hidden sm:inline">DESERT CARAVAN ARTISAN TEXTILES & KILIM RUGS</span>
          <span>◆ ❖ ◆ ❖ ◆ ❖ ◆</span>
        </div>

        {/* Bohemian Header */}
        <header className="flex flex-wrap items-center justify-between gap-6 py-4 border-b border-[#E7DFD5]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#C2593F] text-[#FDFBF7] flex items-center justify-center text-2xl shadow-md">
              🏜️
            </div>
            <div>
              <div className="text-3xl font-bold font-playfair tracking-tight text-[#431407]">
                NOMAD SPIRIT
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#C2593F] uppercase">
                HANDWOVEN KILIMS & DESERT CARAVAN FINDS
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-sans font-bold tracking-wider text-[#7C2D12]">
            <a href="#rugs" className="hover:text-[#C2593F] transition-colors">VINTAGE KILIMS</a>
            <a href="#brass" className="hover:text-[#C2593F] transition-colors">BRASS LANTERNS</a>
            <a href="#botanicals" className="hover:text-[#C2593F] transition-colors">INCENSE OILS</a>
          </div>

          <button className="px-5 py-2.5 rounded-full bg-[#C2593F] hover:bg-[#a0432c] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer">
            Explore Caravan
          </button>
        </header>

        {/* Hero Section: Woven Sunburst Warmth */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FED7AA] text-[#9A3412] text-xs font-sans font-bold uppercase tracking-wider">
            <Sun size={14} /> DYE VATS UNDER THE ATLAS SUN
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-playfair leading-[1.08] text-[#431407]">
            Woven fibers, <br />
            <span className="text-[#C2593F] italic">sun-drenched earth.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#7C2D12] leading-relaxed font-newsreader max-w-xl mx-auto">
            From the high peaks of the Atlas Mountains to the desert tents of Rajasthan. Handspun wool dyed with saffron, madder root, and wild pomegranate rinds.
          </p>

          {/* Hero Visual Composition: Moroccan Riad Courtyard */}
          <div className="pt-6 max-w-4xl mx-auto p-4 bg-[#F8F4EC] border border-[#E7DFD5] rounded-3xl shadow-md">
            <ImageBox
              src={MEDIA_ASSETS.bohemian.moroccanRiad}
              alt="Moroccan Riad Courtyard with Kilim Rugs and Terracotta Archways"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Zellij tile fountain, carved cedar arches, and sun-baked Berber textiles (Marrakech Medina)"
            />
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#C2593F] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#a0432c] transition-all cursor-pointer">
              Browse Handwoven Rugs
            </button>
            <button className="px-8 py-3.5 rounded-full bg-[#0D9488] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#0f766e] transition-all cursor-pointer">
              Artisan Guild Story
            </button>
          </div>
        </section>

        {/* Infinite Nomad Marquee */}
        <div className="rounded-2xl border border-[#E7DFD5] overflow-hidden bg-[#F8F4EC] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.bohemian.moroccanRiad, title: 'Marrakech Riad Courtyard', tag: 'BERBER' },
              { src: MEDIA_ASSETS.bohemian.desertCaravan, title: 'Sahara Sand Dunes', tag: 'NOMAD' },
              { src: MEDIA_ASSETS.scandinavian.hyggeWool, title: 'Hand-Knotted Kilim', tag: 'NATURAL DYES' },
              { src: MEDIA_ASSETS.surrealism.desertMonolith, title: 'Atlas Foothills', tag: 'CARAVAN' }
            ]}
          />
        </div>

        {/* 3 Bohemian Artisan Treasures Gallery */}
        <section id="rugs" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#E7DFD5] pb-3">
            <h3 className="text-2xl font-bold font-playfair text-[#431407]">Caravan Textile & Decor Archive</h3>
            <span className="font-mono text-xs text-[#C2593F]">ATLAS MOUNTAIN GUILD</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.scandinavian.hyggeWool,
                title: 'Beni Ourain Tribal Weave',
                subtitle: 'Plush 100% virgin Berber sheep wool knotted on wooden vertical looms',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.bohemian.desertCaravan,
                title: 'Sahara Twilight Camp',
                subtitle: 'Wool kilim tents protecting nomad caravans beneath infinite starry skies',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.bohemian.moroccanRiad,
                title: 'Marrakech Sun Courtyard',
                subtitle: 'Terracotta planters, hand-pierced brass lanterns and mosaic tiled walls',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Bohemian Footer */}
        <footer className="p-8 rounded-3xl bg-[#F8F4EC] border border-[#E7DFD5] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#7C2D12] gap-4">
          <div>NOMAD SPIRIT ATELIER • SOUK SEMMARINE, MARRAKECH & JAIPUR</div>
          <div>FAIR TRADE ARTISAN COOPERATIVE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
