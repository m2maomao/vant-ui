import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入组件
const Tabbar = () => import('../components/Tabbar.vue')
const TreeSelect = () => import('../components/TreeSelect.vue')
const AddressEdit = () => import('../components/AddressEdit.vue')
const AddressList = () => import('../components/AddressList.vue')
const Area = () => import('../components/Area.vue')
const Card = () => import('../components/Card.vue')
const ContactCard = () => import('../components/ContactCard.vue')
const ContactEdit = () => import('../components/ContactEdit.vue')
const ContactList = () => import('../components/ContactList.vue')
const Coupon = () => import('../components/Coupon.vue')
const GoodsAction = () => import('../components/GoodsAction.vue')
const SubmitBar = () => import('../components/SubmitBar.vue')
const Sku = () => import('../components/Sku.vue')
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
  },
  {
    path: '/Area',
    component: Area
  },
  {
    path: '/Card',
    component: Card
  },
  {
    path: '/ContactCard',
    component: ContactCard
  },
  {
    path: '/ContactEdit',
    component: ContactEdit
  },
  {
    path: '/ContactList',
    component: ContactList
  },
  {
    path: '/Coupon',
    component: Coupon
  },
  {
    path: '/GoodsAction',
    component: GoodsAction
  },
  {
    path: '/SubmitBar',
    component: SubmitBar
  },
  {
    path: '/Sku',
    component: Sku
  }
]
export default new Router({
  routes
})