import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import SelectedCategory from '../views/SelectedCategory.vue'

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
