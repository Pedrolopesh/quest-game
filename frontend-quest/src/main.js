import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from './util/axios';
import Vuesax from 'vuesax';
import './assets/index.scss';
import 'vuesax/dist/vuesax.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$url = process.env.VUE_APP_PROD_URL

Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

export { axios }
