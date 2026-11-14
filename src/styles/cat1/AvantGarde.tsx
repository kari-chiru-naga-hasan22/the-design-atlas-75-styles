import React, { useState } from 'react';
import { RefreshCw, Disc, ArrowUpRight } from 'lucide-react';
import { ImageBox, ImageGallery } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const AvantGardePage: React.FC = () => {
  const [frequency, setFrequency] = useState(432);
  const [anomalyMode, setAnomalyMode] = useState(false);

  const experiments = [
    {
      title: 'NON-EUCLIDEAN TOPOLOGY',
      subtitle: 'Spatial soundwave deformation recorded in anechoic chambers.',
      category: 'ACOUSTIC SCULPTURE',
      year: 'FREQ 432 HZ',
      src: MEDIA_ASSETS.avantGarde.spatialAbstract,
      aspectRatio: '4/3' as const
    },
    {
      title: 'PRISM OF REFRACTED GRAVITY',
      subtitle: 'Laser diffraction interfering with ferrofluid suspended in mid-air.',
      category: 'KINETIC INSTALLATION',
      year: 'FREQ 528 HZ',
      src: MEDIA_ASSETS.avantGarde.prismSculpture,
      aspectRatio: '4/3' as const
    },
    {
      title: 'HOLOGRAM OF THE ABSENT CHORD',
      subtitle: 'Volumetric light field projection oscillating at sub-audible infrasound.',
      category: 'DIMENSIONAL RESONANCE',
      year: 'FREQ 741 HZ',
      src: MEDIA_ASSETS.avantGarde.holographicObject,
      aspectRatio: '4/3' as const
    }
  ];

  return (
    <div className={`min-h-screen ${anomalyMode ? 'bg-[#F0FF00] text-black' : 'bg-[#08080C] text-white'} overflow-hidden transition-colors duration-500 font-syne selection:bg-[#FF003C] selection:text-white`}>
      {/* Avant-Garde Diagonal Tilted Grid Ribbon */}
      <div className="bg-[#FF003C] text-white py-2 text-xs font-mono font-bold tracking-widest uppercase overflow-hidden rotate-[-1.5deg] -mx-4 border-y-2 border-white">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          <span>/// ANOMALIA: EXPERIMENTAL ACOUSTIC DISORIENTATION</span>
          <span>SPATIAL AUDIO IN NON-EUCLIDEAN PLANES</span>
          <span>DO NOT ADJUST YOUR SENSORY RECEPTORS</span>
          <span>FREQUENCY SHIFT: {frequency} HZ</span>
        </div>
      </div>

      {/* Avant-Garde Deconstructed Navbar */}
      <nav className="p-6 md:p-10 flex items-start justify-between">
        <div className="rotate-[-4deg]">
          <span className="font-mono text-[10px] tracking-widest text-[#FF003C] block font-bold">
            00_ANOMALY
          </span>
          <div className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">
            ANO<span className="italic text-[#FF003C] underline">MALIA</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-3 rotate-[2deg]">
          <button
            onClick={() => setAnomalyMode(!anomalyMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-current text-xs font-mono font-bold uppercase hover:scale-105 transition-transform cursor-pointer"
          >
            <RefreshCw size={13} className={anomalyMode ? 'animate-spin' : ''} />
            <span>{anomalyMode ? 'REALITY: INVERTED' : 'INVERT PERCEPTION'}</span>
          </button>
          <div className="font-mono text-[10px] opacity-60">
            DIMENSIONAL FREQUENCY: {frequency}Hz
          </div>
        </div>
      </nav>

      {/* Hero Section: Rotated Plane & Deconstructed Typography with Real Spatial Art */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 rotate-[-2deg] space-y-6">
            <div className="inline-block px-3 py-1 bg-[#FF003C] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
              NON-LINEAR REALITY RESEARCH
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.88]">
              DECONSTRUCT <br />
              <span className="italic text-[#FF003C]">
                THE SOUND
              </span> <br />
              OF EXISTENCE.
            </h1>

            <p className="text-base sm:text-lg opacity-80 max-w-xl font-mono leading-relaxed">
              We collapse spatial coordinate axes through algorithmic acoustic interference. 
              Audio that wraps behind your retina. Visual forms that occupy two dimensions simultaneously.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => setFrequency(prev => prev === 432 ? 528 : prev === 528 ? 741 : 432)}
                className="px-6 py-3 bg-[#FF003C] text-white font-mono text-xs font-bold uppercase border-2 border-current hover:bg-black transition-colors"
              >
                SHIFT FREQUENCY [{frequency} HZ]
              </button>
              <span className="text-xs font-mono opacity-60">HARMONIC RATIO: φ = 1.618</span>
            </div>
          </div>

          {/* Hero Right: Tilted Experimental Spatial Sculpture Inset */}
          <div className="lg:col-span-5 rotate-[3deg]">
            <div className="p-4 border-4 border-current bg-black/40 shadow-2xl space-y-4">
              <div className="flex justify-between items-center text-xs font-mono border-b border-current pb-2">
                <span>SCULPTURE // SPECIMEN 07</span>
                <span className="text-[#FF003C] font-bold">ACTIVE PHENOMENON</span>
              </div>

              <ImageBox
                src={MEDIA_ASSETS.avantGarde.spatialAbstract}
                alt="Experimental Spatial Audio Topology"
                aspectRatio="1/1"
                rounded="none"
                border={true}
                borderColor="border-current"
                tag="SPATIAL ACOUSTIC CORE"
              />

              <div className="text-xs font-mono opacity-70">
                WAVELENGTH REFLECTION COEFFICIENT: 0.003
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Experimental Art Gallery */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-8 border-t-2 border-current">
        <div className="flex justify-between items-end border-b border-current pb-4">
          <div>
            <span className="text-xs font-mono uppercase text-[#FF003C] font-bold">
              DIMENSIONAL ARTIFACTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              PHYSICAL EXHIBITIONS
            </h2>
          </div>
          <span className="text-xs font-mono opacity-60">ANOMALIA LAB 2026</span>
        </div>

        <ImageGallery items={experiments} columns={3} theme="dark" />
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-current p-8 text-center text-xs font-mono opacity-60">
        ANOMALIA LAB // INSTITUTE FOR RADICAL ACOUSTIC DISORIENTATION • 2026
      </footer>
    </div>
  );
};
