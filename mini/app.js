// app.js
App({
  onLaunch() {
    // 自定义头部
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        // 导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          // 胶囊按钮与右侧的距离=windowWidth-right+胶囊宽度
          navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight = navHeight;//导航栏总体高度
        this.globalData.navTop = navTop;//胶囊距离顶部距离
        this.globalData.navObj = menuButtonObject.height;//胶囊高度
        this.globalData.navObjWid = navObjWid;//胶囊宽度（包括右边距离)
        this.globalData.windowWidth = res.windowWidth;
        this.globalData.windowHeight = res.windowHeight;

      },
      fail(err) {
        console.log(err)
      }
    })
  },
  globalData: {
  }
})