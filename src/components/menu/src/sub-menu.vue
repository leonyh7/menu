<template>
  <div class="apin-menu apin-menu-child">
    <div class="sub-menu-title">
      <p>{{title}}</p>
      <i class="icon-close" @click="close"></i>
    </div>
    <apin-menu-item
      :icon="menu.icon"
      :text="menu.text" 
      :hasChild="!!menu.children&&menu.children.length>0" 
      v-for="menu in subMenuList" 
      :key="menu.id" 
      @click.native="showItem(menu)" 
      slot="item">
    </apin-menu-item>
    <slot name="child"></slot>
  </div>
</template>

<script>
import MenuItem from './menu-item'
export default {
  name: 'ApinSubMenu',
  data () {
    return {
      isShowChild: false
    }
  },
  props: {
    subMenuList: Array,
    title: String
  },
  components: {
    [MenuItem.name]: MenuItem
  },
  methods: {
    showItem (menu) { // 显示子菜单
      if (menu.children) {
        this.$emit('showItem', {
          show: true,
          text: menu.text,
          list: menu.children
        })
      }
    },
    close () { // 关闭菜单
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/style/menu';
</style>
