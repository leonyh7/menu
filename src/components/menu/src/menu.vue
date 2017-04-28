<template>
  <div class="apin-menu apin-top-menu" :class="{collapsed: collapsed}">
    <apin-menu-item icon="category" class="menu-arrow" @click.native="collapse" :hasChild="false"></apin-menu-item>
    <apin-menu-item
      :icon="menu.icon"
      :text="menu.text" 
      :hasChild="!!menu.children&&menu.children.length>0" 
      v-for="menu in menuList" 
      :key="menu.id" 
      @click.native="showChild(menu)">
    </apin-menu-item>
    <slot name="child" v-show="isShowChild"></slot>
  </div>
</template>

<script>
import MenuItem from './menu-item'
export default {
  name: 'ApinMenu',
  data () {
    return {
      // 一级菜单伸缩
      collapsed: false
    }
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  components: {
    [MenuItem.name]: MenuItem
  },
  methods: {
    collapse () { // 伸缩父菜单
      this.collapsed = !this.collapsed
    },
    showChild (menu) { // 显示子菜单
      if (menu.children) {
        this.$emit('showChild', {
          show: true,
          text: menu.text,
          list: menu.children
        })
      }
    }
  }
}
</script>
