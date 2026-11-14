import React, { useState } from 'react';

export interface ImageBoxProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '21/9' | 'auto';
  className?: string;
  caption?: string;
  credit?: string;
  tag?: string;
  overlay?: 'none' | 'gradient' | 'dark' | 'vignette' | 'red' | 'cyber';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  border?: boolean;
  borderColor?: string;
  hoverZoom?: boolean;
  fallbackText?: string;
}

export const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  caption,
  credit,
  tag,
  overlay = 'none',
  rounded = 'none',
  border = false,
  borderColor = 'border-black/20',
  hoverZoom = true,
  fallbackText
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    '21/9': 'aspect-[21/9]',
    'auto': 'h-auto'
  }[aspectRatio];

  const roundedClass = {
    'none': 'rounded-none',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'xl': 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    'full': 'rounded-full'
  }[rounded];

  const overlayClasses = {
    none: '',
    gradient: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent',
    dark: 'bg-black/40',
    vignette: 'bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.7)_100%)]',
    red: 'bg-[#DC2626]/20 mix-blend-multiply',
    cyber: 'bg-gradient-to-tr from-[#00D2FF]/20 via-transparent to-[#FF007F]/20'
  }[overlay];

  return (
    <figure className={`relative group overflow-hidden ${roundedClass} ${border ? `border ${borderColor}` : ''} ${className}`}>
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-zinc-900`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ${
              hoverZoom ? 'group-hover:scale-105' : ''
            } ${isLoaded ? 'opacity-100 filter-none' : 'opacity-0 blur-sm'}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-900 text-zinc-400 text-center select-none">
            <div className="w-10 h-10 mb-2 border border-current rounded-full flex items-center justify-center opacity-60">
              🖼
            </div>
            <span className="text-xs font-mono uppercase tracking-wider">{fallbackText || alt}</span>
          </div>
        )}

        {/* Shimmer loading placeholder while loading */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 animate-pulse" />
        )}

        {/* Overlay treatment */}
        {overlay !== 'none' && (
          <div className={`absolute inset-0 pointer-events-none transition-opacity ${overlayClasses}`} />
        )}

        {/* Tag Badge */}
        {tag && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
            {tag}
          </div>
        )}
      </div>

      {/* Caption & Credit */}
      {(caption || credit) && (
        <figcaption className="mt-2 flex items-baseline justify-between gap-4 text-xs font-mono text-zinc-500">
          {caption && <span className="font-medium text-zinc-700 dark:text-zinc-300">{caption}</span>}
          {credit && <span className="text-[10px] uppercase tracking-wider opacity-70">PHOTO: {credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};
