import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import ElementPlus from "unplugin-element-plus/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// import styleImport from "vite-plugin-style-import"
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
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "ant-design-vue",
    //       esModule: true,
    //       resolveStyle: name => {
    //         return `ant-design-vue/es/${name}/style`
    //       },
    //     },
    //   ],
    // }),
  ],
  optimizeDeps: {
    include: ["element-plus/es/locale/lang/zh-cn", "@element-plus/icons"],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      // '@/': new URL('./src/', import.meta.url).pathname,
      "@": "/src",
      "@hooks": "/src/hooks",
      "@views": "/src/views",
      "@components": "/src/components",
    },
  },
})
