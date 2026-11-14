import React, { useState } from 'react';
import { ArrowUpRight, Compass, Eye, Sparkles, Shirt, Scissors } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const HighFashionPage: React.FC = () => {
  const [activeLook, setActiveLook] = useState(1);

  const runwayLooks = [
    { num: 'LOOK 01', title: 'SCULPTURAL TAILORED WOOL CAPE', fabric: 'Double-Faced Cashmere • Charcoal Noir', model: 'Sasha V.' },
    { num: 'LOOK 02', title: 'ASYMMETRIC SILK ORGANZA GOWN', fabric: 'Raw Mulberry Silk • Alabaster White', model: 'Amina K.' },
    { num: 'LOOK 03', title: 'CORSETED LEATHER MOTORCYCLE JACKET', fabric: 'Buffed Calfskin • Polished Steel Zippers', model: 'Elena R.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Paris Runway Show Top Banner */}
      <div className="border-b border-white/20 py-3 px-6 text-xs font-mono tracking-[0.3em] uppercase text-white/50 flex justify-between">
        <div>DÉFILÉ AUTOMNE / HIVER 2026</div>
        <div>PALAIS DE TOKYO, PARIS • 21:00 CET</div>
      </div>

      {/* High Fashion Avant-Garde Nav */}
      <nav className="border-b border-white/20 px-6 py-6 md:px-12 flex items-center justify-between">
        <div className="text-3xl sm:text-4xl font-dm-serif italic tracking-tight text-white">
          Atelier Noir
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-white/60">
          <a href="#looks" className="hover:text-white transition-colors">THE RUNWAY</a>
          <a href="#craft" className="hover:text-white transition-colors">HAUTE COUTURE</a>
          <a href="#campaign" className="hover:text-white transition-colors">CAMPAIGN FILM</a>
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-white">
          PARIS FASHION WEEK
        </div>
      </nav>

      {/* Hero Section: Staggering High-Contrast Asymmetric Crop */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <span className="font-mono text-xs text-white/50 tracking-[0.3em] uppercase block">
            COLLECTION NO. 18 • THE ANATOMY OF SILHOUETTE
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-dm-serif italic tracking-tight leading-[0.9] text-white">
            Architecture <br />
            <span className="font-sans font-black uppercase not-italic text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>
              OF SILHOUETTE.
            </span>
          </h1>

          <p className="max-w-lg text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Deconstructed Parisian tailoring for the nocturnal metropolis. Exaggerated shoulder architecture, sculpted double-faced wool, and unyielding monochrome discipline.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 font-mono text-xs">
            <a href="#looks" className="px-8 py-3.5 bg-white text-black font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
              Inspect Runway (42 Looks)
            </a>
            <span className="text-white/40">DIRECTED BY JEAN-LUC MOREAU</span>
          </div>
        </div>

        {/* High Fashion Runway Visual Composition */}
        <div className="lg:col-span-5 relative">
          <div className="p-3 bg-[#121216] border border-white/30 shadow-2xl relative">
            <ImageBox
              src={MEDIA_ASSETS.highFashion.hauteCoutureRunway}
              alt="Haute Couture Runway Model Walking Under Dark Spotlight"
              aspectRatio="3/4"
              rounded="none"
              caption="Look #01: Sculptural double-faced cashmere cape (Palais de Tokyo)"
            />

            <div className="border-t border-white/10 mt-3 pt-3 flex justify-between items-center font-mono text-xs">
              <span className="text-white/60">MODEL: {runwayLooks[activeLook - 1].model}</span>
              <button 
                onClick={() => setActiveLook((activeLook % 3) + 1)}
                className="text-white underline hover:text-zinc-300 cursor-pointer"
              >
                NEXT SILHOUETTE →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Fashion Week Marquee */}
      <section className="py-6 border-y border-white/20 bg-zinc-950">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.highFashion.hauteCoutureRunway, title: 'Palais de Tokyo Defilé', tag: 'PARIS' },
            { src: MEDIA_ASSETS.highFashion.fashionEditorialVogue, title: 'Vogue Italia Editorial', tag: 'COUTURE' },
            { src: MEDIA_ASSETS.editorial.portraitModel, title: 'Sculptural Tailoring', tag: 'CASHMERE' },
            { src: MEDIA_ASSETS.editorial.runwayFashion, title: 'Catwalk Noir', tag: 'AUTOMNE 2026' }
          ]}
        />
      </section>

      {/* Runway Looks Gallery */}
      <section id="looks" className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/20 pb-4">
          <div>
            <span className="text-xs font-mono uppercase text-white/50 tracking-widest">DÉFILÉ ARCHIVE</span>
            <h2 className="text-3xl sm:text-5xl font-dm-serif italic text-white mt-1">Runway Looks & Editorial Frames</h2>
          </div>
          <span className="font-mono text-xs text-white/60">COLLECTION 18 / PARIS</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.highFashion.fashionEditorialVogue,
              title: 'Look 02: Asymmetric Organza',
              subtitle: 'Multi-layer raw mulberry silk gown flowing with architectural volume',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.editorial.portraitModel,
              title: 'Look 03: Corseted Leather',
              subtitle: 'Buffed calfskin tailored over titanium boning with razor-sharp lapels',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.highFashion.hauteCoutureRunway,
              title: 'Look 01: Double-Faced Cape',
              subtitle: 'Charcoal double cashmere sculpted without visible exterior stitching',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* High Fashion Footer */}
      <footer className="border-t border-white/20 py-12 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-white/40">
        <div>ATELIER VENDÔME NOIR • 14 RUE DU FAUBOURG SAINT-HONORÉ, PARIS</div>
        <div>HAUTE COUTURE AUTOMNE / HIVER • © 2026</div>
      </footer>
    </div>
  );
};
