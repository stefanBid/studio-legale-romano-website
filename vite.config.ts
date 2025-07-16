import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      includePublic: true,
      jpeg: { quality: 75 },
      png: { quality: 80 },
      webp: { quality: 75 },
      svg: { multipass: true },
    }),
    // Load custom SVG icons from your directory
    Icons({
      compiler: 'vue3',
      autoInstall: false,
      scale: 1,
      customCollections: {
        // chiave "custom" → accedi con `i-custom-my-icon`
        custom: FileSystemIconLoader(
          './src/assets/', // icons path
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" '), // dynamic fill
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg'],
});
