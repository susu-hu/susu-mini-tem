const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: app.globalData.navHeight, //导航栏高度
    navTop: app.globalData.navTop, //导航栏距顶部距离
    navObj: app.globalData.navObj, //胶囊的高度
    navObjWid: app.globalData.navObjWid, //胶囊宽度+距右距离
    storeList: [{
        name: '苏苏的门店嘻嘻哈哈'
      },
      {
        name: '楚翘城母婴店'
      },
      {
        name: '卡us封ID哈沙发是砍价得更方便'
      },
    ],
    store_name: '', //店铺名称
    banner: [
      'https://i.postimg.cc/mgsKJGLw/susu1.jpg', 'https://i.postimg.cc/mgsKJGLw/susu1.jpg', 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      'https://i.postimg.cc/mgsKJGLw/susu1.jpg', 'https://i.postimg.cc/mgsKJGLw/susu1.jpg', 'https://i.postimg.cc/mgsKJGLw/susu1.jpg'
    ]

  },
  bindPickerChange: function (e) {
    this.setData({
      store_name: this.data.storeList[e.detail.value].name
    })
  },

  onLoad: function (options) {
    this.setData({
      store_name: this.data.storeList[0].name
    })
  },



  onShow: function () {

  },


  onReachBottom: function () {

  },

  
})