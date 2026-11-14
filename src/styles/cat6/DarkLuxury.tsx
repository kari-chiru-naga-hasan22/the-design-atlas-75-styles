import React, { useState } from 'react';
import { Compass, Anchor, Shield, Star, Award, ArrowRight, Check } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const DarkLuxuryPage: React.FC = () => {
  const [charterInquiry, setCharterInquiry] = useState(false);

  return (
    <div className="min-h-screen bg-[#060810] text-[#F1F5F9] font-sans selection:bg-[#B8860B] selection:text-black">
      {/* Port Hercules Monaco Top Ribbon */}
      <div className="border-b border-white/10 px-8 py-3 flex items-center justify-between text-xs font-mono text-white/50">
        <div>PORT HERCULES, MONACO • PRIVATE YACHT MANAGEMENT</div>
        <div className="text-[#B8860B]">VIP CONCIERGE PROTOCOL ACTIVE</div>
      </div>

      {/* Dark Luxury Nav */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded bg-[#B8860B] text-[#060810] flex items-center justify-center font-serif font-black text-xl">
            ⚓
          </div>
          <div>
            <div className="text-2xl font-bold font-serif-luxury tracking-widest text-white uppercase">
              AETHERIS
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#B8860B] uppercase">
              SUPERYACHTS & PRIVATE AVIATION FLEET
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-serif-luxury tracking-widest text-white/70">
          <a href="#fleet" className="hover:text-[#B8860B] transition-colors">THE FLEET (90M+)</a>
          <a href="#itineraries" className="hover:text-[#B8860B] transition-colors">ANTARCTIC EXPEDITIONS</a>
          <a href="#charter" className="hover:text-[#B8860B] transition-colors">BESPOKE CHARTER</a>
        </div>

        <button 
          onClick={() => setCharterInquiry(true)}
          className="px-6 py-2.5 rounded bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black font-serif-luxury font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-amber-500/10 flex items-center gap-2"
        >
          {charterInquiry ? (
            <>
              <Check size={14} /> Inquiry Dispatched
            </>
          ) : (
            'Request Private Charter'
          )}
        </button>
      </nav>

      {/* Hero Section: Midnight Smoked Crystal & Burnished Gold */}
      <section className="py-20 sm:py-28 px-8 max-w-5xl mx-auto text-center space-y-8">
        <span className="text-xs font-mono tracking-[0.4em] uppercase text-[#B8860B] block">
          PROJECT 108M • POLAR CODE CLASS 1 ICE-BREAKER
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-serif-luxury tracking-wider text-white uppercase leading-tight">
          Uncharted Oceans. <br />
          <span className="text-[#B8860B] italic">Absolute Sovereignty.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-white/60 font-light leading-relaxed">
          Custom naval architecture engineered to navigate remote polar glaciers in whisper-quiet hybrid battery silence. Heli-decks, submarine launch bays, and Michelin-star private chefs.
        </p>

        {/* Hero Visual Composition: Midnight Superyacht Photography */}
        <div className="pt-6 max-w-4xl mx-auto p-3 rounded-2xl bg-[#0C101E] border border-white/15 shadow-2xl">
          <ImageBox
            src={MEDIA_ASSETS.darkLuxury.superyachtAtNight}
            alt="108-Meter Midnight Mega Yacht Anchored off Monaco Coast"
            aspectRatio="16/9"
            rounded="xl"
            caption="M/Y Aetheris Noir at midnight anchorage in Port Hercules (Monaco)"
          />
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 rounded bg-[#B8860B] text-black font-serif-luxury font-bold text-xs uppercase tracking-wider hover:bg-[#d4af37] transition-all cursor-pointer flex items-center gap-2">
            Examine 108M Hull Blueprint <ArrowRight size={14} />
          </button>
          <button className="px-8 py-4 rounded bg-white/5 border border-white/20 text-white font-serif-luxury text-xs uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer">
            Charter Calendar 2026 / 2027
          </button>
        </div>
      </section>

      {/* Infinite Dark Luxury Fleet Marquee */}
      <section className="py-6 border-y border-white/10 bg-[#0C101E]">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.darkLuxury.superyachtAtNight, title: 'M/Y Aetheris Noir (108M)', tag: 'MONACO' },
            { src: MEDIA_ASSETS.darkLuxury.obsidianLounge, title: 'Obsidian Master Suite', tag: 'HELI-DECK' },
            { src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry, title: 'Bespoke Chronometer', tag: 'SWISS CRAFT' },
            { src: MEDIA_ASSETS.artDeco.gildedSpires, title: 'Sovereign Fleet Desk', tag: 'CHARTER' }
          ]}
        />
      </section>

      {/* Dark Luxury Fleet Showcase Gallery */}
      <section id="fleet" className="py-16 px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#B8860B] uppercase tracking-widest">PRIVATE FLEET INVENTORY</span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-white uppercase mt-1">Superyachts & Polar Vessels</h2>
          </div>
          <span className="font-mono text-xs text-white/50">LLOYD'S REGISTER CLASS 100A1</span>
        </div>

        <ImageGallery
          columns={3}
          theme="dark"
          items={[
            {
              src: MEDIA_ASSETS.darkLuxury.obsidianLounge,
              title: 'Obsidian Salon Privé',
              subtitle: 'Acoustically isolated VIP owner quarters finished in smoked oak and black leather',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry,
              title: 'Bespoke Marine Chronometry',
              subtitle: 'Gimballed tourbillon navigation clock with 8-day power reserve in solid titanium',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.darkLuxury.superyachtAtNight,
              title: 'M/Y Aetheris Noir Midnight',
              subtitle: 'Submersible beach club and dive tender launch deck bathed in underwater blue LED arrays',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Dark Luxury Footer */}
      <footer className="border-t border-white/10 py-12 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-white/40">
        <div>AETHERIS SUPERYACHTS • QUAI DES ÉTATS-UNIS, MONACO</div>
        <div>SOVEREIGN OFFSHORE EXPEDITIONS • © 2026</div>
      </footer>
    </div>
  );
};
