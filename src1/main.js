import { createApp } from 'vue'
import App from './App.vue'
import cj from './plugins/cj'

let app = createApp(App)
app.use(cj)
app.mount('#app')
