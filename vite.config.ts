import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
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
      webp: { quality: 75 }, // non usare lossless
      svg: { multipass: true },
    }),
    // Automatically import icon components when used
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'Icon', // Components will be named like <IconCustomMyLogo />
          customCollections: ['custom'], // Your custom SVG set
        }),
      ],
    }),
    // Load custom SVG icons from your directory
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader('src/assets/icons'), // Path to your SVG icons
      },
      scale: 1, // Optional: scale SVG size
      defaultStyle: '', // Optional: no default style
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg'],
});
