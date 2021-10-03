import { defineComponent } from 'vue'
import useApp from '@hooks/use-app'

import ScreenAdapter from '@components/ScreenAdapter'
import './global.scss'

const Greetings = ({ msg }: { msg: string }) => {
  return <div style={{ width: '1920px', height: '1080px', background: 'red' }}>
      {msg}
  </div>
}

export default defineComponent({
  name: 'App',
  setup () {
    const { app } = useApp()
    app.component('Picsong', Greetings)
    return () => <ScreenAdapter>
            <Picsong msg="大屏适配器"/>
        </ScreenAdapter>
  }
})
