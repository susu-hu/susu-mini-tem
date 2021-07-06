// pages/dots/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    swiperCurrent:'',
    goodsInfo:{
      imgList:[
        'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
        'https://i.postimg.cc/Gm7KjGmN/111.jpg',
        'https://i.postimg.cc/Bv28vfkg/222.webp',
        'https://i.postimg.cc/65STLQNc/333.webp'
      ]
    }

  },
  swiperChange:function(e){
    this.setData({
      swiperCurrent:e.detail.current
    })
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