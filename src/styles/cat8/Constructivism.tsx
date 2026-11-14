import React, { useState } from 'react';
import { ArrowUpRight, Flame, Megaphone, Compass, Radio, Disc3, ShieldAlert } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const ConstructivismPage: React.FC = () => {
  const [activeManifesto, setActiveManifesto] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#F3E8D0] text-[#111827] font-sans selection:bg-[#DC2626] selection:text-white overflow-hidden relative">
      {/* Dynamic Constructivist Diagonal Bars Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[140vw] h-28 bg-[#DC2626] -rotate-12" />
        <div className="absolute top-1/3 -left-40 w-[140vw] h-14 bg-black -rotate-12" />
        <div className="absolute bottom-20 -left-40 w-[140vw] h-40 bg-[#DC2626] -rotate-12" />
        <div className="absolute -bottom-10 -left-40 w-[140vw] h-8 bg-black -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
        {/* Top Constructivist Banner */}
        <div className="bg-[#111827] text-white p-3 border-b-4 border-[#DC2626] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#DC2626] px-2 py-0.5 text-xs font-black tracking-widest uppercase">
              MOSCOW • 1921
            </span>
            <span className="text-xs font-mono tracking-wider text-[#F3E8D0]">
              COMMISSARIAT OF VISUAL PRODUCTION & MASS PROPAGANDA
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1.5 text-[#DC2626]">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-ping" />
              PRESS ACTIVE
            </span>
            <span>ISSUE NO. 04</span>
          </div>
        </div>

        {/* Diagonal Hero Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DC2626] text-white font-mono text-xs uppercase font-bold tracking-widest transform -rotate-2">
              <Megaphone className="w-4 h-4" />
              ART INTO TECHNOLOGY • COMRADE PRODUCERS
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88] text-[#111827]">
              RODCHENKO <br />
              <span className="text-[#DC2626] inline-block transform -rotate-1">AVANT-GARDE</span> <br />
              <span className="bg-[#111827] text-[#F3E8D0] px-3 inline-block">MANIFESTO</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold max-w-2xl text-[#111827]/90 leading-snug">
              Down with aesthetic contemplation. We declare war on decorative easel art. 
              Construction is the modern organization of materials, gears, and typographic force.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#manifesto"
                className="px-8 py-4 bg-[#DC2626] text-white font-black text-sm uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_#111827]"
              >
                JOIN THE FACTORY COLLECTIVE <ArrowUpRight className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setActiveManifesto((prev) => (prev % 3) + 1)}
                className="px-6 py-4 bg-[#F3E8D0] text-[#111827] font-mono text-xs uppercase font-bold tracking-widest border-2 border-black hover:bg-white transition-colors cursor-pointer"
              >
                CYCLE THESES [THESIS {activeManifesto}/3]
              </button>
            </div>
          </div>

          {/* Constructivist Hero Photomontage & ImageBox */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto bg-[#111827] border-4 border-black p-4 text-[#F3E8D0] transform rotate-2 shadow-[8px_8px_0px_#DC2626]">
              <ImageBox
                src={MEDIA_ASSETS.constructivism.redTowerSteel}
                alt="Shukhov Radio Tower / Industrial Steel Construct"
                aspectRatio="4/3"
                caption="Tatlin's 3rd International & Shukhov Diagrid Steel Mast (1922). Tectonic engineering."
                className="border-2 border-[#DC2626]"
              />

              <div className="border-t-2 border-[#DC2626] pt-3 mt-4 flex justify-between items-center text-xs font-mono">
                <span>PLATE 09/A</span>
                <span className="font-bold text-[#DC2626]">LISSITZKY AXIOM</span>
              </div>
            </div>
          </div>
        </header>

        {/* Constructivist Industrial Marquee */}
        <section className="py-2 border-y-4 border-black bg-white">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.constructivism.redTowerSteel, title: 'Steel Hyperboloid Mast', tag: 'SHUKHOV' },
              { src: MEDIA_ASSETS.constructivism.industrialGears, title: 'Industrial Heavy Gears', tag: 'FAKTURA' },
              { src: MEDIA_ASSETS.bauhaus.dessauBuilding, title: 'Vkhutemas Workshop', tag: 'MOSCOW' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Reinforced Tectonics', tag: 'MATERIAL' }
            ]}
          />
        </section>

        {/* The Three Constructivist Theses */}
        <section id="manifesto" className="pt-4">
          <div className="bg-[#111827] text-white p-6 sm:p-10 border-4 border-black">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-2 border-[#DC2626] pb-6 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#DC2626]">
                  FOUNDATIONAL DOCTRINE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                  THE THREE PRINCIPLES OF CONSTRUCTION
                </h2>
              </div>
              <span className="text-sm font-mono bg-[#DC2626] text-white px-3 py-1 font-bold">
                ADOPTED 1921
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  num: 'I',
                  title: 'TEKTONIKA',
                  desc: 'The ideological and structural fusion of communism with industrial material necessity. Form arising strictly from purpose.',
                  sub: 'Material + Function'
                },
                {
                  id: 2,
                  num: 'II',
                  title: 'KONSTRUKTSIYA',
                  desc: 'The active mechanical organization of raw matter. Forging bridges, radio towers, book covers, and textile looms into living tools.',
                  sub: 'Dynamism + Steel'
                },
                {
                  id: 3,
                  num: 'III',
                  title: 'FAKTURA',
                  desc: 'The deliberate handling of physical textures: cold sheet iron, unbleached canvas, heavy letterpress ink, photolithography.',
                  sub: 'Tactile Materiality'
                }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveManifesto(item.id)}
                  className={`p-6 border-2 transition-all cursor-pointer ${
                    activeManifesto === item.id
                      ? 'border-[#DC2626] bg-[#DC2626]/10 translate-x-1 -translate-y-1'
                      : 'border-white/20 hover:border-[#DC2626]'
                  }`}
                >
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="text-4xl font-black text-[#DC2626]">{item.num}</span>
                    <span className="text-xs font-mono text-[#F3E8D0]/60 uppercase">{item.sub}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-sm text-[#F3E8D0]/80 leading-relaxed font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Production Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#111827]">
              VKHUTEMAS WORKSHOP ARCHIVES
            </h2>
            <div className="h-1 flex-1 bg-black" />
            <span className="text-xs font-mono uppercase font-bold">1921–1925</span>
          </div>

          <ImageGallery
            columns={3}
            theme="swiss"
            items={[
              {
                src: MEDIA_ASSETS.constructivism.redTowerSteel,
                title: 'Diagrid Mast',
                subtitle: 'Shukhov Tower 160m',
                category: 'ENGINEERING'
              },
              {
                src: MEDIA_ASSETS.constructivism.industrialGears,
                title: 'Machined Pinions',
                subtitle: 'Lathe Production Output',
                category: 'FAKTURA'
              },
              {
                src: MEDIA_ASSETS.bauhaus.dessauBuilding,
                title: 'Factory Studio',
                subtitle: 'Polytechnic collective space',
                category: 'TEKTONIKA'
              }
            ]}
          />
        </section>

        {/* Diagonal Callout Banner */}
        <div className="relative bg-[#DC2626] text-white p-8 sm:p-12 border-4 border-black text-center space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#F3E8D0]">
            ANNOUNCING THE ALL-UNION TYPOGRAPHIC GUILD
          </div>
          <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto">
            "OUR APPARATUS IS THE PRINTING PRESS. OUR AMMUNITION IS TYPE."
          </h3>
          <div className="pt-4">
            <button className="px-8 py-3.5 bg-black text-[#F3E8D0] font-black uppercase text-sm tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer">
              ORDER ARCHIVAL FACSIMILE PORTFOLIO
            </button>
          </div>
        </div>

        {/* Constructivist Footer */}
        <footer className="border-t-4 border-black pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs font-mono uppercase">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#DC2626]" />
            <span className="font-bold">RODCHENKO AVANT-GARDE ARCHIVES</span>
          </div>
          <div className="text-center sm:text-right text-[#111827]/70">
            PRINTED UNDER THE SUPERVISION OF THE METRIC COMMISSION • 1921–2026
          </div>
        </footer>
      </div>
    </div>
  );
};
