// pages/cssCase/nTabbar/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 定义菜单
    menu: [
      {
        // 菜单名称
        name: '三明治',
        // 阿里巴巴矢量图标库引入图标
        icon: 'icon-susua-2-53'
      },
      {
        name: '汉堡',
        icon: 'icon-susuhanbao'
      },
      {
        name: '沙冰',
        icon: 'icon-susubingsha'
      },
      {
        name: '可乐',
        icon: 'icon-susukele'
      },
    ],
    // 当前选中菜单的索引，默认为第一个菜单
    currIndex: 0,
  },
  // 菜单点击事件
  tabClick(e) {
    let { index } = e.currentTarget.dataset;
    this.setData({
      currIndex: index
    })
  }

})