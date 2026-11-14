import React, { useState, useMemo, useEffect, useRef } from 'react';
import { STYLES_DATA, CATEGORIES } from '../../data/stylesData';
import { StyleMeta } from '../../types';
import { Search, Sparkles, Filter, ArrowUpRight, Compass, Eye, Shuffle, Layers, BookOpen, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { StyleBriefModal } from '../shared/StyleBriefModal';

interface GalleryHomeProps {
  onSelectStyle: (styleId: string) => void;
}

export const GalleryHome: React.FC<GalleryHomeProps> = ({ onSelectStyle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Styles');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const [inspectingStyle, setInspectingStyle] = useState<StyleMeta | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background generative ambient canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 480);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = 480;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle matrix connection
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.8,
      color: ['#38BDF8', '#818CF8', '#C084FC', '#F472B6', '#34D399'][Math.floor(Math.random() * 5)]
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Filter styles based on search, category, and tag
  const filteredStyles = useMemo(() => {
    return STYLES_DATA.filter((style) => {
      const matchesSearch =
        searchQuery === '' ||
        style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.brandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All Styles' || style.category === selectedCategory;

      const matchesTag =
        selectedTag === null || style.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Unique tags across all styles
  const allTags = useMemo(() => {
    const set = new Set<string>();
    STYLES_DATA.forEach(s => s.tags.forEach(t => set.add(t)));
    return Array.from(set).slice(0, 20); // Top 20 tags
  }, []);

  const handleRandomStyle = () => {
    const random = STYLES_DATA[Math.floor(Math.random() * STYLES_DATA.length)];
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.2 } });
    setTimeout(() => onSelectStyle(random.id), 400);
  };

  return (
    <div className="min-h-screen bg-[#07080D] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Exhibition Header */}
      <div className="relative border-b border-white/10 overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none opacity-40"
        />

        {/* Ambient radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/10 blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-wider text-white/80 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            The Definitive Exhibition • 75 Independent Aesthetics
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne tracking-tight leading-[1.05] text-white">
            THE DESIGN <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">ATLAS</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
            An award-winning interactive museum of <strong className="text-white font-medium">75 distinct website design styles</strong>. 
            Each landing page is individually art-directed with its own brand identity, typography hierarchy, custom layout composition, color science, and tailored motion.
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">75</span> Handcrafted Styles
            </div>
            <span className="opacity-30">•</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">8</span> Aesthetic Eras
            </div>
            <span className="opacity-30">•</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">100%</span> Original Art Direction
            </div>
            <span className="opacity-30">•</span>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">0</span> Generic SaaS Clones
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onSelectStyle('liquid-reality')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-violet-500/30 hover:scale-105 transition-all cursor-pointer"
            >
              <Sparkles size={16} /> Launch Liquid Reality (3D WebGL)
            </button>
            <button
              onClick={handleRandomStyle}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 hover:text-white font-semibold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <Shuffle size={16} /> Surprise Me (Random Style)
            </button>
            <a
              href="#exhibition"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium text-sm backdrop-blur-sm transition-all"
            >
              <Compass size={16} /> Explore 75 Works
            </a>
          </div>

          {/* Flagship WebGPU Showcase Banner: LIQUID REALITY */}
          <div className="mt-12 max-w-4xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.25)]">
            <div className="bg-[#090A12] rounded-[22px] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  FLAGSHIP 3D WEBGPU IMMERSIVE EXHIBITION
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-space text-white">
                  PROJECT: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-300">LIQUID REALITY</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-lg font-light leading-relaxed">
                  Inspired by liquidGL: Real-time 3D refraction, interactive draggable lenses, 9-dial optics studio, and Apple-grade spatial glass interface components.
                </p>
              </div>

              <button
                onClick={() => onSelectStyle('liquid-reality')}
                className="px-6 py-3.5 rounded-2xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all hover:scale-105 shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles size={16} className="text-violet-600" />
                <span>Launch Experience</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Control Station: Search, Filters, Categories */}
      <section id="exhibition" className="sticky top-0 z-30 bg-[#07080D]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Search + View Toggles */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search 75 styles, brands, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 justify-between md:justify-end">
              <span className="text-xs font-mono text-white/50">
                Showing <strong className="text-white">{filteredStyles.length}</strong> of 75
              </span>

              {/* View Switcher */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'
                  }`}
                  title="Gallery Cards View"
                >
                  Gallery Cards
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${
                    viewMode === 'compact' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white'
                  }`}
                  title="Curator Index View"
                >
                  Index Table
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All Styles' 
                ? STYLES_DATA.length 
                : STYLES_DATA.filter(s => s.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSelectedTag(null);
                  }}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 border-blue-500 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-blue-800 text-white' : 'bg-white/10 text-white/50'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Tag Pills */}
          {selectedCategory === 'All Styles' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] text-white/50">
              <span className="font-mono uppercase text-white/30 mr-1 flex items-center gap-1">
                <Filter size={11} /> Tags:
              </span>
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="px-2 py-0.5 rounded bg-white/20 text-white font-mono flex items-center gap-1 hover:bg-white/30 cursor-pointer"
                >
                  Reset tag ({selectedTag}) ✕
                </button>
              )}
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'border-white/5 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Main Exhibition Grid / Table */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredStyles.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-2xl">
            <p className="text-lg text-white/60">No styles matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Styles');
                setSelectedTag(null);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-medium transition-all"
            >
              Reset All Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Cards Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStyles.map((style) => (
              <div
                key={style.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f1017] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Visual Header / Micro Preview Canvas */}
                <div 
                  className={`relative h-44 w-full p-5 flex flex-col justify-between overflow-hidden border-b border-white/10 ${style.bgPreview}`}
                >
                  {/* Subtle decorative background watermark */}
                  <div className="absolute -right-4 -bottom-6 font-syne font-black text-7xl select-none opacity-10 pointer-events-none">
                    {String(style.num).padStart(2, '0')}
                  </div>

                  {/* Top Bar of card preview */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-black/40 backdrop-blur-md text-white border border-white/20">
                      #{String(style.num).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm text-white/80">
                      {style.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Center Hero Mini Teaser */}
                  <div className="z-10 mt-auto">
                    <div className="text-[11px] font-mono tracking-widest uppercase opacity-70">
                      {style.brandName}
                    </div>
                    <div className="text-lg font-bold tracking-tight line-clamp-1 drop-shadow-sm">
                      {style.name}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-white/70 italic line-clamp-2 leading-relaxed">
                      “{style.tagline}”
                    </p>
                    <p className="text-xs text-white/50 mt-2 line-clamp-2 leading-normal">
                      {style.purpose}
                    </p>
                  </div>

                  {/* Palette Swatches & Typography */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5" title="Color System">
                      {style.colorPalette.map((col, i) => (
                        <div
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: col.hex }}
                          title={`${col.name} (${col.hex})`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-white/40">
                      {style.typography.heading}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {style.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/60">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectStyle(style.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 group-hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      <span>Explore Style</span>
                      <ArrowUpRight size={14} />
                    </button>
                    <button
                      onClick={() => setInspectingStyle(style)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                      title="Inspect Creative Brief"
                    >
                      <BookOpen size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Curator Table View */
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1017]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-white/50 font-mono uppercase text-[11px]">
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Style Name</th>
                  <th className="py-3.5 px-4 hidden sm:table-cell">Brand Concept</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Category</th>
                  <th className="py-3.5 px-4 hidden lg:table-cell">Typography</th>
                  <th className="py-3.5 px-4">Palette</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {filteredStyles.map((style) => (
                  <tr 
                    key={style.id} 
                    className="hover:bg-white/[0.04] transition-colors group cursor-pointer"
                    onClick={() => onSelectStyle(style.id)}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-white/50">
                      {String(style.num).padStart(2, '0')}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {style.name}
                      </div>
                      <div className="text-[11px] text-white/40 truncate max-w-[200px]">
                        {style.tagline}
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden sm:table-cell text-white/80">
                      {style.brandName}
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell text-white/50">
                      {style.category}
                    </td>
                    <td className="py-3 px-4 hidden lg:table-cell font-mono text-white/60">
                      {style.typography.heading} + {style.typography.body}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {style.colorPalette.map((col, idx) => (
                          <div
                            key={idx}
                            className="w-3 h-3 rounded-full border border-black/30"
                            style={{ backgroundColor: col.hex }}
                            title={col.name}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => setInspectingStyle(style)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/60 hover:text-white"
                          title="Brief"
                        >
                          <BookOpen size={13} />
                        </button>
                        <button
                          onClick={() => onSelectStyle(style.id)}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-[11px]"
                        >
                          Launch <ArrowUpRight size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Curator Historical Context Showcase */}
      <section className="border-t border-white/10 bg-[#0a0b12] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-syne text-white">
              The 8 Eras of Digital Craft
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Understanding the design lineage from Swiss rationalism to spatial computing and generative futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-blue-400">Cat 01 • 01-08</span>
              <h3 className="text-base font-bold text-white mt-1">Major Design Disciplines</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Foundational design philosophies: Swiss grids, brutalist honesty, maximalist sensory overload, and austere minimalism.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-cyan-400">Cat 02 • 09-16</span>
              <h3 className="text-base font-bold text-white mt-1">Modern UI Visual Styles</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Evolution of interface physics: frosted glassmorphic backdrops, tactile neumorphic depth, flat color purity, and claymorphic joy.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-pink-400">Cat 03 • 17-24</span>
              <h3 className="text-base font-bold text-white mt-1">Retro & Nostalgic Styles</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Time travel through digital history: Y2K chrome, 80s synthwave neon grids, 90s Geocities marquees, and 8-bit chiptune pixels.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-amber-400">Cat 04 • 25-32</span>
              <h3 className="text-base font-bold text-white mt-1">Artistic & Creative</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Fine arts translated to the browser: torn paper collages, dreamlike surrealism, variable typography sculpture, and kinetic motion.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-emerald-400">Cat 05 • 33-40</span>
              <h3 className="text-base font-bold text-white mt-1">Nature & Cultural Styles</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Harmonies with the physical earth: serene Japandi oak, wabi-sabi kintsugi gold seams, living biophilic green walls, and dark academia.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-purple-400">Cat 06 • 41-46</span>
              <h3 className="text-base font-bold text-white mt-1">Luxury & Fashion</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Opulence and restraint: Place Vendôme high jewelry, Paris Fashion Week asymmetric couture crops, and midnight superyacht concierge portals.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-yellow-400">Cat 07 • 47-54</span>
              <h3 className="text-base font-bold text-white mt-1">Digital & Futuristic</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Frontier technology aesthetics: Neo-Shinjuku cyberpunk neon, starship HUD telemetry, phosphor green CRT terminals, and generative neural graphs.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs font-mono text-red-400">Cat 08 • 55-75</span>
              <h3 className="text-base font-bold text-white mt-1">Radical Movements</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Historical revolutions and subcultures: Bauhaus 1919 primaries, Rodchenko constructivism, Wolfgang Weingart Swiss Punk, and Dada anti-design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 text-center text-xs text-white/40 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            THE DESIGN ATLAS © 2026 • 75 Independent Masterpiece Landing Pages
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <span>Arrow keys (← / →) navigate between styles</span>
            <span>•</span>
            <span>Esc returns to Gallery</span>
          </div>
        </div>
      </footer>

      {/* Brief Inspector Modal */}
      {inspectingStyle && (
        <StyleBriefModal
          styleMeta={inspectingStyle}
          isOpen={true}
          onClose={() => setInspectingStyle(null)}
        />
      )}
    </div>
  );
};
