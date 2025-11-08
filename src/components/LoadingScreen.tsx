import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-[120px] animate-pulse-glow" />
        </div>
      </div>

      {/* Loading Content */}
      <div className="relative text-center space-y-8">
        {/* Glowing Initials */}
        <div className="relative inline-block">
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary to-secondary opacity-50 animate-pulse-glow" />
          <h1 className="relative text-8xl md:text-9xl font-bold glow-text" style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            NM
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto space-y-2">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-muted-foreground text-sm">Loading {progress}%</p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
