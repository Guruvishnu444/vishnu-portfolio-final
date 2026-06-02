import { motion } from "framer-motion";
import {
  FileCss,
  FileHtml,
  FileJs,
  Atom,
  Code,
  Cpu,
  Coffee,
  Terminal,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  { name: "React", Icon: Atom },
  { name: "JavaScript", Icon: FileJs },
  { name: "HTML5", Icon: FileHtml },
  { name: "CSS3", Icon: FileCss },
  { name: "Python", Icon: Code },
  { name: "Java", Icon: Coffee },
  { name: "C", Icon: Terminal },
  { name: "C++", Icon: Cpu },
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28" aria-label="About">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-start">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Designing systems that <span className="gradient-text">scale & inspire</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I&apos;m Guruvishnu — a developer who cares about the details. From
            architecture to pixel polish, I build performant, accessible interfaces with
            modern web tools. Currently open to internships and freelance work where I
            can ship great products with great teams.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My toolkit spans React, TypeScript, Python, and systems languages — I&apos;m
            happiest at the intersection of solid engineering and thoughtful design.
          </p>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full gradient-brand opacity-20 blur-2xl" />
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl gradient-brand flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    GV
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Guruvishnu S.</h3>
                  <p className="text-sm text-muted-foreground">Full-stack Developer</p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-medium text-emerald-700">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
                      <span className="relative rounded-full w-2 h-2 bg-emerald-500" />
                    </span>
                    Open to Work
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map(({ name, Icon }) => (
                <motion.div
                  key={name}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 40px rgba(79,143,255,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default"
                >
                  <Icon size={28} weight="duotone" className="text-primary" />
                  <span className="text-xs font-medium text-foreground">{name}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
