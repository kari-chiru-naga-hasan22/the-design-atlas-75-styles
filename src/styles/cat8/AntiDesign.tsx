import React, { useState } from 'react';
import { Skull, AlertOctagon, Flame, EyeOff, ShieldAlert } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const AntiDesignPage: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [inverted, setInverted] = useState<boolean>(false);

  return (
    <div className={`min-h-screen ${
      inverted ? 'bg-[#00FF00] text-[#FF0000]' : 'bg-[#FF0000] text-[#00FF00]'
    } font-mono selection:bg-[#0000FF] selection:text-[#FFFFFF] relative overflow-x-hidden transition-colors duration-100`}>
      
      {/* Glitched Marquee Ticker */}
      <div className="bg-[#0000FF] text-[#FFFFFF] py-2 px-4 border-b-8 border-dashed border-[#00FF00] text-sm font-black flex justify-between items-center tracking-tighter">
        <span>⚠ UGLY BY CHOICE ⚠ ZERO CONVERSION FUNNELS ⚠ DADA RULES FOREVER ⚠</span>
        <button 
          onClick={() => setInverted(!inverted)}
          className="bg-[#00FF00] text-black px-3 py-1 font-bold text-xs uppercase border-2 border-black hover:bg-white cursor-pointer"
        >
          [ INVERT RETINA BURN ]
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Anti-Header: Asymmetrical, broken borders, mismatched typography */}
        <header className="border-8 border-dotted border-white p-6 bg-black text-[#00FF00] space-y-4 shadow-[16px_16px_0px_#0000FF] transform rotate-1">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl animate-bounce">🤡</span>
              <div>
                <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter font-press-start">
                  CHAOS &amp; SPITE
                </h1>
                <div className="text-xs text-[#FF0000] tracking-widest font-vt323 text-lg">
                  YOUR CLEAN SAAS AESTHETICS ARE AN AESTHETIC PRISON
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-vt323 text-2xl">
              <span>RAGE CLICKS: {clickCount}</span>
            </div>
          </div>
        </header>

        {/* Hero Section: Clashing Overlapping Hostile Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white text-black p-3 inline-block border-4 border-black font-press-start text-xs transform -rotate-2">
              WE REFUSE TO OPTIMIZE YOUR CTR
            </div>

            <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-none font-press-start">
              WE BROKE <br />
              <span className="bg-[#0000FF] text-[#00FF00] px-3 inline-block transform rotate-2">
                EVERY
              </span> <br />
              RULE.
            </h2>

            <p className="text-lg sm:text-2xl font-vt323 leading-relaxed max-w-2xl bg-black text-white p-4 border-4 border-[#00FF00]">
              Every modern website looks like the same beige luxury spa or the same blue SaaS landing page. 
              We bring back the glorious hostility of 1996 Geocities, high-school cyber-punk rage, 
              and pure visual discord. Cry about it in your design critique meeting.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setClickCount(prev => prev + 1)}
                className="px-8 py-5 bg-[#0000FF] text-[#00FF00] font-press-start text-xs uppercase border-4 border-white hover:bg-white hover:text-black transition-none cursor-pointer transform active:scale-90"
              >
                CLICK ME (NOTHING WILL HAPPEN)
              </button>
              <div className="bg-black text-[#FF0000] p-2 border-2 border-white text-xs font-press-start">
                404 BOUNCED
              </div>
            </div>
          </div>

          {/* Hero Anti-Design Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-black border-8 border-dashed border-[#0000FF] p-4 text-white space-y-4 transform -rotate-2 shadow-[12px_12px_0px_#00FF00]">
              <ImageBox
                src={MEDIA_ASSETS.antiDesign.punkDadaFlyers}
                alt="Anti-Design Dada Punk Fanzine Collaged Graphics"
                aspectRatio="4/3"
                caption="Dadaist underground cut-and-paste collage with intentional registration destruction."
                className="border-4 border-[#00FF00]"
              />

              {/* Hostile button maze */}
              <div className="space-y-2 font-press-start text-[10px]">
                <button 
                  onClick={() => alert("WHY DID YOU CLICK THIS?!")}
                  className="w-full py-2.5 bg-[#FF0000] text-black font-black uppercase border-2 border-black hover:bg-[#00FF00] cursor-pointer"
                >
                  DO NOT PRESS
                </button>
                <button 
                  onClick={() => setInverted(!inverted)}
                  className="w-full py-2.5 bg-[#00FF00] text-black font-black uppercase border-2 border-black hover:bg-[#FF0000] hover:text-white cursor-pointer"
                >
                  TOGGLE PSYCHEDELIC RAGE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Anti-Design Infinite Marquee */}
        <section className="py-2 border-y-8 border-dotted border-white bg-black">
          <InfiniteImageMarquee
            speed="fast"
            images={[
              { src: MEDIA_ASSETS.antiDesign.punkDadaFlyers, title: 'Dadaist Riot Collage', tag: 'DADA' },
              { src: MEDIA_ASSETS.antiDesign.neonGlitchChaos, title: 'RGB Pixel Discord', tag: 'GLITCH' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Raw Concrete Monolith', tag: 'NO COMPROMISE' },
              { src: MEDIA_ASSETS.y2k.cyberrave, title: 'Underground 90s Acid Flyer', tag: 'CHAOS' }
            ]}
          />
        </section>

        {/* Anti-Design Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4 bg-black p-4 border-4 border-white">
            <h3 className="text-xl sm:text-2xl font-press-start text-[#00FF00]">
              ANTI-DESIGN CHAOS ARCHIVE
            </h3>
            <div className="h-2 flex-1 bg-[#FF0000]" />
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.antiDesign.punkDadaFlyers,
                title: 'Dadaist Photostat Fanzine',
                subtitle: 'Cut-and-paste physical Xerox collage',
                category: 'DADA'
              },
              {
                src: MEDIA_ASSETS.antiDesign.neonGlitchChaos,
                title: 'CRT Phosphor Breakdown',
                subtitle: 'Horizontal scanline jitter',
                category: 'GLITCH'
              },
              {
                src: MEDIA_ASSETS.y2k.cyberrave,
                title: 'Illegal Warehouse Flyer',
                subtitle: 'Unchecked typography and day-glo inks',
                category: 'NET ART'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t-8 border-black pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-press-start bg-black text-[#00FF00] p-6">
          <div>
            CHAOS &amp; SPITE NET ART LAB
          </div>
          <div>
            UNSUBSCRIBE FROM SANITY • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
