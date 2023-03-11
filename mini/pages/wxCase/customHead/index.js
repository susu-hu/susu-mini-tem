// pages/wxCase/customHead/index.js
const app = getApp();
Page({
  data: {
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
  },
  // 返回
  handleBackClick() {
    const pages = getCurrentPages();
    if (pages.length >= 2) {
      wx.navigateBack({
        delta: 1
      })
    } else {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
  // 回到首页
  handleHomeClick() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})