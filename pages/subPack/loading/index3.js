// pages/subPack/loading/index3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alpha: [1, 1, 1, 1, 1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var _index = 0;
    var _alpha = self.data.alpha;
    var _speed = 300;
    var timer = setInterval(function () {
      var an_show = wx.createAnimation({});
      var an_hide = wx.createAnimation({});
      an_show.opacity(1).step({ duration: _speed });
      an_hide.opacity(0).step({ duration: _speed });
      _alpha[_index] = an_show;
      _alpha[_index == 0 ? 4 : _index - 1] = an_hide;
      self.setData({
        alpha: _alpha
      })
      _index = _index == 4 ? 0 : _index + 1;
    }, _speed);

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