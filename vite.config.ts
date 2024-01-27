import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/admin/dashboard",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  preview: {
    host: true,
    port: 4173,
  },
});
