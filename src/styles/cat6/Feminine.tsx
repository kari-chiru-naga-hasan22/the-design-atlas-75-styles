import React, { useState } from 'react';
import { Heart, Sparkles, Droplets, ShoppingBag, ArrowRight, Flower2 } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const FemininePage: React.FC = () => {
  const [cartCount, setCartCount] = useState(1);

  return (
    <div className="min-h-screen bg-[#FDF2F4] text-[#831843] font-serif selection:bg-[#C08081] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Rose Top Banner */}
        <div className="text-center text-xs font-sans tracking-[0.25em] uppercase text-[#9D174D] border-b border-[#FBCFE8] pb-3">
          ORGANIC COLD-PRESSED BULGARIAN & MOROCCAN DAMASK ROSES • CLEAN BEAUTY
        </div>

        {/* Feminine Botanical Header */}
        <header className="flex flex-wrap items-center justify-between gap-6 py-4 border-b border-[#FBCFE8]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F472B6] to-[#FDA4AF] flex items-center justify-center text-white text-2xl shadow-sm">
              🌹
            </div>
            <div>
              <div className="text-3xl font-bold font-playfair tracking-tight text-[#831843]">
                Rose Privée
              </div>
              <div className="text-[10px] font-sans tracking-widest text-[#BE185D] uppercase">
                HAUTE BOTANIQUE & ELIXIRS DE BEAUTÉ
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-sans tracking-widest uppercase text-[#9D174D]">
            <a href="#serums" className="hover:text-[#831843] transition-colors">THE ROSE ELIXIR</a>
            <a href="#botanicals" className="hover:text-[#831843] transition-colors">ORGANIC HARVEST</a>
            <a href="#rituals" className="hover:text-[#831843] transition-colors">SKINCARE RITUALS</a>
          </div>

          <button 
            onClick={() => setCartCount(c => c + 1)}
            className="px-5 py-2.5 rounded-full bg-[#831843] hover:bg-[#9D174D] text-white font-sans text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            <span>Bag ({cartCount})</span>
          </button>
        </header>

        {/* Hero Section: Romantic Petal Blush & Dewy Radiance */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F3] border border-[#F472B6]/40 text-[#9D174D] text-xs font-sans uppercase tracking-widest">
            <Sparkles size={14} className="text-[#C08081]" /> HARVESTED AT DAWN IN THE VALLEY OF ROSES
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-playfair italic text-[#831843] leading-tight">
            Radiant petal drops for luminous skin.
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#9D174D]/80 leading-relaxed font-sans font-light">
            Every bottle requires 10,000 freshly gathered Damask rose petals, cold-distilled within three hours of dawn plucking. Infusing your skin with precious natural antioxidants and dewy morning glow.
          </p>

          {/* Hero Visual Composition: Damask Rose & Glass Flacon */}
          <div className="pt-6 max-w-2xl mx-auto p-4 bg-white border border-[#FBCFE8] rounded-3xl shadow-sm">
            <ImageBox
              src={MEDIA_ASSETS.feminine.roseBotanical}
              alt="Freshly Gathered Organic Pink Damask Rose with Morning Dewdrops"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Rosa damascena blossoms hand-harvested at dawn in the Valley of the Roses (Bulgaria)"
            />
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <button 
              onClick={() => setCartCount(c => c + 1)}
              className="px-8 py-3.5 rounded-full bg-[#831843] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#9D174D] transition-all cursor-pointer"
            >
              Acquire Rose Nectar ($88)
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white border border-[#FBCFE8] text-[#831843] font-sans font-bold text-xs uppercase tracking-wider hover:bg-pink-50 transition-all cursor-pointer">
              Explore Botanical Harvest
            </button>
          </div>
        </section>

        {/* Infinite Rose Petal Marquee */}
        <div className="rounded-2xl border border-[#FBCFE8] overflow-hidden bg-white/70 p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.feminine.roseBotanical, title: 'Damask Rose Harvest', tag: 'KAZANLAK' },
              { src: MEDIA_ASSETS.feminine.perfumeBottle, title: 'Fluted Essence Flacon', tag: 'HAUTE PARFUM' },
              { src: MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon, title: 'Crystal Dropper Vessel', tag: 'COLD DISTILLED' },
              { src: MEDIA_ASSETS.cottagecore.wildflowers, title: 'Botanical Herbarium', tag: 'ANTIOXIDANTS' }
            ]}
          />
        </div>

        {/* 3 Feminine Skincare Elixirs Gallery */}
        <section id="serums" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#FBCFE8] pb-3">
            <h3 className="text-3xl font-playfair text-[#831843]">The Rose Skincare Ritual</h3>
            <span className="font-sans text-xs text-[#BE185D] tracking-wider uppercase">CLEAN BOTANICAL LAB</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.feminine.perfumeBottle,
                title: 'Rosehip Seed Elixir Flacon',
                subtitle: 'Rich in pro-vitamin A and cold-pressed essential fatty acids restoring skin glow',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.glassLuxury.flutedPerfumeFlacon,
                title: 'Dewy Hydrosol Dropper',
                subtitle: 'Steam-distilled organic rose water infused with multi-weight hyaluronic acid',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.feminine.roseBotanical,
                title: 'Dawn Damask Blossom',
                subtitle: 'Pure petal extracts offering antioxidant defense against city pollution and fatigue',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Feminine Footer */}
        <footer className="p-8 rounded-3xl bg-white border border-[#FBCFE8] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#9D174D] gap-4">
          <div>ROSE PRIVÉE HAUTE BOTANIQUE • PARIS & PROVENCE</div>
          <div>CLEAN LUXURY SKINCARE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
