import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css"; // 全局引入样式
import flexible from "amfe-flexible";

createApp(App).use(router).use(store).use(flexible).use(Vant).mount("#app");
