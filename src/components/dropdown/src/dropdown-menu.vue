<template>
  <div @click="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ApinDropdownMenu',
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
      this.$dispatch('ApinDropdown', 'collapse')
    }
  }
}
</script>
