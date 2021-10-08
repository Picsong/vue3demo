import { defineComponent, h } from "vue"
import { Button } from "ant-design-vue"
import ScreenAdapter from "@components/ScreenAdapter"
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
            {h(component)}
            {/* <Button type={"primary"} style={{ margin: "10px" }}> */}
            {/*  一个按钮 */}
            {/* </Button> */}
            {/* <Spin /> */}
          </ScreenAdapter>
        </div>
      )
    }
  },
})
