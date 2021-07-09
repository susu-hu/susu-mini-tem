// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  

 
  onLoad: function (options) {
    wx.stopPullDownRefresh() //刷新完成后停止下拉刷新动效
  },

  onReady: function () {

  },


  onShow: function () {
   //自定义的tabbar
   if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },


  onHide: function () {

  },
  onUnload: function () {

  },


})