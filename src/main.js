import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import vClickOutside from 'v-click-outside'

if (window.location.hash) {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vClickOutside);

app.mount('#app')
