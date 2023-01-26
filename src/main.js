import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap";
import VueAgile from "vue-agile";
import "@/assets/styles/base.scss";

createApp(App).use(store).use(router).use(VueAgile).mount("#app");
