import React, { useState } from 'react';
import { ArrowUpRight, Compass, Square, Triangle, Circle } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const BauhausPage: React.FC = () => {
  const [activeShape, setActiveShape] = useState<'circle' | 'triangle' | 'square'>('circle');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A0A0A] font-sans selection:bg-[#E11D48] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Bauhaus Primary Colors Bar */}
        <div className="grid grid-cols-3 h-3">
          <div className="bg-[#E11D48]" />
          <div className="bg-[#1D4ED8]" />
          <div className="bg-[#FACC15]" />
        </div>

        {/* Bauhaus Asymmetric Navbar */}
        <header className="p-6 bg-white border-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-2xl font-black">
              <span className="text-[#E11D48]">●</span>
              <span className="text-[#FACC15]">▲</span>
              <span className="text-[#1D4ED8]">■</span>
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight font-plus-jakarta uppercase">
                STAATLICHES BAUHAUS
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
                WEIMAR & DESSAU 1919–1933 • FORM FOLLOWS FUNCTION
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase font-bold text-[#475569]">
            <a href="#workshops" className="hover:text-[#E11D48] transition-colors">THE WORKSHOPS</a>
            <a href="#gallery" className="hover:text-[#1D4ED8] transition-colors">DESSAU ARCHIVE</a>
            <a href="#manifesto" className="hover:text-[#FACC15] transition-colors">1919 MANIFESTO</a>
          </div>

          <button className="px-5 py-2.5 bg-black text-white font-mono text-xs uppercase font-bold hover:bg-[#E11D48] transition-colors cursor-pointer">
            Examine Foundation
          </button>
        </header>

        {/* Hero Section: Primary Geometric Triad */}
        <section className="text-center space-y-6 py-12 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-[#FACC15] border border-black font-mono text-xs font-bold uppercase tracking-wider text-black">
            FOUNDATION NO. 01 • ART, CRAFT & INDUSTRY REUNITED
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-plus-jakarta tracking-tight text-black uppercase leading-none">
            FORM FOLLOWS <br />
            <span className="text-[#E11D48]">FUNCTION.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#475569] leading-relaxed font-light">
            Architects, sculptors, painters: we all must return to the crafts! There is no essential difference between the artist and the craftsman. Pure primary colors, geometric balance, and honest industrial fabrication.
          </p>

          {/* Dessau Bauhaus Building Visual Showcase */}
          <div className="pt-8">
            <div className="p-4 sm:p-6 bg-white border-2 border-black max-w-3xl mx-auto space-y-4 shadow-[8px_8px_0px_#000000]">
              <ImageBox
                src={MEDIA_ASSETS.bauhaus.dessauBuilding}
                alt="Bauhaus Dessau Building by Walter Gropius"
                aspectRatio="16/9"
                caption="Staatliches Bauhaus Dessau (1925–1926). Curtain-wall glazing and asymmetrical structural geometry."
                className="border border-black"
              />

              {/* Interactive Geometric Form Selector */}
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveShape('circle')}
                  className={`p-4 border-2 border-black flex items-center gap-3 cursor-pointer transition-all ${activeShape === 'circle' ? 'bg-[#E11D48] text-white scale-105' : 'bg-white text-black'}`}
                >
                  <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">●</div>
                  <span className="text-xs font-mono font-bold">KANDINSKY CIRCLE</span>
                </button>

                <button
                  onClick={() => setActiveShape('triangle')}
                  className={`p-4 border-2 border-black flex items-center gap-3 cursor-pointer transition-all ${activeShape === 'triangle' ? 'bg-[#FACC15] text-black scale-105' : 'bg-white text-black'}`}
                >
                  <div className="w-8 h-8 border-2 border-current flex items-center justify-center font-bold">▲</div>
                  <span className="text-xs font-mono font-bold">ITTEN TRIANGLE</span>
                </button>

                <button
                  onClick={() => setActiveShape('square')}
                  className={`p-4 border-2 border-black flex items-center gap-3 cursor-pointer transition-all ${activeShape === 'square' ? 'bg-[#1D4ED8] text-white scale-105' : 'bg-white text-black'}`}
                >
                  <div className="w-8 h-8 border-2 border-current flex items-center justify-center font-bold">■</div>
                  <span className="text-xs font-mono font-bold">MEYER SQUARE</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bauhaus Infinite Marquee */}
        <section className="py-2 border-y-2 border-black">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.bauhaus.dessauBuilding, title: 'Dessau Glass Façade', tag: 'GROPIUS' },
              { src: MEDIA_ASSETS.bauhaus.wassilyChair, title: 'Wassily Chair B3', tag: 'BREUER' },
              { src: MEDIA_ASSETS.swiss.gridPoster1, title: 'Primary Asymmetry', tag: 'BAYER' },
              { src: MEDIA_ASSETS.constructivism.redTowerSteel, title: 'Industrial Steelwork', tag: 'FAKTURA' }
            ]}
          />
        </section>

        {/* 3 Bauhaus Workshops */}
        <section id="workshops" className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t-2 border-black">
          <div className="p-8 bg-white border-2 border-black space-y-3 shadow-[4px_4px_0px_#E11D48]">
            <div className="w-10 h-10 bg-[#E11D48] text-white flex items-center justify-center font-bold text-lg mb-2">01</div>
            <h3 className="text-xl font-bold uppercase">Metal & Lighting</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Marianne Brandt’s iconic nickel-plated brass teapots and tubular steel desk lamps designed for mass manufacturing.
            </p>
          </div>

          <div className="p-8 bg-white border-2 border-black space-y-3 shadow-[4px_4px_0px_#1D4ED8]">
            <div className="w-10 h-10 bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-lg mb-2">02</div>
            <h3 className="text-xl font-bold uppercase">Tubular Furniture</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Marcel Breuer’s Wassily Chair bending seamless aircraft steel tubes into floating leather sling seating.
            </p>
          </div>

          <div className="p-8 bg-white border-2 border-black space-y-3 shadow-[4px_4px_0px_#FACC15]">
            <div className="w-10 h-10 bg-[#FACC15] text-black flex items-center justify-center font-bold text-lg mb-2">03</div>
            <h3 className="text-xl font-bold uppercase">Typography & Printing</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Herbert Bayer’s Universal Typeface discarding uppercase glyphs in pursuit of phonetic efficiency and clarity.
            </p>
          </div>
        </section>

        {/* Dessau Master Artifacts Gallery */}
        <section id="gallery" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-2 border-black pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight">DESSAU MASTER ARTIFACTS</h2>
            <span className="text-xs font-mono uppercase text-[#64748B]">STAATLICHES ARCHIVE NO. 1926</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.bauhaus.dessauBuilding,
                title: 'Curtain-Wall Studio',
                subtitle: 'Walter Gropius Master Building',
                category: 'ARCHITECTURE'
              },
              {
                src: MEDIA_ASSETS.bauhaus.wassilyChair,
                title: 'Model B3 Armchair',
                subtitle: 'Cold-drawn nickel-plated steel',
                category: 'FURNITURE'
              },
              {
                src: MEDIA_ASSETS.constructivism.industrialGears,
                title: 'Machined Assembly',
                subtitle: 'Mass production metallurgy',
                category: 'WORKSHOP'
              }
            ]}
          />
        </section>

        {/* Bauhaus Footer */}
        <footer className="p-8 bg-white border-2 border-black flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#64748B] gap-4">
          <div>DESSAU BAUHAUS ARCHIVE • AM HORN, WEIMAR</div>
          <div>OBJECTIVE MODERNISM • © 1919–2026</div>
        </footer>
      </div>
    </div>
  );
};
