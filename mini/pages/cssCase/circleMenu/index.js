// pages/cssCase/circleMenu/index.js
Page({
  data: {
    show_menu: false,//菜单是否激活
    // 菜单列表
    menu: [
      {
        icon: 'icon-susushutiao',//阿里巴巴矢量图标
        name: '薯条'//名称
      },
      {
        icon: 'icon-susutiantong',
        name: '甜筒'
      },
      {
        icon: 'icon-susutongluoshao',
        name: '铜锣烧'
      },
      {
        icon: 'icon-susuxiaoxiongruantang-46',
        name: '小熊软糖'
      },
      {
        icon: 'icon-susushiwutubiao-49',
        name: '提拉米苏'
      },
      {
        icon: 'icon-susunailao',
        name: '奶酪'
      },
      {
        icon: 'icon-susuhanbao',
        name: '汉堡'
      },
      {
        icon: 'icon-susupaofu-53',
        name: '泡芙'
      },
    ],
    currIndex: '',//当前选中菜单索引，默认为空，无选中
    menu_add: 'icon-susumakalong',//点击图标
  },
  // 菜单点击事件
  clickActive(e) {
    let { index } = e.currentTarget.dataset;
    if (this.data.currIndex == index || index == undefined) return;
    this.setData({
      currIndex: index
    })
  },
  // 点击按钮事件
  showMenu() {
    let { show_menu } = this.data;
    this.setData({
      show_menu: !show_menu,
      currIndex: ''
    })
  }
})