import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue' // 1
import 'ant-design-vue/dist/antd.css' // 2

import i18n from '@/plugins/i18n'

Vue.config.productionTip = false

Vue.use(Antd) // 3

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
