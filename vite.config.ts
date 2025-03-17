import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~@': resolve('src')
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly'
    },
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
        additionalData: '@import "./src/assets/stylus/style.less";',
      },
    },
  },
  plugins: [
    react(),
  ],
})
