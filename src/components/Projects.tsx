import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ProjectCard, ProjectCardSkeleton, type Project } from "./ProjectCard";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((r) => r.json())
      .then((data: Project[]) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  // Drag-to-scroll
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const down = (e: PointerEvent) => {
      isDown = true;
      el.setPointerCapture(e.pointerId);
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      if (!isDown) return;
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    const up = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointerleave", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointerleave", up);
    };
  }, [projects]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative z-10 px-6 py-28" aria-label="Projects">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
                Portfolio
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Upcoming <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full glass-strong flex items-center justify-center hover:-translate-y-0.5 transition-transform"
              >
                <CaretLeft size={18} weight="bold" />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full glass-strong flex items-center justify-center hover:-translate-y-0.5 transition-transform"
              >
                <CaretRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div
          ref={trackRef}
          className="hide-scrollbar flex gap-6 overflow-x-auto pb-6 cursor-grab select-none scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects === null
            ? Array.from({ length: 3 }).map((_, i) => <ProjectCardSkeleton key={i} />)
            : projects.map((p, i) => (
                <div key={p.id} style={{ scrollSnapAlign: "start" }}>
                  <ProjectCard project={p} index={i} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
