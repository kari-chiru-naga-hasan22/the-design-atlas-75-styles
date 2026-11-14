import React, { useState } from 'react';
import { Award, Compass, Sparkles, GlassWater, Crown, Gem, Check } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ArtDecoPage: React.FC = () => {
  const [suiteBooked, setSuiteBooked] = useState(false);

  return (
    <div className="min-h-screen bg-[#08080A] text-[#FDF6E2] font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* Symmetrical Art Deco Gilded Border Header */}
      <div className="border-b-2 border-[#D4AF37] bg-[#0E0E12] py-3 text-center text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
        ✦ THE ROARING TWENTIES REVIVAL • ESTABLISHED NEW YORK 1925 ✦
      </div>

      {/* Main Art Deco Portal Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#D4AF37]/40 text-center md:text-left">
        <div>
          <div className="text-3xl sm:text-4xl font-bold font-serif-luxury tracking-widest text-[#D4AF37] uppercase">
            THE MAJESTIC GATSBY
          </div>
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#C5A880] mt-1 font-sans">
            GRAND BALLROOM • PRIVATE CLUB • FIFTH AVENUE
          </div>
        </div>

        <div className="flex items-center gap-8 text-xs font-serif-luxury tracking-widest text-[#FDF6E2]">
          <a href="#ballroom" className="hover:text-[#D4AF37] transition-colors">THE BALLROOM</a>
          <a href="#suites" className="hover:text-[#D4AF37] transition-colors">GILDED SUITES</a>
          <a href="#champagne" className="hover:text-[#D4AF37] transition-colors">PRIVATE CELLARS</a>
        </div>

        <button 
          onClick={() => setSuiteBooked(true)}
          className="px-6 py-3 border-2 border-[#D4AF37] bg-[#0B0B0D] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] font-serif-luxury font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.2)]"
        >
          {suiteBooked ? 'SALON RESERVED ✓' : 'RESERVE GILDED SALON'}
        </button>
      </header>

      {/* Hero Section: Bilateral Symmetry & Geometric Sunbursts */}
      <section className="py-16 sm:py-24 px-6 max-w-5xl mx-auto text-center space-y-8 relative">
        {/* Geometric Fan Ornament */}
        <div className="w-24 h-12 mx-auto border-t-2 border-x-2 border-[#D4AF37] rounded-t-full flex items-center justify-center text-[#D4AF37] text-lg">
          👑
        </div>

        <span className="text-xs font-sans tracking-[0.4em] uppercase text-[#D4AF37] block">
          AN ERA OF UNPARALLELED OPULENCE
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal font-serif-luxury tracking-wider text-[#FDF6E2] uppercase leading-tight">
          THE GILDED <br />
          <span className="text-[#D4AF37] italic">SYMMETRY.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#C5A880] font-light leading-relaxed font-sans">
          Welcome to the golden zenith of 1925 Manhattan. Black marble dance floors, polished bronze sunburst arches, crystal chandeliers, and vintage vintage champagne poured under moonlight.
        </p>

        {/* Hero Architectural Framed Artwork */}
        <div className="pt-6 max-w-4xl mx-auto p-2 border-2 border-[#D4AF37] bg-[#0E0E12] shadow-[0_0_35px_rgba(212,175,55,0.2)]">
          <div className="border border-[#D4AF37]/50 p-2">
            <ImageBox
              src={MEDIA_ASSETS.artDeco.gildedSpires}
              alt="Art Deco Gilded Skyscraper Spires"
              aspectRatio="16/9"
              rounded="none"
              caption="Stepped ziggurat terracotta crown and stainless steel eagle gargoyles at sunset"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-6">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-auto" />
          <span className="text-[#D4AF37] text-lg">✦</span>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-auto" />
        </div>
      </section>

      {/* Infinite Art Deco Marquee */}
      <section className="py-6 border-y-2 border-[#D4AF37] bg-[#0E0E12]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.artDeco.gildedSpires, title: 'Chrysler Radiator Spires', tag: 'MANHATTAN 1928' },
            { src: MEDIA_ASSETS.artDeco.ballroomChandelier, title: 'Baccarat Crystal Vault', tag: 'FIFTH AVENUE' },
            { src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement, title: 'Guilloché Gold Inlay', tag: 'CARTIER CRAFT' },
            { src: MEDIA_ASSETS.luxuryMinimalism.placeVendome, title: 'Vendôme Salon Privé', tag: 'PARIS 1925' }
          ]}
        />
      </section>

      {/* Art Deco Symmetrical Chambers */}
      <section id="suites" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37]">THE PRIVATE RESIDENCES</span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#FDF6E2] uppercase">
            Gilded Chambers & Chandeliers
          </h2>
          <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.artDeco.ballroomChandelier,
              title: 'The Grand Ballroom',
              subtitle: 'Octagonal crystal dome overhead, 24-piece live jazz orchestra and Carrara floor',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement,
              title: 'Horological Vault',
              subtitle: 'Hand-engraved mechanical clocks and solid brass escapements',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.artDeco.gildedSpires,
              title: 'Terrace Penthouse',
              subtitle: 'Panoramic skyline vantage points crowned with gilded sunburst grillwork',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Art Deco Footer */}
      <footer className="border-t-2 border-[#D4AF37] py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-serif-luxury tracking-widest text-[#C5A880]">
        <div>THE MAJESTIC GATSBY • 740 FIFTH AVENUE, NEW YORK</div>
        <div>GOLD LEAF PERFECTION • ALL RIGHTS RESERVED © 1925–2026</div>
      </footer>
    </div>
  );
};
