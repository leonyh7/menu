<template>
  <div v-show="collapsed">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ApinDropdownList',
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
      this.collapse()
    }),
    this.$on('hide', () => {
      this.collapsed = false
    })
  }
}
</script>
