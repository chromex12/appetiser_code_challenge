import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  router,
  store,
  iView,
  render: h => h(App)
}).$mount('#app')
