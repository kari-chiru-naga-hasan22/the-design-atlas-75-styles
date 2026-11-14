import React, { useState } from 'react';
import { ArrowRight, Compass, Shield, Wind, Sparkles, Coffee } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const JapandiPage: React.FC = () => {
  const [selectedWood, setSelectedWood] = useState<'oak' | 'walnut' | 'hinoki'>('oak');

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#2B2B28] font-sans selection:bg-[#C2A382] selection:text-white">
      {/* Shoji Slat Top Bar */}
      <div className="border-b border-[#E6DFD5] px-6 py-4 flex items-center justify-between text-xs font-mono text-[#78716C]">
        <div className="tracking-[0.2em] uppercase">MOKU ATELIER 木工所 • TOKYO & STOCKHOLM</div>
        <div className="hidden sm:block">SOLID WHITE OAK & NATURAL PAPERS</div>
      </div>

      {/* Japandi Serene Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#E6DFD5]">
        <div>
          <div className="text-3xl font-light font-cormorant tracking-tight text-[#2B2B28]">
            MOKU ATELIER
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#A89F91] uppercase mt-0.5">
            JAPANESE TRANQUILITY • SCANDINAVIAN CRAFT
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-[#78716C]">
          <a href="#furniture" className="hover:text-[#2B2B28] transition-colors">FURNITURE</a>
          <a href="#tea" className="hover:text-[#2B2B28] transition-colors">TEA WARES</a>
          <a href="#philosophy" className="hover:text-[#2B2B28] transition-colors">MA PHILOSOPHY</a>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-[#2B2B28] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#43433E] transition-colors cursor-pointer">
          Inquire Collection
        </button>
      </header>

      {/* Hero Section: Japanese-Nordic Serenity */}
      <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20 text-center space-y-6">
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#A89F91] block">
          THE ART OF QUIET LIVING (静寂)
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light font-cormorant text-[#2B2B28] leading-[1.08]">
          Warm Nordic timber meets <br />
          <span className="italic font-serif">the sacred stillness of Japan.</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-[#6E6A62] font-light leading-relaxed">
          Moku Atelier creates handcrafted solid oak furniture and architectural joinery. Every mortise and tenon joint is cut without screws or hardware, honoring five centuries of woodwork heritage.
        </p>

        {/* Wood Material Selector */}
        <div className="pt-2 flex justify-center gap-4 font-mono text-xs">
          {(['oak', 'walnut', 'hinoki'] as const).map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWood(w)}
              className={`px-4 py-2 rounded-full border transition-all cursor-pointer uppercase ${
                selectedWood === w
                  ? 'bg-[#C2A382] border-[#C2A382] text-white font-bold'
                  : 'border-[#E6DFD5] bg-white/60 text-[#78716C] hover:text-[#2B2B28]'
              }`}
            >
              Wood: {w}
            </button>
          ))}
        </div>

        {/* Hero Visual Composition: Kyoto Teahouse Minimalist Interior */}
        <div className="pt-6 max-w-4xl mx-auto p-4 bg-white border border-[#E6DFD5] rounded-3xl shadow-sm">
          <ImageBox
            src={MEDIA_ASSETS.japandi.zenInteriors}
            alt="Japandi Minimalist Interior with Oak Furniture and Diffused Natural Light"
            aspectRatio="16/9"
            rounded="2xl"
            caption="Tatami mats, unvarnished solid white oak, and diffused paper shoji daylight (Kyoto Studio)"
          />
        </div>
      </section>

      {/* Infinite Japandi Craft Marquee */}
      <section className="py-6 border-y border-[#E6DFD5] bg-white/50 my-8">
        <InfiniteImageMarquee
          speed="normal"
          images={[
            { src: MEDIA_ASSETS.japandi.zenInteriors, title: 'Kyoto Teahouse Joinery', tag: 'WHITE OAK' },
            { src: MEDIA_ASSETS.japandi.ceramicTeaware, title: 'Bizen Stoneware Chawan', tag: 'CERAMICS' },
            { src: MEDIA_ASSETS.scandinavian.copenhagenApartment, title: 'Nordic Sunlight Interior', tag: 'COPENHAGEN' },
            { src: MEDIA_ASSETS.wabiSabi.kintsugiBowl, title: 'Gold-Repaired Clay', tag: 'WABI-SABI' }
          ]}
        />
      </section>

      {/* Shoji Grid Architecture Section */}
      <section id="furniture" className="py-12 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-[#E6DFD5] pb-4">
          <div>
            <span className="text-xs font-mono text-[#A89F91] uppercase tracking-widest">TIMBER & CERAMIC EDITIONS</span>
            <h2 className="text-3xl sm:text-4xl font-light font-cormorant text-[#2B2B28] mt-1">
              Hand-Planed Joinery & Tableware
            </h2>
          </div>
          <span className="font-mono text-xs text-[#78716C]">SHOKUNIN STANDARD • TOKYO</span>
        </div>

        <ImageGallery
          columns={3}
          theme="minimal"
          items={[
            {
              src: MEDIA_ASSETS.japandi.ceramicTeaware,
              title: 'Hand-Thrown Tea Set',
              subtitle: 'Reduction-fired unglazed stoneware with tactile mineral salt texture',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.japandi.tatamiRoom,
              title: 'Shoji Slat Screen Space',
              subtitle: 'Acoustic calm and soft daylight filtration through handmade Mino washi paper',
              aspectRatio: '4/3'
            },
            {
              src: MEDIA_ASSETS.japandi.zenInteriors,
              title: 'Kyoto Low Lounge Frame',
              subtitle: 'Japanese mortise joinery in cured Hokkaido white oak with zero metal fasteners',
              aspectRatio: '4/3'
            }
          ]}
        />
      </section>

      {/* Japandi Footer */}
      <footer className="border-t border-[#E6DFD5] py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#78716C]">
        <div>MOKU ATELIER • MINATO-KU, TOKYO & SÖDERMALM, STOCKHOLM</div>
        <div>QUIET LIVING • © 2026 MOKU STUDIO</div>
      </footer>
    </div>
  );
};
