import { createApp } from "vue"
import { ElOption } from "element-plus"

import App from "./App"
import router from "./router"

const app = createApp(App)
app.use(ElOption)
app.use(router)
app.mount("#app")
