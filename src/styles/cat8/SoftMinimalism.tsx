import React, { useState } from 'react';
import { ArrowUpRight, Heart, Feather, Sparkles, Coffee, Smile } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const SoftMinimalismPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<'lounge' | 'sanctuary' | 'atelier'>('sanctuary');

  const rooms = {
    sanctuary: {
      name: 'The Quiet Sanctuary',
      fabric: 'Unbleached Belgian Linen',
      temperature: '21.5°C',
      atmosphere: 'Filtered morning sun, warm oat milk, silent acoustic felt paneling.'
    },
    lounge: {
      name: 'The Cashmere Hearth',
      fabric: 'Brushed Mongolian Cashmere',
      temperature: '22.0°C',
      atmosphere: 'Soft curved boucle armchairs, low oak tables, burning cedar incense.'
    },
    atelier: {
      name: 'The Contemplative Study',
      fabric: 'Muted Wool Twill',
      temperature: '20.8°C',
      atmosphere: 'Soft rounded oak desk, handmade cotton paper, tactile ceramic mugs.'
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#332F2C] font-sans selection:bg-[#EFECE6] selection:text-[#332F2C] relative">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        
        {/* Serene Pill Navigation Header */}
        <header className="flex justify-between items-center py-4 border-b border-[#EFECE6]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#8C827A]">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl font-normal font-playfair tracking-tight text-[#332F2C]">
                Serena Quiet Home
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#8C827A]">
                Slow Living & Warm Tactile Sanctuaries
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8C827A] hidden sm:inline">Living Atmosphere:</span>
            <div className="bg-[#EFECE6] px-3 py-1 rounded-full text-xs font-medium text-[#332F2C]">
              {rooms[selectedRoom].temperature} Calm
            </div>
          </div>
        </header>

        {/* Hero Section: Cashmere Warmth & Gentle Curves */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#8C827A] text-xs font-mono uppercase tracking-widest">
              Soft Minimalism • Human Scale Living
            </div>

            <h1 className="text-4xl sm:text-6xl font-normal font-playfair text-[#332F2C] leading-[1.15]">
              Space to breathe, <br />
              <span className="italic font-light text-[#8C827A]">
                textures to hold,
              </span> <br />
              warmth to return home to.
            </h1>

            <p className="text-base sm:text-lg text-[#8C827A] max-w-xl font-light leading-relaxed">
              We design homes and objects that do not demand attention. 
              Subtle tones of oat milk and cashmere, gentle rounded contours, and honest organic materials 
              that soften the harshness of the modern world.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-8 py-4 rounded-full bg-[#332F2C] text-[#FDFBF7] text-xs font-medium uppercase tracking-widest hover:bg-[#8C827A] transition-colors shadow-sm cursor-pointer">
                Explore The Collection
              </button>
              <span className="text-xs text-[#8C827A]">
                Certified Oeko-Tex Standard 100
              </span>
            </div>
          </div>

          {/* Hero Soft Minimalism Media Container */}
          <div className="lg:col-span-5">
            <div className="bg-[#EFECE6]/50 rounded-3xl p-6 border border-[#EFECE6] shadow-sm space-y-6">
              <ImageBox
                src={MEDIA_ASSETS.softMinimalism.cashmereLounge}
                alt="Soft Cashmere Bouclé Lounge Sanctuary"
                aspectRatio="4/3"
                caption="Warm curved bouclé seating and unbleached Belgian linen drapery under soft morning daylight."
                className="rounded-2xl overflow-hidden border border-[#EFECE6]"
              />

              {/* Three Pill Tab Switches */}
              <div className="grid grid-cols-3 gap-2 bg-[#FDFBF7] p-1.5 rounded-full border border-[#EFECE6]">
                {(['sanctuary', 'lounge', 'atelier'] as const).map((room) => (
                  <button
                    key={room}
                    onClick={() => setSelectedRoom(room)}
                    className={`py-2 rounded-full text-xs font-medium capitalize transition-all cursor-pointer ${
                      selectedRoom === room
                        ? 'bg-[#EFECE6] text-[#332F2C] shadow-sm'
                        : 'text-[#8C827A] hover:text-[#332F2C]'
                    }`}
                  >
                    {room}
                  </button>
                ))}
              </div>

              {/* Room details card */}
              <div className="bg-[#FDFBF7] rounded-2xl p-4 border border-[#EFECE6] space-y-2 text-xs text-[#8C827A]">
                <div className="flex justify-between border-b border-[#EFECE6] pb-1.5">
                  <span>PRIMARY TEXTURE</span>
                  <span className="text-[#332F2C] font-medium">{rooms[selectedRoom].fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span>ATMOSPHERE</span>
                  <span className="text-[#332F2C] font-medium">{rooms[selectedRoom].temperature}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Minimal Infinite Marquee */}
        <section className="py-2 border-y border-[#EFECE6]">
          <InfiniteImageMarquee
            speed="slow"
            images={[
              { src: MEDIA_ASSETS.softMinimalism.cashmereLounge, title: 'Cashmere Bouclé Lounge', tag: 'COMFORT' },
              { src: MEDIA_ASSETS.softMinimalism.calmSunlight, title: 'Sunlit Belgian Linen', tag: 'SANCTUARY' },
              { src: MEDIA_ASSETS.scandinavian.copenhagenApartment, title: 'Curved Blonde Oak', tag: 'CRAFT' },
              { src: MEDIA_ASSETS.japandi.ceramicTeaware, title: 'Tactile Ceramic Teaware', tag: 'RITUAL' }
            ]}
          />
        </section>

        {/* Tactile Living Elements Gallery */}
        <section className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8C827A]">
              Tactile Living Spaces
            </span>
            <h2 className="text-3xl font-playfair font-normal text-[#332F2C]">
              Quiet Havens for Daily Rest
            </h2>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.softMinimalism.cashmereLounge,
                title: 'The Cashmere Hearth',
                subtitle: 'Brushed Mongolian cashmere & wool boucle',
                category: 'LOUNGE'
              },
              {
                src: MEDIA_ASSETS.softMinimalism.calmSunlight,
                title: 'Morning Sun Sanctuary',
                subtitle: 'Filtered daylight through flax drapery',
                category: 'SANCTUARY'
              },
              {
                src: MEDIA_ASSETS.scandinavian.copenhagenApartment,
                title: 'The Tactile Atelier',
                subtitle: 'Hand-rubbed beeswax on blonde oak',
                category: 'STUDY'
              }
            ]}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#EFECE6] pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8C827A]">
          <div>
            Serena Quiet Home Studio • Copenhagen & Kyoto
          </div>
          <div>
            Designed with kindness and warm natural materials • 2026
          </div>
        </footer>

      </div>
    </div>
  );
};
