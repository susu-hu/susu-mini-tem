// pages/another/inputCode/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numList: []
  },
  getValue(e) {
    let value = e.detail.value;
    console.log(value)
    value.split(",")
    console.log(value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a, b;
    a = new Array(0, 1, 2, 3, 4);
    b = a.join('');
    console.log(b)

    var s = "abc,abcd,aaa";
    var ss = s.split(",");
    console.log(ss)
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