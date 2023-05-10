import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vue Router
import { router } from "./router";

import { registerStore } from "./store";

// reset css
import "@kirklin/reset-css/tailwind.css";

// import packages
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App).use(pinia);
registerStore();
app.use(router);
app.mount('#app');