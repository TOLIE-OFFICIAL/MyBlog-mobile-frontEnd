import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ConfigProvider } from 'vant';

import App from './App.vue'
import router from './router'

import 'virtual:windi.css'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(ConfigProvider)
app.use(router)

app.mount('#app')
