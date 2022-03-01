import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
createApp(App).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})
