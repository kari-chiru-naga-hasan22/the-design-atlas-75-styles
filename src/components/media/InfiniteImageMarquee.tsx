import React from 'react';

export interface MarqueeImage {
  src: string;
  title: string;
  tag?: string;
}

export interface InfiniteImageMarqueeProps {
  images: MarqueeImage[];
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'left' | 'right';
  className?: string;
}

export const InfiniteImageMarquee: React.FC<InfiniteImageMarqueeProps> = ({
  images,
  speed = 'normal',
  direction = 'left',
  className = ''
}) => {
  const duration = {
    slow: '40s',
    normal: '25s',
    fast: '15s'
  }[speed];

  // Duplicate list so the loop is seamless
  const duplicated = [...images, ...images];

  return (
    <div className={`w-full overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <div
        className="inline-flex gap-6 animate-[marquee_linear_infinite]"
        style={{
          animationDuration: duration,
          animationDirection: direction === 'right' ? 'reverse' : 'normal'
        }}
      >
        {duplicated.map((img, idx) => (
          <div
            key={idx}
            className="inline-block w-64 sm:w-80 flex-shrink-0 group relative overflow-hidden border border-black/20 bg-neutral-900"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-3 bg-white dark:bg-black border-t border-black/10 flex justify-between items-center text-xs font-mono">
              <span className="font-bold truncate">{img.title}</span>
              {img.tag && <span className="opacity-60 text-[10px]">{img.tag}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
