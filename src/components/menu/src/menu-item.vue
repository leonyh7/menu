<template>
  <div class="apin-menu-item">
    <i :class="'el-icon-' + icon"></i>
    <span class="item-text">{{text}}</span>
    <i class="el-icon-arrow-right" v-if="hasChild"></i>
  </div>
</template>

<script>
export default {
  name: 'ApinMenuItem',
  props: ['text', 'hasChild', 'icon']
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variable';
.apin-menu-item {
  padding: 0 $menu-item-padding;
  height: $menu-item-height;
  line-height: $menu-item-height;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: $light-dark;
  }
}
.item-text {
  margin-left: 10px;
}
.collapsed .item-text {
  display: none;
  margin-left: 10px;
}
</style>
