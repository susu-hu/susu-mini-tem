// pages/actualPage/scrollGap/index.js
const app=getApp();
Page({


  data: {
    currentIndex: 0,
    muted: true,
    activityAnimation: " https://static.51dh.com.cn/dbp/12/98/4494bd8a6e0fcd4a992f25a42bea28f8d1fb.mp4",
    windowWidth:app.globalData.windowWidth,
    windowHeight:app.globalData.windowHeight,
  },
  mutedTap() {
    this.setData({
      muted: !this.data.muted
    })
  },
  choiceCurrent(e) {
    let { currentIndex } = this.data;
    setTimeout(() => {
      currentIndex = e.detail.current;
      this.setData({
        currentIndex,
      })
    }, 300);
  },
  transition() {
    if (this.data.currentIndex == 0) {
      this.data.muted = false;
    }
    if (this.data.currentIndex == 1) {
      this.data.muted = true;
    }
    this.setData({
      muted: this.data.muted
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})