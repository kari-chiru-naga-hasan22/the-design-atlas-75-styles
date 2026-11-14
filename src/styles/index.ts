import React from 'react';

// Category 1: Major Website Design Styles (01-08)
import {
  MinimalismPage,
  MaximalismPage,
  BrutalismPage,
  NeoBrutalismPage,
  SwissPage,
  EditorialPage,
  CorporatePage,
  AvantGardePage
} from './cat1';

// Category 2: Modern UI Visual Styles (09-16)
import {
  GlassmorphismPage,
  NeumorphismPage,
  SkeuomorphismPage,
  FlatDesignPage,
  MaterialDesignPage,
  ThreeDDesignPage,
  ClaymorphismPage,
  GradientDesignPage
} from './cat2';

// Category 3: Retro and Nostalgic Styles (17-24)
import {
  RetroDesignPage,
  Y2KPage,
  VaporwavePage,
  SynthwavePage,
  NinetiesWebPage,
  PixelArtPage,
  ArtDecoPage,
  MemphisPage
} from './cat3';

// Category 4: Artistic and Creative Styles (25-32)
import {
  CollagePage,
  SurrealismPage,
  AbstractDesignPage,
  OrganicDesignPage,
  ExperimentalTypographyPage,
  HandDrawnPage,
  PsychedelicPage,
  KineticDesignPage
} from './cat4';

// Category 5: Nature, Lifestyle and Cultural Styles (33-40)
import {
  JapandiPage,
  ScandinavianPage,
  WabiSabiPage,
  BohemianPage,
  BiophilicPage,
  TropicalPage,
  CottagecorePage,
  DarkAcademiaPage
} from './cat5';

// Category 6: Luxury, Fashion and Commercial Styles (41-46)
import {
  LuxuryMinimalismPage,
  HighFashionPage,
  FemininePage,
  DarkLuxuryPage,
  MonochromaticPage,
  PremiumProductPage
} from './cat6';

// Category 7: Digital, Futuristic and Technology Styles (47-54)
import {
  CyberpunkPage,
  SciFiPage,
  HolographicPage,
  TerminalPage,
  WireframePage,
  DarkModePage,
  AiGenerativePage,
  MotionFirstPage
} from './cat7';

// Category 8: Additional Design Styles (55-75)
import {
  BauhausPage,
  ConstructivismPage,
  DeconstructivismPage,
  PostmodernismPage,
  PopArtPage,
  SwissPunkPage,
  GrungePage,
  IndustrialPage,
  SteampunkPage,
  GothicPage,
  CyberminimalismPage,
  SoftMinimalismPage,
  OrganicMinimalismPage,
  RetroFuturismPage,
  MonospaceDeveloperPage,
  AntiDesignPage,
  KineticBrutalismPage,
  EditorialMinimalismPage,
  ChromaticDesignPage,
  GlassLuxuryPage,
  IllustrativeDesignPage
} from './cat8';

export const STYLE_COMPONENTS: Record<string, React.ComponentType> = {
  // Category 1
  'minimalism': MinimalismPage,
  'maximalism': MaximalismPage,
  'brutalism': BrutalismPage,
  'neo-brutalism': NeoBrutalismPage,
  'swiss': SwissPage,
  'editorial': EditorialPage,
  'corporate': CorporatePage,
  'avant-garde': AvantGardePage,

  // Category 2
  'glassmorphism': GlassmorphismPage,
  'neumorphism': NeumorphismPage,
  'skeuomorphism': SkeuomorphismPage,
  'flat-design': FlatDesignPage,
  'material-design': MaterialDesignPage,
  '3d-design': ThreeDDesignPage,
  'three-d': ThreeDDesignPage,
  'claymorphism': ClaymorphismPage,
  'gradient-design': GradientDesignPage,
  'gradient': GradientDesignPage,

  // Category 3
  'retro-design': RetroDesignPage,
  'retro': RetroDesignPage,
  'y2k': Y2KPage,
  'vaporwave': VaporwavePage,
  'synthwave': SynthwavePage,
  '90s-web': NinetiesWebPage,
  'nineties-web': NinetiesWebPage,
  'pixel-art': PixelArtPage,
  'art-deco': ArtDecoPage,
  'memphis': MemphisPage,

  // Category 4
  'collage': CollagePage,
  'surrealism': SurrealismPage,
  'abstract': AbstractDesignPage,
  'organic': OrganicDesignPage,
  'experimental-typography': ExperimentalTypographyPage,
  'hand-drawn': HandDrawnPage,
  'psychedelic': PsychedelicPage,
  'kinetic': KineticDesignPage,

  // Category 5
  'japandi': JapandiPage,
  'scandinavian': ScandinavianPage,
  'wabi-sabi': WabiSabiPage,
  'bohemian': BohemianPage,
  'biophilic': BiophilicPage,
  'tropical': TropicalPage,
  'cottagecore': CottagecorePage,
  'dark-academia': DarkAcademiaPage,

  // Category 6
  'luxury-minimalism': LuxuryMinimalismPage,
  'high-fashion': HighFashionPage,
  'feminine': FemininePage,
  'dark-luxury': DarkLuxuryPage,
  'monochromatic': MonochromaticPage,
  'premium-product': PremiumProductPage,

  // Category 7
  'cyberpunk': CyberpunkPage,
  'sci-fi': SciFiPage,
  'holographic': HolographicPage,
  'terminal': TerminalPage,
  'wireframe': WireframePage,
  'dark-mode': DarkModePage,
  'ai-generative': AiGenerativePage,
  'motion-first': MotionFirstPage,

  // Category 8
  'bauhaus': BauhausPage,
  'constructivism': ConstructivismPage,
  'deconstructivism': DeconstructivismPage,
  'postmodernism': PostmodernismPage,
  'pop-art': PopArtPage,
  'swiss-punk': SwissPunkPage,
  'grunge': GrungePage,
  'industrial': IndustrialPage,
  'steampunk': SteampunkPage,
  'gothic': GothicPage,
  'cyberminimalism': CyberminimalismPage,
  'soft-minimalism': SoftMinimalismPage,
  'organic-minimalism': OrganicMinimalismPage,
  'retro-futurism': RetroFuturismPage,
  'monospace-developer': MonospaceDeveloperPage,
  'anti-design': AntiDesignPage,
  'kinetic-brutalism': KineticBrutalismPage,
  'editorial-minimalism': EditorialMinimalismPage,
  'chromatic': ChromaticDesignPage,
  'glass-luxury': GlassLuxuryPage,
  'illustrative': IllustrativeDesignPage
};
