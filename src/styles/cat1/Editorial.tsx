import React, { useState } from 'react';
import { Bookmark, Share2, Clock, ChevronRight } from 'lucide-react';
import { ImageBox, EditorialImage, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const EditorialPage: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const photojournalismStories = [
    {
      title: 'THE DIPLOMATIC VAULT OF GENEVA',
      subtitle: 'Inside the neoclassical chambers where treaties are still signed with fountain pen and parchment.',
      category: 'REPORTAGE',
      year: 'JUNE 2026',
      src: MEDIA_ASSETS.editorial.libraryArchive,
      aspectRatio: '3/4' as const
    },
    {
      title: 'AVENUE MONTAIGNE RUNWAY REPORT',
      subtitle: 'The return of architectural tailoring and heavy hand-woven wools to Parisian couture houses.',
      category: 'HAUTE COUTURE',
      year: 'AUTUMN 2026',
      src: MEDIA_ASSETS.editorial.runwayFashion,
      aspectRatio: '3/4' as const
    },
    {
      title: 'THE MONOCHROME ESSAYS',
      subtitle: 'Conversations with European philosophers on the necessity of silence in the digital metropolis.',
      category: 'CRITICAL INQUIRY',
      year: 'VOL. 48',
      src: MEDIA_ASSETS.editorial.monochromeEditorial,
      aspectRatio: '3/4' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EB] text-[#1A1A1A] font-serif selection:bg-[#631B2A] selection:text-white">
      {/* Editorial Top Masthead Bar */}
      <div className="border-b border-[#D8D2C2] py-2 px-6 text-center text-xs font-sans tracking-widest text-[#706B5E] flex items-center justify-between">
        <div>VOL. XLVIII • NO. 182</div>
        <div className="font-semibold text-black uppercase tracking-wider hidden sm:block">INTERNATIONAL QUARTERLY OF CRITIQUE &amp; LETTERS</div>
        <div>LONDON • PARIS • NEW YORK</div>
      </div>

      {/* Main Journal Masthead */}
      <header className="border-b-2 border-[#1A1A1A] py-8 px-6 text-center bg-[#F7F4EB] sticky top-0 z-30">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight font-serif italic text-[#1A1A1A]">
          The Monocle Chronicle
        </h1>
        <div className="mt-3 flex items-center justify-center gap-6 text-xs font-sans uppercase tracking-[0.2em] text-[#706B5E]">
          <span>POLITICS</span>
          <span>•</span>
          <span>CULTURE</span>
          <span>•</span>
          <span>ESSAYS</span>
          <span>•</span>
          <span>POETRY</span>
          <span>•</span>
          <span>DISPATCHES</span>
        </div>
      </header>

      {/* Hero Lead Story: Traditional Broadsheet Lead Layout with High-Fidelity Editorial Photo */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#D8D2C2] pb-16">
          
          {/* Main Cover Feature (8 Cols) */}
          <article className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs font-sans text-[#631B2A] font-bold uppercase tracking-wider">
              <span>LEAD DISPATCH // DIPLOMATIC AFFAIRS</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-normal text-[#706B5E]">
                <Clock size={13} /> 18 MIN READ
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#111111]">
              The Twilight of the Algorithmic Consensus: How Human Discretion Reclaimed European Governance
            </h2>

            <p className="text-lg sm:text-xl italic text-[#4A453A] leading-relaxed font-light">
              After a decade of delegating sovereign fiscal allocation to predictive machine learning models, five Western European parliaments have voted unanimously to restore human constitutional vetoes.
            </p>

            {/* Lead Editorial Photograph */}
            <EditorialImage
              src={MEDIA_ASSETS.editorial.portraitModel}
              alt="Portrait of Chancellor Helena Vauclin in Geneva"
              plateNumber="PLATE I // DISPATCH PORTRAIT"
              headline="The Sovereign Human Mandate"
              caption="Chancellor Helena Vauclin presiding over the extraordinary session of the Palais des Nations, Geneva. Photographed by Émile Cointreau on 35mm Tri-X film."
              photographer="ÉMILE COINTREAU"
              aspectRatio="16/9"
              theme="light"
            />

            <div className="flex items-center justify-between border-y border-[#D8D2C2] py-3 text-xs font-sans text-[#706B5E]">
              <div>
                BY <strong className="text-black font-semibold">HELENA VAUCLIN</strong> IN GENEVA • JUNE 2026
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className="hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  <Bookmark size={13} /> {isBookmarked ? 'SAVED' : 'BOOKMARK'}
                </button>
                <button className="hover:text-black flex items-center gap-1 cursor-pointer">
                  <Share2 size={13} /> SHARE
                </button>
              </div>
            </div>

            <div className="text-base sm:text-lg leading-relaxed text-[#2C2924] space-y-4 font-light text-justify">
              <p className="first-letter:text-5xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                When the automated budget allocation protocols quietly suspended emergency funding for provincial municipal clinics across northern Bavaria in the winter of 2025, no human minister had signed the decree. The algorithmic optimization model had calculated an infinitesimal return on capital.
              </p>
              <p>
                What followed was not riots, but a collective constitutional realization: convenience had quietly devoured democratic agency. Within forty-eight hours, emergency sessions convened simultaneously in Berlin, Paris, Rome, Madrid, and Vienna.
              </p>
            </div>
          </article>

          {/* Right Sidebar Editorial Column (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8 border-t lg:border-t-0 lg:border-l border-[#D8D2C2] lg:pl-8">
            <div className="border-b border-[#D8D2C2] pb-4">
              <span className="font-sans text-xs uppercase tracking-widest text-[#631B2A] font-bold">
                EDITOR'S SELECTIONS
              </span>
            </div>

            <EditorialImage
              src={MEDIA_ASSETS.editorial.runwayFashion}
              alt="Haute Couture Autumn Collection Paris"
              plateNumber="PLATE II // SALON DE COUTURE"
              headline="The Return of Hand-Woven Wool"
              caption="Sculptural silhouette by Atelier Vendôme. Photographed backstage at the Grand Palais."
              aspectRatio="4/3"
              theme="light"
            />

            <div className="space-y-6 pt-4 text-xs font-sans border-t border-[#D8D2C2]">
              <div className="space-y-1">
                <span className="text-[#631B2A] font-bold">DISPATCH 02</span>
                <h4 className="text-base font-serif font-bold leading-snug">The Architectural Resurgence of Oxford Limestone</h4>
                <p className="text-[#706B5E]">Why collegiate gothic construction has seen an unexpected 400% surge among new university libraries.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* 3-Column Photojournalism Showcase */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-[#D8D2C2] pb-4">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#631B2A] font-bold">
                VISUAL DISPATCHES
              </span>
              <h3 className="text-3xl font-serif mt-1">
                Field Photojournalism &amp; Portfolios
              </h3>
            </div>
            <span className="text-xs font-sans text-[#706B5E]">SPRING / SUMMER 2026</span>
          </div>

          <ImageGallery items={photojournalismStories} columns={3} theme="minimal" />
        </section>
      </main>

      {/* Colophon Footer */}
      <footer className="border-t-2 border-[#1A1A1A] py-12 px-6 text-center text-xs font-sans text-[#706B5E] space-y-2">
        <div className="font-serif italic text-lg text-black">The Monocle Chronicle</div>
        <div>PUBLISHED SINCE 1884 • PRINTED ON 100% UNBLEACHED COTTON RAG</div>
      </footer>
    </div>
  );
};
