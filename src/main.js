import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "@/router/index.js"
import { createPinia } from "pinia"
// 引入 mock 数据
import data from "@/mock/index"
// 导入svg-icon组件
import SvgIcon from "@/components/SvgIcon.vue"
import "virtual:svg-icons-register"

const app = createApp(App)

app.component("SvgIcon", SvgIcon)

app.use(router).use(createPinia()).mount("#app")
