import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
// Removed unused imports: tailwindcss, autoprefixer

export default defineConfig({
  plugins: [react()],
  // Removed css.postcss block - configuration is now in postcss.config.cjs
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
