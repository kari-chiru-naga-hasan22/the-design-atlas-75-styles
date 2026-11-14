import React, { useState } from 'react';
import { ArrowUpRight, Compass, Mountain, Sparkles, Feather } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const OrganicMinimalismPage: React.FC = () => {
  const [clayVesselIndex, setClayVesselIndex] = useState<number>(0);

  const vessels = [
    { name: 'KILN VESSEL NO. 04', earth: 'Riverbed Terracotta Clay', finish: 'Wood-Ash Salt Glaze', temp: '1,280°C Anagama Fire' },
    { name: 'PEBBLE BOWL IN STONE', earth: 'Coarse Sandstone Stoneware', finish: 'Unglazed Natural Patina', temp: 'Single-Fire 1,220°C' },
    { name: 'CYLINDER VASE IN ASH', earth: 'Dark Iron-Rich Wild Clay', finish: 'Smoked Pine Needle Reduction', temp: 'Slow 72-Hour Reduction' }
  ];

  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#262422] font-serif selection:bg-[#BA7A58] selection:text-white relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        
        {/* Asymmetrical Natural Linen Header */}
        <header className="flex justify-between items-baseline border-b border-[#262422]/10 pb-6">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-normal font-cormorant tracking-wide uppercase text-[#262422]">
              EARTH & LINEN <span className="text-[#BA7A58]">STUDIO</span>
            </h1>
            <div className="text-[11px] font-mono tracking-widest text-[#7D756D] uppercase">
              SLOW-THROWN EARTHENWARE & RAW HANDLOOMED LINEN
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#7D756D]">
            <span>WOOD KILN: ANAGAMA 14</span>
            <span className="w-2 h-2 rounded-full bg-[#BA7A58]" />
          </div>
        </header>

        {/* Hero Section: Raw Clay & Natural Pebble Forms */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-3 py-1 border border-[#BA7A58] text-[#BA7A58] text-xs font-mono uppercase tracking-widest rounded-full">
              ORGANIC MINIMALISM • EARTHEN HARMONY
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal font-cormorant text-[#262422] leading-[1.1] italic">
              "The beauty of <br />
              <span className="not-italic text-[#BA7A58]">unhurried hands,</span> <br />
              born from wild riverbed earth."
            </h2>

            <p className="text-base sm:text-lg text-[#7D756D] max-w-xl font-sans font-light leading-relaxed">
              We dig our clay from riverbanks and fire each vessel in wood-burning kilns for three continuous days. 
              No two pieces possess identical surfaces. Each retains the thumb marks of the potter 
              and the unpredictable drift of pine wood ash.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#BA7A58] text-white font-sans text-xs uppercase font-medium tracking-widest rounded-full hover:bg-[#262422] transition-colors shadow-sm cursor-pointer">
                VIEW WOOD-FIRED FIRING
              </button>
              <div className="text-xs font-mono text-[#7D756D]">
                ANNUAL AUTUMN BATCH: 64 VESSELS ONLY
              </div>
            </div>
          </div>

          {/* Hero Tactile Ceramic Showcase Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#EAE4D8] rounded-[36px] p-6 border border-[#262422]/10 space-y-4 shadow-sm">
              <ImageBox
                src={MEDIA_ASSETS.organicMinimalism.riverstoneVessels}
                alt="Organic Minimalist Stoneware Pottery & Linen"
                aspectRatio="4/3"
                caption="Hand-thrown riverbed earthenware with natural pine wood-ash salt glaze."
                className="rounded-2xl overflow-hidden border border-[#262422]/10"
              />

              {/* Vessel specs */}
              <div className="space-y-2 text-xs font-mono text-[#7D756D] border-t border-[#262422]/10 pt-3">
                <div className="flex justify-between">
                  <span>SPECIMEN</span>
                  <span className="text-[#262422] font-bold">{vessels[clayVesselIndex].name}</span>
                </div>
                <div className="flex justify-between">
                  <span>FINISH</span>
                  <span className="text-[#BA7A58] font-bold">{vessels[clayVesselIndex].finish}</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-1">
                {vessels.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setClayVesselIndex(idx)}
                    className={`px-3 py-1 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                      clayVesselIndex === idx ? 'bg-[#BA7A58] text-white border-[#BA7A58]' : 'bg-[#EAE4D8] text-[#7D756D] border-[#7D756D]/40'
                    }`}
                  >
                    VESSEL 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Earthen Infinite Marquee */}
        <section className="py-2 border-y border-[#262422]/10">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.organicMinimalism.riverstoneVessels, title: 'Wood-Ash Clay Vessel', tag: 'ANAGAMA' },
              { src: MEDIA_ASSETS.organicMinimalism.unbleachedFlaxLinen, title: 'Raw Flax Linen', tag: 'HANDLOOM' },
              { src: MEDIA_ASSETS.wabiSabi.kintsugiBowl, title: 'Raku Tea Bowl', tag: 'STONEWARE' },
              { src: MEDIA_ASSETS.organicNature.riverStone, title: 'Tactile Form', tag: 'EARTH' }
            ]}
          />
        </section>

        {/* 3 Slow Craft Tenets Gallery */}
        <section className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BA7A58]">
              Material Truth
            </span>
            <h2 className="text-3xl font-cormorant font-normal text-[#262422]">
              Honesty of Clay, Stone & Weave
            </h2>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.organicMinimalism.riverstoneVessels,
                title: 'Wild Riverbed Clay',
                subtitle: 'Wood-fired anagama kiln firing 1,280°C',
                category: 'EARTH'
              },
              {
                src: MEDIA_ASSETS.organicMinimalism.unbleachedFlaxLinen,
                title: 'Handloomed Heavy Linen',
                subtitle: 'Unbleached natural flax slubs',
                category: 'TEXTILES'
              },
              {
                src: MEDIA_ASSETS.wabiSabi.kintsugiBowl,
                title: 'Smoked Pine Reduction',
                subtitle: 'Soft charcoal gradients across wild stoneware',
                category: 'POTTERY'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#262422]/10 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#7D756D]">
          <div>
            Earth & Linen Studio • Slow Pottery & Textile Guild
          </div>
          <div>
            Rooted in soil, fire, water, and air • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
