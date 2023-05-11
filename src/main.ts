import "./assets/main.css"
import "./assets/css/index.less"
import { createApp } from "vue"
import { createPinia } from "pinia"
import pinia from "./stores"
import App from "./App.vue"
import router from "./router"
import registerIcons from "./global/register-icons"
const app = createApp(App)
app.use(registerIcons)
app.use(pinia)
app.use(router)

app.mount("#app")
