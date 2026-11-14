import React, { useState } from 'react';
import { Sun, Waves, Palmtree, Compass, Calendar, ArrowRight, Check } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const TropicalPage: React.FC = () => {
  const [villaReserved, setVillaReserved] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBEB] text-[#044E3B] font-sans selection:bg-[#FB923C] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Tropical Top Veranda Bar */}
        <div className="flex items-center justify-between text-xs font-mono font-bold text-[#D97706] uppercase tracking-widest border-b border-[#FDE68A] pb-3">
          <div>🌴 PAPAGAYO PENINSULA, COSTA RICA • PACIFIC SANCTUARY</div>
          <div className="hidden sm:block">AVERAGE WATER TEMP: 28°C • SUNNY 320 DAYS</div>
        </div>

        {/* Tropical Header */}
        <header className="flex flex-wrap items-center justify-between gap-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0EA5E9] to-[#10B981] text-white flex items-center justify-center text-2xl shadow-lg shadow-teal-500/20">
              🌺
            </div>
            <div>
              <div className="text-3xl font-black font-dm-serif tracking-tight text-[#064E3B]">
                PALMA PARADISO
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#EA580C] uppercase font-bold">
                ECO-LUXURY RAINFOREST VILLAS & SURF RESERVE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#064E3B]">
            <a href="#villas" className="hover:text-[#EA580C] transition-colors">Rainforest Villas</a>
            <a href="#ocean" className="hover:text-[#EA580C] transition-colors">Private Surf Cove</a>
            <a href="#wellness" className="hover:text-[#EA580C] transition-colors">Open-Air Spa</a>
          </div>

          <button 
            onClick={() => setVillaReserved(true)}
            className="px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#c2410c] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer flex items-center gap-2"
          >
            {villaReserved ? (
              <>
                <Check size={14} /> Villa Selected! 🍍
              </>
            ) : (
              'Reserve Ocean Villa'
            )}
          </button>
        </header>

        {/* Hero Section: Turquoise Ocean & Papaya Gold */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] text-[#B45309] text-xs font-mono font-bold uppercase tracking-wider">
            <Sun size={14} className="text-[#EA580C]" /> PRIVATE OCEAN COVE SANCTUARY
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal font-dm-serif text-[#064E3B] leading-none">
            Where lush jungle <br />
            <span className="text-[#0EA5E9] italic font-serif">meets warm turquoise.</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#065F46] leading-relaxed font-light">
            Twelve secluded treehouse villas nestled between virgin canopy rainforest and private Pacific surf breaks. Wake to howler monkey calls, plunge into saltwater pools, and dine on fresh papaya under golden hour skies.
          </p>

          {/* Hero Visual Composition: Turquoise Tropical Beach */}
          <div className="pt-6 max-w-4xl mx-auto p-4 bg-white border border-[#FDE68A] rounded-3xl shadow-lg">
            <ImageBox
              src={MEDIA_ASSETS.tropical.caribbeanBeach}
              alt="Turquoise Caribbean Ocean with Palm Trees and White Sand"
              aspectRatio="16/9"
              rounded="2xl"
              caption="Protected marine sanctuary cove with private access coral reef and turquoise lagoons"
            />
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-[#064E3B] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#022c22] transition-all cursor-pointer flex items-center gap-2">
              Browse Available Villas <ArrowRight size={14} />
            </button>
            <button className="px-8 py-4 rounded-full bg-white border border-[#FDE68A] text-[#064E3B] font-bold text-xs uppercase tracking-wider hover:bg-amber-50 transition-all cursor-pointer">
              Explore Eco-Sanctuary Charter
            </button>
          </div>
        </section>

        {/* Infinite Tropical Marquee */}
        <div className="rounded-2xl border border-[#FDE68A] overflow-hidden bg-white/70 p-2">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.tropical.caribbeanBeach, title: 'Papagayo Turquoise Cove', tag: 'SURF RESERVE' },
              { src: MEDIA_ASSETS.tropical.bambooResort, title: 'Bamboo Eco-Pavilion', tag: 'TREEHOUSE' },
              { src: MEDIA_ASSETS.biophilic.rainforestCanopy, title: 'Virgin Jungle Canopy', tag: 'COSTA RICA' },
              { src: MEDIA_ASSETS.bohemian.moroccanRiad, title: 'Open-Air Sun Salons', tag: 'COCONUT PALMS' }
            ]}
          />
        </div>

        {/* 3 Tropical Sanctuary Features Gallery */}
        <section id="villas" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-[#FDE68A] pb-3">
            <h3 className="text-3xl font-bold font-dm-serif text-[#064E3B]">Sanctuary Villas & Ocean Hideaways</h3>
            <span className="font-mono text-xs text-[#EA580C] font-bold">12 EXCLUSIVE RESIDENCES</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.tropical.bambooResort,
                title: 'Canopy Teak Treehouse',
                subtitle: 'Elevated 18 meters above the forest floor on sustainable teak pillars with copper tub',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.biophilic.rainforestCanopy,
                title: 'Howler Monkey Forest Sanctuary',
                subtitle: 'Pristine biosphere reserve with private wooden hanging bridges and natural waterfalls',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.tropical.caribbeanBeach,
                title: 'Secret Reef Point Break',
                subtitle: 'Uncrowded peeling lefts over sand and coral, steps from your private sun deck',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Tropical Footer */}
        <footer className="p-8 rounded-3xl bg-white border border-[#FDE68A] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#065F46] gap-4">
          <div>PALMA PARADISO ECO-SANCTUARY • PAPAGAYO PENINSULA, GUANACASTE</div>
          <div>SUSTAINABLE RAINFOREST HOSPITALITY • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
