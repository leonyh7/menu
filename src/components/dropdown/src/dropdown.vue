<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ApinDropdown',
  data () {
    return {
      // 子菜单伸缩
      collapsed: false
    }
  },
  props: {
  },
  methods: {
    collapse () { // 伸缩菜单
      this.collapsed = !this.collapsed
    }
  },
  created () {
    this.$on('collapse', () => {
      this.$broadcast('ApinDropdownList', 'collapse')
    })
  }
}
</script>
