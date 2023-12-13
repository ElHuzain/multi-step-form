import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/multi-step-form/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      $bgs: path.resolve(__dirname, "./public/images/bg-sidebar-desktop.svg")
    },
  },
})
