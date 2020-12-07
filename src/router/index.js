import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Tabbar = () => import('../components/Tabbar.vue')
const TreeSelect = () => import('../components/TreeSelect.vue')

const routes = [
  {
    path: '/Tabbar',
    component: Tabbar
  },
  {
    path: '/TreeSelect',
    component: TreeSelect
  }
]
export default new Router({
  routes
})