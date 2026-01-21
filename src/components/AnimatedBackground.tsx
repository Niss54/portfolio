import { memo } from "react";

// Spline background - only for hero section
export const SplineHeroBackground = memo(() => {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-auto"
      style={{ contain: "strict" }}
    >
      <iframe 
        src='https://my.spline.design/reactiveorb-7TBWpVlKoWt9nzgQoVAgQCwM/' 
        frameBorder='0'
        loading="lazy"
        className="w-full h-full border-none"
        style={{ transform: 'scale(1.45)' }}
        title="3D Background Animation"
      />
    </div>
  );
});

SplineHeroBackground.displayName = "SplineHeroBackground";

// Premium neon blue background for all other sections
export const NeonBlueBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base dark gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 40% 5%) 50%, hsl(220 30% 8%) 100%)',
        }}
      />
      
      {/* Primary neon glow - top */}
      <div 
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(189 100% 50% / 0.15) 0%, hsl(189 100% 50% / 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Secondary glow - bottom left */}
      <div 
        className="absolute bottom-0 -left-[200px] w-[600px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(189 100% 50% / 0.12) 0%, hsl(220 80% 50% / 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Tertiary glow - bottom right */}
      <div 
        className="absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(250 70% 60% / 0.1) 0%, hsl(189 100% 50% / 0.05) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(189 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(189 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
});

NeonBlueBackground.displayName = "NeonBlueBackground";

// Keep old export for backward compatibility but simplified
const AnimatedBackground = memo(() => {
  return null; // No longer used as full-page background
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
