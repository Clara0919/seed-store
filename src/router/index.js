import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetailView.vue'
import SelectedCategory from '../views/SelectedCategory.vue'
import Vegetable from '../views/Vegetable.vue'
import Fruit from '../views/Fruit.vue'
import Herb from '../views/Herb.vue'
import Flower from '../views/Flower.vue'
import Login from '../views/LoginView.vue'
import SignUp from '../views/SignUpView.vue'
import shopCart from '../views/shopCart.vue'
import order from '../views/orderView.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home
  },
  {
    path: '/selected-category',
    name: 'SelectedCategory',
    component: SelectedCategory
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
    component: shopCart

  },{
    path:'/order',
    name:'orderView',
    component:order
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
