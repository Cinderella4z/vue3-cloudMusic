import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'views': resolve(__dirname, 'src/views'),
      'comp': resolve(__dirname, 'src/components'),
      'img': resolve(__dirname, 'src/assets/img'),
      'hooks': resolve(__dirname, 'src/hooks'),
      'network': resolve(__dirname, 'src/network')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, "src/assets/css/base.less")}";`
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: '8080'
  }


})
