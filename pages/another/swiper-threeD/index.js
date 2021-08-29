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
  // swiperChange: function (e) { 
  //   if (e.detail.source == "touch" || e.detail.source == "autoplay") {       
  //     console.log(e.detail.current) 
  //     if(e.detail.current==0){ 
  //       let swiperError = this.data.swiperError 
  //       swiperError += 1 
  //       this.setData({swiperError: swiperError }) 
  //       if (swiperError >= 3) { //在开关被触发3次以上 
  //           console.error(this.data.swiperError) 
  //           this.setData({ swiperCurrent: this.data.preIndex });//，重置current为正确索引 
  //           this.setData({swiperError: 0}) 
  //       } 
  //     }else{ 
  //       this.setData({preIndex: e.detail.current }); 
  //       this.setData({swiperError: 0}) 
  //     } 
  //   } 
  // }, 
 
  
})