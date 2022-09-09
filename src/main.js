import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ProductDetailView from './views/ProductDetailView.vue'

const seed_app = createApp(App);
// seed_app.component('ProductDetailView', ProductDetailView);
seed_app.use(router).mount('#app');

