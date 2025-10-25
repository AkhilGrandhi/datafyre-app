import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.mp4', '**/*.PNG'],
  build: {
    assetsInlineLimit: 0, // Don't inline any assets, copy all to dist
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep video files in assets folder with their original names
          if (assetInfo.name.endsWith('.mp4')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})
