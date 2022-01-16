// pages/dots/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    swiperCurrent: '',
    imgList: [{
      img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
    },
    {
      img: 'https://i.postimg.cc/Gm7KjGmN/111.jpg',
    },
    {
      img: 'https://i.postimg.cc/Bv28vfkg/222.webp',
    },
    {
      img: 'https://i.postimg.cc/65STLQNc/333.webp'
    },
    ]

  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /*
    * 图片预览
    * @param e
    */
  //  previewImage(e) {
  //   let currentUrl = e.currentTarget.dataset.src;
  //   let urls = this.data.imgList
  //   wx.previewImage({
  //     current: currentUrl, // 当前显示图片的http链接
  //     urls: urls// 需要预览的图片http链接列表
  //   })
  // },


})