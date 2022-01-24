// pages/actualPage/oneTop/index.js
Page({


  data: {
    no_scroll: true,
  },


  onLoad: function (options) {

  },


  onShow: function () {

  },

  goTop: function (e) {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  onPageScroll: function (e) {
    if (e.scrollTop > 200) {
      this.setData({
        no_scroll: false
      });
    } else {
      this.setData({
        no_scroll: true
      });
    }
  }
})