<template>
  <div id="app">
    <header>
      title
    </header>
    <main>
      <apin-menu :menuList="menuList" @showChild="showChild" >
        <apin-sub-menu :subMenuList="subMenu.list" :title="subMenu.text" slot="child" v-show="subMenu.show" @showItem="showItem" @close="close('all')">
          <apin-sub-menu :subMenuList="item.list" :title="item.text" slot="child" v-show="item.show" @close="close"></apin-sub-menu>
        </apin-sub-menu>
      </apin-menu>
      <section class="apin-content"></section>
    </main>
  </div>
</template>

<script>
import Menu from './components/menu'
import SubMenu from './components/sub-menu'
export default {
  name: 'app',
  data () {
    return {
      menuList: [{
        id: 1,
        icon: 'upload',
        text: 'menu1',
        children: [{
          id: 11,
          icon: 'upload',
          text: 'menu11',
          children: [{
            id: 111,
            text: 'menu333'
          }]
        }, {
          id: 12,
          icon: 'upload',
          text: 'menu12'
        }]
      }, {
        id: 2,
        icon: 'setting',
        text: 'menu2'
      }],
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

<style lang="scss" scoped>
@import './assets/style/variable';
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

header {
    height: $layout-head-height;
    line-height: $layout-head-height;
    font-size: $middle-size;
    color: $layout-head-color;
    background-color: $layout-head-bg-color;
}

main {
    display: flex;
    flex: 1;
    section {
        height: 100%;
    }
    .apin-content {
        flex: 1;
        width: calc(100% - $layout-menu-width);
        background-color: $layout-content-bg;
    }
}

.second-menu {
  position: absolute;
  top: 0;
  right: -200px;
}

.third-menu {
  @extend .second-menu;
}
</style>
