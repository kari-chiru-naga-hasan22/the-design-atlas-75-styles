import React, { useState } from 'react';
import { ArrowUpRight, Zap, Flame, Volume2, Sparkles, MessageCircle } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const PopArtPage: React.FC = () => {
  const [speechBubbleText, setSpeechBubbleText] = useState<string>("THAT'S THE WAY--IT SHOULD HAVE BEGUN! BUT IT'S HOPELESS!");
  const [burstCount, setBurstCount] = useState<number>(100);

  const quotes = [
    "THAT'S THE WAY--IT SHOULD HAVE BEGUN! BUT IT'S HOPELESS!",
    "WHAAM! THE ENEMY ROCKET ERUPTS INTO FLAMES!",
    "IN THE FUTURE, EVERYONE WILL BE WORLD-FAMOUS FOR 15 MINUTES.",
    "POP ART IS LOVING THINGS THAT NOBODY ELSE CARES TO NOTICE."
  ];

  return (
    <div className="min-h-screen bg-[#FACC15] text-black font-sans selection:bg-[#EF4444] selection:text-white relative overflow-x-hidden">
      {/* Ben-Day Halftone Dot Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)',
          backgroundSize: '16px 16px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Comic Strip Marquee Header */}
        <header className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_#000000] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#EF4444] border-3 border-black flex items-center justify-center text-white font-black text-2xl shadow-[3px_3px_0px_#000000] transform -rotate-3">
              ★
            </div>
            <div>
              <div className="text-3xl font-black uppercase tracking-tight font-syne leading-none">
                WARHOL & ROY <span className="text-[#EF4444]">PRESS</span>
              </div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#1D4ED8] uppercase">
                SILKSCREEN SERIAL REPRODUCTIONS • VOL. 1964
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#1D4ED8] text-white px-3 py-1 text-xs font-mono font-bold border-2 border-black transform rotate-2">
              EDITION: {burstCount}/500
            </span>
            <button 
              onClick={() => {
                const nextQuote = quotes[(quotes.indexOf(speechBubbleText) + 1) % quotes.length];
                setSpeechBubbleText(nextQuote);
                setBurstCount(prev => prev + 1);
              }}
              className="px-5 py-2.5 bg-[#EF4444] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-black transition-colors cursor-pointer"
            >
              TRIGGER "POW!" 💥
            </button>
          </div>
        </header>

        {/* Hero Comic Panel Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#1D4ED8] text-white font-mono text-xs font-black uppercase tracking-widest border-3 border-black shadow-[4px_4px_0px_#000000] transform -rotate-1">
              MASS CULTURE INTO FINE ART
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] font-syne">
              WHAAM! <br />
              <span className="text-[#EF4444] bg-white px-3 border-4 border-black inline-block transform rotate-1 shadow-[6px_6px_0px_#000000]">
                SCREAM
              </span> <br />
              <span className="text-white drop-shadow-[4px_4px_0px_#000000]">
                COLOR.
              </span>
            </h1>

            {/* Comic Speech Balloon */}
            <div className="relative bg-white border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_#000000] max-w-xl">
              <div className="text-lg sm:text-xl font-black tracking-tight font-sans text-black leading-snug">
                "{speechBubbleText}"
              </div>
              <div className="absolute -bottom-4 left-12 w-0 h-0 border-t-[18px] border-t-white border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent drop-shadow-[0px_4px_0px_#000000]" />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#silkscreens"
                className="px-8 py-4 bg-[#EF4444] text-white font-black uppercase text-sm tracking-wider border-4 border-black shadow-[6px_6px_0px_#000000] hover:bg-[#1D4ED8] transition-all transform hover:-translate-y-1"
              >
                BROWSE 4-COLOR SILKSCREENS
              </a>
              <span className="text-xs font-mono font-bold bg-white px-3 py-2 border-2 border-black">
                BEN-DAY 120 LPI RESOLUTION
              </span>
            </div>
          </div>

          {/* Hero Pop Art ImageBox Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white border-4 border-black p-4 shadow-[12px_12px_0px_#000000] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono font-bold border-b-2 border-black pb-2">
                <span>PANEL NO. 04</span>
                <span className="text-[#EF4444]">THE CADILLAC DREAM</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.popArt.silkscreenColor}
                alt="Warhol Pop Art Color Silkscreen"
                aspectRatio="4/3"
                caption="High-saturation multi-layer silkscreen ink pull with deliberate registration offset."
                className="border-2 border-black"
              />

              <div className="text-xs font-mono font-bold text-center pt-1">
                SILKSCREEN CHANNELS: <span className="text-[#EF4444]">CYAN • MAGENTA • YELLOW • BLACK</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pop Art Infinite Marquee */}
        <section className="py-2 border-y-4 border-black bg-white">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.popArt.silkscreenColor, title: 'Silkscreen Color Pull', tag: 'WARHOL' },
              { src: MEDIA_ASSETS.popArt.comicDots, title: 'Ben-Day Comic Dots', tag: 'LICHTENSTEIN' },
              { src: MEDIA_ASSETS.psychedelic.liquidLightShow, title: 'Polychrome Pigment', tag: 'FACTORY' },
              { src: MEDIA_ASSETS.retro70s.vintageAmplifier, title: 'Consumer Artifact', tag: 'SERIGRAPH' }
            ]}
          />
        </section>

        {/* 4 Comic Book Panels Showcase */}
        <section id="silkscreens" className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-black uppercase tracking-tight font-syne">
              SERIGRAPH PRINTS
            </h2>
            <div className="h-2 flex-1 bg-black" />
            <span className="text-xs font-mono font-bold bg-[#EF4444] text-white px-3 py-1 border-2 border-black">
              ROY LICHTENSTEIN SUITE
            </span>
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.popArt.silkscreenColor,
                title: 'High-Saturation Serigraph',
                subtitle: 'Four-color screen pull with ink bleed',
                category: 'ANDY WARHOL'
              },
              {
                src: MEDIA_ASSETS.popArt.comicDots,
                title: 'Ben-Day Dot Explosion',
                subtitle: 'Rotary press enlargement',
                category: 'ROY LICHTENSTEIN'
              },
              {
                src: MEDIA_ASSETS.retro70s.vintageAmplifier,
                title: 'Mass Reproduction Object',
                subtitle: 'Pop culture commercial archetype',
                category: 'THE FACTORY'
              }
            ]}
          />
        </section>

        {/* Comic Callout Burst Banner */}
        <div className="bg-white border-4 border-black p-8 sm:p-12 shadow-[10px_10px_0px_#000000] text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-[#EF4444] text-white font-mono text-xs font-bold uppercase tracking-widest border-2 border-black transform -rotate-2">
            THE FACTORY NEW YORK • 231 EAST 47TH STREET
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto font-syne">
            "AN ARTIST IS SOMEBODY WHO PRODUCES THINGS THAT PEOPLE DON'T NEED TO HAVE."
          </h3>
          <div>
            <button className="px-8 py-4 bg-[#FACC15] text-black font-black uppercase text-sm tracking-wider border-4 border-black shadow-[6px_6px_0px_#000000] hover:bg-[#1D4ED8] hover:text-white transition-all cursor-pointer">
              COLLECT AUTHENTICATED FOLIO
            </button>
          </div>
        </div>

        {/* Pop Art Footer */}
        <footer className="border-t-4 border-black pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold uppercase">
          <div className="flex items-center gap-2">
            <span>💥 WARHOL & ROY POP PRESS</span>
            <span>•</span>
            <span>LICENSED FROM THE FACTORY</span>
          </div>
          <div>
            BEN-DAY DOT MATRIX APPROVED • 1964–2026
          </div>
        </footer>

      </div>
    </div>
  );
};
