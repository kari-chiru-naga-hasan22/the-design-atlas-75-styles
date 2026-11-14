import React, { useState } from 'react';
import { Sun, Flame, Wind, Coffee, Heart } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ScandinavianPage: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(3);

  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-sans selection:bg-[#D97706] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Crisp Nordic Header */}
        <header className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#D97706] text-white flex items-center justify-center font-bold text-xl shadow-sm">
              🕯️
            </div>
            <div>
              <div className="text-2xl font-bold font-plus-jakarta tracking-tight text-[#0F172A]">
                NORDIC HYGGE
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
                COPENHAGEN LIGHT & COZY INTERIORS
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#475569]">
            <a href="#lighting" className="hover:text-[#D97706] transition-colors">Warm Lighting</a>
            <a href="#wool" className="hover:text-[#D97706] transition-colors">Gotland Wool</a>
            <a href="#birch" className="hover:text-[#D97706] transition-colors">Birch Timber</a>
          </div>

          <button 
            onClick={() => setCandlesLit(c => (c % 5) + 1)}
            className="px-4 py-2 rounded-full bg-white border border-[#CBD5E1] text-xs font-semibold text-[#0F172A] hover:bg-amber-50 hover:border-[#D97706] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Light Candle:</span>
            <span className="text-[#D97706]">🔥 {candlesLit}</span>
          </button>
        </header>

        {/* Hero Section: Crisp Light & Functional Coziness */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-semibold">
            <Sun size={14} /> DESIGNED FOR 300 DAYS OF LONG WINTERS
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-plus-jakarta text-[#0F172A] leading-tight">
            Warm ambient light. <br />
            <span className="text-[#D97706]">Functional simplicity.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-light max-w-xl mx-auto">
            When Nordic winter nights descend at 3:00 PM, good lighting is not a luxury; it is emotional sustenance. Natural blond birch, warm 2700K illumination, and pure wool blankets.
          </p>

          {/* Hero Visual Composition: Copenhagen Apartment Interior */}
          <div className="pt-6 max-w-4xl mx-auto p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl shadow-sm">
            <ImageBox
              src={MEDIA_ASSETS.scandinavian.copenhagenApartment}
              alt="Sunlit Copenhagen Apartment Living Room with Blond Wood and Wool Throws"
              aspectRatio="16/9"
              rounded="2xl"
              caption="High ceilings, herringbone oak floors, and large triple-glazed windows welcoming Nordic sun"
            />
          </div>

          <div className="pt-6 flex justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#334155] text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer">
              Explore Copenhagen Showroom
            </button>
            <button className="px-8 py-3.5 rounded-full bg-[#F1F5F9] text-[#0F172A] font-semibold text-xs uppercase tracking-wider hover:bg-[#E2E8F0] transition-all cursor-pointer">
              The Hygge Manifesto
            </button>
          </div>
        </section>

        {/* Infinite Scandinavian Marquee */}
        <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden bg-[#F8FAFC] p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.scandinavian.copenhagenApartment, title: 'Copenhagen Sunlit Salon', tag: 'DANISH MODERN' },
              { src: MEDIA_ASSETS.scandinavian.hyggeWool, title: 'Gotland Lambswool Weave', tag: 'HYGGE' },
              { src: MEDIA_ASSETS.japandi.zenInteriors, title: 'Blond Ash Dining Table', tag: 'FSC TIMBER' },
              { src: MEDIA_ASSETS.softMinimalism.cashmereLounge, title: 'Cozy Reading Nook', tag: 'STOCKHOLM' }
            ]}
          />
        </div>

        {/* 3 Scandinavian Core Comforts Gallery */}
        <section id="lighting" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#E2E8F0] pb-3">
            <h3 className="text-2xl font-bold font-plus-jakarta text-[#0F172A]">Core Nordic Living Elements</h3>
            <span className="text-xs font-mono text-[#64748B]">COPENHAGEN EDITION</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.scandinavian.hyggeWool,
                title: 'Organic Gotland Wool',
                subtitle: 'Unbleached natural wool sheared from Swedish island sheep, spun in small batches',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.japandi.zenInteriors,
                title: 'Pendant Luminescence',
                subtitle: 'Glare-free multi-tier spun aluminium shades reflecting 2700K candlelight rays',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.scandinavian.copenhagenApartment,
                title: 'Blond Birch Architecture',
                subtitle: 'Sustainable Nordic timber conditioned with white vegetable soap and natural beeswax',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Scandinavian Footer */}
        <footer className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <div>NORDIC HYGGE STUDIO • COPENHAGEN & STOCKHOLM</div>
          <div>FUNCTIONAL LIGHT & MINIMAL WARMTH • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
