import React, { useState } from 'react';
import { Scissors, FileText, Bookmark, Share2, Layers, BookOpen } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const CollagePage: React.FC = () => {
  const [tapePeeling, setTapePeeling] = useState(false);

  return (
    <div className="min-h-screen bg-[#D8C3A5] text-[#1F1E1D] font-serif selection:bg-[#1F1E1D] selection:text-[#D8C3A5] p-4 sm:p-8 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Torn Scrapbook Navigation Bar */}
        <nav className="p-6 bg-[#EAE7DC] border-2 border-dashed border-[#1F1E1D] shadow-[6px_6px_0_rgba(0,0,0,0.25)] flex flex-wrap items-center justify-between gap-4 rotate-[-0.5deg]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1F1E1D] text-[#EAE7DC] flex items-center justify-center font-bold text-xl rotate-[-3deg]">
              ✂️
            </div>
            <div>
              <div className="text-2xl font-black font-dm-serif tracking-tight text-[#1F1E1D]">
                CUT & PASTE ATELIER
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#666] uppercase">
                ANALOG MIXED-MEDIA ART & ZINE PRESS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs font-bold">
            <a href="#scrapbook" className="hover:underline">01 / SCRAPBOOK</a>
            <a href="#zines" className="hover:underline">02 / CASSETTE ZINES</a>
            <a href="#print" className="hover:underline">03 / PRINT CLUB</a>
          </div>

          {/* Masking Tape Sticker */}
          <div className="px-4 py-1.5 bg-[#F3E5AB] border border-[#d8c788] text-xs font-mono font-bold rotate-2 shadow-sm">
            TAPE: ARCHIVAL NO. 4
          </div>
        </nav>

        {/* Hero Section: Torn Paper Headers and Overlapping Magazine Clippings */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#1F1E1D] text-[#EAE7DC] text-xs font-mono rotate-[-1deg]">
              ISSUE NO. 14: THE ANALOG REBELLION
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-dm-serif leading-[1.08] text-[#1F1E1D]">
              Torn edges, <br />
              <span className="bg-[#EAE7DC] px-2 border-2 border-[#1F1E1D] inline-block rotate-[1deg] shadow-[4px_4px_0_#1F1E1D]">
                Xerox grain,
              </span> <br />
              analog remix.
            </h1>

            <p className="text-base sm:text-lg text-[#3E3A37] max-w-lg leading-relaxed font-newsreader">
              We collect discarded 1960s magazines, architectural blueprints, and carbon copies. Cut with shears, fastened with yellow masking tape, and remixed into physical artwork.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button 
                onClick={() => setTapePeeling(!tapePeeling)}
                className="px-6 py-3.5 bg-[#1F1E1D] hover:bg-black text-[#EAE7DC] font-mono text-xs uppercase tracking-wider shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <Scissors size={14} /> {tapePeeling ? 'STICK TAPE DOWN' : 'PEEL SCRAPBOOK TAPE'}
              </button>
              <button className="px-6 py-3.5 bg-[#EAE7DC] border-2 border-[#1F1E1D] text-[#1F1E1D] font-mono text-xs uppercase tracking-wider shadow-[4px_4px_0_#1F1E1D] cursor-pointer">
                ORDER ZINE FOLIO ($18)
              </button>
            </div>
          </div>

          {/* Layered Scrapbook Collage Card with Real Image */}
          <div className="lg:col-span-5 relative">
            <div className="p-3 bg-[#EAE7DC] border-2 border-[#1F1E1D] rotate-[-2deg] shadow-xl space-y-2 relative">
              <div className="absolute -top-3 left-12 w-28 h-6 bg-[#F3E5AB] border border-[#d8c788] opacity-90 shadow-sm rotate-[-3deg] z-10" />
              <ImageBox
                src={MEDIA_ASSETS.collage.tornPaperMix}
                alt="Mixed Media Torn Paper and Found Text Collage"
                aspectRatio="4/3"
                rounded="none"
                caption="Hand-torn chromatic paper layers fastened with archival bone glue"
              />
              <div className="p-2 font-mono text-[11px] text-[#554] flex justify-between border-t border-[#1F1E1D]/20">
                <span>FOLIO NO. 14B</span>
                <span>ORIGINAL MONOTYPE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Collage Tape Marquee */}
        <div className="border-2 border-[#1F1E1D] bg-[#EAE7DC] p-2 rotate-[0.5deg]">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.collage.tornPaperMix, title: 'Torn Newsprint Folio', tag: 'ZINE 01' },
              { src: MEDIA_ASSETS.collage.zineStack, title: 'Risograph Pamphlets', tag: 'EDITION 50' },
              { src: MEDIA_ASSETS.editorial.monochromeEditorial, title: 'Silver Gelatin Print', tag: 'DARKROOM' },
              { src: MEDIA_ASSETS.memphis.geometricPattern, title: 'Dada Pattern Clippings', tag: 'COLLAGE' }
            ]}
          />
        </div>

        {/* Zine Archives Gallery */}
        <section id="scrapbook" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-2 border-[#1F1E1D] pb-3">
            <h3 className="text-3xl font-bold font-dm-serif text-[#1F1E1D]">The Scrapbook Folio Collection</h3>
            <span className="font-mono text-xs font-bold text-[#666]">CATALOGUE 2026</span>
          </div>

          <ImageGallery
            columns={3}
            theme="swiss"
            items={[
              {
                src: MEDIA_ASSETS.collage.zineStack,
                title: 'Risograph Stacks',
                subtitle: 'Soy ink printed on unbleached 120gsm recycled sugarcane paper',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.editorial.monochromeEditorial,
                title: 'High-Contrast Photostat',
                subtitle: 'Camera-ready mechanical paste-ups with dry transfer rub-down letters',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.collage.tornPaperMix,
                title: 'Mixed Ephemera Assembly',
                subtitle: 'Postage stamps, subway tickets, and halftone fashion clippings',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Collage Footer */}
        <footer className="p-6 bg-[#EAE7DC] border-2 border-[#1F1E1D] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#554] gap-4">
          <div>CUT & PASTE ATELIER • HACKNEY, LONDON & LEIPZIG</div>
          <div>ANALOG GRAIN • HANDMADE COLLAGE ART • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
