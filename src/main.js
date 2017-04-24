// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/style/theme.scss'

Vue.config.productionTip = false

Vue.prototype.$dispatch = function (componentName, eventName, params) {
  var parent = this.$parent || this.$root
  var name = parent.$options.name

  // 寻找父级，如果父级不是符合的组件名，则循环向上查找
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent

    if (parent) {
      name = parent.$options.componentName
    }
  }
  // 找到符合组件名称的父级后，触发其事件。整体流程类似jQuery的closest方法
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params))
  }
}

Vue.prototype.$broadcast = function (componentName, eventName, params) {
  broadcast.call(this, componentName, eventName, params)
  function broadcast (componentName, eventName, params) {
    // 遍历所有子组件
    this.$children.forEach(child => {
      var name = child.$options.name
      // 寻找符合指定名称的子组件
      if (name === componentName) {
        // 在符合的自组件上触发的事件，但是不会再继续寻找符合名称的组件的子集，原因？
        child.$emit.apply(child, [eventName].concat(params))
      } else {
        // 不符合继续寻找他的子集（即孙子组件）
        broadcast.apply(child, [componentName, eventName].concat([params]))
      }
    })
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
