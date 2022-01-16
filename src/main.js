import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(DatePicker);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
