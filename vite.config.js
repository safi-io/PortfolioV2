import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolioV2/', // Ensure this matches your GitHub repository name
  build: {
    outDir: 'dist', // Default output directory, should contain the built files
    rollupOptions: {
      input: {
        main: './index.html', // Entry point for the build
      },
    },
  },
});
