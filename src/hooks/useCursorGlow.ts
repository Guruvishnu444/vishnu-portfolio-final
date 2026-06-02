import { useEffect } from "react";

export function useCursorGlow() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("cursor-glow");
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const tick = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      el.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
