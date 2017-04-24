<template>
  <header>
    <div class="apin-title">title</div>
    <div class="apin-breadcrumb">menu1>menu2</div>
    <div class="apin-search">
        <i class="icon-search"></i>
        <input class="apin-text" type="text" placeholder="搜索资源" v-model="search" @focus="getResult" @blur="hideResult">
        <i class="icon-close" @click="clear"></i>
        <ul class="apin-sub-menu apin-search-result" v-show="searchShow">
            <li>result1</li>
            <li>result2</li>
            <li>result3</li>
            <li>result4</li>
            <li>result5</li>
        </ul>
    </div>
    <apin-dropdown class="apin-notice">
      <apin-dropdown-menu>
        <i class="icon-notice" title="通知"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-notice-result">
        <ul>
          <li>result1</li>
          <li>result2</li>
          <li>result3</li>
          <li>result4</li>
          <li>result5</li>
        </ul>
      </apin-dropdown-list>
    </apin-dropdown>
    <div class="apin-setting">
      <i class="icon-shezhi" title="设置"></i>
      <!--<ul class="apin-sub-menu apin-setting-detail">
        <li>result1</li>
        <li>result2</li>
        <li>result3</li>
        <li>result4</li>
        <li>result5</li>
      </ul>-->
    </div>
    <div class="apin-help">
      <i class="icon-bangzhu" title="帮助"></i>
      <!--<ul class="apin-sub-menu apin-help-detail">
        <li>result1</li>
        <li>result2</li>
        <li>result3</li>
        <li>result4</li>
        <li>result5</li>
      </ul>-->
    </div>
    <div class="apin-user">
      <div class="apin-user-info">
        <div class="account">eric6p@qebobo.partner.onmschina.cn</div>
        <div class="name">chun.zhang</div>
      </div>
      <i class="icon-yonghu"></i>
      <!--<ul class="apin-sub-menu apin-user-option">
        <li>result1</li>
        <li>result2</li>
        <li>result3</li>
        <li>result4</li>
        <li>result5</li>
      </ul>-->
    </div>
  </header>
</template>

<script>
import Dropdown from '../components/dropdown'
import DropdownMenu from '../components/dropdown-menu'
import DropdownList from '../components/dropdown-list'
export default {
  name: 'ApinHeader',
  data () {
    return {
      search: '',
      searchShow: false
    }
  },
  methods: {
    // 搜索
    getResult (event) {
      this.searchShow = true
    },
    hideResult () {
      this.searchShow = false
    },
    clear () {
      this.search = ''
    }
  },
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownList.name]: DropdownList
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variable';
%top-menu {
  position: relative;
  .apin-sub-menu {
    position: absolute;
    top: $head-height;
    right: 0;
    background-color: $grey;
  }
}
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
    @extend %top-menu;
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
    .apin-search-result {
        
    }
  }
  // 通知
  .apin-notice {
    @extend %top-menu;
  }
  // 设置
  .apin-setting {
    @extend %top-menu;
  }
  // 帮助
  .apin-help  {
    @extend %top-menu;
  }
  // 用户
  .apin-user {
    @extend %top-menu;
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
