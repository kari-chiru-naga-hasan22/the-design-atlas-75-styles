import React, { useState } from 'react';
import { Sparkles, Palette, Zap, ArrowRight, Star, Layers, Shapes } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MemphisPage: React.FC = () => {
  const [activeSquiggle, setActiveSquiggle] = useState(false);

  const triggerJoy = () => {
    setActiveSquiggle(!activeSquiggle);
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.4 }
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#1E1E24] font-sans selection:bg-[#FF6B8B] selection:text-white p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative Memphis Geometric Confetti Elements */}
      <div className="absolute top-12 left-10 w-8 h-8 rounded-full bg-[#FF6B8B] border-2 border-black pointer-events-none" />
      <div className="absolute top-24 right-16 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#20E2D7] rotate-12 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-12 h-4 bg-[#FFDA47] border-2 border-black rotate-[-24deg] pointer-events-none" />

      {/* Memphis Postmodern Navbar */}
      <nav className="max-w-7xl mx-auto p-4 sm:p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0_#20E2D7] flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FF6B8B] border-3 border-black rounded-xl flex items-center justify-center text-white text-2xl rotate-6 shadow-[3px_3px_0_#FFDA47]">
            〰️
          </div>
          <div>
            <div className="text-2xl font-black font-syne tracking-tight text-[#1E1E24]">
              MILANO SOTTSASS
            </div>
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#FF6B8B] uppercase">
              POSTMODERN RADICAL PATTERNS • 1981
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <a href="#objects" className="hover:text-[#FF6B8B] transition-colors">Radical Objects</a>
          <a href="#terrazzo" className="hover:text-[#FF6B8B] transition-colors">Terrazzo Patterns</a>
          <a href="#manifesto" className="hover:text-[#FF6B8B] transition-colors">The 1981 Group</a>
        </div>

        <button 
          onClick={triggerJoy}
          className="px-5 py-2.5 bg-[#FFDA47] hover:bg-[#ffe169] text-black font-black text-xs uppercase tracking-wider rounded-xl border-3 border-black shadow-[4px_4px_0_#FF6B8B] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
        >
          Pop The Confetti 🎉
        </button>
      </nav>

      {/* Hero Section: Squiggles, Geometry & Fearless Colors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#20E2D7] text-black font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0_#FF6B8B]">
          〰️ THE REVOLUTION AGAINST GOOD TASTE 〰️
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-syne text-[#1E1E24] tracking-tight leading-[1.02]">
          FEARLESS JUXTAPOSITION, <br />
          <span className="bg-[#FF6B8B] text-white px-3 py-0.5 border-3 border-black inline-block rotate-[-2deg] shadow-[6px_6px_0_#20E2D7] mt-2">
            SQUIGGLES & PURE JOY.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#4A4A5A] font-medium leading-relaxed">
          In 1981, Ettore Sottsass and the Memphis Group threw modernist sobriety out the window. Terrazzo laminates, plastic squiggles, clashing pastels, and radical wit.
        </p>

        {/* Hero Visual Composition: Memphis Furniture & Objects */}
        <div className="pt-6 max-w-4xl mx-auto p-4 bg-white border-4 border-black rounded-3xl shadow-[10px_10px_0_#FFDA47]">
          <ImageBox
            src={MEDIA_ASSETS.memphis.sottsassVibe}
            alt="Memphis Group Colorful Geometric Furniture Room"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Radical geometric totems, polka dot squiggles, and plastic laminate surfaces (Milan 1981)"
          />
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <button 
            onClick={triggerJoy}
            className="px-8 py-4 bg-[#FF6B8B] text-white font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0_#FFDA47] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <Star size={18} /> EXPLORE 1981 COLLECTION
          </button>
          <button className="px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-black shadow-[6px_6px_0_#1E1E24] hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer">
            READ THE MANIFESTO
          </button>
        </div>
      </section>

      {/* Infinite Memphis Pattern Marquee */}
      <section className="py-6 border-y-4 border-black bg-[#FFDA47] my-12">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.memphis.sottsassVibe, title: 'Carlton Totem Shelving', tag: 'ETTORE SOTTSASS' },
            { src: MEDIA_ASSETS.memphis.geometricPattern, title: 'Terrazzo Confetti Tile', tag: 'RADICAL PATTERN' },
            { src: MEDIA_ASSETS.neoBrutalism.colorfulGadget, title: 'Bacterio Squiggle Print', tag: 'LAMINATE' },
            { src: MEDIA_ASSETS.neoBrutalism.popArtToy, title: 'Super Lamp Carousel', tag: 'MILANO 1981' }
          ]}
        />
      </section>

      {/* Memphis Radical Objects Cards */}
      <section id="objects" className="max-w-7xl mx-auto py-12 px-4 space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b-4 border-black pb-4">
          <div>
            <span className="text-xs font-mono font-black uppercase text-[#FF6B8B]">COLLECTION EXHIBITION</span>
            <h2 className="text-3xl sm:text-5xl font-black font-syne text-black mt-1">Radical Objects & Laminates</h2>
          </div>
          <span className="font-mono text-xs font-bold text-black">MILAN TRIENNALE ARCHIVE</span>
        </div>

        <ImageGallery
          columns={3}
          theme="pop"
          items={[
            {
              src: MEDIA_ASSETS.memphis.geometricPattern,
              title: 'Terrazzo Confetti Flooring',
              subtitle: 'Composite fragments of marble and resin creating whimsical confetti surfaces',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.neoBrutalism.colorfulGadget,
              title: 'Carlton Bookcase Prototype',
              subtitle: 'Anthropomorphic shelving unit balancing tilted pastel laminate shelves',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.memphis.sottsassVibe,
              title: 'Milan Living Landscape',
              subtitle: 'Bold collision of primary yellow, bubblegum pink and electric cyan forms',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Memphis Footer */}
      <footer className="max-w-7xl mx-auto p-8 bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0_#FF6B8B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono font-bold mt-12">
        <div>MILANO SOTTSASS STUDIO • CORSO DI PORTA VITTORIA, MILAN</div>
        <div>MEMPHIS MILANO • RADICAL POSTMODERN DESIGN • © 1981–2026</div>
      </footer>
    </div>
  );
};
