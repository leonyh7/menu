<template>
  <div class="apin-menu-item">
    <i :class="'el-icon-' + icon"></i>
    <span class="apin-item-text">{{text}}</span>
    <i class="el-icon-arrow-right apin-icon-right" v-if="hasChild"></i>
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
  position: relative;
  padding: 0 $menu-item-padding;
  height: $menu-item-height;
  line-height: $menu-item-height;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: $light-dark;
  }
}
.collapsed > .apin-menu-item {
  & > .apin-item-text,
  & > .apin-icon-right {
    display: none;
  }
}
.apin-item-text {
  margin-left: 15px;
}
.apin-icon-right {
  position: absolute;
  top: ($menu-item-height - $menu-item-icon-size) / 2;
  right: 10px;
}
</style>
