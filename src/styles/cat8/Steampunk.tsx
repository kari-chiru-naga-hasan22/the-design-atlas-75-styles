import React, { useState } from 'react';
import { Compass, Wind, Shield, Gauge, Anchor, Clock } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SteampunkPage: React.FC = () => {
  const [boilerPressurePSI, setBoilerPressurePSI] = useState<number>(140);
  const [activeAirship, setActiveAirship] = useState<number>(0);

  const fleet = [
    { name: 'H.M.S. LEVIATHAN IX', class: 'Imperial Dreadnought', length: '480 FEET', steamEngines: '8 TRIPLE-EXPANSION CYLINDERS', liftGas: 'SUPERHEATED AETHER' },
    { name: 'AETHERSWIFT CLIPPER', class: 'High-Altitude Mail Courier', length: '210 FEET', steamEngines: '4 TWIN-TURBO TURBINES', liftGas: 'PURIFIED HYDROGENIUM' },
    { name: 'THE NAUTILUS SKY-DOCK', class: 'Floating Victualling Haven', length: '720 FEET', steamEngines: '12 ROTARY EXPANSION BOILERS', liftGas: 'BUOYANT PHLOGISTON' }
  ];

  return (
    <div className="min-h-screen bg-[#1A1412] text-[#E8D8B8] font-serif selection:bg-[#B87333] selection:text-white relative overflow-x-hidden">
      
      {/* Victorian Ornate Brass Filigree Top Border */}
      <div className="w-full h-3 bg-gradient-to-r from-[#D4AF37] via-[#B87333] to-[#D4AF37] border-b-2 border-[#1A1412]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Victorian Brass Header */}
        <header className="border-4 border-[#D4AF37] bg-[#241A16] p-6 shadow-[0px_0px_30px_rgba(212,175,55,0.15)] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-widest text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-3">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>BY APPOINTMENT TO THE ROYAL AETHER NAVIGATION BOARD • 1888</span>
            </div>
            <div className="flex items-center gap-4">
              <span>LATITUDE: 51° 30' N</span>
              <span className="text-[#B87333]">ALTITUDE: 12,000 YARDS</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-2">
            <div>
              <h1 className="text-3xl sm:text-5xl font-normal tracking-wide uppercase font-cinzel text-[#D4AF37]">
                AETHERIA <span className="text-[#E8D8B8]">DIRIGIBLES</span>
              </h1>
              <div className="text-sm italic font-cormorant text-[#E8D8B8]/80 mt-1">
                Constructors of Gilded Clockwork Airships, Steam Boilers & High-Altitude Navigation Engines
              </div>
            </div>

            {/* Pressure Gauge Pill */}
            <div className="bg-[#1A1412] border-2 border-[#D4AF37] px-4 py-2 flex items-center gap-3">
              <Gauge className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-xs font-mono">
                <div className="text-[#D4AF37] font-bold">MAIN STEAM BOILER: {boilerPressurePSI} PSI</div>
                <div className="text-[10px] text-[#E8D8B8]/60">OPTIMAL DRAFT PRESSURE</div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section: The Imperial Airship & Brass Engine Work */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B87333]/20 border border-[#B87333] text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Wind className="w-4 h-4 text-[#D4AF37]" />
              THE VICTORIAN CONQUEST OF THE CELESTIAL STRATOSPHERE
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal font-cinzel text-[#D4AF37] leading-[1.05]">
              BRASS COGS, <br />
              <span className="text-[#E8D8B8] italic font-cormorant font-light">
                STEAM EXPANSION,
              </span> <br />
              SKYWARD WE SOAR.
            </h2>

            <p className="text-lg text-[#E8D8B8]/80 max-w-xl font-cormorant leading-relaxed italic text-justify">
              When the iron foundries of Manchester met the astronomical compasses of Greenwich, 
              mankind slipped the surly bonds of terrestrial earth. Powered by twelve-cylinder triple-expansion 
              coal boilers and copper-sheathed propellers, our dreadnoughts cross the Atlantic in sixty flawless hours.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B87333] text-black font-cinzel text-xs uppercase font-bold tracking-widest border border-[#D4AF37] hover:brightness-110 transition-all shadow-[4px_4px_0px_#000000] cursor-pointer">
                COMMISSION BESPOKE DIRIGIBLE
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Clock className="w-4 h-4" />
                DELIVERY LEAD TIME: 14 LUNAR MONTHS
              </div>
            </div>
          </div>

          {/* Hero Clockwork Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#241A16] border-4 border-[#D4AF37] p-4 shadow-2xl space-y-4 rounded-sm">
              <ImageBox
                src={MEDIA_ASSETS.steampunk.brassClockworkGears}
                alt="Victorian Brass Clockwork Gears & Escapement Mechanism"
                aspectRatio="4/3"
                caption="Precision hand-cut brass chronometer escapement with differential planetary drive."
                className="border border-[#D4AF37]/50"
              />

              <div className="space-y-2 border-t border-[#D4AF37]/30 pt-3">
                <div className="flex justify-between text-xs font-mono text-[#E8D8B8]">
                  <span>FURNACE DRAFT STOKE:</span>
                  <span className="text-[#D4AF37] font-bold">{boilerPressurePSI} PSI</span>
                </div>
                <input 
                  type="range"
                  min="80"
                  max="200"
                  value={boilerPressurePSI}
                  onChange={(e) => setBoilerPressurePSI(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
              </div>

              <div className="text-[11px] font-cormorant italic text-center text-[#E8D8B8]/70">
                "Every valve calibrated in accordance with James Watt's posthumous steam tables."
              </div>
            </div>
          </div>
        </section>

        {/* Steampunk Brass Marquee */}
        <section className="py-2 border-y-2 border-[#D4AF37]/40 bg-[#241A16]">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.steampunk.brassClockworkGears, title: 'Brass Planetary Gears', tag: 'CLOCKWORK' },
              { src: MEDIA_ASSETS.steampunk.steamPressurePipes, title: 'High-Pressure Steam Manifold', tag: 'BOILER' },
              { src: MEDIA_ASSETS.artDeco.gildedSpires, title: 'Gilded Observation Gondola', tag: 'AETHER' },
              { src: MEDIA_ASSETS.industrial.moltenFurnace, title: 'Coal-Fired Hearth', tag: 'POWER' }
            ]}
          />
        </section>

        {/* Fleet Catalog Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-cinzel uppercase text-[#D4AF37]">
              THE IMPERIAL SKY FLEET ARCHIVE
            </h2>
            <div className="h-0.5 flex-1 bg-[#D4AF37]/40" />
            <span className="text-xs font-mono text-[#B87333]">ROYAL DOCKYARDS CHATHAM</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.steampunk.brassClockworkGears,
                title: 'Chronometer Assembly',
                subtitle: 'Gilded mechanical astrolabe',
                category: 'INSTRUMENTS'
              },
              {
                src: MEDIA_ASSETS.steampunk.steamPressurePipes,
                title: 'Copper Steam Boilers',
                subtitle: 'Triple-expansion marine tubes',
                category: 'PROPULSION'
              },
              {
                src: MEDIA_ASSETS.artDeco.gildedSpires,
                title: 'Sky-Dock Anchorage Spire',
                subtitle: 'Mooring mast for imperial airships',
                category: 'ARCHITECTURE'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-[#D4AF37]/30 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#D4AF37]/60">
          <div>
            AETHERIA DIRIGIBLE & STEAM LAUNCH GUILD • ESTABLISHED 1888
          </div>
          <div>
            PATENTED THROUGHOUT THE BRITISH EMPIRE & OVERSEAS COLONIES
          </div>
        </footer>

      </div>
    </div>
  );
};
