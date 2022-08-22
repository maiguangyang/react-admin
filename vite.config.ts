import { resolve }      from 'path';
import { defineConfig } from 'vite'
import react            from '@vitejs/plugin-react';
import eslintPlugin     from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~@': resolve('src'),
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
    // react({
    //   jsxRuntime: 'automatic',
    //   jsxImportSource: '@emotion/react',
    //   babel: {
    //     plugins: ['@emotion/babel-plugin']
    //   }
    // }),
    eslintPlugin(),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
