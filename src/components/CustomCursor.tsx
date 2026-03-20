import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.opacity = "1";

      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const onMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
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
      className="fixed pointer-events-none z-[10050]"
      style={{ mixBlendMode: "difference", opacity: 0, transition: "opacity 150ms ease-out" }}
    >
      <div
        ref={dotRef}
        id="cursor-dot"
        className="w-3 h-3 rounded-full bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          transition: "none",
        }}
      />
    </div>
  );
};

export default CustomCursor;
