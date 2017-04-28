<template>
  <header>
    <div class="apin-title">logo</div>
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
        <div class="apin-setting-color">
          <div class="apin-color-option" v-for="(theme, name) in colors" :style="{backgroundColor: theme,width:'30px',height:'30px'}" @click="changeTheme(name)"></div>
        </div>
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
import dark from '!raw-loader!../../dist/themes/theme-dark.css'
import light from '!raw-loader!../../dist/themes/theme-light.css'
import Dropdown from '../components/dropdown'
import DropdownMenu from '../components/dropdown-menu'
import DropdownList from '../components/dropdown-list'
export default {
  name: 'ApinHeader',
  data() {
    return {
      theme: 'dark',
      themes: {
        dark,
        light
      },
      colors: {
        dark: '#202428',
        light: '#eee'
      },
      search: '',
      searchShow: false,
      settingShow: false,
      notice: []
    }
  },
  computed: {
    themeColor() {
      return Object.keys(this.themes)
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
    },
    changeTheme (theme) { // 改变主题
      this.theme = theme
      const styleEl = this.getThemeStyle()
      styleEl.innerHTML = this.themes[theme] || ''
    },
    getThemeStyle () { // 如果没有style则设置，如果有直接返回
      const themeId = 'theme'
      let styleEl = document.getElementById(themeId)
      if (styleEl) return styleEl
      styleEl = document.createElement('style')
      styleEl.id = themeId
      document.body.appendChild(styleEl)
      return styleEl
    }
  },
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownList.name]: DropdownList
  },
  created () {
    this.changeTheme('dark')
  }
}
</script>


