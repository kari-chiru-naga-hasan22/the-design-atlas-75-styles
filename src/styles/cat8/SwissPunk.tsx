import React, { useState } from 'react';
import { ArrowUpRight, Scissors, Film, Sliders, Hash } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SwissPunkPage: React.FC = () => {
  const [gridFractureLevel, setGridFractureLevel] = useState<number>(2);

  return (
    <div className="min-h-screen bg-[#D1D5DB] text-[#111827] font-sans selection:bg-[#EA580C] selection:text-white relative overflow-hidden">
      {/* Photostat Grain & Misregistered Rules Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="h-full w-full bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:12px_12px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Photostat Header with Exposed Film Edge Markings */}
        <header className="border-b-4 border-[#111827] pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-[#111827]">
            <div className="flex items-center gap-2">
              <span className="bg-[#111827] text-white px-2 py-0.5 font-bold">KUNSTGEWERBESCHULE BASEL</span>
              <span>WEINGART TYPOGRAFIE 1972</span>
            </div>
            <div className="flex items-center gap-4">
              <span>EXPOSURE TIME: 0.4s</span>
              <span className="text-[#EA580C] font-bold">OFFSET: +3.5mm</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-2">
            <div>
              <div className="text-4xl sm:text-6xl font-black tracking-widest uppercase font-mono leading-none">
                SWISS <span className="text-[#EA580C] underline decoration-4">PUNK</span>
              </div>
              <div className="text-sm font-mono tracking-widest text-[#111827]/70 uppercase mt-2">
                BREAKING THE RECTILINEAR GRID FROM WITHIN • NEW WAVE TYPOGRAPHY
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono">GRID DESTRUCTION:</span>
              {[1, 2, 3].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setGridFractureLevel(lvl)}
                  className={`px-3 py-1 text-xs font-mono font-bold border-2 border-[#111827] transition-all cursor-pointer ${
                    gridFractureLevel === lvl ? 'bg-[#EA580C] text-white' : 'bg-white text-black hover:bg-gray-200'
                  }`}
                >
                  STAGE {lvl}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Hero Section: Stepped Letterforms & Broken Baselines */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block bg-[#EA580C] text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 transform -rotate-1">
              WOLFGANG WEINGART EXPERIMENTAL TYPOGRAPHY
            </div>

            {/* Stepped Typography Display */}
            <div className="space-y-2 select-none">
              <div className={`text-4xl sm:text-7xl font-black uppercase tracking-[0.2em] transition-transform ${
                gridFractureLevel >= 2 ? 'translate-x-4' : ''
              }`}>
                DISCIPLINE
              </div>
              <div className={`text-4xl sm:text-7xl font-black uppercase tracking-[0.3em] text-[#EA580C] transition-transform ${
                gridFractureLevel >= 1 ? 'translate-x-12 -rotate-1' : ''
              }`}>
                FRACTURED
              </div>
              <div className={`text-4xl sm:text-7xl font-black uppercase tracking-[0.1em] text-white bg-[#111827] px-4 inline-block transition-transform ${
                gridFractureLevel >= 3 ? 'translate-x-24 rotate-2' : ''
              }`}>
                BY ANARCHY
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#111827]/90 max-w-2xl font-mono leading-relaxed">
              Why must type always march in rigid rectangular rows? Weingart took Swiss typography 
              and cut it with scissors, stepped the baselines, layered positive and negative film, 
              and made the cold grid vibrate with raw human tension.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#111827] text-white font-mono text-xs uppercase font-bold tracking-widest hover:bg-[#EA580C] transition-colors border-2 border-[#111827] shadow-[4px_4px_0px_#EA580C] cursor-pointer">
                EXAMINE PHOTOSTAT PLATES
              </button>
              <div className="flex items-center gap-2 text-xs font-mono">
                <Film className="w-4 h-4 text-[#EA580C]" />
                HALFTONE SCREEN: 85 LPI KODAK SAFETY FILM
              </div>
            </div>
          </div>

          {/* Hero Photostat Film Media Container */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#111827] text-white p-4 border-4 border-white shadow-2xl space-y-4 transform rotate-2">
              <div className="flex justify-between items-center text-xs font-mono text-[#EA580C]">
                <span>FILM STRIP 35MM</span>
                <span>NEG. 1974 // BASEL</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.swissPunk.photostatFilm}
                alt="Swiss Punk Photostat Negative Film Proof"
                aspectRatio="4/3"
                caption="Photostat darkroom film layering, tape collage, and deliberately misaligned halftone screen angles."
                className="border border-white/20"
              />

              <div className="font-mono text-xs space-y-1 text-white/80 border-t border-white/20 pt-2">
                <div className="text-sm font-bold text-white uppercase">TYPOGRAPHISCHE MONATSBLÄTTER</div>
                <div className="text-[10px] text-white/50">
                  "Typography is not an exercise in mathematics. It is an optic language."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Swiss Punk Marquee */}
        <section className="py-2 border-y-4 border-[#111827] bg-white">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.swissPunk.photostatFilm, title: 'Darkroom Film Proof', tag: 'WEINGART' },
              { src: MEDIA_ASSETS.swissPunk.weingartZine, title: 'Stepped Text Proof', tag: 'TM 1974' },
              { src: MEDIA_ASSETS.swiss.gridPoster1, title: 'Classical Grid Fracture', tag: 'BASEL' },
              { src: MEDIA_ASSETS.avantGarde.spatialAbstract, title: 'Photolitho Monoprint', tag: 'NEW WAVE' }
            ]}
          />
        </section>

        {/* 4 Swiss Punk Principles */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-widest font-mono">
              THE WEINGART SYNTAX
            </h2>
            <div className="h-1 flex-1 bg-[#111827]" />
            <span className="text-xs font-mono font-bold">1970–1985</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'STEPPED LETTERFORMS',
                desc: 'Words staggered diagonally across the line like musical notes in a free-form jazz score.',
                tag: 'Anti-Baseline'
              },
              {
                title: 'EXTREME LETTER-SPACING',
                desc: 'Expanding letter spacing until each glyph stands alone as an independent graphic monument.',
                tag: 'Tracking +400'
              },
              {
                title: 'HALFTONE OVERLAYS',
                desc: 'Layering coarse mechanical halftone screen film to create moiré interference patterns.',
                tag: 'Photostat Moiré'
              },
              {
                title: 'COLLAGED TAPE & RULES',
                desc: 'Exposing strips of black graphic charting tape, film edges, and hand-cut masking paper.',
                tag: 'Physical Process'
              }
            ].map((principle, idx) => (
              <div 
                key={idx}
                className="bg-white border-2 border-[#111827] p-5 shadow-[4px_4px_0px_#111827] flex flex-col justify-between hover:bg-[#EA580C] hover:text-white transition-all group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-[#EA580C] group-hover:text-white">#{idx + 1}</span>
                    <span className="opacity-70">{principle.tag}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase font-mono tracking-wider">
                    {principle.title}
                  </h3>
                  <p className="text-xs font-mono leading-relaxed opacity-90 font-sans">
                    {principle.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-current/20 text-[10px] font-mono">
                  BASEL CLASSICAL VARIATION
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photostat Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-4 border-[#111827] pb-3">
            <h2 className="text-2xl font-black font-mono uppercase">BASEL EXPERIMENTAL ARCHIVE</h2>
            <span className="text-xs font-mono font-bold text-[#EA580C]">KUNSTGEWERBESCHULE PLATES</span>
          </div>

          <ImageGallery
            columns={3}
            theme="swiss"
            items={[
              {
                src: MEDIA_ASSETS.swissPunk.photostatFilm,
                title: 'Photostat Film Strips',
                subtitle: 'Orthochromatic negative exposure',
                category: 'FILM PROOF'
              },
              {
                src: MEDIA_ASSETS.swissPunk.weingartZine,
                title: 'TM Magazine Covers',
                subtitle: 'Stepped typesetting by Wolfgang Weingart',
                category: 'TYPOGRAPHY'
              },
              {
                src: MEDIA_ASSETS.swiss.gridPoster1,
                title: 'New Wave Poster',
                subtitle: 'April Greiman & Basel Alumni',
                category: 'POSTER'
              }
            ]}
          />
        </section>

        {/* Typographic Manifesto Banner */}
        <div className="bg-[#111827] text-white p-8 sm:p-12 border-4 border-[#111827] text-center space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#EA580C]">
            MANIFESTO PROPOSITION NO. 7
          </div>
          <h3 className="text-2xl sm:text-4xl font-mono font-black uppercase tracking-widest max-w-3xl mx-auto">
            "WHAT GOOD IS READABILITY IF NOTHING DRIVES YOU TO READ IT?"
          </h3>
          <div className="pt-2 text-xs font-mono text-white/60">
            WOLFGANG WEINGART // TYPOGRAPHIC REBEL // 1941–2021
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t-4 border-[#111827] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase">
          <div>
            WEINGART NEW WAVE // TYPOGRAFIE BASEL
          </div>
          <div>
            BREAKING RULES RESPONSIBLY SINCE 1972
          </div>
        </footer>

      </div>
    </div>
  );
};
