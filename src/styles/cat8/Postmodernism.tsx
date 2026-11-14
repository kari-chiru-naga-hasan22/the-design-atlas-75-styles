import React, { useState } from 'react';
import { Sparkles, Heart, Star, Palette, SunMedium, ArrowRight } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const PostmodernismPage: React.FC = () => {
  const [selectedColumn, setSelectedColumn] = useState<'ionic' | 'corinthian' | 'doric'>('ionic');

  return (
    <div className="min-h-screen bg-[#FAF5FF] text-[#312E81] font-sans selection:bg-[#C084FC] selection:text-white relative overflow-hidden">
      {/* Postmodern Zigzag and Wave Decorative Strip Top */}
      <div className="w-full bg-[#34D399] py-2 border-b-4 border-[#312E81] px-4 flex items-center justify-between text-xs font-mono font-bold tracking-widest text-[#312E81]">
        <span>⚡ RADICAL FORM 84 // LESS IS A BORE</span>
        <span className="hidden sm:inline">ROBERT VENTURI • MICHAEL GRAVES • ARATA ISOZAKI</span>
        <span>EXHIBITION CATALOG NO. 84 ⚡</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Postmodern Classical Pediment Navbar */}
        <header className="bg-white border-4 border-[#312E81] p-6 shadow-[8px_8px_0px_#C084FC] space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FDBA74] border-2 border-[#312E81] flex items-center justify-center font-bold text-lg">
                🏛️
              </div>
              <div>
                <h1 className="text-3xl font-black font-dm-serif text-[#312E81] tracking-tight">
                  RADICAL FORM <span className="text-[#C084FC] underline decoration-wavy decoration-[#34D399]">1984</span>
                </h1>
                <div className="text-[10px] font-mono tracking-widest text-[#312E81]/70 uppercase">
                  PASTICHE • IRREVERENCE • ORNAMENT • COLORED PEDIMENTS
                </div>
              </div>
            </div>

            <nav className="flex items-center gap-6 text-xs font-bold font-mono uppercase tracking-wider">
              <a href="#columns" className="hover:text-[#C084FC] transition-colors">THE COLUMNS</a>
              <a href="#gallery" className="hover:text-[#34D399] transition-colors">PEDIMENT GALLERY</a>
              <a href="#manifesto" className="hover:text-[#FDBA74] transition-colors">ANTI-BAUHAUS</a>
            </nav>

            <button className="px-5 py-2.5 bg-[#312E81] text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-[#C084FC] transition-colors shadow-[4px_4px_0px_#34D399] cursor-pointer">
              BUY PASTEL TEAPOT
            </button>
          </div>
        </header>

        {/* Hero Section: Classical Pediment with Neon Pastel Columns */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDBA74] border-2 border-[#312E81] text-xs font-mono font-black uppercase shadow-[3px_3px_0px_#312E81]">
              <Sparkles className="w-4 h-4 text-[#312E81]" />
              DUCK VS. DECORATED SHED
            </div>

            <h2 className="text-5xl sm:text-7xl font-normal font-dm-serif text-[#312E81] leading-[0.95]">
              "LESS IS ONLY A <br />
              <span className="italic text-[#C084FC] underline decoration-4 decoration-[#34D399]">BORE.</span>"
            </h2>

            <p className="text-lg text-[#312E81]/80 max-w-xl font-medium leading-relaxed">
              We brought back the pediments, the pastel stripes, the Roman arches, 
              and the joyful vulgarity that modernism took away. Architecture is theatre, 
              irony, and color once again.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#gallery"
                className="px-8 py-4 bg-[#C084FC] text-white font-black text-xs uppercase tracking-widest border-2 border-[#312E81] shadow-[4px_4px_0px_#312E81] hover:bg-[#34D399] hover:text-[#312E81] transition-all"
              >
                TOUR THE TEMPLE OF KITSCH
              </a>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#312E81]">
                <SunMedium className="w-4 h-4 text-[#FDBA74]" />
                PORTLAND BUILDING APPROVED
              </div>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white border-4 border-[#312E81] p-4 shadow-[10px_10px_0px_#34D399] space-y-4">
              <ImageBox
                src={MEDIA_ASSETS.postmodernism.postmodernColumns}
                alt="Postmodern Classical Columns & Pastel Pediments"
                aspectRatio="4/3"
                caption="Michael Graves & Hans Hollein Postmodern Columns with playful classical pediments."
                className="border-2 border-[#312E81]"
              />

              {/* Three Interactive Columns */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'ionic', name: 'IONIC MINT', color: 'bg-[#34D399]', cap: '🌀' },
                  { id: 'corinthian', name: 'LILAC ROSE', color: 'bg-[#C084FC]', cap: '🌿' },
                  { id: 'doric', name: 'PEACH BLOCK', color: 'bg-[#FDBA74]', cap: '━' }
                ].map((col) => (
                  <div
                    key={col.id}
                    onClick={() => setSelectedColumn(col.id as any)}
                    className={`flex flex-col items-center p-2 border-2 border-[#312E81] transition-all cursor-pointer ${
                      selectedColumn === col.id ? 'bg-[#FAF5FF] scale-105 shadow-[3px_3px_0px_#312E81]' : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-base mb-1">{col.cap}</div>
                    <div className={`w-6 h-16 ${col.color} border border-[#312E81] my-1 rounded-sm`} />
                    <div className="text-[9px] font-mono font-black uppercase text-center">
                      {col.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Postmodern Infinite Marquee */}
        <section className="py-2 border-y-4 border-[#312E81] bg-white">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.postmodernism.postmodernColumns, title: 'Pastel Classical Pediment', tag: 'GRAVES' },
              { src: MEDIA_ASSETS.postmodernism.pastelPediments, title: 'Neon Entablature', tag: 'VENTURI' },
              { src: MEDIA_ASSETS.memphis.geometricPattern, title: 'Bacterio Pattern', tag: 'SOTTSASS' },
              { src: MEDIA_ASSETS.artDeco.gildedSpires, title: 'Ironic Historicism', tag: 'MOORE' }
            ]}
          />
        </section>

        {/* The 4 Tenets of Postmodern Design */}
        <section id="manifesto" className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black font-dm-serif text-[#312E81]">
              THE RADICAL REBELLION
            </h2>
            <div className="h-1 flex-1 bg-[#312E81]" />
            <span className="text-xs font-mono font-bold uppercase bg-[#34D399] px-2 py-0.5 border border-[#312E81]">
              VENTURI'S MANIFESTO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'HISTORICAL PASTICHE',
                desc: 'Collaging Egyptian obelisks, Palladian windows, and neon diner signage into a single facade.'
              },
              {
                title: 'HIGH KITSCH HONORED',
                desc: 'Vending teapots that look like birds and hotels with giant fiberglass swans crowning the roof.'
              },
              {
                title: 'DOUBLE CODING',
                desc: 'Speaking simultaneously to the intellectual architect through irony and to the public through joyful imagery.'
              },
              {
                title: 'THE SILLY PEDIMENT',
                desc: 'Splitting the classical pediment open with a playful oversized circle cut into the apex.'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="p-6 border-4 border-[#312E81] bg-white shadow-[6px_6px_0px_#312E81] space-y-3 hover:translate-x-1 hover:-translate-y-1 transition-transform"
              >
                <div className="text-2xl font-mono font-black text-[#C084FC]">0{idx + 1}</div>
                <h3 className="text-xl font-bold font-dm-serif text-[#312E81]">{card.title}</h3>
                <p className="text-sm text-[#312E81]/80 leading-relaxed font-sans">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Postmodern Architectural Masterpiece Gallery */}
        <section id="gallery" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-4 border-[#312E81] pb-3">
            <h2 className="text-3xl font-bold font-dm-serif text-[#312E81]">POSTMODERN DESIGN ARTIFACTS</h2>
            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase">PORTLAND & PIAZZA D'ITALIA</span>
          </div>

          <ImageGallery
            columns={3}
            theme="pop"
            items={[
              {
                src: MEDIA_ASSETS.postmodernism.postmodernColumns,
                title: 'Portland Building Columns',
                subtitle: 'Michael Graves colored capitals',
                category: 'PEDIMENTS'
              },
              {
                src: MEDIA_ASSETS.postmodernism.pastelPediments,
                title: 'Team Disney Sun Dial',
                subtitle: 'Arata Isozaki Orlando Pavilion',
                category: 'MONUMENTS'
              },
              {
                src: MEDIA_ASSETS.memphis.geometricPattern,
                title: 'Carlton Room Divider',
                subtitle: 'Ettore Sottsass polychrome laminate',
                category: 'MILANO 1981'
              }
            ]}
          />
        </section>

        {/* Postmodern Footer */}
        <footer className="border-t-4 border-[#312E81] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono font-bold uppercase text-[#312E81]">
          <div className="flex items-center gap-2">
            <span>🏛️ RADICAL FORM 84</span>
            <span className="text-[#C084FC]">•</span>
            <span>MEMPHIS & VENTURI COMMISSIONS</span>
          </div>
          <div>
            LONG LIVE PLAYFUL IRONIC ORNAMENT • 1984–2026
          </div>
        </footer>

      </div>
    </div>
  );
};
