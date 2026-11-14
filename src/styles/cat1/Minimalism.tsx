import React, { useState } from 'react';
import { ArrowRight, Compass, Shield, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { ImageBox, EditorialImage, ImageGallery, FullBleedImage } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const MinimalismPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const projects = [
    {
      title: 'The Monastic House',
      location: 'Kyoto, Japan',
      year: '2025',
      area: '420 m²',
      desc: 'Cast in unadorned concrete and charred yakisugi cedar. Light enters through a single southern aperture.',
      src: MEDIA_ASSETS.minimalism.zenCourtyard
    },
    {
      title: 'Silent Pavilion',
      location: 'Engadin, Switzerland',
      year: '2024',
      area: '680 m²',
      desc: 'Granite massing embedded in alpine bedrock. Zero ornament, thermal massing, pure stone geometry.',
      src: MEDIA_ASSETS.minimalism.lightShaft
    },
    {
      title: 'Void Gallery',
      location: 'Copenhagen, Denmark',
      year: '2026',
      area: '1,200 m²',
      desc: 'Vast white volumes framing negative space. The visitor experiences absence as physical presence.',
      src: MEDIA_ASSETS.minimalism.concreteRoom
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1E] font-sans selection:bg-[#1C1C1E] selection:text-white">
      {/* Bespoke Minimalist Navigation */}
      <nav className="border-b border-[#E5E2D9] px-6 py-6 md:px-12 flex items-center justify-between bg-[#F9F8F6] sticky top-0 z-30">
        <div className="font-mono text-xs tracking-[0.25em] uppercase text-[#1C1C1E]">
          KANSO ARCHITECTS
        </div>
        <div className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-[#7C7A74]">
          <a href="#work" className="hover:text-black transition-colors">01 / WORKS</a>
          <a href="#philosophy" className="hover:text-black transition-colors">02 / DISCIPLINE</a>
          <a href="#materiality" className="hover:text-black transition-colors">03 / MATERIALITY</a>
          <a href="#inquiries" className="hover:text-black transition-colors">04 / INQUIRIES</a>
        </div>
        <div className="text-xs font-mono text-[#7C7A74]">
          ZURICH / TOKYO
        </div>
      </nav>

      {/* Hero Section: Vast Negative Space & Monastic Proportion */}
      <section className="pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8E8B82] block mb-6">
            MONOGRAPH NO. 14 — ARCHITECTURAL REDUCTION
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1.02] text-[#1C1C1E]">
            The architecture of <span className="italic font-serif">absence</span> and sacred silence.
          </h1>
          <p className="mt-8 text-base sm:text-lg text-[#66645E] max-w-xl font-light leading-relaxed">
            We remove every superfluous element until what remains cannot be altered without destroying the soul of the space. Monastic materials, natural light, mathematical calm.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a 
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#1C1C1E] text-white text-xs font-mono tracking-widest uppercase hover:bg-[#383735] transition-colors"
            >
              Examine Works <ArrowRight size={14} />
            </a>
            <span className="text-xs font-mono text-[#8E8B82]">EST. 2012</span>
          </div>
        </div>
      </section>

      {/* Hero Image Showcase: True High-Resolution Architectural Photography */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="relative overflow-hidden border border-[#DCD9CE]">
          <ImageBox
            src={MEDIA_ASSETS.minimalism.heroHouse}
            alt="Minimalist Monolithic Architecture in Mountain Valley"
            aspectRatio="21/9"
            rounded="none"
            hoverZoom={true}
            tag="MONOGRAPH 14 • VALS RETREAT"
            caption="KANSO ATELIER // VALLEY HOUSE, GRISONS CANTON"
            credit="HÉLÈNE BINET"
          />
        </div>
      </section>

      {/* Section 2: Selected Projects with High-Fidelity Photography */}
      <section id="work" className="border-t border-[#E5E2D9] pt-20 pb-28 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-[#8E8B82] tracking-widest block uppercase">
              SELECTED WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight mt-2">
              Reductive Form in Context
            </h2>
          </div>
          <div className="font-mono text-xs text-[#7C7A74]">
            [ 2024 — 2026 INDEX ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((item, idx) => (
            <div key={idx} className="group border-t border-[#1C1C1E] pt-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#8E8B82]">
                  <span>0{idx + 1}</span>
                  <span>{item.location}</span>
                </div>

                <ImageBox
                  src={item.src}
                  alt={item.title}
                  aspectRatio="4/3"
                  rounded="none"
                  hoverZoom={true}
                />

                <h3 className="text-2xl font-light tracking-tight group-hover:text-[#8E8B82] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs text-[#66645E] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E2D9] flex justify-between items-center text-xs font-mono text-[#8E8B82]">
                <span>AREA: {item.area}</span>
                <span>ANNO {item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Materiality & Light Study Split Section */}
      <section id="materiality" className="border-t border-[#E5E2D9] bg-[#F3F0E8] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-[#8E8B82] tracking-widest uppercase block">
              TACTILE HONESTY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
              Materials that age with dignity.
            </h2>
            <p className="text-sm text-[#66645E] leading-relaxed font-light">
              We do not varnish our timber or paint our concrete. We allow the natural oils of white oak, the mineral veins of raw granite, and the gradual patina of rainwater to write their own chronology across our surfaces.
            </p>
            <div className="pt-4 border-t border-[#DCD9CE] grid grid-cols-2 gap-4 text-xs font-mono text-[#7C7A74]">
              <div>
                <div className="font-bold text-[#1C1C1E]">RAW GRANITE</div>
                <div>Graubünden Quarry</div>
              </div>
              <div>
                <div className="font-bold text-[#1C1C1E]">HINOKI CYPRESS</div>
                <div>Nagano Forest Reserve</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ImageBox
              src={MEDIA_ASSETS.minimalism.woodChair}
              alt="Handcrafted Minimalist Wooden Chair"
              aspectRatio="3/4"
              rounded="none"
              caption="PROTOTYPE NO. 03 • WHITE OAK"
            />
            <ImageBox
              src={MEDIA_ASSETS.minimalism.concreteRoom}
              alt="Raw Concrete Architectural Light Shaft"
              aspectRatio="3/4"
              rounded="none"
              caption="LIGHT SHAFT STUDY • KYOTO"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Monograph Inquiries */}
      <footer id="inquiries" className="border-t border-[#E5E2D9] p-8 md:p-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-xs font-mono text-[#7C7A74]">
        <div>
          <div className="font-bold text-[#1C1C1E] text-sm uppercase">KANSO ARCHITECTS ZÜRICH &amp; TOKYO</div>
          <div className="mt-1">Limmatquai 18, 8001 Zürich • Ginza 6-10-1, Tokyo</div>
        </div>
        <div>
          <span>COMMISSIONS &amp; PRESS: </span>
          <span className="text-[#1C1C1E] font-bold">ATELIER@KANSO-ARCH.COM</span>
        </div>
      </footer>
    </div>
  );
};
