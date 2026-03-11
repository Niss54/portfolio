import { memo, useMemo } from "react";

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

// Floating square particle
const squareColors = [
  'hsl(189 100% 50% / 0.12)',   // sea blue
  'hsl(189 80% 60% / 0.10)',    // light sea blue
  'hsl(42 60% 55% / 0.10)',     // light golden
  'hsl(42 50% 65% / 0.08)',     // soft gold
  'hsl(189 100% 50% / 0.08)',   // faint cyan
  'hsl(42 70% 50% / 0.12)',     // golden
];

interface SquareParticle {
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  color: string;
  rotation: number;
  border: string;
}

const generateParticles = (count: number): SquareParticle[] => {
  const particles: SquareParticle[] = [];
  for (let i = 0; i < count; i++) {
    const colorIdx = i % squareColors.length;
    particles.push({
      size: 4 + Math.random() * 14,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 18 + Math.random() * 25,
      delay: Math.random() * -30,
      color: squareColors[colorIdx],
      rotation: Math.random() * 45,
      border: i % 3 === 0
        ? '1px solid hsl(189 100% 50% / 0.15)'
        : i % 3 === 1
          ? '1px solid hsl(42 60% 55% / 0.12)'
          : 'none',
    });
  }
  return particles;
};

// Premium neon blue background with animated floating squares
export const NeonBlueBackground = memo(() => {
  const particles = useMemo(() => generateParticles(40), []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Base dark gradient - black theme */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(220 30% 5%) 0%, hsl(220 40% 3%) 50%, hsl(220 30% 5%) 100%)',
        }}
      />
      
      {/* Primary sea blue glow - top */}
      <div 
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(189 100% 50% / 0.12) 0%, hsl(189 100% 50% / 0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Golden glow - bottom left */}
      <div 
        className="absolute bottom-0 -left-[200px] w-[600px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(42 60% 55% / 0.08) 0%, hsl(42 50% 50% / 0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Sea blue glow - bottom right */}
      <div 
        className="absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, hsl(189 80% 50% / 0.08) 0%, hsl(189 100% 50% / 0.03) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Animated floating squares */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: p.color,
              border: p.border,
              transform: `rotate(${p.rotation}deg)`,
              animation: `square-drift ${p.duration}s linear ${p.delay}s infinite`,
              borderRadius: '2px',
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
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
  return null;
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
