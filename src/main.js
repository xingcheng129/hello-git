// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../.../../static/bootstrap/css/bootstrap.min.css'
/*import '../.../../static/bootstrap/js/jquery-1.12.4.js'
import '../.../../static/bootstrap/js/bootstrap.js'*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
