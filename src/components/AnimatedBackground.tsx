const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated Waves */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[400px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-[100px] animate-wave" />
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[80px] animate-wave delay-200" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[350px] rounded-full bg-secondary/15 blur-[90px] animate-wave delay-400" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(189 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(189 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
