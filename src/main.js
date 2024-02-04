import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootsrap/dist/css/bootsrap.css'

import bootstrap from 'bootsrap/dist/css/bootsrap.bundle.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(bootstrap)
app.mount('#app')
