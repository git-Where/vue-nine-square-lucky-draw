import { createApp } from 'vue'
import App from './App.vue'
import draw from './plugins/draw.vue'

const app = createApp(App)
app.component('draw',draw)
app.mount('#app')
