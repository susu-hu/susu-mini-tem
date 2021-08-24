// pages/subPack/canvasPoster/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    isCanDraw: false
  },
  // 获取用户信息
  getUserInfo(e) {
    if (e.detail.errMsg === 'getUserInfo:ok') {
      wx.setStorageSync('avatarUrl', e.detail.userInfo.avatarUrl)
      wx.setStorageSync('nickName', e.detail.userInfo.nickName)
      this.setData({
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl,
        isCanDraw: !this.data.isCanDraw
      })
    }
  },

  
  onLoad: function (options) {
    this.setData({
      nickName: wx.getStorageSync('nickName') || '',
      avatarUrl: wx.getStorageSync('avatarUrl') || ''
    })
  },

  
  onShow: function () {

  },

  
  onShareAppMessage: function () {

  },
  handleClose() {
    this.setData({
      isCanDraw: !this.data.isCanDraw
    })
  },
  createShareImage(){
    
  },
  
})