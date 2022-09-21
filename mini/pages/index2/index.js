// pages/index2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    swiperCurrent:'',
    banner_list:[
      'https://i.postimg.cc/Gm7KjGmN/111.jpg',
      'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
      'https://i.postimg.cc/Bv28vfkg/222.webp'
    ],

    navList:['全部','系列1','系列2','系列1','系列2','系列1','系列2'],
    type:0,
  },

  tabNav(e) {
    let {index} = e.currentTarget.dataset;
    if (this.data.type === index || index === undefined) {
        return false;
    } else {
        this.setData({
            type: index,
        })
    }
  },

  onLoad: function (options) {

  },

  onShow: function () {
   
  },
  //轮播图切换
  swiperChange:function(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
  },

  
  onReachBottom: function () {

  },

  
})