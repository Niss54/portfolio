import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after video plays (around 3 seconds)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    // Complete loading after fade animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/splash-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
