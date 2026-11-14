import React, { useState } from 'react';
import { Sparkles, Music, Moon, Compass, Bell, BookOpen } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const GothicPage: React.FC = () => {
  const [activeOrganRegister, setActiveOrganRegister] = useState<string>('Vox Humana');

  const registers = [
    { name: 'Vox Humana 8\'', pipes: '61 Reed Pipes', tone: 'Solemn and choir-like human timbre' },
    { name: 'Principal 16\'', pipes: '32 Open Metal Pipes', tone: 'Monumental foundation resonance that rattles the stone nave' },
    { name: 'Trompette en Chamade 8\'', pipes: '61 Horizontal Brass', tone: 'Piercing ceremonial trumpet projected across the vault' },
    { name: 'Mixture IV-VI', pipes: '284 Small Tin Pipes', tone: 'Glittering celestial overtones mimicking starlight through stained glass' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0A0E] text-[#CBD5E1] font-serif selection:bg-[#5B0E2D] selection:text-white relative overflow-x-hidden">
      
      {/* Pointed Arch Architectural Silhouette Silhouette Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#6D28D9_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Nocturnal Church Bell Bar */}
        <header className="border-b border-[#5B0E2D]/40 pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#CBD5E1]/60 uppercase">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-[#6D28D9]" />
              <span>THE CHAPTER OF SAINT GUINEFORT • NOCTURNAL HOURS</span>
            </div>
            <div className="flex items-center gap-4">
              <span>CANONICAL OFFICE: COMPLINE (21:00)</span>
              <span className="text-[#5B0E2D] font-bold">PIPES ENGAGED</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-2">
            <div>
              <h1 className="text-4xl sm:text-6xl font-normal tracking-wider uppercase font-cinzel text-[#CBD5E1]">
                CATHEDRALIS <span className="text-[#5B0E2D]">NOIR</span>
              </h1>
              <div className="text-sm italic font-cormorant text-[#CBD5E1]/70 mt-1">
                Preservation Society for Nocturnal Liturgical Organ Music & Gothic Spires
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#CBD5E1]/60">REGISTER:</span>
              <span className="px-3 py-1 bg-[#5B0E2D] text-white text-xs font-cinzel font-bold border border-[#6D28D9]">
                {activeOrganRegister}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section: Pointed Lancet Arch & Sacred Resonances */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5B0E2D]/30 border border-[#5B0E2D] text-xs font-mono uppercase tracking-widest text-[#CBD5E1]">
              <Sparkles className="w-4 h-4 text-[#6D28D9]" />
              WHERE SHADOW CONSECRATES STONE
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal font-cinzel text-white leading-[1.05]">
              LANCET ARCHES, <br />
              <span className="text-[#5B0E2D] italic font-cormorant">
                BURGUNDY VELVET,
              </span> <br />
              PIPE REVERBERATION.
            </h2>

            <p className="text-lg text-[#CBD5E1]/80 max-w-xl font-cormorant leading-relaxed italic text-justify">
              In the cold darkness of the 13th-century vault, stone meets sound. 
              Our 9,000-pipe pneumatic organ shakes the basalt pillars, while the crimson light 
              of the northern rose window pierces through seven centuries of sacred incense.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#5B0E2D] text-white font-cinzel text-xs uppercase font-bold tracking-widest border border-[#6D28D9] hover:bg-[#6D28D9] transition-all shadow-[0px_0px_20px_rgba(91,14,45,0.4)] cursor-pointer">
                ENTER THE NOCTURNAL RECITAL
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1]/60">
                <Bell className="w-4 h-4 text-[#6D28D9]" />
                6.8 SECOND STONE NAVE REVERBERATION
              </div>
            </div>
          </div>

          {/* Hero Cathedral Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#121017] border-2 border-[#5B0E2D] p-4 shadow-[0px_0px_30px_rgba(109,40,217,0.15)] space-y-4 rounded-t-3xl">
              <ImageBox
                src={MEDIA_ASSETS.gothic.cathedralVault}
                alt="Gothic Cathedral Nave with Pointed Rib Vaults"
                aspectRatio="4/3"
                caption="High Gothic vaulted limestone nave with quadripartite ribbed groins and clerestory lancets."
                className="border border-[#5B0E2D]"
              />

              {/* Organ Pipe Register Selector */}
              <div className="space-y-2 pt-2 border-t border-[#5B0E2D]/40">
                <div className="text-[11px] font-mono text-[#CBD5E1]/70 uppercase tracking-widest">
                  ENGAGE ORGAN STOP:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {registers.map((reg, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveOrganRegister(reg.name)}
                      className={`p-2 border text-[11px] font-cinzel transition-all cursor-pointer flex justify-between items-center ${
                        activeOrganRegister === reg.name
                          ? 'border-[#6D28D9] bg-[#5B0E2D]/30 text-white'
                          : 'border-white/10 hover:border-white/30 text-[#CBD5E1]/60'
                      }`}
                    >
                      <span className="truncate">{reg.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gothic Sacred Marquee */}
        <section className="py-2 border-y border-[#5B0E2D]/40 bg-[#121017]">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.gothic.cathedralVault, title: 'Limestone Rib Vault', tag: 'POINTED ARCH' },
              { src: MEDIA_ASSETS.gothic.stainedGlassWindow, title: 'Ruby Rose Window', tag: 'SAINTE-CHAPELLE' },
              { src: MEDIA_ASSETS.darkAcademia.oxfordCloister, title: 'Cloister Ambulatory', tag: 'QUADRIPARTITE' },
              { src: MEDIA_ASSETS.darkLuxury.obsidianLounge, title: 'Crypt of Basalt', tag: 'COMPLINE' }
            ]}
          />
        </section>

        {/* Cathedral Architectural Chambers Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-cinzel uppercase text-white">
              SACRED CHAMBERS & LITURGY ARCHIVE
            </h2>
            <div className="h-0.5 flex-1 bg-[#5B0E2D]/40" />
            <span className="text-xs font-mono text-[#6D28D9]">BASILIQUE DE SAINT-DENIS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.gothic.cathedralVault,
                title: 'High Nave Vaults',
                subtitle: 'Quadripartite limestone rib groins',
                category: 'ARCHITECTURE'
              },
              {
                src: MEDIA_ASSETS.gothic.stainedGlassWindow,
                title: 'Triforium Rose Window',
                subtitle: 'Cobalt and ruby stained glass',
                category: 'GLAZING'
              },
              {
                src: MEDIA_ASSETS.darkAcademia.oxfordCloister,
                title: 'Monastery Ambulatory',
                subtitle: 'Flying buttresses and cloister columns',
                category: 'CLOISTER'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#5B0E2D]/30 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#CBD5E1]/50">
          <div>
            CATHEDRALIS NOIR // LITURGICAL REPERTORY SOCIETY
          </div>
          <div>
            PRESERVING SACRED ACOUSTIC SACRAMENTS • 1220–2026
          </div>
        </footer>

      </div>
    </div>
  );
};
