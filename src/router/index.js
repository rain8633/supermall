import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() =>import('view/home/home')
const Category =() =>import('view/category/category')
const Cart =() =>import('view/cart/cart')
const Profile =() =>import('view/profile/profile')

//1.安装插件
Vue.use(VueRouter)
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:Home,
  }, {
    path: '/category',
    component:Category,
  },
  {
    path: '/cart',
    component:Cart,
  },
  {
    path: '/profile',
    component:Profile,
  }
]
//2.创建router
const router = new VueRouter({
routes
})


export default  router
