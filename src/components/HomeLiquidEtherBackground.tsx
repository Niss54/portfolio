import { useEffect, useMemo, useState } from "react";
import LiquidEther from "@/components/LiquidEther";

type LiquidConfig = {
  mouseForce: number;
  cursorSize: number;
  viscous: number;
  resolution: number;
  autoSpeed: number;
  autoIntensity: number;
};

const desktopConfig: LiquidConfig = {
  mouseForce: 22,
  cursorSize: 82,
  viscous: 16,
  resolution: 0.7,
  autoSpeed: 0.42,
  autoIntensity: 1.2,
};

const tabletConfig: LiquidConfig = {
  mouseForce: 16,
  cursorSize: 72,
  viscous: 12,
  resolution: 0.55,
  autoSpeed: 0.36,
  autoIntensity: 1.0,
};

const mobileConfig: LiquidConfig = {
  mouseForce: 11,
  cursorSize: 58,
  viscous: 9,
  resolution: 0.42,
  autoSpeed: 0.3,
  autoIntensity: 0.9,
};

const fallbackBackground = {
  background:
    "radial-gradient(ellipse at 20% 15%, hsl(189 100% 50% / 0.22) 0%, transparent 45%), radial-gradient(ellipse at 80% 12%, hsl(250 70% 60% / 0.2) 0%, transparent 42%), radial-gradient(ellipse at 75% 80%, hsl(280 70% 75% / 0.17) 0%, transparent 48%), linear-gradient(150deg, hsl(220 44% 5%) 0%, hsl(228 48% 4%) 52%, hsl(232 54% 6%) 100%)",
};

const HomeLiquidEtherBackground = () => {
  const [isStatic, setIsStatic] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(() => window.innerWidth);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const network = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const shouldUseStatic = prefersReducedMotion || Boolean(network?.saveData);
    setIsStatic(shouldUseStatic);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = useMemo(() => {
    if (screenWidth < 768) return mobileConfig;
    if (screenWidth < 1024) return tabletConfig;
    return desktopConfig;
  }, [screenWidth]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0" style={fallbackBackground} />

      {!isStatic && (
        <div className="absolute inset-0 opacity-100">
          <LiquidEther
            mouseForce={config.mouseForce}
            cursorSize={config.cursorSize}
            isViscous
            viscous={config.viscous}
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            autoDemo={false}
            autoSpeed={config.autoSpeed}
            autoIntensity={config.autoIntensity}
            takeoverDuration={0.08}
            autoResumeDelay={2500}
            autoRampDuration={0.2}
            isBounce={false}
            resolution={config.resolution}
          />
        </div>
      )}
    </div>
  );
};

export default HomeLiquidEtherBackground;