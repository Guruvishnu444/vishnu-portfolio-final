import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { AmbientOrbs } from "@/components/AmbientOrbs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guruvishnu S. — Developer Portfolio" },
      {
        name: "description",
        content:
          "Guruvishnu S. — developer crafting clean, performant, impactful digital products. Open to internships and freelance work.",
      },
      { property: "og:title", content: "Guruvishnu S. — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Developer crafting clean, performant, impactful digital products. Open to internships and freelance work.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <AmbientOrbs />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            color: "#1a1a2e",
            boxShadow: "0 10px 40px rgba(80,100,180,0.15)",
          },
        }}
      />
    </main>
  );
}
