import { defineComponent, h } from "vue"
import { ElButton, ElDatePicker, ElConfigProvider, ElIcon } from "element-plus"
import { Aim, ZoomOut } from "@element-plus/icons"

import zhCn from "element-plus/es/locale/lang/zh-cn"
import ScreenAdapter from "@components/ScreenAdapter"
import MonacoEditor from "@components/MonacoEditor"
import "./global.scss"

export default defineComponent({
  name: "App",
  setup() {
    const component = defineComponent({
      name: "ButtonCounter",
      data() {
        return {
          count: 0,
        }
      },
      render() {
        return (
          <div>
            <ElDatePicker type={"date"} placeholder={"选择日期"} />
            <ElButton type={"primary"} size={"mini"} onClick={() => this.count++}>
              You clicked me
            </ElButton>
            <ElIcon color={"red"} size={20}>
              <Aim />
            </ElIcon>
            <ZoomOut style={"width: 1em; height: 1em;"} />
          </div>
        )
      },
    })
    return () => {
      return (
        <div class='app-wrap'>
          <ElConfigProvider locale={zhCn}>
            <ScreenAdapter>
              {h(component)}
              <MonacoEditor />
            </ScreenAdapter>
          </ElConfigProvider>
        </div>
      )
    }
  },
})
