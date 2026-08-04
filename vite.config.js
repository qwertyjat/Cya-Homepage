import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy this to GitHub Pages under a repo name (e.g. username.github.io/cya-inn),
// set base to "/cya-inn/". If it's a root user/organization page, leave it as "/".
export default defineConfig({
  plugins: [react()],
  base: "./",
});
