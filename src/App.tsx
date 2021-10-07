import { defineComponent, h, resolveDynamicComponent } from "vue"
import ScreenAdapter from "@components/ScreenAdapter"
import "./global.scss"

export default defineComponent({
  name: "App",
  setup() {
    const component = resolveDynamicComponent({
      name: "button-counter",
      data() {
        return {
          count: 0,
        }
      },
      template: `
              <button @click="count++">
              You clicked me {{ count }} times
              </button>`,
    })
    return () => {
      return (
        <div class='app-wrap'>
          <ScreenAdapter>{h(component)}</ScreenAdapter>
        </div>
      )
    }
  },
})
