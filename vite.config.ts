import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import styleImport from "vite-plugin-style-import"

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // '@primary-color': '#f5222d', // 全局主色
          //   hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {},
      },
    }),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: "ant-design-vue",
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style`
          },
        },
      ],
    }),
  ],
  optimizeDeps: {
    include: ["ant-design-vue", "ant-design-vue/es/locale/zh_CN", "@ant-design/icons-vue"],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": "/src",
      "@hooks": "/src/hooks",
      "@components": "/src/components",
    },
  },
})
