import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Code as CodeIcon,
  PaperPlaneTilt,
  CircleNotch,
} from "@phosphor-icons/react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error("Email service not configured yet.");
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey },
      );
      toast.success("Message sent — talk soon!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-28" aria-label="Contact">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Got a project, role, or idea? Drop a message — I reply quickly and love
            talking shop about interfaces, performance, and well-built products.
          </p>

          <a
            href="mailto:guruvishnu4gd@gmail.com"
            className="mt-8 inline-flex items-center gap-3 glass rounded-2xl px-5 py-4 hover:-translate-y-0.5 transition-transform"
          >
            <span className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white">
              <EnvelopeSimple size={20} />
            </span>
            <span className="font-medium text-foreground">guruvishnu4gd@gmail.com</span>
          </a>

          <div className="mt-8 flex gap-3">
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
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="clay rounded-3xl p-8 space-y-5"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-muted-foreground mb-2"
              >
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="clay-input w-full rounded-xl px-4 py-3 text-sm text-foreground"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-muted-foreground mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="clay-input w-full rounded-xl px-4 py-3 text-sm text-foreground"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-muted-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="clay-input w-full rounded-xl px-4 py-3 text-sm text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(120,80,240,0.4)] disabled:opacity-70"
            >
              {loading ? (
                <>
                  <CircleNotch size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <PaperPlaneTilt size={16} />
                </>
              )}
            </motion.button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
