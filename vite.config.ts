import { defineConfig } from "vite-plugin-tanstack-start-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
