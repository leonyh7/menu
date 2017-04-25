<template>
  <header>
    <div class="apin-title">title</div>
    <div class="apin-breadcrumb">menu1>menu2</div>
    <div class="apin-search">
        <i class="icon-search"></i>
        <input class="apin-text" type="text" placeholder="搜索资源" v-model="search" @focus="getResult" @blur="hideResult">
        <i class="icon-close" @click="clear"></i>
        <div class="apin-sub-menu apin-search-result" v-show="searchShow">
            <p>result1</p>
            <p>result2</p>
            <p>result3</p>
            <p>result4</p>
            <p>result5</p>
        </div>
    </div>
    <apin-dropdown class="apin-notice">
      <apin-dropdown-menu>
        <i class="icon-notice" title="通知"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-notice-result">
        <p>result1</p>
        <p>result2</p>
        <p>result3</p>
        <p>result4</p>
        <p>result5</p>
      </apin-dropdown-list>
    </apin-dropdown>
    <apin-dropdown class="apin-setting">
      <apin-dropdown-menu>
        <i class="icon-shezhi" title="设置"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-setting-detail">
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        <el-switch
          v-model="value2"
          on-color="#13ce66"
          off-color="#ff4949">
        </el-switch>
      </apin-dropdown-list>
    </apin-dropdown>
    <apin-dropdown class="apin-help">
      <apin-dropdown-menu>
        <i class="icon-bangzhu" title="帮助"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-help-detail">
        <p>result1</p>
        <p>result2</p>
        <p>result3</p>
        <p>result4</p>
        <p>result5</p>
      </apin-dropdown-list>
    </apin-dropdown>
    <apin-dropdown class="apin-user">
      <apin-dropdown-menu class="apin-user-info">
        <div class="apin-user-content">
          <div class="account">eric6p@qebobo.partner.onmschina.cn</div>
          <div class="name">chun.zhang</div>
        </div>
        <i class="icon-yonghu"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-user-option">
        <p>result1</p>
        <p>result2</p>
        <p>result3</p>
        <p>result4</p>
        <p>result5</p>
      </apin-dropdown-list>
    </apin-dropdown>
  </header>
</template>

<script>
import Dropdown from '../components/dropdown'
import DropdownMenu from '../components/dropdown-menu'
import DropdownList from '../components/dropdown-list'
// import Slider from '../components/slider'
import Switch from '../components/switch'
export default {
  name: 'ApinHeader',
  data () {
    return {
      search: '',
      searchShow: false,
      value2: true
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
    [DropdownList.name]: DropdownList,
    // [Slider.name]: Slider,
    [Switch.name]: Switch
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
  padding: 0 20px;
  color: $head-color;
  background-color: $head-bg-color;
  .apin-title {
    font-size: $middle-size;
    margin-right: 15px;
  }
  .apin-breadcrumb {
    flex: auto;
  }

  .apin-search {
    @extend %top-menu;
    margin-right: 15px;
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
  // 通知
  .apin-notice {
    @extend %top-menu;
    padding: 0 15px;
  }
  // 设置
  .apin-setting {
    @extend %top-menu;
    padding: 0 15px;
  }
  // 帮助
  .apin-help  {
    @extend %top-menu;
    padding: 0 15px;
  }
  // 用户
  .apin-user {
    @extend %top-menu;
    .apin-user-info {
      display: flex;
      .account {
        font-size: 14px;
        line-height: 24px;
      }
      .name {
        line-height: 16px;
      }
      .icon-yonghu {
        padding: 11px 11px 0; 
      }
    }
  }
}
</style>
