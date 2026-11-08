import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Node's built-in path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps '@/' to the 'src' directory
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
