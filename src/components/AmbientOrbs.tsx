import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          top: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(79,143,255,0.35) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 480,
          height: 480,
          top: "40%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(155,95,255,0.32) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          bottom: "-12%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(79,143,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
