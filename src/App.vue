<template>
  <div id="app">
    <apin-header></apin-header>
    <main>
      <apin-left-menu :menuList="menuList"></apin-left-menu>
      <section class="apin-content"></section>
    </main>
  </div>
</template>

<script>
import ApinHeader from './view/Header'
import ApinLeftMenu from './view/LeftMenu'
export default {
  name: 'app',
  data () {
    return {
      menuList: [{
        id: 1,
        icon: 'smile',
        text: 'menu1',
        children: [{
          id: 11,
          icon: 'smile',
          text: 'menu11',
          children: [{
            id: 111,
            text: 'menu333'
          }]
        }, {
          id: 12,
          icon: 'smile',
          text: 'menu12'
        }]
      }, {
        id: 2,
        icon: 'smile',
        text: 'menu2'
      }]
    }
  },
  components: {
    [ApinHeader.name]: ApinHeader,
    [ApinLeftMenu.name]: ApinLeftMenu
  }
}
</script>
