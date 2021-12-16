import { createApp } from "vue"
import App from "./App.vue"
import themes from "~/themes"
import notification from "~/notification"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"
import "dayjs/locale/zh-cn"
import { router } from "./router"

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale("zh-cn")

createApp(App).use(router).use(themes).use(notification).mount("#app")