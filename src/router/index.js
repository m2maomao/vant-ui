import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Tabbar = () => import('../components/Tabbar.vue')
const TreeSelect = () => import('../components/TreeSelect.vue')
const AddressEdit = () => import('../components/AddressEdit.vue')
const AddressList = () => import('../components/AddressList.vue')

const routes = [
  {
    path: '/Tabbar',
    component: Tabbar
  },
  {
    path: '/TreeSelect',
    component: TreeSelect
  },
  {
    path: '/AddressEdit',
    component: AddressEdit
  },
  {
    path: '/AddressList',
    component: AddressList
  }
]
export default new Router({
  routes
})