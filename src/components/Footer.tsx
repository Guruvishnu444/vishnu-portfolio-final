import { GithubLogo, LinkedinLogo, Code as CodeIcon } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { ParticleCanvas } from "./ParticleCanvas";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/80 mt-10">
      <div className="relative">
        <ParticleCanvas />
        <div className="relative mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div>
              <p className="font-semibold text-foreground">Guruvishnu S.</p>
              <p className="text-xs text-muted-foreground">
                Building the web, one pixel at a time.
              </p>
            </div>
          </div>
          <nav className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex md:justify-end gap-3">
            {[
              { href: "https://github.com", Icon: GithubLogo, label: "GitHub" },
              { href: "https://linkedin.com", Icon: LinkedinLogo, label: "LinkedIn" },
              { href: "https://leetcode.com", Icon: CodeIcon, label: "LeetCode" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="relative border-t border-border/80 py-5 text-center text-xs text-muted-foreground">
          © 2025 Guruvishnu S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
