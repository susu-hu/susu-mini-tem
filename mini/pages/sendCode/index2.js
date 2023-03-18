// pages/sendCode/index2.js
Page({
  onTabItemTap(item) {
    console.log(12312312)
    wx.showToast({
      title: '苏苏来了',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
  showDialog() { },
  onLoad: function (options) {
    console.log('onload执行的不')
    console.log(`%c苏苏 `, ` color:red;
        font-size:25px;
   `)
  },


  onShow: function () {
    console.log('onShow执行的不')
    //自定义的tabbar
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },


})