import React, { useState } from 'react';
import { Heart, Smile, Sparkles, Play, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ImageBox, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ClaymorphismPage: React.FC = () => {
  const [squishCount, setSquishCount] = useState(0);

  const handleSquish = () => {
    setSquishCount(c => c + 1);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.5 }
    });
  };

  const clayToys = [
    {
      title: 'THE CHUBBY DOUGH MONSTER',
      subtitle: 'Soft tactile character molded from digital pastel plasticine clay.',
      category: 'CHARACTER 01',
      year: 'PLASTICINE',
      src: MEDIA_ASSETS.claymorphism.clayFigurine,
      aspectRatio: '4/3' as const
    },
    {
      title: 'PASTEL GEOMETRIC BUDDY',
      subtitle: 'Puffy rounded corner toy figurine with soft inner ambient occlusion.',
      category: 'CHARACTER 02',
      year: 'SOFT GLOW',
      src: MEDIA_ASSETS.claymorphism.pastelSculpture,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#4A2B44] font-sans selection:bg-[#FFB7D5] selection:text-[#4A2B44] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Claymorphic Pill Navigation */}
        <nav className="p-4 sm:p-6 rounded-[36px] bg-[#FFFFFF] shadow-[0_16px_32px_rgba(255,183,213,0.35),inset_0_4px_8px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(255,183,213,0.3)] flex items-center justify-between border border-white/60 sticky top-4 z-30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[24px] bg-[#FFB7D5] shadow-[0_8px_16px_rgba(255,183,213,0.6),inset_0_4px_6px_rgba(255,255,255,0.7),inset_0_-4px_6px_rgba(235,133,173,0.4)] flex items-center justify-center text-2xl animate-bounce">
              🍩
            </div>
            <div>
              <div className="text-2xl font-black font-syne text-[#4A2B44] tracking-tight">DOUGH PLAY</div>
              <div className="text-[10px] font-bold text-[#FF85B3] tracking-widest uppercase">CHUBBY 3D TOY STUDIO</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-[#6D4265]">
            <a href="#toys" className="hover:text-[#FF6699] transition-colors">Toy Box</a>
            <a href="#gallery" className="hover:text-[#FF6699] transition-colors">Playground</a>
          </div>

          <button 
            onClick={handleSquish}
            className="px-6 py-3 rounded-[24px] bg-[#A7F3D0] hover:bg-[#86efac] text-[#065F46] font-black text-xs uppercase tracking-wider shadow-[0_10px_20px_rgba(167,243,208,0.6),inset_0_3px_5px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(110,231,183,0.5)] active:scale-95 transition-all cursor-pointer"
          >
            Squish Me ({squishCount}) ✨
          </button>
        </nav>

        {/* Hero Section: Pillowy, Squishy & Joyful with Clay Media */}
        <section className="text-center space-y-8 py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[20px] bg-[#DDD6FE] text-[#5B21B6] font-bold text-xs shadow-[0_6px_12px_rgba(221,214,254,0.5),inset_0_2px_4px_#fff]">
            <Sparkles size={14} /> CLAYMORPHIC 3D FOR JOYFUL SOULS
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-syne text-[#4A2B44] tracking-tight leading-[1.05]">
            CHUBBY, PILLOWY <br />
            <span className="text-[#FF6699] drop-shadow-[0_8px_16px_rgba(255,102,153,0.25)]">
              DIGITAL TOYS.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6D4265] font-medium leading-relaxed">
            Forget cold glass or flat squares. Claymorphism gives interfaces friendly marshmallow volume, dual pillowy shadows, and bouncy tactile delight.
          </p>

          {/* Central Clay Toy Showcase Card */}
          <div className="max-w-3xl mx-auto p-6 rounded-[44px] bg-white shadow-[0_20px_40px_rgba(255,183,213,0.4),inset_0_4px_8px_rgba(255,255,255,0.8),inset_0_-4px_8px_rgba(255,183,213,0.3)]">
            <ImageBox
              src={MEDIA_ASSETS.claymorphism.clayFigurine}
              alt="Hand-sculpted 3D Clay Toy Character"
              aspectRatio="16/9"
              rounded="3xl"
              tag="FEATURED CLAYMATE"
            />
          </div>
        </section>

        {/* 2-Column Clay Toy Box Gallery */}
        <section id="toys" className="space-y-8">
          <div className="flex justify-between items-end border-b-2 border-[#FFB7D5] pb-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#FF6699]">THE DOUGH WORKSHOP</span>
              <h2 className="text-3xl font-black font-syne text-[#4A2B44]">Meet The Claymates</h2>
            </div>
            <span className="text-xs font-bold text-[#FF85B3]">SERIES 01</span>
          </div>

          <ImageGallery items={clayToys} columns={2} theme="minimal" />
        </section>

        {/* Footer */}
        <footer className="p-8 rounded-[32px] bg-white text-center text-xs font-bold text-[#6D4265] shadow-[0_10px_20px_rgba(255,183,213,0.3)]">
          DOUGH PLAY STUDIO // HANDMADE DIGITAL CLAY • 2026
        </footer>
      </div>
    </div>
  );
};
