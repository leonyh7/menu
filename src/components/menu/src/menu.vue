<template>
  <div class="apin-menu apin-top-menu" :class="{collapsed: collapsed}">
    <apin-menu-item icon="menu" class="menu-arrow" @click.native="collapse" :hasChild="false"></apin-menu-item>
    <apin-menu-item
      :icon="menu.icon"
      :text="menu.text" 
      :hasChild="!!menu.children&&menu.children.length>0" 
      :key="menu.id" 
      @click.native="showChild(menu)" 
      v-for="menu in menuList">
    </apin-menu-item>
    <apin-sub-menu :subMenuList="subMenuList" class="apin-menu-child" v-show="isShowChild">
      <apin-menu-item
        :icon="menu.icon"
        :text="menu.text" 
        :hasChild="!!menu.children&&menu.children.length>0" 
        :key="menu.id" 
        @click.native="showChild(menu)" 
        v-for="menu in subMenuList">
      </apin-menu-item>
    </apin-sub-menu>
  </div>
</template>

<script>
import MenuItem from './menu-item'
import SubMenu from './sub-menu'
export default {
  name: 'ApinMenu',
  data () {
    return {
      collapsed: false,
      isShowChild: false,
      subMenuList: []
    }
  },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  components: {
    [MenuItem.name]: MenuItem,
    [SubMenu.name]: SubMenu
  },
  methods: {
    collapse () { // 伸缩父菜单
      this.collapsed = !this.collapsed
    },
    showChild (menu) { // 显示子菜单
      if (menu.children) {
        this.subMenuList = menu.children
        this.isShowChild = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/style/menu';
</style>
