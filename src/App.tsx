import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import { ElConfigProvider } from "element-plus"

import zhCn from "element-plus/es/locale/lang/zh-cn"

import "./global.scss"

export default defineComponent({
  name: "App",
  setup() {
    return () => {
      return (
        <div class='app-wrap'>
          <ElConfigProvider locale={zhCn}>
            <RouterView />
          </ElConfigProvider>
        </div>
      )
    }
  },
})
