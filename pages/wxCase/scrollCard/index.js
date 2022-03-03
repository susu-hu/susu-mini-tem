//index.js
Page({
  /* ScrollCard 开始 */
  data: {
    scrollCardToView: '',
    scrollCardTop: 0
  },
  scrollCardGotoUpper: function (e) {
    var _toview = this.data.scrollCardToView ? '' : e.currentTarget.dataset.toview;
    this.setData({
      scrollCardToView: _toview,
      scrollCardTop: 0
    });
  },
  scrollCardScroll: function (e) {
    console.log(e)
    this.setData({
      scrollCardToView: ''
    });
  },
  /* ScrollCard 结束 */

  /**
   * 生命周期函数--监听页面加载
   */
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