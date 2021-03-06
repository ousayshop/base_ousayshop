import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import Footer from '@/components/Footer.vue'
import { firestorePlugin } from 'vuefire'
import VueToastr from "vue-toastr";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './assets/js/youtube.js'


Vue.use( VueSplide );
Vue.use( firestorePlugin );
Vue.use( VueToastr );

Vue.component('footer-component', Footer);

import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Splide,
    SplideSlide,
  },
}

require('@/assets/styles/material-kit.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
