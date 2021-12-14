import { createApp } from "vue";

import router from "./router";

import store from "./store";

import App from "./App.vue";

import locales from "./locales";

import "./plugins/aos";

const app = createApp(App);

app.use(router);

app.use(locales);

app.use(store);

app.mount("#app");
