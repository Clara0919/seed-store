
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetailView.vue'
import Vegetable from '../views/Vegetable.vue'
import Fruit from '../views/Fruit.vue'
import Herb from '../views/Herb.vue'
import Flower from '../views/Flower.vue'
import Login from '../views/LoginView.vue'
import SignUp from '../views/SignUpView.vue'
import shopCart from '../views/shopCart.vue'
import order from '../views/orderView.vue'
import member from '../views/memberView.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home
  },
  {
    path: '/vegetable',
    name: 'Vegetable',
    component: Vegetable
  },
  {
    path: '/flower',
    name: 'Flower',
    component: Flower
  },
  {
    path: '/fruit',
    name: 'Fruit',
    component: Fruit
  },
  {
    path: '/herb',
    name: 'Herb',
    component: Herb
  },
  {
    path: '/product/:productId',
    name: 'ProductDetailView',
    component: ProductDetail
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUp
  }
  , {
    path: '/shopCart',
    name: 'shopCart',
    component: shopCart,
    beforeEnter: (to,from,next) => {  //進入購物車的路由守衛 如果sessionStorage裡面沒有isLogin的話，叫使用者先去登入

      if(!sessionStorage.getItem('isLogin')) {
        console.log('測試isLogin',sessionStorage.getItem('isLogin'))
        alert('請先登入')
        router.push('/login')
      } else {
        next()
      }
    }
  },{
    path:'/order',
    name:'orderView',
    component:order
  },
  {
    path: '/member/:id',
    name: 'memberView',
    component: member
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

