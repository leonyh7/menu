<template>
    <apin-menu :menuList="menuList" @showChild="showChild" >
      <apin-sub-menu :subMenuList="subMenu.list" :title="subMenu.text" slot="child" v-show="subMenu.show" @showItem="showItem" @close="close('all')">
        <apin-sub-menu :subMenuList="item.list" :title="item.text" slot="child" v-show="item.show" @close="close"></apin-sub-menu>
      </apin-sub-menu>
    </apin-menu>
</template>

<script>
import Menu from '../components/menu'
import SubMenu from '../components/sub-menu'
export default {
  name: 'ApinLeftMenu',
  data () {
    return {
      // 二级菜单
      childText: '',
      subMenu: {
        show: false,
        text: '',
        list: []
      },
      // 三级菜单
      item: {
        show: false,
        text: '',
        list: []
      }
    }
  },
  props: {
    menuList: Array
  },
  components: {
    [Menu.name]: Menu,
    [SubMenu.name]: SubMenu
  },
  methods: {
    showChild (list) {
      this.subMenu = Object.assign({}, this.subMenu, list)
    },
    showItem (list) {
      this.item = Object.assign({}, this.item, list)
    },
    close (isAll) {
      if (isAll) this.subMenu.show = false
      this.item.show = false
    }
  }
}
</script>
