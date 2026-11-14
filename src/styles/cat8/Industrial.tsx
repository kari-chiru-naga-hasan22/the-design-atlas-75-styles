import React, { useState } from 'react';
import { ArrowUpRight, AlertTriangle, ShieldCheck, Cog, Gauge, Hammer, Activity } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const IndustrialPage: React.FC = () => {
  const [hydraulicPressure, setHydraulicPressure] = useState<number>(420);
  const [emergencyBrake, setEmergencyBrake] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#18181B] text-[#EAB308] font-sans selection:bg-[#EAB308] selection:text-black relative overflow-x-hidden">
      
      {/* Top Hazard Yellow Diagonal Warning Bar */}
      <div 
        className="w-full h-4 border-b-2 border-black"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #EAB308, #EAB308 12px, #18181B 12px, #18181B 24px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Heavy Industrial Machine Navbar */}
        <header className="bg-[#27272A] border-4 border-[#EAB308] p-4 flex flex-wrap items-center justify-between gap-4 shadow-[8px_8px_0px_#000000]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#EAB308] text-black">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black uppercase tracking-wider font-orbitron text-[#EAB308]">
                FORGE & FOUNDRY <span className="text-white">HEAVY</span>
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[#71717A] uppercase">
                HYDRAULIC PRESS SYSTEMS • ISO-9001 STRUCTURAL FORGING • 50,000-TON CLASS
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 bg-black px-3 py-1.5 border border-[#EAB308]/40">
              <Activity className="w-4 h-4 text-[#EAB308] animate-pulse" />
              <span>TORQUE: 18,400 kN·m</span>
            </div>
            <button 
              onClick={() => setEmergencyBrake(!emergencyBrake)}
              className={`px-4 py-2 font-mono text-xs uppercase font-black tracking-wider transition-colors border-2 cursor-pointer ${
                emergencyBrake 
                  ? 'bg-[#DC2626] text-white border-white animate-bounce' 
                  : 'bg-black text-[#EAB308] border-[#DC2626] hover:bg-[#DC2626] hover:text-white'
              }`}
            >
              {emergencyBrake ? 'BRAKE ENGAGED ⚠' : 'E-STOP READY'}
            </button>
          </div>
        </header>

        {/* Hero Section: Cast Iron Forging Press & Capacity */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border-2 border-[#EAB308] text-xs font-mono font-bold tracking-widest text-[#EAB308]">
              <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
              DANGER // HIGH TONNAGE RAM OPERATION
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-orbitron text-white leading-none">
              CAST IRON. <br />
              <span className="text-[#EAB308]">HYDRAULIC</span> <br />
              DOMINANCE.
            </h1>

            <p className="text-base sm:text-lg text-[#71717A] max-w-xl font-mono leading-relaxed">
              We fabricate ultra-massive structural forging presses, titanium turbine discs, 
              and nuclear pressure vessels. Zero deflection tolerances, continuous oil-bath lubrication, 
              and hydraulic cylinders forged from solid chrome-moly steel.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#EAB308] text-black font-black uppercase font-orbitron text-xs tracking-widest border-2 border-black hover:bg-white transition-all shadow-[4px_4px_0px_#000000] cursor-pointer">
                REQUEST MACHINE TOLERANCE SPECS
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
                <ShieldCheck className="w-4 h-4 text-[#EAB308]" />
                MEETS ASME SECTION VIII DIV 2
              </div>
            </div>
          </div>

          {/* Hero Industrial Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#27272A] border-4 border-[#EAB308] p-4 shadow-2xl space-y-4 relative">
              <ImageBox
                src={MEDIA_ASSETS.industrial.heavyFoundryPress}
                alt="50,000 Ton Hydraulic Forging Press in Operation"
                aspectRatio="4/3"
                caption="FH-50000 Four-Column Monobloc Forging Ram shaping red-hot aerospace titanium billets."
                className="border border-[#EAB308]/40"
              />

              {/* Interactive Hydraulic Pressure Telemetry Display */}
              <div className="bg-black p-4 border border-[#71717A] text-center space-y-1">
                <div className="text-4xl font-black font-orbitron text-[#EAB308] tracking-wider">
                  {hydraulicPressure} <span className="text-xl text-white font-mono">BAR</span>
                </div>
                <div className="text-[11px] font-mono text-[#71717A]">
                  PRIMARY CYLINDER LOAD: {(hydraulicPressure * 12.4).toFixed(1)} METRIC TONS
                </div>
              </div>

              {/* Slider Controller */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-white">
                  <span>ACTUATOR PRESSURE ADJUST</span>
                  <span className="text-[#EAB308]">{hydraulicPressure} / 650 BAR</span>
                </div>
                <input 
                  type="range"
                  min="100"
                  max="650"
                  value={hydraulicPressure}
                  onChange={(e) => setHydraulicPressure(Number(e.target.value))}
                  className="w-full accent-[#EAB308] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Infinite Marquee */}
        <section className="py-2 border-y-4 border-[#EAB308] bg-black">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.industrial.heavyFoundryPress, title: '50,000-Ton Forging Press', tag: 'HEAVY FORGE' },
              { src: MEDIA_ASSETS.industrial.moltenFurnace, title: 'Molten Induction Ladle', tag: '1280°C HEAT' },
              { src: MEDIA_ASSETS.constructivism.industrialGears, title: 'Heavy Machined Pinions', tag: 'TOLERANCE' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Foundry Foundation Slab', tag: 'STRUCTURAL' }
            ]}
          />
        </section>

        {/* Heavy Machinery Lineup Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight font-orbitron text-white">
              HEAVY PRODUCTION EQUIPMENT
            </h2>
            <div className="h-1 flex-1 bg-[#EAB308]" />
            <span className="text-xs font-mono bg-[#EAB308] text-black font-black px-2 py-0.5">
              SERIES 9000
            </span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.industrial.heavyFoundryPress,
                title: 'FH-50000 Titan Ram',
                subtitle: '50,000 Metric Ton Rating',
                category: 'FORGING PRESS'
              },
              {
                src: MEDIA_ASSETS.industrial.moltenFurnace,
                title: 'HT-850 Bogie Hearth',
                subtitle: '1,250°C Gas-fired quench furnace',
                category: 'HEAT TREAT'
              },
              {
                src: MEDIA_ASSETS.constructivism.industrialGears,
                title: 'RM-12000 Ring Mill',
                subtitle: '8.5m maximum diameter forging mill',
                category: 'MILLING'
              }
            ]}
          />
        </section>

        {/* Hazard Safety Strip Bottom */}
        <div 
          className="w-full h-6 border-2 border-black"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #EAB308, #EAB308 16px, #18181B 16px, #18181B 32px)'
          }}
        />

        {/* Footer */}
        <footer className="border-t border-[#71717A]/40 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#71717A]">
          <div>
            FORGE & FOUNDRY HEAVY MACHINERY CORP • FOUNDED 1948
          </div>
          <div>
            STRUCTURAL SAFETY IS NON-NEGOTIABLE • ISO 9001 / CE CERTIFIED
          </div>
        </footer>

      </div>
    </div>
  );
};
