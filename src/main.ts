import { createApp } from 'vue'
import App from './App.vue'
import draw from './plugins/draw'

const app = createApp(App)
// app.component('draw',draw)
app.use(draw)
app.mount('#app')
