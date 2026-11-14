import React, { useState } from 'react';
import { Sparkles, Diamond, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const LuxuryMinimalismPage: React.FC = () => {
  const [inquireSent, setInquireSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-white font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* Haute Joaillerie Place Vendôme Top Bar */}
      <div className="border-b border-white/10 px-8 py-4 flex items-center justify-between text-[11px] font-sans tracking-[0.3em] uppercase text-white/50">
        <div>MAISON ÉLYSÉE • 26 PLACE VENDÔME, PARIS</div>
        <div>HAUTE JOAILLERIE PRIVÉE</div>
      </div>

      {/* Luxury Minimalist Nav */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
        <div className="text-2xl sm:text-3xl font-serif-luxury tracking-[0.25em] uppercase text-white">
          É L Y S É E
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs font-sans tracking-[0.25em] text-white/60">
          <a href="#solitaires" className="hover:text-white transition-colors">LES SOLITAIRES</a>
          <a href="#diamonds" className="hover:text-white transition-colors">DIAMOND ORIGIN</a>
          <a href="#atelier" className="hover:text-white transition-colors">LE GRAND ATELIER</a>
        </div>

        <button 
          onClick={() => setInquireSent(true)}
          className="px-6 py-2.5 rounded-full border border-white/30 text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          {inquireSent ? 'Salon Booked ✓' : 'Private Salon'}
        </button>
      </nav>

      {/* Hero Section: Immense Negative Space & Solitary Diamond Pedestal */}
      <section className="py-20 sm:py-28 px-8 max-w-5xl mx-auto text-center space-y-8">
        <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#D4AF37] block">
          ONE OF ONE • ARCHIVAL SOLITAIRE NO. 07
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-serif-luxury tracking-[0.1em] text-white uppercase leading-[1.15]">
          The singularity of <br />
          <span className="italic font-cormorant text-[#E5E7EB]">pure diamond light.</span>
        </h1>

        <p className="max-w-lg mx-auto text-sm sm:text-base text-white/50 font-sans font-light tracking-wide leading-relaxed">
          Cut from an unblemished 42-carat Golconda rough. Set in forged platinum wire so delicate that the diamond appears suspended upon empty space.
        </p>

        {/* Museum Isolated Pedestal Showcase with High-Res Image */}
        <div className="pt-8 max-w-xl mx-auto p-4 rounded-3xl bg-white/[0.02] border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.06)]">
          <ImageBox
            src={MEDIA_ASSETS.luxuryMinimalism.platinumJewelry}
            alt="Haute Joaillerie Solitaire Diamond Ring on Black Velvet Pedestal"
            aspectRatio="16/9"
            rounded="2xl"
            caption="42-carat Type IIa D-Flawless emerald-cut diamond in 950 forged platinum wire"
          />
        </div>

        <div className="pt-6">
          <button className="px-10 py-4 bg-white text-black font-sans text-xs tracking-[0.25em] uppercase hover:bg-zinc-200 transition-colors cursor-pointer">
            Inquire Confidential Dossier
          </button>
        </div>
      </section>

      {/* Infinite Vendôme Haute Joaillerie Marquee */}
      <section className="py-6 border-y border-white/10 bg-[#0B0B0E] my-8">
        <InfiniteImageMarquee
          speed="slow"
          images={[
            { src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry, title: 'Solitaire No. 07', tag: 'D-FLAWLESS' },
            { src: MEDIA_ASSETS.luxuryMinimalism.placeVendome, title: 'Place Vendôme Atelier', tag: 'PARIS' },
            { src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement, title: 'Geneva Seal Escapement', tag: 'PLATINUM 950' },
            { src: MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon, title: 'Crystal Flacon Fluting', tag: 'HAUTE JOAILLERIE' }
          ]}
        />
      </section>

      {/* 3 Pillars of Haute Joaillerie Gallery */}
      <section id="solitaires" className="py-16 px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-sans tracking-[0.25em] text-[#D4AF37] uppercase">LES COLLECTIONS PRIVÉES</span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury text-white uppercase mt-1">Mastery & Lineage</h2>
          </div>
          <span className="text-xs font-sans tracking-widest text-white/40">ANNÉE 2026 • PARIS</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.luxuryMinimalism.placeVendome,
              title: 'Place Vendôme Salon',
              subtitle: 'Historic 18th-century salons private viewings conducted solely by appointment',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement,
              title: 'Micro-Pave Platinum Craft',
              subtitle: 'Hand-forged platinum prongs cut under 40x binocular stereomicroscopes',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry,
              title: 'Golconda Solitaire Ring',
              subtitle: 'Type IIa nitrogen-free carbon crystal yielding exceptional optical transparency',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Luxury Footer */}
      <footer className="border-t border-white/10 py-12 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-sans tracking-widest text-white/40">
        <div>MAISON ÉLYSÉE HAUTE JOAILLERIE • PARIS & GENÈVE</div>
        <div>ALL RIGHTS RESERVED • © 2026 MAISON ÉLYSÉE</div>
      </footer>
    </div>
  );
};
