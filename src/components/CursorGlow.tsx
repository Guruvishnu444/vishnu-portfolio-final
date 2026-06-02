import { useCursorGlow } from "@/hooks/useCursorGlow";

export function CursorGlow() {
  useCursorGlow();
  return <div id="cursor-glow" aria-hidden />;
}
