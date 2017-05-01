import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'
import left from '@/components/body-left'
import index from '@/components/index'
import search from '@/components/search'


Vue.use(Router)
const routes = [
  {path: '/detail',component:detail},
  {path: '/category/:id',component:left},
  {path: '',component:index},
  {path: '/search',component:search}

]
const router = new Router({
  routes: routes
})
const app = new Vue({
  router
}).$mount('#app')

export default router;
