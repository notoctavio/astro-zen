// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://notoctavio.vercel.app", // base site URL (replace with custom domain when you have it)
  vite: {
    plugins: [tailwindcss()],
  },
});
