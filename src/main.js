// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/style/theme.scss'

Vue.config.productionTip = false

// Vue.prototype.$dispatch = (componentName, eventName, params) => {
//   var parent = this.$parent || this.$root
//   var name = parent.$options.name

//   // 寻找父级，如果父级不是符合的组件名，则循环向上查找
//   while (parent && (!name || name !== componentName)) {
//     parent = parent.$parent

//     if (parent) {
//       name = parent.$options.componentName
//     }
//   }
//   // 找到符合组件名称的父级后，触发其事件。整体流程类似jQuery的closest方法
//   if (parent) {
//     parent.$emit.apply(parent, [eventName].concat(params))
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
