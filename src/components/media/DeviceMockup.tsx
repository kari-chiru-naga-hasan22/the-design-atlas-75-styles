import React from 'react';

export interface DeviceMockupProps {
  type?: 'browser' | 'mobile';
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type = 'browser',
  url = 'https://atlas.design/specimen',
  title = 'System Viewport',
  children,
  className = ''
}) => {
  if (type === 'mobile') {
    return (
      <div className={`mx-auto max-w-sm rounded-[40px] border-8 border-neutral-800 bg-neutral-900 p-3 shadow-2xl ${className}`}>
        {/* Dynamic Island / Speaker Notch */}
        <div className="mx-auto mb-3 h-4 w-28 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[28px] bg-neutral-950">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden ${className}`}>
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/90 px-4 py-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <div className="mx-4 flex-1 max-w-md rounded-md bg-neutral-950 px-3 py-1 text-center text-neutral-400 text-[11px] truncate border border-neutral-800">
          🔒 {url}
        </div>

        <div className="text-neutral-500 text-[10px] uppercase">
          {title}
        </div>
      </div>

      <div className="relative">
        {children}
      </div>
    </div>
  );
};
