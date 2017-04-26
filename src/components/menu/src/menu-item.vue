<template>
  <div class="apin-menu-item">
    <i :class="'icon-' + icon"></i>
    <span class="apin-item-text">{{text}}</span>
    <i class="icon-more" v-if="hasChild"></i>
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
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #3d4247;
  }
}
.collapsed > .apin-menu-item {
  & > .apin-item-text,
  & > .icon-more {
    display: none;
  }
}
.apin-item-text {
  margin-left: 15px;
}
.icon-more {
  position: absolute;
  top: (40px - 14px) / 2;
  right: 10px;
}
</style>
