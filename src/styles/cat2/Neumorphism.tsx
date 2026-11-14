import React, { useState } from 'react';
import { Volume2, Power, Disc, Radio, Sliders, Activity, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery, ProductShowcase } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const NeumorphismPage: React.FC = () => {
  const [knobCutoff, setKnobCutoff] = useState(65);
  const [knobResonance, setKnobResonance] = useState(40);
  const [activePad, setActivePad] = useState<number | null>(null);
  const [powerOn, setPowerOn] = useState(true);

  const pads = [
    { label: 'KICK 909', note: 'C1' },
    { label: 'SNARE FAT', note: 'D1' },
    { label: 'CLOSED HAT', note: 'F#1' },
    { label: 'OPEN HAT', note: 'A#1' },
    { label: 'SUB BASS', note: 'E1' },
    { label: 'FM CHORD', note: 'G1' },
    { label: 'VOCODER', note: 'B1' },
    { label: 'GLITCH SHOT', note: 'C2' }
  ];

  const hardwareGalleries = [
    {
      title: 'ANALOG MASTERING CONSOLE',
      subtitle: 'Discrete Class-A transformer-balanced summing mixer with dual VU meters.',
      category: 'HARDWARE RACK',
      year: 'SERIES 800',
      src: MEDIA_ASSETS.neumorphism.hardwareConsole,
      aspectRatio: '4/3' as const
    },
    {
      title: 'CNC-MACHINED POTENTIOMETERS',
      subtitle: 'Brushed solid aluminum control knobs with tactile detents.',
      category: 'TACTILE INTERFACE',
      year: 'T-800',
      src: MEDIA_ASSETS.neumorphism.audioDials,
      aspectRatio: '4/3' as const
    },
    {
      title: 'OPTICAL MOTORIZED FADERS',
      subtitle: '100mm ultra-smooth motorized conductive plastic faders with sub-millimeter precision.',
      category: 'MIX ENGINE',
      year: 'CALIBRATED',
      src: MEDIA_ASSETS.neumorphism.analogFaders,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#E0E5EC] text-[#2D3748] font-sans selection:bg-[#F59E0B] selection:text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Hardware Synthesizer Header Console */}
        <header className="p-6 rounded-3xl bg-[#E0E5EC] shadow-[10px_10px_20px_#A3B1C6,-10px_-10px_20px_#FFFFFF] flex flex-wrap items-center justify-between gap-6 border border-white/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF] flex items-center justify-center">
              <Activity size={24} className={powerOn ? 'text-[#F59E0B]' : 'text-gray-400'} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight font-space text-[#1A202C]">
                TACTILIS T-800
              </h1>
              <div className="text-xs font-mono tracking-widest text-[#718096] uppercase">
                HYBRID ANALOG-NEUMORPHIC WORKSTATION
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#718096]">STATUS:</span>
              <span className={`w-3 h-3 rounded-full ${powerOn ? 'bg-[#10B981] shadow-[0_0_8px_#10B981]' : 'bg-gray-400'}`} />
              <span className="text-xs font-mono font-bold">{powerOn ? 'OPERATIONAL' : 'STANDBY'}</span>
            </div>

            <button
              onClick={() => setPowerOn(!powerOn)}
              className={`p-3 rounded-2xl transition-all cursor-pointer ${
                powerOn
                  ? 'bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF] text-[#F59E0B]'
                  : 'bg-[#E0E5EC] shadow-[6px_6px_12px_#A3B1C6,-6px_-6px_12px_#FFFFFF] text-gray-500 hover:text-black'
              }`}
            >
              <Power size={18} />
            </button>
          </div>
        </header>

        {/* Hero Section: Real Hardware Console Image & Tactile Controls */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#E0E5EC] shadow-[12px_12px_24px_#A3B1C6,-12px_-12px_24px_#FFFFFF] border border-white/60 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E0E5EC] shadow-[inset_3px_3px_6px_#A3B1C6,inset_-3px_-3px_6px_#FFFFFF] text-[#F59E0B] font-mono text-xs font-bold uppercase tracking-wider">
              TACTILE SYNTHESIS ENGINE
            </span>

            <h2 className="text-3xl sm:text-5xl font-black font-space tracking-tight text-[#1A202C] leading-tight">
              SOFT EMBOSSED DEPTH. PURE HARDWARE FEEL.
            </h2>

            <p className="text-sm text-[#4A5568] leading-relaxed">
              Every knob, recessed pad, and extruded chassis plate is engineered to simulate physical light and shadow. Seamless dual-shadow extrusion mimicking molded matte polymer.
            </p>

            {/* Tactile Pads Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-[#718096] uppercase tracking-wider">
                TRIGGER SAMPLE PADS:
              </div>
              <div className="grid grid-cols-4 gap-3">
                {pads.map((pad, idx) => (
                  <button
                    key={idx}
                    onMouseDown={() => setActivePad(idx)}
                    onMouseUp={() => setActivePad(null)}
                    className={`p-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-between h-18 ${
                      activePad === idx
                        ? 'bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF] text-[#F59E0B] scale-95'
                        : 'bg-[#E0E5EC] shadow-[5px_5px_10px_#A3B1C6,-5px_-5px_10px_#FFFFFF] text-[#2D3748] hover:text-[#F59E0B]'
                    }`}
                  >
                    <span>{pad.note}</span>
                    <span className="text-[10px] opacity-70">{pad.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Right: Real Hardware Console Photography Plate */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#E0E5EC] shadow-[12px_12px_24px_#A3B1C6,-12px_-12px_24px_#FFFFFF] border border-white/60 space-y-4">
            <div className="flex justify-between items-center text-xs font-mono text-[#718096]">
              <span>CONSOLE TELEMETRY</span>
              <span className="text-[#F59E0B] font-bold">ANALOGUE CLASS A</span>
            </div>

            <div className="p-2 rounded-2xl bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#A3B1C6,inset_-4px_-4px_8px_#FFFFFF] overflow-hidden">
              <ImageBox
                src={MEDIA_ASSETS.neumorphism.hardwareConsole}
                alt="Tactilis Professional Mastering Console Hardware"
                aspectRatio="4/3"
                rounded="xl"
                tag="DISCRETE HYBRID"
              />
            </div>

            <div className="flex justify-between items-center text-xs font-mono pt-2">
              <span>FREQUENCY CUTOFF: {knobCutoff}%</span>
              <span>RESONANCE: {knobResonance}%</span>
            </div>
          </div>
        </section>

        {/* 3-Column Hardware Gallery */}
        <section className="space-y-6">
          <div className="flex justify-between items-end border-b border-[#A3B1C6]/40 pb-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#F59E0B] font-bold">
                TACTILE COMPONENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-space text-[#1A202C]">
                Hardware Sub-Assemblies
              </h3>
            </div>
            <span className="text-xs font-mono text-[#718096]">TACTILIS LAB 2026</span>
          </div>

          <ImageGallery items={hardwareGalleries} columns={3} theme="minimal" />
        </section>

        {/* Footer */}
        <footer className="p-6 rounded-2xl bg-[#E0E5EC] shadow-[6px_6px_12px_#A3B1C6,-6px_-6px_12px_#FFFFFF] text-center text-xs font-mono text-[#718096]">
          TACTILIS AUDIOWORKS // NEUMORPHIC HARDWARE HYBRID • 2026
        </footer>
      </div>
    </div>
  );
};
