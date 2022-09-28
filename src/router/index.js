import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetailView.vue'
import SelectedCategory from '../views/SelectedCategory.vue'
import Vegetable from '../views/Vegetable.vue'
import Login from '../views/LoginView.vue'
import SignUp from '../views/SignUpView.vue'

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
    path: '/product-detail',
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
