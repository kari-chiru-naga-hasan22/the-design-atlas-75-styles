import React, { useState } from 'react';
import { ArrowUpRight, Grid, Eye, Check, Sliders, Layers } from 'lucide-react';
import { ImageBox, EditorialImage, ImageGallery, BeforeAfterSlider, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SwissPage: React.FC = () => {
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'posters' | 'architecture'>('all');

  const posters = [
    {
      title: 'MUSICA VIVA ZÜRICH',
      subtitle: 'Josef Müller-Brockmann, 1958 • Tonhalle Concert Poster',
      category: 'CONCERT POSTER',
      year: '1958',
      src: MEDIA_ASSETS.swiss.gridPoster1,
      aspectRatio: '3/4' as const
    },
    {
      title: 'DAS WEISSE BAND',
      subtitle: 'Armin Hofmann, 1959 • Stadttheater Basel Exhibition',
      category: 'THEATRE GRAPHIC',
      year: '1959',
      src: MEDIA_ASSETS.swiss.gridPoster2,
      aspectRatio: '3/4' as const
    },
    {
      title: 'NEUE GRAPHIK ISSUE 08',
      subtitle: 'Hans Neuburg & Richard P. Lohse • Zurich Review',
      category: 'EDITORIAL COVER',
      year: '1961',
      src: MEDIA_ASSETS.swiss.typographicStudy,
      aspectRatio: '3/4' as const
    }
  ];

  const marqueePosters = [
    { title: 'ZÜRICH TONHALLE 1958', src: MEDIA_ASSETS.swiss.gridPoster1, tag: 'CONCERT' },
    { title: 'BASEL KUNSTHALLE 1964', src: MEDIA_ASSETS.swiss.gridPoster2, tag: 'EXHIBIT' },
    { title: 'BAUHAUS DESSAU 1928', src: MEDIA_ASSETS.swiss.buildingFacade, tag: 'ARCH' },
    { title: 'CONCRETE MONOLITH', src: MEDIA_ASSETS.swiss.concreteStair, tag: 'STRUCTURE' },
    { title: 'MAX BILL GEOMETRY', src: MEDIA_ASSETS.swiss.geometryDetail, tag: 'SCULPTURE' }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-sans selection:bg-[#FF3B30] selection:text-white relative">
      
      {/* Interactive Swiss Grid Overlay for Testing / Architectural Inspection */}
      {showGridOverlay && (
        <div className="fixed inset-0 pointer-events-none z-50 grid grid-cols-12 gap-0 border-r border-[#FF3B30]/30 opacity-40">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-[#FF3B30] h-full flex flex-col justify-between p-1">
              <span className="text-[9px] font-mono font-bold text-[#FF3B30]">COL_{i + 1}</span>
              <span className="text-[9px] font-mono font-bold text-[#FF3B30] text-right">8.33%</span>
            </div>
          ))}
        </div>
      )}

      {/* Swiss Red Mathematical Header Rule */}
      <div className="h-3 bg-[#FF3B30] w-full" />

      {/* Strict Swiss Grid Navigation */}
      <nav className="border-b border-black grid grid-cols-12 text-xs font-mono uppercase tracking-widest divide-x divide-black bg-white sticky top-0 z-30">
        <div className="col-span-12 md:col-span-5 p-4 font-bold flex items-center justify-between">
          <span>NEUE TYPOGRAFIE ZÜRICH // ARCHIV</span>
          <span className="text-[#FF3B30]">CH-8001</span>
        </div>
        <div 
          onClick={() => setShowGridOverlay(!showGridOverlay)}
          className={`col-span-4 md:col-span-3 p-4 flex items-center justify-between cursor-pointer transition-colors ${
            showGridOverlay ? 'bg-[#FF3B30] text-white font-bold' : 'hover:bg-black hover:text-white'
          }`}
        >
          <span>GRID LINES [{showGridOverlay ? 'ON' : 'OFF'}]</span>
          <Grid className="w-3.5 h-3.5" />
        </div>
        <div className="col-span-4 md:col-span-2 p-4 hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center justify-between">
          <span>PLAKATE</span>
          <span className="text-[#8E8E93]">1955–75</span>
        </div>
        <div className="col-span-4 md:col-span-2 p-4 bg-black text-white font-bold flex items-center justify-between hover:bg-[#FF3B30] transition-colors cursor-pointer">
          <span>KATALOG</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </nav>

      {/* Hero Section: Asymmetric Mathematical Balance with Real Architectural Photography */}
      <section className="border-b border-black grid grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-black">
        {/* Left Column: Monumental Type + Photographic Inset */}
        <div className="col-span-12 lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8E8E93] tracking-widest uppercase mb-6">
              <span className="w-2.5 h-2.5 bg-[#FF3B30]" />
              <span>INTERNATIONALE TYPOGRAFIE // AUSSTELLUNG 2026</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.05em] leading-[0.88] uppercase text-[#0A0A0A]">
              ORDNUNG <br />
              <span className="text-[#FF3B30]">KLARHEIT</span> <br />
              SYSTEM.
            </h1>

            <p className="mt-8 text-base sm:text-lg leading-relaxed text-[#2C2C2E] max-w-xl font-normal">
              The Swiss Style prioritizes objective information over decorative emotion. 
              Through disciplined mathematical grid proportions, unjustified sans-serif typography, 
              and stark photography, universal communication is realized.
            </p>
          </div>

          {/* Photographic Inset: Geometric Concrete Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black">
            <ImageBox
              src={MEDIA_ASSETS.swiss.concreteStair}
              alt="Concrete Staircase Architecture in Basel"
              aspectRatio="4/3"
              rounded="none"
              border={true}
              borderColor="border-black"
              caption="GEOMETRIC CONCRETE // BASEL ARCHIV"
              tag="OBJECTIVE PHOTO"
            />
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#FF3B30] font-bold uppercase">
                  SECTION 01 // MODULAR RATIO
                </span>
                <p className="text-xs text-[#636366] leading-relaxed">
                  Every element on this page adheres strictly to a 12-column mathematical grid. 
                  Photography is never cropped casually; it is framed to emphasize orthogonal planes.
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono pt-4 border-t border-black/10">
                <span className="font-bold">HELVETICA 1957</span>
                <span className="text-[#8E8E93]">MAX MIEDINGER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Impact Modular Poster Plate & Architectural Inset */}
        <div className="col-span-12 lg:col-span-5 bg-[#F2F2F7] p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center font-mono text-xs text-[#8E8E93] uppercase">
              <span>MODULARE SYSTEME // DIN 1451</span>
              <span className="text-[#FF3B30] font-bold">1:√2 RATIO</span>
            </div>

            {/* Visual Swiss Poster Ratio Component */}
            <div className="bg-white border-2 border-black p-4 space-y-4 shadow-sm relative overflow-hidden">
              <div className="relative">
                <ImageBox
                  src={MEDIA_ASSETS.swiss.heroArchitecture}
                  alt="Modernist Glass Pavilion Architecture Zurich"
                  aspectRatio="16/9"
                  rounded="none"
                  border={true}
                  borderColor="border-black"
                  tag="ZÜRICH PAVILION 1967"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#FF3B30] text-white font-mono text-[10px] font-bold uppercase">
                  LE CORBUSIER
                </div>
              </div>

              <div className="p-2 space-y-2">
                <div className="font-black text-3xl sm:text-4xl tracking-tighter uppercase leading-none">
                  GRID • FORM • LOGIC
                </div>
                <div className="w-12 h-1 bg-[#FF3B30]" />
                <p className="font-mono text-xs text-[#636366] leading-relaxed">
                  JOSEF MÜLLER-BROCKMANN • GESTALTUNGSPROBLEME DES GRAFIKERS. 
                  Universal typography serving public transportation, municipal signage, and scientific inquiry.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-black text-xs font-mono text-[#8E8E93] flex justify-between items-center">
            <span>MASSTAB: 1:1 OBJECTIVE</span>
            <span className="text-black font-bold">KUNSTGEWERBEMUSEUM</span>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Historical Swiss Poster Marquee */}
      <section className="border-b border-black bg-[#0A0A0A] text-white">
        <div className="px-6 py-2 border-b border-white/10 flex justify-between items-center text-xs font-mono">
          <span className="text-[#FF3B30] font-bold uppercase">HISTORICAL PLAKATE ARCHIVE // 1955–1975</span>
          <span className="text-white/40">ZÜRICH GRAPHISCHE SAMMLUNG</span>
        </div>
        <InfiniteImageMarquee images={marqueePosters} speed="normal" />
      </section>

      {/* 4-Pillar Grid Architecture Manifesto with Illustrated Visual Panels */}
      <section className="border-b border-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black text-xs">
        <div className="p-8 bg-white space-y-4">
          <ImageBox
            src={MEDIA_ASSETS.swiss.geometryDetail}
            alt="Mathematical Grid Geometry"
            aspectRatio="1/1"
            rounded="none"
            border={true}
            borderColor="border-black"
          />
          <div>
            <span className="font-mono text-xl font-bold text-[#FF3B30] block mb-1">01 / DAS RASTER</span>
            <h3 className="text-base font-bold uppercase mb-2">The Modular Grid</h3>
            <p className="text-[#636366] leading-relaxed">
              The grid is an aid, not a guarantee. It permits infinite variations while maintaining disciplined structural unity across the page.
            </p>
          </div>
        </div>

        <div className="p-8 bg-white space-y-4">
          <ImageBox
            src={MEDIA_ASSETS.swiss.typographicStudy}
            alt="Helvetica Typeface Specimen Study"
            aspectRatio="1/1"
            rounded="none"
            border={true}
            borderColor="border-black"
          />
          <div>
            <span className="font-mono text-xl font-bold text-[#FF3B30] block mb-1">02 / DIE TYPOGRAFIE</span>
            <h3 className="text-base font-bold uppercase mb-2">Objective Type</h3>
            <p className="text-[#636366] leading-relaxed">
              Only neutral grotesque typefaces convey the message without distortion. The text must remain transparent to the transmission of ideas.
            </p>
          </div>
        </div>

        <div className="p-8 bg-white space-y-4">
          <ImageBox
            src={MEDIA_ASSETS.swiss.buildingFacade}
            alt="Asymmetrical Architectural Façade"
            aspectRatio="1/1"
            rounded="none"
            border={true}
            borderColor="border-black"
          />
          <div>
            <span className="font-mono text-xl font-bold text-[#FF3B30] block mb-1">03 / DIE ASYMMETRIE</span>
            <h3 className="text-base font-bold uppercase mb-2">Dynamic Tension</h3>
            <p className="text-[#636366] leading-relaxed">
              Symmetrical arrangement creates static calm. Asymmetrical equilibrium creates rhythmic tension that activates the visual field.
            </p>
          </div>
        </div>

        <div className="p-8 bg-[#FF3B30] text-white space-y-4">
          <div className="aspect-square bg-black border border-white/20 p-4 flex flex-col justify-between text-white">
            <span className="font-mono text-xs text-[#FF3B30]">AKTIVER RAUM</span>
            <span className="text-4xl font-black">78.6%</span>
            <span className="font-mono text-[10px] text-white/70">NEGATIVE STRUCTURAL VALUE</span>
          </div>
          <div>
            <span className="font-mono text-xl font-bold text-white block mb-1">04 / DER WEISSRAUM</span>
            <h3 className="text-base font-bold uppercase mb-2">Active White Space</h3>
            <p className="text-white/80 leading-relaxed">
              Unprinted space is not empty space; it is an active structural component equal in weight to ink and image.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Before & After Comparison: Unstructured Chaos vs Swiss Modular Grid */}
      <section className="border-b border-black p-6 sm:p-12 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-black pb-4">
          <div>
            <span className="font-mono text-xs text-[#8E8E93] uppercase">VERGLEICHENDE ANALYSE</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              RAW INTUITION VS. MATHEMATICAL GRID
            </h2>
          </div>
          <span className="font-mono text-xs text-[#FF3B30] font-bold">DRAG SLIDER TO VERIFY ALIGNMENT</span>
        </div>

        <BeforeAfterSlider
          beforeSrc={MEDIA_ASSETS.swiss.baselGallery}
          afterSrc={MEDIA_ASSETS.swiss.heroArchitecture}
          beforeLabel="INTUITIVE / UNALIGNED"
          afterLabel="SWISS RATIONAL GRID ALIGNED"
          aspectRatio="16/9"
        />
      </section>

      {/* 3-Column Image Gallery: Iconic Poster Archive */}
      <section className="border-b border-black p-6 sm:p-12 max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-end border-b border-black pb-4">
          <div>
            <span className="font-mono text-xs text-[#8E8E93] uppercase">PLAKATKUNST 1955–1975</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              PERMANENT TYPOGRAPHIC COLLECTION
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-black text-white font-mono text-xs uppercase font-bold">ALL</button>
            <button className="px-3 py-1 bg-white border border-black text-black font-mono text-xs uppercase">POSTERS</button>
          </div>
        </div>

        <ImageGallery items={posters} columns={3} theme="swiss" />
      </section>

      {/* Exhibitions Calendar Section */}
      <section id="exhibitions" className="border-b border-black p-6 sm:p-12 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-8 border-b border-black pb-4">
          <div>
            <span className="font-mono text-xs text-[#8E8E93] uppercase">JAHRESPROGRAMM</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              CURRENT EXHIBITION PROGRAMME 2026
            </h2>
          </div>
          <span className="font-mono text-xs text-[#FF3B30] font-bold">KUNSTHAUS ZÜRICH</span>
        </div>

        <div className="divide-y divide-black">
          {[
            { num: 'EX_41', title: 'RATIONAL GRID SYSTEMS 1955–1975', date: '14.05 — 28.08.2026', hall: 'KUNSTGEWERBEMUSEUM ZÜRICH', curator: 'DR. MAX BILL' },
            { num: 'EX_42', title: 'ARMIN HOFMANN: THE BASEL CONTRAST', date: '02.09 — 15.11.2026', hall: 'GALLERIE NEUE GRAPHIK', curator: 'EMIL RUDER ARCHIVE' },
            { num: 'EX_43', title: 'OBJECTIVE PHOTOGRAPHY IN ADVERTISING', date: '01.12.2026 — 28.02.2027', hall: 'HAUS KONSTRUKTIV', curator: 'HANS NEUBURG' }
          ].map((ex, i) => (
            <div key={i} className="py-6 grid grid-cols-12 gap-4 items-baseline hover:bg-[#F2F2F7] transition-colors px-2">
              <div className="col-span-12 sm:col-span-2 font-mono text-xs font-bold text-[#FF3B30]">
                {ex.num}
              </div>
              <div className="col-span-12 sm:col-span-5 text-lg font-bold uppercase tracking-tight">
                {ex.title}
              </div>
              <div className="col-span-6 sm:col-span-3 font-mono text-xs text-[#636366]">
                {ex.date}
              </div>
              <div className="col-span-6 sm:col-span-2 text-right font-mono text-xs font-bold uppercase">
                <span className="inline-flex items-center gap-1 hover:text-[#FF3B30] cursor-pointer">
                  DETAILS <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Swiss Footer */}
      <footer className="p-6 sm:p-12 max-w-7xl mx-auto grid grid-cols-12 gap-6 text-xs font-mono uppercase">
        <div className="col-span-12 md:col-span-6">
          <div className="font-bold text-base text-[#0A0A0A]">NEUE TYPOGRAFIE ARCHIV ZÜRICH</div>
          <div className="text-[#8E8E93] mt-1">AUSSTELLUNGSTRASSE 60 • 8005 ZÜRICH, SCHWEIZ</div>
        </div>
        <div className="col-span-6 md:col-span-3 text-[#636366]">
          <div>FON +41 44 905 40 00</div>
          <div>INFO@NEUETYPOGRAFIE.CH</div>
        </div>
        <div className="col-span-6 md:col-span-3 text-right text-[#8E8E93]">
          ALLE RECHTE VORBEHALTEN © 2026
        </div>
      </footer>
    </div>
  );
};
