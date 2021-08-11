// pages/another/swiper-threeD/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 500, //  滑动动画时长1s
    swiperCurrent:0,
    banner_list: [
      "https://i.postimg.cc/76br1jzJ/susu1.jpg",
      'https://i.postimg.cc/WzKK73vQ/20210729155755.jpg',
      "https://i.postimg.cc/qRRLS16Q/susu0.jpg",
      'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
    ],
  },

  swiperChange(e) {
    if (e.detail.source == "touch" || e.detail.source == "autoplay") {      
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },

  
  onLoad: function (options) {

  },

  
  onShow: function () {

  },

  
})