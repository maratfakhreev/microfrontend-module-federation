import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

export function mount(el: string) {
  const app = createApp(App)
  app.use(router)
  app.mount(el)
}

export function navigate(path: string) {
  if (router.currentRoute.value.path !== path) {
    router.push(path)
  }
}
