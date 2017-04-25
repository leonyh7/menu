<template>
  <div v-clickoutside="hide">
    <slot></slot>
  </div>
</template>
<script>
import Clickoutside from '../../../assets/utils/clickoutside'
export default {
  name: 'ApinDropdown',
  directives: { Clickoutside },
  data () {
    return {
      // 子菜单伸缩
      collapsed: false
    }
  },
  methods: {
    collapse () { // 伸缩菜单
      this.$broadcast('ApinDropdownList', 'collapse')
    },
    hide () {
      this.$broadcast('ApinDropdownList', 'hide')
    }
  },
  created () {
    this.$on('collapse', () => {
      this.collapse()
    })
  }
}
</script>
