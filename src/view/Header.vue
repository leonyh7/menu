<template>
  <header>
    <div class="apin-title">title</div>
    <div class="apin-breadcrumb">menu1>menu2</div>
    <div class="apin-search">
      <i class="icon-search"></i>
      <input class="apin-text" type="text" placeholder="搜索资源">
      <i class="icon-close"></i>
    </div>
    <div class="apin-notice">
      <i class="icon-notice" title="通知"></i>
    </div>
    <div class="apin-notice">
      <i class="icon-shezhi" title="设置"></i>
    </div>
    <div class="apin-help">
      <i class="icon-bangzhu" title="帮助"></i>
    </div>
    <div class="apin-user">
      <div class="apin-user-info">
        <div class="account">eric6p@qebobo.partner.onmschina.cn</div>
        <div class="name">chun.zhang</div>
      </div>
      <i class="icon-yonghu"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ApinHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable';
header {
  display: flex;
  flex: none;
  height: $head-height;
  line-height: $head-height;
  color: $head-color;
  background-color: $head-bg-color;
  .apin-title {
    font-size: $middle-size;
  }
  .apin-breadcrumb {
    flex: auto;
  }
  .apin-search {
    position: relative;
    .apin-text {
      height: $head-search-text-height;
      color: $head-search-text-color;
      background-color: $grey;
      border: none;
    }
    .apin-icon-close {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
  .apin-user {
    display: flex;
    .apin-user-info {
      .account {
        font-size: 14px;
        line-height: 24px;
      }
      .name {
        line-height: 16px;
      }
    }
  }
}
</style>
