import React from 'react';
import { ImageBox } from './ImageBox';

export interface EditorialImageProps {
  src: string;
  alt: string;
  plateNumber?: string;
  headline?: string;
  caption: string;
  photographer?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | '21/9';
  className?: string;
  theme?: 'light' | 'dark' | 'swiss' | 'sepia';
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  plateNumber = 'PLATE NO. 01',
  headline,
  caption,
  photographer,
  aspectRatio = '4/3',
  className = '',
  theme = 'light'
}) => {
  const themeStyles = {
    light: 'bg-white text-zinc-900 border-zinc-200',
    dark: 'bg-zinc-950 text-white border-zinc-800',
    swiss: 'bg-white text-black border-black',
    sepia: 'bg-[#FDF6E2] text-[#3B2F2F] border-[#D4AF37]/40'
  }[theme];

  return (
    <div className={`border p-4 sm:p-6 space-y-4 ${themeStyles} ${className}`}>
      <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase opacity-70 border-b pb-2 border-current">
        <span>{plateNumber}</span>
        {photographer && <span>COLLECTION // {photographer}</span>}
      </div>

      <ImageBox
        src={src}
        alt={alt}
        aspectRatio={aspectRatio}
        rounded="none"
        border={theme === 'swiss'}
        borderColor="border-black"
      />

      <div className="space-y-1.5 pt-1">
        {headline && (
          <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight font-sans">
            {headline}
          </h4>
        )}
        <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-sans">
          {caption}
        </p>
      </div>
    </div>
  );
};
