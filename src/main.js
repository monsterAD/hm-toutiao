import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from '@/router'
import '@/styles/index.less'
Vue.prototype.$http = axios
// 产品级别提示
Vue.config.productionTip = false
Vue.use(ElementUI)

// 入口文件
// 职责 引入需要依赖的模块 （js css  包  其他资源）
// 职责2 创建一个根vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
