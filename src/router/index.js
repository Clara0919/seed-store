import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import SelectedCategory from '../views/SelectedCategory.vue'
import Vegetable from '../views/Vegetable.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/selected-category',
    name: 'SelectedCategory',
    component: SelectedCategory
  },
  {
    path: '/vegetable',
    name: 'vegetable',
    component: Vegetable
  },
  {
    path: '/product-detail',
    name: 'ProductDetailView',
    component: ProductDetailView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
