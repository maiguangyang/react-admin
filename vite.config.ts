/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-01-01 09:08:09
 */
import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";

// https://vite.dev/config/
export default defineConfig((configEnv) => ({
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
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      linters: [new EsLinter({ configEnv: configEnv }), new TypeScriptLinter()],
    }),
  ],
}))
