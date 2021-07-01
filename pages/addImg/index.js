// pages/photoDoor/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'https://i.postimg.cc/Bn1XpkSn/susu.jpg'
  },

 
  onLoad: function (options) {
  },
 
  onShow: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  //图片预览
  previewImg(e){
    let currentUrl = e.currentTarget.dataset.src;
    let urls=[currentUrl]
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: urls// 需要预览的图片http链接列表
    })
  },


})