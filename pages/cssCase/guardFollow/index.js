// pages/cssCase/guardFollow/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let flag = wx.getStorageSync("hasEnter");
    if (flag) {
      this.setData({
        isShow: true
      })
    }
  },
  setEnter() {
    this.setData({
      isShow: true
    })
    wx.setStorageSync("hasEnter", true);
  },
})