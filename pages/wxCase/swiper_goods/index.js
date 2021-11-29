// pages/wxCase/swiper_goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_list: [{
        goods: [{
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
          {
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
          {
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
        ]
      },
      {
        goods: [{
            img: 'https://i.postimg.cc/qRRLS16Q/susu0.jpg',
          },
          {
            img: 'https://i.postimg.cc/qRRLS16Q/susu0.jpg',
          },
          {
            img: 'https://i.postimg.cc/qRRLS16Q/susu0.jpg',
          },
        ]
      },
      {
        goods: [{
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
          {
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
          {
            img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
          },
        ]
      }
    ],
    g_list: [{
        img: 'https://i.postimg.cc/mgsKJGLw/susu1.jpg',
      },
      {
        img: 'https://i.postimg.cc/pXDp6RXq/susu3.jpg',
      },
      {
        img: 'https://i.postimg.cc/XJmpTvCD/susu2.jpg',
      },
      {
        img: 'https://i.postimg.cc/qRRLS16Q/susu0.jpg',
      },
      {
        img: 'https://i.postimg.cc/WzKK73vQ/20210729155755.jpg',
      },
      {
        img: 'https://i.postimg.cc/Bn1XpkSn/susu.jpg',
      },
      {
        img: 'https://i.postimg.cc/65STLQNc/333.webp',
      },
    ],
    d_num: 3,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let len = this.data.g_list.length;
    this.setData({
      d_num: len > 2 ? 3 : len
    })
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