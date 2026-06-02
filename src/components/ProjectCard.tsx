import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export interface Project {
  id: number;
  seed: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group shrink-0 w-[340px] glass rounded-3xl overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(80,100,180,0.08)] hover:shadow-[0_20px_60px_rgba(120,80,240,0.18)] transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${project.seed}/680/425`}
          alt={project.title}
          loading="lazy"
          width={680}
          height={425}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 rounded-full backdrop-blur-md bg-white/70 border border-white/80 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-foreground">
          Coming Soon
        </div>
        <div className="absolute top-3 right-3 rounded-full gradient-brand text-white text-xs font-semibold w-9 h-9 flex items-center justify-center shadow-lg">
          {number}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-foreground flex items-center justify-between">
          {project.title}
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
          />
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/70 border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="shrink-0 w-[340px] glass rounded-3xl overflow-hidden">
      <div className="aspect-[16/10] shimmer" />
      <div className="p-6 space-y-3">
        <div className="h-5 w-2/3 rounded shimmer" />
        <div className="h-3 w-full rounded shimmer" />
        <div className="h-3 w-5/6 rounded shimmer" />
        <div className="flex gap-2 pt-2">
          <div className="h-5 w-14 rounded-full shimmer" />
          <div className="h-5 w-16 rounded-full shimmer" />
        </div>
      </div>
    </div>
  );
}
