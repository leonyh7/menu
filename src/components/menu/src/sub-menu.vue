<template>
  <div class="apin-menu">
    <apin-menu-item
      :icon="menu.icon"
      :text="menu.text" 
      :hasChild="!!menu.children&&menu.children.length>0" 
      v-for="menu in subMenuList" 
      :key="menu.id">
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
    subMenuList: {
      type: Array
    }
  },
  components: {
    [MenuItem.name]: MenuItem
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/style/menu';
</style>
