const app = getApp()

Page({
  data: {
    navHeight: app.globalData.navHeight, //导航栏高度
    navTop: app.globalData.navTop, //导航栏距顶部距离
    navObj: app.globalData.navObj, //胶囊的高度
    navObjWid: app.globalData.navObjWid, //胶囊宽度+距右距离
    banner: ['/img/banner.png', '/img/banner.png', '/img/banner.png', '/img/banner.png', '/img/banner.png'],
    band_list: [{
        items: [{
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
        ]
      },
      {
        items: [{
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
          {
            name: '品牌专区',
            icon: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
          },
        ]
      }
    ]
  },

  onLoad() {

  },
  onShow() {

  },
  //轮播图切换
  swiperChange: function (e) {
    if (e.detail.source == "touch" || e.detail.source == "autoplay") {
      this.setData({
        swiperCurrent: e.detail.current
      })
    }
  },
})