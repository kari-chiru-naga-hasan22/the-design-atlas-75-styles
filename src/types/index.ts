export type StyleCategory = 
  | 'Major Website Design Styles'
  | 'Modern UI Visual Styles'
  | 'Retro and Nostalgic Styles'
  | 'Artistic and Creative Styles'
  | 'Nature, Lifestyle and Cultural Styles'
  | 'Luxury, Fashion and Commercial Styles'
  | 'Digital, Futuristic and Technology Styles'
  | 'Additional Design Styles';

export interface StyleMeta {
  id: string; // e.g. 'minimalism'
  num: number; // 1 to 75
  name: string; // e.g. 'Minimalism'
  category: StyleCategory;
  categoryIndex: number; // 1 to 8
  brandName: string;
  tagline: string;
  purpose: string;
  targetAudience: string;
  visualDirection: string;
  colorPalette: { name: string; hex: string; desc?: string }[];
  typography: { heading: string; body: string; notes?: string };
  gridSystem: string;
  animationDirection: string;
  tags: string[];
  accentColor: string;
  bgPreview: string; // Tailwind class or hex for preview card
  textColor: string;
}
