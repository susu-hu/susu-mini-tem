// pages/another/swiper-threeD/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperIndex: 0,
  },

  bindchange(e) {
    this.setData({ 
      swiperIndex: e.detail.current 
    })
  },

  
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  
})