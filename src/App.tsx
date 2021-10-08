import { defineComponent, h } from "vue"
import { Button } from "ant-design-vue"
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
        return <Button onClick={() => this.count++}>You clicked me</Button>
      },
    })
    return () => {
      return (
        <div class='app-wrap'>
          <ScreenAdapter>
            {/* {h(component)} */}
            <MonacoEditor />
          </ScreenAdapter>
        </div>
      )
    }
  },
})
