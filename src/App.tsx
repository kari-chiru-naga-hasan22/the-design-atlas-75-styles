import React, { useState, useEffect, useMemo } from 'react';
import { STYLES_DATA } from './data/stylesData';
import { STYLE_COMPONENTS } from './styles';
import { GalleryHome } from './components/gallery/GalleryHome';
import { AtlasHud } from './components/shared/AtlasHud';
import { LiquidRealityPage } from './components/liquid/LiquidRealityPage';
import { StyleMeta } from './types';
import { ArrowLeft, Compass, Sparkles } from 'lucide-react';

export function App() {
  // Extract initial style from hash or pathname
  const getStyleFromLocation = (): string | null => {
    // Check hash first: #/styles/:id or #:id or #/liquid-reality
    const hash = window.location.hash;
    if (hash) {
      if (hash.includes('liquid-reality') || hash.includes('liquid')) {
        return 'liquid-reality';
      }
      const match = hash.match(/#(?:(?:\/styles\/)|(?:\/))?([a-zA-Z0-9_-]+)/);
      if (match && match[1] && match[1] !== 'home') {
        return match[1];
      }
    }
    // Check pathname: /styles/:id or /liquid-reality
    const pathname = window.location.pathname;
    if (pathname.includes('liquid-reality') || pathname.includes('liquid')) {
      return 'liquid-reality';
    }
    const pathMatch = pathname.match(/\/styles\/([a-zA-Z0-9_-]+)/);
    if (pathMatch && pathMatch[1]) {
      return pathMatch[1];
    }
    return null;
  };

  const [activeStyleId, setActiveStyleId] = useState<string | null>(getStyleFromLocation);

  // Sync state with browser popstate and hashchange
  useEffect(() => {
    const handleLocationChange = () => {
      const detected = getStyleFromLocation();
      setActiveStyleId(detected);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Find style metadata
  const currentStyleMeta = useMemo<StyleMeta | undefined>(() => {
    if (!activeStyleId || activeStyleId === 'liquid-reality') return undefined;
    return (
      STYLES_DATA.find((s) => s.id === activeStyleId) ||
      STYLES_DATA.find((s) => s.num.toString() === activeStyleId)
    );
  }, [activeStyleId]);

  // Handle navigation to a style or liquid reality
  const handleSelectStyle = (styleId: string) => {
    setActiveStyleId(styleId);
    if (styleId === 'liquid-reality') {
      window.history.pushState(null, '', `#/liquid-reality`);
    } else {
      window.history.pushState(null, '', `#/styles/${styleId}`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Handle back to main exhibition gallery
  const handleBackToGallery = () => {
    setActiveStyleId(null);
    window.history.pushState(null, '', '#/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Scroll to top whenever style changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeStyleId]);

  // Flagship Project: Liquid Reality 3D Experience
  if (activeStyleId === 'liquid-reality' || activeStyleId === 'liquid') {
    return <LiquidRealityPage onBackToAtlas={handleBackToGallery} />;
  }

  // If on gallery home
  if (!activeStyleId) {
    return <GalleryHome onSelectStyle={handleSelectStyle} />;
  }

  // Get corresponding component
  const StyleComponent = currentStyleMeta ? STYLE_COMPONENTS[currentStyleMeta.id] : undefined;

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Persistent Floating Navigation HUD */}
      {currentStyleMeta && (
        <AtlasHud
          currentStyle={currentStyleMeta}
          onNavigate={handleSelectStyle}
          onBackToGallery={handleBackToGallery}
        />
      )}

      {/* Main Style Landing Page Container */}
      <main className="flex-1 w-full">
        {StyleComponent ? (
          <StyleComponent />
        ) : (
          <div className="max-w-2xl mx-auto py-32 text-center space-y-6 px-4">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h2 className="text-3xl font-black font-space">Style Exhibition Not Found</h2>
            <p className="text-sm text-white/60">
              The requested style specimen <code className="text-indigo-400">"{activeStyleId}"</code> could not be located in the permanent archives.
            </p>
            <button
              onClick={handleBackToGallery}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Main Exhibition
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
