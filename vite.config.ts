import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import styleImport from "vite-plugin-style-import"
// const prefix = `monaco-editor/esm/vs`
export default defineConfig({
  build: {
    // 已使用cdn加载
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       jsonWorker: [`${prefix}/language/json/json.worker`],
    //       cssWorker: [`${prefix}/language/css/css.worker`],
    //       htmlWorker: [`${prefix}/language/html/html.worker`],
    //       tsWorker: [`${prefix}/language/typescript/ts.worker`],
    //       editorWorker: [`${prefix}/editor/editor.worker`],
    //     },
    //   },
    // },
  },
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
    include: ["ant-design-vue", "ant-design-vue/es/locale/zh_CN", "@ant-design/icons-vue", "monaco-editor"],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": "/src",
      "@hooks": "/src/hooks",
      "@worker": "/src/assets/worker",
      "@components": "/src/components",
    },
  },
})
