<template>
  <header>
    <div class="apin-title">title</div>
    <div class="apin-breadcrumb">menu1>menu2</div>
    <div class="apin-search">
      <i class="icon-search"></i>
      <input class="apin-text" type="text" placeholder="搜索资源" v-model="search" @focus="getResult" @blur="hideResult">
      <i class="icon-close" @click="clear"></i>
      <div class="apin-sub-menu apin-search-result" v-show="searchShow">
        <div class="item">新建支持请求1</div>
        <div class="item">新建支持请求2</div>
        <div class="item">新建支持请求3</div>
      </div>
    </div>
    <apin-dropdown class="apin-notice">
      <apin-dropdown-menu>
        <i class="icon-notice" title="通知"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-notice-result">
        <div class="item" v-for="item in notice">新建支持请求</div>
        <div class="no-data" v-if="!notice.length">
          此会话中无新通知
        </div>
      </apin-dropdown-list>
    </apin-dropdown>
    <div class="apin-setting" @click="showSetting">
      <i class="icon-shezhi" title="设置"></i>
    </div>
    <div class="apin-setting-detail" v-show="settingShow">
      <i class="icon-close" @click="hideSetting"></i>
      <h4 class="apin-setting-title apin-setting-separator">门户设置</h4>
      <div class="apin-setting-content">
        <h6 class="apin-setting-item">
          设置1
        </h6>
        <el-switch v-model="value2" on-color="#00bcf2" off-color="#3284ae">
        </el-switch>
      </div>
      <div class="apin-setting-option">
        <button class="btn btn-success">确认</button>
        <button class="btn btn-default">取消</button>
      </div>
    </div>
    <apin-dropdown class="apin-help">
      <apin-dropdown-menu>
        <i class="icon-bangzhu" title="帮助"></i>
      </apin-dropdown-menu>
      <apin-dropdown-list class="apin-sub-menu apin-help-detail">
        <div class="item">新建支持请求1</div>
        <div class="item">新建支持请求2</div>
        <div class="item">新建支持请求3</div>
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
        <div class="item">
          注销
          <i class="icon-exit"></i>
        </div>
        <div class="item">
          修改密码
          <i class="icon-password"></i>
        </div>
      </apin-dropdown-list>
    </apin-dropdown>
  </header>
</template>

<script>
import Dropdown from '../components/dropdown'
import DropdownMenu from '../components/dropdown-menu'
import DropdownList from '../components/dropdown-list'
import Switch from '../components/switch'
export default {
  name: 'ApinHeader',
  data() {
    return {
      search: '',
      searchShow: false,
      settingShow: false,
      value2: true,
      notice: []
    }
  },
  methods: {
    // 搜索
    getResult(event) {
      this.searchShow = true
    },
    hideResult() {
      this.searchShow = false
    },
    clear() {
      this.search = ''
    },
    // 设置
    showSetting () {
      this.settingShow = !this.settingShow
    },
    hideSetting () {
      this.settingShow = false
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
  cursor: pointer;
  .apin-sub-menu {
    position: absolute;
    top: $head-height;
    right: 0;
    background-color: $grey;
    font-size: 14px;
    .item {
      white-space: nowrap;
      &:hover {
        background-color: $head-hover-color;
      }
    }
  }
}
%head-icon {
  display: block;
  width: $head-height;
  text-align: center;
  border-right: 1px solid rgba(128,128,128,.4);
  &:hover {
    background-color: #383838;
  }
}
%shadow {
  box-shadow: 0 5px 15px 2px rgba(0, 0, 0, .3);
}

header {
  display: flex;
  flex: none;
  height: $head-height;
  line-height: $head-height;
  padding-left: 20px;
  color: $head-color;
  background-color: $head-bg-color;
  font-size: $large-size;
  .item {
    height: 36px;
    line-height: 36px;
    padding: 0 20px;
    &:hover {
      background-color: $head-hover-color;
    }
  }
  .apin-title {
    margin-right: 15px;
    color: #00bcf2;
  }
  .apin-breadcrumb {
    flex: auto;
  }

  .apin-search {
    @extend %top-menu;
    position: relative;
    width: $search-width;
    line-height: 34px;
    .icon-search,
    .icon-close {
      position: absolute;
      top: 10px;
    }
    .icon-search {
      left: 5px;
    }
    .icon-close {
      right: 5px;
    }
    .apin-text {
      width: inherit;
      height: $head-search-text-height;
      color: $head-search-text-color;
      padding: 0 30px;
      background-color: $grey;
      border: none;
      flex: auto;
      box-sizing: border-box;
    }
    .apin-search-result {
      width: inherit;
    }
  } // 通知
  .apin-notice {
    @extend %top-menu;
    @extend %head-icon;
    .apin-notice-result {
      @extend %shadow;
      width: $notice-width;
    }
    .no-data {
      text-align: center;
      width: 100%;
      height: 130px;
      line-height: 130px;
    }
  } // 设置
  .apin-setting {
    @extend %head-icon;
    cursor: pointer;
  }
  .apin-setting-detail {
    position: absolute;
    top: $head-height;
    right: 0;
    display: flex;
    flex-direction: column;
    background-color: $grey;
    font-size: 14px;
    line-height: 1.2;
    width: 340px;
    height: calc(100% - #{$head-height});
    padding: 0 25px 25px;
    box-sizing: border-box;
    .icon-close {
      font-size: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
  .apin-setting-title {
    font-weight: normal;
    font-size: $large-size;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #7a7a7a;
  }
  .apin-setting-content {
    flex: 1;
    overflow-y: auto; 
  }
  .apin-setting-item {
    font-weight: normal;
    margin: 10px 0;
    font-size: $middle-size;
  }
  .apin-setting-option {
    height: 30px;
  }
  // 帮助
  .apin-help {
    @extend %top-menu;
    @extend %head-icon;
    .apin-help-detail {
      @extend %shadow;
    }
  } // 用户
  .apin-user {
    @extend %top-menu;
    .apin-user-info {
      display: flex;
      align-items: center;
      padding-left: 10px; 
      .apin-user-content {
        max-width: 135px;
        font-size: 14px;
        text-align: right;
      }
      .account,
      .name {
        width: inherit;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .account {
        line-height: 24px;
      }
      .name {
        line-height: 16px;
      }
      .icon-yonghu {
        font-size: 28px;
        margin-left: 10px;
      }
    }
    .apin-user-option {
      @extend %shadow;
      width: 220px;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-exit {
          color: #e81123;
        }
      }
    }
  }
}
</style>
