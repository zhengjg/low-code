import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteExternalsPlugin } from 'vite-plugin-externals'


export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), vueJsx(), viteExternalsPlugin({
    webCallTql: '__webCallTql'
  })],
  define: {
    'process.env': { ...process.env },
  },
  build: {
    minify: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssCodeSplit: false,
  },
})
