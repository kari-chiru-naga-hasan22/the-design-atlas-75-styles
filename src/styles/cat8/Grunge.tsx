import React, { useState } from 'react';
import { ArrowUpRight, Disc, Volume2, Radio, Music, Skull } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const GrungePage: React.FC = () => {
  const [tapePlaying, setTapePlaying] = useState<boolean>(true);
  const [activeFuzzTrack, setActiveFuzzTrack] = useState<number>(0);

  const playlist = [
    { track: 'BLEACHED CONCRETE', band: 'Mud River', duration: '3:42', cassetteSide: 'SIDE A' },
    { track: 'DISTORTION IN B-MINOR', band: 'Rusty Faucet', duration: '4:15', cassetteSide: 'SIDE A' },
    { track: 'BASEMENT REVERB FEEDBACK', band: 'Flannel Core', duration: '2:58', cassetteSide: 'SIDE B' },
    { track: 'SCUFFED CHUCK TAYLORS', band: 'Sub-Sonic', duration: '5:10', cassetteSide: 'SIDE B' }
  ];

  return (
    <div className="min-h-screen bg-[#1C1917] text-[#E7E5E4] font-sans selection:bg-[#8B4513] selection:text-white relative overflow-x-hidden">
      {/* Distressed Photocopy Noise Stains */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#4D4A38 1px, transparent 1px), radial-gradient(#8B4513 1px, transparent 1px)',
          backgroundSize: '20px 20px, 30px 30px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        
        {/* Torn Tape Header */}
        <header className="border-b-2 border-dashed border-[#8B4513] pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase text-[#E7E5E4]/70">
            <div className="flex items-center gap-2">
              <span className="bg-[#8B4513] text-white px-2 py-0.5 font-bold">SEATTLE, WA • 1991</span>
              <span>UNDERGROUND TAPE CASSETTE DISTRO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>TAPE MOTOR RUNNING</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tight font-syne text-[#E7E5E4] leading-none">
                SEATTLE <span className="text-[#8B4513] line-through decoration-[#4D4A38]">REVERB</span> ZINE
              </h1>
              <div className="text-xs font-mono uppercase tracking-widest text-[#E7E5E4]/60 mt-2">
                ISSUE #14 • PHOTOCOPIED AT 3AM AT KINKO’S • FREE WITH CASSETTE
              </div>
            </div>

            {/* Tape Controls */}
            <div className="bg-[#4D4A38]/40 border border-[#8B4513] p-3 flex items-center gap-3">
              <button 
                onClick={() => setTapePlaying(!tapePlaying)}
                className="px-4 py-1.5 bg-[#8B4513] text-white font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
              >
                {tapePlaying ? 'PAUSE ⏸' : 'PLAY ⏵'}
              </button>
              <div className="text-[11px] font-mono text-[#E7E5E4]/80">
                {playlist[activeFuzzTrack].track}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section: Torn Gig Flyer & Analog Distortion */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#4D4A38] text-[#E7E5E4] font-mono text-xs uppercase font-bold border border-[#8B4513] transform -rotate-1">
              THE NOISE WEAPON AGAINST COMMERCIAL POP
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-syne text-[#E7E5E4] leading-[0.95]">
              DISTORTED AMPS, <br />
              <span className="bg-[#E7E5E4] text-[#1C1917] px-2 inline-block transform rotate-1">
                TORN FLANNELS,
              </span> <br />
              FEEDBACK FOREVER.
            </h2>

            <p className="text-base sm:text-lg text-[#E7E5E4]/80 max-w-xl font-mono leading-relaxed">
              We don't have PR teams, pristine vocal compressors, or slick typography. 
              We have two cheap guitars plugged into overdriven Peavey cabinets, taped-up microphones, 
              and songs written in moldy basements during three months of continuous Pacific Northwest rain.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 bg-[#8B4513] text-white font-mono text-xs uppercase font-bold tracking-widest border border-[#E7E5E4]/30 hover:bg-[#E7E5E4] hover:text-black transition-all shadow-[4px_4px_0px_#4D4A38] cursor-pointer">
                ORDER C-60 CASSETTE SAMPLER [$5 CASH ONLY]
              </button>
              <span className="text-xs font-mono text-[#E7E5E4]/50">
                LIMITED 250 HAND-NUMBERED TAPES
              </span>
            </div>
          </div>

          {/* Hero Distressed Amplifier Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#292524] border-4 border-[#4D4A38] p-4 shadow-2xl space-y-4 rounded-lg transform -rotate-2">
              <ImageBox
                src={MEDIA_ASSETS.grunge.distressedAmplifier}
                alt="Distressed Marshall Tube Amplifier with Torn Grille Cloth"
                aspectRatio="4/3"
                caption="Overdriven tube half-stack with shredded grille cloth and analog feedback hum."
                className="border border-[#8B4513]"
              />

              {/* Tape Spool Window */}
              <div className="bg-[#1C1917] border-2 border-[#4D4A38] p-3 rounded flex items-center justify-between">
                <div className={`w-10 h-10 rounded-full border-2 border-dashed border-[#8B4513] flex items-center justify-center ${
                  tapePlaying ? 'animate-spin' : ''
                }`}>
                  <div className="w-3 h-3 bg-[#4D4A38] rounded-full" />
                </div>

                <div className="text-center font-mono text-xs">
                  <div className="text-xs font-bold text-[#E7E5E4]">
                    {playlist[activeFuzzTrack].cassetteSide}
                  </div>
                  <div className="text-[10px] text-[#8B4513]">
                    {playlist[activeFuzzTrack].track}
                  </div>
                </div>

                <div className={`w-10 h-10 rounded-full border-2 border-dashed border-[#8B4513] flex items-center justify-center ${
                  tapePlaying ? 'animate-spin' : ''
                }`}>
                  <div className="w-3 h-3 bg-[#4D4A38] rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {playlist.map((track, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveFuzzTrack(idx)}
                    className={`p-2 border text-[10px] font-mono flex justify-between cursor-pointer transition-colors ${
                      activeFuzzTrack === idx 
                        ? 'border-[#8B4513] bg-[#8B4513]/20 text-[#E7E5E4]' 
                        : 'border-transparent text-[#E7E5E4]/50 hover:text-white'
                    }`}
                  >
                    <span>{idx + 1}. {track.track}</span>
                    <span className="text-[#8B4513]">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seattle Grunge Infinite Marquee */}
        <section className="py-2 border-y-2 border-dashed border-[#8B4513] bg-[#292524]">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.grunge.distressedAmplifier, title: 'Marshall Tube Stack', tag: 'OVERDRIVE' },
              { src: MEDIA_ASSETS.grunge.seattleAlley, title: 'Pioneer Square Alley', tag: 'PACIFIC NW' },
              { src: MEDIA_ASSETS.retro70s.vintageAmplifier, title: 'Analog Tube Saturated Amp', tag: 'SUB POP' },
              { src: MEDIA_ASSETS.brutalism.barbicanConcrete, title: 'Raw Concrete Basement', tag: 'REVERB' }
            ]}
          />
        </section>

        {/* Grunge Visual Showcase Gallery */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight font-syne text-[#E7E5E4]">
              PACIFIC NORTHWEST NOISE ARCHIVE
            </h2>
            <div className="h-1 flex-1 bg-[#4D4A38]" />
            <span className="text-xs font-mono text-[#8B4513] font-bold">1988–1994</span>
          </div>

          <ImageGallery
            columns={3}
            theme="dark"
            items={[
              {
                src: MEDIA_ASSETS.grunge.distressedAmplifier,
                title: 'Peavey Bandmaster Half-Stack',
                subtitle: 'Saturated pre-amp tube break-up',
                category: 'HARDWARE'
              },
              {
                src: MEDIA_ASSETS.grunge.seattleAlley,
                title: 'Crocodile Alleyway',
                subtitle: 'Pioneer Square rain & poster layers',
                category: 'LOCATION'
              },
              {
                src: MEDIA_ASSETS.retro70s.vintageAmplifier,
                title: 'Vintage Sub Pop Amplifier',
                subtitle: 'Analog tube saturation and copper coils',
                category: 'MEDIA'
              }
            ]}
          />
        </section>

        {/* Gig Flyer Listings */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black uppercase tracking-tight font-syne">
              BASEMENT SHOW FLYERS
            </h2>
            <div className="h-1 flex-1 bg-[#4D4A38]" />
            <span className="text-xs font-mono text-[#8B4513] font-bold">ALL AGES • $4 AT DOOR</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                venue: 'THE CROCODILE CAFE',
                date: 'OCT 12, 1991',
                bands: 'NIRVANA + TAD + ELEVENTH HOUR',
                note: 'Doors 8pm. Bring earplugs. No stage diving.'
              },
              {
                venue: 'OFF RAMP TAVERN',
                date: 'NOV 04, 1991',
                bands: 'MUDHONEY + COFFIN BREAK',
                note: 'Beer specials. Zines distributed in alleyway.'
              },
              {
                venue: 'OK HOTEL BASEMENT',
                date: 'DEC 19, 1991',
                bands: 'SOUNDGARDEN + SCREAMING TREES',
                note: 'Under the Alaskan Way Viaduct. 100 capacity.'
              }
            ].map((show, idx) => (
              <div 
                key={idx}
                className="bg-[#292524] border-2 border-[#4D4A38] p-6 space-y-3 hover:border-[#8B4513] transition-colors relative"
              >
                <div className="text-xs font-mono text-[#8B4513] font-bold">{show.date}</div>
                <h3 className="text-xl font-black uppercase font-syne">{show.venue}</h3>
                <div className="text-xs font-mono text-[#E7E5E4] font-bold">{show.bands}</div>
                <p className="text-xs font-mono text-[#E7E5E4]/60 pt-2 border-t border-[#4D4A38]">
                  {show.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-dashed border-[#4D4A38] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#E7E5E4]/50">
          <div>
            SEATTLE REVERB ZINE // PHOTOCOPIED D.I.Y. GUILD
          </div>
          <div>
            NO SPONSORS • NO GLOSS PAPER • NO COMPROMISE • 1991–2026
          </div>
        </footer>

      </div>
    </div>
  );
};
