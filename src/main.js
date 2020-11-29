import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.performance = true
Vue.use(CoreuiVue)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
