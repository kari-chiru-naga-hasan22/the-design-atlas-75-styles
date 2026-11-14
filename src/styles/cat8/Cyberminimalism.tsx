import React, { useState } from 'react';
import { ArrowUpRight, Cpu, Radio, Shield, Terminal, Zap } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const CyberminimalismPage: React.FC = () => {
  const [latencyPicos, setLatencyPicos] = useState<number>(42);
  const [opticalGateState, setOpticalGateState] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00D2FF] selection:text-black relative overflow-x-hidden">
      
      {/* 1px Surgical Laser Blue Baseline Indicator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent shadow-[0_0_8px_#00D2FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
        
        {/* Minimalist Surgical Monolith Header */}
        <header className="flex justify-between items-center border-b border-white/10 pb-6 text-xs font-mono">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
            <span className="font-bold tracking-widest text-white uppercase font-space-grotesk">
              NEURO-ZERO // PHOTONIC KERNEL
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/50">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-white">CLOCK_SYNC:</span>
              <span className="text-[#00D2FF]">0.0001 ps</span>
            </div>
            <button 
              onClick={() => setOpticalGateState(!opticalGateState)}
              className="px-3 py-1 border border-white/20 hover:border-[#00D2FF] text-white transition-colors cursor-pointer"
            >
              GATE: {opticalGateState ? 'ENGAGED' : 'STANDBY'}
            </button>
          </div>
        </header>

        {/* Hero Section: Sub-Millisecond Quantum Architecture */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block border border-white/20 px-3 py-1 text-xs font-mono uppercase tracking-widest text-[#00D2FF]">
              ZERO OVERHEAD • COLD SILICON • SUB-PICOSECOND
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none font-space-grotesk">
              ABSOLUTE <br />
              <span className="text-[#00D2FF] drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                ZERO.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 max-w-xl font-mono leading-relaxed font-light">
              We eliminated the instruction pipeline, the OS scheduler, and memory indirection. 
              Pure lightwaves traversing silicon-nitride waveguides at 299,792 km/s.
              No graphics. No decoration. Just pure execution.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-black font-space-grotesk text-xs uppercase font-bold tracking-widest hover:bg-[#00D2FF] transition-all cursor-pointer">
                DEPLOY NEURAL WAVELENGTH
              </button>
              <div className="text-xs font-mono text-white/40">
                PICOSECOND JITTER: ±0.03ps
              </div>
            </div>
          </div>

          {/* Hero Silicon Photonics Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#111116] border border-white/20 p-4 space-y-4">
              <ImageBox
                src={MEDIA_ASSETS.cyberminimalism.laserCleanroom}
                alt="Optical Cleanroom Laser Waveguide"
                aspectRatio="4/3"
                caption="Cryogenic cleanroom interferometer alignment for silicon-nitride laser photonic waveguides."
                className="border border-white/10"
              />

              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-baseline font-mono">
                  <span className="text-xs text-white/60">KERNEL LATENCY</span>
                  <span className="text-3xl font-black text-[#00D2FF] font-space-grotesk">
                    {latencyPicos} <span className="text-xs text-white/40 font-mono">ps</span>
                  </span>
                </div>

                <div className="w-full bg-white/10 h-[1px]">
                  <div className="bg-[#00D2FF] h-[1px] w-2/3 shadow-[0_0_6px_#00D2FF]" />
                </div>

                <button 
                  onClick={() => setLatencyPicos(prev => prev === 42 ? 38 : 42)}
                  className="w-full py-2 bg-white/5 border border-white/10 hover:border-[#00D2FF] text-xs font-mono text-white/70 transition-colors cursor-pointer"
                >
                  CALIBRATE INTERFEROMETER
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cyberminimalism Infinite Marquee */}
        <section className="py-2 border-y border-white/10">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.cyberminimalism.laserCleanroom, title: 'Cleanroom Waveguide Array', tag: 'CRYOGENIC' },
              { src: MEDIA_ASSETS.cyberminimalism.siliconWaveguide, title: 'Silicon Interferometer', tag: '1550NM' },
              { src: MEDIA_ASSETS.wireframe.cadSchematic, title: 'Optical Routing Mesh', tag: 'TOPOLOGY' },
              { src: MEDIA_ASSETS.terminal.serverAisles, title: 'Zero-Overhead Server Cluster', tag: 'BARE-METAL' }
            ]}
          />
        </section>

        {/* Technical Architecture Specs Grid */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4 text-xs font-mono">
            <span className="text-white/40">SYSTEM TOPOLOGY</span>
            <span className="text-[#00D2FF]">SPECIFICATION MATRIX</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                spec: '1550 NM DFB LASERS',
                val: 'Zero Thermal Phase Drift',
                desc: 'Continuous optical carrier modulation with cryogenic Peltier cooling.'
              },
              {
                spec: 'MACH-ZEHNDER GATES',
                val: '100 GHz Switching Rate',
                desc: 'Silicon-on-insulator phase modulators replacing CMOS transistors.'
              },
              {
                spec: 'BARE-METAL MICROKERNEL',
                val: '4.2 KB Memory Footprint',
                desc: 'Deterministic execution with zero garbage collection and zero task interrupts.'
              },
              {
                spec: 'OPTICAL MATRIX CORE',
                val: 'Single-Cycle GEMM',
                desc: 'Direct analog tensor matrix multiplication through waveguide crossbar arrays.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="border border-white/10 p-5 space-y-3 hover:border-[#00D2FF] transition-colors"
              >
                <div className="text-[10px] font-mono text-[#00D2FF]">ARCH_MODULE_0{idx + 1}</div>
                <h3 className="text-base font-bold font-space-grotesk text-white">{item.spec}</h3>
                <div className="text-xs font-mono text-white/80">{item.val}</div>
                <p className="text-xs text-white/40 font-mono leading-relaxed pt-2 border-t border-white/5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Waveguide Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h2 className="text-2xl font-bold font-space-grotesk text-white">SUB-PICOSECOND PHOTONIC ATLAS</h2>
            <span className="text-xs font-mono text-[#00D2FF]">SILICON WAVEGUIDE MICRONICS</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.cyberminimalism.laserCleanroom,
                title: 'Interferometer Bench',
                subtitle: 'Zero vibration optical isolation',
                category: 'CLEANROOM'
              },
              {
                src: MEDIA_ASSETS.cyberminimalism.siliconWaveguide,
                title: 'Photonic Die',
                subtitle: 'Silicon-nitride dielectric waveguide',
                category: 'FABRICATION'
              },
              {
                src: MEDIA_ASSETS.terminal.serverAisles,
                title: 'Quantum Interconnect',
                subtitle: 'Low-loss polarization-maintaining fiber',
                category: 'INFRASTRUCTURE'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <div>
            NEURO-ZERO ARCHITECTURE CORP // QUANTUM INTERCONNECT
          </div>
          <div>
            ABSOLUTE FUNCTIONALITY. ZERO SUPERFLUITY • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
