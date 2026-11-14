import React, { useState, useEffect } from 'react';
import { Compass, Shield, Award, Sparkles, Watch, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery, ProductShowcase } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SkeuomorphismPage: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => (s + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const horologySpecs = [
    { label: 'CALIBRE', value: 'CH-8822 Flying Tourbillon' },
    { label: 'POWER RESERVE', value: '72 Hours Twin-Barrel' },
    { label: 'COMPONENTS', value: '412 Hand-Finished Parts' },
    { label: 'CASE MATERIAL', value: '18K Rose Gold 41mm' }
  ];

  const watchImages = [
    { label: 'MOVEMENT VIEW', src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement },
    { label: 'GEAR TRAIN', src: MEDIA_ASSETS.skeuomorphism.watchGears },
    { label: 'STRAP CRAFT', src: MEDIA_ASSETS.skeuomorphism.leatherCraft }
  ];

  return (
    <div className="min-h-screen bg-[#1F110B] text-[#FFFDD0] font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* Stitched Leather Header with Brass Screws */}
      <header className="border-b-4 border-[#140A06] bg-[#2E1A11] px-6 py-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.15),0_6px_12px_rgba(0,0,0,0.8)] relative sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#997A15] via-[#D4AF37] to-[#FDF0A6] border-2 border-[#594406] shadow-[inset_0_1px_3px_#fff,0_4px_8px_rgba(0,0,0,0.6)] flex items-center justify-center font-bold text-[#1F110B] text-xl">
              ⚙️
            </div>
            <div>
              <div className="text-2xl font-bold tracking-wider font-serif uppercase text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                CHRONOS ATELIER
              </div>
              <div className="text-[10px] tracking-[0.25em] font-sans text-[#C2A382] uppercase">
                MANUFACTURE D’HORLOGERIE GENÈVE • DEPUIS 1884
              </div>
            </div>
          </div>

          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-b from-[#E6C65A] via-[#D4AF37] to-[#997A15] border border-[#594406] text-[#1F110B] font-bold text-xs uppercase tracking-wider shadow-[inset_0_1px_2px_#fff,0_3px_6px_rgba(0,0,0,0.7)] hover:brightness-110 cursor-pointer">
            Acquire Timepiece
          </button>
        </div>
      </header>

      {/* Hero Section: The Physical Grand Complication Watch Face & Dial */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#D4AF37] block">
            PIÈCE UNIQUE — EDITION LIMITÉE NO. 01 / 12
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FFFDD0] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Hand-Assembled Mechanical Tourbillon.
          </h1>
          <p className="text-base sm:text-lg text-[#C2A382] leading-relaxed font-sans max-w-xl mx-auto">
            412 hand-chamfered steel bridges, solid 18k rose gold bezel, hand-stitched alligator strap, and a continuous flying tourbillon escapement.
          </p>
        </div>

        {/* Product Showcase with Real Macro Photography */}
        <div className="max-w-5xl mx-auto">
          <ProductShowcase
            name="THE IMPERIAL TOURBILLON NO. VII"
            category="GRAND COMPLICATION HOROLOGY"
            price="CHF 148,000"
            description="Hand-engraved guilloché dial with blued Breguet hands, perpetual calendar registers, and an unobstructed aperture displaying the sixty-second rotating titanium cage."
            specs={horologySpecs}
            images={watchImages}
            theme="dark"
            accentColor="#D4AF37"
          />
        </div>
      </section>

      {/* 3-Pillar Craftsmanship Gallery */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-8 border-t-2 border-[#594406]/40">
        <div className="flex justify-between items-end border-b border-[#D4AF37]/30 pb-4">
          <div>
            <span className="text-xs font-sans uppercase text-[#D4AF37] tracking-widest">
              ATELIER SAVOIR-FAIRE
            </span>
            <h2 className="text-3xl font-serif text-[#FFFDD0] mt-1">
              Geneva Seal Craftsmanship
            </h2>
          </div>
          <span className="text-xs font-sans text-[#C2A382]">CERTIFIED POINÇON DE GENÈVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'HAND-CHAMFERED BRIDGES',
              desc: 'Every interior angle is beveled by hand using gentian wood pegs and diamond paste to a mirror polish.',
              src: MEDIA_ASSETS.skeuomorphism.watchGears
            },
            {
              title: 'HAND-STITCHED ALLIGATOR',
              desc: 'Selected Mississippi alligator hide, saddle-stitched with waxed linen thread by master leather artisans.',
              src: MEDIA_ASSETS.skeuomorphism.leatherCraft
            },
            {
              title: 'TWIN-BARREL POWER RESERVE',
              desc: 'Dual mainspring barrels delivering constant torque across 72 continuous hours of precision amplitude.',
              src: MEDIA_ASSETS.skeuomorphism.luxuryWatchMovement
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#2E1A11] border border-[#594406] p-6 rounded-xl space-y-4 shadow-xl">
              <ImageBox
                src={item.src}
                alt={item.title}
                aspectRatio="4/3"
                rounded="lg"
              />
              <h3 className="text-lg font-serif text-[#D4AF37] uppercase">{item.title}</h3>
              <p className="text-xs text-[#C2A382] font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-[#140A06] bg-[#2E1A11] p-8 text-center text-xs font-sans text-[#C2A382]">
        CHRONOS ATELIER GENÈVE // HAUTE HORLOGERIE ANCIENNE • 1884–2026
      </footer>
    </div>
  );
};
