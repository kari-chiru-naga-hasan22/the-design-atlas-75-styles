declare module 'liquid-gl' {
  interface LiquidGLOptions {
    target: string;
    snapshot?: string;
    engine?: 'auto' | 'webgpu' | 'webgl2' | 'webgl';
    resolution?: number;
    zIndex?: number;
    content?: string;
    refraction?: number;
    aberration?: number;
    bevelDepth?: number;
    bevelWidth?: number;
    frost?: number;
    shadow?: boolean;
    specular?: boolean;
    reveal?: 'fade' | 'none';
    tilt?: boolean;
    tiltFactor?: number;
    tiltEase?: number;
    draggable?: boolean;
    interaction?: 'none' | 'fluid';
    interactionStrength?: number;
    interactionRadius?: number;
    interactionViscosity?: number;
    magnify?: number;
    tint?: string | null;
    helper?: boolean;
    on?: {
      init?: (instance: any) => void;
      dragstart?: (instance: any, info: any) => void;
      drag?: (instance: any, info: any) => void;
      dragend?: (instance: any, info: any) => void;
    };
  }

  interface LiquidGLInstance {
    destroy: () => void;
    setTint?: (tint: string) => void;
    setDraggable?: (draggable: boolean) => void;
  }

  function liquidGL(options: LiquidGLOptions): LiquidGLInstance;

  namespace liquidGL {
    function registerDynamic(elements: any): void;
    function syncWith(options: any): { lenis?: any; locomotiveScroll?: any };
  }

  export default liquidGL;
}
