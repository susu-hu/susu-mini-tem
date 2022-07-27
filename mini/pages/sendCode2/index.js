// pages/sendCode2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'132****6678',
    Length:6,        //输入框个数
    isFocus:true,    //聚焦
    Value:"",        //输入的内容
    ispassword:true, //是否密文显示 true为密文， false为明文。
    isCan: false, //是否可以提交
    copyCode:'234238',
    currentIndex:0,
  },
  getVaule(e){
    var value = e.detail.value;
    this.setData({
      Value:value,
      isCan: value.length === 6,
    })
  },
  Tap(){
    this.setData({
      isFocus:true,
    })
  },

  /**
   * 长按复制
   */
  copy: function (e) {
    wx.setClipboardData({
      data: this.data.copyCode,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            // wx.showToast({
            //   title: '复制成功'
            // })
          }
        });
      }
    });
  },
 
  
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