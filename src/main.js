import { createApp } from "vue";
import { createStore } from "vuex";
import VTooltip from "v-tooltip";

import appStore from "./store";

import App from "./App.vue";

const store = createStore(appStore);

const app = createApp(App);
app.use(store);
app.use(VTooltip);
app.mount("#app");
