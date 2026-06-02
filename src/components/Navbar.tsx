import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/60 border-b border-white/60 shadow-[0_4px_20px_rgba(80,100,180,0.06)]"
          : "backdrop-blur-md bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="font-semibold tracking-tight text-foreground">Guruvishnu</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="mailto:guruvishnu4gd@gmail.com"
            className="inline-flex items-center rounded-full gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_24px_rgba(120,80,240,0.35)] transition-transform hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-white/80 border-t border-white/60"
          >
            <ul className="flex flex-col px-6 py-4 gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:guruvishnu4gd@gmail.com"
                  className="mt-2 inline-flex w-full justify-center rounded-full gradient-brand px-5 py-3 text-sm font-medium text-white"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
