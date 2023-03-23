// pages/cssCase/guardFollow/index.js
Page({
  data: {
    isShow: false,//是否隐藏引导对话，默认不隐藏
    flagList: ['点击右上角', '点击"添加到我的小程序"', '回到微信首页下拉列表中，找到我的小程序，打开苏苏的demo']
  },

  onShow() {
    // 判断缓存中是否保存该数据
    let flag = wx.getStorageSync('hasEnter');
    if (flag) {
      this.setData({
        isShow: true
      })
    }
  },
  handleRecord() {
    this.setData({
      isShow: true
    })
    // 存储数据
    wx.setStorageSync('hasEnter', true)
  }
})