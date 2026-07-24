import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React + TypeScript project.
export default defineConfig({
  plugins: [react()],
  server: {
    // Open the browser automatically when running `npm run dev`.
    open: true,
    // Enable strict port to avoid random port changes during development.
    strictPort: true,
    port: 5173,
  },
});
