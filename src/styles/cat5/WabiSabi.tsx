import React, { useState } from 'react';
import { Sparkles, Compass, Shield, Heart } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const WabiSabiPage: React.FC = () => {
  const [goldShimmer, setGoldShimmer] = useState(true);

  return (
    <div className="min-h-screen bg-[#181514] text-[#E8E4DD] font-serif selection:bg-[#D4AF37] selection:text-black p-4 sm:p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Wabi-Sabi Minimalist Header */}
        <header className="py-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-3xl font-instrument italic tracking-wide text-white">
              Kintsugi Vessel 金継ぎ
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
              THE ART OF IMPERFECTION & GOLD-MENDED CERAMICS
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-8 text-xs font-mono tracking-widest text-[#8C827A]">
            <a href="#vessels" className="hover:text-[#D4AF37] transition-colors">VESSELS</a>
            <a href="#philosophy" className="hover:text-[#D4AF37] transition-colors">WABI-SABI</a>
            <a href="#repair" className="hover:text-[#D4AF37] transition-colors">REPAIR ATELIER</a>
          </div>

          <button 
            onClick={() => setGoldShimmer(!goldShimmer)}
            className="px-4 py-1.5 rounded-full border border-[#D4AF37] text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
          >
            Gold Vein: {goldShimmer ? 'Illuminated ✦' : 'Shadow'}
          </button>
        </header>

        {/* Hero Section: The Gold Mended Ceramic */}
        <section className="text-center space-y-6 py-8 max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block">
            BEAUTY IN THE BROKEN, CRACKED & WEATHERED
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-instrument italic text-white leading-tight">
            The fracture is where <br />
            <span className="text-[#D4AF37]">the light enters.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8A096] leading-relaxed font-newsreader font-light">
            When a ceramic tea bowl breaks, we do not discard it or conceal the damage. We reassemble the shards with natural urushi tree sap lacquer dusted with pure 24-karat gold powder. The wound becomes the most precious attribute.
          </p>

          {/* Hero Visual Composition: Kintsugi Bowl Photography */}
          <div className="pt-6 max-w-xl mx-auto p-3 rounded-3xl bg-[#221E1C] border border-[#D4AF37]/40 shadow-2xl">
            <ImageBox
              src={MEDIA_ASSETS.wabiSabi.kintsugiBowl}
              alt="Japanese Kintsugi Tea Bowl with Real Gold Seam Lacquer"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Antique reduction-fired chawan reunited with urushi lacquer and 24K gold dust"
            />
          </div>
        </section>

        {/* Infinite Wabi-Sabi Marquee */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#221E1C]/40 p-2">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.wabiSabi.kintsugiBowl, title: 'Gold-Joined Chawan', tag: '24K URUSHI' },
              { src: MEDIA_ASSETS.wabiSabi.weatheredClay, title: 'Weathered Stoneware Vessel', tag: 'SHINO GLAZE' },
              { src: MEDIA_ASSETS.organicMinimalism.riverstoneVessels, title: 'Wood-Fired Kiln Vase', tag: 'BIZEN-YAKI' },
              { src: MEDIA_ASSETS.japandi.ceramicTeaware, title: 'Unglazed Yunomi Cup', tag: 'KYOTO' }
            ]}
          />
        </div>

        {/* Imperfect Ceramic Vessels Gallery */}
        <section id="vessels" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h3 className="text-2xl font-bold font-instrument text-white">Weathered Stoneware & Kintsugi Relics</h3>
            <span className="font-mono text-xs text-[#D4AF37]">HEIRLOOM ARCHIVE</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.wabiSabi.weatheredClay,
                title: 'Eroded Terracotta Vessel',
                subtitle: 'Surface patina forged through two centuries of wood-smoke kiln firing',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.organicMinimalism.riverstoneVessels,
                title: 'River Pebble Stoneware',
                subtitle: 'Coarse sand inclusions giving tactile organic grain to the unglazed clay',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.wabiSabi.kintsugiBowl,
                title: 'Kintsugi Chawan Gold Mended',
                subtitle: 'Accidental fracture elevated into eternal visual poetry with fine Japanese gold dust',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Wabi-Sabi Footer */}
        <footer className="py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8C827A] gap-4">
          <div>KINTSUGI VESSEL ATELIER • UJI & KYOTO, JAPAN</div>
          <div>IMPERFECT BEAUTY • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
