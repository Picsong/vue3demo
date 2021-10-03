import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {}
    }
  }), vueJsx()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@': '/src'
    }
  }
})
