import React, { useState } from 'react';
import { Heart, Sun, Coffee, Sparkles, ShoppingBag, Flower2 } from 'lucide-react';
import { ImageBox, ImageGallery, InfiniteImageMarquee } from '../../components/media';
import { MEDIA_ASSETS } from '../../data/mediaAssets';

export const CottagecorePage: React.FC = () => {
  const [jarsInCart, setJarsInCart] = useState(2);

  return (
    <div className="min-h-screen bg-[#FEF9E7] text-[#374151] font-serif selection:bg-[#D97706] selection:text-white p-4 sm:p-8">
      {/* Country Cottage Page Container with Gingham Pattern Header */}
      <div className="max-w-5xl mx-auto bg-white border-2 border-[#D97706]/40 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10 relative overflow-hidden">
        
        {/* Country Kitchen Header */}
        <header className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-dashed border-[#D97706]/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] border border-[#D97706] flex items-center justify-center text-2xl shadow-inner">
              🍯
            </div>
            <div>
              <div className="text-3xl font-bold font-playfair tracking-tight text-[#78350F]">
                Honeysuckle Hollow
              </div>
              <div className="text-xs font-newsreader italic text-[#B45309]">
                Heirloom wildflower apiary, country orchard preserves & herbal teas
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-playfair italic text-[#78350F]">
            <a href="#honey" className="hover:text-[#D97706] transition-colors">Raw Honey</a>
            <a href="#bakery" className="hover:text-[#D97706] transition-colors">Sourdough Bakery</a>
            <a href="#orchard" className="hover:text-[#D97706] transition-colors">Autumn Orchard</a>
          </div>

          <button 
            onClick={() => setJarsInCart(j => j + 1)}
            className="px-5 py-2.5 rounded-full bg-[#D97706] hover:bg-[#b45309] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            <span>Pantry Basket ({jarsInCart})</span>
          </button>
        </header>

        {/* Hero Section: Pastoral Slow Living */}
        <section className="text-center space-y-6 max-w-3xl mx-auto py-4">
          <div className="inline-block px-4 py-1 rounded-full bg-[#FEF3C7] border border-[#D97706]/40 text-xs font-sans text-[#92400E]">
            ~ Freshly churned butter, warm loaves & wildflower combs ~
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-playfair italic text-[#78350F] leading-tight">
            Slow pastoral mornings in the valley.
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-newsreader max-w-xl mx-auto">
            Where the kettle always whistles upon the cast-iron stove, honeycombs drip into earthenware crock pots, and wildflowers are gathered by the apronful before noon.
          </p>

          {/* Hero Visual Composition: Thatched Country Cottage & Garden */}
          <div className="pt-4 max-w-2xl mx-auto p-3 bg-[#FEF9E7] border-2 border-[#D97706]/40 rounded-2xl shadow-[6px_6px_0_#D97706]/20">
            <ImageBox
              src={MEDIA_ASSETS.cottagecore.countryCottage}
              alt="English Thatched Country Cottage with Blooming Rose Garden and Stone Chimney"
              aspectRatio="16/9"
              rounded="xl"
              caption="17th-century flint stone cottage with rambling climbing roses and vegetable garden"
            />
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button 
              onClick={() => setJarsInCart(j => j + 1)}
              className="px-8 py-3.5 rounded-full bg-[#D97706] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#b45309] transition-all cursor-pointer"
            >
              Order Summer Honeycomb Jar ($22)
            </button>
            <button className="px-8 py-3.5 rounded-full bg-[#FEF9E7] border border-[#D97706]/40 text-[#78350F] font-sans font-bold text-xs uppercase tracking-wider hover:bg-amber-100 transition-all cursor-pointer">
              Read Cottage Recipes
            </button>
          </div>
        </section>

        {/* Infinite Country Garden Marquee */}
        <div className="border-2 border-dashed border-[#D97706]/30 p-2 bg-[#FEF9E7] rounded-2xl">
          <InfiniteImageMarquee
            speed="normal"
            images={[
              { src: MEDIA_ASSETS.cottagecore.countryCottage, title: 'English Thatch Cottage', tag: 'COTSWOLDS' },
              { src: MEDIA_ASSETS.cottagecore.wildflowers, title: 'Meadow Cornflowers', tag: 'WILDFLOWERS' },
              { src: MEDIA_ASSETS.illustrative.watercolorStorybook, title: 'Fairytale Pantry', tag: 'HEIRLOOM' },
              { src: MEDIA_ASSETS.handDrawn.inkSketchbook, title: 'Botanical Herbarium', tag: 'LAVENDER' }
            ]}
          />
        </div>

        {/* 3 Farmhouse Pantry Favorites Gallery */}
        <section id="honey" className="space-y-6 pt-2">
          <div className="flex justify-between items-baseline border-b-2 border-dashed border-[#D97706]/30 pb-3">
            <h3 className="text-2xl font-bold font-playfair text-[#78350F]">Farmstead Pantry & Meadow Botanicals</h3>
            <span className="font-newsreader italic text-xs text-[#B45309]">Fresh Harvest • Cotswolds Valley</span>
          </div>

          <ImageGallery
            columns={3}
            theme="minimal"
            items={[
              {
                src: MEDIA_ASSETS.cottagecore.wildflowers,
                title: 'Lavender & Wild Meadow Flowers',
                subtitle: 'Freshly cut stems gathered at dawn before morning dew evaporates',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.cottagecore.countryCottage,
                title: 'The Orchard Stone Bakehouse',
                subtitle: 'Wood-fired brick oven sourdough loaves baked with stoneground spelt flour',
                aspectRatio: '4/3'
              },
              {
                src: MEDIA_ASSETS.illustrative.watercolorStorybook,
                title: 'Summer Honeycomb Harvest',
                subtitle: 'Unfiltered clover and wild blackberry nectar stored in glass preserving jars',
                aspectRatio: '4/3'
              }
            ]}
          />
        </section>

        {/* Cottage Footer */}
        <footer className="pt-8 border-t-2 border-dashed border-[#D97706]/30 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#92400E] gap-4">
          <div>HONEYSUCKLE HOLLOW FARMSTEAD • VERMONT APPLE ORCHARDS</div>
          <div>HAND-PACKED WITH LOVE • © 2026</div>
        </footer>
      </div>
    </div>
  );
};
