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
