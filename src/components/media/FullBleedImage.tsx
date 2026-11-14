import React from 'react';

export interface FullBleedImageProps {
  src: string;
  alt: string;
  headline?: string;
  subhead?: string;
  tag?: string;
  height?: 'h-96' | 'h-[500px]' | 'h-[650px]' | 'h-screen';
  overlay?: 'dark' | 'gradient' | 'red' | 'vignette';
  children?: React.ReactNode;
}

export const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  headline,
  subhead,
  tag,
  height = 'h-[500px]',
  overlay = 'gradient',
  children
}) => {
  const overlayClasses = {
    dark: 'bg-black/60',
    gradient: 'bg-gradient-to-t from-black via-black/40 to-transparent',
    red: 'bg-[#DC2626]/30 mix-blend-multiply',
    vignette: 'bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.85)_100%)]'
  }[overlay];

  return (
    <section className={`relative w-full ${height} overflow-hidden flex items-end text-white select-none`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className={`absolute inset-0 ${overlayClasses}`} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 pb-12 sm:pb-16 space-y-4">
        {tag && (
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-mono uppercase tracking-widest border border-white/30">
            {tag}
          </span>
        )}
        {headline && (
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-4xl leading-tight">
            {headline}
          </h2>
        )}
        {subhead && (
          <p className="text-base sm:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            {subhead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
