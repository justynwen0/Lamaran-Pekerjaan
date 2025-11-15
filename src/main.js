import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App).use(router).mount("#app");

AOS.init();
