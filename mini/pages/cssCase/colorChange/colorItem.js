
// pages/functions/color/choice/choice.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    Height: app.globalData.Height,//屏幕高度
    colors:""//颜色集合
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      colors: JSON.parse(options.color).colors
    })
  },

  copycolor:function(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.color,
      success: res => {
        wx.showToast({
          title: e.currentTarget.dataset.color,
          duration: 1000,
          icon:"none"
        })
      }
    })
  }
})