import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!cursor || !ring || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const onMouseDown = () => {
      ring.style.transform = `translate(-50%, -50%) scale(0.8)`;
    };

    const onMouseUp = () => {
      ring.style.transform = `translate(-50%, -50%) scale(1)`;
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    // Smooth ring follow with lerp
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      if (ring) {
        ring.style.left = `${cursorX}px`;
        ring.style.top = `${cursorY}px`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    animate();

    // Hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.body.style.cursor = "";
      style.remove();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="fixed pointer-events-none z-[9999]"
      style={{ mixBlendMode: "difference", opacity: 0, transition: "opacity 150ms ease-out" }}
    >
      {/* Ring - follows with delay */}
      <div
        ref={ringRef}
        id="cursor-ring"
        className="absolute w-10 h-10 rounded-full border-2 border-white"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%) scale(1)",
          transition: "transform 300ms ease-out, width 300ms ease-out, height 300ms ease-out",
          opacity: 0.5,
        }}
      />
      {/* Dot - follows instantly */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className="w-4 h-4 rounded-full bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transition: "transform 50ms ease-out",
        }}
      />
    </div>
  );
};

export default CustomCursor;
