import Vue from 'vue'
import App from './App.vue'
import VueResourse from 'vue-resource'
import router from './router/index'
import {store} from './store/store'

Vue.use(VueResourse);

new Vue({
  store: store,
  router: router,
  el: '#app',
  render: h => h(App)
})
