import SubMenu from '../menu/src/sub-menu'

SubMenu.install = function (Vue) {
  Vue.component(SubMenu.name, SubMenu)
}

export default SubMenu
