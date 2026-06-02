import { Suspense, lazy } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, DownloadSimple } from "@phosphor-icons/react";

const SplineBg = lazy(() => import("./SplineBg"));

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20"
      aria-label="Hero"
    >
      <Suspense fallback={null}>
        <SplineBg />
      </Suspense>

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
        >
          Crafting Digital Experiences
          <br />
          <span className="gradient-text">That Matter</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground"
        >
          Developer focused on clean code, performant UI, and products that leave an
          impact. Building thoughtful interfaces with modern web tech.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_rgba(120,80,240,0.4)] transition-transform hover:-translate-y-0.5"
          >
            View My Work <ArrowDown size={16} />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            <DownloadSimple size={16} /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
