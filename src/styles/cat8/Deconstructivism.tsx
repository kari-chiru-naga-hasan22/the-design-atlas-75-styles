import React, { useState } from 'react';
import { ArrowUpRight, Compass, Layers, Shield, Zap, Maximize2 } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const DeconstructivismPage: React.FC = () => {
  const [selectedAxis, setSelectedAxis] = useState<number>(0);
  const [isExploded, setIsExploded] = useState<boolean>(false);

  const axes = [
    { name: 'AXIS-α • SHEAR ENVELOPE', angle: '-7.5°', stress: '48.2 MPa', desc: 'Cantilevered titanium skin over warped reinforced concrete truss.' },
    { name: 'AXIS-β • ROTATIONAL TORQUE', angle: '+14.2°', stress: '92.6 MPa', desc: 'Non-orthogonal double-curved hyperbolic atrium envelope.' },
    { name: 'AXIS-γ • VOID COLLISION', angle: '-21.8°', stress: '114.0 MPa', desc: 'Interpenetration of two tilted prismatic gallery volumes.' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] font-sans selection:bg-[#F97316] selection:text-black overflow-x-hidden relative">
      {/* Structural Vector Wireframe Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100" x2="100%" y2="800" stroke="#F97316" strokeWidth="1" strokeDasharray="6 6" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#334155" strokeWidth="1.5" />
          <line x1="20%" y1="0" x2="80%" y2="100%" stroke="#F8FAFC" strokeWidth="0.75" />
          <polygon points="200,50 850,220 600,600" fill="none" stroke="#F97316" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Fractured Asymmetric Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F97316] tracking-widest uppercase">
              <span className="w-2 h-2 bg-[#F97316]" />
              FRACTURE ARCHITECTURE LAB // NON-EUCLIDEAN
            </div>
            <div className="text-3xl sm:text-4xl font-black tracking-tighter uppercase font-space-grotesk">
              DECON<span className="text-[#F97316] inline-block transform -skew-x-12">STRUCT</span>IVISM
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button 
              onClick={() => setIsExploded(!isExploded)}
              className={`px-4 py-2 border transition-all cursor-pointer ${
                isExploded 
                  ? 'bg-[#F97316] text-black border-[#F97316] font-bold' 
                  : 'border-white/20 hover:border-[#F97316] text-white/80'
              }`}
            >
              [ EXPLODED AXONOMETRIC: {isExploded ? 'ACTIVE' : 'OFF'} ]
            </button>
            <span className="text-white/40">CALC_ENGINE v4.9</span>
          </div>
        </header>

        {/* Hero Section: Shattered Envelope & Tension Vectors */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F97316]">
                SPECULATIVE MORPHOLOGY • UNBUILT MANIFESTO
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] font-space-grotesk">
                THE CONTROLLED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#F97316] transform -rotate-1 inline-block">
                  FRAGMENTATION
                </span> <br />
                OF THE ENVELOPE.
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
                We reject the tyrannical tyranny of 90-degree right angles. 
                Architecture is a dynamic collision of tectonic forces, warped load paths, 
                and fractured titanium planes suspended in continuous kinetic equilibrium.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#schematics"
                className="px-8 py-4 bg-[#F97316] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[4px_4px_0px_#334155]"
              >
                ACCESS STRUCTURAL MODELS
              </a>
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <Shield className="w-4 h-4 text-[#F97316]" />
                FEA STRUCTURAL CONVERGENCE: 99.8%
              </div>
            </div>
          </div>

          {/* Hero Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className={`relative transition-all duration-700 p-3 bg-white/[0.03] border-2 border-[#F97316]/60 shadow-[8px_8px_0px_#F97316]/30 ${isExploded ? 'scale-105 rotate-1' : '-rotate-1'}`}>
              <ImageBox
                src={MEDIA_ASSETS.deconstructivism.zahaCurvedFaçade}
                alt="Curved Parametric Deconstructivist Architecture"
                aspectRatio="4/3"
                caption="Zaha Hadid Parametric Double-Curved Envelope. Non-orthogonal tension vectors."
                className="border border-white/20"
              />

              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                <span className="text-[#F97316]">TECTONIC PLATE // ZAHA-V9</span>
                <span className="text-white/60">STRESS: 92.6 MPa</span>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Marquee */}
        <section className="py-2 border-y border-white/10">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.deconstructivism.zahaCurvedFaçade, title: 'Double-Curved Titanium Envelope', tag: 'HADID' },
              { src: MEDIA_ASSETS.deconstructivism.gehryTitaniumShards, title: 'Fractured Titanium Shards', tag: 'GEHRY' },
              { src: MEDIA_ASSETS.monochromatic.blackWhiteArchitecture, title: 'Warped Cantilever Truss', tag: 'EISENMAN' },
              { src: MEDIA_ASSETS.wireframe.cadSchematic, title: 'FEA Stress Lattice', tag: 'LIBESKIND' }
            ]}
          />
        </section>

        {/* Structural Axes Selector */}
        <section id="schematics" className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <h2 className="text-2xl font-black uppercase tracking-tight font-space-grotesk">
              MOMENTUM AXES // LOAD DISTRIBUTION
            </h2>
            <span className="text-xs font-mono text-white/40">SELECT AXIS TO SIMULATE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {axes.map((axis, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedAxis(idx)}
                className={`p-6 border transition-all cursor-pointer relative overflow-hidden ${
                  selectedAxis === idx
                    ? 'border-[#F97316] bg-[#F97316]/10 translate-y-[-4px]'
                    : 'border-white/10 bg-white/5 hover:border-white/30'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-[#F97316] font-bold">0{idx + 1}</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-0.5">{axis.stress}</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-2 font-space-grotesk">{axis.name}</h3>
                <p className="text-xs text-white/70 leading-relaxed font-sans">{axis.desc}</p>
                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-white/40 flex justify-between">
                  <span>VECTOR TILT</span>
                  <span className="text-[#F97316] font-bold">{axis.angle}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deconstructivist Morphology Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
            <h2 className="text-2xl font-black uppercase tracking-tight font-space-grotesk">NON-EUCLIDEAN STRUCTURE ATLAS</h2>
            <span className="text-xs font-mono text-[#F97316]">MOMA 1988 EXHIBITION LEGACY</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.deconstructivism.zahaCurvedFaçade,
                title: 'Parametric Fluidity',
                subtitle: 'Double-curved cast concrete',
                category: 'ZAHA HADID'
              },
              {
                src: MEDIA_ASSETS.deconstructivism.gehryTitaniumShards,
                title: 'Fractured Cladding',
                subtitle: 'Interlocking zinc & titanium sheets',
                category: 'FRANK GEHRY'
              },
              {
                src: MEDIA_ASSETS.monochromatic.blackWhiteArchitecture,
                title: 'Cantilever Tension',
                subtitle: 'Floating volume intersection',
                category: 'PETER EISENMAN'
              }
            ]}
          />
        </section>

        {/* Architectural Footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-white/50">
          <div>
            FRACTURE ARCHITECTURE // NON-ORTHOGONAL GEOMETRIES LAB
          </div>
          <div>
            ZERO COMPROMISE WITH THE HORIZONTAL MATRIX • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
