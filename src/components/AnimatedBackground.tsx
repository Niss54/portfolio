import { memo, useMemo } from "react";

// Memoized particles to prevent re-renders
const particles = [
  { left: "10%", top: "20%" },
  { left: "80%", top: "15%" },
  { left: "25%", top: "70%" },
  { left: "65%", top: "85%" },
  { left: "45%", top: "40%" },
  { left: "90%", top: "60%" },
];

const AnimatedBackground = memo(() => {
  return (
    <>
      {/* Spline 3D Background - Fixed and Interactive */}
      <div 
        className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-auto"
        style={{ contain: "strict" }}
      >
        <iframe 
          src='https://my.spline.design/particlesflow-K0I7FMJwQRjHw9WHbuawWJqB/' 
          frameBorder='0'
          loading="lazy"
          className="w-full h-full border-none"
          style={{ transform: 'scale(1.45)' }}
          title="3D Background Animation"
        />
      </div>

      {/* Gradient Overlay - Simplified */}
      <div 
        className="fixed inset-0 -z-10 overflow-hidden" 
        style={{ background: 'var(--gradient-hero)', contain: "layout paint" }}
      >
        {/* Single Static Wave - Reduced from 3 animated */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/2 w-[600px] h-[300px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/15 to-secondary/15 blur-[60px]" 
            style={{ willChange: "auto" }}
          />
        </div>

        {/* Reduced Particles - 6 instead of 20 */}
        <div className="absolute inset-0">
          {particles.map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20"
              style={{
                left: pos.left,
                top: pos.top,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern Overlay - Static */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(189 100% 50% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(189 100% 50% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
