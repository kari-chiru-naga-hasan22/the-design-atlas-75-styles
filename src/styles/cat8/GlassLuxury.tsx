import React, { useState } from 'react';
import { Sparkles, Compass, Shield, Heart, Gem, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const GlassLuxuryPage: React.FC = () => {
  const [selectedFlacon, setSelectedFlacon] = useState<number>(0);

  const flacons = [
    {
      name: 'FLACON VENDÔME NO. VII',
      notes: 'Ambergris, Orris Root & Smoked Damask Rose',
      glass: 'Heavy 32% Lead Crystal with Hand-Fluted Facets',
      edition: 'Numbered Edition of 50 Flacons'
    },
    {
      name: 'L’ÉCLAT BORÉAL',
      notes: 'Bergamot, White Truffle & Wild Narcissus',
      glass: 'Champagne-Tinted Fluted Flacon with 24K Gold Stopper',
      edition: 'Numbered Edition of 30 Flacons'
    },
    {
      name: 'OMBRE DE SOIRÉE',
      notes: 'Smoked Oud, Black Cardamom & Gilded Honey',
      glass: 'Smoky Basalt Crystal with Diamond-Cut Base',
      edition: 'Private Commission Only'
    }
  ];

  return (
    <div className="min-h-screen bg-[#12141D] text-[#F8FAFC] font-serif selection:bg-[#F5D061] selection:text-black relative overflow-x-hidden">
      
      {/* Opulent Champagne Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5D061]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
        
        {/* Fluted Glass Translucent Header */}
        <header className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#F5D061]/40 flex items-center justify-center bg-[#F5D061]/10 text-[#F5D061]">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-normal tracking-widest uppercase font-cinzel text-[#F8FAFC]">
                CRISTAL <span className="text-[#F5D061]">VENDÔME</span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                HAUTE CRISTALLERIE &amp; BESPOKE PERFUMERIE • PLACE VENDÔME, PARIS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <span className="text-white/60 hidden sm:inline">MAISON FONDÉE 1892</span>
            <button className="px-5 py-2.5 rounded-full border border-[#F5D061]/50 bg-[#F5D061]/10 text-[#F5D061] font-cinzel text-xs uppercase tracking-wider hover:bg-[#F5D061] hover:text-black transition-all cursor-pointer">
              COMMANDER PRIVÉ
            </button>
          </div>
        </header>

        {/* Hero Section: Fluted Glass Translucent Elegance */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-[#F5D061]/30 text-xs font-mono tracking-widest text-[#F5D061] uppercase">
              <Sparkles className="w-4 h-4" />
              HAND-BLOWN FLUTED CRYSTAL MASTERPIECES
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-cinzel text-white leading-[1.08]">
              TRANSLUCENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-white italic font-cormorant">
                CRYSTAL
              </span> <br />
              OPULENCE.
            </h1>

            <p className="text-base sm:text-lg text-white/70 max-w-xl font-cormorant leading-relaxed italic text-justify">
              Each fluted flacon is hand-blown by our master glass artisans in Lorraine, 
              slowly annealed over forty-eight hours, and hand-cut with fifty-six optical flutes 
              that refract golden champagne light onto the vanity table of royalty.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F5D061] to-[#D4AF37] text-black font-cinzel text-xs uppercase font-bold tracking-widest hover:brightness-110 transition-all shadow-[0_0_30px_rgba(245,208,97,0.3)] cursor-pointer">
                DISCOVER THE THREE FLACONS
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Shield className="w-4 h-4" />
                NUMBERED &amp; SEALED WITH GOLD WIRE
              </div>
            </div>
          </div>

          {/* Hero Crystal Perfume Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-white/[0.04] backdrop-blur-3xl border border-[#F5D061]/30 p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] space-y-4">
              <div className="flex justify-between items-center text-xs font-cinzel text-[#F5D061] border-b border-white/10 pb-3">
                <span>HAUTE CRISTALLERIE SPECIMEN</span>
                <span className="font-mono text-white/50">PARIS NO. 0{selectedFlacon + 1}</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon}
                alt="Fluted Crystal Perfume Flacon with Gold Stopper"
                aspectRatio="4/3"
                caption="Hand-cut Lorraine lead crystal flacon with 56 optical light flutes and 24K gold baudruchage."
                className="rounded-2xl overflow-hidden border border-[#F5D061]/30"
              />

              {/* Details of selected flacon */}
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-cormorant space-y-1">
                  <div className="text-white italic">{flacons[selectedFlacon].notes}</div>
                  <div className="text-[11px] font-mono text-white/60 pt-1">{flacons[selectedFlacon].glass}</div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {flacons.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedFlacon(idx)}
                      className={`py-2 rounded-lg text-xs font-cinzel transition-all cursor-pointer ${
                        selectedFlacon === idx
                          ? 'bg-[#F5D061] text-black font-bold shadow-md'
                          : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      FLACON 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glass Luxury Infinite Marquee */}
        <section className="py-2 border-y border-white/10">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon, title: 'Fluted Crystal Flacon', tag: 'LORRAINE' },
              { src: MEDIA_ASSETS.glassLuxury.champagneCrystalGlass, title: 'Champagne Cut Crystal', tag: 'BACCARAT' },
              { src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry, title: 'Gilded Place Vendôme Gold', tag: 'VENDÔME' },
              { src: MEDIA_ASSETS.holographic.iridescentGlass, title: 'Refraction Prism Glass', tag: 'OPULENCE' }
            ]}
          />
        </section>

        {/* The 3 Pillars of Glass Luxury Gallery */}
        <section className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5D061]">
              Savoir-Faire Séculaire
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal font-cinzel text-white">
              The French Crystal Tradition
            </h2>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon,
                title: 'Flacon Vendôme No. VII',
                subtitle: 'Fifty-six optical light flutes',
                category: 'HAUTE PARFUMERIE'
              },
              {
                src: MEDIA_ASSETS.glassLuxury.champagneCrystalGlass,
                title: 'Champagne Crystal Flutes',
                subtitle: 'Mouth-blown 32% lead crystal',
                category: 'CRISTALLERIE'
              },
              {
                src: MEDIA_ASSETS.luxuryMinimalism.platinumJewelry,
                title: 'Place Vendôme Atelier',
                subtitle: 'Hand-knotted 24K gold silk baudruchage',
                category: 'JOAILLERIE'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <div>
            CRISTAL VENDÔME PARIS // HAUTE CRISTALLERIE DEPUIS 1892
          </div>
          <div>
            MEMBER OF THE COMITÉ COLBERT • PLACE VENDÔME
          </div>
        </footer>

      </div>
    </div>
  );
};
