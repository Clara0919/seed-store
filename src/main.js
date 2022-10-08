import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;//每次請求，無論是否跨域，都帶上cookie資訊

const seed_app = createApp(App);
// seed_app.component('ProductDetailView', ProductDetailView);
seed_app.use(router).use(VueAxios, axios).mount('#app');

