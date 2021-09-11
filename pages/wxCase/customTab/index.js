// pages/wxCase/customTab/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [
      {
        name: "广场",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: 'icon-qiugouguanli',  //不同图标
        fn: 'gotoIndex'   //对应处理函数
      }, {
        name: "旧物",
        current: 0,
        style: 0,
        ico: 'icon-mingpianjia',
        fn: 'gotoOldGoods'
      }, {
        name: "发布",
        current: 0,
        style: 1,
        ico: '',
        fn: 'gotoPublish'
      }, {
        name: "招领",
        current: 0,
        style: 0,
        ico: 'icon-yikeappshouyetubiao35',
        fn: 'gotoRecruit'
      }, {
        name: "我的",
        current: 0,
        style: 0,
        ico: 'icon-wode',
        fn: 'gotoMine'
      },
    ],

  },
  gotoOldGoods: function(){
    wx.redirectTo({
      url: '/pages/oldgoods/oldgoods',
    });
  },
  gotoPublish:function(){
    wx.redirectTo({
      url: '/pages/publish/publish',
    });
  },
  gotoRecruit:function(){
    wx.redirectTo({
      url: '/pages/recruit/recruit',
    });
  },
  gotoMine:function(){
    wx.redirectTo({
      url: '/pages/mine/mine',
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