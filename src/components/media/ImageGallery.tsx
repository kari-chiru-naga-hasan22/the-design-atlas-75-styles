import React, { useState } from 'react';
import { ImageBox } from './ImageBox';
import { ArrowUpRight } from 'lucide-react';

export interface GalleryItem {
  id?: string | number;
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
  year?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4';
}

export interface ImageGalleryProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  gap?: 'gap-4' | 'gap-6' | 'gap-8';
  className?: string;
  theme?: 'swiss' | 'dark' | 'minimal' | 'pop';
  onItemClick?: (item: GalleryItem) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  columns = 3,
  gap = 'gap-6',
  className = '',
  theme = 'minimal',
  onItemClick
}) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const colClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  const cardStyle = {
    swiss: 'border-2 border-black bg-white hover:bg-neutral-50 p-3',
    dark: 'border border-white/10 bg-zinc-950 text-white p-4',
    minimal: 'bg-transparent p-0',
    pop: 'border-4 border-black bg-white shadow-[6px_6px_0px_#000000] p-4'
  }[theme];

  return (
    <div className={`grid ${colClass} ${gap} ${className}`}>
      {items.map((item, idx) => (
        <div
          key={item.id || idx}
          onClick={() => {
            setActiveItem(item);
            if (onItemClick) onItemClick(item);
          }}
          className={`cursor-pointer transition-all duration-300 group flex flex-col justify-between ${cardStyle}`}
        >
          <div className="space-y-3">
            <ImageBox
              src={item.src}
              alt={item.title}
              aspectRatio={item.aspectRatio || '4/3'}
              rounded="none"
              overlay={theme === 'dark' ? 'gradient' : 'none'}
              hoverZoom={true}
            />
            
            <div className="pt-2">
              <div className="flex justify-between items-baseline text-xs font-mono opacity-70 mb-1">
                {item.category && <span>{item.category}</span>}
                {item.year && <span>{item.year}</span>}
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight flex items-center justify-between">
                <span>{item.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              {item.subtitle && (
                <p className="text-xs opacity-75 mt-1 font-sans leading-relaxed">
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
