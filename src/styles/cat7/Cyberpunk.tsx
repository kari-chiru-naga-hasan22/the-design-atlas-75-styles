import React, { useState } from 'react';
import { Terminal, ShieldAlert, Cpu, Zap, Radio, Crosshair } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const CyberpunkPage: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [bionicInstall, setBionicInstall] = useState(false);

  return (
    <div className="min-h-screen bg-[#07070A] text-[#FFE600] font-mono selection:bg-[#FF003C] selection:text-white p-4 sm:p-8 relative overflow-hidden">
      {/* Cyberpunk Glitch & Kanji Grid Background */}
      <div className="absolute top-12 right-12 text-[#FF003C] text-8xl font-black opacity-10 select-none pointer-events-none">
        サイバー
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Black Market Wetware Navbar */}
        <header className="p-4 sm:p-6 bg-[#0E0E14] border-2 border-[#FFE600] shadow-[0_0_20px_rgba(255,230,0,0.3)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFE600] text-black font-black flex items-center justify-center text-xl shadow-[0_0_10px_#FFE600]">
              ☠
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black font-orbitron tracking-widest text-[#FFE600] drop-shadow-[0_0_8px_#FFE600]">
                NEO-SHINJUKU CYBERNETICS
              </div>
              <div className="text-[10px] text-[#00F0FF] tracking-wider">
                UNDERGROUND BIONICS • SECTOR 7B // HIGH-VOLTAGE
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-[#00F0FF]">
            <a href="#implants" className="hover:text-[#FFE600] transition-colors">NEURAL CORONA</a>
            <a href="#optical" className="hover:text-[#FFE600] transition-colors">OPTICAL CYBER-EYES</a>
            <a href="#blackhat" className="hover:text-[#FFE600] transition-colors">BLACK-MARKET ICE</a>
          </div>

          <button 
            onClick={() => setGlitchActive(!glitchActive)}
            className="px-4 py-2 bg-[#FF003C] hover:bg-[#ff2658] text-white text-xs font-bold uppercase tracking-wider border border-white shadow-[0_0_10px_#FF003C] cursor-pointer"
          >
            {glitchActive ? 'ICE BREAKER: ACTIVE' : 'TRIGGER GLITCH ICE'}
          </button>
        </header>

        {/* Hero Section: Glitch Typography & Targeting Reticles */}
        <section className="text-center space-y-6 py-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600] text-xs font-mono uppercase tracking-widest text-[#00F0FF]">
            <Crosshair size={14} className="animate-spin text-[#FF003C]" /> TARGETING SUB-DERMAL INTERFACE
          </div>

          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-orbitron tracking-tight text-[#FFE600] drop-shadow-[0_0_20px_#FFE600] leading-none ${glitchActive ? 'animate-glitch' : ''}`}>
            NEURAL WETWARE. <br />
            <span className="text-[#00F0FF] drop-shadow-[0_0_20px_#00F0FF]">SUB-DERMAL TECH.</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
            Direct cranial fiber splicing, overclocked retinal HUD displays, and sub-second neural memory implants for runners operating in the high-density Shinjuku underbelly.
          </p>

          {/* Hero Visual Composition: Neon Shinjuku Rain Alley */}
          <div className="pt-6 max-w-4xl mx-auto p-3 bg-[#0E0E14] border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.3)]">
            <ImageBox
              src={MEDIA_ASSETS.cyberpunk.shinjukuNightRain}
              alt="Rainy Shinjuku Alleyway with Flashing Neon Signs and Cybernetic Runners"
              aspectRatio="16/9"
              rounded="none"
              caption="Sector 7B: Illegal cybernetic wetware clinic running beneath the monorail arches"
            />
          </div>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setBionicInstall(true)}
              className="px-8 py-4 bg-[#FFE600] hover:bg-white text-black font-orbitron font-black text-xs uppercase tracking-wider shadow-[0_0_25px_#FFE600] cursor-pointer transition-all flex items-center gap-2"
            >
              <Cpu size={16} /> {bionicInstall ? 'NEURAL JACK CONNECTED!' : 'INSTALL NEURAL JACK (¥420,000)'}
            </button>
            <button className="px-8 py-4 bg-[#0E0E14] border-2 border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF] hover:text-black transition-all cursor-pointer">
              VIEW BLACK-MARKET DOSSIER
            </button>
          </div>
        </section>

        {/* Infinite Cyberpunk Marquee */}
        <div className="border-2 border-[#FFE600] bg-[#0E0E14] p-2">
          <InfiniteImageMarquee
            speed="fast"
            images={[
              { src: MEDIA_ASSETS.cyberpunk.shinjukuNightRain, title: 'Shinjuku Neon Rain', tag: 'SECTOR 7B' },
              { src: MEDIA_ASSETS.cyberpunk.neonHolograms, title: 'Retinal Micro-HUD', tag: 'CYBER-EYE' },
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'ICE Breaker Mainframe', tag: 'OPTICAL CABLE' },
              { src: MEDIA_ASSETS.synthwave.arcadeCabinet, title: 'Netrunner Arcade Rig', tag: 'CHIP' }
            ]}
          />
        </div>

        {/* Cybernetic Augmentation Catalog Gallery */}
        <section id="implants" className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b-2 border-[#FFE600]/30 pb-3">
            <h3 className="text-2xl font-black font-orbitron text-[#FFE600]">Black-Market Wetware Modules</h3>
            <span className="font-mono text-xs text-[#00F0FF]">SECTOR 7B ENCRYPTED INVENTORY</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.cyberpunk.neonHolograms,
                title: 'Kiroshi Optical Mk.4',
                subtitle: 'Thermal spectrum overlay, 8x optical zoom, and instant facial recognition link',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.terminal.serverAisles,
                title: 'Sandevistan Neural Node',
                subtitle: 'Accelerates synaptic transmission by 300% for 12 seconds of intense sensory focus',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.cyberpunk.shinjukuNightRain,
                title: 'Sub-Dermal Fiber Interface',
                subtitle: 'High-bandwidth direct gold-plated neural ports embedded beneath hairline occipital bone',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Cyberpunk Footer */}
        <footer className="p-6 bg-[#0E0E14] border-2 border-[#FFE600]/40 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>NEO-SHINJUKU CYBERNETICS • UNDERGROUND LEVEL -3, TOKYO</div>
          <div>ZERO CORPO COMPLIANCE • © 2077–2026</div>
        </footer>
      </div>
    </div>
  );
};
