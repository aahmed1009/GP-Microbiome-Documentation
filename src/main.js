import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.config.ignoredElements = [/^ion-/];
app.AOS = new AOS.init({ disable: "phone" });
