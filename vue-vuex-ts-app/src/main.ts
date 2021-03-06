import Vue from 'vue';
import '@/plugins/axios'; // instancia de mi plugin de vue-axios 
import '@/plugins/bootstrap-vue';
import '@/plugins/vee-validate';

/**
 * Componente principal 
 */
import App from './App.vue';
import router from './router';
import store from './store';
import {Http} from "@/namespaces/Http";

Vue.config.productionTip = false;

new Http.ApiJwtService();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
