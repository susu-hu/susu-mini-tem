// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.getSystemInfo({
      success: res => {
        let Height=res.windowHeight;
        this.globalData.Height=Height;
      },
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
