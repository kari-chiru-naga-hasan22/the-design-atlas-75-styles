import React, { useState } from 'react';
import { ImageBox } from './ImageBox';
import { Eye, Shield, Sparkles, Check } from 'lucide-react';

export interface ProductAngle {
  label: string;
  src: string;
}

export interface ProductShowcaseProps {
  name: string;
  category: string;
  price?: string;
  description: string;
  specs: { label: string; value: string }[];
  images: ProductAngle[];
  theme?: 'dark' | 'light' | 'swiss' | 'cyber';
  accentColor?: string;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  name,
  category,
  price,
  description,
  specs,
  images,
  theme = 'dark',
  accentColor = '#FF3B30'
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const containerStyle = {
    dark: 'bg-zinc-950 text-white border-white/10',
    light: 'bg-white text-zinc-900 border-zinc-200',
    swiss: 'bg-white text-black border-2 border-black',
    cyber: 'bg-black text-[#00D2FF] border border-[#00D2FF]/40'
  }[theme];

  return (
    <div className={`p-6 sm:p-10 border ${containerStyle} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
      {/* Visual Canvas Area */}
      <div className="lg:col-span-7 space-y-4">
        <div className="relative overflow-hidden bg-neutral-900/50 p-2">
          <ImageBox
            src={images[activeImageIndex]?.src || ''}
            alt={`${name} - ${images[activeImageIndex]?.label}`}
            aspectRatio="4/3"
            rounded="none"
            hoverZoom={true}
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 text-white font-mono text-[10px] uppercase tracking-widest border border-white/20">
            {images[activeImageIndex]?.label || 'MAIN VIEW'}
          </div>
        </div>

        {/* Thumbnail Selector */}
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`p-1 border transition-all cursor-pointer ${
                activeImageIndex === idx
                  ? 'border-current scale-105 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-14 object-cover"
              />
              <span className="block text-[10px] font-mono text-center mt-1 truncate">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Information & Technical Specs */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest opacity-70 block mb-1">
            {category}
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            {name}
          </h3>
          {price && (
            <div className="text-xl font-mono font-bold mt-2" style={{ color: accentColor }}>
              {price}
            </div>
          )}
        </div>

        <p className="text-sm opacity-80 leading-relaxed font-sans">
          {description}
        </p>

        {/* Specs Table */}
        <div className="border-t border-current/20 pt-4 space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest opacity-60 mb-2">
            SPECIFICATION MATRIX:
          </div>
          {specs.map((s, idx) => (
            <div key={idx} className="flex justify-between items-center text-xs font-mono border-b border-current/10 pb-1.5">
              <span className="opacity-70">{s.label}</span>
              <span className="font-bold">{s.value}</span>
            </div>
          ))}
        </div>

        <button
          className="w-full py-4 font-mono text-xs uppercase font-bold tracking-widest transition-all cursor-pointer shadow-md"
          style={{
            backgroundColor: theme === 'swiss' ? '#000' : accentColor,
            color: theme === 'swiss' ? '#FFF' : '#000'
          }}
        >
          COMMISSION PIECE
        </button>
      </div>
    </div>
  );
};
